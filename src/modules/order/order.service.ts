import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { order } from '../../entities/order.entity';

@Injectable()
export class orderService {
    
  constructor(
    @InjectRepository(order) private readonly orderRepository: Repository<order>
  ) { }

  async getAllComic() {
    return await this.orderRepository.find()
  }

  async getComicId(id) {
    return await this.orderRepository.findOne(id)
  }

  async createComic(body) {
    return await this.orderRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
