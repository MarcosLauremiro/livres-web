import { randomUUID } from 'crypto';

export class Ministry {
  readonly id: string;
  title: string;
  description: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
