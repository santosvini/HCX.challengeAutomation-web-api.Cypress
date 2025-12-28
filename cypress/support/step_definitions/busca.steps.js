const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('que o usuário acesse a página da Automation Exercice e tenha feito login', () => {
  cy.navigate();
  cy.login(Cypress.env('email'), Cypress.env('senha'));
  cy.buttonLogin()
});

When('o usuário realiza uma busca por "Shirt"', () => { 
  cy.searchProduct('Shirt');
});

Then('os resultados da busca devem exibir produtos relacionados a "Shirt"', () => {
  cy.showProducts();
});