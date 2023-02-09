it('validating assertations',function(){
    cy.visit('https://example.cypress.io/');
    cy.contains('get').click();
  //  cy.get('#query-btn').should('contain','Button');
 /* cy.get('#query-btn')
  .should('contain','Button')
  .should('have.class','query-btn')
  .should('be.visible')
  .should('be.enabled');
cy.get('#query-btn').invoke('attr','id')
.should('equal','query-btn');

*/
//cy.get('#query-btn')
//.should('contain','Button')
//and ('have.class','query-btn');
  
//EXPLICIT ASSERTATION
expect(true).to.be.true

let name="Shivani";
expect(name).to.be.equal('Shivani');
//this will be passed in equal but not in strictly equal
assert.equal(4,4,'equal');
assert.strictEqual('hi','hi','strictly equal');
//assert.strictEqual(4,'4','not strcitly equal');
})