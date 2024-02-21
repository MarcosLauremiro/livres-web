import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from "@nestjs/jwt";


@Module({
  imports: [
      UsersModule,
      JwtModule.register({
          secret: process.env.SECRET_KEY,
          signOptions: { expiresIn: '1h' },
      })
  ],
  controllers:[AuthController],
  providers: [AuthService, JwtStrategy]
})

export class AuthModule {}