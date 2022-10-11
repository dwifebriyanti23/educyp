/// <reference types='cypress' />

describe('Working with input', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
        cy.url().should('include', 'ogin.html')
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });

    it('Should click checkbox', () => {
        cy.get('[type="checkbox"]').click()
    });

    it('Should click the sign in button', () => {
        cy.contains("Sign in").click()
    });

});