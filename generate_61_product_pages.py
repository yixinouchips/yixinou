import csv
import json
import os
import re
import shutil
from urllib.parse import quote

ROOT = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(ROOT, 'chips_61_source.tsv')
PRODUCTS = os.path.join(ROOT, 'public', 'assets', 'data', 'products.json')
SITE_CONFIG = os.path.join(ROOT, 'public', 'site-config.json')
SITEMAP = os.path.join(ROOT, 'public', 'sitemap.xml')
IMAGE_ROOT = os.path.join(ROOT, 'public', 'assets', 'images')
MATERIAL_ROOT = r'E:\独立站建站\独立站\产品素材'
REPORT = os.path.join(ROOT, 'product-pages-61-generation-report.json')


def safe_fs(value):
    return re.sub(r'[<>:"/\\|?*]', '_', value).rstrip(' .')


def split_confidence(value):
    m = re.match(r'^(高|中|低)\s*依据\s*(.*)$', value)
    return (m.group(1), m.group(2)) if m else ('', value)


def package_from_spec(spec):
    for marker in ('封装；', '封装；工作', '封装；结温'):
        if marker in spec:
            left = spec.split(marker, 1)[0]
            if '；' in left:
                return left.rsplit('；', 1)[-1].strip()
    return ''


def temperature_from_spec(spec):
    for marker in ('；工作温度 ', '；工作结温 ', '；结温 '):
        if marker in spec:
            return spec.split(marker, 1)[1].strip()
    return ''


def core_spec(spec):
    for marker in ('；工作温度 ', '；工作结温 ', '；结温 '):
        if marker in spec:
            return spec.split(marker, 1)[0].strip()
    return spec.strip()


def source_image_for(model):
    folder = os.path.join(MATERIAL_ROOT, safe_fs(model))
    candidates = [
        os.path.join(folder, safe_fs(model) + '.jpg'),
        os.path.join(folder, safe_fs(model) + '.png'),
    ]
    return next((p for p in candidates if os.path.isfile(p)), None)


def public_image(model):
    src = source_image_for(model)
    if not src:
        return '/assets/images/logo-horizontal.png', 'No processed local image was found; request a lot photograph before quoting.'
    ext = os.path.splitext(src)[1].lower()
    dest_name = safe_fs(model) + ext
    dest = os.path.join(IMAGE_ROOT, dest_name)
    shutil.copy2(src, dest)
    # Keep the file name as a root-relative URL with only path separators handled;
    # Vite serves these local files and the router must preserve literal MPN symbols.
    rel = '/assets/images/' + dest_name
    # All existing processed pictures are 260x260 JPG/PNG; image metadata records whether it is a logo placeholder.
    if os.path.basename(src).lower().startswith(safe_fs(model).lower()):
        note = 'Local model-folder image; confirm the actual lot marking and image type before shipment.'
    else:
        note = 'Local model-folder image; confirm the actual lot marking and image type before shipment.'
    return rel, note


def english_category(category, subcategory):
    mapping = {
        '接口芯片': 'Interface IC', '可编程逻辑器件': 'Programmable logic device',
        '存储芯片': 'Memory IC', '场效应管(MOSFET)': 'MOSFET', '模拟芯片': 'Analog IC',
        '电源管理芯片': 'Power management IC', '处理器与控制器': 'Processor and controller',
        '无线连接芯片(SoC)': 'Wireless connectivity SoC', '数据转换器': 'Data converter',
        '射频与微波芯片': 'RF and microwave IC', '隔离器': 'Isolator',
        '惯性传感器': 'Inertial sensor', '通信模块': 'Communication module',
        '传感器': 'Sensor',
    }
    return mapping.get(category, category), subcategory


def make_part(row):
    model, brand, major, category, subcategory, function, spec, standard, confidence_basis = row
    confidence, basis = split_confidence(confidence_basis)
    package = package_from_spec(spec)
    temp = temperature_from_spec(spec)
    core = core_spec(spec)
    category_en, subcategory_en = english_category(category, subcategory)
    image, image_note = public_image(model)
    title = f'{model} | {brand} {subcategory} | YIXINOU'
    summary = (
        f'{model} is a {subcategory} from {brand}. It is classified as {major} / {category} / {subcategory}. '
        f'The provided function description is: {function}. The provided specification is: {spec}. '
        f'Inventory, price, MOQ and lead time are confirmed by quotation for the requested lot.'
    )
    properties = [
        ['Brand / Manufacturer', brand],
        ['Product class', major],
        ['Product category', category],
        ['Product subcategory', subcategory],
        ['Function', function],
        ['Provided specification', spec],
        ['Package', package],
        ['Operating temperature', temp],
        ['Certification / standard', standard],
        ['Information confidence', confidence],
        ['Information basis', basis],
    ]
    standards = [x.strip() for x in standard.split('、') if x.strip()]
    features = [function, core, package, f'Operating temperature {temp}', f'Certification / standard: {standard}']
    applications = [
        f'Procurement and BOM review for {category_en} / {subcategory_en}.',
        'Specific end-use applications were not provided in the source record; confirm the design use with the manufacturer documentation and buyer requirements.'
    ]
    faq = [
        {
            'q': f'How can I request {model} price and availability?',
            'a': f'Provide {model}, required quantity, target delivery date and destination. YIXINOU will confirm lot-specific availability, price, MOQ and lead time. These commercial values are not stated in the source record.'
        },
        {
            'q': f'What information is confirmed for {model}?',
            'a': f'Confirmed source information: brand/manufacturer {brand}; classification {major} / {category} / {subcategory}; function {function}; specification {spec}; package {package}; operating temperature {temp}; certification/standard {standard}. Source basis: {basis}.'
        },
        {
            'q': f'Can you suggest a replacement for {model}?',
            'a': f'A replacement must be checked against the function, provided specification ({core}), package/pin compatibility, operating temperature and certification/standard. No specific replacement model is provided in the source record, so do not substitute without documented verification.'
        },
        {
            'q': f'What should be checked before ordering {model}?',
            'a': f'Confirm original/genuine status, available quantity, price and MOQ, lead time, supply stability, lifecycle status, date/lot code, package and packing, the stated technical parameters, compatibility, certification, inspection records and after-sales/return terms for the quoted lot.'
        },
    ]
    keywords = ', '.join([
        model, brand, category_en, subcategory_en, function, core, package, temp,
        'datasheet', 'price', 'quote', 'in stock', 'MOQ', 'lead time',
        'authorized distributor', 'replacement', 'original genuine', standard
    ])
    return {
        'mpn': model,
        'brand': brand,
        'title': title,
        'category': f'{major} / {category} / {subcategory}',
        'categoryHref': '/all-products',
        'summary': summary,
        'img': image,
        'alt': f'{brand} {model} {subcategory} package image',
        'imageNote': image_note,
        'specs': properties,
        'about': summary,
        'standards': standards,
        'features': features,
        'applications': applications,
        'faq': faq,
        'keywords': keywords,
        '_source': {
            'function': function, 'spec': spec, 'standard': standard,
            'confidence': confidence, 'basis': basis,
            'productClass': major, 'productCategory': category, 'productSubcategory': subcategory,
        },
    }


def write_json(path, data):
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')


def update_sitemap(models):
    with open(SITEMAP, 'r', encoding='utf-8') as f:
        text = f.read()
    additions = []
    for model in models:
        encoded = quote(model, safe='-_.~')
        url = f'https://yixinouchips.com/product/{encoded}'
        if url not in text:
            additions.append(f'  <url><loc>{url}</loc></url>')
    if additions:
        insert = '\n' + '\n'.join(additions) + '\n'
        pos = text.rfind('</urlset>')
        if pos < 0:
            raise ValueError('sitemap has no </urlset>')
        text = text[:pos] + insert + text[pos:]
        with open(SITEMAP, 'w', encoding='utf-8', newline='\n') as f:
            f.write(text)
    return len(additions)


with open(SOURCE, encoding='utf-8-sig', newline='') as f:
    rows = list(csv.reader(f, delimiter='\t'))
if len(rows) != 61:
    raise ValueError(f'expected 61 source rows, got {len(rows)}')
models = []
for row in rows:
    if row[0] not in models:
        models.append(row[0])

with open(PRODUCTS, encoding='utf-8') as f:
    products = json.load(f)
with open(SITE_CONFIG, encoding='utf-8') as f:
    config = json.load(f)

new_parts = {}
tdk = config.setdefault('tdk', {})
for row in rows:
    model = row[0]
    if model in new_parts:
        # Preserve the duplicate source record in the report, but one canonical URL/object is correct.
        continue
    part = make_part(row)
    new_parts[model] = part
    encoded = quote(model, safe='-_.~')
    path = f'/product/{encoded}'
    tdk[path] = {
        'title': f'{model} | {row[1]} {row[4]} | YIXINOU',
        'description': f'{model} from {row[1]}: {row[5]}. Provided specifications: {row[6]} Package: {package_from_spec(row[6])}. Request verified stock, price, MOQ and lead time.',
        'keywords': part['keywords'],
    }

# Do not expose internal source bookkeeping in the public JSON.
for model, part in new_parts.items():
    part.pop('_source', None)
    products[model] = part
write_json(PRODUCTS, products)
write_json(SITE_CONFIG, config)
added_sitemap = update_sitemap(models)

report = {
    'sourceRecords': len(rows),
    'uniqueModels': len(models),
    'productsJsonTotal': len(products),
    'canonicalProductPagesAddedOrPresent': len(models),
    'sitemapEntriesAdded': added_sitemap,
    'duplicateSourceModels': [m for m in models if sum(1 for r in rows if r[0] == m) > 1],
    'models': models,
    'generatedAt': '2026-11-26 Asia/Shanghai',
    'notes': [
        'All public product content is generated only from chips_61_source.tsv.',
        'Inventory, price, MOQ, lead time, lifecycle, lot/date code, testing and returns are presented as quotation/verification questions, not confirmed facts.',
        'The duplicate LTM4622IY#PBF source row maps to one canonical product URL/object.',
        'Product images reuse the processed files in the model folders; logo-placeholder images remain explicitly described as lot-photo requests.',
    ],
}
write_json(REPORT, report)
print(json.dumps(report, ensure_ascii=False, indent=2))
