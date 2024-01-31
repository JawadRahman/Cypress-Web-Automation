describe('Login Test Scenario', () => {
    it('Lunch the test application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('test')
        cy.get("input[name='password']").type('test')
    })

})


