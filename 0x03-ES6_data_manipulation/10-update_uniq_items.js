export default function updateUniqueItems(theMap) {
  if (!(theMap instanceof Map)) throw new Error('Cannot process');

  theMap.forEach((elementValue, elementKey) => elementValue === 1 && theMap.set(elementKey, 100));
}
