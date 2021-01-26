/* eslint-env mocha */
describe('todos API', () => {

    it('classic vanilla javascript', () => {
        let xmlHttp = new XMLHttpRequest()
        xmlHttp.open('GET', Cypress.config('baseUrl') + '/api/v2/pokemon', false)
        xmlHttp.send(null)
            
        assert.equal(xmlHttp.readyState, 4) 
        assert.equal(xmlHttp.status, 200) 

        let responseObj = JSON.parse(xmlHttp.responseText)
        assert.equal(responseObj.count, 1118)
        assert.equal(responseObj.results.length, 20)
    })

    const getItems = () =>
        cy.request('/api/v2/pokemon')
            .its('body')

    it('returns JSON', () => {
        cy.request('/api/v2/pokemon')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('count prop', () => {
        getItems().its('count')
            .should('be.equal', 1118)
    })

    it('loads 20 items', () => {
        getItems().its('results')
            .should('have.length', 20)
    })

    it('returns name + url props', () => {
        getItems().its('results')
            .each(value =>
                expect(value).to.have.all.keys('name', 'url')
            )
    })
  })