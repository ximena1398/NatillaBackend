import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paymentMethod } from '../../entities/paymentMethod.entity';

@Injectable()
export class paymentMethodService {
    
  constructor(
    @InjectRepository(paymentMethod) private readonly paymentMethodRepository: Repository<paymentMethod>
  ) { }

  async getAllComic() {
    return await this.paymentMethodRepository.find()
  }

  async getComicId(id) {
    return await this.paymentMethodRepository.findOne(id)
  }

  async createComic(body) {
    return await this.paymentMethodRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: number) {
    return await this.paymentMethodRepository.delete(id)
  }
}
