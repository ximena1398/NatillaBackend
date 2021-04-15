import { Controller, Get, Post, Body, Put, Delete, Param, Req, UseGuards, Request, BadGatewayException } from '@nestjs/common';
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

  @Post()
    async createUser(@Body() body: createUserDto) {
        const response: any = await this.userService.create(body);
        if (response.success)
            return response;
        throw new BadGatewayException(response)
    }

    @Get()
    @UseGuards(AuthGuard('bearer'))
    async getTraderAll(){
        return this.userService.getAll();
    }
    @Put(':id')
    async updateUser(@Param('id') id:number, @Body() body: userDto) {
        const response: any = await this.userService.updateUser(id, body);
        if (response.success)
            return response;
        throw new BadGatewayException(response)
    }

   /* @UseGuards(AuthGuard('jwt'))
   @ApiBearerAuth()
   @Delete(':id')
   async deleteUser(@Param('id') id: string): Promise<void> {
     return await this.userService.delete(id);
} */
}
