export interface IUser {
  id: string;
  email: string;
  tg_id: null | string;
  name: string;
  password: null | string;
  avatar: null | string;
  created_at: string;
  role: string;
  subscription: Subscription;
  key?: string;
}

export interface Subscription {
  id: string;
  plan_id: string;
  user_id: string;
  tokens: number;
  additional_tokens: number;
  created_at: string;
  plan: Plan;
}

export interface Plan {
  id: string;
  type: string;
  price: number;
  currency: string;
  tokens: number;
}

export type ArrayUsers = IUser[];
