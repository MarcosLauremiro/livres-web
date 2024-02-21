import { randomUUID } from 'crypto';

export class Address {
  readonly id: string;
  road: string;
  neighborhood: string;
  number: string;
  complement: string;
  userId: string;
  register_at: Date;

  constructor() {
    this.id = randomUUID();
    this.register_at = new Date();
  }
}
