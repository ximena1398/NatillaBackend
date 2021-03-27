import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from '../../entities/user.entity';

@Injectable()
export class userService {
    
  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>
  ) { }

  async getAllComic() {
    return await this.userRepository.find()
  }

  async getComicId(id) {
    return await this.userRepository.findOne(id)
  }

  async createComic(body) {
    return await this.userRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
