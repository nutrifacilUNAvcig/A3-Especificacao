import { IsEnum, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum DietaTipo {
  MEDITERRANEA = 'Mediterrânea',
  LOW_CARB = 'Low Carb',
  CETOGENICA = 'Cetogênica',
  VEGETARIANA = 'Vegetariana',
}

export enum Sexo {
  MASCULINO = 'Masculino',
  FEMININO = 'Feminino',
}

export enum Objetivo {
  EMAGRECIMENTO = 'Emagrecimento',
  HIPERTROFIA = 'Hipertrofia',
}

export class PreferenciasDto {
  @IsOptional() proteinas: string[];
  @IsOptional() legumes: string[];
  @IsOptional() verduras: string[];
  @IsOptional() carboidratos: string[];
}

export class CreateDietaDto {
  @IsEnum(DietaTipo)
  dieta: DietaTipo;

  @IsNumber()
  peso: number;

  @IsNumber()
  altura: number;

  @IsNumber()
  idade: number;

  @IsEnum(Sexo)
  sexo: Sexo;

  @IsEnum(Objetivo)
  objetivo: Objetivo;

  @ValidateNested()
  @Type(() => PreferenciasDto)
  preferencias: PreferenciasDto;

  @IsOptional()
  alergias: string[];
}
