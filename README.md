# Тестовое задание на позицию QA-инженера с сайта https://play.hezzl.com

Текст заданий можно посмотреть [здесь](problems.md)

Ответы на тестовые задания [тут](answers.md)

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
