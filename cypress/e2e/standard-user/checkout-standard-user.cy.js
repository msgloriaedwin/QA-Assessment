describe('Checkout Process', () => {

    beforeEach(() => {
     
      cy.clearCookies();
      cy.clearLocalStorage();
      
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('[type="password"]').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', 'inventory.html');
    });
  
    it('should complete the checkout process', () => {
      // Add products to the cart
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  
      // View Cart
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', 'cart.html');
  
      // Proceed to checkout
      cy.get('#checkout').click();
      cy.url().should('include', 'checkout-step-one.html');
  
      // Fill in checkout information
      cy.get('#firstName').type('Gloria');
      cy.get('[name="lastName"]').type('Edwin');
      cy.get('[data-test="postalCode"]').type('1011245');
  
      // Continue to the next step
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', 'checkout-step-two.html');
  
      // Verify total amount and items in the cart
      cy.get('.cart_item').should('have.length', 2); 
      cy.get('.summary_total_label').should('exist'); 
  
      // Finish the checkout process
      cy.get('[data-test="finish"]').click();
      cy.url().should('include', 'checkout-complete.html');
  
      // Verify the checkout completion message
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
  });