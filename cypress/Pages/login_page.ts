export class LoginPage{
    Lp_user= '#uname'
    Lp_Pwd= '#pwd'
    Lp_Button='[type="submit"]'

    navigate(url: string){
        cy.visit(url);
    }
    username(name:string){
        cy.get(this.Lp_user).type(name);
    }
    password(pwd:string){
        cy.get(this.Lp_Pwd).type(pwd);
        }
    clickSubmit(){
        cy.get(this.Lp_Button).click();
    }
}