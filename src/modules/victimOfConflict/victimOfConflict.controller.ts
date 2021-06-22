import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { victimOfConflictService } from './victimOfConflict.service';

@Controller('victimOfConflict')
export class victimOfConflictController {

    constructor(private readonly victimOfConflictService: victimOfConflictService) { }
  
    @Get('/all')
  async getAll() {
    return await this.victimOfConflictService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.victimOfConflictService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.victimOfConflictService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.victimOfConflictService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.victimOfConflictService.delete(id)
  }
}
