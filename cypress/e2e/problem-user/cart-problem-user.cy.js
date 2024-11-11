describe('Cart Actions', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('[type="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', 'inventory.html')
  })

  it('should add products to cart and verify', () => {
  
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    
    // Verify cart shows 6 items
    cy.get('.shopping_cart_badge').should('have.text', '6'); 
  });

  it('should remove products from cart and verify', () => {
    
    cy.get('.shopping_cart_link').click();
    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('#remove-sauce-labs-bike-light').click();
    cy.get('#remove-sauce-labs-bolt-t-shirt').click();
    cy.get('#remove-sauce-labs-fleece-jacket').click();
    cy.get('#remove-sauce-labs-onesie').click();
    cy.get('#remove-test.allthethings()-t-shirt-(red)').click();

    // Verify the cart badge disappears, showing it’s empty
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
