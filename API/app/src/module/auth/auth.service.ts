import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService:JwtService
  ) {}
  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)

        if (!user) {
            throw new UnauthorizedException('invalid email or password')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new UnauthorizedException('invalid email or password')
        }

        return {
            token: this.jwtService.sign({email: email}, {subject: user.id})
        }
    }
}
