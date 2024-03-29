// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/common",
 *     "version": "1.0.0"
 * }
 * ```
 */
/** This type of error is thrown when a parameter to a method or property is out of expected bounds. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /** @remarks Max expected value for the condition. */
    readonly maxValue: number;
    /** @remarks Min expected value for the condition. */
    readonly minValue: number;
    /** @remarks Passed-in value for the argument. */
    readonly value: number;
}

/** Specifies an underlying error in the engine in processing a function. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EngineError extends Error {
    private constructor();
}

/** Specifies that a passed-in argument to a method is not correct or allowed. */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    /** @remarks Index of the argument that is in error. */
    readonly index: number;
}
