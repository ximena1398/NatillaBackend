import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { nationalityService } from './nationality.service';

@Controller('nationality')
export class nationalityController {

    constructor(private readonly nationalityService: nationalityService) { }
  
    @Get('/all')
  async getAll() {
    return await this.nationalityService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.nationalityService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.nationalityService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.nationalityService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.nationalityService.delete(id)
  }
}
