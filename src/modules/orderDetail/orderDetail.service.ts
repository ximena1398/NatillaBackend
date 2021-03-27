import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { orderDetail } from '../../entities/orderDetail.entity';

@Injectable()
export class orderDetailService {
    
  constructor(
    @InjectRepository(orderDetail) private readonly orderDetailRepository: Repository<orderDetail>
  ) { }

  async getAllComic() {
    return await this.orderDetailRepository.find()
  }

  async getComicId(id) {
    return await this.orderDetailRepository.findOne(id)
  }

  async createComic(body) {
    return await this.orderDetailRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
