let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt === ''){
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value++;
    }


    if(getResults(input.value)) {
        const winMessage = "You Win! :)"
        setMessage(winMessage);
        showAnswer(true);
        showReplay();

    } else {
        if(attempt.value >= 10){
            const loseMessage = "You Lose! :("
            setMessage(loseMessage);
            showAnswer(false);
            showReplay;
        } else {
            const playMessage = "Incorrect, try again."
            setMessage(playMessage);
        }
    }
}

//implement new functions here
function setHiddenFields() {
    let randomNumber = Math.floor(Math.random() * 10000);
    answer.value = randomNumber.toString();
    while(answer.value.length < 4) {
       answer.value = '0' + answer.value
    }
    let attempt = 0;

}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if(input.length === 4) {
        return true;
    } else {
        let message = "Guesses must be exactly 4 characters long"
        setMessage(message);
        return false;
    }
}

function getResults(input) {
    // document.getElementById('results').innerHTML
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for (i = 0; i < input.length; i++) {
      if (input.charAt(i) == answer.value.charAt(i)) {
        html += '<span class="glyphicon glyphicon-ok"></span>';
      } else if (answer.value.indexOf(input.charAt(i)) > -1) {
        html += '<span class="glyphicon glyphicon-transfer"></span>';
      } else {
        html += '<span class="glyphicon glyphicon-remove"></span>';
      }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;
  
    if (input == answer.value) {
      return true;
    } else {
      return false;
    }
}

function showAnswer(param) {
    // document.getElementById('code').innerHTML = answer.value
    let code = document.getElementById('code')
    if (param) {
        code.className += 'success'
    } else {
        code.className += 'failure'
    }
    code.innerHTML = answer.value;
}

function showReplay() {
    let guessingDiv = document.getElementById('guessing-div');
    guessingDiv.style.display = 'none';
    let replayDiv = document.getElementById('replay-div');
    replayDiv.style.diplay = 'block';
}