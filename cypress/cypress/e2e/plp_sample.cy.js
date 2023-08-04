import PlpPage from "../pages/plp1"

let plpPage = new PlpPage();

describe('PLP', () => {
  it('user can add to cart successfully when click on Quick Add CTA', () => {
    cy.log("visit plp page");
    plpPage.visit();
  })
})