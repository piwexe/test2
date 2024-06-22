import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async updateProblemFlags(): Promise<number> {
    // Сначала посчитаем пользователей с проблемами
    const usersWithProblems = await this.userRepository.count({ where: { hasProblems: true } });

    // Затем обновим флаг у всех пользователей
    await this.userRepository.update({ hasProblems: true }, { hasProblems: false });

    return usersWithProblems;
  }
}
