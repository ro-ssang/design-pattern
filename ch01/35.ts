abstract class HomeAppliancies {
  private serialNo: string;
  private manufacturer: string;
  private year: number;

  public abstract turnOn(): void;
  public abstract turnOff(): void;
}

class Washer extends HomeAppliancies {
  public turnOn(): void {
    console.log('Washer is on');
  }

  public turnOff(): void {
    console.log('Washer is off');
  }
}
