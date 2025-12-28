Feature: Validar os produtos na tela de pagamento
  Verificar os produtos exibidos na tela de pagamento após adicionar um produto ao carrinho.
  Scenario: Verificar produtos do carrinho na tela de pagamento
    Given que o usuário esteja na página inicial
    When o usuário realiza uma busca por "Top"
    Then os resultados da busca devem exibir produtos relacionados a "Top"
    When o usuário adiciona o produto da lista ao carrinho de compras
    Then o produto deve ser visualizado com sucesso na tela do carrinho de compras
    When o usuário navega para a tela de pagamento
    Then os produtos exibidos na tela de pagamento devem corresponder aos produtos adicionados ao carrinho