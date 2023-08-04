class LoginPage {
    url = "https://prep.brownells.com/login/"

    elements = {
        logo: () => cy.get('.login__left__logo-desktop__img'),
        usernameInput: () => cy.get('.login__form > :nth-child(1) > .input'),
        passwordInput: () => cy.get('.login__form > :nth-child(2) > .input'),
        signinBtn: () => cy.get('.login__form > .btn'),
    }

    visit(){
        cy.visit(this.url);
    }
    
    clickOnLogo() {
        this.elements.logo().click();
    }

    login(username, password) {
        this.elements.usernameInput()
            .type(username);
        this.elements.passwordInput()
            .type(password);
        this.elements.signinBtn().click();
    }
}

export default LoginPage