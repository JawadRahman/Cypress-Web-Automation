describe('ClearText', () => {
    it('Check Balance', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('form > :nth-child(2) > .input').type('Jawad')
        cy.get('form > :nth-child(2) > .input').clear()
        cy.get(':nth-child(4) > .input').type('Jawad')
        //cy.get(':nth-child(4) > .input').clear()
    })

})


