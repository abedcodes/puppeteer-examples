const puppeteer = require('puppeteer')
const fs = require('fs').promises

async function launchChrome() {
    const chrome =  await puppeteer.launch();
    const page = await chrome.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    
    const photos = await page.$$eval('img', imgs => {
        return imgs.map(img => img.src)
    })

    for (const photo of photos) {
        const imagepage = await page.goto(photo)
        await fs.writeFile("storage/"+photo.split("/").pop(), await imagepage.buffer())
    }

    await chrome.close()
}

launchChrome();