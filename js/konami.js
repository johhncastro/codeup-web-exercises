'use strict';

function konamiCode(fn) {
    var input = "";
    var cheatCode = "3838404037393739666513";
    $(document).keydown(function(e) { //this functions is stating that if input is correct to run but if not reset to empty string
        input += e.keyCode;
        if (input.indexOf(cheatCode) !== -1) {
            fn();
            input = "";
        }
    });
}
$(document).ready(function() {
    konamiCode(function() {
        $('#sleep').css('display','none');
    });
});