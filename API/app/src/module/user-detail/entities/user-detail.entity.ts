import { randomUUID } from 'crypto';

export class UserDetail {
  readonly id: string;
  maritalStatus?: string;
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
  userId: string;
  PGMId?: string;
  ministryId?: string;

  createdAt: Date = new Date();
  updatedAt?: Date;
  deletedAt?: Date;
  constructor() {
    this.id = randomUUID();
  }
}
