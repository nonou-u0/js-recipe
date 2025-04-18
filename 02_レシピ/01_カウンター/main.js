const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const doubleButton = document.getElementById("double-button")

let count = 1

// ボタン要素のonclickハンドラに関数を代入
plusButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}
doubleButton.onclick = function () {
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}
