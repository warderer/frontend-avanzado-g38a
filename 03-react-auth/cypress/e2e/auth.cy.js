/* eslint-disable no-undef */
describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado inicial de la App
    cy.visit('/')

    // 02. Act: Interacción con la App (realizar acciones)
    cy.get('h1')
      .contains('Home')
  })
})
