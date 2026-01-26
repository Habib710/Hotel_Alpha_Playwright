import { test, expect } from '@playwright/test';

test('Resiter Page', async ({ page }) => {

    await page.goto('https://hotel.salonpro.info/');

    await page.locator("//a[normalize-space()='Register']").click();


    await expect(
        page.getByRole('heading', { name: 'Create an account' })
    ).toBeVisible();

    await page.locator("//input[@placeholder='Full Name']").fill("Habib2");
    await page.locator("//input[@placeholder='Email Address']").fill("habib22@gmail.com");

    await page.locator("//input[@placeholder='01xxxxxxxxx']").fill("01571033601");

    await page.locator("//button[normalize-space()='Register']").click();
    await page.locator("//input[@placeholder='OTP']").fill("01571033601");
    await page.locator("//button[normalize-space()='Verify']").click();


    await expect(page.getByRole('heading', { name: /Bookings/i })).toBeVisible();


});