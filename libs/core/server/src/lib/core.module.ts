import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [PrismaModule, UsersModule],
})
export class CoreModule {}
