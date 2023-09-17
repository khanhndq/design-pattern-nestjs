import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductHot } from './entities/product-hot.entity';
import { ProductFactory } from './product.factory';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductHot)
    private productHotRepository: Repository<ProductHot>,
  ) {}
  create(createProductDto: CreateProductDto) {
    let product;
    const productFactory = new ProductFactory(createProductDto);
    createProductDto.isHot === true
      ? (product = productFactory.createProduct(
          'hot',
          this.productHotRepository,
        ))
      : (product = productFactory.createProduct(
          'normal',
          this.productRepository,
        ));

    return product;
  }
}
