const { By, until } = require('selenium-webdriver')
const config = require('../../config.json')

module.exports = {
    createInterface: (driver) => createInterface(driver)
}

async function createInterface(driver) {
    console.log(config.space2 + "enter: tests->application->createInterface.js")
    await driver.get(config.baseUri + "view/organizations/Org1:SubOrg1/systems/TS1/applications/A1")
    console.log(config.space2 + "application A1 page opened by URL")
    await driver.wait(until.elementLocated(By.linkText("Interfaces")), config.waitTime)
    console.log(config.space2 + "link text \"Interfaces\" in tabs menu located")
    await driver.findElement(By.linkText("Interfaces")).click()
    console.log(config.space2 + "link text \"Interfaces\" in tabs menu clicked")
    await driver.wait(until.elementLocated(By.className("TypedTable__bottomButton")), config.waitTime)
    console.log(config.space2 + "field \"+ Add interface\" located")
    await driver.findElement(By.className("TypedTable__bottomButton")).click()
    console.log(config.space2 + "field \"+ Add interface\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space2 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("I1")
    console.log(config.space2 + "field \"Name\" filled with \"I1\"")
    await driver.findElement(By.name("description")).sendKeys("ID")
    console.log(config.space2 + "field \"Description\" filled with \"ID\"")
    await driver.findElement(By.className("EditorDialog__saveButton")).click()
    console.log(config.space2 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space2 + "modal window stale")
}