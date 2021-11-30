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
|__ src/
    |-- App.tsx
    |-- index.tsx
    |-- react-app-env.d.ts
    |__ components/
        |__ calc-card/
            |-- CalcCard.tsx
        |__ entry-point/
            |-- EntryPoint.tsx
        |__ header/
            |-- Header.tsx
        |__ info-card/
            |-- AddInfo.tsx
        |__ loadingModal/
            |-- LoadingModal.tsx
        |__ results-card/
            |-- ResultsCard.tsx
        |__ sign-in/
            |-- SignIn.tsx
        |__ steps-card/
            |-- StepsCard.tsx
    |__ pages/
        |__ homepage/
            |-- HomePage.tsx
        |__ operation-page/
            |-- operation-page.tsx
    |__ public/
        |-- favicon.ico
        |-- index.html
        |-- robots.txt
    |__ store/
        |-- resultsStore.ts
        |-- userStore.ts
    |__ utils/
        |-- mask-email.ts
```
