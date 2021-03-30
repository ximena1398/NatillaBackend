import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly ProductService: ProductService) { }

  @Get('/all')
  async getAllComic() {
    return await this.ProductService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.ProductService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.ProductService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.ProductService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.ProductService.deleteComic(id)
  }
}
