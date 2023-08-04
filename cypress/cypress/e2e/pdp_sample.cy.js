import PdpPage from "../pages/pdp1"
import productData from "../fixtures/products.json"

let pdpPage = new PdpPage();

describe('PDP', () => {
  it('QDP label do not display when user visit product', () => {
    cy.visit(productData.productQDP.url);

    cy.log("assert qdp label do not display")
    pdpPage.assertQdpLabelDoNotDisplay();
  })

  it('QDP label display correctly when user choose correct variant', () => {
    cy.log("visit pdp page");
    cy.visit(productData.productQDP.url);

    cy.log("choose variant");
    for (let variant of productData.productQDP.variantItems) {
      pdpPage.selectVariant(variant);
    }

    cy.log("verify qdp display successfully");
    pdpPage.assertQdpLabelDisplay();
  });

  it.only('user can checkout with QDP correctly when user add valid quantity', () => {
    cy.log("visit pdp page");
    cy.visit(productData.productQDP.url);

    cy.log("choose variant");
    for (let variant of productData.productQDP.variantItems) {
      pdpPage.selectVariant(variant);
    }

    cy.log("verify qdp display successfully");
    pdpPage.assertQdpLabelDisplay();
    // pdpPage.clickOnQdpLabel();
    // assert qdp info display correctly with data fixtures

    cy.log("increase product quantity to match qdp");
    let qty = productData.productQDP.quantityDiscounts[0].quantity;
    pdpPage.setQuantity(qty);

    cy.log("process to checkout");
    pdpPage.clickOnAddToCart();

    cy.log("assert the price is correct");
    pdpPage.assertProductPriceEqual(productData.productQDP.quantityDiscounts[0].totalAmount);

    cy.log("add more value exceed the next threshold, the new qdp price is applied")
    pdpPage.setQuantityInMiniCart(productData.productQDP.quantityDiscounts[1].quantity);
    pdpPage.assertProductPriceEqual(productData.productQDP.quantityDiscounts[1].totalAmount);

    cy.log("add more item and price per value is count as QDP price per unit")
    pdpPage.setQuantityInMiniCart(productData.productQDP.quantityDiscounts[1].quantity + 3);
    pdpPage.assertProductPriceEqual(productData.productQDP.quantityDiscounts[1].totalAmount + 3 * productData.productQDP.quantityDiscounts[1].pricePerUnit);
    // pdpPage.increaseQtyInMiniCart()
    // pdpPage.assertProductPriceEqual(productData.productQDP.quantityDiscounts[1].totalAmount + productData.productQDP.quantityDiscounts[1].pricePerUnit);
  });
})