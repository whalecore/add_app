# Приложение для сложения чисел
---
### Установка
```bash
git clone https://github.com/whalecore/add_app.git
npm i
```
или 

```bash
git clone https://github.com/whalecore/add_app.git
yarn
```
После установки всех зависимостей для приложения запустить сервер можно при помощи комант `npm start` или `yarn start`.

### Сборка

```bash
yarn build
```
```bash
npm build
```

### Структура проекта
- [**public**](public)
- [**src**](src)
    - [**common**](src/common)
        - [**utils**](src/common/utils)
    - [**components**](src/components)
        - [**button**](src/components/button)
        - [**header**](src/components/header)
        - [**loading-modal**](src/components/loading-modal)
        - [**ops-item**](src/components/ops-item)
            - [**ops-field**](src/components/ops-item/ops-field)
        - [**ops-iter**](src/components/ops-iter)
        - [**signup**](src/components/signup)
    - [**pages**](src/pages)
        - [**home**](src/pages/home)
        - [**ops**](src/pages/ops)
    - [**stores**](src/stores)
