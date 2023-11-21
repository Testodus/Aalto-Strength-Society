import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { createUser, getPartialUser } from './../vadePlsCode';
import 'dotenv/config';

@Injectable({})
export class AuthService {
  constructor(private jwt: JwtService) {}

  async signToken(
    userID: number,
    email: string
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userID,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '30m',
      secret: process.env.JWT_SECRET,
    });

    return {
      access_token: token,
    };
  }
  createUserObject = (dto: RegisterDto, hash: string) => {
    const optionalUserFields = {
      profilePicture: undefined,
      typeOfLifting: undefined,
      favouriteLift: undefined,
      favouriteGym: undefined,
      favouriteGymTime: undefined,
      contactInfo: undefined,
    };
    return { ...optionalUserFields, ...dto, password: hash };
  };

  register(dto: RegisterDto) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(dto.password, salt).then(hash => {
      // Construct a user object that contains all possible fields.
      const user = this.createUserObject(dto, hash);
      return createUser(user).then(user => {
        return this.signToken(user.userID, user.email);
      });
    });
  }

  login(dto: LoginDto) {
    return getPartialUser(dto.email).then(user => {
      return bcrypt.compare(dto.password, user.password).then(pwMatch => {
        if (!pwMatch) {
          throw new UnauthorizedException();
        }
        return this.signToken(user.userID, user.email);
      });
    });
  }
}
