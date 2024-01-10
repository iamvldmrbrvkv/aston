// 1. O(log n), O(n^2), O(n log(n)), O(nk)

// 3.

const person = {
  name: "Vladimir",
  sayHi() {
    console.log("hi");
  },
};

const person2 = {
  name: "Cheburashka",
  sayBye() {
    console.log("Bye");
  },
};

person.logInfo = function () {
  console.log("very interesting info");
};

person.logInfo(); // доступно из person

Object.setPrototypeOf(person2, person); // устанавливаем прототип для person2

console.log(Object.getPrototypeOf(person2));

person2.logInfo(); // теперь метод доступен из person2

person2.sayHi(); // другие методы person также доступны из person2

// 4.

class Person {
  constructor(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  set setName(newName) {
    this.name = newName;
  }
}

const vladimir = new Person("Vladimir");

console.log(vladimir.getName);

vladimir.setName = "Cheburashka";

console.log(vladimir.getName);

class PersonThree extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  get getAge() {
    return this.age;
  }
}

const personThree = new PersonThree("Ilon Mask", 89);

console.log(personThree.getName);

console.log(personThree.getAge);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
let result = [];
const firstSum = (arr, total) => {
  // запускаем внешний цикл для каждого элемента
  for (let i = 0; i < arr.length; i++) {
    // для каждого элемента следующим за элементом во внешнем цикле запускаем внутренний цикл
    for (let j = i + 1; j < arr.length; j++) {
      // если сумма текущего элемента в внешнем цикле и элемента во внутреннем цикле равна total, то мы нашли пару, запушили ее в результирующий массив result и вышли из лупов
      if (arr[i] + arr[j] === total) {
        return result.push(arr[i], arr[j]);
      }
    }
  }
};

firstSum(arr, total);

console.log(result);

// сложность O(n^2) так как для каждого элемента запускается 2 прохода
