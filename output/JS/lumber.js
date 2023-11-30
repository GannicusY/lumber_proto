/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.lumber || ($protobuf.roots.lumber = {});

$root.lumber = (function() {

    /**
     * Namespace lumber.
     * @exports lumber
     * @namespace
     */
    var lumber = {};

    lumber.DataTable = (function() {

        /**
         * Namespace DataTable.
         * @memberof lumber
         * @namespace
         */
        var DataTable = {};

        DataTable.UserAxe = (function() {

            /**
             * Properties of a UserAxe.
             * @memberof lumber.DataTable
             * @interface IUserAxe
             * @property {lumber.Enum.EAxeQuality|null} [quality] UserAxe quality
             * @property {number|null} [level] UserAxe level
             * @property {number|null} [burnish] UserAxe burnish
             * @property {number|null} [fail] UserAxe fail
             */

            /**
             * Constructs a new UserAxe.
             * @memberof lumber.DataTable
             * @classdesc Represents a UserAxe.
             * @implements IUserAxe
             * @constructor
             * @param {lumber.DataTable.IUserAxe=} [properties] Properties to set
             */
            function UserAxe(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserAxe quality.
             * @member {lumber.Enum.EAxeQuality} quality
             * @memberof lumber.DataTable.UserAxe
             * @instance
             */
            UserAxe.prototype.quality = 0;

            /**
             * UserAxe level.
             * @member {number} level
             * @memberof lumber.DataTable.UserAxe
             * @instance
             */
            UserAxe.prototype.level = 0;

            /**
             * UserAxe burnish.
             * @member {number} burnish
             * @memberof lumber.DataTable.UserAxe
             * @instance
             */
            UserAxe.prototype.burnish = 0;

            /**
             * UserAxe fail.
             * @member {number} fail
             * @memberof lumber.DataTable.UserAxe
             * @instance
             */
            UserAxe.prototype.fail = 0;

            /**
             * Creates a new UserAxe instance using the specified properties.
             * @function create
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {lumber.DataTable.IUserAxe=} [properties] Properties to set
             * @returns {lumber.DataTable.UserAxe} UserAxe instance
             */
            UserAxe.create = function create(properties) {
                return new UserAxe(properties);
            };

            /**
             * Encodes the specified UserAxe message. Does not implicitly {@link lumber.DataTable.UserAxe.verify|verify} messages.
             * @function encode
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {lumber.DataTable.IUserAxe} message UserAxe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAxe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.quality);
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
                if (message.burnish != null && Object.hasOwnProperty.call(message, "burnish"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.burnish);
                if (message.fail != null && Object.hasOwnProperty.call(message, "fail"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fail);
                return writer;
            };

            /**
             * Encodes the specified UserAxe message, length delimited. Does not implicitly {@link lumber.DataTable.UserAxe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {lumber.DataTable.IUserAxe} message UserAxe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAxe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserAxe message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.DataTable.UserAxe} UserAxe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAxe.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.DataTable.UserAxe();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.quality = reader.int32();
                            break;
                        }
                    case 2: {
                            message.level = reader.int32();
                            break;
                        }
                    case 3: {
                            message.burnish = reader.int32();
                            break;
                        }
                    case 4: {
                            message.fail = reader.int32();
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
             * Decodes a UserAxe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.DataTable.UserAxe} UserAxe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAxe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserAxe message.
             * @function verify
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserAxe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quality != null && message.hasOwnProperty("quality"))
                    switch (message.quality) {
                    default:
                        return "quality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.burnish != null && message.hasOwnProperty("burnish"))
                    if (!$util.isInteger(message.burnish))
                        return "burnish: integer expected";
                if (message.fail != null && message.hasOwnProperty("fail"))
                    if (!$util.isInteger(message.fail))
                        return "fail: integer expected";
                return null;
            };

            /**
             * Creates a UserAxe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.DataTable.UserAxe} UserAxe
             */
            UserAxe.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.DataTable.UserAxe)
                    return object;
                var message = new $root.lumber.DataTable.UserAxe();
                switch (object.quality) {
                default:
                    if (typeof object.quality === "number") {
                        message.quality = object.quality;
                        break;
                    }
                    break;
                case "Iron":
                case 0:
                    message.quality = 0;
                    break;
                case "Silver":
                case 1:
                    message.quality = 1;
                    break;
                case "Golden":
                case 2:
                    message.quality = 2;
                    break;
                }
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.burnish != null)
                    message.burnish = object.burnish | 0;
                if (object.fail != null)
                    message.fail = object.fail | 0;
                return message;
            };

            /**
             * Creates a plain object from a UserAxe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {lumber.DataTable.UserAxe} message UserAxe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserAxe.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.quality = options.enums === String ? "Iron" : 0;
                    object.level = 0;
                    object.burnish = 0;
                    object.fail = 0;
                }
                if (message.quality != null && message.hasOwnProperty("quality"))
                    object.quality = options.enums === String ? $root.lumber.Enum.EAxeQuality[message.quality] === undefined ? message.quality : $root.lumber.Enum.EAxeQuality[message.quality] : message.quality;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.burnish != null && message.hasOwnProperty("burnish"))
                    object.burnish = message.burnish;
                if (message.fail != null && message.hasOwnProperty("fail"))
                    object.fail = message.fail;
                return object;
            };

            /**
             * Converts this UserAxe to JSON.
             * @function toJSON
             * @memberof lumber.DataTable.UserAxe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserAxe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserAxe
             * @function getTypeUrl
             * @memberof lumber.DataTable.UserAxe
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserAxe.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.DataTable.UserAxe";
            };

            return UserAxe;
        })();

        DataTable.UserData = (function() {

            /**
             * Properties of a UserData.
             * @memberof lumber.DataTable
             * @interface IUserData
             * @property {lumber.DataTable.IUserTree|null} [tree] UserData tree
             * @property {Array.<lumber.DataTable.IUserAxe>|null} [axes] UserData axes
             * @property {number|null} [coin] UserData coin
             * @property {number|null} [rose] UserData rose
             */

            /**
             * Constructs a new UserData.
             * @memberof lumber.DataTable
             * @classdesc Represents a UserData.
             * @implements IUserData
             * @constructor
             * @param {lumber.DataTable.IUserData=} [properties] Properties to set
             */
            function UserData(properties) {
                this.axes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserData tree.
             * @member {lumber.DataTable.IUserTree|null|undefined} tree
             * @memberof lumber.DataTable.UserData
             * @instance
             */
            UserData.prototype.tree = null;

            /**
             * UserData axes.
             * @member {Array.<lumber.DataTable.IUserAxe>} axes
             * @memberof lumber.DataTable.UserData
             * @instance
             */
            UserData.prototype.axes = $util.emptyArray;

            /**
             * UserData coin.
             * @member {number} coin
             * @memberof lumber.DataTable.UserData
             * @instance
             */
            UserData.prototype.coin = 0;

            /**
             * UserData rose.
             * @member {number} rose
             * @memberof lumber.DataTable.UserData
             * @instance
             */
            UserData.prototype.rose = 0;

            /**
             * Creates a new UserData instance using the specified properties.
             * @function create
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {lumber.DataTable.IUserData=} [properties] Properties to set
             * @returns {lumber.DataTable.UserData} UserData instance
             */
            UserData.create = function create(properties) {
                return new UserData(properties);
            };

            /**
             * Encodes the specified UserData message. Does not implicitly {@link lumber.DataTable.UserData.verify|verify} messages.
             * @function encode
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {lumber.DataTable.IUserData} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tree != null && Object.hasOwnProperty.call(message, "tree"))
                    $root.lumber.DataTable.UserTree.encode(message.tree, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.axes != null && message.axes.length)
                    for (var i = 0; i < message.axes.length; ++i)
                        $root.lumber.DataTable.UserAxe.encode(message.axes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.coin);
                if (message.rose != null && Object.hasOwnProperty.call(message, "rose"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rose);
                return writer;
            };

            /**
             * Encodes the specified UserData message, length delimited. Does not implicitly {@link lumber.DataTable.UserData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {lumber.DataTable.IUserData} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserData message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.DataTable.UserData} UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.DataTable.UserData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tree = $root.lumber.DataTable.UserTree.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.axes && message.axes.length))
                                message.axes = [];
                            message.axes.push($root.lumber.DataTable.UserAxe.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.coin = reader.int32();
                            break;
                        }
                    case 4: {
                            message.rose = reader.int32();
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
             * Decodes a UserData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.DataTable.UserData} UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserData message.
             * @function verify
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tree != null && message.hasOwnProperty("tree")) {
                    var error = $root.lumber.DataTable.UserTree.verify(message.tree);
                    if (error)
                        return "tree." + error;
                }
                if (message.axes != null && message.hasOwnProperty("axes")) {
                    if (!Array.isArray(message.axes))
                        return "axes: array expected";
                    for (var i = 0; i < message.axes.length; ++i) {
                        var error = $root.lumber.DataTable.UserAxe.verify(message.axes[i]);
                        if (error)
                            return "axes." + error;
                    }
                }
                if (message.coin != null && message.hasOwnProperty("coin"))
                    if (!$util.isInteger(message.coin))
                        return "coin: integer expected";
                if (message.rose != null && message.hasOwnProperty("rose"))
                    if (!$util.isInteger(message.rose))
                        return "rose: integer expected";
                return null;
            };

            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.DataTable.UserData} UserData
             */
            UserData.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.DataTable.UserData)
                    return object;
                var message = new $root.lumber.DataTable.UserData();
                if (object.tree != null) {
                    if (typeof object.tree !== "object")
                        throw TypeError(".lumber.DataTable.UserData.tree: object expected");
                    message.tree = $root.lumber.DataTable.UserTree.fromObject(object.tree);
                }
                if (object.axes) {
                    if (!Array.isArray(object.axes))
                        throw TypeError(".lumber.DataTable.UserData.axes: array expected");
                    message.axes = [];
                    for (var i = 0; i < object.axes.length; ++i) {
                        if (typeof object.axes[i] !== "object")
                            throw TypeError(".lumber.DataTable.UserData.axes: object expected");
                        message.axes[i] = $root.lumber.DataTable.UserAxe.fromObject(object.axes[i]);
                    }
                }
                if (object.coin != null)
                    message.coin = object.coin | 0;
                if (object.rose != null)
                    message.rose = object.rose | 0;
                return message;
            };

            /**
             * Creates a plain object from a UserData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {lumber.DataTable.UserData} message UserData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.axes = [];
                if (options.defaults) {
                    object.tree = null;
                    object.coin = 0;
                    object.rose = 0;
                }
                if (message.tree != null && message.hasOwnProperty("tree"))
                    object.tree = $root.lumber.DataTable.UserTree.toObject(message.tree, options);
                if (message.axes && message.axes.length) {
                    object.axes = [];
                    for (var j = 0; j < message.axes.length; ++j)
                        object.axes[j] = $root.lumber.DataTable.UserAxe.toObject(message.axes[j], options);
                }
                if (message.coin != null && message.hasOwnProperty("coin"))
                    object.coin = message.coin;
                if (message.rose != null && message.hasOwnProperty("rose"))
                    object.rose = message.rose;
                return object;
            };

            /**
             * Converts this UserData to JSON.
             * @function toJSON
             * @memberof lumber.DataTable.UserData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserData
             * @function getTypeUrl
             * @memberof lumber.DataTable.UserData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.DataTable.UserData";
            };

            return UserData;
        })();

        DataTable.UserTree = (function() {

            /**
             * Properties of a UserTree.
             * @memberof lumber.DataTable
             * @interface IUserTree
             * @property {number|null} [level] UserTree level
             * @property {number|null} [water] UserTree water
             * @property {number|null} [fail] UserTree fail
             */

            /**
             * Constructs a new UserTree.
             * @memberof lumber.DataTable
             * @classdesc Represents a UserTree.
             * @implements IUserTree
             * @constructor
             * @param {lumber.DataTable.IUserTree=} [properties] Properties to set
             */
            function UserTree(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserTree level.
             * @member {number} level
             * @memberof lumber.DataTable.UserTree
             * @instance
             */
            UserTree.prototype.level = 0;

            /**
             * UserTree water.
             * @member {number} water
             * @memberof lumber.DataTable.UserTree
             * @instance
             */
            UserTree.prototype.water = 0;

            /**
             * UserTree fail.
             * @member {number} fail
             * @memberof lumber.DataTable.UserTree
             * @instance
             */
            UserTree.prototype.fail = 0;

            /**
             * Creates a new UserTree instance using the specified properties.
             * @function create
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {lumber.DataTable.IUserTree=} [properties] Properties to set
             * @returns {lumber.DataTable.UserTree} UserTree instance
             */
            UserTree.create = function create(properties) {
                return new UserTree(properties);
            };

            /**
             * Encodes the specified UserTree message. Does not implicitly {@link lumber.DataTable.UserTree.verify|verify} messages.
             * @function encode
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {lumber.DataTable.IUserTree} message UserTree message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserTree.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
                if (message.water != null && Object.hasOwnProperty.call(message, "water"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.water);
                if (message.fail != null && Object.hasOwnProperty.call(message, "fail"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fail);
                return writer;
            };

            /**
             * Encodes the specified UserTree message, length delimited. Does not implicitly {@link lumber.DataTable.UserTree.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {lumber.DataTable.IUserTree} message UserTree message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserTree.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserTree message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.DataTable.UserTree} UserTree
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserTree.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.DataTable.UserTree();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.water = reader.int32();
                            break;
                        }
                    case 3: {
                            message.fail = reader.int32();
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
             * Decodes a UserTree message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.DataTable.UserTree} UserTree
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserTree.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserTree message.
             * @function verify
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserTree.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.water != null && message.hasOwnProperty("water"))
                    if (!$util.isInteger(message.water))
                        return "water: integer expected";
                if (message.fail != null && message.hasOwnProperty("fail"))
                    if (!$util.isInteger(message.fail))
                        return "fail: integer expected";
                return null;
            };

            /**
             * Creates a UserTree message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.DataTable.UserTree} UserTree
             */
            UserTree.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.DataTable.UserTree)
                    return object;
                var message = new $root.lumber.DataTable.UserTree();
                if (object.level != null)
                    message.level = object.level | 0;
                if (object.water != null)
                    message.water = object.water | 0;
                if (object.fail != null)
                    message.fail = object.fail | 0;
                return message;
            };

            /**
             * Creates a plain object from a UserTree message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {lumber.DataTable.UserTree} message UserTree
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserTree.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.level = 0;
                    object.water = 0;
                    object.fail = 0;
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.water != null && message.hasOwnProperty("water"))
                    object.water = message.water;
                if (message.fail != null && message.hasOwnProperty("fail"))
                    object.fail = message.fail;
                return object;
            };

            /**
             * Converts this UserTree to JSON.
             * @function toJSON
             * @memberof lumber.DataTable.UserTree
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserTree.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserTree
             * @function getTypeUrl
             * @memberof lumber.DataTable.UserTree
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserTree.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.DataTable.UserTree";
            };

            return UserTree;
        })();

        return DataTable;
    })();

    lumber.Enum = (function() {

        /**
         * Namespace Enum.
         * @memberof lumber
         * @namespace
         */
        var Enum = {};

        /**
         * EAxeQuality enum.
         * @name lumber.Enum.EAxeQuality
         * @enum {number}
         * @property {number} Iron=0 Iron value
         * @property {number} Silver=1 Silver value
         * @property {number} Golden=2 Golden value
         */
        Enum.EAxeQuality = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Iron"] = 0;
            values[valuesById[1] = "Silver"] = 1;
            values[valuesById[2] = "Golden"] = 2;
            return values;
        })();

        /**
         * EErrorCode enum.
         * @name lumber.Enum.EErrorCode
         * @enum {number}
         * @property {number} UnKnown=0 UnKnown value
         * @property {number} InternalServerError=1 InternalServerError value
         * @property {number} DiamondNotEnough=100 DiamondNotEnough value
         * @property {number} UserNotOnline=108 UserNotOnline value
         * @property {number} TreeWateringMax=148 TreeWateringMax value
         * @property {number} CoinNotEnough=150 CoinNotEnough value
         * @property {number} NeedMoreWatering=151 NeedMoreWatering value
         * @property {number} TreeLevelMax=152 TreeLevelMax value
         */
        Enum.EErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UnKnown"] = 0;
            values[valuesById[1] = "InternalServerError"] = 1;
            values[valuesById[100] = "DiamondNotEnough"] = 100;
            values[valuesById[108] = "UserNotOnline"] = 108;
            values[valuesById[148] = "TreeWateringMax"] = 148;
            values[valuesById[150] = "CoinNotEnough"] = 150;
            values[valuesById[151] = "NeedMoreWatering"] = 151;
            values[valuesById[152] = "TreeLevelMax"] = 152;
            return values;
        })();

        /**
         * EMessageType enum.
         * @name lumber.Enum.EMessageType
         * @enum {number}
         * @property {number} GetUserInfo=0 GetUserInfo value
         * @property {number} TreeWatering=1 TreeWatering value
         * @property {number} TreeUpgrade=2 TreeUpgrade value
         * @property {number} AxeBurnish=3 AxeBurnish value
         * @property {number} AxeUpgrade=4 AxeUpgrade value
         * @property {number} DoLumber=5 DoLumber value
         * @property {number} GetRewardRecord=6 GetRewardRecord value
         */
        Enum.EMessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GetUserInfo"] = 0;
            values[valuesById[1] = "TreeWatering"] = 1;
            values[valuesById[2] = "TreeUpgrade"] = 2;
            values[valuesById[3] = "AxeBurnish"] = 3;
            values[valuesById[4] = "AxeUpgrade"] = 4;
            values[valuesById[5] = "DoLumber"] = 5;
            values[valuesById[6] = "GetRewardRecord"] = 6;
            return values;
        })();

        return Enum;
    })();

    lumber.Message = (function() {

        /**
         * Namespace Message.
         * @memberof lumber
         * @namespace
         */
        var Message = {};

        Message.AxeBurnishRequest = (function() {

            /**
             * Properties of an AxeBurnishRequest.
             * @memberof lumber.Message
             * @interface IAxeBurnishRequest
             * @property {lumber.Enum.EAxeQuality|null} [quality] AxeBurnishRequest quality
             */

            /**
             * Constructs a new AxeBurnishRequest.
             * @memberof lumber.Message
             * @classdesc Represents an AxeBurnishRequest.
             * @implements IAxeBurnishRequest
             * @constructor
             * @param {lumber.Message.IAxeBurnishRequest=} [properties] Properties to set
             */
            function AxeBurnishRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AxeBurnishRequest quality.
             * @member {lumber.Enum.EAxeQuality} quality
             * @memberof lumber.Message.AxeBurnishRequest
             * @instance
             */
            AxeBurnishRequest.prototype.quality = 0;

            /**
             * Creates a new AxeBurnishRequest instance using the specified properties.
             * @function create
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {lumber.Message.IAxeBurnishRequest=} [properties] Properties to set
             * @returns {lumber.Message.AxeBurnishRequest} AxeBurnishRequest instance
             */
            AxeBurnishRequest.create = function create(properties) {
                return new AxeBurnishRequest(properties);
            };

            /**
             * Encodes the specified AxeBurnishRequest message. Does not implicitly {@link lumber.Message.AxeBurnishRequest.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {lumber.Message.IAxeBurnishRequest} message AxeBurnishRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeBurnishRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.quality);
                return writer;
            };

            /**
             * Encodes the specified AxeBurnishRequest message, length delimited. Does not implicitly {@link lumber.Message.AxeBurnishRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {lumber.Message.IAxeBurnishRequest} message AxeBurnishRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeBurnishRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AxeBurnishRequest message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.AxeBurnishRequest} AxeBurnishRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeBurnishRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.AxeBurnishRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.quality = reader.int32();
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
             * Decodes an AxeBurnishRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.AxeBurnishRequest} AxeBurnishRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeBurnishRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AxeBurnishRequest message.
             * @function verify
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AxeBurnishRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quality != null && message.hasOwnProperty("quality"))
                    switch (message.quality) {
                    default:
                        return "quality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates an AxeBurnishRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.AxeBurnishRequest} AxeBurnishRequest
             */
            AxeBurnishRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.AxeBurnishRequest)
                    return object;
                var message = new $root.lumber.Message.AxeBurnishRequest();
                switch (object.quality) {
                default:
                    if (typeof object.quality === "number") {
                        message.quality = object.quality;
                        break;
                    }
                    break;
                case "Iron":
                case 0:
                    message.quality = 0;
                    break;
                case "Silver":
                case 1:
                    message.quality = 1;
                    break;
                case "Golden":
                case 2:
                    message.quality = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an AxeBurnishRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {lumber.Message.AxeBurnishRequest} message AxeBurnishRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AxeBurnishRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.quality = options.enums === String ? "Iron" : 0;
                if (message.quality != null && message.hasOwnProperty("quality"))
                    object.quality = options.enums === String ? $root.lumber.Enum.EAxeQuality[message.quality] === undefined ? message.quality : $root.lumber.Enum.EAxeQuality[message.quality] : message.quality;
                return object;
            };

            /**
             * Converts this AxeBurnishRequest to JSON.
             * @function toJSON
             * @memberof lumber.Message.AxeBurnishRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AxeBurnishRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AxeBurnishRequest
             * @function getTypeUrl
             * @memberof lumber.Message.AxeBurnishRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AxeBurnishRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.AxeBurnishRequest";
            };

            return AxeBurnishRequest;
        })();

        Message.AxeBurnishResponse = (function() {

            /**
             * Properties of an AxeBurnishResponse.
             * @memberof lumber.Message
             * @interface IAxeBurnishResponse
             * @property {lumber.DataTable.IUserAxe|null} [axe] AxeBurnishResponse axe
             * @property {number|null} [costCoin] AxeBurnishResponse costCoin
             */

            /**
             * Constructs a new AxeBurnishResponse.
             * @memberof lumber.Message
             * @classdesc Represents an AxeBurnishResponse.
             * @implements IAxeBurnishResponse
             * @constructor
             * @param {lumber.Message.IAxeBurnishResponse=} [properties] Properties to set
             */
            function AxeBurnishResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AxeBurnishResponse axe.
             * @member {lumber.DataTable.IUserAxe|null|undefined} axe
             * @memberof lumber.Message.AxeBurnishResponse
             * @instance
             */
            AxeBurnishResponse.prototype.axe = null;

            /**
             * AxeBurnishResponse costCoin.
             * @member {number} costCoin
             * @memberof lumber.Message.AxeBurnishResponse
             * @instance
             */
            AxeBurnishResponse.prototype.costCoin = 0;

            /**
             * Creates a new AxeBurnishResponse instance using the specified properties.
             * @function create
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {lumber.Message.IAxeBurnishResponse=} [properties] Properties to set
             * @returns {lumber.Message.AxeBurnishResponse} AxeBurnishResponse instance
             */
            AxeBurnishResponse.create = function create(properties) {
                return new AxeBurnishResponse(properties);
            };

            /**
             * Encodes the specified AxeBurnishResponse message. Does not implicitly {@link lumber.Message.AxeBurnishResponse.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {lumber.Message.IAxeBurnishResponse} message AxeBurnishResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeBurnishResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.axe != null && Object.hasOwnProperty.call(message, "axe"))
                    $root.lumber.DataTable.UserAxe.encode(message.axe, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.costCoin != null && Object.hasOwnProperty.call(message, "costCoin"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.costCoin);
                return writer;
            };

            /**
             * Encodes the specified AxeBurnishResponse message, length delimited. Does not implicitly {@link lumber.Message.AxeBurnishResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {lumber.Message.IAxeBurnishResponse} message AxeBurnishResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeBurnishResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AxeBurnishResponse message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.AxeBurnishResponse} AxeBurnishResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeBurnishResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.AxeBurnishResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.axe = $root.lumber.DataTable.UserAxe.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.costCoin = reader.int32();
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
             * Decodes an AxeBurnishResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.AxeBurnishResponse} AxeBurnishResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeBurnishResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AxeBurnishResponse message.
             * @function verify
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AxeBurnishResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.axe != null && message.hasOwnProperty("axe")) {
                    var error = $root.lumber.DataTable.UserAxe.verify(message.axe);
                    if (error)
                        return "axe." + error;
                }
                if (message.costCoin != null && message.hasOwnProperty("costCoin"))
                    if (!$util.isInteger(message.costCoin))
                        return "costCoin: integer expected";
                return null;
            };

            /**
             * Creates an AxeBurnishResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.AxeBurnishResponse} AxeBurnishResponse
             */
            AxeBurnishResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.AxeBurnishResponse)
                    return object;
                var message = new $root.lumber.Message.AxeBurnishResponse();
                if (object.axe != null) {
                    if (typeof object.axe !== "object")
                        throw TypeError(".lumber.Message.AxeBurnishResponse.axe: object expected");
                    message.axe = $root.lumber.DataTable.UserAxe.fromObject(object.axe);
                }
                if (object.costCoin != null)
                    message.costCoin = object.costCoin | 0;
                return message;
            };

            /**
             * Creates a plain object from an AxeBurnishResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {lumber.Message.AxeBurnishResponse} message AxeBurnishResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AxeBurnishResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.axe = null;
                    object.costCoin = 0;
                }
                if (message.axe != null && message.hasOwnProperty("axe"))
                    object.axe = $root.lumber.DataTable.UserAxe.toObject(message.axe, options);
                if (message.costCoin != null && message.hasOwnProperty("costCoin"))
                    object.costCoin = message.costCoin;
                return object;
            };

            /**
             * Converts this AxeBurnishResponse to JSON.
             * @function toJSON
             * @memberof lumber.Message.AxeBurnishResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AxeBurnishResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AxeBurnishResponse
             * @function getTypeUrl
             * @memberof lumber.Message.AxeBurnishResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AxeBurnishResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.AxeBurnishResponse";
            };

            return AxeBurnishResponse;
        })();

        Message.AxeUpgradeRequest = (function() {

            /**
             * Properties of an AxeUpgradeRequest.
             * @memberof lumber.Message
             * @interface IAxeUpgradeRequest
             * @property {lumber.Enum.EAxeQuality|null} [quality] AxeUpgradeRequest quality
             */

            /**
             * Constructs a new AxeUpgradeRequest.
             * @memberof lumber.Message
             * @classdesc Represents an AxeUpgradeRequest.
             * @implements IAxeUpgradeRequest
             * @constructor
             * @param {lumber.Message.IAxeUpgradeRequest=} [properties] Properties to set
             */
            function AxeUpgradeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AxeUpgradeRequest quality.
             * @member {lumber.Enum.EAxeQuality} quality
             * @memberof lumber.Message.AxeUpgradeRequest
             * @instance
             */
            AxeUpgradeRequest.prototype.quality = 0;

            /**
             * Creates a new AxeUpgradeRequest instance using the specified properties.
             * @function create
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {lumber.Message.IAxeUpgradeRequest=} [properties] Properties to set
             * @returns {lumber.Message.AxeUpgradeRequest} AxeUpgradeRequest instance
             */
            AxeUpgradeRequest.create = function create(properties) {
                return new AxeUpgradeRequest(properties);
            };

            /**
             * Encodes the specified AxeUpgradeRequest message. Does not implicitly {@link lumber.Message.AxeUpgradeRequest.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {lumber.Message.IAxeUpgradeRequest} message AxeUpgradeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeUpgradeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.quality);
                return writer;
            };

            /**
             * Encodes the specified AxeUpgradeRequest message, length delimited. Does not implicitly {@link lumber.Message.AxeUpgradeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {lumber.Message.IAxeUpgradeRequest} message AxeUpgradeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeUpgradeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AxeUpgradeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.AxeUpgradeRequest} AxeUpgradeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeUpgradeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.AxeUpgradeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.quality = reader.int32();
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
             * Decodes an AxeUpgradeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.AxeUpgradeRequest} AxeUpgradeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeUpgradeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AxeUpgradeRequest message.
             * @function verify
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AxeUpgradeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quality != null && message.hasOwnProperty("quality"))
                    switch (message.quality) {
                    default:
                        return "quality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates an AxeUpgradeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.AxeUpgradeRequest} AxeUpgradeRequest
             */
            AxeUpgradeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.AxeUpgradeRequest)
                    return object;
                var message = new $root.lumber.Message.AxeUpgradeRequest();
                switch (object.quality) {
                default:
                    if (typeof object.quality === "number") {
                        message.quality = object.quality;
                        break;
                    }
                    break;
                case "Iron":
                case 0:
                    message.quality = 0;
                    break;
                case "Silver":
                case 1:
                    message.quality = 1;
                    break;
                case "Golden":
                case 2:
                    message.quality = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an AxeUpgradeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {lumber.Message.AxeUpgradeRequest} message AxeUpgradeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AxeUpgradeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.quality = options.enums === String ? "Iron" : 0;
                if (message.quality != null && message.hasOwnProperty("quality"))
                    object.quality = options.enums === String ? $root.lumber.Enum.EAxeQuality[message.quality] === undefined ? message.quality : $root.lumber.Enum.EAxeQuality[message.quality] : message.quality;
                return object;
            };

            /**
             * Converts this AxeUpgradeRequest to JSON.
             * @function toJSON
             * @memberof lumber.Message.AxeUpgradeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AxeUpgradeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AxeUpgradeRequest
             * @function getTypeUrl
             * @memberof lumber.Message.AxeUpgradeRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AxeUpgradeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.AxeUpgradeRequest";
            };

            return AxeUpgradeRequest;
        })();

        Message.DoLumberRequest = (function() {

            /**
             * Properties of a DoLumberRequest.
             * @memberof lumber.Message
             * @interface IDoLumberRequest
             * @property {lumber.Enum.EAxeQuality|null} [quality] DoLumberRequest quality
             */

            /**
             * Constructs a new DoLumberRequest.
             * @memberof lumber.Message
             * @classdesc Represents a DoLumberRequest.
             * @implements IDoLumberRequest
             * @constructor
             * @param {lumber.Message.IDoLumberRequest=} [properties] Properties to set
             */
            function DoLumberRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoLumberRequest quality.
             * @member {lumber.Enum.EAxeQuality} quality
             * @memberof lumber.Message.DoLumberRequest
             * @instance
             */
            DoLumberRequest.prototype.quality = 0;

            /**
             * Creates a new DoLumberRequest instance using the specified properties.
             * @function create
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {lumber.Message.IDoLumberRequest=} [properties] Properties to set
             * @returns {lumber.Message.DoLumberRequest} DoLumberRequest instance
             */
            DoLumberRequest.create = function create(properties) {
                return new DoLumberRequest(properties);
            };

            /**
             * Encodes the specified DoLumberRequest message. Does not implicitly {@link lumber.Message.DoLumberRequest.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {lumber.Message.IDoLumberRequest} message DoLumberRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoLumberRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.quality != null && Object.hasOwnProperty.call(message, "quality"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.quality);
                return writer;
            };

            /**
             * Encodes the specified DoLumberRequest message, length delimited. Does not implicitly {@link lumber.Message.DoLumberRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {lumber.Message.IDoLumberRequest} message DoLumberRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoLumberRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoLumberRequest message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.DoLumberRequest} DoLumberRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoLumberRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.DoLumberRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.quality = reader.int32();
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
             * Decodes a DoLumberRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.DoLumberRequest} DoLumberRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoLumberRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoLumberRequest message.
             * @function verify
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoLumberRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quality != null && message.hasOwnProperty("quality"))
                    switch (message.quality) {
                    default:
                        return "quality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a DoLumberRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.DoLumberRequest} DoLumberRequest
             */
            DoLumberRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.DoLumberRequest)
                    return object;
                var message = new $root.lumber.Message.DoLumberRequest();
                switch (object.quality) {
                default:
                    if (typeof object.quality === "number") {
                        message.quality = object.quality;
                        break;
                    }
                    break;
                case "Iron":
                case 0:
                    message.quality = 0;
                    break;
                case "Silver":
                case 1:
                    message.quality = 1;
                    break;
                case "Golden":
                case 2:
                    message.quality = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a DoLumberRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {lumber.Message.DoLumberRequest} message DoLumberRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoLumberRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.quality = options.enums === String ? "Iron" : 0;
                if (message.quality != null && message.hasOwnProperty("quality"))
                    object.quality = options.enums === String ? $root.lumber.Enum.EAxeQuality[message.quality] === undefined ? message.quality : $root.lumber.Enum.EAxeQuality[message.quality] : message.quality;
                return object;
            };

            /**
             * Converts this DoLumberRequest to JSON.
             * @function toJSON
             * @memberof lumber.Message.DoLumberRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoLumberRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoLumberRequest
             * @function getTypeUrl
             * @memberof lumber.Message.DoLumberRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoLumberRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.DoLumberRequest";
            };

            return DoLumberRequest;
        })();

        /**
         * ELumberStatus enum.
         * @name lumber.Message.ELumberStatus
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} TreeLevelNotEnough=1 TreeLevelNotEnough value
         * @property {number} AxeLevelNotEnough=2 AxeLevelNotEnough value
         * @property {number} NoRewardInLoot=3 NoRewardInLoot value
         */
        Message.ELumberStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "TreeLevelNotEnough"] = 1;
            values[valuesById[2] = "AxeLevelNotEnough"] = 2;
            values[valuesById[3] = "NoRewardInLoot"] = 3;
            return values;
        })();

        Message.DoLumberResponse = (function() {

            /**
             * Properties of a DoLumberResponse.
             * @memberof lumber.Message
             * @interface IDoLumberResponse
             * @property {lumber.Message.ELumberStatus|null} [status] DoLumberResponse status
             * @property {number|null} [roseCost] DoLumberResponse roseCost
             * @property {number|null} [coinGain] DoLumberResponse coinGain
             * @property {number|null} [propId] DoLumberResponse propId
             */

            /**
             * Constructs a new DoLumberResponse.
             * @memberof lumber.Message
             * @classdesc Represents a DoLumberResponse.
             * @implements IDoLumberResponse
             * @constructor
             * @param {lumber.Message.IDoLumberResponse=} [properties] Properties to set
             */
            function DoLumberResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoLumberResponse status.
             * @member {lumber.Message.ELumberStatus} status
             * @memberof lumber.Message.DoLumberResponse
             * @instance
             */
            DoLumberResponse.prototype.status = 0;

            /**
             * DoLumberResponse roseCost.
             * @member {number} roseCost
             * @memberof lumber.Message.DoLumberResponse
             * @instance
             */
            DoLumberResponse.prototype.roseCost = 0;

            /**
             * DoLumberResponse coinGain.
             * @member {number} coinGain
             * @memberof lumber.Message.DoLumberResponse
             * @instance
             */
            DoLumberResponse.prototype.coinGain = 0;

            /**
             * DoLumberResponse propId.
             * @member {number} propId
             * @memberof lumber.Message.DoLumberResponse
             * @instance
             */
            DoLumberResponse.prototype.propId = 0;

            /**
             * Creates a new DoLumberResponse instance using the specified properties.
             * @function create
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {lumber.Message.IDoLumberResponse=} [properties] Properties to set
             * @returns {lumber.Message.DoLumberResponse} DoLumberResponse instance
             */
            DoLumberResponse.create = function create(properties) {
                return new DoLumberResponse(properties);
            };

            /**
             * Encodes the specified DoLumberResponse message. Does not implicitly {@link lumber.Message.DoLumberResponse.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {lumber.Message.IDoLumberResponse} message DoLumberResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoLumberResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.roseCost != null && Object.hasOwnProperty.call(message, "roseCost"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.roseCost);
                if (message.coinGain != null && Object.hasOwnProperty.call(message, "coinGain"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.coinGain);
                if (message.propId != null && Object.hasOwnProperty.call(message, "propId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.propId);
                return writer;
            };

            /**
             * Encodes the specified DoLumberResponse message, length delimited. Does not implicitly {@link lumber.Message.DoLumberResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {lumber.Message.IDoLumberResponse} message DoLumberResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoLumberResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoLumberResponse message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.DoLumberResponse} DoLumberResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoLumberResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.DoLumberResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 2: {
                            message.roseCost = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.coinGain = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.propId = reader.uint32();
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
             * Decodes a DoLumberResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.DoLumberResponse} DoLumberResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoLumberResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoLumberResponse message.
             * @function verify
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoLumberResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.roseCost != null && message.hasOwnProperty("roseCost"))
                    if (!$util.isInteger(message.roseCost))
                        return "roseCost: integer expected";
                if (message.coinGain != null && message.hasOwnProperty("coinGain"))
                    if (!$util.isInteger(message.coinGain))
                        return "coinGain: integer expected";
                if (message.propId != null && message.hasOwnProperty("propId"))
                    if (!$util.isInteger(message.propId))
                        return "propId: integer expected";
                return null;
            };

            /**
             * Creates a DoLumberResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.DoLumberResponse} DoLumberResponse
             */
            DoLumberResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.DoLumberResponse)
                    return object;
                var message = new $root.lumber.Message.DoLumberResponse();
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "Success":
                case 0:
                    message.status = 0;
                    break;
                case "TreeLevelNotEnough":
                case 1:
                    message.status = 1;
                    break;
                case "AxeLevelNotEnough":
                case 2:
                    message.status = 2;
                    break;
                case "NoRewardInLoot":
                case 3:
                    message.status = 3;
                    break;
                }
                if (object.roseCost != null)
                    message.roseCost = object.roseCost >>> 0;
                if (object.coinGain != null)
                    message.coinGain = object.coinGain >>> 0;
                if (object.propId != null)
                    message.propId = object.propId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a DoLumberResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {lumber.Message.DoLumberResponse} message DoLumberResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoLumberResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "Success" : 0;
                    object.roseCost = 0;
                    object.coinGain = 0;
                    object.propId = 0;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.lumber.Message.ELumberStatus[message.status] === undefined ? message.status : $root.lumber.Message.ELumberStatus[message.status] : message.status;
                if (message.roseCost != null && message.hasOwnProperty("roseCost"))
                    object.roseCost = message.roseCost;
                if (message.coinGain != null && message.hasOwnProperty("coinGain"))
                    object.coinGain = message.coinGain;
                if (message.propId != null && message.hasOwnProperty("propId"))
                    object.propId = message.propId;
                return object;
            };

            /**
             * Converts this DoLumberResponse to JSON.
             * @function toJSON
             * @memberof lumber.Message.DoLumberResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoLumberResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoLumberResponse
             * @function getTypeUrl
             * @memberof lumber.Message.DoLumberResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoLumberResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.DoLumberResponse";
            };

            return DoLumberResponse;
        })();

        Message.GetUserInfoRequest = (function() {

            /**
             * Properties of a GetUserInfoRequest.
             * @memberof lumber.Message
             * @interface IGetUserInfoRequest
             */

            /**
             * Constructs a new GetUserInfoRequest.
             * @memberof lumber.Message
             * @classdesc Represents a GetUserInfoRequest.
             * @implements IGetUserInfoRequest
             * @constructor
             * @param {lumber.Message.IGetUserInfoRequest=} [properties] Properties to set
             */
            function GetUserInfoRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GetUserInfoRequest instance using the specified properties.
             * @function create
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {lumber.Message.IGetUserInfoRequest=} [properties] Properties to set
             * @returns {lumber.Message.GetUserInfoRequest} GetUserInfoRequest instance
             */
            GetUserInfoRequest.create = function create(properties) {
                return new GetUserInfoRequest(properties);
            };

            /**
             * Encodes the specified GetUserInfoRequest message. Does not implicitly {@link lumber.Message.GetUserInfoRequest.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {lumber.Message.IGetUserInfoRequest} message GetUserInfoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GetUserInfoRequest message, length delimited. Does not implicitly {@link lumber.Message.GetUserInfoRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {lumber.Message.IGetUserInfoRequest} message GetUserInfoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserInfoRequest message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.GetUserInfoRequest} GetUserInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.GetUserInfoRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUserInfoRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.GetUserInfoRequest} GetUserInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUserInfoRequest message.
             * @function verify
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUserInfoRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a GetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.GetUserInfoRequest} GetUserInfoRequest
             */
            GetUserInfoRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.GetUserInfoRequest)
                    return object;
                return new $root.lumber.Message.GetUserInfoRequest();
            };

            /**
             * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {lumber.Message.GetUserInfoRequest} message GetUserInfoRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserInfoRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetUserInfoRequest to JSON.
             * @function toJSON
             * @memberof lumber.Message.GetUserInfoRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserInfoRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetUserInfoRequest
             * @function getTypeUrl
             * @memberof lumber.Message.GetUserInfoRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetUserInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.GetUserInfoRequest";
            };

            return GetUserInfoRequest;
        })();

        Message.GetUserInfoResponse = (function() {

            /**
             * Properties of a GetUserInfoResponse.
             * @memberof lumber.Message
             * @interface IGetUserInfoResponse
             * @property {lumber.DataTable.IUserTree|null} [tree] GetUserInfoResponse tree
             * @property {Array.<lumber.DataTable.IUserAxe>|null} [axe] GetUserInfoResponse axe
             * @property {number|null} [coin] GetUserInfoResponse coin
             * @property {number|null} [rose] GetUserInfoResponse rose
             */

            /**
             * Constructs a new GetUserInfoResponse.
             * @memberof lumber.Message
             * @classdesc Represents a GetUserInfoResponse.
             * @implements IGetUserInfoResponse
             * @constructor
             * @param {lumber.Message.IGetUserInfoResponse=} [properties] Properties to set
             */
            function GetUserInfoResponse(properties) {
                this.axe = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUserInfoResponse tree.
             * @member {lumber.DataTable.IUserTree|null|undefined} tree
             * @memberof lumber.Message.GetUserInfoResponse
             * @instance
             */
            GetUserInfoResponse.prototype.tree = null;

            /**
             * GetUserInfoResponse axe.
             * @member {Array.<lumber.DataTable.IUserAxe>} axe
             * @memberof lumber.Message.GetUserInfoResponse
             * @instance
             */
            GetUserInfoResponse.prototype.axe = $util.emptyArray;

            /**
             * GetUserInfoResponse coin.
             * @member {number} coin
             * @memberof lumber.Message.GetUserInfoResponse
             * @instance
             */
            GetUserInfoResponse.prototype.coin = 0;

            /**
             * GetUserInfoResponse rose.
             * @member {number} rose
             * @memberof lumber.Message.GetUserInfoResponse
             * @instance
             */
            GetUserInfoResponse.prototype.rose = 0;

            /**
             * Creates a new GetUserInfoResponse instance using the specified properties.
             * @function create
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {lumber.Message.IGetUserInfoResponse=} [properties] Properties to set
             * @returns {lumber.Message.GetUserInfoResponse} GetUserInfoResponse instance
             */
            GetUserInfoResponse.create = function create(properties) {
                return new GetUserInfoResponse(properties);
            };

            /**
             * Encodes the specified GetUserInfoResponse message. Does not implicitly {@link lumber.Message.GetUserInfoResponse.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {lumber.Message.IGetUserInfoResponse} message GetUserInfoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tree != null && Object.hasOwnProperty.call(message, "tree"))
                    $root.lumber.DataTable.UserTree.encode(message.tree, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.axe != null && message.axe.length)
                    for (var i = 0; i < message.axe.length; ++i)
                        $root.lumber.DataTable.UserAxe.encode(message.axe[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.coin);
                if (message.rose != null && Object.hasOwnProperty.call(message, "rose"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.rose);
                return writer;
            };

            /**
             * Encodes the specified GetUserInfoResponse message, length delimited. Does not implicitly {@link lumber.Message.GetUserInfoResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {lumber.Message.IGetUserInfoResponse} message GetUserInfoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUserInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUserInfoResponse message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.GetUserInfoResponse} GetUserInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.GetUserInfoResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.tree = $root.lumber.DataTable.UserTree.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.axe && message.axe.length))
                                message.axe = [];
                            message.axe.push($root.lumber.DataTable.UserAxe.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.coin = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.rose = reader.uint32();
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
             * Decodes a GetUserInfoResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.GetUserInfoResponse} GetUserInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserInfoResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUserInfoResponse message.
             * @function verify
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUserInfoResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tree != null && message.hasOwnProperty("tree")) {
                    var error = $root.lumber.DataTable.UserTree.verify(message.tree);
                    if (error)
                        return "tree." + error;
                }
                if (message.axe != null && message.hasOwnProperty("axe")) {
                    if (!Array.isArray(message.axe))
                        return "axe: array expected";
                    for (var i = 0; i < message.axe.length; ++i) {
                        var error = $root.lumber.DataTable.UserAxe.verify(message.axe[i]);
                        if (error)
                            return "axe." + error;
                    }
                }
                if (message.coin != null && message.hasOwnProperty("coin"))
                    if (!$util.isInteger(message.coin))
                        return "coin: integer expected";
                if (message.rose != null && message.hasOwnProperty("rose"))
                    if (!$util.isInteger(message.rose))
                        return "rose: integer expected";
                return null;
            };

            /**
             * Creates a GetUserInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.GetUserInfoResponse} GetUserInfoResponse
             */
            GetUserInfoResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.GetUserInfoResponse)
                    return object;
                var message = new $root.lumber.Message.GetUserInfoResponse();
                if (object.tree != null) {
                    if (typeof object.tree !== "object")
                        throw TypeError(".lumber.Message.GetUserInfoResponse.tree: object expected");
                    message.tree = $root.lumber.DataTable.UserTree.fromObject(object.tree);
                }
                if (object.axe) {
                    if (!Array.isArray(object.axe))
                        throw TypeError(".lumber.Message.GetUserInfoResponse.axe: array expected");
                    message.axe = [];
                    for (var i = 0; i < object.axe.length; ++i) {
                        if (typeof object.axe[i] !== "object")
                            throw TypeError(".lumber.Message.GetUserInfoResponse.axe: object expected");
                        message.axe[i] = $root.lumber.DataTable.UserAxe.fromObject(object.axe[i]);
                    }
                }
                if (object.coin != null)
                    message.coin = object.coin >>> 0;
                if (object.rose != null)
                    message.rose = object.rose >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a GetUserInfoResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {lumber.Message.GetUserInfoResponse} message GetUserInfoResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserInfoResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.axe = [];
                if (options.defaults) {
                    object.tree = null;
                    object.coin = 0;
                    object.rose = 0;
                }
                if (message.tree != null && message.hasOwnProperty("tree"))
                    object.tree = $root.lumber.DataTable.UserTree.toObject(message.tree, options);
                if (message.axe && message.axe.length) {
                    object.axe = [];
                    for (var j = 0; j < message.axe.length; ++j)
                        object.axe[j] = $root.lumber.DataTable.UserAxe.toObject(message.axe[j], options);
                }
                if (message.coin != null && message.hasOwnProperty("coin"))
                    object.coin = message.coin;
                if (message.rose != null && message.hasOwnProperty("rose"))
                    object.rose = message.rose;
                return object;
            };

            /**
             * Converts this GetUserInfoResponse to JSON.
             * @function toJSON
             * @memberof lumber.Message.GetUserInfoResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserInfoResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetUserInfoResponse
             * @function getTypeUrl
             * @memberof lumber.Message.GetUserInfoResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetUserInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.GetUserInfoResponse";
            };

            return GetUserInfoResponse;
        })();

        Message.TreeUpgradeRequest = (function() {

            /**
             * Properties of a TreeUpgradeRequest.
             * @memberof lumber.Message
             * @interface ITreeUpgradeRequest
             */

            /**
             * Constructs a new TreeUpgradeRequest.
             * @memberof lumber.Message
             * @classdesc Represents a TreeUpgradeRequest.
             * @implements ITreeUpgradeRequest
             * @constructor
             * @param {lumber.Message.ITreeUpgradeRequest=} [properties] Properties to set
             */
            function TreeUpgradeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new TreeUpgradeRequest instance using the specified properties.
             * @function create
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {lumber.Message.ITreeUpgradeRequest=} [properties] Properties to set
             * @returns {lumber.Message.TreeUpgradeRequest} TreeUpgradeRequest instance
             */
            TreeUpgradeRequest.create = function create(properties) {
                return new TreeUpgradeRequest(properties);
            };

            /**
             * Encodes the specified TreeUpgradeRequest message. Does not implicitly {@link lumber.Message.TreeUpgradeRequest.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {lumber.Message.ITreeUpgradeRequest} message TreeUpgradeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeUpgradeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified TreeUpgradeRequest message, length delimited. Does not implicitly {@link lumber.Message.TreeUpgradeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {lumber.Message.ITreeUpgradeRequest} message TreeUpgradeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeUpgradeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreeUpgradeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.TreeUpgradeRequest} TreeUpgradeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeUpgradeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.TreeUpgradeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TreeUpgradeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.TreeUpgradeRequest} TreeUpgradeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeUpgradeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreeUpgradeRequest message.
             * @function verify
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreeUpgradeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a TreeUpgradeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.TreeUpgradeRequest} TreeUpgradeRequest
             */
            TreeUpgradeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.TreeUpgradeRequest)
                    return object;
                return new $root.lumber.Message.TreeUpgradeRequest();
            };

            /**
             * Creates a plain object from a TreeUpgradeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {lumber.Message.TreeUpgradeRequest} message TreeUpgradeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreeUpgradeRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this TreeUpgradeRequest to JSON.
             * @function toJSON
             * @memberof lumber.Message.TreeUpgradeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreeUpgradeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreeUpgradeRequest
             * @function getTypeUrl
             * @memberof lumber.Message.TreeUpgradeRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreeUpgradeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.TreeUpgradeRequest";
            };

            return TreeUpgradeRequest;
        })();

        Message.TreeWateringResponse = (function() {

            /**
             * Properties of a TreeWateringResponse.
             * @memberof lumber.Message
             * @interface ITreeWateringResponse
             * @property {boolean|null} [success] TreeWateringResponse success
             * @property {number|null} [costCoin] TreeWateringResponse costCoin
             * @property {lumber.DataTable.IUserTree|null} [userTree] TreeWateringResponse userTree
             */

            /**
             * Constructs a new TreeWateringResponse.
             * @memberof lumber.Message
             * @classdesc Represents a TreeWateringResponse.
             * @implements ITreeWateringResponse
             * @constructor
             * @param {lumber.Message.ITreeWateringResponse=} [properties] Properties to set
             */
            function TreeWateringResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TreeWateringResponse success.
             * @member {boolean} success
             * @memberof lumber.Message.TreeWateringResponse
             * @instance
             */
            TreeWateringResponse.prototype.success = false;

            /**
             * TreeWateringResponse costCoin.
             * @member {number} costCoin
             * @memberof lumber.Message.TreeWateringResponse
             * @instance
             */
            TreeWateringResponse.prototype.costCoin = 0;

            /**
             * TreeWateringResponse userTree.
             * @member {lumber.DataTable.IUserTree|null|undefined} userTree
             * @memberof lumber.Message.TreeWateringResponse
             * @instance
             */
            TreeWateringResponse.prototype.userTree = null;

            /**
             * Creates a new TreeWateringResponse instance using the specified properties.
             * @function create
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {lumber.Message.ITreeWateringResponse=} [properties] Properties to set
             * @returns {lumber.Message.TreeWateringResponse} TreeWateringResponse instance
             */
            TreeWateringResponse.create = function create(properties) {
                return new TreeWateringResponse(properties);
            };

            /**
             * Encodes the specified TreeWateringResponse message. Does not implicitly {@link lumber.Message.TreeWateringResponse.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {lumber.Message.ITreeWateringResponse} message TreeWateringResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeWateringResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                if (message.costCoin != null && Object.hasOwnProperty.call(message, "costCoin"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.costCoin);
                if (message.userTree != null && Object.hasOwnProperty.call(message, "userTree"))
                    $root.lumber.DataTable.UserTree.encode(message.userTree, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TreeWateringResponse message, length delimited. Does not implicitly {@link lumber.Message.TreeWateringResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {lumber.Message.ITreeWateringResponse} message TreeWateringResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeWateringResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreeWateringResponse message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.TreeWateringResponse} TreeWateringResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeWateringResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.TreeWateringResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.success = reader.bool();
                            break;
                        }
                    case 2: {
                            message.costCoin = reader.int32();
                            break;
                        }
                    case 3: {
                            message.userTree = $root.lumber.DataTable.UserTree.decode(reader, reader.uint32());
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
             * Decodes a TreeWateringResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.TreeWateringResponse} TreeWateringResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeWateringResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreeWateringResponse message.
             * @function verify
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreeWateringResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                if (message.costCoin != null && message.hasOwnProperty("costCoin"))
                    if (!$util.isInteger(message.costCoin))
                        return "costCoin: integer expected";
                if (message.userTree != null && message.hasOwnProperty("userTree")) {
                    var error = $root.lumber.DataTable.UserTree.verify(message.userTree);
                    if (error)
                        return "userTree." + error;
                }
                return null;
            };

            /**
             * Creates a TreeWateringResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.TreeWateringResponse} TreeWateringResponse
             */
            TreeWateringResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.TreeWateringResponse)
                    return object;
                var message = new $root.lumber.Message.TreeWateringResponse();
                if (object.success != null)
                    message.success = Boolean(object.success);
                if (object.costCoin != null)
                    message.costCoin = object.costCoin | 0;
                if (object.userTree != null) {
                    if (typeof object.userTree !== "object")
                        throw TypeError(".lumber.Message.TreeWateringResponse.userTree: object expected");
                    message.userTree = $root.lumber.DataTable.UserTree.fromObject(object.userTree);
                }
                return message;
            };

            /**
             * Creates a plain object from a TreeWateringResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {lumber.Message.TreeWateringResponse} message TreeWateringResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreeWateringResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.success = false;
                    object.costCoin = 0;
                    object.userTree = null;
                }
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                if (message.costCoin != null && message.hasOwnProperty("costCoin"))
                    object.costCoin = message.costCoin;
                if (message.userTree != null && message.hasOwnProperty("userTree"))
                    object.userTree = $root.lumber.DataTable.UserTree.toObject(message.userTree, options);
                return object;
            };

            /**
             * Converts this TreeWateringResponse to JSON.
             * @function toJSON
             * @memberof lumber.Message.TreeWateringResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreeWateringResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreeWateringResponse
             * @function getTypeUrl
             * @memberof lumber.Message.TreeWateringResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreeWateringResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.TreeWateringResponse";
            };

            return TreeWateringResponse;
        })();

        Message.TreeWateringRequest = (function() {

            /**
             * Properties of a TreeWateringRequest.
             * @memberof lumber.Message
             * @interface ITreeWateringRequest
             */

            /**
             * Constructs a new TreeWateringRequest.
             * @memberof lumber.Message
             * @classdesc Represents a TreeWateringRequest.
             * @implements ITreeWateringRequest
             * @constructor
             * @param {lumber.Message.ITreeWateringRequest=} [properties] Properties to set
             */
            function TreeWateringRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new TreeWateringRequest instance using the specified properties.
             * @function create
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {lumber.Message.ITreeWateringRequest=} [properties] Properties to set
             * @returns {lumber.Message.TreeWateringRequest} TreeWateringRequest instance
             */
            TreeWateringRequest.create = function create(properties) {
                return new TreeWateringRequest(properties);
            };

            /**
             * Encodes the specified TreeWateringRequest message. Does not implicitly {@link lumber.Message.TreeWateringRequest.verify|verify} messages.
             * @function encode
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {lumber.Message.ITreeWateringRequest} message TreeWateringRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeWateringRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified TreeWateringRequest message, length delimited. Does not implicitly {@link lumber.Message.TreeWateringRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {lumber.Message.ITreeWateringRequest} message TreeWateringRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeWateringRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreeWateringRequest message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Message.TreeWateringRequest} TreeWateringRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeWateringRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Message.TreeWateringRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TreeWateringRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Message.TreeWateringRequest} TreeWateringRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeWateringRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreeWateringRequest message.
             * @function verify
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreeWateringRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a TreeWateringRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Message.TreeWateringRequest} TreeWateringRequest
             */
            TreeWateringRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Message.TreeWateringRequest)
                    return object;
                return new $root.lumber.Message.TreeWateringRequest();
            };

            /**
             * Creates a plain object from a TreeWateringRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {lumber.Message.TreeWateringRequest} message TreeWateringRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreeWateringRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this TreeWateringRequest to JSON.
             * @function toJSON
             * @memberof lumber.Message.TreeWateringRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreeWateringRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreeWateringRequest
             * @function getTypeUrl
             * @memberof lumber.Message.TreeWateringRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreeWateringRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Message.TreeWateringRequest";
            };

            return TreeWateringRequest;
        })();

        return Message;
    })();

    lumber.Spec = (function() {

        /**
         * Namespace Spec.
         * @memberof lumber
         * @namespace
         */
        var Spec = {};

        Spec.AxeProb = (function() {

            /**
             * Properties of an AxeProb.
             * @memberof lumber.Spec
             * @interface IAxeProb
             * @property {number|null} [Axe_Level] AxeProb Axe_Level
             * @property {number|null} [Axe_Type] AxeProb Axe_Type
             * @property {Array.<number>|null} [Axe_Prob] AxeProb Axe_Prob
             * @property {Array.<number>|null} [Prop_Ids] AxeProb Prop_Ids
             */

            /**
             * Constructs a new AxeProb.
             * @memberof lumber.Spec
             * @classdesc Represents an AxeProb.
             * @implements IAxeProb
             * @constructor
             * @param {lumber.Spec.IAxeProb=} [properties] Properties to set
             */
            function AxeProb(properties) {
                this.Axe_Prob = [];
                this.Prop_Ids = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AxeProb Axe_Level.
             * @member {number} Axe_Level
             * @memberof lumber.Spec.AxeProb
             * @instance
             */
            AxeProb.prototype.Axe_Level = 0;

            /**
             * AxeProb Axe_Type.
             * @member {number} Axe_Type
             * @memberof lumber.Spec.AxeProb
             * @instance
             */
            AxeProb.prototype.Axe_Type = 0;

            /**
             * AxeProb Axe_Prob.
             * @member {Array.<number>} Axe_Prob
             * @memberof lumber.Spec.AxeProb
             * @instance
             */
            AxeProb.prototype.Axe_Prob = $util.emptyArray;

            /**
             * AxeProb Prop_Ids.
             * @member {Array.<number>} Prop_Ids
             * @memberof lumber.Spec.AxeProb
             * @instance
             */
            AxeProb.prototype.Prop_Ids = $util.emptyArray;

            /**
             * Creates a new AxeProb instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {lumber.Spec.IAxeProb=} [properties] Properties to set
             * @returns {lumber.Spec.AxeProb} AxeProb instance
             */
            AxeProb.create = function create(properties) {
                return new AxeProb(properties);
            };

            /**
             * Encodes the specified AxeProb message. Does not implicitly {@link lumber.Spec.AxeProb.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {lumber.Spec.IAxeProb} message AxeProb message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeProb.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Axe_Level != null && Object.hasOwnProperty.call(message, "Axe_Level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Axe_Level);
                if (message.Axe_Type != null && Object.hasOwnProperty.call(message, "Axe_Type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Axe_Type);
                if (message.Axe_Prob != null && message.Axe_Prob.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.Axe_Prob.length; ++i)
                        writer.int32(message.Axe_Prob[i]);
                    writer.ldelim();
                }
                if (message.Prop_Ids != null && message.Prop_Ids.length) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork();
                    for (var i = 0; i < message.Prop_Ids.length; ++i)
                        writer.int32(message.Prop_Ids[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified AxeProb message, length delimited. Does not implicitly {@link lumber.Spec.AxeProb.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {lumber.Spec.IAxeProb} message AxeProb message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeProb.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AxeProb message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.AxeProb} AxeProb
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeProb.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.AxeProb();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Axe_Level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Axe_Type = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.Axe_Prob && message.Axe_Prob.length))
                                message.Axe_Prob = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.Axe_Prob.push(reader.int32());
                            } else
                                message.Axe_Prob.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.Prop_Ids && message.Prop_Ids.length))
                                message.Prop_Ids = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.Prop_Ids.push(reader.int32());
                            } else
                                message.Prop_Ids.push(reader.int32());
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
             * Decodes an AxeProb message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.AxeProb} AxeProb
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeProb.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AxeProb message.
             * @function verify
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AxeProb.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Axe_Level != null && message.hasOwnProperty("Axe_Level"))
                    if (!$util.isInteger(message.Axe_Level))
                        return "Axe_Level: integer expected";
                if (message.Axe_Type != null && message.hasOwnProperty("Axe_Type"))
                    if (!$util.isInteger(message.Axe_Type))
                        return "Axe_Type: integer expected";
                if (message.Axe_Prob != null && message.hasOwnProperty("Axe_Prob")) {
                    if (!Array.isArray(message.Axe_Prob))
                        return "Axe_Prob: array expected";
                    for (var i = 0; i < message.Axe_Prob.length; ++i)
                        if (!$util.isInteger(message.Axe_Prob[i]))
                            return "Axe_Prob: integer[] expected";
                }
                if (message.Prop_Ids != null && message.hasOwnProperty("Prop_Ids")) {
                    if (!Array.isArray(message.Prop_Ids))
                        return "Prop_Ids: array expected";
                    for (var i = 0; i < message.Prop_Ids.length; ++i)
                        if (!$util.isInteger(message.Prop_Ids[i]))
                            return "Prop_Ids: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an AxeProb message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.AxeProb} AxeProb
             */
            AxeProb.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.AxeProb)
                    return object;
                var message = new $root.lumber.Spec.AxeProb();
                if (object.Axe_Level != null)
                    message.Axe_Level = object.Axe_Level | 0;
                if (object.Axe_Type != null)
                    message.Axe_Type = object.Axe_Type | 0;
                if (object.Axe_Prob) {
                    if (!Array.isArray(object.Axe_Prob))
                        throw TypeError(".lumber.Spec.AxeProb.Axe_Prob: array expected");
                    message.Axe_Prob = [];
                    for (var i = 0; i < object.Axe_Prob.length; ++i)
                        message.Axe_Prob[i] = object.Axe_Prob[i] | 0;
                }
                if (object.Prop_Ids) {
                    if (!Array.isArray(object.Prop_Ids))
                        throw TypeError(".lumber.Spec.AxeProb.Prop_Ids: array expected");
                    message.Prop_Ids = [];
                    for (var i = 0; i < object.Prop_Ids.length; ++i)
                        message.Prop_Ids[i] = object.Prop_Ids[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an AxeProb message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {lumber.Spec.AxeProb} message AxeProb
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AxeProb.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.Axe_Prob = [];
                    object.Prop_Ids = [];
                }
                if (options.defaults) {
                    object.Axe_Level = 0;
                    object.Axe_Type = 0;
                }
                if (message.Axe_Level != null && message.hasOwnProperty("Axe_Level"))
                    object.Axe_Level = message.Axe_Level;
                if (message.Axe_Type != null && message.hasOwnProperty("Axe_Type"))
                    object.Axe_Type = message.Axe_Type;
                if (message.Axe_Prob && message.Axe_Prob.length) {
                    object.Axe_Prob = [];
                    for (var j = 0; j < message.Axe_Prob.length; ++j)
                        object.Axe_Prob[j] = message.Axe_Prob[j];
                }
                if (message.Prop_Ids && message.Prop_Ids.length) {
                    object.Prop_Ids = [];
                    for (var j = 0; j < message.Prop_Ids.length; ++j)
                        object.Prop_Ids[j] = message.Prop_Ids[j];
                }
                return object;
            };

            /**
             * Converts this AxeProb to JSON.
             * @function toJSON
             * @memberof lumber.Spec.AxeProb
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AxeProb.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AxeProb
             * @function getTypeUrl
             * @memberof lumber.Spec.AxeProb
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AxeProb.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.AxeProb";
            };

            return AxeProb;
        })();

        Spec.AxeUpgrade = (function() {

            /**
             * Properties of an AxeUpgrade.
             * @memberof lumber.Spec
             * @interface IAxeUpgrade
             * @property {number|null} [Axe_Level] AxeUpgrade Axe_Level
             * @property {number|null} [Burnish_Count] AxeUpgrade Burnish_Count
             * @property {number|null} [Burnish_Use] AxeUpgrade Burnish_Use
             * @property {number|null} [Upgrade_Use] AxeUpgrade Upgrade_Use
             * @property {number|null} [Success_Prob] AxeUpgrade Success_Prob
             * @property {number|null} [Add_Prob] AxeUpgrade Add_Prob
             * @property {number|null} [Must_Fail] AxeUpgrade Must_Fail
             */

            /**
             * Constructs a new AxeUpgrade.
             * @memberof lumber.Spec
             * @classdesc Represents an AxeUpgrade.
             * @implements IAxeUpgrade
             * @constructor
             * @param {lumber.Spec.IAxeUpgrade=} [properties] Properties to set
             */
            function AxeUpgrade(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AxeUpgrade Axe_Level.
             * @member {number} Axe_Level
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Axe_Level = 0;

            /**
             * AxeUpgrade Burnish_Count.
             * @member {number} Burnish_Count
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Burnish_Count = 0;

            /**
             * AxeUpgrade Burnish_Use.
             * @member {number} Burnish_Use
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Burnish_Use = 0;

            /**
             * AxeUpgrade Upgrade_Use.
             * @member {number} Upgrade_Use
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Upgrade_Use = 0;

            /**
             * AxeUpgrade Success_Prob.
             * @member {number} Success_Prob
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Success_Prob = 0;

            /**
             * AxeUpgrade Add_Prob.
             * @member {number} Add_Prob
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Add_Prob = 0;

            /**
             * AxeUpgrade Must_Fail.
             * @member {number} Must_Fail
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             */
            AxeUpgrade.prototype.Must_Fail = 0;

            /**
             * Creates a new AxeUpgrade instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {lumber.Spec.IAxeUpgrade=} [properties] Properties to set
             * @returns {lumber.Spec.AxeUpgrade} AxeUpgrade instance
             */
            AxeUpgrade.create = function create(properties) {
                return new AxeUpgrade(properties);
            };

            /**
             * Encodes the specified AxeUpgrade message. Does not implicitly {@link lumber.Spec.AxeUpgrade.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {lumber.Spec.IAxeUpgrade} message AxeUpgrade message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeUpgrade.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Axe_Level != null && Object.hasOwnProperty.call(message, "Axe_Level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Axe_Level);
                if (message.Burnish_Count != null && Object.hasOwnProperty.call(message, "Burnish_Count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Burnish_Count);
                if (message.Burnish_Use != null && Object.hasOwnProperty.call(message, "Burnish_Use"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Burnish_Use);
                if (message.Upgrade_Use != null && Object.hasOwnProperty.call(message, "Upgrade_Use"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Upgrade_Use);
                if (message.Success_Prob != null && Object.hasOwnProperty.call(message, "Success_Prob"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Success_Prob);
                if (message.Add_Prob != null && Object.hasOwnProperty.call(message, "Add_Prob"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Add_Prob);
                if (message.Must_Fail != null && Object.hasOwnProperty.call(message, "Must_Fail"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Must_Fail);
                return writer;
            };

            /**
             * Encodes the specified AxeUpgrade message, length delimited. Does not implicitly {@link lumber.Spec.AxeUpgrade.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {lumber.Spec.IAxeUpgrade} message AxeUpgrade message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AxeUpgrade.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AxeUpgrade message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.AxeUpgrade} AxeUpgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeUpgrade.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.AxeUpgrade();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Axe_Level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Burnish_Count = reader.int32();
                            break;
                        }
                    case 3: {
                            message.Burnish_Use = reader.int32();
                            break;
                        }
                    case 4: {
                            message.Upgrade_Use = reader.int32();
                            break;
                        }
                    case 5: {
                            message.Success_Prob = reader.int32();
                            break;
                        }
                    case 6: {
                            message.Add_Prob = reader.int32();
                            break;
                        }
                    case 7: {
                            message.Must_Fail = reader.int32();
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
             * Decodes an AxeUpgrade message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.AxeUpgrade} AxeUpgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AxeUpgrade.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AxeUpgrade message.
             * @function verify
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AxeUpgrade.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Axe_Level != null && message.hasOwnProperty("Axe_Level"))
                    if (!$util.isInteger(message.Axe_Level))
                        return "Axe_Level: integer expected";
                if (message.Burnish_Count != null && message.hasOwnProperty("Burnish_Count"))
                    if (!$util.isInteger(message.Burnish_Count))
                        return "Burnish_Count: integer expected";
                if (message.Burnish_Use != null && message.hasOwnProperty("Burnish_Use"))
                    if (!$util.isInteger(message.Burnish_Use))
                        return "Burnish_Use: integer expected";
                if (message.Upgrade_Use != null && message.hasOwnProperty("Upgrade_Use"))
                    if (!$util.isInteger(message.Upgrade_Use))
                        return "Upgrade_Use: integer expected";
                if (message.Success_Prob != null && message.hasOwnProperty("Success_Prob"))
                    if (!$util.isInteger(message.Success_Prob))
                        return "Success_Prob: integer expected";
                if (message.Add_Prob != null && message.hasOwnProperty("Add_Prob"))
                    if (!$util.isInteger(message.Add_Prob))
                        return "Add_Prob: integer expected";
                if (message.Must_Fail != null && message.hasOwnProperty("Must_Fail"))
                    if (!$util.isInteger(message.Must_Fail))
                        return "Must_Fail: integer expected";
                return null;
            };

            /**
             * Creates an AxeUpgrade message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.AxeUpgrade} AxeUpgrade
             */
            AxeUpgrade.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.AxeUpgrade)
                    return object;
                var message = new $root.lumber.Spec.AxeUpgrade();
                if (object.Axe_Level != null)
                    message.Axe_Level = object.Axe_Level | 0;
                if (object.Burnish_Count != null)
                    message.Burnish_Count = object.Burnish_Count | 0;
                if (object.Burnish_Use != null)
                    message.Burnish_Use = object.Burnish_Use | 0;
                if (object.Upgrade_Use != null)
                    message.Upgrade_Use = object.Upgrade_Use | 0;
                if (object.Success_Prob != null)
                    message.Success_Prob = object.Success_Prob | 0;
                if (object.Add_Prob != null)
                    message.Add_Prob = object.Add_Prob | 0;
                if (object.Must_Fail != null)
                    message.Must_Fail = object.Must_Fail | 0;
                return message;
            };

            /**
             * Creates a plain object from an AxeUpgrade message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {lumber.Spec.AxeUpgrade} message AxeUpgrade
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AxeUpgrade.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Axe_Level = 0;
                    object.Burnish_Count = 0;
                    object.Burnish_Use = 0;
                    object.Upgrade_Use = 0;
                    object.Success_Prob = 0;
                    object.Add_Prob = 0;
                    object.Must_Fail = 0;
                }
                if (message.Axe_Level != null && message.hasOwnProperty("Axe_Level"))
                    object.Axe_Level = message.Axe_Level;
                if (message.Burnish_Count != null && message.hasOwnProperty("Burnish_Count"))
                    object.Burnish_Count = message.Burnish_Count;
                if (message.Burnish_Use != null && message.hasOwnProperty("Burnish_Use"))
                    object.Burnish_Use = message.Burnish_Use;
                if (message.Upgrade_Use != null && message.hasOwnProperty("Upgrade_Use"))
                    object.Upgrade_Use = message.Upgrade_Use;
                if (message.Success_Prob != null && message.hasOwnProperty("Success_Prob"))
                    object.Success_Prob = message.Success_Prob;
                if (message.Add_Prob != null && message.hasOwnProperty("Add_Prob"))
                    object.Add_Prob = message.Add_Prob;
                if (message.Must_Fail != null && message.hasOwnProperty("Must_Fail"))
                    object.Must_Fail = message.Must_Fail;
                return object;
            };

            /**
             * Converts this AxeUpgrade to JSON.
             * @function toJSON
             * @memberof lumber.Spec.AxeUpgrade
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AxeUpgrade.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AxeUpgrade
             * @function getTypeUrl
             * @memberof lumber.Spec.AxeUpgrade
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AxeUpgrade.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.AxeUpgrade";
            };

            return AxeUpgrade;
        })();

        Spec.Config = (function() {

            /**
             * Properties of a Config.
             * @memberof lumber.Spec
             * @interface IConfig
             * @property {number|null} [Id] Config Id
             * @property {string|null} [Format] Config Format
             * @property {lumber.Spec.EConfigKey|null} [Key] Config Key
             * @property {string|null} [Value] Config Value
             * @property {string|null} [Desc] Config Desc
             */

            /**
             * Constructs a new Config.
             * @memberof lumber.Spec
             * @classdesc Represents a Config.
             * @implements IConfig
             * @constructor
             * @param {lumber.Spec.IConfig=} [properties] Properties to set
             */
            function Config(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Config Id.
             * @member {number} Id
             * @memberof lumber.Spec.Config
             * @instance
             */
            Config.prototype.Id = 0;

            /**
             * Config Format.
             * @member {string} Format
             * @memberof lumber.Spec.Config
             * @instance
             */
            Config.prototype.Format = "";

            /**
             * Config Key.
             * @member {lumber.Spec.EConfigKey} Key
             * @memberof lumber.Spec.Config
             * @instance
             */
            Config.prototype.Key = 0;

            /**
             * Config Value.
             * @member {string} Value
             * @memberof lumber.Spec.Config
             * @instance
             */
            Config.prototype.Value = "";

            /**
             * Config Desc.
             * @member {string} Desc
             * @memberof lumber.Spec.Config
             * @instance
             */
            Config.prototype.Desc = "";

            /**
             * Creates a new Config instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.Config
             * @static
             * @param {lumber.Spec.IConfig=} [properties] Properties to set
             * @returns {lumber.Spec.Config} Config instance
             */
            Config.create = function create(properties) {
                return new Config(properties);
            };

            /**
             * Encodes the specified Config message. Does not implicitly {@link lumber.Spec.Config.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.Config
             * @static
             * @param {lumber.Spec.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
                if (message.Format != null && Object.hasOwnProperty.call(message, "Format"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Format);
                if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Key);
                if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.Value);
                if (message.Desc != null && Object.hasOwnProperty.call(message, "Desc"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.Desc);
                return writer;
            };

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link lumber.Spec.Config.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.Config
             * @static
             * @param {lumber.Spec.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.Config();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Id = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Format = reader.string();
                            break;
                        }
                    case 3: {
                            message.Key = reader.int32();
                            break;
                        }
                    case 4: {
                            message.Value = reader.string();
                            break;
                        }
                    case 5: {
                            message.Desc = reader.string();
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
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Config message.
             * @function verify
             * @memberof lumber.Spec.Config
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Config.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (!$util.isInteger(message.Id))
                        return "Id: integer expected";
                if (message.Format != null && message.hasOwnProperty("Format"))
                    if (!$util.isString(message.Format))
                        return "Format: string expected";
                if (message.Key != null && message.hasOwnProperty("Key"))
                    switch (message.Key) {
                    default:
                        return "Key: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        break;
                    }
                if (message.Value != null && message.hasOwnProperty("Value"))
                    if (!$util.isString(message.Value))
                        return "Value: string expected";
                if (message.Desc != null && message.hasOwnProperty("Desc"))
                    if (!$util.isString(message.Desc))
                        return "Desc: string expected";
                return null;
            };

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.Config
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.Config} Config
             */
            Config.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.Config)
                    return object;
                var message = new $root.lumber.Spec.Config();
                if (object.Id != null)
                    message.Id = object.Id | 0;
                if (object.Format != null)
                    message.Format = String(object.Format);
                switch (object.Key) {
                default:
                    if (typeof object.Key === "number") {
                        message.Key = object.Key;
                        break;
                    }
                    break;
                case "Default":
                case 0:
                    message.Key = 0;
                    break;
                case "Bacepool_On":
                case 1:
                    message.Key = 1;
                    break;
                case "Bacepool_Off":
                case 2:
                    message.Key = 2;
                    break;
                case "Middlepoor_Limit":
                case 3:
                    message.Key = 3;
                    break;
                case "Seniorpoor_Limit":
                case 4:
                    message.Key = 4;
                    break;
                case "Proportion":
                case 5:
                    message.Key = 5;
                    break;
                case "Brokerage":
                case 6:
                    message.Key = 6;
                    break;
                case "Initial_Gold":
                case 7:
                    message.Key = 7;
                    break;
                case "Coin_Iron_Axe":
                case 8:
                    message.Key = 8;
                    break;
                case "Coin_Silver_Axe":
                case 9:
                    message.Key = 9;
                    break;
                case "Coin_Gold_Axe":
                case 10:
                    message.Key = 10;
                    break;
                case "Cost_Iron_Axe":
                case 11:
                    message.Key = 11;
                    break;
                case "Cost_Silver_Axe":
                case 12:
                    message.Key = 12;
                    break;
                case "Cost_Gold_Axe":
                case 13:
                    message.Key = 13;
                    break;
                }
                if (object.Value != null)
                    message.Value = String(object.Value);
                if (object.Desc != null)
                    message.Desc = String(object.Desc);
                return message;
            };

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.Config
             * @static
             * @param {lumber.Spec.Config} message Config
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Config.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Id = 0;
                    object.Format = "";
                    object.Key = options.enums === String ? "Default" : 0;
                    object.Value = "";
                    object.Desc = "";
                }
                if (message.Id != null && message.hasOwnProperty("Id"))
                    object.Id = message.Id;
                if (message.Format != null && message.hasOwnProperty("Format"))
                    object.Format = message.Format;
                if (message.Key != null && message.hasOwnProperty("Key"))
                    object.Key = options.enums === String ? $root.lumber.Spec.EConfigKey[message.Key] === undefined ? message.Key : $root.lumber.Spec.EConfigKey[message.Key] : message.Key;
                if (message.Value != null && message.hasOwnProperty("Value"))
                    object.Value = message.Value;
                if (message.Desc != null && message.hasOwnProperty("Desc"))
                    object.Desc = message.Desc;
                return object;
            };

            /**
             * Converts this Config to JSON.
             * @function toJSON
             * @memberof lumber.Spec.Config
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Config.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Config
             * @function getTypeUrl
             * @memberof lumber.Spec.Config
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.Config";
            };

            return Config;
        })();

        /**
         * EConfigKey enum.
         * @name lumber.Spec.EConfigKey
         * @enum {number}
         * @property {number} Default=0 Default value
         * @property {number} Bacepool_On=1 Bacepool_On value
         * @property {number} Bacepool_Off=2 Bacepool_Off value
         * @property {number} Middlepoor_Limit=3 Middlepoor_Limit value
         * @property {number} Seniorpoor_Limit=4 Seniorpoor_Limit value
         * @property {number} Proportion=5 Proportion value
         * @property {number} Brokerage=6 Brokerage value
         * @property {number} Initial_Gold=7 Initial_Gold value
         * @property {number} Coin_Iron_Axe=8 Coin_Iron_Axe value
         * @property {number} Coin_Silver_Axe=9 Coin_Silver_Axe value
         * @property {number} Coin_Gold_Axe=10 Coin_Gold_Axe value
         * @property {number} Cost_Iron_Axe=11 Cost_Iron_Axe value
         * @property {number} Cost_Silver_Axe=12 Cost_Silver_Axe value
         * @property {number} Cost_Gold_Axe=13 Cost_Gold_Axe value
         */
        Spec.EConfigKey = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "Bacepool_On"] = 1;
            values[valuesById[2] = "Bacepool_Off"] = 2;
            values[valuesById[3] = "Middlepoor_Limit"] = 3;
            values[valuesById[4] = "Seniorpoor_Limit"] = 4;
            values[valuesById[5] = "Proportion"] = 5;
            values[valuesById[6] = "Brokerage"] = 6;
            values[valuesById[7] = "Initial_Gold"] = 7;
            values[valuesById[8] = "Coin_Iron_Axe"] = 8;
            values[valuesById[9] = "Coin_Silver_Axe"] = 9;
            values[valuesById[10] = "Coin_Gold_Axe"] = 10;
            values[valuesById[11] = "Cost_Iron_Axe"] = 11;
            values[valuesById[12] = "Cost_Silver_Axe"] = 12;
            values[valuesById[13] = "Cost_Gold_Axe"] = 13;
            return values;
        })();

        Spec.Fruit = (function() {

            /**
             * Properties of a Fruit.
             * @memberof lumber.Spec
             * @interface IFruit
             * @property {number|null} [Pool_ID] Fruit Pool_ID
             * @property {number|null} [Prop_ID] Fruit Prop_ID
             * @property {Array.<number>|null} [Prop_Range] Fruit Prop_Range
             */

            /**
             * Constructs a new Fruit.
             * @memberof lumber.Spec
             * @classdesc Represents a Fruit.
             * @implements IFruit
             * @constructor
             * @param {lumber.Spec.IFruit=} [properties] Properties to set
             */
            function Fruit(properties) {
                this.Prop_Range = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Fruit Pool_ID.
             * @member {number} Pool_ID
             * @memberof lumber.Spec.Fruit
             * @instance
             */
            Fruit.prototype.Pool_ID = 0;

            /**
             * Fruit Prop_ID.
             * @member {number} Prop_ID
             * @memberof lumber.Spec.Fruit
             * @instance
             */
            Fruit.prototype.Prop_ID = 0;

            /**
             * Fruit Prop_Range.
             * @member {Array.<number>} Prop_Range
             * @memberof lumber.Spec.Fruit
             * @instance
             */
            Fruit.prototype.Prop_Range = $util.emptyArray;

            /**
             * Creates a new Fruit instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {lumber.Spec.IFruit=} [properties] Properties to set
             * @returns {lumber.Spec.Fruit} Fruit instance
             */
            Fruit.create = function create(properties) {
                return new Fruit(properties);
            };

            /**
             * Encodes the specified Fruit message. Does not implicitly {@link lumber.Spec.Fruit.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {lumber.Spec.IFruit} message Fruit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Fruit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Pool_ID != null && Object.hasOwnProperty.call(message, "Pool_ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Pool_ID);
                if (message.Prop_ID != null && Object.hasOwnProperty.call(message, "Prop_ID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Prop_ID);
                if (message.Prop_Range != null && message.Prop_Range.length) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork();
                    for (var i = 0; i < message.Prop_Range.length; ++i)
                        writer.int32(message.Prop_Range[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Fruit message, length delimited. Does not implicitly {@link lumber.Spec.Fruit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {lumber.Spec.IFruit} message Fruit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Fruit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Fruit message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.Fruit} Fruit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Fruit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.Fruit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Pool_ID = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Prop_ID = reader.int32();
                            break;
                        }
                    case 3: {
                            if (!(message.Prop_Range && message.Prop_Range.length))
                                message.Prop_Range = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.Prop_Range.push(reader.int32());
                            } else
                                message.Prop_Range.push(reader.int32());
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
             * Decodes a Fruit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.Fruit} Fruit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Fruit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Fruit message.
             * @function verify
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Fruit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Pool_ID != null && message.hasOwnProperty("Pool_ID"))
                    if (!$util.isInteger(message.Pool_ID))
                        return "Pool_ID: integer expected";
                if (message.Prop_ID != null && message.hasOwnProperty("Prop_ID"))
                    if (!$util.isInteger(message.Prop_ID))
                        return "Prop_ID: integer expected";
                if (message.Prop_Range != null && message.hasOwnProperty("Prop_Range")) {
                    if (!Array.isArray(message.Prop_Range))
                        return "Prop_Range: array expected";
                    for (var i = 0; i < message.Prop_Range.length; ++i)
                        if (!$util.isInteger(message.Prop_Range[i]))
                            return "Prop_Range: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a Fruit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.Fruit} Fruit
             */
            Fruit.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.Fruit)
                    return object;
                var message = new $root.lumber.Spec.Fruit();
                if (object.Pool_ID != null)
                    message.Pool_ID = object.Pool_ID | 0;
                if (object.Prop_ID != null)
                    message.Prop_ID = object.Prop_ID | 0;
                if (object.Prop_Range) {
                    if (!Array.isArray(object.Prop_Range))
                        throw TypeError(".lumber.Spec.Fruit.Prop_Range: array expected");
                    message.Prop_Range = [];
                    for (var i = 0; i < object.Prop_Range.length; ++i)
                        message.Prop_Range[i] = object.Prop_Range[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a Fruit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {lumber.Spec.Fruit} message Fruit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Fruit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Prop_Range = [];
                if (options.defaults) {
                    object.Pool_ID = 0;
                    object.Prop_ID = 0;
                }
                if (message.Pool_ID != null && message.hasOwnProperty("Pool_ID"))
                    object.Pool_ID = message.Pool_ID;
                if (message.Prop_ID != null && message.hasOwnProperty("Prop_ID"))
                    object.Prop_ID = message.Prop_ID;
                if (message.Prop_Range && message.Prop_Range.length) {
                    object.Prop_Range = [];
                    for (var j = 0; j < message.Prop_Range.length; ++j)
                        object.Prop_Range[j] = message.Prop_Range[j];
                }
                return object;
            };

            /**
             * Converts this Fruit to JSON.
             * @function toJSON
             * @memberof lumber.Spec.Fruit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Fruit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Fruit
             * @function getTypeUrl
             * @memberof lumber.Spec.Fruit
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Fruit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.Fruit";
            };

            return Fruit;
        })();

        Spec.Goods = (function() {

            /**
             * Properties of a Goods.
             * @memberof lumber.Spec
             * @interface IGoods
             * @property {number|null} [Goods_ID] Goods Goods_ID
             * @property {number|null} [Goods_Type] Goods Goods_Type
             * @property {string|null} [Goods_Name] Goods Goods_Name
             * @property {number|null} [Pay_Prop] Goods Pay_Prop
             * @property {number|null} [Price] Goods Price
             * @property {Array.<number>|null} [Include_goods] Goods Include_goods
             * @property {Array.<number>|null} [Goods_Num] Goods Goods_Num
             * @property {string|null} [Goods_Icon] Goods Goods_Icon
             */

            /**
             * Constructs a new Goods.
             * @memberof lumber.Spec
             * @classdesc Represents a Goods.
             * @implements IGoods
             * @constructor
             * @param {lumber.Spec.IGoods=} [properties] Properties to set
             */
            function Goods(properties) {
                this.Include_goods = [];
                this.Goods_Num = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Goods Goods_ID.
             * @member {number} Goods_ID
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Goods_ID = 0;

            /**
             * Goods Goods_Type.
             * @member {number} Goods_Type
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Goods_Type = 0;

            /**
             * Goods Goods_Name.
             * @member {string} Goods_Name
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Goods_Name = "";

            /**
             * Goods Pay_Prop.
             * @member {number} Pay_Prop
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Pay_Prop = 0;

            /**
             * Goods Price.
             * @member {number} Price
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Price = 0;

            /**
             * Goods Include_goods.
             * @member {Array.<number>} Include_goods
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Include_goods = $util.emptyArray;

            /**
             * Goods Goods_Num.
             * @member {Array.<number>} Goods_Num
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Goods_Num = $util.emptyArray;

            /**
             * Goods Goods_Icon.
             * @member {string} Goods_Icon
             * @memberof lumber.Spec.Goods
             * @instance
             */
            Goods.prototype.Goods_Icon = "";

            /**
             * Creates a new Goods instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.Goods
             * @static
             * @param {lumber.Spec.IGoods=} [properties] Properties to set
             * @returns {lumber.Spec.Goods} Goods instance
             */
            Goods.create = function create(properties) {
                return new Goods(properties);
            };

            /**
             * Encodes the specified Goods message. Does not implicitly {@link lumber.Spec.Goods.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.Goods
             * @static
             * @param {lumber.Spec.IGoods} message Goods message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Goods.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Goods_ID != null && Object.hasOwnProperty.call(message, "Goods_ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Goods_ID);
                if (message.Goods_Type != null && Object.hasOwnProperty.call(message, "Goods_Type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Goods_Type);
                if (message.Goods_Name != null && Object.hasOwnProperty.call(message, "Goods_Name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Goods_Name);
                if (message.Pay_Prop != null && Object.hasOwnProperty.call(message, "Pay_Prop"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Pay_Prop);
                if (message.Price != null && Object.hasOwnProperty.call(message, "Price"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Price);
                if (message.Include_goods != null && message.Include_goods.length) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork();
                    for (var i = 0; i < message.Include_goods.length; ++i)
                        writer.int32(message.Include_goods[i]);
                    writer.ldelim();
                }
                if (message.Goods_Num != null && message.Goods_Num.length) {
                    writer.uint32(/* id 7, wireType 2 =*/58).fork();
                    for (var i = 0; i < message.Goods_Num.length; ++i)
                        writer.int32(message.Goods_Num[i]);
                    writer.ldelim();
                }
                if (message.Goods_Icon != null && Object.hasOwnProperty.call(message, "Goods_Icon"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.Goods_Icon);
                return writer;
            };

            /**
             * Encodes the specified Goods message, length delimited. Does not implicitly {@link lumber.Spec.Goods.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.Goods
             * @static
             * @param {lumber.Spec.IGoods} message Goods message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Goods.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Goods message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.Goods
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.Goods} Goods
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Goods.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.Goods();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Goods_ID = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Goods_Type = reader.int32();
                            break;
                        }
                    case 3: {
                            message.Goods_Name = reader.string();
                            break;
                        }
                    case 4: {
                            message.Pay_Prop = reader.int32();
                            break;
                        }
                    case 5: {
                            message.Price = reader.int32();
                            break;
                        }
                    case 6: {
                            if (!(message.Include_goods && message.Include_goods.length))
                                message.Include_goods = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.Include_goods.push(reader.int32());
                            } else
                                message.Include_goods.push(reader.int32());
                            break;
                        }
                    case 7: {
                            if (!(message.Goods_Num && message.Goods_Num.length))
                                message.Goods_Num = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.Goods_Num.push(reader.int32());
                            } else
                                message.Goods_Num.push(reader.int32());
                            break;
                        }
                    case 8: {
                            message.Goods_Icon = reader.string();
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
             * Decodes a Goods message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.Goods
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.Goods} Goods
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Goods.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Goods message.
             * @function verify
             * @memberof lumber.Spec.Goods
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Goods.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Goods_ID != null && message.hasOwnProperty("Goods_ID"))
                    if (!$util.isInteger(message.Goods_ID))
                        return "Goods_ID: integer expected";
                if (message.Goods_Type != null && message.hasOwnProperty("Goods_Type"))
                    if (!$util.isInteger(message.Goods_Type))
                        return "Goods_Type: integer expected";
                if (message.Goods_Name != null && message.hasOwnProperty("Goods_Name"))
                    if (!$util.isString(message.Goods_Name))
                        return "Goods_Name: string expected";
                if (message.Pay_Prop != null && message.hasOwnProperty("Pay_Prop"))
                    if (!$util.isInteger(message.Pay_Prop))
                        return "Pay_Prop: integer expected";
                if (message.Price != null && message.hasOwnProperty("Price"))
                    if (!$util.isInteger(message.Price))
                        return "Price: integer expected";
                if (message.Include_goods != null && message.hasOwnProperty("Include_goods")) {
                    if (!Array.isArray(message.Include_goods))
                        return "Include_goods: array expected";
                    for (var i = 0; i < message.Include_goods.length; ++i)
                        if (!$util.isInteger(message.Include_goods[i]))
                            return "Include_goods: integer[] expected";
                }
                if (message.Goods_Num != null && message.hasOwnProperty("Goods_Num")) {
                    if (!Array.isArray(message.Goods_Num))
                        return "Goods_Num: array expected";
                    for (var i = 0; i < message.Goods_Num.length; ++i)
                        if (!$util.isInteger(message.Goods_Num[i]))
                            return "Goods_Num: integer[] expected";
                }
                if (message.Goods_Icon != null && message.hasOwnProperty("Goods_Icon"))
                    if (!$util.isString(message.Goods_Icon))
                        return "Goods_Icon: string expected";
                return null;
            };

            /**
             * Creates a Goods message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.Goods
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.Goods} Goods
             */
            Goods.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.Goods)
                    return object;
                var message = new $root.lumber.Spec.Goods();
                if (object.Goods_ID != null)
                    message.Goods_ID = object.Goods_ID | 0;
                if (object.Goods_Type != null)
                    message.Goods_Type = object.Goods_Type | 0;
                if (object.Goods_Name != null)
                    message.Goods_Name = String(object.Goods_Name);
                if (object.Pay_Prop != null)
                    message.Pay_Prop = object.Pay_Prop | 0;
                if (object.Price != null)
                    message.Price = object.Price | 0;
                if (object.Include_goods) {
                    if (!Array.isArray(object.Include_goods))
                        throw TypeError(".lumber.Spec.Goods.Include_goods: array expected");
                    message.Include_goods = [];
                    for (var i = 0; i < object.Include_goods.length; ++i)
                        message.Include_goods[i] = object.Include_goods[i] | 0;
                }
                if (object.Goods_Num) {
                    if (!Array.isArray(object.Goods_Num))
                        throw TypeError(".lumber.Spec.Goods.Goods_Num: array expected");
                    message.Goods_Num = [];
                    for (var i = 0; i < object.Goods_Num.length; ++i)
                        message.Goods_Num[i] = object.Goods_Num[i] | 0;
                }
                if (object.Goods_Icon != null)
                    message.Goods_Icon = String(object.Goods_Icon);
                return message;
            };

            /**
             * Creates a plain object from a Goods message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.Goods
             * @static
             * @param {lumber.Spec.Goods} message Goods
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Goods.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.Include_goods = [];
                    object.Goods_Num = [];
                }
                if (options.defaults) {
                    object.Goods_ID = 0;
                    object.Goods_Type = 0;
                    object.Goods_Name = "";
                    object.Pay_Prop = 0;
                    object.Price = 0;
                    object.Goods_Icon = "";
                }
                if (message.Goods_ID != null && message.hasOwnProperty("Goods_ID"))
                    object.Goods_ID = message.Goods_ID;
                if (message.Goods_Type != null && message.hasOwnProperty("Goods_Type"))
                    object.Goods_Type = message.Goods_Type;
                if (message.Goods_Name != null && message.hasOwnProperty("Goods_Name"))
                    object.Goods_Name = message.Goods_Name;
                if (message.Pay_Prop != null && message.hasOwnProperty("Pay_Prop"))
                    object.Pay_Prop = message.Pay_Prop;
                if (message.Price != null && message.hasOwnProperty("Price"))
                    object.Price = message.Price;
                if (message.Include_goods && message.Include_goods.length) {
                    object.Include_goods = [];
                    for (var j = 0; j < message.Include_goods.length; ++j)
                        object.Include_goods[j] = message.Include_goods[j];
                }
                if (message.Goods_Num && message.Goods_Num.length) {
                    object.Goods_Num = [];
                    for (var j = 0; j < message.Goods_Num.length; ++j)
                        object.Goods_Num[j] = message.Goods_Num[j];
                }
                if (message.Goods_Icon != null && message.hasOwnProperty("Goods_Icon"))
                    object.Goods_Icon = message.Goods_Icon;
                return object;
            };

            /**
             * Converts this Goods to JSON.
             * @function toJSON
             * @memberof lumber.Spec.Goods
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Goods.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Goods
             * @function getTypeUrl
             * @memberof lumber.Spec.Goods
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Goods.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.Goods";
            };

            return Goods;
        })();

        Spec.Prop = (function() {

            /**
             * Properties of a Prop.
             * @memberof lumber.Spec
             * @interface IProp
             * @property {number|null} [Prop_ID] Prop Prop_ID
             * @property {string|null} [Prop_Name] Prop Prop_Name
             * @property {number|null} [Prop_Type] Prop Prop_Type
             * @property {number|null} [Prop_Rare] Prop Prop_Rare
             * @property {string|null} [Prop_Desc] Prop Prop_Desc
             * @property {number|null} [IsStack] Prop IsStack
             * @property {number|null} [StackLimit] Prop StackLimit
             * @property {number|null} [Prop_Price] Prop Prop_Price
             * @property {number|null} [Debris_Comp] Prop Debris_Comp
             * @property {number|null} [Compose_ID] Prop Compose_ID
             * @property {string|null} [Prop_Url] Prop Prop_Url
             */

            /**
             * Constructs a new Prop.
             * @memberof lumber.Spec
             * @classdesc Represents a Prop.
             * @implements IProp
             * @constructor
             * @param {lumber.Spec.IProp=} [properties] Properties to set
             */
            function Prop(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Prop Prop_ID.
             * @member {number} Prop_ID
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_ID = 0;

            /**
             * Prop Prop_Name.
             * @member {string} Prop_Name
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_Name = "";

            /**
             * Prop Prop_Type.
             * @member {number} Prop_Type
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_Type = 0;

            /**
             * Prop Prop_Rare.
             * @member {number} Prop_Rare
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_Rare = 0;

            /**
             * Prop Prop_Desc.
             * @member {string} Prop_Desc
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_Desc = "";

            /**
             * Prop IsStack.
             * @member {number} IsStack
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.IsStack = 0;

            /**
             * Prop StackLimit.
             * @member {number} StackLimit
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.StackLimit = 0;

            /**
             * Prop Prop_Price.
             * @member {number} Prop_Price
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_Price = 0;

            /**
             * Prop Debris_Comp.
             * @member {number} Debris_Comp
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Debris_Comp = 0;

            /**
             * Prop Compose_ID.
             * @member {number} Compose_ID
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Compose_ID = 0;

            /**
             * Prop Prop_Url.
             * @member {string} Prop_Url
             * @memberof lumber.Spec.Prop
             * @instance
             */
            Prop.prototype.Prop_Url = "";

            /**
             * Creates a new Prop instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.Prop
             * @static
             * @param {lumber.Spec.IProp=} [properties] Properties to set
             * @returns {lumber.Spec.Prop} Prop instance
             */
            Prop.create = function create(properties) {
                return new Prop(properties);
            };

            /**
             * Encodes the specified Prop message. Does not implicitly {@link lumber.Spec.Prop.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.Prop
             * @static
             * @param {lumber.Spec.IProp} message Prop message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Prop.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Prop_ID != null && Object.hasOwnProperty.call(message, "Prop_ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Prop_ID);
                if (message.Prop_Name != null && Object.hasOwnProperty.call(message, "Prop_Name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Prop_Name);
                if (message.Prop_Type != null && Object.hasOwnProperty.call(message, "Prop_Type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Prop_Type);
                if (message.Prop_Rare != null && Object.hasOwnProperty.call(message, "Prop_Rare"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Prop_Rare);
                if (message.Prop_Desc != null && Object.hasOwnProperty.call(message, "Prop_Desc"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.Prop_Desc);
                if (message.IsStack != null && Object.hasOwnProperty.call(message, "IsStack"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.IsStack);
                if (message.StackLimit != null && Object.hasOwnProperty.call(message, "StackLimit"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.StackLimit);
                if (message.Prop_Price != null && Object.hasOwnProperty.call(message, "Prop_Price"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Prop_Price);
                if (message.Debris_Comp != null && Object.hasOwnProperty.call(message, "Debris_Comp"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Debris_Comp);
                if (message.Compose_ID != null && Object.hasOwnProperty.call(message, "Compose_ID"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Compose_ID);
                if (message.Prop_Url != null && Object.hasOwnProperty.call(message, "Prop_Url"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.Prop_Url);
                return writer;
            };

            /**
             * Encodes the specified Prop message, length delimited. Does not implicitly {@link lumber.Spec.Prop.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.Prop
             * @static
             * @param {lumber.Spec.IProp} message Prop message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Prop.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Prop message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.Prop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.Prop} Prop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Prop.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.Prop();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Prop_ID = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Prop_Name = reader.string();
                            break;
                        }
                    case 3: {
                            message.Prop_Type = reader.int32();
                            break;
                        }
                    case 4: {
                            message.Prop_Rare = reader.int32();
                            break;
                        }
                    case 5: {
                            message.Prop_Desc = reader.string();
                            break;
                        }
                    case 6: {
                            message.IsStack = reader.int32();
                            break;
                        }
                    case 7: {
                            message.StackLimit = reader.int32();
                            break;
                        }
                    case 8: {
                            message.Prop_Price = reader.int32();
                            break;
                        }
                    case 9: {
                            message.Debris_Comp = reader.int32();
                            break;
                        }
                    case 10: {
                            message.Compose_ID = reader.int32();
                            break;
                        }
                    case 11: {
                            message.Prop_Url = reader.string();
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
             * Decodes a Prop message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.Prop
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.Prop} Prop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Prop.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Prop message.
             * @function verify
             * @memberof lumber.Spec.Prop
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Prop.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Prop_ID != null && message.hasOwnProperty("Prop_ID"))
                    if (!$util.isInteger(message.Prop_ID))
                        return "Prop_ID: integer expected";
                if (message.Prop_Name != null && message.hasOwnProperty("Prop_Name"))
                    if (!$util.isString(message.Prop_Name))
                        return "Prop_Name: string expected";
                if (message.Prop_Type != null && message.hasOwnProperty("Prop_Type"))
                    if (!$util.isInteger(message.Prop_Type))
                        return "Prop_Type: integer expected";
                if (message.Prop_Rare != null && message.hasOwnProperty("Prop_Rare"))
                    if (!$util.isInteger(message.Prop_Rare))
                        return "Prop_Rare: integer expected";
                if (message.Prop_Desc != null && message.hasOwnProperty("Prop_Desc"))
                    if (!$util.isString(message.Prop_Desc))
                        return "Prop_Desc: string expected";
                if (message.IsStack != null && message.hasOwnProperty("IsStack"))
                    if (!$util.isInteger(message.IsStack))
                        return "IsStack: integer expected";
                if (message.StackLimit != null && message.hasOwnProperty("StackLimit"))
                    if (!$util.isInteger(message.StackLimit))
                        return "StackLimit: integer expected";
                if (message.Prop_Price != null && message.hasOwnProperty("Prop_Price"))
                    if (!$util.isInteger(message.Prop_Price))
                        return "Prop_Price: integer expected";
                if (message.Debris_Comp != null && message.hasOwnProperty("Debris_Comp"))
                    if (!$util.isInteger(message.Debris_Comp))
                        return "Debris_Comp: integer expected";
                if (message.Compose_ID != null && message.hasOwnProperty("Compose_ID"))
                    if (!$util.isInteger(message.Compose_ID))
                        return "Compose_ID: integer expected";
                if (message.Prop_Url != null && message.hasOwnProperty("Prop_Url"))
                    if (!$util.isString(message.Prop_Url))
                        return "Prop_Url: string expected";
                return null;
            };

            /**
             * Creates a Prop message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.Prop
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.Prop} Prop
             */
            Prop.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.Prop)
                    return object;
                var message = new $root.lumber.Spec.Prop();
                if (object.Prop_ID != null)
                    message.Prop_ID = object.Prop_ID | 0;
                if (object.Prop_Name != null)
                    message.Prop_Name = String(object.Prop_Name);
                if (object.Prop_Type != null)
                    message.Prop_Type = object.Prop_Type | 0;
                if (object.Prop_Rare != null)
                    message.Prop_Rare = object.Prop_Rare | 0;
                if (object.Prop_Desc != null)
                    message.Prop_Desc = String(object.Prop_Desc);
                if (object.IsStack != null)
                    message.IsStack = object.IsStack | 0;
                if (object.StackLimit != null)
                    message.StackLimit = object.StackLimit | 0;
                if (object.Prop_Price != null)
                    message.Prop_Price = object.Prop_Price | 0;
                if (object.Debris_Comp != null)
                    message.Debris_Comp = object.Debris_Comp | 0;
                if (object.Compose_ID != null)
                    message.Compose_ID = object.Compose_ID | 0;
                if (object.Prop_Url != null)
                    message.Prop_Url = String(object.Prop_Url);
                return message;
            };

            /**
             * Creates a plain object from a Prop message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.Prop
             * @static
             * @param {lumber.Spec.Prop} message Prop
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Prop.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Prop_ID = 0;
                    object.Prop_Name = "";
                    object.Prop_Type = 0;
                    object.Prop_Rare = 0;
                    object.Prop_Desc = "";
                    object.IsStack = 0;
                    object.StackLimit = 0;
                    object.Prop_Price = 0;
                    object.Debris_Comp = 0;
                    object.Compose_ID = 0;
                    object.Prop_Url = "";
                }
                if (message.Prop_ID != null && message.hasOwnProperty("Prop_ID"))
                    object.Prop_ID = message.Prop_ID;
                if (message.Prop_Name != null && message.hasOwnProperty("Prop_Name"))
                    object.Prop_Name = message.Prop_Name;
                if (message.Prop_Type != null && message.hasOwnProperty("Prop_Type"))
                    object.Prop_Type = message.Prop_Type;
                if (message.Prop_Rare != null && message.hasOwnProperty("Prop_Rare"))
                    object.Prop_Rare = message.Prop_Rare;
                if (message.Prop_Desc != null && message.hasOwnProperty("Prop_Desc"))
                    object.Prop_Desc = message.Prop_Desc;
                if (message.IsStack != null && message.hasOwnProperty("IsStack"))
                    object.IsStack = message.IsStack;
                if (message.StackLimit != null && message.hasOwnProperty("StackLimit"))
                    object.StackLimit = message.StackLimit;
                if (message.Prop_Price != null && message.hasOwnProperty("Prop_Price"))
                    object.Prop_Price = message.Prop_Price;
                if (message.Debris_Comp != null && message.hasOwnProperty("Debris_Comp"))
                    object.Debris_Comp = message.Debris_Comp;
                if (message.Compose_ID != null && message.hasOwnProperty("Compose_ID"))
                    object.Compose_ID = message.Compose_ID;
                if (message.Prop_Url != null && message.hasOwnProperty("Prop_Url"))
                    object.Prop_Url = message.Prop_Url;
                return object;
            };

            /**
             * Converts this Prop to JSON.
             * @function toJSON
             * @memberof lumber.Spec.Prop
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Prop.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Prop
             * @function getTypeUrl
             * @memberof lumber.Spec.Prop
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Prop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.Prop";
            };

            return Prop;
        })();

        Spec.Sonpool = (function() {

            /**
             * Properties of a Sonpool.
             * @memberof lumber.Spec
             * @interface ISonpool
             * @property {number|null} [Pool_ID] Sonpool Pool_ID
             * @property {number|null} [Sonpool1_ID] Sonpool Sonpool1_ID
             * @property {number|null} [Sonpool2_ID] Sonpool Sonpool2_ID
             * @property {number|null} [Sonpool3_ID] Sonpool Sonpool3_ID
             * @property {number|null} [Sonpool4_ID] Sonpool Sonpool4_ID
             * @property {number|null} [Sonpool5_ID] Sonpool Sonpool5_ID
             * @property {number|null} [Sonpool6_ID] Sonpool Sonpool6_ID
             */

            /**
             * Constructs a new Sonpool.
             * @memberof lumber.Spec
             * @classdesc Represents a Sonpool.
             * @implements ISonpool
             * @constructor
             * @param {lumber.Spec.ISonpool=} [properties] Properties to set
             */
            function Sonpool(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Sonpool Pool_ID.
             * @member {number} Pool_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Pool_ID = 0;

            /**
             * Sonpool Sonpool1_ID.
             * @member {number} Sonpool1_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Sonpool1_ID = 0;

            /**
             * Sonpool Sonpool2_ID.
             * @member {number} Sonpool2_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Sonpool2_ID = 0;

            /**
             * Sonpool Sonpool3_ID.
             * @member {number} Sonpool3_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Sonpool3_ID = 0;

            /**
             * Sonpool Sonpool4_ID.
             * @member {number} Sonpool4_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Sonpool4_ID = 0;

            /**
             * Sonpool Sonpool5_ID.
             * @member {number} Sonpool5_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Sonpool5_ID = 0;

            /**
             * Sonpool Sonpool6_ID.
             * @member {number} Sonpool6_ID
             * @memberof lumber.Spec.Sonpool
             * @instance
             */
            Sonpool.prototype.Sonpool6_ID = 0;

            /**
             * Creates a new Sonpool instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {lumber.Spec.ISonpool=} [properties] Properties to set
             * @returns {lumber.Spec.Sonpool} Sonpool instance
             */
            Sonpool.create = function create(properties) {
                return new Sonpool(properties);
            };

            /**
             * Encodes the specified Sonpool message. Does not implicitly {@link lumber.Spec.Sonpool.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {lumber.Spec.ISonpool} message Sonpool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sonpool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Pool_ID != null && Object.hasOwnProperty.call(message, "Pool_ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Pool_ID);
                if (message.Sonpool1_ID != null && Object.hasOwnProperty.call(message, "Sonpool1_ID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Sonpool1_ID);
                if (message.Sonpool2_ID != null && Object.hasOwnProperty.call(message, "Sonpool2_ID"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Sonpool2_ID);
                if (message.Sonpool3_ID != null && Object.hasOwnProperty.call(message, "Sonpool3_ID"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Sonpool3_ID);
                if (message.Sonpool4_ID != null && Object.hasOwnProperty.call(message, "Sonpool4_ID"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Sonpool4_ID);
                if (message.Sonpool5_ID != null && Object.hasOwnProperty.call(message, "Sonpool5_ID"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Sonpool5_ID);
                if (message.Sonpool6_ID != null && Object.hasOwnProperty.call(message, "Sonpool6_ID"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Sonpool6_ID);
                return writer;
            };

            /**
             * Encodes the specified Sonpool message, length delimited. Does not implicitly {@link lumber.Spec.Sonpool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {lumber.Spec.ISonpool} message Sonpool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sonpool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Sonpool message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.Sonpool} Sonpool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sonpool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.Sonpool();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Pool_ID = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Sonpool1_ID = reader.int32();
                            break;
                        }
                    case 3: {
                            message.Sonpool2_ID = reader.int32();
                            break;
                        }
                    case 4: {
                            message.Sonpool3_ID = reader.int32();
                            break;
                        }
                    case 5: {
                            message.Sonpool4_ID = reader.int32();
                            break;
                        }
                    case 6: {
                            message.Sonpool5_ID = reader.int32();
                            break;
                        }
                    case 7: {
                            message.Sonpool6_ID = reader.int32();
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
             * Decodes a Sonpool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.Sonpool} Sonpool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sonpool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Sonpool message.
             * @function verify
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sonpool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Pool_ID != null && message.hasOwnProperty("Pool_ID"))
                    if (!$util.isInteger(message.Pool_ID))
                        return "Pool_ID: integer expected";
                if (message.Sonpool1_ID != null && message.hasOwnProperty("Sonpool1_ID"))
                    if (!$util.isInteger(message.Sonpool1_ID))
                        return "Sonpool1_ID: integer expected";
                if (message.Sonpool2_ID != null && message.hasOwnProperty("Sonpool2_ID"))
                    if (!$util.isInteger(message.Sonpool2_ID))
                        return "Sonpool2_ID: integer expected";
                if (message.Sonpool3_ID != null && message.hasOwnProperty("Sonpool3_ID"))
                    if (!$util.isInteger(message.Sonpool3_ID))
                        return "Sonpool3_ID: integer expected";
                if (message.Sonpool4_ID != null && message.hasOwnProperty("Sonpool4_ID"))
                    if (!$util.isInteger(message.Sonpool4_ID))
                        return "Sonpool4_ID: integer expected";
                if (message.Sonpool5_ID != null && message.hasOwnProperty("Sonpool5_ID"))
                    if (!$util.isInteger(message.Sonpool5_ID))
                        return "Sonpool5_ID: integer expected";
                if (message.Sonpool6_ID != null && message.hasOwnProperty("Sonpool6_ID"))
                    if (!$util.isInteger(message.Sonpool6_ID))
                        return "Sonpool6_ID: integer expected";
                return null;
            };

            /**
             * Creates a Sonpool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.Sonpool} Sonpool
             */
            Sonpool.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.Sonpool)
                    return object;
                var message = new $root.lumber.Spec.Sonpool();
                if (object.Pool_ID != null)
                    message.Pool_ID = object.Pool_ID | 0;
                if (object.Sonpool1_ID != null)
                    message.Sonpool1_ID = object.Sonpool1_ID | 0;
                if (object.Sonpool2_ID != null)
                    message.Sonpool2_ID = object.Sonpool2_ID | 0;
                if (object.Sonpool3_ID != null)
                    message.Sonpool3_ID = object.Sonpool3_ID | 0;
                if (object.Sonpool4_ID != null)
                    message.Sonpool4_ID = object.Sonpool4_ID | 0;
                if (object.Sonpool5_ID != null)
                    message.Sonpool5_ID = object.Sonpool5_ID | 0;
                if (object.Sonpool6_ID != null)
                    message.Sonpool6_ID = object.Sonpool6_ID | 0;
                return message;
            };

            /**
             * Creates a plain object from a Sonpool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {lumber.Spec.Sonpool} message Sonpool
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sonpool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Pool_ID = 0;
                    object.Sonpool1_ID = 0;
                    object.Sonpool2_ID = 0;
                    object.Sonpool3_ID = 0;
                    object.Sonpool4_ID = 0;
                    object.Sonpool5_ID = 0;
                    object.Sonpool6_ID = 0;
                }
                if (message.Pool_ID != null && message.hasOwnProperty("Pool_ID"))
                    object.Pool_ID = message.Pool_ID;
                if (message.Sonpool1_ID != null && message.hasOwnProperty("Sonpool1_ID"))
                    object.Sonpool1_ID = message.Sonpool1_ID;
                if (message.Sonpool2_ID != null && message.hasOwnProperty("Sonpool2_ID"))
                    object.Sonpool2_ID = message.Sonpool2_ID;
                if (message.Sonpool3_ID != null && message.hasOwnProperty("Sonpool3_ID"))
                    object.Sonpool3_ID = message.Sonpool3_ID;
                if (message.Sonpool4_ID != null && message.hasOwnProperty("Sonpool4_ID"))
                    object.Sonpool4_ID = message.Sonpool4_ID;
                if (message.Sonpool5_ID != null && message.hasOwnProperty("Sonpool5_ID"))
                    object.Sonpool5_ID = message.Sonpool5_ID;
                if (message.Sonpool6_ID != null && message.hasOwnProperty("Sonpool6_ID"))
                    object.Sonpool6_ID = message.Sonpool6_ID;
                return object;
            };

            /**
             * Converts this Sonpool to JSON.
             * @function toJSON
             * @memberof lumber.Spec.Sonpool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sonpool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Sonpool
             * @function getTypeUrl
             * @memberof lumber.Spec.Sonpool
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Sonpool.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.Sonpool";
            };

            return Sonpool;
        })();

        Spec.SonpoolProp = (function() {

            /**
             * Properties of a SonpoolProp.
             * @memberof lumber.Spec
             * @interface ISonpoolProp
             * @property {number|null} [Sonpool_ID] SonpoolProp Sonpool_ID
             * @property {number|null} [Prop_ID] SonpoolProp Prop_ID
             * @property {number|null} [Prop_Name] SonpoolProp Prop_Name
             * @property {number|null} [Prob] SonpoolProp Prob
             */

            /**
             * Constructs a new SonpoolProp.
             * @memberof lumber.Spec
             * @classdesc Represents a SonpoolProp.
             * @implements ISonpoolProp
             * @constructor
             * @param {lumber.Spec.ISonpoolProp=} [properties] Properties to set
             */
            function SonpoolProp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SonpoolProp Sonpool_ID.
             * @member {number} Sonpool_ID
             * @memberof lumber.Spec.SonpoolProp
             * @instance
             */
            SonpoolProp.prototype.Sonpool_ID = 0;

            /**
             * SonpoolProp Prop_ID.
             * @member {number} Prop_ID
             * @memberof lumber.Spec.SonpoolProp
             * @instance
             */
            SonpoolProp.prototype.Prop_ID = 0;

            /**
             * SonpoolProp Prop_Name.
             * @member {number} Prop_Name
             * @memberof lumber.Spec.SonpoolProp
             * @instance
             */
            SonpoolProp.prototype.Prop_Name = 0;

            /**
             * SonpoolProp Prob.
             * @member {number} Prob
             * @memberof lumber.Spec.SonpoolProp
             * @instance
             */
            SonpoolProp.prototype.Prob = 0;

            /**
             * Creates a new SonpoolProp instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {lumber.Spec.ISonpoolProp=} [properties] Properties to set
             * @returns {lumber.Spec.SonpoolProp} SonpoolProp instance
             */
            SonpoolProp.create = function create(properties) {
                return new SonpoolProp(properties);
            };

            /**
             * Encodes the specified SonpoolProp message. Does not implicitly {@link lumber.Spec.SonpoolProp.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {lumber.Spec.ISonpoolProp} message SonpoolProp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SonpoolProp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Sonpool_ID != null && Object.hasOwnProperty.call(message, "Sonpool_ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sonpool_ID);
                if (message.Prop_ID != null && Object.hasOwnProperty.call(message, "Prop_ID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Prop_ID);
                if (message.Prop_Name != null && Object.hasOwnProperty.call(message, "Prop_Name"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Prop_Name);
                if (message.Prob != null && Object.hasOwnProperty.call(message, "Prob"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Prob);
                return writer;
            };

            /**
             * Encodes the specified SonpoolProp message, length delimited. Does not implicitly {@link lumber.Spec.SonpoolProp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {lumber.Spec.ISonpoolProp} message SonpoolProp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SonpoolProp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SonpoolProp message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.SonpoolProp} SonpoolProp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SonpoolProp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.SonpoolProp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Sonpool_ID = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Prop_ID = reader.int32();
                            break;
                        }
                    case 3: {
                            message.Prop_Name = reader.int32();
                            break;
                        }
                    case 4: {
                            message.Prob = reader.int32();
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
             * Decodes a SonpoolProp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.SonpoolProp} SonpoolProp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SonpoolProp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SonpoolProp message.
             * @function verify
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SonpoolProp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Sonpool_ID != null && message.hasOwnProperty("Sonpool_ID"))
                    if (!$util.isInteger(message.Sonpool_ID))
                        return "Sonpool_ID: integer expected";
                if (message.Prop_ID != null && message.hasOwnProperty("Prop_ID"))
                    if (!$util.isInteger(message.Prop_ID))
                        return "Prop_ID: integer expected";
                if (message.Prop_Name != null && message.hasOwnProperty("Prop_Name"))
                    if (!$util.isInteger(message.Prop_Name))
                        return "Prop_Name: integer expected";
                if (message.Prob != null && message.hasOwnProperty("Prob"))
                    if (!$util.isInteger(message.Prob))
                        return "Prob: integer expected";
                return null;
            };

            /**
             * Creates a SonpoolProp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.SonpoolProp} SonpoolProp
             */
            SonpoolProp.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.SonpoolProp)
                    return object;
                var message = new $root.lumber.Spec.SonpoolProp();
                if (object.Sonpool_ID != null)
                    message.Sonpool_ID = object.Sonpool_ID | 0;
                if (object.Prop_ID != null)
                    message.Prop_ID = object.Prop_ID | 0;
                if (object.Prop_Name != null)
                    message.Prop_Name = object.Prop_Name | 0;
                if (object.Prob != null)
                    message.Prob = object.Prob | 0;
                return message;
            };

            /**
             * Creates a plain object from a SonpoolProp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {lumber.Spec.SonpoolProp} message SonpoolProp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SonpoolProp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Sonpool_ID = 0;
                    object.Prop_ID = 0;
                    object.Prop_Name = 0;
                    object.Prob = 0;
                }
                if (message.Sonpool_ID != null && message.hasOwnProperty("Sonpool_ID"))
                    object.Sonpool_ID = message.Sonpool_ID;
                if (message.Prop_ID != null && message.hasOwnProperty("Prop_ID"))
                    object.Prop_ID = message.Prop_ID;
                if (message.Prop_Name != null && message.hasOwnProperty("Prop_Name"))
                    object.Prop_Name = message.Prop_Name;
                if (message.Prob != null && message.hasOwnProperty("Prob"))
                    object.Prob = message.Prob;
                return object;
            };

            /**
             * Converts this SonpoolProp to JSON.
             * @function toJSON
             * @memberof lumber.Spec.SonpoolProp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SonpoolProp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SonpoolProp
             * @function getTypeUrl
             * @memberof lumber.Spec.SonpoolProp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SonpoolProp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.SonpoolProp";
            };

            return SonpoolProp;
        })();

        Spec.TreeAxe = (function() {

            /**
             * Properties of a TreeAxe.
             * @memberof lumber.Spec
             * @interface ITreeAxe
             * @property {number|null} [id] TreeAxe id
             * @property {Array.<number>|null} [TreeAxe_Level_Gap] TreeAxe TreeAxe_Level_Gap
             * @property {number|null} [TreeAxe_Prob] TreeAxe TreeAxe_Prob
             * @property {number|null} [TreeAxe_Mini] TreeAxe TreeAxe_Mini
             * @property {number|null} [TreeAxe_Gold] TreeAxe TreeAxe_Gold
             * @property {number|null} [TreeAxe_Max] TreeAxe TreeAxe_Max
             */

            /**
             * Constructs a new TreeAxe.
             * @memberof lumber.Spec
             * @classdesc Represents a TreeAxe.
             * @implements ITreeAxe
             * @constructor
             * @param {lumber.Spec.ITreeAxe=} [properties] Properties to set
             */
            function TreeAxe(properties) {
                this.TreeAxe_Level_Gap = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TreeAxe id.
             * @member {number} id
             * @memberof lumber.Spec.TreeAxe
             * @instance
             */
            TreeAxe.prototype.id = 0;

            /**
             * TreeAxe TreeAxe_Level_Gap.
             * @member {Array.<number>} TreeAxe_Level_Gap
             * @memberof lumber.Spec.TreeAxe
             * @instance
             */
            TreeAxe.prototype.TreeAxe_Level_Gap = $util.emptyArray;

            /**
             * TreeAxe TreeAxe_Prob.
             * @member {number} TreeAxe_Prob
             * @memberof lumber.Spec.TreeAxe
             * @instance
             */
            TreeAxe.prototype.TreeAxe_Prob = 0;

            /**
             * TreeAxe TreeAxe_Mini.
             * @member {number} TreeAxe_Mini
             * @memberof lumber.Spec.TreeAxe
             * @instance
             */
            TreeAxe.prototype.TreeAxe_Mini = 0;

            /**
             * TreeAxe TreeAxe_Gold.
             * @member {number} TreeAxe_Gold
             * @memberof lumber.Spec.TreeAxe
             * @instance
             */
            TreeAxe.prototype.TreeAxe_Gold = 0;

            /**
             * TreeAxe TreeAxe_Max.
             * @member {number} TreeAxe_Max
             * @memberof lumber.Spec.TreeAxe
             * @instance
             */
            TreeAxe.prototype.TreeAxe_Max = 0;

            /**
             * Creates a new TreeAxe instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {lumber.Spec.ITreeAxe=} [properties] Properties to set
             * @returns {lumber.Spec.TreeAxe} TreeAxe instance
             */
            TreeAxe.create = function create(properties) {
                return new TreeAxe(properties);
            };

            /**
             * Encodes the specified TreeAxe message. Does not implicitly {@link lumber.Spec.TreeAxe.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {lumber.Spec.ITreeAxe} message TreeAxe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeAxe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.TreeAxe_Level_Gap != null && message.TreeAxe_Level_Gap.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.TreeAxe_Level_Gap.length; ++i)
                        writer.int32(message.TreeAxe_Level_Gap[i]);
                    writer.ldelim();
                }
                if (message.TreeAxe_Prob != null && Object.hasOwnProperty.call(message, "TreeAxe_Prob"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TreeAxe_Prob);
                if (message.TreeAxe_Mini != null && Object.hasOwnProperty.call(message, "TreeAxe_Mini"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TreeAxe_Mini);
                if (message.TreeAxe_Gold != null && Object.hasOwnProperty.call(message, "TreeAxe_Gold"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.TreeAxe_Gold);
                if (message.TreeAxe_Max != null && Object.hasOwnProperty.call(message, "TreeAxe_Max"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.TreeAxe_Max);
                return writer;
            };

            /**
             * Encodes the specified TreeAxe message, length delimited. Does not implicitly {@link lumber.Spec.TreeAxe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {lumber.Spec.ITreeAxe} message TreeAxe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeAxe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreeAxe message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.TreeAxe} TreeAxe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeAxe.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.TreeAxe();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int32();
                            break;
                        }
                    case 2: {
                            if (!(message.TreeAxe_Level_Gap && message.TreeAxe_Level_Gap.length))
                                message.TreeAxe_Level_Gap = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.TreeAxe_Level_Gap.push(reader.int32());
                            } else
                                message.TreeAxe_Level_Gap.push(reader.int32());
                            break;
                        }
                    case 3: {
                            message.TreeAxe_Prob = reader.int32();
                            break;
                        }
                    case 4: {
                            message.TreeAxe_Mini = reader.int32();
                            break;
                        }
                    case 5: {
                            message.TreeAxe_Gold = reader.int32();
                            break;
                        }
                    case 6: {
                            message.TreeAxe_Max = reader.int32();
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
             * Decodes a TreeAxe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.TreeAxe} TreeAxe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeAxe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreeAxe message.
             * @function verify
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreeAxe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.TreeAxe_Level_Gap != null && message.hasOwnProperty("TreeAxe_Level_Gap")) {
                    if (!Array.isArray(message.TreeAxe_Level_Gap))
                        return "TreeAxe_Level_Gap: array expected";
                    for (var i = 0; i < message.TreeAxe_Level_Gap.length; ++i)
                        if (!$util.isInteger(message.TreeAxe_Level_Gap[i]))
                            return "TreeAxe_Level_Gap: integer[] expected";
                }
                if (message.TreeAxe_Prob != null && message.hasOwnProperty("TreeAxe_Prob"))
                    if (!$util.isInteger(message.TreeAxe_Prob))
                        return "TreeAxe_Prob: integer expected";
                if (message.TreeAxe_Mini != null && message.hasOwnProperty("TreeAxe_Mini"))
                    if (!$util.isInteger(message.TreeAxe_Mini))
                        return "TreeAxe_Mini: integer expected";
                if (message.TreeAxe_Gold != null && message.hasOwnProperty("TreeAxe_Gold"))
                    if (!$util.isInteger(message.TreeAxe_Gold))
                        return "TreeAxe_Gold: integer expected";
                if (message.TreeAxe_Max != null && message.hasOwnProperty("TreeAxe_Max"))
                    if (!$util.isInteger(message.TreeAxe_Max))
                        return "TreeAxe_Max: integer expected";
                return null;
            };

            /**
             * Creates a TreeAxe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.TreeAxe} TreeAxe
             */
            TreeAxe.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.TreeAxe)
                    return object;
                var message = new $root.lumber.Spec.TreeAxe();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.TreeAxe_Level_Gap) {
                    if (!Array.isArray(object.TreeAxe_Level_Gap))
                        throw TypeError(".lumber.Spec.TreeAxe.TreeAxe_Level_Gap: array expected");
                    message.TreeAxe_Level_Gap = [];
                    for (var i = 0; i < object.TreeAxe_Level_Gap.length; ++i)
                        message.TreeAxe_Level_Gap[i] = object.TreeAxe_Level_Gap[i] | 0;
                }
                if (object.TreeAxe_Prob != null)
                    message.TreeAxe_Prob = object.TreeAxe_Prob | 0;
                if (object.TreeAxe_Mini != null)
                    message.TreeAxe_Mini = object.TreeAxe_Mini | 0;
                if (object.TreeAxe_Gold != null)
                    message.TreeAxe_Gold = object.TreeAxe_Gold | 0;
                if (object.TreeAxe_Max != null)
                    message.TreeAxe_Max = object.TreeAxe_Max | 0;
                return message;
            };

            /**
             * Creates a plain object from a TreeAxe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {lumber.Spec.TreeAxe} message TreeAxe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreeAxe.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.TreeAxe_Level_Gap = [];
                if (options.defaults) {
                    object.id = 0;
                    object.TreeAxe_Prob = 0;
                    object.TreeAxe_Mini = 0;
                    object.TreeAxe_Gold = 0;
                    object.TreeAxe_Max = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.TreeAxe_Level_Gap && message.TreeAxe_Level_Gap.length) {
                    object.TreeAxe_Level_Gap = [];
                    for (var j = 0; j < message.TreeAxe_Level_Gap.length; ++j)
                        object.TreeAxe_Level_Gap[j] = message.TreeAxe_Level_Gap[j];
                }
                if (message.TreeAxe_Prob != null && message.hasOwnProperty("TreeAxe_Prob"))
                    object.TreeAxe_Prob = message.TreeAxe_Prob;
                if (message.TreeAxe_Mini != null && message.hasOwnProperty("TreeAxe_Mini"))
                    object.TreeAxe_Mini = message.TreeAxe_Mini;
                if (message.TreeAxe_Gold != null && message.hasOwnProperty("TreeAxe_Gold"))
                    object.TreeAxe_Gold = message.TreeAxe_Gold;
                if (message.TreeAxe_Max != null && message.hasOwnProperty("TreeAxe_Max"))
                    object.TreeAxe_Max = message.TreeAxe_Max;
                return object;
            };

            /**
             * Converts this TreeAxe to JSON.
             * @function toJSON
             * @memberof lumber.Spec.TreeAxe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreeAxe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreeAxe
             * @function getTypeUrl
             * @memberof lumber.Spec.TreeAxe
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreeAxe.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.TreeAxe";
            };

            return TreeAxe;
        })();

        Spec.TreePool = (function() {

            /**
             * Properties of a TreePool.
             * @memberof lumber.Spec
             * @interface ITreePool
             * @property {number|null} [Tree_Level] TreePool Tree_Level
             * @property {number|null} [Pool_ID] TreePool Pool_ID
             */

            /**
             * Constructs a new TreePool.
             * @memberof lumber.Spec
             * @classdesc Represents a TreePool.
             * @implements ITreePool
             * @constructor
             * @param {lumber.Spec.ITreePool=} [properties] Properties to set
             */
            function TreePool(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TreePool Tree_Level.
             * @member {number} Tree_Level
             * @memberof lumber.Spec.TreePool
             * @instance
             */
            TreePool.prototype.Tree_Level = 0;

            /**
             * TreePool Pool_ID.
             * @member {number} Pool_ID
             * @memberof lumber.Spec.TreePool
             * @instance
             */
            TreePool.prototype.Pool_ID = 0;

            /**
             * Creates a new TreePool instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {lumber.Spec.ITreePool=} [properties] Properties to set
             * @returns {lumber.Spec.TreePool} TreePool instance
             */
            TreePool.create = function create(properties) {
                return new TreePool(properties);
            };

            /**
             * Encodes the specified TreePool message. Does not implicitly {@link lumber.Spec.TreePool.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {lumber.Spec.ITreePool} message TreePool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreePool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Tree_Level != null && Object.hasOwnProperty.call(message, "Tree_Level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Tree_Level);
                if (message.Pool_ID != null && Object.hasOwnProperty.call(message, "Pool_ID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Pool_ID);
                return writer;
            };

            /**
             * Encodes the specified TreePool message, length delimited. Does not implicitly {@link lumber.Spec.TreePool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {lumber.Spec.ITreePool} message TreePool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreePool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreePool message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.TreePool} TreePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreePool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.TreePool();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Tree_Level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Pool_ID = reader.int32();
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
             * Decodes a TreePool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.TreePool} TreePool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreePool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreePool message.
             * @function verify
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreePool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Tree_Level != null && message.hasOwnProperty("Tree_Level"))
                    if (!$util.isInteger(message.Tree_Level))
                        return "Tree_Level: integer expected";
                if (message.Pool_ID != null && message.hasOwnProperty("Pool_ID"))
                    if (!$util.isInteger(message.Pool_ID))
                        return "Pool_ID: integer expected";
                return null;
            };

            /**
             * Creates a TreePool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.TreePool} TreePool
             */
            TreePool.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.TreePool)
                    return object;
                var message = new $root.lumber.Spec.TreePool();
                if (object.Tree_Level != null)
                    message.Tree_Level = object.Tree_Level | 0;
                if (object.Pool_ID != null)
                    message.Pool_ID = object.Pool_ID | 0;
                return message;
            };

            /**
             * Creates a plain object from a TreePool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {lumber.Spec.TreePool} message TreePool
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreePool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Tree_Level = 0;
                    object.Pool_ID = 0;
                }
                if (message.Tree_Level != null && message.hasOwnProperty("Tree_Level"))
                    object.Tree_Level = message.Tree_Level;
                if (message.Pool_ID != null && message.hasOwnProperty("Pool_ID"))
                    object.Pool_ID = message.Pool_ID;
                return object;
            };

            /**
             * Converts this TreePool to JSON.
             * @function toJSON
             * @memberof lumber.Spec.TreePool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreePool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreePool
             * @function getTypeUrl
             * @memberof lumber.Spec.TreePool
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreePool.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.TreePool";
            };

            return TreePool;
        })();

        Spec.TreeUnlock = (function() {

            /**
             * Properties of a TreeUnlock.
             * @memberof lumber.Spec
             * @interface ITreeUnlock
             * @property {number|null} [Tree_Level] TreeUnlock Tree_Level
             * @property {number|null} [Unlock_Prop] TreeUnlock Unlock_Prop
             */

            /**
             * Constructs a new TreeUnlock.
             * @memberof lumber.Spec
             * @classdesc Represents a TreeUnlock.
             * @implements ITreeUnlock
             * @constructor
             * @param {lumber.Spec.ITreeUnlock=} [properties] Properties to set
             */
            function TreeUnlock(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TreeUnlock Tree_Level.
             * @member {number} Tree_Level
             * @memberof lumber.Spec.TreeUnlock
             * @instance
             */
            TreeUnlock.prototype.Tree_Level = 0;

            /**
             * TreeUnlock Unlock_Prop.
             * @member {number} Unlock_Prop
             * @memberof lumber.Spec.TreeUnlock
             * @instance
             */
            TreeUnlock.prototype.Unlock_Prop = 0;

            /**
             * Creates a new TreeUnlock instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {lumber.Spec.ITreeUnlock=} [properties] Properties to set
             * @returns {lumber.Spec.TreeUnlock} TreeUnlock instance
             */
            TreeUnlock.create = function create(properties) {
                return new TreeUnlock(properties);
            };

            /**
             * Encodes the specified TreeUnlock message. Does not implicitly {@link lumber.Spec.TreeUnlock.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {lumber.Spec.ITreeUnlock} message TreeUnlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeUnlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Tree_Level != null && Object.hasOwnProperty.call(message, "Tree_Level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Tree_Level);
                if (message.Unlock_Prop != null && Object.hasOwnProperty.call(message, "Unlock_Prop"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Unlock_Prop);
                return writer;
            };

            /**
             * Encodes the specified TreeUnlock message, length delimited. Does not implicitly {@link lumber.Spec.TreeUnlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {lumber.Spec.ITreeUnlock} message TreeUnlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeUnlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreeUnlock message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.TreeUnlock} TreeUnlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeUnlock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.TreeUnlock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Tree_Level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Unlock_Prop = reader.int32();
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
             * Decodes a TreeUnlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.TreeUnlock} TreeUnlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeUnlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreeUnlock message.
             * @function verify
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreeUnlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Tree_Level != null && message.hasOwnProperty("Tree_Level"))
                    if (!$util.isInteger(message.Tree_Level))
                        return "Tree_Level: integer expected";
                if (message.Unlock_Prop != null && message.hasOwnProperty("Unlock_Prop"))
                    if (!$util.isInteger(message.Unlock_Prop))
                        return "Unlock_Prop: integer expected";
                return null;
            };

            /**
             * Creates a TreeUnlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.TreeUnlock} TreeUnlock
             */
            TreeUnlock.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.TreeUnlock)
                    return object;
                var message = new $root.lumber.Spec.TreeUnlock();
                if (object.Tree_Level != null)
                    message.Tree_Level = object.Tree_Level | 0;
                if (object.Unlock_Prop != null)
                    message.Unlock_Prop = object.Unlock_Prop | 0;
                return message;
            };

            /**
             * Creates a plain object from a TreeUnlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {lumber.Spec.TreeUnlock} message TreeUnlock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreeUnlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Tree_Level = 0;
                    object.Unlock_Prop = 0;
                }
                if (message.Tree_Level != null && message.hasOwnProperty("Tree_Level"))
                    object.Tree_Level = message.Tree_Level;
                if (message.Unlock_Prop != null && message.hasOwnProperty("Unlock_Prop"))
                    object.Unlock_Prop = message.Unlock_Prop;
                return object;
            };

            /**
             * Converts this TreeUnlock to JSON.
             * @function toJSON
             * @memberof lumber.Spec.TreeUnlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreeUnlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreeUnlock
             * @function getTypeUrl
             * @memberof lumber.Spec.TreeUnlock
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreeUnlock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.TreeUnlock";
            };

            return TreeUnlock;
        })();

        Spec.TreeUpgrade = (function() {

            /**
             * Properties of a TreeUpgrade.
             * @memberof lumber.Spec
             * @interface ITreeUpgrade
             * @property {number|null} [Tree_Level] TreeUpgrade Tree_Level
             * @property {number|null} [Water_Count] TreeUpgrade Water_Count
             * @property {number|null} [Water_Use] TreeUpgrade Water_Use
             * @property {number|null} [Upgrade_Use] TreeUpgrade Upgrade_Use
             * @property {number|null} [Success_Prob] TreeUpgrade Success_Prob
             * @property {number|null} [Add_Prob] TreeUpgrade Add_Prob
             * @property {number|null} [Must_Fail] TreeUpgrade Must_Fail
             */

            /**
             * Constructs a new TreeUpgrade.
             * @memberof lumber.Spec
             * @classdesc Represents a TreeUpgrade.
             * @implements ITreeUpgrade
             * @constructor
             * @param {lumber.Spec.ITreeUpgrade=} [properties] Properties to set
             */
            function TreeUpgrade(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TreeUpgrade Tree_Level.
             * @member {number} Tree_Level
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Tree_Level = 0;

            /**
             * TreeUpgrade Water_Count.
             * @member {number} Water_Count
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Water_Count = 0;

            /**
             * TreeUpgrade Water_Use.
             * @member {number} Water_Use
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Water_Use = 0;

            /**
             * TreeUpgrade Upgrade_Use.
             * @member {number} Upgrade_Use
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Upgrade_Use = 0;

            /**
             * TreeUpgrade Success_Prob.
             * @member {number} Success_Prob
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Success_Prob = 0;

            /**
             * TreeUpgrade Add_Prob.
             * @member {number} Add_Prob
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Add_Prob = 0;

            /**
             * TreeUpgrade Must_Fail.
             * @member {number} Must_Fail
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             */
            TreeUpgrade.prototype.Must_Fail = 0;

            /**
             * Creates a new TreeUpgrade instance using the specified properties.
             * @function create
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {lumber.Spec.ITreeUpgrade=} [properties] Properties to set
             * @returns {lumber.Spec.TreeUpgrade} TreeUpgrade instance
             */
            TreeUpgrade.create = function create(properties) {
                return new TreeUpgrade(properties);
            };

            /**
             * Encodes the specified TreeUpgrade message. Does not implicitly {@link lumber.Spec.TreeUpgrade.verify|verify} messages.
             * @function encode
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {lumber.Spec.ITreeUpgrade} message TreeUpgrade message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeUpgrade.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Tree_Level != null && Object.hasOwnProperty.call(message, "Tree_Level"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Tree_Level);
                if (message.Water_Count != null && Object.hasOwnProperty.call(message, "Water_Count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Water_Count);
                if (message.Water_Use != null && Object.hasOwnProperty.call(message, "Water_Use"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Water_Use);
                if (message.Upgrade_Use != null && Object.hasOwnProperty.call(message, "Upgrade_Use"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Upgrade_Use);
                if (message.Success_Prob != null && Object.hasOwnProperty.call(message, "Success_Prob"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Success_Prob);
                if (message.Add_Prob != null && Object.hasOwnProperty.call(message, "Add_Prob"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Add_Prob);
                if (message.Must_Fail != null && Object.hasOwnProperty.call(message, "Must_Fail"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Must_Fail);
                return writer;
            };

            /**
             * Encodes the specified TreeUpgrade message, length delimited. Does not implicitly {@link lumber.Spec.TreeUpgrade.verify|verify} messages.
             * @function encodeDelimited
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {lumber.Spec.ITreeUpgrade} message TreeUpgrade message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TreeUpgrade.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TreeUpgrade message from the specified reader or buffer.
             * @function decode
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {lumber.Spec.TreeUpgrade} TreeUpgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeUpgrade.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lumber.Spec.TreeUpgrade();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.Tree_Level = reader.int32();
                            break;
                        }
                    case 2: {
                            message.Water_Count = reader.int32();
                            break;
                        }
                    case 3: {
                            message.Water_Use = reader.int32();
                            break;
                        }
                    case 4: {
                            message.Upgrade_Use = reader.int32();
                            break;
                        }
                    case 5: {
                            message.Success_Prob = reader.int32();
                            break;
                        }
                    case 6: {
                            message.Add_Prob = reader.int32();
                            break;
                        }
                    case 7: {
                            message.Must_Fail = reader.int32();
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
             * Decodes a TreeUpgrade message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {lumber.Spec.TreeUpgrade} TreeUpgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TreeUpgrade.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TreeUpgrade message.
             * @function verify
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TreeUpgrade.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Tree_Level != null && message.hasOwnProperty("Tree_Level"))
                    if (!$util.isInteger(message.Tree_Level))
                        return "Tree_Level: integer expected";
                if (message.Water_Count != null && message.hasOwnProperty("Water_Count"))
                    if (!$util.isInteger(message.Water_Count))
                        return "Water_Count: integer expected";
                if (message.Water_Use != null && message.hasOwnProperty("Water_Use"))
                    if (!$util.isInteger(message.Water_Use))
                        return "Water_Use: integer expected";
                if (message.Upgrade_Use != null && message.hasOwnProperty("Upgrade_Use"))
                    if (!$util.isInteger(message.Upgrade_Use))
                        return "Upgrade_Use: integer expected";
                if (message.Success_Prob != null && message.hasOwnProperty("Success_Prob"))
                    if (!$util.isInteger(message.Success_Prob))
                        return "Success_Prob: integer expected";
                if (message.Add_Prob != null && message.hasOwnProperty("Add_Prob"))
                    if (!$util.isInteger(message.Add_Prob))
                        return "Add_Prob: integer expected";
                if (message.Must_Fail != null && message.hasOwnProperty("Must_Fail"))
                    if (!$util.isInteger(message.Must_Fail))
                        return "Must_Fail: integer expected";
                return null;
            };

            /**
             * Creates a TreeUpgrade message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {lumber.Spec.TreeUpgrade} TreeUpgrade
             */
            TreeUpgrade.fromObject = function fromObject(object) {
                if (object instanceof $root.lumber.Spec.TreeUpgrade)
                    return object;
                var message = new $root.lumber.Spec.TreeUpgrade();
                if (object.Tree_Level != null)
                    message.Tree_Level = object.Tree_Level | 0;
                if (object.Water_Count != null)
                    message.Water_Count = object.Water_Count | 0;
                if (object.Water_Use != null)
                    message.Water_Use = object.Water_Use | 0;
                if (object.Upgrade_Use != null)
                    message.Upgrade_Use = object.Upgrade_Use | 0;
                if (object.Success_Prob != null)
                    message.Success_Prob = object.Success_Prob | 0;
                if (object.Add_Prob != null)
                    message.Add_Prob = object.Add_Prob | 0;
                if (object.Must_Fail != null)
                    message.Must_Fail = object.Must_Fail | 0;
                return message;
            };

            /**
             * Creates a plain object from a TreeUpgrade message. Also converts values to other types if specified.
             * @function toObject
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {lumber.Spec.TreeUpgrade} message TreeUpgrade
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TreeUpgrade.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Tree_Level = 0;
                    object.Water_Count = 0;
                    object.Water_Use = 0;
                    object.Upgrade_Use = 0;
                    object.Success_Prob = 0;
                    object.Add_Prob = 0;
                    object.Must_Fail = 0;
                }
                if (message.Tree_Level != null && message.hasOwnProperty("Tree_Level"))
                    object.Tree_Level = message.Tree_Level;
                if (message.Water_Count != null && message.hasOwnProperty("Water_Count"))
                    object.Water_Count = message.Water_Count;
                if (message.Water_Use != null && message.hasOwnProperty("Water_Use"))
                    object.Water_Use = message.Water_Use;
                if (message.Upgrade_Use != null && message.hasOwnProperty("Upgrade_Use"))
                    object.Upgrade_Use = message.Upgrade_Use;
                if (message.Success_Prob != null && message.hasOwnProperty("Success_Prob"))
                    object.Success_Prob = message.Success_Prob;
                if (message.Add_Prob != null && message.hasOwnProperty("Add_Prob"))
                    object.Add_Prob = message.Add_Prob;
                if (message.Must_Fail != null && message.hasOwnProperty("Must_Fail"))
                    object.Must_Fail = message.Must_Fail;
                return object;
            };

            /**
             * Converts this TreeUpgrade to JSON.
             * @function toJSON
             * @memberof lumber.Spec.TreeUpgrade
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TreeUpgrade.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TreeUpgrade
             * @function getTypeUrl
             * @memberof lumber.Spec.TreeUpgrade
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TreeUpgrade.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/lumber.Spec.TreeUpgrade";
            };

            return TreeUpgrade;
        })();

        return Spec;
    })();

    return lumber;
})();

module.exports = $root;
