const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("que o usuário acesse a página da Automation Exercice", () => {
  cy.navigate();
});

When("informa email e senha válidos", () => {
  cy.login(Cypress.env('email'), Cypress.env('senha'));
});

When("o usuário clica no botão de login", () => {
  cy.buttonLogin();
});

Then("o nome do usuário deve ser exibido no canto superior direito da página", () => {
  cy.url().should("eq", `${Cypress.config("baseUrl")}`);
  cy.get('.active > :nth-child(1) > h1').contains('AutomationExercise')
});