'use strict';

angular.module('typali')

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('app.practise', {
		url:'/practise',
		views : {
			'container@': {
				templateUrl: 'views/practise/practise.tpl.html',
				controller: 'practiseCtrl',
				controllerAs : "vm"
			}
		}
	})
	.state('app.practise.param', {
		url:'/:param',
		views : {
			'container@': {
				templateUrl: 'views/practise/practise.tpl.html',
				controller: 'practiseCtrl',
				controllerAs : "vm"
			}
		}
	});
  
}])

.controller('practiseCtrl', PractiseCtrl);

PractiseCtrl.$inject = ['$scope','$stateParams','$document',"keyboardlayout"];
function PractiseCtrl ($scope,$stateParams,$document,keyboardlayout) {
	var vm = this;

	var param = $stateParams.param;


	var word = '';
    var sentence = '';
    var keyboard = keyboardlayout.unicode;

    var typedisable = false;

    vm.sentence  = "";

    vm.word = "Type here";

    vm.alert = false;

    /*strings
        string from http://sahityasangraha.com/%E0%A4%A6%E0%A5%8B%E0%A4%B7%E0%A5%80-%E0%A4%9A%E0%A4%B6%E0%A5%8D%E0%A4%AE%E0%A4%BE/
    */
    vm.keyboard = keyboard;
    
    var str = "सानो छ खेत";

    var arrString = str.split(" ");
    var lenString = arrString.length;

    var count = 0;

    var countLetter = 0;
    var isLetterCorrect = false;

    vm.highlight = arrString[count];
    vm.highlightSingle = "";

    vm.text = arrString;

    var allKeys = [];
    for(var key in keyboard) {
        for (var i = 0; i < keyboard[key].length; i++) {
            allKeys.push(keyboard[key][i])
        };
    }

    var engData_all = allKeys.map(function(item){return item.en;});
    var codeData_all = allKeys.map(function(item){return item.code;});
    var npData_all = allKeys.map(function(item){return item.np;});
    var npShiftData_all = allKeys.map(function(item){return item.npShift;});

    $('.writeArea').on('click',function  () {
    	$document.find(".writeArea input").focus();
    })

	$document.find(".writeArea input").on('keydown',function (event) {
		
		if (typedisable) {
			return;
		}
		// console.log( "key pressed = ",$(this).val() );
      // var character = $(this).val();
      var  code = event.which || event.charCode;
      // console.log(code,character,event.shiftKey);
      var newChar = '';

      var shift = event.shiftKey;

      if( code == 8 || code == 46 ) {
      	console.log("backspace");
      	if (isLetterCorrect && countLetter > 0) {
      		countLetter = countLetter-1;
      		console.log("backspace",countLetter);
      		// highlightSingleKey();
      	};
      	word = word.substring(0, word.length - 1);
      	vm.word = word;
      	$scope.$apply();
      	validateQuick();

      } else if (code==32) {
      	console.log("space has been pressed 1");
      	validateWord();
      } else {
      	code +="";
      	var character = '';
      	console.log("code = ",code,codeData_all.indexOf(code));
      	if (codeData_all.indexOf(code) > -1) {
      		if (shift) {
      			character = allKeys[codeData_all.indexOf(code)].npShift;    
      		} else {
      			character = allKeys[codeData_all.indexOf(code)].np;
      		}

      		console.log(character);

      		word = word+character;

      		vm.inputChar = ''
      		vm.word = word;
      		
      		$scope.$apply();
      		// $scope.$digest()
      		validateQuick();
      	}

      	
      }


	})


	function validateQuick () {
		var len = word.length;
		var compareStr = arrString[count].substring(0, len);

		console.log(word,compareStr);

		if (word != compareStr) {
			vm.alert = true;
		} else {
			vm.alert = false;
			if(isLetterCorrect){
				countLetter++;
			}
			countLetter = len;
			isLetterCorrect = true;
			highlightSingleKey ();
			// 
		}
		$scope.$apply();
	}


	function validateWord () {
		console.log("space has been pressed");
		if (word === arrString[count]) {
			countLetter = 0;
			sentence += word+" ";
			word = '';
			vm.sentence = sentence;
			vm.word = word;
			count++;
			countLetter = 0;
			$scope.$apply();
			if (count>=vm.text.length) {
				typedisable = true;
			} else {
				highlightKeys();
				
				highlightWord();
			}
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
	var countWordHere = count+1;
	$document.find(".text span").removeClass("highlightWord");
	$document.find(".text > span:nth-child("+countWordHere+")").addClass("highlightWord");
}

setTimeout(function () {
	highlightWord();	
},1000);


};