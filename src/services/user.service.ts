import { Injectable } from "@nestjs/common";
import { CreateUser } from "../dto/users.dto";
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getUsers(): Promise<User[]> {
        let users;
        try {
            users = await this.userModel.find();
        } catch (err) {
            throw err;
        }
        return users;
    }

    async newUser(createUserDto: CreateUser): Promise<User> {
        const user = new this.userModel(createUserDto);
        try {
            await user.save();
        } catch (err) {
            throw err;
        }
        return user;
    }
}