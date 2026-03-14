let result = document.getElementById("result")
let historyList = document.getElementById("historyList")

let lastButton = null

function press(button,value){

result.value += value

if(lastButton){
lastButton.classList.remove("active")
}

button.classList.add("active")
lastButton = button

}

function clearDisplay(){

result.value=""

}

function deleteLast(){

result.value = result.value.slice(0,-1)

}

function calculate(){

try{

let expression = result.value
let answer = eval(expression)

result.value = answer

let li = document.createElement("li")
li.innerText = expression + " = " + answer

historyList.prepend(li)

}
catch{

result.value="Error"

}

}