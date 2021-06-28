import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerFamilyNucleusService } from './sellerFamilyNucleus.service';

@Controller('sellerFamilyNucleus')
export class sellerFamilyNucleusController {

    constructor(private readonly sellerFamilyNucleusService: sellerFamilyNucleusService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerFamilyNucleusService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerFamilyNucleusService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerFamilyNucleusService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerFamilyNucleusService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerFamilyNucleusService.delete(id)
  }
}
