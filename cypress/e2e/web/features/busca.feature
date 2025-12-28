Feature: Fazer busca na aplicação

  Realizar uma busca por um produto existente e verificar se os resultados são exibidos corretamente.
  Scenario: Buscar por um produto existente
    Given que o usuário acesse a página da Automation Exercice e tenha feito login
    When o usuário realiza uma busca por "Shirt"
    Then os resultados da busca devem exibir produtos relacionados a "Shirt"