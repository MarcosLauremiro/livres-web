import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { AddressModule } from './module/address/address.module';

@Module({
  imports: [UsersModule, AuthModule, AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
