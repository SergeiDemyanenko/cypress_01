describe('My First Test', () => {
  it('clicking "About" shows the right headings', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    cy.contains('About').click()

    cy.url().should('include', '/Wikipedia:About')

    cy.get('[placeholder="Search Wikipedia"]')
      .should('have.attr', 'placeholder', 'Search Wikipedia')
      .click()
      .type('History')
      .type('{enter}')
      .url().should('include', '/History')
  })
})

