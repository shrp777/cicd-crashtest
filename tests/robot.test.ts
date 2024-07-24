import { describe, expect, test } from "@jest/globals";
import Robot from "../src/classes/Robot";

describe("Robot", () => {
  test("sayHello should return 'Hello World'", () => {
    expect(new Robot().sayHello("World")).toStrictEqual("Hello World");
  });
  test("sum(1,1) should return 2'", () => {
    expect(new Robot().sum(1, 1)).toStrictEqual(2);
  });
  test("sum(1,2,3,4,5) should return 15'", () => {
    expect(new Robot().sum(1, 2, 3, 4, 5)).toStrictEqual(15);
  });
});
