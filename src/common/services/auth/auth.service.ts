import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../../interfaces/user-models';
import jwt from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UsersMod } from '../../../schemas/user';
import mongoose, { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UsersMod.name) private userModel: Model<UserDocument>,
    private jwtSrv: JwtService,
  ) {}
  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return this.gToken(user);
    } else {
      throw new BadRequestException('Username or password is invalid');
    }
  }

  async register(
    name: string,
    email: string,
    password: string,
    address: string,
  ) {
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new BadRequestException('User is already exist, please login!');
    }
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser: any = {
      id: new mongoose.Types.ObjectId().toHexString(),
      name,
      email,
      password: encryptedPassword,
      address,
      isAdmin: false,
    };
    const dbUser = await this.userModel.create(newUser);
    return this.gToken(dbUser);
  }

  private gToken(user: any) {
    const payload = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    const token = this.jwtSrv.sign(payload, {
      secret: process.env.SECRET,
      expiresIn: process.env.TIME,
    });
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      password: user.password,
      token: token,
    };
  }
}
