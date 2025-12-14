import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a GetShoppingListRequest. */
export interface IGetShoppingListRequest {

    /** GetShoppingListRequest id */
    id?: (string|null);
}

/** Represents a GetShoppingListRequest. */
export class GetShoppingListRequest implements IGetShoppingListRequest {

    /**
     * Constructs a new GetShoppingListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetShoppingListRequest);

    /** GetShoppingListRequest id. */
    public id: string;

    /**
     * Creates a new GetShoppingListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetShoppingListRequest instance
     */
    public static create(properties?: IGetShoppingListRequest): GetShoppingListRequest;

    /**
     * Encodes the specified GetShoppingListRequest message. Does not implicitly {@link GetShoppingListRequest.verify|verify} messages.
     * @param message GetShoppingListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetShoppingListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetShoppingListRequest message, length delimited. Does not implicitly {@link GetShoppingListRequest.verify|verify} messages.
     * @param message GetShoppingListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetShoppingListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetShoppingListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetShoppingListRequest;

    /**
     * Decodes a GetShoppingListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetShoppingListRequest;

    /**
     * Verifies a GetShoppingListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetShoppingListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetShoppingListRequest
     */
    public static fromObject(object: { [k: string]: any }): GetShoppingListRequest;

    /**
     * Creates a plain object from a GetShoppingListRequest message. Also converts values to other types if specified.
     * @param message GetShoppingListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetShoppingListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetShoppingListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetShoppingListRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SubscribeShoppingListRequest. */
export interface ISubscribeShoppingListRequest {

    /** SubscribeShoppingListRequest id */
    id?: (string|null);
}

/** Represents a SubscribeShoppingListRequest. */
export class SubscribeShoppingListRequest implements ISubscribeShoppingListRequest {

    /**
     * Constructs a new SubscribeShoppingListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeShoppingListRequest);

    /** SubscribeShoppingListRequest id. */
    public id: string;

    /**
     * Creates a new SubscribeShoppingListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeShoppingListRequest instance
     */
    public static create(properties?: ISubscribeShoppingListRequest): SubscribeShoppingListRequest;

    /**
     * Encodes the specified SubscribeShoppingListRequest message. Does not implicitly {@link SubscribeShoppingListRequest.verify|verify} messages.
     * @param message SubscribeShoppingListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeShoppingListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeShoppingListRequest message, length delimited. Does not implicitly {@link SubscribeShoppingListRequest.verify|verify} messages.
     * @param message SubscribeShoppingListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeShoppingListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeShoppingListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeShoppingListRequest;

    /**
     * Decodes a SubscribeShoppingListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeShoppingListRequest;

    /**
     * Verifies a SubscribeShoppingListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeShoppingListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeShoppingListRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeShoppingListRequest;

    /**
     * Creates a plain object from a SubscribeShoppingListRequest message. Also converts values to other types if specified.
     * @param message SubscribeShoppingListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeShoppingListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeShoppingListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeShoppingListRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RequestRingView. */
export interface IRequestRingView {
}

/** Represents a RequestRingView. */
export class RequestRingView implements IRequestRingView {

    /**
     * Constructs a new RequestRingView.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestRingView);

    /**
     * Creates a new RequestRingView instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestRingView instance
     */
    public static create(properties?: IRequestRingView): RequestRingView;

    /**
     * Encodes the specified RequestRingView message. Does not implicitly {@link RequestRingView.verify|verify} messages.
     * @param message RequestRingView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestRingView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestRingView message, length delimited. Does not implicitly {@link RequestRingView.verify|verify} messages.
     * @param message RequestRingView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestRingView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestRingView message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestRingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestRingView;

    /**
     * Decodes a RequestRingView message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestRingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestRingView;

    /**
     * Verifies a RequestRingView message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestRingView message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestRingView
     */
    public static fromObject(object: { [k: string]: any }): RequestRingView;

    /**
     * Creates a plain object from a RequestRingView message. Also converts values to other types if specified.
     * @param message RequestRingView
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestRingView, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestRingView to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestRingView
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an Ok. */
export interface IOk {
}

/** Represents an Ok. */
export class Ok implements IOk {

    /**
     * Constructs a new Ok.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOk);

    /**
     * Creates a new Ok instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ok instance
     */
    public static create(properties?: IOk): Ok;

    /**
     * Encodes the specified Ok message. Does not implicitly {@link Ok.verify|verify} messages.
     * @param message Ok message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ok message, length delimited. Does not implicitly {@link Ok.verify|verify} messages.
     * @param message Ok message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Ok message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ok
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ok;

    /**
     * Decodes an Ok message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ok
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ok;

    /**
     * Verifies an Ok message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Ok message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ok
     */
    public static fromObject(object: { [k: string]: any }): Ok;

    /**
     * Creates a plain object from an Ok message. Also converts values to other types if specified.
     * @param message Ok
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ok, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ok to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Ok
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ErrorCode enum. */
export enum ErrorCode {
    NOT_FOUND = 0
}

/** Represents a ClientRequest. */
export class ClientRequest implements IClientRequest {

    /**
     * Constructs a new ClientRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientRequest);

    /** ClientRequest messageId. */
    public messageId: string;

    /** ClientRequest shoppingList. */
    public shoppingList?: (IShoppingList|null);

    /** ClientRequest getShoppingList. */
    public getShoppingList?: (IGetShoppingListRequest|null);

    /** ClientRequest subscribeShoppingList. */
    public subscribeShoppingList?: (ISubscribeShoppingListRequest|null);

    /** ClientRequest ringView. */
    public ringView?: (IRequestRingView|null);

    /** ClientRequest requestType. */
    public requestType?: ("shoppingList"|"getShoppingList"|"subscribeShoppingList"|"ringView");

    /**
     * Creates a new ClientRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientRequest instance
     */
    public static create(properties?: IClientRequest): ClientRequest;

    /**
     * Encodes the specified ClientRequest message. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @param message ClientRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientRequest message, length delimited. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @param message ClientRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest;

    /**
     * Decodes a ClientRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest;

    /**
     * Verifies a ClientRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientRequest;

    /**
     * Creates a plain object from a ClientRequest message. Also converts values to other types if specified.
     * @param message ClientRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClientRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ServerResponse. */
export class ServerResponse implements IServerResponse {

    /**
     * Constructs a new ServerResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerResponse);

    /** ServerResponse messageId. */
    public messageId: string;

    /** ServerResponse shoppingList. */
    public shoppingList?: (IShoppingList|null);

    /** ServerResponse error. */
    public error?: (ErrorCode|null);

    /** ServerResponse ringView. */
    public ringView?: (IRingView|null);

    /** ServerResponse responseType. */
    public responseType?: ("shoppingList"|"error"|"ringView");

    /**
     * Creates a new ServerResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerResponse instance
     */
    public static create(properties?: IServerResponse): ServerResponse;

    /**
     * Encodes the specified ServerResponse message. Does not implicitly {@link ServerResponse.verify|verify} messages.
     * @param message ServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerResponse message, length delimited. Does not implicitly {@link ServerResponse.verify|verify} messages.
     * @param message ServerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerResponse;

    /**
     * Decodes a ServerResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerResponse;

    /**
     * Verifies a ServerResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerResponse
     */
    public static fromObject(object: { [k: string]: any }): ServerResponse;

    /**
     * Creates a plain object from a ServerResponse message. Also converts values to other types if specified.
     * @param message ServerResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ServerResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
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

    /** ShoppingItem quantity. */
    public quantity?: (ICCounter|null);

    /** ShoppingItem acquired. */
    public acquired?: (ICCounter|null);

    /** ShoppingItem deleted. */
    public deleted?: (IDWFlag|null);

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

/** Represents a DWFlag. */
export class DWFlag implements IDWFlag {

    /**
     * Constructs a new DWFlag.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDWFlag);

    /** DWFlag dotKernel. */
    public dotKernel?: (IEmptyDotKernel|null);

    /**
     * Creates a new DWFlag instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DWFlag instance
     */
    public static create(properties?: IDWFlag): DWFlag;

    /**
     * Encodes the specified DWFlag message. Does not implicitly {@link DWFlag.verify|verify} messages.
     * @param message DWFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDWFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DWFlag message, length delimited. Does not implicitly {@link DWFlag.verify|verify} messages.
     * @param message DWFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDWFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DWFlag message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DWFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DWFlag;

    /**
     * Decodes a DWFlag message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DWFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DWFlag;

    /**
     * Verifies a DWFlag message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DWFlag message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DWFlag
     */
    public static fromObject(object: { [k: string]: any }): DWFlag;

    /**
     * Creates a plain object from a DWFlag message. Also converts values to other types if specified.
     * @param message DWFlag
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DWFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DWFlag to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DWFlag
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RingView. */
export class RingView implements IRingView {

    /**
     * Constructs a new RingView.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRingView);

    /** RingView tokenToNode. */
    public tokenToNode: { [k: string]: string };

    /**
     * Creates a new RingView instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RingView instance
     */
    public static create(properties?: IRingView): RingView;

    /**
     * Encodes the specified RingView message. Does not implicitly {@link RingView.verify|verify} messages.
     * @param message RingView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRingView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RingView message, length delimited. Does not implicitly {@link RingView.verify|verify} messages.
     * @param message RingView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRingView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RingView message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RingView;

    /**
     * Decodes a RingView message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RingView;

    /**
     * Verifies a RingView message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RingView message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RingView
     */
    public static fromObject(object: { [k: string]: any }): RingView;

    /**
     * Creates a plain object from a RingView message. Also converts values to other types if specified.
     * @param message RingView
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RingView, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RingView to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RingView
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request origin. */
    public origin: string;

    /** Request ping. */
    public ping?: (IRequestPing|null);

    /** Request fetchRing. */
    public fetchRing?: (IRequestFetchRing|null);

    /** Request gossipJoin. */
    public gossipJoin?: (IRequestGossipJoin|null);

    /** Request getHashSpace. */
    public getHashSpace?: (IRequestGetHashSpace|null);

    /** Request get. */
    public get?: (IRequestGet|null);

    /** Request put. */
    public put?: (IRequestPut|null);

    /** Request delete. */
    public delete?: (IRequestDelete|null);

    /** Request has. */
    public has?: (IRequestHas|null);

    /** Request replicaPut. */
    public replicaPut?: (IRequestReplicaPut|null);

    /** Request replicaGet. */
    public replicaGet?: (IRequestReplicaGet|null);

    /** Request storeHint. */
    public storeHint?: (IRequestStoreHint|null);

    /** Request requestType. */
    public requestType?: ("ping"|"fetchRing"|"gossipJoin"|"getHashSpace"|"get"|"put"|"delete"|"has"|"replicaPut"|"replicaGet"|"storeHint");

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Request;

    /**
     * Verifies a Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Request
     */
    public static fromObject(object: { [k: string]: any }): Request;

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @param message Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestPing. */
export class RequestPing implements IRequestPing {

    /**
     * Constructs a new RequestPing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestPing);

    /**
     * Creates a new RequestPing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestPing instance
     */
    public static create(properties?: IRequestPing): RequestPing;

    /**
     * Encodes the specified RequestPing message. Does not implicitly {@link RequestPing.verify|verify} messages.
     * @param message RequestPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestPing message, length delimited. Does not implicitly {@link RequestPing.verify|verify} messages.
     * @param message RequestPing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestPing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestPing;

    /**
     * Decodes a RequestPing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestPing;

    /**
     * Verifies a RequestPing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestPing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestPing
     */
    public static fromObject(object: { [k: string]: any }): RequestPing;

    /**
     * Creates a plain object from a RequestPing message. Also converts values to other types if specified.
     * @param message RequestPing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestPing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestPing
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestFetchRing. */
export class RequestFetchRing implements IRequestFetchRing {

    /**
     * Constructs a new RequestFetchRing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestFetchRing);

    /**
     * Creates a new RequestFetchRing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestFetchRing instance
     */
    public static create(properties?: IRequestFetchRing): RequestFetchRing;

    /**
     * Encodes the specified RequestFetchRing message. Does not implicitly {@link RequestFetchRing.verify|verify} messages.
     * @param message RequestFetchRing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestFetchRing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestFetchRing message, length delimited. Does not implicitly {@link RequestFetchRing.verify|verify} messages.
     * @param message RequestFetchRing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestFetchRing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestFetchRing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestFetchRing;

    /**
     * Decodes a RequestFetchRing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestFetchRing;

    /**
     * Verifies a RequestFetchRing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestFetchRing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestFetchRing
     */
    public static fromObject(object: { [k: string]: any }): RequestFetchRing;

    /**
     * Creates a plain object from a RequestFetchRing message. Also converts values to other types if specified.
     * @param message RequestFetchRing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestFetchRing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestFetchRing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestFetchRing
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestGossipJoin. */
export class RequestGossipJoin implements IRequestGossipJoin {

    /**
     * Constructs a new RequestGossipJoin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestGossipJoin);

    /** RequestGossipJoin newNodeId. */
    public newNodeId: string;

    /** RequestGossipJoin tokens. */
    public tokens: (number|Long)[];

    /**
     * Creates a new RequestGossipJoin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestGossipJoin instance
     */
    public static create(properties?: IRequestGossipJoin): RequestGossipJoin;

    /**
     * Encodes the specified RequestGossipJoin message. Does not implicitly {@link RequestGossipJoin.verify|verify} messages.
     * @param message RequestGossipJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestGossipJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestGossipJoin message, length delimited. Does not implicitly {@link RequestGossipJoin.verify|verify} messages.
     * @param message RequestGossipJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestGossipJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestGossipJoin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestGossipJoin;

    /**
     * Decodes a RequestGossipJoin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestGossipJoin;

    /**
     * Verifies a RequestGossipJoin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestGossipJoin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestGossipJoin
     */
    public static fromObject(object: { [k: string]: any }): RequestGossipJoin;

    /**
     * Creates a plain object from a RequestGossipJoin message. Also converts values to other types if specified.
     * @param message RequestGossipJoin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestGossipJoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestGossipJoin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestGossipJoin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestGetHashSpace. */
export class RequestGetHashSpace implements IRequestGetHashSpace {

    /**
     * Constructs a new RequestGetHashSpace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestGetHashSpace);

    /** RequestGetHashSpace startHashSpace. */
    public startHashSpace: (number|Long);

    /** RequestGetHashSpace endHashSpace. */
    public endHashSpace: (number|Long);

    /**
     * Creates a new RequestGetHashSpace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestGetHashSpace instance
     */
    public static create(properties?: IRequestGetHashSpace): RequestGetHashSpace;

    /**
     * Encodes the specified RequestGetHashSpace message. Does not implicitly {@link RequestGetHashSpace.verify|verify} messages.
     * @param message RequestGetHashSpace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestGetHashSpace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestGetHashSpace message, length delimited. Does not implicitly {@link RequestGetHashSpace.verify|verify} messages.
     * @param message RequestGetHashSpace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestGetHashSpace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestGetHashSpace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestGetHashSpace;

    /**
     * Decodes a RequestGetHashSpace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestGetHashSpace;

    /**
     * Verifies a RequestGetHashSpace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestGetHashSpace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestGetHashSpace
     */
    public static fromObject(object: { [k: string]: any }): RequestGetHashSpace;

    /**
     * Creates a plain object from a RequestGetHashSpace message. Also converts values to other types if specified.
     * @param message RequestGetHashSpace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestGetHashSpace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestGetHashSpace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestGetHashSpace
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestGet. */
export class RequestGet implements IRequestGet {

    /**
     * Constructs a new RequestGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestGet);

    /** RequestGet key. */
    public key: string;

    /**
     * Creates a new RequestGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestGet instance
     */
    public static create(properties?: IRequestGet): RequestGet;

    /**
     * Encodes the specified RequestGet message. Does not implicitly {@link RequestGet.verify|verify} messages.
     * @param message RequestGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestGet message, length delimited. Does not implicitly {@link RequestGet.verify|verify} messages.
     * @param message RequestGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestGet;

    /**
     * Decodes a RequestGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestGet;

    /**
     * Verifies a RequestGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestGet
     */
    public static fromObject(object: { [k: string]: any }): RequestGet;

    /**
     * Creates a plain object from a RequestGet message. Also converts values to other types if specified.
     * @param message RequestGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestGet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestPut. */
export class RequestPut implements IRequestPut {

    /**
     * Constructs a new RequestPut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestPut);

    /** RequestPut key. */
    public key: string;

    /** RequestPut value. */
    public value: Uint8Array;

    /**
     * Creates a new RequestPut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestPut instance
     */
    public static create(properties?: IRequestPut): RequestPut;

    /**
     * Encodes the specified RequestPut message. Does not implicitly {@link RequestPut.verify|verify} messages.
     * @param message RequestPut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestPut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestPut message, length delimited. Does not implicitly {@link RequestPut.verify|verify} messages.
     * @param message RequestPut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestPut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestPut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestPut;

    /**
     * Decodes a RequestPut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestPut;

    /**
     * Verifies a RequestPut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestPut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestPut
     */
    public static fromObject(object: { [k: string]: any }): RequestPut;

    /**
     * Creates a plain object from a RequestPut message. Also converts values to other types if specified.
     * @param message RequestPut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestPut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestPut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestPut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestDelete. */
export class RequestDelete implements IRequestDelete {

    /**
     * Constructs a new RequestDelete.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestDelete);

    /** RequestDelete key. */
    public key: string;

    /**
     * Creates a new RequestDelete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestDelete instance
     */
    public static create(properties?: IRequestDelete): RequestDelete;

    /**
     * Encodes the specified RequestDelete message. Does not implicitly {@link RequestDelete.verify|verify} messages.
     * @param message RequestDelete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestDelete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestDelete message, length delimited. Does not implicitly {@link RequestDelete.verify|verify} messages.
     * @param message RequestDelete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestDelete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestDelete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestDelete;

    /**
     * Decodes a RequestDelete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestDelete;

    /**
     * Verifies a RequestDelete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestDelete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestDelete
     */
    public static fromObject(object: { [k: string]: any }): RequestDelete;

    /**
     * Creates a plain object from a RequestDelete message. Also converts values to other types if specified.
     * @param message RequestDelete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestDelete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestDelete
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestHas. */
export class RequestHas implements IRequestHas {

    /**
     * Constructs a new RequestHas.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestHas);

    /** RequestHas key. */
    public key: string;

    /**
     * Creates a new RequestHas instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestHas instance
     */
    public static create(properties?: IRequestHas): RequestHas;

    /**
     * Encodes the specified RequestHas message. Does not implicitly {@link RequestHas.verify|verify} messages.
     * @param message RequestHas message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestHas, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestHas message, length delimited. Does not implicitly {@link RequestHas.verify|verify} messages.
     * @param message RequestHas message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestHas, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestHas message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestHas;

    /**
     * Decodes a RequestHas message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestHas;

    /**
     * Verifies a RequestHas message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestHas message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestHas
     */
    public static fromObject(object: { [k: string]: any }): RequestHas;

    /**
     * Creates a plain object from a RequestHas message. Also converts values to other types if specified.
     * @param message RequestHas
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestHas, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestHas to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestHas
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestReplicaPut. */
export class RequestReplicaPut implements IRequestReplicaPut {

    /**
     * Constructs a new RequestReplicaPut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestReplicaPut);

    /** RequestReplicaPut key. */
    public key: string;

    /** RequestReplicaPut value. */
    public value: Uint8Array;

    /**
     * Creates a new RequestReplicaPut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestReplicaPut instance
     */
    public static create(properties?: IRequestReplicaPut): RequestReplicaPut;

    /**
     * Encodes the specified RequestReplicaPut message. Does not implicitly {@link RequestReplicaPut.verify|verify} messages.
     * @param message RequestReplicaPut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestReplicaPut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestReplicaPut message, length delimited. Does not implicitly {@link RequestReplicaPut.verify|verify} messages.
     * @param message RequestReplicaPut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestReplicaPut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestReplicaPut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestReplicaPut;

    /**
     * Decodes a RequestReplicaPut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestReplicaPut;

    /**
     * Verifies a RequestReplicaPut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestReplicaPut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestReplicaPut
     */
    public static fromObject(object: { [k: string]: any }): RequestReplicaPut;

    /**
     * Creates a plain object from a RequestReplicaPut message. Also converts values to other types if specified.
     * @param message RequestReplicaPut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestReplicaPut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestReplicaPut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestReplicaPut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestReplicaGet. */
export class RequestReplicaGet implements IRequestReplicaGet {

    /**
     * Constructs a new RequestReplicaGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestReplicaGet);

    /** RequestReplicaGet key. */
    public key: string;

    /**
     * Creates a new RequestReplicaGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestReplicaGet instance
     */
    public static create(properties?: IRequestReplicaGet): RequestReplicaGet;

    /**
     * Encodes the specified RequestReplicaGet message. Does not implicitly {@link RequestReplicaGet.verify|verify} messages.
     * @param message RequestReplicaGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestReplicaGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestReplicaGet message, length delimited. Does not implicitly {@link RequestReplicaGet.verify|verify} messages.
     * @param message RequestReplicaGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestReplicaGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestReplicaGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestReplicaGet;

    /**
     * Decodes a RequestReplicaGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestReplicaGet;

    /**
     * Verifies a RequestReplicaGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestReplicaGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestReplicaGet
     */
    public static fromObject(object: { [k: string]: any }): RequestReplicaGet;

    /**
     * Creates a plain object from a RequestReplicaGet message. Also converts values to other types if specified.
     * @param message RequestReplicaGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestReplicaGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestReplicaGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestReplicaGet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RequestStoreHint. */
export class RequestStoreHint implements IRequestStoreHint {

    /**
     * Constructs a new RequestStoreHint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestStoreHint);

    /** RequestStoreHint intendedNode. */
    public intendedNode: string;

    /** RequestStoreHint key. */
    public key: string;

    /** RequestStoreHint value. */
    public value: Uint8Array;

    /**
     * Creates a new RequestStoreHint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestStoreHint instance
     */
    public static create(properties?: IRequestStoreHint): RequestStoreHint;

    /**
     * Encodes the specified RequestStoreHint message. Does not implicitly {@link RequestStoreHint.verify|verify} messages.
     * @param message RequestStoreHint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestStoreHint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestStoreHint message, length delimited. Does not implicitly {@link RequestStoreHint.verify|verify} messages.
     * @param message RequestStoreHint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestStoreHint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestStoreHint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestStoreHint;

    /**
     * Decodes a RequestStoreHint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestStoreHint;

    /**
     * Verifies a RequestStoreHint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestStoreHint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestStoreHint
     */
    public static fromObject(object: { [k: string]: any }): RequestStoreHint;

    /**
     * Creates a plain object from a RequestStoreHint message. Also converts values to other types if specified.
     * @param message RequestStoreHint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestStoreHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestStoreHint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RequestStoreHint
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response origin. */
    public origin: string;

    /** Response ok. */
    public ok: boolean;

    /** Response error. */
    public error: string;

    /** Response ping. */
    public ping?: (IResponsePing|null);

    /** Response fetchRing. */
    public fetchRing?: (IResponseFetchRing|null);

    /** Response gossipJoin. */
    public gossipJoin?: (IResponseGossipJoin|null);

    /** Response getHashSpace. */
    public getHashSpace?: (IResponseGetHashSpace|null);

    /** Response get. */
    public get?: (IResponseGet|null);

    /** Response put. */
    public put?: (IResponsePut|null);

    /** Response delete. */
    public delete?: (IResponseDelete|null);

    /** Response has. */
    public has?: (IResponseHas|null);

    /** Response replicaPut. */
    public replicaPut?: (IResponseReplicaPut|null);

    /** Response replicaGet. */
    public replicaGet?: (IResponseReplicaGet|null);

    /** Response storeHint. */
    public storeHint?: (IResponseStoreHint|null);

    /** Response responseType. */
    public responseType?: ("ping"|"fetchRing"|"gossipJoin"|"getHashSpace"|"get"|"put"|"delete"|"has"|"replicaPut"|"replicaGet"|"storeHint");

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponsePing. */
export class ResponsePing implements IResponsePing {

    /**
     * Constructs a new ResponsePing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponsePing);

    /** ResponsePing pongMessage. */
    public pongMessage: string;

    /**
     * Creates a new ResponsePing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponsePing instance
     */
    public static create(properties?: IResponsePing): ResponsePing;

    /**
     * Encodes the specified ResponsePing message. Does not implicitly {@link ResponsePing.verify|verify} messages.
     * @param message ResponsePing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponsePing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponsePing message, length delimited. Does not implicitly {@link ResponsePing.verify|verify} messages.
     * @param message ResponsePing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponsePing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponsePing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponsePing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponsePing;

    /**
     * Decodes a ResponsePing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponsePing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponsePing;

    /**
     * Verifies a ResponsePing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponsePing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponsePing
     */
    public static fromObject(object: { [k: string]: any }): ResponsePing;

    /**
     * Creates a plain object from a ResponsePing message. Also converts values to other types if specified.
     * @param message ResponsePing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponsePing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponsePing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponsePing
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseFetchRing. */
export class ResponseFetchRing implements IResponseFetchRing {

    /**
     * Constructs a new ResponseFetchRing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseFetchRing);

    /** ResponseFetchRing ringView. */
    public ringView?: (IRingView|null);

    /**
     * Creates a new ResponseFetchRing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseFetchRing instance
     */
    public static create(properties?: IResponseFetchRing): ResponseFetchRing;

    /**
     * Encodes the specified ResponseFetchRing message. Does not implicitly {@link ResponseFetchRing.verify|verify} messages.
     * @param message ResponseFetchRing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseFetchRing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseFetchRing message, length delimited. Does not implicitly {@link ResponseFetchRing.verify|verify} messages.
     * @param message ResponseFetchRing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseFetchRing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseFetchRing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseFetchRing;

    /**
     * Decodes a ResponseFetchRing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseFetchRing;

    /**
     * Verifies a ResponseFetchRing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseFetchRing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseFetchRing
     */
    public static fromObject(object: { [k: string]: any }): ResponseFetchRing;

    /**
     * Creates a plain object from a ResponseFetchRing message. Also converts values to other types if specified.
     * @param message ResponseFetchRing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseFetchRing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseFetchRing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseFetchRing
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseGossipJoin. */
export class ResponseGossipJoin implements IResponseGossipJoin {

    /**
     * Constructs a new ResponseGossipJoin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseGossipJoin);

    /**
     * Creates a new ResponseGossipJoin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseGossipJoin instance
     */
    public static create(properties?: IResponseGossipJoin): ResponseGossipJoin;

    /**
     * Encodes the specified ResponseGossipJoin message. Does not implicitly {@link ResponseGossipJoin.verify|verify} messages.
     * @param message ResponseGossipJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseGossipJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseGossipJoin message, length delimited. Does not implicitly {@link ResponseGossipJoin.verify|verify} messages.
     * @param message ResponseGossipJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseGossipJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseGossipJoin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseGossipJoin;

    /**
     * Decodes a ResponseGossipJoin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseGossipJoin;

    /**
     * Verifies a ResponseGossipJoin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseGossipJoin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseGossipJoin
     */
    public static fromObject(object: { [k: string]: any }): ResponseGossipJoin;

    /**
     * Creates a plain object from a ResponseGossipJoin message. Also converts values to other types if specified.
     * @param message ResponseGossipJoin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseGossipJoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseGossipJoin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseGossipJoin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseGetHashSpace. */
export class ResponseGetHashSpace implements IResponseGetHashSpace {

    /**
     * Constructs a new ResponseGetHashSpace.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseGetHashSpace);

    /** ResponseGetHashSpace hashSpaceValues. */
    public hashSpaceValues: { [k: string]: Uint8Array };

    /**
     * Creates a new ResponseGetHashSpace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseGetHashSpace instance
     */
    public static create(properties?: IResponseGetHashSpace): ResponseGetHashSpace;

    /**
     * Encodes the specified ResponseGetHashSpace message. Does not implicitly {@link ResponseGetHashSpace.verify|verify} messages.
     * @param message ResponseGetHashSpace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseGetHashSpace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseGetHashSpace message, length delimited. Does not implicitly {@link ResponseGetHashSpace.verify|verify} messages.
     * @param message ResponseGetHashSpace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseGetHashSpace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseGetHashSpace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseGetHashSpace;

    /**
     * Decodes a ResponseGetHashSpace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseGetHashSpace;

    /**
     * Verifies a ResponseGetHashSpace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseGetHashSpace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseGetHashSpace
     */
    public static fromObject(object: { [k: string]: any }): ResponseGetHashSpace;

    /**
     * Creates a plain object from a ResponseGetHashSpace message. Also converts values to other types if specified.
     * @param message ResponseGetHashSpace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseGetHashSpace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseGetHashSpace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseGetHashSpace
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseGet. */
export class ResponseGet implements IResponseGet {

    /**
     * Constructs a new ResponseGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseGet);

    /** ResponseGet value. */
    public value: Uint8Array;

    /**
     * Creates a new ResponseGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseGet instance
     */
    public static create(properties?: IResponseGet): ResponseGet;

    /**
     * Encodes the specified ResponseGet message. Does not implicitly {@link ResponseGet.verify|verify} messages.
     * @param message ResponseGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseGet message, length delimited. Does not implicitly {@link ResponseGet.verify|verify} messages.
     * @param message ResponseGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseGet;

    /**
     * Decodes a ResponseGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseGet;

    /**
     * Verifies a ResponseGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseGet
     */
    public static fromObject(object: { [k: string]: any }): ResponseGet;

    /**
     * Creates a plain object from a ResponseGet message. Also converts values to other types if specified.
     * @param message ResponseGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseGet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponsePut. */
export class ResponsePut implements IResponsePut {

    /**
     * Constructs a new ResponsePut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponsePut);

    /**
     * Creates a new ResponsePut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponsePut instance
     */
    public static create(properties?: IResponsePut): ResponsePut;

    /**
     * Encodes the specified ResponsePut message. Does not implicitly {@link ResponsePut.verify|verify} messages.
     * @param message ResponsePut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponsePut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponsePut message, length delimited. Does not implicitly {@link ResponsePut.verify|verify} messages.
     * @param message ResponsePut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponsePut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponsePut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponsePut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponsePut;

    /**
     * Decodes a ResponsePut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponsePut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponsePut;

    /**
     * Verifies a ResponsePut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponsePut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponsePut
     */
    public static fromObject(object: { [k: string]: any }): ResponsePut;

    /**
     * Creates a plain object from a ResponsePut message. Also converts values to other types if specified.
     * @param message ResponsePut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponsePut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponsePut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponsePut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseDelete. */
export class ResponseDelete implements IResponseDelete {

    /**
     * Constructs a new ResponseDelete.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseDelete);

    /**
     * Creates a new ResponseDelete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseDelete instance
     */
    public static create(properties?: IResponseDelete): ResponseDelete;

    /**
     * Encodes the specified ResponseDelete message. Does not implicitly {@link ResponseDelete.verify|verify} messages.
     * @param message ResponseDelete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseDelete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseDelete message, length delimited. Does not implicitly {@link ResponseDelete.verify|verify} messages.
     * @param message ResponseDelete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseDelete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseDelete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseDelete;

    /**
     * Decodes a ResponseDelete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseDelete;

    /**
     * Verifies a ResponseDelete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseDelete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseDelete
     */
    public static fromObject(object: { [k: string]: any }): ResponseDelete;

    /**
     * Creates a plain object from a ResponseDelete message. Also converts values to other types if specified.
     * @param message ResponseDelete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseDelete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseDelete
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseHas. */
export class ResponseHas implements IResponseHas {

    /**
     * Constructs a new ResponseHas.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseHas);

    /** ResponseHas hasKey. */
    public hasKey: boolean;

    /**
     * Creates a new ResponseHas instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseHas instance
     */
    public static create(properties?: IResponseHas): ResponseHas;

    /**
     * Encodes the specified ResponseHas message. Does not implicitly {@link ResponseHas.verify|verify} messages.
     * @param message ResponseHas message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseHas, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseHas message, length delimited. Does not implicitly {@link ResponseHas.verify|verify} messages.
     * @param message ResponseHas message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseHas, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseHas message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseHas;

    /**
     * Decodes a ResponseHas message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseHas;

    /**
     * Verifies a ResponseHas message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseHas message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseHas
     */
    public static fromObject(object: { [k: string]: any }): ResponseHas;

    /**
     * Creates a plain object from a ResponseHas message. Also converts values to other types if specified.
     * @param message ResponseHas
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseHas, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseHas to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseHas
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseReplicaPut. */
export class ResponseReplicaPut implements IResponseReplicaPut {

    /**
     * Constructs a new ResponseReplicaPut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseReplicaPut);

    /**
     * Creates a new ResponseReplicaPut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseReplicaPut instance
     */
    public static create(properties?: IResponseReplicaPut): ResponseReplicaPut;

    /**
     * Encodes the specified ResponseReplicaPut message. Does not implicitly {@link ResponseReplicaPut.verify|verify} messages.
     * @param message ResponseReplicaPut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseReplicaPut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseReplicaPut message, length delimited. Does not implicitly {@link ResponseReplicaPut.verify|verify} messages.
     * @param message ResponseReplicaPut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseReplicaPut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseReplicaPut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseReplicaPut;

    /**
     * Decodes a ResponseReplicaPut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseReplicaPut;

    /**
     * Verifies a ResponseReplicaPut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseReplicaPut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseReplicaPut
     */
    public static fromObject(object: { [k: string]: any }): ResponseReplicaPut;

    /**
     * Creates a plain object from a ResponseReplicaPut message. Also converts values to other types if specified.
     * @param message ResponseReplicaPut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseReplicaPut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseReplicaPut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseReplicaPut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseReplicaGet. */
export class ResponseReplicaGet implements IResponseReplicaGet {

    /**
     * Constructs a new ResponseReplicaGet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseReplicaGet);

    /** ResponseReplicaGet value. */
    public value: Uint8Array;

    /**
     * Creates a new ResponseReplicaGet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseReplicaGet instance
     */
    public static create(properties?: IResponseReplicaGet): ResponseReplicaGet;

    /**
     * Encodes the specified ResponseReplicaGet message. Does not implicitly {@link ResponseReplicaGet.verify|verify} messages.
     * @param message ResponseReplicaGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseReplicaGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseReplicaGet message, length delimited. Does not implicitly {@link ResponseReplicaGet.verify|verify} messages.
     * @param message ResponseReplicaGet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseReplicaGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseReplicaGet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseReplicaGet;

    /**
     * Decodes a ResponseReplicaGet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseReplicaGet;

    /**
     * Verifies a ResponseReplicaGet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseReplicaGet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseReplicaGet
     */
    public static fromObject(object: { [k: string]: any }): ResponseReplicaGet;

    /**
     * Creates a plain object from a ResponseReplicaGet message. Also converts values to other types if specified.
     * @param message ResponseReplicaGet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseReplicaGet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseReplicaGet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseReplicaGet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResponseStoreHint. */
export class ResponseStoreHint implements IResponseStoreHint {

    /**
     * Constructs a new ResponseStoreHint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponseStoreHint);

    /**
     * Creates a new ResponseStoreHint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResponseStoreHint instance
     */
    public static create(properties?: IResponseStoreHint): ResponseStoreHint;

    /**
     * Encodes the specified ResponseStoreHint message. Does not implicitly {@link ResponseStoreHint.verify|verify} messages.
     * @param message ResponseStoreHint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponseStoreHint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResponseStoreHint message, length delimited. Does not implicitly {@link ResponseStoreHint.verify|verify} messages.
     * @param message ResponseStoreHint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponseStoreHint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResponseStoreHint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResponseStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseStoreHint;

    /**
     * Decodes a ResponseStoreHint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResponseStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseStoreHint;

    /**
     * Verifies a ResponseStoreHint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResponseStoreHint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResponseStoreHint
     */
    public static fromObject(object: { [k: string]: any }): ResponseStoreHint;

    /**
     * Creates a plain object from a ResponseStoreHint message. Also converts values to other types if specified.
     * @param message ResponseStoreHint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResponseStoreHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResponseStoreHint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResponseStoreHint
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
