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







