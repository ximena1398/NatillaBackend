import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { orderDetailService } from './orderDetail.service';

@Controller('synonyms')
export class orderDetailController {

    constructor(private readonly orderDetailService: orderDetailService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.orderDetailService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.orderDetailService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.orderDetailService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.orderDetailService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.orderDetailService.deleteComic(id)
  }
}
