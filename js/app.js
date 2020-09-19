'use strict';
var score = 0;
var userName = prompt('What\'s your name?');
alert('welcome ' + userName + ' to my site');

function q1() {
  var userAnswre = prompt('is my name khaled? [yes/no]'.toLocaleLowerCase());
  
  switch (userAnswre.toLocaleLowerCase()) {
    case 'yes' : case 'y' :
      alert('No! it\'s wrong');
      break;
  
    case 'no': case 'n':
      alert('it\'s correct');
      score++;
      break;
  
    default:
      alert('you should answre with yes or no');
      break;
  }
}
q1();

function q2() {
  var userAnswre = prompt('do i have a youtube channel? [yes/no]'.toLocaleLowerCase());
  
  switch (userAnswre.toLocaleLowerCase()) {
    case 'no' : case 'n' :
      alert('No! it\'s wrong');
      break;
  
      case 'yes' : case 'y' :
        alert('it\'s correct');
      score++;
      break;
  
    default:
      alert('you should answre with yes or no')
      break;
  }
}
q2();

function q3(){
  var userAnswre = prompt('Am I from Syria? [yes/no]'.toLocaleLowerCase());
  
  switch (userAnswre.toLocaleLowerCase()) {
    case 'no' : case 'n' :
      alert('No! it\'s wrong');
      break;
  
      case 'yes' : case 'y' :
        alert('it\'s correct');
      score++;
      break;
  
    default:
      alert('you should answre with yes or no');
      break;
  }
}
q3();

function q4() {
  var userAnswre = prompt('Did I graduate from LTUC? [yes/no]'.toLocaleLowerCase());
  
  switch (userAnswre.toLocaleLowerCase()) {
    case 'no' : case 'n' :
      alert('No! it\'s wrong');
      break;
  
      case 'yes' : case 'y' :
        alert('it\'s correct');
      score++;
      break;
  
    default:
      alert('you should answre with yes or no')
      break;
  }
}
q4();

function q5() {
  var userAnswre = prompt('my channel on youtube named Mahmoud? [yes/no]'.toLocaleLowerCase());
  
  if (userAnswre == 'yes' || userAnswre == 'y') {
    alert('No! it\'s wrong');
  }
  
  else if (userAnswre == 'no' || userAnswre == 'n') {
    alert('it\'s correct');
    score++;
  }
  
  else {
    alert('you should answre with yes or no')
  }
  
}
q5();

function q6() {
  var userAnswre = prompt('Have i worked before? [yes/no]'.toLocaleLowerCase());
  
  if (userAnswre == 'no' || userAnswre == 'n') {
    alert('No! it\'s wrong');
  }
  
  else if (userAnswre == 'yes' || userAnswre == 'y') {
    alert('it\'s correct');
    score++;
  }
  
  else {
    alert('you should answre with yes or no')
  }
}
q6();


function q7() {
  var numper = 6;
  var bool = false;
  
  for (var h = 0; h < 4; h++) {
    var usernum = (prompt('guess the number in my mind From 1-10'));
    var user = parseInt(usernum);
  
  
    if (user === numper) {
      alert('Correct answer');
      score++;
      bool = true;
      break;
    }
    else if (user > numper) {
      alert('too high');
    }
    else if (user < numper) {
      alert('too low')
    }
    else ('Bad input');
  
  
  }
  if (!bool) {
    alert('the correct number ' + numper);
  }
}

q7();

function q8() {
  var movie = ['your name', 'Spirited Away', 'Howl\'s moving castle', 'Inception',];
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
  
  alert("your score is" + score + "/8");
}
q8();









