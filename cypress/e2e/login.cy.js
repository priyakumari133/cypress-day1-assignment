describe('Home Page Test', () => {
    it('should load the homepage and show login elements', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('input[name="username"]').should('be.visible')
      cy.get('input[name="password"]').should('be.visible')
      cy.get('button[type="submit"]').should('be.visible')
    })
  })
  