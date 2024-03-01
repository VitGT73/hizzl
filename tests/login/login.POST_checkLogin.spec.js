import { test, expect } from "@playwright/test";

const campaignId = process.env.CAMPAIGN_ID;
const path = `/auth/v1/game/${campaignId}/check-login`;
const email = process.env.EMAIL;
let response;

test.describe(`Коллекция Login`, async () => {

  const startTime = performance.now();
  await test("Метод Init", async ({ request }) => {
    response = await request.post(`${path}`, {
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
      expect.soft(responseTime).toBeLessThan(500);
    });

    const body = await response.json();
    await test.step("Проверяем параметра token в ответе и сохраняем его в глобальную переменную", async () => {
      expect(body).toHaveProperty("accessToken");
      process.env.ACCESS_TOKEN = body.accessToken;
    });
  });
});
