import { test, expect } from '@playwright/test';



test('Alpha Page and Title', async ({ page }) => {
    await page.goto('https://hotel.salonpro.info/');


    await expect(page.getByRole('heading', { name: 'Search Your Room' })).toBeVisible()
});

test('section part test', async ({ page }) => {
    await page.goto('https://hotel.salonpro.info/');

});





