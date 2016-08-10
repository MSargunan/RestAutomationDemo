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
var unauthorizedError = { error: 'Must provide a valid Authentication header' };

frisby.create('test unauthorized user : post')
  .post('https://shielded-river-86069.herokuapp.com/contacts/', newUser,
  { json: true })
  .expectStatus(401).
  expectJSON(unauthorizedError)
  .toss();

frisby.create('test unauthorized user : get')
  .get('https://shielded-river-86069.herokuapp.com/contacts/')
  .expectStatus(401).
  expectJSON(unauthorizedError)
  .toss();

frisby.create('test unauthorized user : post')
  .put('https://shielded-river-86069.herokuapp.com/contacts/57a96ea9c1664f000308e867', updatedUser,
  { json: true })
  .expectStatus(401).
  expectJSON(unauthorizedError)
  .toss();

