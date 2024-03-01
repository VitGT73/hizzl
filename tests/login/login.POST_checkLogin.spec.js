import { test, expect } from "@playwright/test";

const campaignId = process.env.CAMPAIGN_ID;
const basePath = `/auth/v1/game/${campaignId}`;
const email = process.env.EMAIL;


test.describe(`Коллекция Login`, async () => {
  await test("Метод CheckLogin", async ({ request }) => {
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
      expect.soft(response.status()).toBe(200);
    });

    await test.step("Проверяем, что скорость ответа от сервера менее 200ms", async () => {
      expect.soft(responseTime).toBeLessThan(200);
    });

    const body = await response.json();
    await test.step("Проверяем параметра token в ответе и сохраняем его в глобальную переменную", async () => {
      expect(body).toHaveProperty("accessToken");
      process.env.ACCESS_TOKEN = body.accessToken;
      console.log('CheckLogin: ', body.accessToken)
      console.log('ACCESS_TOKEN: ', process.env.ACCESS_TOKEN)
    });
  });

});
