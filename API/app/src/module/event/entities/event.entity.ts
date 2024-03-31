import { randomUUID } from 'crypto';

export class Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  inscription: boolean;
  status: boolean;
  
  constructor() {
    this.id = randomUUID();
  }
}
