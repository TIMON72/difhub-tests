const { By, until } = require('selenium-webdriver')
const config = require('../../../config.json')

module.exports = {
    createLayout: (driver) => createLayout(driver)
}

async function createLayout(driver) {
    console.log(config.space3 + "enter: tests->application->interface->createLayout.js")
    await driver.navigate().refresh()
    console.log(config.space3 + "page refreshed")
    await driver.sleep(1000) // need to avoid the mistake about react error
    console.log(config.space3 + "slept 1 sec")
    await driver.wait(until.elementLocated(By.linkText("Layouts")), config.waitTime)
    console.log(config.space3 + "link text \"Layouts\" in tabs menu located")
    await driver.findElement(By.linkText("Layouts")).click()
    console.log(config.space3 + "link text \"Layouts\" in tabs menu clicked")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space3 + "field \"+ Add layout\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space3 + "field \"+ Add layout\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space3 + "modal window located")
    await driver.sleep(3000) // need: fields are reset when dataset has not loaded
    console.log(config.space3 + "slept 3 sec")
    await driver.findElement(By.css(".EditorDialog__block_name .TextInput")).sendKeys("L1")
    console.log(config.space3 + "field \"Name\" filled with \"L1\"")
    await driver.findElement(By.css(".EditorDialog__block_description .TextArea")).sendKeys("LD")
    console.log(config.space3 + "field \"Description\" filled with \"LD\"")
    await driver.findElement(By.css(".LayoutDialog__block_platform")).click()
    console.log(config.space3 + "field \"Platform\" clicked")
    await driver.findElement(By.css(".LayoutDialog__block_platform .KascodeSelect__option:nth-child(1)")).click()
    console.log(config.space3 + "option \"Git\" clicked")
    await driver.findElement(By.css(".LayoutDialog__block_unit .TextInput")).sendKeys("U1")
    console.log(config.space3 + "field \"Unit\" filled with \"U1\"")
    await driver.findElement(By.css(".btn_big.EditorDialog__button:nth-child(2)")).click()
    console.log(config.space3 + "field \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space3 + "modal window stale")
}