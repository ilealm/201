'use strict';
var guestName;
var askSoccer, askCats, askTDK, askRun, askKids;
var msgValidation, answerMsg;

// asking user´s name
guestName = prompt('Hi there!\nWhat\'s your name?');

alert('Great to have you here ' + guestName + 
     '! \n\nLet\'s play! I will ask you 5 yes/no questions about me and at the end we will see how you correct you was :-D');

// asking 5 questions

askSoccer = prompt('Do you think I love soccer?\nyes/no');
askCats = prompt('What do you thing I would preffer dog over cats?');
askTDK = prompt('Do you believe I enjoy TDK matches?');
askRun = prompt('Do you think I\'m a long distance runner?');
askKids = prompt('Do you believe I have 4 kids?');

// console login aswers
console.log('User name ' + guestName);
console.log('Do you think I love soccer? ' + askSoccer);
console.log('What do you thing I would preffer dog over cats? ' + askCats);
console.log('Do you believe I enjoy TDK matches? ' + askTDK);
console.log('Do you think I\'m a long distance runner? ' + askRun);
console.log('Do you believe I have 4 kids? ' + askKids);


// validate the user's inputs
// TODO: convert this to a function
msgValidation ='';

if (((askSoccer.trim().toLowerCase()!== 'yes') && (askSoccer.trim().toLowerCase()!== 'no')) 
  && ((askSoccer.trim().toLowerCase()!== 'y') && (askSoccer.trim().toLowerCase()!== 'n'))){ 
  msgValidation = msgValidation + "\n- Answer with yes or no to the soccer question."; 
};

if (((askCats.trim().toLowerCase()!== 'yes') && (askCats.trim().toLowerCase()!== 'no')) 
  && ((askCats.trim().toLowerCase()!== 'y') && (askCats.trim().toLowerCase()!== 'n'))){ 
  msgValidation = msgValidation + "\n- Answer with yes or no to the dog/cat question."; 
};

if (((askTDK.trim().toLowerCase()!== 'yes') && (askTDK.trim().toLowerCase()!== 'no')) 
  && ((askTDK.trim().toLowerCase()!== 'y') && (askTDK.trim().toLowerCase()!== 'n'))){ 
  msgValidation = msgValidation + "\n- Answer with yes or no to the TDK matches question."; 
};

if (((askRun.trim().toLowerCase()!== 'yes') && (askRun.trim().toLowerCase()!== 'no')) 
  && ((askRun.trim().toLowerCase()!== 'y') && (askRun.trim().toLowerCase()!== 'n'))){ 
  msgValidation = msgValidation + "\n- Answer with yes or no to the running question."; 
};

if (((askKids.trim().toLowerCase()!== 'yes') && (askKids.trim().toLowerCase()!== 'no')) 
  && ((askKids.trim().toLowerCase()!== 'y') && (askKids.trim().toLowerCase()!== 'n'))){ 
  msgValidation = msgValidation + "\n- Answer with yes or no to the 4 kids question."; 
};

console.log(msgValidation);

if (msgValidation!==''){
  msgValidation = 'Oh no! there are some mistakes in the answers:\n' + msgValidation + '\n\nPlease reload the page and try again.'
  alert(msgValidation);
}
else{
  // alert the user answers
  answerMsg = 'Let\'see if you where correct !!!\n'; 

  if ((askSoccer.trim().toLowerCase()=== 'yes') || (askSoccer.trim().toLowerCase()=== 'y')){ 
    answerMsg = answerMsg + "\nAbout soccer, you said YES. Sorry! I don\'t like soccer..."; 
  }
  else {
    answerMsg = answerMsg + "\nYou said NO. That\s right! I don\'t like soccer..."; 
  }


 


  console.log(answerMsg);
  alert(answerMsg)
}







