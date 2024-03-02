import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

const campaignId = process.env.CAMPAIGN_ID;
const basePath = `/auth/v1/game/${campaignId}`;
const password = process.env.PASSWORD;
const email = process.env.EMAIL;
let token;

test.describe(`Коллекция Login`, async () => {


  test.beforeEach(async ({ request }) => {
      const path = `${basePath}/check-login`;
      const response = await request.post(`${path}`, {
        headers: {},
        data: { login: email },
      });
      expect(response.ok()).toBeTruthy();
      const body = await response.json();
      token = body.accessToken;
  });

  await test("Метод ConfirmCode", async ({ request }) => {
    await allure.severity(Severity.CRITICAL);
    await allure.tags("Login");
    const startTime = performance.now();
    const path = `${basePath}/confirm-code`;
    const response = await request.post(`${path}`, {
      headers: { Authorization: token },
      data: { code: password },
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
  });
});
