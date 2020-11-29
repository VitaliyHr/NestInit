import { Controller, Get, Post, Body, Header, HttpCode, HttpStatus } from "@nestjs/common";
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
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    async newUser(@Body() user: CreateUser ): Promise<User> {
        return await this.UserService.newUser(user);
    }
}