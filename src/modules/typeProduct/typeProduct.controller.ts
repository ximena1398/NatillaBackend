import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { typeProductService } from './typeProduct.service';

@Controller('typeProduct')
export class typeProductController {

    constructor(private readonly typeProductService: typeProductService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.typeProductService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.typeProductService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.typeProductService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.typeProductService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.typeProductService.deleteComic(id)
  }
}
