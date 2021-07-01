import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { ClienteService } from './Cliente.service';

@Controller('Cliente')
export class ClienteController {

    constructor(private readonly ClienteService: ClienteService) { }
  
    @Get('/all')
  async getAll() {
    return await this.ClienteService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.ClienteService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.ClienteService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.ClienteService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.ClienteService.delete(id)
  }
}
