const puppeteer = require('puppeteer')
const fs = require('fs').promises

async function launchChrome() {
    const chrome =  await puppeteer.launch();
    const page = await chrome.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    
    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".info strong")).map(strong => strong.textContent)
    });
    await fs.writeFile('storage/names.txt', names.join("\r\n"))

    await chrome.close()
}

launchChrome();