// Name: RixxyX
// ID: RixxyX
// Description: Various utility blocks.
// By: RixTheTyrunt <https://scratch.mit.edu/users/RixTheTyrunt/>
// License: MIT

/*!
 * Originally created by https://scratch.mit.edu/users/RixTheTyrunt/
 * This file is available under an informal "use with credit" license.
 */

/* generated l10n code */Scratch.translate.setup({"fi":{"_RixxyX is cool, right?":"RixxyX on siisti, vai mitä?","_[BOOL] as boolean":"[BOOL] totuusarvona","_[NUM] as number":"[NUM] numerona","_[TEXT] as text":"[TEXT] tekstinä","_[TEXT] to lowercase":"[TEXT] pieninä kirjaimina","_[TEXT] to uppercase":"[TEXT] isoina kirjaimina","_[TEXT_1] is the same type as [TEXT_2]?":"onko [TEXT_1] samantyyppinen kuin [TEXT_2]?","_binary [BIN] to text":"binääri [BIN] tekstiksi","_capitalize [TEXT]":"aloita [TEXT] isolla","_color [COLOR] in hex":"väri [COLOUR] heksadesimaalina","_counter":"laskuri","_decrement counter by [NUM]":"vähennä laskurista arvo [NUM]","_end measuring time":"lopeta ajan mittaaminen","_extract text [TEXT] between [NUM_1] to [NUM_2] characters":"tekstin [TEXT] merkit [NUM_1] – [NUM_2]","_false":"epätosi","_if [BOOL] then [TEXT]":"jos [BOOL], niin [TEXT]","_if [BOOL] then [TEXT_1] else [TEXT_2]":"jos [BOOL], niin [TEXT_1] tai muuten [TEXT_2]","_increment counter by [NUM]":"lisää laskuriin arvo [NUM]","_is javascript NaN [OBJ]":"onko JavaScript-NaN [OBJ]","_repeat text [TEXT] [NUM] times":"toista teksti [TEXT] [NUM] kertaa","_reverse text [TEXT]":"teksti [TEXT] käänteisenä","_rixxyX is cool, right?":"rixxyX on siisti, vai mitä?","_set counter to [NUM]":"aseta laskuri arvoon [NUM]","_start measuring time":"aloita ajan mittaaminen","_text [TEXT] to binary":"teksti [TEXT] binääriksi","_time":"aika","_true":"tosi"},"ja":{"_false":"偽","_if [BOOL] then [TEXT]":"もし[BOOL]なら[TEXT]","_if [BOOL] then [TEXT_1] else [TEXT_2]":"もし[BOOL]なら[TEXT_1]、でなげれば[TEXT_2]","_true":"真"},"ko":{"_RixxyX is cool, right?":"RixxyX 참 좋죠?","_[TEXT] to lowercase":"소문자 [TEXT]","_[TEXT] to uppercase":"대문자 [TEXT]","_[TEXT_1] is the same type as [TEXT_2]?":"[TEXT_1]이(가) [TEXT_2]와(과) 같은 타입인가?","_color [COLOR] in hex":"색상 [COLOR]의 Hex코드","_counter":"카운터","_false":"거짓","_if [BOOL] then [TEXT]":"만약 [BOOL](이)라면 [TEXT]","_if [BOOL] then [TEXT_1] else [TEXT_2]":"만약 [BOOL](이)라면 [TEXT_1] 아니면 [TEXT_2] ","_is javascript NaN [OBJ]":"[OBJ]이(가) javascript NaN 인가?","_repeat text [TEXT] [NUM] times":"텍스트 [TEXT](을)를 [NUM]번 반복","_reverse text [TEXT]":"역방향 텍스트 [TEXT]","_rixxyX is cool, right?":"RixxyX 참 좋죠?","_set counter to [NUM]":"카운터를 [NUM](으)로 정하기","_true":"참"},"nb":{"_true":"sann"},"nl":{"_false":"onwaar","_true":"waar"},"pl":{"_false":"fałsz","_time":"czas"},"ru":{"_false":"нет","_true":"да"},"zh-cn":{"_RixxyX is cool, right?":"RixxyX 很酷，不是吗？","_[BOOL] as boolean":"[BOOL]作为布尔值","_[NUM] as number":"[NUM] 作为数字","_[TEXT] as text":"[TEXT]作为文字","_[TEXT] to lowercase":"[TEXT]转小写","_[TEXT] to uppercase":"[TEXT]转大写","_[TEXT_1] is the same type as [TEXT_2]?":"[TEXT_1]和[TEXT_2]类型一样？","_binary [BIN] to text":"二进制[BIN]转文字","_capitalize [TEXT]":"首字母大写[TEXT]","_color [COLOR] in hex":"颜色[COLOR]代码","_counter":"计数器","_decrement counter by [NUM]":"将计数器减少[NUM]","_end measuring time":"结束计时","_extract text [TEXT] between [NUM_1] to [NUM_2] characters":"提取[TEXT]中[NUM_1]到[NUM_2]之间的文字","_false":"假","_if [BOOL] then [TEXT]":"如果[BOOL]那么[TEXT]","_if [BOOL] then [TEXT_1] else [TEXT_2]":"如果[BOOL]那么[TEXT_1]否则[TEXT_2]","_increment counter by [NUM]":"将计数器增加[NUM]","_is javascript NaN [OBJ]":"是 javascript NaN [OBJ]","_repeat text [TEXT] [NUM] times":"重复文字[TEXT][NUM]次","_reverse text [TEXT]":"反转文字[TEXT]","_rixxyX is cool, right?":"rixxyX 很酷，不是吗？","_set counter to [NUM]":"将计数器设为[NUM]","_start measuring time":"开始计时","_text [TEXT] to binary":"文字[TEXT]转二进制","_time":"时间","_true":"真"}});/* end generated l10n code */(function () {
  "use strict";

  var count = 0;
  var isMeasure = false;
  var time = 0;

  class RixxyX {
    getInfo() {
      return {
        color1: "#773c00",
        color2: "#5f3000",
        id: "RixxyX",
        name: "RixxyX",
        blocks: [
          {
            opcode: "notEquals",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[TEXT_1] != [TEXT_2]",
            arguments: {
              TEXT_1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "RixxyX",
              },
              TEXT_2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "TyruntX",
              },
            },
          },
          {
            opcode: "color",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("color [COLOR] in hex"),
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#ff0000",
              },
            },
          },
          {
            opcode: "returnTrue",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("true"),
            arguments: {},
            disableMonitor: true,
          },
          {
            opcode: "returnFalse",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("false"),
            arguments: {},
            disableMonitor: true,
          },
          {
            opcode: "ifElseString",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("if [BOOL] then [TEXT_1] else [TEXT_2]"),
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              TEXT_1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "RixxyX",
              },
              TEXT_2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "TyruntX",
              },
            },
          },
          {
            opcode: "ifString",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("if [BOOL] then [TEXT]"),
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "RixxyX",
              },
            },
          },
          {
            opcode: "extractTextBetweenToCharacters",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "extract text [TEXT] between [NUM_1] to [NUM_2] characters"
            ),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("RixxyX is cool, right?"),
              },
              NUM_1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              NUM_2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 6,
              },
            },
          },
          {
            opcode: "returnString",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TEXT] as text"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("RixxyX is cool, right?"),
              },
            },
          },
          {
            opcode: "isTheSameTypeAs",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[TEXT_1] is the same type as [TEXT_2]?"),
            arguments: {
              TEXT_1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("RixxyX is cool, right?"),
              },
              TEXT_2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("RixxyX is cool, right?"),
              },
            },
          },
          {
            opcode: "reverseTxt",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("reverse text [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "XyxxiR",
              },
            },
          },
          {
            opcode: "returnCount",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("counter"),
            arguments: {},
          },
          {
            opcode: "incrementCountByNum",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("increment counter by [NUM]"),
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "decrementCountByNum",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("decrement counter by [NUM]"),
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "setCount",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set counter to [NUM]"),
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "toUppercase",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TEXT] to uppercase"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "rixxyx",
              },
            },
          },
          {
            opcode: "toLowercase",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[TEXT] to lowercase"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "RIXXYX",
              },
            },
          },
          {
            opcode: "toCapitalize",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("capitalize [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("rixxyX is cool, right?"),
              },
            },
          },
          {
            opcode: "isJsNan",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is javascript NaN [OBJ]"),
            arguments: {
              OBJ: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: NaN,
              },
            },
          },
          {
            opcode: "returnNum",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[NUM] as number"),
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "returnBool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[BOOL] as boolean"),
            arguments: {
              BOOL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
              },
            },
          },
          {
            opcode: "binToTxt",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("binary [BIN] to text"),
            arguments: {
              BIN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue:
                  "01010010 01101001 01111000 01111000 01111001 01011000",
              },
            },
          },
          {
            opcode: "txtToBin",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("text [TEXT] to binary"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "RixxyX",
              },
            },
          },
          {
            opcode: "repeatTxtTimes",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("repeat text [TEXT] [NUM] times"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "x",
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
            },
          },
          {
            opcode: "jsonParse",
            blockType: Scratch.BlockType.REPORTER,
            text: "JSON.parse([TEXT])",
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '"RixxyX"',
              },
            },
          },
          {
            opcode: "returnENum",
            blockType: Scratch.BlockType.REPORTER,
            text: "e", // e
            arguments: {},
          },
          {
            opcode: "startTime",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("start measuring time"),
            arguments: {},
          },
          {
            opcode: "endTime",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("end measuring time"),
            arguments: {},
          },
          {
            opcode: "returnTime",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("time"),
            arguments: {},
          },
        ],
      };
    }
    notEquals(args) {
      var isEquals = args.TEXT_1 != args.TEXT_2;
      return isEquals;
    }
    color(args) {
      return args.COLOR;
    }
    returnTrue(args) {
      return true;
    }
    returnFalse(args) {
      return false;
    }
    ifElseString(args) {
      if (args.BOOL) {
        return args.TEXT_1;
      } else {
        return args.TEXT_2;
      }
    }
    ifString(args) {
      if (args.BOOL) {
        return args.TEXT;
      } else {
        return "";
      }
    }
    extractTextBetweenToCharacters(args) {
      var txt = args.TEXT.toString();
      var char1 = args.NUM_1 - 1;
      var char2 = args.NUM_2;
      return txt.slice(char1, char2);
    }
    returnString(args) {
      return args.TEXT.toString();
    }
    isTheSameTypeAs(args) {
      return typeof args.TEXT_1 == typeof args.TEXT_2;
    }
    reverseTxt(args) {
      var emptyStr = "";
      var txt = args.TEXT.toString();
      var localCount = txt.length - 1;
      while (localCount != -1) {
        emptyStr = emptyStr + txt.charAt(localCount);
        localCount -= 1;
      }
      return emptyStr;
    }
    returnCount(args) {
      return count;
    }
    incrementCountByNum(args) {
      if (
        count.toString().indexOf("-") == -1 ||
        args.NUM.toString().indexOf("-") == -1
      ) {
        count += Math.floor(args.NUM);
      } else {
        count = 0;
      }
    }
    decrementCountByNum(args) {
      if ((count - Math.floor(args.NUM)).toString().indexOf("-") == -1) {
        count -= Math.floor(args.NUM);
      } else {
        count = 0;
      }
    }
    setCount(args) {
      if (
        count.toString().indexOf("-") == -1 &&
        args.NUM.toString().indexOf("-") == -1
      ) {
        count = Math.floor(args.NUM);
      } else {
        count = 0;
      }
    }
    toUppercase(args) {
      return Scratch.Cast.toString(args.TEXT).toUpperCase();
    }
    toLowercase(args) {
      return Scratch.Cast.toString(args.TEXT).toLowerCase();
    }
    toCapitalize(args) {
      const text = Scratch.Cast.toString(args.TEXT);
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    isJsNan(args) {
      return isNaN(args.OBJ);
    }
    returnNum(args) {
      return Math.floor(args.NUM);
    }
    returnBool(args) {
      // The original version of this block was quite broken. It would return empty string for
      // values other than true/false/1/0, which I think does not make sense at all.
      return Scratch.Cast.toBoolean(args.BOOL);
    }
    binToTxt(args) {
      var binary = args.BIN.toString();
      return binary
        .split(" ")
        .map((x) => (x = String.fromCharCode(parseInt(x, 2))))
        .join("");
    }
    txtToBin(args) {
      var text = args.TEXT.toString();
      return Array.from(text)
        .map((each) => each.charCodeAt(0).toString(2))
        .join(" ");
    }
    repeatTxtTimes(args) {
      return Scratch.Cast.toString(args.TEXT).repeat(Math.floor(args.NUM));
    }
    jsonParse(args) {
      try {
        const parsed = JSON.parse(args.TEXT);
        if (
          typeof parsed === "string" ||
          typeof parsed === "number" ||
          typeof parsed === "boolean"
        ) {
          return parsed;
        }
        return Scratch.Cast.toString(parsed);
      } catch (e) {
        console.error(e);
        return Scratch.Cast.toString((e && e.message) || e);
      }
    }
    returnENum(args) {
      return Math.E;
    }
    startTime(args) {
      time = 0;
      isMeasure = true;
    }
    endTime(args) {
      isMeasure = false;
    }
    returnTime(args) {
      if (isMeasure == true) {
        time += 1;
      }
      return time;
    }
  }
  Scratch.extensions.register(new RixxyX());
})();
