import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productsRepository.create(createProductDto);
      return await this.productsRepository.save(product);
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      throw error;
    }
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.productsRepository.softDelete(id);
  }

  findOneByName(name: string) {
    return this.productsRepository.findOneBy({ name });
  }

  findByEmail(email: string) {
    return this.productsRepository.findOne({
      where: { name: email }, // Ajusta si el campo en realidad se llama "email"
      select: ['name', 'price'],
    });
  }
}
