import { User } from './user.entity';

export class UserValidator {
    constructor(private readonly user: User) {}

    get valid() {
        return !this.validate();
    }

    get message() {
        return this.validate();
    }

    private validate() {
        if (!this.user || !this.user.name) {
            return 'wrong model';
        }
        return '';
    }
}