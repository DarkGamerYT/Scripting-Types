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
 *     "version": "1.7.0"
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

export enum EasingType {
    InBack = "InBack",
    InBounce = "InBounce",
    InCirc = "InCirc",
    InCubic = "InCubic",
    InElastic = "InElastic",
    InExpo = "InExpo",
    InOutBack = "InOutBack",
    InOutBounce = "InOutBounce",
    InOutCirc = "InOutCirc",
    InOutCubic = "InOutCubic",
    InOutElastic = "InOutElastic",
    InOutExpo = "InOutExpo",
    InOutQuad = "InOutQuad",
    InOutQuart = "InOutQuart",
    InOutQuint = "InOutQuint",
    InOutSine = "InOutSine",
    InQuad = "InQuad",
    InQuart = "InQuart",
    InQuint = "InQuint",
    InSine = "InSine",
    Linear = "Linear",
    OutBack = "OutBack",
    OutBounce = "OutBounce",
    OutCirc = "OutCirc",
    OutCubic = "OutCubic",
    OutElastic = "OutElastic",
    OutExpo = "OutExpo",
    OutQuad = "OutQuad",
    OutQuart = "OutQuart",
    OutQuint = "OutQuint",
    OutSine = "OutSine",
    Spring = "Spring",
}

/** Describes the source of damage from an Entity. */
export enum EntityDamageCause {
    /** 
     * @remarks Damage caused by a falling anvil.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    anvil = "anvil",
    /** 
     * @remarks Damage caused from a non-Entity explosion. For example, an exploding bed.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    blockExplosion = "blockExplosion",
    campfire = "campfire",
    /** 
     * @remarks Unused.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    charging = "charging",
    /** 
     * @remarks Damage caused by physically touching an Entity or Block. For example, touching a Sweet Berry bush or Pufferfish.
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
     * @remarks Damage caused by an Entity explosion. For example, a Creeper or Wither.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    entityExplosion = "entityExplosion",
    /** @remarks Damage caused by falling onto the ground. */
    fall = "fall",
    /** 
     * @remarks Damage caused by falling blocks. Note: Anvils and Stalactites have their own damage causes.
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
    /** @remarks Damage caused by magical attacks. For example, Evoker Fang or Conduit Block. */
    magic = "magic",
    /** 
     * @remarks Damage caused by touching a Magma block.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    magma = "magma",
    /** 
     * @remarks Damage caused by no source. For example, from a command or script.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    none = "none",
    /** @remarks Damage caused by an indirect source. For example, setting a mob's health to 0 in a behavior pack. */
    override = "override",
    /** 
     * @remarks Damage caused by a Piston.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    piston = "piston",
    /** @remarks Damage caused by a projectile. */
    projectile = "projectile",
    ramAttack = "ramAttack",
    selfDestruct = "selfDestruct",
    sonicBoom = "sonicBoom",
    soulCampfire = "soulCampfire",
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
    /** @remarks Damage caused by an Entity killing itself. For example, from the /kill command. */
    suicide = "suicide",
    /** 
     * @remarks Damage caused by an Entity being in an inhabitable climate. For example, a Snow Golem in a biome with a temperature greater than 1.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    temperature = "temperature",
    /** 
     * @remarks Damage caused by the Thorns armor enchantment and by the Guardian thorns effect.
     * 
     * Note that when used in {@link Entity.applyDamage}, the armor will be damaged.
     */
    thorns = "thorns",
    /** @remarks Damage caused over time by falling into the void. */
    void = "void",
    /** @remarks Damage caused by the Wither effect. For example, from touching a Wither Rose. */
    wither = "wither",
}

/** An enumeration describing initialization cause of an entity. */
export enum EntityInitializationCause {
    /** 
     * @remarks
     * Case when an entity is created as child of other entity or entities,
     * e.g., cows making a cow or slimes making smaller slimes after dying.
     */
    Born = "Born",
    /** @remarks Case when an entity is created by an event, e.g., Wandering trader spawning llamas. */
    Event = "Event",
    /** @remarks Case when an entity is loaded into the world. */
    Loaded = "Loaded",
    /** @remarks Case when an entity is naturally spawned in the world. */
    Spawned = "Spawned",
    /** @remarks Case when an entity is transformed into another entity. */
    Transformed = "Transformed",
}

/** The equipment slot of the mob, this includes armor, offhand and mainhand slots. */
export enum EquipmentSlot {
    /** @remarks The chest slot. This slot is used to hold items such as Chestplate or Elytra. */
    Chest = "Chest",
    /** @remarks The feet slot. This slot is used to hold items such as Boots. */
    Feet = "Feet",
    /** @remarks The head slot. This slot is used to hold items such as Helmets or Carved Pumpkins. */
    Head = "Head",
    /** @remarks The legs slot. This slot is used to hold items such as Leggings. */
    Legs = "Legs",
    /** @remarks The mainhand slot. For players, the mainhand slot refers to the currently active hotbar slot. */
    Mainhand = "Mainhand",
    /** @remarks The offhand slot. This slot is used to hold items such as shields and maps. */
    Offhand = "Offhand",
}

/** Represents a game mode for the current world experience. */
export enum GameMode {
    /** @remarks World is in a more locked-down experience, where blocks may not be manipulated. */
    adventure = "adventure",
    /** 
     * @remarks World is in a full creative mode.
     * In creative mode, the player has all the resources available in the item selection tabs and the survival selection tab.
     * They can also destroy blocks instantly including those which would normally be indestructible.
     * Command and structure blocks can also be used in creative mode. Items also do not lose durability or disappear.
     */
    creative = "creative",
    /** 
     * @remarks World is in spectator mode.
     * In spectator mode, spectators are always flying and cannot become grounded.
     * Spectators can pass through solid blocks and entities without any collisions, and cannot use items or interact with blocks or mobs.
     * Spectators cannot be seen by mobs or other players, except for other spectators; spectators appear as a transparent floating head.
     */
    spectator = "spectator",
    /** 
     * @remarks World is in a survival mode
     * In survival mode, players can take damage and entities may not be peaceful.
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
 * Enum containing the different phases of the moon based on the current day.
 * Obtain the current MoonPhase using {@link World.getMoonPhase}.
 * 
 * The fullness of the moon controls various mob behaviors such as the number of slimes that spawn in Swamp biomes,
 * the chance skeletons and zombies have to spawn with armor, as well as the chance for spiders to spawn with certain status effects.
 */
export enum MoonPhase {
    /** @remarks The brightest moon phase. During this phase, cats have a 50% chance of spawning as black cats. */
    FullMoon = 0,
    /** @remarks The phase following the Full Moon. */
    WaningGibbous = 1,
    /** @remarks The phase following the Waxing Crescent. */
    FirstQuarter = 2,
    /** @remarks The phase following the Last Quarter. */
    WaningCrescent = 3,
    /** @remarks The darkest moon phase. */
    NewMoon = 4,
    /** @remarks The phase following the New Moon. */
    WaxingCrescent = 5,
    /** @remarks The phase following the Waning Gibbous. */
    LastQuarter = 6,
    /** @remarks The phase following the First Quarter. */
    WaxingGibbous = 7,
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
    /** @remarks This scoreboard participant is tied to a pseudo player entity - typically this is used to store scores as data or as abstract progress. */
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
    /** @remarks Sets the time to noon, which is time of the day 6,000 in Minecraft. */
    Noon = 6000,
    /** @remarks Sets the time to sunset, which is time of the day 12,000 (or the equivalent of 6pm) in Minecraft. */
    Sunset = 12000,
    /** @remarks Sets the time to night, which is time of the day 13,000 (or the equivalent of 7:00pm) in Minecraft. */
    Night = 13000,
    /** @remarks Sets the time to midnight, which is time of the day 18,000 (or the equivalent of 12:00am) in Minecraft. */
    Midnight = 18000,
    /** @remarks Sets the time to sunrise, which is time of the day 23,000 (or the equivalent of 5am) in Minecraft. */
    Sunrise = 23000,
}

/** Used to specify the type of weather condition within the world. */
export enum WeatherType {
    /** @remarks Specifies a clear weather condition. */
    Clear = "Clear",
    /** @remarks Specifies a rain weather condition. */
    Rain = "Rain",
    /** @remarks Specifies a rain and thunder weather condition. */
    Thunder = "Thunder",
}

/** 
 * Represents a block in a dimension.
 * A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location.
 */
export class Block {
    private constructor();
    /** @remarks Returns the dimension that the block is within. */
    readonly dimension: Dimension;
    /** 
     * @remarks Returns true if this block is an air block (i.e., empty space).
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /** 
     * @remarks Returns true if this block is a liquid block - (e.g., a water block and a lava block are liquid, while an air block and a stone block are not. Water logged blocks are not liquid blocks).
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
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
     * @remarks Returns the {@link Block} above this block (positive in the Y direction).
     * @param steps Number of steps above to step before returning.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /** 
     * @remarks Returns the {@link Block} below this block (negative in the Y direction).
     * @param steps Number of steps below to step before returning.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    /** @remarks Returns the {@link Vector3} of the center of this block on the X and Z axis. */
    bottomCenter(): Vector3;
    /** @remarks Returns the {@link Vector3} of the center of this block on the X, Y, and Z axis. */
    center(): Vector3;
    /** 
     * @remarks Returns the {@link Block} east this block (positive in the X direction).
     * @param steps Number of steps east to step before returning.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /** 
     * @remarks Gets a component (that represents additional capabilities) for a block - for example, an inventory component of a chest block.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:inventory'). If no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link BlockComponentTypes} enum.
     * @returns Returns the component if it exists on the block, otherwise undefined.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world, ItemStack, BlockInventoryComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const container = block.getComponent(BlockInventoryComponent.componentId).container;
     * 
     * container.addItem(new ItemStack("minecraft:dirt"));
     * ```
     * @example
     * ```javascript
     * import { world, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * signComponent.setText("Hello! :D");
     * ```
     */
    getComponent(componentId: string): BlockComponent | undefined;
    /** 
     * @remarks Checks if this reference to a block is still valid (for example, if the block is unloaded, references to that block will no longer be valid.)
     * @returns True if this block object is still working and valid.
     */
    isValid(): boolean;
    /** 
     * @remarks Returns the {@link Block} north this block (negative in the Z direction).
     * @param steps Number of steps north to step before returning.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /** 
     * @remarks Returns a block at an offset relative vector to this block.
     * @param offset The offset vector. For example, an offset of 0, 1, 0 will
     * @returns Block at the specified offset, or undefined if that block could not be retrieved (for example, the block and its relative chunk is not loaded yet.)
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /** 
     * @remarks Sets the block in the dimension to the state of the permutation.
     * 
     * This function can't be called in read-only mode.
     * @param permutation Permutation that contains a set of property states for the Block.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world, BlockPermutation } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * block.setPermutation(BlockPermutation.resolve("minecraft:dirt"));
     * ```
     */
    setPermutation(permutation: BlockPermutation): void;
    /** 
     * @remarks Returns the {@link Block} south this block (positive in the Z direction).
     * @param steps Number of steps south to step before returning.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /** 
     * @remarks Returns the {@link Block} west this block (negative in the X direction).
     * @param steps Number of steps west to step before returning.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
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

/** Represents the inventory of a block in the world. Used with blocks like chests. */
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
     * @param blockName An optional set of states to compare against.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
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
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const permutation = block.permutation;
     * 
     * const matches = permutation.matches("minecraft:oak_log", { direction: 1 });
     * console.warn(`Block matches: ${matches}`);
     * ```
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /** 
     * @remarks Given a type identifier and an optional set of properties, will return a BlockPermutation object that is usable in other block APIs (e.g., {@link Block.setPermutation})
     * @param blockName Identifier of the block to check.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, system, TicksPerSecond, BlockPermutation } from "@minecraft/server";
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
     * }, 1 * TicksPerSecond);
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

/** Contains methods relating to the active camera for the specified player. */
export class Camera {
    private constructor();
    /** 
     * @remarks
     * Clears the active camera for the specified player.
     * Causes the specified players to end any in-progress camera perspectives, including any eased camera motions, and return to their normal perspective.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clear(): void;
    /** 
     * @remarks
     * Begins a camera fade transition.
     * A fade transition is a full-screen color that fades-in, holds, and then fades-out.
     * 
     * This function can't be called in read-only mode.
     * @param fadeCameraOptions Additional options around camera fade operations.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.camera.fade({
     *     fadeColor: { red: 0.0, green: 0.0, blue: 0.0 },
     *     fadeTime: {
     *         fadeInTime: 0.25,
     *         holdTime: 1.5,
     *         fadeOutTime: 0.25,
     *     },
     * });
     * ```
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /** 
     * @remarks Sets the current active camera for the specified player.
     * 
     * This function can't be called in read-only mode.
     * @param cameraPreset Identifier of a camera preset file defined within JSON.
     * @param setOptions Additional options for the camera.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, system, EasingType } from "@minecraft/server";
     * 
     * // Runs every tick
     * system.runInterval(() => {
     *     // Gets all players
     *     const players = world.getAllPlayers();
     * 
     *     // Loops all players
     *     for (let i = 0; i < players.length; i++) {
     *         const player = players[i];
     *         // Sets the camera for the player to 'minecraft:free' with custom options
     *         player.camera.setCamera("minecraft:free", {
     *             easeOptions: {
     *                 easeTime: 0.75,
     *                 easeType: EasingType.Linear,
     *             },
     *             location: {
     *                 x: player.location.x - 4,
     *                 y: player.location.y + 8,
     *                 z: player.location.z - 4,
     *             },
     *             rotation: {
     *                 x: 60,
     *                 y: -135,
     *             },
     *         });
     *     };
     * });
     * ```
     */
    setCamera(
        cameraPreset: string,
        setOptions?: 
            | CameraDefaultOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions,
    ): void;
}

/** Contains return data on the result of a command execution. */
export class CommandResult {
    private constructor();
    /** @remarks If the command operates against a number of entities, blocks, or items, this returns the number of successful applications of this command. */
    readonly successCount: number;
}

/** Base class for downstream Component implementations. */
export class Component {
    private constructor();
    /** @remarks Identifier of the component. */
    readonly typeId: string;
    /** 
     * @remarks A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.
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
     * @param itemStack The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /** 
     * @remarks Clears all inventory items in the container.
     * 
     * This function can't be called in read-only mode.
     * @throws Throws if the container is invalid.
     */
    clearAll(): void;
    /** 
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`.
     * This method does not change or clear the contents of the specified slot. To get a reference to a particular slot, see {@link Container.getSlot}.
     * @param slot Zero-based index of the slot to retrieve items from.
     * @throws Throws if the container is invalid or if the `slot` index is out of bounds.
     */
    getItem(slot: number): ItemStack | undefined;
    /** @remarks Returns whether a container object (or the entity or block that this container is associated with) is still available for use in this context. */
    isValid(): boolean;
    /** 
     * @remarks Moves an item from one slot to another, potentially across containers.
     * 
     * This function can't be called in read-only mode.
     * @param fromSlot Zero-based index of the slot to transfer an item from, on this container.
     * @param toSlot Zero-based index of the slot to transfer an item to, on `toContainer`.
     * @param toContainer Target container to transfer to. Note this can be the same container as the source.
     * @throws Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /** 
     * @remarks Sets an item stack within a particular slot.
     * 
     * This function can't be called in read-only mode.
     * @param slot Zero-based index of the slot to set an item at.
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
     * @param slot Zero-based index of the slot to swap from this container.
     * @param otherSlot Zero-based index of the slot to swap with.
     * @param otherContainer Target container to swap with. Note this can be the same container as this source.
     * @throws Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /** 
     * @remarks Moves an item from one slot to another container, or to the first available slot in the same container.
     * 
     * This function can't be called in read-only mode.
     * @param fromSlot Zero-based index of the slot to transfer an item from, on this container.
     * @param toContainer Target container to transfer to. Note this can be the same container as the source.
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
    /** 
     * @remarks Height range of the dimension.
     * @throws This property can throw when used.
     */
    readonly heightRange: minecraftcommon.NumberRange;
    /** @remarks Identifier of the dimension. */
    readonly id: string;
    /** 
     * @remarks Returns a block instance at the given location.
     * @param location The location at which to return a block.
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
     * @param location Location from where to initiate the ray check.
     * @param direction Vector direction to cast the ray.
     * @param options Additional options for processing this raycast query.
     * @throws This function can throw errors.
     * 
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
     * @param options Additional options that can be used to filter the set of entities returned.
     * @returns An entity array.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const entities = overworld.getEntities({ type: "minecraft:pig" });
     * console.warn(`Entities: ${entities.length}`);
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /** 
     * @remarks Returns a set of entities at a particular location.
     * @param location The location at which to return entities.
     * @returns Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /** 
     * @remarks Gets entities that intersect with a specified vector emanating from a location.
     * @param options Additional options for processing this raycast query.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /** 
     * @remarks Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
     * @param options Additional options that can be used to filter the set of players returned.
     * @returns A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /** 
     * @remarks Runs a command synchronously using the context of the broader dimenion.
     * 
     * This function can't be called in read-only mode.
     * @param commandString Command to run. Note that command strings should not start with slash.
     * @returns Returns a command result with a count of successful values from the command.
     * @throws
     * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command.
     * Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
     * 
     * {@link CommandError}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const command = overworld.runCommand("say Hello World!");
     * console.warn(`Success count: ${command.successCount}`);
     * ```
     */
    runCommand(commandString: string): CommandResult;
    /** 
     * @remarks Runs a particular command asynchronously from the context of the broader dimension.
     * Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
     * @param commandString Command to run. Note that command strings should not start with slash.
     * @returns For commands that return data, returns a CommandResult with an indicator of command results.
     * @throws
     * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command.
     * Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * overworld.runCommandAsync("say Hello World!").then((command) => {
     *     console.warn(`Success count: ${command.successCount}`);
     * });
     * ```
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /** 
     * @remarks Sets the current weather within the dimension
     * 
     * This function can't be called in read-only mode.
     * @param weatherType Set the type of weather to apply.
     * @param duration
     * Sets the duration of the weather (in ticks).
     * If no duration is provided, the duration will be set to a random duration between 300 and 900 seconds.
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /** 
     * @remarks Creates a new entity (e.g., a mob) at the specified location.
     * 
     * This function can't be called in read-only mode.
     * @identifier Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.
     * @location The location at which to create the entity.
     * @returns Newly created entity at the specified location.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /** 
     * @remarks Creates a new itemstack as an entity at the specified location.
     * 
     * This function can't be called in read-only mode.
     * @param location The location at which to create the item stack.
     * @returns Newly created itemstack entity at the specified location.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
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
    /** 
     * @remarks Creates a new particle emitter at a specified location in the world.
     * 
     * This function can't be called in read-only mode.
     * @param effectName Identifier of the particle to create.
     * @param location The location at which to create the particle emitter.
     * @param molangVariables A set of optional, customizable variables that can be adjusted for this particle.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world, MolangVariableMap } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const molang = new MolangVariableMap();
     * molang.setColorRGB("variable.color", {
     *     red: Math.random(),
     *     green: Math.random(),
     *     blue: Math.random(),
     *     alpha: 1
     * });
     * 
     * overworld.spawnParticle("minecraft:colored_flame_particle", { x: 1, y: 2, z: 3 }, molang);
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
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
     * 
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
     * Unique identifier of the entity. This identifier is intended to be consistent across loads of a world instance.
     * 
     * No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it.
     * This property is accessible even if {@link Entity.isValid} is false.
     */
    readonly id: string;
    /** 
     * @remarks
     * Whether the entity is touching a climbable block.
     * For example, a player next to a ladder or a spider next to a stone wall.
     * @throws This property can throw when used.
     */
    readonly isClimbing: boolean;
    /** 
     * @remarks Whether the entity has a fall distance greater than 0, or greater than 1 while gliding.
     * @throws This property can throw when used.
     */
    readonly isFalling: boolean;
    /** 
     * @remarks Whether any part of the entity is inside a water block.
     * @throws This property can throw when used.
     */
    readonly isInWater: boolean;
    /** 
     * @remarks Whether the entity is on top of a solid block.
     * @throws This property can throw when used.
     */
    readonly isOnGround: boolean;
    /** 
     * @remarks If true, the entity is currently sleeping.
     * @throws This property can throw when used.
     */
    readonly isSleeping: boolean;
    /** 
     * @remarks Whether the entity is sneaking - that is, moving more slowly and more quietly.
     * 
     * This property can't be edited in read-only mode.
     */
    isSneaking: boolean;
    /** 
     * @remarks
     * Whether the entity is sprinting.
     * For example, a player using the sprint action, an ocelot running away or a pig boosting with Carrot on a Stick.
     * @throws This property can throw when used.
     */
    readonly isSprinting: boolean;
    /** 
     * @remarks
     * Whether the entity is in the swimming state.
     * For example, a player using the swim action or a fish in water.
     * @throws This property can throw when used.
     */
    readonly isSwimming: boolean;
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
    /** @remarks Returns a scoreboard identity that represents this entity. Will remain valid when the entity is killed. */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /** 
     * @remarks
     * Identifier of the type of the entity - for example, 'minecraft:skeleton'.
     * This property is accessible even if {@link Entity.isValid} is false.
     */
    readonly typeId: string;
    /** 
     * @remarks Adds or updates an effect, like poison, to the entity.
     * 
     * This function can't be called in read-only mode.
     * @param effectType Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * 
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     * 
     * The value must be within the range [0, 20000000].
     * @param options Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated successfully.
     * This can throw an error if the duration or amplifier are outside of the valid ranges, or if the effect does not exist.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const fox = overworld.spawnEntity("minecraft:fox", location);
     * fox.addEffect("speed", 10, { amplifier: 2 });
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void;
    /** 
     * @remarks Adds a specified tag to an entity.
     * 
     * This function can't be called in read-only mode.
     * @param tag Content of the tag to add. The tag must be less than 256 characters.
     * @returns
     * Returns true if the tag was added successfully.
     * This can fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const mobs = [ "minecraft:creeper", "minecraft:skeleton", "minecraft:sheep" ];
     * 
     * // Create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *     const mobTypeId = mobs[i % mobs.length];
     *     const location = { x: 1, y: 2, z: 3 };
     * 
     *     const entity = overworld.spawnEntity(mobTypeId, location);
     *     entity.addTag("mobparty." + mobTypeId.replace("minecraft:", ""));
     * };
     * 
     * const entities = overworld.getEntities({ tags: [ "mobparty.skeleton" ] });
     * for (const entity of entities) entity.kill();
     * ```
     */
    addTag(tag: string): boolean;
    /** 
     * @remarks Applies a set of damage to an entity.
     * 
     * This function can't be called in read-only mode.
     * @param amount Amount of damage to apply.
     * @param options Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity.
     * @returns
     * Whether the entity takes any damage.
     * This can return false if the entity is invulnerable or if the damage applied is less than or equal to 0.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const skelly = overworld.spawnEntity("minecraft:skeleton", location);
     * skelly.applyDamage(19); // Skeletons have max damage of 20 so this is a near-death skeleton
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /** 
     * @remarks Applies impulse vector to the current velocity of the entity.
     * 
     * This function can't be called in read-only mode.
     * @param vector Impulse vector.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const zombie = overworld.spawnEntity("minecraft:zombie", location);
     * zombie.clearVelocity();
     * zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); // Throws the zombie up in the air
     * ```
     */
    applyImpulse(vector: Vector3): void;
    /** 
     * @remarks Applies impulse vector to the current velocity of the entity.
     * 
     * This function can't be called in read-only mode.
     * @param directionX X direction in horizontal plane.
     * @param directionZ Z direction in horizontal plane.
     * @param horizontalStrength Knockback strength for the horizontal vector.
     * @param verticalStrength Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const mobs = [ "minecraft:creeper", "minecraft:skeleton", "minecraft:sheep" ];
     * 
     * // create some sample mob data
     * for (let i = 0; i < 10; i++) {
     *     const mobTypeId = mobs[i % mobs.length];
     *     const location = { x: 1, y: 2, z: 3 };
     *     overworld.spawnEntity(mobTypeId, location);
     * };
     * 
     * const entities = overworld.getEntities({ type: "skeleton" });
     * for (const entity of entities) {
     *     entity.applyKnockback(0, 0, 0, 1);
     * };
     * ```
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /** 
     * @remarks Clears all dynamic properties that have been set on this entity.
     * @throws This function can throw errors.
     */
    clearDynamicProperties(): void;
    /** 
     * @remarks
     * Sets the current velocity of the Entity to zero.
     * Note that this method may not have an impact on Players.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearVelocity(): void;
    /** 
     * @remarks Returns the first intersecting block from the direction that this entity is looking at.
     * @param options Additional configuration options for the ray cast.
     * @returns Returns the first intersecting block from the direction that this entity is looking at.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const raycast = player.getBlockFromViewDirection({ maxDistance: 8 });
     * const block = raycast?.block;
     * if (block !== undefined) {
     *     console.warn(`Block: ${block.typeId}`);
     * };
     * ```
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /** 
     * @remarks Gets a component (that represents additional capabilities) for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:health'). If no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link EntityComponentTypes} enum.
     * @returns Returns the component if it exists on the entity, otherwise undefined.
     * 
     * @example
     * ```javascript
     * import { world, ItemStack, EntityInventoryComponent } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const inventory = player.getComponent(EntityInventoryComponent.componentId);
     * const container = inventory.container;
     * 
     * const itemStack = new ItemStack("minecraft:dirt");
     * container.addItem(itemStack);
     * container.setItem(8, itemStack);
     * ```
     * @example
     * ```javascript
     * import { world, EntityHealthComponent } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const skelly = overworld.spawnEntity("minecraft:skeleton", location);
     * const health = skelly.getComponent(EntityHealthComponent.componentId);
     * 
     * // Resets health to it's default value
     * health.resetToDefaultValue();
     * 
     * // Sets the entity's health to 1
     * health.setCurrentValue(1);
     * ```
     */
    getComponent(componentId: string): EntityComponent | undefined;
    /** @remarks Returns all components that are both present on this entity and supported by the API. */
    getComponents(): EntityComponent[];
    /** 
     * @remarks Returns a property value.
     * @param identifier The property identifier.
     * @returns Returns the value for the property, or undefined if the property has not been set.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the property value
     * const value = player.getDynamicProperty("test");
     * console.warn(`Dynamic Property value: ${value}`);
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /** 
     * @remarks Returns the available set of dynamic property identifiers that have been used on this entity.
     * @returns A string array of the dynamic properties set on this entity.
     * @throws This function can throw errors.
     */
    getDynamicPropertyIds(): string[];
    /** 
     * @remarks
     * Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.
     * This includes the size of both the key and the value.
     * This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.
     * @throws This function can throw errors.
     */
    getDynamicPropertyTotalByteCount(): number;
    /** 
     * @remarks Returns the effect for the specified EffectType on the entity, undefined if the effect is not present, or throws an error if the effect does not exist.
     * @param effectType The effect identifier.
     * @returns Effect object for the specified effect, undefined if the effect is not present, or throws an error if the effect does not exist.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, TicksPerSecond } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const skelly = overworld.spawnEntity("minecraft:skeleton", location);
     * skelly.addEffect("speed", 5 * TicksPerSecond, { amplifier: 2 });
     * 
     * const effect = skelly.getEffect("speed");
     * console.warn(`Effect: ${effect.displayName} ${effect.amplifier} - ${effect.duration / TicksPerSecond}s left`);
     * ```
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /** 
     * @remarks Returns a set of effects applied to this entity.
     * @returns List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /** 
     * @remarks Gets the entities that this entity is looking at by performing a ray cast from the view of this entity.
     * @param options Additional configuration options for the ray cast.
     * @returns Returns a set of entities from the direction that this entity is looking at.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /** 
     * @remarks Returns the current location of the head component of this entity.
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /** 
     * @remarks
     * Gets an entity Property value.
     * If the property was set using the {@link Entity.setProperty} function within the same tick, the updated value will not be reflected until the subsequent tick.
     * @param identifier The entity Property identifier.
     * @returns
     * Returns the current property value.
     * For enum properties, a string is returned.
     * For float and int properties, a number is returned.
     * For undefined properties, undefined is returned.
     * @throws Throws if the entity is invalid.
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /** 
     * @remarks Returns the current rotation component of this entity.
     * @throws This function can throw errors.
     */
    getRotation(): Vector2;
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
     * @param componentId The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /** 
     * @remarks Returns whether an entity has a particular tag.
     * @param tag Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /** 
     * @remarks
     * Returns whether the entity can be manipulated by script.
     * A Player is considered valid when it's {@link EntityLifetimeState} is set to Loaded.
     * @returns Whether the entity is valid.
     */
    isValid(): boolean;
    /** 
     * @remarks Kills this entity. The entity will drop loot as normal.
     * 
     * This function can't be called in read-only mode.
     * @remarks Returns true if entity can be killed (even if it is already dead), otherwise it returns false.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    kill(): boolean;
    /** 
     * @remarks
     * Matches the entity against the passed in options.
     * Uses the location of the entity for matching if the location is not specified in the passed in {@link EntityQueryOptions}.
     * @param options The query to perform the match against.
     * @returns Returns true if the entity matches the criteria in the passed in {@link EntityQueryOptions}, otherwise it returns false.
     * @throws Throws if the query options are misconfigured.
     */
    matches(options: EntityQueryOptions): boolean;
    /** 
     * @remarks
     * Immediately removes the entity from the world.
     * The removed entity will not perform a death animation or drop loot upon removal.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    remove(): void;
    /** 
     * @remarks Removes the specified {@link EffectType} on the entity, or returns false if the effect is not present.
     * 
     * This function can't be called in read-only mode.
     * @param effectType The effect identifier.
     * @returns Returns true if the effect has been removed, otherwise false if the effect is not found or does not exist.
     * @throws This function can throw errors.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /** 
     * @remarks Removes a specified tag from an entity.
     * 
     * This function can't be called in read-only mode.
     * @param tag Content of the tag to remove.
     * @returns Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /** 
     * @remarks
     * Resets an Entity Property back to its default value, as specified in the Entity's definition.
     * This property change is not applied until the next tick.
     * 
     * This function can't be called in read-only mode.
     * @param identifier The Entity Property identifier.
     * @returns
     * Returns the default property value.
     * For enum properties, a string is returned.
     * For float and int properties, a number is returned.
     * For undefined properties, undefined is returned.
     * @throws Throws if the entity is invalid.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     */
    resetProperty(identifier: string): boolean | number | string;
    /** 
     * @remarks Runs a synchronous command on the entity.
     * 
     * This function can't be called in read-only mode.
     * @param commandString The command string.
     * @returns A command result containing whether the command was successful.
     * @throws This function can throw errors.
     * 
     * {@link CommandError}
     * 
     * {@link Error}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const command = player.runCommand("say Hello World!");
     * console.warn(`Success count: ${command.successCount}`);
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const entity = world.getDimension("overworld").getEntities()[0];
     * 
     * const command = entity.runCommand("say Hello World!");
     * console.warn(`Success count: ${command.successCount}`);
     * ```
     */
    runCommand(commandString: string): CommandResult;
    /** 
     * @remarks
     * Runs a particular command asynchronously from the context of this entity.
     * Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
     * @param commandString The command to run. Note that command strings should not start with slash.
     * @returns For commands that return data, returns a JSON structure with command response values.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.runCommandAsync("say Hello World!").then((command) => {
     *     console.warn(`Success count: ${command.successCount}`);
     * });;
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const entity = world.getDimension("overworld").getEntities()[0];
     * 
     * entity.runCommandAsync("say Hello World!").then((command) => {
     *     console.warn(`Success count: ${command.successCount}`);
     * });;
     * ```
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /** 
     * @remarks Sets a specified property to a value.
     * @param identifier The property identifier.
     * @param value Data value of the property to set.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the property value
     * const value = player.getDynamicProperty("test") ?? 0;
     * player.setDynamicProperty("test", value + 1);
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /** 
     * @remarks
     * Sets an Entity Property to the provided value.
     * This property change is not applied until the next tick.
     * 
     * This function can't be called in read-only mode.
     * @param identifier The Entity Property identifier.
     * @param value
     * The property value.
     * The provided type must be compatible with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the property type.
     * Throws if the provided value is outside the expected range (int, float properties).
     * Throws if the provided string value does not match the set of accepted enum values (enum properties).
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /** 
     * @remarks Sets the main rotation of the entity.
     * 
     * This function can't be called in read-only mode.
     * @param rotation
     * The x and y rotation of the entity (in degrees).
     * For most mobs, the x rotation controls the head tilt and the y rotation controls the body rotation.
     * @throws This function can throw errors.
     */
    setRotation(rotation: Vector2): void;
    /** 
     * @remarks Teleports the selected entity to a new location
     * 
     * This function can't be called in read-only mode.
     * @param location New location for the entity.
     * @param teleportOptions Options regarding the teleport operation
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { TicksPerSecond, world } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * const location = { x: 0, y: 0, z: 0 };
     * 
     * const pig = overworld.spawnEntity("minecraft:pig", location);
     * system.runTimeout(() => {
     *     if (pig.isValid() !== false) {
     *         pig.teleport({ x: 1, y: 2, z: 3 });
     *     };
     * }, 5 * TicksPerSecond);
     * ```
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /** 
     * @remarks
     * Triggers an entity type event.
     * For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
     * 
     * This function can't be called in read-only mode.
     * @param eventName Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed.
     * @throws If the event is not defined in the definition of the entity, an error will be thrown.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const creeper = overworld.spawnEntity("minecraft:creeper", location);
     * creeper.triggerEvent("minecraft:start_exploding_forced");
     * ```
     */
    triggerEvent(eventName: string): void;
    /** 
     * @remarks Attempts to try a teleport, but may not complete the teleport operation (for example, if there are blocks at the destination.)
     * 
     * This function can't be called in read-only mode.
     * @param location Location to teleport the entity to.
     * @param teleportOptions Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded.
     * This can fail if the destination chunk is unloaded or if the teleport would result in intersecting with blocks.
     * @throws This function can throw errors.
     */
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
     * @param callback Function to call when an entity dies.
     * @param options Additional filtering options for when the subscription fires.
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
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

/** 
 * Provides access to a mob's equipment slots.
 * This component exists for all mob entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:equippable";
    /** 
     * @remarks Gets the equipped item for the given {@link EquipmentSlot}.
     * @param equipmentSlot The equipment slot. e.g. 'head', 'chest', 'offhand'.
     * @returns
     * Returns the item equipped to the given {@link EquipmentSlot}.
     * If empty, returns undefined.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const equippable = player.getComponent(EntityEquippableComponent.componentId);
     * const itemStack = equippable.getEquipment(EquipmentSlot.Mainhand);
     * 
     * console.warn(`Item: ${itemStack.typeId}`); // "minecraft:dirt"
     * ```
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /** 
     * @remarks Replaces the item in the given EquipmentSlot.
     * 
     * This function can't be called in read-only mode.
     * @param equipmentSlot The equipment slot. e.g. 'head', 'chest', 'offhand'.
     * @param itemStack
     * The item to equip.
     * If undefined, clears the slot.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, ItemStack, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const equippable = player.getComponent(EntityEquippableComponent.componentId);
     * const itemStack = new ItemStack("minecraft:dirt", 8);
     * 
     * equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);
     * ```
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
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

/** 
 * Contains information related to an entity when its health changes.
 * Warning: don't change the health of an entity in this event, or it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /** @remarks Entity whose health changed. */
    readonly entity: Entity;
    /** @remarks New health value of the entity. */
    readonly newValue: number;
    /** @remarks Old health value of the entity. */
    readonly oldValue: number;
}

/** Manages callbacks that are connected to when the health of an entity changes. */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when the health of an entity changes.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when the health of an entity changes.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

/** Defines the health properties of an entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:health";
}

/** Contains information related to an entity hitting a block. */
export class EntityHitBlockAfterEvent {
    private constructor();
    /** @remarks Face of the block that was hit. */
    readonly blockFace: Direction;
    /** @remarks Entity that made the attack. */
    readonly damagingEntity: Entity;
    /** @remarks Block that was hit by the attack. */
    readonly hitBlock: Block;
}

/** Manages callbacks that are connected to when an entity hits a block. */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an entity hits a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an entity hits a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

/** Contains information related to an entity hitting (melee attacking) another entity. */
export class EntityHitEntityAfterEvent {
    private constructor();
    /** @remarks Entity that made a hit/melee attack. */
    readonly damagingEntity: Entity;
    /** @remarks Entity that was hit by the attack. */
    readonly hitEntity: Entity;
}

/** Manages callbacks that are connected to when an entity makes a melee attack on another entity. */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an entity hits another entity.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an entity makes a melee attack on another entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}

/** Contains information related to an entity getting hurt. */
export class EntityHurtAfterEvent {
    private constructor();
    /** @remarks Describes the amount of damage caused. */
    readonly damage: number;
    /** @remarks Source information on the entity that may have applied this damage. */
    readonly damageSource: EntityDamageSource;
    /** @remarks Entity that was hurt. */
    readonly hurtEntity: Entity;
}

/** Manages callbacks that are connected to when an entity is hurt. */
export class EntityHurtAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an entity is hurt.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an entity is hurt.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
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
 * Contains data related to an entity loaded within the world.
 * This could happen when an unloaded chunk is reloaded, or when an entity changes dimensions.
 */
export class EntityLoadAfterEvent {
    private constructor();
    /** 
     * @remarks Entity that was loaded.
     * 
     * This property can't be edited in read-only mode.
     */
    entity: Entity;
}

/** Registers a script-based event handler for handling what happens when an entity loads. */
export class EntityLoadAfterEventSignal {
    private constructor();
    /** 
     * @remarks Method to register an event handler for what happens when an entity loads.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void;
    /** 
     * @remarks Unregisters a method that was previously subscribed to the subscription event.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void;
}

/** Additional variant value. Can be used to further differentiate variants. */
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

/** Data for an event that happens when an entity is removed from the world (for example, the entity is unloaded because it is not close to players.) */
export class EntityRemoveAfterEvent {
    private constructor();
    /** @remarks Id of the entity that was removed. */
    readonly removedEntityId: string;
    /** @remarks Identifier of the type of the entity removed - for example, 'minecraft:skeleton'. */
    readonly typeId: string;
}

/** Allows registration for an event that fires when an entity is removed from  the game (for example, unloaded, or a few seconds after they are dead.) */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /** 
     * @remarks Will call your function every time an entity is removed from the game.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
    /** 
     * @remarks Unsubscribes your function from subsequent calls when an entity is removed.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void;
}

/** Data for an event that happens when an entity is being removed from the world (for example, the entity is unloaded because it is not close to players.) */
export class EntityRemoveBeforeEvent {
    private constructor();
    /** @remarks Reference to an entity that is being removed. */
    readonly removedEntity: Entity;
}

/** Allows registration for an event that fires when an entity is being removed from  the game (for example, unloaded, or a few seconds after they are dead.) */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Will call your function every time an entity is being removed from the game.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    /** 
     * @remarks Unsubscribes your function from subsequent calls when an entity is being removed.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
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

/** Can be used to differentiate skins, such as base skins for villagers. */
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

/** Contains data related to an entity spawning within the world. */
export class EntitySpawnAfterEvent {
    private constructor();
    /** @remarks Initialization cause (Spawned, Born ...). */
    readonly cause: EntityInitializationCause;
    /** 
     * @remarks Entity that was spawned.
     * 
     * This property can't be edited in read-only mode.
     */
    entity: Entity;
}

/** Registers a script-based event handler for handling what happens when an entity spawns. */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /** 
     * @remarks Method to register an event handler for what happens when an entity spawns.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    /** 
     * @remarks Unregisters a method that was previously subscribed to the subscription event.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
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

/** Contains information regarding an explosion that has happened. */
export class ExplosionAfterEvent {
    private constructor();
    /** @remarks Dimension where the explosion has occurred. */
    readonly dimension: Dimension;
    /** @remarks Optional source of the explosion. */
    readonly source?: Entity;
    /** @remarks A collection of blocks impacted by this explosion event. */
    getImpactedBlocks(): Block[];
}

/** Manages callbacks that are connected to when an explosion occurs. */
export class ExplosionAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an explosion occurs.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an explosion occurs.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}

/** Contains information regarding an explosion that has happened. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /** @remarks If set to true, cancels the explosion event. */
    cancel: boolean;
    /** 
     * @remarks Updates a collection of blocks impacted by this explosion event.
     * @param blocks New list of blocks that are impacted by this explosion.
     */
    setImpactedBlocks(blocks: Block[]): void;
}

/** Manages callbacks that are connected to before an explosion occurs. */
export class ExplosionBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before an explosion occurs.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before an explosion occurs.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
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
    /** @remarks As part of the Healable component, an optional collection of side effects that can occur from being fed an item. */
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

/** Contains information related to a chargeable item completing being charged. */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /** @remarks The impacted item that has completed charging. */
    readonly itemStack: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
    /** @remarks Returns the time, in ticks, for the remaining duration left before the charge completes its cycle. */
    readonly useDuration: number;
}

/** Manages callbacks that are connected to the completion of charging for a chargeable item. */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a chargeable item completes charging.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a chargeable item completes charging.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

/** Base class for item components. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

/** Contains information related to a chargeable item when the player has finished using the item and released the build action. */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /** @remarks The impacted item that triggered this item event. */
    readonly itemStack?: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
    /** @remarks Returns the time, in ticks, for the remaining duration left before the charge completes its cycle. */
    readonly useDuration: number;
}

/** Manages callbacks that are connected to the releasing of charging for a chargeable item. */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a chargeable item is released from charging.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a chargeable item is released from charging.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
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
    amount: number;
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
    keepOnDeath: boolean;
    /** 
     * @remarks
     * Gets or sets the item's lock mode.
     * The default value is `ItemLockMode.none`.
     * 
     * This property can't be edited in read-only mode.
     */
    lockMode: ItemLockMode;
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
     * Setting the name tag to an empty string or `undefined` will remove the name tag
     * 
     * This property can't be edited in read-only mode.
     * @throws Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
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
     * @param itemType
     * Type of item to create.
     * See the {@link MinecraftItemTypes} enumeration for a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255.
     * The provided value will be clamped to the item's maximum stack size.
     * Note that certain items can only have one item in the stack.
     * @throws Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255.
     * 
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * const item = new ItemStack("minecraft:dirt", 8);
     * ```
     */
    constructor(itemType: ItemType | string, amount?: number);
    /** 
     * @remarks Creates an exact copy of the item stack, including any custom data or properties.
     * @returns Returns a copy of this item stack.
     */
    clone(): ItemStack;
    /** 
     * @remarks Get the list of block types this item can break in Adventure mode.
     * 
     * This function can't be called in read-only mode.
     */
    getCanDestroy(): string[];
    /** 
     * @remarks Get the list of block types this item can be placed on in Adventure mode.
     * 
     * This function can't be called in read-only mode.
     */
    getCanPlaceOn(): string[];
    /** 
     * @remarks Gets a component (that represents additional capabilities) for an item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food').
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link ItemComponentTypes} enum.
     * @returns Returns the component if it exists on the item stack, otherwise undefined.
     * 
     * @example
     * ```javascript
     * import { ItemStack, ItemDurabilityComponent } from "@minecraft/server";
     * 
     * const itemStack = new ItemStack("minecraft:iron_sword");
     * const durability = itemStack.getComponent(ItemDurabilityComponent.componentId);
     * console.warn(`Damage: ${durability.damage}`);
     * ```
     * @example
     * ```javascript
     * import { world, ItemStack, ItemCooldownComponent } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const itemStack = new ItemStack("minecraft:ender_pearl");
     * const cooldown = itemStack.getComponent(ItemCooldownComponent.componentId);
     * cooldown.startCooldown(player);
     * ```
     * @example
     * ```javascript
     * import { ItemStack, ItemEnchantableComponent } from "@minecraft/server";
     * 
     * const itemStack = new ItemStack("minecraft:iron_sword");
     * const enchantments = itemStack.getComponent(ItemEnchantableComponent.componentId);
     * enchantments.addEnchantment({ type: "sharpness", level: 5 });
     * ```
     */
    getComponent(componentId: string): ItemComponent | undefined;
    /** @remarks Returns all components that are both present on this item stack and supported by the API. */
    getComponents(): ItemComponent[];
    /** 
     * @remarks Returns the lore value - a secondary display string - for an ItemStack.
     * @returns An array of lore lines. If the item does not have lore, returns an empty array.
     */
    getLore(): string[];
    /** @remarks Returns a set of tags associated with this item stack. */
    getTags(): string[];
    /** 
     * @remarks Returns true if the specified component is present on this item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to retrieve.
     * If no namespace prefix is specified, 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /** 
     * @remarks Checks whether this item stack has a particular tag associated with it.
     * @param tag Tag to search for.
     * @returns True if the Item Stack has the tag associated with it, else false.
     * 
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * const itemStack = new ItemStack("minecraft:iron_pickaxe");
     * 
     * console.warn(`Item is pickaxe: ${itemStack.hasTag("minecraft:is_pickaxe")}`);
     * console.warn(`Item is iron tier: ${itemStack.hasTag("minecraft:iron_tier")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /** 
     * @remarks
     * Returns whether this item stack can be stacked with the given `itemStack`.
     * This is determined by comparing the item type and any custom data and properties associated with the item stacks.
     * The amount of each item stack is not taken into consideration.
     * @param itemStack ItemStack to check stacking compatability with.
     * @returns True if the Item Stack is stackable with the itemStack passed in.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /** 
     * @remarks
     * The list of block types this item can break in Adventure mode.
     * The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     * 
     * This function can't be called in read-only mode.
     * @param blockIdentifiers String list of block types that the item can destroy.
     * @throws Throws if any of the provided block identifiers are invalid.
     * 
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * 
     * const itemStack = new ItemStack("minecraft:diamond_shovel");
     * itemStack.setCanDestroy([ "minecraft:dirt" ]);
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /** 
     * @remarks
     * The list of block types this item can be placed on in Adventure mode.
     * This is only applicable to block items.
     * The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     * 
     * This function can't be called in read-only mode.
     * @param blockIdentifiers String list of block types that the item can be placed on.
     * @throws Throws if any of the provided block identifiers are invalid.
     * 
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * 
     * const itemStack = new ItemStack("minecraft:dirt", 8);
     * itemStack.setCanPlaceOn([ "minecraft:dirt" ]);
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /** 
     * @remarks
     * Sets the lore value - a secondary display string - for an ItemStack.
     * The lore list is cleared if set to an empty string or undefined.
     * 
     * This function can't be called in read-only mode.
     * @param loreList
     * List of lore lines. Each element in the list represents a new line.
     * The maximum lore line count is 20.
     * The maximum lore line length is 50 characters.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * 
     * const itemStack = new ItemStack("minecraft:dirt", 8);
     * itemStack.setLore([ "Hello,", "World!" ]);
     * ```
     */
    setLore(loreList?: string[]): void;
}

/** Contains information related to a chargeable item starting to be charged. */
export class ItemStartUseAfterEvent {
    private constructor();
    /** @remarks The impacted item that is starting to be charged. */
    readonly itemStack: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
    /** @remarks Returns the time, in ticks, for the remaining duration left before the charge completes its cycle. */
    readonly useDuration: number;
}

/** Manages callbacks that are connected to the start of charging for a chargeable item. */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a chargeable item starts charging.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a chargeable item starts charging.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

/** 
 * Contains information related to an item being used on a block.
 * This event fires when a player presses the the Use Item / Place Block button to successfully use an item or place a block. 
 * Fires for the first block that is interacted with when performing a build action.
 * Note: This event cannot be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /** @remarks The block that the item is used on. */
    readonly block: Block;
    /** @remarks The face of the block that an item is being used on. */
    readonly blockFace: Direction;
    /** 
     * @remarks
     * The impacted item stack that is starting to be used.
     * Can be undefined in some gameplay scenarios like pushing a button with an empty hand.
     */
    readonly itemStack?: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
}

/** Manages callbacks that are connected to an item starting being used on a block event. */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an item starts being used on a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an item starts being used on a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

/** 
 * Contains information related to a chargeable item has finished an items use cycle,
 * or when the player has released the use action with the item.
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /** 
     * @remarks
     * The impacted item stack that is stopping being charged.
     * {@link ItemStopUseAfterEvent} can be called when teleporting to a different dimension and this can be undefined.
     */
    readonly itemStack?: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
    /** @remarks Returns the time, in ticks, for the remaining duration left before the charge completes its cycle. */
    readonly useDuration: number;
}

/** Manages callbacks that are connected to the stopping of charging for an item that has a registered `minecraft:chargeable` component. */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a chargeable item stops charging.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a chargeable item stops charging.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

/** 
 * Contains information related to an item being used on a block.
 * This event fires when a player presses the the Use Item / Place Block button to successfully use an item or place a block. 
 * Fires for the first block that is interacted with when performing a build action.
 * Note: This event cannot be used with Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /** @remarks The block that the item is used on. */
    readonly block: Block;
    /** @remarks The impacted item stack that is being used on a block. */
    readonly itemStack?: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
}

/** Manages callbacks that are connected to an item stops used on a block event. */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an item stops being used on a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an item is used on a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

/** Represents the type of an item - for example, Wool. */
export class ItemType {
    private constructor();
    /** @remarks Returns the identifier of the item type - for example, 'minecraft:apple'. */
    readonly id: string;
}

/** 
 * Contains information related to an item being used.
 * This event fires when an item used by a player successfully triggers an interaction.
 */
export class ItemUseAfterEvent {
    private constructor();
    /** @remarks The impacted item that is being used. */
    itemStack: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
}

/** Manages callbacks that fire when an item is used. */
export class ItemUseAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an item is used.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an item is used.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

/** Contains information related to an item being used. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /** @remarks If set to true, this will cancel the item use behavior. */
    cancel: boolean;
}

/** Manages callbacks that fire before an item is used. */
export class ItemUseBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before an item is used.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before an item is used.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

/** 
 * Contains information related to an item being used on a block.
 * This event fires when an item used by a player successfully triggers a block interaction.
 */
export class ItemUseOnAfterEvent {
    private constructor();
    /** @remarks The block that the item is used on. */
    readonly block: Block;
    /** @remarks The face of the block that an item is being used on. */
    readonly blockFace: Direction;
    /** @remarks Location relative to the bottom north-west corner of the block where the item is used. */
    readonly faceLocation: Vector3;
    /** @remarks The impacted item that is being used on a block. */
    readonly itemStack: ItemStack;
    /** @remarks Returns the source entity that triggered this item event. */
    readonly source: Player;
}

/** Manages callbacks that fire when an item is used on a block. */
export class ItemUseOnAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an item is used on a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an item is used on a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

/** Contains information related to an item being used on a block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    /** @remarks If set to true, this will cancel the item use behavior. */
    cancel: boolean;
}

/** Manages callbacks that fire before an item is used on a block. */
export class ItemUseOnBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before an item is used on a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before an item is used on a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
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

/** 
 * DEPRECATED - Use `@minecraft/vanilla-data.MinecraftDimensionTypes`
 * 
 * A collection of default Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
    private constructor();
    /** 
     * @remarks
     * The Nether is a collection of biomes separate from the Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources.
     * Mobs such as Blaze, Hoglins, Piglins, and Ghasts congregate here.
     */
    static readonly nether = "minecraft:nether";
    /** 
     * @remarks
     * The overworld is a collection of biomes, including forests, plains, jungles, mountains, deserts, taiga, and more.
     * This is the default starter dimension for Minecraft.
     * Mobs such as Axolotl, Cows, Creepers, and Zombies congregate here.
     */
    static readonly overworld = "minecraft:overworld";
    /** 
     * @remarks
     * The End is separate from the Overworld and the Nether and is generated whenever you create an End portal.
     * Here, a giant center island is surrounded by several smaller areas and islands.
     * You can find Endermen here. End midlands are larger areas that transition you from the center to the outer edges of the End.
     * They contain Shulkers, Endermen, End gateway portals, and End cities.
     * End gateway portals are commonly found at the outermost edge of the void.
     * You usually find End barrens toward the edges of the main areas or land in the End.
     */
    static readonly theEnd = "minecraft:the_end";
}

/** Contains a set of additional variable values for further defining how rendering and animations function. */
export class MolangVariableMap {
    /** 
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { MolangVariableMap } from "@minecraft/server";
     * 
     * // Creates a new instance of the MolangVariableMap class
     * const molang = new MolangVariableMap();
     * 
     * // Random RGB color
     * molang.setColorRGB("variable.color", {
     *     red: Math.random(),
     *     green: Math.random(),
     *     blue: Math.random(),
     * });
     * ```
     */
    setColorRGB(variableName: string, color: RGB): void;
    /** 
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value [0-1]
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { MolangVariableMap } from "@minecraft/server";
     * 
     * // Creates a new instance of the MolangVariableMap class
     * const molang = new MolangVariableMap();
     * molang.setColorRGBA("variable.color", {
     *     red: Math.random(),
     *     green: Math.random(),
     *     blue: Math.random(),
     *     alpha: 1,
     * });
     * ```
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /** 
     * @remarks Sets a numeric (decimal) value within the Molang variable map.
     * @param variableName Name of the float-based number to set.
     * @param number Value for the Molang-based variable to set.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { MolangVariableMap } from "@minecraft/server";
     * 
     * // Creates a new instance of the MolangVariableMap class
     * const molang = new MolangVariableMap();
     * molang.setFloat("variable.custom", 0.275);
     * ```
     */
    setFloat(variableName: string, number: number): void;
    /** 
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link Vector3} provided
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { MolangVariableMap, Vector } from "@minecraft/server";
     * 
     * // Creates a new instance of the MolangVariableMap class
     * const molang = new MolangVariableMap();
     * molang.setSpeedAndDirection("variable.custom", 2, Vector.forward);
     * ```
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /** 
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3} provided
     * - `<variable_name>.y` - Y value from the {@link Vector3} provided
     * - `<variable_name>.z` - Z value from the {@link Vector3} provided
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { MolangVariableMap } from "@minecraft/server";
     * 
     * // Creates a new instance of the MolangVariableMap class
     * const molang = new MolangVariableMap();
     * molang.setVector3("variable.custom", { x: 1, y: 2, z: 3 });
     * ```
     */
    setVector3(variableName: string, vector: Vector3): void;
}

/** Represents a player within the world. */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /** 
     * @remarks The player's camera.
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /** 
     * @remarks If true, the player is currently emoting.
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /** 
     * @remarks Whether the player is flying. For example, in Creative or Spectator mode.
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /** 
     * @remarks Whether the player is gliding with Elytra.
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /** 
     * @remarks Whether the player is jumping. This will remain true while the player is holding the jump action.
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /** 
     * @remarks The current overall level for the player, based on their experience.
     * @throws This property can throw when used.
     */
    readonly level: number;
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
     * @remarks The overall total set of experience needed to achieve the next level for a player.
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /** 
     * @remarks The current set of experience achieved for the player.
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /** 
     * @remarks Adds/removes experience to/from the Player and returns the current experience of the Player.
     * 
     * This function can't be called in read-only mode.
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * @returns Returns the current experience of the Player.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * const xp = player.addExperience(1);
     * console.warn(`XP: ${xp}`);
     * ```
     */
    addExperience(amount: number): number;
    /** 
     * @remarks Adds/removes level to/from the Player and returns the current level of the Player.
     * 
     * This function can't be called in read-only mode.
     * @param amount
     * Amount to add to the player. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * @returns Returns the current level of the Player.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * const level = player.addLevels(1);
     * console.warn(`Player's current level: ${level}`);
     * ```
     */
    addLevels(amount: number): number;
    /** 
     * @remarks Gets the current spawn point of the player.
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /** 
     * @remarks Gets the total experience of the Player.
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /** 
     * @remarks Plays a sound that only this particular player can hear.
     * 
     * This function can't be called in read-only mode.
     * @param soundOptions Additional optional options for the sound.
     * @throws This function can throw errors.
     * 
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
     * @remarks Resets the level of the player.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /** 
     * @remarks Sends a message to the player.
     * @param message The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is in an invalid format.
     * For example, if an empty `name` string is provided to `score`.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * const player = world.getAllPlayers()[0];
     * 
     * player.sendMessage("Hello World!");
     * player.sendMessage({
     *     translate: "authentication.welcome",
     *     with: [ "Amazing Player 1" ]
     * });
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * const player = world.getAllPlayers()[0];
     * 
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * player.sendMessage({
     *     score: { name: "*", objective: "obj" },
     * });
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * const player = world.getAllPlayers()[0];
     * 
     * // Displays "Apple or Coal"
     * player.sendMessage({
     *     translate: "accessibility.list.or.two",
     *     with: {
     *         rawtext: [
     *             { translate: "item.apple.name" },
     *             { translate: "item.coal.name" }
     *         ]
     *     },
     * });
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
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * const dimension = world.getDimension("the_end");
     * 
     * player.setSpawnPoint({ x: 0, y: 60, z: 0, dimension });
     * ```
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
}

/** Contains information regarding an event after a player breaks a block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks Returns permutation information about this block before it was broken. */
    readonly brokenBlockPermutation: BlockPermutation;
    /** @remarks The item stack that was used to break the block after the block was broken, or undefined if empty hand. */
    readonly itemStackAfterBreak?: ItemStack;
    /** @remarks The item stack that was used to break the block before the block was broken, or undefined if empty hand. */
    readonly itemStackBeforeBreak?: ItemStack;
    /** @remarks Player that broke the block for this event. */
    readonly player: Player;
}

/** Manages callbacks that are connected to when a player breaks a block. */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a block is broken by a player.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a player breaks a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void;
}

/** Contains information regarding an event before a player breaks a block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /** @remarks If set to true, cancels the block break event. */
    cancel: boolean;
    /** @remarks The item stack that is being used to break the block, or undefined if empty hand. */
    itemStack?: ItemStack;
    /** @remarks Player breaking the block for this event. */
    readonly player: Player;
}

/** Manages callbacks that are connected to before a player breaks a block. */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before a block is broken by a player.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before a player breaks a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}

/** Contains information related to changes to a player's dimension having been changed. */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /** @remarks The dimension the player is changing from. */
    readonly fromDimension: Dimension;
    /** @remarks The location the player was at before changing dimensions. */
    readonly fromLocation: Vector3;
    /** @remarks Handle to the player that is changing dimensions. */
    readonly player: Player;
    /** @remarks The dimension that the player is changing to. */
    readonly toDimension: Dimension;
    /** @remarks The location the player will spawn to after changing dimensions. */
    readonly toLocation: Vector3;
}

/** Manages callbacks that are connected to successful player dimension changes. */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /** 
     * @remarks Subscribes the specified callback to a player dimension change after event.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    /** 
     * @remarks Removes the specified callback from a player dimension change after event.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}

/** Contains information regarding an event after a player interacts with a block. */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /** @remarks The block that will be interacted with. */
    readonly block: Block;
    /** @remarks The face of the block that is being interacted with. */
    readonly blockFace: Direction;
    /** @remarks Location relative to the bottom north-west corner of the block where the item is placed. */
    readonly faceLocation: Vector3;
    /** @remarks The item stack that is being used in the interaction, or undefined if empty hand. */
    readonly itemStack?: ItemStack;
    /** @remarks Source Player for this event. */
    readonly player: Player;
}

/** Manages callbacks that are connected to after a player interacts with a block. */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called after a player interacts with a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): (arg: PlayerInteractWithBlockAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called after a player interacts with a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void;
}

/** Contains information regarding an event before a player interacts with a block. */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /** @remarks The block that will be interacted with. */
    readonly block: Block;
    /** @remarks The face of the block that is being interacted with. */
    readonly blockFace: Direction;
    /** @remarks If set to true the interaction will be cancelled. */
    cancel: boolean;
    /** @remarks Location relative to the bottom north-west corner of the block where the item is placed. */
    readonly faceLocation: Vector3;
    /** @remarks The item stack that is being used in the interaction, or undefined if empty hand. */
    readonly itemStack?: ItemStack;
    /** @remarks Source Player for this event. */
    readonly player: Player;
}

/** Manages callbacks that are connected to before a player interacts with a block. */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before a player interacts with a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before a player interacts with a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/** Contains information regarding an event after a player interacts with an entity. */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /** @remarks The item stack that is being used in the interaction, or undefined if empty hand. */
    readonly itemStack?: ItemStack;
    /** @remarks Source Player for this event. */
    readonly player: Player;
    /** @remarks The entity that will be interacted with. */
    readonly target: Entity;
}

/** Manages callbacks that are connected to after a player interacts with an entity. */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called after a player interacts with an entity.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): (arg: PlayerInteractWithEntityAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called after a player interacts with an entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
}

/** Contains information regarding an event before a player interacts with an entity. */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /** @remarks If set to true the interaction will be cancelled. */
    cancel: boolean;
    /** @remarks The item stack that is being used in the interaction, or undefined if empty hand. */
    readonly itemStack?: ItemStack;
    /** @remarks Source Player for this event. */
    readonly player: Player;
    /** @remarks The entity that will be interacted with. */
    readonly target: Entity;
}

/** Manages callbacks that are connected to before a player interacts with an entity. */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before a player interacts with an entity.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): (arg: PlayerInteractWithEntityBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before a player interacts with an entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void;
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
    /** @remarks Opaque string identifier of the player that left the game. */
    readonly playerId: string;
    /** @remarks Name of the player that has left. */
    readonly playerName: string;
}

/** Manages callbacks that are connected to a player leaving the world. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

/** Contains information regarding a player that is leaving the world. */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /** @remarks The leaving player. */
    readonly player: Player;
}

/** Manages callbacks that are connected to a player leaving the world. */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a player leaves the world.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void;
    /** 
     * @remarks Removes a callback that will be called when a player leaves the world.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void;
}

/** Contains information regarding an event where a player places a block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks Player that placed the block for this event. */
    readonly player: Player;
}

/** Manages callbacks that are connected to when a block is placed by a player. */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a block is placed by a player.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an block is placed by a player.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
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

/** Contains information related to changes to a pressure plate pop. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks The redstone power of the pressure plate before it was popped. */
    readonly previousRedstonePower: number;
    /** @remarks The redstone power of the pressure plate at the time of the pop. */
    readonly redstonePower: number;
}

/** Manages callbacks that are connected to when a pressure plate is popped. */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a pressure plate is popped.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a pressure plate is popped.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

/** Contains information related to changes to a pressure plate push. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks The redstone power of the pressure plate before it was pushed. */
    readonly previousRedstonePower: number;
    /** @remarks The redstone power of the pressure plate at the time of the push. */
    readonly redstonePower: number;
    /** @remarks Source that triggered the pressure plate push. */
    readonly source: Entity;
}

/** Manages callbacks that are connected to when a pressure plate is pushed. */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a pressure plate is pushed.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a pressure plate is pushed.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

/** Contains information related to a projectile hitting a block. */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /** @remarks Dimension where this projectile hit took place. */
    readonly dimension: Dimension;
    /** @remarks Direction vector of the projectile as it hit a block. */
    readonly hitVector: Vector3;
    /** @remarks Location where the projectile hit occurred. */
    readonly location: Vector3;
    /** @remarks Entity for the projectile that hit a block. */
    readonly projectile: Entity;
    /** @remarks Optional source entity that fired the projectile. */
    readonly source?: Entity;
    /** 
     * @remarks Contains additional information about a block that was hit.
     * 
     * This function can't be called in read-only mode.
     */
    getBlockHit(): BlockHitInformation;
}

/** Manages callbacks that are connected to when a projectile hits a block. */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a projectile hits a block.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a projectile hits a block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
}

/** Contains information related to a projectile hitting an entity. */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /** @remarks Dimension where this projectile hit took place. */
    readonly dimension: Dimension;
    /** @remarks Direction vector of the projectile as it hit an entity. */
    readonly hitVector: Vector3;
    /** @remarks Location where the projectile hit occurred. */
    readonly location: Vector3;
    /** @remarks Entity for the projectile that hit an entity. */
    readonly projectile: Entity;
    /** @remarks Optional source entity that fired the projectile. */
    readonly source?: Entity;
    /** 
     * @remarks Contains additional information about an entity that was hit.
     * 
     * This function can't be called in read-only mode.
     */
    getEntityHit(): EntityHitInformation;
}

/** Manages callbacks that are connected to when a projectile hits an entity. */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a projectile hits an entity.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a projectile hits an entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}

/** Contains objectives and participants for the scoreboard. */
export class Scoreboard {
    private constructor();
    /** 
     * @remarks Adds a new objective to the scoreboard.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.scoreboard.addObjective("test", "Hello World");
     * ```
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /** 
     * @remarks Clears the objective that occupies a display slot.
     * 
     * This function can't be called in read-only mode.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /** 
     * @remarks Returns a specific objective (by id).
     * @param objectiveId Identifier of the objective.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the objective
     * const objective = world.scoreboard.getObjective("test");
     * console.warn(objective.id);
     * ```
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /** @remarks Returns an objective that occupies the specified display slot. */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /** @remarks Returns all defined objectives. */
    getObjectives(): ScoreboardObjective[];
    /** @remarks Returns all defined scoreboard identities. */
    getParticipants(): ScoreboardIdentity[];
    /** 
     * @remarks Removes an objective from the scoreboard.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.scoreboard.removeObjective("test");
     * ```
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /** 
     * @remarks Sets an objective into a display slot with specified additional display settings.
     * 
     * This function can't be called in read-only mode.
     * @returns Returns the previous `ScoreboardObjective` set at the display slot, if no objective was previously set it returns `undefined`.
     * @throws This function can throw errors.
     */
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

/** Contains objectives and participants for the scoreboard. */
export class ScoreboardObjective {
    private constructor();
    /** 
     * @remarks Returns the player-visible name of this scoreboard objective.
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /** 
     * @remarks Identifier of the scoreboard objective.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /** 
     * @remarks Adds a score to the given participant and objective.
     * 
     * This function can't be called in read-only mode.
     * @param participant Participant to apply the scoreboard value addition to.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the objective
     * const objective = world.scoreboard.getObjective("test");
     * objective.addScore(player.scoreboardIdentity, 1);
     * ```
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /** 
     * @remarks Returns all objective participant identities.
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /** 
     * @remarks Returns a specific score for a participant.
     * @param participant Identifier of the participant to retrieve a score for.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the objective
     * const objective = world.scoreboard.getObjective("test");
     * const score = objective.getScore(player.scoreboardIdentity) ?? 0;
     * 
     * console.warn(`Score: ${score}`);
     * ```
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /** 
     * @remarks Returns specific scores for this objective for all participants.
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    /** 
     * @remarks Returns if the specified identity is a participant of the scoreboard objective.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the objective
     * const objective = world.scoreboard.getObjective("test");
     * console.warn(`Is Participant: ${objective.hasParticipant(player.scoreboardIdentity)}`);
     * ```
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /** @remarks Returns true if the ScoreboardObjective reference is still valid. */
    isValid(): boolean;
    /** 
     * @remarks Removes a participant from this scoreboard objective.
     * 
     * This function can't be called in read-only mode.
     * @param participant Participant to remove from being tracked with this objective.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the objective
     * const objective = world.scoreboard.getObjective("test");
     * objective.removeParticipant(player.scoreboardIdentity);
     * ```
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /** 
     * @remarks Sets a score for a participant.
     * 
     * This function can't be called in read-only mode.
     * @param participant Identity of the participant.
     * @param score New value of the score.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * // Get the objective
     * const objective = world.scoreboard.getObjective("test");
     * objective.setScore(player.scoreboardIdentity, 1);
     * ```
     */
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
     * @param text New value for the action bar text.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setActionBar("Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setActionBar({ rawtext: [{ text: "Hello World!" }] });
     * ```
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /** 
     * @remarks
     * Will cause a title to show up on the player's on screen display. Will clear the title if set to empty string.
     * You can optionally specify an additional subtitle as well as fade in, stay and fade out times.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * player.onScreenDisplay.setTitle("Hello World!");
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
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
     * 
     * @example
     * ```javascript
     * import { world, system, TicksPerSecond } from "@minecraft/server";
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
     * }, 1 * TicksPerSecond);
     * ```
     * @example
     * ```javascript
     * import { world, system, TicksPerSecond } from "@minecraft/server";
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
     * }, 1 * TicksPerSecond);
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
     * 
     * @example
     * ```javascript
     * import { world, system, TicksPerSecond } from "@minecraft/server";
     * 
     * const run = system.runInterval(() => {
     *     world.sendMessage("Hello, World!");
     *  
     *     // Clears the run
     *     system.clearRun(run);
     * }, 5 * TicksPerSecond);
     * ```
     */
    clearRun(runId: number): void;
    /** 
     * @remarks
     * Runs a specified function at a future time.
     * This is frequently used to implement delayed behaviors and game loops.
     * @param callback Function callback to run when the tickDelay time criteria is met.
     * @returns An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.
     * 
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
     * @param callback Functional code that will run when this interval occurs.
     * @param tickInterval An interval of every N ticks that the callback will be called upon.
     * @returns An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     * 
     * @example
     * ```javascript
     * import { world, system, TicksPerSecond } from "@minecraft/server";
     * 
     * // Runs every 5 seconds
     * system.runInterval(() => {
     *     world.sendMessage(`Current tick: ${system.currentTick}`);
     * }, 5 * TicksPerSecond);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /** 
     * @remarks Runs a set of code at a future time specified by tickDelay.
     * @param callback Functional code that will run when this timeout occurs.
     * @param tickDelay Amount of time, in ticks, before the timeout will be called.
     * @returns An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
     * 
     * @example
     * ```javascript
     * import { world, system, TicksPerSecond } from "@minecraft/server";
     * 
     * // Runs after 5 seconds
     * system.runTimeout(() => {
     *     world.sendMessage("Hello, World!");
     * }, 5 * TicksPerSecond);
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
     * @remarks Contains a set of events that are applicable to the entirety of the world.
     * Event callbacks are called in a deferred manner and are executed in read-write mode.
     */
    readonly afterEvents: WorldAfterEvents;
    /** 
     * @remarks Contains a set of events that are applicable to the entirety of the world.
     * Event callbacks are called immediately and are executed in read-only mode.
     */
    readonly beforeEvents: WorldBeforeEvents;
    /** @remarks Returns the general global scoreboard that applies to the world. */
    readonly scoreboard: Scoreboard;
    /** @remarks Clears the set of dynamic properties declared for this behavior pack within the world. */
    clearDynamicProperties(): void;
    /** @remarks Returns the absolute time since the start of the world. */
    getAbsoluteTime(): number;
    /** 
     * @remarks Returns an array of all active players within the world.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * const players = world.getAllPlayers();
     * console.warn(players.length);
     * ```
     */
    getAllPlayers(): Player[];
    /** 
     * @remarks Returns the current day.
     * @returns
     * The current day, determined by the world time divided by the number of ticks per day.
     * New worlds start at day 0.
     */
    getDay(): number;
    /** 
     * @remarks Returns the default Overworld spawn location.
     * @returns
     * The default Overworld spawn location.
     * By default, the Y coordinate is 32767, indicating a player's spawn height is not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
    /** 
     * @remarks Returns a dimension object.
     * @param dimensionId The name of the dimension. For example, 'overworld', 'nether' or 'the_end'.
     * @returns The requested dimension
     * @throws Throws if the given dimension name is invalid
     * 
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
     * @remarks Returns a property value.
     * @param identifier The property identifier.
     * @returns Returns the value for the property, or undefined if the property has not been set.
     * @throws Throws if the given dynamic property identifier is not defined.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the property value
     * const value = world.getDynamicProperty("test") ?? 0;
     * console.warn(`Dynamic Property value: ${value}`);
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /** 
     * @remarks Gets a set of dynamic property identifiers that have been set in this world.
     * @returns A string array of active dynamic property identifiers.
     */
    getDynamicPropertyIds(): string[];
    /** 
     * @remarks
     * Gets the total byte count of dynamic properties.
     * This could potentially be used for your own analytics to ensure you're not storing gigantic sets of dynamic properties.
     */
    getDynamicPropertyTotalByteCount(): number;
    /** 
     * @remarks Returns an entity based on the provided id.
     * @param id The id of the entity.
     * @returns The requested entity object.
     * @throws Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /** @remarks Returns the MoonPhase for the current time. */
    getMoonPhase(): MoonPhase;
    /** 
     * @remarks Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
     * @param options Additional options that can be used to filter the set of players returned.
     * @returns A player array.
     * @throws Throws if the provided EntityQueryOptions are invalid.
     * 
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
     * @returns The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /** 
     * @remarks Plays a particular music track for all players.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
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
     * 
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
     * @remarks Queues an additional music track for players. If a track is not playing, a music track will play.
     * 
     * This function can't be called in read-only mode.
     * @param trackId Identifier of the music track to play.
     * @param musicOptions Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.queueMusic("record.otherside", { loop: true });
     * ```
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** 
     * @remarks Sends a message to all players.
     * @param message The message to be displayed.
     * @throws This method can throw if the provided {@link RawMessage} is in an invalid format. For example, if an empty `name` string is provided to `score`.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * world.sendMessage("Hello World!");
     * world.sendMessage({
     *     translate: "authentication.welcome",
     *     with: [ "Amazing Player 1" ]
     * });
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * world.sendMessage({
     *     score: { name: "*", objective: "obj" },
     * });
     * ```
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Displays "Apple or Coal"
     * world.sendMessage({
     *     translate: "accessibility.list.or.two",
     *     with: {
     *         rawtext: [
     *             { translate: "item.apple.name" },
     *             { translate: "item.coal.name" }
     *         ]
     *     },
     * });
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /** 
     * @remarks Sets the world time.
     * 
     * This function can't be called in read-only mode.
     * @param absoluteTime The world time, in ticks.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.setAbsoluteTime(0);
     * ```
     */
    setAbsoluteTime(absoluteTime: number): void;
    /** 
     * @remarks Sets a default spawn location for all players.
     * 
     * This function can't be called in read-only mode.
     * @param spawnLocation Location of the spawn point. Note that this is assumed to be within the overworld dimension.
     * @throws Throws if the provided spawn location is out of bounds.
     * 
     * {@link Error}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.setDefaultSpawnLocation({ x: 0, y: 4, z: 0 });
     * ```
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /** 
     * @remarks Sets a specified property to a value.
     * @param identifier The property identifier.
     * @param value Data value of the property to set.
     * @throws Throws if the given dynamic property identifier is not defined.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the property value
     * const value = world.getDynamicProperty("test") ?? 0;
     * world.setDynamicProperty("test", value + 1);
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /** 
     * @remarks Sets the time of day.
     * 
     * This function can't be called in read-only mode.
     * @param timeOfDay The time of day, in ticks, between 0 and 24000.
     * @throws Throws if the provided time of day is not within the valid range.
     * 
     * @example
     * ```javascript
     * import { world, TimeOfDay } from "@minecraft/server";
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
    /** @remarks Fires when an entity is loaded. */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /** @remarks Fires before an entity is removed from the world (for example, unloaded or removed after being killed.) */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /** @remarks This event fires when an entity is spawned. */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
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
    /** @remarks This event fires before a block is broken by a player. */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /** @remarks Fires when a player moved to a different dimension. */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /** 
     * @remarks
     * This event fires when a player joins a world.
     * See also playerSpawn for another related event you can trap for when a player is spawned the first time within a world.
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /** @remarks This event fires when a player leaves a world. */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /** @remarks This event fires before a block is placed by a player. */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
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
    /** @remarks This event fires when a projectile hits a block. */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /** @remarks This event fires when a projectile hits an entity. */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /** @remarks A target block was hit. */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /** @remarks A trip wire was tripped. */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
}

/** 
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event.
 * Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., {@link Dimension.spawnEntity})
 */
export class WorldBeforeEvents {
    private constructor();
    /** @remarks Fires before an entity is removed from the world (for example, unloaded or removed after being killed.) */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /** @remarks This event fires when an item is successfully used by a player. */
    readonly itemUse: ItemUseBeforeEventSignal;
    /** @remarks This event fires when an item is used on a block by a player. */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /** @remarks This event fires before a block is broken by a player. */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /** @remarks Fires when a player leaves the game. */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
}

/** Contains optional parameters for registering a block event. */
export interface BlockEventOptions {
    /** @remarks If this value is set, this event will only fire if the impacted block's type matches this parameter. */
    blockTypes?: string[];
    /** @remarks If this value is set, this event will only fire if the impacted block's permutation matches this parameter. */
    permutations?: BlockPermutation[];
}

/** Contains more information for events where a block is hit. */
export interface BlockHitInformation {
    /** @remarks Block that was hit. */
    block: Block;
    /** @remarks Face of the block that was hit. */
    face: Direction;
    /** @remarks Location relative to the bottom north-west corner of the block. */
    faceLocation: Vector3;
}

/** Contains information for block raycast hit results. */
export interface BlockRaycastHit {
    /** @remarks Block that was hit. */
    block: Block;
    /** @remarks Face of the block that was hit. */
    face: Direction;
    /** @remarks Hit location relative to the bottom north-west corner of the block. */
    faceLocation: Vector3;
}

/** Contains additional options for configuring a block raycast query. */
export interface BlockRaycastOptions {
    /** @remarks If true, liquid blocks will be considered as blocks that 'stop' the raycast. */
    includeLiquidBlocks?: boolean;
    /** @remarks If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast. */
    includePassableBlocks?: boolean;
    /** @remarks Maximum distance, in blocks, to process the raycast. */
    maxDistance?: number;
}

export interface CameraDefaultOptions {
    /** @remarks Sets a set of easing options for the camera. */
    easeOptions: CameraEaseOptions;
}

/** Contains options associated with a camera ease operation. */
export interface CameraEaseOptions {
    /** @remarks Time for the ease operation. */
    easeTime?: number;
    /** @remarks Type of ease operation to use. */
    easeType?: EasingType;
}

/** Used to initiate a full-screen color fade. */
export interface CameraFadeOptions {
    /** @remarks Fade color to use. */
    fadeColor?: RGB;
    /** @remarks Time in seconds for the fade-in, hold, and fade-out seconds. */
    fadeTime?: CameraFadeTimeOptions;
}

/** Contains timings for a fade transition. */
export interface CameraFadeTimeOptions {
    /** @remarks Time, in seconds, for a fade-in. */
    fadeInTime: number;
    /** @remarks Time, in seconds, for a fade-out. */
    fadeOutTime: number;
    /** @remarks Time, in seconds, to hold the full screen color. */
    holdTime: number;
}

export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

/** An exact coordinate within the world, including its dimension and location. */
export interface DimensionLocation {
    /** @remarks Dimension that this coordinate is associated with. */
    dimension: Dimension;
    /** @remarks X component of this dimension-location. */
    x: number;
    /** @remarks Y component of this dimension-location. */
    y: number;
    /** @remarks Z component of this dimension-location. */
    z: number;
}

/** Additional options for when damage has been applied via a projectile. */
export interface EntityApplyDamageByProjectileOptions {
    /** @remarks Optional entity that fired the projectile. */
    damagingEntity?: Entity;
    /** @remarks Projectile that caused damage. */
    damagingProjectile: Entity;
}

/** Additional descriptions and metadata for a damage event. */
export interface EntityApplyDamageOptions {
    /** @remarks Underlying cause of the damage. */
    cause: EntityDamageCause;
    damagingEntity?: Entity;
}

/** Provides information about how damage has been applied to an entity. */
export interface EntityDamageSource {
    /** @remarks Cause enumeration of damage. */
    cause: EntityDamageCause;
    /** @remarks Optional entity that caused the damage. */
    damagingEntity?: Entity;
    /** @remarks Optional projectile that may have caused damage. */
    damagingProjectile?: Entity;
}

/** Contains additional options for entity effects. */
export interface EntityEffectOptions {
    /** @remarks The strength of the effect. */
    amplifier?: number;
    /** @remarks If true, will show particles when effect is on the entity. */
    showParticles?: boolean;
}

/** Contains optional parameters for registering an entity event. */
export interface EntityEventOptions {
    /** @remarks If this value is set, this event will only fire for entities that match the entities within this collection. */
    entities?: Entity[];
    /** @remarks If this value is set, this event will only fire if the impacted entities' type matches this parameter. */
    entityTypes?: string[];
}

/** Contains additional information about an entity that was hit. */
export interface EntityHitInformation {
    /** @remarks Entity that was hit. */
    entity?: Entity;
}

/** Contains options for selecting entities within an area. */
export interface EntityQueryOptions {
    /** 
     * @remarks
     * Limits the number of entities to return, opting for the closest N entities as specified by this property.
     * The location value must also be specified on the query options object.
     */
    closest?: number;
    /** @remarks Excludes entities that match one or more of the specified families. */
    excludeFamilies?: string[];
    /** @remarks Excludes entities if have a specific gamemode that matches the specified gamemode. */
    excludeGameModes?: GameMode[];
    /** @remarks Excludes entities that have a name that match one of the specified values. */
    excludeNames?: string[];
    /** @remarks Excludes entities with a tag that matches one of the specified values. */
    excludeTags?: string[];
    /** @remarks Excludes entities if they are one of the specified types. */
    excludeTypes?: string[];
    /** @remarks If specified, includes entities that match all of the specified families. */
    families?: string[];
    /** 
     * @remarks
     * Limits the number of entities to return, opting for the farthest N entities as specified by this property.
     * The location value must also be specified on the query options object.
     */
    farthest?: number;
    /** @remarks If specified, includes entities with a gamemode that matches the specified gamemode. */
    gameMode?: GameMode;
    /** @remarks Adds a seed location to the query that is used in conjunction with closest, farthest, limit, volume, and distance properties. */
    location?: Vector3;
    /** @remarks If specified, includes entities that are less than this distance away from the location specified in the location property. */
    maxDistance?: number;
    /** @remarks If specified, will only include entities that have at most this horizontal rotation. */
    maxHorizontalRotation?: number;
    /** @remarks If defined, only players that have at most this level are returned. */
    maxLevel?: number;
    /** @remarks If specified, only entities that have at most this vertical rotation are returned. */
    maxVerticalRotation?: number;
    /** @remarks If specified, includes entities that are least this distance away from the location specified in the location property. */
    minDistance?: number;
    /** @remarks If specified, will only include entities that have at a minimum this horizontal rotation. */
    minHorizontalRotation?: number;
    /** @remarks If defined, only players that have at least this level are returned. */
    minLevel?: number;
    /** @remarks If specified, will only include entities that have at least this vertical rotation. */
    minVerticalRotation?: number;
    /** @remarks Includes entities with the specified name. */
    name?: string;
    /** @remarks Gets/sets a collection of EntityQueryScoreOptions objects with filters for specific scoreboard objectives. */
    scoreOptions?: EntityQueryScoreOptions[];
    /** @remarks Includes entities that match all of the specified tags. */
    tags?: string[];
    /** @remarks If defined, entities that match this type are included. */
    type?: string;
}

/** Contains additional options for filtering players based on their score for an objective. */
export interface EntityQueryScoreOptions {
    /** @remarks If set to true, entities and players within this score range are excluded from query results. */
    exclude?: boolean;
    /** @remarks If defined, only players that have a score equal to or under maxScore are included. */
    maxScore?: number;
    /** @remarks If defined, only players that have a score equal to or over minScore are included. */
    minScore?: number;
    /** @remarks Identifier of the scoreboard objective to filter on. */
    objective?: string;
}

/** Contains information for entity raycast hit results. */
export interface EntityRaycastHit {
    /** @remarks Distance from ray origin to entity bounds. */
    distance: number;
    /** @remarks Entity that was hit. */
    entity: Entity;
}

/** Contains additional options for an entity raycast operation. */
export interface EntityRaycastOptions {
    /** @remarks Maximum distance, in blocks, to process the raycast. */
    maxDistance?: number;
}

/** Additional configuration options for {@link World.playMusic}/{@link World.queueMusic} methods. */
export interface MusicOptions {
    /** @remarks Specifies a fade overlap for music at the end of play. */
    fade?: number;
    /** @remarks If set to true, this music track will play repeatedly. */
    loop?: boolean;
    /** @remarks Relative volume level of the music. */
    volume?: number;
}

/** Additional options for how a sound plays for a player. */
export interface PlayerSoundOptions {
    /** @remarks Location of the sound; if not specified, the sound is played near a player. */
    location?: Vector3;
    /** @remarks Optional pitch of the sound. */
    pitch?: number;
    /** @remarks Optional volume of the sound. */
    volume?: number;
}

/** Defines a JSON structure that is used for more flexible. */
export interface RawMessage {
    /** @remarks Provides a raw-text equivalent of the current message. */
    rawtext?: RawMessage[];
    /** @remarks Provides a token that will get replaced with the value of a score. */
    score?: RawMessageScore;
    /** @remarks Provides a string literal value to use. */
    text?: string;
    /** 
     * @remarks
     * Provides a translation token where, if the client has an available resource in the players' language which matches the token,
     * will get translated on the client.
     */
    translate?: string;
    /** 
     * @remarks
     * Arguments for the translation token.
     * Can be either an array of strings or RawMessage containing an array of raw text objects.
     */
    with?: string[] | RawMessage;
}

/** Provides a description of a score token to use within a raw message. */
export interface RawMessageScore {
    /** @remarks Name of the score value to match. */
    name?: string;
    /** @remarks Name of the score value to match. */
    objective?: string;
}

/** Represents a fully customizable color within Minecraft. */
export interface RGB {
    /** 
     * @remarks
     * Determines a color's blue component.
     * Valid values are between 0 and 1.0.
     */
    blue: number;
    /** 
     * @remarks
     * Determines a color's green component.
     * Valid values are between 0 and 1.0.
     */
    green: number;
    /** 
     * @remarks
     * Determines a color's red component.
     * Valid values are between 0 and 1.0.
     */
    red: number;
}

/** Represents a fully customizable color within Minecraft. */
export interface RGBA extends RGB {
    /** 
     * @remarks
     * Determines a color's alpha (opacity) component.
     * Valid values are between 0 (transparent) and 1.0 (opaque).
     */
    alpha: number;
}

/** Contains additional options for how a scoreboard should be displayed within its display slot. */
export interface ScoreboardObjectiveDisplayOptions {
    /** @remarks Objective to be displayed. */
    objective: ScoreboardObjective;
    /** @remarks The sort order to display the objective items within. */
    sortOrder?: ObjectiveSortOrder;
}

/** Contains additional options for registering a script event event callback. */
export interface ScriptEventMessageFilterOptions {
    /** @remarks Optional list of namespaces to filter inbound script event messages. */
    namespaces: string[];
}

/** Contains additional options for teleporting an entity. */
export interface TeleportOptions {
    /** @remarks Whether to check whether blocks will block the entity after teleport. */
    checkForBlocks?: boolean;
    /** 
     * @remarks
     * Dimension to potentially move the entity to.
     * If not specified, the entity is teleported within the dimension that they reside.
     */
    dimension?: Dimension;
    /** @remarks Location that the entity should be facing after teleport. */
    facingLocation?: Vector3;
    /** @remarks Whether to retain the entities velocity after teleport. */
    keepVelocity?: boolean;
    /** @remarks Rotation of the entity after teleport. */
    rotation?: Vector2;
}

/** Contains additional options for displaying a title and optional subtitle. */
export interface TitleDisplayOptions {
    /** 
     * @remarks
     * Fade-in duration for the title and subtitle, in ticks.
     * 
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     */
    fadeInDuration: number;
    /** 
     * @remarks
     * Fade-out time for the title and subtitle, in ticks.
     * 
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     */
    fadeOutDuration: number;
    /** 
     * @remarks
     * Amount of time for the title and subtitle to stay in place, in ticks.
     * 
     * There are 20 ticks per second.
     * Use {@link TicksPerSecond} constant to convert between ticks and seconds.
     */
    stayDuration: number;
    /** @remarks Optional subtitle text. */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/** Represents a two-directional vector. */
export interface Vector2 {
    /** @remarks X component of the two-dimensional vector. */
    x: number;
    /** @remarks Y component of the two-dimensional vector. */
    y: number;
}

/** Contains a description of a vector. */
export interface Vector3 {
    /** @remarks X component of this vector. */
    x: number;
    /** @remarks Y component of this vector. */
    y: number;
    /** @remarks Z component of this vector. */
    z: number;
}

/** Contains additional options for a world-level playSound occurrence. */
export interface WorldSoundOptions {
    /** @remarks Pitch of the sound played at the world level. */
    pitch?: number;
    /** @remarks Relative volume and space by which this sound is heard. */
    volume?: number;
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

/** @remarks Holds the number of MoonPhases */
export const MoonPhaseCount = 8;
/** @remarks How many times the server ticks per second of real time. */
export const TicksPerSecond = 20;
/** @remarks A class that provides system-level events and functions. */
export const system: System;
/** @remarks A class that wraps the state of a world - a set of dimensions and the environment of Minecraft. */
export const world: World;