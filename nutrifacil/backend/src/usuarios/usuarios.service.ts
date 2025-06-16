import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './schemas/usuarios.schema';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
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
    return this.findOrThrow(id);
  }

  async atualizarUsuario(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.usuarioModel.findByIdAndUpdate(
      id, updateUsuarioDto, { new: true }
    ).exec().then(user => user || this.throwNotFound(id));
  }

  async deletarUsuario(id: string): Promise<void> {
    return this.usuarioModel.findByIdAndDelete(id).exec().then(res => {
      if (!res) this.throwNotFound(id);
    });
  }

  private async findOrThrow(id: string): Promise<Usuario> {
    const usuario = await this.usuarioModel.findById(id).exec();
    if (!usuario) this.throwNotFound(id);
    return usuario;
  }

  private throwNotFound(id: string): never {
    throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
  }
}