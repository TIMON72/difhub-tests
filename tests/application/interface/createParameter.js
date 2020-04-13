const { By, until } = require('selenium-webdriver')
const config = require('../../../config.json')

module.exports = {
    createParameter: (driver) => createParameter(driver)
}

async function createParameter(driver) {
    console.log(config.space3 + "enter: tests->application->interface->createParameter.js")
    await driver.sleep(2000) // need to avoid the mistake about react error (so fast next actions)
    console.log(config.space3 + "slept 2 sec")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space3 + "field \"+ Add parameter\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space3 + "field \"+ Add parameter\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space3 + "modal window located")
    await driver.findElement(By.className("TextInput")).sendKeys("P1")
    console.log(config.space3 + "field \"Name\" filled with \"P1\"")
    await driver.findElement(By.className("TextArea")).sendKeys("PD")
    console.log(config.space3 + "field \"Description\" filled with \"PD\"")
    await driver.findElement(By.css(".btn_big.EditorDialog__button:nth-child(2)")).click()
    console.log(config.space3 + "field \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space3 + "modal window stale")
}