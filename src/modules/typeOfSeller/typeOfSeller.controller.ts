import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { typeOfSellerService } from './typeOfSeller.service';

@Controller('typeOfSeller')
export class typeOfSellerController {

    constructor(private readonly typeOfSellerService: typeOfSellerService) { }
  
    @Get('/all')
  async getAll() {
    return await this.typeOfSellerService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.typeOfSellerService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.typeOfSellerService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.typeOfSellerService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.typeOfSellerService.delete(id)
  }
}
