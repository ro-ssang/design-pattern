class Professor {
  private student?: Student;

  public setStudent(student: Student): void {
    this.student = student;
  }

  public advise(): void {
    if (!this.student) return;
    this.student.advise('상담 내용은 여기에...');
  }
}

class Student {
  private advisor?: Professor;

  public setAdvisor(advisor: Professor) {
    this.advisor = advisor;
  }

  public advise(msg: string): void {
    console.log(msg);
  }
}
