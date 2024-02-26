import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './../module/auth/jwt.strategy';
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { IsJWT } from 'class-validator';
import { PrismaService } from 'database/prisma.service';
import { Request, Response, NextFunction } from 'express';
import { JwtAuthGuard } from 'src/module/auth/jwt-auth.guard';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedException('Access denied. User not authenticated.');
    }

    try {
      const decodedToken = this.jwtService.decode(token.split(' ')[1]);

      const user = await this.prisma.user.findUnique({
        where: { id: decodedToken },
      });

      if (!user || !user.isAdmin) {
        throw new UnauthorizedException(
          'Access denied. You are not an administrator.',
        );
      }
      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token.');
    }
  }
}
