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



### КОЛЛЕКЦИЯ INIT
Метод **Init**

```{{baseUrl}}/gw/v1/game/:campaignId/init```

Настраиваем автотесты (вкладка Tests в postman)
1. Сервер отдал статус 200
2. Записываем в переменную timeZone значение ключа time из тела ответа
3. Проверяем наличие ключа data в теле ответа
4. Проверяем наличие auth внутри объекта data

### КОЛЛЕКЦИЯ LOGIN
Метод **CheckLogin**

```{{baseUrl}}/auth/v1/game/:campaignId/check-login```

**Body:** ```{"login": {{email}}}```


Настраиваем автотесты (вкладка Tests в postman):
1. Сервер отдал статус 200
2. Записываем в переменную accessToken значение параметра accessToken из ответа
3. Проверяем, что скорость ответа от сервера менее 200ms

Метод **ConfirmCode**

```{{baseUrl}}/auth/v1/game/:campaignId/confirm-code```

**apiKey:** ```Authorization = {{accessToken}}```

**Body:** ```{"code": {{password}}}```

Настраиваем автотесты (вкладка Tests в postman):
1. Сервер отдал статус 200
2. Проверяем, что скорость ответа от сервера менее 200ms

## БОНУСНОЕ ЗАДАНИЕ ДЛЯ ПРОДВИНУТЫХ
Переведите автотесты из Postman на JavaScript. А если еще интегрируете их с Allure, мы сделаем вам оффер мгновенно! :)

### ВАЖНО!
1. Перед отправкой результата, убедитесь, что постман коллекция отрабатывает
2. Если результат теста в постман не прошел, нет смысла отправлять результат
3. Примеры вызовов можно посмотреть в play.hezzl.com
4. Результат отправить в виде ссылки на **Google Drive**, в котором должен быть **zip** архив с **postman** коллекцией и **environment**, дополнить файлом ```readme.md```, в котором описать результат работы
Первые три задания являются обязательными, последнее опциональное
* (2-е и 3-е к автоматизации отношение не имеют, поэтому я их сюда не копировал)


## РЕШЕНИЕ

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
