import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  date_birth: string;
  register_at: Date;
  isAdmin: boolean;
  status:boolean
  marital_status:boolean
  instagram: string;
  university: boolean;
  work: boolean;
  baptism: boolean;
  start_date: string;
  

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.register_at = new Date();
  }
}
