@seller_login
Feature: Login

Scenario: Login with valid credentials
  Given I am on the seller login page
  When I enter "olaniyi.olatunji@re24.energy" as the email and "Re12345678!" as the password
  Then I click the login button

Scenario: Adding a new site
  Given I am on the sites page
  Then I click Add New Site

Scenario: New Site post code
  Given I am on the post code page
  When I enter a new postcode
  Then I click Next

Scenario: New Site address
  Given I am on the new address page
  When I select an address from the dropdown
  Then I click Next

Scenario: Register new site
  Given I am on the new register page
  When I enter the site name and rego registration ID
  Then I click Next

Scenario: Register new site and proceed
  Given I am on the green site page
  When I enter information about the green site capacities
  Then I click Next