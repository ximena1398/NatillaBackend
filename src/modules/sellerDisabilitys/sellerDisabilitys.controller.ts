import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerDisabilitysService } from './sellerDisabilitys.service';

@Controller('sellerDisabilitys')
export class sellerDisabilitysController {

    constructor(private readonly sellerDisabilitysService: sellerDisabilitysService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerDisabilitysService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerDisabilitysService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerDisabilitysService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerDisabilitysService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerDisabilitysService.delete(id)
  }
}
