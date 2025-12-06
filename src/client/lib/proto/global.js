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

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Entity payload.
     * @member {"shoppingList"|undefined} payload
     * @memberof Entity
     * @instance
     */
    Object.defineProperty(Entity.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["shoppingList"]),
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

export const ShoppingItem = $root.ShoppingItem = (() => {

    /**
     * Properties of a ShoppingItem.
     * @exports IShoppingItem
     * @interface IShoppingItem
     * @property {string|null} [name] ShoppingItem name
     * @property {number|null} [totalQuantity] ShoppingItem totalQuantity
     * @property {number|null} [acquiredQuantity] ShoppingItem acquiredQuantity
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
     * @member {string} name
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.name = "";

    /**
     * ShoppingItem totalQuantity.
     * @member {number} totalQuantity
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.totalQuantity = 0;

    /**
     * ShoppingItem acquiredQuantity.
     * @member {number} acquiredQuantity
     * @memberof ShoppingItem
     * @instance
     */
    ShoppingItem.prototype.acquiredQuantity = 0;

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
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.totalQuantity != null && Object.hasOwnProperty.call(message, "totalQuantity"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalQuantity);
        if (message.acquiredQuantity != null && Object.hasOwnProperty.call(message, "acquiredQuantity"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.acquiredQuantity);
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
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.totalQuantity = reader.int32();
                    break;
                }
            case 3: {
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
        if (object.name != null)
            message.name = String(object.name);
        if (object.totalQuantity != null)
            message.totalQuantity = object.totalQuantity | 0;
        if (object.acquiredQuantity != null)
            message.acquiredQuantity = object.acquiredQuantity | 0;
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
            object.name = "";
            object.totalQuantity = 0;
            object.acquiredQuantity = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.totalQuantity != null && message.hasOwnProperty("totalQuantity"))
            object.totalQuantity = message.totalQuantity;
        if (message.acquiredQuantity != null && message.hasOwnProperty("acquiredQuantity"))
            object.acquiredQuantity = message.acquiredQuantity;
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
     * @property {string|null} [name] ShoppingList name
     * @property {Object.<string,IShoppingItem>|null} [items] ShoppingList items
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
     * @member {string} name
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.name = "";

    /**
     * ShoppingList items.
     * @member {Object.<string,IShoppingItem>} items
     * @memberof ShoppingList
     * @instance
     */
    ShoppingList.prototype.items = $util.emptyObject;

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
        if (message.items != null && Object.hasOwnProperty.call(message, "items"))
            for (let keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.ShoppingItem.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
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
                    message.name = reader.string();
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
            if (!$util.isObject(message.items))
                return "items: object expected";
            let key = Object.keys(message.items);
            for (let i = 0; i < key.length; ++i) {
                let error = $root.ShoppingItem.verify(message.items[key[i]]);
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
            if (typeof object.items !== "object")
                throw TypeError(".ShoppingList.items: object expected");
            message.items = {};
            for (let keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                if (typeof object.items[keys[i]] !== "object")
                    throw TypeError(".ShoppingList.items: object expected");
                message.items[keys[i]] = $root.ShoppingItem.fromObject(object.items[keys[i]]);
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
        if (options.objects || options.defaults)
            object.items = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        let keys2;
        if (message.items && (keys2 = Object.keys(message.items)).length) {
            object.items = {};
            for (let j = 0; j < keys2.length; ++j)
                object.items[keys2[j]] = $root.ShoppingItem.toObject(message.items[keys2[j]], options);
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
