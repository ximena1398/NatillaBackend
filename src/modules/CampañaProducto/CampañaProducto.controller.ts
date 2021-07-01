import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { CampañaProductoService } from './CampañaProducto.service';

@Controller('CampañaProducto')
export class CampañaProductoController {

    constructor(private readonly CampañaProductoService: CampañaProductoService) { }
  
    @Get('/all')
  async getAll() {
    return await this.CampañaProductoService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.CampañaProductoService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.CampañaProductoService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.CampañaProductoService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.CampañaProductoService.delete(id)
  }
}