// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';



var h1Action = document.querySelector('h1');
var mainImage = document.querySelector('img');
var defaultH1Title = h1Action.textContent;

h1Action.onmouseover = function() {
    h1Action.textContent = "Stop it";
    
}

// mainImage.onmouseover = function() {
//     h1Action.textContent = defaultH1Title;
// }
mainImage.onclick = function() {
    var mySrc = mainImage.getAttribute('src');
    if (mySrc === 'images/btc-movie.png') {
        mainImage.setAttribute ('src', 'images/Netflix.jpg');
        console.log(mySrc);
    } else {
        mainImage.setAttribute ('src', 'images/btc-movie.png');
        console.log(mySrc);
    }
}


function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Netflix for you, " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Netflix for you, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}