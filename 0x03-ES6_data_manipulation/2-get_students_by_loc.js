export default function getStudentsByLocation(data, city) {
  return data.filter((x) => x.location === city);
}
