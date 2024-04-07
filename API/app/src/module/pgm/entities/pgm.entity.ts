import { randomUUID } from 'crypto';

export class Pgm {
  readonly id: string;
  title: string;
  description: string;
  time: string;
  location: string;
  leaderId: string;

  constructor() {
    this.id = randomUUID();
  }
}
