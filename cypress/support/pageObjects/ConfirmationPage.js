class ConfirmationPage {
  submitFormDetails() {
    //cy.submitFormDetails();
    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a", { timeout: 10000 }).click();
    cy.get(".ng-untouched > .btn").click();
  }
  getAlertMessage() {
    return cy.get(".alert-success");
  }
}
export default ConfirmationPage;
