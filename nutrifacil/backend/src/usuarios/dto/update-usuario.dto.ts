import { IsString, IsInt, IsEnum, IsArray, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsEnum(['Mediterrânea', 'Low Carb', 'Cetogênica', 'Vegetariana'])
    dieta?: string;

    @IsOptional()
    @IsInt()
    peso?: number;

    @IsOptional()
    @IsInt()
    altura?: number;

    @IsOptional()
    @IsInt()
    idade?: number;

    @IsOptional()
    @IsEnum(['Masculino', 'Feminino'])
    sexo?: string;

    @IsOptional()
    @IsString()
    objetivo?: string;

    @IsOptional()
    @IsArray()
    alergias?: string[];
}