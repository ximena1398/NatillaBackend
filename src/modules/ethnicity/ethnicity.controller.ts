import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { ethnicityService } from './ethnicity.service';

@Controller('ethnicity')
export class ethnicityController {

    constructor(private readonly ethnicityService: ethnicityService) { }
  
    @Get('/all')
  async getAll() {
    return await this.ethnicityService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.ethnicityService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.ethnicityService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.ethnicityService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.ethnicityService.delete(id)
  }
}
