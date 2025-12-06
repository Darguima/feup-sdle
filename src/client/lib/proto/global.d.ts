import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of an Entity. */
export interface IEntity {

    /** Entity shoppingList */
    shoppingList?: (IShoppingList|null);
}

/** Represents an Entity. */
export class Entity implements IEntity {

    /**
     * Constructs a new Entity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntity);

    /** Entity shoppingList. */
    public shoppingList?: (IShoppingList|null);

    /** Entity payload. */
    public payload?: "shoppingList";

    /**
     * Creates a new Entity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Entity instance
     */
    public static create(properties?: IEntity): Entity;

    /**
     * Encodes the specified Entity message. Does not implicitly {@link Entity.verify|verify} messages.
     * @param message Entity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Entity message, length delimited. Does not implicitly {@link Entity.verify|verify} messages.
     * @param message Entity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Entity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Entity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Entity;

    /**
     * Decodes an Entity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Entity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Entity;

    /**
     * Verifies an Entity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Entity
     */
    public static fromObject(object: { [k: string]: any }): Entity;

    /**
     * Creates a plain object from an Entity message. Also converts values to other types if specified.
     * @param message Entity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Entity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Entity
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ShoppingItem. */
export interface IShoppingItem {

    /** ShoppingItem name */
    name?: (string|null);

    /** ShoppingItem totalQuantity */
    totalQuantity?: (number|null);

    /** ShoppingItem acquiredQuantity */
    acquiredQuantity?: (number|null);
}

/** Represents a ShoppingItem. */
export class ShoppingItem implements IShoppingItem {

    /**
     * Constructs a new ShoppingItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShoppingItem);

    /** ShoppingItem name. */
    public name: string;

    /** ShoppingItem totalQuantity. */
    public totalQuantity: number;

    /** ShoppingItem acquiredQuantity. */
    public acquiredQuantity: number;

    /**
     * Creates a new ShoppingItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShoppingItem instance
     */
    public static create(properties?: IShoppingItem): ShoppingItem;

    /**
     * Encodes the specified ShoppingItem message. Does not implicitly {@link ShoppingItem.verify|verify} messages.
     * @param message ShoppingItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShoppingItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShoppingItem message, length delimited. Does not implicitly {@link ShoppingItem.verify|verify} messages.
     * @param message ShoppingItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShoppingItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShoppingItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShoppingItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShoppingItem;

    /**
     * Decodes a ShoppingItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShoppingItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShoppingItem;

    /**
     * Verifies a ShoppingItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShoppingItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShoppingItem
     */
    public static fromObject(object: { [k: string]: any }): ShoppingItem;

    /**
     * Creates a plain object from a ShoppingItem message. Also converts values to other types if specified.
     * @param message ShoppingItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShoppingItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShoppingItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ShoppingItem
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
    items?: ({ [k: string]: IShoppingItem }|null);
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
    public items: { [k: string]: IShoppingItem };

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
