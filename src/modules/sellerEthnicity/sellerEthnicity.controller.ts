import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerEthnicityService } from './sellerEthnicity.service';

@Controller('sellerEthnicity')
export class sellerEthnicityController {

    constructor(private readonly sellerEthnicityService: sellerEthnicityService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerEthnicityService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerEthnicityService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerEthnicityService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerEthnicityService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerEthnicityService.delete(id)
  }
}
