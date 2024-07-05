export default function createInt8TypedArray(arrayLength, itemPosition, newValue) {
  if (itemPosition < 0 || itemPosition >= arrayLength) throw Error('Position outside range');

  const newBuffer = new ArrayBuffer(arrayLength);
  const newView = new DataView(newBuffer, 0, arrayLength);
  const newArray = new Int8Array(newBuffer);
  newArray[itemPosition] = newValue;

  return newView;
}
