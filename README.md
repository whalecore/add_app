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

Все компоненты, за исключением `OperationPage` (доступна в `pages/operation-page/`), находятся в папке `components`. Структура файлов и папок указана ниже:
```
add_app/
|-- tsconfig.json
|-- package.json
|-- yarn.lock
|-- README.md
|-- src/
    |-- App.tsx
    |-- index.tsx
    |-- react-app-env.d.ts
    |-- components/
        |-- calc-card/
            |-- CalcCard.tsx
        |-- entry-point/
            |-- EntryPoint.tsx
        |-- header/
            |-- Header.tsx
        |-- info-card/
            |-- AddInfo.tsx
        |-- loadingModal/
            |-- LoadingModal.tsx
        |-- results-card/
            |-- ResultsCard.tsx
        |-- sign-in/
            |-- SignIn.tsx
        |-- steps-card/
            |-- StepsCard.tsx
    |-- pages/
        |-- operation-page/
            |-- operation-page.tsx
    |-- store/
        |-- resultsStore.ts
        |-- userStore.ts
    |-- utils/
        |-- mask-email.ts
```