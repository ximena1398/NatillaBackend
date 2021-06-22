import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { indigenousReservationService } from './indigenousReservation.service';

@Controller('indigenousReservation')
export class indigenousReservationController {

    constructor(private readonly indigenousReservationService: indigenousReservationService) { }
  
    @Get('/all')
  async getAll() {
    return await this.indigenousReservationService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.indigenousReservationService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.indigenousReservationService.create(body)
  }

  /* @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.indigenousReservationService.update(id)
  } */

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.indigenousReservationService.delete(id)
  }
}
