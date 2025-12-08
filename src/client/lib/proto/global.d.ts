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
    public name: string;

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

    /** ShoppingList replicaId */
    replicaId?: (string|null);

    /** ShoppingList id */
    id?: (string|null);

    /** ShoppingList name */
    name?: (string|null);

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

    /** ShoppingList replicaId. */
    public replicaId: string;

    /** ShoppingList id. */
    public id: string;

    /** ShoppingList name. */
    public name: string;

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

/** Properties of a DotKernel. */
export interface IDotKernel {

    /** DotKernel dotKeys */
    dotKeys?: (IDot[]|null);

    /** DotKernel dotValues */
    dotValues?: ((number|Long)[]|null);
}

/** Represents a DotKernel. */
export class DotKernel implements IDotKernel {

    /**
     * Constructs a new DotKernel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDotKernel);

    /** DotKernel dotKeys. */
    public dotKeys: IDot[];

    /** DotKernel dotValues. */
    public dotValues: (number|Long)[];

    /**
     * Creates a new DotKernel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DotKernel instance
     */
    public static create(properties?: IDotKernel): DotKernel;

    /**
     * Encodes the specified DotKernel message. Does not implicitly {@link DotKernel.verify|verify} messages.
     * @param message DotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DotKernel message, length delimited. Does not implicitly {@link DotKernel.verify|verify} messages.
     * @param message DotKernel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDotKernel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DotKernel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DotKernel;

    /**
     * Decodes a DotKernel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DotKernel;

    /**
     * Verifies a DotKernel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DotKernel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DotKernel
     */
    public static fromObject(object: { [k: string]: any }): DotKernel;

    /**
     * Creates a plain object from a DotKernel message. Also converts values to other types if specified.
     * @param message DotKernel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DotKernel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DotKernel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DotKernel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CCounter. */
export interface ICCounter {

    /** CCounter dotKernel */
    dotKernel?: (IDotKernel|null);
}

/** Represents a CCounter. */
export class CCounter implements ICCounter {

    /**
     * Constructs a new CCounter.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCounter);

    /** CCounter dotKernel. */
    public dotKernel?: (IDotKernel|null);

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
