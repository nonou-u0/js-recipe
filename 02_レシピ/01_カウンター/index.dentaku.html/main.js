const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const addButton = document.getElementById("addButton")
const result = document.getElementById("result")

addButton.onclick = function(){
  const value1 = Number(num1.value)
  const value2 = Number(num2.value)
  const sum = value1 + value2
  result.textContent = sum
}