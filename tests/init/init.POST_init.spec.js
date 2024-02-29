import { test, expect } from "@playwright/test";

const campaignId = process.env.CAMPAIGN_ID;

const path = `/gw/v1/game/${campaignId}/init`;


test.describe(`Коллекция Init`, async () => {
  test("Метод Init", async ({ request }) => {
    const response = await request.post(`${path}`, {
      headers: {},
      data: {},
    });
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body["time"]).toBeDefined();
    process.env.TIME_ZONE = body["time"];

    expect(body.data).toBeDefined();
    expect(body.data.auth).toBeDefined();
  });
});
