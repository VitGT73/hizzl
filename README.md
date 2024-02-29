# Тестовое задание на позицию QA-инженера с сайта https://play.hezzl.com

### ВВОДНЫЕ
1. Игра Хезлмания расположена по адресу https://play.hezzl.com
2. В консоли браузера можно посмотреть вызовы методов
3. Оранжевым цветом обозначены переменные, которые нужно подтягивать из Environment

### НАСТРОЙКА ENVIRONMENT
1. email = "test@hezzl.com"
2. password = "123456"
3. baseUrl = https://api-prod.hezzl.com
4. campaignId = 145602
5. accessToken = string
6. timeZone = string

## ЗАДАНИЕ 1

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

1. Создаем репозиторий на ```github```
2. Создаем репозиторий на локальной машине:
 ```bash
echo "# hizzl" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:VitGT73/hizzl.git
git push -u origin main
```
3. Заполняем файл ```Readme.md``` (этот файл)
4. Создаем файл ```.gitignore```
