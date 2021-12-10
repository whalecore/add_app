import React from "react";
<<<<<<< HEAD
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import OperationPage from "./pages/operation-page/operation-page";
import Header from "./components/header/Header";
import SignIn from "./components/sign-in/Sign-in";

// Функциональные состояния и интерфейс для передачи пропсов в нижние элементы

import { User, userStore } from "./store/userStore";

import resultsStore from "./store/resultsStore";
import HomePage from "./pages/homepage/HomePage";

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
        <Route exact path="/">
        <Redirect from="/" to="/add_app" />
           </ Route>
        <Route path="/add_app" component={HomePage} />
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
=======
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { observer } from "mobx-react";

import { userStore } from "./stores/userStore";

import HomePage from "./pages/home/Home.page";
import SignUp from "./components/signup/SignUp.component";
import Header from "./components/header/Header.component";
import OpsPage from "./pages/ops/Ops.page";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/add_app" />} />
        <Route path="/add_app" element={<HomePage />} />
        <Route path="/ops" element={userStore.userData.isLogged ? <OpsPage /> : <Navigate to="/signup" />} /> 
        <Route path="/signup" element={userStore.userData.isLogged ? <Navigate to="/add_app" /> : <SignUp />} />
      </Routes>
>>>>>>> refactor
    </Router>
  );
});

export default observer(App);
