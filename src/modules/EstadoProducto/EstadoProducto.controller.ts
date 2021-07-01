import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { EstadoProductoService } from './EstadoProducto.service';

@Controller('EstadoProducto')
export class EstadoProductoController {

    constructor(private readonly EstadoProductoService: EstadoProductoService) { }
  
    @Get('/all')
  async getAll() {
    return await this.EstadoProductoService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.EstadoProductoService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.EstadoProductoService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.EstadoProductoService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.EstadoProductoService.delete(id)
  }
}
