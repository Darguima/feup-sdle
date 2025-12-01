/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ShoppingListItem = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShoppingListItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        var message = new $root.ShoppingListItem();
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
        var object = {};
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

$root.ShoppingList = (function() {

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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            for (var i = 0; i < message.items.length; ++i)
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ShoppingList();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
            for (var i = 0; i < message.items.length; ++i) {
                var error = $root.ShoppingListItem.verify(message.items[i]);
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
        var message = new $root.ShoppingList();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.items) {
            if (!Array.isArray(object.items))
                throw TypeError(".ShoppingList.items: array expected");
            message.items = [];
            for (var i = 0; i < object.items.length; ++i) {
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
        var object = {};
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
            for (var j = 0; j < message.items.length; ++j)
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

module.exports = $root;
