import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'Roy',
            email: 'roy@reporter.com',
        },
    ];

    getUsers(): User[]{
        return this.users;
    }

    getUser(id: string): User{
        return this.users.find((item) => item.id === id);
    }

    createUser(name: string, email: string){
        const user = {
            id: (Math.floor(Math.random() * 10000) + 1).toString(),
            name: name,
            email: email,
        }
        this.users.push(user);
    }

    updateUser(id: string, name: string, email: string): User{
        const user: User = this.getUser(id);
        user.name = name;
        user.email = email;

        return user;
    }

    removeUser(id: string){
        const index = this.users.findIndex((user) => user.id === id);
        if(index >= 0){
            this.users.splice(index, 1);
        }
    }
}
