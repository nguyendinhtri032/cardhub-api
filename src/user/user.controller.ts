import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(FirebaseAuthGuard)
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
}
