import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../schemas/user.schema";

@Controller('users')
export class UserController {
constructor(private readonly UserService: UserService){}
    @Get()
    async getUsers(): Promise<User[]> {
        return await this.UserService.getUsers();
    }

    @Post()
    async newUser(name: string, password: string, email: string, del: boolean): Promise<User> {
        return await this.UserService.newUser({name, email, password, del});
    }
}