const { By, until } = require('selenium-webdriver')
const config = require('../../../config.json')

module.exports = {
    createActivity: (driver) => createActivity(driver)
}

async function createActivity(driver) {
    console.log(config.space3 + "enter: tests->application->pipeline->createActivity.js")
    await driver.sleep(4000) // need to avoid freeze
    console.log(config.space3 + "slept 4 sec")
    await driver.wait(until.elementLocated(By.css(".TypedTable__bottomButton")), config.waitTime)
    console.log(config.space3 + "field \"+ Add activity\" located")
    await driver.findElement(By.css(".TypedTable__bottomButton")).click()
    console.log(config.space3 + "field \"+ Add activity\" clicked")
    await driver.wait(until.elementLocated(By.css(".ModalWindow__root__open")), config.waitTime)
    console.log(config.space3 + "modal window located")
    await driver.findElement(By.css(".DataEditor__block_name .TextInput")).sendKeys("A1")
    console.log(config.space3 + "field \"Name\" filled with \"A1\"")
    await driver.findElement(By.css(".DataEditor__block_description .TextArea")).sendKeys("AD")
    console.log(config.space3 + "field \"Description\" filled with \"AD\"")
    await driver.findElement(By.css(".DataEditor__block_type")).click()
    console.log(config.space3 + "field \"Type\" clicked")
    await driver.findElement(By.css(".DataEditor__block_type .KascodeSelect__option:nth-child(2)")).click()
    console.log(config.space3 + "option \"Operation\" in field \"Type\" clicked")
    await driver.sleep(2000) // need to wait for an next element to appear
    console.log(config.space3 + "slept 2 sec")
    await driver.findElement(By.css(".DataEditor__block_operation:nth-child(1)")).click()
    console.log(config.space3 + "field \"Interface\" clicked")
    await driver.findElement(By.css(".KascodeSelect__option:nth-child(1)")).click()
    console.log(config.space3 + "option \"I1/v1\" in field \"Interface\" clicked")
    await driver.sleep(2000) // need to wait for an next element to appear
    console.log(config.space3 + "slept 2 sec")
    await driver.findElement(By.css(".DataEditor__block_operation:nth-child(2)")).click()
    console.log(config.space3 + "field \"Operation\" clicked")
    await driver.findElement(By.css(".KascodeSelect__option:nth-child(1)")).click()
    console.log(config.space3 + "option \"O1\" in field \"Operation\" clicked")
    // Create input
    // await driver.findElement(By.css(".ActivityDialog__advancedOptions .EditorDialogItems__button:nth-child(1)")).click()
    // console.log(config.space3 + "button-field \"Inputs\" clicked")
    // let modalWindowCss2 = ".ModalWindow__root__open .ModalWindow__root__open "
    // await driver.wait(until.elementLocated(By.css(modalWindowCss2)), config.waitTime)
    // console.log(config.space3 + "modal window located")
    // await driver.wait(until.elementLocated(By.css(modalWindowCss2 + ".TypedTable__bottomButton")), config.waitTime)
    // console.log(config.space3 + "field \"+ Add input\" located")
    // await driver.findElement(By.css(modalWindowCss2 + ".TypedTable__bottomButton")).click()
    // console.log(config.space3 + "field \"+ Add input\" clicked")
    // let modalWindowCss3 = ".ModalWindow__root__open .ModalWindow__root__open .ModalWindow__root__open "
    // await driver.wait(until.elementLocated(By.css(modalWindowCss3)), config.waitTime)
    // console.log(config.space3 + "modal window located")
    // await driver.findElement(By.css(modalWindowCss3 + ".EditorDialog__block_name .TextInput")).sendKeys("I1")
    // console.log(config.space3 + "field \"Name\" filled with \"I1\"")
    // await driver.findElement(By.css(modalWindowCss3 + ".EditorDialog__block_description .TextArea")).sendKeys("ID")
    // console.log(config.space3 + "field \"Description\" filled with \"ID\"")
    // await driver.findElement(By.css(modalWindowCss3 + ".InputDialog__block")).click()
    // console.log(config.space3 + "field \"Mode\" clicked")
    // await driver.findElement(By.css(modalWindowCss3 + ".InputDialog__block .KascodeSelect__option:nth-child(1)")).click()
    // console.log(config.space3 + "option \"Dataset\" in field \"Mode\" clicked")
    // // await driver.sleep(2000) // need to wait for an next element to appear
    // // console.log(config.space3 + "slept 2 sec")
    // await driver.findElement(By.css(modalWindowCss3 + ".InputDialog__block:nth-child(3)")).click()
    // console.log(config.space3 + "field \"Dataset\" clicked")
    // await driver.findElement(By.css(modalWindowCss3 + ".InputDialog__block:nth-child(3) .KascodeSelect__option:nth-child(1)")).click()
    // console.log(config.space3 + "option \"D1/v1\" in field \"Dataset\" clicked")
    // await driver.findElement(By.css(modalWindowCss3 + ".EditorDialog__saveButton")).click()
    // console.log(config.space3 + "field \"Update\" clicked")
    // await driver.wait(until.stalenessOf(driver.findElement(By.css(modalWindowCss3))), config.waitTime)
    // console.log(config.space3 + "modal window stale")
    //
    await driver.findElement(By.css(".btn_big:nth-child(2)")).click()
    console.log(config.space3 + "field \"Create\" clicked")
    await driver.wait(until.stalenessOf(driver.findElement(By.css(".ModalWindow__root__open"))), config.waitTime)
    console.log(config.space3 + "modal window stale")
}