export class RegisterPage{

    weblocators={

    }

    openURL(){
        cy.visit(Cypress.env('url'));
    }
}