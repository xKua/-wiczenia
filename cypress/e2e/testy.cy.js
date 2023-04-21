/// <reference types="cypress"/>

describe('Scenariusze', () => {

    it('Test case 1: Register user', () => {

        cy.visit('/')
        cy.contains('Signup / Login').click()
        cy.get('[placeholder="Name"]').type('Name')
        cy.get('[data-qa="signup-email"]').type('email@mail.comom')
        cy.get('[data-qa="signup-button"').click()
        cy.get('[id="id_gender2"]').click()
        cy.get('[id="password"]').type('1234')
        cy.get('[id="days"').select('14')
        cy.get('[id="months"]').select('July')
        cy.get('[id="years"]').select('1997')
        cy.get('[id="newsletter"]').click()
        cy.get('[id="optin"]').click()
        cy.get('[id="first_name"]').type('Name')
        cy.get('[id="last_name"]').type('Last name')
        cy.get('[id="company"]').type('Company')
        cy.get('[id="address1"]').type('Adress')
        cy.get('[id="address2"').type('Adress')
        cy.get('[id="country"]').select('Australia')
        cy.get('[id="state"').type('State')
        cy.get('[id="city"').type('City')
        cy.get('[id="zipcode"').type('05555')
        cy.get('[id="mobile_number"').type('123456789')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
    })
})