const puppeteer = require('puppeteer')

async function launchChrome() {
    const chrome =  await puppeteer.launch();
    const page = await chrome.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await page.screenshot({path: "amazing.png"})

    await chrome.close()
}

launchChrome();