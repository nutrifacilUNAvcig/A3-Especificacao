import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CalculosService } from './calculos.service';

@Controller('calculos')
export class CalculosController {
  constructor(private readonly calculosService: CalculosService) {}

  @Get('tmb')
  calcularTMB(
    @Query('peso') peso: number,
    @Query('altura') altura: number,
    @Query('idade') idade: number,
    @Query('sexo') sexo: string
  ): number {
    try {
      return this.calculosService.calcularTMB(Number(peso), Number(altura), Number(idade), sexo);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('imc')
  calcularIMC(@Query('peso') peso: number, @Query('altura') altura: number): object {
    return this.calculosService.calcularIMC(Number(peso), Number(altura));
  }

  @Get('agua')
  calcularConsumoAgua(@Query('peso') peso: number): number {
    return this.calculosService.calcularConsumoAgua(Number(peso));
  }
}