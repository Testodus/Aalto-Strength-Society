import {
  Body,
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
import { EditDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

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
    return this.userService.getUser(Number(userID));
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtGuard)
  @Patch(':userID')
  editUser(
    @GetUser() user: { userID: number },
    @Param('userID') userID: number,
    @Body() dto: EditDto
  ) {
    if (
      user.userID.toString() == userID.toString() ||
      user.userID.toString() == adminID.toString()
    ) {
      return this.userService.editUser(userID, dto);
    } else {
      throw new UnauthorizedException();
    }
  }
}
