class LoginPage {
    url = "https://prep.brownells.com/login"

    elements = {
        logo: () => cy.get('.login__left__logo-desktop__img'),
        usernameInput: () => cy.get('.login__form > :nth-child(1) > .input'),
        passwordInput: () => cy.get('.login__form > :nth-child(2) > .input'),
        signinBtn: () => cy.get('.login__form > .btn'),
        hideShowPwdBtn: () => cy.get(".custom-form-group__reveal"),
    }

    clickOnLogo() {
        this.elements.logo().click();
    }

    visit() {
        cy.visit(this.url);
    }

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.signinBtn().click();
    }

    inputPassword(password) {
        this.elements.passwordInput().type(password);
    }

    isPasswordHidden() {
        this.elements.passwordInput()
            .should('have.attr', 'type', 'password');
    }

    isPasswordShowedUp() {
        this.elements.passwordInput()
            .should('not.have.attr', 'type', 'password');
    }

    toggleHideShowPassword() {
        this.elements.hideShowPwdBtn().click();
    }

    assertHideShowBtnTextEqual(text) {
        this.elements.hideShowPwdBtn()
            .invoke("text").should("equal", text);
    }
}

export default LoginPage