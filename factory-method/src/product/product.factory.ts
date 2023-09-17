import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductHot } from './entities/product-hot.entity';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductFactory {
  data: CreateProductDto;
  constructor(_data: CreateProductDto) {
    this.data = _data;
  }
  async createProduct(
    productType,
    repository: Repository<Product | ProductHot>,
  ) {
    switch (productType) {
      case 'hot': {
        const product = new ProductHot();
        product.name = this.data.name;
        product.price = this.data.price;
        product.description = this.data.description;
        product.isHot = true;
        return await repository.save(product);
      }
      default: {
        const product = new Product();
        product.name = this.data.name;
        product.price = this.data.price;
        product.description = this.data.description;
        return await repository.save(this.data);
      }
    }
  }
}
