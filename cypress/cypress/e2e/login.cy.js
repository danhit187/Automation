describe('Login page', () => {
  it('User will redirect to homepage when user click on the logo', () => {
    console.log("visit login page");
    cy.visit('https://prep.brownells.com/login')

    console.log("click on the logo");
    cy.get('.login__left__logo-desktop__img')
      .click();

    console.log("verify user is redirect to homepage successfully");
    cy.url().should("equal", "https://prep.brownells.com/");
  })

  it('User can login successfully when user input valid information', () => {
    let userName = "cypressauto2022@gmail.com"
    let password = "Niteco@123"

    console.log("visit login page");
    cy.visit('https://prep.brownells.com/login')

    console.log("input username & password");
    cy.get('.login__form > :nth-child(1) > .input')
      .type(userName)
    cy.get('.login__form > :nth-child(2) > .input')
      .type(password)

    console.log("click login");
    cy.get('.login__form > .btn').click();

    console.log("verify user is redirect to homepage successfully");
    cy.url().should("equal", "https://prep.brownells.com/");

    console.log("verify user is loged in successfully");
    cy.get(".header-wrapper__icon--account.svg-account").click();
    cy.get("a[data-auto-name='header-username']")
      .invoke("text")
      .should("contains", "Hi");
  });
})