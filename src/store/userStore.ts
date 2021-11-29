import { action, makeObservable, observable } from "mobx";

// Типизируем абстрактного пользователя для передачи в аргументы методов и функций
export interface User {
  email: string;
  password: string;
  isLogged: boolean;
}

// Хранилище состояний и методов для манипуляции юзером.
// Всего имеет два метода (экшна) и одно наблюдаемое значение:
// Наблюдаемое значение - userData, в нем в виде полей объекта храним пароль, почту 
// и в виде булева значения - в аккаунте он или нет.
// Два стандартных метода - вход и выход, первый сохраняет почту, пароль и меняет поле isLogged в объекте userData на true.
// Второй очищает объект и возвращает значение false полю isLogged.

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
