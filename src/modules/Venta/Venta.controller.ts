import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { VentaService } from './Venta.service';

@Controller('Venta')
export class VentaController {

    constructor(private readonly VentaService: VentaService) { }
  
    @Get('/all')
  async getAll() {
    return await this.VentaService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.VentaService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.VentaService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.VentaService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.VentaService.delete(id)
  }
}
