import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mhoja9494:VHUWH9uIYnq00bhl@cluster0.niereis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n',
    ),
    UserModule,
  ],
})
export class AppModule {}
