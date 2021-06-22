import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sisbenService } from './sisben.service';

@Controller('sisben')
export class sisbenController {

    constructor(private readonly sisbenService: sisbenService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sisbenService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sisbenService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sisbenService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sisbenService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sisbenService.delete(id)
  }
}
