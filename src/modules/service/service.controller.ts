import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { serviceService } from './service.service';

@Controller('service')
export class serviceController {

    constructor(private readonly serviceService: serviceService) { }
  
    @Get('/all')
  async getAll() {
    return await this.serviceService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.serviceService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.serviceService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.serviceService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.serviceService.delete(id)
  }
}
