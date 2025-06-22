import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dayana',
      database: 'create_product',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    ProductsModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}