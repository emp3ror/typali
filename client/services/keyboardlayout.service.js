'use strict';
angular.module('typali')
.factory('keyboardlayout', function ($rootScope) {

  /*unicode default keyboard*/
  var keyboard = {};
  keyboard.unicode = {
    "qwerty" : [ 
    {  
      "code" : "81",
      "en":"q",
      "npShift":"ठ",
      "np":"ट"
    },
    {  
      "code" : "87",
      "en":"w",
      "npShift":"औ",
      "np":"ौ"
    },
    {  
      "code" : "69",
      "en":"e",
      "npShift":"ै",
      "np":"े"
    },
    {  
      "code" : "82",
      "en":"r",
      "npShift":"ृ",
      "np":"र"
    },
    {  
      "code" : "84",
      "en":"t",
      "npShift":"थ",
      "np":"त"
    },
    {  
      "code" : "89",
      "en":"y",
      "npShift":"ञ",
      "np":"य"
    },
    {  
      "code" : "85",
      "en":"u",
      "npShift":"ू",
      "np":"ु"
    },
    {  
      "code" : "73",
      "en":"i",
      "npShift":"ी",
      "np":"ि"
    },
    {  
      "code" : "79",
      "en":"o",
      "npShift":"ओ",
      "np":"ो"
    },
    {  
      "code" : "80",
      "en":"p",
      "npShift":"फ",
      "np":"प"
    },
    {  
      "code" : "219",
      "en":"[",
      "npShift":"ई",
      "np":"इ"
    },
    {  
      "code" : "221",
      "en":"]",
      "npShift":"ऐ",
      "np":"ए"
    },
    {  
      "code" : "220",
      "en":"\\",
      "npShift":"ः",
      "np":"ॐ"
    }
    ],
    "asdfg" :[  
    {  
      "code" : "65",
      "en":"a",
      "npShift":"आ",
      "np":"ा"
    },
    {  
      "code" : "83",
      "en":"s",
      "npShift":"श",
      "np":"स"
    },
    {  
      "code" : "68",
      "en":"d",
      "npShift":"ध",
      "np":"द"
    },
    {  
      "code" : "70",
      "en":"f",
      "npShift":"ऊ",
      "np":"उ"
    },
    {  
      "code" : "71",
      "en":"g",
      "npShift":"घ",
      "np":"ग"
    },
    {  
      "code" : "72",
      "en":"h",
      "npShift":"अ",
      "np":"ह"
    },
    {  
      "code" : "74",
      "en":"j",
      "npShift":"झ",
      "np":"ज"
    },
    {  
      "code" : "75",
      "en":"k",
      "npShift":"ख",
      "np":"क"
    },
    {  
      "code" : "76",
      "en":"l",
      "npShift":"॥",
      "np":"ल"
    },
    {  
      "code" : "186",
      "en":"l",
      "npShift":"\:",
      "np":"\;"
    },
    {  
      "code" : "222",
      "en":"l",
      "npShift":"\"",
      "np":"\'"
    }
    ],
    "zxcvb" : [  

    {  
      "code" : "90",
      "en":"z",
      "npShift":"ऋ",
      "np":"ष"
    },
    {  
      "code" : "88",
      "en":"x",
      "npShift":"ढ",
      "np":"ड"
    },
    {  
      "code" : "67",
      "en":"c",
      "npShift":"च",
      "np":"छ"
    },
    {  
      "code" : "86",
      "en":"v",
      "npShift":"ँ",
      "np":"व"
    },
    {  
      "code" : "66",
      "en":"b",
      "npShift":"भ",
      "np":"ब"
    },
    {  
      "code" : "78",
      "en":"n",
      "npShift":"ण",
      "np":"न"
    },
    {  
      "code" : "77",
      "en":"m",
      "npShift":"ं",
      "np":"म"
    },
    {  
      "code" : "188",
      "en":",",
      "npShift":"ङ",
      "np":","
    },
    {  
      "code" : "190",
      "en":".",
      "npShift":">",
      "np":"।"
    },
    {  
      "code" : "191",
      "en":"/",
      "npShift":"?",
      "np":"्"
    }
    ],
    "1234" : [
    {  
      "code" : "192",
      "en":"\`",
      "enShift" : "\~",
      "npShift":"\~",
      "np":"\`"
    },{  
      "code" : "49",
      "en":"1",
      "npShift":"!",
      "np":"१"
    },{  
      "code" : "50",
      "en":"2",
      "npShift":"@",
      "np":"२"
    },{  
      "code" : "51",
      "en":"3",
      "npShift":"#",
      "np":"३"
    },{  
      "code" : "52",
      "en":"4",
      "npShift":"रु",
      "np":"४"
    },{  
      "code" : "53",
      "en":"5",
      "npShift":"%",
      "np":"५"
    },{  
      "code" : "54",
      "en":"6",
      "npShift":"^",
      "np":"६"
    },{  
      "code" : "55",
      "en":"7",
      "npShift":"&",
      "np":"७"
    },{  
      "code" : "56",
      "en":"8",
      "npShift":"*",
      "np":"८"
    },{  
      "code" : "59",
      "en":"9",
      "npShift":"(",
      "np":"९"
    },{  
      "code" : "48",
      "en":"0",
      "npShift":")",
      "np":"०"
    },{  
      "code" : "189",
      "en":"-",
      "npShift":"_",
      "np":"-"
    },{  
      "code" : "187",
      "en":"=",
      "npShift":"+‍‌‍‍‍‍",
      "np":"="
    }
    ]


  }
  return keyboard;
});
