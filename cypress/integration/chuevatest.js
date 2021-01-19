describe('My First Test', () => {
  it('My First TestGithub', () => {
    cy.visit('https://github.com/SergeiDemyanenko/cypress_01')

    cy.get('.url').should('have.text', 'SergeiDemyanenko')
    cy.get('.url').click()

  })
})