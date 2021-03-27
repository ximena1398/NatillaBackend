import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { synonymsService } from './synonyms.service';

@Controller('synonyms')
export class synonymsController {

    constructor(private readonly synonymsService: synonymsService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.synonymsService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.synonymsService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.synonymsService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.synonymsService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.synonymsService.deleteComic(id)
  }
}
