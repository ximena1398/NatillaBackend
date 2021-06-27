import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { familiyNucleusService } from './familyNucleus.service';

@Controller('familiyNucleus')
export class familiyNucleusController {

    constructor(private readonly familiyNucleusService: familiyNucleusService) { }
  
    @Get('/all')
  async getAll() {
    return await this.familiyNucleusService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.familiyNucleusService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.familiyNucleusService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.FamiliyNucleusService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.familiyNucleusService.delete(id)
  }
}
