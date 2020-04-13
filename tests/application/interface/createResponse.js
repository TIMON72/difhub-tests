const { By, until } = require('selenium-webdriver')
const config = require('../../../config.json')

module.exports = {
    createResponse: (driver) => createResponse(driver)
}

async function createResponse(driver) {
    console.log(config.space3 + "enter: tests->application->interface->createResponse.js")
    await driver.navigate().refresh()
    console.log(config.space3 + "page refreshed")
    await driver.sleep(1000) // need to avoid the mistake about react error
    console.log(config.space3 + "slept 1 sec")
    await driver.wait(until.elementLocated(By.linkText("Responses")), config.waitTime)
    console.log(config.space3 + "link text \"Responses\" in tabs menu located")
    await driver.findElement(By.linkText("Responses")).click()
    console.log(config.space3 + "link text \"Responses\" in tabs menu clicked")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space3 + "field \"+ Add response\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space3 + "field \"+ Add response\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space3 + "modal window located")
    await driver.findElement(By.className("TextInput")).sendKeys("R1")
    console.log(config.space3 + "field \"Name\" filled with \"R1\"")
    await driver.findElement(By.className("TextArea")).sendKeys("RD")
    console.log(config.space3 + "field \"Description\" filled with \"RD\"")
    await driver.findElement(By.css(".btn_big.EditorDialog__button:nth-child(2)")).click()
    console.log(config.space3 + "field \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space3 + "modal window stale")
}