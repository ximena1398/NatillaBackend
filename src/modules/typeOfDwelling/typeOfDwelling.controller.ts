import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { typeOfDwellingService } from './typeOfDwelling.service';

@Controller('typeOfDwelling')
export class typeOfDwellingController {

    constructor(private readonly typeOfDwellingService: typeOfDwellingService) { }
  
    @Get('/all')
  async getAll() {
    return await this.typeOfDwellingService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.typeOfDwellingService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.typeOfDwellingService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.typeOfDwellingService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.typeOfDwellingService.delete(id)
  }
}
