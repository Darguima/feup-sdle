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

export { $root as default };
