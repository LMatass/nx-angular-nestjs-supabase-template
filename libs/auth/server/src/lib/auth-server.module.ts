import { Module } from '@nestjs/common';
import { AuthController } from './auth-server.controller';
import { AuthService } from './auth-server.service';
import { CoreModule } from '@nx-angular-nest-template/core';

@Module({
  imports: [CoreModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthServerModule {}
