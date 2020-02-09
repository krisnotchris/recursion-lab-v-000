// Code your solution here!

const printString = (string) => {
  if(string.length < 2) {
    return console.log(string);
  }
  return console.log(printString(string.split("").splice(string.length - 1, 1).join("")))
}