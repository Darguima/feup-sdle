import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ShoppingListItem. */
export interface IShoppingListItem {

    /** ShoppingListItem id */
    id?: (string|null);

    /** ShoppingListItem name */
    name?: (string|null);

    /** ShoppingListItem totalQuantity */
    totalQuantity?: (number|null);

    /** ShoppingListItem acquiredQuantity */
    acquiredQuantity?: (number|null);
}

/** Represents a ShoppingListItem. */
export class ShoppingListItem implements IShoppingListItem {

    /**
     * Constructs a new ShoppingListItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShoppingListItem);

    /** ShoppingListItem id. */
    public id: string;

    /** ShoppingListItem name. */
    public name: string;

    /** ShoppingListItem totalQuantity. */
    public totalQuantity: number;

    /** ShoppingListItem acquiredQuantity. */
    public acquiredQuantity: number;

    /**
     * Creates a new ShoppingListItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShoppingListItem instance
     */
    public static create(properties?: IShoppingListItem): ShoppingListItem;

    /**
     * Encodes the specified ShoppingListItem message. Does not implicitly {@link ShoppingListItem.verify|verify} messages.
     * @param message ShoppingListItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShoppingListItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShoppingListItem message, length delimited. Does not implicitly {@link ShoppingListItem.verify|verify} messages.
     * @param message ShoppingListItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShoppingListItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShoppingListItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShoppingListItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShoppingListItem;

    /**
     * Decodes a ShoppingListItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShoppingListItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShoppingListItem;

    /**
     * Verifies a ShoppingListItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShoppingListItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShoppingListItem
     */
    public static fromObject(object: { [k: string]: any }): ShoppingListItem;

    /**
     * Creates a plain object from a ShoppingListItem message. Also converts values to other types if specified.
     * @param message ShoppingListItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShoppingListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShoppingListItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ShoppingListItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ShoppingList. */
export interface IShoppingList {

    /** ShoppingList id */
    id?: (string|null);

    /** ShoppingList name */
    name?: (string|null);

    /** ShoppingList items */
    items?: (IShoppingListItem[]|null);
}

/** Represents a ShoppingList. */
export class ShoppingList implements IShoppingList {

    /**
     * Constructs a new ShoppingList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShoppingList);

    /** ShoppingList id. */
    public id: string;

    /** ShoppingList name. */
    public name: string;

    /** ShoppingList items. */
    public items: IShoppingListItem[];

    /**
     * Creates a new ShoppingList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShoppingList instance
     */
    public static create(properties?: IShoppingList): ShoppingList;

    /**
     * Encodes the specified ShoppingList message. Does not implicitly {@link ShoppingList.verify|verify} messages.
     * @param message ShoppingList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShoppingList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShoppingList message, length delimited. Does not implicitly {@link ShoppingList.verify|verify} messages.
     * @param message ShoppingList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShoppingList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShoppingList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShoppingList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShoppingList;

    /**
     * Decodes a ShoppingList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShoppingList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShoppingList;

    /**
     * Verifies a ShoppingList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShoppingList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShoppingList
     */
    public static fromObject(object: { [k: string]: any }): ShoppingList;

    /**
     * Creates a plain object from a ShoppingList message. Also converts values to other types if specified.
     * @param message ShoppingList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShoppingList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShoppingList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ShoppingList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
