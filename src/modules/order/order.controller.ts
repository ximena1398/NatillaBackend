import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { orderService } from './order.service';

@Controller('order')
export class orderController {

    constructor(private readonly orderService: orderService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.orderService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.orderService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.orderService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.orderService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.orderService.deleteComic(id)
  }
}
