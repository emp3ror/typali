'use strict';
angular.module('typali')
  .factory('keyboardlayout', function ($rootScope) {

    /*can add different keybord*/

    /*unicode default keyboard*/
    var keyboard = {};
    keyboard.unicode = {
      "qwerty": [
        {
          "code": "81",
          "en": "q",
          "npShift": "ठ",
          "np": "ट"
        },
        {
          "code": "87",
          "en": "w",
          "npShift": "औ",
          "np": "ौ"
        },
        {
          "code": "69",
          "en": "e",
          "npShift": "ै",
          "np": "े"
        },
        {
          "code": "82",
          "en": "r",
          "npShift": "ृ",
          "np": "र"
        },
        {
          "code": "84",
          "en": "t",
          "npShift": "थ",
          "np": "त"
        },
        {
          "code": "89",
          "en": "y",
          "npShift": "ञ",
          "np": "य"
        },
        {
          "code": "85",
          "en": "u",
          "npShift": "ू",
          "np": "ु"
        },
        {
          "code": "73",
          "en": "i",
          "npShift": "ी",
          "np": "ि"
        },
        {
          "code": "79",
          "en": "o",
          "npShift": "ओ",
          "np": "ो"
        },
        {
          "code": "80",
          "en": "p",
          "npShift": "फ",
          "np": "प"
        },
        {
          "code": "219",
          "en": "[",
          "npShift": "ई",
          "np": "इ"
        },
        {
          "code": "221",
          "en": "]",
          "npShift": "ऐ",
          "np": "ए"
        },
        {
          "code": "220",
          "en": "\\",
          "npShift": "ः",
          "np": "ॐ"
        }
      ],
      "asdfg": [
        {
          "code": "65",
          "en": "a",
          "npShift": "आ",
          "np": "ा"
        },
        {
          "code": "83",
          "en": "s",
          "npShift": "श",
          "np": "स"
        },
        {
          "code": "68",
          "en": "d",
          "npShift": "ध",
          "np": "द"
        },
        {
          "code": "70",
          "en": "f",
          "npShift": "ऊ",
          "np": "उ"
        },
        {
          "code": "71",
          "en": "g",
          "npShift": "घ",
          "np": "ग"
        },
        {
          "code": "72",
          "en": "h",
          "npShift": "अ",
          "np": "ह"
        },
        {
          "code": "74",
          "en": "j",
          "npShift": "झ",
          "np": "ज"
        },
        {
          "code": "75",
          "en": "k",
          "npShift": "ख",
          "np": "क"
        },
        {
          "code": "76",
          "en": "l",
          "npShift": "॥",
          "np": "ल"
        },
        {
          "code": "186",
          "en": "l",
          "npShift": "\:",
          "np": "\;"
        },
        {
          "code": "222",
          "en": "l",
          "npShift": "\"",
          "np": "\'"
        }
      ],
      "zxcvb": [

        {
          "code": "90",
          "en": "z",
          "npShift": "ऋ",
          "np": "ष"
        },
        {
          "code": "88",
          "en": "x",
          "npShift": "ढ",
          "np": "ड"
        },
        {
          "code": "67",
          "en": "c",
          "npShift": "च",
          "np": "छ"
        },
        {
          "code": "86",
          "en": "v",
          "npShift": "ँ",
          "np": "व"
        },
        {
          "code": "66",
          "en": "b",
          "npShift": "भ",
          "np": "ब"
        },
        {
          "code": "78",
          "en": "n",
          "npShift": "ण",
          "np": "न"
        },
        {
          "code": "77",
          "en": "m",
          "npShift": "ं",
          "np": "म"
        },
        {
          "code": "188",
          "en": ",",
          "npShift": "ङ",
          "np": ","
        },
        {
          "code": "190",
          "en": ".",
          "npShift": ">",
          "np": "।"
        },
        {
          "code": "191",
          "en": "/",
          "npShift": "?",
          "np": "्"
        }
      ],
      "1234": [
        {
          "code": "192",
          "en": "\`",
          "enShift": "\~",
          "npShift": "\~",
          "np": "\`"
        }, {
          "code": "49",
          "en": "1",
          "npShift": "!",
          "np": "१"
        }, {
          "code": "50",
          "en": "2",
          "npShift": "@",
          "np": "२"
        }, {
          "code": "51",
          "en": "3",
          "npShift": "#",
          "np": "३"
        }, {
          "code": "52",
          "en": "4",
          "npShift": "रु",
          "np": "४"
        }, {
          "code": "53",
          "en": "5",
          "npShift": "%",
          "np": "५"
        }, {
          "code": "54",
          "en": "6",
          "npShift": "^",
          "np": "६"
        }, {
          "code": "55",
          "en": "7",
          "npShift": "&",
          "np": "७"
        }, {
          "code": "56",
          "en": "8",
          "npShift": "*",
          "np": "८"
        }, {
          "code": "59",
          "en": "9",
          "npShift": "(",
          "np": "९"
        }, {
          "code": "48",
          "en": "0",
          "npShift": ")",
          "np": "०"
        }, {
          "code": "189",
          "en": "-",
          "npShift": "_",
          "np": "-"
        }, {
          "code": "187",
          "en": "=",
          "npShift": "+‍‌‍‍‍‍",
          "np": "="
        }
      ]


    }

    keyboard.unicodeTraditional = {
      "qwerty": [
        {
          "code": "81",
          "en": "q",
          "npShift": "त्त",
          "np": "त्र"
        },
        {
          "code": "87",
          "en": "w",
          "npShift": "ड्ढ",
          "np": "ध"
        },
        {
          "code": "69",
          "en": "e",
          "npShift": "ऐ",
          "np": "भ"
        },
        {
          "code": "82",
          "en": "r",
          "npShift": "द्ब",
          "np": "च"
        },
        {
          "code": "84",
          "en": "t",
          "npShift": "ट्ट",
          "np": "त"
        },
        {
          "code": "89",
          "en": "y",
          "npShift": "ठ्ठ",
          "np": "थ"
        },
        {
          "code": "85",
          "en": "u",
          "npShift": "ऊ",
          "np": "ग"
        },
        {
          "code": "73",
          "en": "i",
          "npShift": "क्ष",
          "np": "ष"
        },
        {
          "code": "79",
          "en": "o",
          "npShift": "इ",
          "np": "य"
        },
        {
          "code": "80",
          "en": "p",
          "npShift": "ए",
          "np": "उ"
        },
        {
          "code": "219",
          "en": "[",
          "npShift": "ृ",
          "np": "र्"
        },
        {
          "code": "221",
          "en": "]",
          "npShift": "ै",
          "np": "े"
        },
        {
          "code": "220",
          "en": "\\",
          "npShift": "ं",
          "np": "्"
        }
      ],
      "asdfg": [
        {
          "code": "65",
          "en": "a",
          "npShift": "आ",
          "np": "ब"
        },
        {
          "code": "83",
          "en": "s",
          "npShift": "ङ्क",
          "np": "क"
        },
        {
          "code": "68",
          "en": "d",
          "npShift": "ङ्ग",
          "np": "म"
        },
        {
          "code": "70",
          "en": "f",
          "npShift": "ँ",
          "np": "ा"
        },
        {
          "code": "71",
          "en": "g",
          "npShift": "द्द",
          "np": "न"
        },
        {
          "code": "72",
          "en": "h",
          "npShift": "झ",
          "np": "ज"
        },
        {
          "code": "74",
          "en": "j",
          "npShift": "ो",
          "np": "व"
        },
        {
          "code": "75",
          "en": "k",
          "npShift": "फ",
          "np": "प"
        },
        {
          "code": "76",
          "en": "l",
          "npShift": "ी",
          "np": "ि"
        },
        {
          "code": "186",
          "en": ";",
          "npShift": "ट्ठ",
          "np": "स"
        },
        {
          "code": "222",
          "en": "'",
          "npShift": "ू",
          "np": "ु"
        }
      ],
      "zxcvb": [

        {
          "code": "90",
          "en": "z",
          "npShift": "क्क",
          "np": "श"
        },
        {
          "code": "88",
          "en": "x",
          "npShift": "ह्य",
          "np": "ह"
        },
        {
          "code": "67",
          "en": "c",
          "npShift": "ऋ",
          "np": "अ"
        },
        {
          "code": "86",
          "en": "v",
          "npShift": "ॐ",
          "np": "ख"
        },
        {
          "code": "66",
          "en": "b",
          "npShift": "ौ",
          "np": "द"
        },
        {
          "code": "78",
          "en": "n",
          "npShift": "द्य",
          "np": "ल"
        },
        {
          "code": "77",
          "en": "m",
          "npShift": "ड्ड",
          "np": "ः"
        },
        {
          "code": "188",
          "en": ",",
          "npShift": "ङ",
          "np": "ऽ"
        },
        {
          "code": "190",
          "en": ".",
          "npShift": "श्र",
          "np": "।"
        },
        {
          "code": "191",
          "en": "/",
          "npShift": "रु",
          "np": "र"
        }
      ],
      "1234": [
        {
          "code": "192",
          "en": "\`",
          "enShift": "\~",
          "npShift": "\॥",
          "np": "ञ`"
        }, {
          "code": "49",
          "en": "1",
          "enShift": "!",
          "npShift": "ज्ञ",
          "np": "१"
        }, {
          "code": "50",
          "en": "2",
          "enShift": "@",
          "npShift": "ई",
          "np": "२"
        }, {
          "code": "51",
          "en": "3",
          "enShift": "#",
          "npShift": "घ",
          "np": "३"
        }, {
          "code": "52",
          "en": "4",
          "enShift": "$",
          "npShift": "द्ध",
          "np": "४"
        }, {
          "code": "53",
          "en": "5",
          "enShift": "%",
          "npShift": "छ",
          "np": "५"
        }, {
          "code": "54",
          "en": "6",
          "enShift": "^",
          "npShift": "ट",
          "np": "६"
        }, {
          "code": "55",
          "en": "7",
          "enShift": "&",
          "npShift": "ठ",
          "np": "७"
        }, {
          "code": "56",
          "en": "8",
          "enShift": "*",
          "npShift": "ड",
          "np": "८"
        }, {
          "code": "59",
          "en": "9",
          "enShift": "(",
          "npShift": "ढ",
          "np": "९"
        }, {
          "code": "48",
          "en": "0",
          "enShift": ")",
          "npShift": "ण",
          "np": "०"
        }, {
          "code": "189",
          "en": "-",
          "enShift": "_",
          "npShift": "ओ",
          "np": "औ"
        }, {
          "code": "187",
          "en": "=",
          "enShift": "+‍‌‍‍‍‍",
          "npShift": "‌‌‌‌‍‍‍",
          "np": "‌‍‍‍‍‍‍"
        }
      ]


    }
    return keyboard;
  });
