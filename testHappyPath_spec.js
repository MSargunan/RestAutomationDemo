var frisby = require('frisby');

var newUser = {
  "firstName": "Tim",
  "lastName": "Tim",
  "email": "Tim@lab.com",
  "phoneNumber": "2102102106"
};

var updatedUser = {
  "firstName": "Tom",
  "lastName": "Tom",
  "email": "Tom@lab.com",
  "phoneNumber": "2102102106"
};

frisby.globalSetup({
  request: {
    headers: {
  		  'Authentication': 'facetking',
  		  'Content-Type': 'application/json'
    }
  }
});

// Scenario 1: Test Post a new candidate
frisby.create(' Post A New Candidate ')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', newUser,
  { json: true })
  // Validate if the candidate is successfully posted
  .expectStatus(201)
  .afterJSON(function (user) {
    // Scenario 2: Test Get on the candidate just posted
    frisby.create(' Get A New Candidate Just Posted ')
      .get('https://shielded-river-86069.herokuapp.com/contacts/' + user._id)
      // Validate if the response code is success
      .expectStatus(200)
      // Validate data types
      .expectJSONTypes({
        _id: String,
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
        createDate: String
      })
      // Validate if the returned candidate information matches with the one we posted in Scenario 1
      .expectJSON(newUser)
      .afterJSON(function (user) {
        // Scenario 3: Test Put on a candidate (Update candidate info)
        frisby.create(' Put/Update An Existing Candidate ')
          .put('https://shielded-river-86069.herokuapp.com/contacts/' + user._id, updatedUser, { json: true })
          // Validate if the response code is success
          .expectStatus(204)
          .after(function (newUser) {
            // Scenario 4: Test if candidate info updated with put was successfully stored
            frisby.create(' Get A New Candidate After Put/Update ')
              .get('https://shielded-river-86069.herokuapp.com/contacts/' + user._id)
              // Validate if response code was successful
              .expectStatus(200)
              // Validate if the returned candidate info matches with the candidate info updated
              .expectJSON(updatedUser).inspectJSON()
              .toss();
          })
          .toss();
      })
      .toss();
  })
  .toss();
