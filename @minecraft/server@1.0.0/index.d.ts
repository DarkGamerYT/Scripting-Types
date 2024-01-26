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
 *     "version": "1.0.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
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
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId: string;
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
}

/** A class that provides system-level events and functions. */
export class System {
    private constructor();
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
}

/** @remarks A class that provides system-level events and functions. */
export const system: System;
/** @remarks A class that wraps the state of a world - a set of dimensions and the environment of Minecraft. */
export const world: World;