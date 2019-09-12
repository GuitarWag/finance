export interface Month {
  identifier: string;
  title: string;
  balance: number;
  totalIns: number;
  totalOuts: number;
  inputs: [Invoice] | any[];
  outputs: [Invoice] | any[];
}
export interface MonthReq {
  title: string;
  balance: number;
  totalIns: number;
  totalOuts: number;
  dateOfCreation: number;
}

export interface Invoice {
  identifier: string;
  title: string;
  relativeMonth: string | undefined;
  type: 'inputs' | 'outputs' | string;
  dateOfInclusion: number;
  description: string;
  value: number | null;
  paid: boolean;
}
export interface InvoiceReq {
  title: string;
  relativeMonth: string | undefined;
  type: 'inputs' | 'outputs' | string;
  dateOfInclusion: number;
  description: string;
  value: number | null;
  paid: boolean;
}
