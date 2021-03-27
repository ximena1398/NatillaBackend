import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { presentationProductService } from './presentationProduct.service';

@Controller('presentationproduct')
export class presentationProductController {

  constructor(private readonly presentationProductService: presentationProductService) { }

  @Get('/all')
  async getAllComic() {
    return await this.presentationProductService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.presentationProductService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.presentationProductService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.presentationProductService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.presentationProductService.deleteComic(id)
  }
}
