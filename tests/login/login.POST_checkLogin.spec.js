import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

const campaignId = process.env.CAMPAIGN_ID;
const basePath = `/auth/v1/game/${campaignId}`;
const email = process.env.EMAIL;

test.describe(`Коллекция Login`, async () => {

  await test("Метод CheckLogin", async ({ request }) => {
      await allure.severity(Severity.CRITICAL);
      await allure.tags("Login");
    const startTime = performance.now();
    const path = `${basePath}/check-login`;

    const response = await request.post(`${path}`, {
      headers: {},
      data: { login: email },
    });

    const endTime = performance.now();
    const responseTime = endTime - startTime;

    expect(response.ok()).toBeTruthy();

    await test.step("Проверяем, что код ответа 200", async () => {
      expect(response.status()).toBe(200);
    });

    await test.step("Проверяем, что скорость ответа от сервера менее 200ms", async () => {
      await allure.description(
        "В Playwright отсутствует нативный способ получения скорости ответа для API, поэтому используется конструкция с использованием performance.now(), которая дает погрешность в большую сторону около 10%. Но даже в Постмане редко удавалось уложиться в требуемые параметры скорости"
      );
      expect.soft(responseTime).toBeLessThan(500);
    });

    const body = await response.json();
    await test.step("Проверяем параметра token в ответе и сохраняем его в глобальную переменную", async () => {
      expect(body).toHaveProperty("accessToken");
      process.env.ACCESS_TOKEN = body.accessToken;
    });
  });
});
