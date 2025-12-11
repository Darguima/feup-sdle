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
    name?: (IStringMVReg|null);

    /** ShoppingItem nonErased */
    nonErased?: (IEWFlag|null);

    /** ShoppingItem quantity */
    quantity?: (ICCounter|null);

    /** ShoppingItem acquired */
    acquired?: (ICCounter|null);
}

/** Represents a ShoppingItem. */
export class ShoppingItem implements IShoppingItem {

    /**
     * Constructs a new ShoppingItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShoppingItem);

    /** ShoppingItem name. */
    public name?: (IStringMVReg|null);

    /** ShoppingItem nonErased. */
    public nonErased?: (IEWFlag|null);

    /** ShoppingItem quantity. */
    public quantity?: (ICCounter|null);

    /** ShoppingItem acquired. */
    public acquired?: (ICCounter|null);

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
    name?: (IStringMVReg|null);

    /** ShoppingList items */
    items?: ({ [k: string]: IShoppingItem }|null);

    /** ShoppingList dotContext */
    dotContext?: (IDotContext|null);
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
    public name?: (IStringMVReg|null);

    /** ShoppingList items. */
    public items: { [k: string]: IShoppingItem };

    /** ShoppingList dotContext. */
    public dotContext?: (IDotContext|null);

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

/** Properties of a Dot. */
export interface IDot {

    /** Dot id */
    id?: (string|null);

    /** Dot seq */
    seq?: (number|null);
}

/** Represents a Dot. */
export class Dot implements IDot {

    /**
     * Constructs a new Dot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDot);

    /** Dot id. */
    public id: string;

    /** Dot seq. */
    public seq: number;

    /**
     * Creates a new Dot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Dot instance
     */
    public static create(properties?: IDot): Dot;

    /**
     * Encodes the specified Dot message. Does not implicitly {@link Dot.verify|verify} messages.
     * @param message Dot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Dot message, length delimited. Does not implicitly {@link Dot.verify|verify} messages.
     * @param message Dot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Dot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Dot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Dot;

    /**
     * Decodes a Dot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Dot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Dot;

    /**
     * Verifies a Dot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Dot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Dot
     */
    public static fromObject(object: { [k: string]: any }): Dot;

    /**
     * Creates a plain object from a Dot message. Also converts values to other types if specified.
     * @param message Dot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Dot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Dot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Dot
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DotContext. */
export interface IDotContext {

    /** DotContext versionVector */
    versionVector?: ({ [k: string]: number }|null);

    /** DotContext dots */
    dots?: (IDot[]|null);
}

/** Represents a DotContext. */
export class DotContext implements IDotContext {

    /**
     * Constructs a new DotContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDotContext);

    /** DotContext versionVector. */
    public versionVector: { [k: string]: number };

    /** DotContext dots. */
    public dots: IDot[];

    /**
     * Creates a new DotContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DotContext instance
     */
    public static create(properties?: IDotContext): DotContext;

    /**
     * Encodes the specified DotContext message. Does not implicitly {@link DotContext.verify|verify} messages.
     * @param message DotContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDotContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DotContext message, length delimited. Does not implicitly {@link DotContext.verify|verify} messages.
     * @param message DotContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDotContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DotContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DotContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DotContext;

    /**
     * Decodes a DotContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DotContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DotContext;

    /**
     * Verifies a DotContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DotContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DotContext
     */
    public static fromObject(object: { [k: string]: any }): DotContext;

    /**
     * Creates a plain object from a DotContext message. Also converts values to other types if specified.
     * @param message DotContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DotContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DotContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DotContext
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an IntDotKernel. */
export interface IIntDotKernel {

    /** IntDotKernel dotKeys */
    dotKeys?: (IDot[]|null);

    /** IntDotKernel dotValues */
    dotValues?: ((number|Long)[]|null);
}

/** Represents an IntDotKernel. */
export class IntDotKernel implements IIntDotKernel {

    /**
     * Constructs a new IntDotKernel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIntDotKernel);

    /** IntDotKernel dotKeys. */
    public dotKeys: IDot[];

    /** IntDotKernel dotValues. */
    public dotValues: (number|Long)[];

    /**
     * Creates a new IntDotKernel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IntDotKernel instance
     */
    public static create(properties?: IIntDotKernel): IntDotKernel;

    /**
     * Encodes the specified IntDotKernel message. Does not implicitly {@link IntDotKernel.verify|verify} messages.
     * @param message IntDotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIntDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IntDotKernel message, length delimited. Does not implicitly {@link IntDotKernel.verify|verify} messages.
     * @param message IntDotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIntDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IntDotKernel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IntDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IntDotKernel;

    /**
     * Decodes an IntDotKernel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IntDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IntDotKernel;

    /**
     * Verifies an IntDotKernel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IntDotKernel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IntDotKernel
     */
    public static fromObject(object: { [k: string]: any }): IntDotKernel;

    /**
     * Creates a plain object from an IntDotKernel message. Also converts values to other types if specified.
     * @param message IntDotKernel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IntDotKernel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IntDotKernel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for IntDotKernel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a StringDotKernel. */
export interface IStringDotKernel {

    /** StringDotKernel dotKeys */
    dotKeys?: (IDot[]|null);

    /** StringDotKernel dotValues */
    dotValues?: (string[]|null);
}

/** Represents a StringDotKernel. */
export class StringDotKernel implements IStringDotKernel {

    /**
     * Constructs a new StringDotKernel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStringDotKernel);

    /** StringDotKernel dotKeys. */
    public dotKeys: IDot[];

    /** StringDotKernel dotValues. */
    public dotValues: string[];

    /**
     * Creates a new StringDotKernel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StringDotKernel instance
     */
    public static create(properties?: IStringDotKernel): StringDotKernel;

    /**
     * Encodes the specified StringDotKernel message. Does not implicitly {@link StringDotKernel.verify|verify} messages.
     * @param message StringDotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStringDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StringDotKernel message, length delimited. Does not implicitly {@link StringDotKernel.verify|verify} messages.
     * @param message StringDotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStringDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StringDotKernel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StringDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StringDotKernel;

    /**
     * Decodes a StringDotKernel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StringDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StringDotKernel;

    /**
     * Verifies a StringDotKernel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StringDotKernel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StringDotKernel
     */
    public static fromObject(object: { [k: string]: any }): StringDotKernel;

    /**
     * Creates a plain object from a StringDotKernel message. Also converts values to other types if specified.
     * @param message StringDotKernel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StringDotKernel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StringDotKernel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for StringDotKernel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an EmptyDotKernel. */
export interface IEmptyDotKernel {

    /** EmptyDotKernel dotKeys */
    dotKeys?: (IDot[]|null);
}

/** Represents an EmptyDotKernel. */
export class EmptyDotKernel implements IEmptyDotKernel {

    /**
     * Constructs a new EmptyDotKernel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmptyDotKernel);

    /** EmptyDotKernel dotKeys. */
    public dotKeys: IDot[];

    /**
     * Creates a new EmptyDotKernel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmptyDotKernel instance
     */
    public static create(properties?: IEmptyDotKernel): EmptyDotKernel;

    /**
     * Encodes the specified EmptyDotKernel message. Does not implicitly {@link EmptyDotKernel.verify|verify} messages.
     * @param message EmptyDotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmptyDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EmptyDotKernel message, length delimited. Does not implicitly {@link EmptyDotKernel.verify|verify} messages.
     * @param message EmptyDotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmptyDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmptyDotKernel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EmptyDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmptyDotKernel;

    /**
     * Decodes an EmptyDotKernel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EmptyDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmptyDotKernel;

    /**
     * Verifies an EmptyDotKernel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EmptyDotKernel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EmptyDotKernel
     */
    public static fromObject(object: { [k: string]: any }): EmptyDotKernel;

    /**
     * Creates a plain object from an EmptyDotKernel message. Also converts values to other types if specified.
     * @param message EmptyDotKernel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EmptyDotKernel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EmptyDotKernel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EmptyDotKernel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CCounter. */
export interface ICCounter {

    /** CCounter dotKernel */
    dotKernel?: (IIntDotKernel|null);
}

/** Represents a CCounter. */
export class CCounter implements ICCounter {

    /**
     * Constructs a new CCounter.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCounter);

    /** CCounter dotKernel. */
    public dotKernel?: (IIntDotKernel|null);

    /**
     * Creates a new CCounter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCounter instance
     */
    public static create(properties?: ICCounter): CCounter;

    /**
     * Encodes the specified CCounter message. Does not implicitly {@link CCounter.verify|verify} messages.
     * @param message CCounter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCounter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCounter message, length delimited. Does not implicitly {@link CCounter.verify|verify} messages.
     * @param message CCounter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCounter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCounter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCounter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCounter;

    /**
     * Decodes a CCounter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCounter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCounter;

    /**
     * Verifies a CCounter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCounter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCounter
     */
    public static fromObject(object: { [k: string]: any }): CCounter;

    /**
     * Creates a plain object from a CCounter message. Also converts values to other types if specified.
     * @param message CCounter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCounter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCounter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a StringMVReg. */
export interface IStringMVReg {

    /** StringMVReg dotKernel */
    dotKernel?: (IStringDotKernel|null);
}

/** Represents a StringMVReg. */
export class StringMVReg implements IStringMVReg {

    /**
     * Constructs a new StringMVReg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStringMVReg);

    /** StringMVReg dotKernel. */
    public dotKernel?: (IStringDotKernel|null);

    /**
     * Creates a new StringMVReg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StringMVReg instance
     */
    public static create(properties?: IStringMVReg): StringMVReg;

    /**
     * Encodes the specified StringMVReg message. Does not implicitly {@link StringMVReg.verify|verify} messages.
     * @param message StringMVReg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStringMVReg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StringMVReg message, length delimited. Does not implicitly {@link StringMVReg.verify|verify} messages.
     * @param message StringMVReg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStringMVReg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StringMVReg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StringMVReg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StringMVReg;

    /**
     * Decodes a StringMVReg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StringMVReg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StringMVReg;

    /**
     * Verifies a StringMVReg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StringMVReg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StringMVReg
     */
    public static fromObject(object: { [k: string]: any }): StringMVReg;

    /**
     * Creates a plain object from a StringMVReg message. Also converts values to other types if specified.
     * @param message StringMVReg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StringMVReg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StringMVReg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for StringMVReg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a EWFlag. */
export interface IEWFlag {

    /** EWFlag dotKernel */
    dotKernel?: (IEmptyDotKernel|null);
}

/** Represents a EWFlag. */
export class EWFlag implements IEWFlag {

    /**
     * Constructs a new EWFlag.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEWFlag);

    /** EWFlag dotKernel. */
    public dotKernel?: (IEmptyDotKernel|null);

    /**
     * Creates a new EWFlag instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EWFlag instance
     */
    public static create(properties?: IEWFlag): EWFlag;

    /**
     * Encodes the specified EWFlag message. Does not implicitly {@link EWFlag.verify|verify} messages.
     * @param message EWFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEWFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EWFlag message, length delimited. Does not implicitly {@link EWFlag.verify|verify} messages.
     * @param message EWFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEWFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a EWFlag message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EWFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EWFlag;

    /**
     * Decodes a EWFlag message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EWFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EWFlag;

    /**
     * Verifies a EWFlag message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a EWFlag message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EWFlag
     */
    public static fromObject(object: { [k: string]: any }): EWFlag;

    /**
     * Creates a plain object from a EWFlag message. Also converts values to other types if specified.
     * @param message EWFlag
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EWFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EWFlag to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EWFlag
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
