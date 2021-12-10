import { makeObservable, action, observable } from "mobx";

const opsStores = () => {
  return makeObservable(
    {
      numsArray: [] as number[],
      filteredNumsArray: [] as number[],
      setNumbers(nums: number[]): void {
        this.numsArray = nums;
      },
      copyArrayToFiltered(): void {
        this.filteredNumsArray = this.numsArray;
      },
      clearFilteredArray(): void {
        this.filteredNumsArray = [];
      },
      sumNumbers(): number {
        const sum = this.numsArray.reduce((acc, val) => {
          return acc + val;
        }, 0);
        return sum;
      },
      addNumber(num: number): void {
        this.numsArray.push(num);
      },
      cleaArray(): void {
        this.numsArray = [];
      },
      sortAsc(): void {
        this.numsArray.sort((a, b) => {
          return a - b;
        });
      },
      sortDesc(): void {
        this.numsArray.sort((a, b) => {
          return b - a;
        });
      },
      greaterThan(num: number): number[] {
        this.copyArrayToFiltered();
        return this.filteredNumsArray = this.numsArray.filter((a) => a > num);
      },
      lesserThan(num: number): number[] {
        this.copyArrayToFiltered();
        return this.filteredNumsArray = this.numsArray.filter((a) => a < num);
      },
    },
    {
      numsArray: observable,
      filteredNumsArray: observable,
      setNumbers: action.bound,
      addNumber: action.bound,
      cleaArray: action.bound,
      sortAsc: action.bound,
      sortDesc: action.bound,
      lesserThan: action.bound,
      greaterThan: action.bound,
      sumNumbers: action.bound
    }
  );
};

export const opsStore = opsStores();
