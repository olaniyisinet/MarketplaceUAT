const { Given, When, Then, AfterAll } = require('cucumber');
const { expect } = require('chai');
const { By, Key, until } = require('selenium-webdriver');
const { driver } = require('../../path/to/your/web_driver');

const baseURL = "https://d2396zuzaql6zm.cloudfront.net/"

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

Given('I am on the seller login page', async function () {
    await driver.get(baseURL + "login");
    const emailSelector = By.name("email");
    await driver.wait(until.elementLocated(emailSelector), 5000);
});

When('I enter {string} as the email and {string} as the password', async function (email, password) {
    await driver.findElement(By.name('email')).sendKeys(email);
    await driver.findElement(By.name('password')).sendKeys(password);
});

Then('I click the login button', async function () {
    await pause(1000);
    await driver.findElement(By.css('button[type="submit"]')).click();
    await pause(1000);
});

Given('I am on the sites page', async function () {
    // wait until teh page loads successfully
     await pause(3000);
});

Then('I click Add New Site', async function () {
     // Wait until the button is located by its text and then click
 await driver.wait(until.elementLocated(By.xpath(`//button[text()="Add New Site"]`)),
        5000
      ).click();
});

Given('I am on the post code page', async function () {
    // wait until the page loads successfully
     await pause(3000);
});

When('I enter a new postcode', async function () {
    const input = await driver.findElement(By.name('postalCode'));
    await input.sendKeys("ST1 1AG", Key.RETURN);
  });

  Then('I click Next', async function () {
    await pause(2000);
    await driver.findElement(By.css('button[type="submit"]')).click();
  });

  Given('I am on the new address page', async function () {
    // wait until the page loads successfully
     await pause(3000);
});

When('I select an address from the dropdown', async function () {
    const addressDropdown = await driver.findElement(By.id('demo-simple-select'));
    await addressDropdown.sendKeys("LANDLORDS SUPPLY, THE WEBBERLEY, PERCY STREET, HANLEY, STOKE-ON-TRENT, STAFFORDSHIRE", Key.RETURN);
  });


  Given('I am on the new register page', async function () {
    // wait until teh page loads successfully
     await pause(3000);
});
 
When('I enter the site name and rego registration ID', async function () {
  await driver.findElement(By.name('registeredSiteName')).sendKeys("RE24 Test");
  await driver.findElement(By.name('regoRegistrationId')).sendKeys("RE1324444");
  const fields = await driver.findElements(By.id('standard-basic'));
  // Set values for each field individually
  await fields[0].sendKeys('Test Title');
  await fields[1].sendKeys('Test Link');
  await fields[2].sendKeys('Test Description');
  const button = await driver.findElement(By.xpath(`//button[contains(text(), 'Add Link')]`));
  await button.click();
});

Given('I am on the green site page', async function () {
  // wait until teh page loads successfully
   await pause(3000);
});

When('I enter information about the green site capacities', async function () {
  await driver.findElement(By.name('productionCapacity')).sendKeys('100MW');
  await driver.findElement(By.name('operationStartDate')).sendKeys('01 Oct 2023');
  await driver.findElement(By.name('energyReadyDate')).sendKeys('01 Jan 2024');
  await driver.findElement(By.name('contractTerm')).sendKeys('10');
  await driver.findElement(By.name('pricePerOneMW')).sendKeys('0.5');

  //Set production status
  const proddropdown = await driver.findElement(By.id("mui-component-select-productionStatus"));
  await proddropdown.click();
  // const proddropdownList = await driver.findElement(By.css('ul.MuiList-root'));
  const prodfirstOption = By.css('li.MuiButtonBase-root');
  await driver.wait(until.elementLocated(prodfirstOption), 5000).click();

  //Set government incentives
  const incentivesdropdown = await driver.findElement(By.id("governmentIncentives"));
  await incentivesdropdown.click();
  // const incentivesdropdownList = await driver.findElement(By.css('ul.MuiList-root'));
  const incentivesfirstOption = By.css('li.MuiButtonBase-root');
  await driver.wait(until.elementLocated(incentivesfirstOption), 5000).click();
  // await incentivesfirstOption.click();

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