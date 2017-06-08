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

PractiseCtrl.$inject = ['$stateParams','$document',"keyboardlayout"];
function PractiseCtrl ($stateParams,$document,keyboardlayout) {
	var vm = this;

	var param = $stateParams.param;


	var word = '';
    var sentence = '';

    /*strings
        string from http://sahityasangraha.com/%E0%A4%A6%E0%A5%8B%E0%A4%B7%E0%A5%80-%E0%A4%9A%E0%A4%B6%E0%A5%8D%E0%A4%AE%E0%A4%BE/
    */
    vm.keyboard = keyboardlayout.unicode;
    
    var str = "केशवराजको चश्मा दोषी थियो । अलिक टाढाको मानिस तिनी चिन्न सक्तैनथे । किताब पढ्दा तिनको आँखालाई निकै बल पर्थ्यो । चश्माको पावर तिनका आँखाका लागि कम भएछ । धेरै दिनदेखि अर्को चश्मा लिनें विचारमा थिए, तर अझै अनुकूल परेको थिएन ।";

    var arrString = str.split(" ");
    var lenString = arrString.length;

    var count = 0;

    var countLetter = 0;
    var isLetterCorrect = false;

    vm.text = str;



	$document.on('keydown',function (event) {
		console.log(event.which);
		console.log( "key pressed = ",$(this).val() );
      // var character = $(this).val();
      var  code = event.which || event.charCode;
      // console.log(code,character,event.shiftKey);
      var newChar = '';

      var shift = false;

      if( code == 8 || code == 46 ) {
      	console.log("backspace");
      	if (isLetterCorrect && countLetter > 0) {
      		countLetter = countLetter-1;
      		console.log("backspace",countLetter);
      		highlightSingleKey();
      	};
      	word = word.substring(0, word.length - 1);
      	$( ".word" ).text(word);
      	validateQuick();

      } else if (code==32) {
      	console.log("space has been pressed 1");
      	validateWord();
      } else if (code < 20) {
      	if (!event.shiftKey) {return};

      } else {

      	switch (code) {
      	case  219 :
      		character = '['
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	case 221:
      		character = ']'
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	case 186:
      		character = ';'
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	case 222:
      		character = '\''
      		if (event.shiftKey) {
      			newChar = '\"';
      		} else {
      			newChar = character
      		}

      		word += newChar;
      		break;
      	case 220:
      		character = '\\'
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	case 188:
      		character = ','
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	case 190:
      		character = '.'
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	case 191:
      		character = '/'
      		newChar = blablaCharachet(character,event.shiftKey);
      		word += newChar;
      		break;
      	default:
      		character = String.fromCharCode(code).toLowerCase();
      		newChar = blablaCharachet(character,event.shiftKey);

      		word += newChar;

      		console.log(newChar);
      		break;

      }



      	vm.inputChar = ''
      	vm.word = word;
      	validateQuick();
      }


	})

};