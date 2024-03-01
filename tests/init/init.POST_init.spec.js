import { test, expect } from "@playwright/test";

const campaignId = process.env.CAMPAIGN_ID;

const path = `/gw/v1/game/${campaignId}/init`;

test.describe(`Коллекция Init`, async () => {
  test("Метод Init", async ({ request }) => {
    const response = await request.post(`${path}`, {
      headers: {},
      data: {},
    });
    expect(response.ok()).toBeTruthy();

    await test.step("Проверяем, что код ответа 200", async () => {
      expect.soft(response.status()).toBe(200);
    });

    const body = await response.json();
    await test.step("Проверяем параметра time в ответе и сохраняем его в глобальную переменную", async () => {
      expect.soft(body).toHaveProperty("time");
      process.env.TIME_ZONE = body["time"];
    });

    await test.step("Проверяем наличие параметра data в ответе", async () => {
      expect.soft(body).toHaveProperty("data");
    });

    await test.step("Проверяем наличие параметра auth в data в ответе", async () => {
      expect.soft(body.data).toHaveProperty("auth");
    });
  });
});
