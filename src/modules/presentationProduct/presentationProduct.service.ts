import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { presentationProduct } from '../../entities/presentationProduct.entity';

@Injectable()
export class presentationProductService {

  constructor(
    @InjectRepository(presentationProduct) private readonly presentationProductRepository: Repository<presentationProduct>
  ) { }

  async getAllComic() {
    return await this.presentationProductRepository.find()
  }

  async getComicId(id) {
    return await this.presentationProductRepository.findOne(id)
  }

  async createComic(body) {
    return await this.presentationProductRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
