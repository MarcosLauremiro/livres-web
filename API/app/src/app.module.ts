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
import { PgmModule } from './module/pgm/pgm.module';
import { EventModule } from './module/event/event.module';
import { ScheduleModule } from './module/schedule/schedule.module';
import { MinistryModule } from './module/ministry/ministry.module';
import { UserDetailModule } from './module/user-detail/user-detail.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    AddressModule,
    PgmModule,
    EventModule,
    ScheduleModule,
    MinistryModule,
    UserDetailModule,
  ],
  controllers: [],
  providers: [PrismaService, JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.POST },
        { path: 'address/:id', method: RequestMethod.GET },
        { path: 'schedule', method: RequestMethod.ALL },
        { path: 'pgm', method: RequestMethod.ALL },
        { path: 'ministry', method: RequestMethod.ALL },
        { path: 'event', method: RequestMethod.ALL },
      );
  }
}
