import { Component } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Component()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOne({ id });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
