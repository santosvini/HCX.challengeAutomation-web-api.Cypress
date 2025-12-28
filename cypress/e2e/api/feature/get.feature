Feature: Testes de API Scenario:
  Scenario: Validar resposta da API
    When eu faço uma requisição GET para a API Trello
    Then o status da resposta deve ser 200
    Then o corpo da resposta deve conter os dados do campo name da estrutura list