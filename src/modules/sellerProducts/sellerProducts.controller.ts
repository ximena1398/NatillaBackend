import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerProductsService } from './sellerProducts.service';

@Controller('sellerProducts')
export class sellerProductsController {

    constructor(private readonly sellerProductsService: sellerProductsService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerProductsService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerProductsService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerProductsService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerProductsService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerProductsService.delete(id)
  }
}
