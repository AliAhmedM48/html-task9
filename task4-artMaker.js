// ^ HTML elements
var heightInput = document.getElementById('height');
// console.log("🚀 ~ file: task4-artMaker.js:3 ~ heightInput:", heightInput)
var widthInput = document.getElementById('width');
// console.log("🚀 ~ file: task4-artMaker.js:5 ~ widthInput:", widthInput)
var submitButton = document.getElementById('submit');
// console.log("🚀 ~ file: task4-artMaker.js:7 ~ submitButton:", submitButton)
var colorInput = document.getElementById('color');
// console.log("🚀 ~ file: task4-artMaker.js:9 ~ colorInput:", colorInput)
var gridArea = document.getElementById('gridArea');
// console.log("🚀 ~ file: task4-artMaker.js:11 ~ gridArea:", gridArea)
var gridDiv = document.getElementById('gridDiv');
// console.log("🚀 ~ file: task4-artMaker.js:13 ~ gridDiv:", gridDiv)



var heightUP = document.getElementById('heightUP');
var heightDOWN = document.getElementById('heightDOWN');

var widthUP = document.getElementById('widthUP');
var widthDOWN = document.getElementById('widthDOWN');

// * Initialization
heightInput.value = 0;
widthInput.value = 0;
// heightDOWN.disable = true;
console.dir(heightDOWN)


// ? Functions
function createTable() {
    var gridHTML = '';
    var trCount = heightInput.valueAsNumber;
    console.log("🚀 ~ file: task4-artMaker.js:21 ~ createTable ~ trCount:", trCount)
    var tdCount = widthInput.valueAsNumber;
    console.log("🚀 ~ file: task4-artMaker.js:23 ~ createTable ~ tdCount:", tdCount)




    for (var i = 0; i < trCount; i++) {
        gridHTML += `<tr>`
        for (var j = 0; j < tdCount; j++) {
            gridHTML += `<td onclick="setColor(this)"></td>`
        }
        gridHTML += `</tr>`
    }

    if (trCount === 0 || tdCount === 0) {
        document.getElementById('invalideMsg').hidden = false;
        gridDiv.hidden = true;

    }
    else {
        document.getElementById('invalideMsg').hidden = true;
        gridArea.innerHTML = gridHTML;
        gridDiv.hidden = false;
    }
}

function setColor(selectedTag) {
    selectedTag.style.backgroundColor = colorInput.value;
}

// & Events
submitButton.onclick = createTable;

heightUP.onclick = function () {
    heightInput.stepUp();
};
heightDOWN.onclick = function () {
    heightInput.stepDown();
};

widthUP.onclick = function () {
    widthInput.stepUp();
};

widthDOWN.onclick = function () {
    widthInput.stepDown();
};