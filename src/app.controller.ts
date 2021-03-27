import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/2')
  getHello2(): string {
    return this.appService.getHello() + '2';
  }

  @Post()
  postHello(): string {
    return 'Post!'
  }

  @Put()
  putHello(): string {
    return 'Put!'
  }

  @Delete()
  deleteHello(): string {
    return 'Delete'
  }
}
