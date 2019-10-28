let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Odin-logo.jpg') {
      myImage.setAttribute ('src','images/Odin-logo2.jpg');
    } else {
      myImage.setAttribute ('src','images/Odin-logo.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Odin Project Rocks, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Odin Project Rocks, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }