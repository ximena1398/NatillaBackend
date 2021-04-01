import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { presentationUnityService } from './presentationUnity.service';

@Controller('presentationUnity')
export class presentationUnityController {

  constructor(private readonly presentationUnityService: presentationUnityService) { }

  @Get('/all')
  async getAll() {
    return await this.presentationUnityService.getAllComic()
  }

  @Get('/id/:id')
  async get(@Param('id') id: Number) {
    return await this.presentationUnityService.getComicId(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.presentationUnityService.createComic(body)
  }

  @Put('/:id')
  async update(@Param('id') id: Number) {
    return await this.presentationUnityService.updateComic(id)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.presentationUnityService.deleteComic(id)
  }
}
