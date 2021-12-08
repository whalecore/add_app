import { makeObservable, action, observable } from "mobx";

const opsStores = () => {
  return makeObservable(
    {
      numsArray: [] as number[],
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
    },
    {
      numsArray: observable,
      addNumber: action.bound,
      removeNumber: action.bound,
      cleaArray: action.bound,
      sortAsc: action.bound,
      sortDesc: action.bound,
    }
  );
};

export const opsStore = opsStores();
