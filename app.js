const puppeteer = require('puppeteer')

async function launchChrome() {
    const chrome =  await puppeteer.launch();
    const page = await chrome.newPage();
    await page.goto("https://en.wikipedia.org/wiki/JavaScript")
    await page.screenshot({path: "javascript-wikipedia.png", fullPage: true})

    await chrome.close()
}

launchChrome();