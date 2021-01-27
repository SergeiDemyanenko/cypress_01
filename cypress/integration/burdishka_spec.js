describe('My first test using cypress', () => {
    it('should check url', function () {
        cy.visit('https://github.com/SergeiDemyanenko/')

        cy.contains('cypress_01').click()

        cy.url().should('include', '/SergeiDemyanenko/cypress_01')
    })
})