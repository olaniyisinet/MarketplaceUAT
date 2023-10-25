@seller_journey
Feature: Seller Journey

Scenario: Login with valid postcode
  Given I am on the login page
  When I enter "ST5 1LZ" as the postcode
  Then I click the Next button
  # Then I should be redirected to the select address page

Scenario: Select an address and proceed
  Given I am on the select address page
  When I select "BLOCK 5, 1, LONDON ROAD, NEWCASTLE, UNDER LYME" from the dropdown
  Then I click the Next button
  # Then I should be redirected to the register site page

Scenario: Register site and proceed
  Given I am on the register site page
  When I enter the registered site name "RE24 Test Site" and rego registration ID "RE2412345"
  Then I click the Next button
  # Then I should be redirected to the register your site page

Scenario: Register your site and proceed
  Given I am on the register your site page
  When I enter the information about my green site
  Then I click the Next button
  # Then I should be redirected to the company sign up page

Scenario: Company sign up page
  Given I am on the company sign up page
  When I enter the information about my company
  Then I click the Next button
  # Then I should be redirected to the company confirmation page

Scenario: Company confirmation page
  Given I am on the company confirmation page
  When I click I agree
  Then click the next button

Scenario: Contact details page
  Given I am on the contact details page
  When I enter my contact details
  Then I click the Next button
  # Then I should receive a confirmation email

Scenario: Change password page
  Given I am on the change password page
  When I enter the password details
  Then I click the Next button