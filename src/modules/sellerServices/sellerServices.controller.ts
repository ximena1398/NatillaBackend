import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerServicesService } from './sellerServices.service';

@Controller('sellerServices')
export class sellerServicesController {

    constructor(private readonly sellerServicesService: sellerServicesService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerServicesService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerServicesService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerServicesService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerServicesService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerServicesService.delete(id)
  }
}
