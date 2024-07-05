export default function updateStudentGradeByCity(data, city, newGrades) {
  return data.filter((x) => x.location === city).map((i) => {
    const updateGrade = newGrades.find(({ studentId }) => studentId === i.id);
    return { ...i, grade: updateGrade ? updateGrade.grade : 'N/A' };
  });
}
