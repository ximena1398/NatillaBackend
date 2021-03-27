import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { cityService } from './city.service';

@Controller('synonyms')
export class cityController {

    constructor(private readonly cityService: cityService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.cityService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.cityService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.cityService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.cityService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.cityService.deleteComic(id)
  }
}
