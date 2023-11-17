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
    // TODO: Error handling
    // Generate password hash and save user in database.
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(dto.password, salt).then(hash => {
      // Construct a user object that contains all possible fields.
      //const user = this.createUserObject(dto, hash);
      const user = { ...dto, password: hash };

      //TODO: Add user to database. Replace with real function.
      const createdUser = createUser(user);
      return this.signToken(createdUser.userID, createdUser.email);
    });
  }

  login(dto: LoginDto) {
    // TODO: Error handling
    // TODO: Find user from database, if user doesn't exist, throw exception: 404 Not found
    const user = getPartialUser(dto.email);
    const pwMatches = bcrypt.compareSync(dto.password, user.password);
    if (!pwMatches) {
      throw new UnauthorizedException('Incorrect password');
    }
    return this.signToken(user.userID, user.email);
  }
}
