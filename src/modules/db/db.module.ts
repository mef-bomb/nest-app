import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1111',
        entities: [
            User,
        ],
        database: 'test',
        synchronize: true, // DEV only, do not use on PROD!
    })],
})
export class DBModule { }