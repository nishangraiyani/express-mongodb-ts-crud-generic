import { Model } from "mongoose";
import { User, UserModel } from "../models/user.model";
import { GenericService } from "./generic.service";

export class UserService extends GenericService<User> {
  constructor(model: Model<User>) {
    super(model);
  }

  //* override the common create method
}

const userService = new UserService(UserModel);
export const createUser = userService.create;
export const getAllUser = userService.getAll;
export const getByIdUser = userService.getById;
export const updateUser = userService.update;
export const deleteUser = userService.delete;
