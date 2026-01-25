
import { test, expect } from '@playwright/test';

test('Alpha Page and Title', async ({ page }) => {
  await page.goto('https://hotel.salonpro.info/');


  await expect(page.getByRole('heading', { name: 'Search Your Room' })).toBeVisible()
});

test('Find Room Booking Page', async ({ page }) => {
  await page.goto('https://hotel.salonpro.info/');

  await page.getByRole('link', { name: 'Find A Room' }).click();

  await expect(
    page.getByRole('heading', { name: 'Search Your Room' })
  ).toBeVisible();


  await page.locator("//input[@placeholder='Check In']").click();


  while (!(await page.locator("text=January 2026").isVisible())) {
    await page.locator("button:has-text('›')").click();
  }
  await page.locator("button:has-text('22')").click();

  await page.locator("//input[@placeholder='Check In']").click();


  while (!(await page.locator("text=January 2026").isVisible())) {
    await page.locator("button:has-text('›')").click();
  }
  await page.locator("button:has-text('26')").click();


  await page.locator("//input[@placeholder='Adults']").fill("2");
  await page.locator("//input[@placeholder='Adults']").press("Tab");
  await page.locator("//input[@placeholder='Children']").fill("1");
  await page.locator("//input[@placeholder='Children']").press("Tab");
  await page.getByRole('button', { name: 'Search' }).click();


  await page.waitForLoadState("networkidle");
  const allCard = page.locator("#level_sum_all");
  await expect(allCard).toBeVisible();


  const rawText = (await allCard.innerText()).trim();
  console.log("All Card Raw Text:", rawText);

});

test('expolor section test', async ({ page }) => {

  await page.goto('https://hotel.salonpro.info/');

  const explore = page.locator('text=Explore More').first();
  await explore.scrollIntoViewIfNeeded();
  await explore.click();

  await expect(
    page.getByRole('heading', { name: 'About Us', level: 1 }).first()
  ).toBeVisible();


})
