/// <reference types="node" />
/// <reference types="request-promise" />
/// <reference types="request" />
/// <reference types="async-lock" />
/// <reference types="bluebird" />
import * as BluebirdPromise from 'bluebird';
import * as AsyncLock from 'async-lock';
import * as EventEmitter from 'events';
import * as Request from 'request';
import * as RequestPromise from 'request-promise';
export { AbstractCallback, EmptyCallback, EntityIdCallback, EntityCallback, EntitiesArrayCallback, EntitiesCountCallback, QueryResultsCallback };
export { PromiseResolver, PromiseResolve, PromiseReject };
export { IDocumentStore };
export { IDocumentSession, ISessionOptions, ISessionOperationOptions };
export { IDocumentQueryConditions };
export { IDocumentQueryBase, IRawDocumentQuery, IDocumentQuery, IDocumentQueryOptions };
export { IQueryBuilder };
export { IHiloIdGenerator };
export { RequestMethods, RequestMethod };
export { FieldIndexingOption, FieldIndexingOptions };
export { IndexLockMode };
export { FieldTermVectorOption };
export { ConcurrencyCheckMode, ConcurrencyCheckModes };
export { IndexPriority };
export { StatusCode, StatusCodes };
export { ILockDoneCallback, ILockCallback };
export { IRavenObject };
export { IOptionsSet };
export { IJsonable, IJsonConvertible, IStringable, IDisposable };
export { IRavenResponse };
export { IHeaders };
export { IResponse, IResponseBody };
export { IAuthOptions, IStoreAuthOptions, IRequestAuthOptions };
export { RavenException, NotSupportedException, InvalidOperationException, InvalidArgumentException, ErrorResponseException, DocumentDoesNotExistsException, NonUniqueObjectException, ConcurrencyException, ArgumentNullException, ArgumentOutOfRangeException, DatabaseDoesNotExistException, AuthorizationException, IndexDoesNotExistException, DatabaseLoadTimeoutException, AuthenticationException, BadRequestException, BulkInsertAbortedException, BulkInsertProtocolViolationException, IndexCompilationException, TransformerCompilationException, DocumentConflictException, DocumentDoesNotExistException, DocumentParseException, IndexInvalidException, IndexOrTransformerAlreadyExistException, JavaScriptException, JavaScriptParseException, SubscriptionClosedException, SubscriptionDoesNotBelongToNodeException, SubscriptionDoesNotExistException, SubscriptionException, SubscriptionInUseException, TransformerDoesNotExistException, VersioningDisabledException, TopologyNodeDownException, AllTopologyNodesDownException, BadResponseException, ChangeProcessingException, CommandExecutionException, NoLeaderException, CompilationException, ConflictException, DatabaseConcurrentLoadTimeoutException, DatabaseDisabledException, DatabaseLoadFailureException, DatabaseNotFoundException, NotSupportedOsException, SecurityException, ServerLoadFailureException, UnsuccessfulRequestException, CriticalIndexingException, IndexAnalyzerException, IndexCorruptionException, IndexOpenException, IndexWriteException, IndexWriterCreationException, StorageException, StreamDisposedException, LowMemoryException, IncorrectDllException, DiskFullException, InvalidJournalFlushRequestException, QuotaException, VoronUnrecoverableErrorException, NonDurableFileSystemException, AggregateException };
export { RavenCommandRequestOptions, RavenCommand };
export { GetDocumentCommand };
export { DeleteDocumentCommand };
export { PutDocumentCommand };
export { QueryCommand };
export { GetTopologyCommand };
export { GetClusterTopologyCommand };
export { GetOperationStateCommand };
export { QueryOperationOptions };
export { PutIndexesCommand };
export { BatchCommand };
export { QueryBasedCommand };
export { CreateDatabaseCommand };
export { DeleteByQueryCommand };
export { DeleteDatabaseCommand };
export { DeleteIndexCommand };
export { GetIndexCommand };
export { GetIndexesCommand };
export { GetStatisticsCommand };
export { PatchByQueryCommand };
export { PatchCommand };
export { RavenCommandData };
export { DeleteCommandData };
export { PutCommandData };
export { PatchCommandData };
export { SaveChangesData };
export { AttachmentCommand };
export { GetAttachmentCommand };
export { DeleteAttachmentCommand };
export { PutAttachmentCommand };
export { CreateDatabaseOperation };
export { DeleteDatabaseOperation };
export { QueryBasedOperation };
export { PatchByQueryOperation };
export { DeleteByQueryOperation };
export { GetIndexOperation };
export { PutIndexesOperation };
export { DeleteIndexOperation };
export { PatchOperation };
export { AttachmentOperation };
export { GetAttachmentOperation };
export { DeleteAttachmentOperation };
export { PutAttachmentOperation };
export { IAttachmentName, IAttachmentDetails };
export { IAttachmentResult };
export { AttachmentType, AttachmentTypes };
export { IOperationStatusResult, OperationStatus, OperationStatuses, OperationAwaiter };
export { AbstractOperation, Operation, AdminOperation, ServerOperation, PatchResultOperation, AwaitableOperation, IOperation };
export { AbstractOperationExecutor, AbstractDatabaseOperationExecutor, OperationExecutor, AdminOperationExecutor, ServerOperationExecutor, IOperationExecutor };
export { Serializer, ISerialized, IAttributeSerializer };
export { DatabaseDocument };
export { Certificate, PemCertificate, PfxCertificate, CertificateType, ICertificate };
export { DocumentStore };
export { DocumentSession };
export { AdvancedSessionOperations };
export { IWhereParams, IParametrizedWhereParams, WhereParams };
export { ConditionValue, SearchOperator, SearchOperators, QueryOperator, QueryOperators, QueryKeyword, QueryKeywords, OrderingType, OrderingTypes, WhereOperator, WhereOperators, FieldConstants };
export { SpatialConstants };
export { SpatialRelation, SpatialRelations };
export { SpatialUnit, SpatialUnits };
export { SpatialParameterNameGenerator, SpatialCriteria, CircleCriteria, WktCriteria };
export { IQueryToken, QueryToken, SimpleQueryToken };
export { CloseSubclauseToken };
export { DistinctToken };
export { FieldsToFetchToken };
export { FromToken };
export { GroupByCountToken };
export { GroupByKeyToken };
export { GroupBySumToken };
export { GroupByToken };
export { IntersectMarkerToken };
export { NegateToken };
export { OpenSubclauseToken };
export { OrderByToken };
export { QueryOperatorToken };
export { ShapeToken };
export { TrueToken };
export { IWhereTokenOptions, WhereToken };
export { DocumentConventions, IDocumentConversionResult, DocumentConstructor, IStoredRawEntityInfo, DocumentType, IDocumentInfoResolvable, IDocumentAssociationCheckResult };
export { IndexDefinition };
export { IndexFieldOptions };
export { DocumentQueryParameters, DocumentQueryBase, RawDocumentQuery, DocumentQuery, QueryResultsWithStatistics };
export { IndexQuery };
export { IFieldValidationResult, QueryBuilder };
export { ServerNode };
export { NodeSelector };
export { NodeStatus };
export { Topology };
export { UriUtility };
export { Lock };
export { Observable, IObservable };
export { DateUtil };
export { StringUtil };
export { ArrayUtil };
export { TypeUtil };
export { IStringBuilder, StringBuilder };
export { LinkedListItem, LinkedList };
export { ExceptionsFactory };
export { RequestExecutor, ITopologyUpdateEvent, IRequestExecutorOptions, IRequestExecutor };
export { ClusterRequestExecutor };
export { PatchRequest, PatchStatus, PatchStatuses, IPatchResult, IPatchRequestOptions };
export { HiloRangeValue };
export { AbstractHiloIdGenerator };
export { HiloIdGenerator };
export { HiloMultiDatabaseIdGenerator };
export { HiloMultiTypeIdGenerator };
export { HiloNextCommand };
export { HiloReturnCommand };
declare type SpatialRelation = 'within' | 'contains' | 'disjoint' | 'intersects';
declare class SpatialRelations {
    static readonly Within: SpatialRelation;
    static readonly Contains: SpatialRelation;
    static readonly Disjoint: SpatialRelation;
    static readonly Intersects: SpatialRelation;
}
interface IJsonable {
    toJson(): object;
}
interface IJsonConvertible {
    fromJson(json: object): void;
}
interface IStringable {
    toString(): string;
}
interface IDisposable<T = void> {
    dispose(): T;
}
declare type ConditionValue = string | number | boolean | Date | null;
declare type SearchOperator = 'OR' | 'AND';
declare class SearchOperators {
    static readonly Or: SearchOperator;
    static readonly And: SearchOperator;
}
declare type QueryOperator = SearchOperator | 'NOT';
declare class QueryOperators extends SearchOperators {
    static readonly Not: QueryOperator;
}
declare type QueryKeyword = 'SELECT' | 'DISTINCT' | 'AS' | 'FROM' | 'INDEX' | 'INCLUDE' | 'WHERE' | 'GROUP' | 'ORDER' | 'LOAD' | 'BY' | 'ASC' | 'DESC' | 'ALL' | 'IN' | 'BETWEEN' | 'UPDATE';
declare class QueryKeywords {
    static readonly Select: QueryKeyword;
    static readonly Distinct: QueryKeyword;
    static readonly As: QueryKeyword;
    static readonly From: QueryKeyword;
    static readonly Index: QueryKeyword;
    static readonly Include: QueryKeyword;
    static readonly Where: QueryKeyword;
    static readonly Group: QueryKeyword;
    static readonly Order: QueryKeyword;
    static readonly Load: QueryKeyword;
    static readonly By: QueryKeyword;
    static readonly Asc: QueryKeyword;
    static readonly Desc: QueryKeyword;
    static readonly In: QueryKeyword;
    static readonly Between: QueryKeyword;
    static readonly All: QueryKeyword;
    static readonly Update: QueryKeyword;
}
declare type OrderingType = 'string' | 'long' | 'double' | 'alphaNumeric';
declare class OrderingTypes {
    static readonly String: OrderingType;
    static readonly Long: OrderingType;
    static readonly Double: OrderingType;
    static readonly AlphaNumeric: OrderingType;
}
declare type WhereOperator = 'equals' | 'notEquals' | 'greaterThan' | 'greaterThanOrEqual' | 'lessThan' | 'lessThanOrEqual' | 'in' | 'allIn' | 'between' | 'search' | 'lucene' | 'startsWith' | 'endsWith' | 'exists' | SpatialRelation;
declare class WhereOperators extends SpatialRelations {
    static readonly Equals: WhereOperator;
    static readonly NotEquals: WhereOperator;
    static readonly GreaterThan: WhereOperator;
    static readonly GreaterThanOrEqual: WhereOperator;
    static readonly LessThan: WhereOperator;
    static readonly LessThanOrEqual: WhereOperator;
    static readonly In: WhereOperator;
    static readonly AllIn: WhereOperator;
    static readonly Between: WhereOperator;
    static readonly Search: WhereOperator;
    static readonly Lucene: WhereOperator;
    static readonly StartsWith: WhereOperator;
    static readonly EndsWith: WhereOperator;
    static readonly Exists: WhereOperator;
}
declare class FieldConstants {
    static readonly CustomSortFieldName: string;
    static readonly DocumentIdFieldName: string;
    static readonly ReduceKeyHashFieldName: string;
    static readonly ReduceKeyValueFieldName: string;
    static readonly AllFields: string;
    static readonly AllStoredFields: string;
    static readonly SpatialShapeFieldName: string;
    static readonly RangeFieldSuffix: string;
    static readonly RangeFieldSuffixLong: string;
    static readonly RangeFieldSuffixDouble: string;
    static readonly NullValue: string;
    static readonly EmptyString: string;
}
interface IStringBuilder extends IStringable {
    append(content: string): IStringBuilder;
    toString(): string;
}
declare class StringBuilder implements IStringBuilder {
    protected readonly blockSize: number;
    protected length: number;
    protected capacity: number;
    protected buffer: Buffer;
    append(content: string): IStringBuilder;
    toString(): string;
    protected getBufferFromOutside(source: string | number | boolean): Buffer | null;
    protected reAlloc(newSize: number): void;
}
declare class TypeUtil {
    static readonly MAX_INT32: number;
    static isNull(value: any): boolean;
    static isString(value: any): boolean;
    static isNumber(value: any): boolean;
    static isArray(value: any): boolean;
    static isObject(value: any): boolean;
    static isFunction(value: any): boolean;
    static isDocumentConstructor(value: any): boolean;
    static isDate(value: any): boolean;
    static isBool(value: any): boolean;
}
declare class RavenException extends Error {
    constructor(message: any);
}
declare class NotSupportedException extends RavenException {
}
declare class InvalidOperationException extends RavenException {
}
declare class InvalidArgumentException extends RavenException {
}
declare class ErrorResponseException extends RavenException {
}
declare class DocumentDoesNotExistsException extends RavenException {
}
declare class NonUniqueObjectException extends RavenException {
}
declare class ConcurrencyException extends RavenException {
}
declare class ArgumentNullException extends RavenException {
}
declare class ArgumentOutOfRangeException extends RavenException {
}
declare class DatabaseDoesNotExistException extends RavenException {
}
declare class AuthorizationException extends RavenException {
}
declare class IndexDoesNotExistException extends RavenException {
}
declare class DatabaseLoadTimeoutException extends RavenException {
}
declare class AuthenticationException extends RavenException {
}
declare class BadRequestException extends RavenException {
}
declare class BulkInsertAbortedException extends RavenException {
}
declare class BulkInsertProtocolViolationException extends RavenException {
}
declare class IndexCompilationException extends RavenException {
}
declare class TransformerCompilationException extends RavenException {
}
declare class DocumentConflictException extends RavenException {
}
declare class DocumentDoesNotExistException extends RavenException {
}
declare class DocumentParseException extends RavenException {
}
declare class IndexInvalidException extends RavenException {
}
declare class IndexOrTransformerAlreadyExistException extends RavenException {
}
declare class JavaScriptException extends RavenException {
}
declare class JavaScriptParseException extends RavenException {
}
declare class SubscriptionClosedException extends RavenException {
}
declare class SubscriptionDoesNotBelongToNodeException extends RavenException {
}
declare class SubscriptionDoesNotExistException extends RavenException {
}
declare class SubscriptionException extends RavenException {
}
declare class SubscriptionInUseException extends RavenException {
}
declare class TransformerDoesNotExistException extends RavenException {
}
declare class VersioningDisabledException extends RavenException {
}
declare class TopologyNodeDownException extends RavenException {
}
declare class AllTopologyNodesDownException extends RavenException {
}
declare class BadResponseException extends RavenException {
}
declare class ChangeProcessingException extends RavenException {
}
declare class CommandExecutionException extends RavenException {
}
declare class NoLeaderException extends RavenException {
}
declare class CompilationException extends RavenException {
}
declare class ConflictException extends RavenException {
}
declare class DatabaseConcurrentLoadTimeoutException extends RavenException {
}
declare class DatabaseDisabledException extends RavenException {
}
declare class DatabaseLoadFailureException extends RavenException {
}
declare class DatabaseNotFoundException extends RavenException {
}
declare class NotSupportedOsException extends RavenException {
}
declare class SecurityException extends RavenException {
}
declare class ServerLoadFailureException extends RavenException {
}
declare class UnsuccessfulRequestException extends RavenException {
}
declare class CriticalIndexingException extends RavenException {
}
declare class IndexAnalyzerException extends RavenException {
}
declare class IndexCorruptionException extends RavenException {
}
declare class IndexOpenException extends RavenException {
}
declare class IndexWriteException extends RavenException {
}
declare class IndexWriterCreationException extends RavenException {
}
declare class StorageException extends RavenException {
}
declare class StreamDisposedException extends RavenException {
}
declare class LowMemoryException extends RavenException {
}
declare class IncorrectDllException extends RavenException {
}
declare class DiskFullException extends RavenException {
}
declare class InvalidJournalFlushRequestException extends RavenException {
}
declare class QuotaException extends RavenException {
}
declare class VoronUnrecoverableErrorException extends RavenException {
}
declare class NonDurableFileSystemException extends RavenException {
}
declare class AggregateException extends RavenException {
}
interface IQueryToken {
    writeTo(writer: StringBuilder): void;
}
declare abstract class QueryToken implements IQueryToken {
    protected static readonly rqlKeywords: Set<QueryKeyword>;
    protected writeField(writer: StringBuilder, field: string): void;
    protected constructor();
    abstract writeTo(writer: StringBuilder): void;
}
declare abstract class SimpleQueryToken extends QueryToken {
    static readonly instance: IQueryToken;
    writeTo(writer: StringBuilder): void;
    protected abstract tokenText(): string;
}
declare type StatusCode = 200 | 201 | 202 | 204 | 301 | 302 | 304 | 400 | 401 | 412 | 403 | 404 | 408 | 409 | 417 | 500 | 502 | 503 | 504;
declare class StatusCodes {
    static readonly Ok: StatusCode;
    static readonly Created: StatusCode;
    static readonly Accepted: StatusCode;
    static readonly NoContent: StatusCode;
    static readonly MovedPermanently: StatusCode;
    static readonly Found: StatusCode;
    static readonly NotModified: StatusCode;
    static readonly BadRequest: StatusCode;
    static readonly Unauthorized: StatusCode;
    static readonly Forbidden: StatusCode;
    static readonly NotFound: StatusCode;
    static readonly RequestTimeout: StatusCode;
    static readonly Conflict: StatusCode;
    static readonly PreconditionFailed: StatusCode;
    static readonly ExpectationFailed: StatusCode;
    static readonly InternalServerError: StatusCode;
    static readonly BadGateway: StatusCode;
    static readonly ServiceUnavailable: StatusCode;
    static readonly GatewayTimeout: StatusCode;
    static isSuccess(statusCode: StatusCode): boolean;
    static isError(statusCode: StatusCode): boolean;
    static isOk(statusCode: StatusCode): boolean;
    static isCreated(statusCode: StatusCode): boolean;
    static isAccepted(statusCode: StatusCode): boolean;
    static isNoContent(statusCode: StatusCode): boolean;
    static isMovedPermanently(statusCode: StatusCode): boolean;
    static isFound(statusCode: StatusCode): boolean;
    static isNotModified(statusCode: StatusCode): boolean;
    static isBadRequest(statusCode: StatusCode): boolean;
    static isUnauthorized(statusCode: StatusCode): boolean;
    static isForbidden(statusCode: StatusCode): boolean;
    static isNotFound(statusCode: StatusCode): boolean;
    static isRequestTimeout(statusCode: StatusCode): boolean;
    static isConflict(statusCode: StatusCode): boolean;
    static isPreconditionFailed(statusCode: StatusCode): boolean;
    static isExpectationFailed(statusCode: StatusCode): boolean;
    static isInternalServerError(statusCode: StatusCode): boolean;
    static isBadGateway(statusCode: StatusCode): boolean;
    static isServiceUnavailable(statusCode: StatusCode): boolean;
    static isGatewayTimeout(statusCode: StatusCode): boolean;
}
declare class SpatialConstants {
    static readonly DefaultDistanceErrorPct: number;
    static readonly EarthMeanRadiusKm: number;
    static readonly MilesToKm: number;
}
declare class ShapeToken extends QueryToken {
    private _shape;
    protected constructor(shape: string);
    static circle(radiusParameterName: string, latituteParameterName: string, longitudeParameterName: string, radiusUnits?: SpatialUnit): ShapeToken;
    static wkt(shapeWktParameterName: string): ShapeToken;
    writeTo(writer: StringBuilder): void;
}
interface IHeaders {
    [header: string]: string | number;
}
declare class UriUtility {
    static parseUrls(urls: string | string[]): string[];
    static isSecure(url: string): boolean;
}
interface IRavenObject<T = any> {
    [propery: string]: T;
}
declare class ExceptionsFactory {
    static create(message: string): RavenException;
    static create(type: string, message: string): RavenException;
    static createFrom(json: object): RavenException | null;
    static createFrom(response: IResponse): RavenException | null;
    static throw(message: string): never;
    static throw(type: string, message: string): never;
    static throwFrom(json: object): void | never;
    static throwFrom(response: IResponse): void | never;
    private static _exceptionsByType;
}
declare type RavenCommandRequestOptions = RequestPromise.RequestPromiseOptions & Request.RequiredUriUrl;
declare abstract class RavenCommand {
    protected _method: RequestMethod;
    protected endPoint?: string;
    protected params?: object;
    protected payload?: object;
    protected headers: object;
    protected failedNodes: Set<ServerNode>;
    protected _lastResponse: IResponse;
    abstract createRequest(serverNode: ServerNode): void;
    readonly serverResponse: IResponse;
    readonly method: RequestMethod;
    constructor(endPoint: string, method?: RequestMethod, params?: object, payload?: object, headers?: IHeaders);
    readonly wasFailed: boolean;
    addFailedNode(node: ServerNode): void;
    wasFailedWithNode(node: ServerNode): boolean;
    pathWithNode(node: ServerNode): string;
    toRequestOptions(): RavenCommandRequestOptions;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
    protected addParams(params: object | string, value?: any): void;
    protected removeParams(params: string[] | string, ...otherParams: string[]): void;
}
declare type SpatialUnit = 'Kilometers' | 'Miles';
declare class SpatialUnits {
    static readonly DefaultDistanceErrorPct: number;
    static readonly EarthMeanRadiusKm: number;
    static readonly MilesToKm: number;
    static readonly Kilometers: SpatialUnit;
    static readonly Miles: SpatialUnit;
}
interface IWhereTokenOptions {
    fieldName?: string;
    whereOperator?: WhereOperator;
    searchOperator?: SearchOperator;
    parameterName?: string;
    fromParameterName?: string;
    toParameterName?: string;
    exact?: boolean;
    distanceErrorPct?: number;
    whereShape?: ShapeToken;
}
declare class WhereToken extends QueryToken {
    private _fieldName;
    private _whereOperator;
    private _searchOperator?;
    private _parameterName;
    private _fromParameterName;
    private _toParameterName;
    private _boost?;
    private _fuzzy?;
    private _proximity?;
    private _exact;
    private _distanceErrorPct;
    private _whereShape;
    static equals(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static notEquals(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static startsWith(fieldName: string, parameterName: string): WhereToken;
    static endsWith(fieldName: string, parameterName: string): WhereToken;
    static greaterThan(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static greaterThanOrEqual(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static lessThan(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static lessThanOrEqual(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static in(fieldName: string, parameterName: string, exact?: boolean): WhereToken;
    static allIn(fieldName: string, parameterName: string): WhereToken;
    static between(fieldName: string, fromParameterName: string, toParameterName: string, exact?: boolean): WhereToken;
    static search(fieldName: string, parameterName: string, op?: SearchOperator): WhereToken;
    static lucene(fieldName: string, parameterName: string): WhereToken;
    static exists(fieldName: string): WhereToken;
    static within(fieldName: string, shape: ShapeToken, distanceErrorPct: number): WhereToken;
    static contains(fieldName: string, shape: ShapeToken, distanceErrorPct: number): WhereToken;
    static disjoint(fieldName: string, shape: ShapeToken, distanceErrorPct: number): WhereToken;
    static intersects(fieldName: string, shape: ShapeToken, distanceErrorPct: number): WhereToken;
    constructor(whereOptions: IWhereTokenOptions);
    readonly fieldName: string;
    readonly whereOperator: WhereOperator;
    readonly searchOperator: SearchOperator;
    readonly parameterName: string;
    readonly fromParameterName: string;
    readonly toParameterName: string;
    boost: number;
    fuzzy: number;
    proximity: number;
    readonly exact: boolean;
    readonly distanceErrorPct: number;
    readonly whereShape: ShapeToken;
    writeTo(writer: StringBuilder): void;
}
declare class ServerNode implements IJsonConvertible {
    private _database;
    private _url;
    private _clusterTag?;
    private _responseTime;
    private _isRateSurpassed?;
    static fromJson(json: object): ServerNode;
    constructor(url: string, database: string, clusterTag?: string);
    readonly database: string;
    readonly clusterTag: string;
    readonly url: string;
    readonly ewma: number;
    readonly isSecure: boolean;
    responseTime: number;
    isRateSurpassed(requestTimeSlaThresholdInMilliseconds: any): boolean;
    fromJson(json: object): void;
}
interface ILockDoneCallback {
    (err?: Error, ret?: any): void;
}
declare type ILockCallback = (done: ILockDoneCallback) => any;
interface IAuthOptions {
    type?: CertificateType;
    certificate?: string | Buffer;
    password?: string;
}
interface IStoreAuthOptions extends IAuthOptions {
}
interface IRequestAuthOptions extends IAuthOptions {
}
interface IRavenResponse extends IRavenObject {
}
declare type SpatialParameterNameGenerator = (parameterValue: string | number) => string;
declare abstract class SpatialCriteria {
    protected relation: SpatialRelation;
    protected distanceErrorPct: number;
    static relatesToShape(shapeWkt: string, relation: SpatialRelation, distErrorPercent?: number): WktCriteria;
    static intersects(shapeWkt: string, distErrorPercent?: number): SpatialCriteria;
    static contains(shapeWkt: string, distErrorPercent?: number): SpatialCriteria;
    static disjoint(shapeWkt: string, distErrorPercent?: number): WktCriteria;
    static within(shapeWkt: string, distErrorPercent?: number): WktCriteria;
    static withinRadius(radius: number, latitude: number, longitude: number, radiusUnits?: SpatialUnit, distErrorPercent?: number): CircleCriteria;
    constructor(relation: SpatialRelation, distanceErrorPct: number);
    abstract getShapeToken(addQueryParameter: SpatialParameterNameGenerator): ShapeToken;
    toQueryToken(fieldName: string, addQueryParameter: SpatialParameterNameGenerator): IQueryToken;
}
declare class CircleCriteria extends SpatialCriteria {
    protected radius: number;
    protected latitude: number;
    protected longitude: number;
    protected radiusUnits: SpatialUnit;
    constructor(radius: number, latitude: number, longitude: number, radiusUnits: SpatialUnit, relation: SpatialRelation, distErrorPercent: number);
    getShapeToken(addQueryParameter: SpatialParameterNameGenerator): ShapeToken;
}
declare class WktCriteria extends SpatialCriteria {
    protected shapeWkt: string;
    constructor(shapeWkt: string, relation: SpatialRelation, distanceErrorPct: number);
    getShapeToken(addQueryParameter: SpatialParameterNameGenerator): ShapeToken;
}
interface IWhereParams<V> {
    fieldName: string;
    value?: V;
    allowWildcards?: boolean;
    isNestedPath?: boolean;
    exact?: boolean;
}
interface IParametrizedWhereParams extends IWhereParams<void> {
    parameterName: string;
}
declare class WhereParams<V> implements IWhereParams<V> {
    fieldName: string;
    value: V;
    allowWildcards: boolean;
    isNestedPath: boolean;
    exact: boolean;
    constructor(fieldName: string, value: V, allowWildcards?: boolean, isNestedPath?: boolean, exact?: boolean);
    static from<V>(paramsObject: IWhereParams<V>): WhereParams<V>;
    parametrize(parameterName: string): IParametrizedWhereParams;
}
declare type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
declare class RequestMethods {
    static readonly Get: RequestMethod;
    static readonly Post: RequestMethod;
    static readonly Put: RequestMethod;
    static readonly Patch: RequestMethod;
    static readonly Delete: RequestMethod;
    static readonly Options: RequestMethod;
}
interface IResponse extends IRavenObject {
    statusCode: StatusCode;
    headers: IHeaders;
    body?: IResponseBody | string;
}
interface IResponseBody extends IRavenObject {
    Message?: string;
    Error?: string;
    Results?: IRavenObject | IRavenObject[];
    ActualchangeVector?: string;
}
declare class Topology implements IJsonConvertible {
    private _etag;
    private _nodes?;
    static fromJson(json: object): Topology;
    constructor(etag?: number, nodes?: ServerNode[]);
    readonly nodes: ServerNode[];
    readonly etag: number;
    fromJson(json: object): void;
}
interface ISerialized<T extends Object = IRavenObject> {
    source: object | T;
    target?: object | T;
    originalAttribute: string;
    serializedAttribute: string;
    originalValue: any;
    serializedValue: any;
    attributePath: string;
    metadata?: object;
    nestedObjectTypes?: IRavenObject<DocumentConstructor>;
}
interface IAttributeSerializer {
    onUnserialized?: (serialized: ISerialized) => void;
    onSerialized?: (serialized: ISerialized) => void;
}
declare class Serializer {
    static fromJSON<T extends Object = IRavenObject>(target: T, source: object | string, metadata?: object | null, nestedObjectTypes?: IRavenObject<DocumentConstructor>, conventions?: DocumentConventions, parentPath?: string): T;
    static toJSON<T extends Object = IRavenObject>(source: T, conventions?: DocumentConventions, parentPath?: string): object;
    private static buildPath(attribute, parentPath?);
}
declare class Lock {
    private _key;
    private static _lock;
    protected readonly lock: AsyncLock;
    constructor(key: any);
    static make(): Lock;
    acquire(wrapped: ILockCallback): BluebirdPromise<any>;
    acquire(wrapped: ILockCallback, callback: ILockDoneCallback): void;
}
interface IOptionsSet {
    [propName: string]: any | any[];
}
declare class StringUtil {
    private static readonly letterRe;
    private static readonly digitRe;
    static format(string: string, vars?: object | any, ...varsArray: any[]): string;
    static validateDBName(dbName?: string): void;
    static escapeIfNecessary(field: string): string;
    static capitalize(string: string): string;
    static uncapitalize(string: string): string;
    static isCharacter(character: string): boolean;
    static isDigit(character: string): boolean;
    static isLetter(character: string): boolean;
    static isLetterOrDigit(character: string): boolean;
    static isNullOrWhiteSpace(string?: string): boolean;
}
declare type CertificateType = 'pem' | 'pfx';
interface ICertificate {
    toAgentOptions(agentOptions: IOptionsSet): void;
}
declare abstract class Certificate implements ICertificate {
    static readonly Pem: CertificateType;
    static readonly Pfx: CertificateType;
    protected _certificate: string | Buffer;
    protected _passphrase?: string;
    static createFromOptions(options: IAuthOptions): ICertificate;
    static createPem(certificate: string | Buffer, passphrase?: string): PemCertificate;
    static createPfx(certificate: string | Buffer, passphrase?: string): PfxCertificate;
    constructor(certificate: string | Buffer, passprase?: string);
    toAgentOptions(agentOptions: IOptionsSet): void;
}
declare class PemCertificate extends Certificate {
    private readonly certToken;
    private readonly keyToken;
    protected _key: string;
    constructor(certificate: string | Buffer, passprase?: string);
    toAgentOptions(agentOptions: IOptionsSet): void;
    protected fetchPart(token: string): string;
}
declare class PfxCertificate extends Certificate {
    constructor(certificate: string | Buffer, passprase?: string);
    toAgentOptions(agentOptions: IOptionsSet): void;
}
declare class GetStatisticsCommand extends RavenCommand {
    protected checkForFailures?: boolean;
    constructor(checkForFailures?: boolean);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class GetTopologyCommand extends RavenCommand {
    protected forceUrl?: string;
    constructor(forceUrl?: string);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class IndexQuery implements IJsonable {
    static readonly DefaultTimeout: number;
    private _query;
    private _queryParameters;
    private _start;
    private _pageSize;
    private _cutOffEtag;
    private _waitForNonStaleResults;
    private _waitForNonStaleResultsAsOfNow;
    private _waitForNonStaleResultsTimeout?;
    constructor(query?: string, queryParameters?: IRavenObject, pageSize?: number, skippedResults?: number, options?: IOptionsSet);
    pageSize: number;
    start: number;
    readonly query: string;
    readonly queryParameters: IRavenObject;
    readonly cutOffEtag: number;
    readonly waitForNonStaleResults: boolean;
    readonly waitForNonStaleResultsAsOfNow: boolean;
    readonly waitForNonStaleResultsTimeout: number;
    readonly queryHash: string;
    protected readonly formattedTimeout: string;
    toJson(): object;
}
declare abstract class RavenCommandData implements IJsonable {
    protected type: RequestMethod;
    protected id: string;
    protected changeVector?: string;
    constructor(id: string, changeVector?: string);
    readonly documentId: string;
    toJson(): object;
}
declare type DocumentConstructor<T extends Object = IRavenObject> = {
    new (...args: any[]): T;
};
declare type DocumentType<T extends Object = IRavenObject> = DocumentConstructor<T> | string;
interface IDocumentInfoResolvable {
    resolveConstructor?: (typeName: string) => DocumentConstructor;
    resolveIdProperty?: (typeName: string, document?: object | IRavenObject) => string;
    resolveDocumentType?: (plainDocument: object, id?: string, specifiedType?: DocumentType) => string;
}
interface IDocumentConversionResult<T extends Object = IRavenObject> {
    rawEntity?: object;
    document: T;
    metadata: object;
    originalMetadata: object;
    documentType: DocumentType<T>;
}
interface IDocumentAssociationCheckResult<T extends Object = IRavenObject> {
    document: T;
    isNew: boolean;
}
interface IStoredRawEntityInfo {
    originalValue: object;
    metadata: object;
    originalMetadata: object;
    id: string;
    changeVector?: string | null;
    expectedChangeVector?: string | null;
    concurrencyCheckMode: ConcurrencyCheckMode;
    documentType: DocumentType;
}
declare class DocumentConventions {
    readonly maxNumberOfRequestPerSession: number;
    readonly requestTimeout: number;
    readonly defaultUseOptimisticConcurrency: boolean;
    readonly maxLengthOfQueryUsingGetUrl: number;
    readonly identityPartsSeparator: string;
    private _resolvers;
    private _serializers;
    private _idsNamesCache;
    private _ctorsCache;
    setIdOnlyIfPropertyIsDefined: boolean;
    disableTopologyUpdates: boolean;
    readonly emptyChangeVector: string;
    readonly emptyCollection: string;
    readonly systemMetaKeys: string[];
    readonly serializers: IAttributeSerializer[];
    addAttributeSerializer(serializer: IAttributeSerializer): void;
    addDocumentInfoResolver(resolver: IDocumentInfoResolvable): void;
    getCollectionName(documentType: DocumentType): string;
    getDocumentTypeName(documentType: DocumentType): string;
    getDocumentConstructor<T extends Object = IRavenObject>(documentType?: DocumentType<T>): DocumentConstructor<T> | null;
    getIdPropertyName<T extends Object = IRavenObject>(documentType?: DocumentType<T>, document?: T | object): string;
    convertToDocument<T extends Object = IRavenObject>(rawEntity: object, documentType?: DocumentType<T>, nestedObjectTypes?: IRavenObject<DocumentConstructor>): IDocumentConversionResult<T>;
    convertToRawEntity<T extends Object = IRavenObject>(document: T, documentType?: DocumentType<T>): object;
    tryFetchResults(commandResponse: IRavenResponse): object[];
    tryFetchIncludes(commandResponse: IRavenResponse): object[];
    checkIsProjection(responseItem: object): boolean;
    setIdOnDocument<T extends Object = IRavenObject>(document: T, id: string, documentType?: DocumentType<T>): T;
    getIdFromDocument<T extends Object = IRavenObject>(document?: T, documentType?: DocumentType<T>): string;
    getTypeFromDocument<T extends Object = IRavenObject>(document?: T, id?: string, documentType?: DocumentType<T>): DocumentType<T>;
    buildDefaultMetadata<T extends Object = IRavenObject>(document: T, documentType: DocumentType<T>): object;
}
interface IQueryBuilder {
    isDynamicMapReduce: boolean;
    rawQuery(query: string): IQueryBuilder;
    selectFields(fields: string[]): IQueryBuilder;
    selectFields(fields: string[], projections: string[]): IQueryBuilder;
    from(indexName?: string, collectionName?: string): IQueryBuilder;
    getProjectionFields(): string[];
    randomOrdering(seed?: string): IQueryBuilder;
    customSortUsing(typeName: string, descending?: boolean): IQueryBuilder;
    include(path: string): IQueryBuilder;
    usingDefaultOperator(operator: QueryOperator): IQueryBuilder;
    whereEquals(params: IParametrizedWhereParams): IQueryBuilder;
    whereEquals(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereNotEquals(params: IParametrizedWhereParams): IQueryBuilder;
    whereNotEquals(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    openSubclause(): IQueryBuilder;
    closeSubclause(): IQueryBuilder;
    negateNext(): IQueryBuilder;
    whereIn(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereAllIn(fieldName: string, parameterName: string): IQueryBuilder;
    whereStartsWith(fieldName: string, parameterName: string): IQueryBuilder;
    whereEndsWith(fieldName: string, parameterName: string): IQueryBuilder;
    whereBetween(fieldName: string, fromParameterName: string, toParameterName: string, exact?: boolean): IQueryBuilder;
    whereGreaterThan(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereGreaterThanOrEqual(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereLessThan(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereLessThanOrEqual(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereExists(fieldName: string): IQueryBuilder;
    andAlso(): IQueryBuilder;
    orElse(): IQueryBuilder;
    boost(boost: number): IQueryBuilder;
    fuzzy(fuzzy: number): IQueryBuilder;
    proximity(proximity: number): IQueryBuilder;
    orderBy(field: string, ordering?: OrderingType): IQueryBuilder;
    orderByDescending(field: string, ordering?: OrderingType): IQueryBuilder;
    orderByScore(): IQueryBuilder;
    orderByScoreDescending(): IQueryBuilder;
    search(fieldName: string, searchTermsParameterName: string, operator?: SearchOperator): IQueryBuilder;
    intersect(): IQueryBuilder;
    distinct(): IQueryBuilder;
    groupBy(fieldName: string, ...fieldNames: string[]): IQueryBuilder;
    groupByKey(fieldName: string, projectedName?: string): IQueryBuilder;
    groupBySum(fieldName: string, projectedName?: string): IQueryBuilder;
    groupByCount(projectedName?: string): IQueryBuilder;
    whereTrue(): IQueryBuilder;
    withinRadiusOf(fieldName: string, radiusParameterName: string, latitudeParameterName: string, longitudeParameterName: string, radiusUnits?: SpatialUnit, distErrorPercent?: number): IQueryBuilder;
    spatial(fieldName: string, shapeWktParameterName: string, relation: SpatialRelation, distErrorPercent: number): IQueryBuilder;
    spatial(fieldName: string, criteria: SpatialCriteria, parameterNameGenerator: SpatialParameterNameGenerator): IQueryBuilder;
    orderByDistance(fieldName: string, latitudeParameterName: string, longitudeParameterName: string): IQueryBuilder;
    orderByDistance(fieldName: string, shapeWktParameterName: string): IQueryBuilder;
    orderByDistanceDescending(fieldName: string, latitudeParameterName: string, longitudeParameterName: string): IQueryBuilder;
    orderByDistanceDescending(fieldName: string, shapeWktParameterName: string): IQueryBuilder;
}
declare class CloseSubclauseToken extends SimpleQueryToken {
    protected tokenText(): string;
}
declare class DistinctToken extends SimpleQueryToken {
    protected tokenText(): string;
}
declare class FieldsToFetchToken extends QueryToken {
    private _fieldsToFetch;
    private _projections;
    readonly fieldsToFetch: string[];
    readonly projections: string[];
    static create(fieldsToFetch: string[], projections?: string[]): FieldsToFetchToken;
    protected constructor(fieldsToFetch: string[], projections?: string[]);
    writeTo(writer: StringBuilder): void;
}
declare class FromToken extends QueryToken {
    private _collectionName?;
    private _indexName?;
    private _isDynamic;
    private static readonly whiteSpaceChars;
    readonly collectionName: string;
    readonly indexName: string;
    readonly isDynamic: boolean;
    static create(indexName?: string, collectionName?: string): FromToken;
    protected constructor(indexName?: string, collectionName?: string);
    writeTo(writer: StringBuilder): void;
}
declare class GroupByCountToken extends QueryToken {
    private _fieldName;
    static create(fieldName: string): GroupByCountToken;
    protected constructor(fieldName: string);
    writeTo(writer: StringBuilder): void;
}
declare class GroupByKeyToken extends QueryToken {
    private _fieldName;
    private _projectedName?;
    static create(fieldName: string, projectedName?: string): GroupByKeyToken;
    protected constructor(fieldName: string, projectedName?: string);
    writeTo(writer: StringBuilder): void;
}
declare class GroupBySumToken extends QueryToken {
    private _fieldName;
    private _projectedName?;
    static create(fieldName: string, projectedName?: string): GroupBySumToken;
    protected constructor(fieldName: string, projectedName?: string);
    writeTo(writer: StringBuilder): void;
}
declare class GroupByToken extends QueryToken {
    private _fieldName;
    static create(fieldName: string): GroupByToken;
    protected constructor(fieldName: string);
    writeTo(writer: StringBuilder): void;
}
declare class IntersectMarkerToken extends SimpleQueryToken {
    protected tokenText(): string;
}
declare class NegateToken extends SimpleQueryToken {
    protected tokenText(): string;
}
declare class OpenSubclauseToken extends SimpleQueryToken {
    protected tokenText(): string;
}
declare class OrderByToken extends QueryToken {
    private _fieldName;
    private _descending;
    private _ordering;
    static readonly random: OrderByToken;
    static readonly scoreAscending: OrderByToken;
    static readonly scoreDescending: OrderByToken;
    protected constructor(fieldName: string, descending?: boolean, ordering?: OrderingType);
    static createDistanceAscending(fieldName: string, shapeWktParameterName: string): OrderByToken;
    static createDistanceAscending(fieldName: string, latitudeParameterName: string, longitudeParameterName: string): OrderByToken;
    static createDistanceDescending(fieldName: string, shapeWktParameterName: string): OrderByToken;
    static createDistanceDescending(fieldName: string, latitudeParameterName: string, longitudeParameterName: string): OrderByToken;
    static createRandom(seed: string): OrderByToken;
    static createAscending(fieldName: string, ordering: OrderingType): OrderByToken;
    static createDescending(fieldName: string, ordering: OrderingType): OrderByToken;
    writeTo(writer: StringBuilder): void;
}
declare class QueryOperatorToken extends QueryToken {
    private _queryOperator;
    static readonly And: QueryToken;
    static readonly Or: QueryToken;
    protected constructor(queryOperator: QueryOperator);
    writeTo(writer: StringBuilder): void;
}
declare class TrueToken extends SimpleQueryToken {
    protected tokenText(): string;
}
declare class NodeStatus implements IDisposable {
    private readonly maxTimerPeriod;
    private readonly timerPeriodStep;
    private _nodeIndex;
    private _node;
    private _timerPeriod;
    private _timer?;
    private _onUpdate;
    readonly nextTimerPeriod: number;
    readonly nodeIndex: number;
    readonly node: ServerNode;
    constructor(nodeIndex: number, node: ServerNode, onUpdate: typeof NodeStatus.prototype._onUpdate);
    startUpdate(): void;
    retryUpdate(): void;
    dispose(): void;
}
declare class NodeSelector {
    private _lock;
    private _currentNodeIndex;
    protected initialDatabase: string;
    protected topology: Topology;
    readonly nodes: ServerNode[];
    readonly currentNodeIndex: number;
    readonly topologyEtag: number;
    readonly currentNode: ServerNode;
    constructor(requestExecutor: RequestExecutor, topology: Topology);
    protected assignTopology(topology: Topology, forceUpdate: boolean): BluebirdPromise<void>;
    protected onTopologyUpdated(event: ITopologyUpdateEvent): void;
    protected onRequestFailed(failedNode: ServerNode): void;
    protected onNodeRestored(failedNode: ServerNode): void;
    protected assertTopology(): void | never;
}
declare class DateUtil {
    static timestamp(): number;
    static timestampMs(): number;
    static zeroDate(): Date;
    static parse(dateString: string): Date;
    static stringify(date: Date): string;
}
declare class LinkedListItem<T> {
    private _value;
    private _listTtems;
    value: T;
    readonly index: number;
    readonly first: boolean;
    readonly last: boolean;
    readonly previous: LinkedListItem<T> | null;
    readonly next: LinkedListItem<T> | null;
    constructor(_value: T, _listTtems: Array<LinkedListItem<T>>);
}
declare class LinkedList<T> {
    private _items;
    readonly count: number;
    readonly first: LinkedListItem<T> | null;
    readonly last: LinkedListItem<T> | null;
    constructor(items?: T[]);
    addLast(item: T): LinkedList<T>;
    addFirst(item: T): LinkedList<T>;
    clear(): LinkedList<T>;
    each(iteratee: (item: LinkedListItem<T>) => void): void;
}
interface IObservable {
    emit<T = void>(event: string | symbol, data?: T): boolean;
    on<T = void>(event: string | symbol, listener: (data?: T) => void): IObservable;
}
declare class Observable extends EventEmitter implements IObservable {
    emit<T = void>(event: string | symbol, data?: T): boolean;
    on<T = void>(event: string | symbol, listener: (data?: T) => void): this;
}
declare class BatchCommand extends RavenCommand {
    protected commandsArray?: RavenCommandData[];
    constructor(commandsArray: RavenCommandData[]);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class QueryCommand extends RavenCommand {
    protected indexQuery: IndexQuery;
    protected conventions: DocumentConventions;
    protected metadataOnly: boolean;
    protected indexEntriesOnly: boolean;
    constructor(conventions: DocumentConventions, indexQuery: IndexQuery, metadataOnly?: boolean, indexEntriesOnly?: boolean);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
interface IFieldValidationResult {
    originalFieldName: string;
    escapedFieldName: string;
}
declare class QueryBuilder extends Observable implements IQueryBuilder {
    static readonly VALIDATE_FIELD: string;
    protected selectTokens: LinkedList<IQueryToken>;
    protected fromToken: FromToken;
    protected groupByTokens: LinkedList<IQueryToken>;
    protected orderByTokens: LinkedList<IQueryToken>;
    protected fieldsToFetchToken: FieldsToFetchToken;
    protected whereTokens: LinkedList<IQueryToken>;
    protected aliasToGroupByFieldName: Map<string, string>;
    protected defaultOperator: QueryOperator;
    protected idPropertyName?: string;
    protected includes: Set<string>;
    protected queryRaw?: string;
    protected isGroupBy: boolean;
    protected isIntersect: boolean;
    protected isDistinct: boolean;
    protected negate: boolean;
    protected currentClauseDepth: number;
    readonly isDynamicMapReduce: boolean;
    constructor(indexName?: string, collectionName?: string, idPropertyName?: string);
    selectFields(fields: string[]): IQueryBuilder;
    selectFields(fields: string[], projections: string[]): IQueryBuilder;
    usingDefaultOperator(operator: QueryOperator): IQueryBuilder;
    rawQuery(query: string): IQueryBuilder;
    from(indexName?: string, collectionName?: string): IQueryBuilder;
    getProjectionFields(): string[];
    addGroupByAlias(fieldName: string, projectedName: string): void;
    randomOrdering(seed?: string): IQueryBuilder;
    customSortUsing(typeName: string, descending?: boolean): IQueryBuilder;
    include(path: string): IQueryBuilder;
    whereEquals(params: IParametrizedWhereParams): IQueryBuilder;
    whereEquals(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereNotEquals(params: IParametrizedWhereParams): IQueryBuilder;
    whereNotEquals(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    openSubclause(): IQueryBuilder;
    closeSubclause(): IQueryBuilder;
    negateNext(): IQueryBuilder;
    whereIn(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereAllIn(fieldName: string, parameterName: string): IQueryBuilder;
    whereStartsWith(fieldName: string, parameterName: string): IQueryBuilder;
    whereEndsWith(fieldName: string, parameterName: string): IQueryBuilder;
    whereBetween(fieldName: string, fromParameterName: string, toParameterName: string, exact?: boolean): IQueryBuilder;
    whereGreaterThan(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereGreaterThanOrEqual(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereLessThanOrEqual(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereLessThan(fieldName: string, parameterName: string, exact?: boolean): IQueryBuilder;
    whereExists(fieldName: string): IQueryBuilder;
    andAlso(): IQueryBuilder;
    orElse(): IQueryBuilder;
    boost(boost: number): IQueryBuilder;
    fuzzy(fuzzy: number): IQueryBuilder;
    proximity(proximity: number): IQueryBuilder;
    orderBy(field: string, ordering?: OrderingType): IQueryBuilder;
    orderByDescending(field: string, ordering?: OrderingType): IQueryBuilder;
    orderByScore(): IQueryBuilder;
    orderByScoreDescending(): IQueryBuilder;
    search(fieldName: string, searchTermsParameterName: string, operator?: SearchOperator): IQueryBuilder;
    intersect(): IQueryBuilder;
    distinct(): IQueryBuilder;
    groupBy(fieldName: string, ...fieldNames: string[]): IQueryBuilder;
    groupByKey(fieldName: string, projectedName?: string): IQueryBuilder;
    groupBySum(fieldName: string, projectedName?: string): IQueryBuilder;
    groupByCount(projectedName?: string): IQueryBuilder;
    whereTrue(): IQueryBuilder;
    withinRadiusOf(fieldName: string, radiusParameterName: string, latitudeParameterName: string, longitudeParameterName: string, radiusUnits?: SpatialUnit, distErrorPercent?: number): IQueryBuilder;
    spatial(fieldName: string, shapeWktParameterName: string, relation: SpatialRelation, distErrorPercent: number): IQueryBuilder;
    spatial(fieldName: string, criteria: SpatialCriteria, parameterNameGenerator: SpatialParameterNameGenerator): IQueryBuilder;
    orderByDistance(fieldName: string, shapeWktParameterName: string): IQueryBuilder;
    orderByDistance(fieldName: string, latitudeParameterName: string, longitudeParameterName: string): IQueryBuilder;
    orderByDistanceDescending(fieldName: string, shapeWktParameterName: string): IQueryBuilder;
    orderByDistanceDescending(fieldName: string, latitudeParameterName: string, longitude: string): IQueryBuilder;
    protected assertNoRawQuery(): void;
    toString(): string;
    protected ensureValidFieldName(fieldName: string, isNestedPath?: boolean): string;
    protected static addSpaceIfNeeded(previousToken: IQueryToken, currentToken: IQueryToken, writer: StringBuilder): void;
    protected appendOperatorIfNeeded(tokens: LinkedList<IQueryToken>): void;
    protected negateIfNeeded(fieldName?: string): void;
    protected findFieldsToFetchToken(): LinkedListItem<FieldsToFetchToken>;
    protected findLastWhereToken(): WhereToken | never;
    protected updateFieldsToFetchToken(fieldsToFetch: FieldsToFetchToken): void;
    protected buildFrom(writer: StringBuilder): void;
    protected buildOrderBy(writer: StringBuilder): void;
    protected buildGroupBy(writer: StringBuilder): void;
    protected buildSelect(writer: StringBuilder): void;
    protected buildInclude(writer: StringBuilder): void;
    protected buildWhere(writer: StringBuilder): void;
}
interface ITopologyUpdateEvent {
    topologyJson: object;
    serverNodeUrl: string;
    requestedDatabase?: string;
    forceUpdate?: boolean;
    wasUpdated?: boolean;
}
interface IRequestExecutorOptions {
    withoutTopology?: boolean;
    topologyEtag?: number;
    singleNodeTopology?: Topology;
    firstTopologyUpdateUrls?: string[];
    authOptions?: IRequestAuthOptions;
}
interface IRequestExecutor extends IDisposable {
    execute(command: RavenCommand): BluebirdPromise<IRavenResponse | IRavenResponse[] | void>;
}
declare class RequestExecutor extends Observable implements IRequestExecutor {
    static readonly REQUEST_FAILED: string;
    static readonly TOPOLOGY_UPDATED: string;
    static readonly NODE_STATUS_UPDATED: string;
    protected headers: IHeaders;
    protected readonly _maxFirstTopologyUpdatesTries: number;
    protected _firstTopologyUpdatesTries: number;
    protected _awaitFirstTopologyLock: Lock;
    protected _updateTopologyLock: Lock;
    protected _updateFailedNodeTimerLock: Lock;
    protected _firstTopologyUpdate: BluebirdPromise<void>;
    protected _firstTopologyUpdateRejectionReason: Error;
    protected _withoutTopology: boolean;
    protected _nodeSelector: NodeSelector;
    protected _lastKnownUrls: string[];
    protected _initialDatabase: string;
    protected _topologyEtag: number;
    protected _faildedNodesStatuses: Map<ServerNode, NodeStatus>;
    protected _disposed: boolean;
    protected _authOptions: IRequestAuthOptions;
    protected _certificate: ICertificate;
    readonly initialDatabase: string;
    constructor(database: string, options?: IRequestExecutorOptions);
    dispose(): void;
    static create(urls: string[], database?: string | IRequestAuthOptions, authOptions?: IRequestAuthOptions): IRequestExecutor;
    static createForSingleNode(url: string, database?: string | IRequestAuthOptions, authOptions?: IRequestAuthOptions): IRequestExecutor;
    execute(command: RavenCommand): BluebirdPromise<IRavenResponse | IRavenResponse[] | void>;
    protected awaitFirstTopologyUpdate(): BluebirdPromise<void>;
    protected prepareCommand(command: RavenCommand, node: ServerNode): RavenCommandRequestOptions;
    protected executeCommand(command: RavenCommand, node: ServerNode): BluebirdPromise<IRavenResponse | IRavenResponse[] | void>;
    protected handleServerDown(command: RavenCommand, failedNode: ServerNode, nodeIndex: number): BluebirdPromise<IRavenResponse | IRavenResponse[] | void>;
    protected startFirstTopologyUpdate(updateTopologyUrls: string[]): void;
    protected isFirstTopologyUpdateTriesExpired(): boolean;
    protected updateTopology(node: ServerNode): BluebirdPromise<void>;
    protected getUpdateTopologyCommandClass(): new () => RavenCommand;
    protected checkNodeStatus(nodeStatus: NodeStatus): void;
    protected performHealthCheck(node: ServerNode): void;
    protected cancelFailingNodesTimers(): void;
    protected unauthorizedError(serverNode: ServerNode, command: RavenCommand, response?: IResponse): AuthorizationException;
}
declare type PromiseResolve<T> = (thenableOrResult?: BluebirdPromise.Thenable<T | T[] | number> | T | T[] | number) => void;
declare type PromiseReject = (error: Error) => void;
declare class PromiseResolver {
    static resolve<T>(result?: T | T[] | number, resolve?: PromiseResolve<T>, callback?: EntityCallback<T> | EntitiesArrayCallback<T> | EntitiesCountCallback | EmptyCallback): T | T[] | number | void;
    static reject<T = void>(error: Error, reject?: PromiseReject, callback?: AbstractCallback<null>): BluebirdPromise.Thenable<T>;
}
declare class DeleteCommandData extends RavenCommandData implements IJsonable {
    constructor(id: string, changeVector?: string);
}
declare class PutCommandData extends RavenCommandData implements IJsonable {
    protected document: object;
    protected metadata?: object;
    constructor(id: string, document: object, changeVector?: string, metadata?: object);
    toJson(): object;
}
declare class SaveChangesData {
    protected commands: RavenCommandData[];
    protected deferredCommandCount: number;
    protected documents: IRavenObject[];
    readonly deferredCommandsCount: number;
    readonly commandsCount: number;
    constructor(commands?: RavenCommandData[], deferredCommandCount?: number, documents?: IRavenObject[]);
    addCommand(command: RavenCommandData): void;
    addDocument(document: IRavenObject): void;
    getDocument(index: number): IRavenObject;
    createBatchCommand(): BatchCommand;
}
declare class GetDocumentCommand extends RavenCommand {
    protected idOrIds?: string | string[];
    protected metadataOnly: boolean;
    protected includes?: string[];
    constructor(idOrIds: string | string[], metadataOnly?: boolean, includes?: string[]);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare type ConcurrencyCheckMode = 'Auto' | 'Forced' | 'Disabled';
declare class ConcurrencyCheckModes {
    static readonly Auto: ConcurrencyCheckMode;
    static readonly Forced: ConcurrencyCheckMode;
    static readonly Disabled: ConcurrencyCheckMode;
}
declare type QueryResultsWithStatistics<T> = {
    results: T[];
    response: IRavenResponse;
};
declare class DocumentQueryParameters extends Map<string, ConditionValue | ConditionValue[]> implements IJsonable {
    toJson(): object;
}
declare class DocumentQueryBase<T extends Object = IRavenObject> extends Observable implements IDocumentQueryBase<T> {
    static readonly EVENT_DOCUMENTS_QUERIED: string;
    static readonly EVENT_DOCUMENT_FETCHED: string;
    static readonly EVENT_INCLUDES_FETCHED: string;
    protected session: IDocumentSession;
    protected indexQueryOptions: IOptionsSet;
    protected requestExecutor: RequestExecutor;
    protected withStatistics: boolean;
    protected documentType?: DocumentType<T>;
    protected queryParameters: DocumentQueryParameters;
    protected nestedObjectTypes: IRavenObject<DocumentConstructor>;
    protected _indexName: string;
    protected _collectionName: string;
    protected _take?: number;
    protected _skip?: number;
    protected _builder: IQueryBuilder;
    static create<T extends Object = IRavenObject>(session: IDocumentSession, requestExecutor: RequestExecutor, options?: IDocumentQueryOptions<T>): DocumentQueryBase<T>;
    readonly indexName: string;
    readonly collectionName: string;
    readonly conventions: DocumentConventions;
    constructor(session: IDocumentSession, requestExecutor: RequestExecutor, collection?: string, indexName?: string, documentType?: DocumentType<T>, nestedObjectTypes?: IRavenObject<DocumentConstructor>, withStatistics?: boolean, indexQueryOptions?: IOptionsSet);
    waitForNonStaleResults(): this;
    waitForNonStaleResultsAsOf(cutOffEtag: number, waitTimeout?: number): this;
    waitForNonStaleResultsAsOfNow(waitTimeout?: number): this;
    take(docsCount: number): this;
    skip(skipCount: number): this;
    getIndexQuery(): IndexQuery;
    single(callback?: EntityCallback<T>): Promise<T>;
    first(callback?: EntityCallback<T>): Promise<T>;
    count(callback?: EntitiesCountCallback): Promise<number>;
    all(callback?: QueryResultsCallback<T[]>): Promise<T[]>;
    all(callback?: QueryResultsCallback<QueryResultsWithStatistics<T>>): Promise<QueryResultsWithStatistics<T>>;
    protected executeQuery(): BluebirdPromise<IRavenResponse>;
    protected convertResponseToDocuments(response: IRavenResponse): T[] | QueryResultsWithStatistics<T>;
}
declare class RawDocumentQuery<T extends Object = IRavenObject> extends DocumentQueryBase<T> implements IRawDocumentQuery<T> {
    static create<T extends Object = IRavenObject>(session: IDocumentSession, requestExecutor: RequestExecutor, options?: IDocumentQueryOptions<T>): RawDocumentQuery<T>;
    rawQuery(query: string): IRawDocumentQuery<T>;
    addParameter<V extends ConditionValue>(name: string, value: V): IRawDocumentQuery<T>;
}
declare class DocumentQuery<T extends Object = IRavenObject> extends DocumentQueryBase<T> implements IDocumentQuery<T> {
    static create<T extends Object = IRavenObject>(session: IDocumentSession, requestExecutor: RequestExecutor, options?: IDocumentQueryOptions<T>): DocumentQuery<T>;
    readonly not: IDocumentQuery<T>;
    readonly isDynamicMapReduce: boolean;
    selectFields(fields: string[]): IDocumentQuery<T>;
    selectFields(fields: string[], projections: string[]): IDocumentQuery<T>;
    getProjectionFields(): string[];
    randomOrdering(seed?: string): IDocumentQuery<T>;
    customSortUsing(typeName: string, descending?: boolean): IDocumentQuery<T>;
    include(path: string): IDocumentQuery<T>;
    usingDefaultOperator(operator: QueryOperator): IDocumentQuery<T>;
    whereEquals<V extends ConditionValue>(whereParams: IWhereParams<V>): IDocumentQuery<T>;
    whereEquals<V extends ConditionValue>(whereParams: WhereParams<V>): IDocumentQuery<T>;
    whereEquals<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereNotEquals<V extends ConditionValue>(whereParams: IWhereParams<V>): IDocumentQuery<T>;
    whereNotEquals<V extends ConditionValue>(whereParams: WhereParams<V>): IDocumentQuery<T>;
    whereNotEquals<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    openSubclause(): IDocumentQuery<T>;
    closeSubclause(): IDocumentQuery<T>;
    negateNext(): IDocumentQuery<T>;
    whereIn<V extends ConditionValue>(fieldName: string, values: V[], exact?: boolean): IDocumentQuery<T>;
    whereStartsWith<V extends ConditionValue>(fieldName: string, value: V): IDocumentQuery<T>;
    whereEndsWith<V extends ConditionValue>(fieldName: string, value: V): IDocumentQuery<T>;
    whereBetween<V extends ConditionValue>(fieldName: string, start: V, end: V, exact?: boolean): IDocumentQuery<T>;
    whereGreaterThan<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereGreaterThanOrEqual<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereLessThan<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereLessThanOrEqual<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereExists(fieldName: string): IDocumentQuery<T>;
    andAlso(): IDocumentQuery<T>;
    orElse(): IDocumentQuery<T>;
    boost(boost: number): IDocumentQuery<T>;
    fuzzy(fuzzy: number): IDocumentQuery<T>;
    proximity(proximity: number): IDocumentQuery<T>;
    orderBy(field: string, ordering?: OrderingType): IDocumentQuery<T>;
    orderByDescending(field: string, ordering?: OrderingType): IDocumentQuery<T>;
    orderByScore(): IDocumentQuery<T>;
    orderByScoreDescending(): IDocumentQuery<T>;
    search(fieldName: string, searchTerms: string, operator?: SearchOperator): IDocumentQuery<T>;
    intersect(): IDocumentQuery<T>;
    distinct(): IDocumentQuery<T>;
    containsAny<V extends ConditionValue>(fieldName: string, values: V[]): IDocumentQuery<T>;
    containsAll<V extends ConditionValue>(fieldName: string, values: V[]): IDocumentQuery<T>;
    groupBy(fieldName: string, ...fieldNames: string[]): IDocumentQuery<T>;
    groupByKey(fieldName: string, projectedName?: string): IDocumentQuery<T>;
    groupBySum(fieldName: string, projectedName?: string): IDocumentQuery<T>;
    groupByCount(projectedName?: string): IDocumentQuery<T>;
    whereTrue(): IDocumentQuery<T>;
    withinRadiusOf(fieldName: string, radius: number, latitude: number, longitude: number, radiusUnits?: SpatialUnit, distErrorPercent?: number): IDocumentQuery<T>;
    spatial(fieldName: string, shapeWkt: string, relation: SpatialRelation, distErrorPercent: number): IDocumentQuery<T>;
    spatial(fieldName: string, criteria: SpatialCriteria): IDocumentQuery<T>;
    orderByDistance(fieldName: string, latitude: number, longitude: number): IDocumentQuery<T>;
    orderByDistance(fieldName: string, shapeWkt: string): IDocumentQuery<T>;
    orderByDistanceDescending(fieldName: string, latitude: number, longitude: number): IDocumentQuery<T>;
    orderByDistanceDescending(fieldName: string, shapeWkt: string): IDocumentQuery<T>;
    protected addQueryParameter<V extends ConditionValue>(valueOrValues: V | V[]): string;
    protected transformValue<V extends ConditionValue>(whereParams: WhereParams<V>): V;
    protected transformValuesArray<V extends ConditionValue>(fieldName: string, values: Array<V | V[]>): V[];
    protected unpackValuesArray<V extends ConditionValue>(values: Array<V | V[]>): V[];
}
declare class DocumentSession extends Observable implements IDocumentSession {
    static readonly QUERY_INITIALIZED: string;
    protected database: string;
    protected documentStore: IDocumentStore;
    protected sessionId: string;
    protected documentsById: IRavenObject<IRavenObject>;
    protected includedRawEntitiesById: IRavenObject<object>;
    protected deletedDocuments: Set<IRavenObject>;
    protected knownMissingIds: Set<string>;
    protected deferCommands: Set<RavenCommandData>;
    protected rawEntitiesAndMetadata: Map<IRavenObject, IStoredRawEntityInfo>;
    protected requestExecutor: RequestExecutor;
    protected attachedQueries: WeakMap<IDocumentQueryBase, boolean>;
    private _numberOfRequestsInSession;
    private _advanced;
    readonly numberOfRequestsInSession: number;
    readonly conventions: DocumentConventions;
    readonly advanced: AdvancedSessionOperations;
    constructor(dbName: string, documentStore: IDocumentStore, id: string, requestExecutor: RequestExecutor);
    load<T extends Object = IRavenObject>(id: string, callback?: EntityCallback<T>): Promise<T>;
    load<T extends Object = IRavenObject>(id: string, options?: ISessionOperationOptions<T>, callback?: EntityCallback<T>): Promise<T>;
    load<T extends Object = IRavenObject>(ids: string[], callback?: EntityCallback<T>): Promise<T[]>;
    load<T extends Object = IRavenObject>(ids: string[], options?: ISessionOperationOptions<T>, callback?: EntitiesArrayCallback<T>): Promise<T[]>;
    delete<T extends Object = IRavenObject>(id: string, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    delete<T extends Object = IRavenObject>(id: string, options?: ISessionOperationOptions<T>, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    delete<T extends Object = IRavenObject>(document: T, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    delete<T extends Object = IRavenObject>(document: T, options?: ISessionOperationOptions<T>, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    store<T extends Object = IRavenObject>(document: T, id?: string, callback?: EntityCallback<T>): Promise<T>;
    store<T extends Object = IRavenObject>(document: T, id?: string, options?: ISessionOperationOptions<T>, callback?: EntityCallback<T>): Promise<T>;
    saveChanges(callback?: EmptyCallback): Promise<void>;
    query<T extends Object = IRavenObject>(options?: IDocumentQueryOptions<T>): IDocumentQuery<T>;
    protected attachQuery<T extends Object = IRavenObject>(query: IDocumentQueryBase<T>): void;
    protected incrementRequestsCount(): void;
    protected fetchDocuments<T extends Object = IRavenObject>(ids: string[], documentType?: DocumentType<T>, includes?: string[], nestedObjectTypes?: IRavenObject<DocumentConstructor>): BluebirdPromise<T[]>;
    checkDocumentAndMetadataBeforeStore<T extends Object = IRavenObject>(document?: object | T, id?: string, documentType?: DocumentType<T>): BluebirdPromise<T>;
    protected checkAssociationAndChangeVectorBeforeStore<T extends Object = IRavenObject>(document: T, id?: string, changeVector?: string): BluebirdPromise<IDocumentAssociationCheckResult<T>>;
    protected prepareDocumentIdBeforeStore<T extends Object = IRavenObject>(document: T, id?: string, changeVector?: string): BluebirdPromise<T>;
    protected prepareUpdateCommands(changes: SaveChangesData): void;
    protected prepareDeleteCommands(changes: SaveChangesData): void;
    protected processBatchCommandResults(results: IRavenResponse[], changes: SaveChangesData): void;
    protected isDocumentChanged<T extends Object = IRavenObject>(document: T): boolean;
    protected makeDocument<T extends Object = IRavenObject>(commandResult: object, documentType?: DocumentType<T>, nestedObjectTypes?: IRavenObject<DocumentConstructor>): T;
    protected onIncludesFetched(includes: object[]): void;
    protected onDocumentFetched<T extends Object = IRavenObject>(conversionResult?: IDocumentConversionResult<T>): void;
}
interface IDocumentQueryOptions<T> {
    collection?: string;
    documentType?: DocumentType<T>;
    indexName?: string;
    nestedObjectTypes?: IRavenObject<DocumentConstructor>;
    withStatistics?: boolean;
    indexQueryOptions?: IOptionsSet;
}
interface IDocumentQueryBase<T extends Object = IRavenObject> extends IObservable {
    indexName: string;
    collectionName: string;
    conventions: DocumentConventions;
    getIndexQuery(): IndexQuery;
    waitForNonStaleResults(): this;
    waitForNonStaleResultsAsOf(cutOffEtag: number, waitTimeout?: number): this;
    take(count: number): this;
    skip(count: number): this;
    first(callback?: EntityCallback<T>): Promise<T>;
    single(callback?: EntityCallback<T>): Promise<T>;
    all(callback?: QueryResultsCallback<T[]>): Promise<T[]>;
    all(callback?: QueryResultsCallback<QueryResultsWithStatistics<T>>): Promise<QueryResultsWithStatistics<T>>;
    count(callback?: EntitiesCountCallback): Promise<number>;
}
interface IRawDocumentQuery<T extends Object = IRavenObject> extends IDocumentQueryBase<T> {
    rawQuery(query: string): IRawDocumentQuery<T>;
    addParameter<V extends ConditionValue>(name: string, value: V): IRawDocumentQuery<T>;
}
interface IDocumentQuery<T extends Object = IRavenObject> extends IDocumentQueryBase<T> {
    not: IDocumentQuery<T>;
    isDynamicMapReduce: boolean;
    selectFields(fields: string[]): IDocumentQuery<T>;
    selectFields(fields: string[], projections: string[]): IDocumentQuery<T>;
    getProjectionFields(): string[];
    randomOrdering(seed?: string): IDocumentQuery<T>;
    customSortUsing(typeName: string, descending?: boolean): IDocumentQuery<T>;
    include(path: string): IDocumentQuery<T>;
    usingDefaultOperator(operator: QueryOperator): IDocumentQuery<T>;
    whereEquals<V extends ConditionValue>(whereParams: IWhereParams<V>): IDocumentQuery<T>;
    whereEquals<V extends ConditionValue>(whereParams: WhereParams<V>): IDocumentQuery<T>;
    whereEquals<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereNotEquals<V extends ConditionValue>(whereParams: IWhereParams<V>): IDocumentQuery<T>;
    whereNotEquals<V extends ConditionValue>(whereParams: WhereParams<V>): IDocumentQuery<T>;
    whereNotEquals<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    openSubclause(): IDocumentQuery<T>;
    closeSubclause(): IDocumentQuery<T>;
    negateNext(): IDocumentQuery<T>;
    whereIn<V extends ConditionValue>(fieldName: string, values: V[], exact?: boolean): IDocumentQuery<T>;
    whereStartsWith<V extends ConditionValue>(fieldName: string, value: V): IDocumentQuery<T>;
    whereEndsWith<V extends ConditionValue>(fieldName: string, value: V): IDocumentQuery<T>;
    whereBetween<V extends ConditionValue>(fieldName: string, start: V, end: V, exact?: boolean): IDocumentQuery<T>;
    whereGreaterThan<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereGreaterThanOrEqual<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereLessThan<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereLessThanOrEqual<V extends ConditionValue>(fieldName: string, value: V, exact?: boolean): IDocumentQuery<T>;
    whereExists(fieldName: string): IDocumentQuery<T>;
    andAlso(): IDocumentQuery<T>;
    orElse(): IDocumentQuery<T>;
    boost(boost: number): IDocumentQuery<T>;
    fuzzy(fuzzy: number): IDocumentQuery<T>;
    proximity(proximity: number): IDocumentQuery<T>;
    orderBy(field: string, ordering?: OrderingType): IDocumentQuery<T>;
    orderByDescending(field: string, ordering?: OrderingType): IDocumentQuery<T>;
    orderByScore(): IDocumentQuery<T>;
    orderByScoreDescending(): IDocumentQuery<T>;
    search(fieldName: string, searchTerms: string, operator?: SearchOperator): IDocumentQuery<T>;
    intersect(): IDocumentQuery<T>;
    distinct(): IDocumentQuery<T>;
    containsAny<V extends ConditionValue>(fieldName: string, values: V[]): IDocumentQuery<T>;
    containsAll<V extends ConditionValue>(fieldName: string, values: V[]): IDocumentQuery<T>;
    groupBy(fieldName: string, ...fieldNames: string[]): IDocumentQuery<T>;
    groupByKey(fieldName: string, projectedName?: string): IDocumentQuery<T>;
    groupBySum(fieldName: string, projectedName?: string): IDocumentQuery<T>;
    groupByCount(projectedName?: string): IDocumentQuery<T>;
    whereTrue(): IDocumentQuery<T>;
    withinRadiusOf(fieldName: string, radius: number, latitude: number, longitude: number, radiusUnits?: SpatialUnit, distErrorPercent?: number): IDocumentQuery<T>;
    spatial(fieldName: string, shapeWkt: string, relation: SpatialRelation, distErrorPercent: number): IDocumentQuery<T>;
    spatial(fieldName: string, criteria: SpatialCriteria): IDocumentQuery<T>;
    orderByDistance(fieldName: string, latitude: number, longitude: number): IDocumentQuery<T>;
    orderByDistance(fieldName: string, shapeWkt: string): IDocumentQuery<T>;
    orderByDistanceDescending(fieldName: string, latitude: number, longitude: number): IDocumentQuery<T>;
    orderByDistanceDescending(fieldName: string, shapeWkt: string): IDocumentQuery<T>;
}
declare class AdvancedSessionOperations extends Observable {
    protected session: DocumentSession;
    protected requestExecutor: RequestExecutor;
    constructor(session: DocumentSession, requestExecutor: RequestExecutor);
    rawQuery<T extends Object = IRavenObject>(query: string, params?: IRavenObject<ConditionValue> | DocumentQueryParameters, options?: IDocumentQueryOptions<T>): IRawDocumentQuery<T>;
}
interface ISessionOptions {
    database?: string;
    requestExecutor?: RequestExecutor;
}
interface ISessionOperationOptions<T> {
    documentType?: DocumentType<T>;
    includes?: string[];
    nestedObjectTypes?: IRavenObject<DocumentConstructor>;
    expectedChangeVector?: string;
    callback?: EntityCallback<T> | EntitiesArrayCallback<T>;
}
interface IDocumentSession {
    numberOfRequestsInSession: number;
    conventions: DocumentConventions;
    advanced: AdvancedSessionOperations;
    load<T extends Object = IRavenObject>(id: string, callback?: EntityCallback<T>): Promise<T>;
    load<T extends Object = IRavenObject>(id: string, options?: ISessionOperationOptions<T>, callback?: EntityCallback<T>): Promise<T>;
    load<T extends Object = IRavenObject>(ids: string[], callback?: EntityCallback<T>): Promise<T[]>;
    load<T extends Object = IRavenObject>(ids: string[], options?: ISessionOperationOptions<T>, callback?: EntitiesArrayCallback<T>): Promise<T[]>;
    delete<T extends Object = IRavenObject>(id: string, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    delete<T extends Object = IRavenObject>(id: string, options?: ISessionOperationOptions<T | null | void>, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    delete<T extends Object = IRavenObject>(document: T, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    delete<T extends Object = IRavenObject>(document: T, options?: ISessionOperationOptions<T | null | void>, callback?: EntityCallback<T | null | void>): Promise<T | null | void>;
    store<T extends Object = IRavenObject>(document: T, id?: string, callback?: EntityCallback<T>): Promise<T>;
    store<T extends Object = IRavenObject>(document: T, id?: string, options?: ISessionOperationOptions<T>, callback?: EntityCallback<T>): Promise<T>;
    query<T extends Object = IRavenObject>(options?: IDocumentQueryOptions<T>): IDocumentQuery<T>;
    saveChanges(): Promise<void>;
}
interface IDocumentStore extends IDisposable<Promise<IDocumentStore>> {
    authOptions: IStoreAuthOptions;
    database: string;
    urls: string[];
    singleNodeUrl: string;
    conventions: DocumentConventions;
    operations: OperationExecutor;
    maintenance: AdminOperationExecutor;
    initialize(): IDocumentStore;
    openSession(database?: string): IDocumentSession;
    openSession(options?: ISessionOptions): IDocumentSession;
    openSession(database?: string, options?: ISessionOptions): IDocumentSession;
    generateId(document: object, documentType?: DocumentType, database?: string, callback?: EntityIdCallback): Promise<string>;
    getRequestExecutor(database?: string): RequestExecutor;
}
interface IHiloIdGenerator {
    generateDocumentId(...args: (object | string | string)[]): BluebirdPromise<string>;
    returnUnusedRange(): BluebirdPromise<void>;
}
declare type FieldIndexingOption = 'No' | 'Search' | 'Exact' | 'Default';
declare class FieldIndexingOptions {
    static readonly No: FieldIndexingOption;
    static readonly Search: FieldIndexingOption;
    static readonly Exact: FieldIndexingOption;
    static readonly Default: FieldIndexingOption;
}
declare abstract class AbstractHiloIdGenerator implements IHiloIdGenerator {
    protected generators: IRavenObject<IHiloIdGenerator>;
    protected store: IDocumentStore;
    protected conventions: DocumentConventions;
    protected dbName: string;
    protected tag: string;
    constructor(store: IDocumentStore, dbName?: string, tag?: string);
    abstract generateDocumentId(...args: (object | string)[]): BluebirdPromise<string>;
    returnUnusedRange(): BluebirdPromise<void>;
}
declare class HiloNextCommand extends RavenCommand {
    protected tag: string;
    protected lastBatchSize: number;
    protected lastRangeAt: Date;
    protected identityPartsSeparator: string;
    protected lastRangeMax: number;
    constructor(tag: string, lastBatchSize: number, lastRangeAt: Date, identityPartsSeparator: string, lastRangeMax: number);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class HiloReturnCommand extends RavenCommand {
    protected tag: string;
    protected last: number;
    protected end: number;
    constructor(tag: string, last: number, end: number);
    createRequest(serverNode: ServerNode): void;
}
declare class HiloRangeValue {
    private _minId;
    private _maxId;
    private _current;
    constructor(minId?: number, maxId?: number);
    readonly minId: number;
    readonly maxId: number;
    readonly current: number;
    increment(): number;
    needsNewRange(): boolean;
}
declare class IndexFieldOptions implements IJsonable {
    protected indexing?: FieldIndexingOptions;
    protected storage?: boolean;
    protected termVector?: FieldTermVectorOption;
    protected suggestions?: boolean;
    protected analyzer?: string;
    constructor(indexing?: FieldIndexingOptions, storage?: boolean, suggestions?: boolean, termVector?: FieldTermVectorOption, analyzer?: string);
    toJson(): object;
}
interface IAttachmentName {
    name: string;
    hash: string;
    contentType: string;
    size: number;
}
interface IAttachmentDetails extends IAttachmentName {
    changeVector: string;
    documentId: string;
}
declare class QueryOperationOptions {
    private _allowStale;
    private _staleTimeout?;
    private _maxOpsPerSec?;
    private _retrieveDetails;
    constructor(allowStale?: boolean, staleTimeout?: number, maxOpsPerSec?: number, retrieveDetails?: boolean);
    readonly allowStale: boolean;
    readonly staleTimeout: number;
    readonly maxOpsPerSec: number;
    readonly retrieveDetails: boolean;
}
declare class HiloIdGenerator extends AbstractHiloIdGenerator implements IHiloIdGenerator {
    private _lastRangeAt;
    private _range;
    private identityPartsSeparator;
    private _lock;
    private _prefix?;
    private _lastBatchSize;
    private _serverTag;
    constructor(store: IDocumentStore, dbName?: string, tag?: string);
    generateDocumentId(): BluebirdPromise<string>;
    returnUnusedRange(): BluebirdPromise<void>;
    protected getNextRange(): BluebirdPromise<HiloRangeValue>;
    protected tryRequestNextRange(): BluebirdPromise<HiloRangeValue>;
    protected assembleDocumentId(currentRangeValue: number): string;
}
declare class ArrayUtil {
    static mapObject(input: object, mapper: (item: any, key?: string) => any): object;
}
declare abstract class AttachmentCommand extends RavenCommand {
    protected _documentId: string;
    protected _name: string;
    protected _changeVector: string;
    constructor(documentId: string, name: string, changeVector?: string);
    createRequest(serverNode: ServerNode): void;
    toRequestOptions(): RavenCommandRequestOptions;
}
declare class GetClusterTopologyCommand extends GetTopologyCommand {
    createRequest(serverNode: ServerNode): void;
}
declare class GetIndexesCommand extends RavenCommand {
    protected start?: number;
    protected pageSize?: number;
    constructor(start?: number, pageSize?: number);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class GetOperationStateCommand extends RavenCommand {
    protected id: string;
    constructor(id: string);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare abstract class QueryBasedCommand extends RavenCommand {
    protected query?: IndexQuery;
    protected options?: QueryOperationOptions;
    constructor(method: RequestMethod, query: IndexQuery, options?: QueryOperationOptions);
    createRequest(serverNode: ServerNode): void;
}
declare class DatabaseDocument implements IJsonable {
    protected secureSettings: {};
    protected disabled: boolean;
    protected encrypted: boolean;
    private _databaseId;
    private _settings;
    constructor(databaseId: string, settings?: IRavenObject, secureSettings?: IRavenObject, disabled?: boolean, encrypted?: boolean);
    readonly databaseId: string;
    readonly settings: {};
    toJson(): object;
}
declare class IndexDefinition implements IJsonable {
    protected maps: string[];
    protected isTestIndex: boolean;
    protected reduce?: boolean;
    protected lockMode?: IndexLockMode;
    protected priority?: IndexPriority;
    protected configuration: IOptionsSet;
    protected fields: IRavenObject<IndexFieldOptions>;
    private _name;
    constructor(name: string, indexMap: string | string[], configuration?: IOptionsSet, initOptions?: IOptionsSet);
    readonly name: string;
    readonly type: string;
    readonly isMapReduce: boolean;
    map: string | null;
    toJson(): object;
}
interface IAttachmentResult {
    stream: Buffer;
    attachmentDetails: IAttachmentDetails;
}
declare type AttachmentType = 'Document' | 'Revision';
declare class AttachmentTypes {
    static readonly Document: AttachmentType;
    static readonly Revision: AttachmentType;
    static isDocument(type: AttachmentType): boolean;
    static isRevision(type: AttachmentType): boolean;
}
interface IOperation {
    getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare abstract class AbstractOperation implements IOperation {
    abstract getCommand(conventions: DocumentConventions): RavenCommand;
}
declare abstract class Operation extends AbstractOperation {
    abstract getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare abstract class AdminOperation extends AbstractOperation {
}
declare abstract class ServerOperation extends AbstractOperation {
}
declare abstract class PatchResultOperation extends Operation {
}
declare abstract class AwaitableOperation extends Operation {
}
declare class HiloMultiTypeIdGenerator extends AbstractHiloIdGenerator implements IHiloIdGenerator {
    private _lock;
    constructor(store: IDocumentStore, dbName?: string);
    generateDocumentId(entity: object, documentType?: string): BluebirdPromise<string>;
    protected createGeneratorForTag(tag: string): BluebirdPromise<IHiloIdGenerator>;
}
declare type PatchStatus = 'DocumentDoesNotExist' | 'Created' | 'Patched' | 'Skipped' | 'NotModified';
declare class PatchStatuses {
    static readonly DocumentDoesNotExist: PatchStatus;
    static readonly Created: PatchStatus;
    static readonly Patched: PatchStatus;
    static readonly Skipped: PatchStatus;
    static readonly NotModified: PatchStatus;
}
interface IPatchRequestOptions {
    changeVector?: string;
    patchIfMissing?: PatchRequest;
    skipPatchIfChangeVectorMismatch?: boolean;
    returnDebugInformation?: boolean;
}
interface IPatchResult {
    Status: PatchStatus;
    Document?: IRavenObject;
}
declare class PatchRequest implements IJsonable, IStringable {
    private _script;
    protected values: object;
    constructor(script: string, values?: object);
    readonly script: string;
    toJson(): object;
}
declare class CreateDatabaseCommand extends RavenCommand {
    protected replicationFactor: number;
    protected databaseDocument: DatabaseDocument;
    constructor(databaseDocument: DatabaseDocument, replicationFactor?: number);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class DeleteAttachmentCommand extends AttachmentCommand {
    createRequest(serverNode: ServerNode): void;
    toRequestOptions(): RavenCommandRequestOptions;
}
declare class DeleteByQueryCommand extends QueryBasedCommand {
    constructor(query: IndexQuery, options?: QueryOperationOptions);
    createRequest(serverNode: ServerNode): void;
}
declare class DeleteDatabaseCommand extends RavenCommand {
    protected databaseId?: string;
    protected hardDelete: boolean;
    protected fromNode: string;
    protected timeToWaitForConfirmation: number;
    constructor(databaseId: string, hardDelete?: boolean, fromNode?: ServerNode | string, timeToWaitForConfirmation?: number);
    createRequest(serverNode: ServerNode): void;
}
declare class DeleteDocumentCommand extends RavenCommand {
    protected id?: string;
    protected changeVector?: string;
    constructor(id: string, changeVector?: string);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
    protected checkResponse(response: IResponse): void;
}
declare class DeleteIndexCommand extends RavenCommand {
    protected indexName?: string;
    constructor(indexName: string);
    createRequest(serverNode: ServerNode): void;
}
declare class GetAttachmentCommand extends AttachmentCommand {
    private _type;
    constructor(documentId: string, name: string, type: AttachmentType, changeVector?: string);
    createRequest(serverNode: ServerNode): void;
    toRequestOptions(): RavenCommandRequestOptions;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
    protected tryReadHeader(header: string): string | null;
}
declare class GetIndexCommand extends GetIndexesCommand {
    protected indexName?: string;
    constructor(indexName: string);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class PatchByQueryCommand extends QueryBasedCommand {
    constructor(queryToUpdate: IndexQuery, options?: QueryOperationOptions);
    createRequest(serverNode: ServerNode): void;
}
declare class PatchCommand extends RavenCommand {
    protected id?: string;
    protected patch: PatchRequest;
    protected changeVector?: string;
    protected patchIfMissing?: PatchRequest;
    protected skipPatchIfChangeVectorMismatch: boolean;
    protected returnDebugInformation: boolean;
    protected path: string;
    constructor(id: string, patch: PatchRequest, options?: IPatchRequestOptions);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class PutAttachmentCommand extends AttachmentCommand {
    private _stream;
    private _contentType?;
    constructor(documentId: string, name: string, stream: Buffer, contentType?: string, changeVector?: string);
    createRequest(serverNode: ServerNode): void;
    toRequestOptions(): RavenCommandRequestOptions;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare class PutIndexesCommand extends RavenCommand {
    protected indexes?: IndexDefinition[];
    constructor(indexesToAdd: IndexDefinition | IndexDefinition[], ...moreIndexesToAdd: IndexDefinition[]);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
}
declare abstract class AttachmentOperation extends Operation {
    protected documentId: string;
    protected name: string;
    protected changeVector?: string;
    constructor(documentId: string, name: string, changeVector?: string);
}
interface IOperationStatusResult {
    status: OperationStatus;
    response?: IRavenResponse;
    exception?: RavenException;
}
declare type OperationStatus = 'Completed' | 'Faulted' | 'Running';
declare class OperationStatuses {
    static readonly Completed: OperationStatus;
    static readonly Faulted: OperationStatus;
    static readonly Running: OperationStatus;
}
declare class OperationAwaiter {
    protected requestExecutor: IRequestExecutor;
    protected operationId: string;
    protected timeout?: number;
    constructor(requestExecutor: IRequestExecutor, operationId: string, timeout?: number);
    waitForCompletion(): BluebirdPromise<IRavenResponse>;
    protected fetchOperationStatus(): BluebirdPromise<IOperationStatusResult>;
    protected onNext(result: IOperationStatusResult): BluebirdPromise<IRavenResponse>;
}
declare abstract class QueryBasedOperation extends AwaitableOperation {
    protected query?: IndexQuery;
    protected options?: QueryOperationOptions;
    constructor(query: IndexQuery, options?: QueryOperationOptions);
}
declare class HiloMultiDatabaseIdGenerator extends AbstractHiloIdGenerator implements IHiloIdGenerator {
    constructor(store: IDocumentStore);
    generateDocumentId(entity: object, documentType?: string, dbName?: string): BluebirdPromise<string>;
    protected getGeneratorForDatabase(dbName: string): IHiloIdGenerator;
}
declare class ClusterRequestExecutor extends RequestExecutor {
    static create(urls: string[], authOptions?: IRequestAuthOptions): IRequestExecutor;
    static createForSingleNode(url: string, authOptions?: IRequestAuthOptions): IRequestExecutor;
    protected getUpdateTopologyCommandClass(): new () => RavenCommand;
}
declare class PatchCommandData extends RavenCommandData implements IJsonable {
    protected scriptedPatch: PatchRequest;
    protected patchIfMissing?: PatchRequest;
    protected additionalData?: IRavenObject;
    protected debugMode: boolean;
    constructor(id: string, scriptedPatch: PatchRequest, changeVector?: string, patchIfMissing?: PatchRequest, debugMode?: boolean);
    toJson(): object;
}
declare class PutDocumentCommand extends DeleteDocumentCommand {
    protected document?: object;
    constructor(id: string, document: object, changeVector?: string);
    createRequest(serverNode: ServerNode): void;
    setResponse(response: IResponse): IRavenResponse | IRavenResponse[] | void;
    protected checkResponse(response: IResponse): void;
}
declare type FieldTermVectorOption = 'No' | 'Yes' | 'WithPositions' | 'WithOffsets' | 'WithPositionsAndOffsets';
declare type IndexLockMode = 'Unlock' | 'LockedIgnore' | 'LockedError' | 'SideBySide';
declare type IndexPriority = 'Low' | 'Normal' | 'High';
declare class CreateDatabaseOperation extends ServerOperation {
    protected replicationFactor: number;
    protected databaseDocument: DatabaseDocument;
    constructor(databaseDocument: DatabaseDocument, replicationFactor?: number);
    getCommand(conventions: DocumentConventions): RavenCommand;
}
declare class DeleteAttachmentOperation extends AttachmentOperation {
    getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare class DeleteByQueryOperation extends QueryBasedOperation {
    getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare class DeleteDatabaseOperation extends ServerOperation {
    protected databaseId?: string;
    protected hardDelete: boolean;
    protected fromNode: string;
    protected timeToWaitForConfirmation: number;
    constructor(databaseId: string, hardDelete?: boolean, fromNode?: ServerNode | string, timeToWaitForConfirmation?: number);
    getCommand(conventions: DocumentConventions): RavenCommand;
}
declare class DeleteIndexOperation extends AdminOperation {
    protected indexName?: string;
    constructor(indexName: string);
    getCommand(conventions: DocumentConventions): RavenCommand;
}
declare class GetAttachmentOperation extends AttachmentOperation {
    protected type: AttachmentType;
    constructor(documentId: string, name: string, type: AttachmentType, changeVector?: string);
    getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare class GetIndexOperation extends AdminOperation {
    protected indexName?: string;
    constructor(indexName: string);
    getCommand(conventions: DocumentConventions): RavenCommand;
}
interface IOperationExecutor {
    send(operation: IOperation): Promise<IRavenResponse | IRavenResponse[] | void>;
}
declare abstract class AbstractOperationExecutor implements IOperationExecutor {
    protected store: IDocumentStore;
    private _requestExecutor;
    protected abstract requestExecutorFactory(): IRequestExecutor;
    protected readonly requestExecutor: IRequestExecutor;
    constructor(store: IDocumentStore);
    send(operation: IOperation): Promise<IRavenResponse | IRavenResponse[] | void>;
    protected setResponse(operation: IOperation, command: RavenCommand, response: IRavenResponse | IRavenResponse[] | void): BluebirdPromise.Thenable<IRavenResponse | IRavenResponse[] | void> | IRavenResponse | IRavenResponse[] | void;
}
declare abstract class AbstractDatabaseOperationExecutor extends AbstractOperationExecutor {
    protected database?: string;
    protected executorsByDatabase: IRavenObject<IOperationExecutor>;
    constructor(store: IDocumentStore, database?: string);
    forDatabase(database: string): IOperationExecutor;
    protected requestExecutorFactory(): IRequestExecutor;
}
declare class OperationExecutor extends AbstractDatabaseOperationExecutor {
    protected setResponse(operation: IOperation, command: RavenCommand, response: IRavenResponse | IRavenResponse[] | void): BluebirdPromise.Thenable<IRavenResponse | IRavenResponse[] | void> | IRavenResponse | IRavenResponse[] | void;
}
declare class ServerOperationExecutor extends AbstractOperationExecutor implements IDisposable {
    protected requestExecutorFactory(): IRequestExecutor;
    send(operation: IOperation): Promise<IRavenResponse | IRavenResponse[] | void>;
    dispose(): void;
}
declare class AdminOperationExecutor extends AbstractDatabaseOperationExecutor {
    private _server;
    readonly server: ServerOperationExecutor;
    send(operation: IOperation): Promise<IRavenResponse | IRavenResponse[] | void>;
}
declare class PatchByQueryOperation extends QueryBasedOperation {
    protected query: IndexQuery;
    protected options: QueryOperationOptions;
    constructor(queryToUpdate: IndexQuery, options?: QueryOperationOptions);
    getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare class PatchOperation extends PatchResultOperation {
    protected id?: string;
    protected patch: PatchRequest;
    protected options?: IPatchRequestOptions;
    constructor(id: string, patch: PatchRequest, options?: IPatchRequestOptions);
    getCommand(conventions: DocumentConventions): RavenCommand;
}
declare class PutAttachmentOperation extends AttachmentOperation {
    protected stream: Buffer;
    protected contentType?: string;
    constructor(documentId: string, name: string, stream: Buffer, contentType?: string, changeVector?: string);
    getCommand(conventions: DocumentConventions, store?: IDocumentStore): RavenCommand;
}
declare class PutIndexesOperation extends AdminOperation {
    protected indexes?: IndexDefinition[];
    constructor(indexesToAdd: IndexDefinition | IndexDefinition[], ...moreIndexesToAdd: IndexDefinition[]);
    getCommand(conventions: DocumentConventions): RavenCommand;
}
declare class DocumentStore implements IDocumentStore {
    private _initialized;
    private _urls;
    private _database;
    private _generator;
    private _conventions;
    private _requestExecutors;
    private _operations;
    private _maintenance;
    private _authOptions;
    readonly database: string;
    readonly urls: string[];
    readonly singleNodeUrl: string;
    readonly authOptions: IStoreAuthOptions;
    readonly operations: OperationExecutor;
    readonly maintenance: AdminOperationExecutor;
    getRequestExecutor(database?: string): RequestExecutor;
    readonly conventions: DocumentConventions;
    constructor(urlOrUrls: string | string[], defaultDatabase: string, authOptions?: IStoreAuthOptions);
    static create(urlOrUrls: string | string[], defaultDatabase: string, authOptions?: IStoreAuthOptions): IDocumentStore;
    initialize(): IDocumentStore;
    dispose(): Promise<IDocumentStore>;
    openSession(database?: string): IDocumentSession;
    openSession(options?: ISessionOptions): IDocumentSession;
    openSession(database?: string, options?: ISessionOptions): IDocumentSession;
    generateId(document: object, documentType?: DocumentType, database?: string, callback?: EntityIdCallback): Promise<string>;
    protected assertInitialize(): void;
    protected createRequestExecutor(database?: string, forSingleNode?: boolean): RequestExecutor;
}
interface IDocumentQueryConditions extends IOptionsSet {
}
declare type AbstractCallback<T> = (entity?: T, error?: Error) => void;
declare type EntityIdCallback = AbstractCallback<string>;
declare type QueryResultsCallback<T> = AbstractCallback<T>;
declare type EntityCallback<T> = AbstractCallback<T>;
declare type EntitiesArrayCallback<T> = AbstractCallback<T[]>;
declare type EntitiesCountCallback = AbstractCallback<number>;
declare type EmptyCallback = AbstractCallback<void>;
export default DocumentStore;
