// Write your code here!
let main = document.getElementById("main");
main.remove();
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
const YOUR-NAME = "Edwin";
let newNode = document.createTextNode(`${YOUR-NAME} is the champion`);
newHeader.appendChild(newNode);

