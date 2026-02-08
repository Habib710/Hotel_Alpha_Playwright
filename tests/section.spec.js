import { test, expect } from '@playwright/test';

export class AddtoCardObject {

    constructor(page) {
        this.page = page;
        this.locator = new HomePageObjects(page);
    }

    test('Alpha Page and Title', async ({ page }) => {
        await page.goto('https://hotel.salonpro.info/');


        await expect(page.getByRole('heading', { name: 'Search Your Room' })).toBeVisible()
    });

test('Alpha ', async ({ page }) => {
    await page.goto('https://hotel.salonpro.info/');


    await expect(page.getByText('© ALPHA All Rights Reserved. Developed By HRSOFTBD')).toBeVisible()

});


}

