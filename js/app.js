'use strict';
var userName = prompt('What is your name?');
alert('Hello '+ userName + ' Welcome to my website ');
var likeReading = prompt('Do you like reading? please type \'yes\' or \'no\'.' );

if(likeReading.toLowerCase() === 'yes' ){
  alert('cool!!! Reading is a good habit.keep reading');
  console.log(userName + ' likes reading');
}
else{
  alert('awee...');
  console.log(userName + ' doesnt likes reading');
}


var playGitar = prompt('Do you like to play gitar?please type\'yes\' or \'no\'.');
if(playGitar.toLowerCase() === 'yes'){
  alert('intresting');
  console.log(userName + ' likes to play gitar');
}
else{
  alert('You might be intrested in some other instruments');
  console.log(userName + ' likes to read some other intrument');
}

var sandWich = prompt('Do you like sandwich?please type\'yes\' or \'no\'');

if(sandWich.toLowerCase() === 'yes'){
  alert('woww');
  console.log(userName +' likes sandwich');
}
else{
  alert('You might like Burgers');
  console.log(userName + ' might like burgur');
}
var dance = prompt('Do you like to dance? please type \'yes\' or \'no\'.');
if(dance.toLowerCase() === 'yes'){
  alert('great!!!');
  console.log(userName + ' likes to dance');
}
else{
  alert('You might like to sing');
  console.log(userName + ' might like to sing');
}
var softDev = prompt('Are you intrested in software development? please type \'yes\' or \'no\'');
if(softDev.toLowerCase() === 'no'){
  var check = prompt('Are you confused about topics in computer science? please type \'yes\' or \'no\'');
  if(check.toLowerCase () === 'yes'){
    alert('join codeFellows!!!');
  }
}
else{
  alert('Very good!!! keep coding!!!');
  console.log(userName + ' likes coding');
}
alert('You have 4 guesses.');
var myAge = 22;
var guess;
var correct =[];
for(var i=0;i<4;i++){
  console.log(i);
  guess = prompt('Can you guess my age?');
  guess = parseInt(guess);
  if(guess === 22){
    alert('Correct');
    correct.push(1);
    break;}
  else if (guess<=21){
    alert('Your guess is too low,');
  }
  else{
    alert('Your guess is too high');
  }
}
var possibilities =['amazon','google','microsoft','apple'];
var futureJob = 'google';
var trial;
alert('You have 6 guesses');
for(var j = 0; i<6; i++){
  console.log(j);
  trial = prompt('Can you guess the company where i am gonna work in future').toLowerCase();
  if(trial === possibilities[0]){
    alert('yea!! I will be working with '+possibilities[0]);
    correct.push(1);
    console.log('I will be working with either one of these companies'+ possibilities[0],possibilities[1],possibilities[2], possibilities[3]);
    break;
  }
  else if(trial === possibilities[1]){
    alert('yea!! I will be working with ' + possibilities[1]);
    correct.push(1);
    console.log('I will be working with either one of these companies '+ possibilities[0],possibilities[1],possibilities[2],possibilities[3] );
    break;
  }
  else if(trial === possibilities[2]){
    alert('yea!! I will be working with ' + possibilities[2]);
    correct.push(1);
    console.log('I will be working with either one of these companies '+ possibilities[0],possibilities[1],possibilities[2],possibilities[3]);
    break;
  }
  else if(trial === possibilities[3]){
    alert('yea!! I will be working with '+ possibilities[3]);
    correct.push(1);
    console.log('I will be working with either one of these companies '+ possibilities[0],possibilities[1],possibilities[2],possibilities[3]);
    break;
  }
  else{
    alert('No,I will not be working with that company');
  }
}
alert('Well done!! You got '+ correct.length +' out of 2 question answers correct ' + userName );







