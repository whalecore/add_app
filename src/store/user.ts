import { makeAutoObservable } from "mobx";
import { configure } from "mobx";

configure({ enforceActions: "never" });

interface User {
  userEmail: string;
  password: string;
  loggedIn: boolean;
}

class UserStore {
  user: User = {
    userEmail: "",
    password: "",
    loggedIn: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  login(email: string, password: string): void {
    this.user.userEmail = email;
    this.user.password = password;
    this.user.loggedIn = true;
    console.log(this.user);
  }

  logout(): void {
    this.user.userEmail = "";
    this.user.password = "";
    this.user.loggedIn = false;
  }
}

export const userStore = new UserStore();
