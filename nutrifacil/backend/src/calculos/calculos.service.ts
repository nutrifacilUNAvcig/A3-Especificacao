import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculosService {
  // Método para calcular a Taxa de Metabolismo Basal (TMB)
  calcularTMB(peso: number, altura: number, idade: number, sexo: string): number {
    if (sexo.toLowerCase() === 'masculino') {
      return 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else if (sexo.toLowerCase() === 'feminino') {
      return 10 * peso + 6.25 * altura - 5 * idade - 161;
    } else {
      throw new Error("Sexo inválido. Use 'Masculino' ou 'Feminino'.");
    }
  }

  // Método para calcular o Índice de Massa Corporal (IMC)
  calcularIMC(peso: number, altura: number): { valor: number, classificacao: string } {
    const imc = peso / ((altura / 100) ** 2);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc >= 18.5 && imc < 24.9) classificacao = 'Peso normal';
    else if (imc >= 25 && imc < 29.9) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    return { valor: imc, classificacao };
  }

  // Método para calcular o Consumo de Água Diário
  calcularConsumoAgua(peso: number): number {
    return 35 * peso; // Resultado em ml
  }
}