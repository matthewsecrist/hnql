import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../graph/index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = Item & {
  __typename?: 'Comment';
  author: User;
  id: Scalars['Int']['output'];
  replies: RepliesConnection;
  text: Scalars['String']['output'];
  type: ItemType;
};


export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};

export type Error = {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Item = {
  author: User;
  id: Scalars['Int']['output'];
  type: ItemType;
};

export type ItemNode = {
  __typename?: 'ItemNode';
  node: ItemResult;
};

export type ItemResult = Comment | Job | NotFoundError | Poll | PollOption | Story;

export enum ItemType {
  Comment = 'Comment',
  Job = 'Job',
  Poll = 'Poll',
  PollOpt = 'PollOpt',
  Story = 'Story'
}

export type ItemsResult = {
  __typename?: 'ItemsResult';
  edges: Array<Maybe<ItemNode>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Job = Item & {
  __typename?: 'Job';
  author: User;
  id: Scalars['Int']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type: ItemType;
  url?: Maybe<Scalars['String']['output']>;
};

export type JobItemNode = {
  __typename?: 'JobItemNode';
  node: Job;
};

export type JobsResult = {
  __typename?: 'JobsResult';
  edges: Array<Maybe<JobItemNode>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NotFoundError = Error & {
  __typename?: 'NotFoundError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  totalResults: Scalars['Int']['output'];
};

export type Poll = Item & {
  __typename?: 'Poll';
  author: User;
  id: Scalars['Int']['output'];
  options: PollOptionConnection;
  replies: RepliesConnection;
  score?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type: ItemType;
};


export type PollOptionsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};


export type PollRepliesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};

export type PollOption = Item & {
  __typename?: 'PollOption';
  author: User;
  id: Scalars['Int']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  text: Scalars['String']['output'];
  type: ItemType;
};

export type PollOptionConnection = {
  __typename?: 'PollOptionConnection';
  edges: Array<Maybe<PollOptionNode>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PollOptionNode = {
  __typename?: 'PollOptionNode';
  node?: Maybe<PollOption>;
};

export type Query = {
  __typename?: 'Query';
  ask: ItemsResult;
  best: ItemsResult;
  item: ItemResult;
  jobs: JobsResult;
  new: ItemsResult;
  top: ItemsResult;
  user: UserResult;
};


export type QueryAskArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};


export type QueryBestArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};


export type QueryNewArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};


export type QueryTopArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  username: Scalars['ID']['input'];
};

export type RepliesConnection = {
  __typename?: 'RepliesConnection';
  edges: Array<Maybe<ReplyNode>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ReplyNode = {
  __typename?: 'ReplyNode';
  node?: Maybe<Comment>;
};

export type Story = Item & {
  __typename?: 'Story';
  author: User;
  id: Scalars['Int']['output'];
  replies: RepliesConnection;
  score?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type: ItemType;
  url?: Maybe<Scalars['String']['output']>;
};


export type StoryRepliesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  items?: Maybe<UserItemsConnection>;
  karma?: Maybe<Scalars['Int']['output']>;
  username: Scalars['ID']['output'];
};


export type UserItemsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};

export type UserItem = Comment | Job | Poll | PollOption | Story;

export type UserItemNode = {
  __typename?: 'UserItemNode';
  node?: Maybe<UserItem>;
};

export type UserItemsConnection = {
  __typename?: 'UserItemsConnection';
  edges: Array<Maybe<UserItemNode>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UserResult = NotFoundError | User;



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

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  ItemResult: ( Omit<Comment, 'author' | 'replies'> & { author: _RefType['User'], replies: _RefType['RepliesConnection'] } ) | ( Omit<Job, 'author'> & { author: _RefType['User'] } ) | ( NotFoundError ) | ( Omit<Poll, 'author' | 'options' | 'replies'> & { author: _RefType['User'], options: _RefType['PollOptionConnection'], replies: _RefType['RepliesConnection'] } ) | ( Omit<PollOption, 'author'> & { author: _RefType['User'] } ) | ( Omit<Story, 'author' | 'replies'> & { author: _RefType['User'], replies: _RefType['RepliesConnection'] } );
  UserItem: ( Omit<Comment, 'author' | 'replies'> & { author: _RefType['User'], replies: _RefType['RepliesConnection'] } ) | ( Omit<Job, 'author'> & { author: _RefType['User'] } ) | ( Omit<Poll, 'author' | 'options' | 'replies'> & { author: _RefType['User'], options: _RefType['PollOptionConnection'], replies: _RefType['RepliesConnection'] } ) | ( Omit<PollOption, 'author'> & { author: _RefType['User'] } ) | ( Omit<Story, 'author' | 'replies'> & { author: _RefType['User'], replies: _RefType['RepliesConnection'] } );
  UserResult: ( NotFoundError ) | ( Omit<User, 'items'> & { items?: Maybe<_RefType['UserItemsConnection']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Error: ( NotFoundError );
  Item: ( Omit<Comment, 'author' | 'replies'> & { author: _RefType['User'], replies: _RefType['RepliesConnection'] } ) | ( Omit<Job, 'author'> & { author: _RefType['User'] } ) | ( Omit<Poll, 'author' | 'options' | 'replies'> & { author: _RefType['User'], options: _RefType['PollOptionConnection'], replies: _RefType['RepliesConnection'] } ) | ( Omit<PollOption, 'author'> & { author: _RefType['User'] } ) | ( Omit<Story, 'author' | 'replies'> & { author: _RefType['User'], replies: _RefType['RepliesConnection'] } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Omit<Comment, 'author' | 'replies'> & { author: ResolversTypes['User'], replies: ResolversTypes['RepliesConnection'] }>;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Error']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Item']>;
  ItemNode: ResolverTypeWrapper<Omit<ItemNode, 'node'> & { node: ResolversTypes['ItemResult'] }>;
  ItemResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ItemResult']>;
  ItemType: ItemType;
  ItemsResult: ResolverTypeWrapper<Omit<ItemsResult, 'edges'> & { edges: Array<Maybe<ResolversTypes['ItemNode']>> }>;
  Job: ResolverTypeWrapper<Omit<Job, 'author'> & { author: ResolversTypes['User'] }>;
  JobItemNode: ResolverTypeWrapper<Omit<JobItemNode, 'node'> & { node: ResolversTypes['Job'] }>;
  JobsResult: ResolverTypeWrapper<Omit<JobsResult, 'edges'> & { edges: Array<Maybe<ResolversTypes['JobItemNode']>> }>;
  NotFoundError: ResolverTypeWrapper<NotFoundError>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Poll: ResolverTypeWrapper<Omit<Poll, 'author' | 'options' | 'replies'> & { author: ResolversTypes['User'], options: ResolversTypes['PollOptionConnection'], replies: ResolversTypes['RepliesConnection'] }>;
  PollOption: ResolverTypeWrapper<Omit<PollOption, 'author'> & { author: ResolversTypes['User'] }>;
  PollOptionConnection: ResolverTypeWrapper<Omit<PollOptionConnection, 'edges'> & { edges: Array<Maybe<ResolversTypes['PollOptionNode']>> }>;
  PollOptionNode: ResolverTypeWrapper<Omit<PollOptionNode, 'node'> & { node?: Maybe<ResolversTypes['PollOption']> }>;
  Query: ResolverTypeWrapper<{}>;
  RepliesConnection: ResolverTypeWrapper<Omit<RepliesConnection, 'edges'> & { edges: Array<Maybe<ResolversTypes['ReplyNode']>> }>;
  ReplyNode: ResolverTypeWrapper<Omit<ReplyNode, 'node'> & { node?: Maybe<ResolversTypes['Comment']> }>;
  Story: ResolverTypeWrapper<Omit<Story, 'author' | 'replies'> & { author: ResolversTypes['User'], replies: ResolversTypes['RepliesConnection'] }>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<Omit<User, 'items'> & { items?: Maybe<ResolversTypes['UserItemsConnection']> }>;
  UserItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UserItem']>;
  UserItemNode: ResolverTypeWrapper<Omit<UserItemNode, 'node'> & { node?: Maybe<ResolversTypes['UserItem']> }>;
  UserItemsConnection: ResolverTypeWrapper<Omit<UserItemsConnection, 'edges'> & { edges: Array<Maybe<ResolversTypes['UserItemNode']>> }>;
  UserResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UserResult']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Omit<Comment, 'author' | 'replies'> & { author: ResolversParentTypes['User'], replies: ResolversParentTypes['RepliesConnection'] };
  Error: ResolversInterfaceTypes<ResolversParentTypes>['Error'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: ResolversInterfaceTypes<ResolversParentTypes>['Item'];
  ItemNode: Omit<ItemNode, 'node'> & { node: ResolversParentTypes['ItemResult'] };
  ItemResult: ResolversUnionTypes<ResolversParentTypes>['ItemResult'];
  ItemsResult: Omit<ItemsResult, 'edges'> & { edges: Array<Maybe<ResolversParentTypes['ItemNode']>> };
  Job: Omit<Job, 'author'> & { author: ResolversParentTypes['User'] };
  JobItemNode: Omit<JobItemNode, 'node'> & { node: ResolversParentTypes['Job'] };
  JobsResult: Omit<JobsResult, 'edges'> & { edges: Array<Maybe<ResolversParentTypes['JobItemNode']>> };
  NotFoundError: NotFoundError;
  PageInfo: PageInfo;
  Poll: Omit<Poll, 'author' | 'options' | 'replies'> & { author: ResolversParentTypes['User'], options: ResolversParentTypes['PollOptionConnection'], replies: ResolversParentTypes['RepliesConnection'] };
  PollOption: Omit<PollOption, 'author'> & { author: ResolversParentTypes['User'] };
  PollOptionConnection: Omit<PollOptionConnection, 'edges'> & { edges: Array<Maybe<ResolversParentTypes['PollOptionNode']>> };
  PollOptionNode: Omit<PollOptionNode, 'node'> & { node?: Maybe<ResolversParentTypes['PollOption']> };
  Query: {};
  RepliesConnection: Omit<RepliesConnection, 'edges'> & { edges: Array<Maybe<ResolversParentTypes['ReplyNode']>> };
  ReplyNode: Omit<ReplyNode, 'node'> & { node?: Maybe<ResolversParentTypes['Comment']> };
  Story: Omit<Story, 'author' | 'replies'> & { author: ResolversParentTypes['User'], replies: ResolversParentTypes['RepliesConnection'] };
  String: Scalars['String']['output'];
  User: Omit<User, 'items'> & { items?: Maybe<ResolversParentTypes['UserItemsConnection']> };
  UserItem: ResolversUnionTypes<ResolversParentTypes>['UserItem'];
  UserItemNode: Omit<UserItemNode, 'node'> & { node?: Maybe<ResolversParentTypes['UserItem']> };
  UserItemsConnection: Omit<UserItemsConnection, 'edges'> & { edges: Array<Maybe<ResolversParentTypes['UserItemNode']>> };
  UserResult: ResolversUnionTypes<ResolversParentTypes>['UserResult'];
};

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replies?: Resolver<ResolversTypes['RepliesConnection'], ParentType, ContextType, RequireFields<CommentRepliesArgs, 'first'>>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  __resolveType: TypeResolveFn<'NotFoundError', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'Comment' | 'Job' | 'Poll' | 'PollOption' | 'Story', ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
};

export type ItemNodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ItemNode'] = ResolversParentTypes['ItemNode']> = {
  node?: Resolver<ResolversTypes['ItemResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ItemResult'] = ResolversParentTypes['ItemResult']> = {
  __resolveType: TypeResolveFn<'Comment' | 'Job' | 'NotFoundError' | 'Poll' | 'PollOption' | 'Story', ParentType, ContextType>;
};

export type ItemsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ItemsResult'] = ResolversParentTypes['ItemsResult']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['ItemNode']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobItemNodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['JobItemNode'] = ResolversParentTypes['JobItemNode']> = {
  node?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['JobsResult'] = ResolversParentTypes['JobsResult']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['JobItemNode']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotFoundErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['NotFoundError'] = ResolversParentTypes['NotFoundError']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PollResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Poll'] = ResolversParentTypes['Poll']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  options?: Resolver<ResolversTypes['PollOptionConnection'], ParentType, ContextType, RequireFields<PollOptionsArgs, 'first'>>;
  replies?: Resolver<ResolversTypes['RepliesConnection'], ParentType, ContextType, RequireFields<PollRepliesArgs, 'first'>>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PollOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PollOption'] = ResolversParentTypes['PollOption']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PollOptionConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PollOptionConnection'] = ResolversParentTypes['PollOptionConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['PollOptionNode']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PollOptionNodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PollOptionNode'] = ResolversParentTypes['PollOptionNode']> = {
  node?: Resolver<Maybe<ResolversTypes['PollOption']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ask?: Resolver<ResolversTypes['ItemsResult'], ParentType, ContextType, RequireFields<QueryAskArgs, 'first'>>;
  best?: Resolver<ResolversTypes['ItemsResult'], ParentType, ContextType, RequireFields<QueryBestArgs, 'first'>>;
  item?: Resolver<ResolversTypes['ItemResult'], ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  jobs?: Resolver<ResolversTypes['JobsResult'], ParentType, ContextType, RequireFields<QueryJobsArgs, 'first'>>;
  new?: Resolver<ResolversTypes['ItemsResult'], ParentType, ContextType, RequireFields<QueryNewArgs, 'first'>>;
  top?: Resolver<ResolversTypes['ItemsResult'], ParentType, ContextType, RequireFields<QueryTopArgs, 'first'>>;
  user?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
};

export type RepliesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RepliesConnection'] = ResolversParentTypes['RepliesConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['ReplyNode']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReplyNodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReplyNode'] = ResolversParentTypes['ReplyNode']> = {
  node?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replies?: Resolver<ResolversTypes['RepliesConnection'], ParentType, ContextType, RequireFields<StoryRepliesArgs, 'first'>>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<ResolversTypes['UserItemsConnection']>, ParentType, ContextType, RequireFields<UserItemsArgs, 'first'>>;
  karma?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserItem'] = ResolversParentTypes['UserItem']> = {
  __resolveType: TypeResolveFn<'Comment' | 'Job' | 'Poll' | 'PollOption' | 'Story', ParentType, ContextType>;
};

export type UserItemNodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserItemNode'] = ResolversParentTypes['UserItemNode']> = {
  node?: Resolver<Maybe<ResolversTypes['UserItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemsConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserItemsConnection'] = ResolversParentTypes['UserItemsConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['UserItemNode']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']> = {
  __resolveType: TypeResolveFn<'NotFoundError' | 'User', ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Comment?: CommentResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemNode?: ItemNodeResolvers<ContextType>;
  ItemResult?: ItemResultResolvers<ContextType>;
  ItemsResult?: ItemsResultResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobItemNode?: JobItemNodeResolvers<ContextType>;
  JobsResult?: JobsResultResolvers<ContextType>;
  NotFoundError?: NotFoundErrorResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Poll?: PollResolvers<ContextType>;
  PollOption?: PollOptionResolvers<ContextType>;
  PollOptionConnection?: PollOptionConnectionResolvers<ContextType>;
  PollOptionNode?: PollOptionNodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RepliesConnection?: RepliesConnectionResolvers<ContextType>;
  ReplyNode?: ReplyNodeResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserItem?: UserItemResolvers<ContextType>;
  UserItemNode?: UserItemNodeResolvers<ContextType>;
  UserItemsConnection?: UserItemsConnectionResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
};

