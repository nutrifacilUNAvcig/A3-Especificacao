Funcionalidade: Seleção de Dieta

  Cenário: Usuário escolhe dieta Mediterrânea
    Dado que o usuário seleciona a dieta "Mediterrânea"
    E informa peso "70", altura "170", idade "30" e sexo "Feminino"
    E define o objetivo como "Emagrecimento"
    Quando solicita o plano alimentar
    Então o sistema deve sugerir refeições com azeite, peixes e grãos integrais
