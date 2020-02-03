'use strict';

angular.module('typali')

	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('app.practice', {
				url: '/practice',
				views: {
					'container@': {
						templateUrl: 'views/practice/practice.tpl.html',
						controller: 'practiceCtrl',
						controllerAs: "vm"
					}
				}
			})
			.state('app.practice.param', {
				url: '/:param',
				views: {
					'container@': {
						templateUrl: 'views/practice/practice.tpl.html',
						controller: 'practiceCtrl',
						controllerAs: "vm"
					}
				}
			});

	}])

	.controller('practiceCtrl', PracticeCtrl);

PracticeCtrl.$inject = ['$rootScope', '$scope', '$stateParams', '$document', "keyboardlayout", '$interval', 'datafetchService'];
function PracticeCtrl($rootScope, $scope, $stateParams, $document, keyboardlayout, $interval, datafetchService) {
	var vm = this;

	var param = $stateParams.param;

	/*param*/

	if (typeof param == 'undefined' || param == '') {
		param = Math.floor((Math.random() * 10));
	}

	// console.log("param = ", param);

	vm.isloading = true;

	var isFirstLetter = true;

	var arrString,
		lenString,
		count = 0,
		countLetter = 0,
		grossCount = 0,
		isLetterCorrect = false;

	var initTime = 0;

	vm.time = 0;
	var timeRunner;

	var word = '';
	var sentence = '';


	var typedisable = false;

	vm.sentence = "";

	vm.word = "Type here";

	vm.alert = false;

	var str = "सानो छ खेत";
	var textAll = {};


	/*promise to get string*/
	var promise = datafetchService.getString(param);
	promise.then(function (response) {

		var contents = response.data;
		// console.log(contents);
		textAll = contents.data;
		str = contents.data.text;
		// str = str;
		afterStringIsArrived();
		messagebox();
	})
		.catch(function (error) {
			console.log(error);
		})


	/* keyboard settlement*/
	var allKeys,
		engData_all,
		codeData_all,
		npData_all,
		npShiftData_all;

	var keyboard = (typeof $rootScope.lang!=='undefined') ? keyboardlayout[$rootScope.lang] : keyboardlayout.unicode ;
	console.log(keyboard);

	function keyboard__() {
		vm.keyboard = keyboard;

		allKeys = []
		for (var key in keyboard) {
			for (var i = 0; i < keyboard[key].length; i++) {
				allKeys.push(keyboard[key][i])
			};
		}

		engData_all = allKeys.map(function (item) { return item.en; });
		codeData_all = allKeys.map(function (item) { return item.code; });
		npData_all = allKeys.map(function (item) { return item.np; });
		npShiftData_all = allKeys.map(function (item) { return item.npShift; });
	}

	keyboard__();

	$rootScope.$on("lang",function(event,data){
		// console.log("yo");
		keyboard = keyboardlayout[$rootScope.lang];
		keyboard__();
		// afterStringIsArrived();
	})

	/* key board settlement ends*/

	function afterStringIsArrived() {


		arrString = str.split(" ");
		lenString = arrString.length;

		count = 0;

		countLetter = 0;

		grossCount = 0;

		isLetterCorrect = false;

		vm.highlight = arrString[count];
		vm.highlightSingle = "";

		vm.text = arrString;

		setTimeout(function () {
			highlightWord();
		}, 1000);

		vm.isloading = false;

	}





	$('.writeArea').on('click', function () {
		$document.find(".writeArea input").focus();
	})

	$document.find(".writeArea input").on('keydown', function (event) {
		console.log("keypress");
		if (typedisable) {
			return;
		}

		if (isFirstLetter) {
			isFirstLetter = false;
			initialiseTime();
		}

		var code = event.which || event.charCode;
		// console.log(code,character,event.shiftKey);
		var newChar = '';

		var shift = event.shiftKey;

		if (code == 8 || code == 46) {
			console.log("backspace");
			if (isLetterCorrect && countLetter > 0) {
				countLetter = countLetter - 1;
				console.log("backspace", countLetter);
				// highlightSingleKey();
			};
			word = word.substring(0, word.length - 1);
			vm.word = word;
			$scope.$apply();
			validateQuick();

		} else if (code == 32) {
			console.log("space has been pressed 1");
			validateWord();
		} else {
			code += "";
			var character = '';
			console.log("code = ", code, codeData_all.indexOf(code));
			if (codeData_all.indexOf(code) > -1) {
				if (shift) {
					character = allKeys[codeData_all.indexOf(code)].npShift;
				} else {
					character = allKeys[codeData_all.indexOf(code)].np;
				}

				console.log(character);

				word = word + character;

				vm.inputChar = ''
				vm.word = word;

				$scope.$apply();
				// $scope.$digest()
				validateQuick();
			}


		}


	})


	function validateQuick() {
		var len = word.length;
		var compareStr = arrString[count].substring(0, len);

		console.log(word, compareStr);

		if (word != compareStr) {
			vm.alert = true;
		} else {
			vm.alert = false;
			if (isLetterCorrect) {
				countLetter++;
			}
			countLetter = len;
			isLetterCorrect = true;
			highlightSingleKey();
			// 
		}
		$scope.$apply();
	}


	function validateWord() {
		console.log("space has been pressed");
		if (word === arrString[count]) {
			countLetter = 0;
			sentence += word + " ";
			word = '';
			vm.sentence = sentence;
			vm.word = word;
			count++;

			grossCount = grossCount + countLetter + 1;

			countLetter = 0;
			$scope.$apply();
			if (count >= vm.text.length) {
				typedisable = true;
				timeRunner
				$interval.cancel(timeRunner);
				stop = undefined;
				vm.msgbox = true;
				console.log("string complete", vm.msgbox);
				$scope.$apply();
			} else {
				highlightKeys();

				highlightWord();
			}

			calulateWPM();
		};
	}


	function highlightKeys() {
		vm.highlight = arrString[count];
		highlightSingleKey();
	}

	function highlightSingleKey() {

		var letterToHighlight = arrString[count].charAt(countLetter);

		if (letterToHighlight == '') {
			vm.highlightSingle = ' '
			return;
		};

		vm.highlightSingle = letterToHighlight;
	}

	vm.highlightSingleFn = function () {
		if (typedisable) return;
		highlightSingleKey();
	}

	function highlightWord() {
		var countWordHere = count + 1;
		$document.find(".text span").removeClass("highlightWord");
		$document.find(".text > span:nth-child(" + countWordHere + ")").addClass("highlightWord");
	}





	function initialiseTime() {
		var d = new Date();
		initTime = d.getTime();



		timeRunner = $interval(function () {
			vm.time += 1;
		}, 1000);

	}

	function calulateWPM() {
		var d = new Date();
		var hereTime = d.getTime();

		var timeTaken = hereTime - initTime;
		vm.timeTaken = timeTaken;
		var wpm = 1000 * 60 * (grossCount / 6) / timeTaken;
		vm.speed = Math.round(wpm);
	}

	function messagebox() {
		vm.art = {
			title: textAll.title,
			author: textAll.author
		}

		console.log("textAll", textAll);

	}


};