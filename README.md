# Domprog

## Описание

В репозитории представлено 4 тестовых задания: один проект на Angular (папка book-app) и три js файла с функциями.

## Установка приложения

Для запуска проекта требуется склонировать репозиторий локально и перейти в раздел проекта

```bash
cd book-app
```
Для установки зависимостей проекта выполните следующую команду:

```bash
npm install
```

В проекте доступны следующие скрипты:


ng: Запускает Angular CLI.
start: Запускает сервер разработки.
```bash
npm start
```
build: Собирает проект для продакшн.
```bash
npm run build
```

watch: Собирает проект и следит за изменениями в режиме разработки.
```bash
npm run watch
```

test: Запускает тесты.
```bash
npm test
```

lint: Проверяет код на соответствие стилю с помощью ESLint.
```bash
npm run lint
```

lint:fix: Проверяет код и автоматически исправляет ошибки с помощью ESLint.
```bash
npm run lint:fix
```

format: Форматирует код с помощью Prettier.
```bash
npm run format
```

format:check: Проверяет форматирование кода с помощью Prettier.
```bash
npm run format:check
```

## Запуск функций

Ввести команду node и имя файла, чтобы запустить js код 

```bash
node findMissing
node findUnique
node reversePrint
```