import { expect, test } from '@playwright/test';

test('home page title', async ({ page }) => {
    await page.goto('https://wendy-shop.nexters.com/')
    await expect(page).toHaveURL('https://wendy-shop.nexters.com/');
    await page.waitForLoadState()
    await page.getByRole('button', { name: 'Collect' }).click();
    await page.getByRole('textbox', { name: '0000000000' }).fill("564051856");
    await page.waitForTimeout(6000)
    await page.getByRole('button', { name: 'Collect' }).first().click()
    await page.waitForTimeout(6000)
})