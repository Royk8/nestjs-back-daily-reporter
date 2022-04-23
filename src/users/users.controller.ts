import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
    getUsers(@Query() filterQuery): User[]{
        const  {searchTerm, orderBy} = filterQuery;
        return this.usersService.getUsers();
    };

    @Get(':id')
    getUser(@Param('id') id: string): User{
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() user: User): void{
        return this.usersService.createUser(user.name, user.email);
        //return `The user ${name} has been correctly added `;
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() user: User): User{
        return this.usersService.updateUser(id, user.name, user.email)
        //return `The user with id ${id} has been updated`
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): void{
        return this.usersService.removeUser(id);
        //return `The user with id ${id} has been delete from its existance`
    }
};
