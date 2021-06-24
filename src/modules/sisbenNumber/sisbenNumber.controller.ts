import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sisbenNumberService } from './sisbenNumber.service';

@Controller('sisbenNumber')
export class sisbenNumberController {

    constructor(private readonly sisbenNumberService: sisbenNumberService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sisbenNumberService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sisbenNumberService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sisbenNumberService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sisbenNumberService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sisbenNumberService.delete(id)
  }
}
