import { LoginPage } from "../Pages/login_page";
var logintest= new LoginPage()

it('login test using POM',function(){
    logintest.navigate('https://trytestingthis.netlify.app/')
    logintest.username('test')
    logintest.password('test')
    logintest.clickSubmit()
   // cy.visit('https://trytestingthis.netlify.app/');
    //cy.get('#uname').type('test');
    //cy.get('#pwd').type('test');
    //cy.get('[type="submit"]').click();
    
})