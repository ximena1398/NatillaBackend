/* import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { typeOfSeller } from 'src/entities/typeOfSeller.entity';
import { Repository } from 'typeorm';
@Injectable()
export class typeOfSellerService {
    
  constructor(
    @InjectRepository(typeOfSeller) private readonly typeOfSellerRepository: Repository<typeOfSeller>
  ) { }

  async getAll() {
    return await this.typeOfSellerRepository.find()
  }

  async getById(id) {
    return await this.typeOfSellerRepository.findOne(id)
  }

  async create(body) {
    return await this.typeOfSellerRepository.save(body)
  }

  async delete(id: number) {
    return await this.typeOfSellerRepository.delete(id)
  }
}
 */