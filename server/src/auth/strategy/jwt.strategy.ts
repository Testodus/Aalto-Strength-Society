import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { getPartialUser } from 'src/vadePlsCode';
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
    return getPartialUser(payload.email);
  }
}
