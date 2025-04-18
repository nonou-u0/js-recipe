const button = document.getElementById("button")
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-data")

const alertMessage = function() {
  alert("クリックしたね")
}

button.onclick=alertMessage

const sayHello = function() {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello
