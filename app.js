const puppeteer = require('puppeteer')
const fs = require('fs').promises

async function launchChrome() {
    const chrome =  await puppeteer.launch();
    const page = await chrome.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    
    await page.click("#clickme")
    const data = await page.$eval("#data", el => el.textContent)
    console.log(data);

    await chrome.close()
}

launchChrome();