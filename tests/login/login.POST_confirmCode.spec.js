import { test, expect } from "@playwright/test";

const campaignId = process.env.CAMPAIGN_ID;
const basePath = `/auth/v1/game/${campaignId}`;
const password = process.env.PASSWORD;
const token = process.env.ACCESS_TOKEN;
console.log('ConfirmCode: ', token);

test.describe(`Коллекция Login`, async () => {
  await test("Метод ConfirmCode", async ({ request }) => {


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
      expect.soft(response.status()).toBe(200);
    });

    await test.step("Проверяем, что скорость ответа от сервера менее 200ms", async () => {
      expect.soft(responseTime).toBeLessThan(500);
    });
  });
});
