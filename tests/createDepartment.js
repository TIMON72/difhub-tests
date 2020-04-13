const { By, until } = require('selenium-webdriver')
const config = require('../config.json')

module.exports = {
    createDepartment: (driver) => createDepartment(driver)
}

let element
async function createDepartment(driver) {
    console.log(config.space1 + "enter: tests->createDepartment.js")
    element = await driver.findElement(By.linkText("Org1"))
    console.log(config.space1 + "text link element \"Org1\" found")
    await driver.actions().move({ origin: element }).perform()
    console.log(config.space1 + "text link element \"Org1\" selected")
    await driver.wait(until.elementLocated(By.css(".TypedTable__floatingButtons__Org1 a")), config.waitTime)
    console.log(config.space1 + "field \"+ Add\" in element \"Org1\" located")
    await driver.findElement(By.css(".TypedTable__floatingButtons__Org1 a")).click()
    console.log(config.space1 + "field \"+ Add\" in element \"Org1\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space1 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("SubOrg1")
    console.log(config.space1 + "field \"Name\" filled with \"SubOrg1\"")
    await driver.findElement(By.name("description")).sendKeys("OD")
    console.log(config.space1 + "field \"Description\" filled with \"OD\"")
    await driver.findElement(By.css(".BigButton:nth-child(3) > .ButtonBlue")).click()
    console.log(config.space1 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space1 + "modal window stale")
    await driver.wait(until.elementLocated(By.linkText("Org1:SubOrg1")), config.waitTime)
    console.log(config.space1 + "organization \"SubOrg1\" located")
}