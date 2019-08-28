var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, newBar) {
  var newArray = [newBar, ...chocolateBars];
  return newArray;
}

var colors = ["Yellow", "Blue", "Green"]

function addElementToBeginningOfArray(colors, newColor) {
  colors.push(newColor);
  return colors;
}