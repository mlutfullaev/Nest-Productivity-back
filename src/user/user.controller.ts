import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll()
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto)
    return this.userService.create(createUserDto)
  }
}
