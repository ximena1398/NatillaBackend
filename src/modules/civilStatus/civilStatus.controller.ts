import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { civilStatusService } from './civilStatus.service';

@Controller('civilStatus')
export class civilStatusController {

    constructor(private readonly civilStatusService: civilStatusService) { }
  
    @Get('/all')
  async getAll() {
    return await this.civilStatusService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.civilStatusService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.civilStatusService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.civilStatusService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.civilStatusService.delete(id)
  }
}
