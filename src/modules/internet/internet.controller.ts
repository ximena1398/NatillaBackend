import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { internetService } from './internet.service';

@Controller('internet')
export class internetController {

    constructor(private readonly internetService: internetService) { }
  
    @Get('/all')
  async getAll() {
    return await this.internetService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.internetService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.internetService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.internetService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.internetService.delete(id)
  }
}
