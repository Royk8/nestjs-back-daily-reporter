import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() filterQuery): User[] {
    const { searchTerm, orderBy } = filterQuery;
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto): void {
    return this.usersService.createUser(user);
    //return `The user ${name} has been correctly added `;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto): User {
    return this.usersService.updateUser(id, user);
    //return `The user with id ${id} has been updated`
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    return this.usersService.removeUser(id);
    //return `The user with id ${id} has been delete from its existance`
  }
}
