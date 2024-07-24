export default class Robot {
  sayHello(someone: string): string {
    return `Hello ${someone}`;
  }

  sum(a: number, ...b: Array<number>): number {
    return a + b.reduce((prev, curr) => prev + curr);
  }
}
