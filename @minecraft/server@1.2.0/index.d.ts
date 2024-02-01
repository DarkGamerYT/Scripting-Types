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
 *     "version": "1.2.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
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

/** Base type for components associated with blocks. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
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
     * Kills this entity.
     * The entity will drop loot as normal.
     *
     * This function can't be called in read-only mode.
     *
     * @returns Returns true if entity can be killed (even if it is already dead), otherwise it returns false.
     * @throws This function can throw errors.
     */
    kill(): boolean;
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

/** Base class for item components. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
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
}

/** Represents the type of an item - for example, Wool. */
export class ItemType {
    private constructor();
    /** @remarks Returns the identifier of the item type - for example, 'minecraft:apple'. */
    readonly id: string;
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
     * @remarks Stops any music tracks from playing.
     *
     * This function can't be called in read-only mode.
     */
    stopMusic(): void;
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