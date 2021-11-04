import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema';
import { BaseDataLayer } from '../../base.repository';

@Injectable()
export class UserDao implements BaseDataLayer<User> {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async find() {
    return this.userModel.find().lean().exec();
  }

  findById(id: string) {
    return this.userModel.findById(id).lean().exec();
  }

  create(data: User) {
    return this.userModel.create(data);
  }

  update(id: string, data: User) {
    return this.userModel
      .findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec();
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
