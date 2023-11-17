import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/guard';
import { GetUser } from 'src/auth/decorator';
import { adminID } from 'src/constants';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  /* @Delete(':userID')
  deleteUser(@Param('userID') userID: number) {
    console.log(userID);
    this.userService.deleteUser(userID);
  }*/
  @UseGuards(JwtGuard)
  @Delete(':userID')
  deleteUser(
    @GetUser() user: { userID: number },
    @Param('userID') userID: number
  ) {
    if (
      user.userID.toString() == userID.toString() ||
      user.userID.toString() == adminID.toString()
    ) {
      this.userService.deleteUser(userID);
    } else {
      throw new UnauthorizedException();
    }
  }

  @Get(':userID')
  getUser(@Param('userID') userID: number) {
    return this.userService.getUser(userID);
  }

  @UseGuards(JwtGuard)
  @Patch()
  editUser() {
    return 9; // TODO:
  }
}
