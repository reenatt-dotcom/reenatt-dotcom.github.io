/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

let words = ["python", "javascript", "mongodb", "json", "java", "html", "css", "c", "csharp", "golang", "kotlin", "php", "sql", "ruby"]
let answer = ''
let maxWrong = 5
let mistakes = 0
let guessed = []

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)]
}
randomWord()

let answerwithspaces = ""
for (let i = 0; i < answer.length; i++) {
  answerwithspaces += answer[i]
  answerwithspaces += " "
}

let blank = ""
for (let i = 0; i < answer.length; i++) {
  blank += "_ "
}
document.getElementById("blank").innerHTML = blank

let userRating
let letters = "abcdefghijklmnopqrstuvwxyz"
document.getElementById("button").addEventListener("click", initialize);
initialize()
function initialize() {
  for (let i = 1; i < 17; i++) {
    document.getElementById(`hangman${i}`).innerHTML = ""
    let blank = ""
    for (let i = 0; i < answer.length; i++) {
      blank += "_ "
    }
    document.getElementById("blank").innerHTML = blank

  }
}

document.getElementById("body").addEventListener("click", function (e) {
  let number = e.target.id.replace("post-", "")
  document.getElementById(number).disabled = "true"
  if (e.target && e.target.nodeName == "BUTTON") {

    let letter = letters[number - 1]
    console.log(letter)
    userRating = 1;

    if (answer.includes(letter)) {
      document.getElementById(number).className = 'selected';
      document.getElementById("blank").innerHTML = blank

      if (answerwithspaces[0] === letter) {
        blank = blank.replaceAt(0, letter)
      }
      for (let i = 1; i < answerwithspaces.length; i++) {
        if (answerwithspaces[i + 1] === letter) {
          console.log(i)
          blank = blank.replaceAt(i + 1, letter)
          // console.log(blank)
        }

      }


      document.getElementById("blank").innerHTML = blank
      if (!blank.includes("_")) {
        // console.log(blank)
        document.getElementById("hangman16").innerHTML = "you win"
        for (let i = 1; i < 27; i++) {
          document.getElementById(i).disabled = "true"
        }
      }




    } else {
      mistakes += 1
      document.getElementById(number).className = 'notselected';
      if (mistakes === 1) {
        document.getElementById("hangman1").innerHTML = "⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman2").innerHTML = "⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman3").innerHTML = "⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes === 2) {
        document.getElementById("hangman4").innerHTML = "⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman5").innerHTML = "⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman6").innerHTML = "⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes === 3) {
        document.getElementById("hangman7").innerHTML = "⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
        document.getElementById("hangman8").innerHTML = "⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
        document.getElementById("hangman9").innerHTML = "⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
      } else if (mistakes === 4) {
        document.getElementById("hangman10").innerHTML = "⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
        document.getElementById("hangman11").innerHTML = "⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman12").innerHTML = "⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
      } else if (mistakes === 5) {
        document.getElementById("hangman13").innerHTML = "⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman14").innerHTML = "⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("hangman15").innerHTML = "⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes === 6) {
        document.getElementById("blank").innerHTML = answer
        document.getElementById("hangman16").innerHTML = "you lose"
        for (let i = 1; i < 27; i++) {
          document.getElementById(i).disabled = "true"
        }
      }

    }
    let button = document.querySelector("#number")

  }
})

// sources
// https://jsfiddle.net/3fzb1kk1/
// http://jsfiddle.net/Mzg6c/
// https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
// https://flexiple.com/disable-button-javascript/
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml
// https://css-tricks.com/forums/topic/making-my-h1-and-h2-text-vertically-closer-to-one-another/
// https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github
// https://davidwalsh.name/event-delegate
// https://www.twitchquotes.com/copypastas/ascii-art
