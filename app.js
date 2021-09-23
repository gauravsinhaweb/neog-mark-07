const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector("#btn-translate");
const outputDiv = document.querySelector("#output");

function errorHandler(error) {
  console.log(`error occured: ${error}`);
  alert("Oops, try after an hour, max limit exceeds per hour!");
}

function clickHandler() {
  var inputValue = txtInput.value;

  const API = `https://api.funtranslations.com/translate/yoda.json?text=${inputValue}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      var translatedText = data.contents.translated;
      outputDiv.innerText = translatedText;
      // console.log(translatedText + "clicked");
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
