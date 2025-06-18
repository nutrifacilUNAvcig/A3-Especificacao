# 📊 Protótipo NutriFácil

NutriFácil é uma aplicação que ajuda usuários a escolher uma dieta apropriada, calcular suas necessidades nutricionais e obter recomendações personalizadas de alimentos. 

## 🎯 Objetivos
- **Seleção de Dieta**: Permitir que os usuários escolham entre diferentes tipos de dietas.
- **Cálculos de Nutrição**: Calcular Taxa de Metabolismo Basal (TMB), Índice de Massa Corporal (IMC) e o consumo diário de água.
- **Recomendações Personalizadas**: Fornecer recomendações de alimentos, por categoria e quantidade, baseadas na dieta escolhida.
- **Gerenciamento de Restrições**: Controlar alergias e intolerâncias alimentares.
- **Testes e Documentação**(à desenvolver): Criar testes de usabilidade e funcionalidade, além de documentar todo o projeto em **README.md**, seguindo boas práticas.

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

#### Teste de Usabilidade
1. **Metas**: Defina 5 metas para medir a eficácia do sistema (ex: "O usuário deve conseguir configurar seu plano em ≤ 3 minutos").
2. **Template de Teste de Usabilidade**:
   - Instruções para o moderador e os dados do participante (nome, perfil, data, etc.).
   - Definir tarefas e métricas de satisfação.
## 📚 Ferramentas utilizadas:
- JavaScript
- Typescript
- Nodejs
- Nestjs
- CSS
- MongoDB
