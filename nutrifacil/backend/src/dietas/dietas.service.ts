import { Injectable } from '@nestjs/common';
import { CreateDietaDto } from './dto/create-dieta.dto';
import { PlanoAlimentar } from './interfaces/plano.interface';

@Injectable()
export class DietasService {
  calcularTMB(peso: number, altura: number, idade: number, sexo: string): number {
    if (sexo === 'Masculino') {
      return 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
      return 10 * peso + 6.25 * altura - 5 * idade - 161;
    }
  }

  calcularIMC(peso: number, altura: number): number {
    return +(peso / Math.pow(altura / 100, 2)).toFixed(2);
  }

  calcularAgua(peso: number): number {
    return peso * 35;
  }

  gerarPlano(dto: CreateDietaDto): PlanoAlimentar {
    const tmb = this.calcularTMB(dto.peso, dto.altura, dto.idade, dto.sexo);
    const imc = this.calcularIMC(dto.peso, dto.altura);
    const agua = this.calcularAgua(dto.peso);

    // Mock simples (ideal: buscar do banco filtrando por dieta e alergias)
    const refeicoes = [
      {
        periodo: 'Almoço',
        itens: ['Peixe grelhado', 'Arroz integral', 'Salada de alface com azeite'],
        caloriasEstimadas: 550,
      },
      {
        periodo: 'Jantar',
        itens: ['Frango assado', 'Quinoa', 'Legumes no vapor'],
        caloriasEstimadas: 480,
      },
    ];

    return {
      tmb,
      imc,
      aguaDiaria_ml: agua,
      recomendacoes: {
        refeicoes,
      },
    };
  }
}
