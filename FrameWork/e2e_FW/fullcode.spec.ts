import { test, expect } from '@playwright/test'

test.describe('Roles page Test - 001 ', () => {

    test('CMS login', async ({ page }) => {

        await page.goto('https://testcms.reco-claims.ca/Login')
        await page.getByRole('textbox', { name: 'Username' }).fill('info+programmanager@xlgclaims.com')
        await page.getByRole('textbox', { name: 'Password' }).fill('Test1234!')
        await page.getByRole('button', { name: 'Login' }).click()
        await page.waitForURL('https://testcms.reco-claims.ca/')
        await page.locator('[class="rz-menu rz-profile-menu"]').waitFor({ state: 'visible', timeout: 60000 })
        await expect(page.locator('[class="rz-menu rz-profile-menu"]')).toBeVisible()

        // test('Administration visible  ', async ({ page }) => {
        await expect(page.getByText('Administrator')).toBeVisible()
        await page.getByText('Administrator').click()
        // const admin = new Admin(page)
        // admin.verifyAdmin()
        //})

        // test('Roles section   -    , async ({ page }) => {

        await page.getByRole('link', { name: 'Roles' }).waitFor({ state: 'visible', timeout: 60000 })
        await page.getByRole('link', { name: 'Roles' }).click()

        // added to common.ts

        //  await page.locator('span').filter({hasText:'Roles'}).first().waitFor({state:'visible', timeout:60000}) ---- doubt on locator
        // await page.locator('span').filter({ hasText: 'Roles' }).first().click()   ---- doubt on locator

        // })




        // test('Roles page - addApplicationRole popup  -   visible and navigation ', async ({ page }) => {

        await page.getByRole('heading', { name: 'Roles' }).waitFor({ state: 'visible',timeout: 60000 })
        await page.getByRole('button', { name: 'Add' }).click()
        await page.getByText('Add Application Role', { exact: true }).waitFor({ state: 'visible',timeout: 60000 })
        await expect( page.locator('[name="Name"]')).toBeVisible()
        await expect (page.getByRole('button',{name:'Save'})).toBeVisible()
        await expect (page.getByRole('button',{name:'cancel'})).toBeVisible()
        await expect(page.locator('[class="rzi rzi-times"]')).toBeVisible()

        // })



    })


})

