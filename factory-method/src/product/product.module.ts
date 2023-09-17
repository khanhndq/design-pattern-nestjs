import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductFactory } from './product.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductHot } from './entities/product-hot.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductHot])],
  controllers: [ProductController],
  providers: [ProductService, ProductFactory, CreateProductDto],
})
export class ProductModule {}
