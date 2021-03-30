import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { presentationUnity } from '../../entities/presentationUnity.entity';

@Injectable()
export class presentationUnityService {

  constructor(
    @InjectRepository(presentationUnity) private readonly presentationUnityRepository: Repository<presentationUnity>
  ) { }

  async getAllComic() {
    return await this.presentationUnityRepository.find()
  }

  async getComicId(id) {
    return await this.presentationUnityRepository.findOne(id)
  }

  async createComic(body) {
    return await this.presentationUnityRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: number) {
    return await this.presentationUnityRepository.delete(id)
  }
}
