/// <reference types="cypress" />

describe('Empty State', () => {
  it('loads app and navigates to empty state page', () => {
    cy.visit('/');
    cy.get(".bx--header__action--menu").click();
    cy.contains("li", /patterns/i).click();
    cy.contains("li", /empty state/i).click();
  });

  it('navigates to illustrations and check if EmptyState card exists', () => {
   const image = cy.get('[alt="Illustration of a closed box."]');
   image.should('exist');
   image.should('be.visible').and(img => {
     expect(img[0].naturalWidth).to.be.greaterThan(0)
   })
  });

})