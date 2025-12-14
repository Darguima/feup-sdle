/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const GetShoppingListRequest = $root.GetShoppingListRequest = (() => {

    /**
     * Properties of a GetShoppingListRequest.
     * @exports IGetShoppingListRequest
     * @interface IGetShoppingListRequest
     * @property {string|null} [id] GetShoppingListRequest id
     */

    /**
     * Constructs a new GetShoppingListRequest.
     * @exports GetShoppingListRequest
     * @classdesc Represents a GetShoppingListRequest.
     * @implements IGetShoppingListRequest
     * @constructor
     * @param {IGetShoppingListRequest=} [properties] Properties to set
     */
    function GetShoppingListRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetShoppingListRequest id.
     * @member {string} id
     * @memberof GetShoppingListRequest
     * @instance
     */
    GetShoppingListRequest.prototype.id = "";

    /**
     * Creates a new GetShoppingListRequest instance using the specified properties.
     * @function create
     * @memberof GetShoppingListRequest
     * @static
     * @param {IGetShoppingListRequest=} [properties] Properties to set
     * @returns {GetShoppingListRequest} GetShoppingListRequest instance
     */
    GetShoppingListRequest.create = function create(properties) {
        return new GetShoppingListRequest(properties);
    };

    /**
     * Encodes the specified GetShoppingListRequest message. Does not implicitly {@link GetShoppingListRequest.verify|verify} messages.
     * @function encode
     * @memberof GetShoppingListRequest
     * @static
     * @param {IGetShoppingListRequest} message GetShoppingListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetShoppingListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified GetShoppingListRequest message, length delimited. Does not implicitly {@link GetShoppingListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetShoppingListRequest
     * @static
     * @param {IGetShoppingListRequest} message GetShoppingListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetShoppingListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetShoppingListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetShoppingListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetShoppingListRequest} GetShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetShoppingListRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetShoppingListRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetShoppingListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetShoppingListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetShoppingListRequest} GetShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetShoppingListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetShoppingListRequest message.
     * @function verify
     * @memberof GetShoppingListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetShoppingListRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a GetShoppingListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetShoppingListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetShoppingListRequest} GetShoppingListRequest
     */
    GetShoppingListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetShoppingListRequest)
            return object;
        let message = new $root.GetShoppingListRequest();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a GetShoppingListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetShoppingListRequest
     * @static
     * @param {GetShoppingListRequest} message GetShoppingListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetShoppingListRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GetShoppingListRequest to JSON.
     * @function toJSON
     * @memberof GetShoppingListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetShoppingListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetShoppingListRequest
     * @function getTypeUrl
     * @memberof GetShoppingListRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetShoppingListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetShoppingListRequest";
    };

    return GetShoppingListRequest;
})();

export const SubscribeShoppingListRequest = $root.SubscribeShoppingListRequest = (() => {

    /**
     * Properties of a SubscribeShoppingListRequest.
     * @exports ISubscribeShoppingListRequest
     * @interface ISubscribeShoppingListRequest
     * @property {string|null} [id] SubscribeShoppingListRequest id
     */

    /**
     * Constructs a new SubscribeShoppingListRequest.
     * @exports SubscribeShoppingListRequest
     * @classdesc Represents a SubscribeShoppingListRequest.
     * @implements ISubscribeShoppingListRequest
     * @constructor
     * @param {ISubscribeShoppingListRequest=} [properties] Properties to set
     */
    function SubscribeShoppingListRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SubscribeShoppingListRequest id.
     * @member {string} id
     * @memberof SubscribeShoppingListRequest
     * @instance
     */
    SubscribeShoppingListRequest.prototype.id = "";

    /**
     * Creates a new SubscribeShoppingListRequest instance using the specified properties.
     * @function create
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {ISubscribeShoppingListRequest=} [properties] Properties to set
     * @returns {SubscribeShoppingListRequest} SubscribeShoppingListRequest instance
     */
    SubscribeShoppingListRequest.create = function create(properties) {
        return new SubscribeShoppingListRequest(properties);
    };

    /**
     * Encodes the specified SubscribeShoppingListRequest message. Does not implicitly {@link SubscribeShoppingListRequest.verify|verify} messages.
     * @function encode
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {ISubscribeShoppingListRequest} message SubscribeShoppingListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubscribeShoppingListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified SubscribeShoppingListRequest message, length delimited. Does not implicitly {@link SubscribeShoppingListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {ISubscribeShoppingListRequest} message SubscribeShoppingListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubscribeShoppingListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SubscribeShoppingListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SubscribeShoppingListRequest} SubscribeShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubscribeShoppingListRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SubscribeShoppingListRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SubscribeShoppingListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SubscribeShoppingListRequest} SubscribeShoppingListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubscribeShoppingListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SubscribeShoppingListRequest message.
     * @function verify
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SubscribeShoppingListRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a SubscribeShoppingListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SubscribeShoppingListRequest} SubscribeShoppingListRequest
     */
    SubscribeShoppingListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SubscribeShoppingListRequest)
            return object;
        let message = new $root.SubscribeShoppingListRequest();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a SubscribeShoppingListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {SubscribeShoppingListRequest} message SubscribeShoppingListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SubscribeShoppingListRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this SubscribeShoppingListRequest to JSON.
     * @function toJSON
     * @memberof SubscribeShoppingListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SubscribeShoppingListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SubscribeShoppingListRequest
     * @function getTypeUrl
     * @memberof SubscribeShoppingListRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SubscribeShoppingListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SubscribeShoppingListRequest";
    };

    return SubscribeShoppingListRequest;
})();

export const RequestRingView = $root.RequestRingView = (() => {

    /**
     * Properties of a RequestRingView.
     * @exports IRequestRingView
     * @interface IRequestRingView
     */

    /**
     * Constructs a new RequestRingView.
     * @exports RequestRingView
     * @classdesc Represents a RequestRingView.
     * @implements IRequestRingView
     * @constructor
     * @param {IRequestRingView=} [properties] Properties to set
     */
    function RequestRingView(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new RequestRingView instance using the specified properties.
     * @function create
     * @memberof RequestRingView
     * @static
     * @param {IRequestRingView=} [properties] Properties to set
     * @returns {RequestRingView} RequestRingView instance
     */
    RequestRingView.create = function create(properties) {
        return new RequestRingView(properties);
    };

    /**
     * Encodes the specified RequestRingView message. Does not implicitly {@link RequestRingView.verify|verify} messages.
     * @function encode
     * @memberof RequestRingView
     * @static
     * @param {IRequestRingView} message RequestRingView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestRingView.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RequestRingView message, length delimited. Does not implicitly {@link RequestRingView.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestRingView
     * @static
     * @param {IRequestRingView} message RequestRingView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestRingView.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestRingView message from the specified reader or buffer.
     * @function decode
     * @memberof RequestRingView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestRingView} RequestRingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestRingView.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestRingView();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestRingView message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestRingView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestRingView} RequestRingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestRingView.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestRingView message.
     * @function verify
     * @memberof RequestRingView
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestRingView.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a RequestRingView message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestRingView
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestRingView} RequestRingView
     */
    RequestRingView.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestRingView)
            return object;
        return new $root.RequestRingView();
    };

    /**
     * Creates a plain object from a RequestRingView message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestRingView
     * @static
     * @param {RequestRingView} message RequestRingView
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestRingView.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RequestRingView to JSON.
     * @function toJSON
     * @memberof RequestRingView
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestRingView.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestRingView
     * @function getTypeUrl
     * @memberof RequestRingView
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestRingView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestRingView";
    };

    return RequestRingView;
})();

export const Ok = $root.Ok = (() => {

    /**
     * Properties of an Ok.
     * @exports IOk
     * @interface IOk
     */

    /**
     * Constructs a new Ok.
     * @exports Ok
     * @classdesc Represents an Ok.
     * @implements IOk
     * @constructor
     * @param {IOk=} [properties] Properties to set
     */
    function Ok(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Ok instance using the specified properties.
     * @function create
     * @memberof Ok
     * @static
     * @param {IOk=} [properties] Properties to set
     * @returns {Ok} Ok instance
     */
    Ok.create = function create(properties) {
        return new Ok(properties);
    };

    /**
     * Encodes the specified Ok message. Does not implicitly {@link Ok.verify|verify} messages.
     * @function encode
     * @memberof Ok
     * @static
     * @param {IOk} message Ok message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ok.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Ok message, length delimited. Does not implicitly {@link Ok.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ok
     * @static
     * @param {IOk} message Ok message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ok.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Ok message from the specified reader or buffer.
     * @function decode
     * @memberof Ok
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ok} Ok
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ok.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ok();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Ok message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ok
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ok} Ok
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ok.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Ok message.
     * @function verify
     * @memberof Ok
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ok.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Ok message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ok
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ok} Ok
     */
    Ok.fromObject = function fromObject(object) {
        if (object instanceof $root.Ok)
            return object;
        return new $root.Ok();
    };

    /**
     * Creates a plain object from an Ok message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ok
     * @static
     * @param {Ok} message Ok
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ok.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Ok to JSON.
     * @function toJSON
     * @memberof Ok
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ok.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ok
     * @function getTypeUrl
     * @memberof Ok
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ok.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Ok";
    };

    return Ok;
})();

/**
 * ErrorCode enum.
 * @exports ErrorCode
 * @enum {number}
 * @property {number} NOT_FOUND=0 NOT_FOUND value
 */
export const ErrorCode = $root.ErrorCode = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOT_FOUND"] = 0;
    return values;
})();

export const ClientRequest = $root.ClientRequest = (() => {

    /**
     * Properties of a ClientRequest.
     * @exports IClientRequest
     * @interface IClientRequest
     * @property {string|null} [messageId] ClientRequest messageId
     * @property {IShoppingList|null} [shoppingList] ClientRequest shoppingList
     * @property {IGetShoppingListRequest|null} [getShoppingList] ClientRequest getShoppingList
     * @property {ISubscribeShoppingListRequest|null} [subscribeShoppingList] ClientRequest subscribeShoppingList
     * @property {IRequestRingView|null} [ringView] ClientRequest ringView
     */

    /**
     * Constructs a new ClientRequest.
     * @exports ClientRequest
     * @classdesc Represents a ClientRequest.
     * @implements IClientRequest
     * @constructor
     * @param {IClientRequest=} [properties] Properties to set
     */
    function ClientRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientRequest messageId.
     * @member {string} messageId
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.messageId = "";

    /**
     * ClientRequest shoppingList.
     * @member {IShoppingList|null|undefined} shoppingList
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.shoppingList = null;

    /**
     * ClientRequest getShoppingList.
     * @member {IGetShoppingListRequest|null|undefined} getShoppingList
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.getShoppingList = null;

    /**
     * ClientRequest subscribeShoppingList.
     * @member {ISubscribeShoppingListRequest|null|undefined} subscribeShoppingList
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.subscribeShoppingList = null;

    /**
     * ClientRequest ringView.
     * @member {IRequestRingView|null|undefined} ringView
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.ringView = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * ClientRequest requestType.
     * @member {"shoppingList"|"getShoppingList"|"subscribeShoppingList"|"ringView"|undefined} requestType
     * @memberof ClientRequest
     * @instance
     */
    Object.defineProperty(ClientRequest.prototype, "requestType", {
        get: $util.oneOfGetter($oneOfFields = ["shoppingList", "getShoppingList", "subscribeShoppingList", "ringView"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClientRequest instance using the specified properties.
     * @function create
     * @memberof ClientRequest
     * @static
     * @param {IClientRequest=} [properties] Properties to set
     * @returns {ClientRequest} ClientRequest instance
     */
    ClientRequest.create = function create(properties) {
        return new ClientRequest(properties);
    };

    /**
     * Encodes the specified ClientRequest message. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @function encode
     * @memberof ClientRequest
     * @static
     * @param {IClientRequest} message ClientRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
        if (message.shoppingList != null && Object.hasOwnProperty.call(message, "shoppingList"))
            $root.ShoppingList.encode(message.shoppingList, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.getShoppingList != null && Object.hasOwnProperty.call(message, "getShoppingList"))
            $root.GetShoppingListRequest.encode(message.getShoppingList, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.subscribeShoppingList != null && Object.hasOwnProperty.call(message, "subscribeShoppingList"))
            $root.SubscribeShoppingListRequest.encode(message.subscribeShoppingList, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.ringView != null && Object.hasOwnProperty.call(message, "ringView"))
            $root.RequestRingView.encode(message.ringView, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientRequest message, length delimited. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientRequest
     * @static
     * @param {IClientRequest} message ClientRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClientRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientRequest} ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.messageId = reader.string();
                    break;
                }
            case 2: {
                    message.shoppingList = $root.ShoppingList.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.getShoppingList = $root.GetShoppingListRequest.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.subscribeShoppingList = $root.SubscribeShoppingListRequest.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.ringView = $root.RequestRingView.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientRequest} ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientRequest message.
     * @function verify
     * @memberof ClientRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            if (!$util.isString(message.messageId))
                return "messageId: string expected";
        if (message.shoppingList != null && message.hasOwnProperty("shoppingList")) {
            properties.requestType = 1;
            {
                let error = $root.ShoppingList.verify(message.shoppingList);
                if (error)
                    return "shoppingList." + error;
            }
        }
        if (message.getShoppingList != null && message.hasOwnProperty("getShoppingList")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.GetShoppingListRequest.verify(message.getShoppingList);
                if (error)
                    return "getShoppingList." + error;
            }
        }
        if (message.subscribeShoppingList != null && message.hasOwnProperty("subscribeShoppingList")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.SubscribeShoppingListRequest.verify(message.subscribeShoppingList);
                if (error)
                    return "subscribeShoppingList." + error;
            }
        }
        if (message.ringView != null && message.hasOwnProperty("ringView")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestRingView.verify(message.ringView);
                if (error)
                    return "ringView." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClientRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientRequest} ClientRequest
     */
    ClientRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientRequest)
            return object;
        let message = new $root.ClientRequest();
        if (object.messageId != null)
            message.messageId = String(object.messageId);
        if (object.shoppingList != null) {
            if (typeof object.shoppingList !== "object")
                throw TypeError(".ClientRequest.shoppingList: object expected");
            message.shoppingList = $root.ShoppingList.fromObject(object.shoppingList);
        }
        if (object.getShoppingList != null) {
            if (typeof object.getShoppingList !== "object")
                throw TypeError(".ClientRequest.getShoppingList: object expected");
            message.getShoppingList = $root.GetShoppingListRequest.fromObject(object.getShoppingList);
        }
        if (object.subscribeShoppingList != null) {
            if (typeof object.subscribeShoppingList !== "object")
                throw TypeError(".ClientRequest.subscribeShoppingList: object expected");
            message.subscribeShoppingList = $root.SubscribeShoppingListRequest.fromObject(object.subscribeShoppingList);
        }
        if (object.ringView != null) {
            if (typeof object.ringView !== "object")
                throw TypeError(".ClientRequest.ringView: object expected");
            message.ringView = $root.RequestRingView.fromObject(object.ringView);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientRequest
     * @static
     * @param {ClientRequest} message ClientRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.messageId = "";
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            object.messageId = message.messageId;
        if (message.shoppingList != null && message.hasOwnProperty("shoppingList")) {
            object.shoppingList = $root.ShoppingList.toObject(message.shoppingList, options);
            if (options.oneofs)
                object.requestType = "shoppingList";
        }
        if (message.getShoppingList != null && message.hasOwnProperty("getShoppingList")) {
            object.getShoppingList = $root.GetShoppingListRequest.toObject(message.getShoppingList, options);
            if (options.oneofs)
                object.requestType = "getShoppingList";
        }
        if (message.subscribeShoppingList != null && message.hasOwnProperty("subscribeShoppingList")) {
            object.subscribeShoppingList = $root.SubscribeShoppingListRequest.toObject(message.subscribeShoppingList, options);
            if (options.oneofs)
                object.requestType = "subscribeShoppingList";
        }
        if (message.ringView != null && message.hasOwnProperty("ringView")) {
            object.ringView = $root.RequestRingView.toObject(message.ringView, options);
            if (options.oneofs)
                object.requestType = "ringView";
        }
        return object;
    };

    /**
     * Converts this ClientRequest to JSON.
     * @function toJSON
     * @memberof ClientRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ClientRequest
     * @function getTypeUrl
     * @memberof ClientRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ClientRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ClientRequest";
    };

    return ClientRequest;
})();

export const ServerResponse = $root.ServerResponse = (() => {

    /**
     * Properties of a ServerResponse.
     * @exports IServerResponse
     * @interface IServerResponse
     * @property {string|null} [messageId] ServerResponse messageId
     * @property {IShoppingList|null} [shoppingList] ServerResponse shoppingList
     * @property {ErrorCode|null} [error] ServerResponse error
     * @property {IRingView|null} [ringView] ServerResponse ringView
     */

    /**
     * Constructs a new ServerResponse.
     * @exports ServerResponse
     * @classdesc Represents a ServerResponse.
     * @implements IServerResponse
     * @constructor
     * @param {IServerResponse=} [properties] Properties to set
     */
    function ServerResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerResponse messageId.
     * @member {string} messageId
     * @memberof ServerResponse
     * @instance
     */
    ServerResponse.prototype.messageId = "";

    /**
     * ServerResponse shoppingList.
     * @member {IShoppingList|null|undefined} shoppingList
     * @memberof ServerResponse
     * @instance
     */
    ServerResponse.prototype.shoppingList = null;

    /**
     * ServerResponse error.
     * @member {ErrorCode|null|undefined} error
     * @memberof ServerResponse
     * @instance
     */
    ServerResponse.prototype.error = null;

    /**
     * ServerResponse ringView.
     * @member {IRingView|null|undefined} ringView
     * @memberof ServerResponse
     * @instance
     */
    ServerResponse.prototype.ringView = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * ServerResponse responseType.
     * @member {"shoppingList"|"error"|"ringView"|undefined} responseType
     * @memberof ServerResponse
     * @instance
     */
    Object.defineProperty(ServerResponse.prototype, "responseType", {
        get: $util.oneOfGetter($oneOfFields = ["shoppingList", "error", "ringView"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerResponse instance using the specified properties.
     * @function create
     * @memberof ServerResponse
     * @static
     * @param {IServerResponse=} [properties] Properties to set
     * @returns {ServerResponse} ServerResponse instance
     */
    ServerResponse.create = function create(properties) {
        return new ServerResponse(properties);
    };

    /**
     * Encodes the specified ServerResponse message. Does not implicitly {@link ServerResponse.verify|verify} messages.
     * @function encode
     * @memberof ServerResponse
     * @static
     * @param {IServerResponse} message ServerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
        if (message.shoppingList != null && Object.hasOwnProperty.call(message, "shoppingList"))
            $root.ShoppingList.encode(message.shoppingList, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.error);
        if (message.ringView != null && Object.hasOwnProperty.call(message, "ringView"))
            $root.RingView.encode(message.ringView, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerResponse message, length delimited. Does not implicitly {@link ServerResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerResponse
     * @static
     * @param {IServerResponse} message ServerResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ServerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerResponse} ServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.messageId = reader.string();
                    break;
                }
            case 2: {
                    message.shoppingList = $root.ShoppingList.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.error = reader.int32();
                    break;
                }
            case 4: {
                    message.ringView = $root.RingView.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerResponse} ServerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerResponse message.
     * @function verify
     * @memberof ServerResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            if (!$util.isString(message.messageId))
                return "messageId: string expected";
        if (message.shoppingList != null && message.hasOwnProperty("shoppingList")) {
            properties.responseType = 1;
            {
                let error = $root.ShoppingList.verify(message.shoppingList);
                if (error)
                    return "shoppingList." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            switch (message.error) {
            default:
                return "error: enum value expected";
            case 0:
                break;
            }
        }
        if (message.ringView != null && message.hasOwnProperty("ringView")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.RingView.verify(message.ringView);
                if (error)
                    return "ringView." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerResponse} ServerResponse
     */
    ServerResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerResponse)
            return object;
        let message = new $root.ServerResponse();
        if (object.messageId != null)
            message.messageId = String(object.messageId);
        if (object.shoppingList != null) {
            if (typeof object.shoppingList !== "object")
                throw TypeError(".ServerResponse.shoppingList: object expected");
            message.shoppingList = $root.ShoppingList.fromObject(object.shoppingList);
        }
        switch (object.error) {
        default:
            if (typeof object.error === "number") {
                message.error = object.error;
                break;
            }
            break;
        case "NOT_FOUND":
        case 0:
            message.error = 0;
            break;
        }
        if (object.ringView != null) {
            if (typeof object.ringView !== "object")
                throw TypeError(".ServerResponse.ringView: object expected");
            message.ringView = $root.RingView.fromObject(object.ringView);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerResponse
     * @static
     * @param {ServerResponse} message ServerResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.messageId = "";
        if (message.messageId != null && message.hasOwnProperty("messageId"))
            object.messageId = message.messageId;
        if (message.shoppingList != null && message.hasOwnProperty("shoppingList")) {
            object.shoppingList = $root.ShoppingList.toObject(message.shoppingList, options);
            if (options.oneofs)
                object.responseType = "shoppingList";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = options.enums === String ? $root.ErrorCode[message.error] === undefined ? message.error : $root.ErrorCode[message.error] : message.error;
            if (options.oneofs)
                object.responseType = "error";
        }
        if (message.ringView != null && message.hasOwnProperty("ringView")) {
            object.ringView = $root.RingView.toObject(message.ringView, options);
            if (options.oneofs)
                object.responseType = "ringView";
        }
        return object;
    };

    /**
     * Converts this ServerResponse to JSON.
     * @function toJSON
     * @memberof ServerResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ServerResponse
     * @function getTypeUrl
     * @memberof ServerResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ServerResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ServerResponse";
    };

    return ServerResponse;
})();

export const ShoppingItem = $root.ShoppingItem = (() => {

    /**
     * Properties of a ShoppingItem.
     * @exports IShoppingItem
     * @interface IShoppingItem
     * @property {IStringMVReg|null} [name] ShoppingItem name
     * @property {ICCounter|null} [quantity] ShoppingItem quantity
     * @property {ICCounter|null} [acquired] ShoppingItem acquired
     * @property {IDWFlag|null} [deleted] ShoppingItem deleted
     */

    /**
     * Constructs a new ShoppingItem.
     * @exports ShoppingItem
     * @classdesc Represents a ShoppingItem.
     * @implements IShoppingItem
     * @constructor
     * @param {IShoppingItem=} [properties] Properties to set
     */
    function ShoppingItem(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ShoppingItem name.
     * @member {IStringMVReg|null|undefined} name
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.name = null;

    /**
     * ShoppingItem quantity.
     * @member {ICCounter|null|undefined} quantity
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.quantity = null;

    /**
     * ShoppingItem acquired.
     * @member {ICCounter|null|undefined} acquired
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.acquired = null;

    /**
     * ShoppingItem deleted.
     * @member {IDWFlag|null|undefined} deleted
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.deleted = null;

    /**
     * Creates a new ShoppingItem instance using the specified properties.
     * @function create
     * @memberof ShoppingItem
     * @static
     * @param {IShoppingItem=} [properties] Properties to set
     * @returns {ShoppingItem} ShoppingItem instance
     */
    ShoppingItem.create = function create(properties) {
        return new ShoppingItem(properties);
    };

    /**
     * Encodes the specified ShoppingItem message. Does not implicitly {@link ShoppingItem.verify|verify} messages.
     * @function encode
     * @memberof ShoppingItem
     * @static
     * @param {IShoppingItem} message ShoppingItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShoppingItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            $root.StringMVReg.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
            $root.CCounter.encode(message.quantity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.acquired != null && Object.hasOwnProperty.call(message, "acquired"))
            $root.CCounter.encode(message.acquired, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
            $root.DWFlag.encode(message.deleted, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ShoppingItem message, length delimited. Does not implicitly {@link ShoppingItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShoppingItem
     * @static
     * @param {IShoppingItem} message ShoppingItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShoppingItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShoppingItem message from the specified reader or buffer.
     * @function decode
     * @memberof ShoppingItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ShoppingItem} ShoppingItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShoppingItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShoppingItem();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.name = $root.StringMVReg.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.quantity = $root.CCounter.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.acquired = $root.CCounter.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.deleted = $root.DWFlag.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ShoppingItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShoppingItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShoppingItem} ShoppingItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShoppingItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShoppingItem message.
     * @function verify
     * @memberof ShoppingItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShoppingItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) {
            let error = $root.StringMVReg.verify(message.name);
            if (error)
                return "name." + error;
        }
        if (message.quantity != null && message.hasOwnProperty("quantity")) {
            let error = $root.CCounter.verify(message.quantity);
            if (error)
                return "quantity." + error;
        }
        if (message.acquired != null && message.hasOwnProperty("acquired")) {
            let error = $root.CCounter.verify(message.acquired);
            if (error)
                return "acquired." + error;
        }
        if (message.deleted != null && message.hasOwnProperty("deleted")) {
            let error = $root.DWFlag.verify(message.deleted);
            if (error)
                return "deleted." + error;
        }
        return null;
    };

    /**
     * Creates a ShoppingItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ShoppingItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ShoppingItem} ShoppingItem
     */
    ShoppingItem.fromObject = function fromObject(object) {
        if (object instanceof $root.ShoppingItem)
            return object;
        let message = new $root.ShoppingItem();
        if (object.name != null) {
            if (typeof object.name !== "object")
                throw TypeError(".ShoppingItem.name: object expected");
            message.name = $root.StringMVReg.fromObject(object.name);
        }
        if (object.quantity != null) {
            if (typeof object.quantity !== "object")
                throw TypeError(".ShoppingItem.quantity: object expected");
            message.quantity = $root.CCounter.fromObject(object.quantity);
        }
        if (object.acquired != null) {
            if (typeof object.acquired !== "object")
                throw TypeError(".ShoppingItem.acquired: object expected");
            message.acquired = $root.CCounter.fromObject(object.acquired);
        }
        if (object.deleted != null) {
            if (typeof object.deleted !== "object")
                throw TypeError(".ShoppingItem.deleted: object expected");
            message.deleted = $root.DWFlag.fromObject(object.deleted);
        }
        return message;
    };

    /**
     * Creates a plain object from a ShoppingItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ShoppingItem
     * @static
     * @param {ShoppingItem} message ShoppingItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ShoppingItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = null;
            object.quantity = null;
            object.acquired = null;
            object.deleted = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = $root.StringMVReg.toObject(message.name, options);
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            object.quantity = $root.CCounter.toObject(message.quantity, options);
        if (message.acquired != null && message.hasOwnProperty("acquired"))
            object.acquired = $root.CCounter.toObject(message.acquired, options);
        if (message.deleted != null && message.hasOwnProperty("deleted"))
            object.deleted = $root.DWFlag.toObject(message.deleted, options);
        return object;
    };

    /**
     * Converts this ShoppingItem to JSON.
     * @function toJSON
     * @memberof ShoppingItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ShoppingItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ShoppingItem
     * @function getTypeUrl
     * @memberof ShoppingItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ShoppingItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ShoppingItem";
    };

    return ShoppingItem;
})();

export const ShoppingList = $root.ShoppingList = (() => {

    /**
     * Properties of a ShoppingList.
     * @exports IShoppingList
     * @interface IShoppingList
     * @property {string|null} [id] ShoppingList id
     * @property {IStringMVReg|null} [name] ShoppingList name
     * @property {Object.<string,IShoppingItem>|null} [items] ShoppingList items
     * @property {IDotContext|null} [dotContext] ShoppingList dotContext
     */

    /**
     * Constructs a new ShoppingList.
     * @exports ShoppingList
     * @classdesc Represents a ShoppingList.
     * @implements IShoppingList
     * @constructor
     * @param {IShoppingList=} [properties] Properties to set
     */
    function ShoppingList(properties) {
        this.items = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ShoppingList id.
     * @member {string} id
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.id = "";

    /**
     * ShoppingList name.
     * @member {IStringMVReg|null|undefined} name
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.name = null;

    /**
     * ShoppingList items.
     * @member {Object.<string,IShoppingItem>} items
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.items = $util.emptyObject;

    /**
     * ShoppingList dotContext.
     * @member {IDotContext|null|undefined} dotContext
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.dotContext = null;

    /**
     * Creates a new ShoppingList instance using the specified properties.
     * @function create
     * @memberof ShoppingList
     * @static
     * @param {IShoppingList=} [properties] Properties to set
     * @returns {ShoppingList} ShoppingList instance
     */
    ShoppingList.create = function create(properties) {
        return new ShoppingList(properties);
    };

    /**
     * Encodes the specified ShoppingList message. Does not implicitly {@link ShoppingList.verify|verify} messages.
     * @function encode
     * @memberof ShoppingList
     * @static
     * @param {IShoppingList} message ShoppingList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShoppingList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            $root.StringMVReg.encode(message.name, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.items != null && Object.hasOwnProperty.call(message, "items"))
            for (let keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.ShoppingItem.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.dotContext != null && Object.hasOwnProperty.call(message, "dotContext"))
            $root.DotContext.encode(message.dotContext, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ShoppingList message, length delimited. Does not implicitly {@link ShoppingList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShoppingList
     * @static
     * @param {IShoppingList} message ShoppingList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShoppingList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShoppingList message from the specified reader or buffer.
     * @function decode
     * @memberof ShoppingList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ShoppingList} ShoppingList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShoppingList.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShoppingList(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.name = $root.StringMVReg.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    if (message.items === $util.emptyObject)
                        message.items = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.ShoppingItem.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.items[key] = value;
                    break;
                }
            case 4: {
                    message.dotContext = $root.DotContext.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ShoppingList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShoppingList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShoppingList} ShoppingList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShoppingList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShoppingList message.
     * @function verify
     * @memberof ShoppingList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShoppingList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name")) {
            let error = $root.StringMVReg.verify(message.name);
            if (error)
                return "name." + error;
        }
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!$util.isObject(message.items))
                return "items: object expected";
            let key = Object.keys(message.items);
            for (let i = 0; i < key.length; ++i) {
                let error = $root.ShoppingItem.verify(message.items[key[i]]);
                if (error)
                    return "items." + error;
            }
        }
        if (message.dotContext != null && message.hasOwnProperty("dotContext")) {
            let error = $root.DotContext.verify(message.dotContext);
            if (error)
                return "dotContext." + error;
        }
        return null;
    };

    /**
     * Creates a ShoppingList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ShoppingList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ShoppingList} ShoppingList
     */
    ShoppingList.fromObject = function fromObject(object) {
        if (object instanceof $root.ShoppingList)
            return object;
        let message = new $root.ShoppingList();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null) {
            if (typeof object.name !== "object")
                throw TypeError(".ShoppingList.name: object expected");
            message.name = $root.StringMVReg.fromObject(object.name);
        }
        if (object.items) {
            if (typeof object.items !== "object")
                throw TypeError(".ShoppingList.items: object expected");
            message.items = {};
            for (let keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                if (typeof object.items[keys[i]] !== "object")
                    throw TypeError(".ShoppingList.items: object expected");
                message.items[keys[i]] = $root.ShoppingItem.fromObject(object.items[keys[i]]);
            }
        }
        if (object.dotContext != null) {
            if (typeof object.dotContext !== "object")
                throw TypeError(".ShoppingList.dotContext: object expected");
            message.dotContext = $root.DotContext.fromObject(object.dotContext);
        }
        return message;
    };

    /**
     * Creates a plain object from a ShoppingList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ShoppingList
     * @static
     * @param {ShoppingList} message ShoppingList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ShoppingList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults)
            object.items = {};
        if (options.defaults) {
            object.id = "";
            object.name = null;
            object.dotContext = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = $root.StringMVReg.toObject(message.name, options);
        let keys2;
        if (message.items && (keys2 = Object.keys(message.items)).length) {
            object.items = {};
            for (let j = 0; j < keys2.length; ++j)
                object.items[keys2[j]] = $root.ShoppingItem.toObject(message.items[keys2[j]], options);
        }
        if (message.dotContext != null && message.hasOwnProperty("dotContext"))
            object.dotContext = $root.DotContext.toObject(message.dotContext, options);
        return object;
    };

    /**
     * Converts this ShoppingList to JSON.
     * @function toJSON
     * @memberof ShoppingList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ShoppingList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ShoppingList
     * @function getTypeUrl
     * @memberof ShoppingList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ShoppingList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ShoppingList";
    };

    return ShoppingList;
})();

export const Dot = $root.Dot = (() => {

    /**
     * Properties of a Dot.
     * @exports IDot
     * @interface IDot
     * @property {string|null} [id] Dot id
     * @property {number|null} [seq] Dot seq
     */

    /**
     * Constructs a new Dot.
     * @exports Dot
     * @classdesc Represents a Dot.
     * @implements IDot
     * @constructor
     * @param {IDot=} [properties] Properties to set
     */
    function Dot(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Dot id.
     * @member {string} id
     * @memberof Dot
     * @instance
     */
    Dot.prototype.id = "";

    /**
     * Dot seq.
     * @member {number} seq
     * @memberof Dot
     * @instance
     */
    Dot.prototype.seq = 0;

    /**
     * Creates a new Dot instance using the specified properties.
     * @function create
     * @memberof Dot
     * @static
     * @param {IDot=} [properties] Properties to set
     * @returns {Dot} Dot instance
     */
    Dot.create = function create(properties) {
        return new Dot(properties);
    };

    /**
     * Encodes the specified Dot message. Does not implicitly {@link Dot.verify|verify} messages.
     * @function encode
     * @memberof Dot
     * @static
     * @param {IDot} message Dot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Dot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.seq);
        return writer;
    };

    /**
     * Encodes the specified Dot message, length delimited. Does not implicitly {@link Dot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Dot
     * @static
     * @param {IDot} message Dot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Dot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Dot message from the specified reader or buffer.
     * @function decode
     * @memberof Dot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Dot} Dot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Dot.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Dot();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.seq = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Dot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Dot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Dot} Dot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Dot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Dot message.
     * @function verify
     * @memberof Dot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Dot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.seq != null && message.hasOwnProperty("seq"))
            if (!$util.isInteger(message.seq))
                return "seq: integer expected";
        return null;
    };

    /**
     * Creates a Dot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Dot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Dot} Dot
     */
    Dot.fromObject = function fromObject(object) {
        if (object instanceof $root.Dot)
            return object;
        let message = new $root.Dot();
        if (object.id != null)
            message.id = String(object.id);
        if (object.seq != null)
            message.seq = object.seq >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Dot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Dot
     * @static
     * @param {Dot} message Dot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Dot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = "";
            object.seq = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.seq != null && message.hasOwnProperty("seq"))
            object.seq = message.seq;
        return object;
    };

    /**
     * Converts this Dot to JSON.
     * @function toJSON
     * @memberof Dot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Dot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Dot
     * @function getTypeUrl
     * @memberof Dot
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Dot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Dot";
    };

    return Dot;
})();

export const DotContext = $root.DotContext = (() => {

    /**
     * Properties of a DotContext.
     * @exports IDotContext
     * @interface IDotContext
     * @property {Object.<string,number>|null} [versionVector] DotContext versionVector
     * @property {Array.<IDot>|null} [dots] DotContext dots
     */

    /**
     * Constructs a new DotContext.
     * @exports DotContext
     * @classdesc Represents a DotContext.
     * @implements IDotContext
     * @constructor
     * @param {IDotContext=} [properties] Properties to set
     */
    function DotContext(properties) {
        this.versionVector = {};
        this.dots = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DotContext versionVector.
     * @member {Object.<string,number>} versionVector
     * @memberof DotContext
     * @instance
     */
    DotContext.prototype.versionVector = $util.emptyObject;

    /**
     * DotContext dots.
     * @member {Array.<IDot>} dots
     * @memberof DotContext
     * @instance
     */
    DotContext.prototype.dots = $util.emptyArray;

    /**
     * Creates a new DotContext instance using the specified properties.
     * @function create
     * @memberof DotContext
     * @static
     * @param {IDotContext=} [properties] Properties to set
     * @returns {DotContext} DotContext instance
     */
    DotContext.create = function create(properties) {
        return new DotContext(properties);
    };

    /**
     * Encodes the specified DotContext message. Does not implicitly {@link DotContext.verify|verify} messages.
     * @function encode
     * @memberof DotContext
     * @static
     * @param {IDotContext} message DotContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DotContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.versionVector != null && Object.hasOwnProperty.call(message, "versionVector"))
            for (let keys = Object.keys(message.versionVector), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.versionVector[keys[i]]).ldelim();
        if (message.dots != null && message.dots.length)
            for (let i = 0; i < message.dots.length; ++i)
                $root.Dot.encode(message.dots[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DotContext message, length delimited. Does not implicitly {@link DotContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DotContext
     * @static
     * @param {IDotContext} message DotContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DotContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DotContext message from the specified reader or buffer.
     * @function decode
     * @memberof DotContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DotContext} DotContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DotContext.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DotContext(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (message.versionVector === $util.emptyObject)
                        message.versionVector = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.versionVector[key] = value;
                    break;
                }
            case 2: {
                    if (!(message.dots && message.dots.length))
                        message.dots = [];
                    message.dots.push($root.Dot.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DotContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DotContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DotContext} DotContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DotContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DotContext message.
     * @function verify
     * @memberof DotContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DotContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.versionVector != null && message.hasOwnProperty("versionVector")) {
            if (!$util.isObject(message.versionVector))
                return "versionVector: object expected";
            let key = Object.keys(message.versionVector);
            for (let i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.versionVector[key[i]]))
                    return "versionVector: integer{k:string} expected";
        }
        if (message.dots != null && message.hasOwnProperty("dots")) {
            if (!Array.isArray(message.dots))
                return "dots: array expected";
            for (let i = 0; i < message.dots.length; ++i) {
                let error = $root.Dot.verify(message.dots[i]);
                if (error)
                    return "dots." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DotContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DotContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DotContext} DotContext
     */
    DotContext.fromObject = function fromObject(object) {
        if (object instanceof $root.DotContext)
            return object;
        let message = new $root.DotContext();
        if (object.versionVector) {
            if (typeof object.versionVector !== "object")
                throw TypeError(".DotContext.versionVector: object expected");
            message.versionVector = {};
            for (let keys = Object.keys(object.versionVector), i = 0; i < keys.length; ++i)
                message.versionVector[keys[i]] = object.versionVector[keys[i]] >>> 0;
        }
        if (object.dots) {
            if (!Array.isArray(object.dots))
                throw TypeError(".DotContext.dots: array expected");
            message.dots = [];
            for (let i = 0; i < object.dots.length; ++i) {
                if (typeof object.dots[i] !== "object")
                    throw TypeError(".DotContext.dots: object expected");
                message.dots[i] = $root.Dot.fromObject(object.dots[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DotContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DotContext
     * @static
     * @param {DotContext} message DotContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DotContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.dots = [];
        if (options.objects || options.defaults)
            object.versionVector = {};
        let keys2;
        if (message.versionVector && (keys2 = Object.keys(message.versionVector)).length) {
            object.versionVector = {};
            for (let j = 0; j < keys2.length; ++j)
                object.versionVector[keys2[j]] = message.versionVector[keys2[j]];
        }
        if (message.dots && message.dots.length) {
            object.dots = [];
            for (let j = 0; j < message.dots.length; ++j)
                object.dots[j] = $root.Dot.toObject(message.dots[j], options);
        }
        return object;
    };

    /**
     * Converts this DotContext to JSON.
     * @function toJSON
     * @memberof DotContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DotContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DotContext
     * @function getTypeUrl
     * @memberof DotContext
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DotContext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DotContext";
    };

    return DotContext;
})();

export const IntDotKernel = $root.IntDotKernel = (() => {

    /**
     * Properties of an IntDotKernel.
     * @exports IIntDotKernel
     * @interface IIntDotKernel
     * @property {Array.<IDot>|null} [dotKeys] IntDotKernel dotKeys
     * @property {Array.<number|Long>|null} [dotValues] IntDotKernel dotValues
     */

    /**
     * Constructs a new IntDotKernel.
     * @exports IntDotKernel
     * @classdesc Represents an IntDotKernel.
     * @implements IIntDotKernel
     * @constructor
     * @param {IIntDotKernel=} [properties] Properties to set
     */
    function IntDotKernel(properties) {
        this.dotKeys = [];
        this.dotValues = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IntDotKernel dotKeys.
     * @member {Array.<IDot>} dotKeys
     * @memberof IntDotKernel
     * @instance
     */
    IntDotKernel.prototype.dotKeys = $util.emptyArray;

    /**
     * IntDotKernel dotValues.
     * @member {Array.<number|Long>} dotValues
     * @memberof IntDotKernel
     * @instance
     */
    IntDotKernel.prototype.dotValues = $util.emptyArray;

    /**
     * Creates a new IntDotKernel instance using the specified properties.
     * @function create
     * @memberof IntDotKernel
     * @static
     * @param {IIntDotKernel=} [properties] Properties to set
     * @returns {IntDotKernel} IntDotKernel instance
     */
    IntDotKernel.create = function create(properties) {
        return new IntDotKernel(properties);
    };

    /**
     * Encodes the specified IntDotKernel message. Does not implicitly {@link IntDotKernel.verify|verify} messages.
     * @function encode
     * @memberof IntDotKernel
     * @static
     * @param {IIntDotKernel} message IntDotKernel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IntDotKernel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dotKeys != null && message.dotKeys.length)
            for (let i = 0; i < message.dotKeys.length; ++i)
                $root.Dot.encode(message.dotKeys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.dotValues != null && message.dotValues.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (let i = 0; i < message.dotValues.length; ++i)
                writer.int64(message.dotValues[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified IntDotKernel message, length delimited. Does not implicitly {@link IntDotKernel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IntDotKernel
     * @static
     * @param {IIntDotKernel} message IntDotKernel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IntDotKernel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IntDotKernel message from the specified reader or buffer.
     * @function decode
     * @memberof IntDotKernel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IntDotKernel} IntDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IntDotKernel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.IntDotKernel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.dotKeys && message.dotKeys.length))
                        message.dotKeys = [];
                    message.dotKeys.push($root.Dot.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    if (!(message.dotValues && message.dotValues.length))
                        message.dotValues = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dotValues.push(reader.int64());
                    } else
                        message.dotValues.push(reader.int64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an IntDotKernel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IntDotKernel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IntDotKernel} IntDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IntDotKernel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IntDotKernel message.
     * @function verify
     * @memberof IntDotKernel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IntDotKernel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dotKeys != null && message.hasOwnProperty("dotKeys")) {
            if (!Array.isArray(message.dotKeys))
                return "dotKeys: array expected";
            for (let i = 0; i < message.dotKeys.length; ++i) {
                let error = $root.Dot.verify(message.dotKeys[i]);
                if (error)
                    return "dotKeys." + error;
            }
        }
        if (message.dotValues != null && message.hasOwnProperty("dotValues")) {
            if (!Array.isArray(message.dotValues))
                return "dotValues: array expected";
            for (let i = 0; i < message.dotValues.length; ++i)
                if (!$util.isInteger(message.dotValues[i]) && !(message.dotValues[i] && $util.isInteger(message.dotValues[i].low) && $util.isInteger(message.dotValues[i].high)))
                    return "dotValues: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates an IntDotKernel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IntDotKernel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IntDotKernel} IntDotKernel
     */
    IntDotKernel.fromObject = function fromObject(object) {
        if (object instanceof $root.IntDotKernel)
            return object;
        let message = new $root.IntDotKernel();
        if (object.dotKeys) {
            if (!Array.isArray(object.dotKeys))
                throw TypeError(".IntDotKernel.dotKeys: array expected");
            message.dotKeys = [];
            for (let i = 0; i < object.dotKeys.length; ++i) {
                if (typeof object.dotKeys[i] !== "object")
                    throw TypeError(".IntDotKernel.dotKeys: object expected");
                message.dotKeys[i] = $root.Dot.fromObject(object.dotKeys[i]);
            }
        }
        if (object.dotValues) {
            if (!Array.isArray(object.dotValues))
                throw TypeError(".IntDotKernel.dotValues: array expected");
            message.dotValues = [];
            for (let i = 0; i < object.dotValues.length; ++i)
                if ($util.Long)
                    (message.dotValues[i] = $util.Long.fromValue(object.dotValues[i])).unsigned = false;
                else if (typeof object.dotValues[i] === "string")
                    message.dotValues[i] = parseInt(object.dotValues[i], 10);
                else if (typeof object.dotValues[i] === "number")
                    message.dotValues[i] = object.dotValues[i];
                else if (typeof object.dotValues[i] === "object")
                    message.dotValues[i] = new $util.LongBits(object.dotValues[i].low >>> 0, object.dotValues[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from an IntDotKernel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IntDotKernel
     * @static
     * @param {IntDotKernel} message IntDotKernel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IntDotKernel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.dotKeys = [];
            object.dotValues = [];
        }
        if (message.dotKeys && message.dotKeys.length) {
            object.dotKeys = [];
            for (let j = 0; j < message.dotKeys.length; ++j)
                object.dotKeys[j] = $root.Dot.toObject(message.dotKeys[j], options);
        }
        if (message.dotValues && message.dotValues.length) {
            object.dotValues = [];
            for (let j = 0; j < message.dotValues.length; ++j)
                if (typeof message.dotValues[j] === "number")
                    object.dotValues[j] = options.longs === String ? String(message.dotValues[j]) : message.dotValues[j];
                else
                    object.dotValues[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dotValues[j]) : options.longs === Number ? new $util.LongBits(message.dotValues[j].low >>> 0, message.dotValues[j].high >>> 0).toNumber() : message.dotValues[j];
        }
        return object;
    };

    /**
     * Converts this IntDotKernel to JSON.
     * @function toJSON
     * @memberof IntDotKernel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IntDotKernel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for IntDotKernel
     * @function getTypeUrl
     * @memberof IntDotKernel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    IntDotKernel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/IntDotKernel";
    };

    return IntDotKernel;
})();

export const StringDotKernel = $root.StringDotKernel = (() => {

    /**
     * Properties of a StringDotKernel.
     * @exports IStringDotKernel
     * @interface IStringDotKernel
     * @property {Array.<IDot>|null} [dotKeys] StringDotKernel dotKeys
     * @property {Array.<string>|null} [dotValues] StringDotKernel dotValues
     */

    /**
     * Constructs a new StringDotKernel.
     * @exports StringDotKernel
     * @classdesc Represents a StringDotKernel.
     * @implements IStringDotKernel
     * @constructor
     * @param {IStringDotKernel=} [properties] Properties to set
     */
    function StringDotKernel(properties) {
        this.dotKeys = [];
        this.dotValues = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StringDotKernel dotKeys.
     * @member {Array.<IDot>} dotKeys
     * @memberof StringDotKernel
     * @instance
     */
    StringDotKernel.prototype.dotKeys = $util.emptyArray;

    /**
     * StringDotKernel dotValues.
     * @member {Array.<string>} dotValues
     * @memberof StringDotKernel
     * @instance
     */
    StringDotKernel.prototype.dotValues = $util.emptyArray;

    /**
     * Creates a new StringDotKernel instance using the specified properties.
     * @function create
     * @memberof StringDotKernel
     * @static
     * @param {IStringDotKernel=} [properties] Properties to set
     * @returns {StringDotKernel} StringDotKernel instance
     */
    StringDotKernel.create = function create(properties) {
        return new StringDotKernel(properties);
    };

    /**
     * Encodes the specified StringDotKernel message. Does not implicitly {@link StringDotKernel.verify|verify} messages.
     * @function encode
     * @memberof StringDotKernel
     * @static
     * @param {IStringDotKernel} message StringDotKernel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StringDotKernel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dotKeys != null && message.dotKeys.length)
            for (let i = 0; i < message.dotKeys.length; ++i)
                $root.Dot.encode(message.dotKeys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.dotValues != null && message.dotValues.length)
            for (let i = 0; i < message.dotValues.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dotValues[i]);
        return writer;
    };

    /**
     * Encodes the specified StringDotKernel message, length delimited. Does not implicitly {@link StringDotKernel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StringDotKernel
     * @static
     * @param {IStringDotKernel} message StringDotKernel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StringDotKernel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StringDotKernel message from the specified reader or buffer.
     * @function decode
     * @memberof StringDotKernel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StringDotKernel} StringDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StringDotKernel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StringDotKernel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.dotKeys && message.dotKeys.length))
                        message.dotKeys = [];
                    message.dotKeys.push($root.Dot.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    if (!(message.dotValues && message.dotValues.length))
                        message.dotValues = [];
                    message.dotValues.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StringDotKernel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StringDotKernel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StringDotKernel} StringDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StringDotKernel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StringDotKernel message.
     * @function verify
     * @memberof StringDotKernel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StringDotKernel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dotKeys != null && message.hasOwnProperty("dotKeys")) {
            if (!Array.isArray(message.dotKeys))
                return "dotKeys: array expected";
            for (let i = 0; i < message.dotKeys.length; ++i) {
                let error = $root.Dot.verify(message.dotKeys[i]);
                if (error)
                    return "dotKeys." + error;
            }
        }
        if (message.dotValues != null && message.hasOwnProperty("dotValues")) {
            if (!Array.isArray(message.dotValues))
                return "dotValues: array expected";
            for (let i = 0; i < message.dotValues.length; ++i)
                if (!$util.isString(message.dotValues[i]))
                    return "dotValues: string[] expected";
        }
        return null;
    };

    /**
     * Creates a StringDotKernel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StringDotKernel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StringDotKernel} StringDotKernel
     */
    StringDotKernel.fromObject = function fromObject(object) {
        if (object instanceof $root.StringDotKernel)
            return object;
        let message = new $root.StringDotKernel();
        if (object.dotKeys) {
            if (!Array.isArray(object.dotKeys))
                throw TypeError(".StringDotKernel.dotKeys: array expected");
            message.dotKeys = [];
            for (let i = 0; i < object.dotKeys.length; ++i) {
                if (typeof object.dotKeys[i] !== "object")
                    throw TypeError(".StringDotKernel.dotKeys: object expected");
                message.dotKeys[i] = $root.Dot.fromObject(object.dotKeys[i]);
            }
        }
        if (object.dotValues) {
            if (!Array.isArray(object.dotValues))
                throw TypeError(".StringDotKernel.dotValues: array expected");
            message.dotValues = [];
            for (let i = 0; i < object.dotValues.length; ++i)
                message.dotValues[i] = String(object.dotValues[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a StringDotKernel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StringDotKernel
     * @static
     * @param {StringDotKernel} message StringDotKernel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StringDotKernel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.dotKeys = [];
            object.dotValues = [];
        }
        if (message.dotKeys && message.dotKeys.length) {
            object.dotKeys = [];
            for (let j = 0; j < message.dotKeys.length; ++j)
                object.dotKeys[j] = $root.Dot.toObject(message.dotKeys[j], options);
        }
        if (message.dotValues && message.dotValues.length) {
            object.dotValues = [];
            for (let j = 0; j < message.dotValues.length; ++j)
                object.dotValues[j] = message.dotValues[j];
        }
        return object;
    };

    /**
     * Converts this StringDotKernel to JSON.
     * @function toJSON
     * @memberof StringDotKernel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StringDotKernel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StringDotKernel
     * @function getTypeUrl
     * @memberof StringDotKernel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StringDotKernel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StringDotKernel";
    };

    return StringDotKernel;
})();

export const EmptyDotKernel = $root.EmptyDotKernel = (() => {

    /**
     * Properties of an EmptyDotKernel.
     * @exports IEmptyDotKernel
     * @interface IEmptyDotKernel
     * @property {Array.<IDot>|null} [dotKeys] EmptyDotKernel dotKeys
     */

    /**
     * Constructs a new EmptyDotKernel.
     * @exports EmptyDotKernel
     * @classdesc Represents an EmptyDotKernel.
     * @implements IEmptyDotKernel
     * @constructor
     * @param {IEmptyDotKernel=} [properties] Properties to set
     */
    function EmptyDotKernel(properties) {
        this.dotKeys = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EmptyDotKernel dotKeys.
     * @member {Array.<IDot>} dotKeys
     * @memberof EmptyDotKernel
     * @instance
     */
    EmptyDotKernel.prototype.dotKeys = $util.emptyArray;

    /**
     * Creates a new EmptyDotKernel instance using the specified properties.
     * @function create
     * @memberof EmptyDotKernel
     * @static
     * @param {IEmptyDotKernel=} [properties] Properties to set
     * @returns {EmptyDotKernel} EmptyDotKernel instance
     */
    EmptyDotKernel.create = function create(properties) {
        return new EmptyDotKernel(properties);
    };

    /**
     * Encodes the specified EmptyDotKernel message. Does not implicitly {@link EmptyDotKernel.verify|verify} messages.
     * @function encode
     * @memberof EmptyDotKernel
     * @static
     * @param {IEmptyDotKernel} message EmptyDotKernel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmptyDotKernel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dotKeys != null && message.dotKeys.length)
            for (let i = 0; i < message.dotKeys.length; ++i)
                $root.Dot.encode(message.dotKeys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EmptyDotKernel message, length delimited. Does not implicitly {@link EmptyDotKernel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmptyDotKernel
     * @static
     * @param {IEmptyDotKernel} message EmptyDotKernel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmptyDotKernel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmptyDotKernel message from the specified reader or buffer.
     * @function decode
     * @memberof EmptyDotKernel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EmptyDotKernel} EmptyDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmptyDotKernel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EmptyDotKernel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.dotKeys && message.dotKeys.length))
                        message.dotKeys = [];
                    message.dotKeys.push($root.Dot.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EmptyDotKernel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmptyDotKernel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmptyDotKernel} EmptyDotKernel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmptyDotKernel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmptyDotKernel message.
     * @function verify
     * @memberof EmptyDotKernel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmptyDotKernel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dotKeys != null && message.hasOwnProperty("dotKeys")) {
            if (!Array.isArray(message.dotKeys))
                return "dotKeys: array expected";
            for (let i = 0; i < message.dotKeys.length; ++i) {
                let error = $root.Dot.verify(message.dotKeys[i]);
                if (error)
                    return "dotKeys." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EmptyDotKernel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EmptyDotKernel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EmptyDotKernel} EmptyDotKernel
     */
    EmptyDotKernel.fromObject = function fromObject(object) {
        if (object instanceof $root.EmptyDotKernel)
            return object;
        let message = new $root.EmptyDotKernel();
        if (object.dotKeys) {
            if (!Array.isArray(object.dotKeys))
                throw TypeError(".EmptyDotKernel.dotKeys: array expected");
            message.dotKeys = [];
            for (let i = 0; i < object.dotKeys.length; ++i) {
                if (typeof object.dotKeys[i] !== "object")
                    throw TypeError(".EmptyDotKernel.dotKeys: object expected");
                message.dotKeys[i] = $root.Dot.fromObject(object.dotKeys[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an EmptyDotKernel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EmptyDotKernel
     * @static
     * @param {EmptyDotKernel} message EmptyDotKernel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EmptyDotKernel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.dotKeys = [];
        if (message.dotKeys && message.dotKeys.length) {
            object.dotKeys = [];
            for (let j = 0; j < message.dotKeys.length; ++j)
                object.dotKeys[j] = $root.Dot.toObject(message.dotKeys[j], options);
        }
        return object;
    };

    /**
     * Converts this EmptyDotKernel to JSON.
     * @function toJSON
     * @memberof EmptyDotKernel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EmptyDotKernel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EmptyDotKernel
     * @function getTypeUrl
     * @memberof EmptyDotKernel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EmptyDotKernel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EmptyDotKernel";
    };

    return EmptyDotKernel;
})();

export const CCounter = $root.CCounter = (() => {

    /**
     * Properties of a CCounter.
     * @exports ICCounter
     * @interface ICCounter
     * @property {IIntDotKernel|null} [dotKernel] CCounter dotKernel
     */

    /**
     * Constructs a new CCounter.
     * @exports CCounter
     * @classdesc Represents a CCounter.
     * @implements ICCounter
     * @constructor
     * @param {ICCounter=} [properties] Properties to set
     */
    function CCounter(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CCounter dotKernel.
     * @member {IIntDotKernel|null|undefined} dotKernel
     * @memberof CCounter
     * @instance
     */
    CCounter.prototype.dotKernel = null;

    /**
     * Creates a new CCounter instance using the specified properties.
     * @function create
     * @memberof CCounter
     * @static
     * @param {ICCounter=} [properties] Properties to set
     * @returns {CCounter} CCounter instance
     */
    CCounter.create = function create(properties) {
        return new CCounter(properties);
    };

    /**
     * Encodes the specified CCounter message. Does not implicitly {@link CCounter.verify|verify} messages.
     * @function encode
     * @memberof CCounter
     * @static
     * @param {ICCounter} message CCounter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCounter.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dotKernel != null && Object.hasOwnProperty.call(message, "dotKernel"))
            $root.IntDotKernel.encode(message.dotKernel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CCounter message, length delimited. Does not implicitly {@link CCounter.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CCounter
     * @static
     * @param {ICCounter} message CCounter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CCounter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CCounter message from the specified reader or buffer.
     * @function decode
     * @memberof CCounter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CCounter} CCounter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCounter.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CCounter();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.dotKernel = $root.IntDotKernel.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CCounter message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CCounter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CCounter} CCounter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CCounter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CCounter message.
     * @function verify
     * @memberof CCounter
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CCounter.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dotKernel != null && message.hasOwnProperty("dotKernel")) {
            let error = $root.IntDotKernel.verify(message.dotKernel);
            if (error)
                return "dotKernel." + error;
        }
        return null;
    };

    /**
     * Creates a CCounter message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CCounter
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CCounter} CCounter
     */
    CCounter.fromObject = function fromObject(object) {
        if (object instanceof $root.CCounter)
            return object;
        let message = new $root.CCounter();
        if (object.dotKernel != null) {
            if (typeof object.dotKernel !== "object")
                throw TypeError(".CCounter.dotKernel: object expected");
            message.dotKernel = $root.IntDotKernel.fromObject(object.dotKernel);
        }
        return message;
    };

    /**
     * Creates a plain object from a CCounter message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CCounter
     * @static
     * @param {CCounter} message CCounter
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CCounter.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.dotKernel = null;
        if (message.dotKernel != null && message.hasOwnProperty("dotKernel"))
            object.dotKernel = $root.IntDotKernel.toObject(message.dotKernel, options);
        return object;
    };

    /**
     * Converts this CCounter to JSON.
     * @function toJSON
     * @memberof CCounter
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CCounter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CCounter
     * @function getTypeUrl
     * @memberof CCounter
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CCounter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CCounter";
    };

    return CCounter;
})();

export const StringMVReg = $root.StringMVReg = (() => {

    /**
     * Properties of a StringMVReg.
     * @exports IStringMVReg
     * @interface IStringMVReg
     * @property {IStringDotKernel|null} [dotKernel] StringMVReg dotKernel
     */

    /**
     * Constructs a new StringMVReg.
     * @exports StringMVReg
     * @classdesc Represents a StringMVReg.
     * @implements IStringMVReg
     * @constructor
     * @param {IStringMVReg=} [properties] Properties to set
     */
    function StringMVReg(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StringMVReg dotKernel.
     * @member {IStringDotKernel|null|undefined} dotKernel
     * @memberof StringMVReg
     * @instance
     */
    StringMVReg.prototype.dotKernel = null;

    /**
     * Creates a new StringMVReg instance using the specified properties.
     * @function create
     * @memberof StringMVReg
     * @static
     * @param {IStringMVReg=} [properties] Properties to set
     * @returns {StringMVReg} StringMVReg instance
     */
    StringMVReg.create = function create(properties) {
        return new StringMVReg(properties);
    };

    /**
     * Encodes the specified StringMVReg message. Does not implicitly {@link StringMVReg.verify|verify} messages.
     * @function encode
     * @memberof StringMVReg
     * @static
     * @param {IStringMVReg} message StringMVReg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StringMVReg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dotKernel != null && Object.hasOwnProperty.call(message, "dotKernel"))
            $root.StringDotKernel.encode(message.dotKernel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StringMVReg message, length delimited. Does not implicitly {@link StringMVReg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StringMVReg
     * @static
     * @param {IStringMVReg} message StringMVReg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StringMVReg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StringMVReg message from the specified reader or buffer.
     * @function decode
     * @memberof StringMVReg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StringMVReg} StringMVReg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StringMVReg.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StringMVReg();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.dotKernel = $root.StringDotKernel.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StringMVReg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StringMVReg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StringMVReg} StringMVReg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StringMVReg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StringMVReg message.
     * @function verify
     * @memberof StringMVReg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StringMVReg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dotKernel != null && message.hasOwnProperty("dotKernel")) {
            let error = $root.StringDotKernel.verify(message.dotKernel);
            if (error)
                return "dotKernel." + error;
        }
        return null;
    };

    /**
     * Creates a StringMVReg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StringMVReg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StringMVReg} StringMVReg
     */
    StringMVReg.fromObject = function fromObject(object) {
        if (object instanceof $root.StringMVReg)
            return object;
        let message = new $root.StringMVReg();
        if (object.dotKernel != null) {
            if (typeof object.dotKernel !== "object")
                throw TypeError(".StringMVReg.dotKernel: object expected");
            message.dotKernel = $root.StringDotKernel.fromObject(object.dotKernel);
        }
        return message;
    };

    /**
     * Creates a plain object from a StringMVReg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StringMVReg
     * @static
     * @param {StringMVReg} message StringMVReg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StringMVReg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.dotKernel = null;
        if (message.dotKernel != null && message.hasOwnProperty("dotKernel"))
            object.dotKernel = $root.StringDotKernel.toObject(message.dotKernel, options);
        return object;
    };

    /**
     * Converts this StringMVReg to JSON.
     * @function toJSON
     * @memberof StringMVReg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StringMVReg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StringMVReg
     * @function getTypeUrl
     * @memberof StringMVReg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StringMVReg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StringMVReg";
    };

    return StringMVReg;
})();

export const DWFlag = $root.DWFlag = (() => {

    /**
     * Properties of a DWFlag.
     * @exports IDWFlag
     * @interface IDWFlag
     * @property {IEmptyDotKernel|null} [dotKernel] DWFlag dotKernel
     */

    /**
     * Constructs a new DWFlag.
     * @exports DWFlag
     * @classdesc Represents a DWFlag.
     * @implements IDWFlag
     * @constructor
     * @param {IDWFlag=} [properties] Properties to set
     */
    function DWFlag(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DWFlag dotKernel.
     * @member {IEmptyDotKernel|null|undefined} dotKernel
     * @memberof DWFlag
     * @instance
     */
    DWFlag.prototype.dotKernel = null;

    /**
     * Creates a new DWFlag instance using the specified properties.
     * @function create
     * @memberof DWFlag
     * @static
     * @param {IDWFlag=} [properties] Properties to set
     * @returns {DWFlag} DWFlag instance
     */
    DWFlag.create = function create(properties) {
        return new DWFlag(properties);
    };

    /**
     * Encodes the specified DWFlag message. Does not implicitly {@link DWFlag.verify|verify} messages.
     * @function encode
     * @memberof DWFlag
     * @static
     * @param {IDWFlag} message DWFlag message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DWFlag.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dotKernel != null && Object.hasOwnProperty.call(message, "dotKernel"))
            $root.EmptyDotKernel.encode(message.dotKernel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DWFlag message, length delimited. Does not implicitly {@link DWFlag.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DWFlag
     * @static
     * @param {IDWFlag} message DWFlag message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DWFlag.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DWFlag message from the specified reader or buffer.
     * @function decode
     * @memberof DWFlag
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DWFlag} DWFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DWFlag.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DWFlag();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.dotKernel = $root.EmptyDotKernel.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DWFlag message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DWFlag
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DWFlag} DWFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DWFlag.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DWFlag message.
     * @function verify
     * @memberof DWFlag
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DWFlag.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dotKernel != null && message.hasOwnProperty("dotKernel")) {
            let error = $root.EmptyDotKernel.verify(message.dotKernel);
            if (error)
                return "dotKernel." + error;
        }
        return null;
    };

    /**
     * Creates a DWFlag message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DWFlag
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DWFlag} DWFlag
     */
    DWFlag.fromObject = function fromObject(object) {
        if (object instanceof $root.DWFlag)
            return object;
        let message = new $root.DWFlag();
        if (object.dotKernel != null) {
            if (typeof object.dotKernel !== "object")
                throw TypeError(".DWFlag.dotKernel: object expected");
            message.dotKernel = $root.EmptyDotKernel.fromObject(object.dotKernel);
        }
        return message;
    };

    /**
     * Creates a plain object from a DWFlag message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DWFlag
     * @static
     * @param {DWFlag} message DWFlag
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DWFlag.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.dotKernel = null;
        if (message.dotKernel != null && message.hasOwnProperty("dotKernel"))
            object.dotKernel = $root.EmptyDotKernel.toObject(message.dotKernel, options);
        return object;
    };

    /**
     * Converts this DWFlag to JSON.
     * @function toJSON
     * @memberof DWFlag
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DWFlag.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DWFlag
     * @function getTypeUrl
     * @memberof DWFlag
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DWFlag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DWFlag";
    };

    return DWFlag;
})();

export const RingView = $root.RingView = (() => {

    /**
     * Properties of a RingView.
     * @exports IRingView
     * @interface IRingView
     * @property {Object.<string,string>|null} [tokenToNode] RingView tokenToNode
     */

    /**
     * Constructs a new RingView.
     * @exports RingView
     * @classdesc Represents a RingView.
     * @implements IRingView
     * @constructor
     * @param {IRingView=} [properties] Properties to set
     */
    function RingView(properties) {
        this.tokenToNode = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RingView tokenToNode.
     * @member {Object.<string,string>} tokenToNode
     * @memberof RingView
     * @instance
     */
    RingView.prototype.tokenToNode = $util.emptyObject;

    /**
     * Creates a new RingView instance using the specified properties.
     * @function create
     * @memberof RingView
     * @static
     * @param {IRingView=} [properties] Properties to set
     * @returns {RingView} RingView instance
     */
    RingView.create = function create(properties) {
        return new RingView(properties);
    };

    /**
     * Encodes the specified RingView message. Does not implicitly {@link RingView.verify|verify} messages.
     * @function encode
     * @memberof RingView
     * @static
     * @param {IRingView} message RingView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RingView.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tokenToNode != null && Object.hasOwnProperty.call(message, "tokenToNode"))
            for (let keys = Object.keys(message.tokenToNode), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.tokenToNode[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RingView message, length delimited. Does not implicitly {@link RingView.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RingView
     * @static
     * @param {IRingView} message RingView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RingView.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RingView message from the specified reader or buffer.
     * @function decode
     * @memberof RingView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RingView} RingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RingView.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RingView(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (message.tokenToNode === $util.emptyObject)
                        message.tokenToNode = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = "";
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.uint64();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.tokenToNode[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RingView message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RingView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RingView} RingView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RingView.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RingView message.
     * @function verify
     * @memberof RingView
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RingView.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tokenToNode != null && message.hasOwnProperty("tokenToNode")) {
            if (!$util.isObject(message.tokenToNode))
                return "tokenToNode: object expected";
            let key = Object.keys(message.tokenToNode);
            for (let i = 0; i < key.length; ++i) {
                if (!$util.key64Re.test(key[i]))
                    return "tokenToNode: integer|Long key{k:uint64} expected";
                if (!$util.isString(message.tokenToNode[key[i]]))
                    return "tokenToNode: string{k:uint64} expected";
            }
        }
        return null;
    };

    /**
     * Creates a RingView message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RingView
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RingView} RingView
     */
    RingView.fromObject = function fromObject(object) {
        if (object instanceof $root.RingView)
            return object;
        let message = new $root.RingView();
        if (object.tokenToNode) {
            if (typeof object.tokenToNode !== "object")
                throw TypeError(".RingView.tokenToNode: object expected");
            message.tokenToNode = {};
            for (let keys = Object.keys(object.tokenToNode), i = 0; i < keys.length; ++i)
                message.tokenToNode[keys[i]] = String(object.tokenToNode[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a RingView message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RingView
     * @static
     * @param {RingView} message RingView
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RingView.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults)
            object.tokenToNode = {};
        let keys2;
        if (message.tokenToNode && (keys2 = Object.keys(message.tokenToNode)).length) {
            object.tokenToNode = {};
            for (let j = 0; j < keys2.length; ++j)
                object.tokenToNode[keys2[j]] = message.tokenToNode[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this RingView to JSON.
     * @function toJSON
     * @memberof RingView
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RingView.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RingView
     * @function getTypeUrl
     * @memberof RingView
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RingView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RingView";
    };

    return RingView;
})();

export const Request = $root.Request = (() => {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {string|null} [origin] Request origin
     * @property {IRequestPing|null} [ping] Request ping
     * @property {IRequestFetchRing|null} [fetchRing] Request fetchRing
     * @property {IRequestGossipJoin|null} [gossipJoin] Request gossipJoin
     * @property {IRequestGetHashSpace|null} [getHashSpace] Request getHashSpace
     * @property {IRequestGet|null} [get] Request get
     * @property {IRequestPut|null} [put] Request put
     * @property {IRequestDelete|null} ["delete"] Request delete
     * @property {IRequestHas|null} [has] Request has
     * @property {IRequestReplicaPut|null} [replicaPut] Request replicaPut
     * @property {IRequestReplicaGet|null} [replicaGet] Request replicaGet
     * @property {IRequestStoreHint|null} [storeHint] Request storeHint
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request origin.
     * @member {string} origin
     * @memberof Request
     * @instance
     */
    Request.prototype.origin = "";

    /**
     * Request ping.
     * @member {IRequestPing|null|undefined} ping
     * @memberof Request
     * @instance
     */
    Request.prototype.ping = null;

    /**
     * Request fetchRing.
     * @member {IRequestFetchRing|null|undefined} fetchRing
     * @memberof Request
     * @instance
     */
    Request.prototype.fetchRing = null;

    /**
     * Request gossipJoin.
     * @member {IRequestGossipJoin|null|undefined} gossipJoin
     * @memberof Request
     * @instance
     */
    Request.prototype.gossipJoin = null;

    /**
     * Request getHashSpace.
     * @member {IRequestGetHashSpace|null|undefined} getHashSpace
     * @memberof Request
     * @instance
     */
    Request.prototype.getHashSpace = null;

    /**
     * Request get.
     * @member {IRequestGet|null|undefined} get
     * @memberof Request
     * @instance
     */
    Request.prototype.get = null;

    /**
     * Request put.
     * @member {IRequestPut|null|undefined} put
     * @memberof Request
     * @instance
     */
    Request.prototype.put = null;

    /**
     * Request delete.
     * @member {IRequestDelete|null|undefined} delete
     * @memberof Request
     * @instance
     */
    Request.prototype["delete"] = null;

    /**
     * Request has.
     * @member {IRequestHas|null|undefined} has
     * @memberof Request
     * @instance
     */
    Request.prototype.has = null;

    /**
     * Request replicaPut.
     * @member {IRequestReplicaPut|null|undefined} replicaPut
     * @memberof Request
     * @instance
     */
    Request.prototype.replicaPut = null;

    /**
     * Request replicaGet.
     * @member {IRequestReplicaGet|null|undefined} replicaGet
     * @memberof Request
     * @instance
     */
    Request.prototype.replicaGet = null;

    /**
     * Request storeHint.
     * @member {IRequestStoreHint|null|undefined} storeHint
     * @memberof Request
     * @instance
     */
    Request.prototype.storeHint = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Request requestType.
     * @member {"ping"|"fetchRing"|"gossipJoin"|"getHashSpace"|"get"|"put"|"delete"|"has"|"replicaPut"|"replicaGet"|"storeHint"|undefined} requestType
     * @memberof Request
     * @instance
     */
    Object.defineProperty(Request.prototype, "requestType", {
        get: $util.oneOfGetter($oneOfFields = ["ping", "fetchRing", "gossipJoin", "getHashSpace", "get", "put", "delete", "has", "replicaPut", "replicaGet", "storeHint"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.origin != null && Object.hasOwnProperty.call(message, "origin"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.origin);
        if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
            $root.RequestPing.encode(message.ping, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.fetchRing != null && Object.hasOwnProperty.call(message, "fetchRing"))
            $root.RequestFetchRing.encode(message.fetchRing, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.gossipJoin != null && Object.hasOwnProperty.call(message, "gossipJoin"))
            $root.RequestGossipJoin.encode(message.gossipJoin, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.getHashSpace != null && Object.hasOwnProperty.call(message, "getHashSpace"))
            $root.RequestGetHashSpace.encode(message.getHashSpace, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.get != null && Object.hasOwnProperty.call(message, "get"))
            $root.RequestGet.encode(message.get, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.put != null && Object.hasOwnProperty.call(message, "put"))
            $root.RequestPut.encode(message.put, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
            $root.RequestDelete.encode(message["delete"], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.has != null && Object.hasOwnProperty.call(message, "has"))
            $root.RequestHas.encode(message.has, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.replicaPut != null && Object.hasOwnProperty.call(message, "replicaPut"))
            $root.RequestReplicaPut.encode(message.replicaPut, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.replicaGet != null && Object.hasOwnProperty.call(message, "replicaGet"))
            $root.RequestReplicaGet.encode(message.replicaGet, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.storeHint != null && Object.hasOwnProperty.call(message, "storeHint"))
            $root.RequestStoreHint.encode(message.storeHint, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Request message, length delimited. Does not implicitly {@link Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.origin = reader.string();
                    break;
                }
            case 11: {
                    message.ping = $root.RequestPing.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.fetchRing = $root.RequestFetchRing.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.gossipJoin = $root.RequestGossipJoin.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.getHashSpace = $root.RequestGetHashSpace.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.get = $root.RequestGet.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.put = $root.RequestPut.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message["delete"] = $root.RequestDelete.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.has = $root.RequestHas.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.replicaPut = $root.RequestReplicaPut.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.replicaGet = $root.RequestReplicaGet.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.storeHint = $root.RequestStoreHint.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Request message.
     * @function verify
     * @memberof Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.origin != null && message.hasOwnProperty("origin"))
            if (!$util.isString(message.origin))
                return "origin: string expected";
        if (message.ping != null && message.hasOwnProperty("ping")) {
            properties.requestType = 1;
            {
                let error = $root.RequestPing.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
        }
        if (message.fetchRing != null && message.hasOwnProperty("fetchRing")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestFetchRing.verify(message.fetchRing);
                if (error)
                    return "fetchRing." + error;
            }
        }
        if (message.gossipJoin != null && message.hasOwnProperty("gossipJoin")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestGossipJoin.verify(message.gossipJoin);
                if (error)
                    return "gossipJoin." + error;
            }
        }
        if (message.getHashSpace != null && message.hasOwnProperty("getHashSpace")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestGetHashSpace.verify(message.getHashSpace);
                if (error)
                    return "getHashSpace." + error;
            }
        }
        if (message.get != null && message.hasOwnProperty("get")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestGet.verify(message.get);
                if (error)
                    return "get." + error;
            }
        }
        if (message.put != null && message.hasOwnProperty("put")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestPut.verify(message.put);
                if (error)
                    return "put." + error;
            }
        }
        if (message["delete"] != null && message.hasOwnProperty("delete")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestDelete.verify(message["delete"]);
                if (error)
                    return "delete." + error;
            }
        }
        if (message.has != null && message.hasOwnProperty("has")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestHas.verify(message.has);
                if (error)
                    return "has." + error;
            }
        }
        if (message.replicaPut != null && message.hasOwnProperty("replicaPut")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestReplicaPut.verify(message.replicaPut);
                if (error)
                    return "replicaPut." + error;
            }
        }
        if (message.replicaGet != null && message.hasOwnProperty("replicaGet")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestReplicaGet.verify(message.replicaGet);
                if (error)
                    return "replicaGet." + error;
            }
        }
        if (message.storeHint != null && message.hasOwnProperty("storeHint")) {
            if (properties.requestType === 1)
                return "requestType: multiple values";
            properties.requestType = 1;
            {
                let error = $root.RequestStoreHint.verify(message.storeHint);
                if (error)
                    return "storeHint." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Request} Request
     */
    Request.fromObject = function fromObject(object) {
        if (object instanceof $root.Request)
            return object;
        let message = new $root.Request();
        if (object.origin != null)
            message.origin = String(object.origin);
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".Request.ping: object expected");
            message.ping = $root.RequestPing.fromObject(object.ping);
        }
        if (object.fetchRing != null) {
            if (typeof object.fetchRing !== "object")
                throw TypeError(".Request.fetchRing: object expected");
            message.fetchRing = $root.RequestFetchRing.fromObject(object.fetchRing);
        }
        if (object.gossipJoin != null) {
            if (typeof object.gossipJoin !== "object")
                throw TypeError(".Request.gossipJoin: object expected");
            message.gossipJoin = $root.RequestGossipJoin.fromObject(object.gossipJoin);
        }
        if (object.getHashSpace != null) {
            if (typeof object.getHashSpace !== "object")
                throw TypeError(".Request.getHashSpace: object expected");
            message.getHashSpace = $root.RequestGetHashSpace.fromObject(object.getHashSpace);
        }
        if (object.get != null) {
            if (typeof object.get !== "object")
                throw TypeError(".Request.get: object expected");
            message.get = $root.RequestGet.fromObject(object.get);
        }
        if (object.put != null) {
            if (typeof object.put !== "object")
                throw TypeError(".Request.put: object expected");
            message.put = $root.RequestPut.fromObject(object.put);
        }
        if (object["delete"] != null) {
            if (typeof object["delete"] !== "object")
                throw TypeError(".Request.delete: object expected");
            message["delete"] = $root.RequestDelete.fromObject(object["delete"]);
        }
        if (object.has != null) {
            if (typeof object.has !== "object")
                throw TypeError(".Request.has: object expected");
            message.has = $root.RequestHas.fromObject(object.has);
        }
        if (object.replicaPut != null) {
            if (typeof object.replicaPut !== "object")
                throw TypeError(".Request.replicaPut: object expected");
            message.replicaPut = $root.RequestReplicaPut.fromObject(object.replicaPut);
        }
        if (object.replicaGet != null) {
            if (typeof object.replicaGet !== "object")
                throw TypeError(".Request.replicaGet: object expected");
            message.replicaGet = $root.RequestReplicaGet.fromObject(object.replicaGet);
        }
        if (object.storeHint != null) {
            if (typeof object.storeHint !== "object")
                throw TypeError(".Request.storeHint: object expected");
            message.storeHint = $root.RequestStoreHint.fromObject(object.storeHint);
        }
        return message;
    };

    /**
     * Creates a plain object from a Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Request
     * @static
     * @param {Request} message Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.origin = "";
        if (message.origin != null && message.hasOwnProperty("origin"))
            object.origin = message.origin;
        if (message.ping != null && message.hasOwnProperty("ping")) {
            object.ping = $root.RequestPing.toObject(message.ping, options);
            if (options.oneofs)
                object.requestType = "ping";
        }
        if (message.fetchRing != null && message.hasOwnProperty("fetchRing")) {
            object.fetchRing = $root.RequestFetchRing.toObject(message.fetchRing, options);
            if (options.oneofs)
                object.requestType = "fetchRing";
        }
        if (message.gossipJoin != null && message.hasOwnProperty("gossipJoin")) {
            object.gossipJoin = $root.RequestGossipJoin.toObject(message.gossipJoin, options);
            if (options.oneofs)
                object.requestType = "gossipJoin";
        }
        if (message.getHashSpace != null && message.hasOwnProperty("getHashSpace")) {
            object.getHashSpace = $root.RequestGetHashSpace.toObject(message.getHashSpace, options);
            if (options.oneofs)
                object.requestType = "getHashSpace";
        }
        if (message.get != null && message.hasOwnProperty("get")) {
            object.get = $root.RequestGet.toObject(message.get, options);
            if (options.oneofs)
                object.requestType = "get";
        }
        if (message.put != null && message.hasOwnProperty("put")) {
            object.put = $root.RequestPut.toObject(message.put, options);
            if (options.oneofs)
                object.requestType = "put";
        }
        if (message["delete"] != null && message.hasOwnProperty("delete")) {
            object["delete"] = $root.RequestDelete.toObject(message["delete"], options);
            if (options.oneofs)
                object.requestType = "delete";
        }
        if (message.has != null && message.hasOwnProperty("has")) {
            object.has = $root.RequestHas.toObject(message.has, options);
            if (options.oneofs)
                object.requestType = "has";
        }
        if (message.replicaPut != null && message.hasOwnProperty("replicaPut")) {
            object.replicaPut = $root.RequestReplicaPut.toObject(message.replicaPut, options);
            if (options.oneofs)
                object.requestType = "replicaPut";
        }
        if (message.replicaGet != null && message.hasOwnProperty("replicaGet")) {
            object.replicaGet = $root.RequestReplicaGet.toObject(message.replicaGet, options);
            if (options.oneofs)
                object.requestType = "replicaGet";
        }
        if (message.storeHint != null && message.hasOwnProperty("storeHint")) {
            object.storeHint = $root.RequestStoreHint.toObject(message.storeHint, options);
            if (options.oneofs)
                object.requestType = "storeHint";
        }
        return object;
    };

    /**
     * Converts this Request to JSON.
     * @function toJSON
     * @memberof Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Request
     * @function getTypeUrl
     * @memberof Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Request";
    };

    return Request;
})();

export const RequestPing = $root.RequestPing = (() => {

    /**
     * Properties of a RequestPing.
     * @exports IRequestPing
     * @interface IRequestPing
     */

    /**
     * Constructs a new RequestPing.
     * @exports RequestPing
     * @classdesc Represents a RequestPing.
     * @implements IRequestPing
     * @constructor
     * @param {IRequestPing=} [properties] Properties to set
     */
    function RequestPing(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new RequestPing instance using the specified properties.
     * @function create
     * @memberof RequestPing
     * @static
     * @param {IRequestPing=} [properties] Properties to set
     * @returns {RequestPing} RequestPing instance
     */
    RequestPing.create = function create(properties) {
        return new RequestPing(properties);
    };

    /**
     * Encodes the specified RequestPing message. Does not implicitly {@link RequestPing.verify|verify} messages.
     * @function encode
     * @memberof RequestPing
     * @static
     * @param {IRequestPing} message RequestPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestPing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RequestPing message, length delimited. Does not implicitly {@link RequestPing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestPing
     * @static
     * @param {IRequestPing} message RequestPing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestPing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestPing message from the specified reader or buffer.
     * @function decode
     * @memberof RequestPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestPing} RequestPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestPing.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPing();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestPing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestPing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestPing} RequestPing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestPing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestPing message.
     * @function verify
     * @memberof RequestPing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestPing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a RequestPing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestPing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestPing} RequestPing
     */
    RequestPing.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestPing)
            return object;
        return new $root.RequestPing();
    };

    /**
     * Creates a plain object from a RequestPing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestPing
     * @static
     * @param {RequestPing} message RequestPing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestPing.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RequestPing to JSON.
     * @function toJSON
     * @memberof RequestPing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestPing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestPing
     * @function getTypeUrl
     * @memberof RequestPing
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestPing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestPing";
    };

    return RequestPing;
})();

export const RequestFetchRing = $root.RequestFetchRing = (() => {

    /**
     * Properties of a RequestFetchRing.
     * @exports IRequestFetchRing
     * @interface IRequestFetchRing
     */

    /**
     * Constructs a new RequestFetchRing.
     * @exports RequestFetchRing
     * @classdesc Represents a RequestFetchRing.
     * @implements IRequestFetchRing
     * @constructor
     * @param {IRequestFetchRing=} [properties] Properties to set
     */
    function RequestFetchRing(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new RequestFetchRing instance using the specified properties.
     * @function create
     * @memberof RequestFetchRing
     * @static
     * @param {IRequestFetchRing=} [properties] Properties to set
     * @returns {RequestFetchRing} RequestFetchRing instance
     */
    RequestFetchRing.create = function create(properties) {
        return new RequestFetchRing(properties);
    };

    /**
     * Encodes the specified RequestFetchRing message. Does not implicitly {@link RequestFetchRing.verify|verify} messages.
     * @function encode
     * @memberof RequestFetchRing
     * @static
     * @param {IRequestFetchRing} message RequestFetchRing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestFetchRing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified RequestFetchRing message, length delimited. Does not implicitly {@link RequestFetchRing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestFetchRing
     * @static
     * @param {IRequestFetchRing} message RequestFetchRing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestFetchRing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestFetchRing message from the specified reader or buffer.
     * @function decode
     * @memberof RequestFetchRing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestFetchRing} RequestFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestFetchRing.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestFetchRing();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestFetchRing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestFetchRing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestFetchRing} RequestFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestFetchRing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestFetchRing message.
     * @function verify
     * @memberof RequestFetchRing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestFetchRing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a RequestFetchRing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestFetchRing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestFetchRing} RequestFetchRing
     */
    RequestFetchRing.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestFetchRing)
            return object;
        return new $root.RequestFetchRing();
    };

    /**
     * Creates a plain object from a RequestFetchRing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestFetchRing
     * @static
     * @param {RequestFetchRing} message RequestFetchRing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestFetchRing.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this RequestFetchRing to JSON.
     * @function toJSON
     * @memberof RequestFetchRing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestFetchRing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestFetchRing
     * @function getTypeUrl
     * @memberof RequestFetchRing
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestFetchRing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestFetchRing";
    };

    return RequestFetchRing;
})();

export const RequestGossipJoin = $root.RequestGossipJoin = (() => {

    /**
     * Properties of a RequestGossipJoin.
     * @exports IRequestGossipJoin
     * @interface IRequestGossipJoin
     * @property {string|null} [newNodeId] RequestGossipJoin newNodeId
     * @property {Array.<number|Long>|null} [tokens] RequestGossipJoin tokens
     */

    /**
     * Constructs a new RequestGossipJoin.
     * @exports RequestGossipJoin
     * @classdesc Represents a RequestGossipJoin.
     * @implements IRequestGossipJoin
     * @constructor
     * @param {IRequestGossipJoin=} [properties] Properties to set
     */
    function RequestGossipJoin(properties) {
        this.tokens = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestGossipJoin newNodeId.
     * @member {string} newNodeId
     * @memberof RequestGossipJoin
     * @instance
     */
    RequestGossipJoin.prototype.newNodeId = "";

    /**
     * RequestGossipJoin tokens.
     * @member {Array.<number|Long>} tokens
     * @memberof RequestGossipJoin
     * @instance
     */
    RequestGossipJoin.prototype.tokens = $util.emptyArray;

    /**
     * Creates a new RequestGossipJoin instance using the specified properties.
     * @function create
     * @memberof RequestGossipJoin
     * @static
     * @param {IRequestGossipJoin=} [properties] Properties to set
     * @returns {RequestGossipJoin} RequestGossipJoin instance
     */
    RequestGossipJoin.create = function create(properties) {
        return new RequestGossipJoin(properties);
    };

    /**
     * Encodes the specified RequestGossipJoin message. Does not implicitly {@link RequestGossipJoin.verify|verify} messages.
     * @function encode
     * @memberof RequestGossipJoin
     * @static
     * @param {IRequestGossipJoin} message RequestGossipJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestGossipJoin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.newNodeId != null && Object.hasOwnProperty.call(message, "newNodeId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.newNodeId);
        if (message.tokens != null && message.tokens.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (let i = 0; i < message.tokens.length; ++i)
                writer.uint64(message.tokens[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified RequestGossipJoin message, length delimited. Does not implicitly {@link RequestGossipJoin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestGossipJoin
     * @static
     * @param {IRequestGossipJoin} message RequestGossipJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestGossipJoin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestGossipJoin message from the specified reader or buffer.
     * @function decode
     * @memberof RequestGossipJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestGossipJoin} RequestGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestGossipJoin.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestGossipJoin();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.newNodeId = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.tokens && message.tokens.length))
                        message.tokens = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tokens.push(reader.uint64());
                    } else
                        message.tokens.push(reader.uint64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestGossipJoin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestGossipJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestGossipJoin} RequestGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestGossipJoin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestGossipJoin message.
     * @function verify
     * @memberof RequestGossipJoin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestGossipJoin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.newNodeId != null && message.hasOwnProperty("newNodeId"))
            if (!$util.isString(message.newNodeId))
                return "newNodeId: string expected";
        if (message.tokens != null && message.hasOwnProperty("tokens")) {
            if (!Array.isArray(message.tokens))
                return "tokens: array expected";
            for (let i = 0; i < message.tokens.length; ++i)
                if (!$util.isInteger(message.tokens[i]) && !(message.tokens[i] && $util.isInteger(message.tokens[i].low) && $util.isInteger(message.tokens[i].high)))
                    return "tokens: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a RequestGossipJoin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestGossipJoin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestGossipJoin} RequestGossipJoin
     */
    RequestGossipJoin.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestGossipJoin)
            return object;
        let message = new $root.RequestGossipJoin();
        if (object.newNodeId != null)
            message.newNodeId = String(object.newNodeId);
        if (object.tokens) {
            if (!Array.isArray(object.tokens))
                throw TypeError(".RequestGossipJoin.tokens: array expected");
            message.tokens = [];
            for (let i = 0; i < object.tokens.length; ++i)
                if ($util.Long)
                    (message.tokens[i] = $util.Long.fromValue(object.tokens[i])).unsigned = true;
                else if (typeof object.tokens[i] === "string")
                    message.tokens[i] = parseInt(object.tokens[i], 10);
                else if (typeof object.tokens[i] === "number")
                    message.tokens[i] = object.tokens[i];
                else if (typeof object.tokens[i] === "object")
                    message.tokens[i] = new $util.LongBits(object.tokens[i].low >>> 0, object.tokens[i].high >>> 0).toNumber(true);
        }
        return message;
    };

    /**
     * Creates a plain object from a RequestGossipJoin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestGossipJoin
     * @static
     * @param {RequestGossipJoin} message RequestGossipJoin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestGossipJoin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.tokens = [];
        if (options.defaults)
            object.newNodeId = "";
        if (message.newNodeId != null && message.hasOwnProperty("newNodeId"))
            object.newNodeId = message.newNodeId;
        if (message.tokens && message.tokens.length) {
            object.tokens = [];
            for (let j = 0; j < message.tokens.length; ++j)
                if (typeof message.tokens[j] === "number")
                    object.tokens[j] = options.longs === String ? String(message.tokens[j]) : message.tokens[j];
                else
                    object.tokens[j] = options.longs === String ? $util.Long.prototype.toString.call(message.tokens[j]) : options.longs === Number ? new $util.LongBits(message.tokens[j].low >>> 0, message.tokens[j].high >>> 0).toNumber(true) : message.tokens[j];
        }
        return object;
    };

    /**
     * Converts this RequestGossipJoin to JSON.
     * @function toJSON
     * @memberof RequestGossipJoin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestGossipJoin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestGossipJoin
     * @function getTypeUrl
     * @memberof RequestGossipJoin
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestGossipJoin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestGossipJoin";
    };

    return RequestGossipJoin;
})();

export const RequestGetHashSpace = $root.RequestGetHashSpace = (() => {

    /**
     * Properties of a RequestGetHashSpace.
     * @exports IRequestGetHashSpace
     * @interface IRequestGetHashSpace
     * @property {number|Long|null} [startHashSpace] RequestGetHashSpace startHashSpace
     * @property {number|Long|null} [endHashSpace] RequestGetHashSpace endHashSpace
     */

    /**
     * Constructs a new RequestGetHashSpace.
     * @exports RequestGetHashSpace
     * @classdesc Represents a RequestGetHashSpace.
     * @implements IRequestGetHashSpace
     * @constructor
     * @param {IRequestGetHashSpace=} [properties] Properties to set
     */
    function RequestGetHashSpace(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestGetHashSpace startHashSpace.
     * @member {number|Long} startHashSpace
     * @memberof RequestGetHashSpace
     * @instance
     */
    RequestGetHashSpace.prototype.startHashSpace = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * RequestGetHashSpace endHashSpace.
     * @member {number|Long} endHashSpace
     * @memberof RequestGetHashSpace
     * @instance
     */
    RequestGetHashSpace.prototype.endHashSpace = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new RequestGetHashSpace instance using the specified properties.
     * @function create
     * @memberof RequestGetHashSpace
     * @static
     * @param {IRequestGetHashSpace=} [properties] Properties to set
     * @returns {RequestGetHashSpace} RequestGetHashSpace instance
     */
    RequestGetHashSpace.create = function create(properties) {
        return new RequestGetHashSpace(properties);
    };

    /**
     * Encodes the specified RequestGetHashSpace message. Does not implicitly {@link RequestGetHashSpace.verify|verify} messages.
     * @function encode
     * @memberof RequestGetHashSpace
     * @static
     * @param {IRequestGetHashSpace} message RequestGetHashSpace message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestGetHashSpace.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.startHashSpace != null && Object.hasOwnProperty.call(message, "startHashSpace"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startHashSpace);
        if (message.endHashSpace != null && Object.hasOwnProperty.call(message, "endHashSpace"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.endHashSpace);
        return writer;
    };

    /**
     * Encodes the specified RequestGetHashSpace message, length delimited. Does not implicitly {@link RequestGetHashSpace.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestGetHashSpace
     * @static
     * @param {IRequestGetHashSpace} message RequestGetHashSpace message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestGetHashSpace.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestGetHashSpace message from the specified reader or buffer.
     * @function decode
     * @memberof RequestGetHashSpace
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestGetHashSpace} RequestGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestGetHashSpace.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestGetHashSpace();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.startHashSpace = reader.uint64();
                    break;
                }
            case 2: {
                    message.endHashSpace = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestGetHashSpace message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestGetHashSpace
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestGetHashSpace} RequestGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestGetHashSpace.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestGetHashSpace message.
     * @function verify
     * @memberof RequestGetHashSpace
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestGetHashSpace.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.startHashSpace != null && message.hasOwnProperty("startHashSpace"))
            if (!$util.isInteger(message.startHashSpace) && !(message.startHashSpace && $util.isInteger(message.startHashSpace.low) && $util.isInteger(message.startHashSpace.high)))
                return "startHashSpace: integer|Long expected";
        if (message.endHashSpace != null && message.hasOwnProperty("endHashSpace"))
            if (!$util.isInteger(message.endHashSpace) && !(message.endHashSpace && $util.isInteger(message.endHashSpace.low) && $util.isInteger(message.endHashSpace.high)))
                return "endHashSpace: integer|Long expected";
        return null;
    };

    /**
     * Creates a RequestGetHashSpace message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestGetHashSpace
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestGetHashSpace} RequestGetHashSpace
     */
    RequestGetHashSpace.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestGetHashSpace)
            return object;
        let message = new $root.RequestGetHashSpace();
        if (object.startHashSpace != null)
            if ($util.Long)
                (message.startHashSpace = $util.Long.fromValue(object.startHashSpace)).unsigned = true;
            else if (typeof object.startHashSpace === "string")
                message.startHashSpace = parseInt(object.startHashSpace, 10);
            else if (typeof object.startHashSpace === "number")
                message.startHashSpace = object.startHashSpace;
            else if (typeof object.startHashSpace === "object")
                message.startHashSpace = new $util.LongBits(object.startHashSpace.low >>> 0, object.startHashSpace.high >>> 0).toNumber(true);
        if (object.endHashSpace != null)
            if ($util.Long)
                (message.endHashSpace = $util.Long.fromValue(object.endHashSpace)).unsigned = true;
            else if (typeof object.endHashSpace === "string")
                message.endHashSpace = parseInt(object.endHashSpace, 10);
            else if (typeof object.endHashSpace === "number")
                message.endHashSpace = object.endHashSpace;
            else if (typeof object.endHashSpace === "object")
                message.endHashSpace = new $util.LongBits(object.endHashSpace.low >>> 0, object.endHashSpace.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a RequestGetHashSpace message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestGetHashSpace
     * @static
     * @param {RequestGetHashSpace} message RequestGetHashSpace
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestGetHashSpace.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.startHashSpace = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.startHashSpace = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.endHashSpace = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endHashSpace = options.longs === String ? "0" : 0;
        }
        if (message.startHashSpace != null && message.hasOwnProperty("startHashSpace"))
            if (typeof message.startHashSpace === "number")
                object.startHashSpace = options.longs === String ? String(message.startHashSpace) : message.startHashSpace;
            else
                object.startHashSpace = options.longs === String ? $util.Long.prototype.toString.call(message.startHashSpace) : options.longs === Number ? new $util.LongBits(message.startHashSpace.low >>> 0, message.startHashSpace.high >>> 0).toNumber(true) : message.startHashSpace;
        if (message.endHashSpace != null && message.hasOwnProperty("endHashSpace"))
            if (typeof message.endHashSpace === "number")
                object.endHashSpace = options.longs === String ? String(message.endHashSpace) : message.endHashSpace;
            else
                object.endHashSpace = options.longs === String ? $util.Long.prototype.toString.call(message.endHashSpace) : options.longs === Number ? new $util.LongBits(message.endHashSpace.low >>> 0, message.endHashSpace.high >>> 0).toNumber(true) : message.endHashSpace;
        return object;
    };

    /**
     * Converts this RequestGetHashSpace to JSON.
     * @function toJSON
     * @memberof RequestGetHashSpace
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestGetHashSpace.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestGetHashSpace
     * @function getTypeUrl
     * @memberof RequestGetHashSpace
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestGetHashSpace.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestGetHashSpace";
    };

    return RequestGetHashSpace;
})();

export const RequestGet = $root.RequestGet = (() => {

    /**
     * Properties of a RequestGet.
     * @exports IRequestGet
     * @interface IRequestGet
     * @property {string|null} [key] RequestGet key
     */

    /**
     * Constructs a new RequestGet.
     * @exports RequestGet
     * @classdesc Represents a RequestGet.
     * @implements IRequestGet
     * @constructor
     * @param {IRequestGet=} [properties] Properties to set
     */
    function RequestGet(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestGet key.
     * @member {string} key
     * @memberof RequestGet
     * @instance
     */
    RequestGet.prototype.key = "";

    /**
     * Creates a new RequestGet instance using the specified properties.
     * @function create
     * @memberof RequestGet
     * @static
     * @param {IRequestGet=} [properties] Properties to set
     * @returns {RequestGet} RequestGet instance
     */
    RequestGet.create = function create(properties) {
        return new RequestGet(properties);
    };

    /**
     * Encodes the specified RequestGet message. Does not implicitly {@link RequestGet.verify|verify} messages.
     * @function encode
     * @memberof RequestGet
     * @static
     * @param {IRequestGet} message RequestGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestGet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        return writer;
    };

    /**
     * Encodes the specified RequestGet message, length delimited. Does not implicitly {@link RequestGet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestGet
     * @static
     * @param {IRequestGet} message RequestGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestGet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestGet message from the specified reader or buffer.
     * @function decode
     * @memberof RequestGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestGet} RequestGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestGet.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestGet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestGet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestGet} RequestGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestGet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestGet message.
     * @function verify
     * @memberof RequestGet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestGet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        return null;
    };

    /**
     * Creates a RequestGet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestGet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestGet} RequestGet
     */
    RequestGet.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestGet)
            return object;
        let message = new $root.RequestGet();
        if (object.key != null)
            message.key = String(object.key);
        return message;
    };

    /**
     * Creates a plain object from a RequestGet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestGet
     * @static
     * @param {RequestGet} message RequestGet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestGet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.key = "";
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        return object;
    };

    /**
     * Converts this RequestGet to JSON.
     * @function toJSON
     * @memberof RequestGet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestGet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestGet
     * @function getTypeUrl
     * @memberof RequestGet
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestGet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestGet";
    };

    return RequestGet;
})();

export const RequestPut = $root.RequestPut = (() => {

    /**
     * Properties of a RequestPut.
     * @exports IRequestPut
     * @interface IRequestPut
     * @property {string|null} [key] RequestPut key
     * @property {Uint8Array|null} [value] RequestPut value
     */

    /**
     * Constructs a new RequestPut.
     * @exports RequestPut
     * @classdesc Represents a RequestPut.
     * @implements IRequestPut
     * @constructor
     * @param {IRequestPut=} [properties] Properties to set
     */
    function RequestPut(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestPut key.
     * @member {string} key
     * @memberof RequestPut
     * @instance
     */
    RequestPut.prototype.key = "";

    /**
     * RequestPut value.
     * @member {Uint8Array} value
     * @memberof RequestPut
     * @instance
     */
    RequestPut.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new RequestPut instance using the specified properties.
     * @function create
     * @memberof RequestPut
     * @static
     * @param {IRequestPut=} [properties] Properties to set
     * @returns {RequestPut} RequestPut instance
     */
    RequestPut.create = function create(properties) {
        return new RequestPut(properties);
    };

    /**
     * Encodes the specified RequestPut message. Does not implicitly {@link RequestPut.verify|verify} messages.
     * @function encode
     * @memberof RequestPut
     * @static
     * @param {IRequestPut} message RequestPut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestPut.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified RequestPut message, length delimited. Does not implicitly {@link RequestPut.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestPut
     * @static
     * @param {IRequestPut} message RequestPut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestPut.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestPut message from the specified reader or buffer.
     * @function decode
     * @memberof RequestPut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestPut} RequestPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestPut.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestPut();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            case 2: {
                    message.value = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestPut message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestPut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestPut} RequestPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestPut.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestPut message.
     * @function verify
     * @memberof RequestPut
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestPut.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates a RequestPut message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestPut
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestPut} RequestPut
     */
    RequestPut.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestPut)
            return object;
        let message = new $root.RequestPut();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length >= 0)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from a RequestPut message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestPut
     * @static
     * @param {RequestPut} message RequestPut
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestPut.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.key = "";
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this RequestPut to JSON.
     * @function toJSON
     * @memberof RequestPut
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestPut.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestPut
     * @function getTypeUrl
     * @memberof RequestPut
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestPut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestPut";
    };

    return RequestPut;
})();

export const RequestDelete = $root.RequestDelete = (() => {

    /**
     * Properties of a RequestDelete.
     * @exports IRequestDelete
     * @interface IRequestDelete
     * @property {string|null} [key] RequestDelete key
     */

    /**
     * Constructs a new RequestDelete.
     * @exports RequestDelete
     * @classdesc Represents a RequestDelete.
     * @implements IRequestDelete
     * @constructor
     * @param {IRequestDelete=} [properties] Properties to set
     */
    function RequestDelete(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestDelete key.
     * @member {string} key
     * @memberof RequestDelete
     * @instance
     */
    RequestDelete.prototype.key = "";

    /**
     * Creates a new RequestDelete instance using the specified properties.
     * @function create
     * @memberof RequestDelete
     * @static
     * @param {IRequestDelete=} [properties] Properties to set
     * @returns {RequestDelete} RequestDelete instance
     */
    RequestDelete.create = function create(properties) {
        return new RequestDelete(properties);
    };

    /**
     * Encodes the specified RequestDelete message. Does not implicitly {@link RequestDelete.verify|verify} messages.
     * @function encode
     * @memberof RequestDelete
     * @static
     * @param {IRequestDelete} message RequestDelete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestDelete.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        return writer;
    };

    /**
     * Encodes the specified RequestDelete message, length delimited. Does not implicitly {@link RequestDelete.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestDelete
     * @static
     * @param {IRequestDelete} message RequestDelete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestDelete.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestDelete message from the specified reader or buffer.
     * @function decode
     * @memberof RequestDelete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestDelete} RequestDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestDelete.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestDelete();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestDelete message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestDelete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestDelete} RequestDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestDelete.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestDelete message.
     * @function verify
     * @memberof RequestDelete
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestDelete.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        return null;
    };

    /**
     * Creates a RequestDelete message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestDelete
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestDelete} RequestDelete
     */
    RequestDelete.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestDelete)
            return object;
        let message = new $root.RequestDelete();
        if (object.key != null)
            message.key = String(object.key);
        return message;
    };

    /**
     * Creates a plain object from a RequestDelete message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestDelete
     * @static
     * @param {RequestDelete} message RequestDelete
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestDelete.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.key = "";
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        return object;
    };

    /**
     * Converts this RequestDelete to JSON.
     * @function toJSON
     * @memberof RequestDelete
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestDelete.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestDelete
     * @function getTypeUrl
     * @memberof RequestDelete
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestDelete";
    };

    return RequestDelete;
})();

export const RequestHas = $root.RequestHas = (() => {

    /**
     * Properties of a RequestHas.
     * @exports IRequestHas
     * @interface IRequestHas
     * @property {string|null} [key] RequestHas key
     */

    /**
     * Constructs a new RequestHas.
     * @exports RequestHas
     * @classdesc Represents a RequestHas.
     * @implements IRequestHas
     * @constructor
     * @param {IRequestHas=} [properties] Properties to set
     */
    function RequestHas(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestHas key.
     * @member {string} key
     * @memberof RequestHas
     * @instance
     */
    RequestHas.prototype.key = "";

    /**
     * Creates a new RequestHas instance using the specified properties.
     * @function create
     * @memberof RequestHas
     * @static
     * @param {IRequestHas=} [properties] Properties to set
     * @returns {RequestHas} RequestHas instance
     */
    RequestHas.create = function create(properties) {
        return new RequestHas(properties);
    };

    /**
     * Encodes the specified RequestHas message. Does not implicitly {@link RequestHas.verify|verify} messages.
     * @function encode
     * @memberof RequestHas
     * @static
     * @param {IRequestHas} message RequestHas message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestHas.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        return writer;
    };

    /**
     * Encodes the specified RequestHas message, length delimited. Does not implicitly {@link RequestHas.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestHas
     * @static
     * @param {IRequestHas} message RequestHas message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestHas.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestHas message from the specified reader or buffer.
     * @function decode
     * @memberof RequestHas
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestHas} RequestHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestHas.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestHas();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestHas message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestHas
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestHas} RequestHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestHas.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestHas message.
     * @function verify
     * @memberof RequestHas
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestHas.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        return null;
    };

    /**
     * Creates a RequestHas message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestHas
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestHas} RequestHas
     */
    RequestHas.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestHas)
            return object;
        let message = new $root.RequestHas();
        if (object.key != null)
            message.key = String(object.key);
        return message;
    };

    /**
     * Creates a plain object from a RequestHas message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestHas
     * @static
     * @param {RequestHas} message RequestHas
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestHas.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.key = "";
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        return object;
    };

    /**
     * Converts this RequestHas to JSON.
     * @function toJSON
     * @memberof RequestHas
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestHas.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestHas
     * @function getTypeUrl
     * @memberof RequestHas
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestHas.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestHas";
    };

    return RequestHas;
})();

export const RequestReplicaPut = $root.RequestReplicaPut = (() => {

    /**
     * Properties of a RequestReplicaPut.
     * @exports IRequestReplicaPut
     * @interface IRequestReplicaPut
     * @property {string|null} [key] RequestReplicaPut key
     * @property {Uint8Array|null} [value] RequestReplicaPut value
     */

    /**
     * Constructs a new RequestReplicaPut.
     * @exports RequestReplicaPut
     * @classdesc Represents a RequestReplicaPut.
     * @implements IRequestReplicaPut
     * @constructor
     * @param {IRequestReplicaPut=} [properties] Properties to set
     */
    function RequestReplicaPut(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestReplicaPut key.
     * @member {string} key
     * @memberof RequestReplicaPut
     * @instance
     */
    RequestReplicaPut.prototype.key = "";

    /**
     * RequestReplicaPut value.
     * @member {Uint8Array} value
     * @memberof RequestReplicaPut
     * @instance
     */
    RequestReplicaPut.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new RequestReplicaPut instance using the specified properties.
     * @function create
     * @memberof RequestReplicaPut
     * @static
     * @param {IRequestReplicaPut=} [properties] Properties to set
     * @returns {RequestReplicaPut} RequestReplicaPut instance
     */
    RequestReplicaPut.create = function create(properties) {
        return new RequestReplicaPut(properties);
    };

    /**
     * Encodes the specified RequestReplicaPut message. Does not implicitly {@link RequestReplicaPut.verify|verify} messages.
     * @function encode
     * @memberof RequestReplicaPut
     * @static
     * @param {IRequestReplicaPut} message RequestReplicaPut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestReplicaPut.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified RequestReplicaPut message, length delimited. Does not implicitly {@link RequestReplicaPut.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestReplicaPut
     * @static
     * @param {IRequestReplicaPut} message RequestReplicaPut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestReplicaPut.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestReplicaPut message from the specified reader or buffer.
     * @function decode
     * @memberof RequestReplicaPut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestReplicaPut} RequestReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestReplicaPut.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestReplicaPut();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            case 2: {
                    message.value = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestReplicaPut message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestReplicaPut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestReplicaPut} RequestReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestReplicaPut.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestReplicaPut message.
     * @function verify
     * @memberof RequestReplicaPut
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestReplicaPut.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates a RequestReplicaPut message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestReplicaPut
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestReplicaPut} RequestReplicaPut
     */
    RequestReplicaPut.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestReplicaPut)
            return object;
        let message = new $root.RequestReplicaPut();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length >= 0)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from a RequestReplicaPut message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestReplicaPut
     * @static
     * @param {RequestReplicaPut} message RequestReplicaPut
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestReplicaPut.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.key = "";
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this RequestReplicaPut to JSON.
     * @function toJSON
     * @memberof RequestReplicaPut
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestReplicaPut.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestReplicaPut
     * @function getTypeUrl
     * @memberof RequestReplicaPut
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestReplicaPut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestReplicaPut";
    };

    return RequestReplicaPut;
})();

export const RequestReplicaGet = $root.RequestReplicaGet = (() => {

    /**
     * Properties of a RequestReplicaGet.
     * @exports IRequestReplicaGet
     * @interface IRequestReplicaGet
     * @property {string|null} [key] RequestReplicaGet key
     */

    /**
     * Constructs a new RequestReplicaGet.
     * @exports RequestReplicaGet
     * @classdesc Represents a RequestReplicaGet.
     * @implements IRequestReplicaGet
     * @constructor
     * @param {IRequestReplicaGet=} [properties] Properties to set
     */
    function RequestReplicaGet(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestReplicaGet key.
     * @member {string} key
     * @memberof RequestReplicaGet
     * @instance
     */
    RequestReplicaGet.prototype.key = "";

    /**
     * Creates a new RequestReplicaGet instance using the specified properties.
     * @function create
     * @memberof RequestReplicaGet
     * @static
     * @param {IRequestReplicaGet=} [properties] Properties to set
     * @returns {RequestReplicaGet} RequestReplicaGet instance
     */
    RequestReplicaGet.create = function create(properties) {
        return new RequestReplicaGet(properties);
    };

    /**
     * Encodes the specified RequestReplicaGet message. Does not implicitly {@link RequestReplicaGet.verify|verify} messages.
     * @function encode
     * @memberof RequestReplicaGet
     * @static
     * @param {IRequestReplicaGet} message RequestReplicaGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestReplicaGet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        return writer;
    };

    /**
     * Encodes the specified RequestReplicaGet message, length delimited. Does not implicitly {@link RequestReplicaGet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestReplicaGet
     * @static
     * @param {IRequestReplicaGet} message RequestReplicaGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestReplicaGet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestReplicaGet message from the specified reader or buffer.
     * @function decode
     * @memberof RequestReplicaGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestReplicaGet} RequestReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestReplicaGet.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestReplicaGet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestReplicaGet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestReplicaGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestReplicaGet} RequestReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestReplicaGet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestReplicaGet message.
     * @function verify
     * @memberof RequestReplicaGet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestReplicaGet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        return null;
    };

    /**
     * Creates a RequestReplicaGet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestReplicaGet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestReplicaGet} RequestReplicaGet
     */
    RequestReplicaGet.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestReplicaGet)
            return object;
        let message = new $root.RequestReplicaGet();
        if (object.key != null)
            message.key = String(object.key);
        return message;
    };

    /**
     * Creates a plain object from a RequestReplicaGet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestReplicaGet
     * @static
     * @param {RequestReplicaGet} message RequestReplicaGet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestReplicaGet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.key = "";
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        return object;
    };

    /**
     * Converts this RequestReplicaGet to JSON.
     * @function toJSON
     * @memberof RequestReplicaGet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestReplicaGet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestReplicaGet
     * @function getTypeUrl
     * @memberof RequestReplicaGet
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestReplicaGet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestReplicaGet";
    };

    return RequestReplicaGet;
})();

export const RequestStoreHint = $root.RequestStoreHint = (() => {

    /**
     * Properties of a RequestStoreHint.
     * @exports IRequestStoreHint
     * @interface IRequestStoreHint
     * @property {string|null} [intendedNode] RequestStoreHint intendedNode
     * @property {string|null} [key] RequestStoreHint key
     * @property {Uint8Array|null} [value] RequestStoreHint value
     */

    /**
     * Constructs a new RequestStoreHint.
     * @exports RequestStoreHint
     * @classdesc Represents a RequestStoreHint.
     * @implements IRequestStoreHint
     * @constructor
     * @param {IRequestStoreHint=} [properties] Properties to set
     */
    function RequestStoreHint(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestStoreHint intendedNode.
     * @member {string} intendedNode
     * @memberof RequestStoreHint
     * @instance
     */
    RequestStoreHint.prototype.intendedNode = "";

    /**
     * RequestStoreHint key.
     * @member {string} key
     * @memberof RequestStoreHint
     * @instance
     */
    RequestStoreHint.prototype.key = "";

    /**
     * RequestStoreHint value.
     * @member {Uint8Array} value
     * @memberof RequestStoreHint
     * @instance
     */
    RequestStoreHint.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new RequestStoreHint instance using the specified properties.
     * @function create
     * @memberof RequestStoreHint
     * @static
     * @param {IRequestStoreHint=} [properties] Properties to set
     * @returns {RequestStoreHint} RequestStoreHint instance
     */
    RequestStoreHint.create = function create(properties) {
        return new RequestStoreHint(properties);
    };

    /**
     * Encodes the specified RequestStoreHint message. Does not implicitly {@link RequestStoreHint.verify|verify} messages.
     * @function encode
     * @memberof RequestStoreHint
     * @static
     * @param {IRequestStoreHint} message RequestStoreHint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestStoreHint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.intendedNode != null && Object.hasOwnProperty.call(message, "intendedNode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.intendedNode);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified RequestStoreHint message, length delimited. Does not implicitly {@link RequestStoreHint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestStoreHint
     * @static
     * @param {IRequestStoreHint} message RequestStoreHint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestStoreHint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestStoreHint message from the specified reader or buffer.
     * @function decode
     * @memberof RequestStoreHint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestStoreHint} RequestStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestStoreHint.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestStoreHint();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.intendedNode = reader.string();
                    break;
                }
            case 2: {
                    message.key = reader.string();
                    break;
                }
            case 3: {
                    message.value = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestStoreHint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestStoreHint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestStoreHint} RequestStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestStoreHint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestStoreHint message.
     * @function verify
     * @memberof RequestStoreHint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestStoreHint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.intendedNode != null && message.hasOwnProperty("intendedNode"))
            if (!$util.isString(message.intendedNode))
                return "intendedNode: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates a RequestStoreHint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestStoreHint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestStoreHint} RequestStoreHint
     */
    RequestStoreHint.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestStoreHint)
            return object;
        let message = new $root.RequestStoreHint();
        if (object.intendedNode != null)
            message.intendedNode = String(object.intendedNode);
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length >= 0)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from a RequestStoreHint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestStoreHint
     * @static
     * @param {RequestStoreHint} message RequestStoreHint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestStoreHint.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.intendedNode = "";
            object.key = "";
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        }
        if (message.intendedNode != null && message.hasOwnProperty("intendedNode"))
            object.intendedNode = message.intendedNode;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this RequestStoreHint to JSON.
     * @function toJSON
     * @memberof RequestStoreHint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestStoreHint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RequestStoreHint
     * @function getTypeUrl
     * @memberof RequestStoreHint
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RequestStoreHint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RequestStoreHint";
    };

    return RequestStoreHint;
})();

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {string|null} [origin] Response origin
     * @property {boolean|null} [ok] Response ok
     * @property {string|null} [error] Response error
     * @property {IResponsePing|null} [ping] Response ping
     * @property {IResponseFetchRing|null} [fetchRing] Response fetchRing
     * @property {IResponseGossipJoin|null} [gossipJoin] Response gossipJoin
     * @property {IResponseGetHashSpace|null} [getHashSpace] Response getHashSpace
     * @property {IResponseGet|null} [get] Response get
     * @property {IResponsePut|null} [put] Response put
     * @property {IResponseDelete|null} ["delete"] Response delete
     * @property {IResponseHas|null} [has] Response has
     * @property {IResponseReplicaPut|null} [replicaPut] Response replicaPut
     * @property {IResponseReplicaGet|null} [replicaGet] Response replicaGet
     * @property {IResponseStoreHint|null} [storeHint] Response storeHint
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response origin.
     * @member {string} origin
     * @memberof Response
     * @instance
     */
    Response.prototype.origin = "";

    /**
     * Response ok.
     * @member {boolean} ok
     * @memberof Response
     * @instance
     */
    Response.prototype.ok = false;

    /**
     * Response error.
     * @member {string} error
     * @memberof Response
     * @instance
     */
    Response.prototype.error = "";

    /**
     * Response ping.
     * @member {IResponsePing|null|undefined} ping
     * @memberof Response
     * @instance
     */
    Response.prototype.ping = null;

    /**
     * Response fetchRing.
     * @member {IResponseFetchRing|null|undefined} fetchRing
     * @memberof Response
     * @instance
     */
    Response.prototype.fetchRing = null;

    /**
     * Response gossipJoin.
     * @member {IResponseGossipJoin|null|undefined} gossipJoin
     * @memberof Response
     * @instance
     */
    Response.prototype.gossipJoin = null;

    /**
     * Response getHashSpace.
     * @member {IResponseGetHashSpace|null|undefined} getHashSpace
     * @memberof Response
     * @instance
     */
    Response.prototype.getHashSpace = null;

    /**
     * Response get.
     * @member {IResponseGet|null|undefined} get
     * @memberof Response
     * @instance
     */
    Response.prototype.get = null;

    /**
     * Response put.
     * @member {IResponsePut|null|undefined} put
     * @memberof Response
     * @instance
     */
    Response.prototype.put = null;

    /**
     * Response delete.
     * @member {IResponseDelete|null|undefined} delete
     * @memberof Response
     * @instance
     */
    Response.prototype["delete"] = null;

    /**
     * Response has.
     * @member {IResponseHas|null|undefined} has
     * @memberof Response
     * @instance
     */
    Response.prototype.has = null;

    /**
     * Response replicaPut.
     * @member {IResponseReplicaPut|null|undefined} replicaPut
     * @memberof Response
     * @instance
     */
    Response.prototype.replicaPut = null;

    /**
     * Response replicaGet.
     * @member {IResponseReplicaGet|null|undefined} replicaGet
     * @memberof Response
     * @instance
     */
    Response.prototype.replicaGet = null;

    /**
     * Response storeHint.
     * @member {IResponseStoreHint|null|undefined} storeHint
     * @memberof Response
     * @instance
     */
    Response.prototype.storeHint = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Response responseType.
     * @member {"ping"|"fetchRing"|"gossipJoin"|"getHashSpace"|"get"|"put"|"delete"|"has"|"replicaPut"|"replicaGet"|"storeHint"|undefined} responseType
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "responseType", {
        get: $util.oneOfGetter($oneOfFields = ["ping", "fetchRing", "gossipJoin", "getHashSpace", "get", "put", "delete", "has", "replicaPut", "replicaGet", "storeHint"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.origin != null && Object.hasOwnProperty.call(message, "origin"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.origin);
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ok);
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
        if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
            $root.ResponsePing.encode(message.ping, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.fetchRing != null && Object.hasOwnProperty.call(message, "fetchRing"))
            $root.ResponseFetchRing.encode(message.fetchRing, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.gossipJoin != null && Object.hasOwnProperty.call(message, "gossipJoin"))
            $root.ResponseGossipJoin.encode(message.gossipJoin, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.getHashSpace != null && Object.hasOwnProperty.call(message, "getHashSpace"))
            $root.ResponseGetHashSpace.encode(message.getHashSpace, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.get != null && Object.hasOwnProperty.call(message, "get"))
            $root.ResponseGet.encode(message.get, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.put != null && Object.hasOwnProperty.call(message, "put"))
            $root.ResponsePut.encode(message.put, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
            $root.ResponseDelete.encode(message["delete"], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.has != null && Object.hasOwnProperty.call(message, "has"))
            $root.ResponseHas.encode(message.has, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.replicaPut != null && Object.hasOwnProperty.call(message, "replicaPut"))
            $root.ResponseReplicaPut.encode(message.replicaPut, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.replicaGet != null && Object.hasOwnProperty.call(message, "replicaGet"))
            $root.ResponseReplicaGet.encode(message.replicaGet, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.storeHint != null && Object.hasOwnProperty.call(message, "storeHint"))
            $root.ResponseStoreHint.encode(message.storeHint, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.origin = reader.string();
                    break;
                }
            case 2: {
                    message.ok = reader.bool();
                    break;
                }
            case 3: {
                    message.error = reader.string();
                    break;
                }
            case 11: {
                    message.ping = $root.ResponsePing.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.fetchRing = $root.ResponseFetchRing.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.gossipJoin = $root.ResponseGossipJoin.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.getHashSpace = $root.ResponseGetHashSpace.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.get = $root.ResponseGet.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.put = $root.ResponsePut.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message["delete"] = $root.ResponseDelete.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.has = $root.ResponseHas.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.replicaPut = $root.ResponseReplicaPut.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.replicaGet = $root.ResponseReplicaGet.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.storeHint = $root.ResponseStoreHint.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.origin != null && message.hasOwnProperty("origin"))
            if (!$util.isString(message.origin))
                return "origin: string expected";
        if (message.ok != null && message.hasOwnProperty("ok"))
            if (typeof message.ok !== "boolean")
                return "ok: boolean expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        if (message.ping != null && message.hasOwnProperty("ping")) {
            properties.responseType = 1;
            {
                let error = $root.ResponsePing.verify(message.ping);
                if (error)
                    return "ping." + error;
            }
        }
        if (message.fetchRing != null && message.hasOwnProperty("fetchRing")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseFetchRing.verify(message.fetchRing);
                if (error)
                    return "fetchRing." + error;
            }
        }
        if (message.gossipJoin != null && message.hasOwnProperty("gossipJoin")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseGossipJoin.verify(message.gossipJoin);
                if (error)
                    return "gossipJoin." + error;
            }
        }
        if (message.getHashSpace != null && message.hasOwnProperty("getHashSpace")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseGetHashSpace.verify(message.getHashSpace);
                if (error)
                    return "getHashSpace." + error;
            }
        }
        if (message.get != null && message.hasOwnProperty("get")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseGet.verify(message.get);
                if (error)
                    return "get." + error;
            }
        }
        if (message.put != null && message.hasOwnProperty("put")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponsePut.verify(message.put);
                if (error)
                    return "put." + error;
            }
        }
        if (message["delete"] != null && message.hasOwnProperty("delete")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseDelete.verify(message["delete"]);
                if (error)
                    return "delete." + error;
            }
        }
        if (message.has != null && message.hasOwnProperty("has")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseHas.verify(message.has);
                if (error)
                    return "has." + error;
            }
        }
        if (message.replicaPut != null && message.hasOwnProperty("replicaPut")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseReplicaPut.verify(message.replicaPut);
                if (error)
                    return "replicaPut." + error;
            }
        }
        if (message.replicaGet != null && message.hasOwnProperty("replicaGet")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseReplicaGet.verify(message.replicaGet);
                if (error)
                    return "replicaGet." + error;
            }
        }
        if (message.storeHint != null && message.hasOwnProperty("storeHint")) {
            if (properties.responseType === 1)
                return "responseType: multiple values";
            properties.responseType = 1;
            {
                let error = $root.ResponseStoreHint.verify(message.storeHint);
                if (error)
                    return "storeHint." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        if (object.origin != null)
            message.origin = String(object.origin);
        if (object.ok != null)
            message.ok = Boolean(object.ok);
        if (object.error != null)
            message.error = String(object.error);
        if (object.ping != null) {
            if (typeof object.ping !== "object")
                throw TypeError(".Response.ping: object expected");
            message.ping = $root.ResponsePing.fromObject(object.ping);
        }
        if (object.fetchRing != null) {
            if (typeof object.fetchRing !== "object")
                throw TypeError(".Response.fetchRing: object expected");
            message.fetchRing = $root.ResponseFetchRing.fromObject(object.fetchRing);
        }
        if (object.gossipJoin != null) {
            if (typeof object.gossipJoin !== "object")
                throw TypeError(".Response.gossipJoin: object expected");
            message.gossipJoin = $root.ResponseGossipJoin.fromObject(object.gossipJoin);
        }
        if (object.getHashSpace != null) {
            if (typeof object.getHashSpace !== "object")
                throw TypeError(".Response.getHashSpace: object expected");
            message.getHashSpace = $root.ResponseGetHashSpace.fromObject(object.getHashSpace);
        }
        if (object.get != null) {
            if (typeof object.get !== "object")
                throw TypeError(".Response.get: object expected");
            message.get = $root.ResponseGet.fromObject(object.get);
        }
        if (object.put != null) {
            if (typeof object.put !== "object")
                throw TypeError(".Response.put: object expected");
            message.put = $root.ResponsePut.fromObject(object.put);
        }
        if (object["delete"] != null) {
            if (typeof object["delete"] !== "object")
                throw TypeError(".Response.delete: object expected");
            message["delete"] = $root.ResponseDelete.fromObject(object["delete"]);
        }
        if (object.has != null) {
            if (typeof object.has !== "object")
                throw TypeError(".Response.has: object expected");
            message.has = $root.ResponseHas.fromObject(object.has);
        }
        if (object.replicaPut != null) {
            if (typeof object.replicaPut !== "object")
                throw TypeError(".Response.replicaPut: object expected");
            message.replicaPut = $root.ResponseReplicaPut.fromObject(object.replicaPut);
        }
        if (object.replicaGet != null) {
            if (typeof object.replicaGet !== "object")
                throw TypeError(".Response.replicaGet: object expected");
            message.replicaGet = $root.ResponseReplicaGet.fromObject(object.replicaGet);
        }
        if (object.storeHint != null) {
            if (typeof object.storeHint !== "object")
                throw TypeError(".Response.storeHint: object expected");
            message.storeHint = $root.ResponseStoreHint.fromObject(object.storeHint);
        }
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.origin = "";
            object.ok = false;
            object.error = "";
        }
        if (message.origin != null && message.hasOwnProperty("origin"))
            object.origin = message.origin;
        if (message.ok != null && message.hasOwnProperty("ok"))
            object.ok = message.ok;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.ping != null && message.hasOwnProperty("ping")) {
            object.ping = $root.ResponsePing.toObject(message.ping, options);
            if (options.oneofs)
                object.responseType = "ping";
        }
        if (message.fetchRing != null && message.hasOwnProperty("fetchRing")) {
            object.fetchRing = $root.ResponseFetchRing.toObject(message.fetchRing, options);
            if (options.oneofs)
                object.responseType = "fetchRing";
        }
        if (message.gossipJoin != null && message.hasOwnProperty("gossipJoin")) {
            object.gossipJoin = $root.ResponseGossipJoin.toObject(message.gossipJoin, options);
            if (options.oneofs)
                object.responseType = "gossipJoin";
        }
        if (message.getHashSpace != null && message.hasOwnProperty("getHashSpace")) {
            object.getHashSpace = $root.ResponseGetHashSpace.toObject(message.getHashSpace, options);
            if (options.oneofs)
                object.responseType = "getHashSpace";
        }
        if (message.get != null && message.hasOwnProperty("get")) {
            object.get = $root.ResponseGet.toObject(message.get, options);
            if (options.oneofs)
                object.responseType = "get";
        }
        if (message.put != null && message.hasOwnProperty("put")) {
            object.put = $root.ResponsePut.toObject(message.put, options);
            if (options.oneofs)
                object.responseType = "put";
        }
        if (message["delete"] != null && message.hasOwnProperty("delete")) {
            object["delete"] = $root.ResponseDelete.toObject(message["delete"], options);
            if (options.oneofs)
                object.responseType = "delete";
        }
        if (message.has != null && message.hasOwnProperty("has")) {
            object.has = $root.ResponseHas.toObject(message.has, options);
            if (options.oneofs)
                object.responseType = "has";
        }
        if (message.replicaPut != null && message.hasOwnProperty("replicaPut")) {
            object.replicaPut = $root.ResponseReplicaPut.toObject(message.replicaPut, options);
            if (options.oneofs)
                object.responseType = "replicaPut";
        }
        if (message.replicaGet != null && message.hasOwnProperty("replicaGet")) {
            object.replicaGet = $root.ResponseReplicaGet.toObject(message.replicaGet, options);
            if (options.oneofs)
                object.responseType = "replicaGet";
        }
        if (message.storeHint != null && message.hasOwnProperty("storeHint")) {
            object.storeHint = $root.ResponseStoreHint.toObject(message.storeHint, options);
            if (options.oneofs)
                object.responseType = "storeHint";
        }
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Response
     * @function getTypeUrl
     * @memberof Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Response";
    };

    return Response;
})();

export const ResponsePing = $root.ResponsePing = (() => {

    /**
     * Properties of a ResponsePing.
     * @exports IResponsePing
     * @interface IResponsePing
     * @property {string|null} [pongMessage] ResponsePing pongMessage
     */

    /**
     * Constructs a new ResponsePing.
     * @exports ResponsePing
     * @classdesc Represents a ResponsePing.
     * @implements IResponsePing
     * @constructor
     * @param {IResponsePing=} [properties] Properties to set
     */
    function ResponsePing(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponsePing pongMessage.
     * @member {string} pongMessage
     * @memberof ResponsePing
     * @instance
     */
    ResponsePing.prototype.pongMessage = "";

    /**
     * Creates a new ResponsePing instance using the specified properties.
     * @function create
     * @memberof ResponsePing
     * @static
     * @param {IResponsePing=} [properties] Properties to set
     * @returns {ResponsePing} ResponsePing instance
     */
    ResponsePing.create = function create(properties) {
        return new ResponsePing(properties);
    };

    /**
     * Encodes the specified ResponsePing message. Does not implicitly {@link ResponsePing.verify|verify} messages.
     * @function encode
     * @memberof ResponsePing
     * @static
     * @param {IResponsePing} message ResponsePing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponsePing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pongMessage != null && Object.hasOwnProperty.call(message, "pongMessage"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.pongMessage);
        return writer;
    };

    /**
     * Encodes the specified ResponsePing message, length delimited. Does not implicitly {@link ResponsePing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponsePing
     * @static
     * @param {IResponsePing} message ResponsePing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponsePing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponsePing message from the specified reader or buffer.
     * @function decode
     * @memberof ResponsePing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponsePing} ResponsePing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponsePing.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePing();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pongMessage = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponsePing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponsePing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponsePing} ResponsePing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponsePing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponsePing message.
     * @function verify
     * @memberof ResponsePing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponsePing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pongMessage != null && message.hasOwnProperty("pongMessage"))
            if (!$util.isString(message.pongMessage))
                return "pongMessage: string expected";
        return null;
    };

    /**
     * Creates a ResponsePing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponsePing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponsePing} ResponsePing
     */
    ResponsePing.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponsePing)
            return object;
        let message = new $root.ResponsePing();
        if (object.pongMessage != null)
            message.pongMessage = String(object.pongMessage);
        return message;
    };

    /**
     * Creates a plain object from a ResponsePing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponsePing
     * @static
     * @param {ResponsePing} message ResponsePing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponsePing.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.pongMessage = "";
        if (message.pongMessage != null && message.hasOwnProperty("pongMessage"))
            object.pongMessage = message.pongMessage;
        return object;
    };

    /**
     * Converts this ResponsePing to JSON.
     * @function toJSON
     * @memberof ResponsePing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponsePing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponsePing
     * @function getTypeUrl
     * @memberof ResponsePing
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponsePing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponsePing";
    };

    return ResponsePing;
})();

export const ResponseFetchRing = $root.ResponseFetchRing = (() => {

    /**
     * Properties of a ResponseFetchRing.
     * @exports IResponseFetchRing
     * @interface IResponseFetchRing
     * @property {IRingView|null} [ringView] ResponseFetchRing ringView
     */

    /**
     * Constructs a new ResponseFetchRing.
     * @exports ResponseFetchRing
     * @classdesc Represents a ResponseFetchRing.
     * @implements IResponseFetchRing
     * @constructor
     * @param {IResponseFetchRing=} [properties] Properties to set
     */
    function ResponseFetchRing(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponseFetchRing ringView.
     * @member {IRingView|null|undefined} ringView
     * @memberof ResponseFetchRing
     * @instance
     */
    ResponseFetchRing.prototype.ringView = null;

    /**
     * Creates a new ResponseFetchRing instance using the specified properties.
     * @function create
     * @memberof ResponseFetchRing
     * @static
     * @param {IResponseFetchRing=} [properties] Properties to set
     * @returns {ResponseFetchRing} ResponseFetchRing instance
     */
    ResponseFetchRing.create = function create(properties) {
        return new ResponseFetchRing(properties);
    };

    /**
     * Encodes the specified ResponseFetchRing message. Does not implicitly {@link ResponseFetchRing.verify|verify} messages.
     * @function encode
     * @memberof ResponseFetchRing
     * @static
     * @param {IResponseFetchRing} message ResponseFetchRing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseFetchRing.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ringView != null && Object.hasOwnProperty.call(message, "ringView"))
            $root.RingView.encode(message.ringView, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ResponseFetchRing message, length delimited. Does not implicitly {@link ResponseFetchRing.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseFetchRing
     * @static
     * @param {IResponseFetchRing} message ResponseFetchRing message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseFetchRing.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseFetchRing message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseFetchRing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseFetchRing} ResponseFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseFetchRing.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseFetchRing();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.ringView = $root.RingView.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseFetchRing message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseFetchRing
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseFetchRing} ResponseFetchRing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseFetchRing.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseFetchRing message.
     * @function verify
     * @memberof ResponseFetchRing
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseFetchRing.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ringView != null && message.hasOwnProperty("ringView")) {
            let error = $root.RingView.verify(message.ringView);
            if (error)
                return "ringView." + error;
        }
        return null;
    };

    /**
     * Creates a ResponseFetchRing message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseFetchRing
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseFetchRing} ResponseFetchRing
     */
    ResponseFetchRing.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseFetchRing)
            return object;
        let message = new $root.ResponseFetchRing();
        if (object.ringView != null) {
            if (typeof object.ringView !== "object")
                throw TypeError(".ResponseFetchRing.ringView: object expected");
            message.ringView = $root.RingView.fromObject(object.ringView);
        }
        return message;
    };

    /**
     * Creates a plain object from a ResponseFetchRing message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseFetchRing
     * @static
     * @param {ResponseFetchRing} message ResponseFetchRing
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseFetchRing.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.ringView = null;
        if (message.ringView != null && message.hasOwnProperty("ringView"))
            object.ringView = $root.RingView.toObject(message.ringView, options);
        return object;
    };

    /**
     * Converts this ResponseFetchRing to JSON.
     * @function toJSON
     * @memberof ResponseFetchRing
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseFetchRing.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseFetchRing
     * @function getTypeUrl
     * @memberof ResponseFetchRing
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseFetchRing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseFetchRing";
    };

    return ResponseFetchRing;
})();

export const ResponseGossipJoin = $root.ResponseGossipJoin = (() => {

    /**
     * Properties of a ResponseGossipJoin.
     * @exports IResponseGossipJoin
     * @interface IResponseGossipJoin
     */

    /**
     * Constructs a new ResponseGossipJoin.
     * @exports ResponseGossipJoin
     * @classdesc Represents a ResponseGossipJoin.
     * @implements IResponseGossipJoin
     * @constructor
     * @param {IResponseGossipJoin=} [properties] Properties to set
     */
    function ResponseGossipJoin(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ResponseGossipJoin instance using the specified properties.
     * @function create
     * @memberof ResponseGossipJoin
     * @static
     * @param {IResponseGossipJoin=} [properties] Properties to set
     * @returns {ResponseGossipJoin} ResponseGossipJoin instance
     */
    ResponseGossipJoin.create = function create(properties) {
        return new ResponseGossipJoin(properties);
    };

    /**
     * Encodes the specified ResponseGossipJoin message. Does not implicitly {@link ResponseGossipJoin.verify|verify} messages.
     * @function encode
     * @memberof ResponseGossipJoin
     * @static
     * @param {IResponseGossipJoin} message ResponseGossipJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseGossipJoin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ResponseGossipJoin message, length delimited. Does not implicitly {@link ResponseGossipJoin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseGossipJoin
     * @static
     * @param {IResponseGossipJoin} message ResponseGossipJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseGossipJoin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseGossipJoin message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseGossipJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseGossipJoin} ResponseGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseGossipJoin.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseGossipJoin();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseGossipJoin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseGossipJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseGossipJoin} ResponseGossipJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseGossipJoin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseGossipJoin message.
     * @function verify
     * @memberof ResponseGossipJoin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseGossipJoin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ResponseGossipJoin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseGossipJoin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseGossipJoin} ResponseGossipJoin
     */
    ResponseGossipJoin.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseGossipJoin)
            return object;
        return new $root.ResponseGossipJoin();
    };

    /**
     * Creates a plain object from a ResponseGossipJoin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseGossipJoin
     * @static
     * @param {ResponseGossipJoin} message ResponseGossipJoin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseGossipJoin.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ResponseGossipJoin to JSON.
     * @function toJSON
     * @memberof ResponseGossipJoin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseGossipJoin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseGossipJoin
     * @function getTypeUrl
     * @memberof ResponseGossipJoin
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseGossipJoin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseGossipJoin";
    };

    return ResponseGossipJoin;
})();

export const ResponseGetHashSpace = $root.ResponseGetHashSpace = (() => {

    /**
     * Properties of a ResponseGetHashSpace.
     * @exports IResponseGetHashSpace
     * @interface IResponseGetHashSpace
     * @property {Object.<string,Uint8Array>|null} [hashSpaceValues] ResponseGetHashSpace hashSpaceValues
     */

    /**
     * Constructs a new ResponseGetHashSpace.
     * @exports ResponseGetHashSpace
     * @classdesc Represents a ResponseGetHashSpace.
     * @implements IResponseGetHashSpace
     * @constructor
     * @param {IResponseGetHashSpace=} [properties] Properties to set
     */
    function ResponseGetHashSpace(properties) {
        this.hashSpaceValues = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponseGetHashSpace hashSpaceValues.
     * @member {Object.<string,Uint8Array>} hashSpaceValues
     * @memberof ResponseGetHashSpace
     * @instance
     */
    ResponseGetHashSpace.prototype.hashSpaceValues = $util.emptyObject;

    /**
     * Creates a new ResponseGetHashSpace instance using the specified properties.
     * @function create
     * @memberof ResponseGetHashSpace
     * @static
     * @param {IResponseGetHashSpace=} [properties] Properties to set
     * @returns {ResponseGetHashSpace} ResponseGetHashSpace instance
     */
    ResponseGetHashSpace.create = function create(properties) {
        return new ResponseGetHashSpace(properties);
    };

    /**
     * Encodes the specified ResponseGetHashSpace message. Does not implicitly {@link ResponseGetHashSpace.verify|verify} messages.
     * @function encode
     * @memberof ResponseGetHashSpace
     * @static
     * @param {IResponseGetHashSpace} message ResponseGetHashSpace message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseGetHashSpace.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hashSpaceValues != null && Object.hasOwnProperty.call(message, "hashSpaceValues"))
            for (let keys = Object.keys(message.hashSpaceValues), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.hashSpaceValues[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ResponseGetHashSpace message, length delimited. Does not implicitly {@link ResponseGetHashSpace.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseGetHashSpace
     * @static
     * @param {IResponseGetHashSpace} message ResponseGetHashSpace message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseGetHashSpace.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseGetHashSpace message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseGetHashSpace
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseGetHashSpace} ResponseGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseGetHashSpace.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseGetHashSpace(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (message.hashSpaceValues === $util.emptyObject)
                        message.hashSpaceValues = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = [];
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.hashSpaceValues[key] = value;
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseGetHashSpace message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseGetHashSpace
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseGetHashSpace} ResponseGetHashSpace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseGetHashSpace.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseGetHashSpace message.
     * @function verify
     * @memberof ResponseGetHashSpace
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseGetHashSpace.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hashSpaceValues != null && message.hasOwnProperty("hashSpaceValues")) {
            if (!$util.isObject(message.hashSpaceValues))
                return "hashSpaceValues: object expected";
            let key = Object.keys(message.hashSpaceValues);
            for (let i = 0; i < key.length; ++i)
                if (!(message.hashSpaceValues[key[i]] && typeof message.hashSpaceValues[key[i]].length === "number" || $util.isString(message.hashSpaceValues[key[i]])))
                    return "hashSpaceValues: buffer{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a ResponseGetHashSpace message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseGetHashSpace
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseGetHashSpace} ResponseGetHashSpace
     */
    ResponseGetHashSpace.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseGetHashSpace)
            return object;
        let message = new $root.ResponseGetHashSpace();
        if (object.hashSpaceValues) {
            if (typeof object.hashSpaceValues !== "object")
                throw TypeError(".ResponseGetHashSpace.hashSpaceValues: object expected");
            message.hashSpaceValues = {};
            for (let keys = Object.keys(object.hashSpaceValues), i = 0; i < keys.length; ++i)
                if (typeof object.hashSpaceValues[keys[i]] === "string")
                    $util.base64.decode(object.hashSpaceValues[keys[i]], message.hashSpaceValues[keys[i]] = $util.newBuffer($util.base64.length(object.hashSpaceValues[keys[i]])), 0);
                else if (object.hashSpaceValues[keys[i]].length >= 0)
                    message.hashSpaceValues[keys[i]] = object.hashSpaceValues[keys[i]];
        }
        return message;
    };

    /**
     * Creates a plain object from a ResponseGetHashSpace message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseGetHashSpace
     * @static
     * @param {ResponseGetHashSpace} message ResponseGetHashSpace
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseGetHashSpace.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults)
            object.hashSpaceValues = {};
        let keys2;
        if (message.hashSpaceValues && (keys2 = Object.keys(message.hashSpaceValues)).length) {
            object.hashSpaceValues = {};
            for (let j = 0; j < keys2.length; ++j)
                object.hashSpaceValues[keys2[j]] = options.bytes === String ? $util.base64.encode(message.hashSpaceValues[keys2[j]], 0, message.hashSpaceValues[keys2[j]].length) : options.bytes === Array ? Array.prototype.slice.call(message.hashSpaceValues[keys2[j]]) : message.hashSpaceValues[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this ResponseGetHashSpace to JSON.
     * @function toJSON
     * @memberof ResponseGetHashSpace
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseGetHashSpace.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseGetHashSpace
     * @function getTypeUrl
     * @memberof ResponseGetHashSpace
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseGetHashSpace.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseGetHashSpace";
    };

    return ResponseGetHashSpace;
})();

export const ResponseGet = $root.ResponseGet = (() => {

    /**
     * Properties of a ResponseGet.
     * @exports IResponseGet
     * @interface IResponseGet
     * @property {Uint8Array|null} [value] ResponseGet value
     */

    /**
     * Constructs a new ResponseGet.
     * @exports ResponseGet
     * @classdesc Represents a ResponseGet.
     * @implements IResponseGet
     * @constructor
     * @param {IResponseGet=} [properties] Properties to set
     */
    function ResponseGet(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponseGet value.
     * @member {Uint8Array} value
     * @memberof ResponseGet
     * @instance
     */
    ResponseGet.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new ResponseGet instance using the specified properties.
     * @function create
     * @memberof ResponseGet
     * @static
     * @param {IResponseGet=} [properties] Properties to set
     * @returns {ResponseGet} ResponseGet instance
     */
    ResponseGet.create = function create(properties) {
        return new ResponseGet(properties);
    };

    /**
     * Encodes the specified ResponseGet message. Does not implicitly {@link ResponseGet.verify|verify} messages.
     * @function encode
     * @memberof ResponseGet
     * @static
     * @param {IResponseGet} message ResponseGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseGet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified ResponseGet message, length delimited. Does not implicitly {@link ResponseGet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseGet
     * @static
     * @param {IResponseGet} message ResponseGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseGet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseGet message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseGet} ResponseGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseGet.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseGet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseGet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseGet} ResponseGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseGet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseGet message.
     * @function verify
     * @memberof ResponseGet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseGet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates a ResponseGet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseGet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseGet} ResponseGet
     */
    ResponseGet.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseGet)
            return object;
        let message = new $root.ResponseGet();
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length >= 0)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from a ResponseGet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseGet
     * @static
     * @param {ResponseGet} message ResponseGet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseGet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this ResponseGet to JSON.
     * @function toJSON
     * @memberof ResponseGet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseGet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseGet
     * @function getTypeUrl
     * @memberof ResponseGet
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseGet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseGet";
    };

    return ResponseGet;
})();

export const ResponsePut = $root.ResponsePut = (() => {

    /**
     * Properties of a ResponsePut.
     * @exports IResponsePut
     * @interface IResponsePut
     */

    /**
     * Constructs a new ResponsePut.
     * @exports ResponsePut
     * @classdesc Represents a ResponsePut.
     * @implements IResponsePut
     * @constructor
     * @param {IResponsePut=} [properties] Properties to set
     */
    function ResponsePut(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ResponsePut instance using the specified properties.
     * @function create
     * @memberof ResponsePut
     * @static
     * @param {IResponsePut=} [properties] Properties to set
     * @returns {ResponsePut} ResponsePut instance
     */
    ResponsePut.create = function create(properties) {
        return new ResponsePut(properties);
    };

    /**
     * Encodes the specified ResponsePut message. Does not implicitly {@link ResponsePut.verify|verify} messages.
     * @function encode
     * @memberof ResponsePut
     * @static
     * @param {IResponsePut} message ResponsePut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponsePut.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ResponsePut message, length delimited. Does not implicitly {@link ResponsePut.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponsePut
     * @static
     * @param {IResponsePut} message ResponsePut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponsePut.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponsePut message from the specified reader or buffer.
     * @function decode
     * @memberof ResponsePut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponsePut} ResponsePut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponsePut.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponsePut();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponsePut message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponsePut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponsePut} ResponsePut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponsePut.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponsePut message.
     * @function verify
     * @memberof ResponsePut
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponsePut.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ResponsePut message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponsePut
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponsePut} ResponsePut
     */
    ResponsePut.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponsePut)
            return object;
        return new $root.ResponsePut();
    };

    /**
     * Creates a plain object from a ResponsePut message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponsePut
     * @static
     * @param {ResponsePut} message ResponsePut
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponsePut.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ResponsePut to JSON.
     * @function toJSON
     * @memberof ResponsePut
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponsePut.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponsePut
     * @function getTypeUrl
     * @memberof ResponsePut
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponsePut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponsePut";
    };

    return ResponsePut;
})();

export const ResponseDelete = $root.ResponseDelete = (() => {

    /**
     * Properties of a ResponseDelete.
     * @exports IResponseDelete
     * @interface IResponseDelete
     */

    /**
     * Constructs a new ResponseDelete.
     * @exports ResponseDelete
     * @classdesc Represents a ResponseDelete.
     * @implements IResponseDelete
     * @constructor
     * @param {IResponseDelete=} [properties] Properties to set
     */
    function ResponseDelete(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ResponseDelete instance using the specified properties.
     * @function create
     * @memberof ResponseDelete
     * @static
     * @param {IResponseDelete=} [properties] Properties to set
     * @returns {ResponseDelete} ResponseDelete instance
     */
    ResponseDelete.create = function create(properties) {
        return new ResponseDelete(properties);
    };

    /**
     * Encodes the specified ResponseDelete message. Does not implicitly {@link ResponseDelete.verify|verify} messages.
     * @function encode
     * @memberof ResponseDelete
     * @static
     * @param {IResponseDelete} message ResponseDelete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseDelete.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ResponseDelete message, length delimited. Does not implicitly {@link ResponseDelete.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseDelete
     * @static
     * @param {IResponseDelete} message ResponseDelete message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseDelete.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseDelete message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseDelete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseDelete} ResponseDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseDelete.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseDelete();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseDelete message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseDelete
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseDelete} ResponseDelete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseDelete.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseDelete message.
     * @function verify
     * @memberof ResponseDelete
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseDelete.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ResponseDelete message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseDelete
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseDelete} ResponseDelete
     */
    ResponseDelete.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseDelete)
            return object;
        return new $root.ResponseDelete();
    };

    /**
     * Creates a plain object from a ResponseDelete message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseDelete
     * @static
     * @param {ResponseDelete} message ResponseDelete
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseDelete.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ResponseDelete to JSON.
     * @function toJSON
     * @memberof ResponseDelete
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseDelete.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseDelete
     * @function getTypeUrl
     * @memberof ResponseDelete
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseDelete";
    };

    return ResponseDelete;
})();

export const ResponseHas = $root.ResponseHas = (() => {

    /**
     * Properties of a ResponseHas.
     * @exports IResponseHas
     * @interface IResponseHas
     * @property {boolean|null} [hasKey] ResponseHas hasKey
     */

    /**
     * Constructs a new ResponseHas.
     * @exports ResponseHas
     * @classdesc Represents a ResponseHas.
     * @implements IResponseHas
     * @constructor
     * @param {IResponseHas=} [properties] Properties to set
     */
    function ResponseHas(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponseHas hasKey.
     * @member {boolean} hasKey
     * @memberof ResponseHas
     * @instance
     */
    ResponseHas.prototype.hasKey = false;

    /**
     * Creates a new ResponseHas instance using the specified properties.
     * @function create
     * @memberof ResponseHas
     * @static
     * @param {IResponseHas=} [properties] Properties to set
     * @returns {ResponseHas} ResponseHas instance
     */
    ResponseHas.create = function create(properties) {
        return new ResponseHas(properties);
    };

    /**
     * Encodes the specified ResponseHas message. Does not implicitly {@link ResponseHas.verify|verify} messages.
     * @function encode
     * @memberof ResponseHas
     * @static
     * @param {IResponseHas} message ResponseHas message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseHas.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hasKey != null && Object.hasOwnProperty.call(message, "hasKey"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hasKey);
        return writer;
    };

    /**
     * Encodes the specified ResponseHas message, length delimited. Does not implicitly {@link ResponseHas.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseHas
     * @static
     * @param {IResponseHas} message ResponseHas message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseHas.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseHas message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseHas
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseHas} ResponseHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseHas.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseHas();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.hasKey = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseHas message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseHas
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseHas} ResponseHas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseHas.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseHas message.
     * @function verify
     * @memberof ResponseHas
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseHas.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hasKey != null && message.hasOwnProperty("hasKey"))
            if (typeof message.hasKey !== "boolean")
                return "hasKey: boolean expected";
        return null;
    };

    /**
     * Creates a ResponseHas message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseHas
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseHas} ResponseHas
     */
    ResponseHas.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseHas)
            return object;
        let message = new $root.ResponseHas();
        if (object.hasKey != null)
            message.hasKey = Boolean(object.hasKey);
        return message;
    };

    /**
     * Creates a plain object from a ResponseHas message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseHas
     * @static
     * @param {ResponseHas} message ResponseHas
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseHas.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.hasKey = false;
        if (message.hasKey != null && message.hasOwnProperty("hasKey"))
            object.hasKey = message.hasKey;
        return object;
    };

    /**
     * Converts this ResponseHas to JSON.
     * @function toJSON
     * @memberof ResponseHas
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseHas.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseHas
     * @function getTypeUrl
     * @memberof ResponseHas
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseHas.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseHas";
    };

    return ResponseHas;
})();

export const ResponseReplicaPut = $root.ResponseReplicaPut = (() => {

    /**
     * Properties of a ResponseReplicaPut.
     * @exports IResponseReplicaPut
     * @interface IResponseReplicaPut
     */

    /**
     * Constructs a new ResponseReplicaPut.
     * @exports ResponseReplicaPut
     * @classdesc Represents a ResponseReplicaPut.
     * @implements IResponseReplicaPut
     * @constructor
     * @param {IResponseReplicaPut=} [properties] Properties to set
     */
    function ResponseReplicaPut(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ResponseReplicaPut instance using the specified properties.
     * @function create
     * @memberof ResponseReplicaPut
     * @static
     * @param {IResponseReplicaPut=} [properties] Properties to set
     * @returns {ResponseReplicaPut} ResponseReplicaPut instance
     */
    ResponseReplicaPut.create = function create(properties) {
        return new ResponseReplicaPut(properties);
    };

    /**
     * Encodes the specified ResponseReplicaPut message. Does not implicitly {@link ResponseReplicaPut.verify|verify} messages.
     * @function encode
     * @memberof ResponseReplicaPut
     * @static
     * @param {IResponseReplicaPut} message ResponseReplicaPut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseReplicaPut.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ResponseReplicaPut message, length delimited. Does not implicitly {@link ResponseReplicaPut.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseReplicaPut
     * @static
     * @param {IResponseReplicaPut} message ResponseReplicaPut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseReplicaPut.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseReplicaPut message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseReplicaPut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseReplicaPut} ResponseReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseReplicaPut.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseReplicaPut();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseReplicaPut message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseReplicaPut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseReplicaPut} ResponseReplicaPut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseReplicaPut.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseReplicaPut message.
     * @function verify
     * @memberof ResponseReplicaPut
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseReplicaPut.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ResponseReplicaPut message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseReplicaPut
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseReplicaPut} ResponseReplicaPut
     */
    ResponseReplicaPut.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseReplicaPut)
            return object;
        return new $root.ResponseReplicaPut();
    };

    /**
     * Creates a plain object from a ResponseReplicaPut message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseReplicaPut
     * @static
     * @param {ResponseReplicaPut} message ResponseReplicaPut
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseReplicaPut.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ResponseReplicaPut to JSON.
     * @function toJSON
     * @memberof ResponseReplicaPut
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseReplicaPut.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseReplicaPut
     * @function getTypeUrl
     * @memberof ResponseReplicaPut
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseReplicaPut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseReplicaPut";
    };

    return ResponseReplicaPut;
})();

export const ResponseReplicaGet = $root.ResponseReplicaGet = (() => {

    /**
     * Properties of a ResponseReplicaGet.
     * @exports IResponseReplicaGet
     * @interface IResponseReplicaGet
     * @property {Uint8Array|null} [value] ResponseReplicaGet value
     */

    /**
     * Constructs a new ResponseReplicaGet.
     * @exports ResponseReplicaGet
     * @classdesc Represents a ResponseReplicaGet.
     * @implements IResponseReplicaGet
     * @constructor
     * @param {IResponseReplicaGet=} [properties] Properties to set
     */
    function ResponseReplicaGet(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResponseReplicaGet value.
     * @member {Uint8Array} value
     * @memberof ResponseReplicaGet
     * @instance
     */
    ResponseReplicaGet.prototype.value = $util.newBuffer([]);

    /**
     * Creates a new ResponseReplicaGet instance using the specified properties.
     * @function create
     * @memberof ResponseReplicaGet
     * @static
     * @param {IResponseReplicaGet=} [properties] Properties to set
     * @returns {ResponseReplicaGet} ResponseReplicaGet instance
     */
    ResponseReplicaGet.create = function create(properties) {
        return new ResponseReplicaGet(properties);
    };

    /**
     * Encodes the specified ResponseReplicaGet message. Does not implicitly {@link ResponseReplicaGet.verify|verify} messages.
     * @function encode
     * @memberof ResponseReplicaGet
     * @static
     * @param {IResponseReplicaGet} message ResponseReplicaGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseReplicaGet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
        return writer;
    };

    /**
     * Encodes the specified ResponseReplicaGet message, length delimited. Does not implicitly {@link ResponseReplicaGet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseReplicaGet
     * @static
     * @param {IResponseReplicaGet} message ResponseReplicaGet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseReplicaGet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseReplicaGet message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseReplicaGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseReplicaGet} ResponseReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseReplicaGet.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseReplicaGet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseReplicaGet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseReplicaGet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseReplicaGet} ResponseReplicaGet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseReplicaGet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseReplicaGet message.
     * @function verify
     * @memberof ResponseReplicaGet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseReplicaGet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
        return null;
    };

    /**
     * Creates a ResponseReplicaGet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseReplicaGet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseReplicaGet} ResponseReplicaGet
     */
    ResponseReplicaGet.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseReplicaGet)
            return object;
        let message = new $root.ResponseReplicaGet();
        if (object.value != null)
            if (typeof object.value === "string")
                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length >= 0)
                message.value = object.value;
        return message;
    };

    /**
     * Creates a plain object from a ResponseReplicaGet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseReplicaGet
     * @static
     * @param {ResponseReplicaGet} message ResponseReplicaGet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseReplicaGet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.value = "";
            else {
                object.value = [];
                if (options.bytes !== Array)
                    object.value = $util.newBuffer(object.value);
            }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
        return object;
    };

    /**
     * Converts this ResponseReplicaGet to JSON.
     * @function toJSON
     * @memberof ResponseReplicaGet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseReplicaGet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseReplicaGet
     * @function getTypeUrl
     * @memberof ResponseReplicaGet
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseReplicaGet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseReplicaGet";
    };

    return ResponseReplicaGet;
})();

export const ResponseStoreHint = $root.ResponseStoreHint = (() => {

    /**
     * Properties of a ResponseStoreHint.
     * @exports IResponseStoreHint
     * @interface IResponseStoreHint
     */

    /**
     * Constructs a new ResponseStoreHint.
     * @exports ResponseStoreHint
     * @classdesc Represents a ResponseStoreHint.
     * @implements IResponseStoreHint
     * @constructor
     * @param {IResponseStoreHint=} [properties] Properties to set
     */
    function ResponseStoreHint(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ResponseStoreHint instance using the specified properties.
     * @function create
     * @memberof ResponseStoreHint
     * @static
     * @param {IResponseStoreHint=} [properties] Properties to set
     * @returns {ResponseStoreHint} ResponseStoreHint instance
     */
    ResponseStoreHint.create = function create(properties) {
        return new ResponseStoreHint(properties);
    };

    /**
     * Encodes the specified ResponseStoreHint message. Does not implicitly {@link ResponseStoreHint.verify|verify} messages.
     * @function encode
     * @memberof ResponseStoreHint
     * @static
     * @param {IResponseStoreHint} message ResponseStoreHint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseStoreHint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ResponseStoreHint message, length delimited. Does not implicitly {@link ResponseStoreHint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResponseStoreHint
     * @static
     * @param {IResponseStoreHint} message ResponseStoreHint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResponseStoreHint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResponseStoreHint message from the specified reader or buffer.
     * @function decode
     * @memberof ResponseStoreHint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResponseStoreHint} ResponseStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseStoreHint.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResponseStoreHint();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResponseStoreHint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResponseStoreHint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResponseStoreHint} ResponseStoreHint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResponseStoreHint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResponseStoreHint message.
     * @function verify
     * @memberof ResponseStoreHint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResponseStoreHint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ResponseStoreHint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResponseStoreHint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResponseStoreHint} ResponseStoreHint
     */
    ResponseStoreHint.fromObject = function fromObject(object) {
        if (object instanceof $root.ResponseStoreHint)
            return object;
        return new $root.ResponseStoreHint();
    };

    /**
     * Creates a plain object from a ResponseStoreHint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResponseStoreHint
     * @static
     * @param {ResponseStoreHint} message ResponseStoreHint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResponseStoreHint.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ResponseStoreHint to JSON.
     * @function toJSON
     * @memberof ResponseStoreHint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResponseStoreHint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResponseStoreHint
     * @function getTypeUrl
     * @memberof ResponseStoreHint
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResponseStoreHint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResponseStoreHint";
    };

    return ResponseStoreHint;
})();

export { $root as default };
