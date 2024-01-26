// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
 *     "version": "1.1.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
/** Represents a game mode for the current world experience. */
export enum GameMode {
    /** @remarks World is in a more locked-down experience, where blocks may not be manipulated. */
    adventure = "adventure",
    /**
     * @remarks
     * World is in a full creative mode.
     * In creative mode, the player has all the resources available in the item selection tabs and the survival selection tab.
     * They can also destroy blocks instantly including those which would normally be indestructible.
     * Command and structure blocks can also be used in creative mode.
     * Items also do not lose durability or disappear.
     */
    creative = "creative",
    /**
     * @remarks
     * World is in spectator mode.
     * In spectator mode, spectators are always flying and cannot become grounded.
     * Spectators can pass through solid blocks and entities without any collisions, and cannot use items or interact with blocks or mobs.
     * Spectators cannot be seen by mobs or other players, except for other spectators;
     * spectators appear as a transparent floating head.
     */
    spectator = "spectator",
    /**
     * @remarks
     * World is in a survival mode, where players can take damage and entities may not be peaceful.
     * Survival mode is where the player must collect resources, build structures while surviving in their generated world.
     * Activities can, over time, chip away at player health and hunger bar.
     */
    survival = "survival",
}

/**
 * Represents a block in a dimension.
 * A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location.
 * This type was significantly updated in version 1.17.10.21.
 */
export class Block {
    private constructor();
    /** @remarks Returns the dimension that the block is within. */
    readonly dimension: Dimension;
    /**
     * @remarks Coordinates of the specified block.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks Additional block configuration data that describes the block.
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /** @remarks X coordinate of the block. */
    readonly x: number;
    /** @remarks Y coordinate of the block. */
    readonly y: number;
    /** @remarks Z coordinate of the block. */
    readonly z: number;
    /**
     * @remarks Sets the block in the dimension to the state of the permutation.
     *
     * This function can't be called in read-only mode.
     *
     * @param permutation
     * Permutation that contains a set of property states for the Block.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example
     * ```javascript
     * import { world, BlockPermutation } from "@minecraft/server";
     *
     * //Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     * block.setPermutation(BlockPermutation.resolve("minecraft:dirt"));
     * ```
     */
    setPermutation(permutation: BlockPermutation): void;
}

/** Contains the combination of type {@link BlockType} and properties (also sometimes called block state) which describe a block (but does not belong to a specific {@link Block}). */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches this permutation.
     * If states is not specified, matches checks against the set of types more broadly.
     *
     * @param blockName
     * An optional set of states to compare against.
     *
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * //Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const permutation = block.permutation;
     * 
     * const matches = permutation.matches("minecraft:dirt");
     * console.warn(`Block matches: ${matches}`);
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * //Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const permutation = block.permutation;
     * 
     * const matches = permutation.matches("minecraft:oak_log", { direction: 1 });
     * console.warn(`Block matches: ${matches}`);
     * ```
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks Given a type identifier and an optional set of properties, will return a BlockPermutation object that is usable in other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world, system, BlockPermutation } from "@minecraft/server";
     *
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const colors = [
     *     "white",
     *     "orange",
     *     "magenta",
     *     "light_blue",
     *     "yellow",
     *     "lime",
     *     "pink",
     *     "gray",
     *     "silver",
     *     "cyan",
     *     "purple",
     *     "blue",
     *     "brown",
     *     "green",
     *     "red",
     *     "black",
     * ];
     *
     * let currentColor = 0;
     * let interval = system.runInterval(() => {
     *     if (currentColor > colors.length - 1) {
     *         system.clearRun(interval);
     *         return;
     *     };
     *  
     *     const permutation = BlockPermutation.resolve("minecraft:wool", { color: colors[currentColor] });
     *     block.setPermutation(permutation);
     *     currentColor++;
     * }, 20);
     * ```
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

/** Contains return data on the result of a command execution. */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * If the command operates against a number of entities, blocks, or items, this returns the number of successful applications of this command.
     */
    readonly successCount: number;
}

/** A class that represents a particular dimension (e.g., The End) within a world. */
export class Dimension {
    private constructor();
    /** @remarks Identifier of the dimension. */
    readonly id: string;
    /**
     * @remarks Returns a block instance at the given location.
     *
     * @param location
     * The location at which to return a block.
     * @returns Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.
     * @throws
     * PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore
     *
     * PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @remarks Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of entities returned.
     * @returns An entity array.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const entities = overworld.getEntities({ type: "minecraft:pig" });
     * for (let entity of entities) {
     *     entity.remove();
     * };
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks Returns a set of entities at a particular location.
     *
     * @param location
     * The location at which to return entities.
     * @returns Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of players returned.
     * @returns A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of the broader dimension.
     * Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
     *
     * @param commandString
     * Command to run.
     * Note that command strings should not start with slash.
     * @returns For commands that return data, returns a CommandResult with an indicator of command results.
     * @throws
     * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command.
     * Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * overworld.runCommandAsync("say Hello World!");
     * ```
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

/** Represents the state of an entity (a mob, the player, or other moving objects like minecarts) in the world. */
export class Entity {
    private constructor();
    /**
     * @remarks Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     */
    readonly id: string;
    /**
     * @remarks Current location of the entity.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks Given name of the entity.
     *
     * This property can't be edited in read-only mode.
     */
    nameTag: string;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId: string;
    /**
     * @remarks Returns the current location of the head component of this entity.
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     */
    getVelocity(): Vector3;
    /**
     * @remarks Returns the current view direction of the entity.
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of this entity.
     * Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
     *
     * @param commandString
     * Command to run.
     * Note that command strings should not start with slash.
     * @returns For commands that return data, returns a JSON structure with command response values.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.runCommandAsync("say Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const entity = world.getDimension("overworld").getEntities()[0];
     * 
     * entity.runCommandAsync("say Hello World!");
     * ```
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class MinecraftDimensionTypes {
    private constructor();
    static readonly nether = "minecraft:nether";
    static readonly overworld = "minecraft:overworld";
    static readonly theEnd = "minecraft:the_end";
}

/** Represents a player within the world. */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks Name of the player.
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks Sends a message to the player.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is in an invalid format.
     * For example, if an empty `name` string is provided to `score`.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     *
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *     translate: "accessibility.list.or.two",
     *     with: {
     *         rawtext: [
     *             { translate: "item.apple.name" },
     *             { translate: "item.coal.name" }
     *         ]
     *     },
     * };
     * 
     * player.sendMessage(rawMessage);
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     *
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * player.sendMessage(rawMessage);
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     *
     * player.sendMessage("Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     *
     * player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
}

/** A class that provides system-level events and functions. */
export class System {
    private constructor();
    /** @remarks Represents the current world tick of the server. */
    readonly currentTick: number;
    /**
     * @remarks Cancels the execution of a function run that was previously scheduled via the `run` function.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * 
     * const run = system.runInterval(() => {
     *     world.sendMessage("Hello World!");
     *  
     *     //Clears the run
     *     system.clearRun(run);
     * }, 100);
     * ```
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time.
     * This is frequently used to implement delayed behaviors and game loops.
     *
     * @param callback
     * Function callback to run when the tickDelay time criteria is met.
     * @returns An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * 
     * function helloWorld() {
     *     world.sendMessage("Hello World");
     *     system.run(helloWorld);
     * };
     * 
     * system.run(() => {
     *     world.sendMessage(":D");
     *     helloWorld();
     * });
     * ```
     */
    run(callback: () => void): number;
    /**
     * @remarks Runs a set of code on an interval.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be called upon.
     * @returns An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * 
     * //Runs every 5 seconds
     * system.runInterval(() => {
     *     world.sendMessage(`Current tick: ${system.currentTick}`);
     * }, 100);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks Runs a set of code at a future time specified by tickDelay.
     *
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be called.
     * @returns An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * 
     * //Runs after 5 seconds
     * system.runTimeout(() => {
     *     world.sendMessage("Hello World!");
     * }, 100);
     * ```
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
}

/** A class that wraps the state of a world - a set of dimensions and the environment of Minecraft. */
export class World {
    private constructor();
    /**
     * @remarks Returns an array of all active players within the world.
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @remarks Returns a dimension object.
     *
     * @param dimensionId
     * The name of the dimension. For example, "overworld",
     * "nether" or "the_end".
     * @returns The requested dimension
     * @throws Throws if the given dimension name is invalid
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * const overworld = world.getDimension("overworld");
     * const nether = world.getDimension("nether");
     * const theEnd = world.getDimension("the_end");
     * ```
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of players returned.
     * @returns A player array.
     * @throws Throws if the provided EntityQueryOptions are invalid.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * const playersWithTag = world.getPlayers({ tags: [ "helloworld" ] });
     * console.warn(playersWithTag.length);
     * ```
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks Sends a message to all players.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is in an invalid format.
     * For example, if an empty `name` string is provided to `score`.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *     translate: "accessibility.list.or.two",
     *     with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     *
     * world.sendMessage(rawMessage);
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * world.sendMessage("Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * world.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * world.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
}

/** Contains options for selecting entities within an area. */
export interface EntityQueryOptions {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the closest N entities as specified by this property.
     * The location value must also be specified on the query options object.
     */
    closest?: number,
    /** @remarks Excludes entities that match one or more of the specified families. */
    excludeFamilies?: string[],
    /** @remarks Excludes entities if have a specific gamemode that matches the specified gamemode. */
    excludeGameModes?: GameMode[],
    /** @remarks Excludes entities that have a name that match one of the specified values. */
    excludeNames?: string[],
    /** @remarks Excludes entities with a tag that matches one of the specified values. */
    excludeTags?: string[],
    /** @remarks Excludes entities if they are one of the specified types. */
    excludeTypes?: string[],
    /** @remarks If specified, includes entities that match all of the specified families. */
    families?: string[],
    /**
     * @remarks
     * Limits the number of entities to return, opting for the farthest N entities as specified by this property.
     * The location value must also be specified on the query options object.
     */
    farthest?: number,
    /** @remarks If specified, includes entities with a gamemode that matches the specified gamemode. */
    gameMode?: GameMode,
    /** @remarks Adds a seed location to the query that is used in conjunction with closest, farthest, limit, volume, and distance properties. */
    location?: Vector3,
    /** @remarks If specified, includes entities that are less than this distance away from the location specified in the location property. */
    maxDistance?: number,
    /** @remarks If specified, will only include entities that have at most this horizontal rotation. */
    maxHorizontalRotation?: number,
    /** @remarks If defined, only players that have at most this level are returned. */
    maxLevel?: number,
    /** @remarks If specified, only entities that have at most this vertical rotation are returned. */
    maxVerticalRotation?: number,
    /** @remarks If specified, includes entities that are least this distance away from the location specified in the location property. */
    minDistance?: number,
    /** @remarks If specified, will only include entities that have at a minimum this horizontal rotation. */
    minHorizontalRotation?: number,
    /** @remarks If defined, only players that have at least this level are returned. */
    minLevel?: number,
    /** @remarks If specified, will only include entities that have at least this vertical rotation. */
    minVerticalRotation?: number,
    /** @remarks Includes entities with the specified name. */
    name?: string,
    /** @remarks Gets/sets a collection of EntityQueryScoreOptions objects with filters for specific scoreboard objectives. */
    scoreOptions?: EntityQueryScoreOptions[],
    /** @remarks Includes entities that match all of the specified tags. */
    tags?: string[],
    /** @remarks If defined, entities that match this type are included. */
    type?: string,
}

/** Contains additional options for filtering players based on their score for an objective. */
export interface EntityQueryScoreOptions {
    /** @remarks If set to true, entities and players within this score range are excluded from query results. */
    exclude?: boolean,
    /** @remarks If defined, only players that have a score equal to or under maxScore are included. */
    maxScore?: number,
    /** @remarks If defined, only players that have a score equal to or over minScore are included. */
    minScore?: number,
    /** @remarks Identifier of the scoreboard objective to filter on. */
    objective?: string,
}

/** Defines a JSON structure that is used for more flexible. */
export interface RawMessage {
    /** @remarks Provides a raw-text equivalent of the current message. */
    rawtext?: RawMessage[],
    /** @remarks Provides a token that will get replaced with the value of a score. */
    score?: RawMessageScore,
    /** @remarks Provides a string literal value to use. */
    text?: string,
    /**
     * @remarks
     * Provides a translation token where, if the client has an available resource in the players' language which matches the token,
     *  will get translated on the client.
     */
    translate?: string,
    /**
     * @remarks
     * Arguments for the translation token.
     * Can be either an array of strings or RawMessage containing an array of raw text objects.
     */
    with?: string[] | RawMessage,
}

/** Provides a description of a score token to use within a raw message. */
export interface RawMessageScore {
    /** @remarks Name of the score value to match. */
    name?: string,
    /** @remarks Name of the score value to match. */
    objective?: string,
}

/** Contains a description of a vector. */
export interface Vector3 {
    /** @remarks X component of this vector. */
    x: number,
    /** @remarks Y component of this vector. */
    y: number,
    /** @remarks Z component of this vector. */
    z: number,
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

/** @remarks A class that provides system-level events and functions. */
export const system: System;
/** @remarks A class that wraps the state of a world - a set of dimensions and the environment of Minecraft. */
export const world: World;