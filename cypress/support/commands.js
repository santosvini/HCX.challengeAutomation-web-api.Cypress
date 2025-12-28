// -- This is a parent command --
Cypress.Commands.add('navigate', () => { 
  cy.visit("/login");
  cy.title().should('be.equal', 'Automation Exercise - Signup / Login')
});

Cypress.Commands.add('login', (email, senha) => { 
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
})

Cypress.Commands.add('buttonLogin', () => { 
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('searchProduct', (product) => {
  cy.url().should("eq", `${Cypress.config("baseUrl")}`);
  cy.get('a[href="/products"]').click().should('be.visible');
  cy.get('[name="search"]').type(product);
  cy.get('#submit_search').click();
  cy.get('.productinfo').should('contain.text', product);
});

Cypress.Commands.add('showProducts', () => {
  cy.get('.col-sm-9').contains('Searched Products').should('be.visible');
  cy.get('.productinfo > .btn').should('have.length.greaterThan', 0);
});

Cypress.Commands.add('addToCart', () => {
  cy.get('.productinfo > .btn').first().click();
  cy.get('.modal-content').should('be.visible').contains('Added');
});

Cypress.Commands.add('shoppingCart', (product) => {
  cy.get('u').should('be.visible').click();
  cy.url().should("eq", `${Cypress.config("baseUrl")}view_cart`);
  cy.get('.cart_info').should('contain.text', product);
});

Cypress.Commands.add('productsScreenPayments', (expectvalue) => {
  cy.get('.table-responsive').should('contain.text', 'Top');
  cy.get('h4 > b').should('contain.text', 'Total Amount');

  if (expectvalue) {
    cy.get('.cart_total_price').should('contain.text', expectvalue);
  } else {
    cy.get('.cart_total_price').should('exist');
  }
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })