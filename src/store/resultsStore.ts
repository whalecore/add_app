import { action, makeObservable, observable } from "mobx";

export default function resultsStore() {
  return makeObservable(
    {
      numbers: [] as number[],
      // поправить, чтобы принимал список из состояния внутри CalcCard
      addNumbers(newNumber: number): number[] {
        return (this.numbers = [...this.numbers, newNumber]);
      },
      sumNumbers() {
        return this.numbers.reduce((acc, val) => {
          return acc + val;
        }, 0);
      },
      sortNumbersAsc() {
        return this.numbers.sort((a, b) => {
          return a - b;
        });
      },
      sortNumbersDesc() {
        return this.numbers.sort((a, b) => {
          return b - a;
        });
      },
    },
    {
      numbers: observable,
      addNumbers: action.bound,
      sumNumbers: action.bound,
      sortNumbersAsc: action.bound,
      sortNumbersDesc: action.bound,
    }
  );
}
