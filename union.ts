interface Driver {
  name: string;
  age: number;
}

interface Car {
  brand: string;
  wheel: number;
}

// type guard
function isPerson(arg: any): arg is Driver {
  return arg.name !== undefined;
}

// Union 타입으로 처리
function hello(obj: Driver | Car) {
  if (isPerson(obj)) {
    obj.age;
  } else {
    obj.wheel;
  }
}
