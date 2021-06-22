import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { disabilityService } from './disability.service';

@Controller('disability')
export class disabilityController {

    constructor(private readonly disabilityService: disabilityService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.disabilityService.getAll()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.disabilityService.getById(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.disabilityService.create(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.disabilityService.update(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.disabilityService.delete(id)
  }
}
