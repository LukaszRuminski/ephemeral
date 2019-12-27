import {
    puppeteerInit,
    page,
    APP_URL,
    mobileViewport,
    testTimeout
} from "../config/puppeteer-config"

puppeteerInit()

describe("Go to Teams page", () => {
    it("Desktop", async () => {
        await page.waitForSelector("#__next")
        await page.click("a[href='/team']")

        await page.waitForSelector("span[class*='AceBrandName']")
        const url = await page.url()
        expect(url).toEqual(`${APP_URL}/team/`)
        const brandName = await page.$eval("span[class*='AceBrandName']", el => el.innerText)
        expect(brandName).toEqual(`ACE TEAM`)
    }, testTimeout)

    it("Mobile", async () => {
        await page.setViewport(mobileViewport)
        await page.waitForSelector("#__next")
        await page.click("img[class*='Headerstyles__AceIconMenu']")
        await page.waitForSelector("div[class*=Headerstyles__AceHiddenMenu] > a[href='/team']")
        await page.click("div[class*=Headerstyles__AceHiddenMenu] > a[href='/team']")

        await page.waitForSelector("span[class*='AceBrandName']")
        const url = await page.url()
        expect(url).toEqual(`${APP_URL}/team/`)
        const brandName = await page.$eval("span[class*='AceBrandName']", el => el.innerText)
        expect(brandName).toEqual(`ACE TEAM`)
    }, testTimeout)
})

describe("Check if there is 7 cards", () => {
    it("Desktop", async () => {
        await page.goto(`${APP_URL}/team/`)
        await page.waitForSelector("#__next")

        const divsCounts = await page.$$eval("div[class*='TeamMembersCardstyles__Card']", divs => divs.length)
        expect(divsCounts).toEqual(7)
    }, testTimeout)
})
