import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { municipalityService } from './municipality.service';

@Controller('municipality')
export class municipalityController {

    constructor(private readonly municipalityService: municipalityService) { }
  
    @Get('/all')
  async getAll() {
    return await this.municipalityService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.municipalityService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.municipalityService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.municipalityService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.municipalityService.delete(id)
  }
}
