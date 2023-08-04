class PlpPage {
    url = "https://prep.brownells.com/optics/scopes/scope-accessories/"

    elements = {
        productList: () => cy.get("div[data-auto-name='plp-product-list']"),
    }

    visit() {
        cy.visit(this.url);
    }

    quickAddSingleSKUProduct(){
        this.elements.productList()
            .children("")
    }
}

export default PlpPage