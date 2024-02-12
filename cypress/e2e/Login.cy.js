describe('Dropdown functionality', () => {
    it('Check Balance', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('form > :nth-child(2) > .input').type('Jawad')
        cy.get(':nth-child(4) > .input').type('Jawad')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').click()
        cy.get('#month').select(10)
        cy.get('#month').select('May')
        cy.get('#month').select('June')
    })

})


