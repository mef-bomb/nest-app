import { Component } from '@nestjs/common';
import { User } from './user.interface';

const UsersMock = [
    {
        name: 'Vasyl',
    },
    {
        name: 'Dmytro',
    },
    {
        name: 'Jeff',
    },
];

@Component()
export class UserStore {
    private users: User[] = UsersMock;

    create(user: User) {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }
}
