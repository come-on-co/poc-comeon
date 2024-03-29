/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  float8: { input: any; output: any; }
  interval: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AcceptFriendshipOutput = {
  __typename?: 'AcceptFriendshipOutput';
  error?: Maybe<Scalars['String']['output']>;
};

export type AcceptFriendshipParams = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type BuyTicketsParams = {
  invitees: Array<Invitee>;
  payer: Payer;
  product_id: Scalars['uuid']['input'];
  provider_name: Scalars['String']['input'];
};

export type Contact = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEntityOutput = {
  __typename?: 'CreateEntityOutput';
  entity?: Maybe<Entity>;
  id: Scalars['uuid']['output'];
  onboarding_url?: Maybe<Scalars['String']['output']>;
};

export type CreateEntityParams = {
  city?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  img: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postCode?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePrice = {
  currency: Scalars['String']['input'];
  groups_discounted?: InputMaybe<Array<Scalars['uuid']['input']>>;
  name: Scalars['String']['input'];
  presale_date?: InputMaybe<Scalars['timestamptz']['input']>;
  presale_quantity?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type CreateProductParams = {
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id: Scalars['uuid']['input'];
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  prices?: InputMaybe<Array<CreatePrice>>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

export type CreatedPrice = {
  __typename?: 'CreatedPrice';
  id: Scalars['uuid']['output'];
  price?: Maybe<Price>;
};

export type CreatedProduct = {
  __typename?: 'CreatedProduct';
  id: Scalars['uuid']['output'];
  product?: Maybe<Product>;
};

export type CreatedTransaction = {
  __typename?: 'CreatedTransaction';
  checkout_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  transaction?: Maybe<Transaction>;
};

export type CustomEmailOutput = {
  __typename?: 'CustomEmailOutput';
  error?: Maybe<Scalars['String']['output']>;
};

export type DenyFriendParams = {
  id: Scalars['uuid']['input'];
};

export enum EmailType {
  Message = 'MESSAGE',
  Reminder = 'REMINDER'
}

export type GetTransactionOutput = {
  __typename?: 'GetTransactionOutput';
  id: Scalars['uuid']['output'];
  transaction?: Maybe<Transaction>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InviteContactToEvent = {
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type InviteExternalOutput = {
  __typename?: 'InviteExternalOutput';
  id: Scalars['uuid']['output'];
};

export type InviteExternalParams = {
  contacts: Array<Contact>;
  event_id: Scalars['uuid']['input'];
  uuids: Array<Scalars['uuid']['input']>;
};

export type InviteToEventParam = {
  event_id: Scalars['uuid']['input'];
  user_ids?: InputMaybe<Array<Scalars['uuid']['input']>>;
  user_phones?: InputMaybe<Array<InviteContactToEvent>>;
};

export type InvitedMember = {
  __typename?: 'InvitedMember';
  id: Scalars['uuid']['output'];
  member?: Maybe<Onapp_Member>;
};

export type Invitee = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['uuid']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  price_id: Scalars['uuid']['input'];
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type JoinedMember = {
  __typename?: 'JoinedMember';
  id: Scalars['uuid']['output'];
};

export type ManualRemindMembersOutput = {
  __typename?: 'ManualRemindMembersOutput';
  error?: Maybe<Scalars['String']['output']>;
};

export type ManualRemindMembersParams = {
  message?: InputMaybe<Scalars['String']['input']>;
  type: ReminderType;
  uuids: Array<Scalars['uuid']['input']>;
};

export type ModifiedPrice = {
  __typename?: 'ModifiedPrice';
  id: Scalars['uuid']['output'];
  price?: Maybe<Price>;
};

export type ModifiedProduct = {
  __typename?: 'ModifiedProduct';
  id: Scalars['uuid']['output'];
  product?: Maybe<Product>;
};

export type ModifyPriceParams = {
  currency?: InputMaybe<Scalars['String']['input']>;
  groups_discounted?: InputMaybe<Array<Scalars['uuid']['input']>>;
  id: Scalars['uuid']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  presale_date?: InputMaybe<Scalars['timestamptz']['input']>;
  presale_quantity?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
};

export type ModifyProductParams = {
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id: Scalars['uuid']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

export type Payer = {
  payer_id: Scalars['uuid']['input'];
  price_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type RegisterInput = {
  birthday: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firebaseId?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  last_name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export enum ReminderType {
  Notification = 'NOTIFICATION',
  Sms = 'SMS'
}

export type RemoveFriendshipParams = {
  id: Scalars['uuid']['input'];
};

export type SearchAddressParams = {
  address: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['uuid']['input'];
};

export type SendCustomEmailParams = {
  message?: InputMaybe<Scalars['String']['input']>;
  type: EmailType;
  uuids: Array<Scalars['uuid']['input']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMemberStateParam = {
  state: Scalars['String']['input'];
  uuid: Scalars['uuid']['input'];
};

export type UpdatedMember = {
  __typename?: 'UpdatedMember';
  uuid: Scalars['uuid']['output'];
};

/** columns and relationships of "address" */
export type Address = {
  __typename?: 'address';
  city: Scalars['String']['output'];
  country_code: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  number?: Maybe<Scalars['String']['output']>;
  post_code: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

/** aggregated selection of "address" */
export type Address_Aggregate = {
  __typename?: 'address_aggregate';
  aggregate?: Maybe<Address_Aggregate_Fields>;
  nodes: Array<Address>;
};

/** aggregate fields of "address" */
export type Address_Aggregate_Fields = {
  __typename?: 'address_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Address_Max_Fields>;
  min?: Maybe<Address_Min_Fields>;
};


/** aggregate fields of "address" */
export type Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Bool_Exp>>;
  _not?: InputMaybe<Address_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  country_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  post_code?: InputMaybe<String_Comparison_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "address" */
export enum Address_Constraint {
  /** unique or primary key constraint on columns "id" */
  AddressPkey = 'address_pkey'
}

/** input type for inserting data into table "address" */
export type Address_Insert_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  post_code?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Address_Max_Fields = {
  __typename?: 'address_max_fields';
  city?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  post_code?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Address_Min_Fields = {
  __typename?: 'address_min_fields';
  city?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  post_code?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "address" */
export type Address_Mutation_Response = {
  __typename?: 'address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Address>;
};

/** input type for inserting object relation for remote table "address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Address_On_Conflict>;
};

/** on_conflict condition type for table "address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: InputMaybe<Address_Bool_Exp>;
};

/** Ordering options when selecting data from "address". */
export type Address_Order_By = {
  city?: InputMaybe<Order_By>;
  country_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  post_code?: InputMaybe<Order_By>;
  street?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address */
export type Address_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "address" */
export enum Address_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  PostCode = 'post_code',
  /** column name */
  Street = 'street'
}

/** input type for updating data in table "address" */
export type Address_Set_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  post_code?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "address" */
export type Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  country_code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  post_code?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "address" */
export enum Address_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  PostCode = 'post_code',
  /** column name */
  Street = 'street'
}

export type Address_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};

export type Cash_Stats_Entity_Args = {
  range_end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  range_start_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "currency" */
export type Currency = {
  __typename?: 'currency';
  value: Scalars['String']['output'];
};

/** aggregated selection of "currency" */
export type Currency_Aggregate = {
  __typename?: 'currency_aggregate';
  aggregate?: Maybe<Currency_Aggregate_Fields>;
  nodes: Array<Currency>;
};

/** aggregate fields of "currency" */
export type Currency_Aggregate_Fields = {
  __typename?: 'currency_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Currency_Max_Fields>;
  min?: Maybe<Currency_Min_Fields>;
};


/** aggregate fields of "currency" */
export type Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'. */
export type Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Currency_Bool_Exp>>;
  _not?: InputMaybe<Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Currency_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "currency" */
export enum Currency_Constraint {
  /** unique or primary key constraint on columns "value" */
  CurrencyPkey = 'currency_pkey',
  /** unique or primary key constraint on columns "value" */
  CurrencyValueKey = 'currency_value_key'
}

export enum Currency_Enum {
  Eur = 'EUR',
  Usd = 'USD'
}

/** Boolean expression to compare columns of type "currency_enum". All fields are combined with logical 'AND'. */
export type Currency_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Currency_Enum>;
  _in?: InputMaybe<Array<Currency_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Currency_Enum>;
  _nin?: InputMaybe<Array<Currency_Enum>>;
};

/** input type for inserting data into table "currency" */
export type Currency_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Currency_Max_Fields = {
  __typename?: 'currency_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Currency_Min_Fields = {
  __typename?: 'currency_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "currency" */
export type Currency_Mutation_Response = {
  __typename?: 'currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Currency>;
};

/** on_conflict condition type for table "currency" */
export type Currency_On_Conflict = {
  constraint: Currency_Constraint;
  update_columns?: Array<Currency_Update_Column>;
  where?: InputMaybe<Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "currency". */
export type Currency_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: currency */
export type Currency_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "currency" */
export enum Currency_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "currency" */
export type Currency_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "currency" */
export type Currency_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Currency_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Currency_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "currency" */
export enum Currency_Update_Column {
  /** column name */
  Value = 'value'
}

export type Currency_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Currency_Set_Input>;
  where: Currency_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** An entity can represent a user or a business */
export type Entity = {
  __typename?: 'entity';
  /** An object relationship */
  address?: Maybe<Address>;
  address_id?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "entity_cash_stats" */
  cash_stats?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** Current member of the entity */
  current_member?: Maybe<Array<Entity_Member>>;
  description: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  events: Array<Onapp_Event>;
  /** An aggregate relationship */
  events_aggregate: Onapp_Event_Aggregate;
  /** An array relationship */
  fees: Array<Entity_Fee>;
  /** An aggregate relationship */
  fees_aggregate: Entity_Fee_Aggregate;
  /** A computed field, executes function "entity_event_stat" */
  fill_rate?: Maybe<Scalars['float8']['output']>;
  id: Scalars['uuid']['output'];
  img?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  payment_providers: Array<Entity_Payment_Provider>;
  /** An aggregate relationship */
  payment_providers_aggregate: Entity_Payment_Provider_Aggregate;
  phone?: Maybe<Scalars['String']['output']>;
  premium: Scalars['Boolean']['output'];
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  subscription?: Maybe<Scalars['numeric']['output']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  type: Entity_Type_Enum;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_permissions: Array<Entity_Member>;
  /** An aggregate relationship */
  user_permissions_aggregate: Entity_Member_Aggregate;
};


/** An entity can represent a user or a business */
export type EntityCash_StatsArgs = {
  args: Cash_Stats_Entity_Args;
  path?: InputMaybe<Scalars['String']['input']>;
};


/** An entity can represent a user or a business */
export type EntityCurrent_MemberArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityEventsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityFeesArgs = {
  distinct_on?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Fee_Order_By>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityFees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Fee_Order_By>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityFill_RateArgs = {
  args: Fill_Rate_Entity_Args;
};


/** An entity can represent a user or a business */
export type EntityPayment_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Payment_Provider_Order_By>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityPayment_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Payment_Provider_Order_By>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityUser_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


/** An entity can represent a user or a business */
export type EntityUser_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};

/** aggregated selection of "entity" */
export type Entity_Aggregate = {
  __typename?: 'entity_aggregate';
  aggregate?: Maybe<Entity_Aggregate_Fields>;
  nodes: Array<Entity>;
};

/** aggregate fields of "entity" */
export type Entity_Aggregate_Fields = {
  __typename?: 'entity_aggregate_fields';
  avg?: Maybe<Entity_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Max_Fields>;
  min?: Maybe<Entity_Min_Fields>;
  stddev?: Maybe<Entity_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Sum_Fields>;
  var_pop?: Maybe<Entity_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Var_Samp_Fields>;
  variance?: Maybe<Entity_Variance_Fields>;
};


/** aggregate fields of "entity" */
export type Entity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Entity_Avg_Fields = {
  __typename?: 'entity_avg_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "entity". All fields are combined with a logical 'AND'. */
export type Entity_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Bool_Exp>>;
  _not?: InputMaybe<Entity_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Bool_Exp>>;
  address?: InputMaybe<Address_Bool_Exp>;
  address_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_member?: InputMaybe<Entity_Member_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  events?: InputMaybe<Onapp_Event_Bool_Exp>;
  events_aggregate?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp>;
  fees?: InputMaybe<Entity_Fee_Bool_Exp>;
  fees_aggregate?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  payment_providers?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
  payment_providers_aggregate?: InputMaybe<Entity_Payment_Provider_Aggregate_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  premium?: InputMaybe<Boolean_Comparison_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  subscription?: InputMaybe<Numeric_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  type?: InputMaybe<Entity_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_permissions?: InputMaybe<Entity_Member_Bool_Exp>;
  user_permissions_aggregate?: InputMaybe<Entity_Member_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "entity" */
export enum Entity_Constraint {
  /** unique or primary key constraint on columns "id" */
  EntityPkey = 'entity_pkey'
}

/** The fee that Come On takes on an entity */
export type Entity_Fee = {
  __typename?: 'entity_fee';
  active: Scalars['Boolean']['output'];
  amount: Scalars['float8']['output'];
  created_at: Scalars['timestamptz']['output'];
  currency: Currency_Enum;
  /** An object relationship */
  entity: Entity;
  entity_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  percentage: Scalars['float8']['output'];
};

/** aggregated selection of "entity_fee" */
export type Entity_Fee_Aggregate = {
  __typename?: 'entity_fee_aggregate';
  aggregate?: Maybe<Entity_Fee_Aggregate_Fields>;
  nodes: Array<Entity_Fee>;
};

export type Entity_Fee_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Entity_Fee_Aggregate_Bool_Exp_Var_Samp>;
};

export type Entity_Fee_Aggregate_Bool_Exp_Avg = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Bool_And = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Corr = {
  arguments: Entity_Fee_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Entity_Fee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Entity_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Entity_Fee_Aggregate_Bool_Exp_Max = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Min = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Sum = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Entity_Fee_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "entity_fee" */
export type Entity_Fee_Aggregate_Fields = {
  __typename?: 'entity_fee_aggregate_fields';
  avg?: Maybe<Entity_Fee_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Fee_Max_Fields>;
  min?: Maybe<Entity_Fee_Min_Fields>;
  stddev?: Maybe<Entity_Fee_Stddev_Fields>;
  stddev_pop?: Maybe<Entity_Fee_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entity_Fee_Stddev_Samp_Fields>;
  sum?: Maybe<Entity_Fee_Sum_Fields>;
  var_pop?: Maybe<Entity_Fee_Var_Pop_Fields>;
  var_samp?: Maybe<Entity_Fee_Var_Samp_Fields>;
  variance?: Maybe<Entity_Fee_Variance_Fields>;
};


/** aggregate fields of "entity_fee" */
export type Entity_Fee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "entity_fee" */
export type Entity_Fee_Aggregate_Order_By = {
  avg?: InputMaybe<Entity_Fee_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_Fee_Max_Order_By>;
  min?: InputMaybe<Entity_Fee_Min_Order_By>;
  stddev?: InputMaybe<Entity_Fee_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Entity_Fee_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entity_Fee_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entity_Fee_Sum_Order_By>;
  var_pop?: InputMaybe<Entity_Fee_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entity_Fee_Var_Samp_Order_By>;
  variance?: InputMaybe<Entity_Fee_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "entity_fee" */
export type Entity_Fee_Arr_Rel_Insert_Input = {
  data: Array<Entity_Fee_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Fee_On_Conflict>;
};

/** aggregate avg on columns */
export type Entity_Fee_Avg_Fields = {
  __typename?: 'entity_fee_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "entity_fee" */
export type Entity_Fee_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "entity_fee". All fields are combined with a logical 'AND'. */
export type Entity_Fee_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Fee_Bool_Exp>>;
  _not?: InputMaybe<Entity_Fee_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Fee_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Enum_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  percentage?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity_fee" */
export enum Entity_Fee_Constraint {
  /** unique or primary key constraint on columns "id" */
  EntityFeePkey = 'entity_fee_pkey'
}

/** input type for incrementing numeric columns in table "entity_fee" */
export type Entity_Fee_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "entity_fee" */
export type Entity_Fee_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  entity?: InputMaybe<Entity_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Entity_Fee_Max_Fields = {
  __typename?: 'entity_fee_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** order by max() on columns of table "entity_fee" */
export type Entity_Fee_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entity_Fee_Min_Fields = {
  __typename?: 'entity_fee_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** order by min() on columns of table "entity_fee" */
export type Entity_Fee_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entity_fee" */
export type Entity_Fee_Mutation_Response = {
  __typename?: 'entity_fee_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Fee>;
};

/** input type for inserting object relation for remote table "entity_fee" */
export type Entity_Fee_Obj_Rel_Insert_Input = {
  data: Entity_Fee_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Fee_On_Conflict>;
};

/** on_conflict condition type for table "entity_fee" */
export type Entity_Fee_On_Conflict = {
  constraint: Entity_Fee_Constraint;
  update_columns?: Array<Entity_Fee_Update_Column>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};

/** Ordering options when selecting data from "entity_fee". */
export type Entity_Fee_Order_By = {
  active?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity_fee */
export type Entity_Fee_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "entity_fee" */
export enum Entity_Fee_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_avg_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_bool_and_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "entity_fee_aggregate_bool_exp_bool_or_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "entity_fee_aggregate_bool_exp_corr_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_max_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_min_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_sum_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "entity_fee_aggregate_bool_exp_var_samp_arguments_columns" columns of table "entity_fee" */
export enum Entity_Fee_Select_Column_Entity_Fee_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** input type for updating data in table "entity_fee" */
export type Entity_Fee_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Entity_Fee_Stddev_Fields = {
  __typename?: 'entity_fee_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "entity_fee" */
export type Entity_Fee_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Entity_Fee_Stddev_Pop_Fields = {
  __typename?: 'entity_fee_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "entity_fee" */
export type Entity_Fee_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Entity_Fee_Stddev_Samp_Fields = {
  __typename?: 'entity_fee_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "entity_fee" */
export type Entity_Fee_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "entity_fee" */
export type Entity_Fee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Fee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Fee_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Entity_Fee_Sum_Fields = {
  __typename?: 'entity_fee_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "entity_fee" */
export type Entity_Fee_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** update columns of table "entity_fee" */
export enum Entity_Fee_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Percentage = 'percentage'
}

export type Entity_Fee_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entity_Fee_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Fee_Set_Input>;
  where: Entity_Fee_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Entity_Fee_Var_Pop_Fields = {
  __typename?: 'entity_fee_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "entity_fee" */
export type Entity_Fee_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Entity_Fee_Var_Samp_Fields = {
  __typename?: 'entity_fee_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "entity_fee" */
export type Entity_Fee_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Entity_Fee_Variance_Fields = {
  __typename?: 'entity_fee_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "entity_fee" */
export type Entity_Fee_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "entity" */
export type Entity_Inc_Input = {
  subscription?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "entity" */
export type Entity_Insert_Input = {
  address?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Onapp_Event_Arr_Rel_Insert_Input>;
  fees?: InputMaybe<Entity_Fee_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_providers?: InputMaybe<Entity_Payment_Provider_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  subscription?: InputMaybe<Scalars['numeric']['input']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Entity_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_permissions?: InputMaybe<Entity_Member_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Entity_Max_Fields = {
  __typename?: 'entity_max_fields';
  address_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** A user's permission for an entity */
export type Entity_Member = {
  __typename?: 'entity_member';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  created_prices: Array<Price>;
  /** An aggregate relationship */
  created_prices_aggregate: Price_Aggregate;
  /** An array relationship */
  created_products: Array<Product>;
  /** An aggregate relationship */
  created_products_aggregate: Product_Aggregate;
  /** An object relationship */
  entity: Entity;
  entity_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  memberships: Array<Onapp_Member>;
  /** An aggregate relationship */
  memberships_aggregate: Onapp_Member_Aggregate;
  role: Scalars['String']['output'];
  /** An array relationship */
  transactions_payed: Array<Transaction>;
  /** An aggregate relationship */
  transactions_payed_aggregate: Transaction_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Register_Profile;
  user_id: Scalars['uuid']['output'];
};


/** A user's permission for an entity */
export type Entity_MemberCreated_PricesArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberCreated_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberCreated_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberCreated_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberMembershipsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberMemberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberTransactions_PayedArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** A user's permission for an entity */
export type Entity_MemberTransactions_Payed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "entity_member" */
export type Entity_Member_Aggregate = {
  __typename?: 'entity_member_aggregate';
  aggregate?: Maybe<Entity_Member_Aggregate_Fields>;
  nodes: Array<Entity_Member>;
};

export type Entity_Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Entity_Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Entity_Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Entity_Member_Aggregate_Bool_Exp_Count>;
};

export type Entity_Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Entity_Member_Select_Column_Entity_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Entity_Member_Select_Column_Entity_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entity_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "entity_member" */
export type Entity_Member_Aggregate_Fields = {
  __typename?: 'entity_member_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Member_Max_Fields>;
  min?: Maybe<Entity_Member_Min_Fields>;
};


/** aggregate fields of "entity_member" */
export type Entity_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "entity_member" */
export type Entity_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_Member_Max_Order_By>;
  min?: InputMaybe<Entity_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entity_member" */
export type Entity_Member_Arr_Rel_Insert_Input = {
  data: Array<Entity_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "entity_member". All fields are combined with a logical 'AND'. */
export type Entity_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Member_Bool_Exp>>;
  _not?: InputMaybe<Entity_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Member_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_prices?: InputMaybe<Price_Bool_Exp>;
  created_prices_aggregate?: InputMaybe<Price_Aggregate_Bool_Exp>;
  created_products?: InputMaybe<Product_Bool_Exp>;
  created_products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  memberships?: InputMaybe<Onapp_Member_Bool_Exp>;
  memberships_aggregate?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  transactions_payed?: InputMaybe<Transaction_Bool_Exp>;
  transactions_payed_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Register_Profile_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity_member" */
export enum Entity_Member_Constraint {
  /** unique or primary key constraint on columns "entity_id", "user_id" */
  EntityMemberEntityIdUserIdKey = 'entity_member_entity_id_user_id_key',
  /** unique or primary key constraint on columns "id" */
  UserPermissionIdKey = 'user_permission_id_key',
  /** unique or primary key constraint on columns "id" */
  UserPermissionPkey = 'user_permission_pkey'
}

/** input type for inserting data into table "entity_member" */
export type Entity_Member_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_prices?: InputMaybe<Price_Arr_Rel_Insert_Input>;
  created_products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  entity?: InputMaybe<Entity_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberships?: InputMaybe<Onapp_Member_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
  transactions_payed?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Entity_Member_Max_Fields = {
  __typename?: 'entity_member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "entity_member" */
export type Entity_Member_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entity_Member_Min_Fields = {
  __typename?: 'entity_member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "entity_member" */
export type Entity_Member_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entity_member" */
export type Entity_Member_Mutation_Response = {
  __typename?: 'entity_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Member>;
};

/** input type for inserting object relation for remote table "entity_member" */
export type Entity_Member_Obj_Rel_Insert_Input = {
  data: Entity_Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Member_On_Conflict>;
};

/** on_conflict condition type for table "entity_member" */
export type Entity_Member_On_Conflict = {
  constraint: Entity_Member_Constraint;
  update_columns?: Array<Entity_Member_Update_Column>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "entity_member". */
export type Entity_Member_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_prices_aggregate?: InputMaybe<Price_Aggregate_Order_By>;
  created_products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberships_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  transactions_payed_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Register_Profile_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity_member */
export type Entity_Member_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "entity_member" */
export enum Entity_Member_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "entity_member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "entity_member" */
export enum Entity_Member_Select_Column_Entity_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "entity_member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "entity_member" */
export enum Entity_Member_Select_Column_Entity_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "entity_member" */
export type Entity_Member_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "entity_member" */
export type Entity_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Member_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "entity_member" */
export enum Entity_Member_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Entity_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Member_Set_Input>;
  where: Entity_Member_Bool_Exp;
};

/** aggregate min on columns */
export type Entity_Min_Fields = {
  __typename?: 'entity_min_fields';
  address_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "entity" */
export type Entity_Mutation_Response = {
  __typename?: 'entity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity>;
};

/** input type for inserting object relation for remote table "entity" */
export type Entity_Obj_Rel_Insert_Input = {
  data: Entity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_On_Conflict>;
};

/** on_conflict condition type for table "entity" */
export type Entity_On_Conflict = {
  constraint: Entity_Constraint;
  update_columns?: Array<Entity_Update_Column>;
  where?: InputMaybe<Entity_Bool_Exp>;
};

/** Ordering options when selecting data from "entity". */
export type Entity_Order_By = {
  address?: InputMaybe<Address_Order_By>;
  address_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_member_aggregate?: InputMaybe<Entity_Member_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Onapp_Event_Aggregate_Order_By>;
  fees_aggregate?: InputMaybe<Entity_Fee_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  payment_providers_aggregate?: InputMaybe<Entity_Payment_Provider_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  premium?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  subscription?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_permissions_aggregate?: InputMaybe<Entity_Member_Aggregate_Order_By>;
};

/** Many to many linking an entity to a payment provider seller */
export type Entity_Payment_Provider = {
  __typename?: 'entity_payment_provider';
  created_at: Scalars['timestamptz']['output'];
  customer_id: Scalars['uuid']['output'];
  /** An object relationship */
  entity: Entity;
  entity_id: Scalars['uuid']['output'];
  onboarding_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  payment_provider: Payment_Provider;
  payment_provider_id: Scalars['uuid']['output'];
  verified: Scalars['Boolean']['output'];
};

/** aggregated selection of "entity_payment_provider" */
export type Entity_Payment_Provider_Aggregate = {
  __typename?: 'entity_payment_provider_aggregate';
  aggregate?: Maybe<Entity_Payment_Provider_Aggregate_Fields>;
  nodes: Array<Entity_Payment_Provider>;
};

export type Entity_Payment_Provider_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Entity_Payment_Provider_Aggregate_Bool_Exp_Count>;
};

export type Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_And = {
  arguments: Entity_Payment_Provider_Select_Column_Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Entity_Payment_Provider_Select_Column_Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Entity_Payment_Provider_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "entity_payment_provider" */
export type Entity_Payment_Provider_Aggregate_Fields = {
  __typename?: 'entity_payment_provider_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Payment_Provider_Max_Fields>;
  min?: Maybe<Entity_Payment_Provider_Min_Fields>;
};


/** aggregate fields of "entity_payment_provider" */
export type Entity_Payment_Provider_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "entity_payment_provider" */
export type Entity_Payment_Provider_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_Payment_Provider_Max_Order_By>;
  min?: InputMaybe<Entity_Payment_Provider_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entity_payment_provider" */
export type Entity_Payment_Provider_Arr_Rel_Insert_Input = {
  data: Array<Entity_Payment_Provider_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entity_Payment_Provider_On_Conflict>;
};

/** Boolean expression to filter rows from the table "entity_payment_provider". All fields are combined with a logical 'AND'. */
export type Entity_Payment_Provider_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Payment_Provider_Bool_Exp>>;
  _not?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Payment_Provider_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  onboarding_url?: InputMaybe<String_Comparison_Exp>;
  payment_provider?: InputMaybe<Payment_Provider_Bool_Exp>;
  payment_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity_payment_provider" */
export enum Entity_Payment_Provider_Constraint {
  /** unique or primary key constraint on columns "customer_id" */
  EntityPaymentProviderPaymentProviderEntityIdKey = 'entity_payment_provider_payment_provider_entity_id_key',
  /** unique or primary key constraint on columns "entity_id", "payment_provider_id" */
  EntityPaymentProviderPkey = 'entity_payment_provider_pkey'
}

/** input type for inserting data into table "entity_payment_provider" */
export type Entity_Payment_Provider_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  customer_id?: InputMaybe<Scalars['uuid']['input']>;
  entity?: InputMaybe<Entity_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  onboarding_url?: InputMaybe<Scalars['String']['input']>;
  payment_provider?: InputMaybe<Payment_Provider_Obj_Rel_Insert_Input>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Entity_Payment_Provider_Max_Fields = {
  __typename?: 'entity_payment_provider_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  customer_id?: Maybe<Scalars['uuid']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  onboarding_url?: Maybe<Scalars['String']['output']>;
  payment_provider_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "entity_payment_provider" */
export type Entity_Payment_Provider_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  onboarding_url?: InputMaybe<Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entity_Payment_Provider_Min_Fields = {
  __typename?: 'entity_payment_provider_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  customer_id?: Maybe<Scalars['uuid']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  onboarding_url?: Maybe<Scalars['String']['output']>;
  payment_provider_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "entity_payment_provider" */
export type Entity_Payment_Provider_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  onboarding_url?: InputMaybe<Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entity_payment_provider" */
export type Entity_Payment_Provider_Mutation_Response = {
  __typename?: 'entity_payment_provider_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Payment_Provider>;
};

/** on_conflict condition type for table "entity_payment_provider" */
export type Entity_Payment_Provider_On_Conflict = {
  constraint: Entity_Payment_Provider_Constraint;
  update_columns?: Array<Entity_Payment_Provider_Update_Column>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};

/** Ordering options when selecting data from "entity_payment_provider". */
export type Entity_Payment_Provider_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  onboarding_url?: InputMaybe<Order_By>;
  payment_provider?: InputMaybe<Payment_Provider_Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity_payment_provider */
export type Entity_Payment_Provider_Pk_Columns_Input = {
  entity_id: Scalars['uuid']['input'];
  payment_provider_id: Scalars['uuid']['input'];
};

/** select columns of table "entity_payment_provider" */
export enum Entity_Payment_Provider_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  OnboardingUrl = 'onboarding_url',
  /** column name */
  PaymentProviderId = 'payment_provider_id',
  /** column name */
  Verified = 'verified'
}

/** select "entity_payment_provider_aggregate_bool_exp_bool_and_arguments_columns" columns of table "entity_payment_provider" */
export enum Entity_Payment_Provider_Select_Column_Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Verified = 'verified'
}

/** select "entity_payment_provider_aggregate_bool_exp_bool_or_arguments_columns" columns of table "entity_payment_provider" */
export enum Entity_Payment_Provider_Select_Column_Entity_Payment_Provider_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "entity_payment_provider" */
export type Entity_Payment_Provider_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  customer_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  onboarding_url?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "entity_payment_provider" */
export type Entity_Payment_Provider_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Payment_Provider_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Payment_Provider_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  customer_id?: InputMaybe<Scalars['uuid']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  onboarding_url?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** update columns of table "entity_payment_provider" */
export enum Entity_Payment_Provider_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  OnboardingUrl = 'onboarding_url',
  /** column name */
  PaymentProviderId = 'payment_provider_id',
  /** column name */
  Verified = 'verified'
}

export type Entity_Payment_Provider_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Payment_Provider_Set_Input>;
  where: Entity_Payment_Provider_Bool_Exp;
};

/** primary key columns input for table: entity */
export type Entity_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "entity" */
export enum Entity_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Premium = 'premium',
  /** column name */
  Subscription = 'subscription',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "entity" */
export type Entity_Set_Input = {
  address_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  subscription?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Entity_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Entity_Stddev_Fields = {
  __typename?: 'entity_stddev_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Entity_Stddev_Pop_Fields = {
  __typename?: 'entity_stddev_pop_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Entity_Stddev_Samp_Fields = {
  __typename?: 'entity_stddev_samp_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "entity" */
export type Entity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  subscription?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Entity_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Entity_Sum_Fields = {
  __typename?: 'entity_sum_fields';
  subscription?: Maybe<Scalars['numeric']['output']>;
};

/** The different entity types */
export type Entity_Type = {
  __typename?: 'entity_type';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "entity_type" */
export type Entity_Type_Aggregate = {
  __typename?: 'entity_type_aggregate';
  aggregate?: Maybe<Entity_Type_Aggregate_Fields>;
  nodes: Array<Entity_Type>;
};

/** aggregate fields of "entity_type" */
export type Entity_Type_Aggregate_Fields = {
  __typename?: 'entity_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Entity_Type_Max_Fields>;
  min?: Maybe<Entity_Type_Min_Fields>;
};


/** aggregate fields of "entity_type" */
export type Entity_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entity_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "entity_type". All fields are combined with a logical 'AND'. */
export type Entity_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Type_Bool_Exp>>;
  _not?: InputMaybe<Entity_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "entity_type" */
export enum Entity_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  EntityTypePkey = 'entity_type_pkey'
}

export enum Entity_Type_Enum {
  /** An entity representing a business */
  Business = 'business',
  /** An entity representing a user */
  Personnal = 'personnal'
}

/** Boolean expression to compare columns of type "entity_type_enum". All fields are combined with logical 'AND'. */
export type Entity_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Entity_Type_Enum>;
  _in?: InputMaybe<Array<Entity_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Entity_Type_Enum>;
  _nin?: InputMaybe<Array<Entity_Type_Enum>>;
};

/** input type for inserting data into table "entity_type" */
export type Entity_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Entity_Type_Max_Fields = {
  __typename?: 'entity_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Entity_Type_Min_Fields = {
  __typename?: 'entity_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "entity_type" */
export type Entity_Type_Mutation_Response = {
  __typename?: 'entity_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Entity_Type>;
};

/** on_conflict condition type for table "entity_type" */
export type Entity_Type_On_Conflict = {
  constraint: Entity_Type_Constraint;
  update_columns?: Array<Entity_Type_Update_Column>;
  where?: InputMaybe<Entity_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "entity_type". */
export type Entity_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entity_type */
export type Entity_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "entity_type" */
export enum Entity_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "entity_type" */
export type Entity_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "entity_type" */
export type Entity_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "entity_type" */
export enum Entity_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Entity_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Type_Set_Input>;
  where: Entity_Type_Bool_Exp;
};

/** update columns of table "entity" */
export enum Entity_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Premium = 'premium',
  /** column name */
  Subscription = 'subscription',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Entity_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entity_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entity_Set_Input>;
  where: Entity_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Entity_Var_Pop_Fields = {
  __typename?: 'entity_var_pop_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Entity_Var_Samp_Fields = {
  __typename?: 'entity_var_samp_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Entity_Variance_Fields = {
  __typename?: 'entity_variance_fields';
  subscription?: Maybe<Scalars['Float']['output']>;
};

export type Fill_Rate_Entity_Args = {
  range_end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  range_start_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "friend_status" */
export type Friend_Status = {
  __typename?: 'friend_status';
  state: Scalars['String']['output'];
};

/** aggregated selection of "friend_status" */
export type Friend_Status_Aggregate = {
  __typename?: 'friend_status_aggregate';
  aggregate?: Maybe<Friend_Status_Aggregate_Fields>;
  nodes: Array<Friend_Status>;
};

/** aggregate fields of "friend_status" */
export type Friend_Status_Aggregate_Fields = {
  __typename?: 'friend_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Friend_Status_Max_Fields>;
  min?: Maybe<Friend_Status_Min_Fields>;
};


/** aggregate fields of "friend_status" */
export type Friend_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Friend_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "friend_status". All fields are combined with a logical 'AND'. */
export type Friend_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Friend_Status_Bool_Exp>>;
  _not?: InputMaybe<Friend_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Friend_Status_Bool_Exp>>;
  state?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "friend_status" */
export enum Friend_Status_Constraint {
  /** unique or primary key constraint on columns "state" */
  FriendStatusPkey = 'friend_status_pkey'
}

/** input type for inserting data into table "friend_status" */
export type Friend_Status_Insert_Input = {
  state?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Friend_Status_Max_Fields = {
  __typename?: 'friend_status_max_fields';
  state?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Friend_Status_Min_Fields = {
  __typename?: 'friend_status_min_fields';
  state?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "friend_status" */
export type Friend_Status_Mutation_Response = {
  __typename?: 'friend_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Friend_Status>;
};

/** on_conflict condition type for table "friend_status" */
export type Friend_Status_On_Conflict = {
  constraint: Friend_Status_Constraint;
  update_columns?: Array<Friend_Status_Update_Column>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "friend_status". */
export type Friend_Status_Order_By = {
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: friend_status */
export type Friend_Status_Pk_Columns_Input = {
  state: Scalars['String']['input'];
};

/** select columns of table "friend_status" */
export enum Friend_Status_Select_Column {
  /** column name */
  State = 'state'
}

/** input type for updating data in table "friend_status" */
export type Friend_Status_Set_Input = {
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "friend_status" */
export type Friend_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Friend_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Friend_Status_Stream_Cursor_Value_Input = {
  state?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "friend_status" */
export enum Friend_Status_Update_Column {
  /** column name */
  State = 'state'
}

export type Friend_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Friend_Status_Set_Input>;
  where: Friend_Status_Bool_Exp;
};

export type InitPaymentParams = {
  payer_id: Scalars['uuid']['input'];
  price_id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
  provider_name: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['interval']['input']>;
  _gt?: InputMaybe<Scalars['interval']['input']>;
  _gte?: InputMaybe<Scalars['interval']['input']>;
  _in?: InputMaybe<Array<Scalars['interval']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['interval']['input']>;
  _lte?: InputMaybe<Scalars['interval']['input']>;
  _neq?: InputMaybe<Scalars['interval']['input']>;
  _nin?: InputMaybe<Array<Scalars['interval']['input']>>;
};

export type LoginWithPhoneInput = {
  firebase_id: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type LoginWithPhoneOutput = {
  __typename?: 'loginWithPhoneOutput';
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  firebaseId?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  last_name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

/** This table row represent a scan of a member ticket in an event */
export type Member_Ticket_Scan = {
  __typename?: 'member_ticket_scan';
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Onapp_Member;
  member_id: Scalars['uuid']['output'];
};

/** aggregated selection of "member_ticket_scan" */
export type Member_Ticket_Scan_Aggregate = {
  __typename?: 'member_ticket_scan_aggregate';
  aggregate?: Maybe<Member_Ticket_Scan_Aggregate_Fields>;
  nodes: Array<Member_Ticket_Scan>;
};

export type Member_Ticket_Scan_Aggregate_Bool_Exp = {
  count?: InputMaybe<Member_Ticket_Scan_Aggregate_Bool_Exp_Count>;
};

export type Member_Ticket_Scan_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member_ticket_scan" */
export type Member_Ticket_Scan_Aggregate_Fields = {
  __typename?: 'member_ticket_scan_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Ticket_Scan_Max_Fields>;
  min?: Maybe<Member_Ticket_Scan_Min_Fields>;
};


/** aggregate fields of "member_ticket_scan" */
export type Member_Ticket_Scan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "member_ticket_scan" */
export type Member_Ticket_Scan_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Ticket_Scan_Max_Order_By>;
  min?: InputMaybe<Member_Ticket_Scan_Min_Order_By>;
};

/** input type for inserting array relation for remote table "member_ticket_scan" */
export type Member_Ticket_Scan_Arr_Rel_Insert_Input = {
  data: Array<Member_Ticket_Scan_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_Ticket_Scan_On_Conflict>;
};

/** Boolean expression to filter rows from the table "member_ticket_scan". All fields are combined with a logical 'AND'. */
export type Member_Ticket_Scan_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Ticket_Scan_Bool_Exp>>;
  _not?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Ticket_Scan_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_ticket_scan" */
export enum Member_Ticket_Scan_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberTicketScanPkey = 'member_ticket_scan_pkey'
}

/** input type for inserting data into table "member_ticket_scan" */
export type Member_Ticket_Scan_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Member_Ticket_Scan_Max_Fields = {
  __typename?: 'member_ticket_scan_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "member_ticket_scan" */
export type Member_Ticket_Scan_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Ticket_Scan_Min_Fields = {
  __typename?: 'member_ticket_scan_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "member_ticket_scan" */
export type Member_Ticket_Scan_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member_ticket_scan" */
export type Member_Ticket_Scan_Mutation_Response = {
  __typename?: 'member_ticket_scan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Ticket_Scan>;
};

/** on_conflict condition type for table "member_ticket_scan" */
export type Member_Ticket_Scan_On_Conflict = {
  constraint: Member_Ticket_Scan_Constraint;
  update_columns?: Array<Member_Ticket_Scan_Update_Column>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};

/** Ordering options when selecting data from "member_ticket_scan". */
export type Member_Ticket_Scan_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_ticket_scan */
export type Member_Ticket_Scan_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "member_ticket_scan" */
export enum Member_Ticket_Scan_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id'
}

/** input type for updating data in table "member_ticket_scan" */
export type Member_Ticket_Scan_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "member_ticket_scan" */
export type Member_Ticket_Scan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Ticket_Scan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Ticket_Scan_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "member_ticket_scan" */
export enum Member_Ticket_Scan_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id'
}

export type Member_Ticket_Scan_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Ticket_Scan_Set_Input>;
  where: Member_Ticket_Scan_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  acceptFriendship?: Maybe<AcceptFriendshipOutput>;
  /** register supertokens */
  auth_register?: Maybe<RegisterOutput>;
  /** buyTickets */
  buyTickets: CreatedTransaction;
  /** The action to create an entity */
  createEntity?: Maybe<CreateEntityOutput>;
  /** createPrice */
  createPrice: CreatedPrice;
  /** createProduct */
  createProduct: CreatedProduct;
  /** delete data from the table: "address" */
  delete_address?: Maybe<Address_Mutation_Response>;
  /** delete single row from the table: "address" */
  delete_address_by_pk?: Maybe<Address>;
  /** delete data from the table: "currency" */
  delete_currency?: Maybe<Currency_Mutation_Response>;
  /** delete single row from the table: "currency" */
  delete_currency_by_pk?: Maybe<Currency>;
  /** delete data from the table: "entity" */
  delete_entity?: Maybe<Entity_Mutation_Response>;
  /** delete single row from the table: "entity" */
  delete_entity_by_pk?: Maybe<Entity>;
  /** delete data from the table: "entity_fee" */
  delete_entity_fee?: Maybe<Entity_Fee_Mutation_Response>;
  /** delete single row from the table: "entity_fee" */
  delete_entity_fee_by_pk?: Maybe<Entity_Fee>;
  /** delete data from the table: "entity_member" */
  delete_entity_member?: Maybe<Entity_Member_Mutation_Response>;
  /** delete single row from the table: "entity_member" */
  delete_entity_member_by_pk?: Maybe<Entity_Member>;
  /** delete data from the table: "entity_payment_provider" */
  delete_entity_payment_provider?: Maybe<Entity_Payment_Provider_Mutation_Response>;
  /** delete single row from the table: "entity_payment_provider" */
  delete_entity_payment_provider_by_pk?: Maybe<Entity_Payment_Provider>;
  /** delete data from the table: "entity_type" */
  delete_entity_type?: Maybe<Entity_Type_Mutation_Response>;
  /** delete single row from the table: "entity_type" */
  delete_entity_type_by_pk?: Maybe<Entity_Type>;
  /** delete data from the table: "friend_status" */
  delete_friend_status?: Maybe<Friend_Status_Mutation_Response>;
  /** delete single row from the table: "friend_status" */
  delete_friend_status_by_pk?: Maybe<Friend_Status>;
  /** delete data from the table: "member_ticket_scan" */
  delete_member_ticket_scan?: Maybe<Member_Ticket_Scan_Mutation_Response>;
  /** delete single row from the table: "member_ticket_scan" */
  delete_member_ticket_scan_by_pk?: Maybe<Member_Ticket_Scan>;
  /** delete data from the table: "onapp_bill" */
  delete_onapp_bill?: Maybe<Onapp_Bill_Mutation_Response>;
  /** delete single row from the table: "onapp_bill" */
  delete_onapp_bill_by_pk?: Maybe<Onapp_Bill>;
  /** delete data from the table: "onapp_event" */
  delete_onapp_event?: Maybe<Onapp_Event_Mutation_Response>;
  /** delete single row from the table: "onapp_event" */
  delete_onapp_event_by_pk?: Maybe<Onapp_Event>;
  /** delete data from the table: "onapp_hasuratask" */
  delete_onapp_hasuratask?: Maybe<Onapp_Hasuratask_Mutation_Response>;
  /** delete single row from the table: "onapp_hasuratask" */
  delete_onapp_hasuratask_by_pk?: Maybe<Onapp_Hasuratask>;
  /** delete data from the table: "onapp_member" */
  delete_onapp_member?: Maybe<Onapp_Member_Mutation_Response>;
  /** delete single row from the table: "onapp_member" */
  delete_onapp_member_by_pk?: Maybe<Onapp_Member>;
  /** delete data from the table: "onapp_message" */
  delete_onapp_message?: Maybe<Onapp_Message_Mutation_Response>;
  /** delete single row from the table: "onapp_message" */
  delete_onapp_message_by_pk?: Maybe<Onapp_Message>;
  /** delete data from the table: "onapp_messagemedia" */
  delete_onapp_messagemedia?: Maybe<Onapp_Messagemedia_Mutation_Response>;
  /** delete single row from the table: "onapp_messagemedia" */
  delete_onapp_messagemedia_by_pk?: Maybe<Onapp_Messagemedia>;
  /** delete data from the table: "onapp_messagemention" */
  delete_onapp_messagemention?: Maybe<Onapp_Messagemention_Mutation_Response>;
  /** delete single row from the table: "onapp_messagemention" */
  delete_onapp_messagemention_by_pk?: Maybe<Onapp_Messagemention>;
  /** delete data from the table: "onapp_messagepin" */
  delete_onapp_messagepin?: Maybe<Onapp_Messagepin_Mutation_Response>;
  /** delete single row from the table: "onapp_messagepin" */
  delete_onapp_messagepin_by_pk?: Maybe<Onapp_Messagepin>;
  /** delete data from the table: "onapp_messagereaction" */
  delete_onapp_messagereaction?: Maybe<Onapp_Messagereaction_Mutation_Response>;
  /** delete single row from the table: "onapp_messagereaction" */
  delete_onapp_messagereaction_by_pk?: Maybe<Onapp_Messagereaction>;
  /** delete data from the table: "onapp_notification" */
  delete_onapp_notification?: Maybe<Onapp_Notification_Mutation_Response>;
  /** delete single row from the table: "onapp_notification" */
  delete_onapp_notification_by_pk?: Maybe<Onapp_Notification>;
  /** delete data from the table: "onapp_notifmessage" */
  delete_onapp_notifmessage?: Maybe<Onapp_Notifmessage_Mutation_Response>;
  /** delete single row from the table: "onapp_notifmessage" */
  delete_onapp_notifmessage_by_pk?: Maybe<Onapp_Notifmessage>;
  /** delete data from the table: "onapp_polloption" */
  delete_onapp_polloption?: Maybe<Onapp_Polloption_Mutation_Response>;
  /** delete single row from the table: "onapp_polloption" */
  delete_onapp_polloption_by_pk?: Maybe<Onapp_Polloption>;
  /** delete data from the table: "onapp_pollvote" */
  delete_onapp_pollvote?: Maybe<Onapp_Pollvote_Mutation_Response>;
  /** delete single row from the table: "onapp_pollvote" */
  delete_onapp_pollvote_by_pk?: Maybe<Onapp_Pollvote>;
  /** delete data from the table: "payment_provider" */
  delete_payment_provider?: Maybe<Payment_Provider_Mutation_Response>;
  /** delete single row from the table: "payment_provider" */
  delete_payment_provider_by_pk?: Maybe<Payment_Provider>;
  /** delete data from the table: "payment_provider_fee" */
  delete_payment_provider_fee?: Maybe<Payment_Provider_Fee_Mutation_Response>;
  /** delete single row from the table: "payment_provider_fee" */
  delete_payment_provider_fee_by_pk?: Maybe<Payment_Provider_Fee>;
  /** delete data from the table: "price" */
  delete_price?: Maybe<Price_Mutation_Response>;
  /** delete single row from the table: "price" */
  delete_price_by_pk?: Maybe<Price>;
  /** delete data from the table: "price_group_discount" */
  delete_price_group_discount?: Maybe<Price_Group_Discount_Mutation_Response>;
  /** delete single row from the table: "price_group_discount" */
  delete_price_group_discount_by_pk?: Maybe<Price_Group_Discount>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "product_type" */
  delete_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** delete single row from the table: "product_type" */
  delete_product_type_by_pk?: Maybe<Product_Type>;
  /** delete data from the table: "redirect_otp" */
  delete_redirect_otp?: Maybe<Redirect_Otp_Mutation_Response>;
  /** delete single row from the table: "redirect_otp" */
  delete_redirect_otp_by_pk?: Maybe<Redirect_Otp>;
  /** delete data from the table: "register_avatar" */
  delete_register_avatar?: Maybe<Register_Avatar_Mutation_Response>;
  /** delete single row from the table: "register_avatar" */
  delete_register_avatar_by_pk?: Maybe<Register_Avatar>;
  /** delete data from the table: "register_blockprofile" */
  delete_register_blockprofile?: Maybe<Register_Blockprofile_Mutation_Response>;
  /** delete single row from the table: "register_blockprofile" */
  delete_register_blockprofile_by_pk?: Maybe<Register_Blockprofile>;
  /** delete data from the table: "register_connexion" */
  delete_register_connexion?: Maybe<Register_Connexion_Mutation_Response>;
  /** delete single row from the table: "register_connexion" */
  delete_register_connexion_by_pk?: Maybe<Register_Connexion>;
  /** delete data from the table: "register_friendship" */
  delete_register_friendship?: Maybe<Register_Friendship_Mutation_Response>;
  /** delete single row from the table: "register_friendship" */
  delete_register_friendship_by_pk?: Maybe<Register_Friendship>;
  /** delete data from the table: "register_profile" */
  delete_register_profile?: Maybe<Register_Profile_Mutation_Response>;
  /** delete single row from the table: "register_profile" */
  delete_register_profile_by_pk?: Maybe<Register_Profile>;
  /** delete data from the table: "task" */
  delete_task?: Maybe<Task_Mutation_Response>;
  /** delete single row from the table: "task" */
  delete_task_by_pk?: Maybe<Task>;
  /** delete data from the table: "task_list" */
  delete_task_list?: Maybe<Task_List_Mutation_Response>;
  /** delete single row from the table: "task_list" */
  delete_task_list_by_pk?: Maybe<Task_List>;
  /** delete data from the table: "task_member" */
  delete_task_member?: Maybe<Task_Member_Mutation_Response>;
  /** delete single row from the table: "task_member" */
  delete_task_member_by_pk?: Maybe<Task_Member>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  delete_transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "transaction_item" */
  delete_transaction_item?: Maybe<Transaction_Item_Mutation_Response>;
  /** delete single row from the table: "transaction_item" */
  delete_transaction_item_by_pk?: Maybe<Transaction_Item>;
  /** delete data from the table: "transaction_status" */
  delete_transaction_status?: Maybe<Transaction_Status_Mutation_Response>;
  /** delete single row from the table: "transaction_status" */
  delete_transaction_status_by_pk?: Maybe<Transaction_Status>;
  denyFriend: Scalars['numeric']['output'];
  /** initPayment */
  initPayment: CreatedTransaction;
  /** insert data into the table: "address" */
  insert_address?: Maybe<Address_Mutation_Response>;
  /** insert a single row into the table: "address" */
  insert_address_one?: Maybe<Address>;
  /** insert data into the table: "currency" */
  insert_currency?: Maybe<Currency_Mutation_Response>;
  /** insert a single row into the table: "currency" */
  insert_currency_one?: Maybe<Currency>;
  /** insert data into the table: "entity" */
  insert_entity?: Maybe<Entity_Mutation_Response>;
  /** insert data into the table: "entity_fee" */
  insert_entity_fee?: Maybe<Entity_Fee_Mutation_Response>;
  /** insert a single row into the table: "entity_fee" */
  insert_entity_fee_one?: Maybe<Entity_Fee>;
  /** insert data into the table: "entity_member" */
  insert_entity_member?: Maybe<Entity_Member_Mutation_Response>;
  /** insert a single row into the table: "entity_member" */
  insert_entity_member_one?: Maybe<Entity_Member>;
  /** insert a single row into the table: "entity" */
  insert_entity_one?: Maybe<Entity>;
  /** insert data into the table: "entity_payment_provider" */
  insert_entity_payment_provider?: Maybe<Entity_Payment_Provider_Mutation_Response>;
  /** insert a single row into the table: "entity_payment_provider" */
  insert_entity_payment_provider_one?: Maybe<Entity_Payment_Provider>;
  /** insert data into the table: "entity_type" */
  insert_entity_type?: Maybe<Entity_Type_Mutation_Response>;
  /** insert a single row into the table: "entity_type" */
  insert_entity_type_one?: Maybe<Entity_Type>;
  /** insert data into the table: "friend_status" */
  insert_friend_status?: Maybe<Friend_Status_Mutation_Response>;
  /** insert a single row into the table: "friend_status" */
  insert_friend_status_one?: Maybe<Friend_Status>;
  /** insert data into the table: "member_ticket_scan" */
  insert_member_ticket_scan?: Maybe<Member_Ticket_Scan_Mutation_Response>;
  /** insert a single row into the table: "member_ticket_scan" */
  insert_member_ticket_scan_one?: Maybe<Member_Ticket_Scan>;
  /** insert data into the table: "onapp_bill" */
  insert_onapp_bill?: Maybe<Onapp_Bill_Mutation_Response>;
  /** insert a single row into the table: "onapp_bill" */
  insert_onapp_bill_one?: Maybe<Onapp_Bill>;
  /** insert data into the table: "onapp_event" */
  insert_onapp_event?: Maybe<Onapp_Event_Mutation_Response>;
  /** insert a single row into the table: "onapp_event" */
  insert_onapp_event_one?: Maybe<Onapp_Event>;
  /** insert data into the table: "onapp_hasuratask" */
  insert_onapp_hasuratask?: Maybe<Onapp_Hasuratask_Mutation_Response>;
  /** insert a single row into the table: "onapp_hasuratask" */
  insert_onapp_hasuratask_one?: Maybe<Onapp_Hasuratask>;
  /** insert data into the table: "onapp_member" */
  insert_onapp_member?: Maybe<Onapp_Member_Mutation_Response>;
  /** insert a single row into the table: "onapp_member" */
  insert_onapp_member_one?: Maybe<Onapp_Member>;
  /** insert data into the table: "onapp_message" */
  insert_onapp_message?: Maybe<Onapp_Message_Mutation_Response>;
  /** insert a single row into the table: "onapp_message" */
  insert_onapp_message_one?: Maybe<Onapp_Message>;
  /** insert data into the table: "onapp_messagemedia" */
  insert_onapp_messagemedia?: Maybe<Onapp_Messagemedia_Mutation_Response>;
  /** insert a single row into the table: "onapp_messagemedia" */
  insert_onapp_messagemedia_one?: Maybe<Onapp_Messagemedia>;
  /** insert data into the table: "onapp_messagemention" */
  insert_onapp_messagemention?: Maybe<Onapp_Messagemention_Mutation_Response>;
  /** insert a single row into the table: "onapp_messagemention" */
  insert_onapp_messagemention_one?: Maybe<Onapp_Messagemention>;
  /** insert data into the table: "onapp_messagepin" */
  insert_onapp_messagepin?: Maybe<Onapp_Messagepin_Mutation_Response>;
  /** insert a single row into the table: "onapp_messagepin" */
  insert_onapp_messagepin_one?: Maybe<Onapp_Messagepin>;
  /** insert data into the table: "onapp_messagereaction" */
  insert_onapp_messagereaction?: Maybe<Onapp_Messagereaction_Mutation_Response>;
  /** insert a single row into the table: "onapp_messagereaction" */
  insert_onapp_messagereaction_one?: Maybe<Onapp_Messagereaction>;
  /** insert data into the table: "onapp_notification" */
  insert_onapp_notification?: Maybe<Onapp_Notification_Mutation_Response>;
  /** insert a single row into the table: "onapp_notification" */
  insert_onapp_notification_one?: Maybe<Onapp_Notification>;
  /** insert data into the table: "onapp_notifmessage" */
  insert_onapp_notifmessage?: Maybe<Onapp_Notifmessage_Mutation_Response>;
  /** insert a single row into the table: "onapp_notifmessage" */
  insert_onapp_notifmessage_one?: Maybe<Onapp_Notifmessage>;
  /** insert data into the table: "onapp_polloption" */
  insert_onapp_polloption?: Maybe<Onapp_Polloption_Mutation_Response>;
  /** insert a single row into the table: "onapp_polloption" */
  insert_onapp_polloption_one?: Maybe<Onapp_Polloption>;
  /** insert data into the table: "onapp_pollvote" */
  insert_onapp_pollvote?: Maybe<Onapp_Pollvote_Mutation_Response>;
  /** insert a single row into the table: "onapp_pollvote" */
  insert_onapp_pollvote_one?: Maybe<Onapp_Pollvote>;
  /** insert data into the table: "payment_provider" */
  insert_payment_provider?: Maybe<Payment_Provider_Mutation_Response>;
  /** insert data into the table: "payment_provider_fee" */
  insert_payment_provider_fee?: Maybe<Payment_Provider_Fee_Mutation_Response>;
  /** insert a single row into the table: "payment_provider_fee" */
  insert_payment_provider_fee_one?: Maybe<Payment_Provider_Fee>;
  /** insert a single row into the table: "payment_provider" */
  insert_payment_provider_one?: Maybe<Payment_Provider>;
  /** insert data into the table: "price" */
  insert_price?: Maybe<Price_Mutation_Response>;
  /** insert data into the table: "price_group_discount" */
  insert_price_group_discount?: Maybe<Price_Group_Discount_Mutation_Response>;
  /** insert a single row into the table: "price_group_discount" */
  insert_price_group_discount_one?: Maybe<Price_Group_Discount>;
  /** insert a single row into the table: "price" */
  insert_price_one?: Maybe<Price>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "product_type" */
  insert_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** insert a single row into the table: "product_type" */
  insert_product_type_one?: Maybe<Product_Type>;
  /** insert data into the table: "redirect_otp" */
  insert_redirect_otp?: Maybe<Redirect_Otp_Mutation_Response>;
  /** insert a single row into the table: "redirect_otp" */
  insert_redirect_otp_one?: Maybe<Redirect_Otp>;
  /** insert data into the table: "register_avatar" */
  insert_register_avatar?: Maybe<Register_Avatar_Mutation_Response>;
  /** insert a single row into the table: "register_avatar" */
  insert_register_avatar_one?: Maybe<Register_Avatar>;
  /** insert data into the table: "register_blockprofile" */
  insert_register_blockprofile?: Maybe<Register_Blockprofile_Mutation_Response>;
  /** insert a single row into the table: "register_blockprofile" */
  insert_register_blockprofile_one?: Maybe<Register_Blockprofile>;
  /** insert data into the table: "register_connexion" */
  insert_register_connexion?: Maybe<Register_Connexion_Mutation_Response>;
  /** insert a single row into the table: "register_connexion" */
  insert_register_connexion_one?: Maybe<Register_Connexion>;
  /** insert data into the table: "register_friendship" */
  insert_register_friendship?: Maybe<Register_Friendship_Mutation_Response>;
  /** insert a single row into the table: "register_friendship" */
  insert_register_friendship_one?: Maybe<Register_Friendship>;
  /** insert data into the table: "register_profile" */
  insert_register_profile?: Maybe<Register_Profile_Mutation_Response>;
  /** insert a single row into the table: "register_profile" */
  insert_register_profile_one?: Maybe<Register_Profile>;
  /** insert data into the table: "task" */
  insert_task?: Maybe<Task_Mutation_Response>;
  /** insert data into the table: "task_list" */
  insert_task_list?: Maybe<Task_List_Mutation_Response>;
  /** insert a single row into the table: "task_list" */
  insert_task_list_one?: Maybe<Task_List>;
  /** insert data into the table: "task_member" */
  insert_task_member?: Maybe<Task_Member_Mutation_Response>;
  /** insert a single row into the table: "task_member" */
  insert_task_member_one?: Maybe<Task_Member>;
  /** insert a single row into the table: "task" */
  insert_task_one?: Maybe<Task>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert data into the table: "transaction_item" */
  insert_transaction_item?: Maybe<Transaction_Item_Mutation_Response>;
  /** insert a single row into the table: "transaction_item" */
  insert_transaction_item_one?: Maybe<Transaction_Item>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "transaction_status" */
  insert_transaction_status?: Maybe<Transaction_Status_Mutation_Response>;
  /** insert a single row into the table: "transaction_status" */
  insert_transaction_status_one?: Maybe<Transaction_Status>;
  inviteExternal: Array<InviteExternalOutput>;
  /** Invite users to events/groups/subgroups */
  inviteToEvent?: Maybe<Array<InvitedMember>>;
  manualRemindMembers?: Maybe<ManualRemindMembersOutput>;
  /** modifyPrice */
  modifyPrice: ModifiedPrice;
  /** modifyProduct */
  modifyProduct: ModifiedProduct;
  register?: Maybe<LoginWithPhoneOutput>;
  removeFriendship: Scalars['numeric']['output'];
  /** requestJoinEvent */
  requestJoinEvent?: Maybe<JoinedMember>;
  searchAddress?: Maybe<SearchAddressOutput>;
  sendCustomEmail?: Maybe<CustomEmailOutput>;
  /** updateMemberState */
  updateMemberState?: Maybe<UpdatedMember>;
  /** update data of the table: "address" */
  update_address?: Maybe<Address_Mutation_Response>;
  /** update single row of the table: "address" */
  update_address_by_pk?: Maybe<Address>;
  /** update multiples rows of table: "address" */
  update_address_many?: Maybe<Array<Maybe<Address_Mutation_Response>>>;
  /** update data of the table: "currency" */
  update_currency?: Maybe<Currency_Mutation_Response>;
  /** update single row of the table: "currency" */
  update_currency_by_pk?: Maybe<Currency>;
  /** update multiples rows of table: "currency" */
  update_currency_many?: Maybe<Array<Maybe<Currency_Mutation_Response>>>;
  /** update data of the table: "entity" */
  update_entity?: Maybe<Entity_Mutation_Response>;
  /** update single row of the table: "entity" */
  update_entity_by_pk?: Maybe<Entity>;
  /** update data of the table: "entity_fee" */
  update_entity_fee?: Maybe<Entity_Fee_Mutation_Response>;
  /** update single row of the table: "entity_fee" */
  update_entity_fee_by_pk?: Maybe<Entity_Fee>;
  /** update multiples rows of table: "entity_fee" */
  update_entity_fee_many?: Maybe<Array<Maybe<Entity_Fee_Mutation_Response>>>;
  /** update multiples rows of table: "entity" */
  update_entity_many?: Maybe<Array<Maybe<Entity_Mutation_Response>>>;
  /** update data of the table: "entity_member" */
  update_entity_member?: Maybe<Entity_Member_Mutation_Response>;
  /** update single row of the table: "entity_member" */
  update_entity_member_by_pk?: Maybe<Entity_Member>;
  /** update multiples rows of table: "entity_member" */
  update_entity_member_many?: Maybe<Array<Maybe<Entity_Member_Mutation_Response>>>;
  /** update data of the table: "entity_payment_provider" */
  update_entity_payment_provider?: Maybe<Entity_Payment_Provider_Mutation_Response>;
  /** update single row of the table: "entity_payment_provider" */
  update_entity_payment_provider_by_pk?: Maybe<Entity_Payment_Provider>;
  /** update multiples rows of table: "entity_payment_provider" */
  update_entity_payment_provider_many?: Maybe<Array<Maybe<Entity_Payment_Provider_Mutation_Response>>>;
  /** update data of the table: "entity_type" */
  update_entity_type?: Maybe<Entity_Type_Mutation_Response>;
  /** update single row of the table: "entity_type" */
  update_entity_type_by_pk?: Maybe<Entity_Type>;
  /** update multiples rows of table: "entity_type" */
  update_entity_type_many?: Maybe<Array<Maybe<Entity_Type_Mutation_Response>>>;
  /** update data of the table: "friend_status" */
  update_friend_status?: Maybe<Friend_Status_Mutation_Response>;
  /** update single row of the table: "friend_status" */
  update_friend_status_by_pk?: Maybe<Friend_Status>;
  /** update multiples rows of table: "friend_status" */
  update_friend_status_many?: Maybe<Array<Maybe<Friend_Status_Mutation_Response>>>;
  /** update data of the table: "member_ticket_scan" */
  update_member_ticket_scan?: Maybe<Member_Ticket_Scan_Mutation_Response>;
  /** update single row of the table: "member_ticket_scan" */
  update_member_ticket_scan_by_pk?: Maybe<Member_Ticket_Scan>;
  /** update multiples rows of table: "member_ticket_scan" */
  update_member_ticket_scan_many?: Maybe<Array<Maybe<Member_Ticket_Scan_Mutation_Response>>>;
  /** update data of the table: "onapp_bill" */
  update_onapp_bill?: Maybe<Onapp_Bill_Mutation_Response>;
  /** update single row of the table: "onapp_bill" */
  update_onapp_bill_by_pk?: Maybe<Onapp_Bill>;
  /** update multiples rows of table: "onapp_bill" */
  update_onapp_bill_many?: Maybe<Array<Maybe<Onapp_Bill_Mutation_Response>>>;
  /** update data of the table: "onapp_event" */
  update_onapp_event?: Maybe<Onapp_Event_Mutation_Response>;
  /** update single row of the table: "onapp_event" */
  update_onapp_event_by_pk?: Maybe<Onapp_Event>;
  /** update multiples rows of table: "onapp_event" */
  update_onapp_event_many?: Maybe<Array<Maybe<Onapp_Event_Mutation_Response>>>;
  /** update data of the table: "onapp_hasuratask" */
  update_onapp_hasuratask?: Maybe<Onapp_Hasuratask_Mutation_Response>;
  /** update single row of the table: "onapp_hasuratask" */
  update_onapp_hasuratask_by_pk?: Maybe<Onapp_Hasuratask>;
  /** update multiples rows of table: "onapp_hasuratask" */
  update_onapp_hasuratask_many?: Maybe<Array<Maybe<Onapp_Hasuratask_Mutation_Response>>>;
  /** update data of the table: "onapp_member" */
  update_onapp_member?: Maybe<Onapp_Member_Mutation_Response>;
  /** update single row of the table: "onapp_member" */
  update_onapp_member_by_pk?: Maybe<Onapp_Member>;
  /** update multiples rows of table: "onapp_member" */
  update_onapp_member_many?: Maybe<Array<Maybe<Onapp_Member_Mutation_Response>>>;
  /** update data of the table: "onapp_message" */
  update_onapp_message?: Maybe<Onapp_Message_Mutation_Response>;
  /** update single row of the table: "onapp_message" */
  update_onapp_message_by_pk?: Maybe<Onapp_Message>;
  /** update multiples rows of table: "onapp_message" */
  update_onapp_message_many?: Maybe<Array<Maybe<Onapp_Message_Mutation_Response>>>;
  /** update data of the table: "onapp_messagemedia" */
  update_onapp_messagemedia?: Maybe<Onapp_Messagemedia_Mutation_Response>;
  /** update single row of the table: "onapp_messagemedia" */
  update_onapp_messagemedia_by_pk?: Maybe<Onapp_Messagemedia>;
  /** update multiples rows of table: "onapp_messagemedia" */
  update_onapp_messagemedia_many?: Maybe<Array<Maybe<Onapp_Messagemedia_Mutation_Response>>>;
  /** update data of the table: "onapp_messagemention" */
  update_onapp_messagemention?: Maybe<Onapp_Messagemention_Mutation_Response>;
  /** update single row of the table: "onapp_messagemention" */
  update_onapp_messagemention_by_pk?: Maybe<Onapp_Messagemention>;
  /** update multiples rows of table: "onapp_messagemention" */
  update_onapp_messagemention_many?: Maybe<Array<Maybe<Onapp_Messagemention_Mutation_Response>>>;
  /** update data of the table: "onapp_messagepin" */
  update_onapp_messagepin?: Maybe<Onapp_Messagepin_Mutation_Response>;
  /** update single row of the table: "onapp_messagepin" */
  update_onapp_messagepin_by_pk?: Maybe<Onapp_Messagepin>;
  /** update multiples rows of table: "onapp_messagepin" */
  update_onapp_messagepin_many?: Maybe<Array<Maybe<Onapp_Messagepin_Mutation_Response>>>;
  /** update data of the table: "onapp_messagereaction" */
  update_onapp_messagereaction?: Maybe<Onapp_Messagereaction_Mutation_Response>;
  /** update single row of the table: "onapp_messagereaction" */
  update_onapp_messagereaction_by_pk?: Maybe<Onapp_Messagereaction>;
  /** update multiples rows of table: "onapp_messagereaction" */
  update_onapp_messagereaction_many?: Maybe<Array<Maybe<Onapp_Messagereaction_Mutation_Response>>>;
  /** update data of the table: "onapp_notification" */
  update_onapp_notification?: Maybe<Onapp_Notification_Mutation_Response>;
  /** update single row of the table: "onapp_notification" */
  update_onapp_notification_by_pk?: Maybe<Onapp_Notification>;
  /** update multiples rows of table: "onapp_notification" */
  update_onapp_notification_many?: Maybe<Array<Maybe<Onapp_Notification_Mutation_Response>>>;
  /** update data of the table: "onapp_notifmessage" */
  update_onapp_notifmessage?: Maybe<Onapp_Notifmessage_Mutation_Response>;
  /** update single row of the table: "onapp_notifmessage" */
  update_onapp_notifmessage_by_pk?: Maybe<Onapp_Notifmessage>;
  /** update multiples rows of table: "onapp_notifmessage" */
  update_onapp_notifmessage_many?: Maybe<Array<Maybe<Onapp_Notifmessage_Mutation_Response>>>;
  /** update data of the table: "onapp_polloption" */
  update_onapp_polloption?: Maybe<Onapp_Polloption_Mutation_Response>;
  /** update single row of the table: "onapp_polloption" */
  update_onapp_polloption_by_pk?: Maybe<Onapp_Polloption>;
  /** update multiples rows of table: "onapp_polloption" */
  update_onapp_polloption_many?: Maybe<Array<Maybe<Onapp_Polloption_Mutation_Response>>>;
  /** update data of the table: "onapp_pollvote" */
  update_onapp_pollvote?: Maybe<Onapp_Pollvote_Mutation_Response>;
  /** update single row of the table: "onapp_pollvote" */
  update_onapp_pollvote_by_pk?: Maybe<Onapp_Pollvote>;
  /** update multiples rows of table: "onapp_pollvote" */
  update_onapp_pollvote_many?: Maybe<Array<Maybe<Onapp_Pollvote_Mutation_Response>>>;
  /** update data of the table: "payment_provider" */
  update_payment_provider?: Maybe<Payment_Provider_Mutation_Response>;
  /** update single row of the table: "payment_provider" */
  update_payment_provider_by_pk?: Maybe<Payment_Provider>;
  /** update data of the table: "payment_provider_fee" */
  update_payment_provider_fee?: Maybe<Payment_Provider_Fee_Mutation_Response>;
  /** update single row of the table: "payment_provider_fee" */
  update_payment_provider_fee_by_pk?: Maybe<Payment_Provider_Fee>;
  /** update multiples rows of table: "payment_provider_fee" */
  update_payment_provider_fee_many?: Maybe<Array<Maybe<Payment_Provider_Fee_Mutation_Response>>>;
  /** update multiples rows of table: "payment_provider" */
  update_payment_provider_many?: Maybe<Array<Maybe<Payment_Provider_Mutation_Response>>>;
  /** update data of the table: "price" */
  update_price?: Maybe<Price_Mutation_Response>;
  /** update single row of the table: "price" */
  update_price_by_pk?: Maybe<Price>;
  /** update data of the table: "price_group_discount" */
  update_price_group_discount?: Maybe<Price_Group_Discount_Mutation_Response>;
  /** update single row of the table: "price_group_discount" */
  update_price_group_discount_by_pk?: Maybe<Price_Group_Discount>;
  /** update multiples rows of table: "price_group_discount" */
  update_price_group_discount_many?: Maybe<Array<Maybe<Price_Group_Discount_Mutation_Response>>>;
  /** update multiples rows of table: "price" */
  update_price_many?: Maybe<Array<Maybe<Price_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update multiples rows of table: "product" */
  update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
  /** update data of the table: "product_type" */
  update_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** update single row of the table: "product_type" */
  update_product_type_by_pk?: Maybe<Product_Type>;
  /** update multiples rows of table: "product_type" */
  update_product_type_many?: Maybe<Array<Maybe<Product_Type_Mutation_Response>>>;
  /** update data of the table: "redirect_otp" */
  update_redirect_otp?: Maybe<Redirect_Otp_Mutation_Response>;
  /** update single row of the table: "redirect_otp" */
  update_redirect_otp_by_pk?: Maybe<Redirect_Otp>;
  /** update multiples rows of table: "redirect_otp" */
  update_redirect_otp_many?: Maybe<Array<Maybe<Redirect_Otp_Mutation_Response>>>;
  /** update data of the table: "register_avatar" */
  update_register_avatar?: Maybe<Register_Avatar_Mutation_Response>;
  /** update single row of the table: "register_avatar" */
  update_register_avatar_by_pk?: Maybe<Register_Avatar>;
  /** update multiples rows of table: "register_avatar" */
  update_register_avatar_many?: Maybe<Array<Maybe<Register_Avatar_Mutation_Response>>>;
  /** update data of the table: "register_blockprofile" */
  update_register_blockprofile?: Maybe<Register_Blockprofile_Mutation_Response>;
  /** update single row of the table: "register_blockprofile" */
  update_register_blockprofile_by_pk?: Maybe<Register_Blockprofile>;
  /** update multiples rows of table: "register_blockprofile" */
  update_register_blockprofile_many?: Maybe<Array<Maybe<Register_Blockprofile_Mutation_Response>>>;
  /** update data of the table: "register_connexion" */
  update_register_connexion?: Maybe<Register_Connexion_Mutation_Response>;
  /** update single row of the table: "register_connexion" */
  update_register_connexion_by_pk?: Maybe<Register_Connexion>;
  /** update multiples rows of table: "register_connexion" */
  update_register_connexion_many?: Maybe<Array<Maybe<Register_Connexion_Mutation_Response>>>;
  /** update data of the table: "register_friendship" */
  update_register_friendship?: Maybe<Register_Friendship_Mutation_Response>;
  /** update single row of the table: "register_friendship" */
  update_register_friendship_by_pk?: Maybe<Register_Friendship>;
  /** update multiples rows of table: "register_friendship" */
  update_register_friendship_many?: Maybe<Array<Maybe<Register_Friendship_Mutation_Response>>>;
  /** update data of the table: "register_profile" */
  update_register_profile?: Maybe<Register_Profile_Mutation_Response>;
  /** update single row of the table: "register_profile" */
  update_register_profile_by_pk?: Maybe<Register_Profile>;
  /** update multiples rows of table: "register_profile" */
  update_register_profile_many?: Maybe<Array<Maybe<Register_Profile_Mutation_Response>>>;
  /** update data of the table: "task" */
  update_task?: Maybe<Task_Mutation_Response>;
  /** update single row of the table: "task" */
  update_task_by_pk?: Maybe<Task>;
  /** update data of the table: "task_list" */
  update_task_list?: Maybe<Task_List_Mutation_Response>;
  /** update single row of the table: "task_list" */
  update_task_list_by_pk?: Maybe<Task_List>;
  /** update multiples rows of table: "task_list" */
  update_task_list_many?: Maybe<Array<Maybe<Task_List_Mutation_Response>>>;
  /** update multiples rows of table: "task" */
  update_task_many?: Maybe<Array<Maybe<Task_Mutation_Response>>>;
  /** update data of the table: "task_member" */
  update_task_member?: Maybe<Task_Member_Mutation_Response>;
  /** update single row of the table: "task_member" */
  update_task_member_by_pk?: Maybe<Task_Member>;
  /** update multiples rows of table: "task_member" */
  update_task_member_many?: Maybe<Array<Maybe<Task_Member_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  update_transaction_by_pk?: Maybe<Transaction>;
  /** update data of the table: "transaction_item" */
  update_transaction_item?: Maybe<Transaction_Item_Mutation_Response>;
  /** update single row of the table: "transaction_item" */
  update_transaction_item_by_pk?: Maybe<Transaction_Item>;
  /** update multiples rows of table: "transaction_item" */
  update_transaction_item_many?: Maybe<Array<Maybe<Transaction_Item_Mutation_Response>>>;
  /** update multiples rows of table: "transaction" */
  update_transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "transaction_status" */
  update_transaction_status?: Maybe<Transaction_Status_Mutation_Response>;
  /** update single row of the table: "transaction_status" */
  update_transaction_status_by_pk?: Maybe<Transaction_Status>;
  /** update multiples rows of table: "transaction_status" */
  update_transaction_status_many?: Maybe<Array<Maybe<Transaction_Status_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAcceptFriendshipArgs = {
  params: AcceptFriendshipParams;
};


/** mutation root */
export type Mutation_RootAuth_RegisterArgs = {
  user: RegisterInput;
};


/** mutation root */
export type Mutation_RootBuyTicketsArgs = {
  params: BuyTicketsParams;
};


/** mutation root */
export type Mutation_RootCreateEntityArgs = {
  params: CreateEntityParams;
};


/** mutation root */
export type Mutation_RootCreatePriceArgs = {
  price_data: CreatePrice;
};


/** mutation root */
export type Mutation_RootCreateProductArgs = {
  product_data: CreateProductParams;
};


/** mutation root */
export type Mutation_RootDelete_AddressArgs = {
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CurrencyArgs = {
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Currency_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EntityArgs = {
  where: Entity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_FeeArgs = {
  where: Entity_Fee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Fee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_MemberArgs = {
  where: Entity_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_Payment_ProviderArgs = {
  where: Entity_Payment_Provider_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Payment_Provider_By_PkArgs = {
  entity_id: Scalars['uuid']['input'];
  payment_provider_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Entity_TypeArgs = {
  where: Entity_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entity_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Friend_StatusArgs = {
  where: Friend_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Friend_Status_By_PkArgs = {
  state: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_Ticket_ScanArgs = {
  where: Member_Ticket_Scan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Ticket_Scan_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_BillArgs = {
  where: Onapp_Bill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Bill_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_EventArgs = {
  where: Onapp_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_HasurataskArgs = {
  where: Onapp_Hasuratask_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Hasuratask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_MemberArgs = {
  where: Onapp_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_MessageArgs = {
  where: Onapp_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Message_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_MessagemediaArgs = {
  where: Onapp_Messagemedia_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Messagemedia_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_MessagementionArgs = {
  where: Onapp_Messagemention_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Messagemention_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_MessagepinArgs = {
  where: Onapp_Messagepin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Messagepin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_MessagereactionArgs = {
  where: Onapp_Messagereaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Messagereaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_NotificationArgs = {
  where: Onapp_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Notification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_NotifmessageArgs = {
  where: Onapp_Notifmessage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Notifmessage_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_PolloptionArgs = {
  where: Onapp_Polloption_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Polloption_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Onapp_PollvoteArgs = {
  where: Onapp_Pollvote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Onapp_Pollvote_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_ProviderArgs = {
  where: Payment_Provider_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Provider_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_Provider_FeeArgs = {
  where: Payment_Provider_Fee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Provider_Fee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PriceArgs = {
  where: Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Price_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Price_Group_DiscountArgs = {
  where: Price_Group_Discount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Price_Group_Discount_By_PkArgs = {
  event_id: Scalars['uuid']['input'];
  price_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_TypeArgs = {
  where: Product_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Type_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Redirect_OtpArgs = {
  where: Redirect_Otp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Redirect_Otp_By_PkArgs = {
  otp: Scalars['Int']['input'];
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Register_AvatarArgs = {
  where: Register_Avatar_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Register_Avatar_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Register_BlockprofileArgs = {
  where: Register_Blockprofile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Register_Blockprofile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Register_ConnexionArgs = {
  where: Register_Connexion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Register_Connexion_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Register_FriendshipArgs = {
  where: Register_Friendship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Register_Friendship_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Register_ProfileArgs = {
  where: Register_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Register_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TaskArgs = {
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Task_ListArgs = {
  where: Task_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Task_MemberArgs = {
  where: Task_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_Member_By_PkArgs = {
  member_id: Scalars['uuid']['input'];
  task_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_ItemArgs = {
  where: Transaction_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_StatusArgs = {
  where: Transaction_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDenyFriendArgs = {
  params: DenyFriendParams;
};


/** mutation root */
export type Mutation_RootInitPaymentArgs = {
  payment_data: InitPaymentParams;
};


/** mutation root */
export type Mutation_RootInsert_AddressArgs = {
  objects: Array<Address_Insert_Input>;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_OneArgs = {
  object: Address_Insert_Input;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CurrencyArgs = {
  objects: Array<Currency_Insert_Input>;
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Currency_OneArgs = {
  object: Currency_Insert_Input;
  on_conflict?: InputMaybe<Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EntityArgs = {
  objects: Array<Entity_Insert_Input>;
  on_conflict?: InputMaybe<Entity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_FeeArgs = {
  objects: Array<Entity_Fee_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Fee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Fee_OneArgs = {
  object: Entity_Fee_Insert_Input;
  on_conflict?: InputMaybe<Entity_Fee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_MemberArgs = {
  objects: Array<Entity_Member_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Member_OneArgs = {
  object: Entity_Member_Insert_Input;
  on_conflict?: InputMaybe<Entity_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_OneArgs = {
  object: Entity_Insert_Input;
  on_conflict?: InputMaybe<Entity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Payment_ProviderArgs = {
  objects: Array<Entity_Payment_Provider_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Payment_Provider_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Payment_Provider_OneArgs = {
  object: Entity_Payment_Provider_Insert_Input;
  on_conflict?: InputMaybe<Entity_Payment_Provider_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_TypeArgs = {
  objects: Array<Entity_Type_Insert_Input>;
  on_conflict?: InputMaybe<Entity_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entity_Type_OneArgs = {
  object: Entity_Type_Insert_Input;
  on_conflict?: InputMaybe<Entity_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_StatusArgs = {
  objects: Array<Friend_Status_Insert_Input>;
  on_conflict?: InputMaybe<Friend_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_Status_OneArgs = {
  object: Friend_Status_Insert_Input;
  on_conflict?: InputMaybe<Friend_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Ticket_ScanArgs = {
  objects: Array<Member_Ticket_Scan_Insert_Input>;
  on_conflict?: InputMaybe<Member_Ticket_Scan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Ticket_Scan_OneArgs = {
  object: Member_Ticket_Scan_Insert_Input;
  on_conflict?: InputMaybe<Member_Ticket_Scan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_BillArgs = {
  objects: Array<Onapp_Bill_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Bill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Bill_OneArgs = {
  object: Onapp_Bill_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Bill_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_EventArgs = {
  objects: Array<Onapp_Event_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Event_OneArgs = {
  object: Onapp_Event_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_HasurataskArgs = {
  objects: Array<Onapp_Hasuratask_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Hasuratask_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Hasuratask_OneArgs = {
  object: Onapp_Hasuratask_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Hasuratask_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_MemberArgs = {
  objects: Array<Onapp_Member_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Member_OneArgs = {
  object: Onapp_Member_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_MessageArgs = {
  objects: Array<Onapp_Message_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Message_OneArgs = {
  object: Onapp_Message_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_MessagemediaArgs = {
  objects: Array<Onapp_Messagemedia_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Messagemedia_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Messagemedia_OneArgs = {
  object: Onapp_Messagemedia_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Messagemedia_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_MessagementionArgs = {
  objects: Array<Onapp_Messagemention_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Messagemention_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Messagemention_OneArgs = {
  object: Onapp_Messagemention_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Messagemention_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_MessagepinArgs = {
  objects: Array<Onapp_Messagepin_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Messagepin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Messagepin_OneArgs = {
  object: Onapp_Messagepin_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Messagepin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_MessagereactionArgs = {
  objects: Array<Onapp_Messagereaction_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Messagereaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Messagereaction_OneArgs = {
  object: Onapp_Messagereaction_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Messagereaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_NotificationArgs = {
  objects: Array<Onapp_Notification_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Notification_OneArgs = {
  object: Onapp_Notification_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Notification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_NotifmessageArgs = {
  objects: Array<Onapp_Notifmessage_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Notifmessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Notifmessage_OneArgs = {
  object: Onapp_Notifmessage_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Notifmessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_PolloptionArgs = {
  objects: Array<Onapp_Polloption_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Polloption_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Polloption_OneArgs = {
  object: Onapp_Polloption_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Polloption_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_PollvoteArgs = {
  objects: Array<Onapp_Pollvote_Insert_Input>;
  on_conflict?: InputMaybe<Onapp_Pollvote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Onapp_Pollvote_OneArgs = {
  object: Onapp_Pollvote_Insert_Input;
  on_conflict?: InputMaybe<Onapp_Pollvote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_ProviderArgs = {
  objects: Array<Payment_Provider_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Provider_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Provider_FeeArgs = {
  objects: Array<Payment_Provider_Fee_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Provider_Fee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Provider_Fee_OneArgs = {
  object: Payment_Provider_Fee_Insert_Input;
  on_conflict?: InputMaybe<Payment_Provider_Fee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Provider_OneArgs = {
  object: Payment_Provider_Insert_Input;
  on_conflict?: InputMaybe<Payment_Provider_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PriceArgs = {
  objects: Array<Price_Insert_Input>;
  on_conflict?: InputMaybe<Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_Group_DiscountArgs = {
  objects: Array<Price_Group_Discount_Insert_Input>;
  on_conflict?: InputMaybe<Price_Group_Discount_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_Group_Discount_OneArgs = {
  object: Price_Group_Discount_Insert_Input;
  on_conflict?: InputMaybe<Price_Group_Discount_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_OneArgs = {
  object: Price_Insert_Input;
  on_conflict?: InputMaybe<Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_TypeArgs = {
  objects: Array<Product_Type_Insert_Input>;
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Type_OneArgs = {
  object: Product_Type_Insert_Input;
  on_conflict?: InputMaybe<Product_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Redirect_OtpArgs = {
  objects: Array<Redirect_Otp_Insert_Input>;
  on_conflict?: InputMaybe<Redirect_Otp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Redirect_Otp_OneArgs = {
  object: Redirect_Otp_Insert_Input;
  on_conflict?: InputMaybe<Redirect_Otp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_AvatarArgs = {
  objects: Array<Register_Avatar_Insert_Input>;
  on_conflict?: InputMaybe<Register_Avatar_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_Avatar_OneArgs = {
  object: Register_Avatar_Insert_Input;
  on_conflict?: InputMaybe<Register_Avatar_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_BlockprofileArgs = {
  objects: Array<Register_Blockprofile_Insert_Input>;
  on_conflict?: InputMaybe<Register_Blockprofile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_Blockprofile_OneArgs = {
  object: Register_Blockprofile_Insert_Input;
  on_conflict?: InputMaybe<Register_Blockprofile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_ConnexionArgs = {
  objects: Array<Register_Connexion_Insert_Input>;
  on_conflict?: InputMaybe<Register_Connexion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_Connexion_OneArgs = {
  object: Register_Connexion_Insert_Input;
  on_conflict?: InputMaybe<Register_Connexion_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_FriendshipArgs = {
  objects: Array<Register_Friendship_Insert_Input>;
  on_conflict?: InputMaybe<Register_Friendship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_Friendship_OneArgs = {
  object: Register_Friendship_Insert_Input;
  on_conflict?: InputMaybe<Register_Friendship_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_ProfileArgs = {
  objects: Array<Register_Profile_Insert_Input>;
  on_conflict?: InputMaybe<Register_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Register_Profile_OneArgs = {
  object: Register_Profile_Insert_Input;
  on_conflict?: InputMaybe<Register_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TaskArgs = {
  objects: Array<Task_Insert_Input>;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_ListArgs = {
  objects: Array<Task_List_Insert_Input>;
  on_conflict?: InputMaybe<Task_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_List_OneArgs = {
  object: Task_List_Insert_Input;
  on_conflict?: InputMaybe<Task_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_MemberArgs = {
  objects: Array<Task_Member_Insert_Input>;
  on_conflict?: InputMaybe<Task_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_Member_OneArgs = {
  object: Task_Member_Insert_Input;
  on_conflict?: InputMaybe<Task_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_OneArgs = {
  object: Task_Insert_Input;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_ItemArgs = {
  objects: Array<Transaction_Item_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Item_OneArgs = {
  object: Transaction_Item_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_StatusArgs = {
  objects: Array<Transaction_Status_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Status_OneArgs = {
  object: Transaction_Status_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInviteExternalArgs = {
  params: InviteExternalParams;
};


/** mutation root */
export type Mutation_RootInviteToEventArgs = {
  param: InviteToEventParam;
};


/** mutation root */
export type Mutation_RootManualRemindMembersArgs = {
  params: ManualRemindMembersParams;
};


/** mutation root */
export type Mutation_RootModifyPriceArgs = {
  price_data: ModifyPriceParams;
};


/** mutation root */
export type Mutation_RootModifyProductArgs = {
  product_data: ModifyProductParams;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  user: RegisterInput;
};


/** mutation root */
export type Mutation_RootRemoveFriendshipArgs = {
  params: RemoveFriendshipParams;
};


/** mutation root */
export type Mutation_RootRequestJoinEventArgs = {
  join: RequestJoinEventParams;
};


/** mutation root */
export type Mutation_RootSearchAddressArgs = {
  params: SearchAddressParams;
};


/** mutation root */
export type Mutation_RootSendCustomEmailArgs = {
  params: SendCustomEmailParams;
};


/** mutation root */
export type Mutation_RootUpdateMemberStateArgs = {
  params: UpdateMemberStateParam;
};


/** mutation root */
export type Mutation_RootUpdate_AddressArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_By_PkArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  pk_columns: Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Address_ManyArgs = {
  updates: Array<Address_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CurrencyArgs = {
  _set?: InputMaybe<Currency_Set_Input>;
  where: Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_By_PkArgs = {
  _set?: InputMaybe<Currency_Set_Input>;
  pk_columns: Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Currency_ManyArgs = {
  updates: Array<Currency_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EntityArgs = {
  _inc?: InputMaybe<Entity_Inc_Input>;
  _set?: InputMaybe<Entity_Set_Input>;
  where: Entity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_By_PkArgs = {
  _inc?: InputMaybe<Entity_Inc_Input>;
  _set?: InputMaybe<Entity_Set_Input>;
  pk_columns: Entity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_FeeArgs = {
  _inc?: InputMaybe<Entity_Fee_Inc_Input>;
  _set?: InputMaybe<Entity_Fee_Set_Input>;
  where: Entity_Fee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Fee_By_PkArgs = {
  _inc?: InputMaybe<Entity_Fee_Inc_Input>;
  _set?: InputMaybe<Entity_Fee_Set_Input>;
  pk_columns: Entity_Fee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Fee_ManyArgs = {
  updates: Array<Entity_Fee_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_ManyArgs = {
  updates: Array<Entity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_MemberArgs = {
  _set?: InputMaybe<Entity_Member_Set_Input>;
  where: Entity_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Member_By_PkArgs = {
  _set?: InputMaybe<Entity_Member_Set_Input>;
  pk_columns: Entity_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Member_ManyArgs = {
  updates: Array<Entity_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Payment_ProviderArgs = {
  _set?: InputMaybe<Entity_Payment_Provider_Set_Input>;
  where: Entity_Payment_Provider_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Payment_Provider_By_PkArgs = {
  _set?: InputMaybe<Entity_Payment_Provider_Set_Input>;
  pk_columns: Entity_Payment_Provider_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Payment_Provider_ManyArgs = {
  updates: Array<Entity_Payment_Provider_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_TypeArgs = {
  _set?: InputMaybe<Entity_Type_Set_Input>;
  where: Entity_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Type_By_PkArgs = {
  _set?: InputMaybe<Entity_Type_Set_Input>;
  pk_columns: Entity_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entity_Type_ManyArgs = {
  updates: Array<Entity_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_StatusArgs = {
  _set?: InputMaybe<Friend_Status_Set_Input>;
  where: Friend_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_By_PkArgs = {
  _set?: InputMaybe<Friend_Status_Set_Input>;
  pk_columns: Friend_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_ManyArgs = {
  updates: Array<Friend_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Ticket_ScanArgs = {
  _set?: InputMaybe<Member_Ticket_Scan_Set_Input>;
  where: Member_Ticket_Scan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Ticket_Scan_By_PkArgs = {
  _set?: InputMaybe<Member_Ticket_Scan_Set_Input>;
  pk_columns: Member_Ticket_Scan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Ticket_Scan_ManyArgs = {
  updates: Array<Member_Ticket_Scan_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_BillArgs = {
  _inc?: InputMaybe<Onapp_Bill_Inc_Input>;
  _set?: InputMaybe<Onapp_Bill_Set_Input>;
  where: Onapp_Bill_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Bill_By_PkArgs = {
  _inc?: InputMaybe<Onapp_Bill_Inc_Input>;
  _set?: InputMaybe<Onapp_Bill_Set_Input>;
  pk_columns: Onapp_Bill_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Bill_ManyArgs = {
  updates: Array<Onapp_Bill_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_EventArgs = {
  _inc?: InputMaybe<Onapp_Event_Inc_Input>;
  _set?: InputMaybe<Onapp_Event_Set_Input>;
  where: Onapp_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Event_By_PkArgs = {
  _inc?: InputMaybe<Onapp_Event_Inc_Input>;
  _set?: InputMaybe<Onapp_Event_Set_Input>;
  pk_columns: Onapp_Event_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Event_ManyArgs = {
  updates: Array<Onapp_Event_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_HasurataskArgs = {
  _set?: InputMaybe<Onapp_Hasuratask_Set_Input>;
  where: Onapp_Hasuratask_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Hasuratask_By_PkArgs = {
  _set?: InputMaybe<Onapp_Hasuratask_Set_Input>;
  pk_columns: Onapp_Hasuratask_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Hasuratask_ManyArgs = {
  updates: Array<Onapp_Hasuratask_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_MemberArgs = {
  _inc?: InputMaybe<Onapp_Member_Inc_Input>;
  _set?: InputMaybe<Onapp_Member_Set_Input>;
  where: Onapp_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Member_By_PkArgs = {
  _inc?: InputMaybe<Onapp_Member_Inc_Input>;
  _set?: InputMaybe<Onapp_Member_Set_Input>;
  pk_columns: Onapp_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Member_ManyArgs = {
  updates: Array<Onapp_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_MessageArgs = {
  _set?: InputMaybe<Onapp_Message_Set_Input>;
  where: Onapp_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Message_By_PkArgs = {
  _set?: InputMaybe<Onapp_Message_Set_Input>;
  pk_columns: Onapp_Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Message_ManyArgs = {
  updates: Array<Onapp_Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_MessagemediaArgs = {
  _inc?: InputMaybe<Onapp_Messagemedia_Inc_Input>;
  _set?: InputMaybe<Onapp_Messagemedia_Set_Input>;
  where: Onapp_Messagemedia_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagemedia_By_PkArgs = {
  _inc?: InputMaybe<Onapp_Messagemedia_Inc_Input>;
  _set?: InputMaybe<Onapp_Messagemedia_Set_Input>;
  pk_columns: Onapp_Messagemedia_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagemedia_ManyArgs = {
  updates: Array<Onapp_Messagemedia_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_MessagementionArgs = {
  _set?: InputMaybe<Onapp_Messagemention_Set_Input>;
  where: Onapp_Messagemention_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagemention_By_PkArgs = {
  _set?: InputMaybe<Onapp_Messagemention_Set_Input>;
  pk_columns: Onapp_Messagemention_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagemention_ManyArgs = {
  updates: Array<Onapp_Messagemention_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_MessagepinArgs = {
  _set?: InputMaybe<Onapp_Messagepin_Set_Input>;
  where: Onapp_Messagepin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagepin_By_PkArgs = {
  _set?: InputMaybe<Onapp_Messagepin_Set_Input>;
  pk_columns: Onapp_Messagepin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagepin_ManyArgs = {
  updates: Array<Onapp_Messagepin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_MessagereactionArgs = {
  _set?: InputMaybe<Onapp_Messagereaction_Set_Input>;
  where: Onapp_Messagereaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagereaction_By_PkArgs = {
  _set?: InputMaybe<Onapp_Messagereaction_Set_Input>;
  pk_columns: Onapp_Messagereaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Messagereaction_ManyArgs = {
  updates: Array<Onapp_Messagereaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_NotificationArgs = {
  _set?: InputMaybe<Onapp_Notification_Set_Input>;
  where: Onapp_Notification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Notification_By_PkArgs = {
  _set?: InputMaybe<Onapp_Notification_Set_Input>;
  pk_columns: Onapp_Notification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Notification_ManyArgs = {
  updates: Array<Onapp_Notification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_NotifmessageArgs = {
  _set?: InputMaybe<Onapp_Notifmessage_Set_Input>;
  where: Onapp_Notifmessage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Notifmessage_By_PkArgs = {
  _set?: InputMaybe<Onapp_Notifmessage_Set_Input>;
  pk_columns: Onapp_Notifmessage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Notifmessage_ManyArgs = {
  updates: Array<Onapp_Notifmessage_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_PolloptionArgs = {
  _inc?: InputMaybe<Onapp_Polloption_Inc_Input>;
  _set?: InputMaybe<Onapp_Polloption_Set_Input>;
  where: Onapp_Polloption_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Polloption_By_PkArgs = {
  _inc?: InputMaybe<Onapp_Polloption_Inc_Input>;
  _set?: InputMaybe<Onapp_Polloption_Set_Input>;
  pk_columns: Onapp_Polloption_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Polloption_ManyArgs = {
  updates: Array<Onapp_Polloption_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_PollvoteArgs = {
  _set?: InputMaybe<Onapp_Pollvote_Set_Input>;
  where: Onapp_Pollvote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Pollvote_By_PkArgs = {
  _set?: InputMaybe<Onapp_Pollvote_Set_Input>;
  pk_columns: Onapp_Pollvote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Onapp_Pollvote_ManyArgs = {
  updates: Array<Onapp_Pollvote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_ProviderArgs = {
  _set?: InputMaybe<Payment_Provider_Set_Input>;
  where: Payment_Provider_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Provider_By_PkArgs = {
  _set?: InputMaybe<Payment_Provider_Set_Input>;
  pk_columns: Payment_Provider_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Provider_FeeArgs = {
  _inc?: InputMaybe<Payment_Provider_Fee_Inc_Input>;
  _set?: InputMaybe<Payment_Provider_Fee_Set_Input>;
  where: Payment_Provider_Fee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Provider_Fee_By_PkArgs = {
  _inc?: InputMaybe<Payment_Provider_Fee_Inc_Input>;
  _set?: InputMaybe<Payment_Provider_Fee_Set_Input>;
  pk_columns: Payment_Provider_Fee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Provider_Fee_ManyArgs = {
  updates: Array<Payment_Provider_Fee_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Provider_ManyArgs = {
  updates: Array<Payment_Provider_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PriceArgs = {
  _inc?: InputMaybe<Price_Inc_Input>;
  _set?: InputMaybe<Price_Set_Input>;
  where: Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Price_By_PkArgs = {
  _inc?: InputMaybe<Price_Inc_Input>;
  _set?: InputMaybe<Price_Set_Input>;
  pk_columns: Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Price_Group_DiscountArgs = {
  _set?: InputMaybe<Price_Group_Discount_Set_Input>;
  where: Price_Group_Discount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Price_Group_Discount_By_PkArgs = {
  _set?: InputMaybe<Price_Group_Discount_Set_Input>;
  pk_columns: Price_Group_Discount_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Price_Group_Discount_ManyArgs = {
  updates: Array<Price_Group_Discount_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Price_ManyArgs = {
  updates: Array<Price_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_TypeArgs = {
  _set?: InputMaybe<Product_Type_Set_Input>;
  where: Product_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Type_By_PkArgs = {
  _set?: InputMaybe<Product_Type_Set_Input>;
  pk_columns: Product_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Type_ManyArgs = {
  updates: Array<Product_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Redirect_OtpArgs = {
  _inc?: InputMaybe<Redirect_Otp_Inc_Input>;
  _set?: InputMaybe<Redirect_Otp_Set_Input>;
  where: Redirect_Otp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Redirect_Otp_By_PkArgs = {
  _inc?: InputMaybe<Redirect_Otp_Inc_Input>;
  _set?: InputMaybe<Redirect_Otp_Set_Input>;
  pk_columns: Redirect_Otp_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Redirect_Otp_ManyArgs = {
  updates: Array<Redirect_Otp_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Register_AvatarArgs = {
  _inc?: InputMaybe<Register_Avatar_Inc_Input>;
  _set?: InputMaybe<Register_Avatar_Set_Input>;
  where: Register_Avatar_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Avatar_By_PkArgs = {
  _inc?: InputMaybe<Register_Avatar_Inc_Input>;
  _set?: InputMaybe<Register_Avatar_Set_Input>;
  pk_columns: Register_Avatar_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Avatar_ManyArgs = {
  updates: Array<Register_Avatar_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Register_BlockprofileArgs = {
  _set?: InputMaybe<Register_Blockprofile_Set_Input>;
  where: Register_Blockprofile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Blockprofile_By_PkArgs = {
  _set?: InputMaybe<Register_Blockprofile_Set_Input>;
  pk_columns: Register_Blockprofile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Blockprofile_ManyArgs = {
  updates: Array<Register_Blockprofile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Register_ConnexionArgs = {
  _inc?: InputMaybe<Register_Connexion_Inc_Input>;
  _set?: InputMaybe<Register_Connexion_Set_Input>;
  where: Register_Connexion_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Connexion_By_PkArgs = {
  _inc?: InputMaybe<Register_Connexion_Inc_Input>;
  _set?: InputMaybe<Register_Connexion_Set_Input>;
  pk_columns: Register_Connexion_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Connexion_ManyArgs = {
  updates: Array<Register_Connexion_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Register_FriendshipArgs = {
  _set?: InputMaybe<Register_Friendship_Set_Input>;
  where: Register_Friendship_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Friendship_By_PkArgs = {
  _set?: InputMaybe<Register_Friendship_Set_Input>;
  pk_columns: Register_Friendship_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Friendship_ManyArgs = {
  updates: Array<Register_Friendship_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Register_ProfileArgs = {
  _inc?: InputMaybe<Register_Profile_Inc_Input>;
  _set?: InputMaybe<Register_Profile_Set_Input>;
  where: Register_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Profile_By_PkArgs = {
  _inc?: InputMaybe<Register_Profile_Inc_Input>;
  _set?: InputMaybe<Register_Profile_Set_Input>;
  pk_columns: Register_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Register_Profile_ManyArgs = {
  updates: Array<Register_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TaskArgs = {
  _inc?: InputMaybe<Task_Inc_Input>;
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_By_PkArgs = {
  _inc?: InputMaybe<Task_Inc_Input>;
  _set?: InputMaybe<Task_Set_Input>;
  pk_columns: Task_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_ListArgs = {
  _set?: InputMaybe<Task_List_Set_Input>;
  where: Task_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_List_By_PkArgs = {
  _set?: InputMaybe<Task_List_Set_Input>;
  pk_columns: Task_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_List_ManyArgs = {
  updates: Array<Task_List_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Task_ManyArgs = {
  updates: Array<Task_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Task_MemberArgs = {
  _set?: InputMaybe<Task_Member_Set_Input>;
  where: Task_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_Member_By_PkArgs = {
  _set?: InputMaybe<Task_Member_Set_Input>;
  pk_columns: Task_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_Member_ManyArgs = {
  updates: Array<Task_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ItemArgs = {
  _inc?: InputMaybe<Transaction_Item_Inc_Input>;
  _set?: InputMaybe<Transaction_Item_Set_Input>;
  where: Transaction_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Item_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Item_Inc_Input>;
  _set?: InputMaybe<Transaction_Item_Set_Input>;
  pk_columns: Transaction_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Item_ManyArgs = {
  updates: Array<Transaction_Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_StatusArgs = {
  _set?: InputMaybe<Transaction_Status_Set_Input>;
  where: Transaction_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Status_By_PkArgs = {
  _set?: InputMaybe<Transaction_Status_Set_Input>;
  pk_columns: Transaction_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Status_ManyArgs = {
  updates: Array<Transaction_Status_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "onapp_bill" */
export type Onapp_Bill = {
  __typename?: 'onapp_bill';
  active: Scalars['Boolean']['output'];
  amountType: Scalars['String']['output'];
  billExternalId?: Maybe<Scalars['String']['output']>;
  billExternalIdRefund?: Maybe<Scalars['String']['output']>;
  billExternalIdTransfer?: Maybe<Scalars['String']['output']>;
  billType: Scalars['String']['output'];
  creator_id: Scalars['uuid']['output'];
  creditor_id?: Maybe<Scalars['uuid']['output']>;
  currency: Scalars['String']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  event_id: Scalars['uuid']['output'];
  expense_id?: Maybe<Scalars['uuid']['output']>;
  htprice?: Maybe<Scalars['float8']['output']>;
  id: Scalars['uuid']['output'];
  isComeOn: Scalars['Boolean']['output'];
  member_id: Scalars['uuid']['output'];
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  option_id?: Maybe<Scalars['uuid']['output']>;
  paid: Scalars['Boolean']['output'];
  pollLine_id?: Maybe<Scalars['uuid']['output']>;
  quantity: Scalars['Int']['output'];
  serviceFee?: Maybe<Scalars['float8']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  ttcPrice?: Maybe<Scalars['float8']['output']>;
};

/** aggregated selection of "onapp_bill" */
export type Onapp_Bill_Aggregate = {
  __typename?: 'onapp_bill_aggregate';
  aggregate?: Maybe<Onapp_Bill_Aggregate_Fields>;
  nodes: Array<Onapp_Bill>;
};

/** aggregate fields of "onapp_bill" */
export type Onapp_Bill_Aggregate_Fields = {
  __typename?: 'onapp_bill_aggregate_fields';
  avg?: Maybe<Onapp_Bill_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Bill_Max_Fields>;
  min?: Maybe<Onapp_Bill_Min_Fields>;
  stddev?: Maybe<Onapp_Bill_Stddev_Fields>;
  stddev_pop?: Maybe<Onapp_Bill_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onapp_Bill_Stddev_Samp_Fields>;
  sum?: Maybe<Onapp_Bill_Sum_Fields>;
  var_pop?: Maybe<Onapp_Bill_Var_Pop_Fields>;
  var_samp?: Maybe<Onapp_Bill_Var_Samp_Fields>;
  variance?: Maybe<Onapp_Bill_Variance_Fields>;
};


/** aggregate fields of "onapp_bill" */
export type Onapp_Bill_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Bill_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Onapp_Bill_Avg_Fields = {
  __typename?: 'onapp_bill_avg_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "onapp_bill". All fields are combined with a logical 'AND'. */
export type Onapp_Bill_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Bill_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Bill_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Bill_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  amountType?: InputMaybe<String_Comparison_Exp>;
  billExternalId?: InputMaybe<String_Comparison_Exp>;
  billExternalIdRefund?: InputMaybe<String_Comparison_Exp>;
  billExternalIdTransfer?: InputMaybe<String_Comparison_Exp>;
  billType?: InputMaybe<String_Comparison_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  creditor_id?: InputMaybe<Uuid_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  expense_id?: InputMaybe<Uuid_Comparison_Exp>;
  htprice?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isComeOn?: InputMaybe<Boolean_Comparison_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  mummy_id?: InputMaybe<Uuid_Comparison_Exp>;
  option_id?: InputMaybe<Uuid_Comparison_Exp>;
  paid?: InputMaybe<Boolean_Comparison_Exp>;
  pollLine_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  serviceFee?: InputMaybe<Float8_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  ttcPrice?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_bill" */
export enum Onapp_Bill_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappBillPkey = 'onapp_bill_pkey'
}

/** input type for incrementing numeric columns in table "onapp_bill" */
export type Onapp_Bill_Inc_Input = {
  htprice?: InputMaybe<Scalars['float8']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serviceFee?: InputMaybe<Scalars['float8']['input']>;
  ttcPrice?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "onapp_bill" */
export type Onapp_Bill_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amountType?: InputMaybe<Scalars['String']['input']>;
  billExternalId?: InputMaybe<Scalars['String']['input']>;
  billExternalIdRefund?: InputMaybe<Scalars['String']['input']>;
  billExternalIdTransfer?: InputMaybe<Scalars['String']['input']>;
  billType?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  creditor_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  expense_id?: InputMaybe<Scalars['uuid']['input']>;
  htprice?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isComeOn?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  option_id?: InputMaybe<Scalars['uuid']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  pollLine_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serviceFee?: InputMaybe<Scalars['float8']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  ttcPrice?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Onapp_Bill_Max_Fields = {
  __typename?: 'onapp_bill_max_fields';
  amountType?: Maybe<Scalars['String']['output']>;
  billExternalId?: Maybe<Scalars['String']['output']>;
  billExternalIdRefund?: Maybe<Scalars['String']['output']>;
  billExternalIdTransfer?: Maybe<Scalars['String']['output']>;
  billType?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  creditor_id?: Maybe<Scalars['uuid']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  expense_id?: Maybe<Scalars['uuid']['output']>;
  htprice?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  option_id?: Maybe<Scalars['uuid']['output']>;
  pollLine_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  serviceFee?: Maybe<Scalars['float8']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  ttcPrice?: Maybe<Scalars['float8']['output']>;
};

/** aggregate min on columns */
export type Onapp_Bill_Min_Fields = {
  __typename?: 'onapp_bill_min_fields';
  amountType?: Maybe<Scalars['String']['output']>;
  billExternalId?: Maybe<Scalars['String']['output']>;
  billExternalIdRefund?: Maybe<Scalars['String']['output']>;
  billExternalIdTransfer?: Maybe<Scalars['String']['output']>;
  billType?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  creditor_id?: Maybe<Scalars['uuid']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  expense_id?: Maybe<Scalars['uuid']['output']>;
  htprice?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  option_id?: Maybe<Scalars['uuid']['output']>;
  pollLine_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  serviceFee?: Maybe<Scalars['float8']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  ttcPrice?: Maybe<Scalars['float8']['output']>;
};

/** response of any mutation on the table "onapp_bill" */
export type Onapp_Bill_Mutation_Response = {
  __typename?: 'onapp_bill_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Bill>;
};

/** input type for inserting object relation for remote table "onapp_bill" */
export type Onapp_Bill_Obj_Rel_Insert_Input = {
  data: Onapp_Bill_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Bill_On_Conflict>;
};

/** on_conflict condition type for table "onapp_bill" */
export type Onapp_Bill_On_Conflict = {
  constraint: Onapp_Bill_Constraint;
  update_columns?: Array<Onapp_Bill_Update_Column>;
  where?: InputMaybe<Onapp_Bill_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_bill". */
export type Onapp_Bill_Order_By = {
  active?: InputMaybe<Order_By>;
  amountType?: InputMaybe<Order_By>;
  billExternalId?: InputMaybe<Order_By>;
  billExternalIdRefund?: InputMaybe<Order_By>;
  billExternalIdTransfer?: InputMaybe<Order_By>;
  billType?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  creditor_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  expense_id?: InputMaybe<Order_By>;
  htprice?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isComeOn?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  paid?: InputMaybe<Order_By>;
  pollLine_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  serviceFee?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  ttcPrice?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_bill */
export type Onapp_Bill_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_bill" */
export enum Onapp_Bill_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AmountType = 'amountType',
  /** column name */
  BillExternalId = 'billExternalId',
  /** column name */
  BillExternalIdRefund = 'billExternalIdRefund',
  /** column name */
  BillExternalIdTransfer = 'billExternalIdTransfer',
  /** column name */
  BillType = 'billType',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  CreditorId = 'creditor_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  EventId = 'event_id',
  /** column name */
  ExpenseId = 'expense_id',
  /** column name */
  Htprice = 'htprice',
  /** column name */
  Id = 'id',
  /** column name */
  IsComeOn = 'isComeOn',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  OptionId = 'option_id',
  /** column name */
  Paid = 'paid',
  /** column name */
  PollLineId = 'pollLine_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ServiceFee = 'serviceFee',
  /** column name */
  Title = 'title',
  /** column name */
  TtcPrice = 'ttcPrice'
}

/** input type for updating data in table "onapp_bill" */
export type Onapp_Bill_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amountType?: InputMaybe<Scalars['String']['input']>;
  billExternalId?: InputMaybe<Scalars['String']['input']>;
  billExternalIdRefund?: InputMaybe<Scalars['String']['input']>;
  billExternalIdTransfer?: InputMaybe<Scalars['String']['input']>;
  billType?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  creditor_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  expense_id?: InputMaybe<Scalars['uuid']['input']>;
  htprice?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isComeOn?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  option_id?: InputMaybe<Scalars['uuid']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  pollLine_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serviceFee?: InputMaybe<Scalars['float8']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  ttcPrice?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Onapp_Bill_Stddev_Fields = {
  __typename?: 'onapp_bill_stddev_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Onapp_Bill_Stddev_Pop_Fields = {
  __typename?: 'onapp_bill_stddev_pop_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Onapp_Bill_Stddev_Samp_Fields = {
  __typename?: 'onapp_bill_stddev_samp_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "onapp_bill" */
export type Onapp_Bill_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Bill_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Bill_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amountType?: InputMaybe<Scalars['String']['input']>;
  billExternalId?: InputMaybe<Scalars['String']['input']>;
  billExternalIdRefund?: InputMaybe<Scalars['String']['input']>;
  billExternalIdTransfer?: InputMaybe<Scalars['String']['input']>;
  billType?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  creditor_id?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  expense_id?: InputMaybe<Scalars['uuid']['input']>;
  htprice?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isComeOn?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  option_id?: InputMaybe<Scalars['uuid']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  pollLine_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  serviceFee?: InputMaybe<Scalars['float8']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  ttcPrice?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Onapp_Bill_Sum_Fields = {
  __typename?: 'onapp_bill_sum_fields';
  htprice?: Maybe<Scalars['float8']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  serviceFee?: Maybe<Scalars['float8']['output']>;
  ttcPrice?: Maybe<Scalars['float8']['output']>;
};

/** update columns of table "onapp_bill" */
export enum Onapp_Bill_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AmountType = 'amountType',
  /** column name */
  BillExternalId = 'billExternalId',
  /** column name */
  BillExternalIdRefund = 'billExternalIdRefund',
  /** column name */
  BillExternalIdTransfer = 'billExternalIdTransfer',
  /** column name */
  BillType = 'billType',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  CreditorId = 'creditor_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  EventId = 'event_id',
  /** column name */
  ExpenseId = 'expense_id',
  /** column name */
  Htprice = 'htprice',
  /** column name */
  Id = 'id',
  /** column name */
  IsComeOn = 'isComeOn',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  OptionId = 'option_id',
  /** column name */
  Paid = 'paid',
  /** column name */
  PollLineId = 'pollLine_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ServiceFee = 'serviceFee',
  /** column name */
  Title = 'title',
  /** column name */
  TtcPrice = 'ttcPrice'
}

export type Onapp_Bill_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Onapp_Bill_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Bill_Set_Input>;
  where: Onapp_Bill_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Onapp_Bill_Var_Pop_Fields = {
  __typename?: 'onapp_bill_var_pop_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Onapp_Bill_Var_Samp_Fields = {
  __typename?: 'onapp_bill_var_samp_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Onapp_Bill_Variance_Fields = {
  __typename?: 'onapp_bill_variance_fields';
  htprice?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  ttcPrice?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "onapp_event" */
export type Onapp_Event = {
  __typename?: 'onapp_event';
  active: Scalars['Boolean']['output'];
  activity_id?: Maybe<Scalars['uuid']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  admin_id: Scalars['uuid']['output'];
  ageDeb?: Maybe<Scalars['Int']['output']>;
  ageFin?: Maybe<Scalars['Int']['output']>;
  allocation?: Maybe<Scalars['String']['output']>;
  available: Scalars['Boolean']['output'];
  cancelationPolicies?: Maybe<Scalars['String']['output']>;
  chat_enabled: Scalars['Boolean']['output'];
  /** An array relationship */
  children: Array<Onapp_Event>;
  /** An aggregate relationship */
  children_aggregate: Onapp_Event_Aggregate;
  /** An object relationship */
  creator: Register_Profile;
  /** get the member of the person requesting */
  current_member?: Maybe<Array<Onapp_Member>>;
  dateCreation: Scalars['timestamptz']['output'];
  dateDebut?: Maybe<Scalars['timestamptz']['output']>;
  dateEcheance?: Maybe<Scalars['timestamptz']['output']>;
  dateRegul?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['interval']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  entity?: Maybe<Entity>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  event_share: Array<Onapp_Message>;
  /** An aggregate relationship */
  event_share_aggregate: Onapp_Message_Aggregate;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  img?: Maybe<Scalars['String']['output']>;
  img_100?: Maybe<Scalars['String']['output']>;
  img_300?: Maybe<Scalars['String']['output']>;
  img_blurred?: Maybe<Scalars['String']['output']>;
  /** get the other member in conversation in case of a 1-1 chat */
  interlocutor?: Maybe<Array<Onapp_Member>>;
  isOnlyAdminChat: Scalars['Boolean']['output'];
  isScan: Scalars['Boolean']['output'];
  isStaffPay: Scalars['Boolean']['output'];
  is_all_members_can_see_members: Scalars['Boolean']['output'];
  lattitude?: Maybe<Scalars['float8']['output']>;
  level: Scalars['Boolean']['output'];
  level1?: Maybe<Scalars['Int']['output']>;
  level2?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  /** An array relationship */
  members: Array<Onapp_Member>;
  /** An aggregate relationship */
  members_aggregate: Onapp_Member_Aggregate;
  /** An array relationship */
  messages: Array<Onapp_Message>;
  /** An aggregate relationship */
  messages_aggregate: Onapp_Message_Aggregate;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  nbMax?: Maybe<Scalars['Int']['output']>;
  nbMin?: Maybe<Scalars['Int']['output']>;
  nbSession?: Maybe<Scalars['Int']['output']>;
  /** get the number of active participants of an event */
  nb_participants?: Maybe<Scalars['Int']['output']>;
  onlyAdminCanCreateExpense: Scalars['Boolean']['output'];
  onlyAdminCanCreateProgram: Scalars['Boolean']['output'];
  onlyAdminCanCreateSubgroup: Scalars['Boolean']['output'];
  onlyAdminCanCreateTaskList: Scalars['Boolean']['output'];
  /** An object relationship */
  parent?: Maybe<Onapp_Event>;
  parent_members_can_join: Scalars['Boolean']['output'];
  payMethod: Scalars['Boolean']['output'];
  payRule?: Maybe<Scalars['String']['output']>;
  presenceSurprise: Scalars['Boolean']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  priceGlobal: Scalars['Boolean']['output'];
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  report: Scalars['Boolean']['output'];
  resume?: Maybe<Scalars['String']['output']>;
  selectionMode?: Maybe<Scalars['String']['output']>;
  service_id?: Maybe<Scalars['uuid']['output']>;
  share: Scalars['String']['output'];
  shareFriend: Scalars['Boolean']['output'];
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  subEvent: Scalars['Boolean']['output'];
  /** A computed field, executes function "sub_event_count" */
  sub_event_count?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "sub_group_count" */
  sub_group_count?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  task_lists: Array<Task_List>;
  /** An aggregate relationship */
  task_lists_aggregate: Task_List_Aggregate;
  title?: Maybe<Scalars['String']['output']>;
  typeEvent: Scalars['String']['output'];
  updatedDate: Scalars['timestamptz']['output'];
  urlCallback?: Maybe<Scalars['String']['output']>;
  urlPreview?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventChildrenArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventCurrent_MemberArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventEvent_ShareArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventEvent_Share_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventInterlocutorArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventMembersArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventMessagesArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventTask_ListsArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


/** columns and relationships of "onapp_event" */
export type Onapp_EventTask_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};

/** aggregated selection of "onapp_event" */
export type Onapp_Event_Aggregate = {
  __typename?: 'onapp_event_aggregate';
  aggregate?: Maybe<Onapp_Event_Aggregate_Fields>;
  nodes: Array<Onapp_Event>;
};

export type Onapp_Event_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp_Var_Samp>;
};

export type Onapp_Event_Aggregate_Bool_Exp_Avg = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Bool_And = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Corr = {
  arguments: Onapp_Event_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Onapp_Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Onapp_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Onapp_Event_Aggregate_Bool_Exp_Max = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Min = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Sum = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Event_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Event_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "onapp_event" */
export type Onapp_Event_Aggregate_Fields = {
  __typename?: 'onapp_event_aggregate_fields';
  avg?: Maybe<Onapp_Event_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Event_Max_Fields>;
  min?: Maybe<Onapp_Event_Min_Fields>;
  stddev?: Maybe<Onapp_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Onapp_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onapp_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Onapp_Event_Sum_Fields>;
  var_pop?: Maybe<Onapp_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Onapp_Event_Var_Samp_Fields>;
  variance?: Maybe<Onapp_Event_Variance_Fields>;
};


/** aggregate fields of "onapp_event" */
export type Onapp_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_event" */
export type Onapp_Event_Aggregate_Order_By = {
  avg?: InputMaybe<Onapp_Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Event_Max_Order_By>;
  min?: InputMaybe<Onapp_Event_Min_Order_By>;
  stddev?: InputMaybe<Onapp_Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Onapp_Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Onapp_Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Onapp_Event_Sum_Order_By>;
  var_pop?: InputMaybe<Onapp_Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Onapp_Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Onapp_Event_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_event" */
export type Onapp_Event_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Event_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Event_On_Conflict>;
};

/** aggregate avg on columns */
export type Onapp_Event_Avg_Fields = {
  __typename?: 'onapp_event_avg_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "onapp_event" */
export type Onapp_Event_Avg_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onapp_event". All fields are combined with a logical 'AND'. */
export type Onapp_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Event_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Event_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  activity_id?: InputMaybe<Uuid_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  admin_id?: InputMaybe<Uuid_Comparison_Exp>;
  ageDeb?: InputMaybe<Int_Comparison_Exp>;
  ageFin?: InputMaybe<Int_Comparison_Exp>;
  allocation?: InputMaybe<String_Comparison_Exp>;
  available?: InputMaybe<Boolean_Comparison_Exp>;
  cancelationPolicies?: InputMaybe<String_Comparison_Exp>;
  chat_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  children?: InputMaybe<Onapp_Event_Bool_Exp>;
  children_aggregate?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp>;
  creator?: InputMaybe<Register_Profile_Bool_Exp>;
  current_member?: InputMaybe<Onapp_Member_Bool_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateDebut?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateEcheance?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateRegul?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Interval_Comparison_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  event_share?: InputMaybe<Onapp_Message_Bool_Exp>;
  event_share_aggregate?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  img_100?: InputMaybe<String_Comparison_Exp>;
  img_300?: InputMaybe<String_Comparison_Exp>;
  img_blurred?: InputMaybe<String_Comparison_Exp>;
  interlocutor?: InputMaybe<Onapp_Member_Bool_Exp>;
  isOnlyAdminChat?: InputMaybe<Boolean_Comparison_Exp>;
  isScan?: InputMaybe<Boolean_Comparison_Exp>;
  isStaffPay?: InputMaybe<Boolean_Comparison_Exp>;
  is_all_members_can_see_members?: InputMaybe<Boolean_Comparison_Exp>;
  lattitude?: InputMaybe<Float8_Comparison_Exp>;
  level?: InputMaybe<Boolean_Comparison_Exp>;
  level1?: InputMaybe<Int_Comparison_Exp>;
  level2?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  longitude?: InputMaybe<Float8_Comparison_Exp>;
  members?: InputMaybe<Onapp_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp>;
  messages?: InputMaybe<Onapp_Message_Bool_Exp>;
  messages_aggregate?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp>;
  mummy_id?: InputMaybe<Uuid_Comparison_Exp>;
  nbMax?: InputMaybe<Int_Comparison_Exp>;
  nbMin?: InputMaybe<Int_Comparison_Exp>;
  nbSession?: InputMaybe<Int_Comparison_Exp>;
  nb_participants?: InputMaybe<Int_Comparison_Exp>;
  onlyAdminCanCreateExpense?: InputMaybe<Boolean_Comparison_Exp>;
  onlyAdminCanCreateProgram?: InputMaybe<Boolean_Comparison_Exp>;
  onlyAdminCanCreateSubgroup?: InputMaybe<Boolean_Comparison_Exp>;
  onlyAdminCanCreateTaskList?: InputMaybe<Boolean_Comparison_Exp>;
  parent?: InputMaybe<Onapp_Event_Bool_Exp>;
  parent_members_can_join?: InputMaybe<Boolean_Comparison_Exp>;
  payMethod?: InputMaybe<Boolean_Comparison_Exp>;
  payRule?: InputMaybe<String_Comparison_Exp>;
  presenceSurprise?: InputMaybe<Boolean_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  priceGlobal?: InputMaybe<Boolean_Comparison_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
  report?: InputMaybe<Boolean_Comparison_Exp>;
  resume?: InputMaybe<String_Comparison_Exp>;
  selectionMode?: InputMaybe<String_Comparison_Exp>;
  service_id?: InputMaybe<Uuid_Comparison_Exp>;
  share?: InputMaybe<String_Comparison_Exp>;
  shareFriend?: InputMaybe<Boolean_Comparison_Exp>;
  startDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  subEvent?: InputMaybe<Boolean_Comparison_Exp>;
  sub_event_count?: InputMaybe<Int_Comparison_Exp>;
  sub_group_count?: InputMaybe<Int_Comparison_Exp>;
  task_lists?: InputMaybe<Task_List_Bool_Exp>;
  task_lists_aggregate?: InputMaybe<Task_List_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  typeEvent?: InputMaybe<String_Comparison_Exp>;
  updatedDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  urlCallback?: InputMaybe<String_Comparison_Exp>;
  urlPreview?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_event" */
export enum Onapp_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappEventPkey = 'onapp_event_pkey'
}

/** input type for incrementing numeric columns in table "onapp_event" */
export type Onapp_Event_Inc_Input = {
  ageDeb?: InputMaybe<Scalars['Int']['input']>;
  ageFin?: InputMaybe<Scalars['Int']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  level1?: InputMaybe<Scalars['Int']['input']>;
  level2?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  nbMax?: InputMaybe<Scalars['Int']['input']>;
  nbMin?: InputMaybe<Scalars['Int']['input']>;
  nbSession?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "onapp_event" */
export type Onapp_Event_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  activity_id?: InputMaybe<Scalars['uuid']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  admin_id?: InputMaybe<Scalars['uuid']['input']>;
  ageDeb?: InputMaybe<Scalars['Int']['input']>;
  ageFin?: InputMaybe<Scalars['Int']['input']>;
  allocation?: InputMaybe<Scalars['String']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cancelationPolicies?: InputMaybe<Scalars['String']['input']>;
  chat_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Onapp_Event_Arr_Rel_Insert_Input>;
  creator?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateDebut?: InputMaybe<Scalars['timestamptz']['input']>;
  dateEcheance?: InputMaybe<Scalars['timestamptz']['input']>;
  dateRegul?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity?: InputMaybe<Entity_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  event_share?: InputMaybe<Onapp_Message_Arr_Rel_Insert_Input>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  img_100?: InputMaybe<Scalars['String']['input']>;
  img_300?: InputMaybe<Scalars['String']['input']>;
  img_blurred?: InputMaybe<Scalars['String']['input']>;
  isOnlyAdminChat?: InputMaybe<Scalars['Boolean']['input']>;
  isScan?: InputMaybe<Scalars['Boolean']['input']>;
  isStaffPay?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_members_can_see_members?: InputMaybe<Scalars['Boolean']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  level?: InputMaybe<Scalars['Boolean']['input']>;
  level1?: InputMaybe<Scalars['Int']['input']>;
  level2?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  members?: InputMaybe<Onapp_Member_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Onapp_Message_Arr_Rel_Insert_Input>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  nbMax?: InputMaybe<Scalars['Int']['input']>;
  nbMin?: InputMaybe<Scalars['Int']['input']>;
  nbSession?: InputMaybe<Scalars['Int']['input']>;
  onlyAdminCanCreateExpense?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateProgram?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateSubgroup?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateTaskList?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  parent_members_can_join?: InputMaybe<Scalars['Boolean']['input']>;
  payMethod?: InputMaybe<Scalars['Boolean']['input']>;
  payRule?: InputMaybe<Scalars['String']['input']>;
  presenceSurprise?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  report?: InputMaybe<Scalars['Boolean']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  selectionMode?: InputMaybe<Scalars['String']['input']>;
  service_id?: InputMaybe<Scalars['uuid']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
  shareFriend?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subEvent?: InputMaybe<Scalars['Boolean']['input']>;
  task_lists?: InputMaybe<Task_List_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeEvent?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  urlCallback?: InputMaybe<Scalars['String']['input']>;
  urlPreview?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Onapp_Event_Max_Fields = {
  __typename?: 'onapp_event_max_fields';
  activity_id?: Maybe<Scalars['uuid']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  admin_id?: Maybe<Scalars['uuid']['output']>;
  ageDeb?: Maybe<Scalars['Int']['output']>;
  ageFin?: Maybe<Scalars['Int']['output']>;
  allocation?: Maybe<Scalars['String']['output']>;
  cancelationPolicies?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  dateDebut?: Maybe<Scalars['timestamptz']['output']>;
  dateEcheance?: Maybe<Scalars['timestamptz']['output']>;
  dateRegul?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  img_100?: Maybe<Scalars['String']['output']>;
  img_300?: Maybe<Scalars['String']['output']>;
  img_blurred?: Maybe<Scalars['String']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  level1?: Maybe<Scalars['Int']['output']>;
  level2?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  nbMax?: Maybe<Scalars['Int']['output']>;
  nbMin?: Maybe<Scalars['Int']['output']>;
  nbSession?: Maybe<Scalars['Int']['output']>;
  payRule?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  selectionMode?: Maybe<Scalars['String']['output']>;
  service_id?: Maybe<Scalars['uuid']['output']>;
  share?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  typeEvent?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['timestamptz']['output']>;
  urlCallback?: Maybe<Scalars['String']['output']>;
  urlPreview?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "onapp_event" */
export type Onapp_Event_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  admin_id?: InputMaybe<Order_By>;
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  allocation?: InputMaybe<Order_By>;
  cancelationPolicies?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateDebut?: InputMaybe<Order_By>;
  dateEcheance?: InputMaybe<Order_By>;
  dateRegul?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  img_100?: InputMaybe<Order_By>;
  img_300?: InputMaybe<Order_By>;
  img_blurred?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  payRule?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  resume?: InputMaybe<Order_By>;
  selectionMode?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  share?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  typeEvent?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  urlCallback?: InputMaybe<Order_By>;
  urlPreview?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Event_Min_Fields = {
  __typename?: 'onapp_event_min_fields';
  activity_id?: Maybe<Scalars['uuid']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  admin_id?: Maybe<Scalars['uuid']['output']>;
  ageDeb?: Maybe<Scalars['Int']['output']>;
  ageFin?: Maybe<Scalars['Int']['output']>;
  allocation?: Maybe<Scalars['String']['output']>;
  cancelationPolicies?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  dateDebut?: Maybe<Scalars['timestamptz']['output']>;
  dateEcheance?: Maybe<Scalars['timestamptz']['output']>;
  dateRegul?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  img_100?: Maybe<Scalars['String']['output']>;
  img_300?: Maybe<Scalars['String']['output']>;
  img_blurred?: Maybe<Scalars['String']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  level1?: Maybe<Scalars['Int']['output']>;
  level2?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  nbMax?: Maybe<Scalars['Int']['output']>;
  nbMin?: Maybe<Scalars['Int']['output']>;
  nbSession?: Maybe<Scalars['Int']['output']>;
  payRule?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  selectionMode?: Maybe<Scalars['String']['output']>;
  service_id?: Maybe<Scalars['uuid']['output']>;
  share?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  typeEvent?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['timestamptz']['output']>;
  urlCallback?: Maybe<Scalars['String']['output']>;
  urlPreview?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "onapp_event" */
export type Onapp_Event_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  admin_id?: InputMaybe<Order_By>;
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  allocation?: InputMaybe<Order_By>;
  cancelationPolicies?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateDebut?: InputMaybe<Order_By>;
  dateEcheance?: InputMaybe<Order_By>;
  dateRegul?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  img_100?: InputMaybe<Order_By>;
  img_300?: InputMaybe<Order_By>;
  img_blurred?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  payRule?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  resume?: InputMaybe<Order_By>;
  selectionMode?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  share?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  typeEvent?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  urlCallback?: InputMaybe<Order_By>;
  urlPreview?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_event" */
export type Onapp_Event_Mutation_Response = {
  __typename?: 'onapp_event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Event>;
};

/** input type for inserting object relation for remote table "onapp_event" */
export type Onapp_Event_Obj_Rel_Insert_Input = {
  data: Onapp_Event_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Event_On_Conflict>;
};

/** on_conflict condition type for table "onapp_event" */
export type Onapp_Event_On_Conflict = {
  constraint: Onapp_Event_Constraint;
  update_columns?: Array<Onapp_Event_Update_Column>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_event". */
export type Onapp_Event_Order_By = {
  active?: InputMaybe<Order_By>;
  activity_id?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  admin_id?: InputMaybe<Order_By>;
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  allocation?: InputMaybe<Order_By>;
  available?: InputMaybe<Order_By>;
  cancelationPolicies?: InputMaybe<Order_By>;
  chat_enabled?: InputMaybe<Order_By>;
  children_aggregate?: InputMaybe<Onapp_Event_Aggregate_Order_By>;
  creator?: InputMaybe<Register_Profile_Order_By>;
  current_member_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateDebut?: InputMaybe<Order_By>;
  dateEcheance?: InputMaybe<Order_By>;
  dateRegul?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  event_share_aggregate?: InputMaybe<Onapp_Message_Aggregate_Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  img_100?: InputMaybe<Order_By>;
  img_300?: InputMaybe<Order_By>;
  img_blurred?: InputMaybe<Order_By>;
  interlocutor_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  isOnlyAdminChat?: InputMaybe<Order_By>;
  isScan?: InputMaybe<Order_By>;
  isStaffPay?: InputMaybe<Order_By>;
  is_all_members_can_see_members?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Onapp_Message_Aggregate_Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  nb_participants?: InputMaybe<Order_By>;
  onlyAdminCanCreateExpense?: InputMaybe<Order_By>;
  onlyAdminCanCreateProgram?: InputMaybe<Order_By>;
  onlyAdminCanCreateSubgroup?: InputMaybe<Order_By>;
  onlyAdminCanCreateTaskList?: InputMaybe<Order_By>;
  parent?: InputMaybe<Onapp_Event_Order_By>;
  parent_members_can_join?: InputMaybe<Order_By>;
  payMethod?: InputMaybe<Order_By>;
  payRule?: InputMaybe<Order_By>;
  presenceSurprise?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceGlobal?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  report?: InputMaybe<Order_By>;
  resume?: InputMaybe<Order_By>;
  selectionMode?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  share?: InputMaybe<Order_By>;
  shareFriend?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  subEvent?: InputMaybe<Order_By>;
  sub_event_count?: InputMaybe<Order_By>;
  sub_group_count?: InputMaybe<Order_By>;
  task_lists_aggregate?: InputMaybe<Task_List_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  typeEvent?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  urlCallback?: InputMaybe<Order_By>;
  urlPreview?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_event */
export type Onapp_Event_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_event" */
export enum Onapp_Event_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  Address = 'address',
  /** column name */
  AdminId = 'admin_id',
  /** column name */
  AgeDeb = 'ageDeb',
  /** column name */
  AgeFin = 'ageFin',
  /** column name */
  Allocation = 'allocation',
  /** column name */
  Available = 'available',
  /** column name */
  CancelationPolicies = 'cancelationPolicies',
  /** column name */
  ChatEnabled = 'chat_enabled',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateDebut = 'dateDebut',
  /** column name */
  DateEcheance = 'dateEcheance',
  /** column name */
  DateRegul = 'dateRegul',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Img_100 = 'img_100',
  /** column name */
  Img_300 = 'img_300',
  /** column name */
  ImgBlurred = 'img_blurred',
  /** column name */
  IsOnlyAdminChat = 'isOnlyAdminChat',
  /** column name */
  IsScan = 'isScan',
  /** column name */
  IsStaffPay = 'isStaffPay',
  /** column name */
  IsAllMembersCanSeeMembers = 'is_all_members_can_see_members',
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Level = 'level',
  /** column name */
  Level1 = 'level1',
  /** column name */
  Level2 = 'level2',
  /** column name */
  Location = 'location',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  NbMax = 'nbMax',
  /** column name */
  NbMin = 'nbMin',
  /** column name */
  NbSession = 'nbSession',
  /** column name */
  OnlyAdminCanCreateExpense = 'onlyAdminCanCreateExpense',
  /** column name */
  OnlyAdminCanCreateProgram = 'onlyAdminCanCreateProgram',
  /** column name */
  OnlyAdminCanCreateSubgroup = 'onlyAdminCanCreateSubgroup',
  /** column name */
  OnlyAdminCanCreateTaskList = 'onlyAdminCanCreateTaskList',
  /** column name */
  ParentMembersCanJoin = 'parent_members_can_join',
  /** column name */
  PayMethod = 'payMethod',
  /** column name */
  PayRule = 'payRule',
  /** column name */
  PresenceSurprise = 'presenceSurprise',
  /** column name */
  Price = 'price',
  /** column name */
  PriceGlobal = 'priceGlobal',
  /** column name */
  Report = 'report',
  /** column name */
  Resume = 'resume',
  /** column name */
  SelectionMode = 'selectionMode',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  Share = 'share',
  /** column name */
  ShareFriend = 'shareFriend',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  State = 'state',
  /** column name */
  SubEvent = 'subEvent',
  /** column name */
  Title = 'title',
  /** column name */
  TypeEvent = 'typeEvent',
  /** column name */
  UpdatedDate = 'updatedDate',
  /** column name */
  UrlCallback = 'urlCallback',
  /** column name */
  UrlPreview = 'urlPreview'
}

/** select "onapp_event_aggregate_bool_exp_avg_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_bool_and_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Available = 'available',
  /** column name */
  ChatEnabled = 'chat_enabled',
  /** column name */
  IsOnlyAdminChat = 'isOnlyAdminChat',
  /** column name */
  IsScan = 'isScan',
  /** column name */
  IsStaffPay = 'isStaffPay',
  /** column name */
  IsAllMembersCanSeeMembers = 'is_all_members_can_see_members',
  /** column name */
  Level = 'level',
  /** column name */
  OnlyAdminCanCreateExpense = 'onlyAdminCanCreateExpense',
  /** column name */
  OnlyAdminCanCreateProgram = 'onlyAdminCanCreateProgram',
  /** column name */
  OnlyAdminCanCreateSubgroup = 'onlyAdminCanCreateSubgroup',
  /** column name */
  OnlyAdminCanCreateTaskList = 'onlyAdminCanCreateTaskList',
  /** column name */
  ParentMembersCanJoin = 'parent_members_can_join',
  /** column name */
  PayMethod = 'payMethod',
  /** column name */
  PresenceSurprise = 'presenceSurprise',
  /** column name */
  PriceGlobal = 'priceGlobal',
  /** column name */
  Report = 'report',
  /** column name */
  ShareFriend = 'shareFriend',
  /** column name */
  SubEvent = 'subEvent'
}

/** select "onapp_event_aggregate_bool_exp_bool_or_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Available = 'available',
  /** column name */
  ChatEnabled = 'chat_enabled',
  /** column name */
  IsOnlyAdminChat = 'isOnlyAdminChat',
  /** column name */
  IsScan = 'isScan',
  /** column name */
  IsStaffPay = 'isStaffPay',
  /** column name */
  IsAllMembersCanSeeMembers = 'is_all_members_can_see_members',
  /** column name */
  Level = 'level',
  /** column name */
  OnlyAdminCanCreateExpense = 'onlyAdminCanCreateExpense',
  /** column name */
  OnlyAdminCanCreateProgram = 'onlyAdminCanCreateProgram',
  /** column name */
  OnlyAdminCanCreateSubgroup = 'onlyAdminCanCreateSubgroup',
  /** column name */
  OnlyAdminCanCreateTaskList = 'onlyAdminCanCreateTaskList',
  /** column name */
  ParentMembersCanJoin = 'parent_members_can_join',
  /** column name */
  PayMethod = 'payMethod',
  /** column name */
  PresenceSurprise = 'presenceSurprise',
  /** column name */
  PriceGlobal = 'priceGlobal',
  /** column name */
  Report = 'report',
  /** column name */
  ShareFriend = 'shareFriend',
  /** column name */
  SubEvent = 'subEvent'
}

/** select "onapp_event_aggregate_bool_exp_corr_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_max_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_min_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_sum_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "onapp_event_aggregate_bool_exp_var_samp_arguments_columns" columns of table "onapp_event" */
export enum Onapp_Event_Select_Column_Onapp_Event_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** input type for updating data in table "onapp_event" */
export type Onapp_Event_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  activity_id?: InputMaybe<Scalars['uuid']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  admin_id?: InputMaybe<Scalars['uuid']['input']>;
  ageDeb?: InputMaybe<Scalars['Int']['input']>;
  ageFin?: InputMaybe<Scalars['Int']['input']>;
  allocation?: InputMaybe<Scalars['String']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cancelationPolicies?: InputMaybe<Scalars['String']['input']>;
  chat_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateDebut?: InputMaybe<Scalars['timestamptz']['input']>;
  dateEcheance?: InputMaybe<Scalars['timestamptz']['input']>;
  dateRegul?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  img_100?: InputMaybe<Scalars['String']['input']>;
  img_300?: InputMaybe<Scalars['String']['input']>;
  img_blurred?: InputMaybe<Scalars['String']['input']>;
  isOnlyAdminChat?: InputMaybe<Scalars['Boolean']['input']>;
  isScan?: InputMaybe<Scalars['Boolean']['input']>;
  isStaffPay?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_members_can_see_members?: InputMaybe<Scalars['Boolean']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  level?: InputMaybe<Scalars['Boolean']['input']>;
  level1?: InputMaybe<Scalars['Int']['input']>;
  level2?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  nbMax?: InputMaybe<Scalars['Int']['input']>;
  nbMin?: InputMaybe<Scalars['Int']['input']>;
  nbSession?: InputMaybe<Scalars['Int']['input']>;
  onlyAdminCanCreateExpense?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateProgram?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateSubgroup?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateTaskList?: InputMaybe<Scalars['Boolean']['input']>;
  parent_members_can_join?: InputMaybe<Scalars['Boolean']['input']>;
  payMethod?: InputMaybe<Scalars['Boolean']['input']>;
  payRule?: InputMaybe<Scalars['String']['input']>;
  presenceSurprise?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  report?: InputMaybe<Scalars['Boolean']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  selectionMode?: InputMaybe<Scalars['String']['input']>;
  service_id?: InputMaybe<Scalars['uuid']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
  shareFriend?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subEvent?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeEvent?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  urlCallback?: InputMaybe<Scalars['String']['input']>;
  urlPreview?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Onapp_Event_Stddev_Fields = {
  __typename?: 'onapp_event_stddev_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "onapp_event" */
export type Onapp_Event_Stddev_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onapp_Event_Stddev_Pop_Fields = {
  __typename?: 'onapp_event_stddev_pop_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "onapp_event" */
export type Onapp_Event_Stddev_Pop_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onapp_Event_Stddev_Samp_Fields = {
  __typename?: 'onapp_event_stddev_samp_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "onapp_event" */
export type Onapp_Event_Stddev_Samp_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "onapp_event" */
export type Onapp_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Event_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  activity_id?: InputMaybe<Scalars['uuid']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  admin_id?: InputMaybe<Scalars['uuid']['input']>;
  ageDeb?: InputMaybe<Scalars['Int']['input']>;
  ageFin?: InputMaybe<Scalars['Int']['input']>;
  allocation?: InputMaybe<Scalars['String']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  cancelationPolicies?: InputMaybe<Scalars['String']['input']>;
  chat_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateDebut?: InputMaybe<Scalars['timestamptz']['input']>;
  dateEcheance?: InputMaybe<Scalars['timestamptz']['input']>;
  dateRegul?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['interval']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  img_100?: InputMaybe<Scalars['String']['input']>;
  img_300?: InputMaybe<Scalars['String']['input']>;
  img_blurred?: InputMaybe<Scalars['String']['input']>;
  isOnlyAdminChat?: InputMaybe<Scalars['Boolean']['input']>;
  isScan?: InputMaybe<Scalars['Boolean']['input']>;
  isStaffPay?: InputMaybe<Scalars['Boolean']['input']>;
  is_all_members_can_see_members?: InputMaybe<Scalars['Boolean']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  level?: InputMaybe<Scalars['Boolean']['input']>;
  level1?: InputMaybe<Scalars['Int']['input']>;
  level2?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  nbMax?: InputMaybe<Scalars['Int']['input']>;
  nbMin?: InputMaybe<Scalars['Int']['input']>;
  nbSession?: InputMaybe<Scalars['Int']['input']>;
  onlyAdminCanCreateExpense?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateProgram?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateSubgroup?: InputMaybe<Scalars['Boolean']['input']>;
  onlyAdminCanCreateTaskList?: InputMaybe<Scalars['Boolean']['input']>;
  parent_members_can_join?: InputMaybe<Scalars['Boolean']['input']>;
  payMethod?: InputMaybe<Scalars['Boolean']['input']>;
  payRule?: InputMaybe<Scalars['String']['input']>;
  presenceSurprise?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  report?: InputMaybe<Scalars['Boolean']['input']>;
  resume?: InputMaybe<Scalars['String']['input']>;
  selectionMode?: InputMaybe<Scalars['String']['input']>;
  service_id?: InputMaybe<Scalars['uuid']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
  shareFriend?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subEvent?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeEvent?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  urlCallback?: InputMaybe<Scalars['String']['input']>;
  urlPreview?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Onapp_Event_Sum_Fields = {
  __typename?: 'onapp_event_sum_fields';
  ageDeb?: Maybe<Scalars['Int']['output']>;
  ageFin?: Maybe<Scalars['Int']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  level1?: Maybe<Scalars['Int']['output']>;
  level2?: Maybe<Scalars['Int']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  nbMax?: Maybe<Scalars['Int']['output']>;
  nbMin?: Maybe<Scalars['Int']['output']>;
  nbSession?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "onapp_event" */
export type Onapp_Event_Sum_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "onapp_event" */
export enum Onapp_Event_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  Address = 'address',
  /** column name */
  AdminId = 'admin_id',
  /** column name */
  AgeDeb = 'ageDeb',
  /** column name */
  AgeFin = 'ageFin',
  /** column name */
  Allocation = 'allocation',
  /** column name */
  Available = 'available',
  /** column name */
  CancelationPolicies = 'cancelationPolicies',
  /** column name */
  ChatEnabled = 'chat_enabled',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateDebut = 'dateDebut',
  /** column name */
  DateEcheance = 'dateEcheance',
  /** column name */
  DateRegul = 'dateRegul',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  Img_100 = 'img_100',
  /** column name */
  Img_300 = 'img_300',
  /** column name */
  ImgBlurred = 'img_blurred',
  /** column name */
  IsOnlyAdminChat = 'isOnlyAdminChat',
  /** column name */
  IsScan = 'isScan',
  /** column name */
  IsStaffPay = 'isStaffPay',
  /** column name */
  IsAllMembersCanSeeMembers = 'is_all_members_can_see_members',
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Level = 'level',
  /** column name */
  Level1 = 'level1',
  /** column name */
  Level2 = 'level2',
  /** column name */
  Location = 'location',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  NbMax = 'nbMax',
  /** column name */
  NbMin = 'nbMin',
  /** column name */
  NbSession = 'nbSession',
  /** column name */
  OnlyAdminCanCreateExpense = 'onlyAdminCanCreateExpense',
  /** column name */
  OnlyAdminCanCreateProgram = 'onlyAdminCanCreateProgram',
  /** column name */
  OnlyAdminCanCreateSubgroup = 'onlyAdminCanCreateSubgroup',
  /** column name */
  OnlyAdminCanCreateTaskList = 'onlyAdminCanCreateTaskList',
  /** column name */
  ParentMembersCanJoin = 'parent_members_can_join',
  /** column name */
  PayMethod = 'payMethod',
  /** column name */
  PayRule = 'payRule',
  /** column name */
  PresenceSurprise = 'presenceSurprise',
  /** column name */
  Price = 'price',
  /** column name */
  PriceGlobal = 'priceGlobal',
  /** column name */
  Report = 'report',
  /** column name */
  Resume = 'resume',
  /** column name */
  SelectionMode = 'selectionMode',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  Share = 'share',
  /** column name */
  ShareFriend = 'shareFriend',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  State = 'state',
  /** column name */
  SubEvent = 'subEvent',
  /** column name */
  Title = 'title',
  /** column name */
  TypeEvent = 'typeEvent',
  /** column name */
  UpdatedDate = 'updatedDate',
  /** column name */
  UrlCallback = 'urlCallback',
  /** column name */
  UrlPreview = 'urlPreview'
}

export type Onapp_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Onapp_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Event_Set_Input>;
  where: Onapp_Event_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Onapp_Event_Var_Pop_Fields = {
  __typename?: 'onapp_event_var_pop_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "onapp_event" */
export type Onapp_Event_Var_Pop_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onapp_Event_Var_Samp_Fields = {
  __typename?: 'onapp_event_var_samp_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "onapp_event" */
export type Onapp_Event_Var_Samp_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Onapp_Event_Variance_Fields = {
  __typename?: 'onapp_event_variance_fields';
  ageDeb?: Maybe<Scalars['Float']['output']>;
  ageFin?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  level1?: Maybe<Scalars['Float']['output']>;
  level2?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nbMax?: Maybe<Scalars['Float']['output']>;
  nbMin?: Maybe<Scalars['Float']['output']>;
  nbSession?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "onapp_event" */
export type Onapp_Event_Variance_Order_By = {
  ageDeb?: InputMaybe<Order_By>;
  ageFin?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  level1?: InputMaybe<Order_By>;
  level2?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  nbMax?: InputMaybe<Order_By>;
  nbMin?: InputMaybe<Order_By>;
  nbSession?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "onapp_hasuratask" */
export type Onapp_Hasuratask = {
  __typename?: 'onapp_hasuratask';
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  taskId?: Maybe<Scalars['String']['output']>;
  taskType?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "onapp_hasuratask" */
export type Onapp_Hasuratask_Aggregate = {
  __typename?: 'onapp_hasuratask_aggregate';
  aggregate?: Maybe<Onapp_Hasuratask_Aggregate_Fields>;
  nodes: Array<Onapp_Hasuratask>;
};

/** aggregate fields of "onapp_hasuratask" */
export type Onapp_Hasuratask_Aggregate_Fields = {
  __typename?: 'onapp_hasuratask_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Hasuratask_Max_Fields>;
  min?: Maybe<Onapp_Hasuratask_Min_Fields>;
};


/** aggregate fields of "onapp_hasuratask" */
export type Onapp_Hasuratask_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Hasuratask_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "onapp_hasuratask". All fields are combined with a logical 'AND'. */
export type Onapp_Hasuratask_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Hasuratask_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Hasuratask_Bool_Exp>>;
  eventId?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  taskId?: InputMaybe<String_Comparison_Exp>;
  taskType?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_hasuratask" */
export enum Onapp_Hasuratask_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappHasurataskPkey = 'onapp_hasuratask_pkey'
}

/** input type for inserting data into table "onapp_hasuratask" */
export type Onapp_Hasuratask_Insert_Input = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Onapp_Hasuratask_Max_Fields = {
  __typename?: 'onapp_hasuratask_max_fields';
  eventId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  taskType?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Onapp_Hasuratask_Min_Fields = {
  __typename?: 'onapp_hasuratask_min_fields';
  eventId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  taskType?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "onapp_hasuratask" */
export type Onapp_Hasuratask_Mutation_Response = {
  __typename?: 'onapp_hasuratask_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Hasuratask>;
};

/** on_conflict condition type for table "onapp_hasuratask" */
export type Onapp_Hasuratask_On_Conflict = {
  constraint: Onapp_Hasuratask_Constraint;
  update_columns?: Array<Onapp_Hasuratask_Update_Column>;
  where?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_hasuratask". */
export type Onapp_Hasuratask_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  taskType?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_hasuratask */
export type Onapp_Hasuratask_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_hasuratask" */
export enum Onapp_Hasuratask_Select_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  TaskType = 'taskType'
}

/** input type for updating data in table "onapp_hasuratask" */
export type Onapp_Hasuratask_Set_Input = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "onapp_hasuratask" */
export type Onapp_Hasuratask_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Hasuratask_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Hasuratask_Stream_Cursor_Value_Input = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "onapp_hasuratask" */
export enum Onapp_Hasuratask_Update_Column {
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  TaskType = 'taskType'
}

export type Onapp_Hasuratask_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Hasuratask_Set_Input>;
  where: Onapp_Hasuratask_Bool_Exp;
};

/** columns and relationships of "onapp_member" */
export type Onapp_Member = {
  __typename?: 'onapp_member';
  active: Scalars['Boolean']['output'];
  calendarId?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  children: Array<Onapp_Member>;
  /** An aggregate relationship */
  children_aggregate: Onapp_Member_Aggregate;
  /** An object relationship */
  creator: Register_Profile;
  creator_id: Scalars['uuid']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  dateJoin?: Maybe<Scalars['timestamptz']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  event: Onapp_Event;
  event_id: Scalars['uuid']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** is the member in an active expenses in his event */
  is_member_in_active_expenses?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastRelaunch?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  last_seen_message?: Maybe<Onapp_Message>;
  last_seen_message_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  memberBill?: Maybe<Onapp_Bill>;
  memberRole: Scalars['String']['output'];
  /** An array relationship */
  mentions: Array<Onapp_Messagemention>;
  /** An aggregate relationship */
  mentions_aggregate: Onapp_Messagemention_Aggregate;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  mute?: Maybe<Scalars['timestamptz']['output']>;
  nbScan: Scalars['Int']['output'];
  /** An object relationship */
  parent?: Maybe<Onapp_Member>;
  phone?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  /** A computed field, executes function "successful_transactions" */
  successful_transactions?: Maybe<Array<Transaction>>;
  surprise: Scalars['Boolean']['output'];
  /** An array relationship */
  task_lists_created: Array<Task_List>;
  /** An aggregate relationship */
  task_lists_created_aggregate: Task_List_Aggregate;
  /** An array relationship */
  tasks_assigned: Array<Task_Member>;
  /** An aggregate relationship */
  tasks_assigned_aggregate: Task_Member_Aggregate;
  /** An array relationship */
  tasks_created: Array<Task>;
  /** An aggregate relationship */
  tasks_created_aggregate: Task_Aggregate;
  /** An array relationship */
  ticket_scans: Array<Member_Ticket_Scan>;
  /** An aggregate relationship */
  ticket_scans_aggregate: Member_Ticket_Scan_Aggregate;
  /** A computed field, executes function "unseen_msg_count" */
  unseen_msg_count?: Maybe<Scalars['Int']['output']>;
  updatedDate: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Register_Profile>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  user_permission_id?: Maybe<Scalars['uuid']['output']>;
  vote: Scalars['Boolean']['output'];
  voteMembers: Scalars['Boolean']['output'];
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberChildrenArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberMentionsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberMentions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberSuccessful_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTask_Lists_CreatedArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTask_Lists_Created_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTasks_AssignedArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTasks_Assigned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTasks_CreatedArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTasks_Created_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTicket_ScansArgs = {
  distinct_on?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Ticket_Scan_Order_By>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberTicket_Scans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Ticket_Scan_Order_By>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


/** columns and relationships of "onapp_member" */
export type Onapp_MemberUnseen_Msg_CountArgs = {
  args: Unseen_Msg_Count_Onapp_Member_Args;
};

/** aggregated selection of "onapp_member" */
export type Onapp_Member_Aggregate = {
  __typename?: 'onapp_member_aggregate';
  aggregate?: Maybe<Onapp_Member_Aggregate_Fields>;
  nodes: Array<Onapp_Member>;
};

export type Onapp_Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Onapp_Member_Select_Column_Onapp_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Onapp_Member_Select_Column_Onapp_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_member" */
export type Onapp_Member_Aggregate_Fields = {
  __typename?: 'onapp_member_aggregate_fields';
  avg?: Maybe<Onapp_Member_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Member_Max_Fields>;
  min?: Maybe<Onapp_Member_Min_Fields>;
  stddev?: Maybe<Onapp_Member_Stddev_Fields>;
  stddev_pop?: Maybe<Onapp_Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onapp_Member_Stddev_Samp_Fields>;
  sum?: Maybe<Onapp_Member_Sum_Fields>;
  var_pop?: Maybe<Onapp_Member_Var_Pop_Fields>;
  var_samp?: Maybe<Onapp_Member_Var_Samp_Fields>;
  variance?: Maybe<Onapp_Member_Variance_Fields>;
};


/** aggregate fields of "onapp_member" */
export type Onapp_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_member" */
export type Onapp_Member_Aggregate_Order_By = {
  avg?: InputMaybe<Onapp_Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Member_Max_Order_By>;
  min?: InputMaybe<Onapp_Member_Min_Order_By>;
  stddev?: InputMaybe<Onapp_Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Onapp_Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Onapp_Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Onapp_Member_Sum_Order_By>;
  var_pop?: InputMaybe<Onapp_Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Onapp_Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Onapp_Member_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_member" */
export type Onapp_Member_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Member_On_Conflict>;
};

/** aggregate avg on columns */
export type Onapp_Member_Avg_Fields = {
  __typename?: 'onapp_member_avg_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "onapp_member" */
export type Onapp_Member_Avg_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onapp_member". All fields are combined with a logical 'AND'. */
export type Onapp_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Member_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Member_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  calendarId?: InputMaybe<String_Comparison_Exp>;
  children?: InputMaybe<Onapp_Member_Bool_Exp>;
  children_aggregate?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp>;
  creator?: InputMaybe<Register_Profile_Bool_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateJoin?: InputMaybe<Timestamptz_Comparison_Exp>;
  deviceId?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<Onapp_Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_member_in_active_expenses?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  lastRelaunch?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_seen_message?: InputMaybe<Onapp_Message_Bool_Exp>;
  last_seen_message_id?: InputMaybe<Uuid_Comparison_Exp>;
  memberBill?: InputMaybe<Onapp_Bill_Bool_Exp>;
  memberRole?: InputMaybe<String_Comparison_Exp>;
  mentions?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
  mentions_aggregate?: InputMaybe<Onapp_Messagemention_Aggregate_Bool_Exp>;
  mummy_id?: InputMaybe<Uuid_Comparison_Exp>;
  mute?: InputMaybe<Timestamptz_Comparison_Exp>;
  nbScan?: InputMaybe<Int_Comparison_Exp>;
  parent?: InputMaybe<Onapp_Member_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  successful_transactions?: InputMaybe<Transaction_Bool_Exp>;
  surprise?: InputMaybe<Boolean_Comparison_Exp>;
  task_lists_created?: InputMaybe<Task_List_Bool_Exp>;
  task_lists_created_aggregate?: InputMaybe<Task_List_Aggregate_Bool_Exp>;
  tasks_assigned?: InputMaybe<Task_Member_Bool_Exp>;
  tasks_assigned_aggregate?: InputMaybe<Task_Member_Aggregate_Bool_Exp>;
  tasks_created?: InputMaybe<Task_Bool_Exp>;
  tasks_created_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  ticket_scans?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
  ticket_scans_aggregate?: InputMaybe<Member_Ticket_Scan_Aggregate_Bool_Exp>;
  updatedDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Register_Profile_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_permission_id?: InputMaybe<Uuid_Comparison_Exp>;
  vote?: InputMaybe<Boolean_Comparison_Exp>;
  voteMembers?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_member" */
export enum Onapp_Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappMemberPkey = 'onapp_member_pkey',
  /** unique or primary key constraint on columns "event_id", "phone", "user_id" */
  OnappMemberUserIdEventIdPhoneKey = 'onapp_member_user_id_event_id_phone_key'
}

/** input type for incrementing numeric columns in table "onapp_member" */
export type Onapp_Member_Inc_Input = {
  nbScan?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "onapp_member" */
export type Onapp_Member_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<Onapp_Member_Arr_Rel_Insert_Input>;
  creator?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateJoin?: InputMaybe<Scalars['timestamptz']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastRelaunch?: InputMaybe<Scalars['timestamptz']['input']>;
  last_seen_message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  last_seen_message_id?: InputMaybe<Scalars['uuid']['input']>;
  memberBill?: InputMaybe<Onapp_Bill_Obj_Rel_Insert_Input>;
  memberRole?: InputMaybe<Scalars['String']['input']>;
  mentions?: InputMaybe<Onapp_Messagemention_Arr_Rel_Insert_Input>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  mute?: InputMaybe<Scalars['timestamptz']['input']>;
  nbScan?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  surprise?: InputMaybe<Scalars['Boolean']['input']>;
  task_lists_created?: InputMaybe<Task_List_Arr_Rel_Insert_Input>;
  tasks_assigned?: InputMaybe<Task_Member_Arr_Rel_Insert_Input>;
  tasks_created?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  ticket_scans?: InputMaybe<Member_Ticket_Scan_Arr_Rel_Insert_Input>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  user_permission_id?: InputMaybe<Scalars['uuid']['input']>;
  vote?: InputMaybe<Scalars['Boolean']['input']>;
  voteMembers?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Onapp_Member_Max_Fields = {
  __typename?: 'onapp_member_max_fields';
  calendarId?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  dateJoin?: Maybe<Scalars['timestamptz']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastRelaunch?: Maybe<Scalars['timestamptz']['output']>;
  last_seen_message_id?: Maybe<Scalars['uuid']['output']>;
  memberRole?: Maybe<Scalars['String']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  mute?: Maybe<Scalars['timestamptz']['output']>;
  nbScan?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  user_permission_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "onapp_member" */
export type Onapp_Member_Max_Order_By = {
  calendarId?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateJoin?: InputMaybe<Order_By>;
  deviceId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastRelaunch?: InputMaybe<Order_By>;
  last_seen_message_id?: InputMaybe<Order_By>;
  memberRole?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  mute?: InputMaybe<Order_By>;
  nbScan?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_permission_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Member_Min_Fields = {
  __typename?: 'onapp_member_min_fields';
  calendarId?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  dateJoin?: Maybe<Scalars['timestamptz']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastRelaunch?: Maybe<Scalars['timestamptz']['output']>;
  last_seen_message_id?: Maybe<Scalars['uuid']['output']>;
  memberRole?: Maybe<Scalars['String']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  mute?: Maybe<Scalars['timestamptz']['output']>;
  nbScan?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
  user_permission_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "onapp_member" */
export type Onapp_Member_Min_Order_By = {
  calendarId?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateJoin?: InputMaybe<Order_By>;
  deviceId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastRelaunch?: InputMaybe<Order_By>;
  last_seen_message_id?: InputMaybe<Order_By>;
  memberRole?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  mute?: InputMaybe<Order_By>;
  nbScan?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_permission_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_member" */
export type Onapp_Member_Mutation_Response = {
  __typename?: 'onapp_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Member>;
};

/** input type for inserting object relation for remote table "onapp_member" */
export type Onapp_Member_Obj_Rel_Insert_Input = {
  data: Onapp_Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Member_On_Conflict>;
};

/** on_conflict condition type for table "onapp_member" */
export type Onapp_Member_On_Conflict = {
  constraint: Onapp_Member_Constraint;
  update_columns?: Array<Onapp_Member_Update_Column>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_member". */
export type Onapp_Member_Order_By = {
  active?: InputMaybe<Order_By>;
  calendarId?: InputMaybe<Order_By>;
  children_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  creator?: InputMaybe<Register_Profile_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateJoin?: InputMaybe<Order_By>;
  deviceId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  event?: InputMaybe<Onapp_Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_member_in_active_expenses?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastRelaunch?: InputMaybe<Order_By>;
  last_seen_message?: InputMaybe<Onapp_Message_Order_By>;
  last_seen_message_id?: InputMaybe<Order_By>;
  memberBill?: InputMaybe<Onapp_Bill_Order_By>;
  memberRole?: InputMaybe<Order_By>;
  mentions_aggregate?: InputMaybe<Onapp_Messagemention_Aggregate_Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  mute?: InputMaybe<Order_By>;
  nbScan?: InputMaybe<Order_By>;
  parent?: InputMaybe<Onapp_Member_Order_By>;
  phone?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  successful_transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  surprise?: InputMaybe<Order_By>;
  task_lists_created_aggregate?: InputMaybe<Task_List_Aggregate_Order_By>;
  tasks_assigned_aggregate?: InputMaybe<Task_Member_Aggregate_Order_By>;
  tasks_created_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  ticket_scans_aggregate?: InputMaybe<Member_Ticket_Scan_Aggregate_Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  user?: InputMaybe<Register_Profile_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_permission_id?: InputMaybe<Order_By>;
  vote?: InputMaybe<Order_By>;
  voteMembers?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_member */
export type Onapp_Member_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_member" */
export enum Onapp_Member_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CalendarId = 'calendarId',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateJoin = 'dateJoin',
  /** column name */
  DeviceId = 'deviceId',
  /** column name */
  Email = 'email',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LastRelaunch = 'lastRelaunch',
  /** column name */
  LastSeenMessageId = 'last_seen_message_id',
  /** column name */
  MemberRole = 'memberRole',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  Mute = 'mute',
  /** column name */
  NbScan = 'nbScan',
  /** column name */
  Phone = 'phone',
  /** column name */
  State = 'state',
  /** column name */
  Surprise = 'surprise',
  /** column name */
  UpdatedDate = 'updatedDate',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserPermissionId = 'user_permission_id',
  /** column name */
  Vote = 'vote',
  /** column name */
  VoteMembers = 'voteMembers'
}

/** select "onapp_member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "onapp_member" */
export enum Onapp_Member_Select_Column_Onapp_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Surprise = 'surprise',
  /** column name */
  Vote = 'vote',
  /** column name */
  VoteMembers = 'voteMembers'
}

/** select "onapp_member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "onapp_member" */
export enum Onapp_Member_Select_Column_Onapp_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Surprise = 'surprise',
  /** column name */
  Vote = 'vote',
  /** column name */
  VoteMembers = 'voteMembers'
}

/** input type for updating data in table "onapp_member" */
export type Onapp_Member_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateJoin?: InputMaybe<Scalars['timestamptz']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastRelaunch?: InputMaybe<Scalars['timestamptz']['input']>;
  last_seen_message_id?: InputMaybe<Scalars['uuid']['input']>;
  memberRole?: InputMaybe<Scalars['String']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  mute?: InputMaybe<Scalars['timestamptz']['input']>;
  nbScan?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  surprise?: InputMaybe<Scalars['Boolean']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  user_permission_id?: InputMaybe<Scalars['uuid']['input']>;
  vote?: InputMaybe<Scalars['Boolean']['input']>;
  voteMembers?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Onapp_Member_Stddev_Fields = {
  __typename?: 'onapp_member_stddev_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "onapp_member" */
export type Onapp_Member_Stddev_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onapp_Member_Stddev_Pop_Fields = {
  __typename?: 'onapp_member_stddev_pop_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "onapp_member" */
export type Onapp_Member_Stddev_Pop_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onapp_Member_Stddev_Samp_Fields = {
  __typename?: 'onapp_member_stddev_samp_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "onapp_member" */
export type Onapp_Member_Stddev_Samp_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "onapp_member" */
export type Onapp_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Member_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  calendarId?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateJoin?: InputMaybe<Scalars['timestamptz']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastRelaunch?: InputMaybe<Scalars['timestamptz']['input']>;
  last_seen_message_id?: InputMaybe<Scalars['uuid']['input']>;
  memberRole?: InputMaybe<Scalars['String']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  mute?: InputMaybe<Scalars['timestamptz']['input']>;
  nbScan?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  surprise?: InputMaybe<Scalars['Boolean']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  user_permission_id?: InputMaybe<Scalars['uuid']['input']>;
  vote?: InputMaybe<Scalars['Boolean']['input']>;
  voteMembers?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Onapp_Member_Sum_Fields = {
  __typename?: 'onapp_member_sum_fields';
  nbScan?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "onapp_member" */
export type Onapp_Member_Sum_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** update columns of table "onapp_member" */
export enum Onapp_Member_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CalendarId = 'calendarId',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateJoin = 'dateJoin',
  /** column name */
  DeviceId = 'deviceId',
  /** column name */
  Email = 'email',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LastRelaunch = 'lastRelaunch',
  /** column name */
  LastSeenMessageId = 'last_seen_message_id',
  /** column name */
  MemberRole = 'memberRole',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  Mute = 'mute',
  /** column name */
  NbScan = 'nbScan',
  /** column name */
  Phone = 'phone',
  /** column name */
  State = 'state',
  /** column name */
  Surprise = 'surprise',
  /** column name */
  UpdatedDate = 'updatedDate',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserPermissionId = 'user_permission_id',
  /** column name */
  Vote = 'vote',
  /** column name */
  VoteMembers = 'voteMembers'
}

export type Onapp_Member_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Onapp_Member_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Member_Set_Input>;
  where: Onapp_Member_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Onapp_Member_Var_Pop_Fields = {
  __typename?: 'onapp_member_var_pop_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "onapp_member" */
export type Onapp_Member_Var_Pop_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onapp_Member_Var_Samp_Fields = {
  __typename?: 'onapp_member_var_samp_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "onapp_member" */
export type Onapp_Member_Var_Samp_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Onapp_Member_Variance_Fields = {
  __typename?: 'onapp_member_variance_fields';
  nbScan?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "onapp_member" */
export type Onapp_Member_Variance_Order_By = {
  nbScan?: InputMaybe<Order_By>;
};

/** columns and relationships of "onapp_message" */
export type Onapp_Message = {
  __typename?: 'onapp_message';
  active: Scalars['Boolean']['output'];
  /** An array relationship */
  children: Array<Onapp_Message>;
  /** An aggregate relationship */
  children_aggregate: Onapp_Message_Aggregate;
  comment?: Maybe<Scalars['String']['output']>;
  createChoice?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  creator: Register_Profile;
  creator_id: Scalars['uuid']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  dateDisplay?: Maybe<Scalars['timestamptz']['output']>;
  dateEcheance?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  event: Onapp_Event;
  eventShare_id?: Maybe<Scalars['uuid']['output']>;
  event_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  isMummyDeleted?: Maybe<Scalars['Boolean']['output']>;
  is_pin_for_all: Scalars['Boolean']['output'];
  /** check if any messagepin exist for the current user in db */
  is_pin_for_me?: Maybe<Scalars['Boolean']['output']>;
  media: Scalars['Boolean']['output'];
  /** An array relationship */
  medias: Array<Onapp_Messagemedia>;
  /** An aggregate relationship */
  medias_aggregate: Onapp_Messagemedia_Aggregate;
  /** An array relationship */
  mentions: Array<Onapp_Messagemention>;
  /** An aggregate relationship */
  mentions_aggregate: Onapp_Messagemention_Aggregate;
  messageName?: Maybe<Scalars['String']['output']>;
  messageType: Scalars['String']['output'];
  multiChoice?: Maybe<Scalars['Boolean']['output']>;
  mummyContent?: Maybe<Scalars['String']['output']>;
  mummyName?: Maybe<Scalars['String']['output']>;
  mummyPhoto?: Maybe<Scalars['String']['output']>;
  mummyVideo?: Maybe<Scalars['Boolean']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  notifmessages: Array<Onapp_Notifmessage>;
  /** An aggregate relationship */
  notifmessages_aggregate: Onapp_Notifmessage_Aggregate;
  on_tap_callback?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  options: Array<Onapp_Polloption>;
  /** An aggregate relationship */
  options_aggregate: Onapp_Polloption_Aggregate;
  /** An object relationship */
  parent?: Maybe<Onapp_Message>;
  /** An array relationship */
  pins: Array<Onapp_Messagepin>;
  /** An aggregate relationship */
  pins_aggregate: Onapp_Messagepin_Aggregate;
  /** An array relationship */
  reactions: Array<Onapp_Messagereaction>;
  /** An aggregate relationship */
  reactions_aggregate: Onapp_Messagereaction_Aggregate;
  /** An object relationship */
  shared_event?: Maybe<Onapp_Event>;
  updatedDate: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
  urlDescription?: Maybe<Scalars['String']['output']>;
  urlFavicon: Scalars['Boolean']['output'];
  urlImage?: Maybe<Scalars['String']['output']>;
  urlTitle?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageChildrenArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageMediasArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemedia_Order_By>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageMedias_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemedia_Order_By>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageMentionsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageMentions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageNotifmessagesArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageNotifmessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageOptionsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Polloption_Order_By>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Polloption_Order_By>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessagePinsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagepin_Order_By>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessagePins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagepin_Order_By>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageReactionsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagereaction_Order_By>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};


/** columns and relationships of "onapp_message" */
export type Onapp_MessageReactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagereaction_Order_By>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};

/** aggregated selection of "onapp_message" */
export type Onapp_Message_Aggregate = {
  __typename?: 'onapp_message_aggregate';
  aggregate?: Maybe<Onapp_Message_Aggregate_Fields>;
  nodes: Array<Onapp_Message>;
};

export type Onapp_Message_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Message_Aggregate_Bool_Exp_Bool_And = {
  arguments: Onapp_Message_Select_Column_Onapp_Message_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Message_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Message_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Onapp_Message_Select_Column_Onapp_Message_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Message_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_message" */
export type Onapp_Message_Aggregate_Fields = {
  __typename?: 'onapp_message_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Message_Max_Fields>;
  min?: Maybe<Onapp_Message_Min_Fields>;
};


/** aggregate fields of "onapp_message" */
export type Onapp_Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_message" */
export type Onapp_Message_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Message_Max_Order_By>;
  min?: InputMaybe<Onapp_Message_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_message" */
export type Onapp_Message_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Message_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onapp_message". All fields are combined with a logical 'AND'. */
export type Onapp_Message_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Message_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Message_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Message_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  children?: InputMaybe<Onapp_Message_Bool_Exp>;
  children_aggregate?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  createChoice?: InputMaybe<Boolean_Comparison_Exp>;
  creator?: InputMaybe<Register_Profile_Bool_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateDisplay?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateEcheance?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Onapp_Event_Bool_Exp>;
  eventShare_id?: InputMaybe<Uuid_Comparison_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isMummyDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  is_pin_for_all?: InputMaybe<Boolean_Comparison_Exp>;
  is_pin_for_me?: InputMaybe<Boolean_Comparison_Exp>;
  media?: InputMaybe<Boolean_Comparison_Exp>;
  medias?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  medias_aggregate?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp>;
  mentions?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
  mentions_aggregate?: InputMaybe<Onapp_Messagemention_Aggregate_Bool_Exp>;
  messageName?: InputMaybe<String_Comparison_Exp>;
  messageType?: InputMaybe<String_Comparison_Exp>;
  multiChoice?: InputMaybe<Boolean_Comparison_Exp>;
  mummyContent?: InputMaybe<String_Comparison_Exp>;
  mummyName?: InputMaybe<String_Comparison_Exp>;
  mummyPhoto?: InputMaybe<String_Comparison_Exp>;
  mummyVideo?: InputMaybe<Boolean_Comparison_Exp>;
  mummy_id?: InputMaybe<Uuid_Comparison_Exp>;
  notifmessages?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  notifmessages_aggregate?: InputMaybe<Onapp_Notifmessage_Aggregate_Bool_Exp>;
  on_tap_callback?: InputMaybe<String_Comparison_Exp>;
  options?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  options_aggregate?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp>;
  parent?: InputMaybe<Onapp_Message_Bool_Exp>;
  pins?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
  pins_aggregate?: InputMaybe<Onapp_Messagepin_Aggregate_Bool_Exp>;
  reactions?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
  reactions_aggregate?: InputMaybe<Onapp_Messagereaction_Aggregate_Bool_Exp>;
  shared_event?: InputMaybe<Onapp_Event_Bool_Exp>;
  updatedDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  urlDescription?: InputMaybe<String_Comparison_Exp>;
  urlFavicon?: InputMaybe<Boolean_Comparison_Exp>;
  urlImage?: InputMaybe<String_Comparison_Exp>;
  urlTitle?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_message" */
export enum Onapp_Message_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappMessagePkey = 'onapp_message_pkey'
}

/** input type for inserting data into table "onapp_message" */
export type Onapp_Message_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Onapp_Message_Arr_Rel_Insert_Input>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createChoice?: InputMaybe<Scalars['Boolean']['input']>;
  creator?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateDisplay?: InputMaybe<Scalars['timestamptz']['input']>;
  dateEcheance?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  eventShare_id?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isMummyDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_pin_for_all?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Scalars['Boolean']['input']>;
  medias?: InputMaybe<Onapp_Messagemedia_Arr_Rel_Insert_Input>;
  mentions?: InputMaybe<Onapp_Messagemention_Arr_Rel_Insert_Input>;
  messageName?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<Scalars['String']['input']>;
  multiChoice?: InputMaybe<Scalars['Boolean']['input']>;
  mummyContent?: InputMaybe<Scalars['String']['input']>;
  mummyName?: InputMaybe<Scalars['String']['input']>;
  mummyPhoto?: InputMaybe<Scalars['String']['input']>;
  mummyVideo?: InputMaybe<Scalars['Boolean']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  notifmessages?: InputMaybe<Onapp_Notifmessage_Arr_Rel_Insert_Input>;
  on_tap_callback?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Onapp_Polloption_Arr_Rel_Insert_Input>;
  parent?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  pins?: InputMaybe<Onapp_Messagepin_Arr_Rel_Insert_Input>;
  reactions?: InputMaybe<Onapp_Messagereaction_Arr_Rel_Insert_Input>;
  shared_event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlDescription?: InputMaybe<Scalars['String']['input']>;
  urlFavicon?: InputMaybe<Scalars['Boolean']['input']>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
  urlTitle?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Onapp_Message_Max_Fields = {
  __typename?: 'onapp_message_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  dateDisplay?: Maybe<Scalars['timestamptz']['output']>;
  dateEcheance?: Maybe<Scalars['timestamptz']['output']>;
  eventShare_id?: Maybe<Scalars['uuid']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  messageName?: Maybe<Scalars['String']['output']>;
  messageType?: Maybe<Scalars['String']['output']>;
  mummyContent?: Maybe<Scalars['String']['output']>;
  mummyName?: Maybe<Scalars['String']['output']>;
  mummyPhoto?: Maybe<Scalars['String']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  on_tap_callback?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlDescription?: Maybe<Scalars['String']['output']>;
  urlImage?: Maybe<Scalars['String']['output']>;
  urlTitle?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "onapp_message" */
export type Onapp_Message_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateDisplay?: InputMaybe<Order_By>;
  dateEcheance?: InputMaybe<Order_By>;
  eventShare_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messageName?: InputMaybe<Order_By>;
  messageType?: InputMaybe<Order_By>;
  mummyContent?: InputMaybe<Order_By>;
  mummyName?: InputMaybe<Order_By>;
  mummyPhoto?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  on_tap_callback?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  urlDescription?: InputMaybe<Order_By>;
  urlImage?: InputMaybe<Order_By>;
  urlTitle?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Message_Min_Fields = {
  __typename?: 'onapp_message_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  dateDisplay?: Maybe<Scalars['timestamptz']['output']>;
  dateEcheance?: Maybe<Scalars['timestamptz']['output']>;
  eventShare_id?: Maybe<Scalars['uuid']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  messageName?: Maybe<Scalars['String']['output']>;
  messageType?: Maybe<Scalars['String']['output']>;
  mummyContent?: Maybe<Scalars['String']['output']>;
  mummyName?: Maybe<Scalars['String']['output']>;
  mummyPhoto?: Maybe<Scalars['String']['output']>;
  mummy_id?: Maybe<Scalars['uuid']['output']>;
  on_tap_callback?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlDescription?: Maybe<Scalars['String']['output']>;
  urlImage?: Maybe<Scalars['String']['output']>;
  urlTitle?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "onapp_message" */
export type Onapp_Message_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateDisplay?: InputMaybe<Order_By>;
  dateEcheance?: InputMaybe<Order_By>;
  eventShare_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messageName?: InputMaybe<Order_By>;
  messageType?: InputMaybe<Order_By>;
  mummyContent?: InputMaybe<Order_By>;
  mummyName?: InputMaybe<Order_By>;
  mummyPhoto?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  on_tap_callback?: InputMaybe<Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  urlDescription?: InputMaybe<Order_By>;
  urlImage?: InputMaybe<Order_By>;
  urlTitle?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_message" */
export type Onapp_Message_Mutation_Response = {
  __typename?: 'onapp_message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Message>;
};

/** input type for inserting object relation for remote table "onapp_message" */
export type Onapp_Message_Obj_Rel_Insert_Input = {
  data: Onapp_Message_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Message_On_Conflict>;
};

/** on_conflict condition type for table "onapp_message" */
export type Onapp_Message_On_Conflict = {
  constraint: Onapp_Message_Constraint;
  update_columns?: Array<Onapp_Message_Update_Column>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_message". */
export type Onapp_Message_Order_By = {
  active?: InputMaybe<Order_By>;
  children_aggregate?: InputMaybe<Onapp_Message_Aggregate_Order_By>;
  comment?: InputMaybe<Order_By>;
  createChoice?: InputMaybe<Order_By>;
  creator?: InputMaybe<Register_Profile_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  dateDisplay?: InputMaybe<Order_By>;
  dateEcheance?: InputMaybe<Order_By>;
  event?: InputMaybe<Onapp_Event_Order_By>;
  eventShare_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isMummyDeleted?: InputMaybe<Order_By>;
  is_pin_for_all?: InputMaybe<Order_By>;
  is_pin_for_me?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  medias_aggregate?: InputMaybe<Onapp_Messagemedia_Aggregate_Order_By>;
  mentions_aggregate?: InputMaybe<Onapp_Messagemention_Aggregate_Order_By>;
  messageName?: InputMaybe<Order_By>;
  messageType?: InputMaybe<Order_By>;
  multiChoice?: InputMaybe<Order_By>;
  mummyContent?: InputMaybe<Order_By>;
  mummyName?: InputMaybe<Order_By>;
  mummyPhoto?: InputMaybe<Order_By>;
  mummyVideo?: InputMaybe<Order_By>;
  mummy_id?: InputMaybe<Order_By>;
  notifmessages_aggregate?: InputMaybe<Onapp_Notifmessage_Aggregate_Order_By>;
  on_tap_callback?: InputMaybe<Order_By>;
  options_aggregate?: InputMaybe<Onapp_Polloption_Aggregate_Order_By>;
  parent?: InputMaybe<Onapp_Message_Order_By>;
  pins_aggregate?: InputMaybe<Onapp_Messagepin_Aggregate_Order_By>;
  reactions_aggregate?: InputMaybe<Onapp_Messagereaction_Aggregate_Order_By>;
  shared_event?: InputMaybe<Onapp_Event_Order_By>;
  updatedDate?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  urlDescription?: InputMaybe<Order_By>;
  urlFavicon?: InputMaybe<Order_By>;
  urlImage?: InputMaybe<Order_By>;
  urlTitle?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_message */
export type Onapp_Message_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_message" */
export enum Onapp_Message_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreateChoice = 'createChoice',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateDisplay = 'dateDisplay',
  /** column name */
  DateEcheance = 'dateEcheance',
  /** column name */
  EventShareId = 'eventShare_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsMummyDeleted = 'isMummyDeleted',
  /** column name */
  IsPinForAll = 'is_pin_for_all',
  /** column name */
  Media = 'media',
  /** column name */
  MessageName = 'messageName',
  /** column name */
  MessageType = 'messageType',
  /** column name */
  MultiChoice = 'multiChoice',
  /** column name */
  MummyContent = 'mummyContent',
  /** column name */
  MummyName = 'mummyName',
  /** column name */
  MummyPhoto = 'mummyPhoto',
  /** column name */
  MummyVideo = 'mummyVideo',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  OnTapCallback = 'on_tap_callback',
  /** column name */
  UpdatedDate = 'updatedDate',
  /** column name */
  Url = 'url',
  /** column name */
  UrlDescription = 'urlDescription',
  /** column name */
  UrlFavicon = 'urlFavicon',
  /** column name */
  UrlImage = 'urlImage',
  /** column name */
  UrlTitle = 'urlTitle'
}

/** select "onapp_message_aggregate_bool_exp_bool_and_arguments_columns" columns of table "onapp_message" */
export enum Onapp_Message_Select_Column_Onapp_Message_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  CreateChoice = 'createChoice',
  /** column name */
  IsMummyDeleted = 'isMummyDeleted',
  /** column name */
  IsPinForAll = 'is_pin_for_all',
  /** column name */
  Media = 'media',
  /** column name */
  MultiChoice = 'multiChoice',
  /** column name */
  MummyVideo = 'mummyVideo',
  /** column name */
  UrlFavicon = 'urlFavicon'
}

/** select "onapp_message_aggregate_bool_exp_bool_or_arguments_columns" columns of table "onapp_message" */
export enum Onapp_Message_Select_Column_Onapp_Message_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  CreateChoice = 'createChoice',
  /** column name */
  IsMummyDeleted = 'isMummyDeleted',
  /** column name */
  IsPinForAll = 'is_pin_for_all',
  /** column name */
  Media = 'media',
  /** column name */
  MultiChoice = 'multiChoice',
  /** column name */
  MummyVideo = 'mummyVideo',
  /** column name */
  UrlFavicon = 'urlFavicon'
}

/** input type for updating data in table "onapp_message" */
export type Onapp_Message_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createChoice?: InputMaybe<Scalars['Boolean']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateDisplay?: InputMaybe<Scalars['timestamptz']['input']>;
  dateEcheance?: InputMaybe<Scalars['timestamptz']['input']>;
  eventShare_id?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isMummyDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_pin_for_all?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Scalars['Boolean']['input']>;
  messageName?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<Scalars['String']['input']>;
  multiChoice?: InputMaybe<Scalars['Boolean']['input']>;
  mummyContent?: InputMaybe<Scalars['String']['input']>;
  mummyName?: InputMaybe<Scalars['String']['input']>;
  mummyPhoto?: InputMaybe<Scalars['String']['input']>;
  mummyVideo?: InputMaybe<Scalars['Boolean']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  on_tap_callback?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlDescription?: InputMaybe<Scalars['String']['input']>;
  urlFavicon?: InputMaybe<Scalars['Boolean']['input']>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
  urlTitle?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "onapp_message" */
export type Onapp_Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Message_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createChoice?: InputMaybe<Scalars['Boolean']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  dateDisplay?: InputMaybe<Scalars['timestamptz']['input']>;
  dateEcheance?: InputMaybe<Scalars['timestamptz']['input']>;
  eventShare_id?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isMummyDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_pin_for_all?: InputMaybe<Scalars['Boolean']['input']>;
  media?: InputMaybe<Scalars['Boolean']['input']>;
  messageName?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<Scalars['String']['input']>;
  multiChoice?: InputMaybe<Scalars['Boolean']['input']>;
  mummyContent?: InputMaybe<Scalars['String']['input']>;
  mummyName?: InputMaybe<Scalars['String']['input']>;
  mummyPhoto?: InputMaybe<Scalars['String']['input']>;
  mummyVideo?: InputMaybe<Scalars['Boolean']['input']>;
  mummy_id?: InputMaybe<Scalars['uuid']['input']>;
  on_tap_callback?: InputMaybe<Scalars['String']['input']>;
  updatedDate?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlDescription?: InputMaybe<Scalars['String']['input']>;
  urlFavicon?: InputMaybe<Scalars['Boolean']['input']>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
  urlTitle?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "onapp_message" */
export enum Onapp_Message_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreateChoice = 'createChoice',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateDisplay = 'dateDisplay',
  /** column name */
  DateEcheance = 'dateEcheance',
  /** column name */
  EventShareId = 'eventShare_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsMummyDeleted = 'isMummyDeleted',
  /** column name */
  IsPinForAll = 'is_pin_for_all',
  /** column name */
  Media = 'media',
  /** column name */
  MessageName = 'messageName',
  /** column name */
  MessageType = 'messageType',
  /** column name */
  MultiChoice = 'multiChoice',
  /** column name */
  MummyContent = 'mummyContent',
  /** column name */
  MummyName = 'mummyName',
  /** column name */
  MummyPhoto = 'mummyPhoto',
  /** column name */
  MummyVideo = 'mummyVideo',
  /** column name */
  MummyId = 'mummy_id',
  /** column name */
  OnTapCallback = 'on_tap_callback',
  /** column name */
  UpdatedDate = 'updatedDate',
  /** column name */
  Url = 'url',
  /** column name */
  UrlDescription = 'urlDescription',
  /** column name */
  UrlFavicon = 'urlFavicon',
  /** column name */
  UrlImage = 'urlImage',
  /** column name */
  UrlTitle = 'urlTitle'
}

export type Onapp_Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Message_Set_Input>;
  where: Onapp_Message_Bool_Exp;
};

/** columns and relationships of "onapp_messagemedia" */
export type Onapp_Messagemedia = {
  __typename?: 'onapp_messagemedia';
  active: Scalars['Boolean']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  fileName?: Maybe<Scalars['String']['output']>;
  fileWeight?: Maybe<Scalars['float8']['output']>;
  id: Scalars['uuid']['output'];
  media?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  message: Onapp_Message;
  message_id: Scalars['uuid']['output'];
  thumbnailHeight?: Maybe<Scalars['float8']['output']>;
  thumbnailWidth?: Maybe<Scalars['float8']['output']>;
  type: Scalars['String']['output'];
  video: Scalars['Boolean']['output'];
  videoUrl?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "onapp_messagemedia" */
export type Onapp_Messagemedia_Aggregate = {
  __typename?: 'onapp_messagemedia_aggregate';
  aggregate?: Maybe<Onapp_Messagemedia_Aggregate_Fields>;
  nodes: Array<Onapp_Messagemedia>;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Onapp_Messagemedia_Aggregate_Bool_Exp_Var_Samp>;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Avg = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_And = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Corr = {
  arguments: Onapp_Messagemedia_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Max = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Min = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Sum = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Messagemedia_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "onapp_messagemedia" */
export type Onapp_Messagemedia_Aggregate_Fields = {
  __typename?: 'onapp_messagemedia_aggregate_fields';
  avg?: Maybe<Onapp_Messagemedia_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Messagemedia_Max_Fields>;
  min?: Maybe<Onapp_Messagemedia_Min_Fields>;
  stddev?: Maybe<Onapp_Messagemedia_Stddev_Fields>;
  stddev_pop?: Maybe<Onapp_Messagemedia_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onapp_Messagemedia_Stddev_Samp_Fields>;
  sum?: Maybe<Onapp_Messagemedia_Sum_Fields>;
  var_pop?: Maybe<Onapp_Messagemedia_Var_Pop_Fields>;
  var_samp?: Maybe<Onapp_Messagemedia_Var_Samp_Fields>;
  variance?: Maybe<Onapp_Messagemedia_Variance_Fields>;
};


/** aggregate fields of "onapp_messagemedia" */
export type Onapp_Messagemedia_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Aggregate_Order_By = {
  avg?: InputMaybe<Onapp_Messagemedia_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Messagemedia_Max_Order_By>;
  min?: InputMaybe<Onapp_Messagemedia_Min_Order_By>;
  stddev?: InputMaybe<Onapp_Messagemedia_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Onapp_Messagemedia_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Onapp_Messagemedia_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Onapp_Messagemedia_Sum_Order_By>;
  var_pop?: InputMaybe<Onapp_Messagemedia_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Onapp_Messagemedia_Var_Samp_Order_By>;
  variance?: InputMaybe<Onapp_Messagemedia_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_messagemedia" */
export type Onapp_Messagemedia_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Messagemedia_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Messagemedia_On_Conflict>;
};

/** aggregate avg on columns */
export type Onapp_Messagemedia_Avg_Fields = {
  __typename?: 'onapp_messagemedia_avg_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Avg_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onapp_messagemedia". All fields are combined with a logical 'AND'. */
export type Onapp_Messagemedia_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Messagemedia_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Messagemedia_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  fileName?: InputMaybe<String_Comparison_Exp>;
  fileWeight?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<Onapp_Message_Bool_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
  thumbnailHeight?: InputMaybe<Float8_Comparison_Exp>;
  thumbnailWidth?: InputMaybe<Float8_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  video?: InputMaybe<Boolean_Comparison_Exp>;
  videoUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappMessagemediaPkey = 'onapp_messagemedia_pkey'
}

/** input type for incrementing numeric columns in table "onapp_messagemedia" */
export type Onapp_Messagemedia_Inc_Input = {
  fileWeight?: InputMaybe<Scalars['float8']['input']>;
  thumbnailHeight?: InputMaybe<Scalars['float8']['input']>;
  thumbnailWidth?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "onapp_messagemedia" */
export type Onapp_Messagemedia_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileWeight?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  thumbnailHeight?: InputMaybe<Scalars['float8']['input']>;
  thumbnailWidth?: InputMaybe<Scalars['float8']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Onapp_Messagemedia_Max_Fields = {
  __typename?: 'onapp_messagemedia_max_fields';
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileWeight?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  thumbnailHeight?: Maybe<Scalars['float8']['output']>;
  thumbnailWidth?: Maybe<Scalars['float8']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Max_Order_By = {
  dateCreation?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileWeight?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  videoUrl?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Messagemedia_Min_Fields = {
  __typename?: 'onapp_messagemedia_min_fields';
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileWeight?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  thumbnailHeight?: Maybe<Scalars['float8']['output']>;
  thumbnailWidth?: Maybe<Scalars['float8']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Min_Order_By = {
  dateCreation?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileWeight?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  videoUrl?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_messagemedia" */
export type Onapp_Messagemedia_Mutation_Response = {
  __typename?: 'onapp_messagemedia_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Messagemedia>;
};

/** on_conflict condition type for table "onapp_messagemedia" */
export type Onapp_Messagemedia_On_Conflict = {
  constraint: Onapp_Messagemedia_Constraint;
  update_columns?: Array<Onapp_Messagemedia_Update_Column>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_messagemedia". */
export type Onapp_Messagemedia_Order_By = {
  active?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileWeight?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  message?: InputMaybe<Onapp_Message_Order_By>;
  message_id?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  video?: InputMaybe<Order_By>;
  videoUrl?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_messagemedia */
export type Onapp_Messagemedia_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  FileName = 'fileName',
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth',
  /** column name */
  Type = 'type',
  /** column name */
  Video = 'video',
  /** column name */
  VideoUrl = 'videoUrl'
}

/** select "onapp_messagemedia_aggregate_bool_exp_avg_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_bool_and_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Video = 'video'
}

/** select "onapp_messagemedia_aggregate_bool_exp_bool_or_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Video = 'video'
}

/** select "onapp_messagemedia_aggregate_bool_exp_corr_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_max_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_min_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_sum_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** select "onapp_messagemedia_aggregate_bool_exp_var_samp_arguments_columns" columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Select_Column_Onapp_Messagemedia_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth'
}

/** input type for updating data in table "onapp_messagemedia" */
export type Onapp_Messagemedia_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileWeight?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  thumbnailHeight?: InputMaybe<Scalars['float8']['input']>;
  thumbnailWidth?: InputMaybe<Scalars['float8']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Onapp_Messagemedia_Stddev_Fields = {
  __typename?: 'onapp_messagemedia_stddev_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Stddev_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onapp_Messagemedia_Stddev_Pop_Fields = {
  __typename?: 'onapp_messagemedia_stddev_pop_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Stddev_Pop_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onapp_Messagemedia_Stddev_Samp_Fields = {
  __typename?: 'onapp_messagemedia_stddev_samp_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Stddev_Samp_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "onapp_messagemedia" */
export type Onapp_Messagemedia_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Messagemedia_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Messagemedia_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileWeight?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  thumbnailHeight?: InputMaybe<Scalars['float8']['input']>;
  thumbnailWidth?: InputMaybe<Scalars['float8']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Onapp_Messagemedia_Sum_Fields = {
  __typename?: 'onapp_messagemedia_sum_fields';
  fileWeight?: Maybe<Scalars['float8']['output']>;
  thumbnailHeight?: Maybe<Scalars['float8']['output']>;
  thumbnailWidth?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Sum_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** update columns of table "onapp_messagemedia" */
export enum Onapp_Messagemedia_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  FileName = 'fileName',
  /** column name */
  FileWeight = 'fileWeight',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  ThumbnailHeight = 'thumbnailHeight',
  /** column name */
  ThumbnailWidth = 'thumbnailWidth',
  /** column name */
  Type = 'type',
  /** column name */
  Video = 'video',
  /** column name */
  VideoUrl = 'videoUrl'
}

export type Onapp_Messagemedia_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Onapp_Messagemedia_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Messagemedia_Set_Input>;
  where: Onapp_Messagemedia_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Onapp_Messagemedia_Var_Pop_Fields = {
  __typename?: 'onapp_messagemedia_var_pop_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Var_Pop_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onapp_Messagemedia_Var_Samp_Fields = {
  __typename?: 'onapp_messagemedia_var_samp_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Var_Samp_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Onapp_Messagemedia_Variance_Fields = {
  __typename?: 'onapp_messagemedia_variance_fields';
  fileWeight?: Maybe<Scalars['Float']['output']>;
  thumbnailHeight?: Maybe<Scalars['Float']['output']>;
  thumbnailWidth?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "onapp_messagemedia" */
export type Onapp_Messagemedia_Variance_Order_By = {
  fileWeight?: InputMaybe<Order_By>;
  thumbnailHeight?: InputMaybe<Order_By>;
  thumbnailWidth?: InputMaybe<Order_By>;
};

/** columns and relationships of "onapp_messagemention" */
export type Onapp_Messagemention = {
  __typename?: 'onapp_messagemention';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Onapp_Member;
  member_id: Scalars['uuid']['output'];
  /** An object relationship */
  message: Onapp_Message;
  message_id: Scalars['uuid']['output'];
};

/** aggregated selection of "onapp_messagemention" */
export type Onapp_Messagemention_Aggregate = {
  __typename?: 'onapp_messagemention_aggregate';
  aggregate?: Maybe<Onapp_Messagemention_Aggregate_Fields>;
  nodes: Array<Onapp_Messagemention>;
};

export type Onapp_Messagemention_Aggregate_Bool_Exp = {
  count?: InputMaybe<Onapp_Messagemention_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Messagemention_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_messagemention" */
export type Onapp_Messagemention_Aggregate_Fields = {
  __typename?: 'onapp_messagemention_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Messagemention_Max_Fields>;
  min?: Maybe<Onapp_Messagemention_Min_Fields>;
};


/** aggregate fields of "onapp_messagemention" */
export type Onapp_Messagemention_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_messagemention" */
export type Onapp_Messagemention_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Messagemention_Max_Order_By>;
  min?: InputMaybe<Onapp_Messagemention_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_messagemention" */
export type Onapp_Messagemention_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Messagemention_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Messagemention_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onapp_messagemention". All fields are combined with a logical 'AND'. */
export type Onapp_Messagemention_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Messagemention_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Messagemention_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<Onapp_Message_Bool_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_messagemention" */
export enum Onapp_Messagemention_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappMessagementionPkey = 'onapp_messagemention_pkey'
}

/** input type for inserting data into table "onapp_messagemention" */
export type Onapp_Messagemention_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Onapp_Messagemention_Max_Fields = {
  __typename?: 'onapp_messagemention_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "onapp_messagemention" */
export type Onapp_Messagemention_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Messagemention_Min_Fields = {
  __typename?: 'onapp_messagemention_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "onapp_messagemention" */
export type Onapp_Messagemention_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_messagemention" */
export type Onapp_Messagemention_Mutation_Response = {
  __typename?: 'onapp_messagemention_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Messagemention>;
};

/** on_conflict condition type for table "onapp_messagemention" */
export type Onapp_Messagemention_On_Conflict = {
  constraint: Onapp_Messagemention_Constraint;
  update_columns?: Array<Onapp_Messagemention_Update_Column>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_messagemention". */
export type Onapp_Messagemention_Order_By = {
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  message?: InputMaybe<Onapp_Message_Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_messagemention */
export type Onapp_Messagemention_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_messagemention" */
export enum Onapp_Messagemention_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'message_id'
}

/** input type for updating data in table "onapp_messagemention" */
export type Onapp_Messagemention_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "onapp_messagemention" */
export type Onapp_Messagemention_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Messagemention_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Messagemention_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onapp_messagemention" */
export enum Onapp_Messagemention_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'message_id'
}

export type Onapp_Messagemention_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Messagemention_Set_Input>;
  where: Onapp_Messagemention_Bool_Exp;
};

/** columns and relationships of "onapp_messagepin" */
export type Onapp_Messagepin = {
  __typename?: 'onapp_messagepin';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Onapp_Member;
  member_id: Scalars['uuid']['output'];
  /** An object relationship */
  message: Onapp_Message;
  message_id: Scalars['uuid']['output'];
};

/** aggregated selection of "onapp_messagepin" */
export type Onapp_Messagepin_Aggregate = {
  __typename?: 'onapp_messagepin_aggregate';
  aggregate?: Maybe<Onapp_Messagepin_Aggregate_Fields>;
  nodes: Array<Onapp_Messagepin>;
};

export type Onapp_Messagepin_Aggregate_Bool_Exp = {
  count?: InputMaybe<Onapp_Messagepin_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Messagepin_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_messagepin" */
export type Onapp_Messagepin_Aggregate_Fields = {
  __typename?: 'onapp_messagepin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Messagepin_Max_Fields>;
  min?: Maybe<Onapp_Messagepin_Min_Fields>;
};


/** aggregate fields of "onapp_messagepin" */
export type Onapp_Messagepin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_messagepin" */
export type Onapp_Messagepin_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Messagepin_Max_Order_By>;
  min?: InputMaybe<Onapp_Messagepin_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_messagepin" */
export type Onapp_Messagepin_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Messagepin_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Messagepin_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onapp_messagepin". All fields are combined with a logical 'AND'. */
export type Onapp_Messagepin_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Messagepin_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Messagepin_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<Onapp_Message_Bool_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_messagepin" */
export enum Onapp_Messagepin_Constraint {
  /** unique or primary key constraint on columns "member_id", "message_id" */
  OnappMessagepinMemberIdMessageIdKey = 'onapp_messagepin_member_id_message_id_key',
  /** unique or primary key constraint on columns "id" */
  OnappMessagepinPkey = 'onapp_messagepin_pkey'
}

/** input type for inserting data into table "onapp_messagepin" */
export type Onapp_Messagepin_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Onapp_Messagepin_Max_Fields = {
  __typename?: 'onapp_messagepin_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "onapp_messagepin" */
export type Onapp_Messagepin_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Messagepin_Min_Fields = {
  __typename?: 'onapp_messagepin_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "onapp_messagepin" */
export type Onapp_Messagepin_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_messagepin" */
export type Onapp_Messagepin_Mutation_Response = {
  __typename?: 'onapp_messagepin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Messagepin>;
};

/** on_conflict condition type for table "onapp_messagepin" */
export type Onapp_Messagepin_On_Conflict = {
  constraint: Onapp_Messagepin_Constraint;
  update_columns?: Array<Onapp_Messagepin_Update_Column>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_messagepin". */
export type Onapp_Messagepin_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  message?: InputMaybe<Onapp_Message_Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_messagepin */
export type Onapp_Messagepin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_messagepin" */
export enum Onapp_Messagepin_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'message_id'
}

/** input type for updating data in table "onapp_messagepin" */
export type Onapp_Messagepin_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "onapp_messagepin" */
export type Onapp_Messagepin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Messagepin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Messagepin_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onapp_messagepin" */
export enum Onapp_Messagepin_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'message_id'
}

export type Onapp_Messagepin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Messagepin_Set_Input>;
  where: Onapp_Messagepin_Bool_Exp;
};

/** columns and relationships of "onapp_messagereaction" */
export type Onapp_Messagereaction = {
  __typename?: 'onapp_messagereaction';
  created_at: Scalars['timestamptz']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Onapp_Member;
  member_id: Scalars['uuid']['output'];
  /** An object relationship */
  message: Onapp_Message;
  message_id: Scalars['uuid']['output'];
};

/** aggregated selection of "onapp_messagereaction" */
export type Onapp_Messagereaction_Aggregate = {
  __typename?: 'onapp_messagereaction_aggregate';
  aggregate?: Maybe<Onapp_Messagereaction_Aggregate_Fields>;
  nodes: Array<Onapp_Messagereaction>;
};

export type Onapp_Messagereaction_Aggregate_Bool_Exp = {
  count?: InputMaybe<Onapp_Messagereaction_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Messagereaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_messagereaction" */
export type Onapp_Messagereaction_Aggregate_Fields = {
  __typename?: 'onapp_messagereaction_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Messagereaction_Max_Fields>;
  min?: Maybe<Onapp_Messagereaction_Min_Fields>;
};


/** aggregate fields of "onapp_messagereaction" */
export type Onapp_Messagereaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_messagereaction" */
export type Onapp_Messagereaction_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Messagereaction_Max_Order_By>;
  min?: InputMaybe<Onapp_Messagereaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_messagereaction" */
export type Onapp_Messagereaction_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Messagereaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Messagereaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onapp_messagereaction". All fields are combined with a logical 'AND'. */
export type Onapp_Messagereaction_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Messagereaction_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Messagereaction_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  emoji?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<Onapp_Message_Bool_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_messagereaction" */
export enum Onapp_Messagereaction_Constraint {
  /** unique or primary key constraint on columns "member_id", "message_id" */
  OnappMessagereactionMemberIdMessageIdKey = 'onapp_messagereaction_member_id_message_id_key',
  /** unique or primary key constraint on columns "id" */
  OnappMessagereactionPkey = 'onapp_messagereaction_pkey'
}

/** input type for inserting data into table "onapp_messagereaction" */
export type Onapp_Messagereaction_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Onapp_Messagereaction_Max_Fields = {
  __typename?: 'onapp_messagereaction_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "onapp_messagereaction" */
export type Onapp_Messagereaction_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Messagereaction_Min_Fields = {
  __typename?: 'onapp_messagereaction_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "onapp_messagereaction" */
export type Onapp_Messagereaction_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_messagereaction" */
export type Onapp_Messagereaction_Mutation_Response = {
  __typename?: 'onapp_messagereaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Messagereaction>;
};

/** on_conflict condition type for table "onapp_messagereaction" */
export type Onapp_Messagereaction_On_Conflict = {
  constraint: Onapp_Messagereaction_Constraint;
  update_columns?: Array<Onapp_Messagereaction_Update_Column>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_messagereaction". */
export type Onapp_Messagereaction_Order_By = {
  created_at?: InputMaybe<Order_By>;
  emoji?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  message?: InputMaybe<Onapp_Message_Order_By>;
  message_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_messagereaction */
export type Onapp_Messagereaction_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_messagereaction" */
export enum Onapp_Messagereaction_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'message_id'
}

/** input type for updating data in table "onapp_messagereaction" */
export type Onapp_Messagereaction_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "onapp_messagereaction" */
export type Onapp_Messagereaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Messagereaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Messagereaction_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onapp_messagereaction" */
export enum Onapp_Messagereaction_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  MessageId = 'message_id'
}

export type Onapp_Messagereaction_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Messagereaction_Set_Input>;
  where: Onapp_Messagereaction_Bool_Exp;
};

/** columns and relationships of "onapp_notification" */
export type Onapp_Notification = {
  __typename?: 'onapp_notification';
  action?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Onapp_Event>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member?: Maybe<Onapp_Member>;
  seen: Scalars['Boolean']['output'];
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "onapp_notification" */
export type Onapp_Notification_Aggregate = {
  __typename?: 'onapp_notification_aggregate';
  aggregate?: Maybe<Onapp_Notification_Aggregate_Fields>;
  nodes: Array<Onapp_Notification>;
};

/** aggregate fields of "onapp_notification" */
export type Onapp_Notification_Aggregate_Fields = {
  __typename?: 'onapp_notification_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Notification_Max_Fields>;
  min?: Maybe<Onapp_Notification_Min_Fields>;
};


/** aggregate fields of "onapp_notification" */
export type Onapp_Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "onapp_notification". All fields are combined with a logical 'AND'. */
export type Onapp_Notification_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Notification_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Notification_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  company_id?: InputMaybe<Uuid_Comparison_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Onapp_Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  seen?: InputMaybe<Boolean_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_notification" */
export enum Onapp_Notification_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappNotificationPkey = 'onapp_notification_pkey'
}

/** input type for inserting data into table "onapp_notification" */
export type Onapp_Notification_Insert_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Onapp_Notification_Max_Fields = {
  __typename?: 'onapp_notification_max_fields';
  action?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Onapp_Notification_Min_Fields = {
  __typename?: 'onapp_notification_min_fields';
  action?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  company_id?: Maybe<Scalars['uuid']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "onapp_notification" */
export type Onapp_Notification_Mutation_Response = {
  __typename?: 'onapp_notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Notification>;
};

/** on_conflict condition type for table "onapp_notification" */
export type Onapp_Notification_On_Conflict = {
  constraint: Onapp_Notification_Constraint;
  update_columns?: Array<Onapp_Notification_Update_Column>;
  where?: InputMaybe<Onapp_Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_notification". */
export type Onapp_Notification_Order_By = {
  action?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  event?: InputMaybe<Onapp_Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  seen?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_notification */
export type Onapp_Notification_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_notification" */
export enum Onapp_Notification_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  Active = 'active',
  /** column name */
  Comment = 'comment',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Seen = 'seen',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "onapp_notification" */
export type Onapp_Notification_Set_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "onapp_notification" */
export type Onapp_Notification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Notification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Notification_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['uuid']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onapp_notification" */
export enum Onapp_Notification_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  Active = 'active',
  /** column name */
  Comment = 'comment',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Seen = 'seen',
  /** column name */
  UserId = 'user_id'
}

export type Onapp_Notification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Notification_Set_Input>;
  where: Onapp_Notification_Bool_Exp;
};

/** columns and relationships of "onapp_notifmessage" */
export type Onapp_Notifmessage = {
  __typename?: 'onapp_notifmessage';
  active: Scalars['Boolean']['output'];
  answered: Scalars['Boolean']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  creator: Register_Profile;
  creator_id: Scalars['uuid']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  important: Scalars['Boolean']['output'];
  /** An object relationship */
  message: Onapp_Message;
  message_id: Scalars['uuid']['output'];
  reaction?: Maybe<Scalars['String']['output']>;
  seen: Scalars['Boolean']['output'];
  /** An object relationship */
  user?: Maybe<Register_Profile>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "onapp_notifmessage" */
export type Onapp_Notifmessage_Aggregate = {
  __typename?: 'onapp_notifmessage_aggregate';
  aggregate?: Maybe<Onapp_Notifmessage_Aggregate_Fields>;
  nodes: Array<Onapp_Notifmessage>;
};

export type Onapp_Notifmessage_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Onapp_Notifmessage_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_And = {
  arguments: Onapp_Notifmessage_Select_Column_Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Onapp_Notifmessage_Select_Column_Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Onapp_Notifmessage_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_notifmessage" */
export type Onapp_Notifmessage_Aggregate_Fields = {
  __typename?: 'onapp_notifmessage_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Notifmessage_Max_Fields>;
  min?: Maybe<Onapp_Notifmessage_Min_Fields>;
};


/** aggregate fields of "onapp_notifmessage" */
export type Onapp_Notifmessage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_notifmessage" */
export type Onapp_Notifmessage_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Notifmessage_Max_Order_By>;
  min?: InputMaybe<Onapp_Notifmessage_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_notifmessage" */
export type Onapp_Notifmessage_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Notifmessage_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Notifmessage_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onapp_notifmessage". All fields are combined with a logical 'AND'. */
export type Onapp_Notifmessage_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Notifmessage_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Notifmessage_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  answered?: InputMaybe<Boolean_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<Register_Profile_Bool_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  important?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<Onapp_Message_Bool_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
  reaction?: InputMaybe<String_Comparison_Exp>;
  seen?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<Register_Profile_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_notifmessage" */
export enum Onapp_Notifmessage_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappNotifmessagePkey = 'onapp_notifmessage_pkey'
}

/** input type for inserting data into table "onapp_notifmessage" */
export type Onapp_Notifmessage_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  answered?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  important?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  reaction?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Onapp_Notifmessage_Max_Fields = {
  __typename?: 'onapp_notifmessage_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  reaction?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "onapp_notifmessage" */
export type Onapp_Notifmessage_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Notifmessage_Min_Fields = {
  __typename?: 'onapp_notifmessage_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  reaction?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "onapp_notifmessage" */
export type Onapp_Notifmessage_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_notifmessage" */
export type Onapp_Notifmessage_Mutation_Response = {
  __typename?: 'onapp_notifmessage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Notifmessage>;
};

/** on_conflict condition type for table "onapp_notifmessage" */
export type Onapp_Notifmessage_On_Conflict = {
  constraint: Onapp_Notifmessage_Constraint;
  update_columns?: Array<Onapp_Notifmessage_Update_Column>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_notifmessage". */
export type Onapp_Notifmessage_Order_By = {
  active?: InputMaybe<Order_By>;
  answered?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  creator?: InputMaybe<Register_Profile_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  important?: InputMaybe<Order_By>;
  message?: InputMaybe<Onapp_Message_Order_By>;
  message_id?: InputMaybe<Order_By>;
  reaction?: InputMaybe<Order_By>;
  seen?: InputMaybe<Order_By>;
  user?: InputMaybe<Register_Profile_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_notifmessage */
export type Onapp_Notifmessage_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_notifmessage" */
export enum Onapp_Notifmessage_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Answered = 'answered',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  Id = 'id',
  /** column name */
  Important = 'important',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  Seen = 'seen',
  /** column name */
  UserId = 'user_id'
}

/** select "onapp_notifmessage_aggregate_bool_exp_bool_and_arguments_columns" columns of table "onapp_notifmessage" */
export enum Onapp_Notifmessage_Select_Column_Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Answered = 'answered',
  /** column name */
  Important = 'important',
  /** column name */
  Seen = 'seen'
}

/** select "onapp_notifmessage_aggregate_bool_exp_bool_or_arguments_columns" columns of table "onapp_notifmessage" */
export enum Onapp_Notifmessage_Select_Column_Onapp_Notifmessage_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Answered = 'answered',
  /** column name */
  Important = 'important',
  /** column name */
  Seen = 'seen'
}

/** input type for updating data in table "onapp_notifmessage" */
export type Onapp_Notifmessage_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  answered?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  important?: InputMaybe<Scalars['Boolean']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  reaction?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "onapp_notifmessage" */
export type Onapp_Notifmessage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Notifmessage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Notifmessage_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  answered?: InputMaybe<Scalars['Boolean']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  important?: InputMaybe<Scalars['Boolean']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  reaction?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onapp_notifmessage" */
export enum Onapp_Notifmessage_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Answered = 'answered',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  Id = 'id',
  /** column name */
  Important = 'important',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  Seen = 'seen',
  /** column name */
  UserId = 'user_id'
}

export type Onapp_Notifmessage_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Notifmessage_Set_Input>;
  where: Onapp_Notifmessage_Bool_Exp;
};

/** columns and relationships of "onapp_polloption" */
export type Onapp_Polloption = {
  __typename?: 'onapp_polloption';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  creator: Onapp_Member;
  creator_id: Scalars['uuid']['output'];
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  img?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  message: Onapp_Message;
  message_id: Scalars['uuid']['output'];
  price?: Maybe<Scalars['float8']['output']>;
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  votes: Array<Onapp_Pollvote>;
  /** An aggregate relationship */
  votes_aggregate: Onapp_Pollvote_Aggregate;
};


/** columns and relationships of "onapp_polloption" */
export type Onapp_PolloptionVotesArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Pollvote_Order_By>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};


/** columns and relationships of "onapp_polloption" */
export type Onapp_PolloptionVotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Pollvote_Order_By>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};

/** aggregated selection of "onapp_polloption" */
export type Onapp_Polloption_Aggregate = {
  __typename?: 'onapp_polloption_aggregate';
  aggregate?: Maybe<Onapp_Polloption_Aggregate_Fields>;
  nodes: Array<Onapp_Polloption>;
};

export type Onapp_Polloption_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Onapp_Polloption_Aggregate_Bool_Exp_Var_Samp>;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Avg = {
  arguments: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Corr = {
  arguments: Onapp_Polloption_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Max = {
  arguments: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Min = {
  arguments: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Sum = {
  arguments: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Onapp_Polloption_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "onapp_polloption" */
export type Onapp_Polloption_Aggregate_Fields = {
  __typename?: 'onapp_polloption_aggregate_fields';
  avg?: Maybe<Onapp_Polloption_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Polloption_Max_Fields>;
  min?: Maybe<Onapp_Polloption_Min_Fields>;
  stddev?: Maybe<Onapp_Polloption_Stddev_Fields>;
  stddev_pop?: Maybe<Onapp_Polloption_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Onapp_Polloption_Stddev_Samp_Fields>;
  sum?: Maybe<Onapp_Polloption_Sum_Fields>;
  var_pop?: Maybe<Onapp_Polloption_Var_Pop_Fields>;
  var_samp?: Maybe<Onapp_Polloption_Var_Samp_Fields>;
  variance?: Maybe<Onapp_Polloption_Variance_Fields>;
};


/** aggregate fields of "onapp_polloption" */
export type Onapp_Polloption_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_polloption" */
export type Onapp_Polloption_Aggregate_Order_By = {
  avg?: InputMaybe<Onapp_Polloption_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Polloption_Max_Order_By>;
  min?: InputMaybe<Onapp_Polloption_Min_Order_By>;
  stddev?: InputMaybe<Onapp_Polloption_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Onapp_Polloption_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Onapp_Polloption_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Onapp_Polloption_Sum_Order_By>;
  var_pop?: InputMaybe<Onapp_Polloption_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Onapp_Polloption_Var_Samp_Order_By>;
  variance?: InputMaybe<Onapp_Polloption_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_polloption" */
export type Onapp_Polloption_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Polloption_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Polloption_On_Conflict>;
};

/** aggregate avg on columns */
export type Onapp_Polloption_Avg_Fields = {
  __typename?: 'onapp_polloption_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "onapp_polloption". All fields are combined with a logical 'AND'. */
export type Onapp_Polloption_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Polloption_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Polloption_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Onapp_Member_Bool_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<Onapp_Message_Bool_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  start_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  votes?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
  votes_aggregate?: InputMaybe<Onapp_Pollvote_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "onapp_polloption" */
export enum Onapp_Polloption_Constraint {
  /** unique or primary key constraint on columns "id" */
  OnappPolloptionPkey = 'onapp_polloption_pkey'
}

/** input type for incrementing numeric columns in table "onapp_polloption" */
export type Onapp_Polloption_Inc_Input = {
  price?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "onapp_polloption" */
export type Onapp_Polloption_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Onapp_Message_Obj_Rel_Insert_Input>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Onapp_Pollvote_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Onapp_Polloption_Max_Fields = {
  __typename?: 'onapp_polloption_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Polloption_Min_Fields = {
  __typename?: 'onapp_polloption_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['uuid']['output']>;
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_polloption" */
export type Onapp_Polloption_Mutation_Response = {
  __typename?: 'onapp_polloption_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Polloption>;
};

/** input type for inserting object relation for remote table "onapp_polloption" */
export type Onapp_Polloption_Obj_Rel_Insert_Input = {
  data: Onapp_Polloption_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Polloption_On_Conflict>;
};

/** on_conflict condition type for table "onapp_polloption" */
export type Onapp_Polloption_On_Conflict = {
  constraint: Onapp_Polloption_Constraint;
  update_columns?: Array<Onapp_Polloption_Update_Column>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_polloption". */
export type Onapp_Polloption_Order_By = {
  created_at?: InputMaybe<Order_By>;
  creator?: InputMaybe<Onapp_Member_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  message?: InputMaybe<Onapp_Message_Order_By>;
  message_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  votes_aggregate?: InputMaybe<Onapp_Pollvote_Aggregate_Order_By>;
};

/** primary key columns input for table: onapp_polloption */
export type Onapp_Polloption_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Price = 'price',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Text = 'text',
  /** column name */
  Url = 'url'
}

/** select "onapp_polloption_aggregate_bool_exp_avg_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_corr_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_max_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_min_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_sum_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "onapp_polloption_aggregate_bool_exp_var_samp_arguments_columns" columns of table "onapp_polloption" */
export enum Onapp_Polloption_Select_Column_Onapp_Polloption_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "onapp_polloption" */
export type Onapp_Polloption_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Onapp_Polloption_Stddev_Fields = {
  __typename?: 'onapp_polloption_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Onapp_Polloption_Stddev_Pop_Fields = {
  __typename?: 'onapp_polloption_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Onapp_Polloption_Stddev_Samp_Fields = {
  __typename?: 'onapp_polloption_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "onapp_polloption" */
export type Onapp_Polloption_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Polloption_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Polloption_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Onapp_Polloption_Sum_Fields = {
  __typename?: 'onapp_polloption_sum_fields';
  price?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "onapp_polloption" */
export enum Onapp_Polloption_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Price = 'price',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Text = 'text',
  /** column name */
  Url = 'url'
}

export type Onapp_Polloption_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Onapp_Polloption_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Polloption_Set_Input>;
  where: Onapp_Polloption_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Onapp_Polloption_Var_Pop_Fields = {
  __typename?: 'onapp_polloption_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Onapp_Polloption_Var_Samp_Fields = {
  __typename?: 'onapp_polloption_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Onapp_Polloption_Variance_Fields = {
  __typename?: 'onapp_polloption_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "onapp_polloption" */
export type Onapp_Polloption_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "onapp_pollvote" */
export type Onapp_Pollvote = {
  __typename?: 'onapp_pollvote';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Onapp_Member;
  member_id: Scalars['uuid']['output'];
  /** An object relationship */
  option: Onapp_Polloption;
  option_id: Scalars['uuid']['output'];
};

/** aggregated selection of "onapp_pollvote" */
export type Onapp_Pollvote_Aggregate = {
  __typename?: 'onapp_pollvote_aggregate';
  aggregate?: Maybe<Onapp_Pollvote_Aggregate_Fields>;
  nodes: Array<Onapp_Pollvote>;
};

export type Onapp_Pollvote_Aggregate_Bool_Exp = {
  count?: InputMaybe<Onapp_Pollvote_Aggregate_Bool_Exp_Count>;
};

export type Onapp_Pollvote_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "onapp_pollvote" */
export type Onapp_Pollvote_Aggregate_Fields = {
  __typename?: 'onapp_pollvote_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Onapp_Pollvote_Max_Fields>;
  min?: Maybe<Onapp_Pollvote_Min_Fields>;
};


/** aggregate fields of "onapp_pollvote" */
export type Onapp_Pollvote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "onapp_pollvote" */
export type Onapp_Pollvote_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Onapp_Pollvote_Max_Order_By>;
  min?: InputMaybe<Onapp_Pollvote_Min_Order_By>;
};

/** input type for inserting array relation for remote table "onapp_pollvote" */
export type Onapp_Pollvote_Arr_Rel_Insert_Input = {
  data: Array<Onapp_Pollvote_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Onapp_Pollvote_On_Conflict>;
};

/** Boolean expression to filter rows from the table "onapp_pollvote". All fields are combined with a logical 'AND'. */
export type Onapp_Pollvote_Bool_Exp = {
  _and?: InputMaybe<Array<Onapp_Pollvote_Bool_Exp>>;
  _not?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
  _or?: InputMaybe<Array<Onapp_Pollvote_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  option?: InputMaybe<Onapp_Polloption_Bool_Exp>;
  option_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "onapp_pollvote" */
export enum Onapp_Pollvote_Constraint {
  /** unique or primary key constraint on columns "member_id", "option_id" */
  OnappPollvoteMemberIdOptionIdKey = 'onapp_pollvote_member_id_option_id_key',
  /** unique or primary key constraint on columns "id" */
  OnappPollvotePkey = 'onapp_pollvote_pkey'
}

/** input type for inserting data into table "onapp_pollvote" */
export type Onapp_Pollvote_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  option?: InputMaybe<Onapp_Polloption_Obj_Rel_Insert_Input>;
  option_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Onapp_Pollvote_Max_Fields = {
  __typename?: 'onapp_pollvote_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  option_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "onapp_pollvote" */
export type Onapp_Pollvote_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Onapp_Pollvote_Min_Fields = {
  __typename?: 'onapp_pollvote_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  member_id?: Maybe<Scalars['uuid']['output']>;
  option_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "onapp_pollvote" */
export type Onapp_Pollvote_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "onapp_pollvote" */
export type Onapp_Pollvote_Mutation_Response = {
  __typename?: 'onapp_pollvote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onapp_Pollvote>;
};

/** on_conflict condition type for table "onapp_pollvote" */
export type Onapp_Pollvote_On_Conflict = {
  constraint: Onapp_Pollvote_Constraint;
  update_columns?: Array<Onapp_Pollvote_Update_Column>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};

/** Ordering options when selecting data from "onapp_pollvote". */
export type Onapp_Pollvote_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  option?: InputMaybe<Onapp_Polloption_Order_By>;
  option_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: onapp_pollvote */
export type Onapp_Pollvote_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "onapp_pollvote" */
export enum Onapp_Pollvote_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  OptionId = 'option_id'
}

/** input type for updating data in table "onapp_pollvote" */
export type Onapp_Pollvote_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  option_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "onapp_pollvote" */
export type Onapp_Pollvote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Onapp_Pollvote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Onapp_Pollvote_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  option_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onapp_pollvote" */
export enum Onapp_Pollvote_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  OptionId = 'option_id'
}

export type Onapp_Pollvote_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Onapp_Pollvote_Set_Input>;
  where: Onapp_Pollvote_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payment_provider" */
export type Payment_Provider = {
  __typename?: 'payment_provider';
  contact?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  fees: Array<Payment_Provider_Fee>;
  /** An aggregate relationship */
  fees_aggregate: Payment_Provider_Fee_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
};


/** columns and relationships of "payment_provider" */
export type Payment_ProviderFeesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Fee_Order_By>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


/** columns and relationships of "payment_provider" */
export type Payment_ProviderFees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Fee_Order_By>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


/** columns and relationships of "payment_provider" */
export type Payment_ProviderTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "payment_provider" */
export type Payment_ProviderTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "payment_provider" */
export type Payment_Provider_Aggregate = {
  __typename?: 'payment_provider_aggregate';
  aggregate?: Maybe<Payment_Provider_Aggregate_Fields>;
  nodes: Array<Payment_Provider>;
};

/** aggregate fields of "payment_provider" */
export type Payment_Provider_Aggregate_Fields = {
  __typename?: 'payment_provider_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Provider_Max_Fields>;
  min?: Maybe<Payment_Provider_Min_Fields>;
};


/** aggregate fields of "payment_provider" */
export type Payment_Provider_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Provider_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payment_provider". All fields are combined with a logical 'AND'. */
export type Payment_Provider_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Provider_Bool_Exp>>;
  _not?: InputMaybe<Payment_Provider_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Provider_Bool_Exp>>;
  contact?: InputMaybe<String_Comparison_Exp>;
  fees?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  fees_aggregate?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "payment_provider" */
export enum Payment_Provider_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentProviderPkey = 'payment_provider_pkey'
}

/** The fee that takes a payment provider on a transaction */
export type Payment_Provider_Fee = {
  __typename?: 'payment_provider_fee';
  active: Scalars['Boolean']['output'];
  amount: Scalars['float8']['output'];
  created_at: Scalars['timestamptz']['output'];
  currency: Currency_Enum;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  payment_provider: Payment_Provider;
  payment_provider_id: Scalars['uuid']['output'];
  percentage: Scalars['float8']['output'];
};

/** aggregated selection of "payment_provider_fee" */
export type Payment_Provider_Fee_Aggregate = {
  __typename?: 'payment_provider_fee_aggregate';
  aggregate?: Maybe<Payment_Provider_Fee_Aggregate_Fields>;
  nodes: Array<Payment_Provider_Fee>;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Payment_Provider_Fee_Aggregate_Bool_Exp_Var_Samp>;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Avg = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_And = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Corr = {
  arguments: Payment_Provider_Fee_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Max = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Min = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Sum = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Payment_Provider_Fee_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "payment_provider_fee" */
export type Payment_Provider_Fee_Aggregate_Fields = {
  __typename?: 'payment_provider_fee_aggregate_fields';
  avg?: Maybe<Payment_Provider_Fee_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Provider_Fee_Max_Fields>;
  min?: Maybe<Payment_Provider_Fee_Min_Fields>;
  stddev?: Maybe<Payment_Provider_Fee_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Provider_Fee_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Provider_Fee_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Provider_Fee_Sum_Fields>;
  var_pop?: Maybe<Payment_Provider_Fee_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Provider_Fee_Var_Samp_Fields>;
  variance?: Maybe<Payment_Provider_Fee_Variance_Fields>;
};


/** aggregate fields of "payment_provider_fee" */
export type Payment_Provider_Fee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "payment_provider_fee" */
export type Payment_Provider_Fee_Aggregate_Order_By = {
  avg?: InputMaybe<Payment_Provider_Fee_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Payment_Provider_Fee_Max_Order_By>;
  min?: InputMaybe<Payment_Provider_Fee_Min_Order_By>;
  stddev?: InputMaybe<Payment_Provider_Fee_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Payment_Provider_Fee_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Payment_Provider_Fee_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Payment_Provider_Fee_Sum_Order_By>;
  var_pop?: InputMaybe<Payment_Provider_Fee_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Payment_Provider_Fee_Var_Samp_Order_By>;
  variance?: InputMaybe<Payment_Provider_Fee_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment_provider_fee" */
export type Payment_Provider_Fee_Arr_Rel_Insert_Input = {
  data: Array<Payment_Provider_Fee_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_Provider_Fee_On_Conflict>;
};

/** aggregate avg on columns */
export type Payment_Provider_Fee_Avg_Fields = {
  __typename?: 'payment_provider_fee_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment_provider_fee". All fields are combined with a logical 'AND'. */
export type Payment_Provider_Fee_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Provider_Fee_Bool_Exp>>;
  _not?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Provider_Fee_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currency_Enum_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payment_provider?: InputMaybe<Payment_Provider_Bool_Exp>;
  payment_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  percentage?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_provider_fee" */
export enum Payment_Provider_Fee_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentProviderFeePkey = 'payment_provider_fee_pkey'
}

/** input type for incrementing numeric columns in table "payment_provider_fee" */
export type Payment_Provider_Fee_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "payment_provider_fee" */
export type Payment_Provider_Fee_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider?: InputMaybe<Payment_Provider_Obj_Rel_Insert_Input>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Payment_Provider_Fee_Max_Fields = {
  __typename?: 'payment_provider_fee_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_provider_id?: Maybe<Scalars['uuid']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** order by max() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Provider_Fee_Min_Fields = {
  __typename?: 'payment_provider_fee_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_provider_id?: Maybe<Scalars['uuid']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** order by min() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payment_provider_fee" */
export type Payment_Provider_Fee_Mutation_Response = {
  __typename?: 'payment_provider_fee_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Provider_Fee>;
};

/** input type for inserting object relation for remote table "payment_provider_fee" */
export type Payment_Provider_Fee_Obj_Rel_Insert_Input = {
  data: Payment_Provider_Fee_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_Provider_Fee_On_Conflict>;
};

/** on_conflict condition type for table "payment_provider_fee" */
export type Payment_Provider_Fee_On_Conflict = {
  constraint: Payment_Provider_Fee_Constraint;
  update_columns?: Array<Payment_Provider_Fee_Update_Column>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_provider_fee". */
export type Payment_Provider_Fee_Order_By = {
  active?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_provider?: InputMaybe<Payment_Provider_Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_provider_fee */
export type Payment_Provider_Fee_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentProviderId = 'payment_provider_id',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_avg_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_bool_and_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "payment_provider_fee_aggregate_bool_exp_bool_or_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "payment_provider_fee_aggregate_bool_exp_corr_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_max_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_min_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_sum_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** select "payment_provider_fee_aggregate_bool_exp_var_samp_arguments_columns" columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Select_Column_Payment_Provider_Fee_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  Percentage = 'percentage'
}

/** input type for updating data in table "payment_provider_fee" */
export type Payment_Provider_Fee_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Payment_Provider_Fee_Stddev_Fields = {
  __typename?: 'payment_provider_fee_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Provider_Fee_Stddev_Pop_Fields = {
  __typename?: 'payment_provider_fee_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Provider_Fee_Stddev_Samp_Fields = {
  __typename?: 'payment_provider_fee_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "payment_provider_fee" */
export type Payment_Provider_Fee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Provider_Fee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Provider_Fee_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount?: InputMaybe<Scalars['float8']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  percentage?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Payment_Provider_Fee_Sum_Fields = {
  __typename?: 'payment_provider_fee_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  percentage?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** update columns of table "payment_provider_fee" */
export enum Payment_Provider_Fee_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentProviderId = 'payment_provider_id',
  /** column name */
  Percentage = 'percentage'
}

export type Payment_Provider_Fee_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_Provider_Fee_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Provider_Fee_Set_Input>;
  where: Payment_Provider_Fee_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_Provider_Fee_Var_Pop_Fields = {
  __typename?: 'payment_provider_fee_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Provider_Fee_Var_Samp_Fields = {
  __typename?: 'payment_provider_fee_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Provider_Fee_Variance_Fields = {
  __typename?: 'payment_provider_fee_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "payment_provider_fee" */
export type Payment_Provider_Fee_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** input type for inserting data into table "payment_provider" */
export type Payment_Provider_Insert_Input = {
  contact?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<Payment_Provider_Fee_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payment_Provider_Max_Fields = {
  __typename?: 'payment_provider_max_fields';
  contact?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Payment_Provider_Min_Fields = {
  __typename?: 'payment_provider_min_fields';
  contact?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "payment_provider" */
export type Payment_Provider_Mutation_Response = {
  __typename?: 'payment_provider_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Provider>;
};

/** input type for inserting object relation for remote table "payment_provider" */
export type Payment_Provider_Obj_Rel_Insert_Input = {
  data: Payment_Provider_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_Provider_On_Conflict>;
};

/** on_conflict condition type for table "payment_provider" */
export type Payment_Provider_On_Conflict = {
  constraint: Payment_Provider_Constraint;
  update_columns?: Array<Payment_Provider_Update_Column>;
  where?: InputMaybe<Payment_Provider_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_provider". */
export type Payment_Provider_Order_By = {
  contact?: InputMaybe<Order_By>;
  fees_aggregate?: InputMaybe<Payment_Provider_Fee_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
};

/** primary key columns input for table: payment_provider */
export type Payment_Provider_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "payment_provider" */
export enum Payment_Provider_Select_Column {
  /** column name */
  Contact = 'contact',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "payment_provider" */
export type Payment_Provider_Set_Input = {
  contact?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "payment_provider" */
export type Payment_Provider_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Provider_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Provider_Stream_Cursor_Value_Input = {
  contact?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "payment_provider" */
export enum Payment_Provider_Update_Column {
  /** column name */
  Contact = 'contact',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Payment_Provider_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Provider_Set_Input>;
  where: Payment_Provider_Bool_Exp;
};

/** A product's price */
export type Price = {
  __typename?: 'price';
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  /** An object relationship */
  creator: Entity_Member;
  currency: Currency_Enum;
  final_price?: Maybe<Scalars['float8']['output']>;
  /** An array relationship */
  groups_discounted: Array<Price_Group_Discount>;
  /** An aggregate relationship */
  groups_discounted_aggregate: Price_Group_Discount_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  presale_date?: Maybe<Scalars['timestamptz']['output']>;
  presale_quantity?: Maybe<Scalars['Int']['output']>;
  price: Scalars['float8']['output'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['uuid']['output'];
  /** A computed field, executes function "quantity_sold" */
  quantity_sold?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  transactions: Array<Transaction_Item>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Item_Aggregate;
};


/** A product's price */
export type PriceGroups_DiscountedArgs = {
  distinct_on?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Group_Discount_Order_By>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


/** A product's price */
export type PriceGroups_Discounted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Group_Discount_Order_By>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


/** A product's price */
export type PriceTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


/** A product's price */
export type PriceTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};

/** aggregated selection of "price" */
export type Price_Aggregate = {
  __typename?: 'price_aggregate';
  aggregate?: Maybe<Price_Aggregate_Fields>;
  nodes: Array<Price>;
};

export type Price_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Price_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Price_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Price_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Price_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Price_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Price_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Price_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Price_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Price_Aggregate_Bool_Exp_Var_Samp>;
};

export type Price_Aggregate_Bool_Exp_Avg = {
  arguments: Price_Select_Column_Price_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Corr = {
  arguments: Price_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Price_Select_Column_Price_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Price_Select_Column_Price_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Price_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Price_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Price_Select_Column_Price_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Price_Select_Column_Price_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Price_Aggregate_Bool_Exp_Max = {
  arguments: Price_Select_Column_Price_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Min = {
  arguments: Price_Select_Column_Price_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Price_Select_Column_Price_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Sum = {
  arguments: Price_Select_Column_Price_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Price_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Price_Select_Column_Price_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "price" */
export type Price_Aggregate_Fields = {
  __typename?: 'price_aggregate_fields';
  avg?: Maybe<Price_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Price_Max_Fields>;
  min?: Maybe<Price_Min_Fields>;
  stddev?: Maybe<Price_Stddev_Fields>;
  stddev_pop?: Maybe<Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Price_Stddev_Samp_Fields>;
  sum?: Maybe<Price_Sum_Fields>;
  var_pop?: Maybe<Price_Var_Pop_Fields>;
  var_samp?: Maybe<Price_Var_Samp_Fields>;
  variance?: Maybe<Price_Variance_Fields>;
};


/** aggregate fields of "price" */
export type Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "price" */
export type Price_Aggregate_Order_By = {
  avg?: InputMaybe<Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Price_Max_Order_By>;
  min?: InputMaybe<Price_Min_Order_By>;
  stddev?: InputMaybe<Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Price_Sum_Order_By>;
  var_pop?: InputMaybe<Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Price_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "price" */
export type Price_Arr_Rel_Insert_Input = {
  data: Array<Price_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Price_Avg_Fields = {
  __typename?: 'price_avg_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "price" */
export type Price_Avg_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "price". All fields are combined with a logical 'AND'. */
export type Price_Bool_Exp = {
  _and?: InputMaybe<Array<Price_Bool_Exp>>;
  _not?: InputMaybe<Price_Bool_Exp>;
  _or?: InputMaybe<Array<Price_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  creator?: InputMaybe<Entity_Member_Bool_Exp>;
  currency?: InputMaybe<Currency_Enum_Comparison_Exp>;
  final_price?: InputMaybe<Float8_Comparison_Exp>;
  groups_discounted?: InputMaybe<Price_Group_Discount_Bool_Exp>;
  groups_discounted_aggregate?: InputMaybe<Price_Group_Discount_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presale_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  presale_quantity?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity_sold?: InputMaybe<Int_Comparison_Exp>;
  rank?: InputMaybe<Int_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Item_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "price" */
export enum Price_Constraint {
  /** unique or primary key constraint on columns "id" */
  PricePkey = 'price_pkey'
}

/** columns and relationships of "price_group_discount" */
export type Price_Group_Discount = {
  __typename?: 'price_group_discount';
  /** An object relationship */
  event: Onapp_Event;
  event_id: Scalars['uuid']['output'];
  /** An object relationship */
  price: Price;
  price_id: Scalars['uuid']['output'];
};

/** aggregated selection of "price_group_discount" */
export type Price_Group_Discount_Aggregate = {
  __typename?: 'price_group_discount_aggregate';
  aggregate?: Maybe<Price_Group_Discount_Aggregate_Fields>;
  nodes: Array<Price_Group_Discount>;
};

export type Price_Group_Discount_Aggregate_Bool_Exp = {
  count?: InputMaybe<Price_Group_Discount_Aggregate_Bool_Exp_Count>;
};

export type Price_Group_Discount_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Price_Group_Discount_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "price_group_discount" */
export type Price_Group_Discount_Aggregate_Fields = {
  __typename?: 'price_group_discount_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Price_Group_Discount_Max_Fields>;
  min?: Maybe<Price_Group_Discount_Min_Fields>;
};


/** aggregate fields of "price_group_discount" */
export type Price_Group_Discount_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "price_group_discount" */
export type Price_Group_Discount_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Price_Group_Discount_Max_Order_By>;
  min?: InputMaybe<Price_Group_Discount_Min_Order_By>;
};

/** input type for inserting array relation for remote table "price_group_discount" */
export type Price_Group_Discount_Arr_Rel_Insert_Input = {
  data: Array<Price_Group_Discount_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Price_Group_Discount_On_Conflict>;
};

/** Boolean expression to filter rows from the table "price_group_discount". All fields are combined with a logical 'AND'. */
export type Price_Group_Discount_Bool_Exp = {
  _and?: InputMaybe<Array<Price_Group_Discount_Bool_Exp>>;
  _not?: InputMaybe<Price_Group_Discount_Bool_Exp>;
  _or?: InputMaybe<Array<Price_Group_Discount_Bool_Exp>>;
  event?: InputMaybe<Onapp_Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Price_Bool_Exp>;
  price_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "price_group_discount" */
export enum Price_Group_Discount_Constraint {
  /** unique or primary key constraint on columns "event_id", "price_id" */
  PriceGroupDiscountPkey = 'price_group_discount_pkey'
}

/** input type for inserting data into table "price_group_discount" */
export type Price_Group_Discount_Insert_Input = {
  event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Price_Obj_Rel_Insert_Input>;
  price_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Price_Group_Discount_Max_Fields = {
  __typename?: 'price_group_discount_max_fields';
  event_id?: Maybe<Scalars['uuid']['output']>;
  price_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "price_group_discount" */
export type Price_Group_Discount_Max_Order_By = {
  event_id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Price_Group_Discount_Min_Fields = {
  __typename?: 'price_group_discount_min_fields';
  event_id?: Maybe<Scalars['uuid']['output']>;
  price_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "price_group_discount" */
export type Price_Group_Discount_Min_Order_By = {
  event_id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "price_group_discount" */
export type Price_Group_Discount_Mutation_Response = {
  __typename?: 'price_group_discount_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Price_Group_Discount>;
};

/** on_conflict condition type for table "price_group_discount" */
export type Price_Group_Discount_On_Conflict = {
  constraint: Price_Group_Discount_Constraint;
  update_columns?: Array<Price_Group_Discount_Update_Column>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};

/** Ordering options when selecting data from "price_group_discount". */
export type Price_Group_Discount_Order_By = {
  event?: InputMaybe<Onapp_Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Price_Order_By>;
  price_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: price_group_discount */
export type Price_Group_Discount_Pk_Columns_Input = {
  event_id: Scalars['uuid']['input'];
  price_id: Scalars['uuid']['input'];
};

/** select columns of table "price_group_discount" */
export enum Price_Group_Discount_Select_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  PriceId = 'price_id'
}

/** input type for updating data in table "price_group_discount" */
export type Price_Group_Discount_Set_Input = {
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  price_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "price_group_discount" */
export type Price_Group_Discount_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Price_Group_Discount_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Price_Group_Discount_Stream_Cursor_Value_Input = {
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  price_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "price_group_discount" */
export enum Price_Group_Discount_Update_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  PriceId = 'price_id'
}

export type Price_Group_Discount_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Price_Group_Discount_Set_Input>;
  where: Price_Group_Discount_Bool_Exp;
};

/** input type for incrementing numeric columns in table "price" */
export type Price_Inc_Input = {
  final_price?: InputMaybe<Scalars['float8']['input']>;
  presale_quantity?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "price" */
export type Price_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  creator?: InputMaybe<Entity_Member_Obj_Rel_Insert_Input>;
  currency?: InputMaybe<Currency_Enum>;
  final_price?: InputMaybe<Scalars['float8']['input']>;
  groups_discounted?: InputMaybe<Price_Group_Discount_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  presale_date?: InputMaybe<Scalars['timestamptz']['input']>;
  presale_quantity?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  transactions?: InputMaybe<Transaction_Item_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Price_Max_Fields = {
  __typename?: 'price_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  final_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  presale_date?: Maybe<Scalars['timestamptz']['output']>;
  presale_quantity?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "price" */
export type Price_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  final_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presale_date?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Price_Min_Fields = {
  __typename?: 'price_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  final_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  presale_date?: Maybe<Scalars['timestamptz']['output']>;
  presale_quantity?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "price" */
export type Price_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  final_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presale_date?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "price" */
export type Price_Mutation_Response = {
  __typename?: 'price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Price>;
};

/** input type for inserting object relation for remote table "price" */
export type Price_Obj_Rel_Insert_Input = {
  data: Price_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Price_On_Conflict>;
};

/** on_conflict condition type for table "price" */
export type Price_On_Conflict = {
  constraint: Price_Constraint;
  update_columns?: Array<Price_Update_Column>;
  where?: InputMaybe<Price_Bool_Exp>;
};

/** Ordering options when selecting data from "price". */
export type Price_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  creator?: InputMaybe<Entity_Member_Order_By>;
  currency?: InputMaybe<Order_By>;
  final_price?: InputMaybe<Order_By>;
  groups_discounted_aggregate?: InputMaybe<Price_Group_Discount_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presale_date?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity_sold?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Item_Aggregate_Order_By>;
};

/** primary key columns input for table: price */
export type Price_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "price" */
export enum Price_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Currency = 'currency',
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresaleDate = 'presale_date',
  /** column name */
  PresaleQuantity = 'presale_quantity',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Rank = 'rank'
}

/** select "price_aggregate_bool_exp_avg_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_corr_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_max_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_min_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_sum_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** select "price_aggregate_bool_exp_var_samp_arguments_columns" columns of table "price" */
export enum Price_Select_Column_Price_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "price" */
export type Price_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  final_price?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  presale_date?: InputMaybe<Scalars['timestamptz']['input']>;
  presale_quantity?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Price_Stddev_Fields = {
  __typename?: 'price_stddev_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "price" */
export type Price_Stddev_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Price_Stddev_Pop_Fields = {
  __typename?: 'price_stddev_pop_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "price" */
export type Price_Stddev_Pop_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Price_Stddev_Samp_Fields = {
  __typename?: 'price_stddev_samp_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "price" */
export type Price_Stddev_Samp_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "price" */
export type Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Price_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  currency?: InputMaybe<Currency_Enum>;
  final_price?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  presale_date?: InputMaybe<Scalars['timestamptz']['input']>;
  presale_quantity?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['float8']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Price_Sum_Fields = {
  __typename?: 'price_sum_fields';
  final_price?: Maybe<Scalars['float8']['output']>;
  presale_quantity?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['float8']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "price" */
export type Price_Sum_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** update columns of table "price" */
export enum Price_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Currency = 'currency',
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PresaleDate = 'presale_date',
  /** column name */
  PresaleQuantity = 'presale_quantity',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Rank = 'rank'
}

export type Price_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Price_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Price_Set_Input>;
  where: Price_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Price_Var_Pop_Fields = {
  __typename?: 'price_var_pop_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "price" */
export type Price_Var_Pop_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Price_Var_Samp_Fields = {
  __typename?: 'price_var_samp_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "price" */
export type Price_Var_Samp_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Price_Variance_Fields = {
  __typename?: 'price_variance_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  presale_quantity?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "price" */
export type Price_Variance_Order_By = {
  final_price?: InputMaybe<Order_By>;
  presale_quantity?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rank?: InputMaybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  /** An object relationship */
  creator: Entity_Member;
  description?: Maybe<Scalars['String']['output']>;
  /** End date of the validity of the product */
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  entity: Entity;
  entity_id: Scalars['uuid']['output'];
  /** An object relationship */
  event?: Maybe<Onapp_Event>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  prices: Array<Price>;
  /** An aggregate relationship */
  prices_aggregate: Price_Aggregate;
  /** Start date of the validity of the product */
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  type: Product_Type_Enum;
  updated_ad: Scalars['timestamptz']['output'];
};


/** columns and relationships of "product" */
export type ProductPricesArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductPrices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

export type Product_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Product_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>;
};

export type Product_Aggregate_Bool_Exp_Bool_And = {
  arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Product_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Max_Order_By>;
  min?: InputMaybe<Product_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  creator?: InputMaybe<Entity_Member_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity?: InputMaybe<Entity_Bool_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  event?: InputMaybe<Onapp_Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  prices?: InputMaybe<Price_Bool_Exp>;
  prices_aggregate?: InputMaybe<Price_Aggregate_Bool_Exp>;
  start_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Product_Type_Enum_Comparison_Exp>;
  updated_ad?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey'
}

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  creator?: InputMaybe<Entity_Member_Obj_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** End date of the validity of the product */
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity?: InputMaybe<Entity_Obj_Rel_Insert_Input>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Price_Arr_Rel_Insert_Input>;
  /** Start date of the validity of the product */
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Product_Type_Enum>;
  updated_ad?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** End date of the validity of the product */
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Start date of the validity of the product */
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  updated_ad?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  /** End date of the validity of the product */
  end_date?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  /** Start date of the validity of the product */
  start_date?: InputMaybe<Order_By>;
  updated_ad?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** End date of the validity of the product */
  end_date?: Maybe<Scalars['timestamptz']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Start date of the validity of the product */
  start_date?: Maybe<Scalars['timestamptz']['output']>;
  updated_ad?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  /** End date of the validity of the product */
  end_date?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  /** Start date of the validity of the product */
  start_date?: InputMaybe<Order_By>;
  updated_ad?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  creator?: InputMaybe<Entity_Member_Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  entity?: InputMaybe<Entity_Order_By>;
  entity_id?: InputMaybe<Order_By>;
  event?: InputMaybe<Onapp_Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prices_aggregate?: InputMaybe<Price_Aggregate_Order_By>;
  start_date?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_ad?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAd = 'updated_ad'
}

/** select "product_aggregate_bool_exp_bool_and_arguments_columns" columns of table "product" */
export enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "product_aggregate_bool_exp_bool_or_arguments_columns" columns of table "product" */
export enum Product_Select_Column_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** End date of the validity of the product */
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Start date of the validity of the product */
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Product_Type_Enum>;
  updated_ad?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** End date of the validity of the product */
  end_date?: InputMaybe<Scalars['timestamptz']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Start date of the validity of the product */
  start_date?: InputMaybe<Scalars['timestamptz']['input']>;
  type?: InputMaybe<Product_Type_Enum>;
  updated_ad?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "product_type" */
export type Product_Type = {
  __typename?: 'product_type';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "product_type" */
export type Product_Type_Aggregate = {
  __typename?: 'product_type_aggregate';
  aggregate?: Maybe<Product_Type_Aggregate_Fields>;
  nodes: Array<Product_Type>;
};

/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_Fields = {
  __typename?: 'product_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Type_Max_Fields>;
  min?: Maybe<Product_Type_Min_Fields>;
};


/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "product_type". All fields are combined with a logical 'AND'. */
export type Product_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Type_Bool_Exp>>;
  _not?: InputMaybe<Product_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_type" */
export enum Product_Type_Constraint {
  /** unique or primary key constraint on columns "name" */
  ProductTypePkey = 'product_type_pkey'
}

export enum Product_Type_Enum {
  /** Could be food, beverages, etc */
  Consumable = 'consumable',
  /** Event ticket product */
  Ticket = 'ticket'
}

/** Boolean expression to compare columns of type "product_type_enum". All fields are combined with logical 'AND'. */
export type Product_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Type_Enum>;
  _in?: InputMaybe<Array<Product_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Product_Type_Enum>;
  _nin?: InputMaybe<Array<Product_Type_Enum>>;
};

/** input type for inserting data into table "product_type" */
export type Product_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Type_Max_Fields = {
  __typename?: 'product_type_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Type_Min_Fields = {
  __typename?: 'product_type_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_type" */
export type Product_Type_Mutation_Response = {
  __typename?: 'product_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Type>;
};

/** on_conflict condition type for table "product_type" */
export type Product_Type_On_Conflict = {
  constraint: Product_Type_Constraint;
  update_columns?: Array<Product_Type_Update_Column>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "product_type". */
export type Product_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_type */
export type Product_Type_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "product_type" */
export enum Product_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "product_type" */
export type Product_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_type" */
export type Product_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_type" */
export enum Product_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

export type Product_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Type_Set_Input>;
  where: Product_Type_Bool_Exp;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAd = 'updated_ad'
}

export type Product_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table: "entity" */
  entity: Array<Entity>;
  /** fetch aggregated fields from the table: "entity" */
  entity_aggregate: Entity_Aggregate;
  /** fetch data from the table: "entity" using primary key columns */
  entity_by_pk?: Maybe<Entity>;
  /** fetch data from the table: "entity_fee" */
  entity_fee: Array<Entity_Fee>;
  /** fetch aggregated fields from the table: "entity_fee" */
  entity_fee_aggregate: Entity_Fee_Aggregate;
  /** fetch data from the table: "entity_fee" using primary key columns */
  entity_fee_by_pk?: Maybe<Entity_Fee>;
  /** fetch data from the table: "entity_member" */
  entity_member: Array<Entity_Member>;
  /** fetch aggregated fields from the table: "entity_member" */
  entity_member_aggregate: Entity_Member_Aggregate;
  /** fetch data from the table: "entity_member" using primary key columns */
  entity_member_by_pk?: Maybe<Entity_Member>;
  /** fetch data from the table: "entity_payment_provider" */
  entity_payment_provider: Array<Entity_Payment_Provider>;
  /** fetch aggregated fields from the table: "entity_payment_provider" */
  entity_payment_provider_aggregate: Entity_Payment_Provider_Aggregate;
  /** fetch data from the table: "entity_payment_provider" using primary key columns */
  entity_payment_provider_by_pk?: Maybe<Entity_Payment_Provider>;
  /** fetch data from the table: "entity_type" */
  entity_type: Array<Entity_Type>;
  /** fetch aggregated fields from the table: "entity_type" */
  entity_type_aggregate: Entity_Type_Aggregate;
  /** fetch data from the table: "entity_type" using primary key columns */
  entity_type_by_pk?: Maybe<Entity_Type>;
  /** fetch data from the table: "friend_status" */
  friend_status: Array<Friend_Status>;
  /** fetch aggregated fields from the table: "friend_status" */
  friend_status_aggregate: Friend_Status_Aggregate;
  /** fetch data from the table: "friend_status" using primary key columns */
  friend_status_by_pk?: Maybe<Friend_Status>;
  /** Get a transaction by id */
  getTransaction?: Maybe<GetTransactionOutput>;
  loginWithPhone?: Maybe<LoginWithPhoneOutput>;
  /** fetch data from the table: "member_ticket_scan" */
  member_ticket_scan: Array<Member_Ticket_Scan>;
  /** fetch aggregated fields from the table: "member_ticket_scan" */
  member_ticket_scan_aggregate: Member_Ticket_Scan_Aggregate;
  /** fetch data from the table: "member_ticket_scan" using primary key columns */
  member_ticket_scan_by_pk?: Maybe<Member_Ticket_Scan>;
  /** fetch data from the table: "onapp_bill" */
  onapp_bill: Array<Onapp_Bill>;
  /** fetch aggregated fields from the table: "onapp_bill" */
  onapp_bill_aggregate: Onapp_Bill_Aggregate;
  /** fetch data from the table: "onapp_bill" using primary key columns */
  onapp_bill_by_pk?: Maybe<Onapp_Bill>;
  /** fetch data from the table: "onapp_event" */
  onapp_event: Array<Onapp_Event>;
  /** fetch aggregated fields from the table: "onapp_event" */
  onapp_event_aggregate: Onapp_Event_Aggregate;
  /** fetch data from the table: "onapp_event" using primary key columns */
  onapp_event_by_pk?: Maybe<Onapp_Event>;
  /** fetch data from the table: "onapp_hasuratask" */
  onapp_hasuratask: Array<Onapp_Hasuratask>;
  /** fetch aggregated fields from the table: "onapp_hasuratask" */
  onapp_hasuratask_aggregate: Onapp_Hasuratask_Aggregate;
  /** fetch data from the table: "onapp_hasuratask" using primary key columns */
  onapp_hasuratask_by_pk?: Maybe<Onapp_Hasuratask>;
  /** fetch data from the table: "onapp_member" */
  onapp_member: Array<Onapp_Member>;
  /** fetch aggregated fields from the table: "onapp_member" */
  onapp_member_aggregate: Onapp_Member_Aggregate;
  /** fetch data from the table: "onapp_member" using primary key columns */
  onapp_member_by_pk?: Maybe<Onapp_Member>;
  /** fetch data from the table: "onapp_message" */
  onapp_message: Array<Onapp_Message>;
  /** fetch aggregated fields from the table: "onapp_message" */
  onapp_message_aggregate: Onapp_Message_Aggregate;
  /** fetch data from the table: "onapp_message" using primary key columns */
  onapp_message_by_pk?: Maybe<Onapp_Message>;
  /** fetch data from the table: "onapp_messagemedia" */
  onapp_messagemedia: Array<Onapp_Messagemedia>;
  /** fetch aggregated fields from the table: "onapp_messagemedia" */
  onapp_messagemedia_aggregate: Onapp_Messagemedia_Aggregate;
  /** fetch data from the table: "onapp_messagemedia" using primary key columns */
  onapp_messagemedia_by_pk?: Maybe<Onapp_Messagemedia>;
  /** fetch data from the table: "onapp_messagemention" */
  onapp_messagemention: Array<Onapp_Messagemention>;
  /** fetch aggregated fields from the table: "onapp_messagemention" */
  onapp_messagemention_aggregate: Onapp_Messagemention_Aggregate;
  /** fetch data from the table: "onapp_messagemention" using primary key columns */
  onapp_messagemention_by_pk?: Maybe<Onapp_Messagemention>;
  /** fetch data from the table: "onapp_messagepin" */
  onapp_messagepin: Array<Onapp_Messagepin>;
  /** fetch aggregated fields from the table: "onapp_messagepin" */
  onapp_messagepin_aggregate: Onapp_Messagepin_Aggregate;
  /** fetch data from the table: "onapp_messagepin" using primary key columns */
  onapp_messagepin_by_pk?: Maybe<Onapp_Messagepin>;
  /** fetch data from the table: "onapp_messagereaction" */
  onapp_messagereaction: Array<Onapp_Messagereaction>;
  /** fetch aggregated fields from the table: "onapp_messagereaction" */
  onapp_messagereaction_aggregate: Onapp_Messagereaction_Aggregate;
  /** fetch data from the table: "onapp_messagereaction" using primary key columns */
  onapp_messagereaction_by_pk?: Maybe<Onapp_Messagereaction>;
  /** fetch data from the table: "onapp_notification" */
  onapp_notification: Array<Onapp_Notification>;
  /** fetch aggregated fields from the table: "onapp_notification" */
  onapp_notification_aggregate: Onapp_Notification_Aggregate;
  /** fetch data from the table: "onapp_notification" using primary key columns */
  onapp_notification_by_pk?: Maybe<Onapp_Notification>;
  /** fetch data from the table: "onapp_notifmessage" */
  onapp_notifmessage: Array<Onapp_Notifmessage>;
  /** fetch aggregated fields from the table: "onapp_notifmessage" */
  onapp_notifmessage_aggregate: Onapp_Notifmessage_Aggregate;
  /** fetch data from the table: "onapp_notifmessage" using primary key columns */
  onapp_notifmessage_by_pk?: Maybe<Onapp_Notifmessage>;
  /** fetch data from the table: "onapp_polloption" */
  onapp_polloption: Array<Onapp_Polloption>;
  /** fetch aggregated fields from the table: "onapp_polloption" */
  onapp_polloption_aggregate: Onapp_Polloption_Aggregate;
  /** fetch data from the table: "onapp_polloption" using primary key columns */
  onapp_polloption_by_pk?: Maybe<Onapp_Polloption>;
  /** fetch data from the table: "onapp_pollvote" */
  onapp_pollvote: Array<Onapp_Pollvote>;
  /** fetch aggregated fields from the table: "onapp_pollvote" */
  onapp_pollvote_aggregate: Onapp_Pollvote_Aggregate;
  /** fetch data from the table: "onapp_pollvote" using primary key columns */
  onapp_pollvote_by_pk?: Maybe<Onapp_Pollvote>;
  /** fetch data from the table: "payment_provider" */
  payment_provider: Array<Payment_Provider>;
  /** fetch aggregated fields from the table: "payment_provider" */
  payment_provider_aggregate: Payment_Provider_Aggregate;
  /** fetch data from the table: "payment_provider" using primary key columns */
  payment_provider_by_pk?: Maybe<Payment_Provider>;
  /** fetch data from the table: "payment_provider_fee" */
  payment_provider_fee: Array<Payment_Provider_Fee>;
  /** fetch aggregated fields from the table: "payment_provider_fee" */
  payment_provider_fee_aggregate: Payment_Provider_Fee_Aggregate;
  /** fetch data from the table: "payment_provider_fee" using primary key columns */
  payment_provider_fee_by_pk?: Maybe<Payment_Provider_Fee>;
  /** fetch data from the table: "price" */
  price: Array<Price>;
  /** fetch aggregated fields from the table: "price" */
  price_aggregate: Price_Aggregate;
  /** fetch data from the table: "price" using primary key columns */
  price_by_pk?: Maybe<Price>;
  /** fetch data from the table: "price_group_discount" */
  price_group_discount: Array<Price_Group_Discount>;
  /** fetch aggregated fields from the table: "price_group_discount" */
  price_group_discount_aggregate: Price_Group_Discount_Aggregate;
  /** fetch data from the table: "price_group_discount" using primary key columns */
  price_group_discount_by_pk?: Maybe<Price_Group_Discount>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table: "redirect_otp" */
  redirect_otp: Array<Redirect_Otp>;
  /** fetch aggregated fields from the table: "redirect_otp" */
  redirect_otp_aggregate: Redirect_Otp_Aggregate;
  /** fetch data from the table: "redirect_otp" using primary key columns */
  redirect_otp_by_pk?: Maybe<Redirect_Otp>;
  /** fetch data from the table: "register_avatar" */
  register_avatar: Array<Register_Avatar>;
  /** fetch aggregated fields from the table: "register_avatar" */
  register_avatar_aggregate: Register_Avatar_Aggregate;
  /** fetch data from the table: "register_avatar" using primary key columns */
  register_avatar_by_pk?: Maybe<Register_Avatar>;
  /** fetch data from the table: "register_blockprofile" */
  register_blockprofile: Array<Register_Blockprofile>;
  /** fetch aggregated fields from the table: "register_blockprofile" */
  register_blockprofile_aggregate: Register_Blockprofile_Aggregate;
  /** fetch data from the table: "register_blockprofile" using primary key columns */
  register_blockprofile_by_pk?: Maybe<Register_Blockprofile>;
  /** fetch data from the table: "register_connexion" */
  register_connexion: Array<Register_Connexion>;
  /** fetch aggregated fields from the table: "register_connexion" */
  register_connexion_aggregate: Register_Connexion_Aggregate;
  /** fetch data from the table: "register_connexion" using primary key columns */
  register_connexion_by_pk?: Maybe<Register_Connexion>;
  /** fetch data from the table: "register_friendship" */
  register_friendship: Array<Register_Friendship>;
  /** fetch aggregated fields from the table: "register_friendship" */
  register_friendship_aggregate: Register_Friendship_Aggregate;
  /** fetch data from the table: "register_friendship" using primary key columns */
  register_friendship_by_pk?: Maybe<Register_Friendship>;
  /** fetch data from the table: "register_profile" */
  register_profile: Array<Register_Profile>;
  /** fetch aggregated fields from the table: "register_profile" */
  register_profile_aggregate: Register_Profile_Aggregate;
  /** fetch data from the table: "register_profile" using primary key columns */
  register_profile_by_pk?: Maybe<Register_Profile>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "task_list" */
  task_list: Array<Task_List>;
  /** fetch aggregated fields from the table: "task_list" */
  task_list_aggregate: Task_List_Aggregate;
  /** fetch data from the table: "task_list" using primary key columns */
  task_list_by_pk?: Maybe<Task_List>;
  /** fetch data from the table: "task_member" */
  task_member: Array<Task_Member>;
  /** fetch aggregated fields from the table: "task_member" */
  task_member_aggregate: Task_Member_Aggregate;
  /** fetch data from the table: "task_member" using primary key columns */
  task_member_by_pk?: Maybe<Task_Member>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_item" */
  transaction_item: Array<Transaction_Item>;
  /** fetch aggregated fields from the table: "transaction_item" */
  transaction_item_aggregate: Transaction_Item_Aggregate;
  /** fetch data from the table: "transaction_item" using primary key columns */
  transaction_item_by_pk?: Maybe<Transaction_Item>;
  /** fetch data from the table: "transaction_status" */
  transaction_status: Array<Transaction_Status>;
  /** fetch aggregated fields from the table: "transaction_status" */
  transaction_status_aggregate: Transaction_Status_Aggregate;
  /** fetch data from the table: "transaction_status" using primary key columns */
  transaction_status_by_pk?: Maybe<Transaction_Status>;
};


export type Query_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Query_RootCurrency_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootEntityArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Query_RootEntity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Query_RootEntity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEntity_FeeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Fee_Order_By>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


export type Query_RootEntity_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Fee_Order_By>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


export type Query_RootEntity_Fee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEntity_MemberArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


export type Query_RootEntity_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


export type Query_RootEntity_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEntity_Payment_ProviderArgs = {
  distinct_on?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Payment_Provider_Order_By>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


export type Query_RootEntity_Payment_Provider_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Payment_Provider_Order_By>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


export type Query_RootEntity_Payment_Provider_By_PkArgs = {
  entity_id: Scalars['uuid']['input'];
  payment_provider_id: Scalars['uuid']['input'];
};


export type Query_RootEntity_TypeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Type_Order_By>>;
  where?: InputMaybe<Entity_Type_Bool_Exp>;
};


export type Query_RootEntity_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Type_Order_By>>;
  where?: InputMaybe<Entity_Type_Bool_Exp>;
};


export type Query_RootEntity_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootFriend_StatusArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Query_RootFriend_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Query_RootFriend_Status_By_PkArgs = {
  state: Scalars['String']['input'];
};


export type Query_RootGetTransactionArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootLoginWithPhoneArgs = {
  credential: LoginWithPhoneInput;
};


export type Query_RootMember_Ticket_ScanArgs = {
  distinct_on?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Ticket_Scan_Order_By>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


export type Query_RootMember_Ticket_Scan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Ticket_Scan_Order_By>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


export type Query_RootMember_Ticket_Scan_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_BillArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Bill_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Bill_Order_By>>;
  where?: InputMaybe<Onapp_Bill_Bool_Exp>;
};


export type Query_RootOnapp_Bill_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Bill_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Bill_Order_By>>;
  where?: InputMaybe<Onapp_Bill_Bool_Exp>;
};


export type Query_RootOnapp_Bill_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_EventArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


export type Query_RootOnapp_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


export type Query_RootOnapp_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_HasurataskArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Hasuratask_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Hasuratask_Order_By>>;
  where?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
};


export type Query_RootOnapp_Hasuratask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Hasuratask_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Hasuratask_Order_By>>;
  where?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
};


export type Query_RootOnapp_Hasuratask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_MemberArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


export type Query_RootOnapp_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


export type Query_RootOnapp_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_MessageArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


export type Query_RootOnapp_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


export type Query_RootOnapp_Message_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_MessagemediaArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemedia_Order_By>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


export type Query_RootOnapp_Messagemedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemedia_Order_By>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


export type Query_RootOnapp_Messagemedia_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_MessagementionArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


export type Query_RootOnapp_Messagemention_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


export type Query_RootOnapp_Messagemention_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_MessagepinArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagepin_Order_By>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


export type Query_RootOnapp_Messagepin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagepin_Order_By>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


export type Query_RootOnapp_Messagepin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_MessagereactionArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagereaction_Order_By>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};


export type Query_RootOnapp_Messagereaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagereaction_Order_By>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};


export type Query_RootOnapp_Messagereaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_NotificationArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notification_Order_By>>;
  where?: InputMaybe<Onapp_Notification_Bool_Exp>;
};


export type Query_RootOnapp_Notification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notification_Order_By>>;
  where?: InputMaybe<Onapp_Notification_Bool_Exp>;
};


export type Query_RootOnapp_Notification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_NotifmessageArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


export type Query_RootOnapp_Notifmessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


export type Query_RootOnapp_Notifmessage_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_PolloptionArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Polloption_Order_By>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


export type Query_RootOnapp_Polloption_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Polloption_Order_By>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


export type Query_RootOnapp_Polloption_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOnapp_PollvoteArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Pollvote_Order_By>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};


export type Query_RootOnapp_Pollvote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Pollvote_Order_By>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};


export type Query_RootOnapp_Pollvote_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayment_ProviderArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Order_By>>;
  where?: InputMaybe<Payment_Provider_Bool_Exp>;
};


export type Query_RootPayment_Provider_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Order_By>>;
  where?: InputMaybe<Payment_Provider_Bool_Exp>;
};


export type Query_RootPayment_Provider_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayment_Provider_FeeArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Fee_Order_By>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


export type Query_RootPayment_Provider_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Fee_Order_By>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


export type Query_RootPayment_Provider_Fee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPriceArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


export type Query_RootPrice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


export type Query_RootPrice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrice_Group_DiscountArgs = {
  distinct_on?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Group_Discount_Order_By>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


export type Query_RootPrice_Group_Discount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Group_Discount_Order_By>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


export type Query_RootPrice_Group_Discount_By_PkArgs = {
  event_id: Scalars['uuid']['input'];
  price_id: Scalars['uuid']['input'];
};


export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Query_RootProduct_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Query_RootProduct_Type_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootRedirect_OtpArgs = {
  distinct_on?: InputMaybe<Array<Redirect_Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redirect_Otp_Order_By>>;
  where?: InputMaybe<Redirect_Otp_Bool_Exp>;
};


export type Query_RootRedirect_Otp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redirect_Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redirect_Otp_Order_By>>;
  where?: InputMaybe<Redirect_Otp_Bool_Exp>;
};


export type Query_RootRedirect_Otp_By_PkArgs = {
  otp: Scalars['Int']['input'];
  userId: Scalars['uuid']['input'];
};


export type Query_RootRegister_AvatarArgs = {
  distinct_on?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Avatar_Order_By>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


export type Query_RootRegister_Avatar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Avatar_Order_By>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


export type Query_RootRegister_Avatar_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRegister_BlockprofileArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


export type Query_RootRegister_Blockprofile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


export type Query_RootRegister_Blockprofile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRegister_ConnexionArgs = {
  distinct_on?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Connexion_Order_By>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


export type Query_RootRegister_Connexion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Connexion_Order_By>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


export type Query_RootRegister_Connexion_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRegister_FriendshipArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


export type Query_RootRegister_Friendship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


export type Query_RootRegister_Friendship_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRegister_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Register_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Profile_Order_By>>;
  where?: InputMaybe<Register_Profile_Bool_Exp>;
};


export type Query_RootRegister_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Profile_Order_By>>;
  where?: InputMaybe<Register_Profile_Bool_Exp>;
};


export type Query_RootRegister_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTask_ListArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


export type Query_RootTask_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


export type Query_RootTask_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTask_MemberArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


export type Query_RootTask_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


export type Query_RootTask_Member_By_PkArgs = {
  member_id: Scalars['uuid']['input'];
  task_id: Scalars['uuid']['input'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTransaction_ItemArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


export type Query_RootTransaction_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


export type Query_RootTransaction_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTransaction_StatusArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Status_Order_By>>;
  where?: InputMaybe<Transaction_Status_Bool_Exp>;
};


export type Query_RootTransaction_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Status_Order_By>>;
  where?: InputMaybe<Transaction_Status_Bool_Exp>;
};


export type Query_RootTransaction_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};

/** columns and relationships of "redirect_otp" */
export type Redirect_Otp = {
  __typename?: 'redirect_otp';
  otp: Scalars['Int']['output'];
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "redirect_otp" */
export type Redirect_Otp_Aggregate = {
  __typename?: 'redirect_otp_aggregate';
  aggregate?: Maybe<Redirect_Otp_Aggregate_Fields>;
  nodes: Array<Redirect_Otp>;
};

/** aggregate fields of "redirect_otp" */
export type Redirect_Otp_Aggregate_Fields = {
  __typename?: 'redirect_otp_aggregate_fields';
  avg?: Maybe<Redirect_Otp_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Redirect_Otp_Max_Fields>;
  min?: Maybe<Redirect_Otp_Min_Fields>;
  stddev?: Maybe<Redirect_Otp_Stddev_Fields>;
  stddev_pop?: Maybe<Redirect_Otp_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Redirect_Otp_Stddev_Samp_Fields>;
  sum?: Maybe<Redirect_Otp_Sum_Fields>;
  var_pop?: Maybe<Redirect_Otp_Var_Pop_Fields>;
  var_samp?: Maybe<Redirect_Otp_Var_Samp_Fields>;
  variance?: Maybe<Redirect_Otp_Variance_Fields>;
};


/** aggregate fields of "redirect_otp" */
export type Redirect_Otp_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Redirect_Otp_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Redirect_Otp_Avg_Fields = {
  __typename?: 'redirect_otp_avg_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "redirect_otp". All fields are combined with a logical 'AND'. */
export type Redirect_Otp_Bool_Exp = {
  _and?: InputMaybe<Array<Redirect_Otp_Bool_Exp>>;
  _not?: InputMaybe<Redirect_Otp_Bool_Exp>;
  _or?: InputMaybe<Array<Redirect_Otp_Bool_Exp>>;
  otp?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "redirect_otp" */
export enum Redirect_Otp_Constraint {
  /** unique or primary key constraint on columns "userId", "otp" */
  RedirectOtpPkey = 'redirect_otp_pkey'
}

/** input type for incrementing numeric columns in table "redirect_otp" */
export type Redirect_Otp_Inc_Input = {
  otp?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "redirect_otp" */
export type Redirect_Otp_Insert_Input = {
  otp?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Redirect_Otp_Max_Fields = {
  __typename?: 'redirect_otp_max_fields';
  otp?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Redirect_Otp_Min_Fields = {
  __typename?: 'redirect_otp_min_fields';
  otp?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "redirect_otp" */
export type Redirect_Otp_Mutation_Response = {
  __typename?: 'redirect_otp_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Redirect_Otp>;
};

/** on_conflict condition type for table "redirect_otp" */
export type Redirect_Otp_On_Conflict = {
  constraint: Redirect_Otp_Constraint;
  update_columns?: Array<Redirect_Otp_Update_Column>;
  where?: InputMaybe<Redirect_Otp_Bool_Exp>;
};

/** Ordering options when selecting data from "redirect_otp". */
export type Redirect_Otp_Order_By = {
  otp?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: redirect_otp */
export type Redirect_Otp_Pk_Columns_Input = {
  otp: Scalars['Int']['input'];
  userId: Scalars['uuid']['input'];
};

/** select columns of table "redirect_otp" */
export enum Redirect_Otp_Select_Column {
  /** column name */
  Otp = 'otp',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "redirect_otp" */
export type Redirect_Otp_Set_Input = {
  otp?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Redirect_Otp_Stddev_Fields = {
  __typename?: 'redirect_otp_stddev_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Redirect_Otp_Stddev_Pop_Fields = {
  __typename?: 'redirect_otp_stddev_pop_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Redirect_Otp_Stddev_Samp_Fields = {
  __typename?: 'redirect_otp_stddev_samp_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "redirect_otp" */
export type Redirect_Otp_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Redirect_Otp_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Redirect_Otp_Stream_Cursor_Value_Input = {
  otp?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Redirect_Otp_Sum_Fields = {
  __typename?: 'redirect_otp_sum_fields';
  otp?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "redirect_otp" */
export enum Redirect_Otp_Update_Column {
  /** column name */
  Otp = 'otp',
  /** column name */
  UserId = 'userId'
}

export type Redirect_Otp_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Redirect_Otp_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Redirect_Otp_Set_Input>;
  where: Redirect_Otp_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Redirect_Otp_Var_Pop_Fields = {
  __typename?: 'redirect_otp_var_pop_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Redirect_Otp_Var_Samp_Fields = {
  __typename?: 'redirect_otp_var_samp_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Redirect_Otp_Variance_Fields = {
  __typename?: 'redirect_otp_variance_fields';
  otp?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "register_avatar" */
export type Register_Avatar = {
  __typename?: 'register_avatar';
  active: Scalars['Boolean']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  img?: Maybe<Scalars['String']['output']>;
  profile_id: Scalars['uuid']['output'];
  rang: Scalars['Int']['output'];
  /** An object relationship */
  user: Register_Profile;
};

/** aggregated selection of "register_avatar" */
export type Register_Avatar_Aggregate = {
  __typename?: 'register_avatar_aggregate';
  aggregate?: Maybe<Register_Avatar_Aggregate_Fields>;
  nodes: Array<Register_Avatar>;
};

export type Register_Avatar_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Register_Avatar_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Register_Avatar_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Register_Avatar_Aggregate_Bool_Exp_Count>;
};

export type Register_Avatar_Aggregate_Bool_Exp_Bool_And = {
  arguments: Register_Avatar_Select_Column_Register_Avatar_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Avatar_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Register_Avatar_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Register_Avatar_Select_Column_Register_Avatar_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Avatar_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Register_Avatar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Avatar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "register_avatar" */
export type Register_Avatar_Aggregate_Fields = {
  __typename?: 'register_avatar_aggregate_fields';
  avg?: Maybe<Register_Avatar_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Register_Avatar_Max_Fields>;
  min?: Maybe<Register_Avatar_Min_Fields>;
  stddev?: Maybe<Register_Avatar_Stddev_Fields>;
  stddev_pop?: Maybe<Register_Avatar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Register_Avatar_Stddev_Samp_Fields>;
  sum?: Maybe<Register_Avatar_Sum_Fields>;
  var_pop?: Maybe<Register_Avatar_Var_Pop_Fields>;
  var_samp?: Maybe<Register_Avatar_Var_Samp_Fields>;
  variance?: Maybe<Register_Avatar_Variance_Fields>;
};


/** aggregate fields of "register_avatar" */
export type Register_Avatar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "register_avatar" */
export type Register_Avatar_Aggregate_Order_By = {
  avg?: InputMaybe<Register_Avatar_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Register_Avatar_Max_Order_By>;
  min?: InputMaybe<Register_Avatar_Min_Order_By>;
  stddev?: InputMaybe<Register_Avatar_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Register_Avatar_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Register_Avatar_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Register_Avatar_Sum_Order_By>;
  var_pop?: InputMaybe<Register_Avatar_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Register_Avatar_Var_Samp_Order_By>;
  variance?: InputMaybe<Register_Avatar_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "register_avatar" */
export type Register_Avatar_Arr_Rel_Insert_Input = {
  data: Array<Register_Avatar_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Register_Avatar_On_Conflict>;
};

/** aggregate avg on columns */
export type Register_Avatar_Avg_Fields = {
  __typename?: 'register_avatar_avg_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "register_avatar" */
export type Register_Avatar_Avg_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "register_avatar". All fields are combined with a logical 'AND'. */
export type Register_Avatar_Bool_Exp = {
  _and?: InputMaybe<Array<Register_Avatar_Bool_Exp>>;
  _not?: InputMaybe<Register_Avatar_Bool_Exp>;
  _or?: InputMaybe<Array<Register_Avatar_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  profile_id?: InputMaybe<Uuid_Comparison_Exp>;
  rang?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Register_Profile_Bool_Exp>;
};

/** unique or primary key constraints on table "register_avatar" */
export enum Register_Avatar_Constraint {
  /** unique or primary key constraint on columns "id" */
  RegisterAvatarPkey = 'register_avatar_pkey'
}

/** input type for incrementing numeric columns in table "register_avatar" */
export type Register_Avatar_Inc_Input = {
  rang?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "register_avatar" */
export type Register_Avatar_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  rang?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Register_Avatar_Max_Fields = {
  __typename?: 'register_avatar_max_fields';
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  rang?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "register_avatar" */
export type Register_Avatar_Max_Order_By = {
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  rang?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Register_Avatar_Min_Fields = {
  __typename?: 'register_avatar_min_fields';
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  profile_id?: Maybe<Scalars['uuid']['output']>;
  rang?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "register_avatar" */
export type Register_Avatar_Min_Order_By = {
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  rang?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "register_avatar" */
export type Register_Avatar_Mutation_Response = {
  __typename?: 'register_avatar_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Register_Avatar>;
};

/** on_conflict condition type for table "register_avatar" */
export type Register_Avatar_On_Conflict = {
  constraint: Register_Avatar_Constraint;
  update_columns?: Array<Register_Avatar_Update_Column>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};

/** Ordering options when selecting data from "register_avatar". */
export type Register_Avatar_Order_By = {
  active?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  rang?: InputMaybe<Order_By>;
  user?: InputMaybe<Register_Profile_Order_By>;
};

/** primary key columns input for table: register_avatar */
export type Register_Avatar_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "register_avatar" */
export enum Register_Avatar_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Rang = 'rang'
}

/** select "register_avatar_aggregate_bool_exp_bool_and_arguments_columns" columns of table "register_avatar" */
export enum Register_Avatar_Select_Column_Register_Avatar_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "register_avatar_aggregate_bool_exp_bool_or_arguments_columns" columns of table "register_avatar" */
export enum Register_Avatar_Select_Column_Register_Avatar_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "register_avatar" */
export type Register_Avatar_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  rang?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Register_Avatar_Stddev_Fields = {
  __typename?: 'register_avatar_stddev_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "register_avatar" */
export type Register_Avatar_Stddev_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Register_Avatar_Stddev_Pop_Fields = {
  __typename?: 'register_avatar_stddev_pop_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "register_avatar" */
export type Register_Avatar_Stddev_Pop_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Register_Avatar_Stddev_Samp_Fields = {
  __typename?: 'register_avatar_stddev_samp_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "register_avatar" */
export type Register_Avatar_Stddev_Samp_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "register_avatar" */
export type Register_Avatar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Register_Avatar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Register_Avatar_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['uuid']['input']>;
  rang?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Register_Avatar_Sum_Fields = {
  __typename?: 'register_avatar_sum_fields';
  rang?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "register_avatar" */
export type Register_Avatar_Sum_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** update columns of table "register_avatar" */
export enum Register_Avatar_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  Rang = 'rang'
}

export type Register_Avatar_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Register_Avatar_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Register_Avatar_Set_Input>;
  where: Register_Avatar_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Register_Avatar_Var_Pop_Fields = {
  __typename?: 'register_avatar_var_pop_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "register_avatar" */
export type Register_Avatar_Var_Pop_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Register_Avatar_Var_Samp_Fields = {
  __typename?: 'register_avatar_var_samp_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "register_avatar" */
export type Register_Avatar_Var_Samp_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Register_Avatar_Variance_Fields = {
  __typename?: 'register_avatar_variance_fields';
  rang?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "register_avatar" */
export type Register_Avatar_Variance_Order_By = {
  rang?: InputMaybe<Order_By>;
};

/** columns and relationships of "register_blockprofile" */
export type Register_Blockprofile = {
  __typename?: 'register_blockprofile';
  /** An object relationship */
  blockee: Register_Profile;
  blockee_id: Scalars['uuid']['output'];
  /** An object relationship */
  blocker: Register_Profile;
  blocker_id: Scalars['uuid']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "register_blockprofile" */
export type Register_Blockprofile_Aggregate = {
  __typename?: 'register_blockprofile_aggregate';
  aggregate?: Maybe<Register_Blockprofile_Aggregate_Fields>;
  nodes: Array<Register_Blockprofile>;
};

export type Register_Blockprofile_Aggregate_Bool_Exp = {
  count?: InputMaybe<Register_Blockprofile_Aggregate_Bool_Exp_Count>;
};

export type Register_Blockprofile_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Blockprofile_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "register_blockprofile" */
export type Register_Blockprofile_Aggregate_Fields = {
  __typename?: 'register_blockprofile_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Register_Blockprofile_Max_Fields>;
  min?: Maybe<Register_Blockprofile_Min_Fields>;
};


/** aggregate fields of "register_blockprofile" */
export type Register_Blockprofile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "register_blockprofile" */
export type Register_Blockprofile_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Register_Blockprofile_Max_Order_By>;
  min?: InputMaybe<Register_Blockprofile_Min_Order_By>;
};

/** input type for inserting array relation for remote table "register_blockprofile" */
export type Register_Blockprofile_Arr_Rel_Insert_Input = {
  data: Array<Register_Blockprofile_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Register_Blockprofile_On_Conflict>;
};

/** Boolean expression to filter rows from the table "register_blockprofile". All fields are combined with a logical 'AND'. */
export type Register_Blockprofile_Bool_Exp = {
  _and?: InputMaybe<Array<Register_Blockprofile_Bool_Exp>>;
  _not?: InputMaybe<Register_Blockprofile_Bool_Exp>;
  _or?: InputMaybe<Array<Register_Blockprofile_Bool_Exp>>;
  blockee?: InputMaybe<Register_Profile_Bool_Exp>;
  blockee_id?: InputMaybe<Uuid_Comparison_Exp>;
  blocker?: InputMaybe<Register_Profile_Bool_Exp>;
  blocker_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "register_blockprofile" */
export enum Register_Blockprofile_Constraint {
  /** unique or primary key constraint on columns "id" */
  RegisterBlockprofilePkey = 'register_blockprofile_pkey'
}

/** input type for inserting data into table "register_blockprofile" */
export type Register_Blockprofile_Insert_Input = {
  blockee?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  blockee_id?: InputMaybe<Scalars['uuid']['input']>;
  blocker?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  blocker_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Register_Blockprofile_Max_Fields = {
  __typename?: 'register_blockprofile_max_fields';
  blockee_id?: Maybe<Scalars['uuid']['output']>;
  blocker_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "register_blockprofile" */
export type Register_Blockprofile_Max_Order_By = {
  blockee_id?: InputMaybe<Order_By>;
  blocker_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Register_Blockprofile_Min_Fields = {
  __typename?: 'register_blockprofile_min_fields';
  blockee_id?: Maybe<Scalars['uuid']['output']>;
  blocker_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "register_blockprofile" */
export type Register_Blockprofile_Min_Order_By = {
  blockee_id?: InputMaybe<Order_By>;
  blocker_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "register_blockprofile" */
export type Register_Blockprofile_Mutation_Response = {
  __typename?: 'register_blockprofile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Register_Blockprofile>;
};

/** on_conflict condition type for table "register_blockprofile" */
export type Register_Blockprofile_On_Conflict = {
  constraint: Register_Blockprofile_Constraint;
  update_columns?: Array<Register_Blockprofile_Update_Column>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};

/** Ordering options when selecting data from "register_blockprofile". */
export type Register_Blockprofile_Order_By = {
  blockee?: InputMaybe<Register_Profile_Order_By>;
  blockee_id?: InputMaybe<Order_By>;
  blocker?: InputMaybe<Register_Profile_Order_By>;
  blocker_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: register_blockprofile */
export type Register_Blockprofile_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "register_blockprofile" */
export enum Register_Blockprofile_Select_Column {
  /** column name */
  BlockeeId = 'blockee_id',
  /** column name */
  BlockerId = 'blocker_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "register_blockprofile" */
export type Register_Blockprofile_Set_Input = {
  blockee_id?: InputMaybe<Scalars['uuid']['input']>;
  blocker_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "register_blockprofile" */
export type Register_Blockprofile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Register_Blockprofile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Register_Blockprofile_Stream_Cursor_Value_Input = {
  blockee_id?: InputMaybe<Scalars['uuid']['input']>;
  blocker_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "register_blockprofile" */
export enum Register_Blockprofile_Update_Column {
  /** column name */
  BlockeeId = 'blockee_id',
  /** column name */
  BlockerId = 'blocker_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  Id = 'id'
}

export type Register_Blockprofile_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Register_Blockprofile_Set_Input>;
  where: Register_Blockprofile_Bool_Exp;
};

/** columns and relationships of "register_connexion" */
export type Register_Connexion = {
  __typename?: 'register_connexion';
  app: Scalars['String']['output'];
  dateConnect: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  /** An object relationship */
  user?: Maybe<Register_Profile>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "register_connexion" */
export type Register_Connexion_Aggregate = {
  __typename?: 'register_connexion_aggregate';
  aggregate?: Maybe<Register_Connexion_Aggregate_Fields>;
  nodes: Array<Register_Connexion>;
};

export type Register_Connexion_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp_Var_Samp>;
};

export type Register_Connexion_Aggregate_Bool_Exp_Avg = {
  arguments: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Corr = {
  arguments: Register_Connexion_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Register_Connexion_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Register_Connexion_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Register_Connexion_Aggregate_Bool_Exp_Max = {
  arguments: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Min = {
  arguments: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Sum = {
  arguments: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Register_Connexion_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Connexion_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "register_connexion" */
export type Register_Connexion_Aggregate_Fields = {
  __typename?: 'register_connexion_aggregate_fields';
  avg?: Maybe<Register_Connexion_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Register_Connexion_Max_Fields>;
  min?: Maybe<Register_Connexion_Min_Fields>;
  stddev?: Maybe<Register_Connexion_Stddev_Fields>;
  stddev_pop?: Maybe<Register_Connexion_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Register_Connexion_Stddev_Samp_Fields>;
  sum?: Maybe<Register_Connexion_Sum_Fields>;
  var_pop?: Maybe<Register_Connexion_Var_Pop_Fields>;
  var_samp?: Maybe<Register_Connexion_Var_Samp_Fields>;
  variance?: Maybe<Register_Connexion_Variance_Fields>;
};


/** aggregate fields of "register_connexion" */
export type Register_Connexion_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "register_connexion" */
export type Register_Connexion_Aggregate_Order_By = {
  avg?: InputMaybe<Register_Connexion_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Register_Connexion_Max_Order_By>;
  min?: InputMaybe<Register_Connexion_Min_Order_By>;
  stddev?: InputMaybe<Register_Connexion_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Register_Connexion_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Register_Connexion_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Register_Connexion_Sum_Order_By>;
  var_pop?: InputMaybe<Register_Connexion_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Register_Connexion_Var_Samp_Order_By>;
  variance?: InputMaybe<Register_Connexion_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "register_connexion" */
export type Register_Connexion_Arr_Rel_Insert_Input = {
  data: Array<Register_Connexion_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Register_Connexion_On_Conflict>;
};

/** aggregate avg on columns */
export type Register_Connexion_Avg_Fields = {
  __typename?: 'register_connexion_avg_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "register_connexion" */
export type Register_Connexion_Avg_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "register_connexion". All fields are combined with a logical 'AND'. */
export type Register_Connexion_Bool_Exp = {
  _and?: InputMaybe<Array<Register_Connexion_Bool_Exp>>;
  _not?: InputMaybe<Register_Connexion_Bool_Exp>;
  _or?: InputMaybe<Array<Register_Connexion_Bool_Exp>>;
  app?: InputMaybe<String_Comparison_Exp>;
  dateConnect?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lattitude?: InputMaybe<Float8_Comparison_Exp>;
  longitude?: InputMaybe<Float8_Comparison_Exp>;
  user?: InputMaybe<Register_Profile_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "register_connexion" */
export enum Register_Connexion_Constraint {
  /** unique or primary key constraint on columns "id" */
  RegisterConnexionPkey = 'register_connexion_pkey'
}

/** input type for incrementing numeric columns in table "register_connexion" */
export type Register_Connexion_Inc_Input = {
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "register_connexion" */
export type Register_Connexion_Insert_Input = {
  app?: InputMaybe<Scalars['String']['input']>;
  dateConnect?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  user?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Register_Connexion_Max_Fields = {
  __typename?: 'register_connexion_max_fields';
  app?: Maybe<Scalars['String']['output']>;
  dateConnect?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "register_connexion" */
export type Register_Connexion_Max_Order_By = {
  app?: InputMaybe<Order_By>;
  dateConnect?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Register_Connexion_Min_Fields = {
  __typename?: 'register_connexion_min_fields';
  app?: Maybe<Scalars['String']['output']>;
  dateConnect?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "register_connexion" */
export type Register_Connexion_Min_Order_By = {
  app?: InputMaybe<Order_By>;
  dateConnect?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "register_connexion" */
export type Register_Connexion_Mutation_Response = {
  __typename?: 'register_connexion_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Register_Connexion>;
};

/** on_conflict condition type for table "register_connexion" */
export type Register_Connexion_On_Conflict = {
  constraint: Register_Connexion_Constraint;
  update_columns?: Array<Register_Connexion_Update_Column>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};

/** Ordering options when selecting data from "register_connexion". */
export type Register_Connexion_Order_By = {
  app?: InputMaybe<Order_By>;
  dateConnect?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  user?: InputMaybe<Register_Profile_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: register_connexion */
export type Register_Connexion_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "register_connexion" */
export enum Register_Connexion_Select_Column {
  /** column name */
  App = 'app',
  /** column name */
  DateConnect = 'dateConnect',
  /** column name */
  Id = 'id',
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UserId = 'user_id'
}

/** select "register_connexion_aggregate_bool_exp_avg_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_corr_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_max_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_min_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_sum_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** select "register_connexion_aggregate_bool_exp_var_samp_arguments_columns" columns of table "register_connexion" */
export enum Register_Connexion_Select_Column_Register_Connexion_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude'
}

/** input type for updating data in table "register_connexion" */
export type Register_Connexion_Set_Input = {
  app?: InputMaybe<Scalars['String']['input']>;
  dateConnect?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Register_Connexion_Stddev_Fields = {
  __typename?: 'register_connexion_stddev_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "register_connexion" */
export type Register_Connexion_Stddev_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Register_Connexion_Stddev_Pop_Fields = {
  __typename?: 'register_connexion_stddev_pop_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "register_connexion" */
export type Register_Connexion_Stddev_Pop_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Register_Connexion_Stddev_Samp_Fields = {
  __typename?: 'register_connexion_stddev_samp_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "register_connexion" */
export type Register_Connexion_Stddev_Samp_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "register_connexion" */
export type Register_Connexion_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Register_Connexion_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Register_Connexion_Stream_Cursor_Value_Input = {
  app?: InputMaybe<Scalars['String']['input']>;
  dateConnect?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Register_Connexion_Sum_Fields = {
  __typename?: 'register_connexion_sum_fields';
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "register_connexion" */
export type Register_Connexion_Sum_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** update columns of table "register_connexion" */
export enum Register_Connexion_Update_Column {
  /** column name */
  App = 'app',
  /** column name */
  DateConnect = 'dateConnect',
  /** column name */
  Id = 'id',
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UserId = 'user_id'
}

export type Register_Connexion_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Register_Connexion_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Register_Connexion_Set_Input>;
  where: Register_Connexion_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Register_Connexion_Var_Pop_Fields = {
  __typename?: 'register_connexion_var_pop_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "register_connexion" */
export type Register_Connexion_Var_Pop_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Register_Connexion_Var_Samp_Fields = {
  __typename?: 'register_connexion_var_samp_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "register_connexion" */
export type Register_Connexion_Var_Samp_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Register_Connexion_Variance_Fields = {
  __typename?: 'register_connexion_variance_fields';
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "register_connexion" */
export type Register_Connexion_Variance_Order_By = {
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
};

/** columns and relationships of "register_friendship" */
export type Register_Friendship = {
  __typename?: 'register_friendship';
  active: Scalars['Boolean']['output'];
  /** An object relationship */
  creator: Register_Profile;
  creator_id: Scalars['uuid']['output'];
  dateCreation: Scalars['timestamptz']['output'];
  /** An object relationship */
  friend: Register_Profile;
  friendLink_id?: Maybe<Scalars['uuid']['output']>;
  friend_id: Scalars['uuid']['output'];
  /** An object relationship */
  friendship?: Maybe<Register_Friendship>;
  /** An array relationship */
  friendships: Array<Register_Friendship>;
  /** An aggregate relationship */
  friendships_aggregate: Register_Friendship_Aggregate;
  id: Scalars['uuid']['output'];
  lock: Scalars['Boolean']['output'];
};


/** columns and relationships of "register_friendship" */
export type Register_FriendshipFriendshipsArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


/** columns and relationships of "register_friendship" */
export type Register_FriendshipFriendships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};

/** aggregated selection of "register_friendship" */
export type Register_Friendship_Aggregate = {
  __typename?: 'register_friendship_aggregate';
  aggregate?: Maybe<Register_Friendship_Aggregate_Fields>;
  nodes: Array<Register_Friendship>;
};

export type Register_Friendship_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Register_Friendship_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Register_Friendship_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Register_Friendship_Aggregate_Bool_Exp_Count>;
};

export type Register_Friendship_Aggregate_Bool_Exp_Bool_And = {
  arguments: Register_Friendship_Select_Column_Register_Friendship_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Friendship_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Register_Friendship_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Register_Friendship_Select_Column_Register_Friendship_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Friendship_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Register_Friendship_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Register_Friendship_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "register_friendship" */
export type Register_Friendship_Aggregate_Fields = {
  __typename?: 'register_friendship_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Register_Friendship_Max_Fields>;
  min?: Maybe<Register_Friendship_Min_Fields>;
};


/** aggregate fields of "register_friendship" */
export type Register_Friendship_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "register_friendship" */
export type Register_Friendship_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Register_Friendship_Max_Order_By>;
  min?: InputMaybe<Register_Friendship_Min_Order_By>;
};

/** input type for inserting array relation for remote table "register_friendship" */
export type Register_Friendship_Arr_Rel_Insert_Input = {
  data: Array<Register_Friendship_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Register_Friendship_On_Conflict>;
};

/** Boolean expression to filter rows from the table "register_friendship". All fields are combined with a logical 'AND'. */
export type Register_Friendship_Bool_Exp = {
  _and?: InputMaybe<Array<Register_Friendship_Bool_Exp>>;
  _not?: InputMaybe<Register_Friendship_Bool_Exp>;
  _or?: InputMaybe<Array<Register_Friendship_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  creator?: InputMaybe<Register_Profile_Bool_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  friend?: InputMaybe<Register_Profile_Bool_Exp>;
  friendLink_id?: InputMaybe<Uuid_Comparison_Exp>;
  friend_id?: InputMaybe<Uuid_Comparison_Exp>;
  friendship?: InputMaybe<Register_Friendship_Bool_Exp>;
  friendships?: InputMaybe<Register_Friendship_Bool_Exp>;
  friendships_aggregate?: InputMaybe<Register_Friendship_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lock?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "register_friendship" */
export enum Register_Friendship_Constraint {
  /** unique or primary key constraint on columns "id" */
  RegisterFriendshipPkey = 'register_friendship_pkey'
}

/** input type for inserting data into table "register_friendship" */
export type Register_Friendship_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  creator?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  friend?: InputMaybe<Register_Profile_Obj_Rel_Insert_Input>;
  friendLink_id?: InputMaybe<Scalars['uuid']['input']>;
  friend_id?: InputMaybe<Scalars['uuid']['input']>;
  friendship?: InputMaybe<Register_Friendship_Obj_Rel_Insert_Input>;
  friendships?: InputMaybe<Register_Friendship_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Register_Friendship_Max_Fields = {
  __typename?: 'register_friendship_max_fields';
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  friendLink_id?: Maybe<Scalars['uuid']['output']>;
  friend_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "register_friendship" */
export type Register_Friendship_Max_Order_By = {
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  friendLink_id?: InputMaybe<Order_By>;
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Register_Friendship_Min_Fields = {
  __typename?: 'register_friendship_min_fields';
  creator_id?: Maybe<Scalars['uuid']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  friendLink_id?: Maybe<Scalars['uuid']['output']>;
  friend_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "register_friendship" */
export type Register_Friendship_Min_Order_By = {
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  friendLink_id?: InputMaybe<Order_By>;
  friend_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "register_friendship" */
export type Register_Friendship_Mutation_Response = {
  __typename?: 'register_friendship_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Register_Friendship>;
};

/** input type for inserting object relation for remote table "register_friendship" */
export type Register_Friendship_Obj_Rel_Insert_Input = {
  data: Register_Friendship_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Register_Friendship_On_Conflict>;
};

/** on_conflict condition type for table "register_friendship" */
export type Register_Friendship_On_Conflict = {
  constraint: Register_Friendship_Constraint;
  update_columns?: Array<Register_Friendship_Update_Column>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};

/** Ordering options when selecting data from "register_friendship". */
export type Register_Friendship_Order_By = {
  active?: InputMaybe<Order_By>;
  creator?: InputMaybe<Register_Profile_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  friend?: InputMaybe<Register_Profile_Order_By>;
  friendLink_id?: InputMaybe<Order_By>;
  friend_id?: InputMaybe<Order_By>;
  friendship?: InputMaybe<Register_Friendship_Order_By>;
  friendships_aggregate?: InputMaybe<Register_Friendship_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lock?: InputMaybe<Order_By>;
};

/** primary key columns input for table: register_friendship */
export type Register_Friendship_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "register_friendship" */
export enum Register_Friendship_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  FriendLinkId = 'friendLink_id',
  /** column name */
  FriendId = 'friend_id',
  /** column name */
  Id = 'id',
  /** column name */
  Lock = 'lock'
}

/** select "register_friendship_aggregate_bool_exp_bool_and_arguments_columns" columns of table "register_friendship" */
export enum Register_Friendship_Select_Column_Register_Friendship_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Lock = 'lock'
}

/** select "register_friendship_aggregate_bool_exp_bool_or_arguments_columns" columns of table "register_friendship" */
export enum Register_Friendship_Select_Column_Register_Friendship_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Lock = 'lock'
}

/** input type for updating data in table "register_friendship" */
export type Register_Friendship_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  friendLink_id?: InputMaybe<Scalars['uuid']['input']>;
  friend_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "register_friendship" */
export type Register_Friendship_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Register_Friendship_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Register_Friendship_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  creator_id?: InputMaybe<Scalars['uuid']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  friendLink_id?: InputMaybe<Scalars['uuid']['input']>;
  friend_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** update columns of table "register_friendship" */
export enum Register_Friendship_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  FriendLinkId = 'friendLink_id',
  /** column name */
  FriendId = 'friend_id',
  /** column name */
  Id = 'id',
  /** column name */
  Lock = 'lock'
}

export type Register_Friendship_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Register_Friendship_Set_Input>;
  where: Register_Friendship_Bool_Exp;
};

/** columns and relationships of "register_profile" */
export type Register_Profile = {
  __typename?: 'register_profile';
  SMSCode?: Maybe<Scalars['Int']['output']>;
  appVersion?: Maybe<Scalars['String']['output']>;
  appleToken?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  avatars: Array<Register_Avatar>;
  /** An aggregate relationship */
  avatars_aggregate: Register_Avatar_Aggregate;
  billingAddress?: Maybe<Scalars['String']['output']>;
  billingAddressComplete?: Maybe<Scalars['String']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingRegion?: Maybe<Scalars['String']['output']>;
  billingZipCode?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  /** An array relationship */
  blocked_by: Array<Register_Blockprofile>;
  /** An aggregate relationship */
  blocked_by_aggregate: Register_Blockprofile_Aggregate;
  /** An array relationship */
  blocking: Array<Register_Blockprofile>;
  /** An aggregate relationship */
  blocking_aggregate: Register_Blockprofile_Aggregate;
  can_create_entities: Scalars['Boolean']['output'];
  confirmationPhoneAccount?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  connexions: Array<Register_Connexion>;
  /** An aggregate relationship */
  connexions_aggregate: Register_Connexion_Aggregate;
  /** An array relationship */
  created_members: Array<Onapp_Member>;
  /** An aggregate relationship */
  created_members_aggregate: Onapp_Member_Aggregate;
  dateCreation: Scalars['timestamptz']['output'];
  date_joined: Scalars['timestamptz']['output'];
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  /** An array relationship */
  entity_memberships: Array<Entity_Member>;
  /** An aggregate relationship */
  entity_memberships_aggregate: Entity_Member_Aggregate;
  /** An array relationship */
  events_administrating: Array<Onapp_Event>;
  /** An aggregate relationship */
  events_administrating_aggregate: Onapp_Event_Aggregate;
  facebookToken?: Maybe<Scalars['String']['output']>;
  firebaseId?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  /** A computed field, executes function "friend_id" */
  friend_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  friends: Array<Register_Friendship>;
  /** An aggregate relationship */
  friends_aggregate: Register_Friendship_Aggregate;
  gender: Scalars['String']['output'];
  googleToken?: Maybe<Scalars['String']['output']>;
  hasNotifsOn?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['uuid']['output'];
  img?: Maybe<Scalars['String']['output']>;
  interestedBy?: Maybe<Scalars['String']['output']>;
  is_active: Scalars['Boolean']['output'];
  is_admin: Scalars['Boolean']['output'];
  is_staff: Scalars['Boolean']['output'];
  is_superuser: Scalars['Boolean']['output'];
  languagesSpeaking?: Maybe<Scalars['String']['output']>;
  lastConnexionDate?: Maybe<Scalars['timestamptz']['output']>;
  last_login: Scalars['timestamptz']['output'];
  last_name: Scalars['String']['output'];
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  mangoCustomerId?: Maybe<Scalars['String']['output']>;
  mangoWalletId?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  memberships: Array<Onapp_Member>;
  /** An aggregate relationship */
  memberships_aggregate: Onapp_Member_Aggregate;
  /** An array relationship */
  messages: Array<Onapp_Message>;
  /** An aggregate relationship */
  messages_aggregate: Onapp_Message_Aggregate;
  newPhone?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  notifmessages: Array<Onapp_Notifmessage>;
  /** An aggregate relationship */
  notifmessages_aggregate: Onapp_Notifmessage_Aggregate;
  /** An array relationship */
  onapp_notifmessages: Array<Onapp_Notifmessage>;
  /** An aggregate relationship */
  onapp_notifmessages_aggregate: Onapp_Notifmessage_Aggregate;
  online: Scalars['Boolean']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  platformType?: Maybe<Scalars['Int']['output']>;
  pushPartnerToken?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  situation?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "state_friendship" */
  state_friendship?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  verified: Scalars['Boolean']['output'];
};


/** columns and relationships of "register_profile" */
export type Register_ProfileAvatarsArgs = {
  distinct_on?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Avatar_Order_By>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileAvatars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Avatar_Order_By>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileBlocked_ByArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileBlocked_By_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileBlockingArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileBlocking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileConnexionsArgs = {
  distinct_on?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Connexion_Order_By>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileConnexions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Connexion_Order_By>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileCreated_MembersArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileCreated_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileEntity_MembershipsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileEntity_Memberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileEvents_AdministratingArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileEvents_Administrating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileFriendsArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileFriends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileMembershipsArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileMemberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileMessagesArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileNotifmessagesArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileNotifmessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileOnapp_NotifmessagesArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


/** columns and relationships of "register_profile" */
export type Register_ProfileOnapp_Notifmessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};

/** aggregated selection of "register_profile" */
export type Register_Profile_Aggregate = {
  __typename?: 'register_profile_aggregate';
  aggregate?: Maybe<Register_Profile_Aggregate_Fields>;
  nodes: Array<Register_Profile>;
};

/** aggregate fields of "register_profile" */
export type Register_Profile_Aggregate_Fields = {
  __typename?: 'register_profile_aggregate_fields';
  avg?: Maybe<Register_Profile_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Register_Profile_Max_Fields>;
  min?: Maybe<Register_Profile_Min_Fields>;
  stddev?: Maybe<Register_Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Register_Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Register_Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Register_Profile_Sum_Fields>;
  var_pop?: Maybe<Register_Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Register_Profile_Var_Samp_Fields>;
  variance?: Maybe<Register_Profile_Variance_Fields>;
};


/** aggregate fields of "register_profile" */
export type Register_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Register_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Register_Profile_Avg_Fields = {
  __typename?: 'register_profile_avg_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "register_profile". All fields are combined with a logical 'AND'. */
export type Register_Profile_Bool_Exp = {
  SMSCode?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<Register_Profile_Bool_Exp>>;
  _not?: InputMaybe<Register_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Register_Profile_Bool_Exp>>;
  appVersion?: InputMaybe<String_Comparison_Exp>;
  appleToken?: InputMaybe<String_Comparison_Exp>;
  avatars?: InputMaybe<Register_Avatar_Bool_Exp>;
  avatars_aggregate?: InputMaybe<Register_Avatar_Aggregate_Bool_Exp>;
  billingAddress?: InputMaybe<String_Comparison_Exp>;
  billingAddressComplete?: InputMaybe<String_Comparison_Exp>;
  billingCity?: InputMaybe<String_Comparison_Exp>;
  billingCountry?: InputMaybe<String_Comparison_Exp>;
  billingRegion?: InputMaybe<String_Comparison_Exp>;
  billingZipCode?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Date_Comparison_Exp>;
  blocked_by?: InputMaybe<Register_Blockprofile_Bool_Exp>;
  blocked_by_aggregate?: InputMaybe<Register_Blockprofile_Aggregate_Bool_Exp>;
  blocking?: InputMaybe<Register_Blockprofile_Bool_Exp>;
  blocking_aggregate?: InputMaybe<Register_Blockprofile_Aggregate_Bool_Exp>;
  can_create_entities?: InputMaybe<Boolean_Comparison_Exp>;
  confirmationPhoneAccount?: InputMaybe<String_Comparison_Exp>;
  connexions?: InputMaybe<Register_Connexion_Bool_Exp>;
  connexions_aggregate?: InputMaybe<Register_Connexion_Aggregate_Bool_Exp>;
  created_members?: InputMaybe<Onapp_Member_Bool_Exp>;
  created_members_aggregate?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp>;
  dateCreation?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_joined?: InputMaybe<Timestamptz_Comparison_Exp>;
  deletedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  entity_memberships?: InputMaybe<Entity_Member_Bool_Exp>;
  entity_memberships_aggregate?: InputMaybe<Entity_Member_Aggregate_Bool_Exp>;
  events_administrating?: InputMaybe<Onapp_Event_Bool_Exp>;
  events_administrating_aggregate?: InputMaybe<Onapp_Event_Aggregate_Bool_Exp>;
  facebookToken?: InputMaybe<String_Comparison_Exp>;
  firebaseId?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  friend_id?: InputMaybe<Uuid_Comparison_Exp>;
  friends?: InputMaybe<Register_Friendship_Bool_Exp>;
  friends_aggregate?: InputMaybe<Register_Friendship_Aggregate_Bool_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  googleToken?: InputMaybe<String_Comparison_Exp>;
  hasNotifsOn?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  img?: InputMaybe<String_Comparison_Exp>;
  interestedBy?: InputMaybe<String_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_staff?: InputMaybe<Boolean_Comparison_Exp>;
  is_superuser?: InputMaybe<Boolean_Comparison_Exp>;
  languagesSpeaking?: InputMaybe<String_Comparison_Exp>;
  lastConnexionDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_login?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  lattitude?: InputMaybe<Float8_Comparison_Exp>;
  longitude?: InputMaybe<Float8_Comparison_Exp>;
  mangoCustomerId?: InputMaybe<String_Comparison_Exp>;
  mangoWalletId?: InputMaybe<String_Comparison_Exp>;
  memberships?: InputMaybe<Onapp_Member_Bool_Exp>;
  memberships_aggregate?: InputMaybe<Onapp_Member_Aggregate_Bool_Exp>;
  messages?: InputMaybe<Onapp_Message_Bool_Exp>;
  messages_aggregate?: InputMaybe<Onapp_Message_Aggregate_Bool_Exp>;
  newPhone?: InputMaybe<String_Comparison_Exp>;
  notifmessages?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  notifmessages_aggregate?: InputMaybe<Onapp_Notifmessage_Aggregate_Bool_Exp>;
  onapp_notifmessages?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
  onapp_notifmessages_aggregate?: InputMaybe<Onapp_Notifmessage_Aggregate_Bool_Exp>;
  online?: InputMaybe<Boolean_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  platformType?: InputMaybe<Int_Comparison_Exp>;
  pushPartnerToken?: InputMaybe<String_Comparison_Exp>;
  pushToken?: InputMaybe<String_Comparison_Exp>;
  situation?: InputMaybe<String_Comparison_Exp>;
  state_friendship?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "register_profile" */
export enum Register_Profile_Constraint {
  /** unique or primary key constraint on columns "email" */
  RegisterProfileEmailKey = 'register_profile_email_key',
  /** unique or primary key constraint on columns "id" */
  RegisterProfilePkey = 'register_profile_pkey',
  /** unique or primary key constraint on columns "username" */
  RegisterProfileUsernameKey = 'register_profile_username_key'
}

/** input type for incrementing numeric columns in table "register_profile" */
export type Register_Profile_Inc_Input = {
  SMSCode?: InputMaybe<Scalars['Int']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  platformType?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "register_profile" */
export type Register_Profile_Insert_Input = {
  SMSCode?: InputMaybe<Scalars['Int']['input']>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  avatars?: InputMaybe<Register_Avatar_Arr_Rel_Insert_Input>;
  billingAddress?: InputMaybe<Scalars['String']['input']>;
  billingAddressComplete?: InputMaybe<Scalars['String']['input']>;
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  billingRegion?: InputMaybe<Scalars['String']['input']>;
  billingZipCode?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  blocked_by?: InputMaybe<Register_Blockprofile_Arr_Rel_Insert_Input>;
  blocking?: InputMaybe<Register_Blockprofile_Arr_Rel_Insert_Input>;
  can_create_entities?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationPhoneAccount?: InputMaybe<Scalars['String']['input']>;
  connexions?: InputMaybe<Register_Connexion_Arr_Rel_Insert_Input>;
  created_members?: InputMaybe<Onapp_Member_Arr_Rel_Insert_Input>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  date_joined?: InputMaybe<Scalars['timestamptz']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_memberships?: InputMaybe<Entity_Member_Arr_Rel_Insert_Input>;
  events_administrating?: InputMaybe<Onapp_Event_Arr_Rel_Insert_Input>;
  facebookToken?: InputMaybe<Scalars['String']['input']>;
  firebaseId?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  friends?: InputMaybe<Register_Friendship_Arr_Rel_Insert_Input>;
  gender?: InputMaybe<Scalars['String']['input']>;
  googleToken?: InputMaybe<Scalars['String']['input']>;
  hasNotifsOn?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  interestedBy?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  languagesSpeaking?: InputMaybe<Scalars['String']['input']>;
  lastConnexionDate?: InputMaybe<Scalars['timestamptz']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  mangoCustomerId?: InputMaybe<Scalars['String']['input']>;
  mangoWalletId?: InputMaybe<Scalars['String']['input']>;
  memberships?: InputMaybe<Onapp_Member_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Onapp_Message_Arr_Rel_Insert_Input>;
  newPhone?: InputMaybe<Scalars['String']['input']>;
  notifmessages?: InputMaybe<Onapp_Notifmessage_Arr_Rel_Insert_Input>;
  onapp_notifmessages?: InputMaybe<Onapp_Notifmessage_Arr_Rel_Insert_Input>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platformType?: InputMaybe<Scalars['Int']['input']>;
  pushPartnerToken?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  situation?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Register_Profile_Max_Fields = {
  __typename?: 'register_profile_max_fields';
  SMSCode?: Maybe<Scalars['Int']['output']>;
  appVersion?: Maybe<Scalars['String']['output']>;
  appleToken?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Scalars['String']['output']>;
  billingAddressComplete?: Maybe<Scalars['String']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingRegion?: Maybe<Scalars['String']['output']>;
  billingZipCode?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  confirmationPhoneAccount?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  date_joined?: Maybe<Scalars['timestamptz']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookToken?: Maybe<Scalars['String']['output']>;
  firebaseId?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  googleToken?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  interestedBy?: Maybe<Scalars['String']['output']>;
  languagesSpeaking?: Maybe<Scalars['String']['output']>;
  lastConnexionDate?: Maybe<Scalars['timestamptz']['output']>;
  last_login?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  mangoCustomerId?: Maybe<Scalars['String']['output']>;
  mangoWalletId?: Maybe<Scalars['String']['output']>;
  newPhone?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  platformType?: Maybe<Scalars['Int']['output']>;
  pushPartnerToken?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  situation?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Register_Profile_Min_Fields = {
  __typename?: 'register_profile_min_fields';
  SMSCode?: Maybe<Scalars['Int']['output']>;
  appVersion?: Maybe<Scalars['String']['output']>;
  appleToken?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Scalars['String']['output']>;
  billingAddressComplete?: Maybe<Scalars['String']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Scalars['String']['output']>;
  billingRegion?: Maybe<Scalars['String']['output']>;
  billingZipCode?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  confirmationPhoneAccount?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['timestamptz']['output']>;
  date_joined?: Maybe<Scalars['timestamptz']['output']>;
  deletedAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookToken?: Maybe<Scalars['String']['output']>;
  firebaseId?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  googleToken?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  img?: Maybe<Scalars['String']['output']>;
  interestedBy?: Maybe<Scalars['String']['output']>;
  languagesSpeaking?: Maybe<Scalars['String']['output']>;
  lastConnexionDate?: Maybe<Scalars['timestamptz']['output']>;
  last_login?: Maybe<Scalars['timestamptz']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  mangoCustomerId?: Maybe<Scalars['String']['output']>;
  mangoWalletId?: Maybe<Scalars['String']['output']>;
  newPhone?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  platformType?: Maybe<Scalars['Int']['output']>;
  pushPartnerToken?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  situation?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "register_profile" */
export type Register_Profile_Mutation_Response = {
  __typename?: 'register_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Register_Profile>;
};

/** input type for inserting object relation for remote table "register_profile" */
export type Register_Profile_Obj_Rel_Insert_Input = {
  data: Register_Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Register_Profile_On_Conflict>;
};

/** on_conflict condition type for table "register_profile" */
export type Register_Profile_On_Conflict = {
  constraint: Register_Profile_Constraint;
  update_columns?: Array<Register_Profile_Update_Column>;
  where?: InputMaybe<Register_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "register_profile". */
export type Register_Profile_Order_By = {
  SMSCode?: InputMaybe<Order_By>;
  appVersion?: InputMaybe<Order_By>;
  appleToken?: InputMaybe<Order_By>;
  avatars_aggregate?: InputMaybe<Register_Avatar_Aggregate_Order_By>;
  billingAddress?: InputMaybe<Order_By>;
  billingAddressComplete?: InputMaybe<Order_By>;
  billingCity?: InputMaybe<Order_By>;
  billingCountry?: InputMaybe<Order_By>;
  billingRegion?: InputMaybe<Order_By>;
  billingZipCode?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  blocked_by_aggregate?: InputMaybe<Register_Blockprofile_Aggregate_Order_By>;
  blocking_aggregate?: InputMaybe<Register_Blockprofile_Aggregate_Order_By>;
  can_create_entities?: InputMaybe<Order_By>;
  confirmationPhoneAccount?: InputMaybe<Order_By>;
  connexions_aggregate?: InputMaybe<Register_Connexion_Aggregate_Order_By>;
  created_members_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  dateCreation?: InputMaybe<Order_By>;
  date_joined?: InputMaybe<Order_By>;
  deletedAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entity_memberships_aggregate?: InputMaybe<Entity_Member_Aggregate_Order_By>;
  events_administrating_aggregate?: InputMaybe<Onapp_Event_Aggregate_Order_By>;
  facebookToken?: InputMaybe<Order_By>;
  firebaseId?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  friend_id?: InputMaybe<Order_By>;
  friends_aggregate?: InputMaybe<Register_Friendship_Aggregate_Order_By>;
  gender?: InputMaybe<Order_By>;
  googleToken?: InputMaybe<Order_By>;
  hasNotifsOn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img?: InputMaybe<Order_By>;
  interestedBy?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  is_staff?: InputMaybe<Order_By>;
  is_superuser?: InputMaybe<Order_By>;
  languagesSpeaking?: InputMaybe<Order_By>;
  lastConnexionDate?: InputMaybe<Order_By>;
  last_login?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  lattitude?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  mangoCustomerId?: InputMaybe<Order_By>;
  mangoWalletId?: InputMaybe<Order_By>;
  memberships_aggregate?: InputMaybe<Onapp_Member_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Onapp_Message_Aggregate_Order_By>;
  newPhone?: InputMaybe<Order_By>;
  notifmessages_aggregate?: InputMaybe<Onapp_Notifmessage_Aggregate_Order_By>;
  onapp_notifmessages_aggregate?: InputMaybe<Onapp_Notifmessage_Aggregate_Order_By>;
  online?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  platformType?: InputMaybe<Order_By>;
  pushPartnerToken?: InputMaybe<Order_By>;
  pushToken?: InputMaybe<Order_By>;
  situation?: InputMaybe<Order_By>;
  state_friendship?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: register_profile */
export type Register_Profile_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "register_profile" */
export enum Register_Profile_Select_Column {
  /** column name */
  SmsCode = 'SMSCode',
  /** column name */
  AppVersion = 'appVersion',
  /** column name */
  AppleToken = 'appleToken',
  /** column name */
  BillingAddress = 'billingAddress',
  /** column name */
  BillingAddressComplete = 'billingAddressComplete',
  /** column name */
  BillingCity = 'billingCity',
  /** column name */
  BillingCountry = 'billingCountry',
  /** column name */
  BillingRegion = 'billingRegion',
  /** column name */
  BillingZipCode = 'billingZipCode',
  /** column name */
  Bio = 'bio',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CanCreateEntities = 'can_create_entities',
  /** column name */
  ConfirmationPhoneAccount = 'confirmationPhoneAccount',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateJoined = 'date_joined',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Email = 'email',
  /** column name */
  FacebookToken = 'facebookToken',
  /** column name */
  FirebaseId = 'firebaseId',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  GoogleToken = 'googleToken',
  /** column name */
  HasNotifsOn = 'hasNotifsOn',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  InterestedBy = 'interestedBy',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  IsSuperuser = 'is_superuser',
  /** column name */
  LanguagesSpeaking = 'languagesSpeaking',
  /** column name */
  LastConnexionDate = 'lastConnexionDate',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MangoCustomerId = 'mangoCustomerId',
  /** column name */
  MangoWalletId = 'mangoWalletId',
  /** column name */
  NewPhone = 'newPhone',
  /** column name */
  Online = 'online',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  PlatformType = 'platformType',
  /** column name */
  PushPartnerToken = 'pushPartnerToken',
  /** column name */
  PushToken = 'pushToken',
  /** column name */
  Situation = 'situation',
  /** column name */
  Username = 'username',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "register_profile" */
export type Register_Profile_Set_Input = {
  SMSCode?: InputMaybe<Scalars['Int']['input']>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<Scalars['String']['input']>;
  billingAddressComplete?: InputMaybe<Scalars['String']['input']>;
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  billingRegion?: InputMaybe<Scalars['String']['input']>;
  billingZipCode?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  can_create_entities?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationPhoneAccount?: InputMaybe<Scalars['String']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  date_joined?: InputMaybe<Scalars['timestamptz']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebookToken?: InputMaybe<Scalars['String']['input']>;
  firebaseId?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  googleToken?: InputMaybe<Scalars['String']['input']>;
  hasNotifsOn?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  interestedBy?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  languagesSpeaking?: InputMaybe<Scalars['String']['input']>;
  lastConnexionDate?: InputMaybe<Scalars['timestamptz']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  mangoCustomerId?: InputMaybe<Scalars['String']['input']>;
  mangoWalletId?: InputMaybe<Scalars['String']['input']>;
  newPhone?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platformType?: InputMaybe<Scalars['Int']['input']>;
  pushPartnerToken?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  situation?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Register_Profile_Stddev_Fields = {
  __typename?: 'register_profile_stddev_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Register_Profile_Stddev_Pop_Fields = {
  __typename?: 'register_profile_stddev_pop_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Register_Profile_Stddev_Samp_Fields = {
  __typename?: 'register_profile_stddev_samp_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "register_profile" */
export type Register_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Register_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Register_Profile_Stream_Cursor_Value_Input = {
  SMSCode?: InputMaybe<Scalars['Int']['input']>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  appleToken?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<Scalars['String']['input']>;
  billingAddressComplete?: InputMaybe<Scalars['String']['input']>;
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountry?: InputMaybe<Scalars['String']['input']>;
  billingRegion?: InputMaybe<Scalars['String']['input']>;
  billingZipCode?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  can_create_entities?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationPhoneAccount?: InputMaybe<Scalars['String']['input']>;
  dateCreation?: InputMaybe<Scalars['timestamptz']['input']>;
  date_joined?: InputMaybe<Scalars['timestamptz']['input']>;
  deletedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebookToken?: InputMaybe<Scalars['String']['input']>;
  firebaseId?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  googleToken?: InputMaybe<Scalars['String']['input']>;
  hasNotifsOn?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  interestedBy?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  is_staff?: InputMaybe<Scalars['Boolean']['input']>;
  is_superuser?: InputMaybe<Scalars['Boolean']['input']>;
  languagesSpeaking?: InputMaybe<Scalars['String']['input']>;
  lastConnexionDate?: InputMaybe<Scalars['timestamptz']['input']>;
  last_login?: InputMaybe<Scalars['timestamptz']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  lattitude?: InputMaybe<Scalars['float8']['input']>;
  longitude?: InputMaybe<Scalars['float8']['input']>;
  mangoCustomerId?: InputMaybe<Scalars['String']['input']>;
  mangoWalletId?: InputMaybe<Scalars['String']['input']>;
  newPhone?: InputMaybe<Scalars['String']['input']>;
  online?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platformType?: InputMaybe<Scalars['Int']['input']>;
  pushPartnerToken?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  situation?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Register_Profile_Sum_Fields = {
  __typename?: 'register_profile_sum_fields';
  SMSCode?: Maybe<Scalars['Int']['output']>;
  lattitude?: Maybe<Scalars['float8']['output']>;
  longitude?: Maybe<Scalars['float8']['output']>;
  platformType?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "register_profile" */
export enum Register_Profile_Update_Column {
  /** column name */
  SmsCode = 'SMSCode',
  /** column name */
  AppVersion = 'appVersion',
  /** column name */
  AppleToken = 'appleToken',
  /** column name */
  BillingAddress = 'billingAddress',
  /** column name */
  BillingAddressComplete = 'billingAddressComplete',
  /** column name */
  BillingCity = 'billingCity',
  /** column name */
  BillingCountry = 'billingCountry',
  /** column name */
  BillingRegion = 'billingRegion',
  /** column name */
  BillingZipCode = 'billingZipCode',
  /** column name */
  Bio = 'bio',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CanCreateEntities = 'can_create_entities',
  /** column name */
  ConfirmationPhoneAccount = 'confirmationPhoneAccount',
  /** column name */
  DateCreation = 'dateCreation',
  /** column name */
  DateJoined = 'date_joined',
  /** column name */
  DeletedAt = 'deletedAt',
  /** column name */
  Email = 'email',
  /** column name */
  FacebookToken = 'facebookToken',
  /** column name */
  FirebaseId = 'firebaseId',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  GoogleToken = 'googleToken',
  /** column name */
  HasNotifsOn = 'hasNotifsOn',
  /** column name */
  Id = 'id',
  /** column name */
  Img = 'img',
  /** column name */
  InterestedBy = 'interestedBy',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  IsSuperuser = 'is_superuser',
  /** column name */
  LanguagesSpeaking = 'languagesSpeaking',
  /** column name */
  LastConnexionDate = 'lastConnexionDate',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Lattitude = 'lattitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MangoCustomerId = 'mangoCustomerId',
  /** column name */
  MangoWalletId = 'mangoWalletId',
  /** column name */
  NewPhone = 'newPhone',
  /** column name */
  Online = 'online',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  PlatformType = 'platformType',
  /** column name */
  PushPartnerToken = 'pushPartnerToken',
  /** column name */
  PushToken = 'pushToken',
  /** column name */
  Situation = 'situation',
  /** column name */
  Username = 'username',
  /** column name */
  Verified = 'verified'
}

export type Register_Profile_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Register_Profile_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Register_Profile_Set_Input>;
  where: Register_Profile_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Register_Profile_Var_Pop_Fields = {
  __typename?: 'register_profile_var_pop_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Register_Profile_Var_Samp_Fields = {
  __typename?: 'register_profile_var_samp_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Register_Profile_Variance_Fields = {
  __typename?: 'register_profile_variance_fields';
  SMSCode?: Maybe<Scalars['Float']['output']>;
  lattitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  platformType?: Maybe<Scalars['Float']['output']>;
};

export type RequestJoinEventParams = {
  event_id: Scalars['uuid']['input'];
};

export type SearchAddressOutput = {
  __typename?: 'searchAddressOutput';
  response?: Maybe<Scalars['String']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table in a streaming manner: "address" */
  address_stream: Array<Address>;
  /** fetch data from the table: "currency" */
  currency: Array<Currency>;
  /** fetch aggregated fields from the table: "currency" */
  currency_aggregate: Currency_Aggregate;
  /** fetch data from the table: "currency" using primary key columns */
  currency_by_pk?: Maybe<Currency>;
  /** fetch data from the table in a streaming manner: "currency" */
  currency_stream: Array<Currency>;
  /** fetch data from the table: "entity" */
  entity: Array<Entity>;
  /** fetch aggregated fields from the table: "entity" */
  entity_aggregate: Entity_Aggregate;
  /** fetch data from the table: "entity" using primary key columns */
  entity_by_pk?: Maybe<Entity>;
  /** fetch data from the table: "entity_fee" */
  entity_fee: Array<Entity_Fee>;
  /** fetch aggregated fields from the table: "entity_fee" */
  entity_fee_aggregate: Entity_Fee_Aggregate;
  /** fetch data from the table: "entity_fee" using primary key columns */
  entity_fee_by_pk?: Maybe<Entity_Fee>;
  /** fetch data from the table in a streaming manner: "entity_fee" */
  entity_fee_stream: Array<Entity_Fee>;
  /** fetch data from the table: "entity_member" */
  entity_member: Array<Entity_Member>;
  /** fetch aggregated fields from the table: "entity_member" */
  entity_member_aggregate: Entity_Member_Aggregate;
  /** fetch data from the table: "entity_member" using primary key columns */
  entity_member_by_pk?: Maybe<Entity_Member>;
  /** fetch data from the table in a streaming manner: "entity_member" */
  entity_member_stream: Array<Entity_Member>;
  /** fetch data from the table: "entity_payment_provider" */
  entity_payment_provider: Array<Entity_Payment_Provider>;
  /** fetch aggregated fields from the table: "entity_payment_provider" */
  entity_payment_provider_aggregate: Entity_Payment_Provider_Aggregate;
  /** fetch data from the table: "entity_payment_provider" using primary key columns */
  entity_payment_provider_by_pk?: Maybe<Entity_Payment_Provider>;
  /** fetch data from the table in a streaming manner: "entity_payment_provider" */
  entity_payment_provider_stream: Array<Entity_Payment_Provider>;
  /** fetch data from the table in a streaming manner: "entity" */
  entity_stream: Array<Entity>;
  /** fetch data from the table: "entity_type" */
  entity_type: Array<Entity_Type>;
  /** fetch aggregated fields from the table: "entity_type" */
  entity_type_aggregate: Entity_Type_Aggregate;
  /** fetch data from the table: "entity_type" using primary key columns */
  entity_type_by_pk?: Maybe<Entity_Type>;
  /** fetch data from the table in a streaming manner: "entity_type" */
  entity_type_stream: Array<Entity_Type>;
  /** fetch data from the table: "friend_status" */
  friend_status: Array<Friend_Status>;
  /** fetch aggregated fields from the table: "friend_status" */
  friend_status_aggregate: Friend_Status_Aggregate;
  /** fetch data from the table: "friend_status" using primary key columns */
  friend_status_by_pk?: Maybe<Friend_Status>;
  /** fetch data from the table in a streaming manner: "friend_status" */
  friend_status_stream: Array<Friend_Status>;
  /** fetch data from the table: "member_ticket_scan" */
  member_ticket_scan: Array<Member_Ticket_Scan>;
  /** fetch aggregated fields from the table: "member_ticket_scan" */
  member_ticket_scan_aggregate: Member_Ticket_Scan_Aggregate;
  /** fetch data from the table: "member_ticket_scan" using primary key columns */
  member_ticket_scan_by_pk?: Maybe<Member_Ticket_Scan>;
  /** fetch data from the table in a streaming manner: "member_ticket_scan" */
  member_ticket_scan_stream: Array<Member_Ticket_Scan>;
  /** fetch data from the table: "onapp_bill" */
  onapp_bill: Array<Onapp_Bill>;
  /** fetch aggregated fields from the table: "onapp_bill" */
  onapp_bill_aggregate: Onapp_Bill_Aggregate;
  /** fetch data from the table: "onapp_bill" using primary key columns */
  onapp_bill_by_pk?: Maybe<Onapp_Bill>;
  /** fetch data from the table in a streaming manner: "onapp_bill" */
  onapp_bill_stream: Array<Onapp_Bill>;
  /** fetch data from the table: "onapp_event" */
  onapp_event: Array<Onapp_Event>;
  /** fetch aggregated fields from the table: "onapp_event" */
  onapp_event_aggregate: Onapp_Event_Aggregate;
  /** fetch data from the table: "onapp_event" using primary key columns */
  onapp_event_by_pk?: Maybe<Onapp_Event>;
  /** fetch data from the table in a streaming manner: "onapp_event" */
  onapp_event_stream: Array<Onapp_Event>;
  /** fetch data from the table: "onapp_hasuratask" */
  onapp_hasuratask: Array<Onapp_Hasuratask>;
  /** fetch aggregated fields from the table: "onapp_hasuratask" */
  onapp_hasuratask_aggregate: Onapp_Hasuratask_Aggregate;
  /** fetch data from the table: "onapp_hasuratask" using primary key columns */
  onapp_hasuratask_by_pk?: Maybe<Onapp_Hasuratask>;
  /** fetch data from the table in a streaming manner: "onapp_hasuratask" */
  onapp_hasuratask_stream: Array<Onapp_Hasuratask>;
  /** fetch data from the table: "onapp_member" */
  onapp_member: Array<Onapp_Member>;
  /** fetch aggregated fields from the table: "onapp_member" */
  onapp_member_aggregate: Onapp_Member_Aggregate;
  /** fetch data from the table: "onapp_member" using primary key columns */
  onapp_member_by_pk?: Maybe<Onapp_Member>;
  /** fetch data from the table in a streaming manner: "onapp_member" */
  onapp_member_stream: Array<Onapp_Member>;
  /** fetch data from the table: "onapp_message" */
  onapp_message: Array<Onapp_Message>;
  /** fetch aggregated fields from the table: "onapp_message" */
  onapp_message_aggregate: Onapp_Message_Aggregate;
  /** fetch data from the table: "onapp_message" using primary key columns */
  onapp_message_by_pk?: Maybe<Onapp_Message>;
  /** fetch data from the table in a streaming manner: "onapp_message" */
  onapp_message_stream: Array<Onapp_Message>;
  /** fetch data from the table: "onapp_messagemedia" */
  onapp_messagemedia: Array<Onapp_Messagemedia>;
  /** fetch aggregated fields from the table: "onapp_messagemedia" */
  onapp_messagemedia_aggregate: Onapp_Messagemedia_Aggregate;
  /** fetch data from the table: "onapp_messagemedia" using primary key columns */
  onapp_messagemedia_by_pk?: Maybe<Onapp_Messagemedia>;
  /** fetch data from the table in a streaming manner: "onapp_messagemedia" */
  onapp_messagemedia_stream: Array<Onapp_Messagemedia>;
  /** fetch data from the table: "onapp_messagemention" */
  onapp_messagemention: Array<Onapp_Messagemention>;
  /** fetch aggregated fields from the table: "onapp_messagemention" */
  onapp_messagemention_aggregate: Onapp_Messagemention_Aggregate;
  /** fetch data from the table: "onapp_messagemention" using primary key columns */
  onapp_messagemention_by_pk?: Maybe<Onapp_Messagemention>;
  /** fetch data from the table in a streaming manner: "onapp_messagemention" */
  onapp_messagemention_stream: Array<Onapp_Messagemention>;
  /** fetch data from the table: "onapp_messagepin" */
  onapp_messagepin: Array<Onapp_Messagepin>;
  /** fetch aggregated fields from the table: "onapp_messagepin" */
  onapp_messagepin_aggregate: Onapp_Messagepin_Aggregate;
  /** fetch data from the table: "onapp_messagepin" using primary key columns */
  onapp_messagepin_by_pk?: Maybe<Onapp_Messagepin>;
  /** fetch data from the table in a streaming manner: "onapp_messagepin" */
  onapp_messagepin_stream: Array<Onapp_Messagepin>;
  /** fetch data from the table: "onapp_messagereaction" */
  onapp_messagereaction: Array<Onapp_Messagereaction>;
  /** fetch aggregated fields from the table: "onapp_messagereaction" */
  onapp_messagereaction_aggregate: Onapp_Messagereaction_Aggregate;
  /** fetch data from the table: "onapp_messagereaction" using primary key columns */
  onapp_messagereaction_by_pk?: Maybe<Onapp_Messagereaction>;
  /** fetch data from the table in a streaming manner: "onapp_messagereaction" */
  onapp_messagereaction_stream: Array<Onapp_Messagereaction>;
  /** fetch data from the table: "onapp_notification" */
  onapp_notification: Array<Onapp_Notification>;
  /** fetch aggregated fields from the table: "onapp_notification" */
  onapp_notification_aggregate: Onapp_Notification_Aggregate;
  /** fetch data from the table: "onapp_notification" using primary key columns */
  onapp_notification_by_pk?: Maybe<Onapp_Notification>;
  /** fetch data from the table in a streaming manner: "onapp_notification" */
  onapp_notification_stream: Array<Onapp_Notification>;
  /** fetch data from the table: "onapp_notifmessage" */
  onapp_notifmessage: Array<Onapp_Notifmessage>;
  /** fetch aggregated fields from the table: "onapp_notifmessage" */
  onapp_notifmessage_aggregate: Onapp_Notifmessage_Aggregate;
  /** fetch data from the table: "onapp_notifmessage" using primary key columns */
  onapp_notifmessage_by_pk?: Maybe<Onapp_Notifmessage>;
  /** fetch data from the table in a streaming manner: "onapp_notifmessage" */
  onapp_notifmessage_stream: Array<Onapp_Notifmessage>;
  /** fetch data from the table: "onapp_polloption" */
  onapp_polloption: Array<Onapp_Polloption>;
  /** fetch aggregated fields from the table: "onapp_polloption" */
  onapp_polloption_aggregate: Onapp_Polloption_Aggregate;
  /** fetch data from the table: "onapp_polloption" using primary key columns */
  onapp_polloption_by_pk?: Maybe<Onapp_Polloption>;
  /** fetch data from the table in a streaming manner: "onapp_polloption" */
  onapp_polloption_stream: Array<Onapp_Polloption>;
  /** fetch data from the table: "onapp_pollvote" */
  onapp_pollvote: Array<Onapp_Pollvote>;
  /** fetch aggregated fields from the table: "onapp_pollvote" */
  onapp_pollvote_aggregate: Onapp_Pollvote_Aggregate;
  /** fetch data from the table: "onapp_pollvote" using primary key columns */
  onapp_pollvote_by_pk?: Maybe<Onapp_Pollvote>;
  /** fetch data from the table in a streaming manner: "onapp_pollvote" */
  onapp_pollvote_stream: Array<Onapp_Pollvote>;
  /** fetch data from the table: "payment_provider" */
  payment_provider: Array<Payment_Provider>;
  /** fetch aggregated fields from the table: "payment_provider" */
  payment_provider_aggregate: Payment_Provider_Aggregate;
  /** fetch data from the table: "payment_provider" using primary key columns */
  payment_provider_by_pk?: Maybe<Payment_Provider>;
  /** fetch data from the table: "payment_provider_fee" */
  payment_provider_fee: Array<Payment_Provider_Fee>;
  /** fetch aggregated fields from the table: "payment_provider_fee" */
  payment_provider_fee_aggregate: Payment_Provider_Fee_Aggregate;
  /** fetch data from the table: "payment_provider_fee" using primary key columns */
  payment_provider_fee_by_pk?: Maybe<Payment_Provider_Fee>;
  /** fetch data from the table in a streaming manner: "payment_provider_fee" */
  payment_provider_fee_stream: Array<Payment_Provider_Fee>;
  /** fetch data from the table in a streaming manner: "payment_provider" */
  payment_provider_stream: Array<Payment_Provider>;
  /** fetch data from the table: "price" */
  price: Array<Price>;
  /** fetch aggregated fields from the table: "price" */
  price_aggregate: Price_Aggregate;
  /** fetch data from the table: "price" using primary key columns */
  price_by_pk?: Maybe<Price>;
  /** fetch data from the table: "price_group_discount" */
  price_group_discount: Array<Price_Group_Discount>;
  /** fetch aggregated fields from the table: "price_group_discount" */
  price_group_discount_aggregate: Price_Group_Discount_Aggregate;
  /** fetch data from the table: "price_group_discount" using primary key columns */
  price_group_discount_by_pk?: Maybe<Price_Group_Discount>;
  /** fetch data from the table in a streaming manner: "price_group_discount" */
  price_group_discount_stream: Array<Price_Group_Discount>;
  /** fetch data from the table in a streaming manner: "price" */
  price_stream: Array<Price>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table in a streaming manner: "product_type" */
  product_type_stream: Array<Product_Type>;
  /** fetch data from the table: "redirect_otp" */
  redirect_otp: Array<Redirect_Otp>;
  /** fetch aggregated fields from the table: "redirect_otp" */
  redirect_otp_aggregate: Redirect_Otp_Aggregate;
  /** fetch data from the table: "redirect_otp" using primary key columns */
  redirect_otp_by_pk?: Maybe<Redirect_Otp>;
  /** fetch data from the table in a streaming manner: "redirect_otp" */
  redirect_otp_stream: Array<Redirect_Otp>;
  /** fetch data from the table: "register_avatar" */
  register_avatar: Array<Register_Avatar>;
  /** fetch aggregated fields from the table: "register_avatar" */
  register_avatar_aggregate: Register_Avatar_Aggregate;
  /** fetch data from the table: "register_avatar" using primary key columns */
  register_avatar_by_pk?: Maybe<Register_Avatar>;
  /** fetch data from the table in a streaming manner: "register_avatar" */
  register_avatar_stream: Array<Register_Avatar>;
  /** fetch data from the table: "register_blockprofile" */
  register_blockprofile: Array<Register_Blockprofile>;
  /** fetch aggregated fields from the table: "register_blockprofile" */
  register_blockprofile_aggregate: Register_Blockprofile_Aggregate;
  /** fetch data from the table: "register_blockprofile" using primary key columns */
  register_blockprofile_by_pk?: Maybe<Register_Blockprofile>;
  /** fetch data from the table in a streaming manner: "register_blockprofile" */
  register_blockprofile_stream: Array<Register_Blockprofile>;
  /** fetch data from the table: "register_connexion" */
  register_connexion: Array<Register_Connexion>;
  /** fetch aggregated fields from the table: "register_connexion" */
  register_connexion_aggregate: Register_Connexion_Aggregate;
  /** fetch data from the table: "register_connexion" using primary key columns */
  register_connexion_by_pk?: Maybe<Register_Connexion>;
  /** fetch data from the table in a streaming manner: "register_connexion" */
  register_connexion_stream: Array<Register_Connexion>;
  /** fetch data from the table: "register_friendship" */
  register_friendship: Array<Register_Friendship>;
  /** fetch aggregated fields from the table: "register_friendship" */
  register_friendship_aggregate: Register_Friendship_Aggregate;
  /** fetch data from the table: "register_friendship" using primary key columns */
  register_friendship_by_pk?: Maybe<Register_Friendship>;
  /** fetch data from the table in a streaming manner: "register_friendship" */
  register_friendship_stream: Array<Register_Friendship>;
  /** fetch data from the table: "register_profile" */
  register_profile: Array<Register_Profile>;
  /** fetch aggregated fields from the table: "register_profile" */
  register_profile_aggregate: Register_Profile_Aggregate;
  /** fetch data from the table: "register_profile" using primary key columns */
  register_profile_by_pk?: Maybe<Register_Profile>;
  /** fetch data from the table in a streaming manner: "register_profile" */
  register_profile_stream: Array<Register_Profile>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "task_list" */
  task_list: Array<Task_List>;
  /** fetch aggregated fields from the table: "task_list" */
  task_list_aggregate: Task_List_Aggregate;
  /** fetch data from the table: "task_list" using primary key columns */
  task_list_by_pk?: Maybe<Task_List>;
  /** fetch data from the table in a streaming manner: "task_list" */
  task_list_stream: Array<Task_List>;
  /** fetch data from the table: "task_member" */
  task_member: Array<Task_Member>;
  /** fetch aggregated fields from the table: "task_member" */
  task_member_aggregate: Task_Member_Aggregate;
  /** fetch data from the table: "task_member" using primary key columns */
  task_member_by_pk?: Maybe<Task_Member>;
  /** fetch data from the table in a streaming manner: "task_member" */
  task_member_stream: Array<Task_Member>;
  /** fetch data from the table in a streaming manner: "task" */
  task_stream: Array<Task>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_item" */
  transaction_item: Array<Transaction_Item>;
  /** fetch aggregated fields from the table: "transaction_item" */
  transaction_item_aggregate: Transaction_Item_Aggregate;
  /** fetch data from the table: "transaction_item" using primary key columns */
  transaction_item_by_pk?: Maybe<Transaction_Item>;
  /** fetch data from the table in a streaming manner: "transaction_item" */
  transaction_item_stream: Array<Transaction_Item>;
  /** fetch data from the table: "transaction_status" */
  transaction_status: Array<Transaction_Status>;
  /** fetch aggregated fields from the table: "transaction_status" */
  transaction_status_aggregate: Transaction_Status_Aggregate;
  /** fetch data from the table: "transaction_status" using primary key columns */
  transaction_status_by_pk?: Maybe<Transaction_Status>;
  /** fetch data from the table in a streaming manner: "transaction_status" */
  transaction_status_stream: Array<Transaction_Status>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
};


export type Subscription_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAddress_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootCurrencyArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currency_Order_By>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootCurrency_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootCurrency_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Currency_Stream_Cursor_Input>>;
  where?: InputMaybe<Currency_Bool_Exp>;
};


export type Subscription_RootEntityArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Subscription_RootEntity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Order_By>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Subscription_RootEntity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEntity_FeeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Fee_Order_By>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


export type Subscription_RootEntity_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Fee_Order_By>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


export type Subscription_RootEntity_Fee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEntity_Fee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Fee_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Fee_Bool_Exp>;
};


export type Subscription_RootEntity_MemberArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


export type Subscription_RootEntity_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Member_Order_By>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


export type Subscription_RootEntity_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEntity_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Member_Bool_Exp>;
};


export type Subscription_RootEntity_Payment_ProviderArgs = {
  distinct_on?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Payment_Provider_Order_By>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


export type Subscription_RootEntity_Payment_Provider_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Payment_Provider_Order_By>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


export type Subscription_RootEntity_Payment_Provider_By_PkArgs = {
  entity_id: Scalars['uuid']['input'];
  payment_provider_id: Scalars['uuid']['input'];
};


export type Subscription_RootEntity_Payment_Provider_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Payment_Provider_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Payment_Provider_Bool_Exp>;
};


export type Subscription_RootEntity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Bool_Exp>;
};


export type Subscription_RootEntity_TypeArgs = {
  distinct_on?: InputMaybe<Array<Entity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Type_Order_By>>;
  where?: InputMaybe<Entity_Type_Bool_Exp>;
};


export type Subscription_RootEntity_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Type_Order_By>>;
  where?: InputMaybe<Entity_Type_Bool_Exp>;
};


export type Subscription_RootEntity_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootEntity_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Type_Bool_Exp>;
};


export type Subscription_RootFriend_StatusArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Subscription_RootFriend_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Subscription_RootFriend_Status_By_PkArgs = {
  state: Scalars['String']['input'];
};


export type Subscription_RootFriend_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Friend_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Subscription_RootMember_Ticket_ScanArgs = {
  distinct_on?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Ticket_Scan_Order_By>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


export type Subscription_RootMember_Ticket_Scan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Ticket_Scan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Ticket_Scan_Order_By>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


export type Subscription_RootMember_Ticket_Scan_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMember_Ticket_Scan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Ticket_Scan_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Ticket_Scan_Bool_Exp>;
};


export type Subscription_RootOnapp_BillArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Bill_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Bill_Order_By>>;
  where?: InputMaybe<Onapp_Bill_Bool_Exp>;
};


export type Subscription_RootOnapp_Bill_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Bill_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Bill_Order_By>>;
  where?: InputMaybe<Onapp_Bill_Bool_Exp>;
};


export type Subscription_RootOnapp_Bill_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Bill_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Bill_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Bill_Bool_Exp>;
};


export type Subscription_RootOnapp_EventArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


export type Subscription_RootOnapp_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Event_Order_By>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


export type Subscription_RootOnapp_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Event_Bool_Exp>;
};


export type Subscription_RootOnapp_HasurataskArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Hasuratask_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Hasuratask_Order_By>>;
  where?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
};


export type Subscription_RootOnapp_Hasuratask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Hasuratask_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Hasuratask_Order_By>>;
  where?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
};


export type Subscription_RootOnapp_Hasuratask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Hasuratask_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Hasuratask_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Hasuratask_Bool_Exp>;
};


export type Subscription_RootOnapp_MemberArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


export type Subscription_RootOnapp_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Member_Order_By>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


export type Subscription_RootOnapp_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Member_Bool_Exp>;
};


export type Subscription_RootOnapp_MessageArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


export type Subscription_RootOnapp_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Message_Order_By>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


export type Subscription_RootOnapp_Message_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Message_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Message_Bool_Exp>;
};


export type Subscription_RootOnapp_MessagemediaArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemedia_Order_By>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagemedia_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemedia_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemedia_Order_By>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagemedia_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Messagemedia_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Messagemedia_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Messagemedia_Bool_Exp>;
};


export type Subscription_RootOnapp_MessagementionArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagemention_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagemention_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagemention_Order_By>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagemention_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Messagemention_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Messagemention_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Messagemention_Bool_Exp>;
};


export type Subscription_RootOnapp_MessagepinArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagepin_Order_By>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagepin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagepin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagepin_Order_By>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagepin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Messagepin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Messagepin_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Messagepin_Bool_Exp>;
};


export type Subscription_RootOnapp_MessagereactionArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagereaction_Order_By>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagereaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Messagereaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Messagereaction_Order_By>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};


export type Subscription_RootOnapp_Messagereaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Messagereaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Messagereaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Messagereaction_Bool_Exp>;
};


export type Subscription_RootOnapp_NotificationArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notification_Order_By>>;
  where?: InputMaybe<Onapp_Notification_Bool_Exp>;
};


export type Subscription_RootOnapp_Notification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notification_Order_By>>;
  where?: InputMaybe<Onapp_Notification_Bool_Exp>;
};


export type Subscription_RootOnapp_Notification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Notification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Notification_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Notification_Bool_Exp>;
};


export type Subscription_RootOnapp_NotifmessageArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


export type Subscription_RootOnapp_Notifmessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Notifmessage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Notifmessage_Order_By>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


export type Subscription_RootOnapp_Notifmessage_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Notifmessage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Notifmessage_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Notifmessage_Bool_Exp>;
};


export type Subscription_RootOnapp_PolloptionArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Polloption_Order_By>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


export type Subscription_RootOnapp_Polloption_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Polloption_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Polloption_Order_By>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


export type Subscription_RootOnapp_Polloption_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Polloption_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Polloption_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Polloption_Bool_Exp>;
};


export type Subscription_RootOnapp_PollvoteArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Pollvote_Order_By>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};


export type Subscription_RootOnapp_Pollvote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Onapp_Pollvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Onapp_Pollvote_Order_By>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};


export type Subscription_RootOnapp_Pollvote_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOnapp_Pollvote_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onapp_Pollvote_Stream_Cursor_Input>>;
  where?: InputMaybe<Onapp_Pollvote_Bool_Exp>;
};


export type Subscription_RootPayment_ProviderArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Order_By>>;
  where?: InputMaybe<Payment_Provider_Bool_Exp>;
};


export type Subscription_RootPayment_Provider_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Order_By>>;
  where?: InputMaybe<Payment_Provider_Bool_Exp>;
};


export type Subscription_RootPayment_Provider_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayment_Provider_FeeArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Fee_Order_By>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


export type Subscription_RootPayment_Provider_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Provider_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Provider_Fee_Order_By>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


export type Subscription_RootPayment_Provider_Fee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayment_Provider_Fee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Provider_Fee_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
};


export type Subscription_RootPayment_Provider_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Provider_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Provider_Bool_Exp>;
};


export type Subscription_RootPriceArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


export type Subscription_RootPrice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Order_By>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


export type Subscription_RootPrice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrice_Group_DiscountArgs = {
  distinct_on?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Group_Discount_Order_By>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


export type Subscription_RootPrice_Group_Discount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_Group_Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_Group_Discount_Order_By>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


export type Subscription_RootPrice_Group_Discount_By_PkArgs = {
  event_id: Scalars['uuid']['input'];
  price_id: Scalars['uuid']['input'];
};


export type Subscription_RootPrice_Group_Discount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Price_Group_Discount_Stream_Cursor_Input>>;
  where?: InputMaybe<Price_Group_Discount_Bool_Exp>;
};


export type Subscription_RootPrice_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Price_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_TypeArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Type_Order_By>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Subscription_RootProduct_Type_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootProduct_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Type_Bool_Exp>;
};


export type Subscription_RootRedirect_OtpArgs = {
  distinct_on?: InputMaybe<Array<Redirect_Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redirect_Otp_Order_By>>;
  where?: InputMaybe<Redirect_Otp_Bool_Exp>;
};


export type Subscription_RootRedirect_Otp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Redirect_Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Redirect_Otp_Order_By>>;
  where?: InputMaybe<Redirect_Otp_Bool_Exp>;
};


export type Subscription_RootRedirect_Otp_By_PkArgs = {
  otp: Scalars['Int']['input'];
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootRedirect_Otp_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Redirect_Otp_Stream_Cursor_Input>>;
  where?: InputMaybe<Redirect_Otp_Bool_Exp>;
};


export type Subscription_RootRegister_AvatarArgs = {
  distinct_on?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Avatar_Order_By>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


export type Subscription_RootRegister_Avatar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Avatar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Avatar_Order_By>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


export type Subscription_RootRegister_Avatar_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRegister_Avatar_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Register_Avatar_Stream_Cursor_Input>>;
  where?: InputMaybe<Register_Avatar_Bool_Exp>;
};


export type Subscription_RootRegister_BlockprofileArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


export type Subscription_RootRegister_Blockprofile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Blockprofile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Blockprofile_Order_By>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


export type Subscription_RootRegister_Blockprofile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRegister_Blockprofile_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Register_Blockprofile_Stream_Cursor_Input>>;
  where?: InputMaybe<Register_Blockprofile_Bool_Exp>;
};


export type Subscription_RootRegister_ConnexionArgs = {
  distinct_on?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Connexion_Order_By>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


export type Subscription_RootRegister_Connexion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Connexion_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Connexion_Order_By>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


export type Subscription_RootRegister_Connexion_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRegister_Connexion_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Register_Connexion_Stream_Cursor_Input>>;
  where?: InputMaybe<Register_Connexion_Bool_Exp>;
};


export type Subscription_RootRegister_FriendshipArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


export type Subscription_RootRegister_Friendship_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Friendship_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Friendship_Order_By>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


export type Subscription_RootRegister_Friendship_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRegister_Friendship_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Register_Friendship_Stream_Cursor_Input>>;
  where?: InputMaybe<Register_Friendship_Bool_Exp>;
};


export type Subscription_RootRegister_ProfileArgs = {
  distinct_on?: InputMaybe<Array<Register_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Profile_Order_By>>;
  where?: InputMaybe<Register_Profile_Bool_Exp>;
};


export type Subscription_RootRegister_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Register_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Register_Profile_Order_By>>;
  where?: InputMaybe<Register_Profile_Bool_Exp>;
};


export type Subscription_RootRegister_Profile_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRegister_Profile_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Register_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<Register_Profile_Bool_Exp>;
};


export type Subscription_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTask_ListArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


export type Subscription_RootTask_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_List_Order_By>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


export type Subscription_RootTask_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTask_List_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_List_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};


export type Subscription_RootTask_MemberArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


export type Subscription_RootTask_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


export type Subscription_RootTask_Member_By_PkArgs = {
  member_id: Scalars['uuid']['input'];
  task_id: Scalars['uuid']['input'];
};


export type Subscription_RootTask_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


export type Subscription_RootTask_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTransaction_ItemArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


export type Subscription_RootTransaction_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


export type Subscription_RootTransaction_Item_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTransaction_Item_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


export type Subscription_RootTransaction_StatusArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Status_Order_By>>;
  where?: InputMaybe<Transaction_Status_Bool_Exp>;
};


export type Subscription_RootTransaction_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Status_Order_By>>;
  where?: InputMaybe<Transaction_Status_Bool_Exp>;
};


export type Subscription_RootTransaction_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootTransaction_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Status_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** columns and relationships of "task" */
export type Task = {
  __typename?: 'task';
  active: Scalars['Boolean']['output'];
  /** An array relationship */
  assignees: Array<Task_Member>;
  /** An aggregate relationship */
  assignees_aggregate: Task_Member_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  /** An object relationship */
  creator: Onapp_Member;
  id: Scalars['uuid']['output'];
  max_members?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  /** An object relationship */
  task_list: Task_List;
  task_list_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "task" */
export type TaskAssigneesArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};


/** columns and relationships of "task" */
export type TaskAssignees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Member_Order_By>>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};

/** aggregated selection of "task" */
export type Task_Aggregate = {
  __typename?: 'task_aggregate';
  aggregate?: Maybe<Task_Aggregate_Fields>;
  nodes: Array<Task>;
};

export type Task_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Task_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Task_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Task_Aggregate_Bool_Exp_Count>;
};

export type Task_Aggregate_Bool_Exp_Bool_And = {
  arguments: Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "task" */
export type Task_Aggregate_Fields = {
  __typename?: 'task_aggregate_fields';
  avg?: Maybe<Task_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Task_Max_Fields>;
  min?: Maybe<Task_Min_Fields>;
  stddev?: Maybe<Task_Stddev_Fields>;
  stddev_pop?: Maybe<Task_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Task_Stddev_Samp_Fields>;
  sum?: Maybe<Task_Sum_Fields>;
  var_pop?: Maybe<Task_Var_Pop_Fields>;
  var_samp?: Maybe<Task_Var_Samp_Fields>;
  variance?: Maybe<Task_Variance_Fields>;
};


/** aggregate fields of "task" */
export type Task_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
  avg?: InputMaybe<Task_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
  stddev?: InputMaybe<Task_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Task_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Task_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Task_Sum_Order_By>;
  var_pop?: InputMaybe<Task_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Task_Var_Samp_Order_By>;
  variance?: InputMaybe<Task_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** aggregate avg on columns */
export type Task_Avg_Fields = {
  __typename?: 'task_avg_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "task" */
export type Task_Avg_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  assignees?: InputMaybe<Task_Member_Bool_Exp>;
  assignees_aggregate?: InputMaybe<Task_Member_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  creator?: InputMaybe<Onapp_Member_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  max_members?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  task_list?: InputMaybe<Task_List_Bool_Exp>;
  task_list_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "task" */
export enum Task_Constraint {
  /** unique or primary key constraint on columns "id" */
  TaskPkey = 'task_pkey'
}

/** input type for incrementing numeric columns in table "task" */
export type Task_Inc_Input = {
  max_members?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "task" */
export type Task_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  assignees?: InputMaybe<Task_Member_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  creator?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  max_members?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  task_list?: InputMaybe<Task_List_Obj_Rel_Insert_Input>;
  task_list_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Each element of this table represents a task_list object */
export type Task_List = {
  __typename?: 'task_list';
  active: Scalars['Boolean']['output'];
  archived: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  /** An object relationship */
  creator: Onapp_Member;
  /** An object relationship */
  event: Onapp_Event;
  event_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  tasks: Array<Task>;
  /** An aggregate relationship */
  tasks_aggregate: Task_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** Each element of this table represents a task_list object */
export type Task_ListTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** Each element of this table represents a task_list object */
export type Task_ListTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** aggregated selection of "task_list" */
export type Task_List_Aggregate = {
  __typename?: 'task_list_aggregate';
  aggregate?: Maybe<Task_List_Aggregate_Fields>;
  nodes: Array<Task_List>;
};

export type Task_List_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Task_List_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Task_List_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Task_List_Aggregate_Bool_Exp_Count>;
};

export type Task_List_Aggregate_Bool_Exp_Bool_And = {
  arguments: Task_List_Select_Column_Task_List_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_List_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_List_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Task_List_Select_Column_Task_List_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_List_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_List_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Task_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_List_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "task_list" */
export type Task_List_Aggregate_Fields = {
  __typename?: 'task_list_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Task_List_Max_Fields>;
  min?: Maybe<Task_List_Min_Fields>;
};


/** aggregate fields of "task_list" */
export type Task_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "task_list" */
export type Task_List_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_List_Max_Order_By>;
  min?: InputMaybe<Task_List_Min_Order_By>;
};

/** input type for inserting array relation for remote table "task_list" */
export type Task_List_Arr_Rel_Insert_Input = {
  data: Array<Task_List_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_List_On_Conflict>;
};

/** Boolean expression to filter rows from the table "task_list". All fields are combined with a logical 'AND'. */
export type Task_List_Bool_Exp = {
  _and?: InputMaybe<Array<Task_List_Bool_Exp>>;
  _not?: InputMaybe<Task_List_Bool_Exp>;
  _or?: InputMaybe<Array<Task_List_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  creator?: InputMaybe<Onapp_Member_Bool_Exp>;
  event?: InputMaybe<Onapp_Event_Bool_Exp>;
  event_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "task_list" */
export enum Task_List_Constraint {
  /** unique or primary key constraint on columns "id" */
  TaskListPkey = 'task_list_pkey'
}

/** input type for inserting data into table "task_list" */
export type Task_List_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  creator?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  event?: InputMaybe<Onapp_Event_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Task_List_Max_Fields = {
  __typename?: 'task_list_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "task_list" */
export type Task_List_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_List_Min_Fields = {
  __typename?: 'task_list_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  event_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "task_list" */
export type Task_List_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task_list" */
export type Task_List_Mutation_Response = {
  __typename?: 'task_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Task_List>;
};

/** input type for inserting object relation for remote table "task_list" */
export type Task_List_Obj_Rel_Insert_Input = {
  data: Task_List_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_List_On_Conflict>;
};

/** on_conflict condition type for table "task_list" */
export type Task_List_On_Conflict = {
  constraint: Task_List_Constraint;
  update_columns?: Array<Task_List_Update_Column>;
  where?: InputMaybe<Task_List_Bool_Exp>;
};

/** Ordering options when selecting data from "task_list". */
export type Task_List_Order_By = {
  active?: InputMaybe<Order_By>;
  archived?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  creator?: InputMaybe<Onapp_Member_Order_By>;
  event?: InputMaybe<Onapp_Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task_list */
export type Task_List_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "task_list" */
export enum Task_List_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "task_list_aggregate_bool_exp_bool_and_arguments_columns" columns of table "task_list" */
export enum Task_List_Select_Column_Task_List_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Archived = 'archived'
}

/** select "task_list_aggregate_bool_exp_bool_or_arguments_columns" columns of table "task_list" */
export enum Task_List_Select_Column_Task_List_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Archived = 'archived'
}

/** input type for updating data in table "task_list" */
export type Task_List_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "task_list" */
export type Task_List_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_List_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_List_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  event_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "task_list" */
export enum Task_List_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Task_List_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_List_Set_Input>;
  where: Task_List_Bool_Exp;
};

/** aggregate max on columns */
export type Task_Max_Fields = {
  __typename?: 'task_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  max_members?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  task_list_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_members?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  task_list_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** This table links a member to n tasks */
export type Task_Member = {
  __typename?: 'task_member';
  assign: Scalars['Boolean']['output'];
  completed: Scalars['Boolean']['output'];
  /** An object relationship */
  member: Onapp_Member;
  member_id: Scalars['uuid']['output'];
  /** An object relationship */
  task: Task;
  task_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "task_member" */
export type Task_Member_Aggregate = {
  __typename?: 'task_member_aggregate';
  aggregate?: Maybe<Task_Member_Aggregate_Fields>;
  nodes: Array<Task_Member>;
};

export type Task_Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Task_Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Task_Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Task_Member_Aggregate_Bool_Exp_Count>;
};

export type Task_Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Task_Member_Select_Column_Task_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Task_Member_Select_Column_Task_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Task_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "task_member" */
export type Task_Member_Aggregate_Fields = {
  __typename?: 'task_member_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Task_Member_Max_Fields>;
  min?: Maybe<Task_Member_Min_Fields>;
};


/** aggregate fields of "task_member" */
export type Task_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "task_member" */
export type Task_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Member_Max_Order_By>;
  min?: InputMaybe<Task_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "task_member" */
export type Task_Member_Arr_Rel_Insert_Input = {
  data: Array<Task_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "task_member". All fields are combined with a logical 'AND'. */
export type Task_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Member_Bool_Exp>>;
  _not?: InputMaybe<Task_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Member_Bool_Exp>>;
  assign?: InputMaybe<Boolean_Comparison_Exp>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  task?: InputMaybe<Task_Bool_Exp>;
  task_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "task_member" */
export enum Task_Member_Constraint {
  /** unique or primary key constraint on columns "member_id", "task_id" */
  TaskMemberPkey = 'task_member_pkey'
}

/** input type for inserting data into table "task_member" */
export type Task_Member_Insert_Input = {
  assign?: InputMaybe<Scalars['Boolean']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  task_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Task_Member_Max_Fields = {
  __typename?: 'task_member_max_fields';
  member_id?: Maybe<Scalars['uuid']['output']>;
  task_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "task_member" */
export type Task_Member_Max_Order_By = {
  member_id?: InputMaybe<Order_By>;
  task_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_Member_Min_Fields = {
  __typename?: 'task_member_min_fields';
  member_id?: Maybe<Scalars['uuid']['output']>;
  task_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "task_member" */
export type Task_Member_Min_Order_By = {
  member_id?: InputMaybe<Order_By>;
  task_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task_member" */
export type Task_Member_Mutation_Response = {
  __typename?: 'task_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Task_Member>;
};

/** on_conflict condition type for table "task_member" */
export type Task_Member_On_Conflict = {
  constraint: Task_Member_Constraint;
  update_columns?: Array<Task_Member_Update_Column>;
  where?: InputMaybe<Task_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "task_member". */
export type Task_Member_Order_By = {
  assign?: InputMaybe<Order_By>;
  completed?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  task?: InputMaybe<Task_Order_By>;
  task_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task_member */
export type Task_Member_Pk_Columns_Input = {
  member_id: Scalars['uuid']['input'];
  task_id: Scalars['uuid']['input'];
};

/** select columns of table "task_member" */
export enum Task_Member_Select_Column {
  /** column name */
  Assign = 'assign',
  /** column name */
  Completed = 'completed',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "task_member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "task_member" */
export enum Task_Member_Select_Column_Task_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Assign = 'assign',
  /** column name */
  Completed = 'completed'
}

/** select "task_member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "task_member" */
export enum Task_Member_Select_Column_Task_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Assign = 'assign',
  /** column name */
  Completed = 'completed'
}

/** input type for updating data in table "task_member" */
export type Task_Member_Set_Input = {
  assign?: InputMaybe<Scalars['Boolean']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  task_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "task_member" */
export type Task_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Member_Stream_Cursor_Value_Input = {
  assign?: InputMaybe<Scalars['Boolean']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  task_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "task_member" */
export enum Task_Member_Update_Column {
  /** column name */
  Assign = 'assign',
  /** column name */
  Completed = 'completed',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Task_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Member_Set_Input>;
  where: Task_Member_Bool_Exp;
};

/** aggregate min on columns */
export type Task_Min_Fields = {
  __typename?: 'task_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  max_members?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  task_list_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_members?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  task_list_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task" */
export type Task_Mutation_Response = {
  __typename?: 'task_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Task>;
};

/** input type for inserting object relation for remote table "task" */
export type Task_Obj_Rel_Insert_Input = {
  data: Task_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** on_conflict condition type for table "task" */
export type Task_On_Conflict = {
  constraint: Task_Constraint;
  update_columns?: Array<Task_Update_Column>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
  active?: InputMaybe<Order_By>;
  assignees_aggregate?: InputMaybe<Task_Member_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  creator?: InputMaybe<Onapp_Member_Order_By>;
  id?: InputMaybe<Order_By>;
  max_members?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  task_list?: InputMaybe<Task_List_Order_By>;
  task_list_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task */
export type Task_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "task" */
export enum Task_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  MaxMembers = 'max_members',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  TaskListId = 'task_list_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "task_aggregate_bool_exp_bool_and_arguments_columns" columns of table "task" */
export enum Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** select "task_aggregate_bool_exp_bool_or_arguments_columns" columns of table "task" */
export enum Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active'
}

/** input type for updating data in table "task" */
export type Task_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  max_members?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  task_list_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Task_Stddev_Fields = {
  __typename?: 'task_stddev_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "task" */
export type Task_Stddev_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Task_Stddev_Pop_Fields = {
  __typename?: 'task_stddev_pop_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "task" */
export type Task_Stddev_Pop_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Task_Stddev_Samp_Fields = {
  __typename?: 'task_stddev_samp_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "task" */
export type Task_Stddev_Samp_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "task" */
export type Task_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  max_members?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  task_list_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Task_Sum_Fields = {
  __typename?: 'task_sum_fields';
  max_members?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "task" */
export type Task_Sum_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** update columns of table "task" */
export enum Task_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  MaxMembers = 'max_members',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  TaskListId = 'task_list_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Task_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Task_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Task_Var_Pop_Fields = {
  __typename?: 'task_var_pop_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "task" */
export type Task_Var_Pop_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Task_Var_Samp_Fields = {
  __typename?: 'task_var_samp_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "task" */
export type Task_Var_Samp_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Task_Variance_Fields = {
  __typename?: 'task_variance_fields';
  max_members?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "task" */
export type Task_Variance_Order_By = {
  max_members?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  amount: Scalars['float8']['output'];
  /** Date of initialization */
  created_at: Scalars['timestamptz']['output'];
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee: Scalars['float8']['output'];
  /** An object relationship */
  entity_fee: Entity_Fee;
  entity_fee_id: Scalars['uuid']['output'];
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee: Scalars['float8']['output'];
  fee_collected_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  payer: Entity_Member;
  payer_id: Scalars['uuid']['output'];
  /** An object relationship */
  payment_provider: Payment_Provider;
  /** An object relationship */
  payment_provider_fee?: Maybe<Payment_Provider_Fee>;
  payment_provider_id: Scalars['uuid']['output'];
  payment_provider_order_id?: Maybe<Scalars['String']['output']>;
  payment_provider_transaction_id?: Maybe<Scalars['String']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee: Scalars['float8']['output'];
  provider_fee_id?: Maybe<Scalars['uuid']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee: Scalars['float8']['output'];
  quantity: Scalars['Int']['output'];
  /** An object relationship */
  recipient: Entity;
  recipient_id: Scalars['uuid']['output'];
  status: Transaction_Status_Enum;
  /** Date of transaction */
  transaction_date?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  transaction_items: Array<Transaction_Item>;
  /** An aggregate relationship */
  transaction_items_aggregate: Transaction_Item_Aggregate;
};


/** columns and relationships of "transaction" */
export type TransactionTransaction_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionTransaction_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Item_Order_By>>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Transaction_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Transaction_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Transaction_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Transaction_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Transaction_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Transaction_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Transaction_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Transaction_Aggregate_Bool_Exp_Var_Samp>;
};

export type Transaction_Aggregate_Bool_Exp_Avg = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Corr = {
  arguments: Transaction_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Transaction_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Transaction_Aggregate_Bool_Exp_Max = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Min = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Sum = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entity_amount_fee?: InputMaybe<Float8_Comparison_Exp>;
  entity_fee?: InputMaybe<Entity_Fee_Bool_Exp>;
  entity_fee_id?: InputMaybe<Uuid_Comparison_Exp>;
  entity_percentage_fee?: InputMaybe<Float8_Comparison_Exp>;
  fee_collected_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payer?: InputMaybe<Entity_Member_Bool_Exp>;
  payer_id?: InputMaybe<Uuid_Comparison_Exp>;
  payment_provider?: InputMaybe<Payment_Provider_Bool_Exp>;
  payment_provider_fee?: InputMaybe<Payment_Provider_Fee_Bool_Exp>;
  payment_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  payment_provider_order_id?: InputMaybe<String_Comparison_Exp>;
  payment_provider_transaction_id?: InputMaybe<String_Comparison_Exp>;
  provider_amount_fee?: InputMaybe<Float8_Comparison_Exp>;
  provider_fee_id?: InputMaybe<Uuid_Comparison_Exp>;
  provider_percentage_fee?: InputMaybe<Float8_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  recipient?: InputMaybe<Entity_Bool_Exp>;
  recipient_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Transaction_Status_Enum_Comparison_Exp>;
  transaction_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction_items?: InputMaybe<Transaction_Item_Bool_Exp>;
  transaction_items_aggregate?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionIdKey = 'transaction_id_key',
  /** unique or primary key constraint on columns "id" */
  TransactionPkey = 'transaction_pkey'
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  /** Date of initialization */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  entity_fee?: InputMaybe<Entity_Fee_Obj_Rel_Insert_Input>;
  entity_fee_id?: InputMaybe<Scalars['uuid']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  fee_collected_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payer?: InputMaybe<Entity_Member_Obj_Rel_Insert_Input>;
  payer_id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider?: InputMaybe<Payment_Provider_Obj_Rel_Insert_Input>;
  payment_provider_fee?: InputMaybe<Payment_Provider_Fee_Obj_Rel_Insert_Input>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_order_id?: InputMaybe<Scalars['String']['input']>;
  payment_provider_transaction_id?: InputMaybe<Scalars['String']['input']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  provider_fee_id?: InputMaybe<Scalars['uuid']['input']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Entity_Obj_Rel_Insert_Input>;
  recipient_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Transaction_Status_Enum>;
  /** Date of transaction */
  transaction_date?: InputMaybe<Scalars['timestamptz']['input']>;
  transaction_items?: InputMaybe<Transaction_Item_Arr_Rel_Insert_Input>;
};

/** Intersection table between price and transaction */
export type Transaction_Item = {
  __typename?: 'transaction_item';
  final_price: Scalars['float8']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member?: Maybe<Onapp_Member>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  price: Price;
  price_id: Scalars['uuid']['output'];
  /** An object relationship */
  transaction: Transaction;
  transaction_id: Scalars['uuid']['output'];
  unit_price: Scalars['float8']['output'];
};

/** aggregated selection of "transaction_item" */
export type Transaction_Item_Aggregate = {
  __typename?: 'transaction_item_aggregate';
  aggregate?: Maybe<Transaction_Item_Aggregate_Fields>;
  nodes: Array<Transaction_Item>;
};

export type Transaction_Item_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Transaction_Item_Aggregate_Bool_Exp_Var_Samp>;
};

export type Transaction_Item_Aggregate_Bool_Exp_Avg = {
  arguments: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Corr = {
  arguments: Transaction_Item_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Transaction_Item_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Transaction_Item_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Transaction_Item_Aggregate_Bool_Exp_Max = {
  arguments: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Min = {
  arguments: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Sum = {
  arguments: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Transaction_Item_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Item_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "transaction_item" */
export type Transaction_Item_Aggregate_Fields = {
  __typename?: 'transaction_item_aggregate_fields';
  avg?: Maybe<Transaction_Item_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Item_Max_Fields>;
  min?: Maybe<Transaction_Item_Min_Fields>;
  stddev?: Maybe<Transaction_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Item_Sum_Fields>;
  var_pop?: Maybe<Transaction_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Item_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Item_Variance_Fields>;
};


/** aggregate fields of "transaction_item" */
export type Transaction_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction_item" */
export type Transaction_Item_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Item_Max_Order_By>;
  min?: InputMaybe<Transaction_Item_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Item_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction_item" */
export type Transaction_Item_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Item_Avg_Fields = {
  __typename?: 'transaction_item_avg_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction_item" */
export type Transaction_Item_Avg_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_item". All fields are combined with a logical 'AND'. */
export type Transaction_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Item_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Item_Bool_Exp>>;
  final_price?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Onapp_Member_Bool_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Price_Bool_Exp>;
  price_id?: InputMaybe<Uuid_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_id?: InputMaybe<Uuid_Comparison_Exp>;
  unit_price?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_item" */
export enum Transaction_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionItemIdKey = 'transaction_item_id_key',
  /** unique or primary key constraint on columns "id" */
  TransactionItemPkey = 'transaction_item_pkey'
}

/** input type for incrementing numeric columns in table "transaction_item" */
export type Transaction_Item_Inc_Input = {
  final_price?: InputMaybe<Scalars['float8']['input']>;
  unit_price?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "transaction_item" */
export type Transaction_Item_Insert_Input = {
  final_price?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Onapp_Member_Obj_Rel_Insert_Input>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Price_Obj_Rel_Insert_Input>;
  price_id?: InputMaybe<Scalars['uuid']['input']>;
  transaction?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  unit_price?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type Transaction_Item_Max_Fields = {
  __typename?: 'transaction_item_max_fields';
  final_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: Maybe<Scalars['uuid']['output']>;
  price_id?: Maybe<Scalars['uuid']['output']>;
  transaction_id?: Maybe<Scalars['uuid']['output']>;
  unit_price?: Maybe<Scalars['float8']['output']>;
};

/** order by max() on columns of table "transaction_item" */
export type Transaction_Item_Max_Order_By = {
  final_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Item_Min_Fields = {
  __typename?: 'transaction_item_min_fields';
  final_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: Maybe<Scalars['uuid']['output']>;
  price_id?: Maybe<Scalars['uuid']['output']>;
  transaction_id?: Maybe<Scalars['uuid']['output']>;
  unit_price?: Maybe<Scalars['float8']['output']>;
};

/** order by min() on columns of table "transaction_item" */
export type Transaction_Item_Min_Order_By = {
  final_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_item" */
export type Transaction_Item_Mutation_Response = {
  __typename?: 'transaction_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Item>;
};

/** on_conflict condition type for table "transaction_item" */
export type Transaction_Item_On_Conflict = {
  constraint: Transaction_Item_Constraint;
  update_columns?: Array<Transaction_Item_Update_Column>;
  where?: InputMaybe<Transaction_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_item". */
export type Transaction_Item_Order_By = {
  final_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Onapp_Member_Order_By>;
  member_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Price_Order_By>;
  price_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_item */
export type Transaction_Item_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "transaction_item" */
export enum Transaction_Item_Select_Column {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_avg_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_corr_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_max_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_min_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_sum_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** select "transaction_item_aggregate_bool_exp_var_samp_arguments_columns" columns of table "transaction_item" */
export enum Transaction_Item_Select_Column_Transaction_Item_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  UnitPrice = 'unit_price'
}

/** input type for updating data in table "transaction_item" */
export type Transaction_Item_Set_Input = {
  final_price?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  price_id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  unit_price?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Item_Stddev_Fields = {
  __typename?: 'transaction_item_stddev_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction_item" */
export type Transaction_Item_Stddev_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Item_Stddev_Pop_Fields = {
  __typename?: 'transaction_item_stddev_pop_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction_item" */
export type Transaction_Item_Stddev_Pop_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Item_Stddev_Samp_Fields = {
  __typename?: 'transaction_item_stddev_samp_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction_item" */
export type Transaction_Item_Stddev_Samp_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction_item" */
export type Transaction_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Item_Stream_Cursor_Value_Input = {
  final_price?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** this field link a product ticket to a member when someone else bought for him */
  member_id?: InputMaybe<Scalars['uuid']['input']>;
  price_id?: InputMaybe<Scalars['uuid']['input']>;
  transaction_id?: InputMaybe<Scalars['uuid']['input']>;
  unit_price?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Item_Sum_Fields = {
  __typename?: 'transaction_item_sum_fields';
  final_price?: Maybe<Scalars['float8']['output']>;
  unit_price?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "transaction_item" */
export type Transaction_Item_Sum_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_item" */
export enum Transaction_Item_Update_Column {
  /** column name */
  FinalPrice = 'final_price',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UnitPrice = 'unit_price'
}

export type Transaction_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Item_Set_Input>;
  where: Transaction_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Item_Var_Pop_Fields = {
  __typename?: 'transaction_item_var_pop_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction_item" */
export type Transaction_Item_Var_Pop_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Item_Var_Samp_Fields = {
  __typename?: 'transaction_item_var_samp_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction_item" */
export type Transaction_Item_Var_Samp_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Item_Variance_Fields = {
  __typename?: 'transaction_item_variance_fields';
  final_price?: Maybe<Scalars['Float']['output']>;
  unit_price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction_item" */
export type Transaction_Item_Variance_Order_By = {
  final_price?: InputMaybe<Order_By>;
  unit_price?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  /** Date of initialization */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['float8']['output']>;
  entity_fee_id?: Maybe<Scalars['uuid']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['float8']['output']>;
  fee_collected_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payer_id?: Maybe<Scalars['uuid']['output']>;
  payment_provider_id?: Maybe<Scalars['uuid']['output']>;
  payment_provider_order_id?: Maybe<Scalars['String']['output']>;
  payment_provider_transaction_id?: Maybe<Scalars['String']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['float8']['output']>;
  provider_fee_id?: Maybe<Scalars['uuid']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['float8']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  recipient_id?: Maybe<Scalars['uuid']['output']>;
  /** Date of transaction */
  transaction_date?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** Date of initialization */
  created_at?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  entity_fee_id?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  fee_collected_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payer_id?: InputMaybe<Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  payment_provider_order_id?: InputMaybe<Order_By>;
  payment_provider_transaction_id?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  provider_fee_id?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  /** Date of transaction */
  transaction_date?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  /** Date of initialization */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['float8']['output']>;
  entity_fee_id?: Maybe<Scalars['uuid']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['float8']['output']>;
  fee_collected_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payer_id?: Maybe<Scalars['uuid']['output']>;
  payment_provider_id?: Maybe<Scalars['uuid']['output']>;
  payment_provider_order_id?: Maybe<Scalars['String']['output']>;
  payment_provider_transaction_id?: Maybe<Scalars['String']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['float8']['output']>;
  provider_fee_id?: Maybe<Scalars['uuid']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['float8']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  recipient_id?: Maybe<Scalars['uuid']['output']>;
  /** Date of transaction */
  transaction_date?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** Date of initialization */
  created_at?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  entity_fee_id?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  fee_collected_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payer_id?: InputMaybe<Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  payment_provider_order_id?: InputMaybe<Order_By>;
  payment_provider_transaction_id?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  provider_fee_id?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  /** Date of transaction */
  transaction_date?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** input type for inserting object relation for remote table "transaction" */
export type Transaction_Obj_Rel_Insert_Input = {
  data: Transaction_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  entity_amount_fee?: InputMaybe<Order_By>;
  entity_fee?: InputMaybe<Entity_Fee_Order_By>;
  entity_fee_id?: InputMaybe<Order_By>;
  entity_percentage_fee?: InputMaybe<Order_By>;
  fee_collected_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payer?: InputMaybe<Entity_Member_Order_By>;
  payer_id?: InputMaybe<Order_By>;
  payment_provider?: InputMaybe<Payment_Provider_Order_By>;
  payment_provider_fee?: InputMaybe<Payment_Provider_Fee_Order_By>;
  payment_provider_id?: InputMaybe<Order_By>;
  payment_provider_order_id?: InputMaybe<Order_By>;
  payment_provider_transaction_id?: InputMaybe<Order_By>;
  provider_amount_fee?: InputMaybe<Order_By>;
  provider_fee_id?: InputMaybe<Order_By>;
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Entity_Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_date?: InputMaybe<Order_By>;
  transaction_items_aggregate?: InputMaybe<Transaction_Item_Aggregate_Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityFeeId = 'entity_fee_id',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  FeeCollectedAt = 'fee_collected_at',
  /** column name */
  Id = 'id',
  /** column name */
  PayerId = 'payer_id',
  /** column name */
  PaymentProviderId = 'payment_provider_id',
  /** column name */
  PaymentProviderOrderId = 'payment_provider_order_id',
  /** column name */
  PaymentProviderTransactionId = 'payment_provider_transaction_id',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderFeeId = 'provider_fee_id',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transaction_date'
}

/** select "transaction_aggregate_bool_exp_avg_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_corr_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_max_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_min_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_sum_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** select "transaction_aggregate_bool_exp_var_samp_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  /** Date of initialization */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  entity_fee_id?: InputMaybe<Scalars['uuid']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  fee_collected_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payer_id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_order_id?: InputMaybe<Scalars['String']['input']>;
  payment_provider_transaction_id?: InputMaybe<Scalars['String']['input']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  provider_fee_id?: InputMaybe<Scalars['uuid']['input']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipient_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Transaction_Status_Enum>;
  /** Date of transaction */
  transaction_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Enum values of transactions status */
export type Transaction_Status = {
  __typename?: 'transaction_status';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "transaction_status" */
export type Transaction_Status_Aggregate = {
  __typename?: 'transaction_status_aggregate';
  aggregate?: Maybe<Transaction_Status_Aggregate_Fields>;
  nodes: Array<Transaction_Status>;
};

/** aggregate fields of "transaction_status" */
export type Transaction_Status_Aggregate_Fields = {
  __typename?: 'transaction_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Status_Max_Fields>;
  min?: Maybe<Transaction_Status_Min_Fields>;
};


/** aggregate fields of "transaction_status" */
export type Transaction_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "transaction_status". All fields are combined with a logical 'AND'. */
export type Transaction_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Status_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_status" */
export enum Transaction_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  TransactionStatusPkey = 'transaction_status_pkey'
}

export enum Transaction_Status_Enum {
  /** The user went on the payment page but didn't pay */
  Cancelled = 'cancelled',
  Failed = 'failed',
  Pending = 'pending',
  Success = 'success',
  /** The user never went on the payment page, or didn't try to pay */
  Timeout = 'timeout'
}

/** Boolean expression to compare columns of type "transaction_status_enum". All fields are combined with logical 'AND'. */
export type Transaction_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Transaction_Status_Enum>;
  _in?: InputMaybe<Array<Transaction_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Transaction_Status_Enum>;
  _nin?: InputMaybe<Array<Transaction_Status_Enum>>;
};

/** input type for inserting data into table "transaction_status" */
export type Transaction_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Transaction_Status_Max_Fields = {
  __typename?: 'transaction_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Transaction_Status_Min_Fields = {
  __typename?: 'transaction_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "transaction_status" */
export type Transaction_Status_Mutation_Response = {
  __typename?: 'transaction_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Status>;
};

/** on_conflict condition type for table "transaction_status" */
export type Transaction_Status_On_Conflict = {
  constraint: Transaction_Status_Constraint;
  update_columns?: Array<Transaction_Status_Update_Column>;
  where?: InputMaybe<Transaction_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_status". */
export type Transaction_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_status */
export type Transaction_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "transaction_status" */
export enum Transaction_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "transaction_status" */
export type Transaction_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "transaction_status" */
export type Transaction_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "transaction_status" */
export enum Transaction_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Transaction_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Status_Set_Input>;
  where: Transaction_Status_Bool_Exp;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  /** Date of initialization */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  entity_fee_id?: InputMaybe<Scalars['uuid']['input']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  fee_collected_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payer_id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_id?: InputMaybe<Scalars['uuid']['input']>;
  payment_provider_order_id?: InputMaybe<Scalars['String']['input']>;
  payment_provider_transaction_id?: InputMaybe<Scalars['String']['input']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Scalars['float8']['input']>;
  provider_fee_id?: InputMaybe<Scalars['uuid']['input']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Scalars['float8']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recipient_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Transaction_Status_Enum>;
  /** Date of transaction */
  transaction_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['float8']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['float8']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['float8']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['float8']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntityAmountFee = 'entity_amount_fee',
  /** column name */
  EntityFeeId = 'entity_fee_id',
  /** column name */
  EntityPercentageFee = 'entity_percentage_fee',
  /** column name */
  FeeCollectedAt = 'fee_collected_at',
  /** column name */
  Id = 'id',
  /** column name */
  PayerId = 'payer_id',
  /** column name */
  PaymentProviderId = 'payment_provider_id',
  /** column name */
  PaymentProviderOrderId = 'payment_provider_order_id',
  /** column name */
  PaymentProviderTransactionId = 'payment_provider_transaction_id',
  /** column name */
  ProviderAmountFee = 'provider_amount_fee',
  /** column name */
  ProviderFeeId = 'provider_fee_id',
  /** column name */
  ProviderPercentageFee = 'provider_percentage_fee',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transaction_date'
}

export type Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: Maybe<Scalars['Float']['output']>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup flat fee: (ex: 0.4EUR) */
  entity_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by comeon on the entity based on the setup percentage: (ex: 0.4EUR) */
  entity_percentage_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup flat fee: (ex: 0.4EUR) */
  provider_amount_fee?: InputMaybe<Order_By>;
  /** The calculated amount taken by the provider based on the setup percentage: (ex: 0.4EUR) */
  provider_percentage_fee?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

export type Unseen_Msg_Count_Onapp_Member_Args = {
  date_from?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type UserFragment = { __typename?: 'register_profile', id: any, img?: string | null, username?: string | null, email: string, phone?: string | null, lattitude?: any | null, longitude?: any | null, mangoCustomerId?: string | null, mangoWalletId?: string | null, billingAddress?: string | null, is_staff: boolean, online: boolean, hasNotifsOn?: boolean | null, firstName: string, lastName: string, birthDate?: any | null, canCreateEntities: boolean, friends_count: { __typename?: 'register_friendship_aggregate', aggregate?: { __typename?: 'register_friendship_aggregate_fields', count: number } | null } } & { ' $fragmentName'?: 'UserFragment' };

export type GetCurrentUserQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetCurrentUserQuery = { __typename?: 'query_root', register_profile_by_pk?: (
    { __typename?: 'register_profile' }
    & { ' $fragmentRefs'?: { 'UserFragment': UserFragment } }
  ) | null };

export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"register_profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","alias":{"kind":"Name","value":"firstName"},"name":{"kind":"Name","value":"first_name"}},{"kind":"Field","alias":{"kind":"Name","value":"lastName"},"name":{"kind":"Name","value":"last_name"}},{"kind":"Field","alias":{"kind":"Name","value":"birthDate"},"name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"lattitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"mangoCustomerId"}},{"kind":"Field","name":{"kind":"Name","value":"mangoWalletId"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"is_staff"}},{"kind":"Field","name":{"kind":"Name","value":"online"}},{"kind":"Field","name":{"kind":"Name","value":"hasNotifsOn"}},{"kind":"Field","alias":{"kind":"Name","value":"canCreateEntities"},"name":{"kind":"Name","value":"can_create_entities"}},{"kind":"Field","alias":{"kind":"Name","value":"friends_count"},"name":{"kind":"Name","value":"friends_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"friendLink_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register_profile_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"register_profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","alias":{"kind":"Name","value":"firstName"},"name":{"kind":"Name","value":"first_name"}},{"kind":"Field","alias":{"kind":"Name","value":"lastName"},"name":{"kind":"Name","value":"last_name"}},{"kind":"Field","alias":{"kind":"Name","value":"birthDate"},"name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"lattitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"mangoCustomerId"}},{"kind":"Field","name":{"kind":"Name","value":"mangoWalletId"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"is_staff"}},{"kind":"Field","name":{"kind":"Name","value":"online"}},{"kind":"Field","name":{"kind":"Name","value":"hasNotifsOn"}},{"kind":"Field","alias":{"kind":"Name","value":"canCreateEntities"},"name":{"kind":"Name","value":"can_create_entities"}},{"kind":"Field","alias":{"kind":"Name","value":"friends_count"},"name":{"kind":"Name","value":"friends_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"friendLink_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;