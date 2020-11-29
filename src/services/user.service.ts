import { Injectable } from "@nestjs/common";
import { CreateUser } from "../dto/users.dto";
import { User } from '../schemas/user.schema';
import UserRepo from "../repositories/user";

@Injectable()
export class UserService {
    async getUsers(): Promise<User[]> {
        let users;
        try {
            users = await UserRepo.findManyByFilter({ filter: { del: false }, select: "", populate: "" });
        } catch (err) {
            throw err;
        }
        return users;
    }

    async newUser(createUserDto: CreateUser): Promise<User> {
        let user;
        try {
            user = await UserRepo.create(createUserDto);
        } catch (err) {
            throw err;
        }
        return user;
    }
}