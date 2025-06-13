import { Body, Controller, Post } from '@nestjs/common';
import { DietasService } from './dietas.service';
import { CreateDietaDto } from './dto/create-dieta.dto';
import { PlanoAlimentar } from './interfaces/plano.interface';

@Controller('dietas')
export class DietasController {
  constructor(private readonly dietasService: DietasService) {}

  @Post('plano')
  gerarPlanoAlimentar(@Body() createDietaDto: CreateDietaDto): PlanoAlimentar {
    return this.dietasService.gerarPlano(createDietaDto);
  }
}
