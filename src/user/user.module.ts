import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository])],
  providers: [UserResolver, UserService],
  controllers: [UserController]
})
export class UserModule {}