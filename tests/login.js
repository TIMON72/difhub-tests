const { By, until } = require('selenium-webdriver')
const config = require('../config.json')

module.exports = {
    login: (driver) => login(driver)
}

async function login(driver) {
    console.log(config.space1 + "enter: tests->login.js")
    await driver.get(config.baseUri + "cognitologin")
    console.log(config.space1 + "login page opened by URL")
    await driver.findElement(By.name("login")).sendKeys(config.login)
    console.log(config.space1 + "field \"Login\" filled")
    await driver.findElement(By.name("password")).sendKeys(config.password)
    console.log(config.space1 + "field \"Password\" filled")
    await driver.findElement(By.css(".loginBlock__buttonBlock > button")).click()
    console.log(config.space1 + "button \"Sign In\" clicked")
    await driver.wait(until.urlIs(config.baseUri), config.waitTime)
    console.log(config.space1 + "URL is base")
}