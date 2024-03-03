# Тестовое задание на позицию QA-инженера с сайта https://play.hezzl.com

Текст заданий можно посмотреть [здесь](problems.md)

Ответы на тестовые задания [тут](answers.md)

1. Клонируем репозиторий
```bash
git clone https://github.com/VitGT73/hizzl.git

```
2. Переходим в папку hizzl:
```bash
cd hizzl
```
3. Устанавливаем все зависимости:
```bash
npm install
```
Если необходимо установить `Newman`, то дополнительно выполняем следующие две команды:

  * установка `newman`:
  ```bash
  npm install -g newman
  ```
  * установка `allure для newman`:
  ```bash
  npm install -g newman-reporter-allure
  ```


Запуск тестов на JS:

```bash
npm test
```

Генерация allure-отчета:
```bash
allure generate
```
Сгенерированный отчет лежит здесь:
   ```bash
   ./allure-report/index.html
   ```

Запуск коллекций Postman:

- коллекции Init:
```bash
newman run ./postman/INIT.postman_collection.json -e ./postman/hezzl.com.postman_environment.json -r cli,allure
```
- коллекции Login:
```bash
newman run ./postman/LOGIN.postman_collection.json -e ./postman/hezzl.com.postman_environment.json -r cli,allure

```
Запуск тех же коллекций с помощью аллиаса:
```bash
npm run newman:init
npm run newman:login
```
