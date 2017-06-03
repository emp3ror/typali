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

    } else {
        character = String.fromCharCode(code).toLowerCase();
        if (engData.indexOf(character) > -1 ) {
            if (event.shiftKey) {
                newChar = allKeys[engData.indexOf(character)].npShift;    
            } else {
                newChar = allKeys[engData.indexOf(character)].np;
            }
        } else if (engData.indexOf(character.toLowerCase()) > -1) {
            
        } else {
            newChar = character;
        }
        
        word += newChar;

        console.log(newChar);
        
    }

    $("#typeArea").val('');
    $( ".word" ).text(word);
  });


})(jQuery);