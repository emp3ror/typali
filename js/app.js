(function  ($) {
    

    /*generate keyboard*/

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

    console.log(engData);

    var word = '';

    $("#typeArea").on('keydown',function(event) {
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
        newChar = blablaCharachet(character,event.shiftKey);
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
  });

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


})(jQuery);