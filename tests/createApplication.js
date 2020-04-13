const { By, until } = require('selenium-webdriver')
const config = require('../config.json')

module.exports = {
    createApplication: (driver) => createApplication(driver)
}

async function createApplication(driver) {
    console.log(config.space1 + "enter: tests->createApplication.js")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space1 + "field \"+ Add application\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space1 + "button \"+ Add application\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space1 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("A1")
    console.log(config.space1 + "field \"Name\" filled with \"A1\"")
    await driver.findElement(By.name("description")).sendKeys("AD")
    console.log(config.space1 + "field \"Description\" filled with \"AD\"")
    await driver.findElement(By.css(".BigButton:nth-child(3) > .ButtonBlue")).click()
    console.log(config.space1 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space1 + "modal window stale")
}