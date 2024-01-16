const body = document.querySelector('body');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const redParagraph = document.getElementById('redParagraph');
const greenParagraph = document.getElementById('greenParagraph');
const blueParagraph = document.getElementById('blueParagraph');

let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;

redParagraph.innerText = red;
greenParagraph.innerText = green;
blueParagraph.innerText = blue;

let newRGBColourBody = (red, green, blue) => {
    const RGBColour = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = RGBColour;
}

redInput.addEventListener('change', (e) => {
    red = e.target.value;
    redParagraph.innerText = red;
    newRGBColourBody(red, green, blue);
})

greenInput.addEventListener('change', (e) => {
    green = e.target.value;
    greenParagraph.innerText = green;
    newRGBColourBody(red, green, blue);
})

blueInput.addEventListener('change', (e) => {
    blue = e.target.value;
    blueParagraph.innerText = blue;
    newRGBColourBody(red, green, blue);
})