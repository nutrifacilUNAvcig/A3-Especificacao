import { Given, When, Then, Before } from '@cucumber/cucumber';
import assert from 'assert';
import axios from 'axios';

let resposta: any;
let payload: any = {};

Before(() => {
  resposta = null;
  payload = {
    dieta: "Mediterrânea",
    peso: 70,
    altura: 170,
    idade: 30,
    sexo: "Feminino",
    objetivo: "Emagrecimento",
    preferencias: {},
    alergias: []
  };
});

Given('que o usuário seleciona a dieta {string}', (dieta: string) => {
  payload.dieta = dieta;
});

Given('informa peso {string}, altura {string}, idade {string} e sexo {string}', (peso, altura, idade, sexo) => {
  payload.peso = parseFloat(peso);
  payload.altura = parseFloat(altura);
  payload.idade = parseInt(idade);
  payload.sexo = sexo;
});

Given('define o objetivo como {string}', (objetivo: string) => {
  payload.objetivo = objetivo;
});

When('solicita o plano alimentar', async () => {
  try {
    const res = await axios.post('http://localhost:3000/dietas/plano', payload);
    resposta = res.data;
  } catch (err: any) {
    resposta = err.response?.data || err;
  }
});

Then('o sistema deve sugerir refeições com azeite, peixes e grãos integrais', () => {
  const refeicoes = resposta.recomendacoes?.refeicoes?.flatMap((r: any) => r.itens.join(', ')).join(', ') || '';
  assert.ok(refeicoes.includes("azeite") || refeicoes.includes("Peixe") || refeicoes.includes("Arroz integral"));
});
