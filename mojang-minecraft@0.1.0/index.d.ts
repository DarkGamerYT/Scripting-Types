// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "mojang-minecraft",
 *     "version": "0.1.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum Direction {
    down = 0,
    up = 1,
    north = 2,
    south = 3,
    west = 4,
    east = 5,
}

export enum EntityDamageCause {
    anvil = "anvil",
    blockExplosion = "block_explosion",
    campfire = "campfire",
    charging = "charging",
    contact = "contact",
    drowning = "drowning",
    entityAttack = "entity_attack",
    entityExplosion = "entity_explosion",
    fall = "fall",
    fallingBlock = "falling_block",
    fire = "fire",
    fireTick = "fire_tick",
    fireworks = "fireworks",
    flyIntoWall = "fly_into_wall",
    freezing = "freezing",
    lava = "lava",
    lightning = "lightning",
    magic = "magic",
    magma = "magma",
    none = "none",
    override = "override",
    piston = "piston",
    projectile = "projectile",
    ramAttack = "ram_attack",
    selfDestruct = "self_destruct",
    sonicBoom = "sonic_boom",
    soulCampfire = "soul_campfire",
    stalactite = "stalactite",
    stalagmite = "stalagmite",
    starve = "starve",
    suffocation = "suffocation",
    temperature = "temperature",
    thorns = "thorns",
    void = "void",
    wither = "wither",
}

export enum GameMode {
    survival = 0,
    creative = 1,
    adventure = 2,
    spectator = 6,
}

export enum ScoreboardIdentityType {
    player = 1,
    entity = 2,
    fakePlayer = 3,
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BeforeChatEvent extends ChatEvent {
    private constructor();
    cancel: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    targets: Player[];
}

export class BeforeChatEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BeforeItemUseEvent extends ItemUseEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BeforeItemUseOnEvent extends ItemUseOnEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseOnEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    readonly id: string;
    readonly isEmpty: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    isWaterlogged: boolean;
    readonly location: BlockLocation;
    readonly permutation: BlockPermutation;
    readonly type: BlockType;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): BlockComponent | undefined;
    /** @remarks This function can't be called in read-only mode. */
    getTags(): string[];
    /** @remarks This function can't be called in read-only mode. */
    hasTag(tag: string): boolean;
    /** @remarks This function can't be called in read-only mode. */
    setPermutation(permutation: BlockPermutation): void;
    /** @remarks This function can't be called in read-only mode. */
    setType(blockType: BlockType): void;
}

export class BlockAreaSize {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    equals(other: BlockAreaSize): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    readonly location: BlockLocation;
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly container?: BlockInventoryComponentContainer;
}

export class BlockInventoryComponentContainer {
    private constructor();
    /** @throws This property can throw when used. */
    readonly emptySlotsCount: number;
    /** @throws This property can throw when used. */
    readonly size: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    fillLevel: number;
}

export class BlockLocation {
    /** @remarks This property can't be edited in read-only mode. */
    x: number;
    /** @remarks This property can't be edited in read-only mode. */
    y: number;
    /** @remarks This property can't be edited in read-only mode. */
    z: number;
    constructor(x: number, y: number, z: number);
    /** @remarks This function can't be called in read-only mode. */
    above(): BlockLocation;
    /** @remarks This function can't be called in read-only mode. */
    blocksBetween(other: BlockLocation): BlockLocation[];
    /** @remarks This function can't be called in read-only mode. */
    equals(other: BlockLocation): boolean;
    /** @remarks This function can't be called in read-only mode. */
    offset(x: number, y: number, z: number): BlockLocation;
}

export class BlockPermutation {
    private constructor();
    readonly type: BlockType;
    clone(): BlockPermutation;
    /** @remarks This function can't be called in read-only mode. */
    getAllProperties(): optional[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getProperty(propertyName: string): IBlockProperty | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly attachedBlocks: BlockLocation[];
    /** @throws This property can throw when used. */
    readonly isExpanded: boolean;
    /** @throws This property can throw when used. */
    readonly isExpanding: boolean;
    /** @throws This property can throw when used. */
    readonly isMoving: boolean;
    /** @throws This property can throw when used. */
    readonly isRetracted: boolean;
    /** @throws This property can throw when used. */
    readonly isRetracting: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
}

export class BlockRaycastOptions {
    /** @remarks This property can't be edited in read-only mode. */
    includeLiquidBlocks?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    includePassableBlocks?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    maxDistance?: number;
}

export class BlockRecordPlayerComponent {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

export class BlockType {
    private constructor();
    readonly canBeWaterlogged: boolean;
    readonly id: string;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    createDefaultBlockPermutation(): BlockPermutation;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BoolBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: boolean[];
    /** @remarks This property can't be edited in read-only mode. */
    value: boolean;
}

export class ChatEvent {
    private constructor();
    message: string;
    sender: Player;
    sendToTargets: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    targets: Player[];
}

export class Color {
    /** @remarks This property can't be edited in read-only mode. */
    alpha: number;
    /** @remarks This property can't be edited in read-only mode. */
    blue: number;
    /** @remarks This property can't be edited in read-only mode. */
    green: number;
    /** @remarks This property can't be edited in read-only mode. */
    red: number;
    constructor(red: number, green: number, blue: number, alpha: number);
}

export class Component {
    private constructor();
    readonly id: string;
}

export class Container {
    private constructor();
    /** @throws This property can throw when used. */
    readonly emptySlotsCount: number;
    /** @throws This property can throw when used. */
    readonly size: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class DataDrivenEntityTriggerEvent {
    private constructor();
    readonly entity: Entity;
    readonly id: string;
    readonly modifiers: DefinitionModifier[];
}

export class DataDrivenEntityTriggerEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
}

export class DefinitionModifier {
    readonly componentGroupsToAdd: string[];
    readonly componentGroupsToRemove: string[];
    triggers: Trigger[];
}

export class Dimension {
    private constructor();
    readonly id: string;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
    /** @remarks This function can't be called in read-only mode. */
    getBlock(location: BlockLocation): Block;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getEntities(options?: EntityQueryOptions): EntityIterator;
    /** @remarks This function can't be called in read-only mode. */
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /** @remarks This function can't be called in read-only mode. */
    isEmpty(location: BlockLocation): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): any;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
    /** @remarks This function can't be called in read-only mode. */
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;
}

export class DynamicPropertiesDefinition {
    /** @throws This function can throw errors. */
    defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition;
    /** @throws This function can throw errors. */
    defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition;
    /** @throws This function can throw errors. */
    defineString(identifier: string, maxLength: number, defaultValue?: string): DynamicPropertiesDefinition;
}

export class Effect {
    private constructor();
    readonly amplifier: number;
    readonly displayName: string;
    readonly duration: number;
}

export class EffectType {
    private constructor();
    getName(): string;
}

export class Entity {
    private constructor();
    /** @throws This property can throw when used. */
    readonly dimension: Dimension;
    /** @throws This property can throw when used. */
    readonly headLocation: Location;
    /** @throws This property can throw when used. */
    readonly id: string;
    /** @remarks This property can't be edited in read-only mode. */
    isSneaking: boolean;
    /** @throws This property can throw when used. */
    readonly location: Location;
    /** @remarks This property can't be edited in read-only mode. */
    nameTag: string;
    /** @throws This property can throw when used. */
    readonly rotation: XYRotation;
    /** @remarks This property can't be edited in read-only mode. */
    target: Entity;
    /** @throws This property can throw when used. */
    readonly velocity: Vector;
    /** @throws This property can throw when used. */
    readonly viewVector: Vector;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getBlockFromViewVector(options?: BlockRaycastOptions): Block | undefined;
    getComponent(componentId: string): IEntityComponent | undefined;
    getComponents(): IEntityComponent[];
    /** @throws This function can throw errors. */
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    /** @throws This function can throw errors. */
    getEffect(effectType: EffectType): Effect | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    /** @throws This function can throw errors. */
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    /** @throws This function can throw errors. */
    hasTag(tag: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    kill(): void;
    /** @throws This function can throw errors. */
    removeDynamicProperty(identifier: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): any;
    /** @throws This function can throw errors. */
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setVelocity(velocity: Vector): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location, keepVelocity?: boolean): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly entityType: string;
    /** @throws This property can throw when used. */
    readonly spawnEvent: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly dropItems: string[];
    /** @throws This property can throw when used. */
    readonly duration: number;
    /** @throws This property can throw when used. */
    readonly feedItems: EntityDefinitionFeedItem[];
    /** @throws This property can throw when used. */
    readonly growUp: Trigger;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly current: number;
    /** @throws This property can throw when used. */
    readonly value: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly maxTurn: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly breatheBlocks: BlockPermutation[];
    /** @throws This property can throw when used. */
    readonly breathesAir: boolean;
    /** @throws This property can throw when used. */
    readonly breathesLava: boolean;
    /** @throws This property can throw when used. */
    readonly breathesSolids: boolean;
    /** @throws This property can throw when used. */
    readonly breathesWater: boolean;
    /** @throws This property can throw when used. */
    readonly generatesBubbles: boolean;
    /** @throws This property can throw when used. */
    readonly inhaleTime: number;
    /** @throws This property can throw when used. */
    readonly nonBreatheBlocks: BlockPermutation[];
    /** @throws This property can throw when used. */
    readonly suffocateTime: number;
    /** @throws This property can throw when used. */
    readonly totalSupply: number;
    /** @throws This function can throw errors. */
    setAirSupply(value: number): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

export class EntityCreateEvent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    entity: Entity;
}

export class EntityCreateEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityCreateEvent) => void): void;
}

export class EntityDataDrivenTriggerEventOptions {
    /** @remarks This property can't be edited in read-only mode. */
    entities?: Entity[];
    /** @remarks This property can't be edited in read-only mode. */
    entityTypes?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    eventTypes?: string[];
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
}

export class EntityEventOptions {
    /** @remarks This property can't be edited in read-only mode. */
    entities?: Entity[];
    /** @remarks This property can't be edited in read-only mode. */
    entityTypes?: string[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly filters: FilterGroup;
    /** @throws This property can throw when used. */
    readonly forceUse: boolean;
    /** @throws This property can throw when used. */
    readonly items: FeedItem[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityHitEvent {
    private constructor();
    readonly entity: Entity;
    readonly hitBlock?: Block;
    readonly hitEntity?: Entity;
}

export class EntityHitEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
}

export class EntityHurtEvent {
    private constructor();
    readonly cause: string;
    readonly damage: number;
    readonly damagingEntity?: Entity;
    readonly hurtEntity: Entity;
    readonly projectile?: Entity;
}

export class EntityHurtEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly additionalSlotsPerStrength: number;
    /** @throws This property can throw when used. */
    readonly canBeSiphonedFrom: boolean;
    /** @throws This property can throw when used. */
    readonly container: InventoryComponentContainer;
    /** @throws This property can throw when used. */
    readonly containerType: string;
    /** @throws This property can throw when used. */
    readonly inventorySize: number;
    /** @throws This property can throw when used. */
    readonly private: boolean;
    /** @throws This property can throw when used. */
    readonly restrictToOwner: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyableComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly itemStack: ItemStack;
}

export class EntityIterator implements Iterable<Entity> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Entity>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<Entity>;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly softDistance: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unleash(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMountTamingComponent extends IEntityComponent {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly maxTurn: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly maxTurn: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly speedWhenTurning: number;
    /** @throws This property can throw when used. */
    readonly startSpeed: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly swayAmplitude: number;
    /** @throws This property can throw when used. */
    readonly swayFrequency: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly avoidDamageBlocks: boolean;
    /** @throws This property can throw when used. */
    readonly avoidPortals: boolean;
    /** @throws This property can throw when used. */
    readonly avoidSun: boolean;
    /** @throws This property can throw when used. */
    readonly avoidWater: boolean;
    /** @throws This property can throw when used. */
    readonly canBreach: boolean;
    /** @throws This property can throw when used. */
    readonly canBreakDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canFloat: boolean;
    /** @throws This property can throw when used. */
    readonly canJump: boolean;
    /** @throws This property can throw when used. */
    readonly canOpenDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canOpenIronDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canPassDoors: boolean;
    /** @throws This property can throw when used. */
    readonly canPathFromAir: boolean;
    /** @throws This property can throw when used. */
    readonly canPathOverLava: boolean;
    /** @throws This property can throw when used. */
    readonly canPathOverWater: boolean;
    /** @throws This property can throw when used. */
    readonly canSink: boolean;
    /** @throws This property can throw when used. */
    readonly canSwim: boolean;
    /** @throws This property can throw when used. */
    readonly canWalk: boolean;
    /** @throws This property can throw when used. */
    readonly canWalkInLava: boolean;
    /** @throws This property can throw when used. */
    readonly isAmphibious: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

export class EntityQueryOptions {
    /** @remarks This property can't be edited in read-only mode. */
    closest?: number;
    /** @remarks This property can't be edited in read-only mode. */
    excludeFamilies?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    excludeGameModes?: GameMode[];
    /** @remarks This property can't be edited in read-only mode. */
    excludeNames?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    excludeTags?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    excludeTypes?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    families?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    farthest?: number;
    /** @remarks This property can't be edited in read-only mode. */
    gameMode?: GameMode;
    /** @remarks This property can't be edited in read-only mode. */
    location?: Location;
    /** @remarks This property can't be edited in read-only mode. */
    maxDistance?: number;
    /** @remarks This property can't be edited in read-only mode. */
    maxHorizontalRotation?: number;
    /** @remarks This property can't be edited in read-only mode. */
    maxLevel?: number;
    /** @remarks This property can't be edited in read-only mode. */
    maxVerticalRotation?: number;
    /** @remarks This property can't be edited in read-only mode. */
    minDistance?: number;
    /** @remarks This property can't be edited in read-only mode. */
    minHorizontalRotation?: number;
    /** @remarks This property can't be edited in read-only mode. */
    minLevel?: number;
    /** @remarks This property can't be edited in read-only mode. */
    minVerticalRotation?: number;
    /** @remarks This property can't be edited in read-only mode. */
    name?: string;
    /** @remarks This property can't be edited in read-only mode. */
    scoreOptions?: EntityQueryScoreOptions[];
    /** @remarks This property can't be edited in read-only mode. */
    tags?: string[];
    /** @remarks This property can't be edited in read-only mode. */
    type?: string;
    /** @remarks This property can't be edited in read-only mode. */
    volume?: BlockAreaSize;
}

export class EntityQueryScoreOptions {
    /** @remarks This property can't be edited in read-only mode. */
    exclude?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    maxScore?: number;
    /** @remarks This property can't be edited in read-only mode. */
    minScore?: number;
    /** @remarks This property can't be edited in read-only mode. */
    objective?: string;
}

export class EntityRaycastOptions {
    /** @remarks This property can't be edited in read-only mode. */
    maxDistance?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly controllingSeat: number;
    /** @throws This property can throw when used. */
    readonly crouchingSkipInteract: boolean;
    /** @throws This property can throw when used. */
    readonly familyTypes: string[];
    /** @throws This property can throw when used. */
    readonly interactText: string;
    /** @throws This property can throw when used. */
    readonly pullInEntities: boolean;
    /** @throws This property can throw when used. */
    readonly riderCanInteract: boolean;
    /** @throws This property can throw when used. */
    readonly seatCount: number;
    /** @throws This property can throw when used. */
    readonly seats: Seat[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends IEntityComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly max: number;
    /** @throws This property can throw when used. */
    readonly value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly probability: number;
    /** @throws This property can throw when used. */
    readonly tameItems: string[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}

export class EntityType {
    private constructor();
    readonly id: string;
}

export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<EntityType>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<EntityType>;
}

export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityTypeIterator;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends IEntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends IEntityComponent {
    private constructor();
}

export class Events {
    private constructor();
    readonly beforeChat: BeforeChatEventSignal;
    readonly beforeItemUse: BeforeItemUseEventSignal;
    readonly beforeItemUseOn: BeforeItemUseOnEventSignal;
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal;
    readonly entityCreate: EntityCreateEventSignal;
    readonly entityHit: EntityHitEventSignal;
    readonly entityHurt: EntityHurtEventSignal;
    readonly itemCompleteCharge: ItemCompleteChargeEventSignal;
    readonly itemReleaseCharge: ItemReleaseChargeEventSignal;
    readonly itemStartCharge: ItemStartChargeEventSignal;
    readonly itemStopCharge: ItemStopChargeEventSignal;
    readonly itemUseOn: ItemUseOnEventSignal;
    readonly playerJoin: PlayerJoinEventSignal;
    readonly playerLeave: PlayerLeaveEventSignal;
    readonly tick: TickEventSignal;
    readonly weatherChange: WeatherChangeEventSignal;
    readonly worldInitialize: WorldInitializeEventSignal;
}

export class ExplosionOptions {
    /** @remarks This property can't be edited in read-only mode. */
    allowUnderwater?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    breaksBlocks?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    causesFire?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    source?: Entity;
}

export class FeedItem {
    private constructor();
    readonly effects: FeedItemEffect[];
    readonly healAmount: number;
    readonly item: string;
}

export class FeedItemEffect {
    private constructor();
    readonly amplifier: number;
    readonly chance: number;
    readonly duration: number;
    readonly name: string;
}

export class FilterGroup {
    private constructor();
}

export class FluidContainer {
    private constructor();
    static readonly maxFillLevel = 6;
    static readonly minFillLevel = 0;
}

export class IBlockProperty {
    private constructor();
    readonly name: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class IEntityComponent extends Component {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class IntBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: number[];
    /** @remarks This property can't be edited in read-only mode. */
    value: number;
}

export class InventoryComponentContainer {
    private constructor();
    /** @throws This property can throw when used. */
    readonly emptySlotsCount: number;
    /** @throws This property can throw when used. */
    readonly size: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class ItemCompleteChargeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteChargeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly cooldownCategory: string;
    /** @throws This property can throw when used. */
    readonly cooldownTicks: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    damage: number;
    /** @throws This property can throw when used. */
    readonly damageRange: NumberRange;
    /** @throws This property can throw when used. */
    readonly maxDurability: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly canAlwaysEat: boolean;
    /** @throws This property can throw when used. */
    readonly nutrition: number;
    /** @throws This property can throw when used. */
    readonly saturationModifier: number;
    /** @throws This property can throw when used. */
    readonly usingConvertsTo: string;
}

export class ItemReleaseChargeEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseChargeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}

export class Items {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    static get(itemId: string): ItemType | undefined;
}

export class ItemStack {
    /** @remarks This property can't be edited in read-only mode. */
    amount: number;
    /** @remarks This property can't be edited in read-only mode. */
    data: number;
    readonly id: string;
    /** @remarks This property can't be edited in read-only mode. */
    nameTag?: string;
    /** @throws This function can throw errors. */
    constructor(itemType: ItemType | string, amount?: number, data?: number);
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    getLore(): string[];
    hasComponent(componentId: string): boolean;
    /** @remarks This function can't be called in read-only mode. */
    setLore(loreList?: string[]): void;
}

export class ItemStartChargeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartChargeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
}

export class ItemStopChargeEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopChargeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
}

export class ItemType {
    private constructor();
    readonly id: string;
}

export class ItemUseEvent {
    private constructor();
    item: ItemStack;
    readonly source: Player;
}

export class ItemUseOnEvent {
    private constructor();
    readonly blockFace: Direction;
    /** @throws This property can throw when used. */
    readonly blockLocation: BlockLocation;
    item: ItemStack;
    readonly source: Player;
}

export class ItemUseOnEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}

export class Location {
    /** @remarks This property can't be edited in read-only mode. */
    x: number;
    /** @remarks This property can't be edited in read-only mode. */
    y: number;
    /** @remarks This property can't be edited in read-only mode. */
    z: number;
    constructor(x: number, y: number, z: number);
    /** @remarks This function can't be called in read-only mode. */
    equals(other: Location): boolean;
    /** @remarks This function can't be called in read-only mode. */
    isNear(other: Location, epsilon: number): boolean;
}

export class MinecraftBlockTypes {
    private constructor();
    static readonly air: BlockType;
    static readonly barrier: BlockType;
    static get(typeName: string): BlockType | undefined;
    static getAllBlockTypes(): BlockType[];
}

export class MinecraftDimensionTypes {
    private constructor();
    static readonly nether = "minecraft:nether";
    static readonly overworld = "minecraft:overworld";
    static readonly theEnd = "minecraft:the_end";
}

export class MinecraftEffectTypes {
    private constructor();
    static readonly healthBoost: EffectType;
    static readonly jumpBoost: EffectType;
    static readonly levitation: EffectType;
    static readonly regeneration: EffectType;
    static readonly saturation: EffectType;
    static readonly slowFalling: EffectType;
    static readonly slowness: EffectType;
    static readonly speed: EffectType;
}

export class MinecraftItemTypes {
    private constructor();
    static readonly air: ItemType;
}

export class MolangVariableMap {
    /** @throws This function can throw errors. */
    setColorRGB(variableName: string, color: Color): void;
    /** @throws This function can throw errors. */
    setColorRGBA(variableName: string, color: Color): void;
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}

export class MusicOptions {
    /** @remarks This property can't be edited in read-only mode. */
    fade?: number;
    /** @remarks This property can't be edited in read-only mode. */
    loop?: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    volume?: number;
}

export class NumberRange {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    max: number;
    /** @remarks This property can't be edited in read-only mode. */
    min: number;
    /** @remarks This function can't be called in read-only mode. */
    next(): number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /** @throws This property can throw when used. */
    readonly name: string;
    /** @remarks This property can't be edited in read-only mode. */
    selectedSlot: number;
    /** @throws This function can throw errors. */
    getItemCooldown(itemCategory: string): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundId: string, soundOptions?: SoundOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
}

export class PlayerInventoryComponentContainer {
    private constructor();
    /** @throws This property can throw when used. */
    readonly emptySlotsCount: number;
    /** @throws This property can throw when used. */
    readonly size: number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class PlayerIterator implements Iterable<Player> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Player>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<Player>;
}

export class PlayerJoinEvent {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    player: Player;
}

export class PlayerJoinEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}

export class PlayerLeaveEvent {
    private constructor();
    readonly playerName: string;
}

export class PlayerLeaveEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}

export class PropertyRegistry {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityTypeOrId: EntityType | string,
    ): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
}

export class Scoreboard {
    private constructor();
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
}

export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly type: ScoreboardIdentityType;
    /** @throws This function can throw errors. */
    getEntity(): Entity | undefined;
}

export class ScoreboardObjective {
    private constructor();
    /** @throws This property can throw when used. */
    readonly displayName: string;
    /** @throws This property can throw when used. */
    readonly id: string;
    /** @throws This function can throw errors. */
    getParticipants(): ScoreboardIdentity[];
    /** @throws This function can throw errors. */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /** @throws This function can throw errors. */
    getScores(): ScoreboardScoreInfo[];
}

export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}

export class Seat {
    private constructor();
    readonly lockRiderRotation: number;
    readonly maxRiderCount: number;
    readonly minRiderCount: number;
    readonly position: Location;
}

export class SoundOptions {
    /** @remarks This property can't be edited in read-only mode. */
    location?: Location;
    /** @remarks This property can't be edited in read-only mode. */
    pitch?: number;
    /** @remarks This property can't be edited in read-only mode. */
    volume?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class StringBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: string[];
    /** @remarks This property can't be edited in read-only mode. */
    value: string;
}

export class TickEvent {
    private constructor();
    readonly currentTick: number;
    readonly deltaTime: number;
}

export class TickEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TickEvent) => void): void;
}

export class Trigger {
    eventName: string;
    constructor(eventName: string);
}

export class Vector {
    x: number;
    y: number;
    z: number;
    static readonly back: Vector;
    static readonly down: Vector;
    static readonly forward: Vector;
    static readonly left: Vector;
    static readonly one: Vector;
    static readonly right: Vector;
    static readonly up: Vector;
    static readonly zero: Vector;
    constructor(x: number, y: number, z: number);
    equals(other: Vector): boolean;
    length(): number;
    normalized(): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static add(a: Vector, b: Vector): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static cross(a: Vector, b: Vector): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static distance(a: Vector, b: Vector): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    static divide(a: Vector, b: number | Vector): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static lerp(a: Vector, b: Vector, t: number): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static max(a: Vector, b: Vector): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static min(a: Vector, b: Vector): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static multiply(a: Vector, b: number | Vector): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static slerp(a: Vector, b: Vector, t: number): Vector;
    /** @remarks This function can't be called in read-only mode. */
    static subtract(a: Vector, b: Vector): Vector;
}

export class WeatherChangeEvent {
    private constructor();
    readonly dimension: string;
    readonly lightning: boolean;
    readonly raining: boolean;
}

export class WeatherChangeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}

export class World {
    private constructor();
    readonly events: Events;
    readonly scoreboard: Scoreboard;
    /** @remarks This function can't be called in read-only mode. */
    broadcastClientMessage(id: string, value: string): void;
    /** @throws This function can throw errors. */
    getDimension(dimensionId: string): Dimension;
    /** @throws This function can throw errors. */
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    /** @remarks This function can't be called in read-only mode. */
    stopMusic(): void;
}

export class WorldInitializeEvent {
    private constructor();
    readonly propertyRegistry: PropertyRegistry;
}

export class WorldInitializeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}

export class XYRotation {
    private constructor();
    x: number;
    y: number;
}

export const TicksPerSecond = 20;
export const world: World;