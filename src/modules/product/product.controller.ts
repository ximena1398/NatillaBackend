import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { productService } from './product.service';

@Controller('product')
export class productController {

    constructor(private readonly productService: productService) { }
  
    @Get('/all')
  async getAll() {
    return await this.productService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.productService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.productService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.productService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.productService.delete(id)
  }
}
