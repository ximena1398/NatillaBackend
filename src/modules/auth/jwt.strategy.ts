import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { userDto } from '../user/dto/user.dto';
import { authService } from './auth.service';
import {userService} from '../user/user.service'
import { JwtPayload } from './interfaces/payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(private readonly userService: userService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'a',
        });  
    }
    
    /* async validate(payload: JwtPayload): Promise<userDto> {
        const user = await this.authSe´++++rvice.validateUser(payload);
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
        }    
        return user;  
    } */

    async validate(payload: JwtPayload): Promise<userDto> {
        const user = await this.userService.getUserById(payload.username);
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
      }
}