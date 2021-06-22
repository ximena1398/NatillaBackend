import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { sellerService } from './seller.service';

@Controller('seller')
export class sellerController {

    constructor(private readonly sellerService: sellerService) { }
  
    @Get('/all')
  async getAll() {
    return await this.sellerService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.sellerService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.sellerService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.sellerService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.sellerService.delete(id)
  }
}
