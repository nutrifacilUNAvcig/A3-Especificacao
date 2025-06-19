# 📊 Protótipo NutriFácil

NutriFácil é uma aplicação que ajuda usuários a escolher uma dieta apropriada, calcular suas necessidades nutricionais e obter recomendações personalizadas de alimentos. 

## 🎯 Objetivos
- **Seleção de Dieta**: Permitir que os usuários escolham entre diferentes tipos de dietas.
- **Cálculos de Nutrição**: Calcular Taxa de Metabolismo Basal (TMB), Índice de Massa Corporal (IMC) e o consumo diário de água.
- **Recomendações Personalizadas**: Fornecer recomendações de alimentos, por categoria e quantidade, baseadas na dieta escolhida.
- **Gerenciamento de Restrições**: Controlar alergias e intolerâncias alimentares.
- **Testes e Documentação**(à desenvolver): Criar testes de usabilidade e funcionalidade, além de documentar todo o projeto em **README.md**, seguindo boas práticas.
## 🛠️ Ferramentas Utilizadas
- **HTML e CSS**: Linguagens de marcação para usar o front-end.
- **JavaScript**: Linguagem de programação principal para lógica de front-end.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a manutenção do código, usado no back-end.
- **Node.js**: Ambiente de execução JavaScript no lado servidor e usado para API e back-end.
- **NestJS**: Framework para construir aplicações escaláveis e eficientes, utilizando TypeScript e usado para fazer o back-end, principalmente.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenamento de dados.
- **TS e Gherkin**: Para testes.

- **Lembre-se para rodar o projeto instalar nest e rodar o servidor e o Mongo DB**

## 📑 Especificação de Requisitos

### 1. Dietas e Suas Indicações

- **Mediterrânea**: Enfatiza azeite de oliva, peixes, grãos integrais, legumes e frutas; ideal para saúde cardiovascular e manutenção de peso.
- **Low Carb**: Reduz carboidratos, aumenta proteínas e gorduras boas; focada em emagrecimento e controle glicêmico.
- **Cetogênica**: Muito baixa em carboidratos e alta em gorduras; promove perda rápida de gordura e aumento de foco.
- **Vegetariana**: Exclusão de carnes; inclui ovos e laticínios, grãos, vegetais e leguminosas.

### 2. Entradas do Usuário

Os usuários devem fornecer as seguintes informações:
1. **Dieta**: Opções disponíveis: Mediterrânea, Low Carb, Cetogênica ou Vegetariana.
2. **Peso** (kg)
3. **Altura** (cm)
4. **Idade** (anos)
5. **Sexo**: Masculino / Feminino
6. **Objetivo**: 
   - Emagrecimento
   - Hipertrofia
7. **Preferências Alimentares** por categoria.
   - Proteínas
   - Legumes
   - Verduras
   - Carboidratos
8. **Alergias/Intolerâncias**: Como Lactose, Glúten, etc.

### 3. Cálculos

- **Taxa de Metabolismo Basal (TMB)** – Fórmula de Mifflin:
  - Homens: `TMB = 10×peso + 6,25×altura – 5×idade + 5`
  - Mulheres: `TMB = 10×peso + 6,25×altura – 5×idade – 161`

- **Índice de Massa Corporal (IMC)**:
  - `IMC = peso / (altura/100)²`
  - Classificações:
    - < 18,5: Abaixo do Peso
    - 18,5–24,9: Peso Normal
    - 25–29,9: Sobrepeso
    - ≥ 30: Obesidade

- **Consumo Diário de Água**: 
  - `35 ml × peso (kg)`

### 4. Bônus (Opcional)
- Receitas para cada dieta.
- Gráfico de consumo de água.

### 5. Testes

#### Teste de Funcionalidade

1. **Cenário em Gherkin**:
    ```gherkin
    Funcionalidade: Seleção de Dieta
    
      Cenário: Usuário escolhe dieta Mediterrânea
        Dado que o usuário seleciona a dieta "Mediterrânea"
        E informa peso "70", altura "170", idade "30" e sexo "Feminino"
        Quando solicita o plano alimentar
        Então o sistema deve sugerir refeições com azeite, peixes e grãos integrais
    ```
2. **Casos de Teste**:
   
| ID   | Funcionalidade                | Pré-Condição                 | Passos                                                        | Dados de Entrada                                      | Resultado Esperado                                                        | Resultado Obtido           | Status | Observações               |
|------|-------------------------------|------------------------------|--------------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------------|----------------------------|--------|--------------------------|
| FT-01| Seleção de Dieta Mediterrânea | Usuário autenticado          | Acessar opção "Mediterrânea", preencher Peso, Altura, Idade, Sexo e solicitar plano | Dieta: `Mediterrânea`, Peso: `70`, Altura: `170`, Idade: `30`, Sexo: `Feminino` | O sistema exibe plano com refeições ricas em azeite, peixes e grãos integrais. | _(preencher após a execução)_  |        |                          |
| FT-02| Cálculo do IMC               | Usuário informa dados        | Acessar a tela de cálculo, inserir peso e altura e calcular  | Peso: `70`, Altura: `170`                         | O sistema exibe o IMC correto para os dados fornecidos.                  | _(preencher após a execução)_  |        |                          |
| FT-03| Cálculo da TMB                | Usuário informa idade, peso e altura | Acessar a tela de cálculo de TMB, inserir dados e calcular | Peso: `70`, Altura: `170`, Idade: `30`, Sexo: `Feminino` | O sistema exibe a TMB correta para os dados fornecidos.                  | _(preencher após a execução)_  |        |                          |
| FT-04| Registro de Alergias          | Usuário autenticado          | Acessar a tela de registro, inserir alergias e salvar       | Alergias: `Lactose`                               | O sistema confirma o registro das alergias fornecidas.                   | _(preencher após a execução)_  |        |                          |
| FT-05| Recebimento de Recomendações  | Usuário escolheu dieta       | Acessar tela de recomendações e solicitar sugestões          | Dieta: `Low Carb`                                 | O sistema exibe recomendações de refeições específicas.                   | _(preencher após a execução)_  |        |                          |


#### Teste de Usabilidade
1. **Metas para Medir a Eficácia do Sistema**:
   - O usuário deve conseguir selecionar sua dieta em até 30 segundos.
   - O usuário deve completar o preenchimento de dados pessoais em até 60 segundos.
   - O sistema deve gerar o plano alimentar em até 15 segundos.
   - O usuário deve ser capaz de identificar onde registrar alergias/intolerâncias em até 30 segundos.
   - O usuário deve conseguir configurar seu plano alimentar em ≤ 3 minutos.

2. **Template de Teste de Usabilidade**:
   - Instruções para o moderador e os dados do participante (nome, perfil, data, etc.).
   - Definir tarefas e métricas de satisfação.

## 💡 Ideias de Desenvolvimento
- **Sugestões de Refeições**: Criar um recurso que sugere refeições específicas com base em preferências e restrições do usuário.
- **Calculadora de Macronutrientes**: Implementar uma ferramenta que calcula a distribuição de macronutrientes (carboidratos, proteínas e gorduras) com base nas metas do usuário.
- **Integração com APIs Externas**: Utilizar APIs de nutrição para fornecer informações em tempo real sobre alimentos e receitas.
- **Planos de Refeições Personalizados**: Gerar planos de refeições semanais com opções de substituição.
- **Rastreamento de Consumo de Água**: Criar uma seção onde os usuários possam registrar e monitorar sua ingestão de água diariamente.
- **Notificações Personalizadas**: Adicionar um sistema de notificações que lembre os usuários de beber água ou seguir seu plano alimentar.
- **Feedback do Usuário**: Implementar um sistema para coletar feedback dos usuários sobre as recomendações de alimentos e planos de refeições.
- **Versão Móvel da Aplicação**: Criar uma versão responsiva ou um aplicativo móvel para facilitar o acesso em dispositivos móveis.
- **Assistente Virtual com IA**: Implementar um sistema de inteligência artificial que auxilie os usuários na escolha da dieta mais adequada com base em suas preferências, histórico de saúde e objetivos, utilizando algoritmos de aprendizado de máquina.

## 📚 Referências:
- Documentação do [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- Documentação do [TypeScript](https://www.typescriptlang.org/docs/)
- Documentação do [Node.js](https://nodejs.org/en/docs/)
- Documentação do [NestJS](https://docs.nestjs.com/)
- Documentação do [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- Documentação do [MongoDB](https://docs.mongodb.com/)
