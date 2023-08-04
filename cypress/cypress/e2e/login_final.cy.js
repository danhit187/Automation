import HomePage from "../pages/homepage";
import LoginPage from "../pages/login";
import usersData from "../fixtures/users.json"

let loginPage = new LoginPage();
let homePage = new HomePage();

describe('Login page', () => {
  beforeEach(() => {
    console.log("Visit login page");
    loginPage.visit();
  })

  it('User redirect to homepage when user click on logo', () => {
    console.log("Click on logo");
    loginPage.clickOnLogo();

    console.log("Verify user is redirected to homepage successfully");
    cy.location("pathname").should('equal', "/");
  })

  it('User login successfully when user input valid data', () => {
    
    console.log("Input Username & password");
    loginPage.login(usersData.username,usersData.password);

    console.log("Verify user is redirected to homepage");
    cy.location("pathname").should('equal', "/");

    console.log("Verify hello message display on acount button");
    homePage.clickOnMyAccountBtn();
    homePage.assertWelcomeMessageContains("Hi");
  })

  it('Password display correctly when user toggle hide/show button', () => {
    console.log("Input password");
    loginPage.inputPassword(usersData.password);

    console.log("Verify password display as dot")
    loginPage.isPasswordHidden();

    console.log("Click on Show button");
    loginPage.assertHideShowBtnTextEqual("Show")
    loginPage.toggleHideShowPassword();

    console.log("Verify password display as text");
    loginPage.isPasswordShowedUp();

    console.log("Click on Hide button");
    loginPage.assertHideShowBtnTextEqual("Hide")
    loginPage.toggleHideShowPassword();

    console.log("Verify password display as dot again")
    loginPage.isPasswordHidden();
  })
})