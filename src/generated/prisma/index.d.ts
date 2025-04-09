
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>
/**
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>
/**
 * Model Ambassador
 * 
 */
export type Ambassador = $Result.DefaultSelection<Prisma.$AmbassadorPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QRCodes
 * const qRCodes = await prisma.qRCode.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more QRCodes
   * const qRCodes = await prisma.qRCode.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ambassador`: Exposes CRUD operations for the **Ambassador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ambassadors
    * const ambassadors = await prisma.ambassador.findMany()
    * ```
    */
  get ambassador(): Prisma.AmbassadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    QRCode: 'QRCode',
    Analytics: 'Analytics',
    Ambassador: 'Ambassador',
    Purchase: 'Purchase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "qRCode" | "analytics" | "ambassador" | "purchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QRCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QRCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
          }
        }
      }
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
      Ambassador: {
        payload: Prisma.$AmbassadorPayload<ExtArgs>
        fields: Prisma.AmbassadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmbassadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmbassadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>
          }
          findFirst: {
            args: Prisma.AmbassadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmbassadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>
          }
          findMany: {
            args: Prisma.AmbassadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>[]
          }
          create: {
            args: Prisma.AmbassadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>
          }
          createMany: {
            args: Prisma.AmbassadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmbassadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>[]
          }
          delete: {
            args: Prisma.AmbassadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>
          }
          update: {
            args: Prisma.AmbassadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>
          }
          deleteMany: {
            args: Prisma.AmbassadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmbassadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmbassadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>[]
          }
          upsert: {
            args: Prisma.AmbassadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbassadorPayload>
          }
          aggregate: {
            args: Prisma.AmbassadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmbassador>
          }
          groupBy: {
            args: Prisma.AmbassadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmbassadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmbassadorCountArgs<ExtArgs>
            result: $Utils.Optional<AmbassadorCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    qRCode?: QRCodeOmit
    analytics?: AnalyticsOmit
    ambassador?: AmbassadorOmit
    purchase?: PurchaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QRCodeCountOutputType
   */

  export type QRCodeCountOutputType = {
    analytics: number
    purchases: number
  }

  export type QRCodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | QRCodeCountOutputTypeCountAnalyticsArgs
    purchases?: boolean | QRCodeCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * QRCodeCountOutputType without action
   */
  export type QRCodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCodeCountOutputType
     */
    select?: QRCodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QRCodeCountOutputType without action
   */
  export type QRCodeCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
  }

  /**
   * QRCodeCountOutputType without action
   */
  export type QRCodeCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Count Type AmbassadorCountOutputType
   */

  export type AmbassadorCountOutputType = {
    qrCodes: number
    purchases: number
  }

  export type AmbassadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | AmbassadorCountOutputTypeCountQrCodesArgs
    purchases?: boolean | AmbassadorCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * AmbassadorCountOutputType without action
   */
  export type AmbassadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbassadorCountOutputType
     */
    select?: AmbassadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmbassadorCountOutputType without action
   */
  export type AmbassadorCountOutputTypeCountQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
  }

  /**
   * AmbassadorCountOutputType without action
   */
  export type AmbassadorCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeMinAggregateOutputType = {
    id: string | null
    name: string | null
    targetUrl: string | null
    proxyUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    isMobileApp: boolean | null
    iosAppUrl: string | null
    androidAppUrl: string | null
    iosDeeplink: string | null
    androidDeeplink: string | null
    universalDeeplink: string | null
    isSubscriptionOffer: boolean | null
    subscriptionWebUrl: string | null
    ambassadorId: string | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    targetUrl: string | null
    proxyUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    isMobileApp: boolean | null
    iosAppUrl: string | null
    androidAppUrl: string | null
    iosDeeplink: string | null
    androidDeeplink: string | null
    universalDeeplink: string | null
    isSubscriptionOffer: boolean | null
    subscriptionWebUrl: string | null
    ambassadorId: string | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    name: number
    targetUrl: number
    proxyUrl: number
    createdAt: number
    updatedAt: number
    isActive: number
    isMobileApp: number
    iosAppUrl: number
    androidAppUrl: number
    iosDeeplink: number
    androidDeeplink: number
    universalDeeplink: number
    isSubscriptionOffer: number
    subscriptionWebUrl: number
    ambassadorId: number
    _all: number
  }


  export type QRCodeMinAggregateInputType = {
    id?: true
    name?: true
    targetUrl?: true
    proxyUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    isMobileApp?: true
    iosAppUrl?: true
    androidAppUrl?: true
    iosDeeplink?: true
    androidDeeplink?: true
    universalDeeplink?: true
    isSubscriptionOffer?: true
    subscriptionWebUrl?: true
    ambassadorId?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    name?: true
    targetUrl?: true
    proxyUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    isMobileApp?: true
    iosAppUrl?: true
    androidAppUrl?: true
    iosDeeplink?: true
    androidDeeplink?: true
    universalDeeplink?: true
    isSubscriptionOffer?: true
    subscriptionWebUrl?: true
    ambassadorId?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    name?: true
    targetUrl?: true
    proxyUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    isMobileApp?: true
    iosAppUrl?: true
    androidAppUrl?: true
    iosDeeplink?: true
    androidDeeplink?: true
    universalDeeplink?: true
    isSubscriptionOffer?: true
    subscriptionWebUrl?: true
    ambassadorId?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    id: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    isMobileApp: boolean
    iosAppUrl: string | null
    androidAppUrl: string | null
    iosDeeplink: string | null
    androidDeeplink: string | null
    universalDeeplink: string | null
    isSubscriptionOffer: boolean
    subscriptionWebUrl: string | null
    ambassadorId: string | null
    _count: QRCodeCountAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetUrl?: boolean
    proxyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: boolean
    androidAppUrl?: boolean
    iosDeeplink?: boolean
    androidDeeplink?: boolean
    universalDeeplink?: boolean
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: boolean
    ambassadorId?: boolean
    analytics?: boolean | QRCode$analyticsArgs<ExtArgs>
    ambassador?: boolean | QRCode$ambassadorArgs<ExtArgs>
    purchases?: boolean | QRCode$purchasesArgs<ExtArgs>
    _count?: boolean | QRCodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetUrl?: boolean
    proxyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: boolean
    androidAppUrl?: boolean
    iosDeeplink?: boolean
    androidDeeplink?: boolean
    universalDeeplink?: boolean
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: boolean
    ambassadorId?: boolean
    ambassador?: boolean | QRCode$ambassadorArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    targetUrl?: boolean
    proxyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: boolean
    androidAppUrl?: boolean
    iosDeeplink?: boolean
    androidDeeplink?: boolean
    universalDeeplink?: boolean
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: boolean
    ambassadorId?: boolean
    ambassador?: boolean | QRCode$ambassadorArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectScalar = {
    id?: boolean
    name?: boolean
    targetUrl?: boolean
    proxyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: boolean
    androidAppUrl?: boolean
    iosDeeplink?: boolean
    androidDeeplink?: boolean
    universalDeeplink?: boolean
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: boolean
    ambassadorId?: boolean
  }

  export type QRCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "targetUrl" | "proxyUrl" | "createdAt" | "updatedAt" | "isActive" | "isMobileApp" | "iosAppUrl" | "androidAppUrl" | "iosDeeplink" | "androidDeeplink" | "universalDeeplink" | "isSubscriptionOffer" | "subscriptionWebUrl" | "ambassadorId", ExtArgs["result"]["qRCode"]>
  export type QRCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | QRCode$analyticsArgs<ExtArgs>
    ambassador?: boolean | QRCode$ambassadorArgs<ExtArgs>
    purchases?: boolean | QRCode$purchasesArgs<ExtArgs>
    _count?: boolean | QRCodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QRCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambassador?: boolean | QRCode$ambassadorArgs<ExtArgs>
  }
  export type QRCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambassador?: boolean | QRCode$ambassadorArgs<ExtArgs>
  }

  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {
      analytics: Prisma.$AnalyticsPayload<ExtArgs>[]
      ambassador: Prisma.$AmbassadorPayload<ExtArgs> | null
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      targetUrl: string
      proxyUrl: string
      createdAt: Date
      updatedAt: Date
      isActive: boolean
      isMobileApp: boolean
      iosAppUrl: string | null
      androidAppUrl: string | null
      iosDeeplink: string | null
      androidDeeplink: string | null
      universalDeeplink: string | null
      isSubscriptionOffer: boolean
      subscriptionWebUrl: string | null
      ambassadorId: string | null
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }

  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRCodeFindUniqueArgs>(args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRCodeFindFirstArgs>(args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QRCodeFindManyArgs>(args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
     */
    create<T extends QRCodeCreateArgs>(args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRCodes.
     * @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRCodeCreateManyArgs>(args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QRCodes and returns the data saved in the database.
     * @param {QRCodeCreateManyAndReturnArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QRCodes and only return the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QRCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, QRCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
     */
    delete<T extends QRCodeDeleteArgs>(args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRCodeUpdateArgs>(args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRCodeDeleteManyArgs>(args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRCodeUpdateManyArgs>(args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes and returns the data updated in the database.
     * @param {QRCodeUpdateManyAndReturnArgs} args - Arguments to update many QRCodes.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QRCodes and only return the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QRCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, QRCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
     */
    upsert<T extends QRCodeUpsertArgs>(args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analytics<T extends QRCode$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, QRCode$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ambassador<T extends QRCode$ambassadorArgs<ExtArgs> = {}>(args?: Subset<T, QRCode$ambassadorArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    purchases<T extends QRCode$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, QRCode$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QRCode model
   */
  interface QRCodeFieldRefs {
    readonly id: FieldRef<"QRCode", 'String'>
    readonly name: FieldRef<"QRCode", 'String'>
    readonly targetUrl: FieldRef<"QRCode", 'String'>
    readonly proxyUrl: FieldRef<"QRCode", 'String'>
    readonly createdAt: FieldRef<"QRCode", 'DateTime'>
    readonly updatedAt: FieldRef<"QRCode", 'DateTime'>
    readonly isActive: FieldRef<"QRCode", 'Boolean'>
    readonly isMobileApp: FieldRef<"QRCode", 'Boolean'>
    readonly iosAppUrl: FieldRef<"QRCode", 'String'>
    readonly androidAppUrl: FieldRef<"QRCode", 'String'>
    readonly iosDeeplink: FieldRef<"QRCode", 'String'>
    readonly androidDeeplink: FieldRef<"QRCode", 'String'>
    readonly universalDeeplink: FieldRef<"QRCode", 'String'>
    readonly isSubscriptionOffer: FieldRef<"QRCode", 'Boolean'>
    readonly subscriptionWebUrl: FieldRef<"QRCode", 'String'>
    readonly ambassadorId: FieldRef<"QRCode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }

  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRCode createManyAndReturn
   */
  export type QRCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
  }

  /**
   * QRCode updateManyAndReturn
   */
  export type QRCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }

  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to delete.
     */
    limit?: number
  }

  /**
   * QRCode.analytics
   */
  export type QRCode$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    cursor?: AnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * QRCode.ambassador
   */
  export type QRCode$ambassadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    where?: AmbassadorWhereInput
  }

  /**
   * QRCode.purchases
   */
  export type QRCode$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
  }


  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    visitCount: number | null
    uniqueVisitors: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    visitCount: number | null
    uniqueVisitors: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: string | null
    qrCodeId: string | null
    visitCount: number | null
    uniqueVisitors: number | null
    lastVisited: Date | null
    referrer: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null
    qrCodeId: string | null
    visitCount: number | null
    uniqueVisitors: number | null
    lastVisited: Date | null
    referrer: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    qrCodeId: number
    visitCount: number
    uniqueVisitors: number
    lastVisited: number
    referrer: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    visitCount?: true
    uniqueVisitors?: true
  }

  export type AnalyticsSumAggregateInputType = {
    visitCount?: true
    uniqueVisitors?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    qrCodeId?: true
    visitCount?: true
    uniqueVisitors?: true
    lastVisited?: true
    referrer?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    qrCodeId?: true
    visitCount?: true
    uniqueVisitors?: true
    lastVisited?: true
    referrer?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    qrCodeId?: true
    visitCount?: true
    uniqueVisitors?: true
    lastVisited?: true
    referrer?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: string
    qrCodeId: string
    visitCount: number
    uniqueVisitors: number
    lastVisited: Date
    referrer: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qrCodeId?: boolean
    visitCount?: boolean
    uniqueVisitors?: boolean
    lastVisited?: boolean
    referrer?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qrCodeId?: boolean
    visitCount?: boolean
    uniqueVisitors?: boolean
    lastVisited?: boolean
    referrer?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qrCodeId?: boolean
    visitCount?: boolean
    uniqueVisitors?: boolean
    lastVisited?: boolean
    referrer?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    id?: boolean
    qrCodeId?: boolean
    visitCount?: boolean
    uniqueVisitors?: boolean
    lastVisited?: boolean
    referrer?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qrCodeId" | "visitCount" | "uniqueVisitors" | "lastVisited" | "referrer" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["analytics"]>
  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
  }
  export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
  }

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {
      qrCode: Prisma.$QRCodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qrCodeId: string
      visitCount: number
      uniqueVisitors: number
      lastVisited: Date
      referrer: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qrCode<T extends QRCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QRCodeDefaultArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'String'>
    readonly qrCodeId: FieldRef<"Analytics", 'String'>
    readonly visitCount: FieldRef<"Analytics", 'Int'>
    readonly uniqueVisitors: FieldRef<"Analytics", 'Int'>
    readonly lastVisited: FieldRef<"Analytics", 'DateTime'>
    readonly referrer: FieldRef<"Analytics", 'String'>
    readonly userAgent: FieldRef<"Analytics", 'String'>
    readonly createdAt: FieldRef<"Analytics", 'DateTime'>
    readonly updatedAt: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics updateManyAndReturn
   */
  export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model Ambassador
   */

  export type AggregateAmbassador = {
    _count: AmbassadorCountAggregateOutputType | null
    _min: AmbassadorMinAggregateOutputType | null
    _max: AmbassadorMaxAggregateOutputType | null
  }

  export type AmbassadorMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmbassadorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmbassadorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmbassadorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmbassadorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmbassadorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AmbassadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ambassador to aggregate.
     */
    where?: AmbassadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambassadors to fetch.
     */
    orderBy?: AmbassadorOrderByWithRelationInput | AmbassadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmbassadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambassadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambassadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ambassadors
    **/
    _count?: true | AmbassadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmbassadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmbassadorMaxAggregateInputType
  }

  export type GetAmbassadorAggregateType<T extends AmbassadorAggregateArgs> = {
        [P in keyof T & keyof AggregateAmbassador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmbassador[P]>
      : GetScalarType<T[P], AggregateAmbassador[P]>
  }




  export type AmbassadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbassadorWhereInput
    orderBy?: AmbassadorOrderByWithAggregationInput | AmbassadorOrderByWithAggregationInput[]
    by: AmbassadorScalarFieldEnum[] | AmbassadorScalarFieldEnum
    having?: AmbassadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmbassadorCountAggregateInputType | true
    _min?: AmbassadorMinAggregateInputType
    _max?: AmbassadorMaxAggregateInputType
  }

  export type AmbassadorGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: AmbassadorCountAggregateOutputType | null
    _min: AmbassadorMinAggregateOutputType | null
    _max: AmbassadorMaxAggregateOutputType | null
  }

  type GetAmbassadorGroupByPayload<T extends AmbassadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmbassadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmbassadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmbassadorGroupByOutputType[P]>
            : GetScalarType<T[P], AmbassadorGroupByOutputType[P]>
        }
      >
    >


  export type AmbassadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodes?: boolean | Ambassador$qrCodesArgs<ExtArgs>
    purchases?: boolean | Ambassador$purchasesArgs<ExtArgs>
    _count?: boolean | AmbassadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambassador"]>

  export type AmbassadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ambassador"]>

  export type AmbassadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ambassador"]>

  export type AmbassadorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AmbassadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["ambassador"]>
  export type AmbassadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | Ambassador$qrCodesArgs<ExtArgs>
    purchases?: boolean | Ambassador$purchasesArgs<ExtArgs>
    _count?: boolean | AmbassadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmbassadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmbassadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmbassadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ambassador"
    objects: {
      qrCodes: Prisma.$QRCodePayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ambassador"]>
    composites: {}
  }

  type AmbassadorGetPayload<S extends boolean | null | undefined | AmbassadorDefaultArgs> = $Result.GetResult<Prisma.$AmbassadorPayload, S>

  type AmbassadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmbassadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmbassadorCountAggregateInputType | true
    }

  export interface AmbassadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ambassador'], meta: { name: 'Ambassador' } }
    /**
     * Find zero or one Ambassador that matches the filter.
     * @param {AmbassadorFindUniqueArgs} args - Arguments to find a Ambassador
     * @example
     * // Get one Ambassador
     * const ambassador = await prisma.ambassador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbassadorFindUniqueArgs>(args: SelectSubset<T, AmbassadorFindUniqueArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ambassador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbassadorFindUniqueOrThrowArgs} args - Arguments to find a Ambassador
     * @example
     * // Get one Ambassador
     * const ambassador = await prisma.ambassador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbassadorFindUniqueOrThrowArgs>(args: SelectSubset<T, AmbassadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ambassador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorFindFirstArgs} args - Arguments to find a Ambassador
     * @example
     * // Get one Ambassador
     * const ambassador = await prisma.ambassador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbassadorFindFirstArgs>(args?: SelectSubset<T, AmbassadorFindFirstArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ambassador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorFindFirstOrThrowArgs} args - Arguments to find a Ambassador
     * @example
     * // Get one Ambassador
     * const ambassador = await prisma.ambassador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbassadorFindFirstOrThrowArgs>(args?: SelectSubset<T, AmbassadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ambassadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ambassadors
     * const ambassadors = await prisma.ambassador.findMany()
     * 
     * // Get first 10 Ambassadors
     * const ambassadors = await prisma.ambassador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ambassadorWithIdOnly = await prisma.ambassador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmbassadorFindManyArgs>(args?: SelectSubset<T, AmbassadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ambassador.
     * @param {AmbassadorCreateArgs} args - Arguments to create a Ambassador.
     * @example
     * // Create one Ambassador
     * const Ambassador = await prisma.ambassador.create({
     *   data: {
     *     // ... data to create a Ambassador
     *   }
     * })
     * 
     */
    create<T extends AmbassadorCreateArgs>(args: SelectSubset<T, AmbassadorCreateArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ambassadors.
     * @param {AmbassadorCreateManyArgs} args - Arguments to create many Ambassadors.
     * @example
     * // Create many Ambassadors
     * const ambassador = await prisma.ambassador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmbassadorCreateManyArgs>(args?: SelectSubset<T, AmbassadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ambassadors and returns the data saved in the database.
     * @param {AmbassadorCreateManyAndReturnArgs} args - Arguments to create many Ambassadors.
     * @example
     * // Create many Ambassadors
     * const ambassador = await prisma.ambassador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ambassadors and only return the `id`
     * const ambassadorWithIdOnly = await prisma.ambassador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmbassadorCreateManyAndReturnArgs>(args?: SelectSubset<T, AmbassadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ambassador.
     * @param {AmbassadorDeleteArgs} args - Arguments to delete one Ambassador.
     * @example
     * // Delete one Ambassador
     * const Ambassador = await prisma.ambassador.delete({
     *   where: {
     *     // ... filter to delete one Ambassador
     *   }
     * })
     * 
     */
    delete<T extends AmbassadorDeleteArgs>(args: SelectSubset<T, AmbassadorDeleteArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ambassador.
     * @param {AmbassadorUpdateArgs} args - Arguments to update one Ambassador.
     * @example
     * // Update one Ambassador
     * const ambassador = await prisma.ambassador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmbassadorUpdateArgs>(args: SelectSubset<T, AmbassadorUpdateArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ambassadors.
     * @param {AmbassadorDeleteManyArgs} args - Arguments to filter Ambassadors to delete.
     * @example
     * // Delete a few Ambassadors
     * const { count } = await prisma.ambassador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmbassadorDeleteManyArgs>(args?: SelectSubset<T, AmbassadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ambassadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ambassadors
     * const ambassador = await prisma.ambassador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmbassadorUpdateManyArgs>(args: SelectSubset<T, AmbassadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ambassadors and returns the data updated in the database.
     * @param {AmbassadorUpdateManyAndReturnArgs} args - Arguments to update many Ambassadors.
     * @example
     * // Update many Ambassadors
     * const ambassador = await prisma.ambassador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ambassadors and only return the `id`
     * const ambassadorWithIdOnly = await prisma.ambassador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmbassadorUpdateManyAndReturnArgs>(args: SelectSubset<T, AmbassadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ambassador.
     * @param {AmbassadorUpsertArgs} args - Arguments to update or create a Ambassador.
     * @example
     * // Update or create a Ambassador
     * const ambassador = await prisma.ambassador.upsert({
     *   create: {
     *     // ... data to create a Ambassador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ambassador we want to update
     *   }
     * })
     */
    upsert<T extends AmbassadorUpsertArgs>(args: SelectSubset<T, AmbassadorUpsertArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ambassadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorCountArgs} args - Arguments to filter Ambassadors to count.
     * @example
     * // Count the number of Ambassadors
     * const count = await prisma.ambassador.count({
     *   where: {
     *     // ... the filter for the Ambassadors we want to count
     *   }
     * })
    **/
    count<T extends AmbassadorCountArgs>(
      args?: Subset<T, AmbassadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmbassadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ambassador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmbassadorAggregateArgs>(args: Subset<T, AmbassadorAggregateArgs>): Prisma.PrismaPromise<GetAmbassadorAggregateType<T>>

    /**
     * Group by Ambassador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbassadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmbassadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmbassadorGroupByArgs['orderBy'] }
        : { orderBy?: AmbassadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmbassadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbassadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ambassador model
   */
  readonly fields: AmbassadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ambassador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmbassadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qrCodes<T extends Ambassador$qrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Ambassador$qrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Ambassador$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Ambassador$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ambassador model
   */
  interface AmbassadorFieldRefs {
    readonly id: FieldRef<"Ambassador", 'String'>
    readonly name: FieldRef<"Ambassador", 'String'>
    readonly email: FieldRef<"Ambassador", 'String'>
    readonly phoneNumber: FieldRef<"Ambassador", 'String'>
    readonly createdAt: FieldRef<"Ambassador", 'DateTime'>
    readonly updatedAt: FieldRef<"Ambassador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ambassador findUnique
   */
  export type AmbassadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * Filter, which Ambassador to fetch.
     */
    where: AmbassadorWhereUniqueInput
  }

  /**
   * Ambassador findUniqueOrThrow
   */
  export type AmbassadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * Filter, which Ambassador to fetch.
     */
    where: AmbassadorWhereUniqueInput
  }

  /**
   * Ambassador findFirst
   */
  export type AmbassadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * Filter, which Ambassador to fetch.
     */
    where?: AmbassadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambassadors to fetch.
     */
    orderBy?: AmbassadorOrderByWithRelationInput | AmbassadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ambassadors.
     */
    cursor?: AmbassadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambassadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambassadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ambassadors.
     */
    distinct?: AmbassadorScalarFieldEnum | AmbassadorScalarFieldEnum[]
  }

  /**
   * Ambassador findFirstOrThrow
   */
  export type AmbassadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * Filter, which Ambassador to fetch.
     */
    where?: AmbassadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambassadors to fetch.
     */
    orderBy?: AmbassadorOrderByWithRelationInput | AmbassadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ambassadors.
     */
    cursor?: AmbassadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambassadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambassadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ambassadors.
     */
    distinct?: AmbassadorScalarFieldEnum | AmbassadorScalarFieldEnum[]
  }

  /**
   * Ambassador findMany
   */
  export type AmbassadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * Filter, which Ambassadors to fetch.
     */
    where?: AmbassadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambassadors to fetch.
     */
    orderBy?: AmbassadorOrderByWithRelationInput | AmbassadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ambassadors.
     */
    cursor?: AmbassadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambassadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambassadors.
     */
    skip?: number
    distinct?: AmbassadorScalarFieldEnum | AmbassadorScalarFieldEnum[]
  }

  /**
   * Ambassador create
   */
  export type AmbassadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Ambassador.
     */
    data: XOR<AmbassadorCreateInput, AmbassadorUncheckedCreateInput>
  }

  /**
   * Ambassador createMany
   */
  export type AmbassadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ambassadors.
     */
    data: AmbassadorCreateManyInput | AmbassadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ambassador createManyAndReturn
   */
  export type AmbassadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * The data used to create many Ambassadors.
     */
    data: AmbassadorCreateManyInput | AmbassadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ambassador update
   */
  export type AmbassadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Ambassador.
     */
    data: XOR<AmbassadorUpdateInput, AmbassadorUncheckedUpdateInput>
    /**
     * Choose, which Ambassador to update.
     */
    where: AmbassadorWhereUniqueInput
  }

  /**
   * Ambassador updateMany
   */
  export type AmbassadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ambassadors.
     */
    data: XOR<AmbassadorUpdateManyMutationInput, AmbassadorUncheckedUpdateManyInput>
    /**
     * Filter which Ambassadors to update
     */
    where?: AmbassadorWhereInput
    /**
     * Limit how many Ambassadors to update.
     */
    limit?: number
  }

  /**
   * Ambassador updateManyAndReturn
   */
  export type AmbassadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * The data used to update Ambassadors.
     */
    data: XOR<AmbassadorUpdateManyMutationInput, AmbassadorUncheckedUpdateManyInput>
    /**
     * Filter which Ambassadors to update
     */
    where?: AmbassadorWhereInput
    /**
     * Limit how many Ambassadors to update.
     */
    limit?: number
  }

  /**
   * Ambassador upsert
   */
  export type AmbassadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Ambassador to update in case it exists.
     */
    where: AmbassadorWhereUniqueInput
    /**
     * In case the Ambassador found by the `where` argument doesn't exist, create a new Ambassador with this data.
     */
    create: XOR<AmbassadorCreateInput, AmbassadorUncheckedCreateInput>
    /**
     * In case the Ambassador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmbassadorUpdateInput, AmbassadorUncheckedUpdateInput>
  }

  /**
   * Ambassador delete
   */
  export type AmbassadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
    /**
     * Filter which Ambassador to delete.
     */
    where: AmbassadorWhereUniqueInput
  }

  /**
   * Ambassador deleteMany
   */
  export type AmbassadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ambassadors to delete
     */
    where?: AmbassadorWhereInput
    /**
     * Limit how many Ambassadors to delete.
     */
    limit?: number
  }

  /**
   * Ambassador.qrCodes
   */
  export type Ambassador$qrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    cursor?: QRCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * Ambassador.purchases
   */
  export type Ambassador$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Ambassador without action
   */
  export type AmbassadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambassador
     */
    select?: AmbassadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambassador
     */
    omit?: AmbassadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbassadorInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    amount: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    amount: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    status: string | null
    customerEmail: string | null
    customerName: string | null
    stripeSessionId: string | null
    wayfeUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    qrCodeId: string | null
    ambassadorId: string | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    status: string | null
    customerEmail: string | null
    customerName: string | null
    stripeSessionId: string | null
    wayfeUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    qrCodeId: string | null
    ambassadorId: string | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    status: number
    customerEmail: number
    customerName: number
    stripeSessionId: number
    wayfeUserId: number
    createdAt: number
    updatedAt: number
    qrCodeId: number
    ambassadorId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    amount?: true
  }

  export type PurchaseSumAggregateInputType = {
    amount?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    customerEmail?: true
    customerName?: true
    stripeSessionId?: true
    wayfeUserId?: true
    createdAt?: true
    updatedAt?: true
    qrCodeId?: true
    ambassadorId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    customerEmail?: true
    customerName?: true
    stripeSessionId?: true
    wayfeUserId?: true
    createdAt?: true
    updatedAt?: true
    qrCodeId?: true
    ambassadorId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    customerEmail?: true
    customerName?: true
    stripeSessionId?: true
    wayfeUserId?: true
    createdAt?: true
    updatedAt?: true
    qrCodeId?: true
    ambassadorId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    amount: number
    currency: string
    status: string
    customerEmail: string
    customerName: string | null
    stripeSessionId: string
    wayfeUserId: string | null
    createdAt: Date
    updatedAt: Date
    qrCodeId: string
    ambassadorId: string
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerEmail?: boolean
    customerName?: boolean
    stripeSessionId?: boolean
    wayfeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    ambassadorId?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    ambassador?: boolean | AmbassadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerEmail?: boolean
    customerName?: boolean
    stripeSessionId?: boolean
    wayfeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    ambassadorId?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    ambassador?: boolean | AmbassadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerEmail?: boolean
    customerName?: boolean
    stripeSessionId?: boolean
    wayfeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    ambassadorId?: boolean
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    ambassador?: boolean | AmbassadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerEmail?: boolean
    customerName?: boolean
    stripeSessionId?: boolean
    wayfeUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodeId?: boolean
    ambassadorId?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "currency" | "status" | "customerEmail" | "customerName" | "stripeSessionId" | "wayfeUserId" | "createdAt" | "updatedAt" | "qrCodeId" | "ambassadorId", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    ambassador?: boolean | AmbassadorDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    ambassador?: boolean | AmbassadorDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCode?: boolean | QRCodeDefaultArgs<ExtArgs>
    ambassador?: boolean | AmbassadorDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      qrCode: Prisma.$QRCodePayload<ExtArgs>
      ambassador: Prisma.$AmbassadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      currency: string
      status: string
      customerEmail: string
      customerName: string | null
      stripeSessionId: string
      wayfeUserId: string | null
      createdAt: Date
      updatedAt: Date
      qrCodeId: string
      ambassadorId: string
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qrCode<T extends QRCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QRCodeDefaultArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ambassador<T extends AmbassadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmbassadorDefaultArgs<ExtArgs>>): Prisma__AmbassadorClient<$Result.GetResult<Prisma.$AmbassadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly amount: FieldRef<"Purchase", 'Float'>
    readonly currency: FieldRef<"Purchase", 'String'>
    readonly status: FieldRef<"Purchase", 'String'>
    readonly customerEmail: FieldRef<"Purchase", 'String'>
    readonly customerName: FieldRef<"Purchase", 'String'>
    readonly stripeSessionId: FieldRef<"Purchase", 'String'>
    readonly wayfeUserId: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
    readonly qrCodeId: FieldRef<"Purchase", 'String'>
    readonly ambassadorId: FieldRef<"Purchase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QRCodeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    targetUrl: 'targetUrl',
    proxyUrl: 'proxyUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    isMobileApp: 'isMobileApp',
    iosAppUrl: 'iosAppUrl',
    androidAppUrl: 'androidAppUrl',
    iosDeeplink: 'iosDeeplink',
    androidDeeplink: 'androidDeeplink',
    universalDeeplink: 'universalDeeplink',
    isSubscriptionOffer: 'isSubscriptionOffer',
    subscriptionWebUrl: 'subscriptionWebUrl',
    ambassadorId: 'ambassadorId'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    qrCodeId: 'qrCodeId',
    visitCount: 'visitCount',
    uniqueVisitors: 'uniqueVisitors',
    lastVisited: 'lastVisited',
    referrer: 'referrer',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const AmbassadorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AmbassadorScalarFieldEnum = (typeof AmbassadorScalarFieldEnum)[keyof typeof AmbassadorScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    customerEmail: 'customerEmail',
    customerName: 'customerName',
    stripeSessionId: 'stripeSessionId',
    wayfeUserId: 'wayfeUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    qrCodeId: 'qrCodeId',
    ambassadorId: 'ambassadorId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    id?: StringFilter<"QRCode"> | string
    name?: StringFilter<"QRCode"> | string
    targetUrl?: StringFilter<"QRCode"> | string
    proxyUrl?: StringFilter<"QRCode"> | string
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    isActive?: BoolFilter<"QRCode"> | boolean
    isMobileApp?: BoolFilter<"QRCode"> | boolean
    iosAppUrl?: StringNullableFilter<"QRCode"> | string | null
    androidAppUrl?: StringNullableFilter<"QRCode"> | string | null
    iosDeeplink?: StringNullableFilter<"QRCode"> | string | null
    androidDeeplink?: StringNullableFilter<"QRCode"> | string | null
    universalDeeplink?: StringNullableFilter<"QRCode"> | string | null
    isSubscriptionOffer?: BoolFilter<"QRCode"> | boolean
    subscriptionWebUrl?: StringNullableFilter<"QRCode"> | string | null
    ambassadorId?: StringNullableFilter<"QRCode"> | string | null
    analytics?: AnalyticsListRelationFilter
    ambassador?: XOR<AmbassadorNullableScalarRelationFilter, AmbassadorWhereInput> | null
    purchases?: PurchaseListRelationFilter
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    targetUrl?: SortOrder
    proxyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    isMobileApp?: SortOrder
    iosAppUrl?: SortOrderInput | SortOrder
    androidAppUrl?: SortOrderInput | SortOrder
    iosDeeplink?: SortOrderInput | SortOrder
    androidDeeplink?: SortOrderInput | SortOrder
    universalDeeplink?: SortOrderInput | SortOrder
    isSubscriptionOffer?: SortOrder
    subscriptionWebUrl?: SortOrderInput | SortOrder
    ambassadorId?: SortOrderInput | SortOrder
    analytics?: AnalyticsOrderByRelationAggregateInput
    ambassador?: AmbassadorOrderByWithRelationInput
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    proxyUrl?: string
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    name?: StringFilter<"QRCode"> | string
    targetUrl?: StringFilter<"QRCode"> | string
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    isActive?: BoolFilter<"QRCode"> | boolean
    isMobileApp?: BoolFilter<"QRCode"> | boolean
    iosAppUrl?: StringNullableFilter<"QRCode"> | string | null
    androidAppUrl?: StringNullableFilter<"QRCode"> | string | null
    iosDeeplink?: StringNullableFilter<"QRCode"> | string | null
    androidDeeplink?: StringNullableFilter<"QRCode"> | string | null
    universalDeeplink?: StringNullableFilter<"QRCode"> | string | null
    isSubscriptionOffer?: BoolFilter<"QRCode"> | boolean
    subscriptionWebUrl?: StringNullableFilter<"QRCode"> | string | null
    ambassadorId?: StringNullableFilter<"QRCode"> | string | null
    analytics?: AnalyticsListRelationFilter
    ambassador?: XOR<AmbassadorNullableScalarRelationFilter, AmbassadorWhereInput> | null
    purchases?: PurchaseListRelationFilter
  }, "id" | "proxyUrl">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    targetUrl?: SortOrder
    proxyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    isMobileApp?: SortOrder
    iosAppUrl?: SortOrderInput | SortOrder
    androidAppUrl?: SortOrderInput | SortOrder
    iosDeeplink?: SortOrderInput | SortOrder
    androidDeeplink?: SortOrderInput | SortOrder
    universalDeeplink?: SortOrderInput | SortOrder
    isSubscriptionOffer?: SortOrder
    subscriptionWebUrl?: SortOrderInput | SortOrder
    ambassadorId?: SortOrderInput | SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QRCode"> | string
    name?: StringWithAggregatesFilter<"QRCode"> | string
    targetUrl?: StringWithAggregatesFilter<"QRCode"> | string
    proxyUrl?: StringWithAggregatesFilter<"QRCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    isActive?: BoolWithAggregatesFilter<"QRCode"> | boolean
    isMobileApp?: BoolWithAggregatesFilter<"QRCode"> | boolean
    iosAppUrl?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    androidAppUrl?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    iosDeeplink?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    androidDeeplink?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    universalDeeplink?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    isSubscriptionOffer?: BoolWithAggregatesFilter<"QRCode"> | boolean
    subscriptionWebUrl?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    ambassadorId?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
  }

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: StringFilter<"Analytics"> | string
    qrCodeId?: StringFilter<"Analytics"> | string
    visitCount?: IntFilter<"Analytics"> | number
    uniqueVisitors?: IntFilter<"Analytics"> | number
    lastVisited?: DateTimeFilter<"Analytics"> | Date | string
    referrer?: StringNullableFilter<"Analytics"> | string | null
    userAgent?: StringNullableFilter<"Analytics"> | string | null
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
    qrCode?: XOR<QRCodeScalarRelationFilter, QRCodeWhereInput>
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    qrCodeId?: SortOrder
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
    lastVisited?: SortOrder
    referrer?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCode?: QRCodeOrderByWithRelationInput
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    qrCodeId?: StringFilter<"Analytics"> | string
    visitCount?: IntFilter<"Analytics"> | number
    uniqueVisitors?: IntFilter<"Analytics"> | number
    lastVisited?: DateTimeFilter<"Analytics"> | Date | string
    referrer?: StringNullableFilter<"Analytics"> | string | null
    userAgent?: StringNullableFilter<"Analytics"> | string | null
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
    qrCode?: XOR<QRCodeScalarRelationFilter, QRCodeWhereInput>
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    qrCodeId?: SortOrder
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
    lastVisited?: SortOrder
    referrer?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analytics"> | string
    qrCodeId?: StringWithAggregatesFilter<"Analytics"> | string
    visitCount?: IntWithAggregatesFilter<"Analytics"> | number
    uniqueVisitors?: IntWithAggregatesFilter<"Analytics"> | number
    lastVisited?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    referrer?: StringNullableWithAggregatesFilter<"Analytics"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Analytics"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type AmbassadorWhereInput = {
    AND?: AmbassadorWhereInput | AmbassadorWhereInput[]
    OR?: AmbassadorWhereInput[]
    NOT?: AmbassadorWhereInput | AmbassadorWhereInput[]
    id?: StringFilter<"Ambassador"> | string
    name?: StringFilter<"Ambassador"> | string
    email?: StringFilter<"Ambassador"> | string
    phoneNumber?: StringNullableFilter<"Ambassador"> | string | null
    createdAt?: DateTimeFilter<"Ambassador"> | Date | string
    updatedAt?: DateTimeFilter<"Ambassador"> | Date | string
    qrCodes?: QRCodeListRelationFilter
    purchases?: PurchaseListRelationFilter
  }

  export type AmbassadorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodes?: QRCodeOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type AmbassadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AmbassadorWhereInput | AmbassadorWhereInput[]
    OR?: AmbassadorWhereInput[]
    NOT?: AmbassadorWhereInput | AmbassadorWhereInput[]
    name?: StringFilter<"Ambassador"> | string
    phoneNumber?: StringNullableFilter<"Ambassador"> | string | null
    createdAt?: DateTimeFilter<"Ambassador"> | Date | string
    updatedAt?: DateTimeFilter<"Ambassador"> | Date | string
    qrCodes?: QRCodeListRelationFilter
    purchases?: PurchaseListRelationFilter
  }, "id" | "email">

  export type AmbassadorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AmbassadorCountOrderByAggregateInput
    _max?: AmbassadorMaxOrderByAggregateInput
    _min?: AmbassadorMinOrderByAggregateInput
  }

  export type AmbassadorScalarWhereWithAggregatesInput = {
    AND?: AmbassadorScalarWhereWithAggregatesInput | AmbassadorScalarWhereWithAggregatesInput[]
    OR?: AmbassadorScalarWhereWithAggregatesInput[]
    NOT?: AmbassadorScalarWhereWithAggregatesInput | AmbassadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ambassador"> | string
    name?: StringWithAggregatesFilter<"Ambassador"> | string
    email?: StringWithAggregatesFilter<"Ambassador"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Ambassador"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ambassador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ambassador"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    amount?: FloatFilter<"Purchase"> | number
    currency?: StringFilter<"Purchase"> | string
    status?: StringFilter<"Purchase"> | string
    customerEmail?: StringFilter<"Purchase"> | string
    customerName?: StringNullableFilter<"Purchase"> | string | null
    stripeSessionId?: StringFilter<"Purchase"> | string
    wayfeUserId?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    qrCodeId?: StringFilter<"Purchase"> | string
    ambassadorId?: StringFilter<"Purchase"> | string
    qrCode?: XOR<QRCodeScalarRelationFilter, QRCodeWhereInput>
    ambassador?: XOR<AmbassadorScalarRelationFilter, AmbassadorWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerEmail?: SortOrder
    customerName?: SortOrderInput | SortOrder
    stripeSessionId?: SortOrder
    wayfeUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    ambassadorId?: SortOrder
    qrCode?: QRCodeOrderByWithRelationInput
    ambassador?: AmbassadorOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    amount?: FloatFilter<"Purchase"> | number
    currency?: StringFilter<"Purchase"> | string
    status?: StringFilter<"Purchase"> | string
    customerEmail?: StringFilter<"Purchase"> | string
    customerName?: StringNullableFilter<"Purchase"> | string | null
    wayfeUserId?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    qrCodeId?: StringFilter<"Purchase"> | string
    ambassadorId?: StringFilter<"Purchase"> | string
    qrCode?: XOR<QRCodeScalarRelationFilter, QRCodeWhereInput>
    ambassador?: XOR<AmbassadorScalarRelationFilter, AmbassadorWhereInput>
  }, "id" | "stripeSessionId">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerEmail?: SortOrder
    customerName?: SortOrderInput | SortOrder
    stripeSessionId?: SortOrder
    wayfeUserId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    ambassadorId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    amount?: FloatWithAggregatesFilter<"Purchase"> | number
    currency?: StringWithAggregatesFilter<"Purchase"> | string
    status?: StringWithAggregatesFilter<"Purchase"> | string
    customerEmail?: StringWithAggregatesFilter<"Purchase"> | string
    customerName?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    stripeSessionId?: StringWithAggregatesFilter<"Purchase"> | string
    wayfeUserId?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    qrCodeId?: StringWithAggregatesFilter<"Purchase"> | string
    ambassadorId?: StringWithAggregatesFilter<"Purchase"> | string
  }

  export type QRCodeCreateInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    analytics?: AnalyticsCreateNestedManyWithoutQrCodeInput
    ambassador?: AmbassadorCreateNestedOneWithoutQrCodesInput
    purchases?: PurchaseCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    ambassadorId?: string | null
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutQrCodeInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: AnalyticsUpdateManyWithoutQrCodeNestedInput
    ambassador?: AmbassadorUpdateOneWithoutQrCodesNestedInput
    purchases?: PurchaseUpdateManyWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ambassadorId?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: AnalyticsUncheckedUpdateManyWithoutQrCodeNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutQrCodeNestedInput
  }

  export type QRCodeCreateManyInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    ambassadorId?: string | null
  }

  export type QRCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ambassadorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalyticsCreateInput = {
    id?: string
    visitCount?: number
    uniqueVisitors?: number
    lastVisited?: Date | string
    referrer?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCode: QRCodeCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: string
    qrCodeId: string
    visitCount?: number
    uniqueVisitors?: number
    lastVisited?: Date | string
    referrer?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCode?: QRCodeUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id?: string
    qrCodeId: string
    visitCount?: number
    uniqueVisitors?: number
    lastVisited?: Date | string
    referrer?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbassadorCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QRCodeCreateNestedManyWithoutAmbassadorInput
    purchases?: PurchaseCreateNestedManyWithoutAmbassadorInput
  }

  export type AmbassadorUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutAmbassadorInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutAmbassadorInput
  }

  export type AmbassadorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QRCodeUpdateManyWithoutAmbassadorNestedInput
    purchases?: PurchaseUpdateManyWithoutAmbassadorNestedInput
  }

  export type AmbassadorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QRCodeUncheckedUpdateManyWithoutAmbassadorNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutAmbassadorNestedInput
  }

  export type AmbassadorCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmbassadorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmbassadorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCode: QRCodeCreateNestedOneWithoutPurchasesInput
    ambassador: AmbassadorCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    ambassadorId: string
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCode?: QRCodeUpdateOneRequiredWithoutPurchasesNestedInput
    ambassador?: AmbassadorUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    ambassadorId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCreateManyInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
    ambassadorId: string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
    ambassadorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AnalyticsListRelationFilter = {
    every?: AnalyticsWhereInput
    some?: AnalyticsWhereInput
    none?: AnalyticsWhereInput
  }

  export type AmbassadorNullableScalarRelationFilter = {
    is?: AmbassadorWhereInput | null
    isNot?: AmbassadorWhereInput | null
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetUrl?: SortOrder
    proxyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    isMobileApp?: SortOrder
    iosAppUrl?: SortOrder
    androidAppUrl?: SortOrder
    iosDeeplink?: SortOrder
    androidDeeplink?: SortOrder
    universalDeeplink?: SortOrder
    isSubscriptionOffer?: SortOrder
    subscriptionWebUrl?: SortOrder
    ambassadorId?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetUrl?: SortOrder
    proxyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    isMobileApp?: SortOrder
    iosAppUrl?: SortOrder
    androidAppUrl?: SortOrder
    iosDeeplink?: SortOrder
    androidDeeplink?: SortOrder
    universalDeeplink?: SortOrder
    isSubscriptionOffer?: SortOrder
    subscriptionWebUrl?: SortOrder
    ambassadorId?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    targetUrl?: SortOrder
    proxyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    isMobileApp?: SortOrder
    iosAppUrl?: SortOrder
    androidAppUrl?: SortOrder
    iosDeeplink?: SortOrder
    androidDeeplink?: SortOrder
    universalDeeplink?: SortOrder
    isSubscriptionOffer?: SortOrder
    subscriptionWebUrl?: SortOrder
    ambassadorId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QRCodeScalarRelationFilter = {
    is?: QRCodeWhereInput
    isNot?: QRCodeWhereInput
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    qrCodeId?: SortOrder
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
    lastVisited?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    qrCodeId?: SortOrder
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
    lastVisited?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    qrCodeId?: SortOrder
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
    lastVisited?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    visitCount?: SortOrder
    uniqueVisitors?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QRCodeListRelationFilter = {
    every?: QRCodeWhereInput
    some?: QRCodeWhereInput
    none?: QRCodeWhereInput
  }

  export type QRCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmbassadorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmbassadorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmbassadorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AmbassadorScalarRelationFilter = {
    is?: AmbassadorWhereInput
    isNot?: AmbassadorWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerEmail?: SortOrder
    customerName?: SortOrder
    stripeSessionId?: SortOrder
    wayfeUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    ambassadorId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerEmail?: SortOrder
    customerName?: SortOrder
    stripeSessionId?: SortOrder
    wayfeUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    ambassadorId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerEmail?: SortOrder
    customerName?: SortOrder
    stripeSessionId?: SortOrder
    wayfeUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodeId?: SortOrder
    ambassadorId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AnalyticsCreateNestedManyWithoutQrCodeInput = {
    create?: XOR<AnalyticsCreateWithoutQrCodeInput, AnalyticsUncheckedCreateWithoutQrCodeInput> | AnalyticsCreateWithoutQrCodeInput[] | AnalyticsUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutQrCodeInput | AnalyticsCreateOrConnectWithoutQrCodeInput[]
    createMany?: AnalyticsCreateManyQrCodeInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type AmbassadorCreateNestedOneWithoutQrCodesInput = {
    create?: XOR<AmbassadorCreateWithoutQrCodesInput, AmbassadorUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: AmbassadorCreateOrConnectWithoutQrCodesInput
    connect?: AmbassadorWhereUniqueInput
  }

  export type PurchaseCreateNestedManyWithoutQrCodeInput = {
    create?: XOR<PurchaseCreateWithoutQrCodeInput, PurchaseUncheckedCreateWithoutQrCodeInput> | PurchaseCreateWithoutQrCodeInput[] | PurchaseUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutQrCodeInput | PurchaseCreateOrConnectWithoutQrCodeInput[]
    createMany?: PurchaseCreateManyQrCodeInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type AnalyticsUncheckedCreateNestedManyWithoutQrCodeInput = {
    create?: XOR<AnalyticsCreateWithoutQrCodeInput, AnalyticsUncheckedCreateWithoutQrCodeInput> | AnalyticsCreateWithoutQrCodeInput[] | AnalyticsUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutQrCodeInput | AnalyticsCreateOrConnectWithoutQrCodeInput[]
    createMany?: AnalyticsCreateManyQrCodeInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutQrCodeInput = {
    create?: XOR<PurchaseCreateWithoutQrCodeInput, PurchaseUncheckedCreateWithoutQrCodeInput> | PurchaseCreateWithoutQrCodeInput[] | PurchaseUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutQrCodeInput | PurchaseCreateOrConnectWithoutQrCodeInput[]
    createMany?: PurchaseCreateManyQrCodeInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AnalyticsUpdateManyWithoutQrCodeNestedInput = {
    create?: XOR<AnalyticsCreateWithoutQrCodeInput, AnalyticsUncheckedCreateWithoutQrCodeInput> | AnalyticsCreateWithoutQrCodeInput[] | AnalyticsUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutQrCodeInput | AnalyticsCreateOrConnectWithoutQrCodeInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutQrCodeInput | AnalyticsUpsertWithWhereUniqueWithoutQrCodeInput[]
    createMany?: AnalyticsCreateManyQrCodeInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutQrCodeInput | AnalyticsUpdateWithWhereUniqueWithoutQrCodeInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutQrCodeInput | AnalyticsUpdateManyWithWhereWithoutQrCodeInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type AmbassadorUpdateOneWithoutQrCodesNestedInput = {
    create?: XOR<AmbassadorCreateWithoutQrCodesInput, AmbassadorUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: AmbassadorCreateOrConnectWithoutQrCodesInput
    upsert?: AmbassadorUpsertWithoutQrCodesInput
    disconnect?: AmbassadorWhereInput | boolean
    delete?: AmbassadorWhereInput | boolean
    connect?: AmbassadorWhereUniqueInput
    update?: XOR<XOR<AmbassadorUpdateToOneWithWhereWithoutQrCodesInput, AmbassadorUpdateWithoutQrCodesInput>, AmbassadorUncheckedUpdateWithoutQrCodesInput>
  }

  export type PurchaseUpdateManyWithoutQrCodeNestedInput = {
    create?: XOR<PurchaseCreateWithoutQrCodeInput, PurchaseUncheckedCreateWithoutQrCodeInput> | PurchaseCreateWithoutQrCodeInput[] | PurchaseUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutQrCodeInput | PurchaseCreateOrConnectWithoutQrCodeInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutQrCodeInput | PurchaseUpsertWithWhereUniqueWithoutQrCodeInput[]
    createMany?: PurchaseCreateManyQrCodeInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutQrCodeInput | PurchaseUpdateWithWhereUniqueWithoutQrCodeInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutQrCodeInput | PurchaseUpdateManyWithWhereWithoutQrCodeInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type AnalyticsUncheckedUpdateManyWithoutQrCodeNestedInput = {
    create?: XOR<AnalyticsCreateWithoutQrCodeInput, AnalyticsUncheckedCreateWithoutQrCodeInput> | AnalyticsCreateWithoutQrCodeInput[] | AnalyticsUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutQrCodeInput | AnalyticsCreateOrConnectWithoutQrCodeInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutQrCodeInput | AnalyticsUpsertWithWhereUniqueWithoutQrCodeInput[]
    createMany?: AnalyticsCreateManyQrCodeInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutQrCodeInput | AnalyticsUpdateWithWhereUniqueWithoutQrCodeInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutQrCodeInput | AnalyticsUpdateManyWithWhereWithoutQrCodeInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutQrCodeNestedInput = {
    create?: XOR<PurchaseCreateWithoutQrCodeInput, PurchaseUncheckedCreateWithoutQrCodeInput> | PurchaseCreateWithoutQrCodeInput[] | PurchaseUncheckedCreateWithoutQrCodeInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutQrCodeInput | PurchaseCreateOrConnectWithoutQrCodeInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutQrCodeInput | PurchaseUpsertWithWhereUniqueWithoutQrCodeInput[]
    createMany?: PurchaseCreateManyQrCodeInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutQrCodeInput | PurchaseUpdateWithWhereUniqueWithoutQrCodeInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutQrCodeInput | PurchaseUpdateManyWithWhereWithoutQrCodeInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type QRCodeCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<QRCodeCreateWithoutAnalyticsInput, QRCodeUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutAnalyticsInput
    connect?: QRCodeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QRCodeUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<QRCodeCreateWithoutAnalyticsInput, QRCodeUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutAnalyticsInput
    upsert?: QRCodeUpsertWithoutAnalyticsInput
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutAnalyticsInput, QRCodeUpdateWithoutAnalyticsInput>, QRCodeUncheckedUpdateWithoutAnalyticsInput>
  }

  export type QRCodeCreateNestedManyWithoutAmbassadorInput = {
    create?: XOR<QRCodeCreateWithoutAmbassadorInput, QRCodeUncheckedCreateWithoutAmbassadorInput> | QRCodeCreateWithoutAmbassadorInput[] | QRCodeUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutAmbassadorInput | QRCodeCreateOrConnectWithoutAmbassadorInput[]
    createMany?: QRCodeCreateManyAmbassadorInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutAmbassadorInput = {
    create?: XOR<PurchaseCreateWithoutAmbassadorInput, PurchaseUncheckedCreateWithoutAmbassadorInput> | PurchaseCreateWithoutAmbassadorInput[] | PurchaseUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutAmbassadorInput | PurchaseCreateOrConnectWithoutAmbassadorInput[]
    createMany?: PurchaseCreateManyAmbassadorInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type QRCodeUncheckedCreateNestedManyWithoutAmbassadorInput = {
    create?: XOR<QRCodeCreateWithoutAmbassadorInput, QRCodeUncheckedCreateWithoutAmbassadorInput> | QRCodeCreateWithoutAmbassadorInput[] | QRCodeUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutAmbassadorInput | QRCodeCreateOrConnectWithoutAmbassadorInput[]
    createMany?: QRCodeCreateManyAmbassadorInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutAmbassadorInput = {
    create?: XOR<PurchaseCreateWithoutAmbassadorInput, PurchaseUncheckedCreateWithoutAmbassadorInput> | PurchaseCreateWithoutAmbassadorInput[] | PurchaseUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutAmbassadorInput | PurchaseCreateOrConnectWithoutAmbassadorInput[]
    createMany?: PurchaseCreateManyAmbassadorInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type QRCodeUpdateManyWithoutAmbassadorNestedInput = {
    create?: XOR<QRCodeCreateWithoutAmbassadorInput, QRCodeUncheckedCreateWithoutAmbassadorInput> | QRCodeCreateWithoutAmbassadorInput[] | QRCodeUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutAmbassadorInput | QRCodeCreateOrConnectWithoutAmbassadorInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutAmbassadorInput | QRCodeUpsertWithWhereUniqueWithoutAmbassadorInput[]
    createMany?: QRCodeCreateManyAmbassadorInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutAmbassadorInput | QRCodeUpdateWithWhereUniqueWithoutAmbassadorInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutAmbassadorInput | QRCodeUpdateManyWithWhereWithoutAmbassadorInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutAmbassadorNestedInput = {
    create?: XOR<PurchaseCreateWithoutAmbassadorInput, PurchaseUncheckedCreateWithoutAmbassadorInput> | PurchaseCreateWithoutAmbassadorInput[] | PurchaseUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutAmbassadorInput | PurchaseCreateOrConnectWithoutAmbassadorInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutAmbassadorInput | PurchaseUpsertWithWhereUniqueWithoutAmbassadorInput[]
    createMany?: PurchaseCreateManyAmbassadorInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutAmbassadorInput | PurchaseUpdateWithWhereUniqueWithoutAmbassadorInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutAmbassadorInput | PurchaseUpdateManyWithWhereWithoutAmbassadorInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type QRCodeUncheckedUpdateManyWithoutAmbassadorNestedInput = {
    create?: XOR<QRCodeCreateWithoutAmbassadorInput, QRCodeUncheckedCreateWithoutAmbassadorInput> | QRCodeCreateWithoutAmbassadorInput[] | QRCodeUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutAmbassadorInput | QRCodeCreateOrConnectWithoutAmbassadorInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutAmbassadorInput | QRCodeUpsertWithWhereUniqueWithoutAmbassadorInput[]
    createMany?: QRCodeCreateManyAmbassadorInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutAmbassadorInput | QRCodeUpdateWithWhereUniqueWithoutAmbassadorInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutAmbassadorInput | QRCodeUpdateManyWithWhereWithoutAmbassadorInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutAmbassadorNestedInput = {
    create?: XOR<PurchaseCreateWithoutAmbassadorInput, PurchaseUncheckedCreateWithoutAmbassadorInput> | PurchaseCreateWithoutAmbassadorInput[] | PurchaseUncheckedCreateWithoutAmbassadorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutAmbassadorInput | PurchaseCreateOrConnectWithoutAmbassadorInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutAmbassadorInput | PurchaseUpsertWithWhereUniqueWithoutAmbassadorInput[]
    createMany?: PurchaseCreateManyAmbassadorInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutAmbassadorInput | PurchaseUpdateWithWhereUniqueWithoutAmbassadorInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutAmbassadorInput | PurchaseUpdateManyWithWhereWithoutAmbassadorInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type QRCodeCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<QRCodeCreateWithoutPurchasesInput, QRCodeUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutPurchasesInput
    connect?: QRCodeWhereUniqueInput
  }

  export type AmbassadorCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<AmbassadorCreateWithoutPurchasesInput, AmbassadorUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: AmbassadorCreateOrConnectWithoutPurchasesInput
    connect?: AmbassadorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QRCodeUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<QRCodeCreateWithoutPurchasesInput, QRCodeUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutPurchasesInput
    upsert?: QRCodeUpsertWithoutPurchasesInput
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutPurchasesInput, QRCodeUpdateWithoutPurchasesInput>, QRCodeUncheckedUpdateWithoutPurchasesInput>
  }

  export type AmbassadorUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<AmbassadorCreateWithoutPurchasesInput, AmbassadorUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: AmbassadorCreateOrConnectWithoutPurchasesInput
    upsert?: AmbassadorUpsertWithoutPurchasesInput
    connect?: AmbassadorWhereUniqueInput
    update?: XOR<XOR<AmbassadorUpdateToOneWithWhereWithoutPurchasesInput, AmbassadorUpdateWithoutPurchasesInput>, AmbassadorUncheckedUpdateWithoutPurchasesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AnalyticsCreateWithoutQrCodeInput = {
    id?: string
    visitCount?: number
    uniqueVisitors?: number
    lastVisited?: Date | string
    referrer?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsUncheckedCreateWithoutQrCodeInput = {
    id?: string
    visitCount?: number
    uniqueVisitors?: number
    lastVisited?: Date | string
    referrer?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutQrCodeInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutQrCodeInput, AnalyticsUncheckedCreateWithoutQrCodeInput>
  }

  export type AnalyticsCreateManyQrCodeInputEnvelope = {
    data: AnalyticsCreateManyQrCodeInput | AnalyticsCreateManyQrCodeInput[]
    skipDuplicates?: boolean
  }

  export type AmbassadorCreateWithoutQrCodesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutAmbassadorInput
  }

  export type AmbassadorUncheckedCreateWithoutQrCodesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutAmbassadorInput
  }

  export type AmbassadorCreateOrConnectWithoutQrCodesInput = {
    where: AmbassadorWhereUniqueInput
    create: XOR<AmbassadorCreateWithoutQrCodesInput, AmbassadorUncheckedCreateWithoutQrCodesInput>
  }

  export type PurchaseCreateWithoutQrCodeInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ambassador: AmbassadorCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutQrCodeInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ambassadorId: string
  }

  export type PurchaseCreateOrConnectWithoutQrCodeInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutQrCodeInput, PurchaseUncheckedCreateWithoutQrCodeInput>
  }

  export type PurchaseCreateManyQrCodeInputEnvelope = {
    data: PurchaseCreateManyQrCodeInput | PurchaseCreateManyQrCodeInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsUpsertWithWhereUniqueWithoutQrCodeInput = {
    where: AnalyticsWhereUniqueInput
    update: XOR<AnalyticsUpdateWithoutQrCodeInput, AnalyticsUncheckedUpdateWithoutQrCodeInput>
    create: XOR<AnalyticsCreateWithoutQrCodeInput, AnalyticsUncheckedCreateWithoutQrCodeInput>
  }

  export type AnalyticsUpdateWithWhereUniqueWithoutQrCodeInput = {
    where: AnalyticsWhereUniqueInput
    data: XOR<AnalyticsUpdateWithoutQrCodeInput, AnalyticsUncheckedUpdateWithoutQrCodeInput>
  }

  export type AnalyticsUpdateManyWithWhereWithoutQrCodeInput = {
    where: AnalyticsScalarWhereInput
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutQrCodeInput>
  }

  export type AnalyticsScalarWhereInput = {
    AND?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    OR?: AnalyticsScalarWhereInput[]
    NOT?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    id?: StringFilter<"Analytics"> | string
    qrCodeId?: StringFilter<"Analytics"> | string
    visitCount?: IntFilter<"Analytics"> | number
    uniqueVisitors?: IntFilter<"Analytics"> | number
    lastVisited?: DateTimeFilter<"Analytics"> | Date | string
    referrer?: StringNullableFilter<"Analytics"> | string | null
    userAgent?: StringNullableFilter<"Analytics"> | string | null
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    updatedAt?: DateTimeFilter<"Analytics"> | Date | string
  }

  export type AmbassadorUpsertWithoutQrCodesInput = {
    update: XOR<AmbassadorUpdateWithoutQrCodesInput, AmbassadorUncheckedUpdateWithoutQrCodesInput>
    create: XOR<AmbassadorCreateWithoutQrCodesInput, AmbassadorUncheckedCreateWithoutQrCodesInput>
    where?: AmbassadorWhereInput
  }

  export type AmbassadorUpdateToOneWithWhereWithoutQrCodesInput = {
    where?: AmbassadorWhereInput
    data: XOR<AmbassadorUpdateWithoutQrCodesInput, AmbassadorUncheckedUpdateWithoutQrCodesInput>
  }

  export type AmbassadorUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutAmbassadorNestedInput
  }

  export type AmbassadorUncheckedUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutAmbassadorNestedInput
  }

  export type PurchaseUpsertWithWhereUniqueWithoutQrCodeInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutQrCodeInput, PurchaseUncheckedUpdateWithoutQrCodeInput>
    create: XOR<PurchaseCreateWithoutQrCodeInput, PurchaseUncheckedCreateWithoutQrCodeInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutQrCodeInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutQrCodeInput, PurchaseUncheckedUpdateWithoutQrCodeInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutQrCodeInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutQrCodeInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    amount?: FloatFilter<"Purchase"> | number
    currency?: StringFilter<"Purchase"> | string
    status?: StringFilter<"Purchase"> | string
    customerEmail?: StringFilter<"Purchase"> | string
    customerName?: StringNullableFilter<"Purchase"> | string | null
    stripeSessionId?: StringFilter<"Purchase"> | string
    wayfeUserId?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    qrCodeId?: StringFilter<"Purchase"> | string
    ambassadorId?: StringFilter<"Purchase"> | string
  }

  export type QRCodeCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    ambassador?: AmbassadorCreateNestedOneWithoutQrCodesInput
    purchases?: PurchaseCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    ambassadorId?: string | null
    purchases?: PurchaseUncheckedCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeCreateOrConnectWithoutAnalyticsInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutAnalyticsInput, QRCodeUncheckedCreateWithoutAnalyticsInput>
  }

  export type QRCodeUpsertWithoutAnalyticsInput = {
    update: XOR<QRCodeUpdateWithoutAnalyticsInput, QRCodeUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<QRCodeCreateWithoutAnalyticsInput, QRCodeUncheckedCreateWithoutAnalyticsInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutAnalyticsInput, QRCodeUncheckedUpdateWithoutAnalyticsInput>
  }

  export type QRCodeUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ambassador?: AmbassadorUpdateOneWithoutQrCodesNestedInput
    purchases?: PurchaseUpdateManyWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ambassadorId?: NullableStringFieldUpdateOperationsInput | string | null
    purchases?: PurchaseUncheckedUpdateManyWithoutQrCodeNestedInput
  }

  export type QRCodeCreateWithoutAmbassadorInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    analytics?: AnalyticsCreateNestedManyWithoutQrCodeInput
    purchases?: PurchaseCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateWithoutAmbassadorInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutQrCodeInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeCreateOrConnectWithoutAmbassadorInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutAmbassadorInput, QRCodeUncheckedCreateWithoutAmbassadorInput>
  }

  export type QRCodeCreateManyAmbassadorInputEnvelope = {
    data: QRCodeCreateManyAmbassadorInput | QRCodeCreateManyAmbassadorInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutAmbassadorInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCode: QRCodeCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutAmbassadorInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
  }

  export type PurchaseCreateOrConnectWithoutAmbassadorInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutAmbassadorInput, PurchaseUncheckedCreateWithoutAmbassadorInput>
  }

  export type PurchaseCreateManyAmbassadorInputEnvelope = {
    data: PurchaseCreateManyAmbassadorInput | PurchaseCreateManyAmbassadorInput[]
    skipDuplicates?: boolean
  }

  export type QRCodeUpsertWithWhereUniqueWithoutAmbassadorInput = {
    where: QRCodeWhereUniqueInput
    update: XOR<QRCodeUpdateWithoutAmbassadorInput, QRCodeUncheckedUpdateWithoutAmbassadorInput>
    create: XOR<QRCodeCreateWithoutAmbassadorInput, QRCodeUncheckedCreateWithoutAmbassadorInput>
  }

  export type QRCodeUpdateWithWhereUniqueWithoutAmbassadorInput = {
    where: QRCodeWhereUniqueInput
    data: XOR<QRCodeUpdateWithoutAmbassadorInput, QRCodeUncheckedUpdateWithoutAmbassadorInput>
  }

  export type QRCodeUpdateManyWithWhereWithoutAmbassadorInput = {
    where: QRCodeScalarWhereInput
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyWithoutAmbassadorInput>
  }

  export type QRCodeScalarWhereInput = {
    AND?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    OR?: QRCodeScalarWhereInput[]
    NOT?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    id?: StringFilter<"QRCode"> | string
    name?: StringFilter<"QRCode"> | string
    targetUrl?: StringFilter<"QRCode"> | string
    proxyUrl?: StringFilter<"QRCode"> | string
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    isActive?: BoolFilter<"QRCode"> | boolean
    isMobileApp?: BoolFilter<"QRCode"> | boolean
    iosAppUrl?: StringNullableFilter<"QRCode"> | string | null
    androidAppUrl?: StringNullableFilter<"QRCode"> | string | null
    iosDeeplink?: StringNullableFilter<"QRCode"> | string | null
    androidDeeplink?: StringNullableFilter<"QRCode"> | string | null
    universalDeeplink?: StringNullableFilter<"QRCode"> | string | null
    isSubscriptionOffer?: BoolFilter<"QRCode"> | boolean
    subscriptionWebUrl?: StringNullableFilter<"QRCode"> | string | null
    ambassadorId?: StringNullableFilter<"QRCode"> | string | null
  }

  export type PurchaseUpsertWithWhereUniqueWithoutAmbassadorInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutAmbassadorInput, PurchaseUncheckedUpdateWithoutAmbassadorInput>
    create: XOR<PurchaseCreateWithoutAmbassadorInput, PurchaseUncheckedCreateWithoutAmbassadorInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutAmbassadorInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutAmbassadorInput, PurchaseUncheckedUpdateWithoutAmbassadorInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutAmbassadorInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutAmbassadorInput>
  }

  export type QRCodeCreateWithoutPurchasesInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    analytics?: AnalyticsCreateNestedManyWithoutQrCodeInput
    ambassador?: AmbassadorCreateNestedOneWithoutQrCodesInput
  }

  export type QRCodeUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
    ambassadorId?: string | null
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutQrCodeInput
  }

  export type QRCodeCreateOrConnectWithoutPurchasesInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutPurchasesInput, QRCodeUncheckedCreateWithoutPurchasesInput>
  }

  export type AmbassadorCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QRCodeCreateNestedManyWithoutAmbassadorInput
  }

  export type AmbassadorUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    email: string
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: QRCodeUncheckedCreateNestedManyWithoutAmbassadorInput
  }

  export type AmbassadorCreateOrConnectWithoutPurchasesInput = {
    where: AmbassadorWhereUniqueInput
    create: XOR<AmbassadorCreateWithoutPurchasesInput, AmbassadorUncheckedCreateWithoutPurchasesInput>
  }

  export type QRCodeUpsertWithoutPurchasesInput = {
    update: XOR<QRCodeUpdateWithoutPurchasesInput, QRCodeUncheckedUpdateWithoutPurchasesInput>
    create: XOR<QRCodeCreateWithoutPurchasesInput, QRCodeUncheckedCreateWithoutPurchasesInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutPurchasesInput, QRCodeUncheckedUpdateWithoutPurchasesInput>
  }

  export type QRCodeUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: AnalyticsUpdateManyWithoutQrCodeNestedInput
    ambassador?: AmbassadorUpdateOneWithoutQrCodesNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ambassadorId?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: AnalyticsUncheckedUpdateManyWithoutQrCodeNestedInput
  }

  export type AmbassadorUpsertWithoutPurchasesInput = {
    update: XOR<AmbassadorUpdateWithoutPurchasesInput, AmbassadorUncheckedUpdateWithoutPurchasesInput>
    create: XOR<AmbassadorCreateWithoutPurchasesInput, AmbassadorUncheckedCreateWithoutPurchasesInput>
    where?: AmbassadorWhereInput
  }

  export type AmbassadorUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: AmbassadorWhereInput
    data: XOR<AmbassadorUpdateWithoutPurchasesInput, AmbassadorUncheckedUpdateWithoutPurchasesInput>
  }

  export type AmbassadorUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QRCodeUpdateManyWithoutAmbassadorNestedInput
  }

  export type AmbassadorUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: QRCodeUncheckedUpdateManyWithoutAmbassadorNestedInput
  }

  export type AnalyticsCreateManyQrCodeInput = {
    id?: string
    visitCount?: number
    uniqueVisitors?: number
    lastVisited?: Date | string
    referrer?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateManyQrCodeInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ambassadorId: string
  }

  export type AnalyticsUpdateWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitCount?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    lastVisited?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ambassador?: AmbassadorUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ambassadorId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseUncheckedUpdateManyWithoutQrCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ambassadorId?: StringFieldUpdateOperationsInput | string
  }

  export type QRCodeCreateManyAmbassadorInput = {
    id?: string
    name: string
    targetUrl: string
    proxyUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    isMobileApp?: boolean
    iosAppUrl?: string | null
    androidAppUrl?: string | null
    iosDeeplink?: string | null
    androidDeeplink?: string | null
    universalDeeplink?: string | null
    isSubscriptionOffer?: boolean
    subscriptionWebUrl?: string | null
  }

  export type PurchaseCreateManyAmbassadorInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    customerEmail: string
    customerName?: string | null
    stripeSessionId: string
    wayfeUserId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodeId: string
  }

  export type QRCodeUpdateWithoutAmbassadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: AnalyticsUpdateManyWithoutQrCodeNestedInput
    purchases?: PurchaseUpdateManyWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutAmbassadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analytics?: AnalyticsUncheckedUpdateManyWithoutQrCodeNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateManyWithoutAmbassadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    targetUrl?: StringFieldUpdateOperationsInput | string
    proxyUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMobileApp?: BoolFieldUpdateOperationsInput | boolean
    iosAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    androidAppUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iosDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    androidDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    universalDeeplink?: NullableStringFieldUpdateOperationsInput | string | null
    isSubscriptionOffer?: BoolFieldUpdateOperationsInput | boolean
    subscriptionWebUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseUpdateWithoutAmbassadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCode?: QRCodeUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutAmbassadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseUncheckedUpdateManyWithoutAmbassadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    wayfeUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodeId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}