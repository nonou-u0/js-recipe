const button = document.getElementById("button")
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")
const inputKey = document.getElementById("input-key")

const alertMessage = function() {
  alert("クリックしたね")
}

button.onclick=alertMessage

const logValue = function (e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

const onkeydown = function(e) {
  console.log(e.key)
}

inputKey.onkeydown = onkeydown

