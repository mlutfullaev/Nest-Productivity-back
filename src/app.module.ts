import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mhoja9494:magamongo@cluster0.pirjxhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
  ],
})
export class AppModule {}
