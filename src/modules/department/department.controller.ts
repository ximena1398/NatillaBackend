import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { departmentService } from './department.service';

@Controller('department')
export class departmentController {

    constructor(private readonly departmentService: departmentService) { }
  
    @Get('/all')
  async getAll() {
    return await this.departmentService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.departmentService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.departmentService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.departmentService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.departmentService.delete(id)
  }
}
