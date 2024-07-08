var eyeTl = TweenMax.to(".iris", 0.1, {
  scaleY: 0,
  transformOrigin: "center bottom",
  repeat: 1,
  yoyo: true,
  onComplete: function () {
    this.delay(Math.random() + 0.8).restart(true);
  },
});

var draggable = Draggable.create(".drag", {
  type: "x,y",
});

function showConfirmingMessage() {
  var submitButton = document.getElementById("submitButton");
  submitButton.value = "Confirmando...";
  submitButton.disabled = true;
}

function showModal() {
  var modal = document.getElementById("modal");
  var modalContent = document.getElementById("modal-content");
  var countdownElement = document.getElementById("countdown");
  var countdown = 60;

  modal.style.display = "flex";

  var interval = setInterval(function () {
    countdownElement.textContent = countdown;
    countdown--;
    if (countdown <= 0) {
      clearInterval(interval);
      modalContent.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = "none";
        window.open("confirmacion.html", "_blank");
        window.location.href = "confirmacion.html";
      }, 500);
    }
  }, 1000);

  setTimeout(function () {
    modalContent.style.transform = "scale(1)";
    modalContent.style.opacity = 1;
  }, 10);
}

function saveName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("userName", name);
}

window.onload = function () {
  const userName = localStorage.getItem("userName");
  if (userName) {
    document.getElementById("userName").textContent = ", " + userName;
  } else {
    document.getElementById("userName").textContent = "";
  }
};

function startCountdown(targetDate) {
  const endDate = new Date(targetDate).getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "¡El evento ha comenzado!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}

startCountdown("July 13, 2024 17:00:00");
