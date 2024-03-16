// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
 *     "version": "1.11.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
/** The types of block components that are accessible via function {@link Block.getComponent} */
export enum BlockComponentTypes {
    Inventory = "minecraft:inventory",
    LavaContainer = "minecraft:lavaContainer",
    Piston = "minecraft:piston",
    PotionContainer = "minecraft:potionContainer",
    RecordPlayer = "minecraft:recordPlayer",
    Sign = "minecraft:sign",
    SnowContainer = "minecraft:snowContainer",
    WaterContainer = "minecraft:waterContainer",
}

/** An enumeration describing the state of a block piston. */
export enum BlockPistonState {
    /** @remarks Whether the piston is fully expanded. */
    Expanded = "Expanded",
    /** @remarks Whether the piston is in the process of expanding. */
    Expanding = "Expanding",
    /** @remarks Whether the piston is fully retracted. */
    Retracted = "Retracted",
    /** @remarks Whether the piston is in the process of retracting. */
    Retracting = "Retracting",
}

/** @beta Description of the resulting intersection test on two BlockVolume objects */
export enum BlockVolumeIntersection {
    /** 
     * @beta
     * @remarks Volume B has no intersection points with Volume A
     */
    Disjoint = 0,
    /** 
     * @beta
     * @remarks Volume B resides completely inside Volume A
     */
    Contains = 1,
    /** 
     * @beta
     * @remarks Volume B partially intersects Volume A
     */
    Intersects = 2,
}

/** @beta The Action enum determines how the CompoundBlockVolume considers the associated CompoundBlockVolumeItem when performing inside/outside calculations. */
export enum CompoundBlockVolumeAction {
    /** 
     * @beta
     * @remarks The associated BlockVolume is considered a positive space, and any intersection tests are considered hits
     */
    Add = 0,
    /** 
     * @beta
     * @remarks
     * The associated BlockVolume is considered a negative or void space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes` in block volumes so that any intersection tests may pass through such spaces
     */
    Subtract = 1,
}

/** @beta An enum describing the relativity of the CompoundBlockVolumeItem, relative to the parent CompoundVolume. */
export enum CompoundBlockVolumePositionRelativity {
    /** 
     * @beta
     * @remarks The locations within the associated BlockVolume are relative to the CompoundBlockVolume to which they were added
     */
    Relative = 0,
    /** 
     * @beta
     * @remarks The locations within the associated BlockVolume are in absolute world space
     */
    Absolute = 1,
}

/** @beta An enumeration for the various difficulty levels of Minecraft. */
export enum Difficulty {
    /** 
     * @beta
     * @remarks Peaceful difficulty level.
     */
    Peaceful = 0,
    /** 
     * @beta
     * @remarks Easy difficulty level.
     */
    Easy = 1,
    /** 
     * @beta
     * @remarks Normal difficulty level.
     */
    Normal = 2,
    /** 
     * @beta
     * @remarks Hard difficulty level.
     */
    Hard = 3,
}

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

/** Specifies different colors for use as dye. */
export enum DyeColor {
    /** @remarks Black dye color. */
    Black = "Black",
    /** @remarks Blue dye color. */
    Blue = "Blue",
    /** @remarks Brown dye color. */
    Brown = "Brown",
    /** @remarks Cyan dye color. */
    Cyan = "Cyan",
    /** @remarks Gray dye color. */
    Gray = "Gray",
    /** @remarks Green dye color. */
    Green = "Green",
    /** @remarks Light blue dye color. */
    LightBlue = "LightBlue",
    /** @remarks Lime dye color. */
    Lime = "Lime",
    /** @remarks Magenta dye color. */
    Magenta = "Magenta",
    /** @remarks Orange dye color. */
    Orange = "Orange",
    /** @remarks Pink dye color. */
    Pink = "Pink",
    /** @remarks Purple dye color. */
    Purple = "Purple",
    /** @remarks Red dye color. */
    Red = "Red",
    /** @remarks Silver dye color. */
    Silver = "Silver",
    /** @remarks White dye color. */
    White = "White",
    /** @remarks Yellow dye color. */
    Yellow = "Yellow",
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

/** @beta */
export enum EnchantmentSlot {
    ArmorFeet = "ArmorFeet",
    ArmorHead = "ArmorHead",
    ArmorLegs = "ArmorLegs",
    ArmorTorso = "ArmorTorso",
    Axe = "Axe",
    Bow = "Bow",
    CarrotStick = "CarrotStick",
    CosmeticHead = "CosmeticHead",
    Crossbow = "Crossbow",
    Elytra = "Elytra",
    FishingRod = "FishingRod",
    Flintsteel = "Flintsteel",
    Hoe = "Hoe",
    Pickaxe = "Pickaxe",
    Shears = "Shears",
    Shield = "Shield",
    Shovel = "Shovel",
    Spear = "Spear",
    Sword = "Sword",
}

/** The types of entity components that are accessible via function {@link Entity.getComponent} */
export enum EntityComponentTypes {
    AddRider = "minecraft:addrider",
    Ageable = "minecraft:ageable",
    Breathable = "minecraft:breathable",
    CanClimb = "minecraft:can_climb",
    CanFly = "minecraft:can_fly",
    CanPowerJump = "minecraft:can_power_jump",
    Color = "minecraft:color",
    Color2 = "minecraft:color2",
    Equippable = "minecraft:equippable",
    FireImmune = "minecraft:fire_immune",
    FloatsInLiquid = "minecraft:floats_in_liquid",
    FlyingSpeed = "minecraft:flying_speed",
    FrictionModifier = "minecraft:friction_modifier",
    GroundOffset = "minecraft:ground_offset",
    Healable = "minecraft:healable",
    Health = "minecraft:health",
    Inventory = "minecraft:inventory",
    IsBaby = "minecraft:is_baby",
    IsCharged = "minecraft:is_charged",
    IsChested = "minecraft:is_chested",
    IsDyeable = "minecraft:is_dyeable",
    IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
    IsIgnited = "minecraft:is_ignited",
    IsIllagerCaptain = "minecraft:is_illager_captain",
    IsSaddled = "minecraft:is_saddled",
    IsShaking = "minecraft:is_shaking",
    IsSheared = "minecraft:is_sheared",
    IsStackable = "minecraft:is_stackable",
    IsStunned = "minecraft:is_stunned",
    IsTamed = "minecraft:is_tamed",
    Item = "minecraft:item",
    LavaMovement = "minecraft:lava_movement",
    Leashable = "minecraft:leashable",
    MarkVariant = "minecraft:mark_variant",
    Movement = "minecraft:movement",
    MovementAmphibious = "minecraft:movement.amphibious",
    MovementBasic = "minecraft:movement.basic",
    MovementFly = "minecraft:movement.fly",
    MovementGeneric = "minecraft:movement.generic",
    MovementGlide = "minecraft:movement.glide",
    MovementHover = "minecraft:movement.hover",
    MovementJump = "minecraft:movement.jump",
    MovementSkip = "minecraft:movement.skip",
    MovementSway = "minecraft:movement.sway",
    NavigationClimb = "minecraft:navigation.climb",
    NavigationFloat = "minecraft:navigation.float",
    NavigationFly = "minecraft:navigation.fly",
    NavigationGeneric = "minecraft:navigation.generic",
    NavigationHover = "minecraft:navigation.hover",
    NavigationWalk = "minecraft:navigation.walk",
    Npc = "minecraft:npc",
    OnFire = "minecraft:onfire",
    Projectile = "minecraft:projectile",
    PushThrough = "minecraft:push_through",
    Rideable = "minecraft:rideable",
    Riding = "minecraft:riding",
    Scale = "minecraft:scale",
    SkinId = "minecraft:skin_id",
    Strength = "minecraft:strength",
    Tameable = "minecraft:tameable",
    TameMount = "minecraft:tamemount",
    TypeFamily = "minecraft:type_family",
    UnderwaterMovement = "minecraft:underwater_movement",
    Variant = "minecraft:variant",
    WantsJockey = "minecraft:wants_jockey",
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

/** 
 * @beta 
 * Describes the lifetime state of an Entity.
 * For example, Entities can be loaded or unloaded depending on whether their chunks are loaded or when they move across dimensions.
 */
export enum EntityLifetimeState {
    /** 
     * @beta
     * @remarks Corresponding object is loaded.
     */
    Loaded = "Loaded",
    /** 
     * @beta
     * @remarks
     * Corresponding object is now unloaded.
     * Unloaded entities cannot be manipulated.
     * However, if an unloaded Entity later reloads, it becomes valid and can once again be manipulated.
     */
    Unloaded = "Unloaded",
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

/** Represents the type of fluid for use within a fluid containing block, like a cauldron. */
export enum FluidType {
    /** @remarks Represents lava as a type of fluid. */
    Lava = "Lava",
    /** @remarks Represents a potion as a type of fluid. */
    Potion = "Potion",
    /** @remarks Represents powder snow as a type of fluid. */
    PowderSnow = "PowderSnow",
    /** @remarks Represents water as a type of fluid. */
    Water = "Water",
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

/** @beta */
export enum GameRule {
    /** @remarks Whether command blocks should notify admins when they perform commands. */
    CommandBlockOutput = "commandBlockOutput",
    /** @remarks Controls whether command blocks can execute commands. */
    CommandBlocksEnabled = "commandBlocksEnabled",
    /** @remarks Controls whether the day and night cycles progress. */
    DoDayLightCycle = "doDayLightCycle",
    /** @remarks Controls whether non-mob entities do drops. ie. Item Frame */
    DoEntityDrops = "doEntityDrops",
    /** @remarks Controls whether fire spreads. */
    DoFireTick = "doFireTick",
    /** @remarks Controls whether players immediately respawn or are shown the death screen. */
    DoImmediateRespawn = "doImmediateRespawn",
    /** @remarks Controls whether players deal with the effects of not sleeping (such as Phantom spawning). */
    DoInsomnia = "doInsomnia",
    /** @remarks Determines whether players should be able to craft only those recipes that they've unlocked first - when dolimitedcrafting is set to true. */
    DoLimitedCrafting = "doLimitedCrafting",
    /** @remarks Controls whether mobs drop loot. */
    DoMobLoot = "doMobLoot",
    /** @remarks Controls whether mobs spawn naturally in the world. */
    DoMobSpawning = "doMobSpawning",
    /** @remarks Controls whether blocks drop items when destroyed. */
    DoTileDrops = "doTileDrops",
    /** @remarks Controls whether the weather can change naturally. */
    DoWeatherCycle = "doWeatherCycle",
    /** @remarks Controls whether entities take damage from drowning. */
    DrowningDamage = "drowningDamage",
    /** @remarks Controls whether entities take damage from falling. */
    FallDamage = "fallDamage",
    /** @remarks Controls whether entities take damage from fire. */
    FireDamage = "fireDamage",
    /** @remarks Controls whether there is damage from freezing. */
    FreezeDamage = "freezeDamage",
    /** @remarks The maximum number of commands that can be executed simultaneously by the /function command. */
    FunctionCommandLimit = "functionCommandLimit",
    /** @remarks Controls whether players keep their inventories when they die. */
    KeepInventory = "keepInventory",
    /** @remarks The maximum number of chained commands that can execute per tick. */
    MaxCommandChainLength = "maxCommandChainLength",
    /** 
     * @remarks
     * Controls whether mob griefing can happen in the world.
     * Example: A Creeper explosion destroying blocks.
     */
    MobGriefing = "mobGriefing",
    /** @remarks Controls whether players can regenerate health. */
    NaturalRegeneration = "naturalRegeneration",
    /** @remarks The percentage of players required to be sleeping in order to advance to the next day. */
    PlayersSleepingPercentage = "playersSleepingPercentage",
    /** 
     * @remarks
     * Controls whether projectiles (entities with a projectile component, like Arrows, thrown Tridents or Fireworks) can destroy certain blocks that support this interaction (such as Chorus Fruit, Dripstone or Decorated Pots).
     * Restrictions on which projectiles can destroy certain blocks apply.
     */
    ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks",
    /** @remarks Controls whether players can damage each other. */
    Pvp = "pvp",
    /** 
     * @remarks
     * Controls how frequently random ticks occur.
     * A value of 0 or less will disable random ticks. The default value is 1.
     */
    RandomTickSpeed = "randomTickSpeed",
    /** @remarks Controls whether built-in (vanilla) recipes automatically unlock as the player progresses through the game (one alternative to this is to use the /recipe command based on custom gameplay logic.) */
    RecipesUnlock = "recipesUnlock",
    /** @remarks Controls whether respawn blocks (e.g. Bed, Respawn Anchor) explode in other dimensions. */
    RespawnBlocksExplode = "respawnBlocksExplode",
    /** @remarks Controls whether command output is displayed to players. Also controls whether Command Block output is stored by default. */
    SendCommandFeedback = "sendCommandFeedback",
    /** @remarks Controls whether Border Block effects are shown. */
    ShowBorderEffect = "showBorderEffect",
    /** @remarks Controls whether player coordinates are displayed. */
    ShowCoordinates = "showCoordinates",
    /** @remarks Controls whether death messages are displayed in chat. */
    ShowDeathMessages = "showDeathMessages",
    /** @remarks Controls whether standard player notifications for recipes will show. When set to false, 'player unlocked recipes' are no longer sent as player notifications. */
    ShowRecipeMessages = "showRecipeMessages",
    /** @remarks Controls whether item tags are shown. E.g. 'Can Place On', 'Can Destroy', item lock icons, etc. */
    ShowTags = "showTags",
    /** 
     * @remarks
     * The block radius from world spawn that a player is allowed to spawn in.
     * Does not affect Adventure mode.
     * The default value is 10 blocks.
     */
    SpawnRadius = "spawnRadius",
    /** @remarks Affects whether TNT blocks can be lit. */
    TntExplodes = "tntExplodes",
}

/** @beta */
export enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    Hotbar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
}

/** @beta */
export enum HudVisibility {
    Hide = 0,
    Reset = 1,
}

/** The types of item components that are accessible via function {@link ItemStack.getComponent} */
export enum ItemComponentTypes {
    /** @remarks The minecraft:cooldown component. */
    Cooldown = "minecraft:cooldown",
    /** @remarks The minecraft:durability component. */
    Durability = "minecraft:durability",
    /** 
     * @beta
     * @remarks The minecraft:enchantable component.
     */
    Enchantable = "minecraft:enchantable",
    /** @remarks The minecraft:food component. */
    Food = "minecraft:food",
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

/** @beta */
export enum PaletteColor {
    White = 0,
    Orange = 1,
    Magenta = 2,
    LightBlue = 3,
    Yellow = 4,
    Lime = 5,
    Pink = 6,
    Gray = 7,
    Silver = 8,
    Cyan = 9,
    Purple = 10,
    Blue = 11,
    Brown = 12,
    Green = 13,
    Red = 14,
    Black = 15,
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

/** Represents a side of a sign. */
export enum SignSide {
    /** @remarks The back of the sign. */
    Back = "Back",
    /** @remarks The front of the sign. */
    Front = "Front",
}

/** @beta */
export enum StructureAnimationMode {
    Blocks = "Blocks",
    Layers = "Layers",
    None = "None",
}

/** @beta */
export enum StructureMirrorAxis {
    None = "None",
    X = "X",
    XZ = "XZ",
    Z = "Z",
}

/** @beta */
export enum StructureRotation {
    None = "None",
    Rotate180 = "Rotate180",
    Rotate270 = "Rotate270",
    Rotate90 = "Rotate90",
}

/** @beta */
export enum StructureSaveMode {
    Memory = "Memory",
    World = "World",
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

/** @beta An enumeration with the reason that a watchdog is deciding to terminate execution of a behavior packs' script. */
export enum WatchdogTerminateReason {
    /** 
     * @beta
     * @remarks Script runtime for a behavior pack is terminated due to non-responsiveness from script (a hang or infinite loop).
     */
    Hang = "Hang",
    /** 
     * @beta
     * @remarks Script runtime for a behavior pack is terminated due to a stack overflow (a long, and potentially infinite) chain of function calls.
     */
    StackOverflow = "StackOverflow",
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

/** @beta */
export type BlockComponentTypeMap = {
    inventory: BlockInventoryComponent;
    piston: BlockPistonComponent;
    sign: BlockSignComponent;
    lavaContainer: BlockLavaContainerComponent;
    potionContainer: BlockPotionContainerComponent;
    snowContainer: BlockSnowContainerComponent;
    waterContainer: BlockWaterContainerComponent;
    recordPlayer: BlockRecordPlayerComponent;
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:sign": BlockSignComponent;
    "minecraft:lavaContainer": BlockLavaContainerComponent;
    "minecraft:potionContainer": BlockPotionContainerComponent;
    "minecraft:snowContainer": BlockSnowContainerComponent;
    "minecraft:waterContainer": BlockWaterContainerComponent;
    "minecraft:recordPlayer": BlockRecordPlayerComponent;
};

/** @beta */
export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    equippable: EntityEquippableComponent;
    healable: EntityHealableComponent;
    inventory: EntityInventoryComponent;
    item: EntityItemComponent;
    leashable: EntityLeashableComponent;
    tamemount: EntityTameMountComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    projectile: EntityProjectileComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    type_family: EntityTypeFamilyComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    wants_jockey: EntityWantsJockeyComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    ground_offset: EntityGroundOffsetComponent;
    mark_variant: EntityMarkVariantComponent;
    push_through: EntityPushThroughComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    variant: EntityVariantComponent;
    health: EntityHealthComponent;
    lava_movement: EntityLavaMovementComponent;
    "movement.amphibious": EntityMovementAmphibiousComponent;
    "movement.basic": EntityMovementBasicComponent;
    movement: EntityMovementComponent;
    "movement.fly": EntityMovementFlyComponent;
    "movement.generic": EntityMovementGenericComponent;
    "movement.glide": EntityMovementGlideComponent;
    "movement.hover": EntityMovementHoverComponent;
    "movement.jump": EntityMovementJumpComponent;
    "movement.skip": EntityMovementSkipComponent;
    "movement.sway": EntityMovementSwayComponent;
    "navigation.climb": EntityNavigationClimbComponent;
    "navigation.float": EntityNavigationFloatComponent;
    "navigation.fly": EntityNavigationFlyComponent;
    "navigation.generic": EntityNavigationGenericComponent;
    "navigation.hover": EntityNavigationHoverComponent;
    "navigation.walk": EntityNavigationWalkComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    "minecraft:addrider": EntityAddRiderComponent;
    "minecraft:ageable": EntityAgeableComponent;
    "minecraft:breathable": EntityBreathableComponent;
    "minecraft:equippable": EntityEquippableComponent;
    "minecraft:healable": EntityHealableComponent;
    "minecraft:inventory": EntityInventoryComponent;
    "minecraft:item": EntityItemComponent;
    "minecraft:leashable": EntityLeashableComponent;
    "minecraft:tamemount": EntityTameMountComponent;
    "minecraft:npc": EntityNpcComponent;
    "minecraft:onfire": EntityOnFireComponent;
    "minecraft:projectile": EntityProjectileComponent;
    "minecraft:rideable": EntityRideableComponent;
    "minecraft:riding": EntityRidingComponent;
    "minecraft:strength": EntityStrengthComponent;
    "minecraft:tameable": EntityTameableComponent;
    "minecraft:type_family": EntityTypeFamilyComponent;
    "minecraft:can_climb": EntityCanClimbComponent;
    "minecraft:can_fly": EntityCanFlyComponent;
    "minecraft:can_power_jump": EntityCanPowerJumpComponent;
    "minecraft:fire_immune": EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
    "minecraft:is_baby": EntityIsBabyComponent;
    "minecraft:is_charged": EntityIsChargedComponent;
    "minecraft:is_chested": EntityIsChestedComponent;
    "minecraft:is_dyeable": EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": EntityIsSaddledComponent;
    "minecraft:is_shaking": EntityIsShakingComponent;
    "minecraft:is_sheared": EntityIsShearedComponent;
    "minecraft:is_stackable": EntityIsStackableComponent;
    "minecraft:is_stunned": EntityIsStunnedComponent;
    "minecraft:is_tamed": EntityIsTamedComponent;
    "minecraft:wants_jockey": EntityWantsJockeyComponent;
    "minecraft:color": EntityColorComponent;
    "minecraft:color2": EntityColor2Component;
    "minecraft:flying_speed": EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": EntityFrictionModifierComponent;
    "minecraft:ground_offset": EntityGroundOffsetComponent;
    "minecraft:mark_variant": EntityMarkVariantComponent;
    "minecraft:push_through": EntityPushThroughComponent;
    "minecraft:scale": EntityScaleComponent;
    "minecraft:skin_id": EntitySkinIdComponent;
    "minecraft:variant": EntityVariantComponent;
    "minecraft:health": EntityHealthComponent;
    "minecraft:lava_movement": EntityLavaMovementComponent;
    "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": EntityMovementBasicComponent;
    "minecraft:movement": EntityMovementComponent;
    "minecraft:movement.fly": EntityMovementFlyComponent;
    "minecraft:movement.generic": EntityMovementGenericComponent;
    "minecraft:movement.glide": EntityMovementGlideComponent;
    "minecraft:movement.hover": EntityMovementHoverComponent;
    "minecraft:movement.jump": EntityMovementJumpComponent;
    "minecraft:movement.skip": EntityMovementSkipComponent;
    "minecraft:movement.sway": EntityMovementSwayComponent;
    "minecraft:navigation.climb": EntityNavigationClimbComponent;
    "minecraft:navigation.float": EntityNavigationFloatComponent;
    "minecraft:navigation.fly": EntityNavigationFlyComponent;
    "minecraft:navigation.generic": EntityNavigationGenericComponent;
    "minecraft:navigation.hover": EntityNavigationHoverComponent;
    "minecraft:navigation.walk": EntityNavigationWalkComponent;
    "minecraft:underwater_movement": EntityUnderwaterMovementComponent;
};

/** @beta */
export type ItemComponentTypeMap = {
    food: ItemFoodComponent;
    enchantable: ItemEnchantableComponent;
    durability: ItemDurabilityComponent;
    cooldown: ItemCooldownComponent;
    "minecraft:food": ItemFoodComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:cooldown": ItemCooldownComponent;
};

/** @beta Describes a type of biome. */
export class BiomeType {
    private constructor();
    /** @remarks Identifier of the biome type. */
    readonly id: string;
}

/** @beta Supports a catalog of available biome types registered within Minecraft. */
export class BiomeTypes {
    private constructor();
    /** 
     * @remarks Returns a specific biome type.
     * @param typeName
     * Identifier of the biome.
     * Generally, namespaced identifiers (e.g., minecraft:frozen_peaks) should be used.
     * @returns If the biome exists, a BiomeType object is returned. If not, undefined is returned.
     * 
     * @example
     * ```javascript
     * import { BiomeTypes } from "@minecraft/server";
     * 
     * const biomeType = BiomeTypes.get("minecraft:frozen_peaks");
     * console.warn(biomeType.id);
     * ```
     */
    static get(typeName: string): BiomeType | undefined;
    /** @remarks Returns all registered biome types within Minecraft */
    static getAll(): BiomeType[];
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
     * @beta
     * @remarks Returns true if this block is solid and impassible - (e.g., a cobblestone block and a diamond block are solid, while a ladder block and a fence block are not).
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    /** 
     * @beta
     * @remarks Returns whether this block has a liquid on it.
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
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
    /** 
     * @beta
     * @remarks Gets the type of block.
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly type: BlockType;
    /** 
     * @beta
     * @remarks Identifier of the type of block for this block.
     * @throws This property can throw when used.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
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
    /** 
     * @beta
     * @remarks Checks to see whether it is valid to place the specified block type or block permutation, on a specified face on this block
     * @param blockToPlace Block type or block permutation to check placement for.
     * @param faceToPlaceOn Optional specific face of this block to check placement against.
     * @returns Returns `true` if the block type or permutation can be placed on this block, else `false`.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world, Direction } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * const canPlace = block.canPlace("minecraft:dirt", Direction.Up);
     * console.warn(`Can place on dirt: ${canPlace}`);
     * ```
     * @example
     * ```javascript
     * import { world, BlockTypes, Direction } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * const canPlace = block.canPlace(BlockTypes.get("minecraft:dirt"), Direction.Up);
     * console.warn(`Can place on dirt: ${canPlace}`);
     * ```
     * @example
     * ```javascript
     * import { world, BlockPermutation, Direction } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * const canPlace = block.canPlace(BlockPermutation.resolve("minecraft:dirt"), Direction.Up);
     * console.warn(`Can place on dirt: ${canPlace}`);
     * ```
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
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
    getComponent<T extends keyof BlockComponentTypeMap>(componentId: T): BlockComponentTypeMap[T] | undefined;
    /** 
     * @beta
     * @remarks Creates a prototype item stack based on this block that can be used with Container/ContainerSlot APIs.
     * @param amount Number of instances of this block to place in the itemstack.
     * @param withData Whether additional data facets of the itemstack are included.
     * @returns
     * An itemStack with the specified amount of items and data.
     * Returns undefined if block type is incompatible.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * const itemStack = block.getItemStack(1, true);
     * console.warn(itemStack.typeId);
     * ```
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /** 
     * @beta
     * @remarks Returns the net redstone power of this block.
     * @remarks Returns undefined if redstone power is not applicable to this block.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * const redstonePower = block.getRedstonePower();
     * console.warn(`Redstone Power: ${redstonePower}`);
     * ```
     */
    getRedstonePower(): number | undefined;
    /** 
     * @remarks Returns a set of tags for a block.
     * @returns The list of tags that the block has.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /** 
     * @remarks Checks to see if the permutation of this block has a specific tag.
     * @param tag Tag to check for.
     * @returns Returns `true` if the permutation of this block has the tag, else `false`.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * console.warn(`Block is dirt: ${block.hasTag("dirt")}`);
     * console.warn(`Block is wood: ${block.hasTag("wood")}`);
     * console.warn(`Block is stone: ${block.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /** 
     * @remarks Checks if this reference to a block is still valid (for example, if the block is unloaded, references to that block will no longer be valid.)
     * @returns True if this block object is still working and valid.
     */
    isValid(): boolean;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
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
     * @beta
     * @remarks Sets the type of block.
     * 
     * This function can't be called in read-only mode.
     * @param blockType Identifier of the type of block to apply - for example, minecraft:powered_repeater.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * block.setType("minecraft:dirt");
     * ```
     * @example
     * ```javascript
     * import { world, BlockTypes } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * 
     * block.setType(BlockTypes.get("minecraft:dirt"));
     * ```
     */
    setType(blockType: BlockType | string): void;
    /** 
     * @beta
     * @remarks Sets whether this block has a water logged state - for example, whether stairs are submerged within water.
     * 
     * This function can't be called in read-only mode.
     * @param isWaterlogged true if the block should have water within it.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;
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
     * @beta
     * @remarks Tries to set the block in the dimension to the state of the permutation by first checking if the placement is valid.
     * 
     * This function can't be called in read-only mode.
     * @param permutation Permutation that contains a set of property states for the Block.
     * @returns Returns `true` if the block permutation data was successfully set, else `false`.
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
     * block.trySetPermutation(BlockPermutation.resolve("minecraft:dirt"));
     * ```
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
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

/** @beta Contains information regarding a specific block randomly ticking. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

/** @beta Contains information regarding an entity stepping off a specific block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /** @remarks The entity that stepped off the block. */
    readonly entity?: Entity;
}

/** @beta Contains information regarding an entity stepping onto a specific block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /** @remarks The entity that stepped on the block. */
    readonly entity?: Entity;
}

/** Contains information regarding an event that impacts a specific block. */
export class BlockEvent {
    private constructor();
    /** @remarks Block impacted by this event. */
    readonly block: Block;
    /** @remarks Dimension that contains the block that is the subject of this event. */
    readonly dimension: Dimension;
}

/** @beta Contains information regarding an explosion that has occurred for a specific block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks Description of the block that has exploded. */
    readonly explodedBlockPermutation: BlockPermutation;
    /** @remarks Optional source of the explosion. */
    readonly source?: Entity;
}

/** @beta Manages callbacks that are connected to when an explosion occurs, as it impacts individual blocks. */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an explosion occurs, as it impacts individual blocks.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an explosion occurs, as it impacts individual blocks.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
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

/** @beta Represents a fluid container block that currently contains lava. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:lavaContainer";
}

/** @beta For blocks that can contain a liquid (e.g., a cauldron), this is a base component for liquid containers. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /** 
     * @remarks Relative fill level of the liquid container.
     * 
     * This property can't be edited in read-only mode.
     */
    fillLevel: number;
    /** 
     * @remarks
     * Returns true if this reference to a liquid container is still valid and contains the liquid of the type you have a reference for
     * (for example, if the block is unloaded, no longer a liquid container or contains lava when you have a potion container component, isValidLiquid will not be true.)
     * @returns True if this liquid container still exists, is valid and contains the expected liquid type.
     */
    isValidLiquid(): boolean;
}

/** 
 * @beta 
 * A BlockLocationIterator returns the next block location of the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of the block volume it was fetched from (so it can represent all the block locations that make up rectangles, cubes, spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in the parent shape.
 * Unless otherwise specified by the parent shape - the BlockLocationIterator will iterate over a 3D space in the order of increasing X, followed by increasing Z followed by increasing Y.
 * (Effectively stepping across the XZ plane, and when all the locations in that plane are exhausted, increasing the Y coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Vector3>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<Vector3>;
}

/** Contains the combination of type {@link BlockType} and properties (also sometimes called block state) which describe a block (but does not belong to a specific {@link Block}). */
export class BlockPermutation {
    private constructor();
    /** 
     * @beta
     * @remarks The {@link BlockType} that the permutation has.
     */
    readonly type: BlockType;
    /** 
     * @beta
     * @remarks Creates a copy of this permutation.
     * @returns A copy of the permutation.
     */
    clone(): BlockPermutation;
    /** 
     * @remarks Returns all available block states associated with this block.
     * @returns Returns the list of all of the block states that the permutation has.
     */
    getAllStates(): Record<string, boolean | number | string>;
    /** 
     * @beta
     * @remarks Retrieves a prototype item stack based on this block permutation that can be used with item {@link Container}/{@link ContainerSlot} APIs.
     * @param amount Number of instances of this block to place in the prototype itemstack.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const permutation = block.permutation;
     * 
     * const itemStack = permutation.getItemStack(1);
     * console.warn(itemStack.typeId);
     * ```
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /** 
     * @remarks Gets a state for the permutation.
     * @param stateName Name of the block state who's value is to be returned.
     * @returns Returns the state if the permutation has it, else `undefined`.
     */
    getState(stateName: string): boolean | number | string | undefined;
    /** 
     * @beta
     * @remarks Returns a set of tags for a block.
     * @remarks The list of tags that the block has.
     */
    getTags(): string[];
    /** 
     * @beta
     * @remarks Checks to see if the permutation has a specific tag.
     * @returns Returns `true` if the permutation has the tag, else `false`.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const permutation = block.permutation;
     * 
     * console.warn(`Block is dirt: ${permutation.hasTag("dirt")}`);
     * console.warn(`Block is wood: ${permutation.hasTag("wood")}`);
     * console.warn(`Block is stone: ${permutation.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
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
     * @remarks Returns a derived BlockPermutation with a specific property set.
     * @param name Identifier of the block property.
     * @param value Value of the block property.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const permutation = block.permutation;
     * 
     * const newPermutation = permutation.withState("direction", 2);
     * block.setPermutation(newPermutation);
     * ```
     */
    withState(name: string, value: boolean | number | string): BlockPermutation;
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

/** 
 * When present, this block has piston-like behavior.
 * Contains additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /** 
     * @remarks Whether the piston is in the process of expanding or retracting.
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /** 
     * @remarks The current state of the piston.
     * @throws This property can throw when used.
     */
    readonly state: BlockPistonState;
    static readonly componentId = "minecraft:piston";
    /** 
     * @remarks Retrieves a set of blocks that this piston is connected with.
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Block[];
    /** 
     * @remarks Retrieves a set of block locations that this piston is connected with.
     * @throws This function can throw errors.
     */
    getAttachedBlocksLocations(): Vector3[];
}

/** Represents a fluid container block that currently contains a potion. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:potionContainer";
    /** 
     * @remarks Sets the potion type based on an item stack.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setPotionType(itemStack: ItemStack): void;
}

/** @beta Represents a block that can play a record. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = "minecraft:recordPlayer";
    /** 
     * @remarks Clears the currently playing record of this record-playing block.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /** 
     * @remarks Returns true if the record-playing block is currently playing a record.
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /** 
     * @remarks Sets and plays a record based on an item type.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, BlockRecordPlayerComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const recordPlayerComponent = block.getComponent(BlockRecordPlayerComponent.componentId);
     * 
     * recordPlayerComponent.setRecord("minecraft:music_disc_otherside");
     * ```
     */
    setRecord(recordItemType: ItemType | string): void;
}

/** Represents a block that can display text on it. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /** 
     * @remarks
     * Whether or not players can edit the sign.
     * This happens if a sign has had a honeycomb used on it or `setWaxed` was called on the sign.
     * @throws This property can throw when used.
     */
    readonly isWaxed: boolean;
    static readonly componentId = "minecraft:sign";
    /** 
     * @remarks Returns the RawText of the sign if `setText` was called with a RawMessage or a RawText object, otherwise returns undefined.
     * @param side
     * The side of the sign to read the message from.
     * If not provided, this will return the message from the front side of the sign.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, SignSide, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * const text = signComponent.getRawText(SignSide.Front);
     * console.warn(JSON.stringify(text)); // "{\"text\":\"Hello World\"}"
     * ```
     */
    getRawText(side?: SignSide): RawText | undefined;
    /** 
     * @remarks Returns the text of the sign if `setText` was called with a string, otherwise returns undefined.
     * @param side
     * The side of the sign to read the message from.
     * If not provided, this will return the message from the front side of the sign.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, SignSide, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * const text = signComponent.getText(SignSide.Front);
     * console.warn(text); // "Hello World"
     * ```
     */
    getText(side?: SignSide): string | undefined;
    /** 
     * @remarks Gets the dye that is on the text or undefined if the sign has not been dyed.
     * @param side
     * The side of the sign to read the dye from.
     * If not provided, this will return the dye from the front side of the sign.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, SignSide, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * const color = signComponent.getTextDyeColor(SignSide.Front);
     * console.warn(color); // "Lime"
     * ```
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /** 
     * @remarks Sets the text of the sign component.
     * 
     * This function can't be called in read-only mode.
     * @param message
     * The message to set on the sign.
     * If set to a string, then call `getText` to read that string.
     * If set to a RawMessage, then calling `getRawText` will return a RawText.
     * If set to a RawText, then calling `getRawText` will return the same object that was passed in.
     * @param side
     * The side of the sign the message will be set on.
     * If not provided, the message will be set on the front side of the sign.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, SignSide, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * signComponent.setText("Hello World", SignSide.Front);
     * ```
     * @example
     * ```javascript
     * import { world, SignSide, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * signComponent.setText({ text: "Hello World" }, SignSide.Front);
     * ```
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /** 
     * @remarks Sets the dye color of the text.
     * 
     * This function can't be called in read-only mode.
     * @param color The dye color to apply to the sign or undefined to clear the dye on the sign.
     * @param side
     * The side of the sign the color will be set on.
     * If not provided, the color will be set on the front side of the sign.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, DyeColor, SignSide, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * signComponent.setTextDyeColor(DyeColor.Lime, SignSide.Front);
     * ```
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /** 
     * @remarks Makes it so players cannot edit this sign.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, BlockSignComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const signComponent = block.getComponent(BlockSignComponent.componentId);
     * 
     * signComponent.setWaxed(true);
     * ```
     */
    setWaxed(waxed: boolean): void;
}

/** Represents a fluid container block that currently contains snow. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:snowContainer";
}

/** Enumerates all {@link BlockStateType}s. */
export class BlockStates {
    private constructor();
    /** 
     * @remarks Retrieves a specific block state instance.
     * @param stateName Identifier of the block state.
     * @returns
     * Returns the {@link BlockStateType} instance if it is found.
     * If the block state instance is not found returns undefined.
     */
    static get(stateName: string): BlockStateType | undefined;
    /** @remarks Retrieves a set of all available block states. */
    static getAll(): BlockStateType[];
}

/** 
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as a block state.
 */
export class BlockStateType {
    private constructor();
    /** @remarks Identifier of the block property. */
    readonly id: string;
    /** @remarks A set of valid values for the block property. */
    readonly validValues: (boolean | number | string)[];
}

/** 
 * The type (or template) of a block.
 * Does not contain permutation data (state) other than the type of block it represents.
 */
export class BlockType {
    private constructor();
    /** @remarks Represents whether this type of block can be waterlogged. */
    readonly canBeWaterlogged: boolean;
    /** @remarks Block type name - for example, `minecraft:acacia_stairs`. */
    readonly id: string;
}

/** @beta Provides the functionality for registering custom components for blocks. */
export class BlockTypeRegistry {
    private constructor();
    /** 
     * @remarks Registers a block custom component that can be used in block JSON configuration.
     * @param name
     * The id that represents this custom component. Must have a namespace.
     * This id can be specified in a block's JSON configuration under the 'minecraft:custom_components' block component.
     * @param customComponent The collection of event functions that will be called when the event occurs on a block using this custom component id.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

/** @beta Contains a catalog of Minecraft Block Types that are available in this world. */
export class BlockTypes {
    private constructor();
    /** 
     * @remarks Returns a BlockType object for the specified identifier.
     * @param typeName Identifier of the block type. Should follow a namespace:id pattern, such as minecraft:dirt.
     * @returns BlockType object, or undefined if the block type is not available within this world.
     * 
     * @example
     * ```javascript
     * import { BlockTypes } from "@minecraft/server";
     * 
     * const blockType = BlockTypes.get("minecraft:dirt");
     * console.warn(blockType.id);
     * ```
     */
    static get(typeName: string): BlockType | undefined;
    /** @remarks Returns a collection of all available block types. */
    static getAll(): BlockType[];
}

/** @beta A BlockVolume is a simple interface to an object which represents a 3D rectangle of a given size (in blocks) at a world block location. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /** @remarks This property can't be edited in read-only mode. */
    from: Vector3;
    /** @remarks This property can't be edited in read-only mode. */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /** @remarks This function can't be called in read-only mode. */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /** @remarks This function can't be called in read-only mode. */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}

/** @beta Base type for BlockVolumes. */
export class BlockVolumeBase {
    private constructor();
    /** 
     * @remarks Fetch a {@link BlockLocationIterator} that represents all of the block world locations within the specified volume
     * 
     * This function can't be called in read-only mode.
     * 
     * @example
     * ```javascript
     * import { world, BlockVolume } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * const from = { x: -5, y: -5, z: -5 };
     * const to = { x: 5, y: 5, z: 5 };
     * const volume = new BlockVolume(from, to);
     * 
     * const blockLocations = volume.getBlockLocationIterator();
     * for (let i = 0; i < blockLocations.length; i++) {
     *     const blockLocation = blockLocations[0];
     *     const block = overworld.getBlock(blockLocation);
     *     if (volume.doesLocationTouchFaces(blockLocation)) {
     *         block.setType("minecraft:dirt");
     *     } else {
     *         block.setType("minecraft:stone");
     *     };
     * };
     * ```
     * @example
     * ```javascript
     * import { world, ListBlockVolume } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * const volume = new ListBlockVolume([
     *     { x: -5, y: -5, z: -5 },
     *     { x: 5, y: 5, z: 5 }
     * ]);
     * 
     * const blockLocations = volume.getBlockLocationIterator();
     * for (let i = 0; i < blockLocations.length; i++) {
     *     const blockLocation = blockLocations[0];
     *     const block = overworld.getBlock(blockLocation);
     *     
     *     block.setType("minecraft:dirt");
     * };
     * ```
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getBoundingBox(): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    getCapacity(): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    getSpan(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    isInside(pos: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    translate(delta: Vector3): void;
}

/** @beta Represents a fluid container block that currently contains water. */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = "minecraft:waterContainer";
    /** 
     * @remarks Adds an item and colors the water based on a dye item type.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, BlockWaterContainerComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const waterContainerComponent = block.getComponent(BlockWaterContainerComponent.componentId);
     * 
     * waterContainerComponent.addDye("minecraft:blue_dye");
     * ```
     */
    addDye(itemType: ItemType): void;
    /** 
     * @remarks Retrieves a custom base color used for the sign text.
     * @returns Color that is used as the base color for sign text.
     * @throws This function can throw errors.
     */
    getCustomColor(): RGBA;
    /** 
     * @remarks Sets a custom base color used for the sign text.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, BlockWaterContainerComponent } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * // Get the block
     * const block = overworld.getBlock({ x: 1, y: 2, z: 3 });
     * const waterContainerComponent = block.getComponent(BlockWaterContainerComponent.componentId);
     * 
     * waterContainerComponent.setCustomColor({
     *     red: Math.random(),
     *     green: Math.random(),
     *     blue: Math.random(),
     *     alpha: 1.0
     * });
     * ```
     */
    setCustomColor(color: RGBA): void;
}

/** @beta Bounding Box Utils is a utility class that provides a number of useful functions for the creation and utility of {@link BoundingBox} objects */
export class BoundingBoxUtils {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    static getCenter(box: BoundingBox): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /** @remarks This function can't be called in read-only mode. */
    static getSpan(box: BoundingBox): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static isValid(box: BoundingBox): boolean;
    /** @remarks This function can't be called in read-only mode. */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
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

/** @beta An event that fires as players enter chat messages. */
export class ChatSendAfterEvent {
    private constructor();
    /** @remarks Message that is being broadcast. */
    readonly message: string;
    /** @remarks Player that sent the chat message. */
    readonly sender: Player;
    /** 
     * @remarks
     * Optional list of players that will receive this message.
     * If defined, this message is directly targeted to one or more players (i.e., is not broadcast.)
     */
    readonly targets?: Player[];
}

/** @beta Manages callbacks that are connected to chat messages being sent. */
export class ChatSendAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when new chat messages are sent.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when new chat messages are sent.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}

/** @beta An event that fires as players enter chat messages. */
export class ChatSendBeforeEvent {
    private constructor();
    /** @remarks If set to true in a beforeChat event handler, this message is not broadcast out. */
    cancel: boolean;
    /** @remarks Message that is being broadcast. */
    readonly message: string;
    /** @remarks Player that sent the chat message. */
    readonly sender: Player;
    /** 
     * @remarks
     * Optional list of players that will receive this message.
     * If defined, this message is directly targeted to one or more players (i.e., is not broadcast.)
     */
    readonly targets?: Player[];
}

/** @beta Manages callbacks that are connected to an event that fires before chat messages are sent. */
export class ChatSendBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before new chat messages are sent.
     * 
     * This function can't be called in read-only mode.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.beforeEvents.chatSend.subscribe((data) => {
     *     if (!data.message.startsWith("!")) return;
     *     data.cancel = true;
     * 
     *     const command = data.message.split(" ")[0].slice(1);
     *     const args = data.message.slice(command.length + 1).trim().split(" ");
     *     switch(command) {
     *         // !test
     *         case "test":
     *             data.sender.sendMessage("Hello, World!");
     *         break;
     *     };
     * });
     * ```
     */
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before new chat messages are sent.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * const event = world.beforeEvents.chatSend.subscribe((data) => {
     *     data.sender.sendMessage("Hello, World!");
     * 
     *     // Unsubscribe from the event.
     *     world.beforeEvents.chatSend.unsubscribe(event);
     * });
     * ```
     */
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
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

/** @beta The Compound Block Volume is a collection of individual block volume definitions which, as a collection, define a larger volume of (sometimes non-contiguous) irregular shapes. */
export class CompoundBlockVolume {
    readonly capacity: number;
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    /** @remarks This function can't be called in read-only mode. */
    clear(): void;
    /** @remarks This function can't be called in read-only mode. */
    getBlockLocationIterator(): BlockLocationIterator;
    /** @remarks This function can't be called in read-only mode. */
    getBoundingBox(): BoundingBox;
    /** @remarks This function can't be called in read-only mode. */
    getMax(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    getMin(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    getOrigin(): Vector3;
    /** @remarks This function can't be called in read-only mode. */
    isEmpty(): boolean;
    /** @remarks This function can't be called in read-only mode. */
    isInside(worldLocation: Vector3): boolean;
    /** @remarks This function can't be called in read-only mode. */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /** @remarks This function can't be called in read-only mode. */
    popVolume(): boolean;
    /** @remarks This function can't be called in read-only mode. */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /** @remarks This function can't be called in read-only mode. */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /** @remarks This function can't be called in read-only mode. */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /** @remarks This function can't be called in read-only mode. */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
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
    /** 
     * @remarks
     * Returns a container slot.
     * This acts as a reference to a slot at the given index for this container.
     * @param slot
     * The index of the slot to return.
     * This index must be within the bounds of the container.
     * @remarks Throws if the container is invalid or if the `slot` index is out of bounds.
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
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

/** Represents a slot within a broader container (e.g., entity inventory.) */
export class ContainerSlot {
    private constructor();
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
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /** 
     * @remarks Gets or sets whether the item is kept on death.
     * 
     * This property can't be edited in read-only mode.
     * @throws Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /** 
     * @remarks
     * Gets or sets the item's lock mode.
     * The default value is `ItemLockMode.none`.
     * 
     * This property can't be edited in read-only mode.
     * @throws Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /** 
     * @remarks
     * The maximum stack size.
     * This value varies depending on the type of item.
     * For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /** 
     * @remarks
     * Given name of this stack of items.
     * The name tag is displayed when hovering over the item.
     * Setting the name tag to an empty string or `undefined` will remove the name tag
     * 
     * This property can't be edited in read-only mode.
     * @throws Throws if the slot's container is invalid. Also throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /** 
     * @remarks The type of the item.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly type: ItemType;
    /** 
     * @remarks
     * Identifier of the type of items for the stack.
     * If a namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /** 
     * @remarks Clears all dynamic properties that have been set on this item stack.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /** 
     * @remarks Get the list of block types this item can break in Adventure mode.
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /** 
     * @remarks Get the list of block types this item can be placed on in Adventure mode.
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /** 
     * @remarks Returns a property value.
     * @param identifier The property identifier.
     * @returns Returns the value for the property, or undefined if the property has not been set.
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /** 
     * @remarks Returns the available set of dynamic property identifiers that have been used on this entity.
     * @returns A string array of the dynamic properties set on this entity.
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /** 
     * @remarks
     * Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.
     * This includes the size of both the key and the value.
     * This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /** 
     * @remarks Creates an exact copy of the item stack, including any custom data or properties.
     * @returns
     * Returns a copy of the item in the slot.
     * Returns undefined if the slot is empty.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /** 
     * @remarks Returns the lore value - a secondary display string - for an ItemStack.
     * @returns An array of lore lines. If the item does not have lore, returns an empty array.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /** 
     * @remarks Returns a set of tags associated with this item stack.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /** 
     * @throws This function can throw errors.
     * 
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /** 
     * @remarks Returns whether the item in the slot slot has the given tag.
     * @param tag The item tag.
     * @returns Returns false when the slot is empty or the item in the slot does not have the given tag.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /** 
     * @remarks
     * Returns whether this item stack can be stacked with the given `itemStack`.
     * This is determined by comparing the item type and any custom data and properties associated with the item stacks.
     * The amount of each item stack is not taken into consideration.
     * @param itemStack ItemStack to check stacking compatability with.
     * @returns True if the Item Stack is stackable with the itemStack passed in.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /** 
     * @remarks
     * Returns whether the ContainerSlot is valid.
     * The container slot is valid if the container exists and is loaded, and the slot index is valid.
     */
    isValid(): boolean;
    /** 
     * @remarks
     * The list of block types this item can break in Adventure mode.
     * The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     * 
     * This function can't be called in read-only mode.
     * @param blockIdentifiers String list of block types that the item can destroy.
     * @throws Throws if the slot's container is invalid. Also throws if any of the provided block identifiers are invalid.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
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
     * @throws Throws if the slot's container is invalid. Also throws if any of the provided block identifiers are invalid.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /** 
     * @remarks Sets a specified property to a value.
     * @param identifier The property identifier.
     * @param value Data value of the property to set.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /** 
     * @remarks Sets the given ItemStack in the slot, replacing any existing item.
     * 
     * This function can't be called in read-only mode.
     * @param itemStack The ItemStack to be placed in the slot.
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
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
     * @throws Throws if the slot's container is invalid.
     * 
     * {@link Error}
     * 
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: string[]): void;
}

/** Contains information related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken. */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /** @remarks Entity that the event triggered on. */
    readonly entity: Entity;
    /** @remarks Name of the data driven event being triggered. */
    readonly eventId: string;
    /** @remarks An updateable list of modifications to component state that are the effect of this triggered event. */
    getModifiers(): DefinitionModifier[];
}

/** Contains event registration related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken. */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called after a data driven entity event is triggered.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    /** 
     * @remarks Removes a callback that will be called after a data driven entity event is triggered.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
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
     * @beta
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     * 
     * @example
     * ```javascript
     * import { world, BlockVolume } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * const from = { x: 0, y: 0, z: 0 };
     * const to = { x: 15, y: 15, z: 15 };
     * const volume = new BlockVolume(from, to);
     * 
     * const contains = overworld.containsBlock(volume, {
     *     includeTypes: [ "minecraft:dirt" ],
     * }, true);
     * console.warn(`Volume has dirt: ${contains}`);
     * ```
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /** 
     * @remarks Creates an explosion at the specified location.
     * 
     * This function can't be called in read-only mode.
     * @param location The location of the explosion.
     * @radius Radius, in blocks, of the explosion to create.
     * @param explosionOptions Additional configurable options for the explosion.
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
     * //Creates an explosion that causes fire
     * overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { causesFire: true });
     * 
     * //Creates an explosion that breaks blocks
     * overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { breaksBlocks: true });
     * 
     * //Creates an explosion that can go underwater
     * overworld.createExplosion({ x: 1, y: 2, z: 3 }, 10, { allowUnderwater: true });
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /** 
     * @beta
     * @remarks Fills an area between begin and end with block of type block.
     * 
     * This function can't be called in read-only mode.
     * @param begin The lower northwest starting corner of the area.
     * @param end The upper southeast ending corner of the area.
     * @param block Type of block to fill the volume with.
     * @param options A set of additional options, such as a matching block to potentially replace this fill block with.
     * @returns Returns number of blocks placed.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, BlockPermutation } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const from = { x: 0, y: 0, z: 0 };
     * const to = { x: 10, y: 10, z: 10 };
     * overworld.fillBlocks(from, to, "minecraft:iron_block", {
     *     matchingBlocks: BlockPermutation.resolve("minecraft:dirt")
     * });
     * ```
     */
    fillBlocks(
        begin: Vector3,
        end: Vector3,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): number;
    /** 
     * @beta
     * @remarks
     * Finds the location of the closest biome of a particular type.
     * Note that the findClosestBiome operation can take some time to complete, so avoid using many of these calls within a particular tick.
     * 
     * This function can't be called in read-only mode.
     * @param pos Starting location to look for a biome to find.
     * @param biomeToFind Identifier of the biome to look for.
     * @param options Additional selection criteria for a biome search.
     * @returns Returns a location of the biome, or undefined if a biome could not be found.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     * 
     * @example
     * ```javascript
     * import { world, BiomeTypes } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * 
     * const player = world.getAllPlayers()[0];
     * const biome = BiomeTypes.get("cherry_grove");
     * const biomeLocation = overworld.findClosestBiome(player.location, biome);
     * 
     * player.teleport(biomeLocation);
     * ```
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
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
     * @beta
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     * 
     * @example
     * ```javascript
     * import { world, BlockVolume } from "@minecraft/server";
     * const overworld = world.getDimension("minecraft:overworld");
     * 
     * const from = { x: 0, y: 0, z: 0 };
     * const to = { x: 15, y: 15, z: 15 };
     * const volume = new BlockVolume(from, to);
     * 
     * const blocks = overworld.getBlocks(volume, {
     *     includeTypes: [ "minecraft:dirt" ],
     * }, true);
     * 
     * const blockLocations = volume.getBlockLocationIterator();
     * for (let i = 0; i < blockLocations.length; i++) {
     *     const blockLocation = blockLocations[0];
     *     const block = overworld.getBlock(blockLocation);
     * 
     *     block.setType("minecraft:stone");
     * };
     * ```
     */
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
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
     * @beta
     * @remarks Returns the current weather.
     * 
     * This function can't be called in read-only mode.
     * @returns Returns a {@link WeatherType} that explains the broad category of weather that is currently going on.
     */
    getWeather(): WeatherType;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
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
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
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

/** Represents a type of dimension. */
export class DimensionType {
    private constructor();
    /** @remarks Identifier of the dimension type. */
    readonly typeId: string;
}

/** Used for accessing all available dimension types. */
export class DimensionTypes {
    private constructor();
    /** 
     * @remarks Retrieves a dimension type using a string-based identifier.
     * 
     * @example
     * ```javascript
     * import { DimensionTypes } from "@minecraft/server";
     * 
     * const dimensionType = DimensionTypes.get("overworld");
     * console.warn(dimensionType.typeId);
     * ```
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /** @remarks Retrieves an array of all dimension types. */
    static getAll(): DimensionType[];
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

/** Contains information related to changes to an effect - like poison - being added to an entity. */
export class EffectAddAfterEvent {
    private constructor();
    /** @remarks Additional properties and details of the effect. */
    readonly effect: Effect;
    /** @remarks Entity that the effect is being added to. */
    readonly entity: Entity;
}

/** Manages callbacks that are connected to when an effect is added to an entity. */
export class EffectAddAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an effect is added to an entity.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EffectAddAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an effect is added to an entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void;
}

/** Contains information related to changes to an effect - like poison - being added to an entity. */
export class EffectAddBeforeEvent {
    private constructor();
    /** @remarks When set to true will cancel the event. */
    cancel: boolean;
    /** @remarks Effect duration. */
    duration: number;
    /** @remarks The type of the effect that is being added. */
    readonly effectType: string;
    /** @remarks Entity that the effect is being added to. */
    readonly entity: Entity;
}

/** Manages callbacks that are connected to before an effect is added to an entity. */
export class EffectAddBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before an effect is added to an entity.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before an effect is added to an entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}

/** Represents a type of effect - like poison - that can be applied to an entity. */
export class EffectType {
    private constructor();
    /** @returns Identifier of the effect type. */
    getName(): string;
}

/** Represents a type of effect - like poison - that can be applied to an entity. */
export class EffectTypes {
    private constructor();
    /** 
     * @remarks Effect type for the given identifier.
     * 
     * This function can't be called in read-only mode.
     * @returns Effect type for the given identifier or undefined if the effect does not exist.
     * 
     * @example
     * ```javascript
     * import { EffectTypes } from "@minecraft/server";
     * 
     * const effectType = EffectTypes.get("speed");
     * console.warn(effectType.getName());
     * ```
     */
    static get(identifier: string): EffectType | undefined;
    /** 
     * @remarks Gets all effects.
     * 
     * This function can't be called in read-only mode.
     * @returns A list of all effects.
     */
    static getAll(): EffectType[];
}

/** @beta Contains information on a type of enchantment. */
export class EnchantmentType {
    /** @remarks The name of the enchantment type. */
    readonly id: string;
    /** @remarks The maximum level this type of enchantment can have. */
    readonly maxLevel: number;
    /** @throws This function can throw errors. */
    constructor(enchantmentType: string);
}

/** Provides a list of enchantment types. */
export class EnchantmentTypes {
    private constructor();
    /** 
     * @remarks Retrieves an enchantment with the specified identifier.
     * @param enchantmentId Identifier of the enchantment. For example, 'minecraft:flame'.
     * @returns If available, returns an EnchantmentType object that represents the specified enchantment.
     * 
     * @example
     * ```javascript
     * import { EnchantmentTypes } from "@minecraft/server";
     * 
     * const enchantmentType = EnchantmentTypes.get("sharpness");
     * console.warn(enchantmentType.id);
     * ```
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
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
     * @beta
     * @remarks
     * The distance an entity has fallen.
     * The value is always 1 when gliding with Elytra and is reset when the entity is teleported.
     * @throws This property can throw when used.
     */
    readonly fallDistance: number;
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
     * @remarks Whether the entity reference that you have is valid or not.
     * For example, an entity may be unloaded if it moves into a chunk that is unloaded,
     *  but may be reactivated if the chunk it is within gets reloaded.
     */
    readonly lifetimeState: EntityLifetimeState;
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
     * @beta
     * @remarks
     * Retrieves or sets an entity that is used as the target of AI-related behaviors, like attacking.
     * If the entity currently has no target returns undefined.
     * @throws This property can throw when used.
     */
    readonly target?: Entity;
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
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
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
     * import { world, system, TicksPerSecond } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const skelly = overworld.spawnEntity("minecraft:skeleton", location);
     * skelly.setOnFire(2 * TicksPerSecond, true);
     * 
     * system.runTimeout(() => {
     *     skelly.extinguishFire(true);
     * }, 1 * TicksPerSecond);
     * ```
     */
    extinguishFire(useEffects?: boolean): boolean;
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
    getComponent<T extends keyof EntityComponentTypeMap>(componentId: T): EntityComponentTypeMap[T] | undefined;
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
     * @remarks Cause the entity to play the given animation.
     * 
     * This function can't be called in read-only mode.
     * @param animationName The animation identifier. e.g. animation.creeper.swelling
     * @param options Additional options to control the playback and transitions of the animation.
     * @throws This function can throw errors.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
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
     * Sets an entity on fire (if it is not in water or rain).
     * Note that you can call `getComponent('minecraft:onfire')` and, if present, the entity is on fire.
     * 
     * This function can't be called in read-only mode.
     * @param seconds Length of time to set the entity on fire.
     * @param useEffects Whether side-effects should be applied (e.g. thawing freeze) and other conditions such as rain or fire protection should be taken into consideration.
     * @returns
     * Whether the entity was set on fire.
     * This can fail if seconds is less than or equal to zero, the entity is wet or the entity is immune to fire.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, TicksPerSecond } from "@minecraft/server";
     * const overworld = world.getDimension("overworld");
     * const location = { x: 1, y: 2, z: 3 };
     * 
     * const skelly = overworld.spawnEntity("minecraft:skeleton", location);
     * skelly.setOnFire(2 * TicksPerSecond, true);
     * ```
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
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

/** @beta When added, this component makes the entity spawn with a rider of the specified entityType. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks The type of entity that is added as a rider for this entity when spawned under certain conditions.
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /** 
     * @remarks Optional spawn event to trigger on the rider when that rider is spawned for this entity.
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = "minecraft:addrider";
}

/** 
 * @beta 
 * Adds a timer for the entity to grow up.
 * It can be accelerated by giving the entity the items it likes as defined by feedItems.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks Amount of time before the entity grows up, -1 for always a baby.
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /** 
     * @remarks Event to run when this entity grows up.
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    static readonly componentId = "minecraft:ageable";
    /** 
     * @remarks List of items that the entity drops when it grows up.
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /** @throws This function can throw errors. */
    getFeedItems(): EntityDefinitionFeedItem[];
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

/** @beta Defines what blocks this entity can breathe in and gives them the ability to suffocate. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks If true, this entity can breathe in air.
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /** 
     * @remarks If true, this entity can breathe in lava.
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /** 
     * @remarks If true, this entity can breathe in solid blocks.
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /** 
     * @remarks If true, this entity can breathe in water.
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /** 
     * @remarks If true, this entity will have visible bubbles while in water.
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /** 
     * @remarks Time in seconds to recover breath to maximum.
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /** 
     * @remarks Time in seconds between suffocation damage.
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /** 
     * @remarks Time in seconds the entity can hold its breath.
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    static readonly componentId = "minecraft:breathable";
    /** 
     * @remarks List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /** 
     * @remarks List of blocks this entity can't breathe in.
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
    /** 
     * @remarks Sets the current air supply of the entity.
     * @param value New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
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

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly value: PaletteColor;
    static readonly componentId = "minecraft:color2";
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
    /** 
     * @beta
     * @remarks The entity that owns this component.
     */
    readonly entity: Entity;
}

/** @beta As part of the Ageable component, represents a set of items that can be fed to an entity and the rate at which that causes them to grow. */
export class EntityDefinitionFeedItem {
    private constructor();
    /** 
     * @remarks
     * The amount by which an entity's age will increase when fed this item.
     * Values usually range between 0 and 1.
     */
    readonly growth: number;
    /** 
     * @remarks
     * Identifier of type of item that can be fed.
     * If a namespace is not specified, 'minecraft:' is assumed.
     * Example values include 'wheat' or 'golden_apple'.
     */
    readonly item: string;
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
     * @remarks Gets the {@link ContainerSlot} corresponding to the given {@link EquipmentSlot}.
     * @param equipmentSlot The equipment slot. e.g. 'head', 'chest', 'offhand'.
     * @returns Returns the {@link ContainerSlot} corresponding to the given {@link EquipmentSlot}.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, EquipmentSlot, EntityEquippableComponent } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * 
     * const equippable = player.getComponent(EntityEquippableComponent.componentId);
     * const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
     * 
     * console.warn(`Item: ${slot.typeId}`); // "minecraft:dirt"
     * ```
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
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
    /** 
     * @beta
     * @remarks Block permutation that was hit by the attack.
     */
    readonly hitBlockPermutation: BlockPermutation;
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
 * @beta 
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Entity>;
    /** 
     * @remarks
     * Retrieves the next item in this iteration.
     * The resulting IteratorResult contains `.done` and `.value` properties which can be used to see the next Entity in the iteration.
     * @throws This function can throw errors.
     */
    next(): IteratorResult<Entity>;
}

/** Defines the base movement speed in lava of this entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:lava_movement";
}

/** @beta Allows this entity to be leashed and defines the conditions and events for this entity when is leashed. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = "minecraft:leashable";
    /** 
     * @remarks Leashes this entity to another entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unleash(): void;
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

/** @beta Defines the general movement speed of this entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:movement";
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

/** @beta When added, this movement control allows the mob to glide. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /** 
     * @remarks Speed in effect when the entity is turning.
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /** 
     * @remarks Start speed during a glide.
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    static readonly componentId = "minecraft:movement.glide";
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

/** @beta When added, this move control causes the mob to sway side to side giving the impression it is swimming. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /** 
     * @remarks Amplitude of the sway motion.
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /** 
     * @remarks Amount of sway frequency.
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    static readonly componentId = "minecraft:movement.sway";
}

/** @beta Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.) */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.climb";
}

/** @beta Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.) */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks Tells the pathfinder to avoid blocks that cause damage when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /** 
     * @remarks Tells the pathfinder to avoid portals (like nether portals) when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /** 
     * @remarks Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /** 
     * @remarks Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can jump out of water (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /** 
     * @remarks Tells the pathfinder that it can path through a closed door and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /** 
     * @remarks Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /** 
     * @remarks Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /** 
     * @remarks Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /** 
     * @remarks Tells the pathfinder that it can start pathing when in the air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can travel on the surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can travel on the surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it will be pulled down by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can walk on the ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can travel in lava like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /** 
     * @remarks Tells the pathfinder whether or not it can walk on the ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
}

/** @beta Allows this entity to generate paths by flying around the air like the regular Ghast. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.float";
}

/** @beta Allows this entity to generate paths in the air (for example, like Minecraft parrots do.) */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.fly";
}

/** @beta Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.generic";
}

/** @beta Allows this entity to generate paths in the air (for example, like the Minecraft Bees do.) Keeps them from falling out of the skies and doing predictive movement. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.hover";
}

/** @beta Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.walk";
}

/** @beta Adds NPC capabilities to an entity such as custom skin, name, and dialogue interactions. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks The DialogueScene that is opened when players first interact with the NPC.
     * 
     * This property can't be edited in read-only mode.
     */
    defaultScene: string;
    /** 
     * @remarks The name of the NPC as it is displayed to players.
     * 
     * This property can't be edited in read-only mode.
     */
    name: string;
    /** 
     * @remarks The index of the skin the NPC will use.
     * 
     * This property can't be edited in read-only mode.
     */
    skinIndex: number;
    static readonly componentId = "minecraft:npc";
}

/** When present on an entity, this entity is on fire. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /** @remarks The number of ticks remaining before the fire goes out. */
    readonly onFireTicksRemaining: number;
    static readonly componentId = "minecraft:onfire";
}

/** 
 * The projectile component controls the properties of a projectile entity and allows it to be shot in a given direction.
 * This component is present when the entity has the `minecraft:projectile` component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks The fraction of the projectile's speed maintained every tick while traveling through air.
     * 
     * This property can't be edited in read-only mode.
     */
    airInertia: number;
    /** 
     * @remarks
     * If true, the entity will be set on fire when hurt.
     * The default burn duration is 5 seconds. This duration can be modified via the onFireTime property.
     * The entity will not catch fire if immune or if the entity is wet.
     * 
     * This property can't be edited in read-only mode.
     */
    catchFireOnHurt: boolean;
    /** 
     * @remarks If true, the projectile will spawn crit particles when hit  by a player. E.g. Player attacking a Shulker bullet.
     * 
     * This property can't be edited in read-only mode.
     */
    critParticlesOnProjectileHurt: boolean;
    /** 
     * @remarks If true, the projectile will be destroyed when it takes damage. E.g. Player attacking a Shulker bullet.
     * 
     * This property can't be edited in read-only mode.
     */
    destroyOnProjectileHurt: boolean;
    /** 
     * @remarks
     * The gravity applied to the projectile.
     * When the entity is not on the ground, subtracts this amount from the projectile’s change in vertical position every tick.
     * The higher the value, the faster the projectile falls.
     * If negative, the entity will rise instead of fall.
     * 
     * This property can't be edited in read-only mode.
     */
    gravity: number;
    /** 
     * @remarks The sound that plays when the projectile hits an entity.
     * 
     * This property can't be edited in read-only mode.
     */
    hitEntitySound?: string;
    /** 
     * @remarks The sound that plays when the projectile hits a block.
     * 
     * This property can't be edited in read-only mode.
     */
    hitGroundSound?: string;
    /** 
     * @remarks The particle that spawns when the projectile hits something.
     * 
     * This property can't be edited in read-only mode.
     */
    hitParticle?: string;
    /** 
     * @remarks If true and the weather is thunder and the entity has line  of sight to the sky, the entity will be struck by lightning when hit. E.g. A thrown Trident with the Channeling enchantment.
     * 
     * This property can't be edited in read-only mode.
     */
    lightningStrikeOnHit: boolean;
    /** 
     * @remarks The fraction of the projectile's speed maintained every tick while traveling through a liquid.
     * 
     * This property can't be edited in read-only mode.
     */
    liquidInertia: number;
    /** 
     * @remarks Duration in seconds that the entity hit will be on fire for when catchFireOnHurt is set to true.
     * 
     * This property can't be edited in read-only mode.
     */
    onFireTime: number;
    /** 
     * @remarks
     * The owner of the projectile.
     * This is used to determine what the projectile can collide with and damage. It also determines which entity is assigned as the attacker.
     * 
     * This property can't be edited in read-only mode.
     */
    owner?: Entity;
    /** 
     * @remarks If true, the projectile will bounce off mobs when no damage is taken. E.g. A spawning wither.
     * 
     * This property can't be edited in read-only mode.
     */
    shouldBounceOnHit: boolean;
    /** 
     * @remarks If true, the projectile will stop moving when an entity is hit as thought it had been blocked. E.g. Thrown trident on hit behavior.
     * 
     * This property can't be edited in read-only mode.
     */
    stopOnHit: boolean;
    static readonly componentId = "minecraft:projectile";
    /** 
     * @remarks
     * Shoots the projectile with a given velocity.
     * The projectile will be shot from its current location.
     * 
     * This function can't be called in read-only mode.
     * @param velocity
     * The velocity to fire the projectile.
     * This controls both the speed and direction which which the projectile will be shot.
     * @param options Optional configuration for the shoot.
     * @throws Throws if the component or entity no longer exist.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
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

/** @beta When added, this component adds the capability that an entity can be ridden by another entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks Zero-based index of the seat that can used to control this entity.
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /** 
     * @remarks Determines whether interactions are not supported if the entity is crouching.
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /** 
     * @remarks Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /** 
     * @remarks If true, this entity will pull in entities that are in the correct `family_types` into any available seat.
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /** 
     * @remarks If true, this entity will be picked when looked at by the rider.
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /** 
     * @remarks Number of seats for riders defined for this entity.
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    static readonly componentId = "minecraft:rideable";
    /** 
     * @remarks Adds an entity to this entity as a rider.
     * 
     * This function can't be called in read-only mode.
     * @param rider Entity that will become the rider of this entity.
     * @returns True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /** 
     * @remarks Ejects the specified rider of this entity.
     * 
     * This function can't be called in read-only mode.
     * @param rider Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /** 
     * @remarks Ejects all riders of this entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /** 
     * @remarks A string-list of entity types that this entity can support as riders.
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /** 
     * @remarks Gets a list of the all the entities currently riding this entity.
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /** 
     * @remarks Gets a list of positions and number of riders for each position for entities riding this entity.
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

/** This component is added to any entity when it is riding another entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks The entity this entity is currently riding on.
     * @throws This property can throw when used.
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = "minecraft:riding";
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

/** @beta Defines the entity's strength to carry items. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks Maximum strength of this entity, as defined in the entity type definition.
     * @throws This property can throw when used.
     */
    readonly max: number;
    /** 
     * @remarks Current value of the strength component that has been set for entities.
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:strength";
}

/** @beta Defines the rules for an entity to be tamed by the player. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /** 
     * @remarks The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
     * @throws This property can throw when used.
     */
    readonly probability: number;
    static readonly componentId = "minecraft:tameable";
    /** 
     * @remarks Returns a set of items that can be used to tame this entity.
     * @throws This function can throw errors.
     */
    getTameItems(): string[];
    /** 
     * @remarks Tames this entity.
     * 
     * This function can't be called in read-only mode.
     * @returns Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}

/** @beta Contains options for taming a rideable entity based on the entity that mounts it. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:tamemount";
    /** 
     * @remarks Sets this rideable entity as tamed.
     * 
     * This function can't be called in read-only mode.
     * @param showParticles Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
}

/** Represents information about a type of entity. */
export class EntityType {
    private constructor();
    /** @remarks Identifier of this entity type - for example, 'minecraft:skeleton'. */
    readonly id: string;
}

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:type_family";
    /** @throws This function can throw errors. */
    getTypeFamilies(): string[];
    /** @throws This function can throw errors. */
    hasTypeFamily(typeFamily: string): boolean;
}

/** @beta An iterator that loops through available entity types. */
export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<EntityType>;
    /** @throws This function can throw errors. */
    next(): IteratorResult<EntityType>;
}

/** Used for accessing all entity types currently available for use within the world. */
export class EntityTypes {
    private constructor();
    /** 
     * @remarks Retrieves an entity type using a string-based identifier.
     * 
     * @example
     * ```javascript
     * import { EntityTypes } from "@minecraft/server";
     * 
     * const entityType = EntityTypes.get("minecraft:creeper");
     * console.warn(entityType.id);
     * ```
     */
    static get(identifier: string): EntityType | undefined;
    /** @remarks Retrieves an iterator of all entity types within this world. */
    static getAll(): EntityType[];
}

/** @beta Defines the general movement speed underwater of this entity. */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:underwater_movement";
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

/** @beta Represents a set of filters for when an event should occur. */
export class FilterGroup {
    private constructor();
}

/** @beta Represents constants related to fluid containers. */
export class FluidContainer {
    private constructor();
    /** @remarks Constant that represents the maximum fill level of a fluid container. */
    static readonly maxFillLevel = 6;
    /** @remarks Constant that represents the minimum fill level of a fluid container. */
    static readonly minFillLevel = 0;
}

/** @beta Contains information regarding a changed {@link World.gameRules} property. */
export class GameRuleChangeAfterEvent {
    private constructor();
    /** @remarks The rule identifier pertaining to the changed {@link World.gameRules} property. */
    readonly rule: GameRule;
    /** @remarks The value of the {@link World.gameRules} property after being changed. */
    readonly value: boolean | number;
}

/** @beta Manages callbacks that are connected to when a {@link World.gameRules} property has changed. */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a {@link World.gameRules} property is changed.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: GameRuleChangeAfterEvent) => void): (arg: GameRuleChangeAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a {@link World.gameRules} property is changed.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: GameRuleChangeAfterEvent) => void): void;
}

/** @beta Represents the game rules for a world experience. */
export class GameRules {
    private constructor();
    /** @remarks This property can't be edited in read-only mode. */
    commandBlockOutput: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    commandBlocksEnabled: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doDayLightCycle: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doEntityDrops: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doFireTick: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doImmediateRespawn: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doInsomnia: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doLimitedCrafting: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doMobLoot: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doMobSpawning: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doTileDrops: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    doWeatherCycle: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    drowningDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    fallDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    fireDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    freezeDamage: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    functionCommandLimit: number;
    /** @remarks This property can't be edited in read-only mode. */
    keepInventory: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    maxCommandChainLength: number;
    /** @remarks This property can't be edited in read-only mode. */
    mobGriefing: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    naturalRegeneration: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    playersSleepingPercentage: number;
    /** @remarks This property can't be edited in read-only mode. */
    projectilesCanBreakBlocks: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    pvp: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    randomTickSpeed: number;
    /** @remarks This property can't be edited in read-only mode. */
    recipesUnlock: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    respawnBlocksExplode: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    sendCommandFeedback: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showBorderEffect: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showCoordinates: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showDeathMessages: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showRecipeMessages: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    showTags: boolean;
    /** @remarks This property can't be edited in read-only mode. */
    spawnRadius: number;
    /** @remarks This property can't be edited in read-only mode. */
    tntExplodes: boolean;
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

/** When present on an item, this item has a cooldown effect when used by entities. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /** 
     * @remarks Represents the cooldown category that this item is associated with.
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /** 
     * @remarks Amount of time, in ticks, that remain for this item cooldown.
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    static readonly componentId = "minecraft:cooldown";
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /** 
     * @remarks Starts a new cooldown period for this item.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { ItemStack, ItemCooldownComponent } from "@minecraft/server";
     * const itemStack = new ItemStack("minecraft:ender_pearl");
     * 
     * const cooldown = itemStack.getComponent(ItemCooldownComponent.componentId);
     * cooldown.startCooldown(player);
     * ```
     */
    startCooldown(player: Player): void;
}

/** 
 * When present on an item, this item can take damage in the process of being used.
 * Note that this component only applies to data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /** 
     * @remarks Returns the current damage level of this particular item.
     * 
     * This property can't be edited in read-only mode.
     */
    damage: number;
    /** 
     * @remarks Represents the amount of damage that this item can take before breaking.
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    static readonly componentId = "minecraft:durability";
    /** 
     * @remarks Returns the maximum chance that this item would be damaged using the damageRange property, given an unbreaking level.
     * 
     * This function can't be called in read-only mode.
     * @param unbreaking Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be greater than 0.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { ItemStack, ItemDurabilityComponent } from "@minecraft/server";
     * const itemStack = new ItemStack("minecraft:iron_sword");
     * 
     * const durability = itemStack.getComponent(ItemDurabilityComponent.componentId);
     * console.warn(`Damage chance: ${durability.getDamageChance(2)}`);
     * ```
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /** 
     * @remarks
     * A range of numbers that is used to calculate the damage chance for an item.
     * The damage chance will fall within this range.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

/** @beta When present on an item, this item can have enchantments applied to it. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /** @throws This property can throw when used. */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = "minecraft:enchantable";
    /** 
     * @remarks Adds an enchantment to the item stack.
     * 
     * This function can't be called in read-only mode.
     * @param enchantment The enchantment interface to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the enchantment type does not exist.
     * 
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown if the enchantment level is outside the allowable range for the given enchantment type.
     * 
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception thrown if the enchantment is not compatible with the item stack.
     * 
     * {@link EnchantmentLevelOutOfBoundsError}
     * 
     * {@link EnchantmentTypeNotCompatibleError}
     * 
     * {@link EnchantmentTypeUnknownIdError}
     * 
     * {@link Error}
     * 
     * @example
     * ```javascript
     * import { world, ItemStack, EquipmentSlot, EntityEquippableComponent, ItemEnchantableComponent } from "@minecraft/server";
     * world.afterEvents.itemUse.subscribe((data) => {
     *     if (data.itemStack.typeId !== "minecraft:stick") return;
     *     const equippable = data.source.getComponent(EntityEquippableComponent.componentId);
     * 
     *     const itemStack = new ItemStack("minecraft:iron_sword", 1);
     *     const enchantable = itemStack.getComponent(ItemEnchantableComponent.componentId);
     *     
     *     // Adds fire aspect to the iron sword
     *     enchantable.addEnchantment({ type: "fire_aspect", level: 2 });
     *     
     *     // Replace the mainhand item with the iron sword
     *     equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);
     * });
     * ```
     */
    addEnchantment(enchantment: Enchantment): void;
    /** 
     * @remarks Adds a list of enchantments to the item stack.
     * 
     * This function can't be called in read-only mode.
     * @param enchantments The list of enchantments to be added.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the enchantment type does not exist.
     * 
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown if the enchantment level is outside the allowable range for the given enchantment type.
     * 
     * ScriptItemEnchantmentTypeNotCompatibleError: Exception thrown if the enchantment is not compatible with the item stack.
     * 
     * {@link EnchantmentLevelOutOfBoundsError}
     * 
     * {@link EnchantmentTypeNotCompatibleError}
     * 
     * {@link EnchantmentTypeUnknownIdError}
     * 
     * {@link Error}
     * 
     * @example
     * ```javascript
     * import { world, ItemStack, EquipmentSlot, EntityEquippableComponent, ItemEnchantableComponent } from "@minecraft/server";
     * world.afterEvents.itemUse.subscribe((data) => {
     *     if (data.itemStack.typeId !== "minecraft:stick") return;
     *     const equippable = data.source.getComponent(EntityEquippableComponent.componentId);
     * 
     *     const itemStack = new ItemStack("minecraft:iron_sword", 1);
     *     const enchantable = itemStack.getComponent(ItemEnchantableComponent.componentId);
     *     
     *     // Adds fire aspect and unbreaking to the iron sword
     *     enchantable.addEnchantment([
     *         { type: "fire_aspect", level: 2 },
     *         { type: "unbreaking", level: 3 },
     *     ]);
     *     
     *     // Replace the mainhand item with the iron sword
     *     equippable.setEquipment(EquipmentSlot.Mainhand, itemStack);
     * });
     * ```
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /** 
     * @remarks Checks whether an enchantment can be added to the item stack.
     * @param enchantment The enchantment interface to be added.
     * @returns Returns true if the enchantment can be added to the item stack.
     * @throws
     * ScriptItemEnchantmentUnknownIdError: Exception thrown if the enchantment type does not exist.
     * 
     * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown if the enchantment level is outside the allowable range for the given enchantment type.
     * 
     * {@link EnchantmentLevelOutOfBoundsError}
     * 
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /** 
     * @remarks Gets the enchantment of a given type from the item stack.
     * @param enchantmentType The enchantment type to get.
     * @returns Returns the enchantment if it exists on the item stack.
     * @throws ScriptItemEnchantmentUnknownIdError: Exception thrown if the enchantment type does not exist.
     * 
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /** 
     * @remarks Gets all enchantments on the item stack.
     * @returns Returns a list of enchantments on the item stack.
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /** 
     * @remarks Checks whether an item stack has a given enchantment type.
     * @param enchantmentType The enchantment type to check for.
     * @returns Returns true if the item stack has the enchantment type.
     * @throws ScriptItemEnchantmentUnknownIdError: Exception thrown if the enchantment type does not exist.
     * 
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /** 
     * @remarks Removes all enchantments applied to this item stack.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /** 
     * @remarks Removes an enchantment of the given type.
     * 
     * This function can't be called in read-only mode.
     * @param enchantmentType The enchantment type to remove.
     * @throws ScriptItemEnchantmentUnknownIdError: Exception thrown if the enchantment type does not exist.
     * 
     * {@link EnchantmentTypeUnknownIdError}
     * 
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/** 
 * When present on an item, this item is consumable by entities.
 * Note that this component only applies to data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /** 
     * @remarks If true, the player can always eat this item (even when not hungry).
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /** 
     * @remarks Represents how much nutrition this food item will give an entity when eaten.
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /** 
     * @remarks When an item is eaten, this value is used according to this formula (nutrition * saturation_modifier * 2) to apply a saturation buff.
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /** 
     * @remarks When specified, converts the active item to the one specified by this property.
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = "minecraft:food";
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
    /** @remarks Clears all dynamic properties that have been set on this item stack. */
    clearDynamicProperties(): void;
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
    getComponent<T extends keyof ItemComponentTypeMap>(componentId: T): ItemComponentTypeMap[T] | undefined;
    /** @remarks Returns all components that are both present on this item stack and supported by the API. */
    getComponents(): ItemComponent[];
    /** 
     * @remarks Returns a property value.
     * @param identifier The property identifier.
     * @returns Returns the value for the property, or undefined if the property has not been set.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /** 
     * @remarks Returns the available set of dynamic property identifiers that have been used on this entity.
     * @returns A string array of the dynamic properties set on this entity.
     */
    getDynamicPropertyIds(): string[];
    /** 
     * @remarks
     * Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.
     * This includes the size of both the key and the value.
     * This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.
     */
    getDynamicPropertyTotalByteCount(): number;
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
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
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
     * Sets a specified property to a value.
     * Note: This function only works with non-stackable items.
     * @param identifier The property identifier.
     * @param value Data value of the property to set.
     * @throws Throws if the item stack is stackable.
     * 
     * @example
     * ```javascript
     * import { ItemStack } from "@minecraft/server";
     * const itemStack = new ItemStack("minecraft:iron_sword");
     * 
     * // Get the property value
     * const value = itemStack.getDynamicProperty("test") ?? 0;
     * itemStack.setDynamicProperty("test", value + 1);
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
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

/** @beta Returns the set of item types registered within Minecraft. */
export class ItemTypes {
    private constructor();
    /** 
     * @remarks Returns a specific item type, if available within Minecraft.
     * 
     * @example
     * ```javascript
     * import { ItemTypes } from "@minecraft/server";
     * 
     * const itemType = ItemTypes.get("minecraft:iron_sword");
     * console.warn(itemType.id);
     * ```
     */
    static get(itemId: string): ItemType | undefined;
    /** @remarks Retrieves all available item types registered within Minecraft. */
    static getAll(): ItemType[];
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

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    /** @remarks This function can't be called in read-only mode. */
    add(locations: Vector3[]): void;
    /** @remarks This function can't be called in read-only mode. */
    remove(locations: Vector3[]): void;
}

/** @beta A specific currently-internal event used for passing messages from client to server. */
export class MessageReceiveAfterEvent {
    private constructor();
    /** @remarks The message identifier. */
    readonly id: string;
    /** @remarks The message. */
    readonly message: string;
    /** @remarks The player who sent the message. */
    readonly player: Player;
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

/** Contains information related to changes to a piston expanding or retracting. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /** @remarks True if the piston is the process of expanding. */
    readonly isExpanding: boolean;
    /** @remarks Contains additional properties and details of the piston. */
    readonly piston: BlockPistonComponent;
}

/** Manages callbacks that are connected to piston activations. */
export class PistonActivateAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a piston expands or retracts.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
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
     * @remarks Manages the selected slot in the player's hotbar.
     * 
     * This property can't be edited in read-only mode.
     */
    selectedSlot: number;
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
     * @beta
     * @remarks
     * Eats an item, providing the item's hunger and saturation effects to the player.
     * Can only be used on food items.
     * 
     * This function can't be called in read-only mode.
     * @param itemStack The item to eat.
     * @throws Throws if the item is not a food item.
     */
    eatItem(itemStack: ItemStack): void;
    /** 
     * @beta
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /** 
     * @beta
     * @remarks Gets the current item cooldown time for a particular cooldown category.
     * @param itemCategory Specifies the cooldown category to retrieve the current cooldown for.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * console.warn(`Item cooldown: ${player.getItemCooldown("ender_pearl")}`);
     * ```
     */
    getItemCooldown(cooldownCategory: string): number;
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
     * @beta
     * @remarks Returns true if this player has operator-level permissions.
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /** 
     * @remarks Plays a music track that only this particular player can hear.
     * 
     * This function can't be called in read-only mode.
     * @param trackId Identifier of the music track to play.
     * @param musicOptions Additional options for the music track.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * player.playMusic("record.otherside", { loop: true });
     * ```
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
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
     * @beta
     * @remarks This is an internal-facing method for posting a system message to downstream clients.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /** 
     * @remarks
     * Queues an additional music track that only this particularplayer can hear.
     * If a track is not playing, a music track will play.
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
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * player.queueMusic("record.otherside", { loop: true });
     * ```
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
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
     * @beta
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, GameMode } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * player.setGameMode(GameMode.spectator);
     * ```
     */
    setGameMode(gameMode?: GameMode): void;
    /** 
     * @beta
     * @remarks Will change the specified players permissions, and whether they are operator or not.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * player.setOp(false);
     * ```
     */
    setOp(isOp: boolean): void;
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
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /** 
     * @beta
     * @remarks Sets the item cooldown time for a particular cooldown category.
     * 
     * This function can't be called in read-only mode.
     * @param itemCategory Specifies the cooldown category to retrieve the current cooldown for.
     * @param tickDuration Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, TicksPerSecond } from "@minecraft/server";
     * 
     * // Get the player
     * const player = world.getAllPlayers()[0];
     * 
     * // Starts an item cooldown for the ender pearl for 5 seconds
     * player.startItemCooldown("ender_pearl", 5 * TicksPerSecond);
     * ```
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /** 
     * @remarks Stops any music tracks from playing for this particular player.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopMusic(): void;
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

/** @beta */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}

/** @beta */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void;
}

/** @beta */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly fromGameMode: GameMode;
    readonly player: Player;
    toGameMode: GameMode;
}

/** @beta */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /** @remarks This function can't be called in read-only mode. */
    subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void;
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
 * @beta 
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
    private constructor();
    /** @throws This function can throw errors. */
    [Symbol.iterator](): Iterator<Player>;
    /** 
     * @remarks
     * Retrieves the next item in this iteration.
     * The resulting IteratorResult contains `.done` and `.value` properties which can be used to see the next Player in the iteration.
     * @throws This function can throw errors.
     */
    next(): IteratorResult<Player>;
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

/** Contains information regarding an event where a player places a block. */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    /** @remarks he face of the block that the new block is being placed on. */
    readonly face: Direction;
    /** @remarks Location relative to the bottom north-west corner of the block where the new block is being placed onto. */
    readonly faceLocation: Vector3;
    /** @remarks The block permutation that is being placed. */
    readonly permutationBeingPlaced: BlockPermutation;
    /** @remarks Player that is placing the block for this event. */
    readonly player: Player;
}

/** Manages callbacks that are connected to before a block is placed by a player. */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before a block is placed by a player.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before an block is placed by a player.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void;
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
    /** 
     * @beta
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getHiddenHudElements(): HudElement[];
    /** 
     * @beta
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /** 
     * @beta
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /** @remarks Returns true if the current reference to this screen display manager object is valid and functional. */
    isValid(): boolean;
    /** 
     * @beta
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    resetHudElements(): void;
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
     * @beta
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * @example
     * ```javascript
     * import { world, HudVisibility, HudElement } from "@minecraft/server";
     * world.afterEvents.itemUse.subscribe((data) => {
     *     if (data.itemStack.typeId !== "minecraft:stick") return;
     * 
     *     const screenDisplay = data.source.onScreenDisplay;
     *     if (data.source.isSneaking) {
     *         screenDisplay.setHudVisibility(HudVisibility.Reset);
     *         return;
     *     };
     *     
     *     screenDisplay.setHudVisibility(HudVisibility.Hide);
     *     screenDisplay.setHudVisibility(HudVisibility.Reset, [ HudElement.Health, HudElement.Crosshair ]);
     * });
     * ```
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
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

/** @beta Describes a particular seating position on this rideable entity. */
export class Seat {
    private constructor();
    /** @remarks If specified, contains a forced rotation that the riders in this seat are facing. */
    readonly lockRiderRotation: number;
    /** @remarks A maximum number of riders that this seat can support. */
    readonly maxRiderCount: number;
    /** @remarks A minimum number of riders that can be placed in this seat position, if this seat is to be filled. */
    readonly minRiderCount: number;
    /** @remarks Physical location of this seat, relative to the entity's location. */
    readonly position: Vector3;
}

/** 
 * @beta 
 * Manages callbacks that are message passing to a server.
 * This event is not currently fully implemented, and should not be used.
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when an internal message is passed.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when an internal message is passed.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}

/** @beta */
export class Structure {
    private constructor();
    readonly id: string;
    /** 
     * @throws This property can throw when used.
     * 
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    isValid(): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

/** @beta */
export class StructureManager {
    private constructor();
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        blockVolume: BlockVolume,
        options?: StructureCreateOptions,
    ): Structure;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /** @remarks This function can't be called in read-only mode. */
    get(identifier: string): Structure | undefined;
    /** @remarks This function can't be called in read-only mode. */
    getIds(): string[];
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void;
}

/** A class that provides system-level events and functions. */
export class System {
    private constructor();
    /** @remarks Returns a collection of after-events for system-level operations. */
    readonly afterEvents: SystemAfterEvents;
    /** 
     * @beta
     * @remarks Returns a collection of before-events for system-level operations.
     */
    readonly beforeEvents: SystemBeforeEvents;
    /** @remarks Represents the current world tick of the server. */
    readonly currentTick: number;
    /** 
     * @beta
     * 
     * @example
     * ```javascript
     * import { world, system, BlockTypes, Vector } from "@minecraft/server";
     * 
     * const blocks = BlockTypes.getAll();
     * const job = system.runJob(function* () {
     *     while (true) {
     *         const players = world.getAllPlayers();
     *         for (let i = 0; i < players.length; i++) {
     *             const player = players[i];
     *             const below = Vector.add(player.location, Vector.down);
     *             const block = player.dimension.getBlock(below);
     *             const randomType = blocks[Math.floor(Math.random() * blocks.length)];
     * 
     *             yield block.setType(randomType);
     * 
     *             if (randomType.id != "minecraft:diamond_block") continue;
     *             system.clearJob(job);
     *         };
     *     };
     * }());
     * ```
     */
    clearJob(jobId: number): void;
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
     * @beta
     * 
     * @example
     * ```javascript
     * import { world, system, BlockTypes, Vector } from "@minecraft/server";
     * 
     * const blocks = BlockTypes.getAll();
     * system.runJob(function* () {
     *     while (true) {
     *         const players = world.getAllPlayers();
     *         for (let i = 0; i < players.length; i++) {
     *             const player = players[i];
     *             const below = Vector.add(player.location, Vector.down);
     *             const block = player.dimension.getBlock(below);
     * 
     *             yield block.setType(blocks[Math.floor(Math.random() * blocks.length)]);
     *         };
     *     };
     * }());
     * ```
     */
    runJob(generator: Generator<void, void, void>): number;
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

/** 
 * @beta 
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event.
 * Note that in before events any APIs that modify gameplay state will not function and will throw an error.
 */
export class SystemBeforeEvents {
    private constructor();
    /** 
     * @remarks
     * Fires when the scripting watchdog shuts down the server. This can be due to using too much memory, or by causing significant slowdown or hang.
     * To prevent shutdown, set the event's cancel property to true.
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
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

/** @beta Represents a trigger for firing an event. */
export class Trigger {
    /** @remarks Event name of the trigger. */
    eventName: string;
    /** @remarks Creates a new trigger. */
    constructor(eventName: string);
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

/** @beta Contains information related to a script watchdog termination. */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /** 
     * @remarks
     * If set to true, cancels the termination of the script runtime.
     * Note that depending on server configuration settings, cancellation of the termination may not be allowed.
     */
    cancel: boolean;
    /** @remarks Contains the reason why a script runtime is to be terminated. */
    readonly terminateReason: WatchdogTerminateReason;
}

/** @beta Manages callbacks that are connected to a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system. */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called when a script runtime is being terminated due to a violation of the performance watchdog system.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void;
}

/** Contains information related to changes in weather in the environment. */
export class WeatherChangeAfterEvent {
    private constructor();
    /** @remarks Dimension in which the weather has changed. */
    readonly dimension: string;
    /** @remarks The weather type after the weather was changed. */
    readonly newWeather: WeatherType;
    /** @remarks The weather type before the weather was changed. */
    readonly previousWeather: WeatherType;
}

/** Manages callbacks that are connected to weather changing. */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when weather changes.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called when weather changes.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}

/** @beta Contains information related to changes in weather in the environment. */
export class WeatherChangeBeforeEvent {
    private constructor();
    /** @remarks If set to true the weather change will be cancelled. */
    cancel: boolean;
    /** @remarks Sets the duration of the new weather (in ticks). */
    duration: number;
    /** @remarks The type of weather that will be applied. */
    newWeather: WeatherType;
    /** @remarks The type of weather that it was prior to the event being fired. */
    readonly previousWeather: WeatherType;
}

/** @beta Manages callbacks that are connected to before weather changing. */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called before weather changes.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: WeatherChangeBeforeEvent) => void): (arg: WeatherChangeBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called before weather changes.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeBeforeEvent) => void): void;
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
    /** @beta */
    readonly gameRules: GameRules;
    /** @remarks Returns the general global scoreboard that applies to the world. */
    readonly scoreboard: Scoreboard;
    /** @beta */
    readonly structureManager: StructureManager;
    /** 
     * @beta
     * @remarks A method that is internal-only, used for broadcasting specific messages between client and server.
     * 
     * This function can't be called in read-only mode.
     * @param id The message identifier.
     * @param value The message.
     */
    broadcastClientMessage(id: string, value: string): void;
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
    /** 
     * @beta
     * @remarks
     * This event fires for each BlockLocation destroyed by an explosion.
     * It is fired after the blocks have already been destroyed.
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /** @remarks This event fires when a button is pushed. */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /** 
     * @beta
     * @remarks This event is triggered after a chat message has been broadcast or sent to players.
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /** @remarks This event is fired when an entity event has been triggered that will update the component definition state of an entity. */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /** @remarks This event is triggered after an event has been added to an entity. */
    readonly effectAdd: EffectAddAfterEventSignal;
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
    /** @remarks This event is fired after an explosion occurs. */
    readonly explosion: ExplosionAfterEventSignal;
    /** 
     * @beta
     * @remarks This event fires when a {@link World.gameRules} property has changed.
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
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
     * @beta
     * @remarks This event is an internal implementation detail, and is otherwise not currently functional.
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /** @remarks This event fires when a piston expands or retracts. */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /** @remarks This event fires before a block is broken by a player. */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /** @remarks Fires when a player moved to a different dimension. */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /** @beta */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /** 
     * @beta
     * @remarks An event for when a player interacts with a block.
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /** 
     * @beta
     * @remarks An event for when a player interacts with an entity.
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
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
    /** @remarks This event will be triggered when the weather changes within Minecraft. */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /** @remarks This event fires when the script environment is initialized on a World. */
    readonly worldInitialize: WorldInitializeAfterEventSignal;
}

/** 
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event.
 * Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., {@link Dimension.spawnEntity})
 */
export class WorldBeforeEvents {
    private constructor();
    /** 
     * @beta
     * @remarks This event is triggered after a chat message has been broadcast or sent to players.
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /** @remarks This event is triggered after an event has been added to an entity. */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /** @remarks Fires before an entity is removed from the world (for example, unloaded or removed after being killed.) */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /** @remarks This event is fired after an explosion occurs. */
    readonly explosion: ExplosionBeforeEventSignal;
    /** @remarks This event fires when an item is successfully used by a player. */
    readonly itemUse: ItemUseBeforeEventSignal;
    /** @remarks This event fires when an item is used on a block by a player. */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /** @remarks This event fires before a block is broken by a player. */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /** @beta */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /** 
     * @beta
     * @remarks Fires before a player interacts with a block.
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /** 
     * @beta
     * @remarks Fires before a player interacts with an entity.
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /** @remarks Fires when a player leaves the game. */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /** 
     * @beta
     * @remarks This event fires before a block is placed by a player.
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /** @beta */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    /** 
     * @beta
     * @remarks
     * This event fires immediately when the script environment is initialized on a World.
     * Not all script functionality may be available.
     * For guaranteed access to world state, use the worldInitialize afterEvent.
     */
    readonly worldInitialize: WorldInitializeBeforeEventSignal;
}

/** 
 * Contains information and methods that can be used at the initialization of the scripting environment for a World.
 * Also, use the supplied propertyRegistry object to register any dynamic properties, within the scope of the World Initialize execution.
 */
export class WorldInitializeAfterEvent {
    private constructor();
}

/** 
 * Manages callbacks that are run at the initialization of the scripting environment for a World.
 * Do note that this event may run multiple times within a session in the case that the /reload command is used.
 */
export class WorldInitializeAfterEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when the scripting environment is initialized for a World.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    /** 
     * @remarks Removes a callback from being called the scripting environment is initialized for a World.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}

/** 
 * @beta 
 * Contains information and methods that can be used at the initialization of the scripting environment for a World.
 * Also, use the supplied blockRegistry object to register block custom components within the scope of the World Initialize execution.
 */
export class WorldInitializeBeforeEvent {
    private constructor();
    /** 
     * @example
     * ```javascript
     * import { world } from "@minecraft/server";
     * world.beforeEvents.worldInitialize.subscribe((data) => {
     *     data.blockTypeRegistry.registerCustomComponent("component:custom", {
     *         onStepOn: (data) => {
     *             if (!data.entity) return;
     * 
     *             data.entity.applyKnockback(0, 0, 1, 1.25);
     *         },
     *     });
     * });
     * ```
     * @example
     * ```javascript
     * import { world, BlockPermutation } from "@minecraft/server";
     * 
     * class TestComponent {
     *     constructor() {
     *         this.onStepOn = this.onStepOn.bind(this);
     *     };
     * 
     *     onStepOn(data) {
     *         const permutation = BlockPermutation.resolve("minecraft:dirt");
     *         data.block.setPermutation(permutation);
     *     };
     * };
     * 
     * world.beforeEvents.worldInitialize.subscribe((data) => {
     *     data.blockTypeRegistry.registerCustomComponent("component:custom", new TestComponent());
     * });
     * ```
     */
    readonly blockTypeRegistry: BlockTypeRegistry;
}

/** 
 * @beta 
 * Manages callbacks that are run at the initialization of the scripting environment for a World.
 * Do note that this event may run multiple times within a session in the case that the /reload command is used.
 */
export class WorldInitializeBeforeEventSignal {
    private constructor();
    /** 
     * @remarks Adds a callback that will be called when the scripting environment is initialized for a World.
     * 
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg: WorldInitializeBeforeEvent) => void): (arg: WorldInitializeBeforeEvent) => void;
    /** 
     * @remarks Removes a callback from being called the scripting environment is initialized for a World.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeBeforeEvent) => void): void;
}

/** @beta Contains additional options for searches for the {@link Dimension.findNearestBiome} API. */
export interface BiomeSearchOptions {
    /** @remarks Bounding volume size to look within. */
    boundingSize?: Vector3;
}

/** 
 * @beta 
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
    /** @remarks This function will be called when a block randomly ticks. */
    onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;
    /** @remarks This function will be called when an entity steps off the block that this custom component is bound to. */
    onStepOff?: (arg: BlockComponentStepOffEvent) => void;
    /** @remarks This function will be called when an entity steps onto the block that this custom component is bound to. */
    onStepOn?: (arg: BlockComponentStepOnEvent) => void;
}

/** Contains optional parameters for registering a block event. */
export interface BlockEventOptions {
    /** @remarks If this value is set, this event will only fire if the impacted block's type matches this parameter. */
    blockTypes?: string[];
    /** @remarks If this value is set, this event will only fire if the impacted block's permutation matches this parameter. */
    permutations?: BlockPermutation[];
}

/** @beta Contains additional options for a block fill operation. */
export interface BlockFillOptions {
    /** @remarks When specified, the fill operation will only apply to blocks that match this description. */
    matchingBlock?: BlockPermutation;
}

/** @beta */
export interface BlockFilter {
    excludePermutations?: BlockPermutation[];
    excludeTags?: string[];
    excludeTypes?: string[];
    includePermutations?: BlockPermutation[];
    includeTags?: string[];
    includeTypes?: string[];
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
    blockFilter?: BlockFilter;
    /** @remarks If true, liquid blocks will be considered as blocks that 'stop' the raycast. */
    includeLiquidBlocks?: boolean;
    /** @remarks If true, passable blocks like vines and flowers will be considered as blocks that 'stop' the raycast. */
    includePassableBlocks?: boolean;
    /** @remarks Maximum distance, in blocks, to process the raycast. */
    maxDistance?: number;
}

/** 
 * @beta
 * A BoundingBox is an interface to an object which represents an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state (min <= max) but cannot guarantee it
 *  (unless it was created using the associated {@link BoundingBoxUtils} utility functions.
 * The min/max coordinates represent the diametrically opposite corners of the rectangle.
 * The BoundingBox is not a representation of blocks
 *  - it has no association with any type, it is just a mathematical construct
 *  - so a rectangle with ( 0,0,0 ) -> ( 0,0,0 ) has a size of ( 0,0,0 ) (unlike the very similar {@link BlockVolume} object)
 */
export interface BoundingBox {
    /** @remarks A {@link Vector3} that represents the largest corner of the rectangle */
    max: Vector3;
    /** @remarks A {@link Vector3} that represents the smallest corner of the rectangle */
    min: Vector3;
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

/** @beta This interface defines an entry into the {@link CompoundBlockVolume} which represents a volume of positive or negative space. */
export interface CompoundBlockVolumeItem {
    /** 
     * @remarks
     * The 'action' defines how the block volume is represented in the compound block volume stack.
     * 'Add' creates a block volume which is positively selected.
     * 'Subtract' creates a block volume which represents a hole or negative space in the overall compound block volume.
     */
    action?: CompoundBlockVolumeAction;
    /** 
     * @remarks
     * The relativity enumeration determines whether the BlockVolume specified is positioned relative to the parent compound block volume origin,
     * or in absolute world space.
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /** @remarks The volume of space */
    volume: BlockVolume;
}

/** Contains a set of updates to the component definition state of an entity. */
export interface DefinitionModifier {
    /** @remarks Retrieves the list of component groups that will be added via this definition modification. */
    addedComponentGroups: string[];
    /** @remarks The list of component groups that will be removed via this definition modification. */
    removedComponentGroups: string[];
    triggers: Trigger[];
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

/** @beta This class represents a specific leveled enchantment that is applied to an item. */
export interface Enchantment {
    /** @remarks The level of this enchantment instance. */
    level: number;
    /** @remarks The enchantment type of this instance. */
    type: EnchantmentType;
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
    /** @remarks Optional entity that caused the damage. */
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

/** Specifies additional filters that are used in registering a data driven trigger event for entities. */
export interface EntityDataDrivenTriggerEventOptions {
    /** @remarks If this value is set, this event will only fire for entities that match the entities within this collection. */
    entities?: Entity[];
    /** @remarks If this value is set, this event will only fire if the impacted entities' type matches this parameter. */
    entityTypes?: string[];
    /** @remarks If this value is set, this event will only fire if the impacted triggered event matches one of the events listed in this parameter. */
    eventTypes?: string[];
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
    /** @beta */
    propertyOptions?: EntityQueryPropertyOptions[];
    /** @remarks Gets/sets a collection of EntityQueryScoreOptions objects with filters for specific scoreboard objectives. */
    scoreOptions?: EntityQueryScoreOptions[];
    /** @remarks Includes entities that match all of the specified tags. */
    tags?: string[];
    /** @remarks If defined, entities that match this type are included. */
    type?: string;
    /** 
     * @beta
     * @remarks In conjunction with location, specified a cuboid volume of entities to include.
     */
    volume?: Vector3;
}

/** @beta */
export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?: 
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
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

/** @beta */
export interface EqualsComparison {
    equals: boolean | number | string;
}

/** Additional configuration options for the {@link Dimension.createExplosion} method. */
export interface ExplosionOptions {
    /** @remarks Whether parts of the explosion also impact underwater. */
    allowUnderwater?: boolean;
    /** @remarks Whether the explosion will break blocks within the blast radius. */
    breaksBlocks?: boolean;
    /** @remarks If true, the explosion is accompanied by fires within or near the blast radius. */
    causesFire?: boolean;
    /** @remarks Optional source of the explosion. */
    source?: Entity;
}

/** @beta */
export interface GreaterThanComparison {
    greaterThan: number;
}

/** @beta */
export interface GreaterThanOrEqualsComparison {
    greaterThanOrEquals: number;
}

/** @beta */
export interface LessThanComparison {
    lessThan: number;
}

/** @beta */
export interface LessThanOrEqualsComparison {
    lessThanOrEquals: number;
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

/** @beta */
export interface NotEqualsComparison {
    notEquals: boolean | number | string;
}

/** Contains additional options for how an animation is played. */
export interface PlayAnimationOptions {
    /** @remarks Amount of time to fade out after an animation stops. */
    blendOutTime?: number;
    /** @remarks Specifies a controller to use that has been defined on the entity. */
    controller?: string;
    /** @remarks Specifies the state to transition to. */
    nextState?: string;
    /** @remarks A list of players the animation will be visible to. */
    players?: string[];
    /** @remarks Specifies a Molang expression for when this animation should complete. */
    stopExpression?: string;
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

export interface ProjectileShootOptions {
    uncertainty?: number;
}

/** @beta */
export interface RangeComparison {
    lowerBound: number;
    upperBound: number;
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

/** 
 * A `RawMessage` with only the `rawtext` property.
 * When a `RawMessage` is serialized the contents are put into a rawtext property, so this is useful when reading saved RawMessages.
 */
export interface RawText {
    /** @remarks A serialization of the current value of an associated sign. */
    rawtext?: RawMessage[];
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

/** @beta */
export interface StructureCreateOptions {
    includeBlocks?: boolean;
    includeEntities?: boolean;
    saveMode?: StructureSaveMode;
}

/** @beta */
export interface StructurePlaceOptions {
    animationMode?: StructureAnimationMode;
    animationSeconds?: number;
    includeBlocks?: boolean;
    includeEntities?: boolean;
    integrity?: number;
    integritySeed?: string;
    mirror?: StructureMirrorAxis;
    rotation?: StructureRotation;
    waterlogged?: boolean;
}

/** @beta */
export interface StructureReadOptions {
    includeBlocks?: boolean;
    includeEntities?: boolean;
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

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}

/** @beta */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
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

// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
    private constructor();
}

/** @beta */
export const HudElementsCount = 13;
/** @beta */
export const HudVisibilityCount = 2;
/** @remarks Holds the number of MoonPhases */
export const MoonPhaseCount = 8;
/** @remarks How many times the server ticks per second of real time. */
export const TicksPerDay = 24000;
/** @remarks How many times the server ticks per second of real time. */
export const TicksPerSecond = 20;
/** @remarks A class that provides system-level events and functions. */
export const system: System;
/** @remarks A class that wraps the state of a world - a set of dimensions and the environment of Minecraft. */
export const world: World;