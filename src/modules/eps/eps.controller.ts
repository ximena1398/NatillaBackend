import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { epsService } from './eps.service';

@Controller('eps')
export class epsController {

    constructor(private readonly epsService: epsService) { }
  
    @Get('/all')
  async getAll() {
    return await this.epsService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.epsService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.epsService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.epsService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.epsService.delete(id)
  }
}
