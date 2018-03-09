'use strict';

var userName;
var correct =[];
function welcome() {

  userName = prompt('What is your name?');
  alert('Hello '+ userName + ' Welcome to my website ');
  var likeReading = prompt('Do you think that I like to read? please type \'yes\' or \'no\'.' );
  while(likeReading.length<1){
    alert('you did not answer my question');
    likeReading = prompt('Do you think that I like to read? please type \'yes\' or \'no\'.' );
  }
  if(likeReading.toLowerCase() === 'yes' ){
    alert('yes! I like to read');
    console.log( 'Ria likes reading');
    correct.push(1);
  }
  else {
    alert('No,you are wrong, i like to read. ' );
    console.log( ' Ria likes reading');

  }

  var playGitar = prompt('Do I like to play gitar?please type\'yes\' or \'no\'.');
  while(playGitar.length<1){
    alert('You did not answer my Question');
    playGitar = prompt('Do I like to play gitar?please type\'yes\' or \'no\'.');
  }
  if(playGitar.toLowerCase() === 'yes'){
    alert('Yes!! I like to play gitar');
    console.log('Ria likes to play gitar');
    correct.push(1);
  }
  else{
    alert('No!! I like to play gitar');
    console.log('Ria likes to read gitar');
  }

  var sandWich = prompt('Do I like sandwich?please type\'yes\' or \'no\'');
  while(sandWich.length<1){
    alert('You did not answer my question');
    sandWich = prompt('Do I like sandwich?please type\'yes\' or \'no\'');
  }

  if(sandWich.toLowerCase() === 'yes'){
    alert('No!! I don\'t like sandwich');
    console.log('Ria don\'t like sandwich');
    correct.push(1);
  }
  else{
    alert('Yes!! I don\'t like sandwich');
    console.log('Ria don\'t like sandwich');
  }
  var dance = prompt('Do you think that I like to dance? please type \'yes\' or \'no\'.');
  while(dance.length<1){
    alert('You did not answer my question');
    dance = prompt('Do you think that I like to dance? please type \'yes\' or \'no\'.');

  }
  if(dance.toLowerCase() === 'yes'){
    alert('Yes!!! I like to dance');
    console.log('Ria likes to dance');
    correct.push(1);
  }
  else{
    alert('No,I like to dance');
    console.log('Ria likes to dance');
  }
  var softDev = prompt('Do you think I am intrested in software development? please type \'yes\' or \'no\'');
  while(softDev.length<1){
    alert('You did not answer my question');
    softDev = prompt('Do you think I am intrested in software development? please type \'yes\' or \'no\'');

  }
  if(softDev.toLowerCase() === 'no'){
    alert('No!! I am intrested in software development');
    console.log('Ria likes coding');
  }
  else {
    alert('Yes!! i am intrested in software development');
    console.log('Ria likes coding');
    correct.push(1);
  }
}
welcome();

function guesesLevelTwo () {
  alert('You have 4 guesses.');

  var guess;
  for(var i=0;i<4;i++){
    console.log(i);
    guess = prompt('Can you guess my age?');

    while(guess === ''){
      alert('You did not answer my question');
      guess = prompt('can you guess my');
    }
    guess = parseInt(guess);
    if(guess === 22){
      alert('Correct');
      correct.push(1);
      break;
    }
    else if (guess <= 21){
      alert('Your guess is too low,');
    }
    else{
      alert('Your guess is too high');
    }
  }
  var possibilities =['amazon','google','microsoft','apple'];
  var trial;
  alert('You have 6 guesses');
  for(var j = 0; j<6; j++){
    console.log(j);
    trial = prompt('Can you guess the company where i am gonna work in future').toLowerCase();
    while( trial.length<1){
      alert('You did not answer my question');
      trial = prompt('Can you guess the company where i am gonna work in future').toLowerCase();

    }
    if(trial === possibilities[0]){
      alert('yea!! I will be working with '+possibilities[0]);
      correct.push(1);
      alert('I will be working with either one of these companies'+ possibilities[0] + possibilities[1] + possibilities[2] + possibilities[3]);
      break;
    }
    else if(trial === possibilities[1]){
      alert('yea!! I will be working with ' + possibilities[1]);
      correct.push(1);
      alert('I will be working with either one of these companies '+ possibilities[0] + possibilities[1] + possibilities[2] + possibilities[3] );
      break;
    }
    else if(trial === possibilities[2]){
      alert('yea!! I will be working with ' + possibilities[2]);
      correct.push(1);
      console.log('I will be working with either one of these companies '+ possibilities[0] + possibilities[1] + possibilities[2] + possibilities[3]);
      break;
    }
    else if(trial === possibilities[3]){
      alert('yea!! I will be working with '+ possibilities[3]);
      correct.push(1);
      alert('I will be working with either one of these companies '+ possibilities[0] + possibilities[1] + possibilities[2] + possibilities[3]);
      break;
    }
    else{
      alert('No,I will not be working with that company');
    }
  }
  alert('Well done!! You got '+ correct.length +' out of 7 question answers correct ' + userName );
}
guesesLevelTwo();