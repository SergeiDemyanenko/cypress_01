describe('My First Test', () => {
  it('clicking "Docs" redirects to the right page', () => {
    cy.visit('https://code.visualstudio.com')

    cy.get('#nav-docs').click()

    cy.url().should('include', '/docs')

    cy.get('a.docs-home')
      .should('have.css', 'color', 'rgb(0, 113, 188)')
  })
})