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

PractiseCtrl.$inject = ['$scope','$stateParams','$document',"keyboardlayout",'$interval','datafetchService'];
function PractiseCtrl ($scope,$stateParams,$document,keyboardlayout,$interval,datafetchService) {
	var vm = this;

	var param = $stateParams.param;

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
    var keyboard = keyboardlayout.unicode;

    var typedisable = false;

    vm.sentence  = "";

    vm.word = "Type here";

    vm.alert = false;

    var str = "सानो छ खेत";
    var textAll = {};


    /*promise to get string*/
    var promise = datafetchService.getString("10");
    promise.then(function (response) {

    	var contents = response.data;
    	console.log(contents);
    	textAll = contents.data;
    	// str = contents.data.text;
    	str = str;
    	afterStringIsArrived();
    	messagebox();
    })
    .catch(function (error) {
    	console.log(error);
    })


    /* keyboard settlement*/

    vm.keyboard = keyboard;

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
    	},1000);

    	vm.isloading =false;

    }



    

    $('.writeArea').on('click',function  () {
    	$document.find(".writeArea input").focus();
    })

	$document.find(".writeArea input").on('keydown',function (event) {
		console.log("yo here");
		if (typedisable) {
			return;
		}
		
		if (isFirstLetter) {
			isFirstLetter = false;
			initialiseTime();
		}

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

			grossCount = grossCount+countLetter+1;

			countLetter = 0;
			$scope.$apply();
			if (count>=vm.text.length) {
				typedisable = true;
				timeRunner
				$interval.cancel(timeRunner);
				stop = undefined;
				vm.msgbox = true;
				console.log("string complete",vm.msgbox);
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
	var countWordHere = count+1;
	$document.find(".text span").removeClass("highlightWord");
	$document.find(".text > span:nth-child("+countWordHere+")").addClass("highlightWord");
}





function initialiseTime() {
	var d = new Date();
	initTime = d.getTime();



	timeRunner = $interval(function () {
		vm.time +=1;
	},1000);

}

function calulateWPM() {
	var d = new Date();
	var hereTime = d.getTime();

	var timeTaken = hereTime - initTime;
	vm.timeTaken = timeTaken;
	var wpm = 1000*60*(grossCount/6)/timeTaken;
	vm.speed = Math.round(wpm);
}

function messagebox() {
	vm.art = {
		title : textAll.title,
		author : textAll.author
	}

	console.log("textAll",textAll);
	
}


};