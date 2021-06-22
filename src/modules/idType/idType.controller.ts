import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { idTypeService } from './idType.service';

@Controller('idType')
export class idTypeController {

    constructor(private readonly idTypeService: idTypeService) { }
  
    @Get('/all')
  async getAll() {
    return await this.idTypeService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.idTypeService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.idTypeService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.idTypeService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.idTypeService.delete(id)
  }
}
