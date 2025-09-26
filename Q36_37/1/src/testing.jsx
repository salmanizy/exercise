let students = [];

export const getStudents = () => {
  return students;
};

export const setStudents = (data) => {
  students = data;
};

export const setStudentScore = (studentId, score) => {
  const selectedStudent = students.find((student) => student.id === studentId);
  if (selectedStudent) {
    selectedStudent.score = score;
    return true;
  }
  return false;
};

export const getLessonNames = (students) => {
  return students.map((student) => student.lessons);
};