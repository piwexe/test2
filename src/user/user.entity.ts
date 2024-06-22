import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index() // Индекс на имя
  firstName: string;

  @Column()
  @Index() // Индекс на фамилию
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column({ default: false })
  @Index() // Индекс на флаг проблем
  hasProblems: boolean;
}
