let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function textDecod(text) {
  let result = "";

  // проходимся по введеному тексту
  for (let i = 0; i < text.length; i++) {
    let symbol = text[i];
    let check = false;

    // Проверяем наличие символа в алфавите
    for (let j = 0; j < alphabet.length; j++) {
      if (symbol === alphabet[j]) {
        check = true;
        // преврка заглавных
        let bigSymbol = j < 26;

        // индекс после отступа
        let newIndex;
        if (bigSymbol) {
          // заглавные
          newIndex = (j - 13 + 26) % 26;
        } else {
          // строчные
          newIndex = 26 + ((j - 26 - 13 + 26) % 26);
        }

        result += alphabet[newIndex];
      }
    }

    // для не алфавитных символов
    if (!check) {
      result += symbol;
    }
  }

  return result;
}

let decodButton = document.getElementById("decodButton");
let inputText = document.getElementById("inputText");
let originalText = document.getElementById("originalText");
let decodText = document.getElementById("decodText");

decodButton.addEventListener("click", function () {
  // получtv вводимый текст
  let text = inputText.value;

  // вывод исходника
  originalText.innerHTML = text;

  // вывод расшифрованного
  decodText.innerHTML = textDecod(text);
});
