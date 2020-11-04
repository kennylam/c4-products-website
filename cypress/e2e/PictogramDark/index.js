/// <reference types="cypress" />

describe("Test illustrations 'Dark' theme library", () => {
  it("should navigate to illustrations page from index", () => {
    cy.visit("/");
    cy.get(".bx--header__action--menu").click();
    cy.contains("li", /illustrations/i).click();
  });

  it('should find and click on "Dark Theme" tab', () => {
    cy.findByText("Dark Theme").should("exist");
    const button = cy.findByText("Dark Theme").click();
  });

  it('should find the Dark themed "Airport" image exists', () => {
    cy.findByAltText(/dark illustration of an airport/i).should("exist");
  });

  it('should check if the Dark themed "Airport" image is visible', () => {
    cy.findByAltText(/dark illustration of an airport/i).should("be.visible");
  });

  it("should check if all dark images have an alt and src attribute", () => {
    cy.findAllByTestId(/dark-img-test/i).each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
      cy.wrap($el).should("have.attr", "src");
    });
  });

  it("can download a file", () => {
    cy.findAllByTestId(/dark airport/i).click();

    const path = cy.task("findFile", "DarkTheme_Airport.svg").then((file) => {
      cy.readFile(file).should("match", /svg/i);
    });

    cy.task("cleanDownloads", "DarkTheme_Airport.svg");
  });

  it('should test "Dark" tab input field and type "truck" ', () => {
    const input = cy.get("[data-cypress=dark-illustrations-search]");
    input.type("truck", { waitForAnimations: true });

    const image = cy.findByAltText(/Dark Illustration of a truck/i);
    image
      .should("have.attr", "src")
      .and("match", /fca87da56b4d370878b742d53f8000b6/);
  });

  it("should check if first image in Pictogram has been removed", () => {
    cy.findByAltText(/Dark Illustration of an Airport/i).should("not.exist");
  });
});
