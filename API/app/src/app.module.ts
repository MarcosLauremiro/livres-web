import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { AddressModule } from './module/address/address.module';
import { AuthMiddleware } from './middleware/admin.middleware';
import { PrismaService } from 'database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, AuthModule, AddressModule],
  controllers: [],
  providers: [PrismaService,JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.POST },
      );
  }
}
