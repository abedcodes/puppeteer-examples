const puppeteer = require('puppeteer')
const fs = require('fs').promises

async function launchChrome() {
    const chrome =  await puppeteer.launch();
    const page = await chrome.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    
    await page.type("#ourfield", "blue")
    await Promise.all([page.click('#ourform button'), page.waitForNavigation()])
    const message = await page.$eval('#message', p => p.textContent)
    console.log(message);

    await chrome.close()
}

launchChrome();