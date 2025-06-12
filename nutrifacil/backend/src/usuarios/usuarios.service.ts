import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './schemas/usuarios.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) {}

  async criarUsuario(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuarioCriado = new this.usuarioModel(createUsuarioDto);
    return usuarioCriado.save();
  }

  async buscarTodos(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Usuario> {
    const usuario = await this.usuarioModel.findById(id).exec();
    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return usuario;
  }

  async atualizarUsuario(id: string, updateUsuarioDto: Partial<CreateUsuarioDto>): Promise<Usuario> {
    const usuarioAtualizado = await this.usuarioModel.findByIdAndUpdate(
      id,
      updateUsuarioDto,
      { new: true }
    ).exec();
    
    if (!usuarioAtualizado) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return usuarioAtualizado;
  }

  async deletarUsuario(id: string): Promise<void> {
    const resultado = await this.usuarioModel.findByIdAndDelete(id).exec();
    if (!resultado) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
  }
}