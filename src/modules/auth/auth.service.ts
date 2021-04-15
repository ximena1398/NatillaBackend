import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { userService } from '../user/user.service';
import {userModule} from '../user/user.module'
import { LoginStatus } from './interfaces/login-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from '../user/dto/createUser.dto';
import { loginUserDto } from '../user/dto/login.dto';
import { userDto } from '../user/dto/user.dto';
import { Repository } from 'typeorm';
import { user } from 'src/entities/user.entity';

@Injectable()
export class authService {
  constructor(
    private readonly usersService: userService,
    private readonly jwtService: JwtService,
    private readonly userRepository: Repository<user>,
  ) {}

  async register(userDto: createUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async login(loginUserDto: loginUserDto,): Promise<LoginStatus> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      username: user.username,
      ...token,
    };
  }

  async validateUser(userToken: string): Promise<any> {
    let payload: any = this.jwtService.decode(userToken);
    if (payload) {
        let response = await this.userRepository.findOne({where: { ...payload, token: userToken } })
        if (response)
            return response;

        return false;
    }
    return false;
}

  private _createToken({ username }: userDto): any {
    const expiresIn = "1s";

    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user);

    return {
      expiresIn,
      accessToken,
    };
  }
}

