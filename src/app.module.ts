import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      // Entityを作成するごとにEntityをTypeORMの設定に追加するけどそれを省略
      autoLoadEntities: true
    })          
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
