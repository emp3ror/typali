(function  ($) {

    function calcAvg () {
        var text = $("#textBox").val();
        textarray = text.split(" ");
        $(".resultsLengthChar").text(text.length);
        $(".resultsTotalWord").text(textarray.length);

        var avg = text.length/textarray.length;
        $(".avgCharaters").text(avg);
    }

    $("#btn-get-output").on('click',function  () {
        calcAvg();
    })

    calcAvg();

})(jQuery);
