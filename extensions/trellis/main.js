"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/is.js
var require_is = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func;
    exports2.array = array;
    exports2.stringArray = stringArray;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result2 = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = __importStar(require_is());
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      code;
      data;
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result2 = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result2.data = this.data;
        }
        return result2;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      kind;
      /**
       * The parameter structure is automatically inferred on the number of parameters
       * and the parameter type in case of a single param.
       */
      static auto = new _ParameterStructures("auto");
      /**
       * Forces `byPosition` parameter structure. This is useful if you have a single
       * parameter which has a literal type.
       */
      static byPosition = new _ParameterStructures("byPosition");
      /**
       * Forces `byName` parameter structure. This is only useful when having a single
       * parameter. The library will report errors if used with a different number of
       * parameters.
       */
      static byName = new _ParameterStructures("byName");
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    var AbstractMessageSignature = class {
      method;
      numberOfParams;
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      [Symbol.toStringTag] = "LinkedMap";
      _map;
      _head;
      _tail;
      _size;
      _state;
      constructor() {
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      before(key) {
        const item = this._map.get(key);
        return item ? item.previous?.value : void 0;
      }
      after(key) {
        const item = this._map.get(key);
        return item ? item.next?.value : void 0;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result2 = { value: current.key, done: false };
              current = current.next;
              return result2;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result2 = { value: current.value, done: false };
              current = current.next;
              return result2;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result2 = { value: [current.key, current.value], done: false };
              current = current.next;
              return result2;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      _limit;
      _ratio;
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = __importDefault(require_ral());
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      _callbacks;
      _contexts;
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      _options;
      static _noop = function() {
      };
      _event;
      _callbacks;
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result2 = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result2.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result2);
            }
            return result2;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result2 = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is = __importStar(require_is());
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      _isCancelled = false;
      _emitter;
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      _token;
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      buffers;
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      data;
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      token;
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      kind = "request";
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = __importDefault(require_ral());
    var Semaphore = class {
      _capacity;
      _active;
      _waiting;
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve2, reject) => {
          this._waiting.push({ thunk, resolve: resolve2, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`Too many thunks active`);
        }
        try {
          const result2 = next.thunk();
          if (result2 instanceof Promise) {
            result2.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result2);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result2 = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is = __importStar(require_is());
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      errorEmitter;
      closeEmitter;
      partialMessageEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
        this.partialMessageEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result2;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      readable;
      options;
      callback;
      nextMessageLength;
      messageToken;
      buffer;
      partialMessageTimer;
      _partialMessageTimeout;
      readSemaphore;
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result2 = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result2;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result2 = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is = __importStar(require_is());
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      errorEmitter;
      closeEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      writable;
      options;
      errorCount;
      writeSemaphore;
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      _encoding;
      _chunks;
      _totalLength;
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result2 = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result2;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result2.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result2;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result3 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result3;
        }
        const result2 = this.allocNative(byteCount);
        let resultOffset = 0;
        const chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result2.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result2.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result2;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result2 = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.TraceValue = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    exports2.createMessageConnection = createMessageConnection2;
    var ral_1 = __importDefault(require_ral());
    var Is = __importStar(require_is());
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      _pr;
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValue;
    (function(TraceValue2) {
      TraceValue2.Off = "off";
      TraceValue2.Messages = "messages";
      TraceValue2.Compact = "compact";
      TraceValue2.Verbose = "verbose";
    })(TraceValue || (exports2.TraceValue = TraceValue = {}));
    exports2.TraceValues = TraceValue;
    (function(Trace2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy) || Is.number(candidate.maxParallelism));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection2(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      const maxParallelism = options?.maxParallelism ?? -1;
      let inFlight = 0;
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          if (maxParallelism === -1) {
            queue.set(createResponseQueueKey(message.id), message);
          } else {
            handleResponse(message);
          }
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        if (maxParallelism !== -1 && inFlight >= maxParallelism) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(async () => {
          timer = void 0;
          if (messageQueue.size === 0) {
            return;
          }
          if (maxParallelism !== -1 && inFlight >= maxParallelism) {
            return;
          }
          const message = messageQueue.shift();
          let result2;
          try {
            inFlight++;
            const messageStrategy = options?.messageStrategy;
            if (MessageStrategy.is(messageStrategy)) {
              result2 = messageStrategy.handleMessage(message, handleMessage);
            } else {
              result2 = handleMessage(message);
            }
          } catch (error) {
            logger.error(`Processing message queue failed: ${error.toString()}`);
          } finally {
            if (result2 instanceof Promise) {
              result2.then(() => {
                inFlight--;
                triggerMessageQueue();
              }).catch((error) => {
                logger.error(`Processing message queue failed: ${error.toString()}`);
              });
            } else {
              inFlight--;
            }
            triggerMessageQueue();
          }
        });
      }
      async function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          return handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          return handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          return handleResponse(message);
        } else {
          return handleInvalidMessage(message);
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      async function handleRequest(requestMessage) {
        if (isDisposed()) {
          return Promise.resolve();
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const resultOrError = await handlerResult;
            await reply(resultOrError, requestMessage.method, startTime);
          } catch (error) {
            if (error instanceof messages_1.ResponseError) {
              await reply(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          } finally {
            requestTokens.delete(tokenKey);
          }
        } else {
          await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      async function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                await notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  await notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  await notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                await notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              await starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms.${error}`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result2;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result2 = void 0;
            break;
          case 1:
            result2 = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result2 = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result2.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result2.push(null);
              }
            }
            break;
        }
        return result2;
      }
      const connection = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            const paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                if (notificationHandlers.get(method)?.handler === handler) {
                  notificationHandlers.delete(method);
                }
              } else if (starNotificationHandler === type) {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              if (progressHandlers.get(token) === handler) {
                progressHandlers.delete(token);
              }
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          function sendCancellation(connection2, id2) {
            const p = cancellationStrategy.sender.sendCancellation(connection2, id2);
            if (p === void 0) {
              logger.log(`Received no promise from cancellation strategy when cancelling id ${id2}`);
            } else {
              p.catch(() => {
                logger.log(`Sending cancellation messages for id ${id2} failed.`);
              });
            }
          }
          let method;
          let messageParams;
          let token = void 0;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          let tokenWasCancelled = false;
          if (token !== void 0) {
            if (token.isCancellationRequested) {
              tokenWasCancelled = true;
            } else {
              disposable = token.onCancellationRequested(() => {
                sendCancellation(connection, id);
              });
            }
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve2, reject) => {
            const resolveWithCleanup = (r) => {
              resolve2(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              responsePromises.set(id, responsePromise);
              await messageWriter.write(requestMessage);
              if (tokenWasCancelled) {
                sendCancellation(connection, id);
              }
            } catch (error) {
              responsePromises.delete(id);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              logger.error(`Sending request failed.`);
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                if (requestHandlers.get(method)?.handler === handler) {
                  requestHandlers.delete(method);
                }
              } else if (starRequestHandler === type) {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection.onNotification(ProgressNotification.type, async (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          await handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection;
    }
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.TraceValue = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValue", { enumerable: true, get: function() {
      return connection_1.TraceValue;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.IdCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.RequestCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    var ral_1 = __importDefault(require_ral());
    exports2.RAL = ral_1.default;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      static emptyBuffer = Buffer.allocUnsafe(0);
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    var ReadableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve2, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve2();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/vscode-jsonrpc@9.0.3/node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result2 = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result2, mod, k[i]);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
    }();
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    exports2.generateRandomPipeName = generateRandomPipeName;
    exports2.createClientPipeTransport = createClientPipeTransport;
    exports2.createServerPipeTransport = createServerPipeTransport;
    exports2.createClientSocketTransport = createClientSocketTransport;
    exports2.createServerSocketTransport = createServerSocketTransport;
    exports2.createMessageConnection = createMessageConnection2;
    var ril_1 = __importDefault(require_ril());
    ril_1.default.install();
    var path = __importStar(require("path"));
    var os = __importStar(require("os"));
    var fs = __importStar(require("fs"));
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      process;
      constructor(process2) {
        super();
        this.process = process2;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      process;
      errorCount;
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      onData;
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      port;
      errorCount;
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      socket;
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader2 = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader2;
    var StreamMessageWriter2 = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter2;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 102]
    ]);
    function generateRandomPipeName() {
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\lsp-${(0, crypto_1.randomBytes)(16).toString("hex")}-sock`;
      }
      let randomLength = 32;
      const fixedLength = "/lsp-.sock".length;
      const tmpDir = fs.realpathSync(XDG_RUNTIME_DIR ?? os.tmpdir());
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0) {
        randomLength = Math.min(limit - tmpDir.length - fixedLength, randomLength);
      }
      if (randomLength < 16) {
        throw new Error(`Unable to generate a random pipe name with ${randomLength} characters.`);
      }
      const randomSuffix = (0, crypto_1.randomBytes)(Math.floor(randomLength / 2)).toString("hex");
      return path.join(tmpDir, `lsp-${randomSuffix}.sock`);
    }
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve2, _reject) => {
        connectResolve = resolve2;
      });
      return new Promise((resolve2, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve2({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve2, _reject) => {
        connectResolve = resolve2;
      });
      return new Promise((resolve2, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          const address = server.address();
          if (address === null || typeof address === "string") {
            reject(new Error(`Unexpected server address: ${address}`));
            return;
          }
          const boundPort = address.port;
          resolve2({
            port: () => boundPort,
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection2(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader2(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter2(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
  }
});

// src/extensions/trellis/main.ts
var import_node_os2 = require("node:os");

// node_modules/.pnpm/@aurigax-ai+pine-extension-sdk@0.5.5_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils@5_1ce77778bc56217765c7c49bcf4558dc/node_modules/@aurigax-ai/pine-extension-sdk/dist/chunk-FA6PUJIY.js
var DANGEROUS_SEGMENTS = /* @__PURE__ */ new Set(["__proto__", "prototype", "constructor"]);
function isDangerousSegment(segment) {
  return DANGEROUS_SEGMENTS.has(segment);
}
var EXTENSION_LOCALES_DIR = "locales";
var EXTENSION_LOCALE_FILE_MAX_BYTES = 256 * 1024;
var EXTENSION_MESSAGES_MAX = 2e3;
var EXTENSION_MESSAGE_MAX = 4e3;
var EXTENSION_MESSAGE_KEY_MAX = 120;
var EXTENSION_BASE_LOCALE = "en";
var LOCALE_CHANGED_EVENT = "locale.changed";
function matchLocale(locale, available) {
  if (!locale) return void 0;
  const subtags = locale.toLowerCase().split("-");
  for (let length = subtags.length; length > 0; length--) {
    const wanted = subtags.slice(0, length).join("-");
    const exact = available.find((tag) => tag.toLowerCase() === wanted);
    if (exact) return exact;
  }
  return available.find((tag) => tag.toLowerCase().split("-")[0] === subtags[0]);
}
function formatMessage(template, vars = {}) {
  return template.replace(
    /\{([A-Za-z0-9_]+)\}/g,
    (placeholder, name) => Object.hasOwn(vars, name) ? String(vars[name]) : placeholder
  );
}
function messageIn(catalog, key) {
  return catalog && Object.hasOwn(catalog, key) ? catalog[key] : void 0;
}
function translatorFor(catalogs, locale) {
  const tag = matchLocale(locale, Object.keys(catalogs));
  const own = tag ? catalogs[tag] : void 0;
  const base = Object.hasOwn(catalogs, EXTENSION_BASE_LOCALE) ? catalogs[EXTENSION_BASE_LOCALE] : void 0;
  return (key, vars) => formatMessage(messageIn(own, key) ?? messageIn(base, key) ?? key, vars);
}
function parseMessages(raw) {
  const messages = /* @__PURE__ */ Object.create(null);
  const problems = [];
  if (raw === void 0) return { messages, problems };
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return { messages, problems: ["messages must be an object of strings"] };
  }
  const entries = Object.entries(raw);
  if (entries.length > EXTENSION_MESSAGES_MAX) {
    problems.push(`messages holds more than ${EXTENSION_MESSAGES_MAX} strings`);
  }
  for (const [key, value] of entries.slice(0, EXTENSION_MESSAGES_MAX)) {
    if (!key || key.length > EXTENSION_MESSAGE_KEY_MAX || isDangerousSegment(key)) {
      problems.push(`messages.${key}: not a usable key`);
    } else if (typeof value !== "string") {
      problems.push(`messages.${key}: must be a string`);
    } else if (value.length > EXTENSION_MESSAGE_MAX) {
      problems.push(`messages.${key}: longer than ${EXTENSION_MESSAGE_MAX} characters`);
    } else {
      messages[key] = value;
    }
  }
  return { messages, problems };
}
var PANEL_SIZES_PATH = "/sizes";
var MAX_PANEL_SIZES = 64;
var PANEL_SIZE_KEY = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
function isFraction(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1;
}
function parsePanelSizes(raw) {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return {};
  const entries = Object.entries(raw).filter(
    ([key, value]) => PANEL_SIZE_KEY.test(key) && isFraction(value)
  );
  return Object.fromEntries(entries.slice(-MAX_PANEL_SIZES));
}
function withPanelSize(sizes, key, fraction) {
  const { [key]: _old, ...rest } = sizes;
  return parsePanelSizes(fraction === null ? rest : { ...rest, [key]: fraction });
}

// node_modules/.pnpm/@aurigax-ai+pine-extension-sdk@0.5.5_@ai-sdk-tool+parser@5.1.6_@ai-sdk+provider-utils@5_1ce77778bc56217765c7c49bcf4558dc/node_modules/@aurigax-ai/pine-extension-sdk/dist/chunk-Z2JJV4MK.js
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_http = require("http");
var import_net = require("net");
var import_path = require("path");
var import_node = __toESM(require_main(), 1);
var import_fs2 = require("fs");
var import_path2 = require("path");
var import_fs3 = require("fs");
var import_path3 = require("path");
var import_child_process = require("child_process");
var ALL_CAPABILITIES = [
  "drive-self",
  "read-board",
  "send-other-pane",
  "type-other-pane",
  "read-other-pane",
  "kill-pane",
  "all-workspaces",
  "shell",
  "destructive",
  "phone",
  "gateway",
  "notify",
  "process",
  "vault-read",
  "vault-write",
  "browse",
  "settings-read",
  "settings-write",
  "assist",
  "credentials",
  "language-server",
  "agent-plugin"
];
var MANAGER_CAPABILITIES = ALL_CAPABILITIES.filter(
  (cap) => cap !== "phone" && cap !== "gateway" && cap !== "destructive"
);
var PRODUCT_NAME = "pine";
var EXTENSION_API_VERSION = "1.11";
var EXTENSION_API_PATTERN = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,3})$/;
var EXTENSION_API_ENV = "PINE_EXTENSION_API";
function parseApiVersion(value) {
  if (typeof value !== "string") return null;
  const match = EXTENSION_API_PATTERN.exec(value);
  return match ? { major: Number(match[1]), minor: Number(match[2]) } : null;
}
function isApiCompatible(required, provided) {
  return required.major === provided.major && required.minor <= provided.minor;
}
function apiProblem(required, provided = EXTENSION_API_VERSION) {
  const wanted = parseApiVersion(required);
  if (!wanted) return "api must be an extension API version such as 1.0";
  const have = parseApiVersion(provided);
  if (have && isApiCompatible(wanted, have)) return null;
  return `needs extension API ${required}; this ${PRODUCT_NAME} provides ${provided}`;
}
var SETTINGS_CHANGED_EVENT = "settings.changed";
var ASSIST_PROVIDERS_CHANGED_EVENT = "assist.providers.changed";
var TARGET_PANE_PARAM = "targetPaneId";
var DIFF_TEXT_MAX = 5 * 1024 * 1024;
var REMOTE_FILE_MAX_BYTES = 2 * 1024 * 1024;
var FOLDER_CLOSED_EVENT = "folder.closed";
var PANEL_SIZES_FILE = "panel-sizes.json";
var PanelSizeStore = class {
  constructor(file) {
    this.file = file;
    this.sizes = parsePanelSizes(file ? readJson(file) : null);
  }
  sizes;
  all() {
    return { ...this.sizes };
  }
  set(key, fraction) {
    if (typeof key !== "string" || !PANEL_SIZE_KEY.test(key)) return false;
    if (fraction !== null && !isFraction(fraction)) return false;
    this.sizes = withPanelSize(this.sizes, key, fraction);
    this.save();
    return true;
  }
  save() {
    if (!this.file) return;
    (0, import_fs2.mkdirSync)((0, import_path2.dirname)(this.file), { recursive: true, mode: 448 });
    const tmp = `${this.file}.${process.pid}.tmp`;
    (0, import_fs2.writeFileSync)(tmp, JSON.stringify(this.sizes, null, 2), { mode: 384 });
    (0, import_fs2.renameSync)(tmp, this.file);
  }
};
function readJson(file) {
  try {
    return JSON.parse((0, import_fs2.readFileSync)(file, "utf8"));
  } catch {
    return null;
  }
}
var LANGUAGE_ID_PATTERN = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8}){0,3}$/;
var CATALOG_SUFFIX = ".json";
function extensionDir() {
  return process.env.PINE_EXTENSION_DIR ?? process.cwd();
}
function readMessageFile(file) {
  try {
    if ((0, import_fs3.statSync)(file).size > EXTENSION_LOCALE_FILE_MAX_BYTES) return void 0;
    const raw = JSON.parse((0, import_fs3.readFileSync)(file, "utf8"));
    return typeof raw === "object" && raw !== null ? raw.messages : void 0;
  } catch {
    return void 0;
  }
}
function readMessages(dir = extensionDir()) {
  const catalogs = /* @__PURE__ */ Object.create(null);
  const folder = (0, import_path3.join)(dir, EXTENSION_LOCALES_DIR);
  let names = [];
  try {
    names = (0, import_fs3.readdirSync)(folder);
  } catch {
  }
  for (const name of names) {
    const tag = name.endsWith(CATALOG_SUFFIX) ? name.slice(0, -CATALOG_SUFFIX.length) : "";
    if (!LANGUAGE_ID_PATTERN.test(tag)) continue;
    catalogs[tag] = parseMessages(readMessageFile((0, import_path3.join)(folder, name))).messages;
  }
  return catalogs;
}
function createTranslator(dir = extensionDir()) {
  const catalogs = readMessages(dir);
  return (locale) => translatorFor(catalogs, locale);
}
var DEFAULT_TIMEOUT_MS = 15e3;
var DEFAULT_MAX_OUTPUT = 8 * 1024 * 1024;
function runTool(bin, args, opts = {}) {
  const maxOutput = opts.maxOutput ?? DEFAULT_MAX_OUTPUT;
  return new Promise((resolve2) => {
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    let settled = false;
    const finish = (run) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve2(run);
    };
    const child = (0, import_child_process.spawn)(bin, args, {
      cwd: opts.cwd,
      stdio: ["ignore", "pipe", "pipe"],
      env: process.env
    });
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, opts.timeoutMs ?? DEFAULT_TIMEOUT_MS);
    child.stdout.on("data", (chunk) => {
      if (stdout.length < maxOutput) stdout += chunk.toString("utf8");
    });
    child.stderr.on("data", (chunk) => {
      if (stderr.length < maxOutput) stderr += chunk.toString("utf8");
    });
    child.on("error", (err) => {
      finish({
        code: null,
        stdout,
        stderr: stderr || err.message,
        missing: err.code === "ENOENT",
        timedOut
      });
    });
    child.on("close", (code) => finish({ code, stdout, stderr, missing: false, timedOut }));
  });
}
function nextBackoff(failures, baseMs, maxMs) {
  if (failures <= 0) return baseMs;
  return Math.min(maxMs, baseMs * 2 ** Math.min(failures, 16));
}
var AssistFailure = class extends Error {
  constructor(code, message) {
    super(message ?? code);
    this.code = code;
  }
};
function assistFailureReply(err, aborted) {
  if (aborted) return { error: "cancelled" };
  if (err instanceof AssistFailure) return { error: err.code, message: err.message };
  return { error: "failed", message: errorMessage(err) };
}
function ok(text, data) {
  const result2 = { ok: true };
  if (text !== void 0) result2.text = text;
  if (data !== void 0) result2.data = data;
  return result2;
}
function failure(error, message) {
  return message ? { ok: false, error, message } : { ok: false, error };
}
function numberSetting(values, key, fallback, range) {
  const value = values[key];
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return Math.min(range.max, Math.max(range.min, value));
}
function booleanSetting(values, key, fallback) {
  const value = values[key];
  return typeof value === "boolean" ? value : fallback;
}
function errorMessage(err) {
  return err instanceof Error ? err.message : String(err);
}
async function connect() {
  const socketPath = process.env.PINE_SOCKET;
  const token = process.env.PINE_TOKEN;
  if (!socketPath || !token) throw new Error("PINE_SOCKET / PINE_TOKEN missing");
  const provided = process.env[EXTENSION_API_ENV];
  const incompatible = provided ? apiProblem(EXTENSION_API_VERSION, provided) : null;
  if (incompatible) throw new Error(`this extension ${incompatible}`);
  const socket = (0, import_net.createConnection)(socketPath);
  await new Promise((resolve2, reject) => {
    socket.once("connect", resolve2);
    socket.once("error", reject);
  });
  const conn = (0, import_node.createMessageConnection)(
    new import_node.StreamMessageReader(socket),
    new import_node.StreamMessageWriter(socket)
  );
  const handlers = /* @__PURE__ */ new Map();
  let panelHandler = null;
  let eventHandler = null;
  let settingsHandler = null;
  let localeHandler = null;
  let assistHandler = null;
  let providersHandler = null;
  let modelsHandler = null;
  let filesHandler = null;
  let folderClosedHandler = null;
  conn.onRequest(
    "ext.command",
    async (params) => {
      const handler = handlers.get(params.command);
      if (!handler) return failure("unknown-command", params.command);
      try {
        return await handler(params.args, params.caller);
      } catch (err) {
        return failure("command-failed", errorMessage(err));
      }
    }
  );
  conn.onRequest(
    "ext.assist",
    async (params, token2) => {
      if (!assistHandler) throw new Error("no assist handler");
      const abort = new AbortController();
      const sub = token2.onCancellationRequested(() => abort.abort());
      if (token2.isCancellationRequested) abort.abort();
      try {
        return await assistHandler(params.point, params.input, {
          requestId: params.requestId,
          signal: abort.signal,
          ...params.model ? { model: params.model } : {},
          chunk: async (text) => {
            if (abort.signal.aborted) return false;
            const res = await conn.sendRequest("ext.assistChunk", {
              requestId: params.requestId,
              text
            });
            return res?.live === true;
          }
        });
      } catch (err) {
        return assistFailureReply(err, abort.signal.aborted);
      } finally {
        sub.dispose();
      }
    }
  );
  conn.onRequest(
    "ext.assistModels",
    async (params) => {
      if (!modelsHandler) throw new Error("no models handler");
      const provider = typeof params.provider === "string" ? params.provider : void 0;
      if (params.action === "list") return modelsHandler.list(provider);
      if (params.action !== "load" && params.action !== "unload" || typeof params.id !== "string") {
        return { ok: false, error: "invalid" };
      }
      try {
        await modelsHandler.setLoaded(params.id, params.action === "load", provider);
        return { ok: true };
      } catch (err) {
        return { ok: false, error: errorMessage(err) };
      }
    }
  );
  conn.onRequest("ext.files", async (params) => {
    if (!filesHandler) return { ok: false, error: "unavailable" };
    try {
      return await filesHandler(params);
    } catch {
      return { ok: false, error: "failed" };
    }
  });
  conn.onRequest("ext.panel", async (params) => {
    if (!panelHandler) throw new Error("no panel handler");
    return panelHandler(params.caller, params.path);
  });
  conn.onNotification(
    "ext.event",
    (params) => {
      if (params.type === SETTINGS_CHANGED_EVENT) {
        settingsHandler?.(params.payload.values);
      } else if (params.type === ASSIST_PROVIDERS_CHANGED_EVENT) {
        providersHandler?.(params.payload.providers);
      } else if (params.type === LOCALE_CHANGED_EVENT) {
        localeHandler?.(params.payload.locale);
      } else if (params.type === FOLDER_CLOSED_EVENT) {
        folderClosedHandler?.(params.payload.folderId);
      } else {
        eventHandler?.(params.type, params.payload);
      }
    }
  );
  conn.onClose(() => process.exit(0));
  socket.on("close", () => process.exit(0));
  conn.listen();
  await conn.sendRequest("hello", { token });
  return {
    call: (method, params) => params === void 0 ? conn.sendRequest(method) : conn.sendRequest(method, params),
    confirm: async (req) => {
      const res = await conn.sendRequest("ext.confirm", req);
      return res?.confirmed === true;
    },
    notifyPanel: (title, body, path) => conn.sendRequest("ext.notify", { title, body, openPanel: path ?? true }),
    registerCommands: async (map) => {
      for (const [id, handler] of Object.entries(map)) handlers.set(id, handler);
      await conn.sendRequest("ext.registerCommands", { commands: Object.keys(map) });
    },
    onPanel: (handler) => {
      panelHandler = handler;
    },
    subscribe: (events, handler) => {
      eventHandler = handler;
      return conn.sendRequest("ext.subscribe", { events });
    },
    setSidebarItem: (item) => conn.sendRequest("ext.setSidebarItem", item),
    notify: (title, body) => conn.sendRequest("ext.notify", { title, body }),
    openPanel: (workspaceId, path) => conn.sendRequest("ext.openPanel", { workspaceId, path }),
    setPaneChip: (chip) => conn.sendRequest("ext.setPaneChip", chip),
    clearPaneChip: (paneId, id) => conn.sendRequest("ext.clearPaneChip", { paneId, id }),
    setWorkspaceChip: (chip) => conn.sendRequest("ext.setWorkspaceChip", chip),
    clearWorkspaceChip: (workspaceId, id) => conn.sendRequest("ext.clearWorkspaceChip", { workspaceId, id }),
    getSettings: async () => {
      const res = await conn.sendRequest("ext.getSettings");
      return res?.values ?? {};
    },
    setSetting: (key, value) => conn.sendRequest("ext.setSetting", { key, value }),
    onSettingsChanged: (handler) => {
      settingsHandler = handler;
    },
    getLocale: async () => {
      const res = await conn.sendRequest("ext.locale");
      return typeof res?.locale === "string" ? res.locale : EXTENSION_BASE_LOCALE;
    },
    onLocaleChanged: (handler) => {
      localeHandler = handler;
    },
    callAs: (paneId, method, params) => conn.sendRequest(method, { ...params, [TARGET_PANE_PARAM]: paneId }),
    setAttention: (paneId, state, message) => conn.sendRequest("pane.setAttention", { [TARGET_PANE_PARAM]: paneId, state, message }),
    openDiff: (diff) => conn.sendRequest("ext.openDiff", diff),
    openTerminal: async (opts) => {
      try {
        return await conn.sendRequest("ext.openTerminal", opts);
      } catch (err) {
        return { ok: false, error: "open-terminal-failed", message: errorMessage(err) };
      }
    },
    listAgents: async () => {
      try {
        const res = await conn.sendRequest("ext.agents");
        return Array.isArray(res?.agents) ? res.agents.filter((a) => typeof a === "string") : [];
      } catch {
        return [];
      }
    },
    runAgent: async (opts) => {
      try {
        return await conn.sendRequest("ext.runAgent", opts);
      } catch (err) {
        return { ok: false, error: "run-agent-failed", message: errorMessage(err) };
      }
    },
    offerToAgent: async (opts) => {
      try {
        return await conn.sendRequest("ext.offerToAgent", opts);
      } catch (err) {
        return { ok: false, error: "offer-failed", message: errorMessage(err) };
      }
    },
    focusPane: async (paneId) => {
      try {
        return await conn.sendRequest("ext.focusPane", { paneId });
      } catch (err) {
        return failure("focus-failed", errorMessage(err));
      }
    },
    listWorkspaces: () => conn.sendRequest("workspace.list"),
    listPanes: () => conn.sendRequest("pane.list"),
    onAssist: (handler) => {
      assistHandler = handler;
    },
    onAssistModels: (handler) => {
      modelsHandler = handler;
    },
    setAssistStatus: (report) => conn.sendRequest("ext.setAssistStatus", report),
    getShortcuts: async (ids) => {
      const res = await conn.sendRequest(
        "ext.shortcuts",
        { ids }
      );
      return res?.shortcuts ?? {};
    },
    openAssistUi: (ui, workspaceId) => conn.sendRequest("ext.openAssistUi", workspaceId ? { ui, workspaceId } : { ui }),
    getSecret: async (key) => {
      const res = await conn.sendRequest("ext.getSecret", { key });
      return typeof res?.value === "string" ? res.value : null;
    },
    getAssistProviders: async () => {
      const res = await conn.sendRequest(
        "ext.assistProviders"
      );
      return Array.isArray(res?.providers) ? res.providers : [];
    },
    onAssistProvidersChanged: (handler) => {
      providersHandler = handler;
    },
    openFolder: async (opts) => {
      try {
        return await conn.sendRequest("ext.openFolder", opts);
      } catch (err) {
        return { ok: false, error: "open-folder-failed", message: errorMessage(err) };
      }
    },
    closeFolder: async (folderId) => {
      try {
        return await conn.sendRequest("ext.closeFolder", { folderId });
      } catch (err) {
        return failure("close-folder-failed", errorMessage(err));
      }
    },
    onFiles: (handler) => {
      filesHandler = handler;
    },
    onFolderClosed: (handler) => {
      folderClosedHandler = handler;
    }
  };
}
function onShutdown(fn) {
  let ran = false;
  const once = () => {
    if (ran) return;
    ran = true;
    try {
      fn();
    } catch {
    }
  };
  process.on("exit", once);
  for (const signal of ["SIGTERM", "SIGINT", "SIGHUP"]) {
    process.on(signal, () => {
      once();
      process.exit(0);
    });
  }
}
function cliArgs(args) {
  if (typeof args !== "object" || args === null) return null;
  const argv = args.argv;
  if (!Array.isArray(argv) || !argv.every((a) => typeof a === "string")) return null;
  const stdin = args.stdin;
  return typeof stdin === "string" ? { argv, stdin } : { argv };
}
function namedArgs(args) {
  return typeof args === "object" && args !== null ? args : {};
}
function panelCaller(context) {
  const caller = { kind: "user", capabilities: [...ALL_CAPABILITIES] };
  if (typeof context.workDir === "string" && context.workDir) caller.workDir = context.workDir;
  if (typeof context.workspaceId === "string" && context.workspaceId) {
    caller.workspaceId = context.workspaceId;
  }
  if (typeof context.locale === "string" && context.locale) caller.locale = context.locale;
  return caller;
}
var CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8"
};
var MAX_BODY = 1024 * 1024;
function readBody(req) {
  return new Promise((resolve2, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error("body too large"));
        req.destroy();
      } else chunks.push(c);
    });
    req.on("end", () => resolve2(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}
function send(res, status, type, body) {
  res.writeHead(status, {
    "content-type": type,
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "content-security-policy": "default-src 'self'; img-src 'self' data:; font-src 'self' data:"
  });
  res.end(body);
}
async function startPanelServer(opts) {
  const secret = (0, import_crypto.randomBytes)(24).toString("hex");
  const sizes = new PanelSizeStore(
    process.env.PINE_EXTENSION_DATA ? (0, import_path.join)(process.env.PINE_EXTENSION_DATA, PANEL_SIZES_FILE) : null
  );
  const streams = /* @__PURE__ */ new Set();
  let port = 0;
  const server = (0, import_http.createServer)(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://127.0.0.1");
    if (req.headers.host !== `127.0.0.1:${port}`) return send(res, 421, "text/plain", "bad host");
    const origin = req.headers.origin;
    if (origin && origin !== `http://127.0.0.1:${port}`)
      return send(res, 403, "text/plain", "origin");
    const authed = req.headers["x-pine-panel"] === secret || url.searchParams.get("t") === secret;
    if (req.method === "GET" && url.pathname === "/events") {
      if (!authed) return send(res, 403, "text/plain", "forbidden");
      res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-store" });
      res.write(": ok\n\n");
      streams.add(res);
      req.on("close", () => streams.delete(res));
      return;
    }
    if (url.pathname === PANEL_SIZES_PATH) {
      if (req.headers["x-pine-panel"] !== secret) return send(res, 403, "text/plain", "forbidden");
      if (req.method === "GET")
        return send(res, 200, "application/json", JSON.stringify(sizes.all()));
      if (req.method !== "POST") return send(res, 405, "text/plain", "method not allowed");
      try {
        const body = JSON.parse(await readBody(req));
        if (!sizes.set(body.key, body.fraction ?? null)) throw new Error("key, fraction");
        return send(res, 200, "application/json", JSON.stringify(sizes.all()));
      } catch (err) {
        return send(
          res,
          400,
          "application/json",
          JSON.stringify(failure("bad-request", errorMessage(err)))
        );
      }
    }
    if (req.method === "POST" && url.pathname === "/api") {
      if (req.headers["x-pine-panel"] !== secret) return send(res, 403, "text/plain", "forbidden");
      try {
        const body = JSON.parse(await readBody(req));
        if (typeof body.command !== "string") throw new Error("missing command");
        const result2 = await opts.handle(body.command, body.args, panelCaller(body.context ?? {}));
        return send(res, 200, "application/json", JSON.stringify(result2));
      } catch (err) {
        return send(
          res,
          400,
          "application/json",
          JSON.stringify(failure("bad-request", errorMessage(err)))
        );
      }
    }
    if (req.method === "GET") {
      const name = url.pathname === "/" ? "panel.html" : url.pathname.slice(1);
      if (!opts.files.includes(name)) return send(res, 404, "text/plain", "not found");
      const ext = name.slice(name.lastIndexOf("."));
      try {
        return send(
          res,
          200,
          CONTENT_TYPES[ext] ?? "application/octet-stream",
          (0, import_fs.readFileSync)((0, import_path.join)(opts.dir, name))
        );
      } catch {
        return send(res, 404, "text/plain", "not found");
      }
    }
    send(res, 405, "text/plain", "method not allowed");
  });
  await new Promise((resolve2) => server.listen(0, "127.0.0.1", resolve2));
  const address = server.address();
  port = typeof address === "object" && address ? address.port : 0;
  return {
    url: (query) => {
      const params = new URLSearchParams({ ...query, t: secret });
      return `http://127.0.0.1:${port}/?${params.toString()}`;
    },
    changed: () => {
      for (const res of streams) res.write("data: changed\n\n");
    }
  };
}

// src/extensions/trellis/trellis.ts
var import_node_fs = require("node:fs");
var import_node_path = require("node:path");
var HUMAN_ACTOR = `human:${PRODUCT_NAME}`;
var PRIORITIES = ["urgent", "high", "normal", "low"];
var TITLE_MAX = 300;
var TEXT_MAX = 64 * 1024;
var NAME_MAX = 100;
var KEY_RE = /^[A-Z][A-Z0-9]*(-[A-Z0-9]+)*$/;
var SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var ENTRY_SLUG_RE = /^[a-z0-9][a-z0-9_-]*(\/[a-z0-9][a-z0-9_-]*)*$/;
var MARKER_FILE = ".trellis";
function parseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return void 0;
  }
}
function parseObjectOutput(stdout) {
  const trimmed = stdout.trim();
  let value = parseJson(trimmed);
  if (value === void 0) value = parseJson(trimmed.split("\n")[0] ?? "");
  return isRecord(value) ? value : null;
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function records(value) {
  return Array.isArray(value) ? value.filter(isRecord) : [];
}
var str = (v) => typeof v === "string" ? v : void 0;
var num = (v) => typeof v === "number" && Number.isFinite(v) ? v : void 0;
var strings = (v) => Array.isArray(v) ? v.filter((s) => typeof s === "string") : [];
function loopbackHttpUrl(raw) {
  if (typeof raw !== "string") return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "http:") return null;
    if (url.hostname !== "127.0.0.1" && url.hostname !== "localhost") return null;
    return url;
  } catch {
    return null;
  }
}
function parseDaemonStatus(stdout) {
  const obj = parseObjectOutput(stdout);
  if (!obj || typeof obj.running !== "boolean") return null;
  const url = loopbackHttpUrl(obj.url);
  return { running: obj.running, url: url ? url.href : null };
}
function parseError(output) {
  const obj = parseObjectOutput(output);
  const err = obj?.error;
  if (!isRecord(err)) return null;
  const code = str(err.code);
  const message = str(err.message);
  if (!code || !message) return null;
  const fix = str(err.fix);
  return fix ? { code, message, fix } : { code, message };
}
function readCard(c) {
  const ref = str(c.ref);
  const column = str(c.column);
  if (!ref || !column) return null;
  const card = {
    ref,
    title: str(c.title) ?? "",
    column,
    priority: str(c.priority) ?? "normal",
    labels: strings(c.labels),
    version: num(c.version) ?? 0,
    updatedAt: num(c.updated_at) ?? 0
  };
  const claimedBy = str(c.claimed_by);
  if (claimedBy) card.claimedBy = claimedBy;
  const claimUntil = num(c.claim_until);
  if (claimUntil !== void 0) card.claimUntil = claimUntil;
  return card;
}
function parseCard(stdout) {
  const obj = parseObjectOutput(stdout);
  return obj ? readCard(obj) : null;
}
function parseBoard(stdout) {
  const obj = parseObjectOutput(stdout);
  const project = str(obj?.project);
  if (!obj || !project || !Array.isArray(obj.columns)) return null;
  const columns = [];
  for (const c of records(obj.columns)) {
    const name = str(c.name);
    if (!name) continue;
    const cards = records(c.cards).map(readCard).filter((card) => card !== null);
    columns.push({ name, done: c.done === true, cards });
  }
  return {
    project,
    board: str(obj.board) ?? "",
    slug: str(obj.slug) ?? "",
    columns
  };
}
function parseBoards(stdout) {
  const obj = parseObjectOutput(stdout);
  if (!obj || !Array.isArray(obj.boards)) return null;
  return records(obj.boards).flatMap((b) => {
    const slug = str(b.slug);
    if (!slug) return [];
    return [
      {
        name: str(b.name) ?? slug,
        slug,
        isDefault: b.is_default === true,
        cardCount: num(b.card_count) ?? 0
      }
    ];
  });
}
function parseProjects(stdout) {
  const obj = parseObjectOutput(stdout);
  if (!obj || !Array.isArray(obj.projects)) return null;
  return records(obj.projects).flatMap((p) => {
    const key = str(p.key);
    return key && KEY_RE.test(key) ? [{ key, name: str(p.name) ?? key }] : [];
  });
}
function readRelation(r) {
  const rel = str(r.rel);
  const ref = str(r.ref);
  if (!rel || !ref) return null;
  const relation = { rel, ref, title: str(r.title) ?? "", done: r.done === true };
  const column = str(r.column);
  if (column) relation.column = column;
  return relation;
}
function parseCardDetail(stdout) {
  const obj = parseObjectOutput(stdout);
  const card = obj ? readCard(obj) : null;
  if (!obj || !card) return null;
  return {
    ...card,
    body: str(obj.body) ?? "",
    createdAt: num(obj.created_at) ?? 0,
    relations: records(obj.relations).map(readRelation).filter((r) => r !== null)
  };
}
function parseCardThread(text) {
  const obj = parseObjectOutput(text);
  if (!obj || !Array.isArray(obj.comments)) return null;
  const comments = records(obj.comments).flatMap((c) => {
    const body = str(c.body);
    if (body === void 0) return [];
    return [
      {
        id: str(c.id) ?? "",
        actor: str(c.actor) ?? "",
        body,
        createdAt: num(c.created_at) ?? 0
      }
    ];
  });
  const activity = records(obj.events).flatMap((e) => {
    const seq = num(e.seq);
    const action = str(e.action);
    if (seq === void 0 || !action) return [];
    const item = {
      seq,
      at: num(e.timestamp) ?? 0,
      actor: str(e.actor) ?? "",
      action
    };
    const field = str(e.field);
    if (field) item.field = field;
    const oldValue = str(e.old_value);
    if (oldValue !== void 0) item.old = oldValue;
    const newValue = str(e.new_value);
    if (newValue !== void 0) item.new = newValue;
    return [item];
  });
  return { comments, activity };
}
function readEntrySummary(e) {
  const slug = str(e.slug);
  if (!slug) return null;
  return {
    slug,
    ref: str(e.ref) ?? "",
    title: str(e.title) ?? slug,
    template: str(e.template) ?? "",
    summary: str(e.summary) ?? "",
    private: e.private === true,
    tags: strings(e.tags),
    updatedAt: num(e.updated_at) ?? 0
  };
}
function parseVaultList(stdout) {
  const obj = parseObjectOutput(stdout);
  if (!obj || !Array.isArray(obj.entries)) return null;
  return records(obj.entries).map(readEntrySummary).filter((e) => e !== null);
}
function parseVaultEntry(stdout) {
  const obj = parseObjectOutput(stdout);
  const summary = obj ? readEntrySummary(obj) : null;
  if (!obj || !summary) return null;
  return {
    ...summary,
    body: (str(obj.body) ?? "").replace(/^\n/, ""),
    sources: strings(obj.sources),
    version: num(obj.version) ?? 0
  };
}
function countBoard(board, nowMs) {
  let open = 0;
  let claimed = 0;
  for (const column of board.columns) {
    if (column.done) continue;
    for (const card of column.cards) {
      open += 1;
      if (isClaimLive(card, nowMs)) claimed += 1;
    }
  }
  return { open, claimed };
}
function isClaimLive(card, nowMs) {
  return Boolean(card.claimedBy) && (card.claimUntil === void 0 || card.claimUntil > nowMs);
}
function parseEventLine(line) {
  const obj = parseObjectOutput(line);
  if (!obj) return null;
  if (obj.gap === true) return { gap: true };
  const seq = num(obj.seq);
  const action = str(obj.action);
  const entity = str(obj.entity);
  if (seq === void 0 || !action || !entity) return null;
  const ev = {
    seq,
    ts: num(obj.ts) ?? 0,
    actor: str(obj.actor) ?? "",
    entity,
    ref: str(obj.ref) ?? "",
    title: str(obj.title) ?? "",
    action
  };
  const field = str(obj.field);
  if (field) ev.field = field;
  const oldValue = str(obj.old);
  if (oldValue !== void 0) ev.old = oldValue;
  const newValue = str(obj.new);
  if (newValue !== void 0) ev.new = newValue;
  return ev;
}
function projectOfRef(ref) {
  const address = /^\/([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*)\//.exec(ref);
  if (address) return address[1] === "GLOBAL" ? null : address[1];
  const m = /^([A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*?)-\d+$/.exec(ref);
  return m ? m[1] : null;
}
var REVIEW_COLUMN = /review|needs?[-_ ]?(you|user|human|input)|waiting|approv/i;
var BLOCKED_COLUMN = /block/i;
var ALL_NOTIFY_KINDS = { review: true, blocked: true };
function needsUser(ev, kinds = ALL_NOTIFY_KINDS) {
  if (ev.entity !== "card" || ev.action !== "moved" || ev.field !== "column") return null;
  if (!ev.actor.startsWith("agent:")) return null;
  const column = ev.new ?? "";
  if (BLOCKED_COLUMN.test(column)) return kinds.blocked ? { kind: "blocked", column } : null;
  if (REVIEW_COLUMN.test(column)) return kinds.review ? { kind: "review", column } : null;
  return null;
}
function parseMarker(text) {
  const s = text.trim();
  if (!s.startsWith("/") || /[\r\n]/.test(s)) return null;
  const segs = s.slice(1).split("/");
  const project = segs[0].toUpperCase();
  if (!KEY_RE.test(project) || project === "GLOBAL") return null;
  if (segs.length === 1) return { project };
  if (segs.length === 3 && segs[1] === "boards" && SLUG_RE.test(segs[2])) {
    return { project, board: segs[2] };
  }
  return null;
}
function exists(path) {
  try {
    (0, import_node_fs.lstatSync)(path);
    return true;
  } catch {
    return false;
  }
}
function findProject(workDir, home) {
  let start;
  try {
    start = (0, import_node_fs.realpathSync)((0, import_node_path.resolve)(workDir));
    if (!(0, import_node_fs.statSync)(start).isDirectory()) return null;
  } catch {
    return null;
  }
  let homeReal = (0, import_node_path.resolve)(home);
  try {
    homeReal = (0, import_node_fs.realpathSync)(homeReal);
  } catch {
  }
  for (let dir = start; ; ) {
    const parent = (0, import_node_path.dirname)(dir);
    if (dir === homeReal || parent === dir) return null;
    const marker = (0, import_node_path.join)(dir, MARKER_FILE);
    try {
      if ((0, import_node_fs.statSync)(marker).isFile()) {
        const parsed = parseMarker((0, import_node_fs.readFileSync)(marker, "utf8"));
        return parsed ? { ...parsed, marker } : null;
      }
    } catch {
    }
    if (exists((0, import_node_path.join)(dir, ".git"))) return null;
    dir = parent;
  }
}
function cardRef(raw) {
  if (typeof raw !== "string") return null;
  const ref = raw.trim().toUpperCase();
  return /^[A-Z][A-Z0-9]*(-[A-Z0-9]+)*-\d+$/.test(ref) ? ref : null;
}
function projectKey(raw) {
  return typeof raw === "string" && KEY_RE.test(raw) && raw !== "GLOBAL" ? raw : null;
}
function boardSlug(raw) {
  return typeof raw === "string" && SLUG_RE.test(raw) && raw.length <= NAME_MAX ? raw : null;
}
function entrySlug(raw) {
  return typeof raw === "string" && raw.length <= 200 && ENTRY_SLUG_RE.test(raw) ? raw : null;
}
function hasControlCharacter(text) {
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code < 32 || code === 127) return true;
  }
  return false;
}
function columnName(raw) {
  if (typeof raw !== "string") return null;
  const name = raw.trim();
  return name && name.length <= NAME_MAX && !hasControlCharacter(name) ? name : null;
}
function priority(raw) {
  return PRIORITIES.find((p) => p === raw) ?? null;
}
function cardTitle(raw) {
  if (typeof raw !== "string") return null;
  const title = raw.replace(/\s+/g, " ").trim();
  return title && title.length <= TITLE_MAX ? title : null;
}
function longText(raw) {
  if (typeof raw !== "string") return null;
  const text = raw.replace(/\r\n?/g, "\n");
  return text.length <= TEXT_MAX ? text : null;
}
function cardPath(ref) {
  const valid = cardRef(ref);
  return valid ? `/card/${valid}` : null;
}
var BOARD_PATH = "/board";
var VAULT_PATH = "/vault";
function panelTarget(path) {
  if (!path) return { view: "board" };
  if (path === VAULT_PATH) return { view: "vault" };
  const card = /^\/card\/([^/?#]+)$/.exec(path);
  const ref = card ? cardRef(card[1]) : null;
  return ref ? { view: "board", card: ref } : { view: "board" };
}

// src/extensions/trellis/daemon.ts
var TOKEN_HEADER = "x-trellis-token";
var THREAD_MAX_BYTES = 4 * 1024 * 1024;
var TIMEOUT_MS = 5e3;
function daemonApi(url) {
  const parsed = loopbackHttpUrl(url);
  const token = parsed?.searchParams.get("token");
  return parsed && token ? { origin: parsed.origin, token } : null;
}
function threadUrl(api, project, board, ref) {
  const path = ["api", "p", project, "b", board, "cards", ref].map(encodeURIComponent).join("/");
  return `${api.origin}/${path}`;
}
async function readThread(api, project, board, ref) {
  try {
    const res = await fetch(threadUrl(api, project, board, ref), {
      headers: { [TOKEN_HEADER]: api.token, accept: "application/json" },
      redirect: "error",
      signal: AbortSignal.timeout(TIMEOUT_MS)
    });
    if (!res.ok) return null;
    const text = await res.text();
    if (text.length > THREAD_MAX_BYTES) return null;
    return parseCardThread(text);
  } catch {
    return null;
  }
}

// src/extensions/trellis/prompt.ts
var PROMPT_BODY_MAX = 6e3;
var OFFER_LABEL_MAX = 120;
var TASK_SKILL = "trellis-card";
var REVIEW_COLUMN2 = /review/i;
function reviewColumn(columns) {
  return columns.find((name) => REVIEW_COLUMN2.test(name) && /^[^\s'"`]+$/.test(name)) ?? null;
}
function withoutControls(text, keep) {
  let out = "";
  for (const ch of text) out += (ch < " " || ch === "\x7F") && !keep.includes(ch) ? " " : ch;
  return out;
}
function oneLine(text) {
  return withoutControls(text, "").replace(/\s+/g, " ").trim();
}
function promptBody(body, t) {
  const text = withoutControls(body.replace(/\r\n?/g, "\n"), "\n").trim();
  if (text.length <= PROMPT_BODY_MAX) return text;
  return `${text.slice(0, PROMPT_BODY_MAX).trimEnd()}

${t("task.bodyCut")}`;
}
function lastStep(ref, review, t) {
  return review ? t("task.lastReview", { ref, column: review }) : t("task.lastReviewAny");
}
function taskPrompt(card, review, t) {
  const ref = card.ref;
  return [
    t("task.heading", { ref, title: oneLine(card.title) }),
    promptBody(card.body, t),
    t("task.how", { ref, skill: TASK_SKILL, last: lastStep(ref, review, t) })
  ].filter(Boolean).join("\n\n");
}
function taskLine(card, review, t) {
  const ref = card.ref;
  return oneLine(
    t("task.line", {
      ref,
      title: oneLine(card.title),
      skill: TASK_SKILL,
      last: lastStep(ref, review, t)
    })
  );
}
function sessionContext(project) {
  if (!project) return "";
  const board = project.board ? `, board ${project.board}` : "";
  return `This folder belongs to Trellis project ${project.project}${board}. The ${TASK_SKILL} skill explains how to work on one of its cards.`;
}
function taskLabel(card) {
  const label = `${card.ref} \xB7 ${oneLine(card.title)}`;
  return label.length <= OFFER_LABEL_MAX ? label : `${label.slice(0, OFFER_LABEL_MAX - 1)}\u2026`;
}

// src/extensions/trellis/panelApi.ts
var AGENT_NAME = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
function agentArg(raw) {
  return typeof raw === "string" && AGENT_NAME.test(raw) ? raw : null;
}
var DAEMON_CACHE_MS = 15e3;
function errorResult(error) {
  return failure(error.code, error.fix ? `${error.message}
${error.fix}` : error.message);
}
function result(res, data) {
  return res.ok ? ok(void 0, data(res.value)) : errorResult(res.error);
}
function invalid(field) {
  return failure("invalid-args", field);
}
function panelHandlers(deps) {
  const { service } = deps;
  const cli = service.cli;
  let daemon = null;
  const currentDaemon = async () => {
    const now = Date.now();
    if (daemon && now - daemon.at < (deps.daemonCacheMs ?? DAEMON_CACHE_MS)) return daemon.api;
    const status = await cli.daemonStatus();
    const api = status.ok && status.value.running ? daemonApi(status.value.url) : null;
    daemon = { api, at: now };
    return api;
  };
  const wrote = (res, data) => {
    if (res.ok) service.changed();
    return result(res, data);
  };
  const refArg = (args) => cardRef(namedArgs(args).ref);
  const taskCard = async (ref, board) => {
    const detail = await cli.card(ref);
    if (!detail.ok) return errorResult(detail.error);
    const project = projectOfRef(ref);
    const shown = project ? await cli.board({ project, board }) : null;
    const review = shown?.ok ? reviewColumn(shown.value.columns.map((c) => c.name)) : null;
    return { card: detail.value, review };
  };
  const track = (card, paneId, agent, locale) => {
    deps.tasks.set({ ref: card.ref, paneId, agent, at: Date.now() });
    deps.agents.mark(paneId, card, locale);
    service.changed();
  };
  const taskArgs = (args, caller) => {
    const named = namedArgs(args);
    const ref = refArg(args);
    const board = named.board === void 0 ? void 0 : boardSlug(named.board);
    if (!ref) return invalid("ref");
    if (board === null) return invalid("board");
    if (!caller.workspaceId) {
      return failure("no-workspace", deps.translate(caller.locale)("task.noWorkspace"));
    }
    return { ref, board, workspaceId: caller.workspaceId };
  };
  return {
    context: async (_args, caller) => {
      if (!await cli.isInstalled()) {
        return failure("not-installed", deps.translate(caller.locale)("notInstalled"));
      }
      const projects = await cli.projects();
      if (!projects.ok) return errorResult(projects.error);
      const own = service.projectFor(caller.workDir);
      return ok(void 0, {
        actor: HUMAN_ACTOR,
        workspace: own ? { project: own.project, board: own.board ?? null } : null,
        canInit: Boolean(caller.workDir) && !own,
        projects: projects.value
      });
    },
    board: async (args) => {
      const named = namedArgs(args);
      const project = projectKey(named.project);
      if (!project) return invalid("project");
      const board = named.board === void 0 || named.board === null ? void 0 : boardSlug(named.board);
      if (board === null) return invalid("board");
      const [shown, boards] = await Promise.all([
        cli.board({ project, board }),
        cli.boards(project)
      ]);
      if (!shown.ok) return errorResult(shown.error);
      return ok(void 0, { board: shown.value, boards: boards.ok ? boards.value : [] });
    },
    card: async (args) => {
      const ref = refArg(args);
      if (!ref) return invalid("ref");
      const board = boardSlug(namedArgs(args).board);
      const detail = await cli.card(ref);
      if (!detail.ok) return errorResult(detail.error);
      const api = board ? await currentDaemon() : null;
      const project = ref.slice(0, ref.lastIndexOf("-"));
      const thread = api && board ? await readThread(api, project, board, ref) : null;
      return ok(void 0, { card: detail.value, thread });
    },
    move: async (args) => {
      const ref = refArg(args);
      const column = columnName(namedArgs(args).column);
      if (!ref) return invalid("ref");
      if (!column) return invalid("column");
      return wrote(await cli.move(ref, column), (card) => ({ card }));
    },
    comment: async (args) => {
      const ref = refArg(args);
      const body = longText(namedArgs(args).body);
      if (!ref) return invalid("ref");
      if (!body?.trim()) return invalid("body");
      return wrote(await cli.comment(ref, body), () => ({ ref }));
    },
    claim: async (args) => {
      const ref = refArg(args);
      if (!ref) return invalid("ref");
      return wrote(await cli.claim(ref), (card) => ({ card }));
    },
    renew: async (args) => {
      const ref = refArg(args);
      if (!ref) return invalid("ref");
      return wrote(await cli.renew(ref), () => ({ ref }));
    },
    release: async (args) => {
      const ref = refArg(args);
      if (!ref) return invalid("ref");
      return wrote(await cli.release(ref), () => ({ ref }));
    },
    create: async (args) => {
      const named = namedArgs(args);
      const project = projectKey(named.project);
      const board = named.board === void 0 ? void 0 : boardSlug(named.board);
      const title = cardTitle(named.title);
      const body = named.body === void 0 ? "" : longText(named.body);
      const column = named.column === void 0 ? void 0 : columnName(named.column);
      const level = named.priority === void 0 ? void 0 : priority(named.priority);
      if (!project) return invalid("project");
      if (board === null) return invalid("board");
      if (!title) return invalid("title");
      if (body === null) return invalid("body");
      if (column === null) return invalid("column");
      if (level === null) return invalid("priority");
      const res = await cli.newCard({
        project,
        board,
        title,
        body,
        column,
        priority: level
      });
      return wrote(res, (card) => ({ card }));
    },
    vault: async (args) => {
      const project = projectKey(namedArgs(args).project);
      if (!project) return invalid("project");
      return result(await cli.vaultList(project), (entries) => ({ entries }));
    },
    entry: async (args) => {
      const named = namedArgs(args);
      const project = projectKey(named.project);
      const slug = entrySlug(named.slug);
      if (!project) return invalid("project");
      if (!slug) return invalid("slug");
      return result(await cli.vaultEntry(project, slug), (entry) => ({ entry }));
    },
    init: async (_args, caller) => initHere(deps, caller),
    agents: async () => ok(void 0, { agents: await deps.agents.list() }),
    tasks: async () => ok(void 0, {
      tasks: deps.tasks.list().map(({ ref, agent, at }) => ({ ref, agent, at }))
    }),
    start: async (args, caller) => {
      const target = taskArgs(args, caller);
      if ("ok" in target) return target;
      const agent = agentArg(namedArgs(args).agent);
      if (!agent) return invalid("agent");
      const found = await taskCard(target.ref, target.board);
      if ("ok" in found) return found;
      const t = deps.translate(caller.locale);
      const res = await deps.agents.run({
        workspaceId: target.workspaceId,
        agent,
        prompt: taskPrompt(found.card, found.review, t)
      });
      if (!res.ok) return failure(res.error, res.message);
      track(found.card, res.paneId, agent, caller.locale);
      return ok(void 0, { ref: target.ref, agent });
    },
    offer: async (args, caller) => {
      const target = taskArgs(args, caller);
      if ("ok" in target) return target;
      const found = await taskCard(target.ref, target.board);
      if ("ok" in found) return found;
      const t = deps.translate(caller.locale);
      const res = await deps.agents.offer({
        workspaceId: target.workspaceId,
        text: taskLine(found.card, found.review, t),
        label: taskLabel(found.card)
      });
      if (!res.ok) return failure(res.error, res.message);
      if (!res.sent) return ok(void 0, { ref: target.ref, sent: false });
      track(found.card, res.paneId, null, caller.locale);
      return ok(void 0, { ref: target.ref, sent: true });
    },
    focus: async (args, caller) => {
      const ref = refArg(args);
      if (!ref) return invalid("ref");
      const t = deps.translate(caller.locale);
      const task = deps.tasks.get(ref);
      if (!task) return failure("no-task", t("task.none"));
      const res = await deps.agents.focus(task.paneId);
      if (res.ok) return ok();
      deps.tasks.dropPane(task.paneId);
      service.changed();
      return failure("pane-closed", t("task.gone"));
    }
  };
}
async function initHere(deps, caller) {
  const t = deps.translate(caller.locale);
  const dir = caller.cwd ?? caller.workDir;
  if (!dir) return failure("no-dir", t("noDir"));
  if (!await deps.service.isInstalled()) return failure("not-installed", t("notInstalled"));
  const confirmed = await deps.confirm({
    title: t("initTitle"),
    message: t("initMessage", { dir }),
    detail: t("initDetail"),
    confirmLabel: t("initConfirm"),
    cancelLabel: t("cancel")
  });
  if (!confirmed) return failure("cancelled", t("initCancelled"));
  const res = await deps.service.init(dir);
  return res.ok ? ok(res.text) : failure("init-failed", res.message);
}

// src/extensions/trellis/service.ts
var import_node_child_process = require("node:child_process");

// src/extensions/trellis/cli.ts
var import_node_fs2 = require("node:fs");
var import_node_os = require("node:os");
var import_node_path2 = require("node:path");
var NOT_INSTALLED = "not-installed";
var TEXT_DIR_PREFIX = "pine-trellis-text-";
var TEXT_FILE_MODE = 384;
function scopeArgs(scope) {
  const args = ["--project", scope.project];
  if (scope.board) args.push("--board", scope.board);
  return args;
}
function failureOf(run) {
  if (run.missing) return { code: NOT_INSTALLED, message: "trellis is not on PATH" };
  if (run.timedOut) return { code: "timeout", message: "trellis did not answer in time" };
  const structured = parseError(run.stderr) ?? parseError(run.stdout);
  if (structured) return structured;
  const line = run.stderr.trim().split("\n")[0] ?? "";
  return { code: "failed", message: line || `trellis exited with ${run.code}` };
}
var TrellisCli = class {
  constructor(opts = {}) {
    this.opts = opts;
    this.bin = opts.bin ?? "trellis";
  }
  bin;
  installed = null;
  async run(args, opts = {}) {
    const texts = Object.entries(opts.texts ?? {});
    const dir = texts.length > 0 ? (0, import_node_fs2.mkdtempSync)((0, import_node_path2.join)((0, import_node_os.tmpdir)(), TEXT_DIR_PREFIX)) : null;
    const full = [...args];
    try {
      texts.forEach(([flag, value], i) => {
        const file = (0, import_node_path2.join)(dir, `text-${i}`);
        (0, import_node_fs2.writeFileSync)(file, value, { mode: TEXT_FILE_MODE });
        full.push(`--${flag}`, `@${file}`);
      });
      const run = await runTool(this.bin, [...full, "--json"], {
        cwd: opts.cwd,
        timeoutMs: opts.timeoutMs ?? this.opts.timeoutMs
      });
      if (run.missing) this.installed = false;
      if (run.code === 0) return { ok: true, value: run.stdout };
      return { ok: false, error: failureOf(run) };
    } finally {
      if (dir) (0, import_node_fs2.rmSync)(dir, { recursive: true, force: true });
    }
  }
  async parsed(args, parse, opts = {}) {
    const res = await this.run(args, opts);
    if (!res.ok) return res;
    const value = parse(res.value);
    return value === null ? {
      ok: false,
      error: { code: "unreadable", message: "trellis printed output it cannot read" }
    } : { ok: true, value };
  }
  async isInstalled() {
    if (this.installed !== null) return this.installed;
    const res = await runTool(this.bin, ["version", "--json"], { timeoutMs: 5e3 });
    this.installed = !res.missing && res.code === 0 && parseObjectOutput(res.stdout) !== null;
    return this.installed;
  }
  knownMissing() {
    return this.installed === false;
  }
  board(scope) {
    return this.parsed(["board", "show", ...scopeArgs(scope)], parseBoard);
  }
  boards(project) {
    return this.parsed(["board", "ls", "--project", project], parseBoards);
  }
  projects() {
    return this.parsed(["project", "ls"], parseProjects);
  }
  card(ref) {
    return this.parsed(["card", "show", ref], parseCardDetail);
  }
  newCard(card) {
    const args = ["card", "new", ...scopeArgs(card)];
    if (card.column) args.push(`--column=${card.column}`);
    if (card.priority) args.push(`--priority=${card.priority}`);
    const texts = { title: card.title };
    if (card.body) texts.body = card.body;
    return this.parsed(args, parseCard, { texts });
  }
  move(ref, column) {
    return this.parsed(["card", "move", ref, `--column=${column}`], parseCard);
  }
  async comment(ref, body) {
    const res = await this.run(["card", "comment", ref], { texts: { body } });
    return res.ok ? { ok: true, value: true } : res;
  }
  claim(ref) {
    return this.parsed(["card", "claim", ref], parseCard);
  }
  async renew(ref) {
    const res = await this.run(["card", "renew", ref]);
    return res.ok ? { ok: true, value: true } : res;
  }
  async release(ref) {
    const res = await this.run(["card", "release", ref]);
    return res.ok ? { ok: true, value: true } : res;
  }
  vaultList(project) {
    return this.parsed(["vault", "ls", "--project", project], parseVaultList);
  }
  vaultEntry(project, slug) {
    return this.parsed(["vault", "show", slug, "--project", project], parseVaultEntry);
  }
  daemonStatus() {
    return this.parsed(["daemon", "status"], parseDaemonStatus, { timeoutMs: 5e3 });
  }
  init(dir) {
    return this.parsed(["init"], parseObjectOutput, { cwd: dir, timeoutMs: 3e4 });
  }
};

// src/extensions/trellis/service.ts
var CARDS_CHIP = "cards";
var OPEN_COMMAND = "open";
var PRIME_PAGE = 5e3;
var PRIME_MAX_PAGES = 50;
var ACK_DELAY_MS = 2e3;
var FOLLOW_RESTART_MAX_MS = 5 * 6e4;
var FOLLOW_HEALTHY_MS = 6e4;
var CHANGE_DELAY_MS = 250;
var PANEL_ENTITIES = /* @__PURE__ */ new Set(["card", "comment", "entry", "board"]);
var UNKNOWN_PROJECT_RETRIES = 5;
var UNKNOWN_PROJECT_RETRY_MS = 1e3;
var TrellisService = class {
  constructor(opts) {
    this.opts = opts;
    this.bin = opts.bin ?? "trellis";
    this.cli = new TrellisCli({ bin: this.bin });
  }
  cli;
  bin;
  shown = /* @__PURE__ */ new Set();
  projects = /* @__PURE__ */ new Map();
  workspacesKnown = false;
  follower = null;
  followFailures = 0;
  followTimer = null;
  ackTimer = null;
  pendingAck = null;
  refreshTimer = null;
  changeTimer = null;
  stopped = false;
  locale = "en";
  notifyKinds = ALL_NOTIFY_KINDS;
  get t() {
    return this.opts.translate(this.locale);
  }
  isInstalled() {
    return this.cli.isInstalled();
  }
  async counts(project) {
    const res = await this.cli.board({ project: project.project, board: project.board });
    return res.ok ? countBoard(res.value, (this.opts.now ?? Date.now)()) : null;
  }
  chipTooltip(counts, t = this.t) {
    return counts.claimed > 0 ? t("chip.openClaimed", { open: counts.open, claimed: counts.claimed }) : t("chip.open", { open: counts.open });
  }
  projectFor(workDir) {
    return workDir ? findProject(workDir, this.opts.home) : null;
  }
  async refreshSidebar() {
    if (this.stopped) return;
    if (!await this.isInstalled()) return this.clearSidebar();
    let workspaces;
    try {
      workspaces = await this.opts.host.listWorkspaces();
      this.workspacesKnown = true;
    } catch (err) {
      this.workspacesKnown = false;
      this.opts.host.log(`workspace list unavailable: ${err.message}`);
      return this.clearSidebar();
    }
    this.projects = this.projectsOf(workspaces);
    const byProject = /* @__PURE__ */ new Map();
    const next = /* @__PURE__ */ new Set();
    for (const [workspaceId, project] of this.projects) {
      const key = `${project.project}/${project.board ?? ""}`;
      if (!byProject.has(key)) byProject.set(key, this.counts(project));
      const counts = await byProject.get(key);
      if (!counts) continue;
      const res = await this.opts.host.setWorkspaceChip({
        workspaceId,
        id: CARDS_CHIP,
        text: String(counts.open),
        tooltip: this.chipTooltip(counts),
        icon: "kanban",
        tone: counts.claimed > 0 ? "brand" : "neutral",
        command: OPEN_COMMAND
      });
      if (res.ok) next.add(workspaceId);
    }
    for (const workspaceId of this.shown) {
      if (!next.has(workspaceId)) await this.opts.host.clearWorkspaceChip(workspaceId, CARDS_CHIP);
    }
    this.shown = next;
  }
  async clearSidebar() {
    for (const workspaceId of this.shown) {
      await this.opts.host.clearWorkspaceChip(workspaceId, CARDS_CHIP);
    }
    this.shown.clear();
  }
  projectsOf(workspaces) {
    const projects = /* @__PURE__ */ new Map();
    for (const workspace of workspaces) {
      const project = this.projectFor(workspace.workDir);
      if (project) projects.set(workspace.workspaceId, project);
    }
    return projects;
  }
  async isOpenProject(project) {
    const open = this.openProjects();
    if (!open) return true;
    if (project && open.has(project)) return true;
    try {
      this.projects = this.projectsOf(await this.opts.host.listWorkspaces());
    } catch {
      return true;
    }
    return project !== null && (this.openProjects()?.has(project) ?? false);
  }
  openProjects() {
    if (!this.workspacesKnown) return null;
    return new Set([...this.projects.values()].map((p) => p.project));
  }
  async init(dir) {
    if (!await this.isInstalled()) return { ok: false, message: this.t("notInstalled") };
    const res = await this.cli.init(dir);
    if (!res.ok) return { ok: false, message: res.error.message };
    const project = res.value.project;
    const key = typeof project?.key === "string" ? project.key : "";
    this.changed();
    return {
      ok: true,
      text: key ? this.t("initDone", { key, dir }) : this.t("initDoneNoKey", { dir })
    };
  }
  async startEvents() {
    if (this.stopped || this.follower || !await this.isInstalled()) return;
    try {
      if (!await this.consumerExists()) await this.primeConsumer();
    } catch (err) {
      this.opts.host.log(`events: ${err.message}`);
      return this.scheduleFollow();
    }
    this.follow();
  }
  async consumerExists() {
    const res = await runTool(this.bin, ["events", "consumers", "--json"]);
    if (res.code !== 0) throw new Error(res.stderr.trim() || "events consumers failed");
    const list = JSON.parse(res.stdout || "[]");
    return Array.isArray(list) && list.some((c) => c?.name === this.opts.consumer);
  }
  async primeConsumer() {
    for (let page = 0; page < PRIME_MAX_PAGES; page++) {
      const res = await runTool(
        this.bin,
        [
          "events",
          "--consumer",
          this.opts.consumer,
          "--json",
          "--all-projects",
          "--limit",
          `${PRIME_PAGE}`
        ],
        { timeoutMs: 6e4 }
      );
      if (res.code !== 0) throw new Error(res.stderr.trim() || "events failed");
      let last = null;
      let count = 0;
      for (const line of res.stdout.split("\n")) {
        const ev = parseEventLine(line);
        if (ev && !("gap" in ev)) {
          last = ev.seq;
          count += 1;
        }
      }
      if (last !== null) await this.ack(last);
      if (count < PRIME_PAGE) return;
    }
  }
  async ack(seq) {
    await runTool(this.bin, ["events", "ack", this.opts.consumer, `${seq}`]);
  }
  scheduleAck(seq) {
    this.pendingAck = Math.max(seq, this.pendingAck ?? 0);
    if (this.ackTimer) return;
    this.ackTimer = setTimeout(() => {
      this.ackTimer = null;
      const target = this.pendingAck;
      this.pendingAck = null;
      if (target !== null) void this.ack(target);
    }, ACK_DELAY_MS);
  }
  follow() {
    const started = Date.now();
    const child = (0, import_node_child_process.spawn)(
      this.bin,
      ["events", "--consumer", this.opts.consumer, "--json", "--all-projects", "--follow"],
      { stdio: ["ignore", "pipe", "ignore"] }
    );
    this.follower = child;
    let buffer = "";
    child.stdout.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      let nl = buffer.indexOf("\n");
      while (nl >= 0) {
        const line = buffer.slice(0, nl);
        buffer = buffer.slice(nl + 1);
        this.onEventLine(line);
        nl = buffer.indexOf("\n");
      }
    });
    child.on("error", () => {
    });
    child.on("close", () => {
      if (this.follower !== child) return;
      this.follower = null;
      if (this.stopped || this.cli.knownMissing()) return;
      if (Date.now() - started > FOLLOW_HEALTHY_MS) this.followFailures = 0;
      this.scheduleFollow();
    });
  }
  scheduleFollow() {
    if (this.stopped || this.followTimer) return;
    this.followFailures += 1;
    const delay = nextBackoff(
      this.followFailures - 1,
      this.opts.followRestartBaseMs ?? 2e3,
      FOLLOW_RESTART_MAX_MS
    );
    this.followTimer = setTimeout(() => {
      this.followTimer = null;
      void this.startEvents();
    }, delay);
  }
  followRestarts() {
    return this.followFailures;
  }
  onEventLine(line) {
    const ev = parseEventLine(line);
    if (!ev || "gap" in ev) return;
    this.scheduleAck(ev.seq);
    if (PANEL_ENTITIES.has(ev.entity)) this.changed();
    void this.handleEvent(ev);
  }
  async handleEvent(ev, attempt = 0) {
    if (ev.entity !== "card") return;
    if (!await this.isOpenProject(projectOfRef(ev.ref))) {
      if (attempt < UNKNOWN_PROJECT_RETRIES && !this.stopped) {
        setTimeout(() => void this.handleEvent(ev, attempt + 1), UNKNOWN_PROJECT_RETRY_MS);
      }
      return;
    }
    this.scheduleRefresh();
    const needs = needsUser(ev, this.notifyKinds);
    if (!needs) return;
    const t = this.t;
    void this.opts.host.notifyPanel(
      needs.kind === "blocked" ? t("blockedTitle") : t("reviewTitle"),
      `${ev.ref} ${ev.title}`.trim(),
      cardPath(ev.ref) ?? void 0
    );
  }
  scheduleRefresh(delayMs = 1e3) {
    if (this.refreshTimer || this.stopped) return;
    this.refreshTimer = setTimeout(() => {
      this.refreshTimer = null;
      void this.refreshSidebar();
    }, delayMs);
  }
  changed() {
    this.scheduleRefresh();
    if (this.changeTimer || this.stopped) return;
    this.changeTimer = setTimeout(() => {
      this.changeTimer = null;
      this.opts.host.changed();
    }, this.opts.changeDelayMs ?? CHANGE_DELAY_MS);
  }
  stop() {
    this.stopped = true;
    for (const t of [this.followTimer, this.ackTimer, this.refreshTimer, this.changeTimer]) {
      if (t) clearTimeout(t);
    }
    this.follower?.kill("SIGTERM");
    this.follower = null;
  }
};

// src/extensions/trellis/tasks.ts
var AgentTasks = class {
  byRef = /* @__PURE__ */ new Map();
  set(task) {
    this.byRef.set(task.ref, task);
  }
  get(ref) {
    return this.byRef.get(ref);
  }
  dropPane(paneId) {
    let dropped = false;
    for (const [ref, task] of this.byRef) {
      if (task.paneId !== paneId) continue;
      this.byRef.delete(ref);
      dropped = true;
    }
    return dropped;
  }
  list() {
    return [...this.byRef.values()];
  }
};

// src/extensions/trellis/main.ts
var REFRESH_SECONDS = { min: 10, max: 3600 };
var EVENTS = ["pane.created", "pane.closed", "cwd.changed"];
var FOCUS_EVENT = "focus.changed";
var PANEL_FILES = ["panel.html", "panel.js", "panel.css", "base.css"];
var TASK_CHIP = "task";
function workspacesFrom(raw) {
  if (!Array.isArray(raw)) throw new Error("workspace.list returned no list");
  return raw.filter(
    (s) => typeof s?.workspaceId === "string" && typeof s?.workDir === "string"
  ).map((s) => ({ workspaceId: s.workspaceId, workDir: s.workDir }));
}
async function main() {
  process.env.TRELLIS_AGENT = HUMAN_ACTOR;
  const ext = await connect();
  const translate = createTranslator();
  let panelChanged = () => {
  };
  const service = new TrellisService({
    home: (0, import_node_os2.homedir)(),
    consumer: PRODUCT_NAME,
    translate,
    host: {
      listWorkspaces: async () => workspacesFrom(await ext.call("workspace.list")),
      setWorkspaceChip: (chip) => ext.setWorkspaceChip(chip),
      clearWorkspaceChip: (workspaceId, id) => ext.clearWorkspaceChip(workspaceId, id),
      notifyPanel: (title, body, path) => ext.notifyPanel(title, body, path),
      changed: () => panelChanged(),
      log: (line) => console.error(line)
    }
  });
  onShutdown(() => service.stop());
  const tasks = new AgentTasks();
  const agents = {
    list: () => ext.listAgents(),
    run: (opts) => ext.runAgent(opts),
    offer: (opts) => ext.offerToAgent(opts),
    focus: (paneId) => ext.focusPane(paneId),
    mark: (paneId, card, locale) => void ext.setPaneChip({
      paneId,
      id: TASK_CHIP,
      text: card.ref,
      tooltip: translate(locale)("task.chip", { ref: card.ref, title: card.title })
    }).catch(() => {
    })
  };
  const deps = { service, translate, confirm: ext.confirm, agents, tasks };
  const panelOnly = panelHandlers(deps);
  const panel = await startPanelServer({
    dir: __dirname,
    files: PANEL_FILES,
    handle: async (command, args, caller) => {
      const handler = panelOnly[command];
      return handler ? handler(args, caller) : failure("unknown-command", command);
    }
  });
  panelChanged = () => panel.changed();
  service.locale = await ext.getLocale();
  ext.onLocaleChanged((locale) => {
    service.locale = locale;
    void service.refreshSidebar();
  });
  const handlers = {
    open: async (_args, caller) => {
      await ext.openPanel(caller.workspaceId, BOARD_PATH);
      return ok("ok");
    },
    vault: async (_args, caller) => {
      await ext.openPanel(caller.workspaceId, VAULT_PATH);
      return ok("ok");
    },
    init: async (_args, caller) => initHere(deps, caller),
    card: async (args, caller) => {
      const t = translate(caller.locale);
      const raw = cliArgs(args)?.argv[0];
      if (!raw) return failure("missing-ref", t("cardUsage"));
      const ref = cardRef(raw);
      const path = ref ? cardPath(ref) : null;
      if (!ref || !path) return failure("invalid-ref", t("invalidRef", { raw }));
      if (!await service.isInstalled()) return failure("not-installed", t("notInstalled"));
      await ext.openPanel(caller.workspaceId, path);
      return ok(t("cardOpened", { ref }), { ref, path });
    },
    status: async (_args, caller) => {
      const t = translate(caller.locale);
      if (!await service.isInstalled()) return failure("not-installed", t("notInstalled"));
      const project = service.projectFor(caller.workDir);
      if (!project) return ok(t("noProject"), null);
      const counts = await service.counts(project);
      if (!counts) return failure("trellis-failed", t("statusFailed"));
      const data = { project: project.project, board: project.board ?? null, ...counts };
      return ok(`${project.project}: ${service.chipTooltip(counts, t)}`, data);
    },
    "session-context": async (_args, caller) => ok(sessionContext(service.projectFor(caller.cwd ?? caller.workDir)))
  };
  ext.onPanel((caller, path) => {
    const target = panelTarget(path);
    const query = {
      workDir: caller.workDir ?? "",
      workspaceId: caller.workspaceId ?? "",
      locale: caller.locale ?? "en",
      view: target.view
    };
    if (target.card) query.card = target.card;
    return { url: panel.url(query) };
  });
  await ext.registerCommands(handlers);
  const onEvent = (type, payload) => {
    if (type === "pane.closed" && tasks.dropPane(payload.paneId)) {
      service.changed();
    }
    service.scheduleRefresh();
  };
  const withFocus = await ext.subscribe([...EVENTS, FOCUS_EVENT], onEvent);
  if (withFocus?.ok === false) await ext.subscribe(EVENTS, onEvent);
  let refresh = null;
  const applySettings = (values) => {
    service.notifyKinds = {
      review: booleanSetting(values, "notifyReview", true),
      blocked: booleanSetting(values, "notifyBlocked", true)
    };
    const seconds = numberSetting(values, "refreshSeconds", 60, REFRESH_SECONDS);
    if (refresh) clearInterval(refresh);
    refresh = setInterval(() => void service.refreshSidebar(), seconds * 1e3);
    refresh.unref();
  };
  ext.onSettingsChanged(applySettings);
  applySettings(await ext.getSettings());
  await service.refreshSidebar();
  void service.startEvents();
}
main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
