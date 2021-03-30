import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { cityService } from './city.service';

@Controller('synonyms')
export class cityController {

    constructor(private readonly cityService: cityService) { }
  
    @Get('/all')
  async getAll() {
    return await this.cityService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.cityService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.cityService.create(body)
  }

  @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.cityService.update(id)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.cityService.delete(id)
  }
}
