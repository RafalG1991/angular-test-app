import {test, expect} from "@playwright/test";

test.describe('Auth', () => {
  test('Open main page', async ({ page }) => {
    await page.goto('/');

    const header= page.getByTestId('app-title');

    expect(header).toBeDefined();
    expect(header).toHaveText('Hello App!');
  });

  test('Clicks login button gets welcome message', async () => {
    await page.goto('/');

    const button = page.getByTestId('login-button');
    const welcome = page.getByTestId('welcome-message');

    await expect(welcome).not.toBeVisible();

  });
})
