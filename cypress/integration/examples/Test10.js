describe("Calendar Test", () => {
  it("Verify date selection", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.get(".react-date-picker__inputGroup").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__viewContainer button").each(($el) => {
      if ($el.text().trim() === "2027") {
        cy.wrap($el).click();
      }
    });
    cy.get(".react-calendar").contains("June").click();
    cy.get(".react-calendar").contains("15").click();
  });
  it("Other way to select date", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const monthNumber = "6";
    const dayNumber = "15";
    const yearNumber = "2027";
    const expectedList = [monthNumber, dayNumber, yearNumber];
    cy.get(".react-date-picker__inputGroup").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.contains("button", yearNumber).click();
    cy.get(".react-calendar__year-view__months__month")
      .eq(Number(monthNumber - 1))
      .click();
    cy.contains("abbr", dayNumber).click();
    //Assertion
    cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
      cy.wrap($el).invoke("val").should("eq", expectedList[index]);
    });
  });
});
