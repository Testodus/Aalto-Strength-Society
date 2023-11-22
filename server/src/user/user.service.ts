import { Injectable } from '@nestjs/common';
import { getUser, deleteUser, getAllUsers, updateUser } from './../vadePlsCode';
import { EditDto } from './dto';

@Injectable({})
export class UserService {
  getUser(userID: number) {
    return getUser(userID);
  }

  getAllUsers() {
    return getAllUsers();
  }

  editUser(id: number, dto: EditDto) {
    const user = { ...dto, id: id };
    return updateUser(user);
  }

  deleteUser(userID: number) {
    deleteUser(userID);
  }
}
