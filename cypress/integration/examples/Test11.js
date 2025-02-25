import HomePage from "../../support/pageObjects/HomePage";

describe("End to End ecommerce Test", () => {
  before(function () {
    //runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
      this.homePage = new HomePage();
    });
  });
  it("Submit Order", function () {
    cy.visit(Cypress.env("url") + "/loginpagePractise/#");
    //this.homePage.goTo("https://rahulshettyacademy.com/loginpagePractise/#");
    const productPage = this.homePage.login(
      this.data.username,
      this.data.password
    );

    const productName = this.data.productName;
    productPage.pageValidation();
    productPage.getCardCount().should("have.length", "4");
    productPage.selectProduct(productName);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCart();
    cartPage.sumOfProducts().then(function (sum) {
      expect(sum).to.be.lessThan(200000);
    });
    const confirmationPage = cartPage.chechoutItems();
    confirmationPage.submitFormDetails();
    confirmationPage.getAlertMessage().should("contain", "Success");
  });
});
