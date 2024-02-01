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
 *     "version": "1.4.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
/** A general purpose relative direction enumeration. */
export enum Direction {
    /** @remarks Returns the {@link Block} beneath (y - 1) of this item. */
    Down = "Down",
    /** @remarks Returns the {@link Block} to the east (x + 1) of this item. */
    East = "East",
    /** @remarks Returns the {@link Block} to the east (z + 1) of this item. */
    North = "North",
    /** @remarks Returns the {@link Block} to the south (z - 1) of this item. */
    South = "South",
    /** @remarks Returns the {@link Block} above (y + 1) of this item. */
    Up = "Up",
    /** @remarks Returns the {@link Block} to the west (x - 1) of this item. */
    West = "West",
}

/** Specifies a mechanism for displaying scores on a scoreboard. */
export enum DisplaySlotId {
    /** @remarks Displays the score below the player's name. */
    BelowName = "BelowName",
    /** @remarks Displays the score as a list on the pause screen. */
    List = "List",
    /** @remarks Displays the score on the side of the player's screen. */
    Sidebar = "Sidebar",
}

/** Describes the source of damage from an Entity. */
export enum EntityDamageCause {
    /**
     * @remarks
     * Damage caused by a falling anvil.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged
     */
    anvil = "anvil",
    /**
     * @remarks
     * Damage caused from a non-Entity explosion.
     * For example, an exploding bed.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged
     */
    blockExplosion = "blockExplosion",
    /**
     * @remarks Unused.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    charging = "charging",
    /**
     * @remarks
     * Damage caused by physically touching an Entity or Block.
     * For example, touching a Sweet Berry bush or Pufferfish.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    contact = "contact",
    /** @remarks Damage caused by an Entity being out of air and inside a liquid block. */
    drowning = "drowning",
    /**
     * @remarks Damage caused by an Entity attack.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    entityAttack = "entityAttack",
    /**
     * @remarks
     * Damage caused by an Entity explosion.
     * For example, a Creeper or Wither.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    entityExplosion = "entityExplosion",
    /** @remarks Damage caused by falling onto the ground. */
    fall = "fall",
    /**
     * @remarks
     * Damage caused by falling blocks. Note: Anvils and
     * Stalactites have their own damage causes.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    fallingBlock = "fallingBlock",
    /**
     * @remarks Damage caused by catching on fire.
     *
     * Note that when used in {@link Entity.applyDamage}, a different damage sound will be play and the armor will be damaged.
     */
    fire = "fire",
    /**
     * @remarks Damage caused by burning over time.
     *
     * Note that when used in {@link Entity.applyDamage}, a different damage sound will be play.
     */
    fireTick = "fireTick",
    /**
     * @remarks Damage caused by fireworks.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    fireworks = "fireworks",
    /** @remarks Damage caused by flying into a wall at high speed while gliding with Elytra. */
    flyIntoWall = "flyIntoWall",
    /**
     * @remarks Damage caused by staying inside a Powder Snow block.
     *
     * Note that when used in {@link Entity.applyDamage}, a different damage sound will be play.
     */
    freezing = "freezing",
    /**
     * @remarks Damage caused by touching a Lava block.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    lava = "lava",
    /** @remarks Damage caused by being struck by lightning. */
    lightning = "lightning",
    /**
     * @remarks
     * Damage caused by magical attacks.
     * For example, Evoker Fang or Conduit Block.
     */
    magic = "magic",
    /**
     * @remarks Damage caused by touching a Magma block.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    magma = "magma",
    /**
     * @remarks
     * Damage caused by no source.
     * For example, from a command or script.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    none = "none",
    /**
     * @remarks
     * Damage caused by an indirect source.
     * For example, setting a mob's health to 0 in a behavior pack.
     */
    override = "override",
    /**
     * @remarks Damage caused by a Piston.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    piston = "piston",
    /** @remarks Damage caused by a projectile. */
    projectile = "projectile",
    selfDestruct = "selfDestruct",
    /**
     * @remarks Damage caused by a falling Stalactite block.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    stalactite = "stalactite",
    /** @remarks Damage caused by touching a Stalagmite block. */
    stalagmite = "stalagmite",
    /** @remarks Damage caused over time by having an empty hunger bar. */
    starve = "starve",
    /** @remarks Damage caused by an Entity being out of air and inside a non-liquid block. */
    suffocation = "suffocation",
    /**
     * @remarks
     * Damage caused by an Entity killing itself.
     * For example, from the /kill command.
     */
    suicide = "suicide",
    /**
     * @remarks
     * Damage caused by an Entity being in an inhabitable climate.
     * For example, a Snow Golem in a biome with a temperature greater than 1.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    temperature = "temperature",
    /**
     * @remarks
     * Damage caused by the Thorns armor enchantment and by the Guardian thorns effect.
     *
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    thorns = "thorns",
    /** @remarks Damage caused over time by falling into the void. */
    void = "void",
    /**
     * @remarks
     * Damage caused by the Wither effect.
     * For example, from touching a Wither Rose.
     */
    wither = "wither",
}

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

/** Describes how an an item can be moved within a container. */
export enum ItemLockMode {
    /** @remarks The item cannot be dropped or crafted with. */
    inventory = "inventory",
    /** @remarks The item has no container restrictions. */
    none = "none",
    /** @remarks The item cannot be moved from its slot, dropped or crafted with. */
    slot = "slot",
}

/** Used for specifying a sort order for how to display an objective and its list of participants. */
export enum ObjectiveSortOrder {
    /** @remarks Objective participant list is displayed in ascending (e.g., A-Z) order. */
    Ascending = 0,
    /** @remarks Objective participant list is displayed in descending (e.g., Z-A) order. */
    Descending = 1,
}

/** Contains objectives and participants for the scoreboard. */
export enum ScoreboardIdentityType {
    /** @remarks This scoreboard participant is tied to an entity. */
    Entity = "Entity",
    /**
     * @remarks
     * This scoreboard participant is tied to a pseudo player entity
     *  - typically this is used to store scores as data or as abstract progress.
     */
    FakePlayer = "FakePlayer",
    /** @remarks This scoreboard participant is tied to a player. */
    Player = "Player",
}

/** Describes where the script event originated from. */
export enum ScriptEventSource {
    /** @remarks The script event originated from a Block such as a Command Block. */
    Block = "Block",
    /** @remarks The script event originated from an Entity such as a Player, Command Block Minecart or Animation Controller. */
    Entity = "Entity",
    /** @remarks The script event originated from an NPC dialogue. */
    NPCDialogue = "NPCDialogue",
    /** @remarks The script event originated from the server, such as from a runCommand API call or a dedicated server console. */
    Server = "Server",
}

/** Provides numeric values for common periods in the Minecraft day. */
export enum TimeOfDay {
    /** @remarks Sets the time to the start of the day, which is time of the day 1,000 (or the equivalent of 7am) in Minecraft. */
    Day = 1000,
    /** @remarks Sets the time to midnight, which is time of the day 18,000 (or the equivalent of 12:00am) in Minecraft. */
    Midnight = 18000,
    /** @remarks Sets the time to night, which is time of the day 13,000 (or the equivalent of 7:00pm) in Minecraft. */
    Night = 13000,
    /** @remarks Sets the time to noon, which is time of the day 6,000 in Minecraft. */
    Noon = 6000,
    /** @remarks Sets the time to sunrise, which is time of the day 23,000 (or the equivalent of 5am) in Minecraft. */
    Sunrise = 23000,
    /** @remarks Sets the time to sunset, which is time of the day 12,000 (or the equivalent of 6pm) in Minecraft. */
    Sunset = 12000,
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
     * @remarks
     * Gets a component (that represents additional capabilities) for a block - for example, an inventory component of a chest block.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:inventory').
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link BlockComponentTypes} enum.
     * @returns Returns the component if it exists on the block, otherwise undefined.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example
     * ```javascript
     * import { world, ItemStack } from "@minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     * const inventory = block.getComponent("inventory").container;
     * inventory.addItem(new ItemStack("minecraft:dirt"));
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     * const sign = block.getComponent("sign");
     * sign.setText("Hello! :D");
     * ```
     */
    getComponent(componentId: string): BlockComponent | undefined;
    /**
     * @remarks
     * Returns true if this reference to a block is still valid (for example, if the block is unloaded, references to that block will no longer be valid.)
     *
     * @returns True if this block object is still working and valid.
     */
    isValid(): boolean;
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

/** Base type for components associated with blocks. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /** @remarks Block instance that this component pertains to. */
    readonly block: Block;
}

/** Contains information regarding an event that impacts a specific block. */
export class BlockEvent {
    private constructor();
    /** @remarks Block impacted by this event. */
    readonly block: Block;
    /** @remarks Dimension that contains the block that is the subject of this event. */
    readonly dimension: Dimension;
}

/**
 * Represents the inventory of a block in the world.
 * Used with blocks like chests.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks The container which holds an {@link ItemStack}.
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = "minecraft:inventory";
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

/** Contains information related to changes to a button push. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks Optional source that triggered the button push. */
    readonly source: Entity;
}

/** Manages callbacks that are connected to when a button is pushed. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
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

/** Base class for downstream Component implementations. */
export class Component {
    private constructor();
    /** @remarks Identifier of the component. */
    readonly typeId: string;
    /**
     * @remarks
     * Returns whether the component is valid.
     * A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.
     *
     * @returns Whether the component is valid.
     */
    isValid(): boolean;
}

/**
 * Represents a container that can hold sets of items.
 * Used with entities such as Players, Chest Minecarts, Llamas, and more.
 */
export class Container {
    private constructor();
    /**
     * @remarks Count of the slots in the container that are empty.
     * @throws Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * The number of slots in this container.
     * For example, a standard single-block chest has a size of 27.
     * Note, a player's inventory container contains a total of 36 slots, 9 hotbar slots plus 27 inventory slots.
     *
     * @throws Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the container.
     * The item is placed in the first available slot(s) and can be stacked with existing items of the same type.
     * Note, use {@link Container.setItem} if you wish to set the item in a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks Clears all inventory items in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`.
     * This method does not change or clear the contents of the specified slot.
     * To get a reference to a particular slot, see {@link Container.getSlot}.
     *
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws Throws if the container is invalid or if the `slot` index is out of bounds.
     */
    getItem(slot: number): ItemStack | undefined;
    /** @remarks Returns whether a container object (or the entity or block that this container is associated with) is still available for use in this context. */
    isValid(): boolean;
    /**
     * @remarks Moves an item from one slot to another, potentially across containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on this container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same container as the source.
     * @throws Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks Sets an item stack within a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * Setting `itemStack` to undefined will clear the slot.
     * @throws Throws if the container is invalid or if the `slot` index is out of bounds.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks Swaps items between two different slots within containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same container as this source.
     * @throws Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks Moves an item from one slot to another container, or to the first available slot in the same container.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same container as the source.
     * @returns
     * An itemStack with the items that couldn't be transferred.
     * Returns undefined if all items were transferred.
     * @throws Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
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
     * @remarks Gets the first block that intersects with a vector emanating from a location.
     *
     * @param location
     * Location from where to initiate the ray check.
     * @param direction
     * Vector direction to cast the ray.
     * @param options
     * Additional options for processing this raycast query.
     * @example
     * ```javascript
     * import { world, Vector } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const ray = overworld.getBlockFromRay({ x: 1, y: 2, z: 3}, Vector.Down);
     * console.warn(`Block: ${ray?.block?.typeId}`);
     * console.warn(`Face: ${ray?.face}`);
     * ```
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
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
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
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
     * @remarks Runs a command synchronously using the context of the broader dimenion.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start with slash.
     * @returns Returns a command result with a count of successful values from the command.
     * @throws
     * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command.
     * Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
     *
     * {@link CommandError}
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * overworld.runCommand("say Hello World!");
     * ```
     */
    runCommand(commandString: string): CommandResult;
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
    /**
     * @remarks Creates a new entity (e.g., a mob) at the specified location.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * Identifier of the type of entity to spawn.
     * If no namespace is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns Newly created entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @remarks Creates a new itemstack as an entity at the specified location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to create the item stack.
     * @returns Newly created itemstack entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const dirtItem = new ItemStack("minecraft:dirt", 1);
     * overworld.spawnItem(dirtItem, { x: 1, y: 2, z: 3 });
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
}

/** Represents an effect - like poison - that has been added to an Entity. */
export class Effect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4.
     * Example: The effect 'Jump Boost II' will have an amplifier value of 1.
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks Gets the player-friendly name of this effect.
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Gets the entire specified duration, in ticks, of this effect.
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     * @throws This property can throw when used.
     */
    
    readonly duration: number;
    /**
     * @remarks Gets the type id of this effect.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /** @remarks Returns whether an effect instance is available for use in this context. */
    isValid(): boolean;
}

/** Represents a type of effect - like poison - that can be applied to an entity. */
export class EffectType {
    private constructor();
    /** @returns Identifier of the effect type. */
    getName(): string;
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
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
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
     * Adds or updates an effect, like poison, to the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     * The value must be within the range [0, 20000000].
     * @param options
     * Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated successfully.
     * This can throw an error if the duration or amplifier are outside of the valid ranges, or if the effect does not exist.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const fox = overworld.spawnEntity("minecraft:fox", {
     *     x: 1,
     *     y: 2,
     *     z: 3
     * });
     * 
     * fox.addEffect("speed", 10, { amplifier: 2 });
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to add.
     * The tag must be less than 256 characters.
     * @returns
     * Returns true if the tag was added successfully.
     * This can fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     *
     * const mobs = ["creeper", "skeleton", "sheep"];
     *
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, { x: 1, y: 2, z: 3 });
     *     entity.addTag("mobparty." + mobTypeId);
     * };
     * 
     * for (let entity of overworld.getEntities({ tags: ["mobparty.skeleton"] })) {
     *     entity.kill();
     * };
     * ```
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Applies a set of damage to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity.
     * @returns
     * Whether the entity takes any damage.
     * This can return false if the entity is invulnerable or if the damage applied is less than or equal to 0.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
     *
     * skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks Applies impulse vector to the current velocity of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const skelly = overworld.spawnEntity("minecraft:zombie", { x: 1, y: 2, z: 3 });
     *
     * zombie.clearVelocity();
     * 
     * // throw the zombie up in the air
     * zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks Applies impulse vector to the current velocity of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param directionX
     * X direction in horizontal plane.
     * @param directionZ
     * Z direction in horizontal plane.
     * @param horizontalStrength
     * Knockback strength for the horizontal vector.
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     *
     * const mobs = ["creeper", "skeleton", "sheep"];
     *
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *     let entity = overworld.spawnEntity(mobs[i % mobs.length], { x: 1, y: 2, z: 3 });
     * };
     *
     * for (let entity of overworld.getEntities({ type: "skeleton" })) {
     *     entity.applyKnockback(0, 0, 0, 1);
     * };
     * ```
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * @remarks
     * Sets the current velocity of the Entity to zero.
     * Note that this method may not have an impact on Players.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const skelly = overworld.spawnEntity("minecraft:zombie", { x: 1, y: 2, z: 3 });
     *
     * zombie.clearVelocity();
     *
     * // throw the zombie up in the air
     * zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    clearVelocity(): void;
    /**
     * @remarks Returns the first intersecting block from the direction that this entity is looking at.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns Returns the first intersecting block from the direction that this entity is looking at.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
     *
     * const raycast = skelly.getBlockFromViewDirection({ maxDistance: 8 });
     * const block = raycast?.block;
     * if (block) {
     *     console.warn(`Block: ${block.typeId}`);
     * };
     * ```
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks Gets a component (that represents additional capabilities) for an entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:health').
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the
     * {@link EntityComponentTypes} enum.
     * @returns Returns the component if it exists on the entity, otherwise undefined.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     *
     * const inventory = player.getComponent("inventory");
     * const container = inventory.container;
     * 
     * container.addItem(new ItemStack("minecraft:dirt"));
     * container.setItem(8, new ItemStack("minecraft:dirt"));
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
     *
     * const health = skelly.getComponent("health");
     * 
     * //Reset health to it's default value
     * health.resetToDefaultValue();
     * 
     * //Set the entity's health to 1
     * health.setCurrentValue(1);
     * ```
     */
    getComponent(componentId: string): EntityComponent | undefined;
    /**
     * @remarks Returns all components that are both present on this entity and supported by the API.
     *
     * @returns Returns all components that are both present on this entity and supported by the API.
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks Returns the effect for the specified EffectType on the entity, undefined if the effect is not present, or throws an error if the effect does not exist.
     *
     * @param effectType
     * The effect identifier.
     * @returns Effect object for the specified effect, undefined if the effect is not present, or throws an error if the effect does not exist.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const skelly = overworld.spawnEntity("minecraft:skeleton", { x: 1, y: 2, z: 3 });
     *
     * effect.addEffect("speed", 10, { amplifier: 2 });
     * 
     * const effect = skelly.getEffect("speed");
     * console.warn(`Effect: ${effect.displayName} ${effect.amplifier} | ${effect.duration}s left`);
     * ```
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks Returns a set of effects applied to this entity.
     *
     * @returns List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks Returns the current location of the head component of this entity.
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
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
     * @remarks Returns true if the specified component is present on this entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable') to retrieve.
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks Returns whether an entity has a particular tag.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether the entity can be manipulated by script.
     * A Player is considered valid when it's EntityLifetimeState is set to Loaded.
     *
     * @returns Whether the entity is valid.
     */
    isValid(): boolean;
    /**
     * @remarks
     * Kills this entity.
     * The entity will drop loot as normal.
     *
     * This function can't be called in read-only mode.
     *
     * @returns Returns true if entity can be killed (even if it is already dead), otherwise it returns false.
     * @throws This function can throw errors.
     */
    kill(): boolean;
    removeEffect(effectType: EffectType | string): boolean;
    removeTag(tag: string): boolean;
    /**
     * @remarks Runs a synchronous command on the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * The command string.
     * Note: This should not include a leading forward slash.
     * @returns A command result containing whether the command was successful.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link Error}
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.runCommand("say Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const entity = world.getDimension("overworld").getEntities()[0];
     * 
     * entity.runCommand("say Hello World!");
     * ```
     */
    runCommand(commandString: string): CommandResult;
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
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/** This is a base abstract class for any entity component that centers around a number and can have a minimum, maximum, and default defined value. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Current value of this attribute for this instance.
     * @throws This property can throw when used.
     */
    readonly currentValue: number;
    /**
     * @remarks Returns the default defined value for this attribute.
     * @throws This property can throw when used.
     */
    readonly defaultValue: number;
    /**
     * @remarks Returns the effective max of this attribute given any other ambient components or factors.
     * @throws This property can throw when used.
     */
    readonly effectiveMax: number;
    /**
     * @remarks Returns the effective min of this attribute given any other ambient components or factors.
     * @throws This property can throw when used.
     */
    readonly effectiveMin: number;
    /**
     * @remarks Resets the current value of this attribute to the defined default value.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks Resets the current value of this attribute to the maximum defined value.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks Resets the current value of this attribute to the minimum defined value.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks Sets the current value of this attribute.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCurrentValue(value: number): boolean;
}

/** Base class for a family of entity movement events. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Maximum turn rate for this movement modality of the mob.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
}

/** When added, this component signifies that the entity can climb up ladders. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_climb";
}

/** When added, this component signifies that the entity can fly, and the pathfinder won't be restricted to paths where a solid block is required underneath it. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_fly";
}

/** When added, this component signifies that the entity can power jump like the horse does within Minecraft. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_power_jump";
}

/**
 * Defines the entity's color.
 * Only works on certain entities that have predefined color values (e.g., sheep, llama, shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Value of this particular color.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:color";
}

/** Base class for downstream entity components. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
}

/** Contains data related to the death of an entity in the game. */
export class EntityDieAfterEvent {
    private constructor();
    /** @remarks If specified, provides more information on the source of damage that caused the death of this entity. */
    readonly damageSource: EntityDamageSource;
    /** @remarks Now-dead entity object. */
    readonly deadEntity: Entity;
}

/** Supports registering for an event that fires after an entity has died. */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks Subscribes to an event that fires when an entity dies.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function to call when an entity dies.
     * @param options
     * Additional filtering options for when the subscription fires.
     * @returns Returns the closure that can be used in future downstream calls to unsubscribe.
     */
    subscribe(
        callback: (arg: EntityDieAfterEvent) => void, 
        options?: EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
    /**
     * @remarks Stops this event from calling your function when an entity dies.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

/** When added, this component signifies that this entity doesn't take damage from fire. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:fire_immune";
}

/** When added, this component signifies that this entity can float in liquid blocks. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:floats_in_liquid";
}

/** Represents the flying speed of an entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Current value of the flying speed of the associated entity.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:flying_speed";
}

/** Defines how much friction affects this entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Current value of the friction modifier of the associated entity.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:friction_modifier";
}

/** Sets the offset from the ground that the entity is actually at. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular ground offset.
     * Note that this value is effectively read only; setting the ground offset value will not have an impact on the related entity.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:ground_offset";
}

/** Defines the interactions with this entity for healing it. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Determines if an item can be used regardless of the entity being at full health.
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    static readonly componentId = "minecraft:healable";
    /**
     * @remarks A set of items that can specifically heal this entity.
     * @returns Entity that this component is associated with.
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newValue: number;
    readonly oldValue: number;
}

export class EntityHealthChangedAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EntityHealthChangedAfterEvent) => void, 
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

/** Defines the health properties of an entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:health";
}

export class EntityHitBlockAfterEvent {
    private constructor();
    readonly blockFace: Direction;
    readonly damagingEntity: Entity;
    readonly hitBlock: Block;
}

export class EntityHitBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EntityHitBlockAfterEvent) => void, 
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

export class EntityHitEntityAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void, 
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}

export class EntityHurtAfterEvent {
    private constructor();
    readonly damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}

export class EntityHurtAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EntityHurtAfterEvent) => void, 
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

/** Defines this entity's inventory properties. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Number of slots that this entity can gain per extra strength.
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks If true, the contents of this inventory can be removed by a hopper.
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * Defines the container for this entity.
     * The container will be undefined if the entity has been removed.
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    /**
     * @remarks Type of container this entity has.
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks Number of slots the container has.
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks If true, the entity will not drop it's inventory on death.
     * @throws This property can throw when used.
     */
    readonly private: boolean;
    /**
     * @remarks If true, the entity's inventory can only be accessed by its owner or itself.
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = "minecraft:inventory";
}

/** When added, this component signifies that this entity is a baby. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_baby";
}

/** When added, this component signifies that this entity is charged. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_charged";
}

/** When added, this component signifies that this entity is currently carrying a chest. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_chested";
}

/** When added, this component signifies that dyes can be used on this entity to change its color. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_dyeable";
}

/** When added, this component signifies that this entity can hide from hostile mobs while invisible. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_hidden_when_invisible";
}

/** When added, this component signifies that this entity this currently on fire. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_ignited";
}

/** When added, this component signifies that this entity is an illager captain. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_illager_captain";
}

/** When added, this component signifies that this entity is currently saddled. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_saddled";
}

/** When added, this component signifies that this entity is currently shaking. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_shaking";
}

/** When added, this component signifies that this entity is currently sheared. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_sheared";
}

/** When added, this component signifies that this entity can be stacked. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_stackable";
}

/** When added, this component signifies that this entity is currently stunned. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_stunned";
}

/** When added, this component signifies that this entity is currently tamed. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_tamed";
}

/**
 * If added onto the entity, this indicates that the entity represents a free-floating item in the world.
 * Lets you retrieve the actual item stack contents via the itemStack property.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Item stack represented by this entity in the world.
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = "minecraft:item";
}

/**
 * Additional variant value.
 * Can be used to further differentiate variants.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Value of the mark variant value for this entity.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:mark_variant";
}

/** When added, this movement control allows the mob to swim in water and walk on land. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.amphibious";
}

/** This component accents the movement of an entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.basic";
}

/** When added, this move control causes the mob to fly. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.fly";
}

/** When added, this move control allows a mob to fly, swim, climb, etc. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.generic";
}

/** When added, this move control causes the mob to hover. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.hover";
}

/** Move control that causes the mob to jump as it moves with a specified delay between jumps. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.jump";
}

/** When added, this move control causes the mob to hop as it moves. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.skip";
}

/** Sets the distance through which the entity can push through. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Value of the push through distances of this entity.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:push_through";
}

/** Sets the entity's visual size. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Current value for the scale property set on entities.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:scale";
}

/**
 * Skin Id value.
 * Can be used to differentiate skins, such as base skins for villagers.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Returns the value of the skin Id identifier of the entity.
     *
     * This property can't be edited in read-only mode.
     */
    value: number;
    static readonly componentId = "minecraft:skin_id";
}

/** Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager). */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks Current value for variant for this entity, as specified via components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:variant";
}

/** When added, this component signifies that this entity wants to become a jockey. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:wants_jockey";
}

/** As part of the Healable component, represents a specific item that can be fed to an entity to cause health effects. */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0.
     * Sample values can go as high as 40.
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed.
     * If a namespace is not specified, 'minecraft:' is assumed.
     * Example values include 'wheat' or 'golden_apple'.
     */
    readonly item: string;
    /** @remarks As part of the Healable component, an optional collection of side effects that can occur from being fed an item.*/
    getEffects(): FeedItemEffect[];
}

/** Represents an effect that is applied as a result of a food item being fed to an entity. */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity being fed this item.
     * Valid values range between 0 and 1.
     */
    readonly chance: number;
    /** @remarks Gets the duration, in ticks, of this effect. */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply.
     * Example values include 'fire_resistance' or 'regeneration'.
     */
    readonly name: string;
}

/** Provides an adaptable interface for callers to subscribe to an event that fires when a button is pushed. */
export class IButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    /**
     * @remarks Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

/** Provides an adaptable interface for callers to subscribe to an event that fires after a lever is used. */
export class ILeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    /**
     * @remarks Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

/** Provides an adaptable interface for callers to subscribe to an event that fires after a player joins a world. */
export class IPlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    /**
     * @remarks Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

/** Provides an adaptable interface for callers to subscribe to an event that fires after a player leaves a world. */
export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

/** Provides an adaptable interface for callers to subscribe to an event that fires after a player spawns. */
export class IPlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

export class ItemCompleteUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

/** Base class for item components. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

export class ItemReleaseUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

/** Defines a collection of items. */
export class ItemStack {
    /**
     * @remarks
     * Number of the items in the stack.
     * Valid values range between 1-255.
     * The provided value will be clamped to the item's maximum stack size.
     *
     * This property can't be edited in read-only mode.
     * @throws Throws if the value is outside the range of 1-255.
     */
    readonly amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable.
     * An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.
     */
    readonly isStackable: boolean;
    /**
     * @remarks Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     */
    readonly keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode.
     * The default value is `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     */
    readonly lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size.
     * This value varies depending on the type of item.
     * For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items.
     * The name tag is displayed when hovering over the item.
     * Setting the name tag to an empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     * @throws Throws if the length exceeds 255 characters.
     */
    readonly nameTag?: string;
    /** @remarks The type of the item. */
    readonly type: ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack.
     * If a namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     */
    readonly typeId: string;
    /**
     * @remarks Creates a new instance of a stack of items for use in the world.
     *
     * @param itemType
     * Type of item to create.
     * See the {@link MinecraftItemTypes} enumeration for a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255.
     * The provided value will be clamped to the item's maximum stack size.
     * Note that certain items can only have one item in the stack.
     * @throws Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255.
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * 
     * const item = new ItemStack("minecraft:dirt", 8);
     * ```
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks Gets a component (that represents additional capabilities) for an item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food').
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link ItemComponentTypes} enum.
     * @returns Returns the component if it exists on the item stack, otherwise undefined.
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * 
     * const item = new ItemStack("minecraft:iron_sword");
     * const durability = item.getComponent("minecraft:durability");
     * console.warn(`Damage: ${durability.damage}`);
     * ```
     * @example
     * ```javascript
     * import { world, ItemStack } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const item = new ItemStack("minecraft:ender_pearl");
     * const cooldown = item.getComponent("minecraft:cooldown");
     * cooldown.startCooldown(player);
     * ```
     * @example
     * ```javascript
     * import { ItemStack, Enchantment } from "@minecraft/server";
     * 
     * const item = new ItemStack("minecraft:iron_sword");
     * const enchantments = item.getComponent("minecraft:enchantments");
     * enchantments.enchantments.addEnchantment(new Enchantment("sharpness", 5));
     * ```
     */
    getComponent(componentId: string): ItemComponent | undefined;
    /** @remarks Returns all components that are both present on this item stack and supported by the API. */
    getComponents(): ItemComponent[];
    /**
     * @remarks Returns the lore value - a secondary display string - for an ItemStack.
     *
     * @returns An array of lore lines. If the item does not have lore, returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks Returns true if the specified component is present on this item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to retrieve.
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the given `itemStack`.
     * This is determined by comparing the item type and any custom data and properties associated with the item stacks.
     * The amount of each item stack is not taken into consideration.
     *
     * @param itemStack
     * ItemStack to check stacking compatability with.
     * @returns True if the Item Stack is stackable with the itemStack passed in.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    setLore(loreList?: string[]): void;
}

export class ItemStartUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

export class ItemStartUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStartUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

export class ItemStopUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

export class ItemStopUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStopUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

/** Represents the type of an item - for example, Wool. */
export class ItemType {
    private constructor();
    /** @remarks Returns the identifier of the item type - for example, 'minecraft:apple'. */
    readonly id: string;
}

export class ItemUseAfterEvent {
    private constructor();
    itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

export class ItemUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseOnBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

/** Contains information related to changes to a lever activating or deactivating. */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks True if the lever is activated (that is, transmitting power). */
    readonly isPowered: boolean;
    /** @remarks Optional player that triggered the lever activation. */
    readonly player: Player;
}

/** Manages callbacks that are connected to lever moves (activates or deactivates). */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
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
     * @remarks Contains methods for manipulating the on-screen display of a Player.
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @remarks Gets the current spawn point of the player.
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks Plays a sound that only this particular player can hear.
     *
     * This function can't be called in read-only mode.
     *
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * // Get the player
     * const player = world.getAllPlayers()[0];
     *
     * player.playSound("bucket.fill_water", { pitch: 1.0, volume: 1.0 });
     * ```
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
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
    /**
     * @remarks Sets the current starting spawn point for this particular player.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * // Get the player
     * const player = world.getAllPlayers()[0];
     *
     * player.setSpawnPoint({
     *     x: 0,
     *     y: 60,
     *     z: 0,
     *     dimension: world.getDimension("the_end");
     * });
     * ```
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
}

/**
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that could be returned after the first time a player has spawned within the game.
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /** @remarks Opaque string identifier of the player that joined the game. */
    readonly playerId: string;
    /** @remarks Name of the player that has joined. */
    readonly playerName: string;
}

/** Manages callbacks that are connected to a player joining the world. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    private constructor();
}

/** Contains information regarding a player that has left the world. */
export class PlayerLeaveAfterEvent {
    private constructor();
    /** @remarks Opaque string identifier of the player that has left the event. */
    readonly playerId: string;
    /** @remarks Player that has left the world. */
    readonly playerName: string;
}

/** Manages callbacks that are connected to a player leaving the world. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

/** An event that contains more information about a player spawning. */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks If true, this is the initial spawn of a player after joining the game.
     *
     * This property can't be edited in read-only mode.
     */
    initialSpawn: boolean;
    /**
     * @remarks Object that represents the player that joined the game.
     *
     * This property can't be edited in read-only mode.
     */
    player: Player;
}

/** Registers an event when a player is spawned (or re-spawned after death) and fully ready within the world. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
}

export class PressurePlatePopAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class PressurePlatePushAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

export class Scoreboard {
    private constructor();
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId, 
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

/** Contains an identity of the scoreboard item. */
export class ScoreboardIdentity {
    private constructor();
    /** @remarks Returns the player-visible name of this identity. */
    readonly displayName: string;
    /** @remarks Identifier of the scoreboard identity. */
    readonly id: number;
    /** @remarks Type of the scoreboard identity. */
    readonly type: ScoreboardIdentityType;
    /**
     * @remarks If the scoreboard identity is an entity or player, returns the entity that this scoreboard item corresponds to.
     * @throws This function can throw errors.
     */
    getEntity(): Entity | undefined;
    /** @remarks Returns true if the ScoreboardIdentity reference is still valid. */
    isValid(): boolean;
}

export class ScoreboardObjective {
    private constructor();
    readonly displayName: string;
    readonly id: string;
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    getParticipants(): ScoreboardIdentity[];
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    getScores(): ScoreboardScoreInfo[];
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    isValid(): boolean;
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/** Contains a pair of a scoreboard participant and its respective score. */
export class ScoreboardScoreInfo {
    private constructor();
    /** @remarks This scoreboard participant for this score. */
    readonly participant: ScoreboardIdentity;
    /** @remarks Score value of the identity for this objective. */
    readonly score: number;
}

/** Contains information about user interface elements that are showing up on the screen. */
export class ScreenDisplay {
    private constructor();
    /** @remarks Returns true if the current reference to this screen display manager object is valid and functional. */
    isValid(): boolean;
    /**
     * @remarks Set the action bar text - a piece of text that displays beneath the title and above the hot-bar.
     *
     * This function can't be called in read-only mode.
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setActionBar("Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setActionBar({ rawtext: [{ text: "Hello World!" }] });
     * ```
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen display.
     * Will clear the title if set to empty string.
     * You can optionally specify an additional subtitle as well as fade in, stay and fade out times.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setTitle("Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setTitle({ rawtext: [{ text: "Hello World!" }] });
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks Updates the subtitle if the subtitle was previously displayed via the setTitle method.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setTitle("Get ready!", {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "10",
     * });
     * 
     * let countdown = 10;
     * let interval = system.runInterval(() => {
     *     countdown--;
     *     player.onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) system.clearRun(interval);
     * }, 20);
     * ```
     * @example
     * ```javascript
     * import { world, system } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setTitle({ rawtext: [{ text: "Get ready!" }] }, {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: { text: "10" },
     * });
     * 
     * let countdown = 10;
     * let interval = system.runInterval(() => {
     *     countdown--;
     *     player.onScreenDisplay.updateSubtitle({ rawtext: [{ text: countdown.toString() }] });
     *
     *     if (countdown == 0) system.clearRun(interval);
     * }, 20);
     * ```
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/** Returns additional data about a /scriptevent command invocation. */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /** @remarks Identifier of this ScriptEvent command message. */
    readonly id: string;
    /** @remarks If this command was initiated via an NPC, returns the entity that initiated the NPC dialogue. */
    readonly initiator?: Entity;
    /** @remarks Optional additional data passed in with the script event command. */
    readonly message: string;
    /** @remarks Source block if this command was triggered via a block (e.g., a commandblock.) */
    readonly sourceBlock?: Block;
    /** @remarks Source entity if this command was triggered by an entity (e.g., a NPC). */
    readonly sourceEntity?: Entity;
    /** @remarks Returns the type of source that fired this command. */
    readonly sourceType: ScriptEventSource;
}

/** Allows for registering an event handler that responds to inbound /scriptevent commands. */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks Registers a new ScriptEvent handler.
     *
     * This function can't be called in read-only mode. 
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageAfterEvent) => void, 
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks Unsubscribes a particular handler for a ScriptEvent event.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

/** A class that provides system-level events and functions. */
export class System {
    private constructor();
    /** @remarks Returns a collection of after-events for system-level operations. */
    readonly afterEvents: SystemAfterEvents;
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

/** Provides a set of events that fire within the broader scripting system within Minecraft. */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * An event that fires when a /scriptevent command is set.
     * This provides a way for commands and other systems to trigger behavior within script.
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/** Contains information related to changes to a target block hit. */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks The position where the source hit the block. */
    readonly hitVector: Vector3;
    /** @remarks The redstone power before the block is hit. */
    readonly previousRedstonePower: number;
    /** @remarks The redstone power at the time the block is hit. */
    readonly redstonePower: number;
    /** @remarks Optional source that hit the target block. */
    readonly source: Entity;
}

/** Manages callbacks that are connected to when a target block is hit. */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks Adds a callback that will be called when a target block is hit.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks Removes a callback from being called when a target block is hit.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

/** Contains information related to changes to a trip wire trip. */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks Whether or not the block has redstone power. */
    readonly isPowered: boolean;
    /** @remarks The sources that triggered the trip wire to trip. */
    readonly sources: Entity[];
}

/** Manages callbacks that are connected to when a trip wire is tripped. */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks Adds a callback that will be called when a trip wire is tripped.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /**
     * @remarks Removes a callback from being called when a trip wire is tripped.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

/** A class that wraps the state of a world - a set of dimensions and the environment of Minecraft. */
export class World {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety of the world.
     * Event callbacks are called in a deferred manner.
     * Event callbacks are executed in read-write mode.
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety of the world.
     * Event callbacks are called immediately.
     * Event callbacks are executed in read-only mode.
     */
    readonly beforeEvents: WorldBeforeEvents;
    /** @remarks Returns the general global scoreboard that applies to the world. */
    readonly scoreboard: Scoreboard;
    /** @remarks Returns the absolute time since the start of the world. */
    getAbsoluteTime(): number;
    /**
     * @remarks Returns an array of all active players within the world.
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @remarks Returns the current day.
     *
     * @returns
     * The current day, determined by the world time divided by the number of ticks per day.
     * New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @remarks Returns the default Overworld spawn location.
     *
     * @returns
     * The default Overworld spawn location.
     * By default, the Y coordinate is 32767, indicating a player's spawn height is not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
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
     * @remarks Returns the time of day.
     *
     * @returns The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /**
     * @remarks Plays a particular music track for all players.
     *
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * world.playMusic("record.otherside", { loop: true });
     * ```
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks Plays a sound for all players.
     *
     * This function can't be called in read-only mode.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * const location = { x: 0, y: 0, z: 0 };
     * world.playSound("bucket.fill_water", location, { pitch: 1.0, volume: 1.0 });
     * ```
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * Queues an additional music track for players.
     * If a track is not playing, a music track will play.
     *
     * This function can't be called in read-only mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     *
     * world.queueMusic("record.otherside", { loop: true });
     * ```
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
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
    /**
     * @remarks Sets the world time.
     *
     * This function can't be called in read-only mode.
     *
     * @param absoluteTime
     * The world time, in ticks.
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * world.setAbsoluteTime(0);
     * ```
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks Sets a default spawn location for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @param spawnLocation
     * Location of the spawn point. Note that this is assumed to be within the overworld dimension.
     * @throws Throws if the provided spawn location is out of bounds.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * world.setDefaultSpawnLocation({ x: 0, y: 4, z: 0 });
     * ```
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @remarks Sets the time of day.
     *
     * This function can't be called in read-only mode.
     *
     * @param timeOfDay
     * The time of day, in ticks, between 0 and 24000.
     * @throws Throws if the provided time of day is not within the valid range.
     * @example
     * ```javascript
     * import { world, TimeOfDay } from "@minecraft/server";
     *
     * world.setTimeOfDay(TimeOfDay.Noon);
     * ```
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @remarks Stops any music tracks from playing.
     *
     * This function can't be called in read-only mode.
     */
    stopMusic(): void;
}

/** Contains a set of events that are available across the scope of the World. */
export class WorldAfterEvents {
    private constructor();
    /** @remarks This event fires when a button is pushed. */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /** @remarks This event fires when an entity dies. */
    readonly entityDie: EntityDieAfterEventSignal;
    /** @remarks This event fires when entity health changes in any degree. */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /** @remarks This event fires when an entity hits (that is, melee attacks) a block. */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /** @remarks This event fires when an entity hits (that is, melee attacks) another entity. */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /** @remarks This event fires when an entity is hurt (takes damage). */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /** @remarks This event fires when a chargeable item completes charging. */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /** @remarks This event fires when a chargeable item is released from charging. */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /** @remarks This event fires when a chargeable item starts charging. */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button.
     * If multiple blocks are placed, this event will only occur once at the beginning of the block placement.
     * Note: This event cannot be used with Hoe or Axe items.
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /** @remarks This event fires when a chargeable item stops charging. */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place Block button after successfully using an item.
     * Note: This event cannot be used with Hoe or Axe items.
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /** @remarks This event fires when an item is successfully used by a player. */
    readonly itemUse: ItemUseAfterEventSignal;
    /** @remarks This event fires when an item is used on a block by a player. */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /** @remarks A lever has been pulled. */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.
     * See also playerSpawn for another related event you can trap for when a player is spawned the first time within a world.
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /** */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns.
     * Note that an additional flag within this event will tell you whether the player is spawning right after join vs. a respawn.
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /** @remarks A pressure plate has popped back up (i.e., there are no entities on the pressure plate.) */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /** @remarks A pressure plate has pushed (at least one entity has moved onto a pressure plate.) */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /** @remarks A target block was hit. */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /** @remarks A trip wire was tripped. */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
}

/**
 * A set of events that fire before an actual action occurs.
 * In most cases, you can potentially cancel or modify the impending event.
 * Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /** @remarks This event fires when an item is successfully used by a player. */
    readonly itemUse: ItemUseBeforeEventSignal;
    /** @remarks This event fires when an item is used on a block by a player. */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
}

/** Contains information for block raycast hit results. */
export interface BlockRaycastHit {
    /** @remarks Block that was hit. */
    block: Block,
    /** @remarks Face of the block that was hit. */
    face: Direction,
    /** @remarks Hit location relative to the bottom north-west corner of the block. */
    faceLocation: Vector3,
}

/** Contains additional options for configuring a block raycast query. */
export interface BlockRaycastOptions {
    /** @remarks If true, liquid blocks will be considered as blocks that 'stop' the raycast. */
    includeLiquidBlocks?: boolean,
    /** @remarks If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast. */
    includePassableBlocks?: boolean,
    /** @remarks Maximum distance, in blocks, to process the raycast. */
    maxDistance?: number,
}

/** An exact coordinate within the world, including its dimension and location. */
export interface DimensionLocation {
    /** @remarks Dimension that this coordinate is associated with. */
    dimension: Dimension,
    /** @remarks X component of this dimension-location. */
    x: number,
    /** @remarks Y component of this dimension-location. */
    y: number,
    /** @remarks Z component of this dimension-location. */
    z: number,
}

/** Additional options for when damage has been applied via a projectile. */
export interface EntityApplyDamageByProjectileOptions {
    /** @remarks Optional entity that fired the projectile. */
    damagingEntity?: Entity,
    /** @remarks Projectile that caused damage. */
    damagingProjectile: Entity,
}

/** Additional descriptions and metadata for a damage event. */
export interface EntityApplyDamageOptions {
    /** @remarks Underlying cause of the damage. */
    cause: EntityDamageCause,
    damagingEntity?: Entity,
}

/** Provides information about how damage has been applied to an entity. */
export interface EntityDamageSource {
    /** @remarks Cause enumeration of damage. */
    cause: EntityDamageCause,
    /** @remarks Optional entity that caused the damage. */
    damagingEntity?: Entity,
    /** @remarks Optional projectile that may have caused damage. */
    damagingProjectile?: Entity,
}

/** Contains additional options for entity effects. */
export interface EntityEffectOptions {
    /** @remarks The strength of the effect. */
    amplifier?: number,
    /** @remarks If true, will show particles when effect is on the entity. */
    showParticles?: boolean,
}

/** Contains optional parameters for registering an entity event. */
export interface EntityEventOptions {
    /** @remarks If this value is set, this event will only fire for entities that match the entities within this collection. */
    entities?: Entity[],
    /** @remarks If this value is set, this event will only fire if the impacted entities' type matches this parameter. */
    entityTypes?: string[],
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

/** Contains information for entity raycast hit results. */
export interface EntityRaycastHit {
    /** @remarks Distance from ray origin to entity bounds. */
    distance: number,
    /** @remarks Entity that was hit. */
    entity: Entity,
}

/** Contains additional options for an entity raycast operation. */
export interface EntityRaycastOptions {
    /** @remarks Maximum distance, in blocks, to process the raycast. */
    maxDistance?: number,
}

/** Additional configuration options for {@link World.playMusic}/{@link World.queueMusic} methods. */
export interface MusicOptions {
    /** @remarks Specifies a fade overlap for music at the end of play. */
    fade?: number,
    /** @remarks If set to true, this music track will play repeatedly. */
    loop?: boolean,
    /** @remarks Relative volume level of the music. */
    volume?: number,
}

/** Additional options for how a sound plays for a player. */
export interface PlayerSoundOptions {
    /** @remarks Location of the sound; if not specified, the sound is played near a player. */
    location?: Vector3,
    /** @remarks Optional pitch of the sound. */
    pitch?: number,
    /** @remarks Optional volume of the sound. */
    volume?: number,
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

/** Contains additional options for how a scoreboard should be displayed within its display slot. */
export interface ScoreboardObjectiveDisplayOptions {
    /** @remarks Objective to be displayed. */
    objective: ScoreboardObjective,
    /** @remarks The sort order to display the objective items within. */
    sortOrder?: ObjectiveSortOrder,
}

/** Contains additional options for registering a script event event callback. */
export interface ScriptEventMessageFilterOptions {
    /** @remarks Optional list of namespaces to filter inbound script event messages. */
    namespaces: string[],
}

/** Contains additional options for teleporting an entity. */
export interface TeleportOptions {
    /** @remarks Whether to check whether blocks will block the entity after teleport. */
    checkForBlocks?: boolean,
    /**
     * @remarks
     * Dimension to potentially move the entity to.
     * If not specified, the entity is teleported within the dimension that they reside.
     */
    dimension?: Dimension,
    /** @remarks Location that the entity should be facing after teleport. */
    facingLocation?: Vector3,
    /** @remarks Whether to retain the entities velocity after teleport. */
    keepVelocity?: boolean,
    /** @remarks Rotation of the entity after teleport. */
    rotation?: Vector2,
}

/** Contains additional options for displaying a title and optional subtitle. */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * Fade-in duration for the title and subtitle, in ticks.
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     */
    fadeInDuration: number,
    /**
     * @remarks
     * Fade-out time for the title and subtitle, in ticks.
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     */
    fadeOutDuration: number,
    /**
     * @remarks
     * Amount of time for the title and subtitle to stay in place, in ticks.
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     */
    stayDuration: number,
    /** @remarks Optional subtitle text. */
    subtitle?: (RawMessage | string)[] | RawMessage | string,
}

/** Represents a two-directional vector. */
export interface Vector2 {
    /** @remarks X component of the two-dimensional vector. */
    x: number,
    /** @remarks Y component of the two-dimensional vector. */
    y: number,
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

/** Contains additional options for a world-level playSound occurrence. */
export interface WorldSoundOptions {
    /** @remarks Pitch of the sound played at the world level. */
    pitch?: number,
    /** @remarks Relative volume and space by which this sound is heard. */
    volume?: number,
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
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