class Student {
  private name: string;
  private courses: Course[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public registerCourse(course: Course): void {
    this.courses.push(course);
    course.addStudent(this);
  }

  public dropCourse(course: Course): void {
    this.courses.filter(c => c.getName() === course.getName());
    course.removeStudent(this);
  }

  public getCourses(): Course[] {
    return this.courses;
  }
}

class Course {
  private name: string;
  private students: Student[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public addStudent(student: Student): void {
    this.students.push(student);
  }

  public removeStudent(student: Student): void {
    this.students.filter(s => s.getName() === student.getName());
  }

  public getStudents(): Student[] {
    return this.students;
  }
}
