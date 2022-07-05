let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/samochod-ortal.jpg') {
      myImage.setAttribute('src','images/ortal-logo.jpg');
    } else {
      myImage.setAttribute('src','images/samochod-ortal.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.textContent = "zmiana użytkownika"

function setUserName() {
    let myName = prompt('Jak masz na imię?:)');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Witaj na stronie firmy ORTAL ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Witaj na stronie firmy ORTAL ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
