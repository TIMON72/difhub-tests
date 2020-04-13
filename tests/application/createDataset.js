const { By, until } = require('selenium-webdriver')
const config = require('../../config.json')

module.exports = {
    createDataset: (driver) => createDataset(driver)
}

async function createDataset(driver) {
    console.log(config.space2 + "enter: tests->application->createDataset.js")
    await driver.get(config.baseUri + "view/organizations/Org1:SubOrg1/systems/TS1/applications/A1")
    console.log(config.space2 + "application A1 page opened by URL")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton:nth-child(1)")), config.waitTime)
    console.log(config.space2 + "field \"+ Add dataset\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton:nth-child(1)")).click()
    console.log(config.space2 + "field \"+ Add dataset\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space2 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("D1")
    console.log(config.space2 + "field \"Name\" filled with \"D1\"")
    await driver.findElement(By.name("description")).sendKeys("DD")
    console.log(config.space2 + "field \"Description\" filled with \"DD\"")
    await driver.findElement(By.css(".BigButton:nth-child(3) > .ButtonBlue")).click()
    console.log(config.space2 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space2 + "modal window stale")
}