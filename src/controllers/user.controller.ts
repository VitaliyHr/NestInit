import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../schemas/user.schema";
import {CreateUser } from "../dto/users.dto";

@Controller('users')
export class UserController {
constructor(private readonly UserService: UserService){}
    @Get()
    async getUsers(): Promise<User[]> {
        return await this.UserService.getUsers();
    }

    @Post()
    async newUser(user: CreateUser ): Promise<User> {
        return await this.UserService.newUser(user);
    }
}