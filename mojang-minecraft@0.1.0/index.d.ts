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
    sonicBoom = "sonic_boom",
    soulCampfire = "soul_campfire",
    stalactite = "stalactite",
    stalagmite = "stalagmite",
    starve = "starve",
    suffocation = "suffocation",
    suicide = "suicide",
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
    targets: Player[];
}

export class BeforeChatEventSignal {
    private constructor();
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BeforeItemUseEvent extends ItemUseEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseEventSignal {
    private constructor();
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BeforeItemUseOnEvent extends ItemUseOnEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseOnEventSignal {
    private constructor();
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    readonly id: string;
    readonly isEmpty: boolean;
    isWaterlogged: boolean;
    readonly location: BlockLocation;
    readonly permutation: BlockPermutation;
    readonly type: BlockType;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    getComponent(componentName: string): BlockComponent | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    setPermutation(permutation: BlockPermutation): void;
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
    readonly container?: BlockInventoryComponentContainer;
}

export class BlockInventoryComponentContainer {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    fillLevel: number;
}

export class BlockLocation {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    above(): BlockLocation;
    blocksBetween(other: BlockLocation): BlockLocation[];
    equals(other: BlockLocation): boolean;
    offset(x: number, y: number, z: number): BlockLocation;
}

export class BlockPermutation {
    private constructor();
    readonly type: BlockType;
    clone(): BlockPermutation;
    getAllProperties(): optional[];
    getProperty(propertyName: string): IBlockProperty | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    readonly attachedBlocks: BlockLocation[];
    readonly isExpanded: boolean;
    readonly isExpanding: boolean;
    readonly isMoving: boolean;
    readonly isRetracted: boolean;
    readonly isRetracting: boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    setPotionType(item: ItemStack): void;
}

export class BlockRaycastOptions {
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export class BlockRecordPlayerComponent {
    private constructor();
    clearRecord(): void;
    isPlaying(): boolean;
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
    createDefaultBlockPermutation(): BlockPermutation;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    addDye(itemType: ItemType): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class BoolBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: boolean[];
    value: boolean;
}

export class ChatEvent {
    private constructor();
    message: string;
    sender: Player;
    sendToTargets: boolean;
    targets: Player[];
}

export class Color {
    alpha: number;
    blue: number;
    green: number;
    red: number;
    constructor(red: number, green: number, blue: number, alpha: number);
}

export class Component {
    private constructor();
    readonly id: string;
}

export class Container {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
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
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
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
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
    getBlock(location: BlockLocation): Block;
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block | undefined;
    getEntities(options?: EntityQueryOptions): EntityIterator;
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    isEmpty(location: BlockLocation): boolean;
    runCommand(commandString: string): any;
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;
}

export class DynamicPropertiesDefinition {
    defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition;
    defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition;
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
    readonly dimension: Dimension;
    readonly headLocation: Location;
    readonly id: string;
    isSneaking: boolean;
    readonly location: Location;
    nameTag: string;
    readonly rotation: XYRotation;
    target: Entity;
    readonly velocity: Vector;
    readonly viewVector: Vector;
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    addTag(tag: string): boolean;
    getBlockFromViewVector(options?: BlockRaycastOptions): Block | undefined;
    getComponent(componentId: string): IEntityComponent | undefined;
    getComponents(): IEntityComponent[];
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    getEffect(effectType: EffectType): Effect | undefined;
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    kill(): void;
    removeDynamicProperty(identifier: string): boolean;
    removeTag(tag: string): boolean;
    runCommand(commandString: string): any;
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    setRotation(degreesX: number, degreesY: number): void;
    setVelocity(velocity: Vector): void;
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void;
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location, keepVelocity?: boolean): void;
    triggerEvent(eventName: string): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends IEntityComponent {
    private constructor();
    readonly entityType: string;
    readonly spawnEvent: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends IEntityComponent {
    private constructor();
    readonly dropItems: string[];
    readonly duration: number;
    readonly feedItems: EntityDefinitionFeedItem[];
    readonly growUp: Trigger;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends IEntityComponent {
    private constructor();
    readonly current: number;
    readonly value: number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrent(value: number): boolean;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends IEntityComponent {
    private constructor();
    readonly maxTurn: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends IEntityComponent {
    private constructor();
    readonly breatheBlocks: BlockPermutation[];
    readonly breathesAir: boolean;
    readonly breathesLava: boolean;
    readonly breathesSolids: boolean;
    readonly breathesWater: boolean;
    readonly generatesBubbles: boolean;
    readonly inhaleTime: number;
    readonly nonBreatheBlocks: BlockPermutation[];
    readonly suffocateTime: number;
    readonly totalSupply: number;
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
    value: number;
}

export class EntityCreateEvent {
    private constructor();
    entity: Entity;
}

export class EntityCreateEventSignal {
    private constructor();
    subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void;
    unsubscribe(callback: (arg: EntityCreateEvent) => void): void;
}

export class EntityDataDrivenTriggerEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
    eventTypes?: string[];
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
}

export class EntityEventOptions {
    entities?: Entity[];
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
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends IEntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends IEntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends IEntityComponent {
    private constructor();
    readonly filters: FilterGroup;
    readonly forceUse: boolean;
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
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
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
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends IEntityComponent {
    private constructor();
    readonly additionalSlotsPerStrength: number;
    readonly canBeSiphonedFrom: boolean;
    readonly container: InventoryComponentContainer;
    readonly containerType: string;
    readonly inventorySize: number;
    readonly private: boolean;
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
    readonly itemStack: ItemStack;
}

export class EntityIterator implements Iterable<Entity> {
    private constructor();
    [Symbol.iterator](): Iterator<Entity>;
    next(): IteratorResult<Entity>;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends IEntityComponent {
    private constructor();
    readonly softDistance: number;
    leash(leashHolder: Entity): void;
    unleash(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends IEntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMountTamingComponent extends IEntityComponent {
    private constructor();
    setTamed(showParticles: boolean): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    private constructor();
    readonly maxTurn: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends IEntityComponent {
    private constructor();
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
    readonly speedWhenTurning: number;
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
    readonly swayAmplitude: number;
    readonly swayFrequency: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends IEntityComponent {
    private constructor();
    readonly avoidDamageBlocks: boolean;
    readonly avoidPortals: boolean;
    readonly avoidSun: boolean;
    readonly avoidWater: boolean;
    readonly canBreach: boolean;
    readonly canBreakDoors: boolean;
    readonly canFloat: boolean;
    readonly canJump: boolean;
    readonly canOpenDoors: boolean;
    readonly canOpenIronDoors: boolean;
    readonly canPassDoors: boolean;
    readonly canPathFromAir: boolean;
    readonly canPathOverLava: boolean;
    readonly canPathOverWater: boolean;
    readonly canSink: boolean;
    readonly canSwim: boolean;
    readonly canWalk: boolean;
    readonly canWalkInLava: boolean;
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
    value: number;
}

export class EntityQueryOptions {
    closest?: number;
    excludeFamilies?: string[];
    excludeGameModes?: GameMode[];
    excludeNames?: string[];
    excludeTags?: string[];
    excludeTypes?: string[];
    families?: string[];
    farthest?: number;
    gameMode?: GameMode;
    location?: Location;
    maxDistance?: number;
    maxHorizontalRotation?: number;
    maxLevel?: number;
    maxVerticalRotation?: number;
    minDistance?: number;
    minHorizontalRotation?: number;
    minLevel?: number;
    minVerticalRotation?: number;
    name?: string;
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    type?: string;
    volume?: BlockAreaSize;
}

export class EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}

export class EntityRaycastOptions {
    maxDistance?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends IEntityComponent {
    private constructor();
    readonly controllingSeat: number;
    readonly crouchingSkipInteract: boolean;
    readonly familyTypes: string[];
    readonly interactText: string;
    readonly pullInEntities: boolean;
    readonly riderCanInteract: boolean;
    readonly seatCount: number;
    readonly seats: Seat[];
    addRider(rider: Entity): boolean;
    ejectRider(rider: Entity): void;
    ejectRiders(): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends IEntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends IEntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends IEntityComponent {
    private constructor();
    readonly max: number;
    readonly value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends IEntityComponent {
    private constructor();
    readonly probability: number;
    readonly tameItems: string[];
    tame(): boolean;
}

export class EntityType {
    private constructor();
    readonly id: string;
}

export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    [Symbol.iterator](): Iterator<EntityType>;
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
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
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
    value: number;
}

export class InventoryComponentContainer {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
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
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    readonly cooldownCategory: string;
    readonly cooldownTicks: number;
    startCooldown(player: Player): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    damage: number;
    readonly damageRange: NumberRange;
    readonly maxDurability: number;
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    readonly canAlwaysEat: boolean;
    readonly nutrition: number;
    readonly saturationModifier: number;
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
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}

export class Items {
    private constructor();
    static get(itemId: string): ItemType | undefined;
}

export class ItemStack {
    amount: number;
    data: number;
    readonly id: string;
    nameTag?: string;
    constructor(itemType: ItemType | string, amount?: number, data?: number);
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    getLore(): string[];
    hasComponent(componentId: string): boolean;
    setLore(loreList?: string[]): void;
    triggerEvent(eventName: string): void;
}

export class ItemStartChargeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartChargeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
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
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
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
    readonly blockLocation: BlockLocation;
    item: ItemStack;
    readonly source: Player;
}

export class ItemUseOnEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}

export class Location {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    equals(other: Location): boolean;
    isNear(other: Location, epsilon: number): boolean;
}

export class MinecraftBlockProperties {
    private constructor();
    static readonly active = "active";
    static readonly age = "age";
    static readonly ageBit = "age_bit";
    static readonly allowUnderwaterBit = "allow_underwater_bit";
    static readonly attachedBit = "attached_bit";
    static readonly attachment = "attachment";
    static readonly bambooLeafSize = "bamboo_leaf_size";
    static readonly bambooStalkThickness = "bamboo_stalk_thickness";
    static readonly bigDripleafHead = "big_dripleaf_head";
    static readonly bigDripleafTilt = "big_dripleaf_tilt";
    static readonly biteCounter = "bite_counter";
    static readonly blockLightLevel = "block_light_level";
    static readonly bloom = "bloom";
    static readonly brewingStandSlotABit = "brewing_stand_slot_a_bit";
    static readonly brewingStandSlotBBit = "brewing_stand_slot_b_bit";
    static readonly brewingStandSlotCBit = "brewing_stand_slot_c_bit";
    static readonly buttonPressedBit = "button_pressed_bit";
    static readonly candles = "candles";
    static readonly canSummon = "can_summon";
    static readonly cauldronLiquid = "cauldron_liquid";
    static readonly chemistryTableType = "chemistry_table_type";
    static readonly chiselType = "chisel_type";
    static readonly clusterCount = "cluster_count";
    static readonly color = "color";
    static readonly colorBit = "color_bit";
    static readonly composterFillLevel = "composter_fill_level";
    static readonly conditionalBit = "conditional_bit";
    static readonly coralColor = "coral_color";
    static readonly coralDirection = "coral_direction";
    static readonly coralFanDirection = "coral_fan_direction";
    static readonly coralHangTypeBit = "coral_hang_type_bit";
    static readonly coveredBit = "covered_bit";
    static readonly crackedState = "cracked_state";
    static readonly damage = "damage";
    static readonly deadBit = "dead_bit";
    static readonly deprecated = "deprecated";
    static readonly direction = "direction";
    static readonly dirtType = "dirt_type";
    static readonly disarmedBit = "disarmed_bit";
    static readonly doorHingeBit = "door_hinge_bit";
    static readonly doublePlantType = "double_plant_type";
    static readonly dragDown = "drag_down";
    static readonly dripstoneThickness = "dripstone_thickness";
    static readonly endPortalEyeBit = "end_portal_eye_bit";
    static readonly explodeBit = "explode_bit";
    static readonly extinguished = "extinguished";
    static readonly facingDirection = "facing_direction";
    static readonly fillLevel = "fill_level";
    static readonly flowerType = "flower_type";
    static readonly groundSignDirection = "ground_sign_direction";
    static readonly growingPlantAge = "growing_plant_age";
    static readonly growth = "growth";
    static readonly hanging = "hanging";
    static readonly headPieceBit = "head_piece_bit";
    static readonly height = "height";
    static readonly honeyLevel = "honey_level";
    static readonly hugeMushroomBits = "huge_mushroom_bits";
    static readonly infiniburnBit = "infiniburn_bit";
    static readonly inWallBit = "in_wall_bit";
    static readonly itemFrameMapBit = "item_frame_map_bit";
    static readonly itemFramePhotoBit = "item_frame_photo_bit";
    static readonly kelpAge = "kelp_age";
    static readonly leverDirection = "lever_direction";
    static readonly liquidDepth = "liquid_depth";
    static readonly lit = "lit";
    static readonly moisturizedAmount = "moisturized_amount";
    static readonly monsterEggStoneType = "monster_egg_stone_type";
    static readonly multiFaceDirectionBits = "multi_face_direction_bits";
    static readonly newLeafType = "new_leaf_type";
    static readonly newLogType = "new_log_type";
    static readonly noDropBit = "no_drop_bit";
    static readonly occupiedBit = "occupied_bit";
    static readonly oldLeafType = "old_leaf_type";
    static readonly oldLogType = "old_log_type";
    static readonly openBit = "open_bit";
    static readonly outputLitBit = "output_lit_bit";
    static readonly outputSubtractBit = "output_subtract_bit";
    static readonly persistentBit = "persistent_bit";
    static readonly pillarAxis = "pillar_axis";
    static readonly portalAxis = "portal_axis";
    static readonly poweredBit = "powered_bit";
    static readonly prismarineBlockType = "prismarine_block_type";
    static readonly propaguleStage = "propagule_stage";
    static readonly railDataBit = "rail_data_bit";
    static readonly railDirection = "rail_direction";
    static readonly redstoneSignal = "redstone_signal";
    static readonly repeaterDelay = "repeater_delay";
    static readonly respawnAnchorCharge = "respawn_anchor_charge";
    static readonly rotation = "rotation";
    static readonly sandStoneType = "sand_stone_type";
    static readonly sandType = "sand_type";
    static readonly saplingType = "sapling_type";
    static readonly seaGrassType = "sea_grass_type";
    static readonly spongeType = "sponge_type";
    static readonly stability = "stability";
    static readonly stabilityCheck = "stability_check";
    static readonly stoneBrickType = "stone_brick_type";
    static readonly stoneSlabType = "stone_slab_type";
    static readonly stoneSlabType2 = "stone_slab_type_2";
    static readonly stoneSlabType3 = "stone_slab_type_3";
    static readonly stoneSlabType4 = "stone_slab_type_4";
    static readonly stoneType = "stone_type";
    static readonly strippedBit = "stripped_bit";
    static readonly structureBlockType = "structure_block_type";
    static readonly structureVoidType = "structure_void_type";
    static readonly suspendedBit = "suspended_bit";
    static readonly tallGrassType = "tall_grass_type";
    static readonly toggleBit = "toggle_bit";
    static readonly topSlotBit = "top_slot_bit";
    static readonly torchFacingDirection = "torch_facing_direction";
    static readonly triggeredBit = "triggered_bit";
    static readonly turtleEggCount = "turtle_egg_count";
    static readonly twistingVinesAge = "twisting_vines_age";
    static readonly updateBit = "update_bit";
    static readonly upperBlockBit = "upper_block_bit";
    static readonly upsideDownBit = "upside_down_bit";
    static readonly vineDirectionBits = "vine_direction_bits";
    static readonly wallBlockType = "wall_block_type";
    static readonly wallConnectionTypeEast = "wall_connection_type_east";
    static readonly wallConnectionTypeNorth = "wall_connection_type_north";
    static readonly wallConnectionTypeSouth = "wall_connection_type_south";
    static readonly wallConnectionTypeWest = "wall_connection_type_west";
    static readonly wallPostBit = "wall_post_bit";
    static readonly weepingVinesAge = "weeping_vines_age";
    static readonly weirdoDirection = "weirdo_direction";
    static readonly woodType = "wood_type";
}

export class MinecraftBlockTypes {
    private constructor();
    static readonly acaciaButton: BlockType;
    static readonly acaciaDoor: BlockType;
    static readonly acaciaFenceGate: BlockType;
    static readonly acaciaPressurePlate: BlockType;
    static readonly acaciaStairs: BlockType;
    static readonly acaciaStandingSign: BlockType;
    static readonly acaciaTrapdoor: BlockType;
    static readonly acaciaWallSign: BlockType;
    static readonly activatorRail: BlockType;
    static readonly air: BlockType;
    static readonly allow: BlockType;
    static readonly amethystBlock: BlockType;
    static readonly amethystCluster: BlockType;
    static readonly ancientDebris: BlockType;
    static readonly andesiteStairs: BlockType;
    static readonly anvil: BlockType;
    static readonly azalea: BlockType;
    static readonly azaleaLeaves: BlockType;
    static readonly azaleaLeavesFlowered: BlockType;
    static readonly bamboo: BlockType;
    static readonly bambooSapling: BlockType;
    static readonly barrel: BlockType;
    static readonly barrier: BlockType;
    static readonly basalt: BlockType;
    static readonly beacon: BlockType;
    static readonly bed: BlockType;
    static readonly bedrock: BlockType;
    static readonly beehive: BlockType;
    static readonly beeNest: BlockType;
    static readonly beetroot: BlockType;
    static readonly bell: BlockType;
    static readonly bigDripleaf: BlockType;
    static readonly birchButton: BlockType;
    static readonly birchDoor: BlockType;
    static readonly birchFenceGate: BlockType;
    static readonly birchPressurePlate: BlockType;
    static readonly birchStairs: BlockType;
    static readonly birchStandingSign: BlockType;
    static readonly birchTrapdoor: BlockType;
    static readonly birchWallSign: BlockType;
    static readonly blackCandle: BlockType;
    static readonly blackCandleCake: BlockType;
    static readonly blackGlazedTerracotta: BlockType;
    static readonly blackstone: BlockType;
    static readonly blackstoneDoubleSlab: BlockType;
    static readonly blackstoneSlab: BlockType;
    static readonly blackstoneStairs: BlockType;
    static readonly blackstoneWall: BlockType;
    static readonly blastFurnace: BlockType;
    static readonly blueCandle: BlockType;
    static readonly blueCandleCake: BlockType;
    static readonly blueGlazedTerracotta: BlockType;
    static readonly blueIce: BlockType;
    static readonly boneBlock: BlockType;
    static readonly bookshelf: BlockType;
    static readonly borderBlock: BlockType;
    static readonly brewingStand: BlockType;
    static readonly brickBlock: BlockType;
    static readonly brickStairs: BlockType;
    static readonly brownCandle: BlockType;
    static readonly brownCandleCake: BlockType;
    static readonly brownGlazedTerracotta: BlockType;
    static readonly brownMushroom: BlockType;
    static readonly brownMushroomBlock: BlockType;
    static readonly bubbleColumn: BlockType;
    static readonly buddingAmethyst: BlockType;
    static readonly cactus: BlockType;
    static readonly cake: BlockType;
    static readonly calcite: BlockType;
    static readonly camera: BlockType;
    static readonly campfire: BlockType;
    static readonly candle: BlockType;
    static readonly candleCake: BlockType;
    static readonly carrots: BlockType;
    static readonly cartographyTable: BlockType;
    static readonly carvedPumpkin: BlockType;
    static readonly cauldron: BlockType;
    static readonly caveVines: BlockType;
    static readonly caveVinesBodyWithBerries: BlockType;
    static readonly caveVinesHeadWithBerries: BlockType;
    static readonly chain: BlockType;
    static readonly chainCommandBlock: BlockType;
    static readonly chemicalHeat: BlockType;
    static readonly chemistryTable: BlockType;
    static readonly chest: BlockType;
    static readonly chiseledDeepslate: BlockType;
    static readonly chiseledNetherBricks: BlockType;
    static readonly chiseledPolishedBlackstone: BlockType;
    static readonly chorusFlower: BlockType;
    static readonly chorusPlant: BlockType;
    static readonly clay: BlockType;
    static readonly clientRequestPlaceholderBlock: BlockType;
    static readonly coalBlock: BlockType;
    static readonly coalOre: BlockType;
    static readonly cobbledDeepslate: BlockType;
    static readonly cobbledDeepslateDoubleSlab: BlockType;
    static readonly cobbledDeepslateSlab: BlockType;
    static readonly cobbledDeepslateStairs: BlockType;
    static readonly cobbledDeepslateWall: BlockType;
    static readonly cobblestone: BlockType;
    static readonly cobblestoneWall: BlockType;
    static readonly cocoa: BlockType;
    static readonly coloredTorchBp: BlockType;
    static readonly coloredTorchRg: BlockType;
    static readonly commandBlock: BlockType;
    static readonly composter: BlockType;
    static readonly conduit: BlockType;
    static readonly copperBlock: BlockType;
    static readonly copperOre: BlockType;
    static readonly coralBlock: BlockType;
    static readonly coralFan: BlockType;
    static readonly coralFanDead: BlockType;
    static readonly coralFanHang: BlockType;
    static readonly coralFanHang2: BlockType;
    static readonly coralFanHang3: BlockType;
    static readonly crackedDeepslateBricks: BlockType;
    static readonly crackedDeepslateTiles: BlockType;
    static readonly crackedNetherBricks: BlockType;
    static readonly crackedPolishedBlackstoneBricks: BlockType;
    static readonly craftingTable: BlockType;
    static readonly crimsonButton: BlockType;
    static readonly crimsonDoor: BlockType;
    static readonly crimsonDoubleSlab: BlockType;
    static readonly crimsonFence: BlockType;
    static readonly crimsonFenceGate: BlockType;
    static readonly crimsonFungus: BlockType;
    static readonly crimsonHyphae: BlockType;
    static readonly crimsonNylium: BlockType;
    static readonly crimsonPlanks: BlockType;
    static readonly crimsonPressurePlate: BlockType;
    static readonly crimsonRoots: BlockType;
    static readonly crimsonSlab: BlockType;
    static readonly crimsonStairs: BlockType;
    static readonly crimsonStandingSign: BlockType;
    static readonly crimsonStem: BlockType;
    static readonly crimsonTrapdoor: BlockType;
    static readonly crimsonWallSign: BlockType;
    static readonly cryingObsidian: BlockType;
    static readonly cutCopper: BlockType;
    static readonly cutCopperSlab: BlockType;
    static readonly cutCopperStairs: BlockType;
    static readonly cyanCandle: BlockType;
    static readonly cyanCandleCake: BlockType;
    static readonly cyanGlazedTerracotta: BlockType;
    static readonly darkOakButton: BlockType;
    static readonly darkOakDoor: BlockType;
    static readonly darkOakFenceGate: BlockType;
    static readonly darkOakPressurePlate: BlockType;
    static readonly darkOakStairs: BlockType;
    static readonly darkoakStandingSign: BlockType;
    static readonly darkOakTrapdoor: BlockType;
    static readonly darkoakWallSign: BlockType;
    static readonly darkPrismarineStairs: BlockType;
    static readonly daylightDetector: BlockType;
    static readonly daylightDetectorInverted: BlockType;
    static readonly deadbush: BlockType;
    static readonly deepslate: BlockType;
    static readonly deepslateBrickDoubleSlab: BlockType;
    static readonly deepslateBricks: BlockType;
    static readonly deepslateBrickSlab: BlockType;
    static readonly deepslateBrickStairs: BlockType;
    static readonly deepslateBrickWall: BlockType;
    static readonly deepslateCoalOre: BlockType;
    static readonly deepslateCopperOre: BlockType;
    static readonly deepslateDiamondOre: BlockType;
    static readonly deepslateEmeraldOre: BlockType;
    static readonly deepslateGoldOre: BlockType;
    static readonly deepslateIronOre: BlockType;
    static readonly deepslateLapisOre: BlockType;
    static readonly deepslateRedstoneOre: BlockType;
    static readonly deepslateTileDoubleSlab: BlockType;
    static readonly deepslateTiles: BlockType;
    static readonly deepslateTileSlab: BlockType;
    static readonly deepslateTileStairs: BlockType;
    static readonly deepslateTileWall: BlockType;
    static readonly deny: BlockType;
    static readonly detectorRail: BlockType;
    static readonly diamondBlock: BlockType;
    static readonly diamondOre: BlockType;
    static readonly dioriteStairs: BlockType;
    static readonly dirt: BlockType;
    static readonly dirtWithRoots: BlockType;
    static readonly dispenser: BlockType;
    static readonly doubleCutCopperSlab: BlockType;
    static readonly doublePlant: BlockType;
    static readonly doubleStoneBlockSlab: BlockType;
    static readonly doubleStoneBlockSlab2: BlockType;
    static readonly doubleStoneBlockSlab3: BlockType;
    static readonly doubleStoneBlockSlab4: BlockType;
    static readonly doubleStoneSlab: BlockType;
    static readonly doubleStoneSlab2: BlockType;
    static readonly doubleStoneSlab3: BlockType;
    static readonly doubleStoneSlab4: BlockType;
    static readonly doubleWoodenSlab: BlockType;
    static readonly dragonEgg: BlockType;
    static readonly driedKelpBlock: BlockType;
    static readonly dripstoneBlock: BlockType;
    static readonly dropper: BlockType;
    static readonly element0: BlockType;
    static readonly element1: BlockType;
    static readonly element10: BlockType;
    static readonly element100: BlockType;
    static readonly element101: BlockType;
    static readonly element102: BlockType;
    static readonly element103: BlockType;
    static readonly element104: BlockType;
    static readonly element105: BlockType;
    static readonly element106: BlockType;
    static readonly element107: BlockType;
    static readonly element108: BlockType;
    static readonly element109: BlockType;
    static readonly element11: BlockType;
    static readonly element110: BlockType;
    static readonly element111: BlockType;
    static readonly element112: BlockType;
    static readonly element113: BlockType;
    static readonly element114: BlockType;
    static readonly element115: BlockType;
    static readonly element116: BlockType;
    static readonly element117: BlockType;
    static readonly element118: BlockType;
    static readonly element12: BlockType;
    static readonly element13: BlockType;
    static readonly element14: BlockType;
    static readonly element15: BlockType;
    static readonly element16: BlockType;
    static readonly element17: BlockType;
    static readonly element18: BlockType;
    static readonly element19: BlockType;
    static readonly element2: BlockType;
    static readonly element20: BlockType;
    static readonly element21: BlockType;
    static readonly element22: BlockType;
    static readonly element23: BlockType;
    static readonly element24: BlockType;
    static readonly element25: BlockType;
    static readonly element26: BlockType;
    static readonly element27: BlockType;
    static readonly element28: BlockType;
    static readonly element29: BlockType;
    static readonly element3: BlockType;
    static readonly element30: BlockType;
    static readonly element31: BlockType;
    static readonly element32: BlockType;
    static readonly element33: BlockType;
    static readonly element34: BlockType;
    static readonly element35: BlockType;
    static readonly element36: BlockType;
    static readonly element37: BlockType;
    static readonly element38: BlockType;
    static readonly element39: BlockType;
    static readonly element4: BlockType;
    static readonly element40: BlockType;
    static readonly element41: BlockType;
    static readonly element42: BlockType;
    static readonly element43: BlockType;
    static readonly element44: BlockType;
    static readonly element45: BlockType;
    static readonly element46: BlockType;
    static readonly element47: BlockType;
    static readonly element48: BlockType;
    static readonly element49: BlockType;
    static readonly element5: BlockType;
    static readonly element50: BlockType;
    static readonly element51: BlockType;
    static readonly element52: BlockType;
    static readonly element53: BlockType;
    static readonly element54: BlockType;
    static readonly element55: BlockType;
    static readonly element56: BlockType;
    static readonly element57: BlockType;
    static readonly element58: BlockType;
    static readonly element59: BlockType;
    static readonly element6: BlockType;
    static readonly element60: BlockType;
    static readonly element61: BlockType;
    static readonly element62: BlockType;
    static readonly element63: BlockType;
    static readonly element64: BlockType;
    static readonly element65: BlockType;
    static readonly element66: BlockType;
    static readonly element67: BlockType;
    static readonly element68: BlockType;
    static readonly element69: BlockType;
    static readonly element7: BlockType;
    static readonly element70: BlockType;
    static readonly element71: BlockType;
    static readonly element72: BlockType;
    static readonly element73: BlockType;
    static readonly element74: BlockType;
    static readonly element75: BlockType;
    static readonly element76: BlockType;
    static readonly element77: BlockType;
    static readonly element78: BlockType;
    static readonly element79: BlockType;
    static readonly element8: BlockType;
    static readonly element80: BlockType;
    static readonly element81: BlockType;
    static readonly element82: BlockType;
    static readonly element83: BlockType;
    static readonly element84: BlockType;
    static readonly element85: BlockType;
    static readonly element86: BlockType;
    static readonly element87: BlockType;
    static readonly element88: BlockType;
    static readonly element89: BlockType;
    static readonly element9: BlockType;
    static readonly element90: BlockType;
    static readonly element91: BlockType;
    static readonly element92: BlockType;
    static readonly element93: BlockType;
    static readonly element94: BlockType;
    static readonly element95: BlockType;
    static readonly element96: BlockType;
    static readonly element97: BlockType;
    static readonly element98: BlockType;
    static readonly element99: BlockType;
    static readonly emeraldBlock: BlockType;
    static readonly emeraldOre: BlockType;
    static readonly enchantingTable: BlockType;
    static readonly endBricks: BlockType;
    static readonly endBrickStairs: BlockType;
    static readonly enderChest: BlockType;
    static readonly endGateway: BlockType;
    static readonly endPortal: BlockType;
    static readonly endPortalFrame: BlockType;
    static readonly endRod: BlockType;
    static readonly endStone: BlockType;
    static readonly exposedCopper: BlockType;
    static readonly exposedCutCopper: BlockType;
    static readonly exposedCutCopperSlab: BlockType;
    static readonly exposedCutCopperStairs: BlockType;
    static readonly exposedDoubleCutCopperSlab: BlockType;
    static readonly farmland: BlockType;
    static readonly fenceGate: BlockType;
    static readonly fire: BlockType;
    static readonly fletchingTable: BlockType;
    static readonly floweringAzalea: BlockType;
    static readonly flowerPot: BlockType;
    static readonly flowingLava: BlockType;
    static readonly flowingWater: BlockType;
    static readonly frame: BlockType;
    static readonly frogSpawn: BlockType;
    static readonly frostedIce: BlockType;
    static readonly furnace: BlockType;
    static readonly gildedBlackstone: BlockType;
    static readonly glass: BlockType;
    static readonly glassPane: BlockType;
    static readonly glowFrame: BlockType;
    static readonly glowingobsidian: BlockType;
    static readonly glowLichen: BlockType;
    static readonly glowstone: BlockType;
    static readonly goldBlock: BlockType;
    static readonly goldenRail: BlockType;
    static readonly goldOre: BlockType;
    static readonly graniteStairs: BlockType;
    static readonly grass: BlockType;
    static readonly grassPath: BlockType;
    static readonly gravel: BlockType;
    static readonly grayCandle: BlockType;
    static readonly grayCandleCake: BlockType;
    static readonly grayGlazedTerracotta: BlockType;
    static readonly greenCandle: BlockType;
    static readonly greenCandleCake: BlockType;
    static readonly greenGlazedTerracotta: BlockType;
    static readonly grindstone: BlockType;
    static readonly hangingRoots: BlockType;
    static readonly hardenedClay: BlockType;
    static readonly hardGlass: BlockType;
    static readonly hardGlassPane: BlockType;
    static readonly hayBlock: BlockType;
    static readonly heavyWeightedPressurePlate: BlockType;
    static readonly honeyBlock: BlockType;
    static readonly honeycombBlock: BlockType;
    static readonly hopper: BlockType;
    static readonly ice: BlockType;
    static readonly infestedDeepslate: BlockType;
    static readonly infoUpdate: BlockType;
    static readonly infoUpdate2: BlockType;
    static readonly invisibleBedrock: BlockType;
    static readonly ironBars: BlockType;
    static readonly ironBlock: BlockType;
    static readonly ironDoor: BlockType;
    static readonly ironOre: BlockType;
    static readonly ironTrapdoor: BlockType;
    static readonly jigsaw: BlockType;
    static readonly jukebox: BlockType;
    static readonly jungleButton: BlockType;
    static readonly jungleDoor: BlockType;
    static readonly jungleFenceGate: BlockType;
    static readonly junglePressurePlate: BlockType;
    static readonly jungleStairs: BlockType;
    static readonly jungleStandingSign: BlockType;
    static readonly jungleTrapdoor: BlockType;
    static readonly jungleWallSign: BlockType;
    static readonly kelp: BlockType;
    static readonly ladder: BlockType;
    static readonly lantern: BlockType;
    static readonly lapisBlock: BlockType;
    static readonly lapisOre: BlockType;
    static readonly largeAmethystBud: BlockType;
    static readonly lava: BlockType;
    static readonly leaves: BlockType;
    static readonly leaves2: BlockType;
    static readonly lectern: BlockType;
    static readonly lever: BlockType;
    static readonly lightBlock: BlockType;
    static readonly lightBlueCandle: BlockType;
    static readonly lightBlueCandleCake: BlockType;
    static readonly lightBlueGlazedTerracotta: BlockType;
    static readonly lightGrayCandle: BlockType;
    static readonly lightGrayCandleCake: BlockType;
    static readonly lightningRod: BlockType;
    static readonly lightWeightedPressurePlate: BlockType;
    static readonly limeCandle: BlockType;
    static readonly limeCandleCake: BlockType;
    static readonly limeGlazedTerracotta: BlockType;
    static readonly litBlastFurnace: BlockType;
    static readonly litDeepslateRedstoneOre: BlockType;
    static readonly litFurnace: BlockType;
    static readonly litPumpkin: BlockType;
    static readonly litRedstoneLamp: BlockType;
    static readonly litRedstoneOre: BlockType;
    static readonly litSmoker: BlockType;
    static readonly lodestone: BlockType;
    static readonly loom: BlockType;
    static readonly magentaCandle: BlockType;
    static readonly magentaCandleCake: BlockType;
    static readonly magentaGlazedTerracotta: BlockType;
    static readonly magma: BlockType;
    static readonly mangroveButton: BlockType;
    static readonly mangroveDoor: BlockType;
    static readonly mangroveDoubleSlab: BlockType;
    static readonly mangroveFence: BlockType;
    static readonly mangroveFenceGate: BlockType;
    static readonly mangroveLeaves: BlockType;
    static readonly mangroveLog: BlockType;
    static readonly mangrovePlanks: BlockType;
    static readonly mangrovePressurePlate: BlockType;
    static readonly mangrovePropagule: BlockType;
    static readonly mangroveRoots: BlockType;
    static readonly mangroveSlab: BlockType;
    static readonly mangroveStairs: BlockType;
    static readonly mangroveStandingSign: BlockType;
    static readonly mangroveTrapdoor: BlockType;
    static readonly mangroveWallSign: BlockType;
    static readonly mangroveWood: BlockType;
    static readonly mediumAmethystBud: BlockType;
    static readonly melonBlock: BlockType;
    static readonly melonStem: BlockType;
    static readonly mobSpawner: BlockType;
    static readonly monsterEgg: BlockType;
    static readonly mossBlock: BlockType;
    static readonly mossCarpet: BlockType;
    static readonly mossyCobblestone: BlockType;
    static readonly mossyCobblestoneStairs: BlockType;
    static readonly mossyStoneBrickStairs: BlockType;
    static readonly movingBlock: BlockType;
    static readonly mud: BlockType;
    static readonly mudBrickDoubleSlab: BlockType;
    static readonly mudBricks: BlockType;
    static readonly mudBrickSlab: BlockType;
    static readonly mudBrickStairs: BlockType;
    static readonly mudBrickWall: BlockType;
    static readonly muddyMangroveRoots: BlockType;
    static readonly mycelium: BlockType;
    static readonly netherBrick: BlockType;
    static readonly netherBrickFence: BlockType;
    static readonly netherBrickStairs: BlockType;
    static readonly netherGoldOre: BlockType;
    static readonly netheriteBlock: BlockType;
    static readonly netherrack: BlockType;
    static readonly netherreactor: BlockType;
    static readonly netherSprouts: BlockType;
    static readonly netherWart: BlockType;
    static readonly netherWartBlock: BlockType;
    static readonly normalStoneStairs: BlockType;
    static readonly noteblock: BlockType;
    static readonly oakStairs: BlockType;
    static readonly observer: BlockType;
    static readonly obsidian: BlockType;
    static readonly ochreFroglight: BlockType;
    static readonly orangeCandle: BlockType;
    static readonly orangeCandleCake: BlockType;
    static readonly orangeGlazedTerracotta: BlockType;
    static readonly oxidizedCopper: BlockType;
    static readonly oxidizedCutCopper: BlockType;
    static readonly oxidizedCutCopperSlab: BlockType;
    static readonly oxidizedCutCopperStairs: BlockType;
    static readonly oxidizedDoubleCutCopperSlab: BlockType;
    static readonly packedIce: BlockType;
    static readonly packedMud: BlockType;
    static readonly pearlescentFroglight: BlockType;
    static readonly pinkCandle: BlockType;
    static readonly pinkCandleCake: BlockType;
    static readonly pinkGlazedTerracotta: BlockType;
    static readonly piston: BlockType;
    static readonly pistonArmCollision: BlockType;
    static readonly podzol: BlockType;
    static readonly pointedDripstone: BlockType;
    static readonly polishedAndesiteStairs: BlockType;
    static readonly polishedBasalt: BlockType;
    static readonly polishedBlackstone: BlockType;
    static readonly polishedBlackstoneBrickDoubleSlab: BlockType;
    static readonly polishedBlackstoneBricks: BlockType;
    static readonly polishedBlackstoneBrickSlab: BlockType;
    static readonly polishedBlackstoneBrickStairs: BlockType;
    static readonly polishedBlackstoneBrickWall: BlockType;
    static readonly polishedBlackstoneButton: BlockType;
    static readonly polishedBlackstoneDoubleSlab: BlockType;
    static readonly polishedBlackstonePressurePlate: BlockType;
    static readonly polishedBlackstoneSlab: BlockType;
    static readonly polishedBlackstoneStairs: BlockType;
    static readonly polishedBlackstoneWall: BlockType;
    static readonly polishedDeepslate: BlockType;
    static readonly polishedDeepslateDoubleSlab: BlockType;
    static readonly polishedDeepslateSlab: BlockType;
    static readonly polishedDeepslateStairs: BlockType;
    static readonly polishedDeepslateWall: BlockType;
    static readonly polishedDioriteStairs: BlockType;
    static readonly polishedGraniteStairs: BlockType;
    static readonly portal: BlockType;
    static readonly potatoes: BlockType;
    static readonly powderSnow: BlockType;
    static readonly poweredComparator: BlockType;
    static readonly poweredRepeater: BlockType;
    static readonly prismarine: BlockType;
    static readonly prismarineBricksStairs: BlockType;
    static readonly prismarineStairs: BlockType;
    static readonly pumpkin: BlockType;
    static readonly pumpkinStem: BlockType;
    static readonly purpleCandle: BlockType;
    static readonly purpleCandleCake: BlockType;
    static readonly purpleGlazedTerracotta: BlockType;
    static readonly purpurBlock: BlockType;
    static readonly purpurStairs: BlockType;
    static readonly quartzBlock: BlockType;
    static readonly quartzBricks: BlockType;
    static readonly quartzOre: BlockType;
    static readonly quartzStairs: BlockType;
    static readonly rail: BlockType;
    static readonly rawCopperBlock: BlockType;
    static readonly rawGoldBlock: BlockType;
    static readonly rawIronBlock: BlockType;
    static readonly redCandle: BlockType;
    static readonly redCandleCake: BlockType;
    static readonly redFlower: BlockType;
    static readonly redGlazedTerracotta: BlockType;
    static readonly redMushroom: BlockType;
    static readonly redMushroomBlock: BlockType;
    static readonly redNetherBrick: BlockType;
    static readonly redNetherBrickStairs: BlockType;
    static readonly redSandstone: BlockType;
    static readonly redSandstoneStairs: BlockType;
    static readonly redstoneBlock: BlockType;
    static readonly redstoneLamp: BlockType;
    static readonly redstoneOre: BlockType;
    static readonly redstoneTorch: BlockType;
    static readonly redstoneWire: BlockType;
    static readonly reeds: BlockType;
    static readonly reinforcedDeepslate: BlockType;
    static readonly repeatingCommandBlock: BlockType;
    static readonly reserved6: BlockType;
    static readonly respawnAnchor: BlockType;
    static readonly sand: BlockType;
    static readonly sandstone: BlockType;
    static readonly sandstoneStairs: BlockType;
    static readonly sapling: BlockType;
    static readonly scaffolding: BlockType;
    static readonly sculk: BlockType;
    static readonly sculkCatalyst: BlockType;
    static readonly sculkSensor: BlockType;
    static readonly sculkShrieker: BlockType;
    static readonly sculkVein: BlockType;
    static readonly seagrass: BlockType;
    static readonly seaLantern: BlockType;
    static readonly seaPickle: BlockType;
    static readonly shroomlight: BlockType;
    static readonly silverGlazedTerracotta: BlockType;
    static readonly skull: BlockType;
    static readonly slime: BlockType;
    static readonly smallAmethystBud: BlockType;
    static readonly smallDripleafBlock: BlockType;
    static readonly smithingTable: BlockType;
    static readonly smoker: BlockType;
    static readonly smoothBasalt: BlockType;
    static readonly smoothQuartzStairs: BlockType;
    static readonly smoothRedSandstoneStairs: BlockType;
    static readonly smoothSandstoneStairs: BlockType;
    static readonly smoothStone: BlockType;
    static readonly snow: BlockType;
    static readonly snowLayer: BlockType;
    static readonly soulCampfire: BlockType;
    static readonly soulFire: BlockType;
    static readonly soulLantern: BlockType;
    static readonly soulSand: BlockType;
    static readonly soulSoil: BlockType;
    static readonly soulTorch: BlockType;
    static readonly sponge: BlockType;
    static readonly sporeBlossom: BlockType;
    static readonly spruceButton: BlockType;
    static readonly spruceDoor: BlockType;
    static readonly spruceFenceGate: BlockType;
    static readonly sprucePressurePlate: BlockType;
    static readonly spruceStairs: BlockType;
    static readonly spruceStandingSign: BlockType;
    static readonly spruceTrapdoor: BlockType;
    static readonly spruceWallSign: BlockType;
    static readonly standingBanner: BlockType;
    static readonly standingSign: BlockType;
    static readonly stickyPiston: BlockType;
    static readonly stickyPistonArmCollision: BlockType;
    static readonly stone: BlockType;
    static readonly stoneBlockSlab: BlockType;
    static readonly stoneBlockSlab2: BlockType;
    static readonly stoneBlockSlab3: BlockType;
    static readonly stoneBlockSlab4: BlockType;
    static readonly stonebrick: BlockType;
    static readonly stoneBrickStairs: BlockType;
    static readonly stoneButton: BlockType;
    static readonly stonecutter: BlockType;
    static readonly stonecutterBlock: BlockType;
    static readonly stonePressurePlate: BlockType;
    static readonly stoneSlab: BlockType;
    static readonly stoneSlab2: BlockType;
    static readonly stoneSlab3: BlockType;
    static readonly stoneSlab4: BlockType;
    static readonly stoneStairs: BlockType;
    static readonly strippedAcaciaLog: BlockType;
    static readonly strippedBirchLog: BlockType;
    static readonly strippedCrimsonHyphae: BlockType;
    static readonly strippedCrimsonStem: BlockType;
    static readonly strippedDarkOakLog: BlockType;
    static readonly strippedJungleLog: BlockType;
    static readonly strippedMangroveLog: BlockType;
    static readonly strippedMangroveWood: BlockType;
    static readonly strippedOakLog: BlockType;
    static readonly strippedSpruceLog: BlockType;
    static readonly strippedWarpedHyphae: BlockType;
    static readonly strippedWarpedStem: BlockType;
    static readonly structureBlock: BlockType;
    static readonly structureVoid: BlockType;
    static readonly sweetBerryBush: BlockType;
    static readonly tallgrass: BlockType;
    static readonly target: BlockType;
    static readonly tintedGlass: BlockType;
    static readonly tnt: BlockType;
    static readonly torch: BlockType;
    static readonly trapdoor: BlockType;
    static readonly trappedChest: BlockType;
    static readonly tripWire: BlockType;
    static readonly tripwireHook: BlockType;
    static readonly tuff: BlockType;
    static readonly turtleEgg: BlockType;
    static readonly twistingVines: BlockType;
    static readonly underwaterTorch: BlockType;
    static readonly undyedShulkerBox: BlockType;
    static readonly unknown: BlockType;
    static readonly unlitRedstoneTorch: BlockType;
    static readonly unpoweredComparator: BlockType;
    static readonly unpoweredRepeater: BlockType;
    static readonly verdantFroglight: BlockType;
    static readonly vine: BlockType;
    static readonly wallBanner: BlockType;
    static readonly wallSign: BlockType;
    static readonly warpedButton: BlockType;
    static readonly warpedDoor: BlockType;
    static readonly warpedDoubleSlab: BlockType;
    static readonly warpedFence: BlockType;
    static readonly warpedFenceGate: BlockType;
    static readonly warpedFungus: BlockType;
    static readonly warpedHyphae: BlockType;
    static readonly warpedNylium: BlockType;
    static readonly warpedPlanks: BlockType;
    static readonly warpedPressurePlate: BlockType;
    static readonly warpedRoots: BlockType;
    static readonly warpedSlab: BlockType;
    static readonly warpedStairs: BlockType;
    static readonly warpedStandingSign: BlockType;
    static readonly warpedStem: BlockType;
    static readonly warpedTrapdoor: BlockType;
    static readonly warpedWallSign: BlockType;
    static readonly warpedWartBlock: BlockType;
    static readonly water: BlockType;
    static readonly waterlily: BlockType;
    static readonly waxedCopper: BlockType;
    static readonly waxedCutCopper: BlockType;
    static readonly waxedCutCopperSlab: BlockType;
    static readonly waxedCutCopperStairs: BlockType;
    static readonly waxedDoubleCutCopperSlab: BlockType;
    static readonly waxedExposedCopper: BlockType;
    static readonly waxedExposedCutCopper: BlockType;
    static readonly waxedExposedCutCopperSlab: BlockType;
    static readonly waxedExposedCutCopperStairs: BlockType;
    static readonly waxedExposedDoubleCutCopperSlab: BlockType;
    static readonly waxedOxidizedCopper: BlockType;
    static readonly waxedOxidizedCutCopper: BlockType;
    static readonly waxedOxidizedCutCopperSlab: BlockType;
    static readonly waxedOxidizedCutCopperStairs: BlockType;
    static readonly waxedOxidizedDoubleCutCopperSlab: BlockType;
    static readonly waxedWeatheredCopper: BlockType;
    static readonly waxedWeatheredCutCopper: BlockType;
    static readonly waxedWeatheredCutCopperSlab: BlockType;
    static readonly waxedWeatheredCutCopperStairs: BlockType;
    static readonly waxedWeatheredDoubleCutCopperSlab: BlockType;
    static readonly weatheredCopper: BlockType;
    static readonly weatheredCutCopper: BlockType;
    static readonly weatheredCutCopperSlab: BlockType;
    static readonly weatheredCutCopperStairs: BlockType;
    static readonly weatheredDoubleCutCopperSlab: BlockType;
    static readonly web: BlockType;
    static readonly weepingVines: BlockType;
    static readonly wheat: BlockType;
    static readonly whiteCandle: BlockType;
    static readonly whiteCandleCake: BlockType;
    static readonly whiteGlazedTerracotta: BlockType;
    static readonly witherRose: BlockType;
    static readonly wood: BlockType;
    static readonly woodenButton: BlockType;
    static readonly woodenDoor: BlockType;
    static readonly woodenPressurePlate: BlockType;
    static readonly woodenSlab: BlockType;
    static readonly yellowCandle: BlockType;
    static readonly yellowCandleCake: BlockType;
    static readonly yellowFlower: BlockType;
    static readonly yellowGlazedTerracotta: BlockType;
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
    static readonly absorption: EffectType;
    static readonly badOmen: EffectType;
    static readonly blindness: EffectType;
    static readonly conduitPower: EffectType;
    static readonly darkness: EffectType;
    static readonly empty: EffectType;
    static readonly fatalPoison: EffectType;
    static readonly fireResistance: EffectType;
    static readonly haste: EffectType;
    static readonly healthBoost: EffectType;
    static readonly hunger: EffectType;
    static readonly instantDamage: EffectType;
    static readonly instantHealth: EffectType;
    static readonly invisibility: EffectType;
    static readonly jumpBoost: EffectType;
    static readonly levitation: EffectType;
    static readonly miningFatigue: EffectType;
    static readonly nausea: EffectType;
    static readonly nightVision: EffectType;
    static readonly poison: EffectType;
    static readonly regeneration: EffectType;
    static readonly resistance: EffectType;
    static readonly saturation: EffectType;
    static readonly slowFalling: EffectType;
    static readonly slowness: EffectType;
    static readonly speed: EffectType;
    static readonly strength: EffectType;
    static readonly villageHero: EffectType;
    static readonly waterBreathing: EffectType;
    static readonly weakness: EffectType;
    static readonly wither: EffectType;
}

export class MinecraftItemTypes {
    private constructor();
    static readonly acaciaBoat: ItemType;
    static readonly acaciaButton: ItemType;
    static readonly acaciaChestBoat: ItemType;
    static readonly acaciaDoor: ItemType;
    static readonly acaciaFence: ItemType;
    static readonly acaciaFenceGate: ItemType;
    static readonly acaciaPressurePlate: ItemType;
    static readonly acaciaSign: ItemType;
    static readonly acaciaStairs: ItemType;
    static readonly acaciaStandingSign: ItemType;
    static readonly acaciaTrapdoor: ItemType;
    static readonly acaciaWallSign: ItemType;
    static readonly activatorRail: ItemType;
    static readonly agentSpawnEgg: ItemType;
    static readonly air: ItemType;
    static readonly allaySpawnEgg: ItemType;
    static readonly allow: ItemType;
    static readonly amethystBlock: ItemType;
    static readonly amethystCluster: ItemType;
    static readonly amethystShard: ItemType;
    static readonly ancientDebris: ItemType;
    static readonly andesiteStairs: ItemType;
    static readonly anvil: ItemType;
    static readonly apple: ItemType;
    static readonly armorStand: ItemType;
    static readonly arrow: ItemType;
    static readonly axolotlBucket: ItemType;
    static readonly axolotlSpawnEgg: ItemType;
    static readonly azalea: ItemType;
    static readonly azaleaLeaves: ItemType;
    static readonly azaleaLeavesFlowered: ItemType;
    static readonly bakedPotato: ItemType;
    static readonly balloon: ItemType;
    static readonly bamboo: ItemType;
    static readonly bambooSapling: ItemType;
    static readonly banner: ItemType;
    static readonly bannerPattern: ItemType;
    static readonly barrel: ItemType;
    static readonly barrier: ItemType;
    static readonly basalt: ItemType;
    static readonly batSpawnEgg: ItemType;
    static readonly beacon: ItemType;
    static readonly bed: ItemType;
    static readonly bedrock: ItemType;
    static readonly beef: ItemType;
    static readonly beehive: ItemType;
    static readonly beeNest: ItemType;
    static readonly beeSpawnEgg: ItemType;
    static readonly beetroot: ItemType;
    static readonly beetrootSeeds: ItemType;
    static readonly beetrootSoup: ItemType;
    static readonly bell: ItemType;
    static readonly bigDripleaf: ItemType;
    static readonly birchBoat: ItemType;
    static readonly birchButton: ItemType;
    static readonly birchChestBoat: ItemType;
    static readonly birchDoor: ItemType;
    static readonly birchFence: ItemType;
    static readonly birchFenceGate: ItemType;
    static readonly birchPressurePlate: ItemType;
    static readonly birchSign: ItemType;
    static readonly birchStairs: ItemType;
    static readonly birchStandingSign: ItemType;
    static readonly birchTrapdoor: ItemType;
    static readonly birchWallSign: ItemType;
    static readonly blackCandle: ItemType;
    static readonly blackCandleCake: ItemType;
    static readonly blackDye: ItemType;
    static readonly blackGlazedTerracotta: ItemType;
    static readonly blackstone: ItemType;
    static readonly blackstoneDoubleSlab: ItemType;
    static readonly blackstoneSlab: ItemType;
    static readonly blackstoneStairs: ItemType;
    static readonly blackstoneWall: ItemType;
    static readonly blastFurnace: ItemType;
    static readonly blazePowder: ItemType;
    static readonly blazeRod: ItemType;
    static readonly blazeSpawnEgg: ItemType;
    static readonly bleach: ItemType;
    static readonly blueCandle: ItemType;
    static readonly blueCandleCake: ItemType;
    static readonly blueDye: ItemType;
    static readonly blueGlazedTerracotta: ItemType;
    static readonly blueIce: ItemType;
    static readonly boat: ItemType;
    static readonly bone: ItemType;
    static readonly boneBlock: ItemType;
    static readonly boneMeal: ItemType;
    static readonly book: ItemType;
    static readonly bookshelf: ItemType;
    static readonly borderBlock: ItemType;
    static readonly bordureIndentedBannerPattern: ItemType;
    static readonly bow: ItemType;
    static readonly bowl: ItemType;
    static readonly bread: ItemType;
    static readonly brewingStand: ItemType;
    static readonly brick: ItemType;
    static readonly brickBlock: ItemType;
    static readonly brickStairs: ItemType;
    static readonly brownCandle: ItemType;
    static readonly brownCandleCake: ItemType;
    static readonly brownDye: ItemType;
    static readonly brownGlazedTerracotta: ItemType;
    static readonly brownMushroom: ItemType;
    static readonly brownMushroomBlock: ItemType;
    static readonly bubbleColumn: ItemType;
    static readonly bucket: ItemType;
    static readonly buddingAmethyst: ItemType;
    static readonly cactus: ItemType;
    static readonly cake: ItemType;
    static readonly calcite: ItemType;
    static readonly camera: ItemType;
    static readonly campfire: ItemType;
    static readonly candle: ItemType;
    static readonly candleCake: ItemType;
    static readonly carpet: ItemType;
    static readonly carrot: ItemType;
    static readonly carrotOnAStick: ItemType;
    static readonly carrots: ItemType;
    static readonly cartographyTable: ItemType;
    static readonly carvedPumpkin: ItemType;
    static readonly catSpawnEgg: ItemType;
    static readonly cauldron: ItemType;
    static readonly caveSpiderSpawnEgg: ItemType;
    static readonly caveVines: ItemType;
    static readonly caveVinesBodyWithBerries: ItemType;
    static readonly caveVinesHeadWithBerries: ItemType;
    static readonly chain: ItemType;
    static readonly chainCommandBlock: ItemType;
    static readonly chainmailBoots: ItemType;
    static readonly chainmailChestplate: ItemType;
    static readonly chainmailHelmet: ItemType;
    static readonly chainmailLeggings: ItemType;
    static readonly charcoal: ItemType;
    static readonly chemicalHeat: ItemType;
    static readonly chemistryTable: ItemType;
    static readonly chest: ItemType;
    static readonly chestBoat: ItemType;
    static readonly chestMinecart: ItemType;
    static readonly chicken: ItemType;
    static readonly chickenSpawnEgg: ItemType;
    static readonly chiseledDeepslate: ItemType;
    static readonly chiseledNetherBricks: ItemType;
    static readonly chiseledPolishedBlackstone: ItemType;
    static readonly chorusFlower: ItemType;
    static readonly chorusFruit: ItemType;
    static readonly chorusPlant: ItemType;
    static readonly clay: ItemType;
    static readonly clayBall: ItemType;
    static readonly clientRequestPlaceholderBlock: ItemType;
    static readonly clock: ItemType;
    static readonly coal: ItemType;
    static readonly coalBlock: ItemType;
    static readonly coalOre: ItemType;
    static readonly cobbledDeepslate: ItemType;
    static readonly cobbledDeepslateDoubleSlab: ItemType;
    static readonly cobbledDeepslateSlab: ItemType;
    static readonly cobbledDeepslateStairs: ItemType;
    static readonly cobbledDeepslateWall: ItemType;
    static readonly cobblestone: ItemType;
    static readonly cobblestoneWall: ItemType;
    static readonly cocoa: ItemType;
    static readonly cocoaBeans: ItemType;
    static readonly cod: ItemType;
    static readonly codBucket: ItemType;
    static readonly codSpawnEgg: ItemType;
    static readonly coloredTorchBp: ItemType;
    static readonly coloredTorchRg: ItemType;
    static readonly commandBlock: ItemType;
    static readonly commandBlockMinecart: ItemType;
    static readonly comparator: ItemType;
    static readonly compass: ItemType;
    static readonly composter: ItemType;
    static readonly compound: ItemType;
    static readonly concrete: ItemType;
    static readonly concretePowder: ItemType;
    static readonly conduit: ItemType;
    static readonly cookedBeef: ItemType;
    static readonly cookedChicken: ItemType;
    static readonly cookedCod: ItemType;
    static readonly cookedMutton: ItemType;
    static readonly cookedPorkchop: ItemType;
    static readonly cookedRabbit: ItemType;
    static readonly cookedSalmon: ItemType;
    static readonly cookie: ItemType;
    static readonly copperBlock: ItemType;
    static readonly copperIngot: ItemType;
    static readonly copperOre: ItemType;
    static readonly coral: ItemType;
    static readonly coralBlock: ItemType;
    static readonly coralFan: ItemType;
    static readonly coralFanDead: ItemType;
    static readonly coralFanHang: ItemType;
    static readonly coralFanHang2: ItemType;
    static readonly coralFanHang3: ItemType;
    static readonly cowSpawnEgg: ItemType;
    static readonly crackedDeepslateBricks: ItemType;
    static readonly crackedDeepslateTiles: ItemType;
    static readonly crackedNetherBricks: ItemType;
    static readonly crackedPolishedBlackstoneBricks: ItemType;
    static readonly craftingTable: ItemType;
    static readonly creeperBannerPattern: ItemType;
    static readonly creeperSpawnEgg: ItemType;
    static readonly crimsonButton: ItemType;
    static readonly crimsonDoor: ItemType;
    static readonly crimsonDoubleSlab: ItemType;
    static readonly crimsonFence: ItemType;
    static readonly crimsonFenceGate: ItemType;
    static readonly crimsonFungus: ItemType;
    static readonly crimsonHyphae: ItemType;
    static readonly crimsonNylium: ItemType;
    static readonly crimsonPlanks: ItemType;
    static readonly crimsonPressurePlate: ItemType;
    static readonly crimsonRoots: ItemType;
    static readonly crimsonSign: ItemType;
    static readonly crimsonSlab: ItemType;
    static readonly crimsonStairs: ItemType;
    static readonly crimsonStandingSign: ItemType;
    static readonly crimsonStem: ItemType;
    static readonly crimsonTrapdoor: ItemType;
    static readonly crimsonWallSign: ItemType;
    static readonly crossbow: ItemType;
    static readonly cryingObsidian: ItemType;
    static readonly cutCopper: ItemType;
    static readonly cutCopperSlab: ItemType;
    static readonly cutCopperStairs: ItemType;
    static readonly cyanCandle: ItemType;
    static readonly cyanCandleCake: ItemType;
    static readonly cyanDye: ItemType;
    static readonly cyanGlazedTerracotta: ItemType;
    static readonly darkOakBoat: ItemType;
    static readonly darkOakButton: ItemType;
    static readonly darkOakChestBoat: ItemType;
    static readonly darkOakDoor: ItemType;
    static readonly darkOakFence: ItemType;
    static readonly darkOakFenceGate: ItemType;
    static readonly darkOakPressurePlate: ItemType;
    static readonly darkOakSign: ItemType;
    static readonly darkOakStairs: ItemType;
    static readonly darkoakStandingSign: ItemType;
    static readonly darkOakTrapdoor: ItemType;
    static readonly darkoakWallSign: ItemType;
    static readonly darkPrismarineStairs: ItemType;
    static readonly daylightDetector: ItemType;
    static readonly daylightDetectorInverted: ItemType;
    static readonly deadbush: ItemType;
    static readonly deepslate: ItemType;
    static readonly deepslateBrickDoubleSlab: ItemType;
    static readonly deepslateBricks: ItemType;
    static readonly deepslateBrickSlab: ItemType;
    static readonly deepslateBrickStairs: ItemType;
    static readonly deepslateBrickWall: ItemType;
    static readonly deepslateCoalOre: ItemType;
    static readonly deepslateCopperOre: ItemType;
    static readonly deepslateDiamondOre: ItemType;
    static readonly deepslateEmeraldOre: ItemType;
    static readonly deepslateGoldOre: ItemType;
    static readonly deepslateIronOre: ItemType;
    static readonly deepslateLapisOre: ItemType;
    static readonly deepslateRedstoneOre: ItemType;
    static readonly deepslateTileDoubleSlab: ItemType;
    static readonly deepslateTiles: ItemType;
    static readonly deepslateTileSlab: ItemType;
    static readonly deepslateTileStairs: ItemType;
    static readonly deepslateTileWall: ItemType;
    static readonly deny: ItemType;
    static readonly detectorRail: ItemType;
    static readonly diamond: ItemType;
    static readonly diamondAxe: ItemType;
    static readonly diamondBlock: ItemType;
    static readonly diamondBoots: ItemType;
    static readonly diamondChestplate: ItemType;
    static readonly diamondHelmet: ItemType;
    static readonly diamondHoe: ItemType;
    static readonly diamondHorseArmor: ItemType;
    static readonly diamondLeggings: ItemType;
    static readonly diamondOre: ItemType;
    static readonly diamondPickaxe: ItemType;
    static readonly diamondShovel: ItemType;
    static readonly diamondSword: ItemType;
    static readonly dioriteStairs: ItemType;
    static readonly dirt: ItemType;
    static readonly dirtWithRoots: ItemType;
    static readonly discFragment5: ItemType;
    static readonly dispenser: ItemType;
    static readonly dolphinSpawnEgg: ItemType;
    static readonly donkeySpawnEgg: ItemType;
    static readonly doubleCutCopperSlab: ItemType;
    static readonly doublePlant: ItemType;
    static readonly doubleStoneBlockSlab: ItemType;
    static readonly doubleStoneBlockSlab2: ItemType;
    static readonly doubleStoneBlockSlab3: ItemType;
    static readonly doubleStoneBlockSlab4: ItemType;
    static readonly doubleWoodenSlab: ItemType;
    static readonly dragonBreath: ItemType;
    static readonly dragonEgg: ItemType;
    static readonly driedKelp: ItemType;
    static readonly driedKelpBlock: ItemType;
    static readonly dripstoneBlock: ItemType;
    static readonly dropper: ItemType;
    static readonly drownedSpawnEgg: ItemType;
    static readonly dye: ItemType;
    static readonly echoShard: ItemType;
    static readonly egg: ItemType;
    static readonly elderGuardianSpawnEgg: ItemType;
    static readonly element0: ItemType;
    static readonly element1: ItemType;
    static readonly element10: ItemType;
    static readonly element100: ItemType;
    static readonly element101: ItemType;
    static readonly element102: ItemType;
    static readonly element103: ItemType;
    static readonly element104: ItemType;
    static readonly element105: ItemType;
    static readonly element106: ItemType;
    static readonly element107: ItemType;
    static readonly element108: ItemType;
    static readonly element109: ItemType;
    static readonly element11: ItemType;
    static readonly element110: ItemType;
    static readonly element111: ItemType;
    static readonly element112: ItemType;
    static readonly element113: ItemType;
    static readonly element114: ItemType;
    static readonly element115: ItemType;
    static readonly element116: ItemType;
    static readonly element117: ItemType;
    static readonly element118: ItemType;
    static readonly element12: ItemType;
    static readonly element13: ItemType;
    static readonly element14: ItemType;
    static readonly element15: ItemType;
    static readonly element16: ItemType;
    static readonly element17: ItemType;
    static readonly element18: ItemType;
    static readonly element19: ItemType;
    static readonly element2: ItemType;
    static readonly element20: ItemType;
    static readonly element21: ItemType;
    static readonly element22: ItemType;
    static readonly element23: ItemType;
    static readonly element24: ItemType;
    static readonly element25: ItemType;
    static readonly element26: ItemType;
    static readonly element27: ItemType;
    static readonly element28: ItemType;
    static readonly element29: ItemType;
    static readonly element3: ItemType;
    static readonly element30: ItemType;
    static readonly element31: ItemType;
    static readonly element32: ItemType;
    static readonly element33: ItemType;
    static readonly element34: ItemType;
    static readonly element35: ItemType;
    static readonly element36: ItemType;
    static readonly element37: ItemType;
    static readonly element38: ItemType;
    static readonly element39: ItemType;
    static readonly element4: ItemType;
    static readonly element40: ItemType;
    static readonly element41: ItemType;
    static readonly element42: ItemType;
    static readonly element43: ItemType;
    static readonly element44: ItemType;
    static readonly element45: ItemType;
    static readonly element46: ItemType;
    static readonly element47: ItemType;
    static readonly element48: ItemType;
    static readonly element49: ItemType;
    static readonly element5: ItemType;
    static readonly element50: ItemType;
    static readonly element51: ItemType;
    static readonly element52: ItemType;
    static readonly element53: ItemType;
    static readonly element54: ItemType;
    static readonly element55: ItemType;
    static readonly element56: ItemType;
    static readonly element57: ItemType;
    static readonly element58: ItemType;
    static readonly element59: ItemType;
    static readonly element6: ItemType;
    static readonly element60: ItemType;
    static readonly element61: ItemType;
    static readonly element62: ItemType;
    static readonly element63: ItemType;
    static readonly element64: ItemType;
    static readonly element65: ItemType;
    static readonly element66: ItemType;
    static readonly element67: ItemType;
    static readonly element68: ItemType;
    static readonly element69: ItemType;
    static readonly element7: ItemType;
    static readonly element70: ItemType;
    static readonly element71: ItemType;
    static readonly element72: ItemType;
    static readonly element73: ItemType;
    static readonly element74: ItemType;
    static readonly element75: ItemType;
    static readonly element76: ItemType;
    static readonly element77: ItemType;
    static readonly element78: ItemType;
    static readonly element79: ItemType;
    static readonly element8: ItemType;
    static readonly element80: ItemType;
    static readonly element81: ItemType;
    static readonly element82: ItemType;
    static readonly element83: ItemType;
    static readonly element84: ItemType;
    static readonly element85: ItemType;
    static readonly element86: ItemType;
    static readonly element87: ItemType;
    static readonly element88: ItemType;
    static readonly element89: ItemType;
    static readonly element9: ItemType;
    static readonly element90: ItemType;
    static readonly element91: ItemType;
    static readonly element92: ItemType;
    static readonly element93: ItemType;
    static readonly element94: ItemType;
    static readonly element95: ItemType;
    static readonly element96: ItemType;
    static readonly element97: ItemType;
    static readonly element98: ItemType;
    static readonly element99: ItemType;
    static readonly elytra: ItemType;
    static readonly emerald: ItemType;
    static readonly emeraldBlock: ItemType;
    static readonly emeraldOre: ItemType;
    static readonly emptyMap: ItemType;
    static readonly enchantedBook: ItemType;
    static readonly enchantedGoldenApple: ItemType;
    static readonly enchantingTable: ItemType;
    static readonly endBricks: ItemType;
    static readonly endBrickStairs: ItemType;
    static readonly endCrystal: ItemType;
    static readonly enderChest: ItemType;
    static readonly enderEye: ItemType;
    static readonly endermanSpawnEgg: ItemType;
    static readonly endermiteSpawnEgg: ItemType;
    static readonly enderPearl: ItemType;
    static readonly endGateway: ItemType;
    static readonly endPortal: ItemType;
    static readonly endPortalFrame: ItemType;
    static readonly endRod: ItemType;
    static readonly endStone: ItemType;
    static readonly evokerSpawnEgg: ItemType;
    static readonly experienceBottle: ItemType;
    static readonly exposedCopper: ItemType;
    static readonly exposedCutCopper: ItemType;
    static readonly exposedCutCopperSlab: ItemType;
    static readonly exposedCutCopperStairs: ItemType;
    static readonly exposedDoubleCutCopperSlab: ItemType;
    static readonly farmland: ItemType;
    static readonly feather: ItemType;
    static readonly fenceGate: ItemType;
    static readonly fermentedSpiderEye: ItemType;
    static readonly fieldMasonedBannerPattern: ItemType;
    static readonly filledMap: ItemType;
    static readonly fire: ItemType;
    static readonly fireCharge: ItemType;
    static readonly fireworkRocket: ItemType;
    static readonly fireworkStar: ItemType;
    static readonly fishingRod: ItemType;
    static readonly fletchingTable: ItemType;
    static readonly flint: ItemType;
    static readonly flintAndSteel: ItemType;
    static readonly flowerBannerPattern: ItemType;
    static readonly floweringAzalea: ItemType;
    static readonly flowerPot: ItemType;
    static readonly flowingLava: ItemType;
    static readonly flowingWater: ItemType;
    static readonly foxSpawnEgg: ItemType;
    static readonly frame: ItemType;
    static readonly frogSpawn: ItemType;
    static readonly frogSpawnEgg: ItemType;
    static readonly frostedIce: ItemType;
    static readonly furnace: ItemType;
    static readonly ghastSpawnEgg: ItemType;
    static readonly ghastTear: ItemType;
    static readonly gildedBlackstone: ItemType;
    static readonly glass: ItemType;
    static readonly glassBottle: ItemType;
    static readonly glassPane: ItemType;
    static readonly glisteringMelonSlice: ItemType;
    static readonly globeBannerPattern: ItemType;
    static readonly glowBerries: ItemType;
    static readonly glowFrame: ItemType;
    static readonly glowingobsidian: ItemType;
    static readonly glowInkSac: ItemType;
    static readonly glowLichen: ItemType;
    static readonly glowSquidSpawnEgg: ItemType;
    static readonly glowStick: ItemType;
    static readonly glowstone: ItemType;
    static readonly glowstoneDust: ItemType;
    static readonly goatHorn: ItemType;
    static readonly goatSpawnEgg: ItemType;
    static readonly goldBlock: ItemType;
    static readonly goldenApple: ItemType;
    static readonly goldenAxe: ItemType;
    static readonly goldenBoots: ItemType;
    static readonly goldenCarrot: ItemType;
    static readonly goldenChestplate: ItemType;
    static readonly goldenHelmet: ItemType;
    static readonly goldenHoe: ItemType;
    static readonly goldenHorseArmor: ItemType;
    static readonly goldenLeggings: ItemType;
    static readonly goldenPickaxe: ItemType;
    static readonly goldenRail: ItemType;
    static readonly goldenShovel: ItemType;
    static readonly goldenSword: ItemType;
    static readonly goldIngot: ItemType;
    static readonly goldNugget: ItemType;
    static readonly goldOre: ItemType;
    static readonly graniteStairs: ItemType;
    static readonly grass: ItemType;
    static readonly grassPath: ItemType;
    static readonly gravel: ItemType;
    static readonly grayCandle: ItemType;
    static readonly grayCandleCake: ItemType;
    static readonly grayDye: ItemType;
    static readonly grayGlazedTerracotta: ItemType;
    static readonly greenCandle: ItemType;
    static readonly greenCandleCake: ItemType;
    static readonly greenDye: ItemType;
    static readonly greenGlazedTerracotta: ItemType;
    static readonly grindstone: ItemType;
    static readonly guardianSpawnEgg: ItemType;
    static readonly gunpowder: ItemType;
    static readonly hangingRoots: ItemType;
    static readonly hardenedClay: ItemType;
    static readonly hardGlass: ItemType;
    static readonly hardGlassPane: ItemType;
    static readonly hardStainedGlass: ItemType;
    static readonly hardStainedGlassPane: ItemType;
    static readonly hayBlock: ItemType;
    static readonly heartOfTheSea: ItemType;
    static readonly heavyWeightedPressurePlate: ItemType;
    static readonly hoglinSpawnEgg: ItemType;
    static readonly honeyBlock: ItemType;
    static readonly honeyBottle: ItemType;
    static readonly honeycomb: ItemType;
    static readonly honeycombBlock: ItemType;
    static readonly hopper: ItemType;
    static readonly hopperMinecart: ItemType;
    static readonly horseSpawnEgg: ItemType;
    static readonly huskSpawnEgg: ItemType;
    static readonly ice: ItemType;
    static readonly iceBomb: ItemType;
    static readonly infestedDeepslate: ItemType;
    static readonly infoUpdate: ItemType;
    static readonly infoUpdate2: ItemType;
    static readonly inkSac: ItemType;
    static readonly invisibleBedrock: ItemType;
    static readonly ironAxe: ItemType;
    static readonly ironBars: ItemType;
    static readonly ironBlock: ItemType;
    static readonly ironBoots: ItemType;
    static readonly ironChestplate: ItemType;
    static readonly ironDoor: ItemType;
    static readonly ironHelmet: ItemType;
    static readonly ironHoe: ItemType;
    static readonly ironHorseArmor: ItemType;
    static readonly ironIngot: ItemType;
    static readonly ironLeggings: ItemType;
    static readonly ironNugget: ItemType;
    static readonly ironOre: ItemType;
    static readonly ironPickaxe: ItemType;
    static readonly ironShovel: ItemType;
    static readonly ironSword: ItemType;
    static readonly ironTrapdoor: ItemType;
    static readonly "item.acaciaDoor": ItemType;
    static readonly "item.bed": ItemType;
    static readonly "item.beetroot": ItemType;
    static readonly "item.birchDoor": ItemType;
    static readonly "item.brewingStand": ItemType;
    static readonly "item.cake": ItemType;
    static readonly "item.camera": ItemType;
    static readonly "item.campfire": ItemType;
    static readonly "item.cauldron": ItemType;
    static readonly "item.chain": ItemType;
    static readonly "item.crimsonDoor": ItemType;
    static readonly "item.darkOakDoor": ItemType;
    static readonly "item.flowerPot": ItemType;
    static readonly "item.frame": ItemType;
    static readonly "item.glowFrame": ItemType;
    static readonly "item.hopper": ItemType;
    static readonly "item.ironDoor": ItemType;
    static readonly "item.jungleDoor": ItemType;
    static readonly "item.kelp": ItemType;
    static readonly "item.mangroveDoor": ItemType;
    static readonly "item.netherSprouts": ItemType;
    static readonly "item.netherWart": ItemType;
    static readonly "item.reeds": ItemType;
    static readonly "item.skull": ItemType;
    static readonly "item.soulCampfire": ItemType;
    static readonly "item.spruceDoor": ItemType;
    static readonly "item.warpedDoor": ItemType;
    static readonly "item.wheat": ItemType;
    static readonly "item.woodenDoor": ItemType;
    static readonly jigsaw: ItemType;
    static readonly jukebox: ItemType;
    static readonly jungleBoat: ItemType;
    static readonly jungleButton: ItemType;
    static readonly jungleChestBoat: ItemType;
    static readonly jungleDoor: ItemType;
    static readonly jungleFence: ItemType;
    static readonly jungleFenceGate: ItemType;
    static readonly junglePressurePlate: ItemType;
    static readonly jungleSign: ItemType;
    static readonly jungleStairs: ItemType;
    static readonly jungleStandingSign: ItemType;
    static readonly jungleTrapdoor: ItemType;
    static readonly jungleWallSign: ItemType;
    static readonly kelp: ItemType;
    static readonly ladder: ItemType;
    static readonly lantern: ItemType;
    static readonly lapisBlock: ItemType;
    static readonly lapisLazuli: ItemType;
    static readonly lapisOre: ItemType;
    static readonly largeAmethystBud: ItemType;
    static readonly lava: ItemType;
    static readonly lavaBucket: ItemType;
    static readonly lead: ItemType;
    static readonly leather: ItemType;
    static readonly leatherBoots: ItemType;
    static readonly leatherChestplate: ItemType;
    static readonly leatherHelmet: ItemType;
    static readonly leatherHorseArmor: ItemType;
    static readonly leatherLeggings: ItemType;
    static readonly leaves: ItemType;
    static readonly leaves2: ItemType;
    static readonly lectern: ItemType;
    static readonly lever: ItemType;
    static readonly lightBlock: ItemType;
    static readonly lightBlueCandle: ItemType;
    static readonly lightBlueCandleCake: ItemType;
    static readonly lightBlueDye: ItemType;
    static readonly lightBlueGlazedTerracotta: ItemType;
    static readonly lightGrayCandle: ItemType;
    static readonly lightGrayCandleCake: ItemType;
    static readonly lightGrayDye: ItemType;
    static readonly lightningRod: ItemType;
    static readonly lightWeightedPressurePlate: ItemType;
    static readonly limeCandle: ItemType;
    static readonly limeCandleCake: ItemType;
    static readonly limeDye: ItemType;
    static readonly limeGlazedTerracotta: ItemType;
    static readonly lingeringPotion: ItemType;
    static readonly litBlastFurnace: ItemType;
    static readonly litDeepslateRedstoneOre: ItemType;
    static readonly litFurnace: ItemType;
    static readonly litPumpkin: ItemType;
    static readonly litRedstoneLamp: ItemType;
    static readonly litRedstoneOre: ItemType;
    static readonly litSmoker: ItemType;
    static readonly llamaSpawnEgg: ItemType;
    static readonly lodestone: ItemType;
    static readonly lodestoneCompass: ItemType;
    static readonly log: ItemType;
    static readonly log2: ItemType;
    static readonly loom: ItemType;
    static readonly magentaCandle: ItemType;
    static readonly magentaCandleCake: ItemType;
    static readonly magentaDye: ItemType;
    static readonly magentaGlazedTerracotta: ItemType;
    static readonly magma: ItemType;
    static readonly magmaCream: ItemType;
    static readonly magmaCubeSpawnEgg: ItemType;
    static readonly mangroveBoat: ItemType;
    static readonly mangroveButton: ItemType;
    static readonly mangroveChestBoat: ItemType;
    static readonly mangroveDoor: ItemType;
    static readonly mangroveDoubleSlab: ItemType;
    static readonly mangroveFence: ItemType;
    static readonly mangroveFenceGate: ItemType;
    static readonly mangroveLeaves: ItemType;
    static readonly mangroveLog: ItemType;
    static readonly mangrovePlanks: ItemType;
    static readonly mangrovePressurePlate: ItemType;
    static readonly mangrovePropagule: ItemType;
    static readonly mangroveRoots: ItemType;
    static readonly mangroveSign: ItemType;
    static readonly mangroveSlab: ItemType;
    static readonly mangroveStairs: ItemType;
    static readonly mangroveStandingSign: ItemType;
    static readonly mangroveTrapdoor: ItemType;
    static readonly mangroveWallSign: ItemType;
    static readonly mangroveWood: ItemType;
    static readonly medicine: ItemType;
    static readonly mediumAmethystBud: ItemType;
    static readonly melonBlock: ItemType;
    static readonly melonSeeds: ItemType;
    static readonly melonSlice: ItemType;
    static readonly melonStem: ItemType;
    static readonly milkBucket: ItemType;
    static readonly minecart: ItemType;
    static readonly mobSpawner: ItemType;
    static readonly mojangBannerPattern: ItemType;
    static readonly monsterEgg: ItemType;
    static readonly mooshroomSpawnEgg: ItemType;
    static readonly mossBlock: ItemType;
    static readonly mossCarpet: ItemType;
    static readonly mossyCobblestone: ItemType;
    static readonly mossyCobblestoneStairs: ItemType;
    static readonly mossyStoneBrickStairs: ItemType;
    static readonly movingBlock: ItemType;
    static readonly mud: ItemType;
    static readonly mudBrickDoubleSlab: ItemType;
    static readonly mudBricks: ItemType;
    static readonly mudBrickSlab: ItemType;
    static readonly mudBrickStairs: ItemType;
    static readonly mudBrickWall: ItemType;
    static readonly muddyMangroveRoots: ItemType;
    static readonly muleSpawnEgg: ItemType;
    static readonly mushroomStew: ItemType;
    static readonly musicDisc11: ItemType;
    static readonly musicDisc13: ItemType;
    static readonly musicDisc5: ItemType;
    static readonly musicDiscBlocks: ItemType;
    static readonly musicDiscCat: ItemType;
    static readonly musicDiscChirp: ItemType;
    static readonly musicDiscFar: ItemType;
    static readonly musicDiscMall: ItemType;
    static readonly musicDiscMellohi: ItemType;
    static readonly musicDiscOtherside: ItemType;
    static readonly musicDiscPigstep: ItemType;
    static readonly musicDiscStal: ItemType;
    static readonly musicDiscStrad: ItemType;
    static readonly musicDiscWait: ItemType;
    static readonly musicDiscWard: ItemType;
    static readonly mutton: ItemType;
    static readonly mycelium: ItemType;
    static readonly nameTag: ItemType;
    static readonly nautilusShell: ItemType;
    static readonly netherbrick: ItemType;
    static readonly netherBrick: ItemType;
    static readonly netherBrickFence: ItemType;
    static readonly netherBrickStairs: ItemType;
    static readonly netherGoldOre: ItemType;
    static readonly netheriteAxe: ItemType;
    static readonly netheriteBlock: ItemType;
    static readonly netheriteBoots: ItemType;
    static readonly netheriteChestplate: ItemType;
    static readonly netheriteHelmet: ItemType;
    static readonly netheriteHoe: ItemType;
    static readonly netheriteIngot: ItemType;
    static readonly netheriteLeggings: ItemType;
    static readonly netheritePickaxe: ItemType;
    static readonly netheriteScrap: ItemType;
    static readonly netheriteShovel: ItemType;
    static readonly netheriteSword: ItemType;
    static readonly netherrack: ItemType;
    static readonly netherreactor: ItemType;
    static readonly netherSprouts: ItemType;
    static readonly netherStar: ItemType;
    static readonly netherWart: ItemType;
    static readonly netherWartBlock: ItemType;
    static readonly normalStoneStairs: ItemType;
    static readonly noteblock: ItemType;
    static readonly npcSpawnEgg: ItemType;
    static readonly oakBoat: ItemType;
    static readonly oakChestBoat: ItemType;
    static readonly oakFence: ItemType;
    static readonly oakSign: ItemType;
    static readonly oakStairs: ItemType;
    static readonly observer: ItemType;
    static readonly obsidian: ItemType;
    static readonly ocelotSpawnEgg: ItemType;
    static readonly ochreFroglight: ItemType;
    static readonly orangeCandle: ItemType;
    static readonly orangeCandleCake: ItemType;
    static readonly orangeDye: ItemType;
    static readonly orangeGlazedTerracotta: ItemType;
    static readonly oxidizedCopper: ItemType;
    static readonly oxidizedCutCopper: ItemType;
    static readonly oxidizedCutCopperSlab: ItemType;
    static readonly oxidizedCutCopperStairs: ItemType;
    static readonly oxidizedDoubleCutCopperSlab: ItemType;
    static readonly packedIce: ItemType;
    static readonly packedMud: ItemType;
    static readonly painting: ItemType;
    static readonly pandaSpawnEgg: ItemType;
    static readonly paper: ItemType;
    static readonly parrotSpawnEgg: ItemType;
    static readonly pearlescentFroglight: ItemType;
    static readonly phantomMembrane: ItemType;
    static readonly phantomSpawnEgg: ItemType;
    static readonly piglinBannerPattern: ItemType;
    static readonly piglinBruteSpawnEgg: ItemType;
    static readonly piglinSpawnEgg: ItemType;
    static readonly pigSpawnEgg: ItemType;
    static readonly pillagerSpawnEgg: ItemType;
    static readonly pinkCandle: ItemType;
    static readonly pinkCandleCake: ItemType;
    static readonly pinkDye: ItemType;
    static readonly pinkGlazedTerracotta: ItemType;
    static readonly piston: ItemType;
    static readonly pistonArmCollision: ItemType;
    static readonly planks: ItemType;
    static readonly podzol: ItemType;
    static readonly pointedDripstone: ItemType;
    static readonly poisonousPotato: ItemType;
    static readonly polarBearSpawnEgg: ItemType;
    static readonly polishedAndesiteStairs: ItemType;
    static readonly polishedBasalt: ItemType;
    static readonly polishedBlackstone: ItemType;
    static readonly polishedBlackstoneBrickDoubleSlab: ItemType;
    static readonly polishedBlackstoneBricks: ItemType;
    static readonly polishedBlackstoneBrickSlab: ItemType;
    static readonly polishedBlackstoneBrickStairs: ItemType;
    static readonly polishedBlackstoneBrickWall: ItemType;
    static readonly polishedBlackstoneButton: ItemType;
    static readonly polishedBlackstoneDoubleSlab: ItemType;
    static readonly polishedBlackstonePressurePlate: ItemType;
    static readonly polishedBlackstoneSlab: ItemType;
    static readonly polishedBlackstoneStairs: ItemType;
    static readonly polishedBlackstoneWall: ItemType;
    static readonly polishedDeepslate: ItemType;
    static readonly polishedDeepslateDoubleSlab: ItemType;
    static readonly polishedDeepslateSlab: ItemType;
    static readonly polishedDeepslateStairs: ItemType;
    static readonly polishedDeepslateWall: ItemType;
    static readonly polishedDioriteStairs: ItemType;
    static readonly polishedGraniteStairs: ItemType;
    static readonly poppedChorusFruit: ItemType;
    static readonly porkchop: ItemType;
    static readonly portal: ItemType;
    static readonly potato: ItemType;
    static readonly potatoes: ItemType;
    static readonly potion: ItemType;
    static readonly powderSnow: ItemType;
    static readonly powderSnowBucket: ItemType;
    static readonly poweredComparator: ItemType;
    static readonly poweredRepeater: ItemType;
    static readonly prismarine: ItemType;
    static readonly prismarineBricksStairs: ItemType;
    static readonly prismarineCrystals: ItemType;
    static readonly prismarineShard: ItemType;
    static readonly prismarineStairs: ItemType;
    static readonly pufferfish: ItemType;
    static readonly pufferfishBucket: ItemType;
    static readonly pufferfishSpawnEgg: ItemType;
    static readonly pumpkin: ItemType;
    static readonly pumpkinPie: ItemType;
    static readonly pumpkinSeeds: ItemType;
    static readonly pumpkinStem: ItemType;
    static readonly purpleCandle: ItemType;
    static readonly purpleCandleCake: ItemType;
    static readonly purpleDye: ItemType;
    static readonly purpleGlazedTerracotta: ItemType;
    static readonly purpurBlock: ItemType;
    static readonly purpurStairs: ItemType;
    static readonly quartz: ItemType;
    static readonly quartzBlock: ItemType;
    static readonly quartzBricks: ItemType;
    static readonly quartzOre: ItemType;
    static readonly quartzStairs: ItemType;
    static readonly rabbit: ItemType;
    static readonly rabbitFoot: ItemType;
    static readonly rabbitHide: ItemType;
    static readonly rabbitSpawnEgg: ItemType;
    static readonly rabbitStew: ItemType;
    static readonly rail: ItemType;
    static readonly rapidFertilizer: ItemType;
    static readonly ravagerSpawnEgg: ItemType;
    static readonly rawCopper: ItemType;
    static readonly rawCopperBlock: ItemType;
    static readonly rawGold: ItemType;
    static readonly rawGoldBlock: ItemType;
    static readonly rawIron: ItemType;
    static readonly rawIronBlock: ItemType;
    static readonly recoveryCompass: ItemType;
    static readonly redCandle: ItemType;
    static readonly redCandleCake: ItemType;
    static readonly redDye: ItemType;
    static readonly redFlower: ItemType;
    static readonly redGlazedTerracotta: ItemType;
    static readonly redMushroom: ItemType;
    static readonly redMushroomBlock: ItemType;
    static readonly redNetherBrick: ItemType;
    static readonly redNetherBrickStairs: ItemType;
    static readonly redSandstone: ItemType;
    static readonly redSandstoneStairs: ItemType;
    static readonly redstone: ItemType;
    static readonly redstoneBlock: ItemType;
    static readonly redstoneLamp: ItemType;
    static readonly redstoneOre: ItemType;
    static readonly redstoneTorch: ItemType;
    static readonly redstoneWire: ItemType;
    static readonly reinforcedDeepslate: ItemType;
    static readonly repeater: ItemType;
    static readonly repeatingCommandBlock: ItemType;
    static readonly reserved6: ItemType;
    static readonly respawnAnchor: ItemType;
    static readonly rottenFlesh: ItemType;
    static readonly saddle: ItemType;
    static readonly salmon: ItemType;
    static readonly salmonBucket: ItemType;
    static readonly salmonSpawnEgg: ItemType;
    static readonly sand: ItemType;
    static readonly sandstone: ItemType;
    static readonly sandstoneStairs: ItemType;
    static readonly sapling: ItemType;
    static readonly scaffolding: ItemType;
    static readonly sculk: ItemType;
    static readonly sculkCatalyst: ItemType;
    static readonly sculkSensor: ItemType;
    static readonly sculkShrieker: ItemType;
    static readonly sculkVein: ItemType;
    static readonly seagrass: ItemType;
    static readonly seaLantern: ItemType;
    static readonly seaPickle: ItemType;
    static readonly shears: ItemType;
    static readonly sheepSpawnEgg: ItemType;
    static readonly shield: ItemType;
    static readonly shroomlight: ItemType;
    static readonly shulkerBox: ItemType;
    static readonly shulkerShell: ItemType;
    static readonly shulkerSpawnEgg: ItemType;
    static readonly silverfishSpawnEgg: ItemType;
    static readonly silverGlazedTerracotta: ItemType;
    static readonly skeletonHorseSpawnEgg: ItemType;
    static readonly skeletonSpawnEgg: ItemType;
    static readonly skull: ItemType;
    static readonly skullBannerPattern: ItemType;
    static readonly slime: ItemType;
    static readonly slimeBall: ItemType;
    static readonly slimeSpawnEgg: ItemType;
    static readonly smallAmethystBud: ItemType;
    static readonly smallDripleafBlock: ItemType;
    static readonly smithingTable: ItemType;
    static readonly smoker: ItemType;
    static readonly smoothBasalt: ItemType;
    static readonly smoothQuartzStairs: ItemType;
    static readonly smoothRedSandstoneStairs: ItemType;
    static readonly smoothSandstoneStairs: ItemType;
    static readonly smoothStone: ItemType;
    static readonly snow: ItemType;
    static readonly snowball: ItemType;
    static readonly snowLayer: ItemType;
    static readonly soulCampfire: ItemType;
    static readonly soulFire: ItemType;
    static readonly soulLantern: ItemType;
    static readonly soulSand: ItemType;
    static readonly soulSoil: ItemType;
    static readonly soulTorch: ItemType;
    static readonly sparkler: ItemType;
    static readonly spawnEgg: ItemType;
    static readonly spiderEye: ItemType;
    static readonly spiderSpawnEgg: ItemType;
    static readonly splashPotion: ItemType;
    static readonly sponge: ItemType;
    static readonly sporeBlossom: ItemType;
    static readonly spruceBoat: ItemType;
    static readonly spruceButton: ItemType;
    static readonly spruceChestBoat: ItemType;
    static readonly spruceDoor: ItemType;
    static readonly spruceFence: ItemType;
    static readonly spruceFenceGate: ItemType;
    static readonly sprucePressurePlate: ItemType;
    static readonly spruceSign: ItemType;
    static readonly spruceStairs: ItemType;
    static readonly spruceStandingSign: ItemType;
    static readonly spruceTrapdoor: ItemType;
    static readonly spruceWallSign: ItemType;
    static readonly spyglass: ItemType;
    static readonly squidSpawnEgg: ItemType;
    static readonly stainedGlass: ItemType;
    static readonly stainedGlassPane: ItemType;
    static readonly stainedHardenedClay: ItemType;
    static readonly standingBanner: ItemType;
    static readonly standingSign: ItemType;
    static readonly stick: ItemType;
    static readonly stickyPiston: ItemType;
    static readonly stickyPistonArmCollision: ItemType;
    static readonly stone: ItemType;
    static readonly stoneAxe: ItemType;
    static readonly stoneBlockSlab: ItemType;
    static readonly stoneBlockSlab2: ItemType;
    static readonly stoneBlockSlab3: ItemType;
    static readonly stoneBlockSlab4: ItemType;
    static readonly stonebrick: ItemType;
    static readonly stoneBrickStairs: ItemType;
    static readonly stoneButton: ItemType;
    static readonly stonecutter: ItemType;
    static readonly stonecutterBlock: ItemType;
    static readonly stoneHoe: ItemType;
    static readonly stonePickaxe: ItemType;
    static readonly stonePressurePlate: ItemType;
    static readonly stoneShovel: ItemType;
    static readonly stoneStairs: ItemType;
    static readonly stoneSword: ItemType;
    static readonly straySpawnEgg: ItemType;
    static readonly striderSpawnEgg: ItemType;
    static readonly string: ItemType;
    static readonly strippedAcaciaLog: ItemType;
    static readonly strippedBirchLog: ItemType;
    static readonly strippedCrimsonHyphae: ItemType;
    static readonly strippedCrimsonStem: ItemType;
    static readonly strippedDarkOakLog: ItemType;
    static readonly strippedJungleLog: ItemType;
    static readonly strippedMangroveLog: ItemType;
    static readonly strippedMangroveWood: ItemType;
    static readonly strippedOakLog: ItemType;
    static readonly strippedSpruceLog: ItemType;
    static readonly strippedWarpedHyphae: ItemType;
    static readonly strippedWarpedStem: ItemType;
    static readonly structureBlock: ItemType;
    static readonly structureVoid: ItemType;
    static readonly sugar: ItemType;
    static readonly sugarCane: ItemType;
    static readonly suspiciousStew: ItemType;
    static readonly sweetBerries: ItemType;
    static readonly sweetBerryBush: ItemType;
    static readonly tadpoleBucket: ItemType;
    static readonly tadpoleSpawnEgg: ItemType;
    static readonly tallgrass: ItemType;
    static readonly target: ItemType;
    static readonly tintedGlass: ItemType;
    static readonly tnt: ItemType;
    static readonly tntMinecart: ItemType;
    static readonly torch: ItemType;
    static readonly totemOfUndying: ItemType;
    static readonly traderLlamaSpawnEgg: ItemType;
    static readonly trapdoor: ItemType;
    static readonly trappedChest: ItemType;
    static readonly trident: ItemType;
    static readonly tripWire: ItemType;
    static readonly tripwireHook: ItemType;
    static readonly tropicalFish: ItemType;
    static readonly tropicalFishBucket: ItemType;
    static readonly tropicalFishSpawnEgg: ItemType;
    static readonly tuff: ItemType;
    static readonly turtleEgg: ItemType;
    static readonly turtleHelmet: ItemType;
    static readonly turtleSpawnEgg: ItemType;
    static readonly twistingVines: ItemType;
    static readonly underwaterTorch: ItemType;
    static readonly undyedShulkerBox: ItemType;
    static readonly unknown: ItemType;
    static readonly unlitRedstoneTorch: ItemType;
    static readonly unpoweredComparator: ItemType;
    static readonly unpoweredRepeater: ItemType;
    static readonly verdantFroglight: ItemType;
    static readonly vexSpawnEgg: ItemType;
    static readonly villagerSpawnEgg: ItemType;
    static readonly vindicatorSpawnEgg: ItemType;
    static readonly vine: ItemType;
    static readonly wallBanner: ItemType;
    static readonly wallSign: ItemType;
    static readonly wanderingTraderSpawnEgg: ItemType;
    static readonly wardenSpawnEgg: ItemType;
    static readonly warpedButton: ItemType;
    static readonly warpedDoor: ItemType;
    static readonly warpedDoubleSlab: ItemType;
    static readonly warpedFence: ItemType;
    static readonly warpedFenceGate: ItemType;
    static readonly warpedFungus: ItemType;
    static readonly warpedFungusOnAStick: ItemType;
    static readonly warpedHyphae: ItemType;
    static readonly warpedNylium: ItemType;
    static readonly warpedPlanks: ItemType;
    static readonly warpedPressurePlate: ItemType;
    static readonly warpedRoots: ItemType;
    static readonly warpedSign: ItemType;
    static readonly warpedSlab: ItemType;
    static readonly warpedStairs: ItemType;
    static readonly warpedStandingSign: ItemType;
    static readonly warpedStem: ItemType;
    static readonly warpedTrapdoor: ItemType;
    static readonly warpedWallSign: ItemType;
    static readonly warpedWartBlock: ItemType;
    static readonly water: ItemType;
    static readonly waterBucket: ItemType;
    static readonly waterlily: ItemType;
    static readonly waxedCopper: ItemType;
    static readonly waxedCutCopper: ItemType;
    static readonly waxedCutCopperSlab: ItemType;
    static readonly waxedCutCopperStairs: ItemType;
    static readonly waxedDoubleCutCopperSlab: ItemType;
    static readonly waxedExposedCopper: ItemType;
    static readonly waxedExposedCutCopper: ItemType;
    static readonly waxedExposedCutCopperSlab: ItemType;
    static readonly waxedExposedCutCopperStairs: ItemType;
    static readonly waxedExposedDoubleCutCopperSlab: ItemType;
    static readonly waxedOxidizedCopper: ItemType;
    static readonly waxedOxidizedCutCopper: ItemType;
    static readonly waxedOxidizedCutCopperSlab: ItemType;
    static readonly waxedOxidizedCutCopperStairs: ItemType;
    static readonly waxedOxidizedDoubleCutCopperSlab: ItemType;
    static readonly waxedWeatheredCopper: ItemType;
    static readonly waxedWeatheredCutCopper: ItemType;
    static readonly waxedWeatheredCutCopperSlab: ItemType;
    static readonly waxedWeatheredCutCopperStairs: ItemType;
    static readonly waxedWeatheredDoubleCutCopperSlab: ItemType;
    static readonly weatheredCopper: ItemType;
    static readonly weatheredCutCopper: ItemType;
    static readonly weatheredCutCopperSlab: ItemType;
    static readonly weatheredCutCopperStairs: ItemType;
    static readonly weatheredDoubleCutCopperSlab: ItemType;
    static readonly web: ItemType;
    static readonly weepingVines: ItemType;
    static readonly wheat: ItemType;
    static readonly wheatSeeds: ItemType;
    static readonly whiteCandle: ItemType;
    static readonly whiteCandleCake: ItemType;
    static readonly whiteDye: ItemType;
    static readonly whiteGlazedTerracotta: ItemType;
    static readonly witchSpawnEgg: ItemType;
    static readonly witherRose: ItemType;
    static readonly witherSkeletonSpawnEgg: ItemType;
    static readonly wolfSpawnEgg: ItemType;
    static readonly wood: ItemType;
    static readonly woodenAxe: ItemType;
    static readonly woodenButton: ItemType;
    static readonly woodenDoor: ItemType;
    static readonly woodenHoe: ItemType;
    static readonly woodenPickaxe: ItemType;
    static readonly woodenPressurePlate: ItemType;
    static readonly woodenShovel: ItemType;
    static readonly woodenSlab: ItemType;
    static readonly woodenSword: ItemType;
    static readonly wool: ItemType;
    static readonly writableBook: ItemType;
    static readonly writtenBook: ItemType;
    static readonly yellowCandle: ItemType;
    static readonly yellowCandleCake: ItemType;
    static readonly yellowDye: ItemType;
    static readonly yellowFlower: ItemType;
    static readonly yellowGlazedTerracotta: ItemType;
    static readonly zoglinSpawnEgg: ItemType;
    static readonly zombieHorseSpawnEgg: ItemType;
    static readonly zombiePigmanSpawnEgg: ItemType;
    static readonly zombieSpawnEgg: ItemType;
    static readonly zombieVillagerSpawnEgg: ItemType;
}

export class MolangVariableMap {
    setColorRGB(variableName: string, color: Color): void;
    setColorRGBA(variableName: string, color: Color): void;
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}

export class MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export class NumberRange {
    private constructor();
    max: number;
    min: number;
    next(): number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    readonly name: string;
    selectedSlot: number;
    getItemCooldown(itemCategory: string): number;
    playSound(soundId: string, soundOptions?: SoundOptions): void;
    postClientMessage(id: string, value: string): void;
    startItemCooldown(itemCategory: string, tickDuration: number): void;
}

export class PlayerInventoryComponentContainer {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class PlayerIterator implements Iterable<Player> {
    private constructor();
    [Symbol.iterator](): Iterator<Player>;
    next(): IteratorResult<Player>;
}

export class PlayerJoinEvent {
    private constructor();
    player: Player;
}

export class PlayerJoinEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}

export class PlayerLeaveEvent {
    private constructor();
    readonly playerName: string;
}

export class PlayerLeaveEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}

export class PropertyRegistry {
    private constructor();
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityTypeOrId: EntityType | string,
    ): void;
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
    getEntity(): Entity | undefined;
}

export class ScoreboardObjective {
    private constructor();
    readonly displayName: string;
    readonly id: string;
    getParticipants(): ScoreboardIdentity[];
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
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
    location?: Location;
    pitch?: number;
    volume?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class StringBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: string[];
    value: string;
}

export class TickEvent {
    private constructor();
    readonly currentTick: number;
    readonly deltaTime: number;
}

export class TickEventSignal {
    private constructor();
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
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
    static add(a: Vector, b: Vector): Vector;
    static cross(a: Vector, b: Vector): Vector;
    static distance(a: Vector, b: Vector): number;
    static divide(a: Vector, b: number | Vector): Vector;
    static lerp(a: Vector, b: Vector, t: number): Vector;
    static max(a: Vector, b: Vector): Vector;
    static min(a: Vector, b: Vector): Vector;
    static multiply(a: Vector, b: number | Vector): Vector;
    static slerp(a: Vector, b: Vector, t: number): Vector;
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
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}

export class World {
    private constructor();
    readonly events: Events;
    readonly scoreboard: Scoreboard;
    broadcastClientMessage(id: string, value: string): void;
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    removeDynamicProperty(identifier: string): boolean;
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    stopMusic(): void;
}

export class WorldInitializeEvent {
    private constructor();
    readonly propertyRegistry: PropertyRegistry;
}

export class WorldInitializeEventSignal {
    private constructor();
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}

export class XYRotation {
    private constructor();
    x: number;
    y: number;
}

export const TicksPerSecond = 20;
export const world: World;