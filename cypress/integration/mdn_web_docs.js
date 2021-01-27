describe('Test Mozilla Docs page', () => { 
   it('Open Mozilla Docs page', () => { 

      cy.visit('https://developer.mozilla.org/')

      cy.get('div#content')
         .get('div.center')
         .get('h1')
         .get('span.highlight-span')
         .should('be.visible')
         .should('have.text', 'Resources for developers, by developers.')
   })

   it('site provides documentation about JavaScript in Russian', () => {
      cy.get('button[id="technologies-button"]')
         .click()
         .get('a[href *= "JavaScript"]')
         .click()
         .get('select')
         .select('Русский')
         .get('button')
         .contains('Change language')
         .click()
         .get('article')
         .get('h2[id="Учебные_материалы"]').scrollIntoView()
      
      cy.get('article')
         .should('contain', 'Научитесь программировать на JavaScript вместе с нашим руководством.')
   })

})