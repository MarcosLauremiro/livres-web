import { randomUUID } from 'crypto';

export class Pgm {
  readonly id: string;
  title: string;
  description: string;
  time: string;
  location: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
