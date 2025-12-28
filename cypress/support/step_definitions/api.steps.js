const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let response;

When("eu faço uma requisição GET para a API Trello", () => {
  cy.request('GET', Cypress.env("apiUrl")).then((res) => {
    response = res;
  });
});

Then("o status da resposta deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("o corpo da resposta deve conter os dados do campo name da estrutura list", () => {

    const data = response.body.data;
    const list = response.body.data.list;
    const name = response.body.data.list.name;

    expect(data).to.have.property('list');
    expect(list).to.have.property('name');
    expect(name).to.eq('Professional');
  }
);
