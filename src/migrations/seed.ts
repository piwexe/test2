import { createConnection } from 'typeorm';
import { User } from '../user/user.entity';
import * as dotenv from 'dotenv';
dotenv.config(); // Загрузка переменных окружения

async function seed() {
  const connection = await createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: true,
  });

  const userRepository = connection.getRepository(User);

  for (let i = 0; i < 1000000; i++) {
    const user = new User();
    user.firstName = `FirstName${i}`;
    user.lastName = `LastName${i}`;
    user.age = Math.floor(Math.random() * 60) + 20;
    user.gender = Math.random() > 0.5 ? 'male' : 'female';
    user.hasProblems = Math.random() > 0.5;
    await userRepository.save(user);
  }

  await connection.close();
}

seed().catch(err => console.log(err));
