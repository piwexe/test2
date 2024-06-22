import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('update-problem-flags')
  async updateProblemFlags(): Promise<{ count: number }> {
    const count = await this.userService.updateProblemFlags();
    return { count };
  }
}
