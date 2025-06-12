import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DietasModule } from './dietas/dietas.module';
import { CalculosModule } from './calculos/calculos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nutrifacil'),
  UsuariosModule, 
  DietasModule, 
  CalculosModule,
  ],
})
export class AppModule {}
