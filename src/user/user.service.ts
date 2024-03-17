import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async create(dto: CreateUserDto): Promise<User> {
    try {
      const user = new this.userModel(dto);
      return await user.save();
    } catch (e) {
      console.log(e.message);
    }
  }
}
