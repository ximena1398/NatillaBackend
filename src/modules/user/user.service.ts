import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';
import { user } from '../../entities/user.entity';
import { createUserDto } from './dto/createUser.dto';
import { loginUserDto } from './dto/login.dto';
import { userDto } from './dto/user.dto';
import { comparePasswords } from '@shared/utils';

@Injectable()
export class userService {
    
  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>
  ) { }

  async getAllComic() {
    return await this.userRepository.find()
  }

  async findOne(options?: object): Promise<userDto> {
    const user =  await this.userRepository.findOne(options);    
    return toUserDto(user);  
}

async findByLogin({ username, password }: loginUserDto): Promise<userDto> {    
  const user = await this.userRepository.findOne({ where: { username } });
  
  if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
  }
  
  // compare passwords    
  const areEqual = await comparePasswords(user.password, password);
  
  if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
  }
  
  return toUserDto(user);  
}

}
