
/*----- constants -----*/
const words = ["python", "javascript", "mongodb", "json", "java", "html", "css", "c", "csharp", "golang", "kotlin", "php", "sql", "ruby"]
const maxWrong = 6
const letters = "abcdefghijklmnopqrstuvwxyz"

/*----- app's state (variables) -----*/
let answer
let mistakes
let guessed
let blank


let answerwithspaces

let userRating


/*----- cached element references -----*/
const sixteen = document.getElementById("hangman16")

/*----- event listeners -----*/
document.getElementById("buttoncontainer").addEventListener("click", handleGuess)

/*----- functions -----*/
function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)]
}

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// render
function render(x, y) {
  x.innerHTML = y

}

// handleGuess
function handleGuess(e) {

    let number = e.target.id.replace("post-", "")

    document.getElementById(number).disabled = "true"
    if (e.target && e.target.nodeName == "BUTTON" && e.target.id !== "reset") {

      let letter = letters[number - 1]
      console.log(letter)
      userRating = 1;

      if (answer.includes(letter)) {
        document.getElementById(number).className = 'selected';
        render(document.getElementById("blank"), blank)

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


        render(document.getElementById("blank"), blank)
        if (!blank.includes("_")) {
          // console.log(blank)

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
function init() {
  answer = ''
  randomWord()
  mistakes = 0
  guessed = []
  blank = ""
  for (let i = 0; i < answer.length; i++) {
    blank += "_ "
  }
  answerwithspaces = ""
  for (let i = 0; i < answer.length; i++) {
    answerwithspaces += answer[i]
    answerwithspaces += " "
  }
  userRating
  render(document.getElementById("blank"), blank)
  clearBoard()

}

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

function clearButtons() {
  
}

document.getElementById("reset").addEventListener("click", init)

init()
