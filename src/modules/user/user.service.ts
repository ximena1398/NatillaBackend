import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from 'src/shared/mapper';
import { Repository } from 'typeorm';
import { user } from '../../entities/user.entity';
import { createUserDto } from './dto/createUser.dto';
import { loginUserDto } from './dto/login.dto';
import { userDto } from './dto/user.dto';
import { comparePasswords } from '../../shared/utils';

@Injectable()
export class userService {
    
  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>
  ) { }

  async getAll() {
    return await this.userRepository.find()
  }

  async findOne(options?: object): Promise<userDto> {
    const user =  await this.userRepository.findOne(options);    
    return toUserDto(user);  
}

async updateUser(id: number, user: userDto) {
  try {
      let res = await this.userRepository.update(id, user);
      return res.raw.changedRows == 0 ? { error: 'NO_EXISTS' } : { success: 'OK' };
  } catch (error) {
      return { error: 'TRANSACTION_ERROR', detail: error };
  }
}

async getUserById(id)  {
  return await this.userRepository.findOne({ where: { id } });
}

async getUserByEmail(data: any) {
  return await this.userRepository.findOne(data);
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


async findByPayload({ username }: any): Promise<userDto> {
  return await this.findOne({ 
      where:  { username } });  
}

async create(userDto: createUserDto): Promise<userDto> {    
  const { username, password, } = userDto;
  
  // check if the user exists in the db    
  const userInDb = await this.userRepository.findOne({ 
      where: { username } 
  });
  if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
  }
  
  const user: user = await this.userRepository.create({ username, password,});
  await this.userRepository.save(user);
  return toUserDto(user);  
}

}
