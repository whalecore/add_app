import { makeObservable, action, observable } from "mobx";

export interface UserInterface {
  email?: string;
  password?: string;
  isLogged?: boolean;
}

const userStores = () => {
  return makeObservable(
    {
      userData: {} as UserInterface,
      signin({ email, password }: UserInterface): void {
        if (email && password) {
          this.userData = {
            email: email,
            password: password,
            isLogged: true,
          };
        }
      },
      signout(): void {
        this.userData = {};
      },
    },
    {
      userData: observable,
      signin: action.bound,
      signout: action.bound,
    }
  );
};

export const userStore = userStores();
