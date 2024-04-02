import { randomUUID } from 'crypto';

export class Schedule {
  readonly id: string;
  title: string;
  description: string;
  hour: string;
  localization: string;
  date: string;
  target_audience: string;

  constructor() {
    this.id = randomUUID();
  }
}
