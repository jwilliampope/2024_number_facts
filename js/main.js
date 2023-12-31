let fact = document.querySelector("#fact")
let factText = document.querySelector("#factText")

let numberInput = document.querySelector("#numberInput")
numberInput.addEventListener("input", getFactAjax)

// FETCH WITH XHR
function getFactAjax() {
  let number = numberInput.value
  if (number != "") {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "http://numbersapi.com/" + number)

    xhr.onload = function () {
      if (this.status == 200) {
        fact.style.display = "block"
        factText.innerText = this.responseText
      }
    }

    xhr.send()
  }
}
