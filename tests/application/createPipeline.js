const { By, until } = require('selenium-webdriver')
const config = require('../../config.json')

module.exports = {
    createPipeline: (driver) => createPipeline(driver)
}

async function createPipeline(driver) {
    console.log(config.space2 + "enter: tests->application->createPipeline.js")
    await driver.get(config.baseUri + "view/organizations/Org1:SubOrg1/systems/TS1/applications/A1")
    console.log(config.space2 + "application A1 page opened by URL")
    await driver.wait(until.elementLocated(By.linkText("Pipelines")), config.waitTime)
    console.log(config.space2 + "link text \"Pipelines\" in tabs menu located")
    await driver.findElement(By.linkText("Pipelines")).click()
    console.log(config.space2 + "link text \"Pipelines\" in tabs menu clicked")
    await driver.wait(until.elementLocated(By.className("TypedTable__bottomButton")), config.waitTime)
    console.log(config.space2 + "field \"+ Add pipeline\" located")
    await driver.findElement(By.className("TypedTable__bottomButton")).click()
    console.log(config.space2 + "field \"+ Add pipeline\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space2 + "modal window located")
    await driver.findElement(By.css(".ObjectCreator__input")).sendKeys("P1")
    console.log(config.space2 + "field \"Name\" filled with \"P1\"")
    await driver.findElement(By.name("description")).sendKeys("PD")
    console.log(config.space2 + "field \"Description\" filled with \"PD\"")
    await driver.findElement(By.className("EditorDialog__saveButton")).click()
    console.log(config.space2 + "button \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space2 + "modal window stale")
}