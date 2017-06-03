(function  ($) {
    
    var $typeArea = $("#typeArea");
    var word = '';
    var sentence = '';

    /*strings*/

    var str = "\"हुँदैन बिहान मिर्मिरेमा तारा झारेर नगए, बन्दैन मुलुक दुइ-चार सपुत मरेर नगए\" — भुपी शेरचन";

    var arrString = str.split(" ");
    var lenString = arrString.length;

    var count = 0;

    $(".text").text(str);

    /*generate keyboard*/
    var qwertyKey = [];

    for (var i = 0; i < keyboard.qwerty.length; i++) {
        qwertyKey.push(keyboard.qwerty[i]);
        // console.log(keyboard.qwerty[i].en.charCodeAt(0));
        qwertyKey[i].cls = "cls"+keyboard.qwerty[i].en.charCodeAt(0)
    };

    keyboard.qwerty = qwertyKey;

    var asdfgKey = [];

    for (var i = 0; i < keyboard.asdfg.length; i++) {
        asdfgKey.push(keyboard.asdfg[i]);
        asdfgKey[i].cls = "cls"+keyboard.asdfg[i].en.charCodeAt(0)
    };

    keyboard.asdfg = asdfgKey;

    var zxcvbKey = [];

    for (var i = 0; i < keyboard.zxcvb.length; i++) {
        zxcvbKey.push(keyboard.zxcvb[i]);
        zxcvbKey[i].cls = "cls"+keyboard.zxcvb[i].en.charCodeAt(0)
    };

    keyboard.zxcvb = zxcvbKey;

    var source   = $("#keyboardmap-template").html();
    var template = Handlebars.compile(source);

    

    var context = {data : keyboard.qwerty }
    var html    = template(context);

    // console.log(html);
    $("#qwerty > span").html(html);

    var context = {data : keyboard.asdfg }
    var html    = template(context);

    $("#asdfg > span").html(html);

    var context = {data : keyboard.zxcvb }
    var html    = template(context);

    $("#zxcvb > span").html(html);
    /*generate keyboard ends*/

    /*get all keys identity*/
    var allKeys = [];
    for(var key in keyboard) {
        for (var i = 0; i < keyboard[key].length; i++) {
            allKeys.push(keyboard[key][i])
        };
        // keyboard[key]);
    }

    console.log(allKeys);

    var engData = allKeys.map(function(item){return item.en;});
    var allCls = allKeys.map(function(item){return item.cls;});
    var allnp = allKeys.map(function(item){return item.np;});
    var allnpShift = allKeys.map(function(item){return item.npShift;});

    // console.log(engData);

    highlightKeys(); //highlight keys of key board

    $typeArea.on('keydown',function(event) {
      console.log( "key pressed = ",$(this).val() );
      var character = $(this).val();
      var  code = event.which || event.charCode;
      console.log(code,character,event.shiftKey);
      var newChar = '';

      var shift = false;
      if (code == 16) {
        shift = true;
        console.log("data = ",String.fromCharCode(code));
      } else {
        console.log("data = ",String.fromCharCode(code).toLowerCase());
      }

      if( code == 8 || code == 46 ) {
        console.log("backspace");
        // if (word.length) {};
        word = word.substring(0, word.length - 1);
        $( ".word" ).text(word);

    } else if (code==32) {
        validateWord();
    } else if (code < 20) {

    } else if (code == 219) {
        character = '['
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 221) {
        character = ']'
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 186) {
        character = ';'
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 222) {
        character = '\''
        if (event.shiftKey) {
            newChar = '\"';
        } else {
            newChar = character
        }
        // newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 220) {
        character = '\\'
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 188) {
        character = ','
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 190) {
        character = '.'
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } else if (code == 191) {
        character = '/'
        newChar = blablaCharachet(character,event.shiftKey);
        word += newChar;
    } 



    else {
        character = String.fromCharCode(code).toLowerCase();
        newChar = blablaCharachet(character,event.shiftKey);
        
        word += newChar;

        console.log(newChar);
        
    }

    $("#typeArea").val('');
    $( ".word" ).text(word);
    validateQuick();
  });


$typeArea.focus();

$typeArea.focus(
    function(){
        $(this).parent('div').addClass('active');
    }).blur(
    function(){
        $(this).parent('div').removeClass('active');
    });

$('.writeArea').on('click',function  () {
    $typeArea.focus();
})

function blablaCharachet (character,shift) {
    var hereChar = "";
    if (engData.indexOf(character) > -1 ) {
        if (shift) {
            hereChar = allKeys[engData.indexOf(character)].npShift;    
        } else {
            hereChar = allKeys[engData.indexOf(character)].np;
        }
    } else if (engData.indexOf(character.toLowerCase()) > -1) {

    } else {
        hereChar = character;
    }

    return hereChar;
}

function validateQuick () {
    var len = word.length;
    var compareStr = arrString[count].substring(0, len);
    
    console.log(word,compareStr);

    if (word != compareStr) {
        $('.writeArea').addClass("alert");
    } else {
        $('.writeArea').removeClass("alert");
    }
}


function validateWord () {

    if (word === arrString[count]) {
        
        sentence += word+" ";
        word = '';
        $('.showArea').text(sentence);
        count++;
        highlightKeys();
    };
}


function highlightKeys () {
    $(".highlight").removeClass("highlight");
    console.log(arrString[count]);
    var arrLetters = arrString[count].split("");
    console.log(allCls);
    var cls = ""
    for (var i = 0; i < arrLetters.length; i++) {
        
        if(allnp.indexOf(arrLetters[i]) > -1){
            cls = allCls[allnp.indexOf(arrLetters[i])];
            console.log(cls)
        } else {
            cls = allCls[allnpShift.indexOf(arrLetters[i])];
        }

        console.log("cls",cls);
        $("."+cls).addClass("highlight");
    };
}


})(jQuery);