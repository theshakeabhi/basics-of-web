// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  console.log(mySrc);
  if (mySrc === "./images/mozilla-logo.png") {
    myImage.setAttribute("src", "./images/mozilla-2.png");
  } else {
    myImage.setAttribute("src", "./images/mozilla-logo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myHeading.textContent}, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${myHeading.textContent}, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
