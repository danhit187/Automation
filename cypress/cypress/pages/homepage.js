class HomePage {
    url = "https://inte.brownells.com/"

    elements = {
        myAccountBtn: () => cy.get('.header__util-account-btn'),
        welcomeMsg: () => cy.get("a[data-auto-name='header-username']"),
        searchInput: () => cy.get('.header-wrapper__search-bar__input__text > input'),
        searchResult: () => cy.get('.search-result__list'),
        searchResultItem: () => cy.get('.search-result__list > *'),
    }

    visit(){
        cy.visit(this.url);
    }

    inputTextToSearchBar(text){
        cy.intercept('POST', '**/api/v2/autocomplete').as('hawkSearchAutoComplete')
        this.elements.searchInput()
            .type(text)
            cy.wait('@hawkSearchAutoComplete').its('response.statusCode').should('equal', 200)
    }

    clickOnMyAccountBtn() {
        this.elements.myAccountBtn().click();
    }

    assertWelcomeMessageContains(text) {
        this.elements.welcomeMsg()
            .invoke("text")
            .should("contains", text);
    }

    assertResultListHaveItems(){
        this.elements.searchResultItem()
            .should("have.length",3);
    }

    assertResultHaveTitleContainKeyword(keyword){
        this.elements.searchResultItem()
            .find(".search-result__item__title")
            .each(($element) => {
                let title = $element.text().toLowerCase();
                cy.wrap(title).should("contain", keyword);
            });
    }
}

export default HomePage