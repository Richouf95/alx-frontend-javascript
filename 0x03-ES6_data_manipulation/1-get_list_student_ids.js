export default function getListStudentIds(data) {
  const result = [];

  if (Array.isArray(data)) {
    data.map((i) => {
      const { id } = i;
      return result.push(id);
    });

    return result;
  }

  return result;
}
