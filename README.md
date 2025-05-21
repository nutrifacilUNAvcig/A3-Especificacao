# 📊 NutriFácil

## 📝 Descrição do Trabalho - 20 pontos
Desenvolver em **grupo (máx. 6 alunos)** uma solução completa para o **NutriFácil**: um sistema de planejamento alimentar personalizado, que permita ao usuário montar seu plano alimentar conforme suas preferências e objetivos.

## 🎯 Objetivos
- Implementar funcionalidades de seleção de dieta, cálculo de TMB, IMC e consumo de água.
- Exibir recomendações de alimentos (proteínas, legumes, verduras, carboidratos) de acordo com a dieta escolhida.
- Gerenciar restrições (alergias, intolerâncias).
- Criar testes de usabilidade/funcionalidade em **Gherkin** (mín. 5 cenários).
- Documentar todo o projeto em **README.md** seguindo boas práticas.
- Apresentar em slides (Introdução, Motivação, Desenvolvimento, Resultados, Considerações Finais).

## 🚀 Instruções Gerais

1. **Grupo & Organização**  
   - Máximo de **6 integrantes** por grupo.  
   - Crie uma **organização** no GitHub para seu grupo e armazene todo o código lá.  
   - Use **GitHub Projects** para planejar, priorizar e acompanhar as tarefas (colunas: Backlog, Em progresso, Revisão, Concluído). Distribua as tarefas e defina responsáveis.

2. **Repositório & README**  
   - O repositório principal deve conter um `README.md` completo e organizado.  
   - Consulte [Como escrever um bom README para seu projeto do GitHub](https://www.freecodecamp.org/portuguese/news/como-escrever-um-bom-arquivo-readme-para-seu-projeto-do-github/) :contentReference[oaicite:0]{index=0}.

3. **Testes & Cenários Gherkin**  
   - Crie no mínimo **5 cenários** para testes de funcionalidade ou usabilidade.  
   - 

4. **Apresentação**  
   - Pasta `slides/` com arquivo de apresentação (PowerPoint, PDF ou Google Slides).  
   - Slides devem conter:  
     1. **Introdução**  
     2. **Motivação**  
     3. **Desenvolvimento**  
     4. **Resultados**  
     5. **Considerações Finais**  
   - **Todos** os integrantes devem estar aptos a responder perguntas.  
   - **1 ou 2 alunos** farão a apresentação em **5 minutos**.

---

## 📑 Especificação de Requisitos

### 1. Dietas e Indicações
- **Mediterrânea**: azeite de oliva, peixes, grãos integrais, legumes e frutas. Foco em saúde cardiovascular e manutenção de peso.  
- **Low Carb**: redução de carboidratos, aumento de proteínas e gorduras boas. Foco em emagrecimento e controle glicêmico.  
- **Cetogênica**: ingestão muito baixa de carboidratos e alta em gorduras. Para perda de gordura rápida e aumento de foco.  
- **Vegetariana**: sem carnes; inclui ovos, laticínios (não vegana), grãos, vegetais e leguminosas.

### 2. Entradas do Usuário
1. **Dieta**: Mediterrânea, Low Carb, Cetogênica ou Vegetariana  
2. **Peso** (kg)  
3. **Altura** (cm)  
4. **Idade** (anos)  
5. **Sexo**: Masculino / Feminino  
6. **Objetivo**:  
   - Emagrecimento (perda de gordura, redução de medidas, aumento de energia, etc.)  
   - Hipertrofia (ganho de massa, aumento de força, autoestima, etc.)  
7. **Preferência de Alimentos** (por categoria, conforme dieta)  
   - Proteínas  
   - Legumes  
   - Verduras  
   - Carboidratos  
8. **Alergias/Intolerâncias**: Lactose, Glúten, Proteína do leite, Ovo, Frutos do mar, Nenhuma

### 3. Cálculos
- **Taxa de Metabolismo Basal (TMB)** – Fórmula de Mifflin:  
  - Homens: `TMB = 10×peso + 6,25×altura – 5×idade + 5`  
  - Mulheres: `TMB = 10×peso + 6,25×altura – 5×idade – 161`

- **Índice de Massa Corporal (IMC)**:  
  `IMC = peso / (altura/100)²`  
  - < 18,5: abaixo do peso  
  - 18,5–24,9: peso normal  
  - 25–29,9: sobrepeso  
  - ≥ 30: obesidade

- **Consumo de Água Diário**:  
  `35 ml × peso (kg)`  

### 4. Bonus (opcional)
- Receitas para cada dieta  
- Gráfico de consumo de água  

---

## 🧪 Cenário em Gherkin (exemplos)

```gherkin
Funcionalidade: Seleção de Dieta

  Cenário: Usuário escolhe dieta Mediterrânea
    Dado que o usuário seleciona a dieta "Mediterrânea"
    E informa peso "70", altura "170", idade "30" e sexo "Feminino"
    Quando solicita o plano alimentar
    Então o sistema deve sugerir refeições com azeite, peixes e grãos integrais
```

---

## 📂 Estrutura Sugerida

