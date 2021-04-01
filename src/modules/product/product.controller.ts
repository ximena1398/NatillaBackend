import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly ProductService: ProductService) { }

  @Get('/all')
  async getAllComic() {
    return await this.ProductService.getAll()
  }

  @Get('/fruits')
  async getAllFruits() {
    return await this.ProductService.getAllFruits()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.ProductService.getById(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.ProductService.create(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.ProductService.update(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.ProductService.delete(id)
  }
}
