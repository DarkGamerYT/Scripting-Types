// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-gametest` module provides scriptable APIs for scaffolding and testing content experiences in Minecraft.
 *
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-gametest",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum GameTestErrorType {
    Assert = "Assert",
    AssertAtPosition = "AssertAtPosition",
    ExecutionTimeout = "ExecutionTimeout",
    ExhaustedAttempts = "ExhaustedAttempts",
    FailConditionsMet = "FailConditionsMet",
    LevelStateModificationFailed = "LevelStateModificationFailed",
    MethodNotImplemented = "MethodNotImplemented",
    SimulatedPlayerOutOfBounds = "SimulatedPlayerOutOfBounds",
    Unknown = "Unknown",
    Waiting = "Waiting",
}

export enum LookDuration {
    Continuous = "Continuous",
    Instant = "Instant",
    UntilMove = "UntilMove",
}

/** Returns information about whether this fence is connected to other fences in several directions. */
export class FenceConnectivity {
    private constructor();
    /** @remarks Represents whether this fence block is connected to another fence to the east (x + 1). */
    readonly east: boolean;
    /** @remarks Represents whether this fence block is connected to another fence to the north (z - 1). */
    readonly north: boolean;
    /** @remarks Represents whether this fence block is connected to another fence to the south (z + 1). */
    readonly south: boolean;
    /** @remarks Represents whether this fence block is connected to another fence to the west (x - 1). */
    readonly west: boolean;
}

/** 
 * Executes a set of steps defined via chained `.thenXyz` methods, sequentially.
 * This facilitates a 'script' of GameTest setup methods and assertions over time.
 */
export class GameTestSequence {
    private constructor();
    /** 
     * @remarks
     * Runs the given callback as a step within a GameTest sequence.
     * Exceptions thrown within the callback will end sequence execution.
     * 
     * This function can't be called in read-only mode.
     * @param callback Callback function to execute.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenExecute(callback: () => void): GameTestSequence;
    /** 
     * @remarks
     * After a delay, runs the given callback as a step within a GameTest sequence.
     * Exceptions thrown within the callback will end sequence execution.
     * 
     * This function can't be called in read-only mode.
     * @param delayTicks Number of ticks to wait before executing the callback.
     * @param callback Callback function to execute.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /** 
     * @remarks Runs the given callback every tick for the given number of ticks.
     * 
     * This function can't be called in read-only mode.
     * @param callback Callback function to execute.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /** 
     * @remarks Causes the test to fail if this step in the GameTest sequence is reached.
     * 
     * This function can't be called in read-only mode.
     * @param errorMessage Error message summarizing the failure condition.
     */
    thenFail(errorMessage: string): void;
    /** 
     * @remarks Idles the GameTest sequence for the specified delayTicks.
     * 
     * This function can't be called in read-only mode.
     * @delayTicks Number of ticks to delay for this step in the GameTest sequence.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenIdle(delayTicks: number): GameTestSequence;
    /** 
     * @remarks Marks the GameTest a success if this step is reached in the GameTest sequence.
     * 
     * This function can't be called in read-only mode.
     */
    thenSucceed(): void;
    /** 
     * @remarks
     * Executes the given callback every tick until it succeeds.
     * Exceptions thrown within the callback will end sequence execution.
     * 
     * This function can't be called in read-only mode.
     * @param callback
     * Testing callback function to execute.
     * Typically, this function will have .assertXyz functions within it.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenWait(callback: () => void): GameTestSequence;
    /** 
     * @remarks
     * After a delay from the previous step, executes the given callback every tick until it succeeds.
     * Exceptions thrown within the callback will end sequence execution.
     * 
     * This function can't be called in read-only mode.
     * @param delayTicks Tick (after the previous step in the GameTest sequence) to run the callback at.
     * @param callback
     * Testing callback function to execute.
     * Typically, this function will have .assertXyz functions within it.
     * @returns Returns a GameTestSequence object where additional .thenXyz method steps can be added.
     */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): minecraftserver.Vector3[];
}

/** 
 * A utility class to set GameTest parameters for a test.
 * Methods can be chained together to set multiple properties.
 */
export class RegistrationBuilder {
    private constructor();
    /** 
     * @remarks Sets the batch for the test to run in.
     * 
     * This function can't be called in read-only mode.
     * @param batchName Name of the batch for the test.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    batch(batchName: string): RegistrationBuilder;
    /** 
     * @remarks Sets the maximum number of times a test will try to rerun if it fails.
     * 
     * This function can't be called in read-only mode.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /** 
     * @remarks Sets the maximum number of ticks a test will run for before timing out and failing.
     * 
     * This function can't be called in read-only mode.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /** 
     * @remarks Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.
     * 
     * This function can't be called in read-only mode.
     * @param paddingBlocks Size, in blocks, around the GameTest where additional GameTests should not be created.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /** 
     * @remarks Whether this test is required to pass as part of its broader set of tests.
     * 
     * This function can't be called in read-only mode.
     * @param isRequired If set to true, the test must pass in order for the entire run of tests to pass.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    required(isRequired: boolean): RegistrationBuilder;
    /** 
     * @remarks Sets the number of successful test runs to be considered successful.
     * 
     * This function can't be called in read-only mode.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /** 
     * @remarks If true, runs the test in all four rotations when run via /gametest runset.
     * 
     * This function can't be called in read-only mode.
     */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /** 
     * @remarks Sets the number of ticks for a test to wait before executing when the structure is spawned.
     * 
     * This function can't be called in read-only mode.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /** 
     * @remarks Sets the name of the structure for a test to use. 'xyz:bar' will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.
     * 
     * This function can't be called in read-only mode.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    structureName(structureName: string): RegistrationBuilder;
    /** 
     * @remarks
     * Adds a tag to a test.
     * You can run all tests with a given tag with `/gametest runset <tag>`.
     * 
     * This function can't be called in read-only mode.
     * @returns RegistrationBuilder object where additional configuration methods can be called.
     */
    tag(tag: string): RegistrationBuilder;
}

/** 
 * Implements a class that can be used for testing sculk spreading behaviors.
 * This sculk spreader class can drive the growth of sculk around a particular block.
 */
export class SculkSpreader {
    private constructor();
    /** 
     * @remarks Gets the maximum charge of a sculk spreader.
     * @throws This property can throw when used.
     */
    readonly maxCharge: number;
    /** @remarks This function can't be called in read-only mode. */
    addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void;
    /** 
     * @remarks Retrieves the current position of the specified cursor.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): minecraftserver.Vector3;
    /** 
     * @remarks Returns a number of overall cursors for this sculk spreader.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /** 
     * @remarks Gets the total current charge of the sculk spreader.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    getTotalCharge(): number;
}

/** 
 * A simulated player can be used within GameTests to represent how a player moves throughout the world and to support testing of how entities and the environment will react to a player.
 * This type derives much of its structure and methods from the {@link minecraftserver.Player} type.
 * Note that many types of events that may be available for entities more broadly, such as item use events, may not fire in the same capacity for simulated players.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SimulatedPlayer extends minecraftserver.Player {
    private constructor();
    /** 
     * @remarks Rotation of the head across pitch and yaw angles.
     * @throws This property can throw when used.
     */
    readonly headRotation: minecraftserver.Vector2;
    /** 
     * @remarks Returns whether the simulated player is sprinting.
     * 
     * This property can't be edited in read-only mode.
     */
    isSprinting: boolean;
    /** 
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target.
     * Target selection is performed by raycasting from the player's head.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /** 
     * @remarks
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target.
     * The attack can be performed at any distance and does not require line of sight to the target entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    attackEntity(entity: minecraftserver.Entity): boolean;
    /** 
     * @remarks
     * Destroys the block at blockLocation, respecting the rules of the server player's game mode.
     * The block will be hit until broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     * 
     * This function can't be called in read-only mode.
     * @param blockLocation Location of the block to interact with.
     * @param direction Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    chat(message: string): void;
    /** 
     * @remarks Simulates and performs a disconnection of the simulated player from the world.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    disconnect(): void;
    /** 
     * @remarks Drops the simulated player's selected item
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    dropSelectedItem(): boolean;
    /** 
     * @remarks
     * Causes the simulated player to start flying as though they were flying in creative mode.
     * For flying with Elytra, see function glide.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    fly(): void;
    /** 
     * @remarks Gives the simulated player a particular item stack.
     * 
     * This function can't be called in read-only mode.
     * @param itemStack Item to give.
     * @param selectedSlot Whether to set the selected slot once given.
     * @throws This function can throw errors.
     */
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    /** 
     * @remarks
     * Causes the simulated player to start gliding.
     * Elytra must be equipped and the player must be in the air.
     * 
     * This function can't be called in read-only mode.
     * @returns
     * Returns true if the simulated player begins to glide.
     * Returns false if the player is already gliding, or the player does not have Elytra equipped, is in water or is on the ground.
     * @throws This function can throw errors.
     */
    glide(): boolean;
    /** 
     * @remarks
     * Performs a raycast from the player's head and interacts with the first intersected block or entity.
     * Returns true if the interaction was successful.
     * Maximum range is 6 blocks.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /** 
     * @remarks
     * Causes the simulated player to interact with a block.
     * The block at the specified block location must be solid.
     * Returns true if the interaction was performed.
     * 
     * This function can't be called in read-only mode.
     * @param blockLocation Location of the block to interact with.
     * @param direction Direction to place the specified item within.
     * @throws This function can throw errors.
     */
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /** 
     * @remarks
     * Causes the simulated player to interact with a mob.
     * Returns true if the interaction was performed.
     * 
     * This function can't be called in read-only mode.
     * @param entity Entity to interact with.
     * @throws This function can throw errors.
     */
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    /** 
     * @remarks Causes the simulated player to jump.
     * 
     * This function can't be called in read-only mode.
     * @returns True if a jump was performed.
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /** 
     * @remarks Rotates the simulated player's head/body to look at the given block location.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void;
    /** 
     * @remarks Rotates the simulated player's head/body to look at the given entity.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void;
    /** 
     * @remarks Rotates the simulated player's head/body to look at the given location.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void;
    /** 
     * @remarks Orders the simulated player to walk in the given direction relative to the GameTest.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /** 
     * @remarks Orders the simulated player to walk in the given direction relative to the player's current rotation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /** 
     * @remarks
     * Orders the simulated player to move to the given block location in a straight line.
     * If a move or navigation is already playing, this will override the last move/navigation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void;
    /** 
     * @remarks
     * Orders the simulated player to move to the given location in a straight line.
     * If a move or navigation is already playing, this will override the last move/navigation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void;
    /** 
     * @remarks
     * Orders the simulated player to move to a specific block location using navigation.
     * If a move or navigation is already playing, this will override the last move/walk.
     * Note that if the simulated player gets stuck, that simulated player will stop.
     * The player must be touching the ground in order to start navigation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult;
    /** 
     * @remarks
     * Will use navigation to follow the selected entity to within a one block radius.
     * If a move or navigation is already playing, this will override the last move/navigation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult;
    /** 
     * @remarks
     * Orders the simulated player to move to a specific location using navigation.
     * If a move or navigation is already playing, this will override the last move/walk.
     * Note that if the simulated player gets stuck, that simulated player will stop.
     * The player must be touching the ground in order to start navigation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult;
    /** 
     * @remarks
     * Use navigation to follow the route provided via the locations parameter.
     * If a move or navigation is already playing, this will override the last move/navigation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    /** 
     * @remarks Respawns the particular simulated player.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    respawn(): boolean;
    /** 
     * @remarks Causes the simulated player to turn by the provided angle, relative to the player's current rotation.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /** 
     * @remarks Causes the simulated player to turn to face the provided angle, relative to the GameTest.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /** 
     * @remarks Sets a particular item for the simulated player.
     * 
     * This function can't be called in read-only mode.
     * @param itemStack Item to set.
     * @param slot Slot to place the given item in.
     * @param selectedSlot Whether to set the selected slot once set.
     * @throws This function can throw errors.
     */
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    startBuild(slot?: number): void;
    /** 
     * @remarks Stops destroying the block that is currently being hit.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopBuild(): void;
    /** 
     * @remarks Causes the simulated player to stop flying.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopFlying(): void;
    /** 
     * @remarks Causes the simulated player to stop gliding.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopGliding(): void;
    /** 
     * @remarks Stops interacting with entities or blocks.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /** 
     * @remarks Stops moving/walking/following if the simulated player is moving.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /** 
     * @remarks Causes the simulated player to stop swimming.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    stopSwimming(): void;
    /** 
     * @remarks Stops using the currently active item.
     * 
     * This function can't be called in read-only mode.
     * @returns Returns the item that was in use, or undefined if no item was in use.
     * @throws This function can throw errors.
     */
    stopUsingItem(): minecraftserver.ItemStack | undefined;
    /** 
     * @remarks Causes the simulated player to start swimming.
     * 
     * This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    swim(): void;
    /** 
     * @remarks
     * Causes the simulated player to use an item. Does not consume the item.
     * Returns false if the item is on cooldown.
     * 
     * This function can't be called in read-only mode.
     * @param itemStack Item to use.
     * @throws This function can throw errors.
     */
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    /** 
     * @remarks Causes the simulated player to hold and use an item in their inventory.
     * 
     * This function can't be called in read-only mode.
     * @param slot Index of the inventory slot.
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /** 
     * @remarks
     * Causes the simulated player to use an item in their inventory on a block.
     * The block at the specified block location must be solid.
     * Returns true if the item was used.
     * 
     * This function can't be called in read-only mode.
     * @param slot 
     * @param blockLocation Location to use the item upon.
     * @param direction Direction to place the specified item within.
     * @param faceLocation Location relative to the bottom north-west corner of the block where the item is placed.
     * @throws This function can throw errors.
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
    /** 
     * @remarks
     * Causes the simulated player to use an item on a block.
     * The block at the specified block location must be solid.
     * Returns true if the item was used.
     * 
     * This function can't be called in read-only mode.
     * @param itemStack 
     * @param blockLocation Location to use the item upon.
     * @param direction Direction to place the specified item within.
     * @param faceLocation Location relative to the bottom north-west corner of the block where the item is placed.
     * @throws This function can throw errors.
     */
    useItemOnBlock(
        itemStack: minecraftserver.ItemStack,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
}

/** These well-known tags can be used to classify different tests into suites to run. */
export class Tags {
    private constructor();
    /** @remarks Indicates that the tagged test should be a part of all suites. */
    static readonly suiteAll = "suite:all";
    /** @remarks Indicates that the tagged test should be a part of an internal (debug) test suite. */
    static readonly suiteDebug = "suite:debug";
    /** @remarks Indicates that the tagged test should be a part of the default test suite. */
    static readonly suiteDefault = "suite:default";
    /** @remarks Indicates that the tagged test should be a part of a suite of disabled tests. */
    static readonly suiteDisabled = "suite:disabled";
    static readonly suiteNextUpdate = "suite:nextupdate";
}

/** 
 * Main class for GameTest functions, with helpers and data for manipulating the respective test.
 * Note that all methods of this class expect BlockLocations and Locations relative to the GameTest structure block.
 */
export class Test {
    private constructor();
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assert(condition: boolean, message: string): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertCanReachLocation(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, canReach?: boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertContainerContains(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertContainerEmpty(blockLocation: minecraftserver.Vector3): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: minecraftserver.Vector3,
        hasArmor?: boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent?: boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityInstancePresent(
        entity: minecraftserver.Entity,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityState(
        blockLocation: minecraftserver.Vector3,
        entityTypeIdentifier: string,
        callback: (arg: minecraftserver.Entity) => boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertEntityTouching(entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertIsWaterlogged(blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertItemEntityCountIs(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance: number,
        count: number,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertItemEntityPresent(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    assertRedstonePower(blockLocation: minecraftserver.Vector3, power: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    destroyBlock(blockLocation: minecraftserver.Vector3, dropResources?: boolean): void;
    /** @throws This function can throw errors. */
    fail(errorMessage: string): void;
    /** @throws This function can throw errors. */
    failIf(callback: () => void): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    getBlock(blockLocation: minecraftserver.Vector3): minecraftserver.Block;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    getDimension(): minecraftserver.Dimension;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined;
    getTestDirection(): minecraftserver.Direction;
    /** @remarks This function can't be called in read-only mode. */
    idle(tickDelay: number): Promise<void>;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    pressButton(blockLocation: minecraftserver.Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    print(text: string): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    pullLever(blockLocation: minecraftserver.Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    pulseRedstone(blockLocation: minecraftserver.Vector3, duration: number): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    relativeBlockLocation(worldBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /** @remarks This function can't be called in read-only mode. */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spawnSimulatedPlayer(
        blockLocation: minecraftserver.Vector3,
        name: string,
        gameMode?: minecraftserver.GameMode,
    ): SimulatedPlayer;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    spreadFromFaceTowardDirection(
        blockLocation: minecraftserver.Vector3,
        fromFace: minecraftserver.Direction,
        direction: minecraftserver.Direction,
    ): void;
    /** @remarks This function can't be called in read-only mode. */
    startSequence(): GameTestSequence;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeed(): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeedIf(callback: () => void): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeedOnTick(tick: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeedWhen(callback: () => void): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    succeedWhenBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent: boolean,
    ): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void;
    /** @remarks This function can't be called in read-only mode. */
    until(callback: () => void): Promise<void>;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void;
    /** 
     * @remarks This function can't be called in read-only mode.
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    walkToLocation(mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number): void;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    worldBlockLocation(relativeBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /** 
     * @throws This function can throw errors.
     * 
     * {@link GameTestError}
     */
    worldLocation(relativeLocation: minecraftserver.Vector3): minecraftserver.Vector3;
}

export interface GameTestErrorContext {
    absolutePosition: minecraftserver.Vector3;
    relativePosition: minecraftserver.Vector3;
    tickCount: number;
}

export interface MoveToOptions {
    faceTarget?: boolean;
    speed?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class GameTestError extends Error {
    private constructor();
    readonly context?: GameTestErrorContext;
    readonly messageParameters: string[];
    readonly type: GameTestErrorType;
}

/** 
 * @remarks
 * Registers a new GameTest function.
 * This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
 * 
 * This function can't be called in read-only mode.
 * @param testClassName Name of the class of tests this test should be a part of.
 * @param testName Name of this specific test.
 * @param testFunction Implementation of the test function.
 * @returns Returns a {@link RegistrationBuilder} object where additional options for this test can be specified via builder methods.
 * 
 * @example
 * ```javascript
 * import { TicksPerSecond } from "@minecraft/server";
 * import * as GameTest from "@minecraft/server-gametest";
 * GameTest.register("king", "test", (test) => {
 *     const location = { x: 1, y: 2, z: 3 };
 * 
 *     test.spawn("minecraft:creeper", location);
 *     test.succeedWhen(() => {
 *         test.assertEntityPresentInArea("minecraft:creeper", true);
 *     });
 * })
 * .maxTicks(30 * TicksPerSecond) // 30 seconds
 * .structureName("king:test"); // "/structures/king/test.mcstructure"
 * ```
 */
export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => void,
): RegistrationBuilder;
/** 
 * @remarks
 * Registers a new GameTest function that is designed for asynchronous execution.
 * This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
 * 
 * This function can't be called in read-only mode.
 * @param testClassName Name of the class of tests this test should be a part of.
 * @param testName Name of this specific test.
 * @param testFunction Implementation of the test function.
 * @returns Returns a {@link RegistrationBuilder} object where additional options for this test can be specified via builder methods.
 * 
 * @example
 * ```javascript
 * import { TicksPerSecond } from "@minecraft/server";
 * import * as GameTest from "@minecraft/server-gametest";
 * GameTest.registerAsync("king", "test", async (test) => {
 *     const location = { x: 1, y: 2, z: 3 };
 * 
 *     test.spawn("minecraft:creeper", location);
 *     test.succeedWhen(() => {
 *         test.assertEntityPresentInArea("minecraft:creeper", true);
 *     });
 * })
 * .maxTicks(30 * TicksPerSecond) // 30 seconds
 * .structureName("king:test"); // "/structures/king/test.mcstructure"
 * ```
 */
export function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => Promise<void>,
): RegistrationBuilder;