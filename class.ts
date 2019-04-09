interface ICar {
  honk(): void;
  accelerate(speed: number): void;
  getSpeed(): number;
}

class Car implements ICar {
  private _speed: number = 0;

  constructor(private _name: string) {}

  public honk(): void {
    console.log("Boooo!");
  }

  public accelerate(speed: number): number {
    return this._speed + speed;
  }

  public getSpeed(): number {
    return this._speed;
  }
}

const car: ICar = new Car("Santafe");

console.log(car.getSpeed());
console.log(car.honk());
console.log(car.accelerate(10));
