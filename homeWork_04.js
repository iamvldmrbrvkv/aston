// Массивы неправильные потому массивы это объекты, чьи прототипы имеют методы для изменения длинны этих массивов, хотя по задумке массивы должны быть неизменной длины.

// неявная привязка
/* function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {
  item: "some value",
  logger: logger,
};

obj.logger(); */

// явная привязка call
/* function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj); */

// явная привязка apply
/* function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.apply(obj); */

// явная привязка bind
/* function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const func = logger.bind(obj)

func() */

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

function newBind(thisArg, ...args) {
  // thisArg это this с которым будет вызвана внутренняя функция через метод apply
  // ...args это массив изначальных опциональных параметров с которыми будет вызыватся внутренняя функция
  const fn = this; // переменная fn будет хранить ссылку this внешней функции, то есть this будет функция logger, так как вызов будет logger.newBind(). Это необходимо чтобы внутренняя возвращаемая функция имела доступ к this внешней функции, то есть к logger
  return function (...innerArgs) {
    // ...innerArgs это массив опциональных параметров с которыми я могу вызвать мою внутренню функцию повторно
    const combinedArgs = args.concat(innerArgs); // объединяем массивы опциональных параметров изначальных и параметров с которыми я могу повторно вызывать внутреннюю функцию
    return fn.apply(thisArg, combinedArgs); // внутренняя функция вызывает logger и с момошью метода call привязывает вызов к thisArg который мы указали в параметрах, при желании можно указать дополнительные аргументы
  };
}

Function.prototype.bind = newBind;

const newBindFunc = logger.bind(obj);

newBindFunc();
