(function  ($) {
    
    var $typeArea = $("#typeArea");
    var word = '';
    var sentence = '';

    /*strings
        string from http://sahityasangraha.com/%E0%A4%A6%E0%A5%8B%E0%A4%B7%E0%A5%80-%E0%A4%9A%E0%A4%B6%E0%A5%8D%E0%A4%AE%E0%A4%BE/
    */

    
    var str = "केशवराजको चश्मा दोषी थियो । अलिक टाढाको मानिस तिनी चिन्न सक्तैनथे । किताब पढ्दा तिनको आँखालाई निकै बल पर्थ्यो । चश्माको पावर तिनका आँखाका लागि कम भएछ । धेरै दिनदेखि अर्को चश्मा लिनें विचारमा थिए, तर अझै अनुकूल परेको थिएन ।";

    var arrString = str.split(" ");
    var lenString = arrString.length;

    var count = 0;

    var countLetter = 0;
    var isLetterCorrect = false;

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

      if (code < 20 && code != 8) return;
      switch(code) {
            case 8:
            case 46:
                console.log("backspace");
                if (isLetterCorrect && countLetter > 0) {
                    countLetter = countLetter-1;
                    console.log("backspace",countLetter);
                    highlightSingleKey();
                };
                word = word.substring(0, word.length - 1);
                $( ".word" ).text(word);
                validateQuick();
                break;
            case 32:
                console.log("space has been pressed 1");
                validateWord();
                break;
            case 219:
                character = '['
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            case 221:
                character = ']'
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            case 186:
                character = ';'
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            case 222:
                character = '\''
                if (event.shiftKey) {
                    newChar = '\"';
                } else {
                    newChar = character
                }
                word += newChar;
                break;
            case 220:
                character = '\\'
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            case 188:
                character = ','
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            case 190:
                character = '.'
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            case 191:
                character = '/'
                newChar = blablaCharachet(character,event.shiftKey);
                word += newChar;
                break;
            default:
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
        isLetterCorrect = false;
    } else {
        $('.writeArea').removeClass("alert");
        if(isLetterCorrect){
            countLetter++;
        }
        countLetter = len;
        isLetterCorrect = true;
        highlightSingleKey ();
    }
}


function validateWord () {
    console.log("space has been pressed");
    if (word === arrString[count]) {
        countLetter = 0;
        sentence += word+" ";
        word = '';
        $('.showArea').text(sentence);
        $('.writeArea .word').text('');
        count++;
        countLetter = 0;
        highlightKeys();
    };
}

function highlightSingleKey () {
    var letterToHighlight = arrString[count].charAt(countLetter);
    $(".highlightLetter").removeClass("highlightLetter");
    if (letterToHighlight == '') {
        $(".spacebar").addClass("highlightLetter");
        return;
    };

    console.log("letter position",letterToHighlight);
    $(".highlightLetter").removeClass("highlightLetter");
    if(allnp.indexOf(letterToHighlight) > -1){
        cls = allCls[allnp.indexOf(letterToHighlight)];

    } else {
        cls = allCls[allnpShift.indexOf(letterToHighlight)];
        $(".shiftKey").addClass("highlightLetter");
    }

    $("."+cls).addClass("highlightLetter");
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

    highlightSingleKey ();
}


})(jQuery);
