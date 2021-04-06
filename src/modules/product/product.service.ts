import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly ProductRepository: Repository<Product>
  ) { }
  

  async getAll() {
    return await this.ProductRepository.createQueryBuilder("product")
    .innerJoinAndSelect("product.typeProduct","typeProduct")
    .innerJoinAndSelect("product.presentationUnity","unity").getMany();
  }

  async getById(id) {
    return await this.ProductRepository.findOne(id)
  }

  async create(body) {
    return await this.ProductRepository.save(body)
  }

  async update(id: number, body: Product) {
    try {
        let res = await this.ProductRepository.update(id, body);
        return res.raw.changedRows == 0 ? { error: 'NO_EXISTS' } : { success: 'OK' };
    } catch (error) {
        return { error: 'TRANSACTION_ERROR', detail: error };
    }
}

  async delete(id: number) {
    return await this.ProductRepository.delete(id)
  }
}
