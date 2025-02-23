import CartPage from "./CartPage";

class ProductPage {
  pageValidation() {
    cy.contains("Shop Name").should("be.visible");
  }
  getCardCount() {
    return cy.get("app-card");
  }
  selectProduct(productName) {
    cy.get("app-card")
      .filter(`:contains("${productName}")`)
      .then(($element) => {
        cy.wrap($element).should("have.length", "1");
        cy.wrap($element).contains("button", "Add").click();
      });
  }
  selectFirstProduct() {
    cy.get("app-card").eq(0).contains("button", "Add").click();
  }
  goToCart() {
    cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").click();
    return new CartPage();
  }
}
export default ProductPage;
