import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { genreService } from './genre.service';

@Controller('genre')
export class genreController {

    constructor(private readonly genreService: genreService) { }
  
    @Get('/all')
  async getAll() {
    return await this.genreService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.genreService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.genreService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.genreService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genreService.delete(id)
  }
}
