// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * 
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-editor-bindings",
 *     "version": "0.1.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum CursorControlMode {
    Keyboard = 0,
    Mouse = 1,
    KeyboardAndMouse = 2,
    Fixed = 3,
}

export enum CursorTargetMode {
    Block = 0,
    Face = 1,
}

export enum EditorMode {
    Crosshair = "Crosshair",
    Tool = "Tool",
}

export enum GraphicsSettingsProperty {
    ShowInvisibleBlocks = "ShowInvisibleBlocks",
}

export enum PlaytestSessionResult {
    OK = 0,
    InvalidSessionHandle = 1,
    SessionInfoNotFound = 2,
    TooManyPlayers = 3,
    WorldExportFailed = 4,
    WorldExportBusy = 5,
    UnsupportedScenario = 6,
    EditorSystemFailure = 7,
    InvalidLevelId = 8,
    PlayerNotFound = 9,
    ResponseTimeout = 10,
    UnspecifiedError = 11,
}

export class ClipboardItem {
    private constructor();
    readonly isEmpty: boolean;
    clear(): void;
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    getSize(): minecraftserver.Vector3;
    readFromSelection(selection: Selection): void;
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

export class ClipboardManager {
    private constructor();
    readonly clipboard: ClipboardItem;
    create(): ClipboardItem;
}

export class Cursor {
    private constructor();
    readonly faceDirection: number;
    readonly isVisible: boolean;
    getPosition(): minecraftserver.Vector3;
    getProperties(): CursorProperties;
    hide(): void;
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    resetToDefaultState(): void;
    setProperties(properties: CursorProperties): void;
    show(): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): (arg: CursorPropertiesChangeAfterEvent) => void;
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}

export class Extension {
    private constructor();
    readonly defaultToolGroupId: string;
    readonly description: string;
    readonly name: string;
    readonly notes: string;
}

export class ExtensionContext {
    private constructor();
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly clipboardManager: ClipboardManager;
    readonly cursor: Cursor;
    readonly extensionInfo: Extension;
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    readonly selectionManager: SelectionManager;
    readonly settings: SettingsManager;
    readonly transactionManager: TransactionManager;
}

export class ExtensionContextAfterEvents {
    private constructor();
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}

export class GraphicsSettings {
    private constructor();
    get(property: GraphicsSettingsProperty): boolean | number | string | undefined;
    getAll(): Record<string, boolean | number | string>;
    set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
    setAll(properties: Record<string, boolean | number | string>): void;
}

export class Logger {
    private constructor();
    debug(message: string, properties?: LogProperties): void;
    error(message: string, properties?: LogProperties): void;
    info(message: string, properties?: LogProperties): void;
    warning(message: string, properties?: LogProperties): void;
}

export class MinecraftEditor {
    private constructor();
    readonly log: Logger;
    readonly simulation: SimulationState;
    registerExtension_Internal(
        extensionName: string,
        activationFunction: (arg: ExtensionContext) => void,
        shutdownFunction: (arg: ExtensionContext) => void,
        options?: ExtensionOptionalParameters,
    ): Extension;
}

export class ModeChangeAfterEvent {
    private constructor();
    readonly mode: EditorMode;
}

export class ModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}

export class PlaytestManager {
    private constructor();
    beginPlaytest(options: PlaytestGameOptions): Promise<PlaytestSessionResult>;
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}

export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}

export class Selection {
    private constructor();
    readonly isEmpty: boolean;
    visible: boolean;
    clear(): void;
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    getBoundingBox(): minecraftserver.BoundingBox;
    getFillColor(): minecraftserver.RGBA;
    getOutlineColor(): minecraftserver.RGBA;
    getVolumeOrigin(): minecraftserver.Vector3;
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    peekLastVolume(forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity): minecraftserver.CompoundBlockVolumeItem | undefined;
    popVolume(): void;
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    setFillColor(color: minecraftserver.RGBA): void;
    setOutlineColor(color: minecraftserver.RGBA): void;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly selectionEvent: PrimarySelectionChangedEvent;
}

export class SelectionManager {
    private constructor();
    readonly selection: Selection;
    create(): Selection;
}

export class SettingsManager {
    private constructor();
    readonly graphics: GraphicsSettings;
}

export class SimulationState {
    private constructor();
    isPaused(): boolean;
    setPaused(isPaused: boolean): void;
}

export class TransactionManager {
    private constructor();
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    commitOpenTransaction(): boolean;
    commitTrackedChanges(): number;
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    discardOpenTransaction(): boolean;
    discardTrackedChanges(): number;
    openTransaction(name: string): boolean;
    redo(): void;
    redoSize(): number;
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    trackBlockChangeCompoundBlockVolume(compoundBlockVolume: minecraftserver.CompoundBlockVolume): boolean;
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    trackBlockChangeSelection(selection: Selection): boolean;
    undo(): void;
    undoSize(): number;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * The anchor is a unit vector representation of the side or
     * corner of the Clipboard Item to be written to the world.
     * `{0, 0, 0}` represents the center of the Clipboard item,
     * `{0, 1, 0}` represents the top, `{-1, -1, -1}` represents
     * the bottom/back/left corner, etc
     * The anchor is used in conjunction with the item size to
     * determine the object relative anchor point where the object
     * will be applied in the world.
     * Values for the X/Y/Z components should be within the range
     * `(-1 <= X/Y/Z <=1)`
     *
     */
    anchor?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     *
     */
    mirror?: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks
     * A position offset which should be applied to the paste
     * location while the clipboard item is being written
     *
     */
    offset?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum representing the rotation around the Y-Axis which
     * should be applied while the clipboard item is being written
     *
     */
    rotation?: minecraftserver.StructureRotation;
}

/**
 * The CursorProperties interface is used to describe the
 * properties of the Editor 3D block cursor construct.
 * The 3D block cursor can be queried to retrieve the current
 * properties, and the same property class can be used to set
 * the current properties of the cursor.
 * This interface is generally used at the activation stage of
 * the active tool to set up the color, visibility and input
 * properties of the 3D block cursor
 */
export interface CursorProperties {
    /**
     * @remarks
     * Enum representing the cursor control mode
     * - Fixed Mode locks the cursor to a position which is <X>
     * blocks offset from the current player position. The cursor
     * is camera relative, so it will always appear <X> blocks
     * ahead of the players feet
     * - Keyboard Mode puts the cursor under direct control of the
     * API, and ignores any mouse input.  The cursor can only be
     * moved around using the moveBy method
     * - KeyboardAndMouse mode puts the cursor under a shared
     * control of onMouseMove and keyboard input.  Any mouse
     * movement events will set the cursor to the position of the
     * mouse/world raycast.  This can be modified using the moveBy
     * method, but any subsequent mouse events will reset the
     * position back to where the raycast intersection occurs
     * - Mouse mode puts the cursor under control of mouse move
     * events, and moveBy method will be ignored
     *
     *
     */
    controlMode?: CursorControlMode;
    /**
     * @remarks
     * The fixed distance from the players feet at which the cursor
     * is attached, relative to camera direction.
     * This is only used when [controlMode] is set to `Fixed`
     *
     */
    fixedModeDistance?: number;
    /**
     * @remarks
     * A [Color] Property representing the color of the block
     * cursor object outline
     *
     */
    outlineColor?: minecraftserver.RGBA;
    projectThroughLiquid?: boolean;
    /**
     * @remarks
     * An enum representing the cursor target mode
     * - Block Mode records the block position of the mouse/world
     * raycast intersection
     * - Face Mode records the block position of the block adjacent
     * to the mouse/world raycast intersection, according to the
     * face of the collision point of the selected block
     *
     */
    targetMode?: CursorTargetMode;
    /**
     * @remarks
     * Boolean flag controlling the visibility of the 3D block
     * cursor
     *
     */
    visible?: boolean;
}

/**
 * An interface which defines the set of optional parameters
 * which can be used when calling the `registerEditorExtension`
 * function
 */
export interface ExtensionOptionalParameters {
    /**
     * @remarks
     * An optional text description of the extension being
     * registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The description is meant to be a very short snappy one-liner
     * which quickly and uniquely identifies the extension
     * The length of the string is capped to 256 characters
     *
     */
    description?: string;
    /**
     * @remarks
     * Optional notes for the extension being registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The notes section is meant to convey more detailed
     * information and notes (e.g. a link to the author's website)
     * The length of this string is capped to 1024 characters
     *
     */
    notes?: string;
    toolGroupId?: string;
}

/**
 * A properties class for the global instance of the logger
 * object.
 * While the logger object is available through the {@link
* @minecraft/server-editor-bindings.ExtensionContext} - using
* the global instance allows the creator to use this
* properties class to perform direct server->client messaging
* and broadcasts.
*/
export interface LogProperties {
    /**
     * @remarks
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     *
     */
    player?: minecraftserver.Player;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     *
     */
    tags?: string[];
}

export interface PlaytestGameOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    gameMode?: minecraftserver.GameMode;
    showCoordinates?: boolean;
    spawnPosition?: minecraftserver.Vector3;
    timeOfDay?: number;
    weather?: number;
}

export const editor: MinecraftEditor;