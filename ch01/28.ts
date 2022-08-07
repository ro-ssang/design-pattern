class Student {
  private name: string;
  private courses: Course[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public registerCourse(course: Course): void {
    this.courses.push(course);
  }

  public dropCourse(course: Course): void {
    this.courses.filter((c) => c.getName() === course.getName());
  }

  public getCourses(): Course[] {
    return this.courses;
  }
}

class Course {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
