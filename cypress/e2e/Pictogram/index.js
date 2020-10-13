/// <reference types="cypress" />


describe('Illustrations', () => {
  it('should navigate to illustrations page from index', () => {
    cy.visit('/');
    cy.get(".bx--header__action--menu").click();
    cy.contains("li", /illustrations/i).click();
  });
  
  it('should check if first image in Pictogram is rendering', () => {
    const image = cy.get('[alt="Illustration of an Airport."]');
    image.should('exist');
    image.should('have.attr', 'src').and("match", /d05801e41bf7b190681a15de6b20d05a/)
  });

  it('can download a file', () => {
    cy.get('[data-cypress=Airport]').click();
    
    // cy.task("deleteFile", 'LightTheme_Airport.svg')
    const path = cy.task("findFile", 'LightTheme_Airport.svg').then((file => {
      console.log('FILE', file);
      cy.readFile(file).should('match', /svg/i);
    }));
  })

  it('should test input field and type "truck" ', () => {
    const input = cy.get('[data-cypress=illustrations]')
    input.type('truck');
    
    const image = cy.get('[alt="Illustration of a truck."]');
    image.should('have.attr', 'src').and("match", /e4e2e0a1580bb035e2a6f8a08727d125/);
  });
  
  it('should check if first image in Pictogram has been removed', () => {
    cy.get('[alt="Illustration of an Airport."]').should('not.exist')
  });
});



