function hello(constructFn: Function) {
  constructFn.prototype.hello = function() {
    console.log("hello");
  };
}

// function 개발해서 factory style로 사용하는 것이 더 일반적

function helloFactory(show: boolean) {
  if (show) {
    return hello;
  } else {
    return null;
  }
}

// method decorator
function editable(canBeEditable: boolean) {
  // editable parameter 사용을 위해 factory pattern 사용
  return function(
    target: any,
    propsName: string,
    description: PropertyDescriptor
  ) {
    console.log("Target: ", target);
    console.log("Property Name: ", propsName);
    console.log("Description: ", description);
    description.writable = canBeEditable;
  };
}

// property decorator
function writable(canBeWritable: boolean) {
  return function(target: any, propsName: string): any {
    console.log("Target: ", target);
    console.log("Property Name: ", propsName);

    return {
      writable: canBeWritable
    };
  };
}

// parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("Method Name: ", methodName);
  console.log("Param Index: ", paramIndex);
}

class Tester {
  @writable(true)
  public name: string = "Kevin";
  private _age: number;

  constructor(@printInfo age: number) {
    this._age = age;
  }

  // option 값에 따라 달라짐
  @editable(true)
  hello(@printInfo message: string) {
    console.log("Hello ", this.name, " ", message);
  }
}

const t = new Tester();

t.hello();
t.hello = function() {
  console.log("World");
};
t.hello();

console.log(t.name);
t.name = "Ivy";
console.log(t.name);
