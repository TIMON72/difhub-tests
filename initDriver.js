const { Builder, Capabilities } = require('selenium-webdriver')

module.exports = {
    baseUri: require('./config.json').baseUri,
	initDriver: () => initDriver()
}

let chromeCapabilities = Capabilities.chrome()
chromeCapabilities.set("goog:chromeOptions", {
	args: [
		"--start-maximized",
		"--user-data-dir=./user_data"
	]
  })
  	/* options for headless launch in build pipeline
	/*  
		{
			browserName: 'chrome',
			'goog:chromeOptions': {
				binary: chromium.path
			},
			'args': ['--no-sandbox','--disable-gpu','-disable-dev-shm-usage','-disable-popup-blocking','--start-maximized','--disable-web-security','--allow-running-insecure-content','--disable-infobars','--headless','--disable-dev-shm-usage']
		},
	*/
async function initDriver() {
    let driver = await new Builder().withCapabilities(chromeCapabilities).forBrowser('chrome').build()
    return driver
}