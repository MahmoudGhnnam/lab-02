'use strict';
var score = 0;
var userName = prompt('What\'s your name?');
console.log('welcome ' + userName + ' to my site');
alert('welcome ' + userName + ' to my site');

var userAnswre = prompt('is my name khaled? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre.toLocaleLowerCase())

switch (userAnswre.toLocaleLowerCase()) {
	case 'yes':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('No! it\'s wrong');
		break;

	case 'no':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('it\'s correct');
		score++;
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('do i have a youtube channel? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'no':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('No! it\'s wrong');
		break;

	case 'yes':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('it\'s correct');
		score++;
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('Am I from Syria? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'no':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('No! it\'s wrong');
		break;

	case 'yes':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('it\'s correct');
		score++;
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('Did I graduate from LTUC? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'no':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('No! it\'s wrong');
		break;

	case 'yes':
		console.log('user say\'s' + userAnswre.toLocaleLowerCase());
		alert('it\'s correct');
		score++;
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('my channel on youtube named Mahmoud? [yes/no]');
console.log('user answer ' + userAnswre)

if (userAnswre.toLocaleLowerCase() == 'yes') {
	console.log('user say\'s' + userAnswre.toLocaleLowerCase());
	alert('No! it\'s wrong');
}

else if (userAnswre == 'no') {
	console.log('user say\'s' + userAnswre.toLocaleLowerCase());
	alert('it\'s correct');
	score++;
}

else {
	alert('you should answre with yes or no')
}

var userAnswre = prompt('Have i worked before? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre.toLocaleLowerCase())

if (userAnswre.toLocaleLowerCase() === 'no') {
	console.log('user say\'s' + userAnswre);
	alert('No! it\'s wrong');
}

else if (userAnswre === 'yes') {
	console.log('user say\'s' + userAnswre.toLocaleLowerCase());
	alert('it\'s correct');
	score++;
}

else {
	alert('you should answre with yes or no')
}



var numper = 6;
var bool = false;

for (var h = 0; h < 4; h++) {
  var usernum = (prompt('guess the number in my mind From 1-10'));


  if (usernum === numper) {
    alert('Correct answer');
    score++;
    bool = true;
  }
  else if (usernum > numper) {
    alert('too high');
  }
  else if (usernum < numper) {
    alert('too low')
  }
  else ('Bad input');


}
if (!bool) {
  alert('the correct number ' + numper);
}


var movie = ['your name', 'Spirited Away', 'Howl\'s moving castle', 'Inception', 'Wolf children'];
var m = 0;
var yes=false;

while (m < 6) {
  var userSay = prompt('What the best movie for me from top 10 movie').toUpperCase();


  for (var i = 0; i < movie.length; i++) {
    if (userSay === movie[i].toLocaleUpperCase()) {
      alert('Thats true');
      score++;
      yes = true;
      break;

    }
  }
  if (yes) {
    break;
  }
  m++;
}

alert("your score is" + score + "/7");








