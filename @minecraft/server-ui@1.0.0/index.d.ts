// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/Scripting-Types
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * The `@minecraft/server-ui` module contains types for expressing simple dialog-based user experiences.
 *     * {@link ActionFormData} contain a list of buttons with captions and images that can be used for presenting a set of options to a player.
 *     * {@link MessageFormData} are simple two-button message experiences that are functional for Yes/No or OK/Cancel questions.
 *     * {@link ModalFormData} allow for a more flexible "questionnaire-style" list of controls that can be used to take input.
 *
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui",
 *     "version": "1.0.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum FormRejectReason {
    MalformedResponse = "MalformedResponse",
    PlayerQuit = "PlayerQuit",
    ServerShutdown = "ServerShutdown",
}

/**
 * Builds a simple player form with buttons that let the player take action.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * import { ActionFormData } from "@minecraft/server-ui";
 * const player = world.getAllPlayers()[0];
 * 
 * const form = new ActionFormData();
 * form.title("Test");
 * form.body("Hello World!");
 * form.button("Button 1");
 * form.button("Button 2", "textures/items/diamond_sword");
 * 
 * form.show(player).then((response) => {
 *     console.warn(`Canceled: ${response.canceled}`);
 *     console.warn(`Selection: ${response.selection}`);
 * });
 * ```
 */
export class ActionFormData {
    /** @remarks Method that sets the body text for the modal form. */
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    /** @remarks Adds a button to this form with an icon from a resource pack. */
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form.
     * Returns asynchronously when the player confirms or cancels the dialog.
     *
     * This function can't be called in read-only mode.
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    /** @remarks This builder method sets the title for the modal dialog. */
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}

/** Returns data about the player results from a modal action form. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ActionFormResponse extends FormResponse {
    private constructor();
    /** @remarks Returns the index of the button that was pushed. */
    readonly selection?: number;
}

/** Base type for a form response. */
export class FormResponse {
    private constructor();
}

/**
 * Builds a simple two-button modal dialog.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * import { MessageFormData } from "@minecraft/server-ui";
 * const player = world.getAllPlayers()[0];
 * 
 * const form = new MessageFormData();
 * form.title("Test");
 * form.body("Hello World!");
 * form.button1("Button 1");
 * form.button2("Button 2");
 * 
 * form.show(player).then((response) => {
 *     console.warn(`Canceled: ${response.canceled}`);
 *     console.warn(`Selection: ${response.selection}`);
 * });
 * ```
 */
export class MessageFormData {
    /** @remarks Method that sets the body text for the modal form. */
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    /** @remarks Method that sets the text for the first button of the dialog. */
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    /** @remarks This method sets the text for the second button on the dialog. */
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form.
     * Returns asynchronously when the player confirms or cancels the dialog.
     *
     * This function can't be called in read-only mode.
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    /** @remarks This builder method sets the title for the modal dialog. */
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}

/** Returns data about the player results from a modal message form. */
// @ts-ignore Class inheritance allowed for native defined classes
export class MessageFormResponse extends FormResponse {
    private constructor();
    /** @remarks Returns the index of the button that was pushed. */
    readonly selection?: number;
}

/**
 * Used to create a fully customizable pop-up form for a player.
 * @example
 * ```javascript
 * import { world } from "@minecraft/server";
 * import { ModalFormData } from "@minecraft/server-ui";
 * const player = world.getAllPlayers()[0];
 * 
 * const form = new ModalFormData();
 * form.title("Test");
 * form.("Dropdown", [ "One", "Two" ], 1);
 * form.slider("Slider", 0, 10, 1, 5);
 * form.textField("Text Field", "Placeholder", "Hello World!");
 * form.toggle("Toggle", true);
 * 
 * form.show(player).then((response) => {
 *     console.warn(`Canceled: ${response.canceled}`);
 *     console.warn("Form Values:", response.formValues);
 * });
 * ```
 */
export class ModalFormData {
    /** @remarks Adds a dropdown with choices to the form. */
    dropdown(label: minecraftserver.RawMessage | string, options: (minecraftserver.RawMessage | string)[], defaultValueIndex?: number): ModalFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form.
     * Returns asynchronously when the player confirms or cancels the dialog.
     *
     * This function can't be called in read-only mode.
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    /** @remarks Adds a numeric slider to the form. */
    slider(label: minecraftserver.RawMessage | string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData;
    /** @remarks Adds a textbox to the form. */
    textField(label: minecraftserver.RawMessage | string, placeholderText: minecraftserver.RawMessage | string, defaultValue?: minecraftserver.RawMessage | string): ModalFormData;
    /** @remarks This builder method sets the title for the modal dialog. */
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    /** @remarks Adds a toggle checkbox button to the form. */
    toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData;
}

/** Returns data about player responses to a modal form. */
// @ts-ignore Class inheritance allowed for native defined classes
export class ModalFormResponse extends FormResponse {
    private constructor();
    /** @remarks An ordered set of values based on the order of controls specified by ModalFormData. */
    readonly formValues?: (boolean | number | string)[];
}

// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    readonly reason: FormRejectReason;
}
