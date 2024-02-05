import mongoose, { Document } from "mongoose";

export interface User extends Document {
  email: string;
  name: string;
  address: string;
}

export const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const UserModel = mongoose.model<User>("User", userSchema);
