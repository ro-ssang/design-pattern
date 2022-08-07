class Person {
  private homePhone?: Phone;
  private officePhone?: Phone;

  public setHomePhone(phone: Phone): void {
    this.homePhone = phone;
  }

  public setOfficePhone(phone: Phone): void {
    this.officePhone = phone;
  }

  public getHomePhone(): Phone | null {
    if (!this.homePhone) {
      return null;
    }
    return this.homePhone;
  }

  public getOfficePhone(): Phone | null {
    if (!this.officePhone) {
      return null;
    }
    return this.officePhone;
  }
}

class Phone {}
