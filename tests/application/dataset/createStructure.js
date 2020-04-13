const { By, until } = require('selenium-webdriver')
const config = require('../../../config.json')

module.exports = {
    createStructure: (driver) => createStructure(driver)
}

async function createStructure(driver) {
    console.log(config.space3 + "enter: tests->application->dataset->createStructure.js")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space3 + "field \"+ Add field\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space3 + "field \"+ Add field\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space3 + "modal window located")
    await driver.sleep(1000) // need for dataset's load
    console.log(config.space3 + "slept 1 sec")
    await driver.findElement(By.css(".value_right .TextInput")).sendKeys("F1")
    console.log(config.space3 + "field \"Name\" filled with \"F1\"")
    await driver.findElement(By.css(".btn_big:nth-child(2)")).click()
    console.log(config.space3 + "field \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space3 + "modal window stale")
}