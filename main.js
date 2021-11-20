/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

var words=["python", "javascript", "mongodb", "json", "java", "html", "css", "c", "csharp", "golang", "kotlin", "php", "sql", "ruby"]
let answer=''
let maxWrong=15
let mistakes=0
let guessed=[]

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function randomWord(){
  answer=words[Math.floor(Math.random()*words.length)]

}
randomWord()

var answerwithspaces=""
for (var i = 0; i<answer.length;i++){
  answerwithspaces+=answer[i]
  answerwithspaces+=" "
}

var blank=""
for (var i = 0; i < answer.length; i++) {
  blank+="_ "
}
document.getElementById("blank").innerHTML=blank

var userRating

document.getElementById('button1').onclick = function () {
    console.log(this.id + " was clicked")

    userRating = 1;

    if (answer.includes("a")) {
      document.getElementById('button1').className = 'selected';
      document.getElementById("blank").innerHTML=blank

      if (answerwithspaces[0]==="a"){
        blank=blank.replaceAt(0, "a")
      }
        for(var i=1; i<answerwithspaces.length;i++) {
          if (answerwithspaces[i+1] === "a"){
            console.log(i)
            blank=blank.replaceAt(i+1, "a")
            console.log(blank)
          }

      }


      document.getElementById("blank").innerHTML=blank
      if (!blank.includes("_")) {
        console.log(blank)
        document.getElementById("hangman16").innerHTML="you win"
        document.getElementById("button1").disabled="true"
        document.getElementById("button2").disabled="true"
        document.getElementById("button3").disabled="true"
        document.getElementById("button4").disabled="true"
        document.getElementById("button5").disabled="true"
        document.getElementById("button6").disabled="true"
        document.getElementById("button7").disabled="true"
        document.getElementById("button8").disabled="true"
        document.getElementById("button9").disabled="true"
        document.getElementById("button10").disabled="true"
        document.getElementById("button11").disabled="true"
        document.getElementById("button12").disabled="true"
        document.getElementById("button13").disabled="true"
        document.getElementById("button14").disabled="true"
        document.getElementById("button15").disabled="true"
        document.getElementById("button16").disabled="true"
        document.getElementById("button17").disabled="true"
        document.getElementById("button18").disabled="true"
        document.getElementById("button19").disabled="true"
        document.getElementById("button20").disabled="true"
        document.getElementById("button21").disabled="true"
        document.getElementById("button22").disabled="true"
        document.getElementById("button23").disabled="true"
        document.getElementById("button24").disabled="true"
        document.getElementById("button25").disabled="true"
        document.getElementById("button26").disabled="true"
      }




    } else {
      mistakes+=1
      document.getElementById('button1').className = 'notselected';
      if (mistakes===1){
        document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===2){
        document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===3) {
        document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===4) {
        document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===5) {
        document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===6){

        document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===7) {
        document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
      } else if (mistakes===8) {
        document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
      } else if (mistakes === 9) {
        document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
      } else if (mistakes===10) {
        document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
      } else if (mistakes===11) {
        document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===12) {
        document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===13) {
        document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===14) {
        document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      } else if (mistakes===15) {
        document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
        document.getElementById("blank").innerHTML=answer
        document.getElementById("hangman16").innerHTML="you lose"
        document.getElementById("button1").disabled="true"
        document.getElementById("button2").disabled="true"
        document.getElementById("button3").disabled="true"
        document.getElementById("button4").disabled="true"
        document.getElementById("button5").disabled="true"
        document.getElementById("button6").disabled="true"
        document.getElementById("button7").disabled="true"
        document.getElementById("button8").disabled="true"
        document.getElementById("button9").disabled="true"
        document.getElementById("button10").disabled="true"
        document.getElementById("button11").disabled="true"
        document.getElementById("button12").disabled="true"
        document.getElementById("button13").disabled="true"
        document.getElementById("button14").disabled="true"
        document.getElementById("button15").disabled="true"
        document.getElementById("button16").disabled="true"
        document.getElementById("button17").disabled="true"
        document.getElementById("button18").disabled="true"
        document.getElementById("button19").disabled="true"
        document.getElementById("button20").disabled="true"
        document.getElementById("button21").disabled="true"
        document.getElementById("button22").disabled="true"
        document.getElementById("button23").disabled="true"
        document.getElementById("button24").disabled="true"
        document.getElementById("button25").disabled="true"
        document.getElementById("button26").disabled="true"
      }

    }
    let button=document.querySelector("#button1")
    button.disabled=true


}

document.getElementById('button2').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 2;

  if (answer.includes("b")) {
    document.getElementById('button2').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="b"){
      blank=blank.replaceAt(0, "b")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "b"){
          console.log(i)
          blank=blank.replaceAt(i+1, "b")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button2').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button2")
  button.disabled=true

}

document.getElementById('button3').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 3;
  guessed.push("c")
  if (answer.includes("c")) {
    document.getElementById('button3').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="c"){
      blank=blank.replaceAt(0, "c")
    } else {
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "c"){
          console.log(i)
          blank=blank.replaceAt(i+1, "c")
          console.log(blank)
        }

    }

    }
    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }


console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button3').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button3")
  button.disabled=true

}

document.getElementById('button4').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 4;
  guessed.push("d")
  if (answer.includes("d")) {
    document.getElementById('button4').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="d"){
      blank=blank.replaceAt(0, "d")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "d"){
          console.log(i)
          blank=blank.replaceAt(i+1, "d")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button4').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button4")
  button.disabled=true

}

document.getElementById('button5').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 5;
  guessed.push("e")
  if (answer.includes("e")) {
    document.getElementById('button5').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="e"){
      blank=blank.replaceAt(0, "e")
    } else {
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "a"){
          console.log(i)
          blank=blank.replaceAt(i+1, "a")
          console.log(blank)
        }

    }

    }
    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button5').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button5")
  button.disabled=true

}

document.getElementById('button6').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 6;
  guessed.push("f")
  if (answer.includes("f")) {
    document.getElementById('button6').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="f"){
      blank=blank.replaceAt(0, "f")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "f"){
          console.log(i)
          blank=blank.replaceAt(i+1, "f")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button6').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button6")
  button.disabled=true

}

document.getElementById('button7').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 7;

  if (answer.includes("g")) {
    document.getElementById('button7').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="g"){
      blank=blank.replaceAt(0, "g")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "g"){
          console.log(i)
          blank=blank.replaceAt(i+1, "g")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button7').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button7")
  button.disabled=true

}

document.getElementById('button8').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 8;

  if (answer.includes("h")) {
    document.getElementById('button8').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="h"){
      blank=blank.replaceAt(0, "h")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "h"){
          console.log(i)
          blank=blank.replaceAt(i+1, "h")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button8').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button8")
  button.disabled=true

}

document.getElementById('button9').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 9;
  guessed.push("i")
  if (answer.includes("i")) {
    document.getElementById('button9').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="i"){
      blank=blank.replaceAt(0, "i")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "i"){
          console.log(i)
          blank=blank.replaceAt(i+1, "i")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button9').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button9")
  button.disabled=true

}

document.getElementById('button10').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 10;
  guessed.push("j")
  if (answer.includes("j")) {
    document.getElementById('button10').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="j"){
      blank=blank.replaceAt(0, "j")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "j"){
          console.log(i)
          blank=blank.replaceAt(i+1, "j")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button10').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button10")
  button.disabled=true

}

document.getElementById('button11').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 11;
  guessed.push("k")
  if (answer.includes("k")) {
    document.getElementById('button11').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="k"){
      blank=blank.replaceAt(0, "k")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "k"){
          console.log(i)
          blank=blank.replaceAt(i+1, "k")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button11').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button11")
  button.disabled=true

}

document.getElementById('button12').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 12;
  guessed.push("l")
  if (answer.includes("l")) {
    document.getElementById('button12').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="l"){
      blank=blank.replaceAt(0, "l")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "l"){
          console.log(i)
          blank=blank.replaceAt(i+1, "l")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button12').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button12")
  button.disabled=true

}

document.getElementById('button13').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 13;
  guessed.push("m")
  if (answer.includes("m")) {
    document.getElementById('button13').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="m"){
      blank=blank.replaceAt(0, "m")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "m"){
          console.log(i)
          blank=blank.replaceAt(i+1, "m")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button13').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button13")
  button.disabled=true

}

document.getElementById('button14').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 14;
  guessed.push("n")
  if (answer.includes("n")) {
    document.getElementById('button14').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="n"){
      blank=blank.replaceAt(0, "n")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "n"){
          console.log(i)
          blank=blank.replaceAt(i+1, "n")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button14').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button14")
  button.disabled=true

}

document.getElementById('button15').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 15;
  guessed.push("o")
  if (answer.includes("o")) {
    document.getElementById('button15').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="o"){
      blank=blank.replaceAt(0, "o")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "o"){
          console.log(i)
          blank=blank.replaceAt(i+1, "o")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button15').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button15")
  button.disabled=true

}

document.getElementById('button16').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 16;
  guessed.push("p")
  if (answer.includes("p")) {
    document.getElementById('button16').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="p"){
      blank=blank.replaceAt(0, "p")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "p"){
          console.log(i)
          blank=blank.replaceAt(i+1, "p")
          console.log(blank)
        }



    }
    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button16').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button16")
  button.disabled=true

}

document.getElementById('button17').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 17;
  guessed.push("q")
  if (answer.includes("q")) {
    document.getElementById('button17').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="q"){
      blank=blank.replaceAt(0, "q")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "q"){
          console.log(i)
          blank=blank.replaceAt(i+1, "q")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button17').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button17")
  button.disabled=true

}

document.getElementById('button18').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 18;

  if (answer.includes("r")) {
    document.getElementById('button18').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="r"){
      blank=blank.replaceAt(0, "r")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "r"){
          console.log(i)
          blank=blank.replaceAt(i+1, "r")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button18').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button18")
  button.disabled=true

}

document.getElementById('button19').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 19;
  guessed.push("s")
  if (answer.includes("s")) {
    document.getElementById('button19').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="s"){
      blank=blank.replaceAt(0, "s")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "s"){
          console.log(i)
          blank=blank.replaceAt(i+1, "s")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button19').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button19")
  button.disabled=true

}

document.getElementById('button20').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 20;
  guessed.push("t")
  if (answer.includes("t")) {
    document.getElementById('button20').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="t"){
      blank=blank.replaceAt(0, "t")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "t"){
          console.log(i)
          blank=blank.replaceAt(i+1, "t")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button20').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button20")
  button.disabled=true

}

document.getElementById('button21').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 21;
  guessed.push("u")
  if (answer.includes("u")) {
    document.getElementById('button21').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="u"){
      blank=blank.replaceAt(0, "u")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "u"){
          console.log(i)
          blank=blank.replaceAt(i+1, "u")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button21').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button21")
  button.disabled=true

}

document.getElementById('button22').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 22;
  guessed.push("v")
  if (answer.includes("v")) {
    document.getElementById('button22').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="v"){
      blank=blank.replaceAt(0, "v")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "v"){
          console.log(i)
          blank=blank.replaceAt(i+1, "v")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button22').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button22")
  button.disabled=true

}

document.getElementById('button23').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 23;
  guessed.push("w")
  if (answer.includes("w")) {
    document.getElementById('button1').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="w"){
      blank=blank.replaceAt(0, "w")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "w"){
          console.log(i)
          blank=blank.replaceAt(i+1, "w")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button23').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button23")
  button.disabled=true

}

document.getElementById('button24').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 24;
  guessed.push("x")
  if (answer.includes("x")) {
    document.getElementById('button24').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="x"){
      blank=blank.replaceAt(0, "x")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "x"){
          console.log(i)
          blank=blank.replaceAt(i+1, "x")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button24').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button24")
  button.disabled=true

}

document.getElementById('button25').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 25;
  guessed.push("y")
  if (answer.includes("y")) {
    document.getElementById('button25').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="y"){
      blank=blank.replaceAt(0, "y")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "y"){
          console.log(i)
          blank=blank.replaceAt(i+1, "y")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"

      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button25').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button25")
  button.disabled=true

}

document.getElementById('button26').onclick = function () {
  console.log(this.id + " was clicked")

  userRating = 26;
  guessed.push("z")
  if (answer.includes("z")) {
    document.getElementById('button1').className = 'selected';
    document.getElementById("blank").innerHTML=blank

    if (answerwithspaces[0]==="z"){
      blank=blank.replaceAt(0, "z")
    }
      for(var i=1; i<answerwithspaces.length;i++) {
        if (answerwithspaces[i+1] === "z"){
          console.log(i)
          blank=blank.replaceAt(i+1, "z")
          console.log(blank)
        }

    }


    document.getElementById("blank").innerHTML=blank
    if (!blank.includes("_")) {
      document.getElementById("hangman16").innerHTML="you win"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

console.log(blank)

  } else {
    mistakes+=1
    document.getElementById('button26').className = 'notselected';
    if (mistakes===1){
      document.getElementById("hangman").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===2){
      document.getElementById("hangman2").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===3) {
      document.getElementById("hangman3").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===4) {
      document.getElementById("hangman4").innerHTML="⣿⣿⣿⡇⠄⣿⣿⣿⡿⠟⠋⣉⣉⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===5) {
      document.getElementById("hangman5").innerHTML="⣿⣿⣿⠃⠄⠹⠟⣡⣶⡿⢟⣛⣛⡻⢿⣦⣩⣤⣤⣤⣬⡉⢻⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===6){

      document.getElementById("hangman6").innerHTML="⣿⣿⣿⠄⢀⢤⣾⣿⣿⣿⣿⡿⠿⠿⠿⢮⡃⣛⣛⡻⠿⢿⠈⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===7) {
      document.getElementById("hangman7").innerHTML="⣿⡟⢡⣴⣯⣿⣿⣿⣉⠤⣤⣭⣶⣶⣶⣮⣔⡈⠛⠛⠛⢓⠦⠈⢻⣿⣿⣿⣿⣿"
    } else if (mistakes===8) {
      document.getElementById("hangman8").innerHTML="⠏⣠⣿⣿⣿⣿⣿⣿⣿⣯⡪⢛⠿⢿⣿⣿⣿⡿⣼⣿⣿⣿⣶⣮⣄⠙⣿⣿⣿⣿"
    } else if (mistakes === 9) {
      document.getElementById("hangman9").innerHTML="⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡭⠴⣶⣶⣽⣽⣛⡿⠿⠿⠿⠿⠇⣿⣿⣿⣿"
    } else if (mistakes===10) {
      document.getElementById("hangman10").innerHTML="⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣝⣛⢛⡛⢋⣥⣴⣿⣿⣿⣿⣿"
    } else if (mistakes===11) {
      document.getElementById("hangman11").innerHTML="⣿⣿⣿⣿⣿⢿⠱⣿⣿⣛⠾⣭⣛⡿⢿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===12) {
      document.getElementById("hangman12").innerHTML="⠑⠽⡻⢿⣿⣮⣽⣷⣶⣯⣽⣳⠮⣽⣟⣲⠯⢭⣿⣛⣛⣿⡇⢸⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===13) {
      document.getElementById("hangman13").innerHTML="⠄⠄⠈⠑⠊⠉⠟⣻⠿⣿⣿⣿⣿⣷⣾⣭⣿⣛⠷⠶⠶⠂⣴⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===14) {
      document.getElementById("hangman14").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠁⠙⠒⠙⠯⠍⠙⢉⣉⣡⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
    } else if (mistakes===15) {
      document.getElementById("hangman15").innerHTML="⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿"
      document.getElementById("blank").innerHTML=answer
      document.getElementById("hangman16").innerHTML="you lose"
      document.getElementById("button1").disabled="true"
      document.getElementById("button2").disabled="true"
      document.getElementById("button3").disabled="true"
      document.getElementById("button4").disabled="true"
      document.getElementById("button5").disabled="true"
      document.getElementById("button6").disabled="true"
      document.getElementById("button7").disabled="true"
      document.getElementById("button8").disabled="true"
      document.getElementById("button9").disabled="true"
      document.getElementById("button10").disabled="true"
      document.getElementById("button11").disabled="true"
      document.getElementById("button12").disabled="true"
      document.getElementById("button13").disabled="true"
      document.getElementById("button14").disabled="true"
      document.getElementById("button15").disabled="true"
      document.getElementById("button16").disabled="true"
      document.getElementById("button17").disabled="true"
      document.getElementById("button18").disabled="true"
      document.getElementById("button19").disabled="true"
      document.getElementById("button20").disabled="true"
      document.getElementById("button21").disabled="true"
      document.getElementById("button22").disabled="true"
      document.getElementById("button23").disabled="true"
      document.getElementById("button24").disabled="true"
      document.getElementById("button25").disabled="true"
      document.getElementById("button26").disabled="true"
    }

  }
  let button=document.querySelector("#button26")
  button.disabled=true

}


// sources
// https://jsfiddle.net/3fzb1kk1/
// http://jsfiddle.net/Mzg6c/
// https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
// https://flexiple.com/disable-button-javascript/
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_change_innerhtml
// https://css-tricks.com/forums/topic/making-my-h1-and-h2-text-vertically-closer-to-one-another/
// https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github
// https://www.twitchquotes.com/copypastas/ascii-art
