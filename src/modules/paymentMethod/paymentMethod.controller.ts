import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { paymentMethodService } from './paymentMethod.service';

@Controller('synonyms')
export class paymentMethodController {

    constructor(private readonly paymentMethodService: paymentMethodService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.paymentMethodService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.paymentMethodService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.paymentMethodService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.paymentMethodService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.paymentMethodService.deleteComic(id)
  }
}
