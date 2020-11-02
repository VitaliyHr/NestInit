import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller('users')
export class UserController {
constructor(private readonly UserService: UserService){}
    @Get()
    getUsers(){
        return this.UserService.getUsers();
    }

    @Post()
    newUser(name: string, age: number): boolean {
        return this.UserService.newUser();
    }
}