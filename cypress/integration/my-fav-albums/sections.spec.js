/// <reference types="Cypress" />

context('Find sections', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Find album bar', function() {
    cy.contains('My Fav Albums');
    cy.get('[data-test=album-bar]');
  });

  it('Find album builder form', function() {
    cy.get('[data-test=album-builder-form]');
  });

  it('Find album order', function() {
    cy.get('[data-test=album-order-select]');
  });

  it('Find album group', function() {
    cy.get('[data-test="album-group-list"]');
  });
});
