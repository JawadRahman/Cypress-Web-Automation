describe('Registration functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('Jawad')
        cy.get("input[id='customer.lastName']").type('Rahman')
        cy.get("input[id='customer.address.street']").type('Mohakhali')
        cy.get("input[id='customer.address.city']").type('Dhaka')
        cy.get("input[id='customer.address.state']").type('Dhaka')
        cy.get("input[id='customer.address.zipCode']").type('1212')
        cy.get("input[id='customer.phoneNumber']").type('01234567891')
        cy.get("input[id='customer.ssn']").type('123')
        cy.get("input[id='customer.username']").type('Jawad')
        cy.get("input[id='customer.password']").type('Jawad')
        cy.get('#repeatedPassword').type('Jawad')
        cy.get('[colspan="2"] > .button').click()
    })

})


