# Решения тестовых заданий на позицию QA-инженера с сайта https://play.hezzl.com

Текст заданий можно посмотреть [здесь](problems.md)

### Задание №1
- Файлы коллекций и окружения находятся в папке `./postman`
- Коллекции можно запустить из командной строки используя `newman`.

- Для запуска коллекции Init необходимо выполнить команду:
```bash
newman run ./postman/INIT.postman_collection.json -e ./postman/hezzl.com.postman_environment.json -r cli,allure
```
или воспользоваться аллиасом:
```bash
npm run newman:init
```

- Для запуска коллекции Login необходимо выполнить команду:
```bash
newman run ./postman/LOGIN.postman_collection.json -e ./postman/hezzl.com.postman_environment.json -r cli,allure
```
или воспользоваться аллиасом:
```bash
npm run newman:login
```

### Задание №2
```sql
SELECT *
FROM table_name
WHERE campaignId = 145602
   AND date >= '2023-12-31'
   AND date < '2024-01-31';
```

### Задание №3

Примеры позитивных и негативных тест-кейсов на регистрацию пользователя в игре Хезлмания по email в формате pdf - [тут](./docs/hezzl-%20тестовый%20набор.pdf)



###  БОНУСНОЕ ЗАДАНИЕ ДЛЯ ПРОДВИНУТЫХ


1. Создаем папку на локальном компьютере:

 ```bash
mkdir hizzl
```
2. Клонируем репозиторий
```bash
git clone https://github.com/VitGT73/hizzl.git .

```
3. Устанавливаем все зависимости:
```bash
npm install
```
4. Запускаем тесты:
```bash
npm test
```
5. Генерируем allure-отчет:
```bash
allure generate
```
6. Посмотреть отчет можно в
   ```bash
   ./allure-report/index.html
   ```
