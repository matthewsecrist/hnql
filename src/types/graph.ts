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

export type Comment = {
  __typename?: 'Comment';
  author: User;
  id: Scalars['Int']['output'];
  replies: RepliesConnection;
  text?: Maybe<Scalars['String']['output']>;
  type: ItemType;
};


export type CommentRepliesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: Scalars['Int']['input'];
};

export type Item = Comment | Story;

export enum ItemType {
  Comment = 'Comment',
  Job = 'Job',
  Poll = 'Poll',
  PollOpt = 'PollOpt',
  Story = 'Story'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  totalResults: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  story?: Maybe<Story>;
  user?: Maybe<User>;
};


export type QueryStoryArgs = {
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

export type Story = {
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
  Item: ( Comment ) | ( Story );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Item']>;
  ItemType: ItemType;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  RepliesConnection: ResolverTypeWrapper<RepliesConnection>;
  ReplyNode: ResolverTypeWrapper<ReplyNode>;
  Story: ResolverTypeWrapper<Story>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: ResolversUnionTypes<ResolversParentTypes>['Item'];
  PageInfo: PageInfo;
  Query: {};
  RepliesConnection: RepliesConnection;
  ReplyNode: ReplyNode;
  Story: Story;
  String: Scalars['String']['output'];
  User: User;
};

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replies?: Resolver<ResolversTypes['RepliesConnection'], ParentType, ContextType, RequireFields<CommentRepliesArgs, 'first'>>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'Comment' | 'Story', ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  story?: Resolver<Maybe<ResolversTypes['Story']>, ParentType, ContextType, RequireFields<QueryStoryArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'username'>>;
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

export type Resolvers<ContextType = Context> = {
  Comment?: CommentResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RepliesConnection?: RepliesConnectionResolvers<ContextType>;
  ReplyNode?: ReplyNodeResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

