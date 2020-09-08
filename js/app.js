'use strict';

var userName = prompt('What\'s your name?');
console.log('welcome ' + userName + ' to my site');
alert('welcome ' + userName + ' to my site');

var userAnswre = prompt('is my name khaled? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'yes':
		console.log('user say\'s' + userAnswre);
		alert('No! it\'s wrong');
		break;

	case 'no':
		console.log('user say\'s' + userAnswre);
		alert('it\'s correct');
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('do i have a youtube channel? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'no':
		console.log('user say\'s' + userAnswre);
		alert('No! it\'s wrong');
		break;

	case 'yes':
		console.log('user say\'s' + userAnswre);
		alert('it\'s correct');
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('Am I from Syria? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'no':
		console.log('user say\'s' + userAnswre);
		alert('No! it\'s wrong');
		break;

	case 'yes':
		console.log('user say\'s' + userAnswre);
		alert('it\'s correct');
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('Did I graduate from LTUC? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

switch (userAnswre.toLocaleLowerCase()) {
	case 'no':
		console.log('user say\'s' + userAnswre);
		alert('No! it\'s wrong');
		break;

	case 'yes':
		console.log('user say\'s' + userAnswre);
		alert('it\'s correct');
		break;

	default:
		alert('you should answre with yes or no')
		break;
}

var userAnswre = prompt('my channel on youtube named Mahmoud? [yes/no]');
console.log('user answer ' + userAnswre)

if (userAnswre.toLocaleLowerCase() == 'yes') {
	console.log('user say\'s' + userAnswre);
	alert('No! it\'s wrong');
}

else if (userAnswre == 'no') {
	console.log('user say\'s' + userAnswre);
	alert('it\'s correct');
}

else {
	alert('you should answre with yes or no')
}

var userAnswre = prompt('Have i worked before? [yes/no]'.toLocaleLowerCase());
console.log('user answer ' + userAnswre)

if (userAnswre === 'no'.toLocaleLowerCase()) {
	console.log('user say\'s' + userAnswre);
	alert('No! it\'s wrong');
}

else if (userAnswre === 'yes') {
	console.log('user say\'s' + userAnswre);
	alert('it\'s correct');
}

else {
	alert('you should answre with yes or no')
}

alert('this is my quiz to my websit and now you\'r welcome  ' + userName)