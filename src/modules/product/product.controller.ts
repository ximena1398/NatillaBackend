import { Controller, Get, Post, Body, Put, Delete, Param, Req, BadGatewayException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly ProductService: ProductService) { }

  @Get('/all')
  async getAll() {
    return await this.ProductService.getAll()
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
  async updateUser(@Param('id') id:number, @Body() body: Product) {
    const response: any = await this.ProductService.update(id, body);
        if (response.success)
            return response;
        throw new BadGatewayException(response)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.ProductService.delete(id)
  }
}
