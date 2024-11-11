
describe('Login Test', () => {
  it('Should login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('[type="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', 'inventory.html')
  })
})