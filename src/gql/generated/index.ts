import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchData } from '../fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID']['output'];
  nftOwnedAndCollection: Array<Nft>;
  numberOfPurchases: Scalars['BigInt']['output'];
  numberOfSales: Scalars['BigInt']['output'];
  purchases: Array<Sale>;
  sales: Array<Sale>;
  totalEarned: Scalars['BigDecimal']['output'];
  totalSpent: Scalars['BigDecimal']['output'];
};


export type AccountNftOwnedAndCollectionArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Nft_Filter>;
};


export type AccountPurchasesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Sale_Filter>;
};


export type AccountSalesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Sale_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nftOwnedAndCollection_?: InputMaybe<Nft_Filter>;
  numberOfPurchases?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfPurchases_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfPurchases_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfPurchases_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfPurchases_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfPurchases_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfPurchases_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfPurchases_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfSales?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  purchases_?: InputMaybe<Sale_Filter>;
  sales_?: InputMaybe<Sale_Filter>;
  totalEarned?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalEarned_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalEarned_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalEarned_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalEarned_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalEarned_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalEarned_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalEarned_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSpent?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSpent_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSpent_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSpent_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSpent_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSpent_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSpent_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSpent_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Account_OrderBy {
  Id = 'id',
  NftOwnedAndCollection = 'nftOwnedAndCollection',
  NumberOfPurchases = 'numberOfPurchases',
  NumberOfSales = 'numberOfSales',
  Purchases = 'purchases',
  Sales = 'sales',
  TotalEarned = 'totalEarned',
  TotalSpent = 'totalSpent'
}

export type Auction = Event & {
  __typename?: 'Auction';
  basePrice?: Maybe<Scalars['BigInt']['output']>;
  blockHash: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  collection?: Maybe<Collection>;
  eventType: EventType;
  expirationTime?: Maybe<Scalars['BigInt']['output']>;
  extra?: Maybe<Scalars['BigInt']['output']>;
  hash?: Maybe<Scalars['Bytes']['output']>;
  id: Scalars['ID']['output'];
  listingTime?: Maybe<Scalars['BigInt']['output']>;
  logNumber: Scalars['BigInt']['output'];
  nft?: Maybe<Nft>;
  orderbook: Scalars['Boolean']['output'];
  paymentToken?: Maybe<PaymentToken>;
  staticExtraData?: Maybe<Scalars['Bytes']['output']>;
  staticTarget?: Maybe<Scalars['Bytes']['output']>;
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type Auction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  basePrice?: InputMaybe<Scalars['BigInt']['input']>;
  basePrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  basePrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  basePrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  basePrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  basePrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  basePrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  basePrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockHash?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Collection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<EventType>;
  eventType_in?: InputMaybe<Array<EventType>>;
  eventType_not?: InputMaybe<EventType>;
  eventType_not_in?: InputMaybe<Array<EventType>>;
  expirationTime?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  extra?: InputMaybe<Scalars['BigInt']['input']>;
  extra_gt?: InputMaybe<Scalars['BigInt']['input']>;
  extra_gte?: InputMaybe<Scalars['BigInt']['input']>;
  extra_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  extra_lt?: InputMaybe<Scalars['BigInt']['input']>;
  extra_lte?: InputMaybe<Scalars['BigInt']['input']>;
  extra_not?: InputMaybe<Scalars['BigInt']['input']>;
  extra_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  listingTime?: InputMaybe<Scalars['BigInt']['input']>;
  listingTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logNumber?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  orderbook?: InputMaybe<Scalars['Boolean']['input']>;
  orderbook_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  orderbook_not?: InputMaybe<Scalars['Boolean']['input']>;
  orderbook_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  paymentToken?: InputMaybe<Scalars['String']['input']>;
  paymentToken_?: InputMaybe<PaymentToken_Filter>;
  paymentToken_contains?: InputMaybe<Scalars['String']['input']>;
  paymentToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_gt?: InputMaybe<Scalars['String']['input']>;
  paymentToken_gte?: InputMaybe<Scalars['String']['input']>;
  paymentToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentToken_lt?: InputMaybe<Scalars['String']['input']>;
  paymentToken_lte?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staticExtraData?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_contains?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_gt?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_gte?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  staticExtraData_lt?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_lte?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_not?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  staticExtraData_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  staticTarget?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_contains?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_gt?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_gte?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  staticTarget_lt?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_lte?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_not?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  staticTarget_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Auction_OrderBy {
  BasePrice = 'basePrice',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Collection = 'collection',
  CollectionId = 'collection__id',
  CollectionNumberOfSales = 'collection__numberOfSales',
  CollectionTotalSales = 'collection__totalSales',
  CollectionTotalSupply = 'collection__totalSupply',
  EventType = 'eventType',
  ExpirationTime = 'expirationTime',
  Extra = 'extra',
  Hash = 'hash',
  Id = 'id',
  ListingTime = 'listingTime',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftTokenId = 'nft__tokenID',
  NftTotalSales = 'nft__totalSales',
  Orderbook = 'orderbook',
  PaymentToken = 'paymentToken',
  PaymentTokenAddress = 'paymentToken__address',
  PaymentTokenDecimals = 'paymentToken__decimals',
  PaymentTokenId = 'paymentToken__id',
  PaymentTokenNumberOfSales = 'paymentToken__numberOfSales',
  PaymentTokenSymbol = 'paymentToken__symbol',
  PaymentTokenTotalSalesByToken = 'paymentToken__totalSalesByToken',
  StaticExtraData = 'staticExtraData',
  StaticTarget = 'staticTarget',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  __typename?: 'Collection';
  event: Array<Event>;
  feesReceived: Array<Fee>;
  id: Scalars['ID']['output'];
  nft?: Maybe<Nft>;
  numberOfSales: Scalars['BigInt']['output'];
  owner: Account;
  sales: Array<Sale>;
  totalSales: Scalars['BigDecimal']['output'];
  totalSupply?: Maybe<Scalars['BigInt']['output']>;
};


export type CollectionEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};


export type CollectionFeesReceivedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Fee_Filter>;
};


export type CollectionSalesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Sale_Filter>;
};

export type Collection_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Collection_Filter>>>;
  event_?: InputMaybe<Event_Filter>;
  feesReceived_?: InputMaybe<Fee_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  numberOfSales?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Collection_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sales_?: InputMaybe<Sale_Filter>;
  totalSales?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSales_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Collection_OrderBy {
  Event = 'event',
  FeesReceived = 'feesReceived',
  Id = 'id',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftTokenId = 'nft__tokenID',
  NftTotalSales = 'nft__totalSales',
  NumberOfSales = 'numberOfSales',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfPurchases = 'owner__numberOfPurchases',
  OwnerNumberOfSales = 'owner__numberOfSales',
  OwnerTotalEarned = 'owner__totalEarned',
  OwnerTotalSpent = 'owner__totalSpent',
  Sales = 'sales',
  TotalSales = 'totalSales',
  TotalSupply = 'totalSupply'
}

export type Contract = {
  __typename?: 'Contract';
  codename?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  codename?: InputMaybe<Scalars['String']['input']>;
  codename_contains?: InputMaybe<Scalars['String']['input']>;
  codename_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  codename_ends_with?: InputMaybe<Scalars['String']['input']>;
  codename_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codename_gt?: InputMaybe<Scalars['String']['input']>;
  codename_gte?: InputMaybe<Scalars['String']['input']>;
  codename_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codename_lt?: InputMaybe<Scalars['String']['input']>;
  codename_lte?: InputMaybe<Scalars['String']['input']>;
  codename_not?: InputMaybe<Scalars['String']['input']>;
  codename_not_contains?: InputMaybe<Scalars['String']['input']>;
  codename_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  codename_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  codename_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codename_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codename_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  codename_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codename_starts_with?: InputMaybe<Scalars['String']['input']>;
  codename_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Contract_OrderBy {
  Codename = 'codename',
  Id = 'id',
  Name = 'name',
  Version = 'version'
}

export type Event = {
  blockHash: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  collection?: Maybe<Collection>;
  eventType: EventType;
  id: Scalars['ID']['output'];
  logNumber: Scalars['BigInt']['output'];
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export enum EventType {
  Auction = 'AUCTION',
  Fee = 'FEE',
  Sale = 'SALE'
}

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Collection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<EventType>;
  eventType_in?: InputMaybe<Array<EventType>>;
  eventType_not?: InputMaybe<EventType>;
  eventType_not_in?: InputMaybe<Array<EventType>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logNumber?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Event_OrderBy {
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Collection = 'collection',
  CollectionId = 'collection__id',
  CollectionNumberOfSales = 'collection__numberOfSales',
  CollectionTotalSales = 'collection__totalSales',
  CollectionTotalSupply = 'collection__totalSupply',
  EventType = 'eventType',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftTokenId = 'nft__tokenID',
  NftTotalSales = 'nft__totalSales',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type Fee = Event & {
  __typename?: 'Fee';
  blockHash: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  collection?: Maybe<Collection>;
  eventType: EventType;
  feeRecipient: Collection;
  id: Scalars['ID']['output'];
  logNumber: Scalars['BigInt']['output'];
  makerProtocolFee?: Maybe<Scalars['BigInt']['output']>;
  makerRelayerFee?: Maybe<Scalars['BigInt']['output']>;
  nft?: Maybe<Nft>;
  takerProtocolFee?: Maybe<Scalars['BigInt']['output']>;
  takerRelayerFee?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type Fee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Fee_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Collection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<EventType>;
  eventType_in?: InputMaybe<Array<EventType>>;
  eventType_not?: InputMaybe<EventType>;
  eventType_not_in?: InputMaybe<Array<EventType>>;
  feeRecipient?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_?: InputMaybe<Collection_Filter>;
  feeRecipient_contains?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_gt?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_gte?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeRecipient_lt?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_lte?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not_contains?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  feeRecipient_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_starts_with?: InputMaybe<Scalars['String']['input']>;
  feeRecipient_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logNumber?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerProtocolFee?: InputMaybe<Scalars['BigInt']['input']>;
  makerProtocolFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerProtocolFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerProtocolFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerProtocolFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerProtocolFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerRelayerFee?: InputMaybe<Scalars['BigInt']['input']>;
  makerRelayerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  makerRelayerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  makerRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  makerRelayerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  makerRelayerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  makerRelayerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  makerRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Fee_Filter>>>;
  takerProtocolFee?: InputMaybe<Scalars['BigInt']['input']>;
  takerProtocolFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  takerProtocolFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  takerProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerProtocolFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  takerProtocolFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  takerProtocolFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  takerProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerRelayerFee?: InputMaybe<Scalars['BigInt']['input']>;
  takerRelayerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  takerRelayerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  takerRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takerRelayerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  takerRelayerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  takerRelayerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  takerRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Fee_OrderBy {
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Collection = 'collection',
  CollectionId = 'collection__id',
  CollectionNumberOfSales = 'collection__numberOfSales',
  CollectionTotalSales = 'collection__totalSales',
  CollectionTotalSupply = 'collection__totalSupply',
  EventType = 'eventType',
  FeeRecipient = 'feeRecipient',
  FeeRecipientId = 'feeRecipient__id',
  FeeRecipientNumberOfSales = 'feeRecipient__numberOfSales',
  FeeRecipientTotalSales = 'feeRecipient__totalSales',
  FeeRecipientTotalSupply = 'feeRecipient__totalSupply',
  Id = 'id',
  LogNumber = 'logNumber',
  MakerProtocolFee = 'makerProtocolFee',
  MakerRelayerFee = 'makerRelayerFee',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftTokenId = 'nft__tokenID',
  NftTotalSales = 'nft__totalSales',
  TakerProtocolFee = 'takerProtocolFee',
  TakerRelayerFee = 'takerRelayerFee',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type Nft = {
  __typename?: 'Nft';
  collection?: Maybe<Collection>;
  /** All events */
  events: Array<Event>;
  id: Scalars['ID']['output'];
  numberOfSales: Scalars['BigInt']['output'];
  owner: Account;
  sale?: Maybe<Sale>;
  tokenID?: Maybe<Scalars['BigInt']['output']>;
  totalSales: Scalars['BigDecimal']['output'];
};


export type NftEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};

export type Nft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Collection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  events_?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numberOfSales?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sale?: InputMaybe<Scalars['String']['input']>;
  sale_?: InputMaybe<Sale_Filter>;
  sale_contains?: InputMaybe<Scalars['String']['input']>;
  sale_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sale_ends_with?: InputMaybe<Scalars['String']['input']>;
  sale_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sale_gt?: InputMaybe<Scalars['String']['input']>;
  sale_gte?: InputMaybe<Scalars['String']['input']>;
  sale_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sale_lt?: InputMaybe<Scalars['String']['input']>;
  sale_lte?: InputMaybe<Scalars['String']['input']>;
  sale_not?: InputMaybe<Scalars['String']['input']>;
  sale_not_contains?: InputMaybe<Scalars['String']['input']>;
  sale_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sale_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sale_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sale_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sale_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sale_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sale_starts_with?: InputMaybe<Scalars['String']['input']>;
  sale_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenID?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSales?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSales_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSales_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Nft_OrderBy {
  Collection = 'collection',
  CollectionId = 'collection__id',
  CollectionNumberOfSales = 'collection__numberOfSales',
  CollectionTotalSales = 'collection__totalSales',
  CollectionTotalSupply = 'collection__totalSupply',
  Events = 'events',
  Id = 'id',
  NumberOfSales = 'numberOfSales',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerNumberOfPurchases = 'owner__numberOfPurchases',
  OwnerNumberOfSales = 'owner__numberOfSales',
  OwnerTotalEarned = 'owner__totalEarned',
  OwnerTotalSpent = 'owner__totalSpent',
  Sale = 'sale',
  SaleBlockHash = 'sale__blockHash',
  SaleBlockNumber = 'sale__blockNumber',
  SaleBuyHash = 'sale__buyHash',
  SaleEventType = 'sale__eventType',
  SaleId = 'sale__id',
  SaleLogNumber = 'sale__logNumber',
  SalePrice = 'sale__price',
  SaleSellHash = 'sale__sellHash',
  SaleTimestamp = 'sale__timestamp',
  SaleTxHash = 'sale__txHash',
  TokenId = 'tokenID',
  TotalSales = 'totalSales'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PaymentToken = {
  __typename?: 'PaymentToken';
  address: Scalars['String']['output'];
  decimals?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  numberOfSales: Scalars['BigInt']['output'];
  sales: Array<Sale>;
  symbol?: Maybe<Scalars['String']['output']>;
  totalSalesByToken: Scalars['BigDecimal']['output'];
};


export type PaymentTokenSalesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Sale_Filter>;
};

export type PaymentToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<PaymentToken_Filter>>>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numberOfSales?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PaymentToken_Filter>>>;
  sales_?: InputMaybe<Sale_Filter>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSalesByToken?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSalesByToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSalesByToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSalesByToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSalesByToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSalesByToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSalesByToken_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSalesByToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PaymentToken_OrderBy {
  Address = 'address',
  Decimals = 'decimals',
  Id = 'id',
  NumberOfSales = 'numberOfSales',
  Sales = 'sales',
  Symbol = 'symbol',
  TotalSalesByToken = 'totalSalesByToken'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  event?: Maybe<Event>;
  events: Array<Event>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  paymentToken?: Maybe<PaymentToken>;
  paymentTokens: Array<PaymentToken>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};


export type QueryCollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collection_Filter>;
};


export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fee_Filter>;
};


export type QueryNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type QueryPaymentTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPaymentTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PaymentToken_Filter>;
};


export type QuerySaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};

export type Sale = Event & {
  __typename?: 'Sale';
  blockHash: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  buyHash: Scalars['Bytes']['output'];
  buyer: Account;
  collection?: Maybe<Collection>;
  eventType: EventType;
  id: Scalars['ID']['output'];
  logNumber: Scalars['BigInt']['output'];
  nft?: Maybe<Nft>;
  paymentToken?: Maybe<PaymentToken>;
  price: Scalars['BigDecimal']['output'];
  sellHash: Scalars['Bytes']['output'];
  seller: Account;
  timestamp: Scalars['BigInt']['output'];
  txHash: Scalars['Bytes']['output'];
};

export type Sale_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Sale_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyHash?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer?: InputMaybe<Scalars['String']['input']>;
  buyer_?: InputMaybe<Account_Filter>;
  buyer_contains?: InputMaybe<Scalars['String']['input']>;
  buyer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_ends_with?: InputMaybe<Scalars['String']['input']>;
  buyer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_gt?: InputMaybe<Scalars['String']['input']>;
  buyer_gte?: InputMaybe<Scalars['String']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  buyer_lt?: InputMaybe<Scalars['String']['input']>;
  buyer_lte?: InputMaybe<Scalars['String']['input']>;
  buyer_not?: InputMaybe<Scalars['String']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['String']['input']>;
  buyer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  buyer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  buyer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  buyer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_starts_with?: InputMaybe<Scalars['String']['input']>;
  buyer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Collection_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<EventType>;
  eventType_in?: InputMaybe<Array<EventType>>;
  eventType_not?: InputMaybe<EventType>;
  eventType_not_in?: InputMaybe<Array<EventType>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logNumber?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Sale_Filter>>>;
  paymentToken?: InputMaybe<Scalars['String']['input']>;
  paymentToken_?: InputMaybe<PaymentToken_Filter>;
  paymentToken_contains?: InputMaybe<Scalars['String']['input']>;
  paymentToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_gt?: InputMaybe<Scalars['String']['input']>;
  paymentToken_gte?: InputMaybe<Scalars['String']['input']>;
  paymentToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentToken_lt?: InputMaybe<Scalars['String']['input']>;
  paymentToken_lte?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sellHash?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sellHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sellHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller?: InputMaybe<Scalars['String']['input']>;
  seller_?: InputMaybe<Account_Filter>;
  seller_contains?: InputMaybe<Scalars['String']['input']>;
  seller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_ends_with?: InputMaybe<Scalars['String']['input']>;
  seller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_gt?: InputMaybe<Scalars['String']['input']>;
  seller_gte?: InputMaybe<Scalars['String']['input']>;
  seller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seller_lt?: InputMaybe<Scalars['String']['input']>;
  seller_lte?: InputMaybe<Scalars['String']['input']>;
  seller_not?: InputMaybe<Scalars['String']['input']>;
  seller_not_contains?: InputMaybe<Scalars['String']['input']>;
  seller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  seller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  seller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seller_starts_with?: InputMaybe<Scalars['String']['input']>;
  seller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Sale_OrderBy {
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  BuyHash = 'buyHash',
  Buyer = 'buyer',
  BuyerId = 'buyer__id',
  BuyerNumberOfPurchases = 'buyer__numberOfPurchases',
  BuyerNumberOfSales = 'buyer__numberOfSales',
  BuyerTotalEarned = 'buyer__totalEarned',
  BuyerTotalSpent = 'buyer__totalSpent',
  Collection = 'collection',
  CollectionId = 'collection__id',
  CollectionNumberOfSales = 'collection__numberOfSales',
  CollectionTotalSales = 'collection__totalSales',
  CollectionTotalSupply = 'collection__totalSupply',
  EventType = 'eventType',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftTokenId = 'nft__tokenID',
  NftTotalSales = 'nft__totalSales',
  PaymentToken = 'paymentToken',
  PaymentTokenAddress = 'paymentToken__address',
  PaymentTokenDecimals = 'paymentToken__decimals',
  PaymentTokenId = 'paymentToken__id',
  PaymentTokenNumberOfSales = 'paymentToken__numberOfSales',
  PaymentTokenSymbol = 'paymentToken__symbol',
  PaymentTokenTotalSalesByToken = 'paymentToken__totalSalesByToken',
  Price = 'price',
  SellHash = 'sellHash',
  Seller = 'seller',
  SellerId = 'seller__id',
  SellerNumberOfPurchases = 'seller__numberOfPurchases',
  SellerNumberOfSales = 'seller__numberOfSales',
  SellerTotalEarned = 'seller__totalEarned',
  SellerTotalSpent = 'seller__totalSpent',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  event?: Maybe<Event>;
  events: Array<Event>;
  fee?: Maybe<Fee>;
  fees: Array<Fee>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  paymentToken?: Maybe<PaymentToken>;
  paymentTokens: Array<PaymentToken>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};


export type SubscriptionCollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collection_Filter>;
};


export type SubscriptionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Fee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Fee_Filter>;
};


export type SubscriptionNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type SubscriptionPaymentTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPaymentTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PaymentToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PaymentToken_Filter>;
};


export type SubscriptionSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Event: ( Auction ) | ( Fee ) | ( Sale );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_Filter;
  Account_orderBy: Account_OrderBy;
  Auction: ResolverTypeWrapper<Auction>;
  Auction_filter: Auction_Filter;
  Auction_orderBy: Auction_OrderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Collection: ResolverTypeWrapper<Collection>;
  Collection_filter: Collection_Filter;
  Collection_orderBy: Collection_OrderBy;
  Contract: ResolverTypeWrapper<Contract>;
  Contract_filter: Contract_Filter;
  Contract_orderBy: Contract_OrderBy;
  Event: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Event']>;
  EventType: EventType;
  Event_filter: Event_Filter;
  Event_orderBy: Event_OrderBy;
  Fee: ResolverTypeWrapper<Fee>;
  Fee_filter: Fee_Filter;
  Fee_orderBy: Fee_OrderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  Nft: ResolverTypeWrapper<Nft>;
  Nft_filter: Nft_Filter;
  Nft_orderBy: Nft_OrderBy;
  OrderDirection: OrderDirection;
  PaymentToken: ResolverTypeWrapper<PaymentToken>;
  PaymentToken_filter: PaymentToken_Filter;
  PaymentToken_orderBy: PaymentToken_OrderBy;
  Query: ResolverTypeWrapper<{}>;
  Sale: ResolverTypeWrapper<Sale>;
  Sale_filter: Sale_Filter;
  Sale_orderBy: Sale_OrderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Account_filter: Account_Filter;
  Auction: Auction;
  Auction_filter: Auction_Filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Collection: Collection;
  Collection_filter: Collection_Filter;
  Contract: Contract;
  Contract_filter: Contract_Filter;
  Event: ResolversInterfaceTypes<ResolversParentTypes>['Event'];
  Event_filter: Event_Filter;
  Fee: Fee;
  Fee_filter: Fee_Filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Nft: Nft;
  Nft_filter: Nft_Filter;
  PaymentToken: PaymentToken;
  PaymentToken_filter: PaymentToken_Filter;
  Query: {};
  Sale: Sale;
  Sale_filter: Sale_Filter;
  String: Scalars['String']['output'];
  Subscription: {};
  _Block_: _Block_;
  _Meta_: _Meta_;
};

export type DerivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type DerivedFromDirectiveResolver<Result, Parent, ContextType = any, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = { };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type SubgraphIdDirectiveResolver<Result, Parent, ContextType = any, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nftOwnedAndCollection?: Resolver<Array<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<AccountNftOwnedAndCollectionArgs, 'first' | 'skip'>>;
  numberOfPurchases?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  numberOfSales?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  purchases?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<AccountPurchasesArgs, 'first' | 'skip'>>;
  sales?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<AccountSalesArgs, 'first' | 'skip'>>;
  totalEarned?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSpent?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction']> = {
  basePrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  expirationTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  listingTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  logNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType>;
  orderbook?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  paymentToken?: Resolver<Maybe<ResolversTypes['PaymentToken']>, ParentType, ContextType>;
  staticExtraData?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  staticTarget?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  event?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<CollectionEventArgs, 'first' | 'skip'>>;
  feesReceived?: Resolver<Array<ResolversTypes['Fee']>, ParentType, ContextType, RequireFields<CollectionFeesReceivedArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType>;
  numberOfSales?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  sales?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<CollectionSalesArgs, 'first' | 'skip'>>;
  totalSales?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  __resolveType: TypeResolveFn<'Auction' | 'Fee' | 'Sale', ParentType, ContextType>;
  blockHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
};

export type FeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fee'] = ResolversParentTypes['Fee']> = {
  blockHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  feeRecipient?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  makerProtocolFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  makerRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType>;
  takerProtocolFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  takerRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type NftResolvers<ContextType = any, ParentType extends ResolversParentTypes['Nft'] = ResolversParentTypes['Nft']> = {
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<NftEventsArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfSales?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  sale?: Resolver<Maybe<ResolversTypes['Sale']>, ParentType, ContextType>;
  tokenID?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalSales?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentToken'] = ResolversParentTypes['PaymentToken']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfSales?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sales?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<PaymentTokenSalesArgs, 'first' | 'skip'>>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalSalesByToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  auction?: Resolver<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryAuctionArgs, 'id' | 'subgraphError'>>;
  auctions?: Resolver<Array<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryAuctionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionArgs, 'id' | 'subgraphError'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractArgs, 'id' | 'subgraphError'>>;
  contracts?: Resolver<Array<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType, RequireFields<QueryFeeArgs, 'id' | 'subgraphError'>>;
  fees?: Resolver<Array<ResolversTypes['Fee']>, ParentType, ContextType, RequireFields<QueryFeesArgs, 'first' | 'skip' | 'subgraphError'>>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<QueryNftArgs, 'id' | 'subgraphError'>>;
  nfts?: Resolver<Array<ResolversTypes['Nft']>, ParentType, ContextType, RequireFields<QueryNftsArgs, 'first' | 'skip' | 'subgraphError'>>;
  paymentToken?: Resolver<Maybe<ResolversTypes['PaymentToken']>, ParentType, ContextType, RequireFields<QueryPaymentTokenArgs, 'id' | 'subgraphError'>>;
  paymentTokens?: Resolver<Array<ResolversTypes['PaymentToken']>, ParentType, ContextType, RequireFields<QueryPaymentTokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  sale?: Resolver<Maybe<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<QuerySaleArgs, 'id' | 'subgraphError'>>;
  sales?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<QuerySalesArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type SaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']> = {
  blockHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  buyHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['Nft']>, ParentType, ContextType>;
  paymentToken?: Resolver<Maybe<ResolversTypes['PaymentToken']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sellHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionAccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  auction?: SubscriptionResolver<Maybe<ResolversTypes['Auction']>, "auction", ParentType, ContextType, RequireFields<SubscriptionAuctionArgs, 'id' | 'subgraphError'>>;
  auctions?: SubscriptionResolver<Array<ResolversTypes['Auction']>, "auctions", ParentType, ContextType, RequireFields<SubscriptionAuctionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  collection?: SubscriptionResolver<Maybe<ResolversTypes['Collection']>, "collection", ParentType, ContextType, RequireFields<SubscriptionCollectionArgs, 'id' | 'subgraphError'>>;
  collections?: SubscriptionResolver<Array<ResolversTypes['Collection']>, "collections", ParentType, ContextType, RequireFields<SubscriptionCollectionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  contract?: SubscriptionResolver<Maybe<ResolversTypes['Contract']>, "contract", ParentType, ContextType, RequireFields<SubscriptionContractArgs, 'id' | 'subgraphError'>>;
  contracts?: SubscriptionResolver<Array<ResolversTypes['Contract']>, "contracts", ParentType, ContextType, RequireFields<SubscriptionContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptionEventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptionEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  fee?: SubscriptionResolver<Maybe<ResolversTypes['Fee']>, "fee", ParentType, ContextType, RequireFields<SubscriptionFeeArgs, 'id' | 'subgraphError'>>;
  fees?: SubscriptionResolver<Array<ResolversTypes['Fee']>, "fees", ParentType, ContextType, RequireFields<SubscriptionFeesArgs, 'first' | 'skip' | 'subgraphError'>>;
  nft?: SubscriptionResolver<Maybe<ResolversTypes['Nft']>, "nft", ParentType, ContextType, RequireFields<SubscriptionNftArgs, 'id' | 'subgraphError'>>;
  nfts?: SubscriptionResolver<Array<ResolversTypes['Nft']>, "nfts", ParentType, ContextType, RequireFields<SubscriptionNftsArgs, 'first' | 'skip' | 'subgraphError'>>;
  paymentToken?: SubscriptionResolver<Maybe<ResolversTypes['PaymentToken']>, "paymentToken", ParentType, ContextType, RequireFields<SubscriptionPaymentTokenArgs, 'id' | 'subgraphError'>>;
  paymentTokens?: SubscriptionResolver<Array<ResolversTypes['PaymentToken']>, "paymentTokens", ParentType, ContextType, RequireFields<SubscriptionPaymentTokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  sale?: SubscriptionResolver<Maybe<ResolversTypes['Sale']>, "sale", ParentType, ContextType, RequireFields<SubscriptionSaleArgs, 'id' | 'subgraphError'>>;
  sales?: SubscriptionResolver<Array<ResolversTypes['Sale']>, "sales", ParentType, ContextType, RequireFields<SubscriptionSalesArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type _Block_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = {
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Meta_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = {
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Auction?: AuctionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Collection?: CollectionResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Fee?: FeeResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Nft?: NftResolvers<ContextType>;
  PaymentToken?: PaymentTokenResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sale?: SaleResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};

export type GetSalesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type GetSalesQuery = { __typename?: 'Query', sales: Array<{ __typename?: 'Sale', txHash: any, price: any, buyer: { __typename?: 'Account', id: string }, seller: { __typename?: 'Account', id: string } }> };


export const GetSalesDocument = `
    query GetSales($skip: Int = 0, $first: Int = 100, $orderBy: Sale_orderBy, $orderDirection: OrderDirection, $where: Sale_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  sales(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    txHash
    buyer {
      id
    }
    seller {
      id
    }
    price
  }
}
    `;
export const useGetSalesQuery = <
      TData = GetSalesQuery,
      TError = unknown
    >(
      variables?: GetSalesQueryVariables,
      options?: UseQueryOptions<GetSalesQuery, TError, TData>
    ) =>
    useQuery<GetSalesQuery, TError, TData>(
      variables === undefined ? ['GetSales'] : ['GetSales', variables],
      fetchData<GetSalesQuery, GetSalesQueryVariables>(GetSalesDocument, variables),
      options
    );
export const namedOperations = {
  Query: {
    GetSales: 'GetSales'
  }
}