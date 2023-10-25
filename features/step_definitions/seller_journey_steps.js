const { Given, When, Then, AfterAll } = require('cucumber');
const { expect } = require('chai');
const { By, Key, until } = require('selenium-webdriver');
const { driver } = require('../../path/to/your/web_driver');

const baseURL = "https://d2396zuzaql6zm.cloudfront.net/"

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

Given('I am on the login page', async function () {
  await driver.get(baseURL);
  const radioButtonSelector = By.css('input[value="seller"]');
  const radioButton = await driver.wait(until.elementLocated(radioButtonSelector), 5000);
  await radioButton.click();
});

When('I enter {string} as the postcode', async function (postcode) {
  const input = await driver.findElement(By.name('postalCode'));
  await input.sendKeys(postcode, Key.RETURN);
});

Then('I click the Next button', async function () {
  const but = await driver.findElement(By.css('button[type="submit"]'));//.click();
  await driver.executeScript("arguments[0].scrollIntoView();", but);
  but.click();
  await pause(2000);
});

Given('I am on the select address page', async function () {
  await driver.get(baseURL + 'select-address');
});

When('I select {string} from the dropdown', async function (address) {
  const addressDropdown = await driver.findElement(By.id('demo-simple-select'));
  await addressDropdown.sendKeys(address, Key.RETURN);
});

Given('I am on the register site page', async function () {
  await driver.get(baseURL + 'register-site');
});

When('I enter the registered site name {string} and rego registration ID {string}', async function (siteName, regoId) {
  await driver.findElement(By.name('registeredSiteName')).sendKeys(siteName);
  await driver.findElement(By.name('regoRegistrationId')).sendKeys(regoId);
  const fields = await driver.findElements(By.id('standard-basic'));
  // Set values for each field individually
  await fields[0].sendKeys('Test Title');
  await fields[1].sendKeys('Test Link');
  await fields[2].sendKeys('Test Description');
  const button = await driver.findElement(By.xpath(`//button[contains(text(), 'Add Link')]`));
  await button.click();
});

Given('I am on the register your site page', async function () {
  await driver.get(baseURL + 'register-your-site');
});

When('I enter the information about my green site', async function () {
  await driver.findElement(By.name('productionCapacity')).sendKeys('100MW');
  await driver.findElement(By.name('operationStartDate')).sendKeys('01 Oct 2023');
  await driver.findElement(By.name('energyReadyDate')).sendKeys('01 Jan 2024');
  await driver.findElement(By.name('contractTerm')).sendKeys('10');
  await driver.findElement(By.name('pricePerOneMW')).sendKeys('0.5');

  //Set production status
  const proddropdown = await driver.findElement(By.id("mui-component-select-productionStatus"));
  await proddropdown.click();
  const proddropdownList = await driver.findElement(By.css('ul.MuiList-root'));
  const prodfirstOption = await proddropdownList.findElement(By.css('li.MuiButtonBase-root'));
  await prodfirstOption.click();

  //Set government incentives
  const incentivesdropdown = await driver.findElement(By.id("governmentIncentives"));
  await incentivesdropdown.click();
  const incentivesdropdownList = await driver.findElement(By.css('ul.MuiList-root'));
  const incentivesfirstOption = await incentivesdropdownList.findElement(By.css('li.MuiButtonBase-root'));
  await incentivesfirstOption.click();

  //Set technology types
  await driver.findElement(By.name('technologyTypes')).sendKeys('Solar');
  const technologydropdownList = await driver.findElement(By.css('ul.MuiAutocomplete-listbox'));
  const technologyfirstOption = await technologydropdownList.findElement(By.css('li.MuiAutocomplete-option'));
  await technologyfirstOption.click();

  //Check Minimum contract
  const minContract = await driver.findElement(By.name('minimumContractTermEdited'));
  const isChecked = await minContract.isSelected();
  if (!isChecked) {
    await minContract.click();
  }

  //Check Minimum energy supply
  const minEnergySupply = await driver.findElement(By.name('minimumEnergySupplyEdited'));
  const isChecked2 = await minEnergySupply.isSelected();
  if (!isChecked2) {
    await minEnergySupply.click();
  }
});

Given('I am on the company sign up page', async function () {
  await driver.get(baseURL + 'company-sign-up');
});

When('I enter the information about my company', async function () {
  await driver.findElement(By.name('companyName')).sendKeys('KEELE DEVELOPMENTS LIMITED');
  await driver.findElement(By.name('companyRegistrationNumber')).sendKeys('02304262');
  await driver.findElement(By.name('companyAddress')).sendKeys('85 Great Portland Street, London, England, W1W 7LT');
  await driver.findElement(By.name('billingAddress')).sendKeys('85 Great Portland Street, London, England, W1W 7LT');
});

Given('I am on the company confirmation page', async function () {
  await driver.get(baseURL + 'company-confirmation');
});

When('I click I agree', async function () {
  await driver.findElement(By.css('input[type="checkbox"]')).click();
});

Then('click the next button', async function () {
  const button = await driver.findElement(By.xpath("//button[contains(text(), 'Next')]"));
  // Scroll to the button element using JavaScript
  await driver.executeScript("arguments[0].scrollIntoView();", button);
  await pause(2000);
  await button.click();
});

Given('I am on the contact details page', async function () {
  await driver.get(baseURL + 'contact-details');
});

When('I enter my contact details', async function () {
  await driver.findElement(By.name('userName')).sendKeys('Olaniyi Olatunji');
  await driver.findElement(By.name('designation')).sendKeys('Full Stack Developer');
  await driver.findElement(By.name('email')).sendKeys('olaniyi.olatunji@re24.energy');
  await driver.findElement(By.name('contactNumber')).sendKeys('+447876044920');
});

Given('I am on the change password page', async function () {
  await driver.get(baseURL + 'change-temp-password');
});

When('I enter the password details', async function () {
  await driver.findElement(By.name('email')).sendKeys('olaniyi.olatunji@re24.energy');
  await driver.findElement(By.name('tempPassword')).sendKeys('Re12345678!');
  await driver.findElement(By.name('password')).sendKeys('Re123456789!');
  await driver.findElement(By.name('confirmPassword')).sendKeys('Re123456789!');
});

// AfterAll(async () => {
//   // Close the WebDriver after the scenario
//   await driver.quit();
// });