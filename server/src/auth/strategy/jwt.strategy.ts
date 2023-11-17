import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import 'dotenv/config';

// TODO: This doesn't check that the correct user is accessing the service, only that an authenticated one is.
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: number; email: string }) {
    // TODO: Get user from database according to id (payload.sub)
    // TODO: Throw Unauthorized 401 if user is not found
    // TODO: I wonder what fields this user object should have. :D
    const user = {
      userID: 123456,
    };
    return user;
  }
}
