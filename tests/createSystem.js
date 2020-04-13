const { By, until } = require('selenium-webdriver')
const config = require('../config.json')

module.exports = {
    createSystem: (driver) => createSystem(driver)
}

async function createSystem(driver) {
    console.log(config.space1 + "enter: tests->createSystem.js")
    await driver.findElement(By.linkText("Org1:SubOrg1")).click()
    console.log(config.space1 + "organization \"SubOrg1\" clicked")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space1 + "field \"+ Add System\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space1 + "button \"+ Add System\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space1 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("TS1")
    console.log(config.space1 + "field \"Name\" filled with \"TS1\"")
    await driver.findElement(By.name("description")).sendKeys("TSD")
    console.log(config.space1 + "field \"Description\" filled with \"TSD\"")
    await driver.findElement(By.css(".BigButton:nth-child(3) > .ButtonBlue")).click()
    console.log(config.space1 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space1 + "modal window stale")
}