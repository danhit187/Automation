import LoginPage from "../pages/login"
import usersData from "../fixtures/users.json"
import HomePage from "../pages/homepage";

let loginPage = new LoginPage();
let homePage = new HomePage();

describe('Login page', () => {
  it('User will redirect to homepage when user click on the logo', () => {
    console.log("visit login page")
    loginPage.visit();

    console.log("click on logo button")
    loginPage.clickOnLogo();

    console.log("verify user redirected to the homepage");
    cy.url().should("equal", "https://prep.brownells.com/");
  })

  it.only('User can login successfully when user input valid information', () => {
    console.log("visit login page");
    loginPage.visit();

    console.log("input username & password & click to signin button");
    loginPage.login(usersData.username,usersData.password);

    console.log("verify user redirected to the homepage");
    cy.url().should("equal", "https://prep.brownells.com/");

    console.log("verify username displayed on welcome message");
    homePage.clickOnMyAccountBtn();
    homePage.assertWelcomeMessageContains("Hi");
  });
})