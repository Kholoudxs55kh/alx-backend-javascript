export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (Array.isArray(arr)) {
    return arr
      .filter((ele) => ele.location === city)
      .map((ele) => {
        const grades = newGrades.filter((grade) => grade.studentId === ele.id);
        const grade = grades[0] ? grades[0].grade : 'N/A';
        return { ...ele, grade };
      });
  }
  return [];
}
