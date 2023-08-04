import HomePage from "../pages/homepage";
import searchData from "../fixtures/search.json"

let homePage = new HomePage();

describe('Search', () => {
  it('passes', () => {
    cy.log("visit homepage");
    homePage.visit();
    
    cy.log("input text to search bar");
    homePage.inputTextToSearchBar(searchData.keywordDefault);

    cy.log("verify search result show result match product name with keyword");
    homePage.assertResultListHaveItems();
    homePage.assertResultHaveTitleContainKeyword(searchData.keywordDefault)
  })
})