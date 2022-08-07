class Person {
  private owns: Car[] = [];

  public setOwns(own: Car): void {
    this.owns.push(own);
  }

  public getOwns(): Car[] {
    return this.owns;
  }
}

class Car {}
