/*
 * Display labels for the brand filter.
 *
 * The product record keeps the full manufacturer name, because that is what belongs on the
 * part page and in the structured data. The brand rail is scanned rather than read, so it
 * shows the short form buyers look for. Anything without an entry falls back to upper case,
 * which is what gives the rail a uniform look.
 */

const LABELS = {
  AMD: 'XILINX',
  'Analog Devices': 'ADI',
  'Microchip Technology': 'MICROCHIP',
  STMicroelectronics: 'ST',
  'Texas Instruments': 'TI',
  'NXP Semiconductors': 'NXP',
  'SK hynix': 'SK HYNIX',
  'ams OSRAM': 'AMS OSRAM',
  'Lattice Semiconductor': 'LATTICE',
  'Cirrus Logic': 'CIRRUS LOGIC',
};

export function brandLabel(brand) {
  const b = String(brand || '').trim();
  return LABELS[b] || b.toUpperCase();
}
