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

@Module({
  imports: [UsersModule, AuthModule, AddressModule],
  controllers: [],
  providers: [],
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
