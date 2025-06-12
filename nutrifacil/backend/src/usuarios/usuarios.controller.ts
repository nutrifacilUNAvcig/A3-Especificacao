import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criarUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.criarUsuario(createUsuarioDto);
  }

  @Get()
  buscarTodos() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.usuariosService.buscarPorId(id);
  }

  @Put(':id')
  atualizarUsuario(@Param('id') id: string, @Body() updateUsuarioDto: Partial<CreateUsuarioDto>) {
    return this.usuariosService.atualizarUsuario(id, updateUsuarioDto);
  }

  @Delete(':id')
  deletarUsuario(@Param('id') id: string) {
    return this.usuariosService.deletarUsuario(id);
  }
}