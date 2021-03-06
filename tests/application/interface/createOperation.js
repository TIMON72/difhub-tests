const { By, until } = require('selenium-webdriver')
const config = require('../../../config.json')

module.exports = {
    createOperation: (driver) => createOperation(driver)
}

async function createOperation(driver) {
    console.log(config.space3 + "enter: tests->application->interface->createOperation.js")
    await driver.navigate().refresh()
    console.log(config.space3 + "page refreshed")
    await driver.sleep(1000) // need to avoid the mistake about react error
    console.log(config.space3 + "slept 1 sec")
    await driver.wait(until.elementLocated(By.linkText("Operations")), config.waitTime)
    console.log(config.space3 + "link text \"Operations\" in tabs menu located")
    await driver.findElement(By.linkText("Operations")).click()
    console.log(config.space3 + "link text \"Operations\" in tabs menu clicked")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space3 + "field \"+ Add operation\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space3 + "field \"+ Add operation\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space3 + "modal window located")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(1) .TextInput")).sendKeys("O1")
    console.log(config.space3 + "field \"Name\" filled with \"O1\"")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(2) .TextArea")).sendKeys("OD")
    console.log(config.space3 + "field \"Description\" filled with \"OD\"")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(4)")).click()
    console.log(config.space3 + "field \"Action\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(4) .KascodeSelect__option:nth-child(1)")).click()
    console.log(config.space3 + "option \"GET\" in field \"Action\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(5) .OperationChildList")).click()
    console.log(config.space3 + "button \"+\" in field \"Parameters\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(5) .LocaleSelect__input")).click()
    console.log(config.space3 + "list \"Add parameter\" in field \"Parameters\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(5) .LocaleSelect__option:nth-child(1)")).click()
    console.log(config.space3 + "option \"P1\" in field \"Parameters\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(6) .OperationChildList")).click()
    console.log(config.space3 + "button \"+\" in field \"Responses\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(6) .LocaleSelect__input")).click()
    console.log(config.space3 + "list \"Add response\" in field \"Responses\" clicked")
    await driver.findElement(By.css(".EditorDialog__block:nth-child(6) .LocaleSelect__option:nth-child(1)")).click()
    console.log(config.space3 + "option \"R1\" in field \"Responses\" clicked")
    await driver.findElement(By.css(".btn_big.EditorDialog__button:nth-child(2)")).click()
    console.log(config.space3 + "field \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space3 + "modal window stale")
}