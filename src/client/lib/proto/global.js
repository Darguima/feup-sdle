/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Entity = $root.Entity = (() => {

    /**
     * Properties of an Entity.
     * @exports IEntity
     * @interface IEntity
     * @property {IShoppingList|null} [shoppingList] Entity shoppingList
     * @property {IShoppingListItem|null} [shoppingListItem] Entity shoppingListItem
     */

    /**
     * Constructs a new Entity.
     * @exports Entity
     * @classdesc Represents an Entity.
     * @implements IEntity
     * @constructor
     * @param {IEntity=} [properties] Properties to set
     */
    function Entity(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Entity shoppingList.
     * @member {IShoppingList|null|undefined} shoppingList
     * @memberof Entity
     * @instance
     */
    Entity.prototype.shoppingList = null;

    /**
     * Entity shoppingListItem.
     * @member {IShoppingListItem|null|undefined} shoppingListItem
     * @memberof Entity
     * @instance
     */
    Entity.prototype.shoppingListItem = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Entity payload.
     * @member {"shoppingList"|"shoppingListItem"|undefined} payload
     * @memberof Entity
     * @instance
     */
    Object.defineProperty(Entity.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["shoppingList", "shoppingListItem"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Entity instance using the specified properties.
     * @function create
     * @memberof Entity
     * @static
     * @param {IEntity=} [properties] Properties to set
     * @returns {Entity} Entity instance
     */
    Entity.create = function create(properties) {
        return new Entity(properties);
    };

    /**
     * Encodes the specified Entity message. Does not implicitly {@link Entity.verify|verify} messages.
     * @function encode
     * @memberof Entity
     * @static
     * @param {IEntity} message Entity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Entity.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.shoppingList != null && Object.hasOwnProperty.call(message, "shoppingList"))
            $root.ShoppingList.encode(message.shoppingList, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.shoppingListItem != null && Object.hasOwnProperty.call(message, "shoppingListItem"))
            $root.ShoppingListItem.encode(message.shoppingListItem, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Entity message, length delimited. Does not implicitly {@link Entity.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Entity
     * @static
     * @param {IEntity} message Entity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Entity.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Entity message from the specified reader or buffer.
     * @function decode
     * @memberof Entity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Entity} Entity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Entity.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Entity();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.shoppingList = $root.ShoppingList.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.shoppingListItem = $root.ShoppingListItem.decode(reader, reader.uint32());
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
     * Decodes an Entity message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Entity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Entity} Entity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Entity.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Entity message.
     * @function verify
     * @memberof Entity
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Entity.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.shoppingList != null && message.hasOwnProperty("shoppingList")) {
            properties.payload = 1;
            {
                let error = $root.ShoppingList.verify(message.shoppingList);
                if (error)
                    return "shoppingList." + error;
            }
        }
        if (message.shoppingListItem != null && message.hasOwnProperty("shoppingListItem")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.ShoppingListItem.verify(message.shoppingListItem);
                if (error)
                    return "shoppingListItem." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Entity
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Entity} Entity
     */
    Entity.fromObject = function fromObject(object) {
        if (object instanceof $root.Entity)
            return object;
        let message = new $root.Entity();
        if (object.shoppingList != null) {
            if (typeof object.shoppingList !== "object")
                throw TypeError(".Entity.shoppingList: object expected");
            message.shoppingList = $root.ShoppingList.fromObject(object.shoppingList);
        }
        if (object.shoppingListItem != null) {
            if (typeof object.shoppingListItem !== "object")
                throw TypeError(".Entity.shoppingListItem: object expected");
            message.shoppingListItem = $root.ShoppingListItem.fromObject(object.shoppingListItem);
        }
        return message;
    };

    /**
     * Creates a plain object from an Entity message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Entity
     * @static
     * @param {Entity} message Entity
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Entity.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.shoppingList != null && message.hasOwnProperty("shoppingList")) {
            object.shoppingList = $root.ShoppingList.toObject(message.shoppingList, options);
            if (options.oneofs)
                object.payload = "shoppingList";
        }
        if (message.shoppingListItem != null && message.hasOwnProperty("shoppingListItem")) {
            object.shoppingListItem = $root.ShoppingListItem.toObject(message.shoppingListItem, options);
            if (options.oneofs)
                object.payload = "shoppingListItem";
        }
        return object;
    };

    /**
     * Converts this Entity to JSON.
     * @function toJSON
     * @memberof Entity
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Entity.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Entity
     * @function getTypeUrl
     * @memberof Entity
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Entity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Entity";
    };

    return Entity;
})();

export const ShoppingListItem = $root.ShoppingListItem = (() => {

    /**
     * Properties of a ShoppingListItem.
     * @exports IShoppingListItem
     * @interface IShoppingListItem
     * @property {string|null} [id] ShoppingListItem id
     * @property {string|null} [name] ShoppingListItem name
     * @property {number|null} [totalQuantity] ShoppingListItem totalQuantity
     * @property {number|null} [acquiredQuantity] ShoppingListItem acquiredQuantity
     */

    /**
     * Constructs a new ShoppingListItem.
     * @exports ShoppingListItem
     * @classdesc Represents a ShoppingListItem.
     * @implements IShoppingListItem
     * @constructor
     * @param {IShoppingListItem=} [properties] Properties to set
     */
    function ShoppingListItem(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ShoppingListItem id.
     * @member {string} id
     * @memberof ShoppingListItem
     * @instance
     */
    ShoppingListItem.prototype.id = "";

    /**
     * ShoppingListItem name.
     * @member {string} name
     * @memberof ShoppingListItem
     * @instance
     */
    ShoppingListItem.prototype.name = "";

    /**
     * ShoppingListItem totalQuantity.
     * @member {number} totalQuantity
     * @memberof ShoppingListItem
     * @instance
     */
    ShoppingListItem.prototype.totalQuantity = 0;

    /**
     * ShoppingListItem acquiredQuantity.
     * @member {number} acquiredQuantity
     * @memberof ShoppingListItem
     * @instance
     */
    ShoppingListItem.prototype.acquiredQuantity = 0;

    /**
     * Creates a new ShoppingListItem instance using the specified properties.
     * @function create
     * @memberof ShoppingListItem
     * @static
     * @param {IShoppingListItem=} [properties] Properties to set
     * @returns {ShoppingListItem} ShoppingListItem instance
     */
    ShoppingListItem.create = function create(properties) {
        return new ShoppingListItem(properties);
    };

    /**
     * Encodes the specified ShoppingListItem message. Does not implicitly {@link ShoppingListItem.verify|verify} messages.
     * @function encode
     * @memberof ShoppingListItem
     * @static
     * @param {IShoppingListItem} message ShoppingListItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShoppingListItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.totalQuantity != null && Object.hasOwnProperty.call(message, "totalQuantity"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalQuantity);
        if (message.acquiredQuantity != null && Object.hasOwnProperty.call(message, "acquiredQuantity"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.acquiredQuantity);
        return writer;
    };

    /**
     * Encodes the specified ShoppingListItem message, length delimited. Does not implicitly {@link ShoppingListItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ShoppingListItem
     * @static
     * @param {IShoppingListItem} message ShoppingListItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ShoppingListItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ShoppingListItem message from the specified reader or buffer.
     * @function decode
     * @memberof ShoppingListItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ShoppingListItem} ShoppingListItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShoppingListItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShoppingListItem();
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
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.totalQuantity = reader.int32();
                    break;
                }
            case 4: {
                    message.acquiredQuantity = reader.int32();
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
     * Decodes a ShoppingListItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ShoppingListItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ShoppingListItem} ShoppingListItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ShoppingListItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ShoppingListItem message.
     * @function verify
     * @memberof ShoppingListItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ShoppingListItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
            if (!$util.isInteger(message.totalQuantity))
                return "totalQuantity: integer expected";
        if (message.acquiredQuantity != null && message.hasOwnProperty("acquiredQuantity"))
            if (!$util.isInteger(message.acquiredQuantity))
                return "acquiredQuantity: integer expected";
        return null;
    };

    /**
     * Creates a ShoppingListItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ShoppingListItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ShoppingListItem} ShoppingListItem
     */
    ShoppingListItem.fromObject = function fromObject(object) {
        if (object instanceof $root.ShoppingListItem)
            return object;
        let message = new $root.ShoppingListItem();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.totalQuantity != null)
            message.totalQuantity = object.totalQuantity | 0;
        if (object.acquiredQuantity != null)
            message.acquiredQuantity = object.acquiredQuantity | 0;
        return message;
    };

    /**
     * Creates a plain object from a ShoppingListItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ShoppingListItem
     * @static
     * @param {ShoppingListItem} message ShoppingListItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ShoppingListItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.totalQuantity = 0;
            object.acquiredQuantity = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
            object.totalQuantity = message.totalQuantity;
        if (message.acquiredQuantity != null && message.hasOwnProperty("acquiredQuantity"))
            object.acquiredQuantity = message.acquiredQuantity;
        return object;
    };

    /**
     * Converts this ShoppingListItem to JSON.
     * @function toJSON
     * @memberof ShoppingListItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ShoppingListItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ShoppingListItem
     * @function getTypeUrl
     * @memberof ShoppingListItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ShoppingListItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ShoppingListItem";
    };

    return ShoppingListItem;
})();

export const ShoppingList = $root.ShoppingList = (() => {

    /**
     * Properties of a ShoppingList.
     * @exports IShoppingList
     * @interface IShoppingList
     * @property {string|null} [id] ShoppingList id
     * @property {string|null} [name] ShoppingList name
     * @property {Array.<IShoppingListItem>|null} [items] ShoppingList items
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
        this.items = [];
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
     * @member {string} name
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.name = "";

    /**
     * ShoppingList items.
     * @member {Array.<IShoppingListItem>} items
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.items = $util.emptyArray;

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
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.ShoppingListItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShoppingList();
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
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.ShoppingListItem.decode(reader, reader.uint32()));
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
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.items != null && message.hasOwnProperty("items")) {
            if (!Array.isArray(message.items))
                return "items: array expected";
            for (let i = 0; i < message.items.length; ++i) {
                let error = $root.ShoppingListItem.verify(message.items[i]);
                if (error)
                    return "items." + error;
            }
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
        if (object.name != null)
            message.name = String(object.name);
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".ShoppingList.items: array expected");
            message.items = [];
            for (let i = 0; i < object.items.length; ++i) {
                if (typeof object.items[i] !== "object")
                    throw TypeError(".ShoppingList.items: object expected");
                message.items[i] = $root.ShoppingListItem.fromObject(object.items[i]);
            }
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
        if (options.arrays || options.defaults)
            object.items = [];
        if (options.defaults) {
            object.id = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.items && message.items.length) {
            object.items = [];
            for (let j = 0; j < message.items.length; ++j)
                object.items[j] = $root.ShoppingListItem.toObject(message.items[j], options);
        }
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

export { $root as default };
