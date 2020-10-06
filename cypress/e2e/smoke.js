/// <reference types="cypress" />

describe('App', () => {
  it("loads and navigates to index page", () => {
    cy.visit('/')
  })
}) 