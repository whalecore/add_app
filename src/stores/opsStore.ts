import { makeObservable, action, observable } from "mobx";

const opsStores = () => {
  return makeObservable(
    {
      numsArray: [] as number[],
      filteredNumsArray: [] as number[],
      copyArrayToFiltered(): void {
        this.filteredNumsArray = this.numsArray;
      },
      addNumber(num: number): void {
        this.numsArray.push(num);
      },
      removeNumber(num: number): void {
        this.numsArray.splice(this.numsArray.indexOf(num));
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
      lesserThan(num: number) {
        this.filteredNumsArray = this.numsArray.filter((a) => a > num);
      },
      greaterThan(num: number) {
        this.filteredNumsArray = this.numsArray.filter((a) => a < num);
      },
    },
    {
      numsArray: observable,
      addNumber: action.bound,
      removeNumber: action.bound,
      cleaArray: action.bound,
      sortAsc: action.bound,
      sortDesc: action.bound,
      lesserThan: action.bound,
      greaterThan: action.bound,
    }
  );
};

export const opsStore = opsStores();
