import { randomUUID } from 'crypto';

export class Address {
  readonly id: string;
  road: string;
  neighborhood: string;
  number: string;
  complement: string;
  user?: string;
  pgm?: string;
  event?: string;
  schedule?: string;
  register_at: Date;

  constructor() {
    this.id = randomUUID();
    this.register_at = new Date();
  }
}
