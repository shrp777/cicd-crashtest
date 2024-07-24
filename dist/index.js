"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Robot_1 = __importDefault(require("./classes/Robot"));
const hal9000 = new Robot_1.default();
const helloResult = hal9000.sayHello("World");
const sumResult = hal9000.sum(1, 1);
console.log("say hello = ", helloResult);
console.log("sum  = ", sumResult);
