import Robot from "./classes/Robot";

const hal9000 = new Robot();
const helloResult = hal9000.sayHello("World");

const sumResult = hal9000.sum(1, 1);

console.log("say hello = ", helloResult);
console.log("sum  = ", sumResult);
