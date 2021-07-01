import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { ProductoService } from './Producto.service';

@Controller('Producto')
export class ProductoController {

    constructor(private readonly ProductoService: ProductoService) { }
  
    @Get('/all')
  async getAll() {
    return await this.ProductoService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.ProductoService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.ProductoService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.ProductoService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.ProductoService.delete(id)
  }
}
