import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  dateBirth: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  deleteAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
