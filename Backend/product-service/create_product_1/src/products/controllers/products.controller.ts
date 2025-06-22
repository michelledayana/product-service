import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products_create') // Cambié 'create' a 'products' para coherencia con REST
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post() // Solo maneja POST /products
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}