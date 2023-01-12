function scuberGreetingForFeet(someNumber) {
  
  if (someNumber == 199) {
    return 'This one is on me!';
  }
  else if (someNumber >= 400 && someNumber <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (someNumber >= 2000 && someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (someNumber >= 2501) {
    return 'No can do.';
  }
}


function ternaryCheckCity(destination) {
  if (destination == 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (destination == 'Pittsburgh') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  if (tip == 'generous') {
    return 'Thank you so much.';
  }
  else if (tip == 'not as generous') {
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}

