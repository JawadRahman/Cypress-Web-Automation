describe('Scroll Demo', () => {
    it('Check Balance', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        //cy.scrollTo('bottom')
        cy.scrollTo('top')
        cy.scrollTo(0, 100)
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
    })

})


