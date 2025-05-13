/* eslint-disable no-undef */
describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado inicial de la App
    cy.visit('/')

    // 02. Act: Interacción con la App (realizar acciones)
    cy.get('h1')
      .contains('Home')
  })

  it('Probar el login como CUSTOMER', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')
    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[type=email]')
      .type('drstrange@marvel.com')

    cy.get('input[type=password]')
      .type('multiverso')

    cy.get('button[type=submit]')
      .click()

    cy.wait('@login')
    // 03. Assert
    cy.get('h1')
      .contains('Dashboard')
  })

  it('Probar el login como ADMIN y me debe llevar a Login', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')
    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[type=email]')
      .type('superman@dc.com')

    cy.get('input[type=password]')
      .type('superman')

    cy.get('button[type=submit]')
      .click()

    cy.wait('@login')

    cy.get('nav > ul li:last')
      .click()
    // 03. Assert
    cy.get('h1')
      .contains('Please sign in')
  })
})
