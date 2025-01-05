// Name: HTTP
// ID: gsaHTTPRequests
// Description: Comprehensive extension for interacting with external websites.
// By: RedMan13 <https://scratch.mit.edu/users/RedMan13/>
// License: MIT

/* generated l10n code */Scratch.translate.setup({"fi":{"_Hide Extra":"Piilota lisälohkot","_Request":"Pyyntö","_Response":"Vastaus","_Show Extra":"Näytä lisälohkot","_[name] from header":"[name] otsakkeesta","_[name] in request form":"pyyntölomakkeen [name]","_[path] in request options":"pyyntöasetusten [path]","_clear current data":"tyhjennä nykyiset tiedot","_delete [name] from request form":"poista [name] pyyntölomakkeesta","_error":"virhe","_headers as json":"otsakkeet JSON-muodossa","_in header set [name] to [value]":"aseta otsakkeen [name] arvoon [value]","_request failed?":"epäonnistuiko pyyntö?","_request succeeded?":"onnistuiko pyyntö?","_response":"vastaus","_send request to [url]":"lähetä pyyntö osoitteeseen [url]","_set [name] to [value] in request form":"aseta pyyntölomakkeen [name] arvoon [value]","_set [path] to [value] in request options":"aseta pyyntöasetusten [path] arvoon [value]","_set [path] to type [type] in request options":"aseta pyyntöasetusten kohteen [path] tyypiksi [type]","_set content type to [type]":"aseta sisällön tyypiksi [type]","_set headers to json [json]":"aseta otsakkeet JSON-koodiksi [json]","_set request body to [text]":"aseta pyynnön rungoksi [text]","_set request body to a form":"aseta pyynnön runko lomakkeeksi","_set request method to [method]":"aseta pyyntömenetelmäksi [method]","_site responded?":"vastasiko sivusto?","_status":"tila","_status text":"tilateksti","_type of [path] in request options":"pyyntöasetusten kohteen [path] tyyppi","_when a request fails":"kun pyyntö epäonnistuu","_when a site responds":"kun sivusto vastaa"},"it":{"_status":"stato"},"ko":{"_Request":"요청","_Response":"응답","_[name] from header":"헤더 [name]","_error":"오류","_headers as json":"헤더를 json으로","_in header set [name] to [value]":"헤더의 [name]을(를) [value](으)로 정하기","_request failed?":"요청이 실패했는가?","_request succeeded?":"요청이 성공했는가?","_response":"응답","_send request to [url]":"[url](으)로 요청 보내기  ","_set headers to json [json]":"헤더를 [json] json으로 정하기","_set request method to [method]":"요청 메소드를 [method](으)로 정하기","_site responded?":"사이트가 응답했는가?","_status":"상태","_status text":"상태 메시지","_when a request fails":"요청이 실패했을 때","_when a site responds":"사이트가 응답했을 때"},"ru":{"_Hide Extra":"Скрыть Дополнительное","_Request":"Запрос","_Response":"Ответ","_Show Extra":"Показать Дополнительное","_[name] from header":"[name] из заголовка","_[name] in request form":"[name] в форме запроса","_[path] in request options":"[path] в настройках запроса","_clear current data":"отчистить текущие данные","_delete [name] from request form":"удалить [name] из формы запроса","_error":"ошибка","_headers as json":"заголовки как json","_in header set [name] to [value]":"в заголовке задать [name] на [value]","_request failed?":"запрос провалился?","_request succeeded?":"запрос успешен?","_response":"ответ","_send request to [url]":"отправить запрос на [url]","_set [name] to [value] in request form":"задать [name] на [value] в форме запроса","_set [path] to [value] in request options":"задать [path] на [value] в настройках запроса","_set [path] to type [type] in request options":"задать [path] на тип [type] в настройках запроса","_set content type to [type]":"задать тип контента на [type]","_set headers to json [json]":"задать заголовки на json [json]","_set request body to [text]":"задать тело запроса на [text]","_set request body to a form":"задать тело запроса на форму","_set request method to [method]":"задать метод запроса на [method]","_site responded?":"сайт ответил?","_status":"статус","_status text":"текст статуса","_type of [path] in request options":"тип [path] в настройках запроса","_when a request fails":"когда запрос завалился","_when a site responds":"когда сайт отвечает"},"zh-cn":{"_Hide Extra":"隐藏更多","_Request":"请求","_Response":"响应","_Show Extra":"显示更多","_[name] from header":"请求头的[name]","_[name] in request form":"请求表单中的[name]","_[path] in request options":"请求选项的[path]","_clear current data":"清空当前数据","_delete [name] from request form":"从请求表单删除[name]","_error":"错误","_headers as json":"请求头json","_in header set [name] to [value]":"在请求头中设置[name]为[value]","_request failed?":"请求失败？","_request succeeded?":"请求成功？","_response":"响应","_send request to [url]":"发送请求给[url]","_set [name] to [value] in request form":"设置请求表单中的[name]为[value]","_set [path] to [value] in request options":"将请求选项中的[path]设为[value]","_set [path] to type [type] in request options":"将请求选项的[path]设为类型[type]","_set content type to [type]":"设置内容类型为[type]","_set headers to json [json]":"设置请求头为json[json]","_set request body to [text]":"设置请求体为[text]","_set request body to a form":"设置请求体为表单","_set request method to [method]":"设置请求方法为[method]","_site responded?":"网站响应？","_status":"封禁状态","_status text":"状态文本","_type of [path] in request options":"请求选项中[path]的类型","_when a request fails":"当有请求失败","_when a site responds":"当有网站响应"}});/* end generated l10n code */(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed)
    throw new Error("can not load out side unsandboxed mode");

  const setType = (value, type) => {
    switch (type) {
      case "string":
        switch (typeof value) {
          case "string":
          case "boolean":
          case "number":
          case "function":
            return String(value);
          case "object":
            try {
              return JSON.stringify(value);
            } catch {
              return "{}";
            }
        }
        break;
      case "number":
        switch (typeof value) {
          case "string":
            return String(value);
          case "boolean":
            return Boolean(value);
          case "number":
            return value;
          case "function":
          case "object":
            return NaN;
        }
        break;
      case "boolean":
        switch (typeof value) {
          case "string":
          case "boolean":
          case "function":
          case "number":
            return Boolean(value);
          case "object":
            return false;
        }
        break;
      case "object":
        switch (typeof value) {
          case "string":
            try {
              const parsed = JSON.parse(value);
              if (typeof parsed === "object") return parsed;
              return {};
            } catch {
              return {};
            }
          case "boolean":
          case "function":
          case "number":
            return {};
          case "object":
            return value;
        }
        break;
    }
  };
  const parseType = (text) => {
    // this isnt text and we just pass it down as what ever it is
    if (typeof text !== "string") return text;
    if (!isNaN(Number(text))) {
      return Number(text);
    } else {
      try {
        const parsed = JSON.parse(text);
        if (typeof parsed === "object") return parsed;
        if (typeof parsed === "boolean") return parsed;
        return text;
      } catch {
        return text;
      }
    }
  };
  const getPathArray = (path) => {
    const names = path.split(".");
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      name = name.replaceAll(/(?<!\\)&dot/g, ".");
    }
    return names;
  };
  const getValueAtPath = (object, path) => {
    for (const name of path) {
      object = object?.[name];
    }
    return setType(object, "string");
  };
  const setValueAtPath = (object, path, value) => {
    for (const name of path.slice(0, -1)) {
      object = object[name];
    }
    object[path.at(-1)] = value;
  };

  const { vm } = Scratch;
  const { runtime } = vm;

  const extensionId = "gsaHTTPRequests";

  // the funny class to make event blocks look better
  class Events {
    constructor() {
      this.events = {};
      this.blocks = {};
    }

    /**
     * adds a event name listner for a block
     * @param {string} name name of the event
     * @param {string} [block] a block to run when trigered
     */
    add(name, block) {
      if (block) {
        if (!this.blocks[name]) this.blocks[name] = [];
        this.blocks[name].push(block);
      }
    }

    /**
     * activate an event
     * @param {string} name name of the event
     */
    activate(name) {
      this.events[name] = true;
      if (this.blocks[name]) {
        for (const block of this.blocks[name]) {
          runtime.startHats(block);
        }
      }
    }
  }
  const createBlockId = (block) => `${extensionId}_${block}`;

  /* ------- BLOCKS -------- */
  const { BlockType, Cast, ArgumentType } = Scratch;

  class WebRequests {
    static get defaultRequest() {
      const defaultRequest = {
        events: new Events(),
        get mimeType() {
          return this.options.headers["Content-Type"];
        },
        set mimeType(value) {
          if (
            this.options.headers["Content-Type"] === "multipart/form-data" &&
            value !== "multipart/form-data"
          ) {
            this.options.body = "";
          }
          this.options.headers["Content-Type"] = value;
        },
        set method(val) {
          this.options.method = val;
          // remove body on get requests
          if (val === "GET") {
            delete this.options.body;
          }
        },
        get method() {
          return this.options.method;
        },
        options: {
          headers: {
            "Content-Type": "text/plain",
          },
          method: "GET",
        },
        set body(val) {
          if (this.method === "GET") return;
          if (
            val instanceof FormData &&
            !(this.options.body instanceof FormData)
          ) {
            this.options.body = val;
            this.options.headers["Content-Type"] = "multipart/form-data";
          }
          if (
            !(val instanceof FormData) &&
            this.options.body instanceof FormData
          ) {
            this.options.body = "";
            this.options.headers["Content-Type"] = "text/plain";
          }
          this.options.body = val;
        },
        get body() {
          return this.options.body;
        },
        end: false,
        fail: false,
        success: false,
      };

      defaultRequest.events.add("reqSuccess", createBlockId("onResponse"));
      defaultRequest.events.add("reqFail", createBlockId("onFail"));

      return defaultRequest;
    }
    static get defaultResponse() {
      const defaultResponse = {
        text: "",
        status: "",
        statusText: "",
        headers: new Headers(),
        error: "",
        url: "",
      };

      return defaultResponse;
    }

    /**
     * no need to install runtime as it comes with Scratch var
     */
    constructor() {
      this.clearAll();
      this.showingExtra = false;

      Scratch.vm.runtime.on("RUNTIME_DISPOSED", () => {
        this.clearAll();
      });
    }
    getInfo() {
      return {
        id: extensionId,
        name: "HTTP",
        color1: "#307eff",
        color2: "#2c5eb0",
        blocks: [
          {
            opcode: "clearAll",
            blockType: BlockType.COMMAND,
            text: Scratch.translate("clear current data"),
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: Scratch.translate("Response"),
          },
          {
            opcode: "resData",
            blockType: BlockType.REPORTER,
            text: Scratch.translate("response"),
          },
          {
            opcode: "error",
            blockType: BlockType.REPORTER,
            text: Scratch.translate("error"),
          },
          {
            opcode: "status",
            blockType: BlockType.REPORTER,
            text: Scratch.translate("status"),
          },
          {
            opcode: "statusText",
            blockType: BlockType.REPORTER,
            text: Scratch.translate("status text"),
          },
          "---",
          {
            opcode: "getHeaderJSON",
            blockType: BlockType.REPORTER,
            disableMonitor: true,
            text: Scratch.translate("headers as json"),
          },
          {
            opcode: "getHeaderValue",
            blockType: BlockType.REPORTER,
            arguments: {
              name: {
                type: ArgumentType.STRING,
                defaultValue: "name",
              },
            },
            text: Scratch.translate("[name] from header"),
          },
          "---",
          {
            opcode: "requestComplete",
            blockType: BlockType.BOOLEAN,
            text: Scratch.translate("site responded?"),
          },
          {
            opcode: "requestFail",
            blockType: BlockType.BOOLEAN,
            text: Scratch.translate("request failed?"),
          },
          {
            opcode: "requestSuccess",
            blockType: BlockType.BOOLEAN,
            text: Scratch.translate("request succeeded?"),
          },
          "---",
          {
            opcode: "onResponse",
            blockType: BlockType.EVENT,
            isEdgeActivated: false,
            text: Scratch.translate("when a site responds"),
          },
          {
            opcode: "onFail",
            blockType: BlockType.EVENT,
            isEdgeActivated: false,
            text: Scratch.translate("when a request fails"),
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: Scratch.translate("Request"),
          },
          {
            opcode: "setMimeType",
            blockType: BlockType.COMMAND,
            arguments: {
              type: {
                type: ArgumentType.STRING,
                menu: "mimeType",
                defaultValue: this.request.mimeType,
              },
            },
            text: Scratch.translate("set content type to [type]"),
          },
          {
            opcode: "setRequestmethod",
            blockType: BlockType.COMMAND,
            arguments: {
              method: {
                type: ArgumentType.STRING,
                menu: "method",
                defaultValue: this.request.method,
              },
            },
            text: Scratch.translate("set request method to [method]"),
          },
          {
            opcode: "setHeaderData",
            blockType: BlockType.COMMAND,
            arguments: {
              name: {
                type: ArgumentType.STRING,
                defaultValue: "Content-Type",
              },
              value: {
                type: ArgumentType.STRING,
                defaultValue: this.request.mimeType,
              },
            },
            text: Scratch.translate("in header set [name] to [value]"),
          },
          {
            opcode: "setHeaderJSON",
            blockType: BlockType.COMMAND,
            arguments: {
              json: {
                type: ArgumentType.STRING,
                defaultValue: `{"Content-Type": "${this.request.mimeType}"}`,
              },
            },
            text: Scratch.translate("set headers to json [json]"),
          },
          {
            opcode: "setBody",
            blockType: BlockType.COMMAND,
            arguments: {
              text: {
                type: ArgumentType.STRING,
                default: "Apple!",
              },
            },
            text: Scratch.translate("set request body to [text]"),
          },
          "---",
          {
            opcode: "setBodyToForm",
            blockType: BlockType.COMMAND,
            text: Scratch.translate("set request body to a form"),
          },
          {
            opcode: "getFormProperty",
            blockType: BlockType.REPORTER,
            arguments: {
              name: {
                type: ArgumentType.STRING,
                defaultValue: "name",
              },
            },
            text: Scratch.translate("[name] in request form"),
          },
          {
            opcode: "setFormProperty",
            blockType: BlockType.COMMAND,
            arguments: {
              name: {
                type: ArgumentType.STRING,
                defaultValue: "name",
              },
              value: {
                type: ArgumentType.STRING,
                defaultValue: "value",
              },
            },
            text: Scratch.translate("set [name] to [value] in request form"),
          },
          {
            opcode: "deleteFormProperty",
            blockType: BlockType.COMMAND,
            arguments: {
              name: {
                type: ArgumentType.STRING,
                defaultValue: "name",
              },
            },
            text: Scratch.translate("delete [name] from request form"),
          },
          "---",
          {
            opcode: "sendRequest",
            blockType: BlockType.COMMAND,
            arguments: {
              url: {
                type: ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/hello.txt",
              },
            },
            text: Scratch.translate("send request to [url]"),
          },
          {
            func: "showExtra",
            blockType: BlockType.BUTTON,
            text: Scratch.translate("Show Extra"),
            hideFromPalette: this.showingExtra,
          },
          {
            func: "hideExtra",
            blockType: BlockType.BUTTON,
            text: Scratch.translate("Hide Extra"),
            hideFromPalette: !this.showingExtra,
          },
          {
            opcode: "setUnkownProperty",
            blockType: BlockType.COMMAND,
            arguments: {
              path: {
                type: ArgumentType.STRING,
                defaultValue: "path.to.item",
              },
              value: {
                type: ArgumentType.STRING,
                defaultValue: "data",
              },
            },
            text: Scratch.translate("set [path] to [value] in request options"),
            hideFromPalette: !this.showingExtra,
          },
          {
            opcode: "setUnkownPropertyType",
            blockType: BlockType.COMMAND,
            arguments: {
              path: {
                type: ArgumentType.STRING,
                defaultValue: "path.to.item",
              },
              type: {
                type: ArgumentType.STRING,
                menu: "jsTypes",
              },
            },
            text: Scratch.translate(
              "set [path] to type [type] in request options"
            ),
            hideFromPalette: !this.showingExtra,
          },
          {
            opcode: "getUnkownProperty",
            blockType: BlockType.REPORTER,
            arguments: {
              path: {
                type: ArgumentType.STRING,
                defaultValue: "path.to.item",
              },
            },
            text: Scratch.translate("[path] in request options"),
            hideFromPalette: !this.showingExtra,
          },
          {
            opcode: "getUnkownPropertyType",
            blockType: BlockType.REPORTER,
            arguments: {
              path: {
                type: ArgumentType.STRING,
                defaultValue: "path.to.item",
              },
            },
            text: Scratch.translate("type of [path] in request options"),
            hideFromPalette: !this.showingExtra,
          },
        ],
        menus: {
          jsTypes: {
            items: ["string", "number", "boolean", "object"],
          },
          method: {
            items: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
            acceptReporters: true,
          },
          mimeType: {
            items: [
              "application/javascript",
              "application/ogg",
              "application/pdf",
              "application/json",
              "application/ld+json",
              "application/xml",
              "application/zip",
              "audio/mpeg",
              "image/gif",
              "image/jpeg",
              "image/png",
              "image/tiff",
              "image/x-icon",
              "image/svg+xml",
              "text/css",
              "text/csv",
              "text/html",
              "text/plain",
              "text/xml",
              "video/mpeg",
              "video/mp4",
              "video/x-ms-wmv",
              "video/x-msvideo",
              "video/x-flv",
              "video/webm",
            ],
            acceptReporters: true,
          },
        },
      };
    }

    /* ------ RESETING ------- */

    clearAll() {
      this.request = WebRequests.defaultRequest;
      this.response = WebRequests.defaultResponse;
    }

    /* ------- DATA READING -------- */

    resData() {
      return this.response.text;
    }

    error() {
      return this.response.error;
    }

    status() {
      return this.response.status;
    }

    requestComplete() {
      return this.request.end;
    }

    requestFail() {
      return this.request.fail;
    }

    requestSuccess() {
      return this.request.success;
    }

    statusText() {
      return this.response.statusText;
    }

    getHeaderValue(args) {
      const name = Cast.toString(args.name);
      return this.response.get(name);
    }

    getHeaderJSON() {
      const object = {};
      for (const entry of this.response.headers.entries()) {
        object[entry[0]] = entry[1];
      }
      return JSON.stringify(object);
    }

    /* -------- CONTROL --------- */

    setMimeType(args) {
      const type = Cast.toString(args.type);
      this.request.mimeType = type;
    }

    setRequestmethod(args) {
      const method = Cast.toString(args.method);
      this.request.method = method;
    }

    setHeaderData(args) {
      const key = Cast.toString(args.name);
      const value = Cast.toString(args.value);
      this.request.options.headers[key] = value;
    }

    setHeaderJSON(args) {
      const json = Cast.toString(args.json);
      let object;
      // ignore invalid data
      try {
        object = JSON.parse(json);
      } catch {
        return;
      }
      if (typeof object !== "object") return;
      this.request.options.headers = object;
    }

    setBody(args) {
      const body = Cast.toString(args.text);
      this.request.body = body;
    }

    setBodyToForm() {
      this.request.body = new FormData();
    }

    getFormProperty(args) {
      if (!(this.request.options.body instanceof FormData)) return;
      const name = Cast.toString(args.name);
      return this.request.body.get(name);
    }

    setFormProperty(args) {
      if (!(this.request.options.body instanceof FormData)) return;
      const name = Cast.toString(args.name);
      const value = Cast.toString(args.value);
      this.request.body.set(name, value);
    }

    deleteFormProperty(args) {
      if (!(this.request.options.body instanceof FormData)) return;
      const name = Cast.toString(args.name);
      this.request.body.delete(name);
    }

    async sendRequest(args) {
      const url = Cast.toString(args.url);
      const options = this.request.options;

      this.clearAll();

      this.response.url = url;
      try {
        const res = await Scratch.fetch(url, options);
        // @ts-ignore
        this.response.status = res.status;
        this.response.headers = res.headers;
        this.response.statusText = res.statusText;
        if (res.ok) {
          this.request.success = true;
          this.request.events.activate("reqSuccess");
        } else {
          this.request.fail = true;
          this.request.events.activate("reqFail");
        }
        this.request.end = true;
        if (res.headers.get("Content-Type") === "multipart/form-data") {
          const form = await res.formData();
          const json = {};
          for (const [key, value] of form.entries()) {
            json[key] = value;
          }
          this.response.text = JSON.stringify(json);
          return;
        }
        const body = await res.text();
        this.response.text = body;
      } catch (err) {
        this.response.error = String(err);
        console.warn("request failed with error", err);
        this.request.fail = true;
        this.request.end = true;
        this.request.events.activate("reqFail");
      }
    }

    /* extra stuff for when its missing something */

    showExtra() {
      this.showingExtra = true;
      vm.extensionManager.refreshBlocks();
    }

    hideExtra() {
      this.showingExtra = false;
      vm.extensionManager.refreshBlocks();
    }

    setUnkownProperty(args) {
      const name = Cast.toString(args.path);
      const text = Cast.toString(args.value);

      const path = getPathArray(name);
      const value = parseType(text);
      setValueAtPath(this.request.options, path, value);
    }

    setUnkownPropertyType(args) {
      const name = Cast.toString(args.path);
      const type = Cast.toString(args.type);
      const path = getPathArray(name);

      const oldValue = getValueAtPath(this.request.options, path);
      const newValue = setType(oldValue, type);
      setValueAtPath(this.request.options, path, newValue);
    }

    getUnkownProperty(args) {
      const name = Cast.toString(args.path);
      const path = getPathArray(name);

      return getValueAtPath(this.request.options, path);
    }

    getUnkownPropertyType(args) {
      const name = Cast.toString(args.path);
      const path = getPathArray(name);
      const value = getValueAtPath(this.request.options, path);

      return typeof value;
    }
  }

  const instance = new WebRequests();
  // @ts-ignore
  Scratch.extensions.register(instance);
})(Scratch);
