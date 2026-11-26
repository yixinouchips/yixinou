export function safeAssetUrl(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/#/g, '%23');
}
