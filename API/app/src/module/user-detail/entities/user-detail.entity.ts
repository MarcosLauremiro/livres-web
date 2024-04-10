import { randomUUID } from 'crypto';

export class UserDetail {
  readonly id: string;
  maritalStatus?: boolean;
  instagram?: string;
  status?: boolean;
  university?: boolean;
  work?: boolean;
  baptism?: boolean;
  startDate?: string;
  gender?: string;
  emegencyContact?: string;
  detail?: string;
  description?: string;
  user?: string;
  PGM?: string;
  ministry?: string;

  createdAt: Date = new Date();
  updatedAt?: Date;
  deletedAt?: Date;
  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
