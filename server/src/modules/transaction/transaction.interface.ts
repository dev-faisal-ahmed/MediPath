import { Schema } from 'mongoose';

export enum TRANSACTION_TYPE {
  REVENUE = 'REVENUE',
  EXPENSE = 'EXPENSE',
}

export interface ITransaction {
  id: Schema.Types.ObjectId;
  amount: number;
  date: Date;
  description?: string;
  type: TRANSACTION_TYPE;
}

export interface IBillTransaction extends ITransaction {
  billId: Schema.Types.ObjectId;
}

export interface IAdmissionTransaction extends ITransaction {
  admissionId: Schema.Types.ObjectId;
}

export interface IUtilityExpenseTransaction extends ITransaction {
  categoryId: Schema.Types.ObjectId;
}

export interface IReferrerExpenseTransaction extends ITransaction {
  referrerId: Schema.Types.ObjectId;
}

export interface IDoctorOperationTransaction extends ITransaction {
  doctorId: Schema.Types.ObjectId;
}
