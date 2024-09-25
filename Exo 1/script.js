const square = document.getElementById("square");

var className = square.className;
var color = window.getComputedStyle(square).color;
var backgroundColor = window.getComputedStyle(square).backgroundColor;
var height = square.offsetHeight;
var width = square.offsetWidth;
var fontFamily = window.getComputedStyle(square).fontFamily;
var fontSize = window.getComputedStyle(square).fontSize;

square.addEventListener("click", () => {
    alert("Class : " + className + "\n" + "Background color : " + backgroundColor + "\n" + "Color : " + color + "\n" + "Height : " + height + "px" + "\n" + "Width : " + width + "px" + "\n" + "Display : " + '???' + "\n" + "Display : " + fontFamily + " (" + fontSize + ")");
});

