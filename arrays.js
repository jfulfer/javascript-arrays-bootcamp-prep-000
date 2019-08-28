var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, newBar) {
  var newArray = [newBar, ...chocolateBars];
  return newArray;
}

var newArray =

function addElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars.push(newBar);
  return chocolateBars;
}