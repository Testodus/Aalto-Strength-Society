import { Injectable } from '@nestjs/common';
import { getUser, deleteUser } from './../vadePlsCode';

@Injectable({})
export class UserService {
  getUser(userID: number) {
    // TODO: Errorhandling
    return getUser(userID);
  }

  editUser() {}

  deleteUser(userID: number) {
    // TODO: Errorhandling
    deleteUser(userID);
  }
}
