import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../graph/index';
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

export type ItemResult = Comment | Job | NotFoundError | Poll | PollOption | Story;

export enum ItemType {
  Comment = 'Comment',
  Job = 'Job',
  Poll = 'Poll',
  PollOpt = 'PollOpt',
  Story = 'Story'
}

export type Job = Item & {
  __typename?: 'Job';
  author: User;
  id: Scalars['Int']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type: ItemType;
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
  item: ItemResult;
  user: UserResult;
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
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
  karma?: Maybe<Scalars['Int']['output']>;
  username: Scalars['ID']['output'];
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
  ItemResult: ( Comment ) | ( Job ) | ( NotFoundError ) | ( Poll ) | ( PollOption ) | ( Story );
  UserResult: ( NotFoundError ) | ( User );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Error: ( NotFoundError );
  Item: ( Comment ) | ( Job ) | ( Poll ) | ( PollOption ) | ( Story );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Error']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Item']>;
  ItemResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ItemResult']>;
  ItemType: ItemType;
  Job: ResolverTypeWrapper<Job>;
  NotFoundError: ResolverTypeWrapper<NotFoundError>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Poll: ResolverTypeWrapper<Poll>;
  PollOption: ResolverTypeWrapper<PollOption>;
  PollOptionConnection: ResolverTypeWrapper<PollOptionConnection>;
  PollOptionNode: ResolverTypeWrapper<PollOptionNode>;
  Query: ResolverTypeWrapper<{}>;
  RepliesConnection: ResolverTypeWrapper<RepliesConnection>;
  ReplyNode: ResolverTypeWrapper<ReplyNode>;
  Story: ResolverTypeWrapper<Story>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UserResult']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  Error: ResolversInterfaceTypes<ResolversParentTypes>['Error'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: ResolversInterfaceTypes<ResolversParentTypes>['Item'];
  ItemResult: ResolversUnionTypes<ResolversParentTypes>['ItemResult'];
  Job: Job;
  NotFoundError: NotFoundError;
  PageInfo: PageInfo;
  Poll: Poll;
  PollOption: PollOption;
  PollOptionConnection: PollOptionConnection;
  PollOptionNode: PollOptionNode;
  Query: {};
  RepliesConnection: RepliesConnection;
  ReplyNode: ReplyNode;
  Story: Story;
  String: Scalars['String']['output'];
  User: User;
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

export type ItemResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ItemResult'] = ResolversParentTypes['ItemResult']> = {
  __resolveType: TypeResolveFn<'Comment' | 'Job' | 'NotFoundError' | 'Poll' | 'PollOption' | 'Story', ParentType, ContextType>;
};

export type JobResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
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
  item?: Resolver<ResolversTypes['ItemResult'], ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
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
  karma?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']> = {
  __resolveType: TypeResolveFn<'NotFoundError' | 'User', ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Comment?: CommentResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemResult?: ItemResultResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
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
  UserResult?: UserResultResolvers<ContextType>;
};

