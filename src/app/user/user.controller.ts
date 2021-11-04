import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../repository/mongo/user/schema';
import { UserDao } from '../repository/mongo/user';

@Controller('user')
export class UserController {
  constructor(private userDao: UserDao) {}

  @Get()
  getList() {
    return this.userDao.find();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const user = this.userDao.findById(id);
    return user;
  }

  @Post()
  create(@Body('data') data: User) {
    return this.userDao.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('data') data: User) {
    return this.userDao.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userDao.delete(id);
  }
}
