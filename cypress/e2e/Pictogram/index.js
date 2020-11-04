/// <reference types="cypress" />

describe("Test illustrations 'Light' theme library", () => {
  it("should navigate to illustrations page from index", () => {
    cy.visit("/");
    cy.get(".bx--header__action--menu").click();
    cy.contains("li", /illustrations/i).click();
  });

  it("should check if first image in Pictogram is rendering", () => {
    const image = cy.get('[alt="Illustration of an Airport."]');
    image.should("exist");
    image
      .should("have.attr", "src")
      .and("match", /d05801e41bf7b190681a15de6b20d05a/);
  });

  it("should check if all light images have an alt and src attribute", () => {
    cy.findAllByTestId(/light-img-test/i).each(($el) => {
      cy.wrap($el).should("have.attr", "alt");
      cy.wrap($el).should("have.attr", "src");
    });
  });

  it("can download a file", () => {
    cy.get("[data-cypress=Airport]").click();

    const path = cy.task("findFile", "LightTheme_Airport.svg").then((file) => {
      cy.readFile(file).should("match", /svg/i);
    });

    cy.task("cleanDownloads", "LightTheme_Airport.svg");
  });

  it('should test input field and type "truck" ', () => {
    const input = cy.get("[data-cypress=light-illustrations-search]");
    input.type("truck", { waitForAnimations: false });

    const image = cy.get('[alt="Illustration of a truck."]');
    image
      .should("have.attr", "src")
      .and("match", /e4e2e0a1580bb035e2a6f8a08727d125/);
  });

  it("should check if first image in Pictogram has been removed", () => {
    cy.get('[alt="Illustration of an Airport."]').should("not.exist");
  });
});

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
    cy.get("[data-cypress=Airport]").click();

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
