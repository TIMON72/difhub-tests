const { By, until } = require('selenium-webdriver')
const config = require('../config.json')

module.exports = {
    createOrganization: (driver) => createOrganization(driver)
}

async function createOrganization(driver) {
    console.log(config.space1 + "enter: tests->createOrganization.js")
    await driver.findElement(By.css("a:nth-child(1) > .Header__menuButton > img")).click()
    console.log(config.space1 + "button \"Organizations\" clicked")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton:nth-child(2)")), config.waitTime)
    console.log(config.space1 + "field \"+ Add organization\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton:nth-child(2)")).click()
    console.log(config.space1 + "button \"+ Add organization\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space1 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("Org1")
    console.log(config.space1 + "field \"Name\" filled with \"Org1\"")
    await driver.findElement(By.name("description")).sendKeys("OD")
    console.log(config.space1 + "field \"Description\" filled with \"OD\"")
    await driver.findElement(By.css(".BigButton:nth-child(3) > .ButtonBlue")).click()
    console.log(config.space1 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space1 + "modal window stale")
    await driver.wait(until.elementLocated(By.linkText("Org1")), config.waitTime)
    console.log(config.space1 + "organization \"Org1\" located")
}