// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * The `@minecraft/server-net` module contains types for executing HTTP-based requests.
 * This module can only be used on Bedrock Dedicated Server.
 *
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-net",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserveradmin from "@minecraft/server-admin";
export enum HttpRequestMethod {
    /**
     * @remarks
     * Represents the method for an HTTP DELETE request.
     * DELETE requests are commonly used to delete a single resource that already exists in a resource collection.
     */
    Delete = "Delete",
    /**
     * @remarks
     * Represents the method for an HTTP GET request.
     * GET requests are commonly used to retrieve information about a resource at the specified URI.
     */
    Get = "Get",
    /**
     * @remarks
     * Represents the method for an HTTP HEAD request.
     * HEAD requests are similar to a GET request,
     *  but are commonly used to retrieve just the HTTP response headers from the specified URI, and not the body contents.
     */
    Head = "Head",
    /**
     * @remarks
     * Represents the method for an HTTP POST request.
     * POST requests are commonly used to create a new resource that is a subordinate of the specified URI.
     */
    Post = "Post",
    /**
     * @remarks
     * Represents the method for an HTTP PUT request.
     * PUT requests are commonly used to update a single resource that already exists in a resource collection.
     */
    Put = "Put",
}

export class HttpClient {
    private constructor();
    /**
     * @remarks Cancels all pending requests.
     *
     * This function can't be called in read-only mode.
     */
    cancelAll(reason: string): void;
    /**
     * @remarks Performs a simple HTTP get request.
     *
     * This function can't be called in read-only mode.
     *
     * @param uri
     * URL to make an HTTP Request to.
     * @returns An awaitable promise that contains the HTTP response.
     * @example
     * ```javascript
     * import { http } from "@minecraft/server-net";
     * 
     * http.get("http://127.0.0.1:3000/test").then((response) => {
     *     console.warn(`Body: ${response.body}`);
     *     console.warn(`Status: ${response.status}`);
     * });
     * ```
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks Performs an HTTP request.
     *
     * This function can't be called in read-only mode.
     *
     * @param config
     * Contains an HTTP Request object with configuration data on the HTTP request.
     * @returns An awaitable promise that contains the HTTP response.
     * @example
     * ```javascript
     * import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";
     * const request = new HttpRequest("http://127.0.0.1:3000/test");
     * request.setBody("hello world!");
     * request.addHeader("hello", "world");
     * request.setMethod(HttpRequestMethod.Post);
     * 
     * http.request(request).then((response) => {
     *     console.warn(`Body: ${response.body}`);
     *     console.warn(`Status: ${response.status}`);
     * });
     * ```
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}

/** Represents an HTTP header - a key/value pair of meta-information about a request. */
export class HttpHeader {
    /**
     * @remarks Key of the HTTP header.
     *
     * This property can't be edited in read-only mode.
     */
    key: string;
    /**
     * @remarks Value of the HTTP header.
     *
     * This property can't be edited in read-only mode.
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}

/** Main object for structuring a request. */
export class HttpRequest {
    /**
     * @remarks Content of the body of the HTTP request.
     *
     * This property can't be edited in read-only mode.
     */
    body: string;
    /**
     * @remarks A collection of HTTP headers to add to the outbound request.
     *
     * This property can't be edited in read-only mode.
     */
    headers: HttpHeader[];
    /**
     * @remarks HTTP method (e.g., GET or PUT or PATCH) to use for making the request.
     *
     * This property can't be edited in read-only mode.
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks Amount of time, in seconds, before the request times out and is abandoned.
     *
     * This property can't be edited in read-only mode.
     *
     */
    timeout: number;
    /**
     * @remarks The HTTP resource to access.
     *
     * This property can't be edited in read-only mode.
     */
    uri: string;
    /**
     * @example
     * ```javascript
     * import { HttpRequest, HttpHeader, HttpRequestMethod } from "@minecraft/server-net";
     * const request = new HttpRequest("http://127.0.0.1:3000/test");
     * request.setMethod(HttpRequestMethod.Post);
     * request.setBody("hello world!");
     * request.addHeader("hello", "world");
     * request.setHeaders([
     *     new HttpHeader("test", "123"),
     *     new HttpHeader("mcheader", "hello"),
     * ]);
     * ```
     */
    constructor(uri: string);
    /**
     * @remarks Adds an additional header to the overall list of headers used in the corresponding HTTP request.
     *
     * This function can't be called in read-only mode.
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks Updates the content of the body of the HTTP request.
     *
     * This function can't be called in read-only mode.
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks Replaces and applies a set of HTTP Headers for the request.
     *
     * This function can't be called in read-only mode.
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks Sets the desired HTTP method (e.g., GET or PUT or PATCH) to use for making the request.
     *
     * This function can't be called in read-only mode.
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /** @remarks This function can't be called in read-only mode. */
    setTimeout(timeout: number): HttpRequest;
}

/** Main object that contains result information from a request. */
export class HttpResponse {
    private constructor();
    /** @remarks Body content of the HTTP response. */
    readonly body: string;
    /** @remarks A collection of HTTP response headers returned from the request. */
    readonly headers: HttpHeader[];
    /** @remarks Information that was used to formulate the HTTP response that this object represents. */
    readonly request: HttpRequest;
    /**
     * @remarks
     * HTTP response code for the request.
     * For example, 404 represents resource not found, and 500 represents an internal server error.
     */
    readonly status: number;
}

export const http: HttpClient;