it('google test',function(){
    cy.visit('https://google.com');
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('[name="q"]')
    .type('Roses and Lily')
     .type('{enter}'); 

    
})