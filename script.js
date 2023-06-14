var seconds = 0;
var minutes = 0;
var hours = 0;

function startTimer() {
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    var timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

startTimer();
var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 50); // Adiciona 50 dias à data atual

function startTimer() {
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    var currentDate = new Date();
    var timeDifference = expiryDate - currentDate; // Calcula a diferença de tempo em milissegundos

    if (timeDifference <= 0) {
        clearInterval(timerInterval); // Para o cronômetro quando expirar
        alert("O cronômetro expirou!"); // Exibe uma mensagem quando expirar
        return;
    }

    var seconds = Math.floor((timeDifference / 1000) % 60);
    var minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    var timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = formatTime(days) + ":" + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

startTimer();
document.getElementById("change-image").addEventListener("click", function() {
    var imagePath = prompt("Digite o URL da nova imagem:");
    if (imagePath) {
      document.getElementById("user-image").src = imagePath;
    }
  });
  
