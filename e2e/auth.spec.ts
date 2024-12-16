import {test, expect} from "@playwright/test";

test.describe('Auth', () => {
  test('Open main page', async ({ page }) => {
    await page.goto('/');

    const header= page.getByTestId('app-title');

    expect(header).toBeDefined();
    expect(header).toHaveText('Hello App!');
  })
})
