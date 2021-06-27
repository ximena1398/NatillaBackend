import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { FamiliyNucleusService } from './familyNucleus.service';

@Controller('FamiliyNucleus')
export class FamiliyNucleusController {

    constructor(private readonly FamiliyNucleusService: FamiliyNucleusService) { }
  
    @Get('/all')
  async getAll() {
    return await this.FamiliyNucleusService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.FamiliyNucleusService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.FamiliyNucleusService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.FamiliyNucleusService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.FamiliyNucleusService.delete(id)
  }
}
