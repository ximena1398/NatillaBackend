import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { departmentService } from './department.service';

@Controller('department')
export class departmentController {

    constructor(private readonly departmentService: departmentService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.departmentService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.departmentService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.departmentService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.departmentService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: Number) {
    return await this.departmentService.deleteComic(id)
  }
}
