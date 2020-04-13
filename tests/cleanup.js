const config = require('../config.json')

module.exports = {
  cleanup: (driver) => cleanup(driver)
}

let request = require('../await-request')
async function cleanup(driver) {
  console.log(config.space1 + "enter: tests->cleanup.js")
  let siteTitle = await driver.executeScript('return document.title')
  console.log(config.space1 + "site title received as", siteTitle)
  await driver.executeScript('return localStorage')
  console.log(config.space1 + "local storage received")
  let token = await driver.executeScript('return localStorage.currentUserToken')
  console.log(config.space1 + "token received")
  let result = await request("https://apdax-metadata-service-dev.azurewebsites.net/api/organizations/Org1", {
    'auth': {
      'bearer': token
    }, method: 'delete'
  })
  let message = 'deleted organization \"Org1\" - ' + 'status: ' + result[0] + ' message: ' + result[1]
  if (result[0] === 404 || result[0] === 200)
    console.log(config.space1 + message)
  else
    throw Error(config.space1 + message)
}
