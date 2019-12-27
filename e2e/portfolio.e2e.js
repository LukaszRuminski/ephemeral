import {
    puppeteerInit,
    page,
    APP_URL,
    mobileViewport,
    testTimeout
} from "../config/puppeteer-config"

puppeteerInit(mobileViewport)

describe("Go to Portfolio page", () => {
    it("", async () => {
        await page.waitForSelector("#__next")
        await page.click("img[class*='Headerstyles__AceIconMenu']")
        await page.waitForSelector("div[class*=Headerstyles__AceHiddenMenu] > a[href='/portfolio']")
        await page.click("div[class*=Headerstyles__AceHiddenMenu] > a[href='/portfolio']")

        await page.waitForSelector("span[class*='H1styles__MainStyle']")
        const url = await page.url()
        expect(url).toEqual(`${APP_URL}/portfolio/`)
        const brandName = await page.$eval("span[class*='H1styles__MainStyle']", el => el.innerText)
        expect(brandName).toEqual(`PORTFOLIO`)
    }, testTimeout)
})
