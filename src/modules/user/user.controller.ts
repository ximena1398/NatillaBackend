import { Controller, Get, Post, Body, Put, Delete, Param, Req, UseGuards, BadGatewayException, Res, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userDto } from './dto/user.dto';
import { userService } from './user.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { loginUserDto } from './dto/login.dto';
import { createUserDto } from './dto/createUser.dto';
import { Response, Request } from 'express';
import { Auth } from '../auth/auth.decorator';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class userController {

    constructor(
        private readonly userService: userService,
        private jwtService: JwtService,
      ) {}

    @Post()
    async createUser(@Body() body: createUserDto) {
        const response: any = await this.userService.create(body);
        if (response.success)
            return response;
        throw new BadGatewayException(response)
    }

    @Post('/login')
    async login(
        @Body('username') username: string,
        @Body('password') password: string,
        @Res({ passthrough: true }) response: Response,
    ) {
        const user = await this.userService.getUserByEmail({ username });
        if (!user) {
            throw new BadRequestException('Usuario erróneo');
        }
        if (!(await bcrypt.compare(password, user.password))) {
            throw new BadRequestException('Contraseña errónea');
        }

        const jwt = await this.jwtService.signAsync({ id: user.id });

        response.cookie('jwt', jwt, { httpOnly: true });

        return user;
    }

    @Get()
    @UseGuards(AuthGuard('bearer'))
    async getTraderAll() {
        return this.userService.getAll();
    }
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() body: userDto) {
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
