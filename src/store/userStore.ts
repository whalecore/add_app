import { makeObservable, observable, action } from "mobx";

export interface User {
  email: string;
  password: string;
  isLogged: boolean;
}

export function userStore() {
  return makeObservable(
    {
      userData: {
        email: "",
        password: "",
        isLogged: false,
      },
      signin(user: User) {
        this.userData = {
          email: user.email,
          password: user.password,
          isLogged: true,
        };
      },
      signout(user: User) {
        this.userData = {
          email: "",
          password: "",
          isLogged: false,
        };
      },
    },
    {
      userData: observable,
      signin: action.bound,
      signout: action.bound,
    }
  );
}

// import { makeAutoObservable } from "mobx";

// export interface User {
//   email: string;
//   password: string;
//   isLogged: boolean;
// }

// export class UserStore {
//   userData = {
//     email: "",
//     password: "",
//     isLogged: false,
//   };

//   constructor() {
//     makeAutoObservable(this);
//   }

//   signin = (user: User): void => {
//     this.userData = {
//       email: user.email,
//       password: user.password,
//       isLogged: true,
//     };
//     console.log(this.userData);
//   };

//   signout = (user: User): void => {
//     this.userData = {
//       email: "",
//       password: "",
//       isLogged: false,
//     };
//   };
// }
