import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { CampañaService } from './Campaña.service';

@Controller('Campana')
export class CampañaController {

    constructor(private readonly CampañaService: CampañaService) { }
  
    @Get('/all')
  async getAll() {
    return await this.CampañaService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.CampañaService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.CampañaService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.CampañaService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.CampañaService.delete(id)
  }
}