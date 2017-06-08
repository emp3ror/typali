angular.module('typali')
.component('keyboard2', {
  templateUrl: 'components/common/keyboard/keyboard.tpl.html',
  controller: keyboardCtrl,
  bindings: {
    keyboard: '<',
    word: '<',
    letter: '<',
    shift : '<'
  }
});


keyboardCtrl.$inject = ['$document','$scope']
function keyboardCtrl($document,$scope) {
	var ctrl = this;

	var keyboard = ctrl.keyboard;

	var cls;

	console.log("letter = ",ctrl.letter);

	// highlightLetter(ctrl.letter)

	var allKeys = [];
    for(var key in keyboard) {
        for (var i = 0; i < keyboard[key].length; i++) {
            allKeys.push(keyboard[key][i])
        };
    }

    this.$onInit = function () {
    	highlightLetter(ctrl.letter);
    }

    var engData_all = allKeys.map(function(item){return item.en;});
    var codeData_all = allKeys.map(function(item){return item.code;});
    var npData_all = allKeys.map(function(item){return item.np;});
    var npShiftData_all = allKeys.map(function(item){return item.npShift;});

	console.log("in components",ctrl.word,ctrl.letter);
	this.$onChanges = function(changes){
		console.log("changed in components",changes.word,changes.letter.currentValue);
		/*if (typeof changes.letter != 'undefined') */highlightLetter(changes.letter.currentValue);
	}


	function highlightLetter(letter) {
		console.log("letter again = ",ctrl.letter);
		$(".highlightLetter").removeClass("highlightLetter");
	 	if (letter == " ") {
	 		cls = "spacebar";
	 		// return;
	 	} else {

	 		if(npData_all.indexOf(letter) > -1){
	 			cls = "c"+codeData_all[npData_all.indexOf(letter)];

	 		} else {
	 			cls = "c"+codeData_all[npShiftData_all.indexOf(letter)];
	 			$(".shiftKey").addClass("highlightLetter");
	 		}
	 	}

	 	console.log("letter again = ",ctrl.letter,cls);
	 	$document.find("."+cls).addClass("highlightLetter");
	 } 

	  // highlightLetter(ctrl.letter)
}