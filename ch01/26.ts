class Person {
  private phones: Phone[];

  public constructor() {
    this.phones = Array.from({ length: 2 }, () => new Phone());
  }

  public getPhone(index: number): Phone | null {
    if (index === 0 || index === 1) {
      return this.phones[index];
    }
    return null;
  }
}

class Phone {}
