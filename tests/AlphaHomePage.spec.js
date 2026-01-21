
import { test, expect } from '@playwright/test';

test('Alpha Page and Title', async ({ page }) => {
  await page.goto('https://hotel.salonpro.info/');


  await expect(page.getByRole('heading', { name: 'Search Your Room' })).toBeVisible()
});

test('Find Room Booking Page', async ({ page }) => {
  await page.goto('https://hotel.salonpro.info/');


  await page.getByRole('link', { name: 'Find A Room' }).click();


  await expect(page.getByRole('heading', { name: 'Search Your Room' })).toBeVisible();
});
