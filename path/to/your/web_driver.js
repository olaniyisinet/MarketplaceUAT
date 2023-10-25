const { Builder } = require('selenium-webdriver');

// Create a WebDriver instance
const driver = new Builder().forBrowser('chrome').build();

// Maximize the browser window
driver.manage().window().maximize();

module.exports = { driver };
