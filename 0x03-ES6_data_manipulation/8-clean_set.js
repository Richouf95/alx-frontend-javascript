export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || !startString) return '';

  const result = Array.from(set).filter((word) => word.startsWith(startString));

  return result.map((word) => word.slice(startString.length)).join('-');
}
