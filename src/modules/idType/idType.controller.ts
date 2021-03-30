import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { idTypeService } from './idType.service';

@Controller('synonyms')
export class idTypeController {

    constructor(private readonly idTypeService: idTypeService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.idTypeService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.idTypeService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.idTypeService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.idTypeService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.idTypeService.deleteComic(id)
  }
}
