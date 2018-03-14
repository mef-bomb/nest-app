import { Get, Post, Controller, Body, Res, HttpStatus, HttpException, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserValidator } from './user.validator';
import { isEmpty } from 'lodash';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async get(@Param('id') id): Promise<User> {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return user;
    }

    @Post()
    async create(@Body() user): Promise<User> {
        const userModel = new User().fill(user);
        const userValidator = new UserValidator(userModel);

        if (userValidator.valid) {
            return await this.userService.create(user);
        }
        throw new HttpException(userValidator.message, HttpStatus.BAD_REQUEST);
    }
}
