import {
  getStudents,
  setStudents,
  setStudentScore,
  getLessonNames,
} from "../testing";

describe("Testing utility functions", () => {
  let mockStudents;

  beforeEach(() => {
    mockStudents = [
      { id: 1, name: "John", score: 80, lessons: ["Math", "Science"] },
      { id: 2, name: "Jane", score: 85, lessons: ["History", "English"] }
    ];
    setStudents([...mockStudents]); // inject ke module
  });

  test("getStudents mengembalikan list student", () => {
    expect(getStudents()).toEqual(mockStudents);
  });

  test("setStudentScore berhasil update score student", () => {
    const result = setStudentScore(1, 95);
    expect(result).toBe(true);
    expect(getStudents().find((s) => s.id === 1).score).toBe(95);
  });

  test("setStudentScore dengan studentId yang tidak ada", () => {
    const result = setStudentScore(999, 100);
    expect(result).toBe(false);
  });

  test("getLessonNames mengembalikan list lesson (nested array)", () => {
    const lessons = getLessonNames(getStudents());
    expect(lessons).toEqual([
      ["Math", "Science"],
      ["History", "English"],
    ]);
  });
});
