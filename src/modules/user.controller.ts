import { Get, Post, Controller, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
import { UserStore } from './user.store';
import { User } from './user.interface';
import { isEmpty } from 'lodash';

@Controller('users')
export class UserController {
    constructor(private userStore: UserStore) { }

    @Get()
    getAll(): User[] {
        return this.userStore.findAll();
    }

    @Post()
    create( @Body() user: User) {
        if (isEmpty(user)) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        return this.userStore.create(user);
    }
}
