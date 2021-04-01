import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { presentationAmount } from '../../entities/presentationAmount.entity';

@Injectable()
export class presentationAmountService {

  constructor(
    @InjectRepository(presentationAmount) private readonly presentationAmountRepository: Repository<presentationAmount>
  ) { }

  async getAllComic() {
    return await this.presentationAmountRepository.find()
  }

  async getComicId(id) {
    return await this.presentationAmountRepository.findOne(id)
  }

  async createComic(body) {
    return await this.presentationAmountRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: number) {
    return await this.presentationAmountRepository.delete(id)
  }
}
