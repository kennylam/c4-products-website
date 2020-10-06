/// <reference types="cypress" />
describe('Illustrations', () => {
  it('should navigate to illustrations page from index', () => {
    cy.visit('/');
    cy.get(".bx--header__action--menu").click();
    cy.contains("li", /illustrations/i).click()
  })
});
