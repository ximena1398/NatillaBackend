import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sisbenLetterService } from './sisbenLetter.service';

@Controller('sisbenLetter')
export class sisbenLetterController {

    constructor(private readonly sisbenLetterService: sisbenLetterService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sisbenLetterService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sisbenLetterService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sisbenLetterService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sisbenLetterService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sisbenLetterService.delete(id)
  }
}
