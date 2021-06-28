import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { familyNucleusService } from './familyNucleus.service';

@Controller('familyNucleus')
export class familyNucleusController {

    constructor(private readonly familyNucleusService: familyNucleusService) { }
  
    @Get('/all')
  async getAll() {
    return await this.familyNucleusService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.familyNucleusService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.familyNucleusService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.FamilyNucleusService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.familyNucleusService.delete(id)
  }
}
