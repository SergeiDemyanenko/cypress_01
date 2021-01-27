describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://www.udemy.com')

    cy.get('[placeholder="Search for anything"]')
      .should('have.attr', 'placeholder', 'Search for anything')
      .and('have.css', 'position', 'static')
      .click()
      .type('java')
      .type('{enter}')

    // To make an assertion about the current subject
    cy.get('.udlite-heading-xxl')
      .should('have.text', '10,000 results for “java”')
  })
})