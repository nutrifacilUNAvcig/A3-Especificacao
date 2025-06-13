export interface PlanoAlimentar {
  tmb: number;
  imc: number;
  aguaDiaria_ml: number;
  recomendacoes: {
    refeicoes: {
      periodo: string;
      itens: string[];
      caloriasEstimadas: number;
    }[];
  };
}
