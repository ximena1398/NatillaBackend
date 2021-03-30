import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { presentationUnityService } from './presentationUnity.service';

@Controller('presentationUnity')
export class presentationUnityController {

  constructor(private readonly presentationUnityService: presentationUnityService) { }

  @Get('/all')
  async getAllComic() {
    return await this.presentationUnityService.getAllComic()
  }

  @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.presentationUnityService.getComicId(id)
  }

  @Post()
  async createComic(@Body() body) {
    return await this.presentationUnityService.createComic(body)
  }

  @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.presentationUnityService.updateComic(id)
  }

  @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.presentationUnityService.deleteComic(id)
  }
}
