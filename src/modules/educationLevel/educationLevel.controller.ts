import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { educationLevelService } from './educationLevel.service';

@Controller('educationLevel')
export class educationLevelController {

    constructor(private readonly educationLevelService: educationLevelService) { }
  
    @Get('/all')
  async getAllComic() {
    return await this.educationLevelService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.educationLevelService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.educationLevelService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.educationLevelService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.educationLevelService.deleteComic(id)
  }
}
