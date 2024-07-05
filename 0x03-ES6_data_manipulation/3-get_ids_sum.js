export default function getStudentIdsSum(data) {
  const initValue = 0;

  return data.reduce((accumulator, current) => accumulator + current.id, initValue);
}
