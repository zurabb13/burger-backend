import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UsersMod } from '../../schemas/user';
import { Model } from 'mongoose';
import { HashService } from '../../common/services/hash/hash.service';
import { LoginDtoModel } from '../../common/dto/login.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(UsersMod.name) private userModules: Model<UserDocument>,
    private hashService: HashService,
  ) {}
  async getUserByUserName(email: string) {
    return this.userModules.findOne({ email }).exec();
  }

  async registerUser(user: LoginDtoModel) {
    const createUser = new this.userModules(user);
    const newUser = await this.getUserByUserName(user.email);
    if (newUser) {
      throw new BadRequestException('user is not correct');
    }
    createUser.password = await this.hashService.hashPassword(
      createUser.password,
    );
    return createUser.save();
  }
}
//
