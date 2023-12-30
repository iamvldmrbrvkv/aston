// creating counter object
const counter1 = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  getCount() {
    return this.count;
  },
};

class Counter {
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}

const counter2 = new Counter();

console.log("counter2", counter2);

function counterMaker() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

const counter3 = counterMaker();

console.log("counter3", counter3);

const counter4 = Object.create(counter1);

console.log("counter4", counter4);

const emptyObject = {};

const counter5 = Object.assign(emptyObject, counter1);

console.log("counter5", counter5);

// copy counter1

// deep copy
const copy1 = JSON.parse(JSON.stringify(counter1));

console.log("copy1", copy1);

// not deep
const copy2 = { ...counter1 };

console.log("copy2", copy2);

//not deep
const copy3 = Object.assign({}, counter1);

console.log("copy3", copy3);

// deep
const copy4 = structuredClone(copy1);

console.log("copy4", copy4);

// makeCounter function
function fdMakeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const feMakeCounter = function () {
  let count = 0;
  return function () {
    return count++;
  };
};

let count = 0;

const feArrowMakeCounter = () => () => count++;

const counter = feArrowMakeCounter();

console.log("count", count);

console.log("counter", counter());

console.log("counter", counter());

console.log("count", count);

// reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("aston"));

// deep equal
function deepEqual(obj1, obj2) {
  // сравниваем если объекты null или undefined, если это так то будет true
  if (obj1 === obj2) {
    return true;
  }

  // проверяем если оба объекта являются объектами
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  // сравниваем длинну массива ключей объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // следующее решение рекурсивно сравнивать ключи и значения я не понимаю пока. это чат предложил такой вариант. нужно будет разобраться как это работает. я обошелся решением которое ниже
  /* for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  } */

  // переводим объекты в json строки и сравниваем их
  if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
    return false;
  }

  // если все проверки прошли успешно то тру
  return true;
}

const obj1 = { here: { is: "on", other: "3" }, object: { a: "1", b: "2" } };
const obj2 = { here: { is: "on", other: "3" }, object: { a: "1", b: "2" } };
console.log(deepEqual(obj1, obj2));
