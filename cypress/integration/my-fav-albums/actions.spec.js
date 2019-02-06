/// <reference types="Cypress" />
import { element } from 'prop-types';

context('Actions', () => {
  beforeEach(function() {
    cy.visit('/');

    // alias
    cy.fixture('albums').as('albums');
  });

  it('Album creation & form cleaned up', function() {
    const album = this.albums[0];

    createAlbum(album);

    // album insertion ok
    cy.get('[data-test=album-group-list]')
      .children()
      .should('have.length', 1);
    cy.get('[data-test=album-group-list]')
      .children()
      .should('contain', album.artist);
    cy.get('[data-test=album-group-list]')
      .children()
      .should('contain', album.name);
    // form cleaned up
    cy.get('[data-test=album-builder-artist-input]')
      .find('input')
      .should('be.empty');
    cy.get('[data-test=album-builder-album-input]')
      .find('input')
      .should('be.empty');
  });

  it('Albums list in default order', function() {
    const [albumA, albumB, albumC] = this.albums;

    createAlbum(albumA);
    createAlbum(albumB);
    createAlbum(albumC);

    cy.get('[data-test=album-group-list]')
      .children()
      .should('have.length', this.albums.length)
      .each((element, index) => {
        cy.wrap(element).should('contain', this.albums[index].name);
        cy.wrap(element).should('contain', this.albums[index].artist);
      });
  });

  it('Albums list in artist order', function() {
    const [albumA, albumB, albumC] = this.albums;

    createAlbum(albumA);
    createAlbum(albumB);
    createAlbum(albumC);

    // select order by
    cy.chooseMaterialUiSelectOption('#select-order', '[data-value=artist]');

    const albumsSorted = this.albums.sort((a, b) =>
      a.artist.localeCompare(b.artist)
    );

    cy.get('[data-test=album-group-list]')
      .children()
      .should('have.length', this.albums.length)
      .each((element, index) => {
        cy.wrap(element).should('contain', albumsSorted[index].name);
        cy.wrap(element).should('contain', albumsSorted[index].artist);
      });
  });

  it('Albums list in name order', function() {
    const [albumA, albumB, albumC] = this.albums;

    createAlbum(albumA);
    createAlbum(albumB);
    createAlbum(albumC);

    // select order by
    cy.chooseMaterialUiSelectOption('#select-order', '[data-value=name]');

    const albumsSorted = this.albums.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    cy.get('[data-test=album-group-list]')
      .children()
      .should('have.length', this.albums.length)
      .each((element, index) => {
        cy.wrap(element).should('contain', albumsSorted[index].name);
        cy.wrap(element).should('contain', albumsSorted[index].artist);
      });
  });
});

function createAlbum(album) {
  cy.get('[data-test=album-builder-artist-input]')
    .find('input')
    .type(album.artist);
  cy.get('[data-test=album-builder-album-input]')
    .find('input')
    .type(album.name);
  cy.get('[data-test=album-builder-form]').submit();
}
