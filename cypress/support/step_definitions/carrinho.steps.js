const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário esteja na página inicial do site", () => {
  cy.navigate();
  cy.login(Cypress.env('email'), Cypress.env('senha'));
  cy.buttonLogin()
});

When('o usuário realiza uma busca por "Dress"', () => {
  cy.searchProduct('Dress');
});

Then('os resultados da busca devem exibir produtos relacionados a "Dress"', () => {
  cy.showProducts();
});

When('o usuário adiciona o primeiro produto da lista ao carrinho de compras', () => {
  cy.addToCart();
});

Then('o produto deve ser visualizado com sucesso ao carrinho de compras', () => {
  cy.shoppingCart('Dress');
});