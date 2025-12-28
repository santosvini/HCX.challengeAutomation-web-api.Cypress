Feature: Incluir produto no carrinho de compras
  Adicionar um produto ao carrinho de compras após realizar uma busca no site.
  Scenario: Buscar produto e adicionar ao carrinho
    Given que o usuário esteja na página inicial do site
    When o usuário realiza uma busca por "Dress"
    Then os resultados da busca devem exibir produtos relacionados a "Dress"
    When o usuário adiciona o primeiro produto da lista ao carrinho de compras
    Then o produto deve ser visualizado com sucesso ao carrinho de compras