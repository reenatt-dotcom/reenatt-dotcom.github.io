/*----- constants -----*/
const words = ["python", "javascript", "mongodb", "json", "java", "html", "css", "c", "csharp", "golang", "kotlin", "php", "sql", "ruby"]
const letters = "abcdefghijklmnopqrstuvwxyz"
/*----- app's state (variables) -----*/
let answer
let mistakes
let blank
let answerwithspaces
/*----- cached element references -----*/
const sixteen = document.getElementById("hangman16")
/*----- event listeners -----*/
document.getElementById("buttoncontainer").addEventListener("click", handleGuess)
document.getElementById("reset").addEventListener("click", init)
/*----- functions -----*/
function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)]
}
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
// render
function render(code, element) {
  code.innerHTML = element
}
// handleGuess
function handleGuess(e) {

  let number = e.target.id.replace("post-", "")
  document.getElementById(number).disabled = "true"
  if (e.target && e.target.nodeName == "BUTTON" && e.target.id !== "reset") {
    let letter = letters[number - 1]
    if (answer.includes(letter)) {
      document.getElementById(number).className = 'selected';
      render(document.getElementById("blank"), blank)
      if (answerwithspaces[0] === letter) {
        blank = blank.replaceAt(0, letter)
      }
      for (let i = 1; i < answerwithspaces.length; i++) {
        if (answerwithspaces[i + 1] === letter) {
          blank = blank.replaceAt(i + 1, letter)
        }
      }
      render(document.getElementById("blank"), blank)
      if (!blank.includes("_")) {
        render(sixteen, "you win")
        for (let i = 1; i < 27; i++) {
          document.getElementById(i).disabled = "true"
        }
      }
    } else {
      mistakes += 1
      document.getElementById(number).className = 'notselected';
      if (mistakes === 1) {
        render(document.getElementById("hangman1"), "⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman2"), "⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman3"), "⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
      } else if (mistakes === 2) {
        render(document.getElementById("hangman4"), "⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman5"), "⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman6"), "⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿")
      } else if (mistakes === 3) {
        render(document.getElementById("hangman7"), "⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman8"), "⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿")
        render(document.getElementById("hangman9"), "⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿")
      } else if (mistakes === 4) {
        render(document.getElementById("hangman10"), "⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman11"), "⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman12"), "⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿")
      } else if (mistakes === 5) {
        render(document.getElementById("hangman13"), "⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman14"), "⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        render(document.getElementById("hangman15"), "⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
      } else if (mistakes === 6) {
        render(document.getElementById("blank"), answer)
        render(sixteen, "you lose")
        for (let i = 1; i < 27; i++) {
          document.getElementById(i).disabled = "true"
        }
      }
    }
    let button = document.querySelector("#number")
  }
}
// init
function init(e) {
  answer = ''
  randomWord()
  mistakes = 0
  blank = ""
  for (let i = 0; i < answer.length; i++) {
    blank += "_ "
  }
  answerwithspaces = ""
  for (let i = 0; i < answer.length; i++) {
    answerwithspaces += answer[i]
    answerwithspaces += " "
  }
  render(document.getElementById("blank"), blank)
  clearBoard()
  clearButtons()
}
// clearBoard
function clearBoard() {
  render(document.getElementById("hangman1"), "")
  render(document.getElementById("hangman2"), "")
  render(document.getElementById("hangman3"), "")
  render(document.getElementById("hangman4"), "")
  render(document.getElementById("hangman5"), "")
  render(document.getElementById("hangman6"), "")
  render(document.getElementById("hangman7"), "")
  render(document.getElementById("hangman8"), "")
  render(document.getElementById("hangman9"), "")
  render(document.getElementById("hangman10"), "")
  render(document.getElementById("hangman11"), "")
  render(document.getElementById("hangman12"), "")
  render(document.getElementById("hangman13"), "")
  render(document.getElementById("hangman14"), "")
  render(document.getElementById("hangman15"), "")
  render(document.getElementById("hangman16"), "")
}
// clearButtons
function clearButtons() {
  for (var i = 1; i < 27; i++) {
    document.getElementById(i).disabled = false
    document.getElementById(i).className = "button"
  }
}
init()
// sources
// https://jsfiddle.net/3fzb1kk1/
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml
// https://css-tricks.com/forums/topic/making-my-h1-and-h2-text-vertically-closer-to-one-another/
// https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github
// https://davidwalsh.name/event-delegate
// https://www.twitchquotes.com/copypastas/ascii-art
