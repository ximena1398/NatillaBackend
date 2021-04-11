import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class userController {

    constructor(private readonly userService: userService) { }
  
    @Get('/all')
  async getAll() {
    return await this.userService.getAllComic()
  }

  /* @Get('/id/:id')
  async getComicId(@Param('id') id: Number) {
    return await this.userService.getComicId(id)
  } */

  /* @Post()
  async createComic(@Body() body) {
    return await this.userService.createComic(body)
  } */

  /* @Put('/:id')
  async updateComic(@Param('id') id: Number) {
    return await this.userService.updateComic(id)
  } */

  /* @Delete('/:id')
  async deleteComic(@Param('id') id: number) {
    return await this.userService.deleteComic(id)
  } */
}
