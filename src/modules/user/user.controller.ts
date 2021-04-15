import { Controller, Get, Post, Body, Put, Delete, Param, Req, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userDto } from './dto/user.dto';
import { userService } from './user.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { loginUserDto } from './dto/login.dto';
import { createUserDto } from './dto/createUser.dto';
import { Auth } from '../auth/auth.decorator';

@Controller('user')
export class userController {

  constructor(private readonly userService: userService) { }

  @Get()
  async getAllUsers(): Promise<userDto[]> {
    return await this.userService.getAll();
  }

  @Post()
  async newUser(@Body() user: createUserDto): Promise<userDto> {
    return await this.userService.create(user);
  }

  @Get('/me')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
async getUserById(@Auth() { id }: userDto): Promise<userDto> {
    return await this.userService.getUserById(id);
}

  /* @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Param('id', ValidUserIdPipe) id: string,
    @Body() user: userDto
  ): Promise<userDto> {
    return await this.userService.updateUser(id, user);
  } */

   /* @UseGuards(AuthGuard('jwt'))
   @ApiBearerAuth()
   @Delete(':id')
   async deleteUser(@Param('id') id: string): Promise<void> {
     return await this.userService.delete(id);
} */
}
