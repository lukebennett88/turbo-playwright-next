import { expect, test } from "@playwright/test";

test("homepage has a button on it", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const button = await page.getByRole("button", {
    name: /Boop/i,
  });

  await expect(button).toBeVisible();
});
