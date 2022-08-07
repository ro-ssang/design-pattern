type Grade = 'A+' | 'A0' | 'B+' | 'B0' | 'C+' | 'C0' | 'D+' | 'D0' | 'F';

class Student {
  private name: string;
  private transcripts: Transcript[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public addTranscript(transcript: Transcript): void {
    this.transcripts.push(transcript);
  }

  public getCourses(): Course[] {
    return this.transcripts.map((transcript) => transcript.getCourse());
  }
}

class Course {
  private name: string;
  private transcripts: Transcript[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public addTranscript(transcript: Transcript): void {
    this.transcripts.push(transcript);
  }

  public getStudents(): Student[] {
    return this.transcripts.map((transcript) => transcript.getStudent());
  }
}

class Transcript {
  private student: Student;
  private course: Course;
  private grade?: Grade;
  private date?: string;

  public constructor(student: Student, course: Course) {
    this.student = student;
    student.addTranscript(this);
    this.course = course;
    course.addTranscript(this);
  }

  public getStudent(): Student {
    return this.student;
  }

  public getCourse(): Course {
    return this.course;
  }

  public setGrade(grade: Grade): void {
    this.grade = grade;
  }

  public getGrade(): Grade | null {
    if (!this.grade) {
      return null;
    }
    return this.grade;
  }

  public setDate(date: string): void {
    this.date = date;
  }

  public getDate(): string | null {
    if (!this.date) {
      return null;
    }
    return this.date;
  }
}

const rosa = new Student('rosa');

const designPattern = new Course('Design Pattern');
const database = new Course('Database');

const transcript1 = new Transcript(rosa, designPattern);
transcript1.setDate('2022-08-07');
transcript1.setGrade('A+');

const transcript2 = new Transcript(rosa, database);
transcript2.setDate('2022-08-07');
transcript2.setGrade('B0');

const courses = rosa.getCourses();
console.log('rosa가 수강하고 있는 강의 목록');
courses.forEach((course, index) => console.log(index + 1, course.getName()));

console.log('----------------------------------------');

const students = designPattern.getStudents();
console.log('Design Pattern을 수강하고 있는 학생 명단');
students.forEach((student, index) => console.log(index + 1, student.getName()));
