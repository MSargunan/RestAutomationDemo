var frisby = require('frisby');

var testData = require('./testData.json');


frisby.globalSetup({
  request: {
    headers: {
  		  'Authentication': 'facetking',
  		  'Content-Type': 'application/json'
    }
  }
});

// Scenario: Post a new candidate without firstName key
frisby.create(' Post a new candidate without firstName key ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.noFirstName.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.noFirstName.error)
  .toss();

// Scenario: Post a new candidate with empty firstName
frisby.create(' Post a new candidate with empty firstName ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.firstNameEmpty.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.firstNameEmpty.error)
  .toss();

// Scenario: Post a new candidate without firstName as blank spaces
frisby.create(' Post a new candidate with firstName as blank spaces ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.firstNameBlankSpaces.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.firstNameBlankSpaces.error)
  .toss();

// Scenario: Post a new candidate without lastName key
frisby.create(' Post a new candidate without lastName key ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.noLastName.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.noLastName.error)
  .toss();

// Scenario: Post a new candidate with empty lastName
frisby.create(' Post a new candidate with empty lastName ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.lastNameEmpty.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.lastNameEmpty.error)
  .toss();

// Scenario: Post a new candidate without lastName as blank spaces
frisby.create(' Post a new candidate with lastName as blank spaces ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.lastNameBlankSpaces.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.lastNameBlankSpaces.error)
  .toss();

// Scenario: Post a new candidate without email
frisby.create(' Post a new candidate without email ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.noEmail.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.noEmail.error)
  .toss();

// Scenario: Post a new candidate with empty email
frisby.create(' Post a new candidate with empty email ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.emailEmpty.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.emailEmpty.error)
  .toss();

// Scenario: Post a new candidate with email as blank spaces
frisby.create(' Post a new candidate with email as blank spaces ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.emailBlankSpaces.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.emailBlankSpaces.error)
  .toss();

// Scenario: Post a new candidate with invalid email
frisby.create(' Post a new candidate with invalid email ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.emailInvalidFormat.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.emailInvalidFormat.error)
  .toss();


// Scenario: Post a new candidate without phoneNumber
frisby.create(' Post a new candidate without phoneNumber ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.noPhoneNumber.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.noPhoneNumber.error)
  .toss();

  // Scenario: Post a new candidate with alpha numeric phone number
frisby.create(' Post a new candidate with alpha numeric phone number ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.phoneNumberAlphaNumeric.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.phoneNumberAlphaNumeric.error)
  .toss();

  // Scenario: Post a new candidate with phone number less than 10 digits
frisby.create(' Post a new candidate with phone number less than 10 digits ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', testData.phoneNumberLessThan10Digits.data,
  { json: true })
  // Validate response code
  .expectStatus(400).inspectJSON()
  // Validate error message
  .expectJSON(testData.phoneNumberLessThan10Digits.error)
  .toss();
