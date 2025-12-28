Feature: Login

    Conseguir fazer login com sucesso na aplicação, com dados válidos.
  Scenario: Acessar a página 
    Given que o usuário acesse a página da Automation Exercice
    When informa email e senha válidos
    When o usuário clica no botão de login
    Then o nome do usuário deve ser exibido no canto superior direito da página