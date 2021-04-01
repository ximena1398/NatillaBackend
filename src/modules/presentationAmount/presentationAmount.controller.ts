import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { presentationAmountService } from './presentationAmount.service';

@Controller('presentationAmount')
export class presentationAmountController {

  constructor(private readonly presentationAmountService: presentationAmountService) { }

  @Get('/all')
  async getAllComic() {
    return await this.presentationAmountService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.presentationAmountService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.presentationAmountService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.presentationAmountService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.presentationAmountService.deleteComic(id)
  }
}
