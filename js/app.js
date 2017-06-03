(function  ($) {
    $( "#typeArea" ).keypress(function() {
      console.log( "Handler for .keypress() called." );
  });

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

})(jQuery);