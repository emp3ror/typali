angular.module('typali')
	.component('keyboard2', {
		templateUrl: 'components/common/keyboard/keyboard.tpl.html',
		controller: keyboardCtrl,
		bindings: {
			keyboard: '<',
			word: '<',
			letter: '<',
			shift: '<'
		}
	});


keyboardCtrl.$inject = ['$document', '$scope']
function keyboardCtrl($document, $scope) {
	var ctrl = this;

	var keyboard = ctrl.keyboard;

	var cls;

	console.log("letter = ", ctrl.letter);

	// highlightLetter(ctrl.letter)

	var allKeys = [],
		engData_all,
		codeData_all,
		npData_all,
		npShiftData_all;

	// function makeKeyboard() {
		for (var key in keyboard) {
			for (var i = 0; i < keyboard[key].length; i++) {
				allKeys.push(keyboard[key][i])
			};
		}




		engData_all = allKeys.map(function (item) { return item.en; });
		codeData_all = allKeys.map(function (item) { return item.code; });
		npData_all = allKeys.map(function (item) { return item.np; });
		npShiftData_all = allKeys.map(function (item) { return item.npShift; });
	// }

	this.$onInit = function () {
		console.log("changing");
		// makeKeyboard();
		highlightLetter(ctrl.letter);
	}

	console.log("in components", ctrl.word, ctrl.letter);
	this.$onChanges = function (changes) {
		// console.log("changed in components",changes.word,changes.letter.currentValue);
		console.log("changes", changes);
		if (typeof changes.letter != 'undefined') {
			highlightLetter(changes.letter.currentValue);
		} /* else {
			console.log("here");
			// makeKeyboard();
			highlightLetter(changes.letter);
		} */
	}


	function highlightLetter(letter) {
		console.log("letter again = ", ctrl.letter);
		$(".highlightLetter").removeClass("highlightLetter");
		if (letter == " ") {
			cls = "spacebar";
			// return;
		} else {

			if (npData_all.indexOf(letter) > -1) {
				cls = "c" + codeData_all[npData_all.indexOf(letter)];
				console.log(npData_all,npData_all.indexOf(letter));

			} else {
				cls = "c" + codeData_all[npShiftData_all.indexOf(letter)];
				$(".shiftKey").addClass("highlightLetter");
			}
		}

		console.log("letter again = ", ctrl.letter, cls);
		$document.find("." + cls).addClass("highlightLetter");
	}

	// highlightLetter(ctrl.letter)
}