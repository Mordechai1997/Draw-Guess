import * as words from "./words.js";

var objOptions = [{ word: words.words(), level: 'Easy', point: 1 },
    { word: words.words(), level: 'Medium', point: 3 },
    { word: words.words(), level: 'Hard', point: 5 }
]
const selected = (e) => {
    // console.log(e.target.childNodes[1].innerText)
    // console.log(e.target.childNodes[2].innerText)

    window.location.href = `http://localhost:3008/draw/${e.target.childNodes[2].innerText}&${e.target.childNodes[1].innerText}`;

}
var allOptions = document.querySelector('#options');
for (let i = 0; i < 3; i++) {
    var buttonOp = document.createElement('button')
    buttonOp.setAttribute('class', 'option')
    buttonOp.addEventListener('click', selected)

    var spanWord = document.createElement('span')
    spanWord.innerText = objOptions[i].word;

    var spanLevel = document.createElement('span')
    spanLevel.innerText = objOptions[i].level;

    var spanPoint = document.createElement('span')
    spanPoint.innerText = objOptions[i].point;


    buttonOp.appendChild(spanLevel)
    buttonOp.appendChild(spanWord)
    buttonOp.appendChild(spanPoint)
    allOptions.appendChild(buttonOp);
}