const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('que o usuário esteja na página inicial', () => {
  cy.navigate();
  cy.login(Cypress.env('email'), Cypress.env('senha'));
  cy.buttonLogin()
});

When('o usuário realiza uma busca por "Top"', () => {
  cy.searchProduct('Top');
});

Then('os resultados da busca devem exibir produtos relacionados a "Top"', () => {
  cy.showProducts();
});

When('o usuário adiciona o produto da lista ao carrinho de compras', () => {
  cy.addToCart();
});

Then('o produto deve ser visualizado com sucesso na tela do carrinho de compras', () => {
  cy.shoppingCart('Top');
});

When('o usuário navega para a tela de pagamento', () => {
  cy.get('.col-sm-6 > .btn').contains('Proceed To Checkout').click();
  cy.url().should("eq", `${Cypress.config("baseUrl")}checkout`);
});

Then('os produtos exibidos na tela de pagamento devem corresponder aos produtos adicionados ao carrinho', (value) => {
  cy.productsScreenPayments(value)
});