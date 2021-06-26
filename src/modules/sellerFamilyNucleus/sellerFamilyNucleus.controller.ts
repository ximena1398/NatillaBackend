import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerFamiliyNucleusService } from './sellerFamilyNucleus.service';

@Controller('sellerFamiliyNucleus')
export class sellerFamiliyNucleusController {

    constructor(private readonly sellerFamiliyNucleusService: sellerFamiliyNucleusService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerFamiliyNucleusService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerFamiliyNucleusService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerFamiliyNucleusService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerFamiliyNucleusService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerFamiliyNucleusService.delete(id)
  }
}
