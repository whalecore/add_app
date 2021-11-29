import React from "react";
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import OperationPage from "./pages/operation-page/operation-page";
import EntryPoint from "./components/entry-point/EntryPoint";
import Header from "./components/header/Header";
import SignIn from "./components/sign-in/Sign-in";

// Функциональные состояния и интерфейс для передачи пропсов в нижние элементы

import { User, userStore } from "./store/userStore";

import resultsStore from "./store/resultsStore";

// Объявляем переменные из состояния и экспортируем их из файла для дальнейшего использования

export const resStore = resultsStore();

export const store = userStore();

const App = observer((): JSX.Element => {
  // Обрабатываем вход в аккаунт через встроенный метод состояния юзера
  const handleSubmit = (user: User) => {
    store.signin(user);
  };
  // Обрабатываем выход из аккаунта через встроенный метод состояния юзера
  const handleSignOut = (user: User) => {
    store.signout(user);
  };

  return (
    <Router>
      {/* Передаем метод для выхода в дочерний компонент, чтобы использовать его из него 
          и булеву переменную для динамического рендера кнопок "Войти/Выйти" */}
      <Header logOut={handleSignOut} currentUser={store.userData} />
      {/* Навигация */}
      <Switch>
        {/* Первая страница */}
        <Route exact path="/" component={EntryPoint} />
        {/* Если бзер залогинен, повторно на страницу авторизации его не пустим, 
            вместо этого отправим на страницу сложения, в ином случае - отправляем
            на страницу авторизации с передачей через пропсы метода для входа */}
        <Route path="/signin">
          {store.userData.isLogged ? (
            <Redirect to="/add" />
          ) : (
            <SignIn onSubmit={handleSubmit} />
          )}
        </Route>
        <Route path="/add">
            {/* на страницу сложения пускаем только в случае, если юзер залогинился */}
          {store.userData.isLogged ? <OperationPage /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
});

export default App;
