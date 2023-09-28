import { Module } from '@nestjs/common';

import { ConfigModule } from './config.module';
import { TypeOrmModule } from '@db/typeorm.module';

import { UserModule } from './entitles/user/user.module';
import { ProductModule } from './entitles/products/product.module';

@Module({
  imports: [ConfigModule, TypeOrmModule, UserModule, ProductModule],
})
export class AppModule {}
