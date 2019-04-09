class Person<T> {
  private _name: T;
  // contructor 인자대로 name type 정해짐
  constructor(name: T) {
    this._name = name;
  }
}

const kevin = new Person("Kevin");

interface People {
  name: string;
  age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

const people: People = {
  name: "KU",
  age: 100
};

getProperty(people, "age");
getProperty(people, "address"); // 에러
