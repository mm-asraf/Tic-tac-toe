function ticAlgorithm() {
  let a1 = document.getElementById("a1").value;
  let a2 = document.getElementById("a2").value;
  let a3 = document.getElementById("a3").value;
  let a4 = document.getElementById("a4").value;
  let a5 = document.getElementById("a5").value;
  let a6 = document.getElementById("a6").value;
  let a7 = document.getElementById("a7").value;
  let a8 = document.getElementById("a8").value;
  let a9 = document.getElementById("a9").value;
  let show = document.getElementById("show");
  if (
    (a1 == "x" || a1 == "X") &&
    (a2 == "x" || a2 == "X") &&
    (a3 == "x" || a3 == "X")
  ) {
    show.innerHTML = "X win";
    a4.disabled = true;
    a5.disabled = true;
    a6.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("x win");
  } else if (
    (a1 == "x" || a1 == "X") &&
    (a4 == "x" || a4 == "X") &&
    (a7 == "x" || a7 == "X")
  ) {
    show.innerHTML = "X win";

    a2.disabled = true;
    a3.disabled = true;
    a5.disabled = true;
    a6.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("x win");
  } else if (
    (a3 == "x" || a3 == "X") &&
    (a6 == "x" || a6 == "X") &&
    (a9 == "x" || a9 == "X")
  ) {
    show.innerHTML = "X win";

    a1.disabled = true;
    a2.disabled = true;
    a4.disabled = true;
    a5.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    window.alert("x win");
  } else if (
    (a7 == "x" || a7 == "X") &&
    (a8 == "x" || a8 == "X") &&
    (a9 == "x" || a9 == "X")
  ) {
    show.innerHTML = "X win";

    a1.disabled = true;
    a2.disabled = true;
    a3.disabled = true;
    a4.disabled = true;
    a5.disabled = true;
    a6.disabled = true;
    window.alert("x win");
  } else if (
    (a2 == "x" || a2 == "X") &&
    (a5 == "x" || a5 == "X") &&
    (a8 == "x" || a8 == "X")
  ) {
    show.innerHTML = "X win";

    a1.disabled = true;
    a3.disabled = true;
    a4.disabled = true;
    a6.disabled = true;
    a7.disabled = true;
    a9.disabled = true;
    window.alert("x win");
  } else if (
    (a4 == "x" || a4 == "X") &&
    (a5 == "x" || a5 == "X") &&
    (a6 == "x" || a6 == "X")
  ) {
    show.innerHTML = "X win";

    a1.disabled = true;
    a2.disabled = true;
    a3.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("x win");
  } else if (
    (a1 == "x" || a1 == "X") &&
    (a5 == "x" || a5 == "X") &&
    (a9 == "x" || a9 == "X")
  ) {
    show.innerHTML = "X win";

    a2.disabled = true;
    a3.disabled = true;
    a4.disabled = true;
    a6.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    window.alert("x win");
  } else if (
    (a3 == "x" || a3 == "X") &&
    (a5 == "x" || a5 == "X") &&
    (a7 == "x" || a7 == "X")
  ) {
    show.innerHTML = "X win";

    a1.disabled = true;
    a2.disabled = true;
    a4.disabled = true;
    a6.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    // -------------------------
  } else if (
    (a1 == "o" || a1 == "O") &&
    (a2 == "o" || a2 == "O") &&
    (a3 == "o" || a3 == "O")
  ) {
    show.innerHTML == "O win";
    a4.disabled = true;
    a5.disabled = true;
    a6.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("O win");
  } else if (
    (a1 == "o" || a1 == "O") &&
    (a4 == "o" || a4 == "O") &&
    (a7 == "o" || a7 == "O")
  ) {
    show.innerHTML = "O win";

    a2.disabled = true;
    a3.disabled = true;
    a5.disabled = true;
    a6.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("O win");
  } else if (
    (a3 == "o" || a3 == "O") &&
    (a6 == "o" || a6 == "O") &&
    (a9 == "o" || a9 == "O")
  ) {
    show.innerHTML = "O win";

    a1.disabled = true;
    a2.disabled = true;
    a4.disabled = true;
    a5.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    window.alert("O win");
  } else if (
    (a7 == "o" || a7 == "O") &&
    (a8 == "o" || a8 == "O") &&
    (a9 == "o" || a9 == "O")
  ) {
    show.innerHTML = "O win";

    a1.disabled = true;
    a2.disabled = true;
    a3.disabled = true;
    a4.disabled = true;
    a5.disabled = true;
    a6.disabled = true;
    window.alert("O win");
  } else if (
    (a2 == "o" || a2 == "O") &&
    (a5 == "o" || a5 == "O") &&
    (a8 == "o" || a8 == "O")
  ) {
    show.innerHTML = "O win";

    a1.disabled = true;
    a3.disabled = true;
    a4.disabled = true;
    a6.disabled = true;
    a7.disabled = true;
    a9.disabled = true;
    window.alert("O win");
  } else if (
    (a4 == "o" || a4 == "O") &&
    (a5 == "o" || a5 == "O") &&
    (a6 == "o" || a6 == "O")
  ) {
    show.innerHTML = "O win";

    a1.disabled = true;
    a2.disabled = true;
    a3.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("O win");
  } else if (
    (a1 == "o" || a1 == "O") &&
    (a5 == "o" || a5 == "O") &&
    (a9 == "o" || a9 == "O")
  ) {
    show.innerHTML = "O win";

    a2.disabled = true;
    a3.disabled = true;
    a4.disabled = true;
    a6.disabled = true;
    a7.disabled = true;
    a8.disabled = true;
    window.alert("O win");
  } else if (
    (a3 == "o" || a3 == "O") &&
    (a5 == "o" || a5 == "O") &&
    (a7 == "o" || a7 == "O")
  ) {
    show.innerHTML = "O win";

    a1.disabled = true;
    a2.disabled = true;
    a4.disabled = true;
    a6.disabled = true;
    a8.disabled = true;
    a9.disabled = true;
    window.alert("O win");
  } else if (
    (a1 == "x" || a1 == "o") &&
    (a2 == "x" || a2 == "o") &&
    (a3 == "x" || a3 == "o") &&
    (a4 == "x" || a4 == "o") &&
    (a5 == "x" || a5 == "o") &&
    (a6 == "x" || a6 == "o") &&
    (a7 == "x" || a7 == "o") &&
    (a8 == "x" || a8 == "o") &&
    (a9 == "x" || a9 == "o")
  ) {
    show.innerHTML = "Game Tie";
    window.alert("Game Tie");
  } else {
    if (flag == 1) {
      show.innerHTML = "o turn";
    } else {
      show.innerHTML = "x turn";
    }
  }
}

var flag = 1;
function first() {
  if (flag == 1) {
    a1.value = "x";
    a1.disabled = true;
    flag = 0;
  } else {
    a1.value = "o";
    a1.disabled = true;
    flag = 1;
  }
}

function second() {
  if (flag == 1) {
    a2.value = "x";
    a2.disabled = true;
    flag = 0;
  } else {
    a2.value = "o";
    a2.disabled = true;
    flag = 1;
  }
}

function third() {
  if (flag == 1) {
    a3.value = "x";
    a3.disabled = true;
    flag = 0;
  } else {
    a3.value = "o";
    a3.disabled = true;
    flag = 1;
  }
}

function fourth() {
  if (flag == 1) {
    a4.value = "x";
    a4.disabled = true;
    flag = 0;
  } else {
    a4.value = "o";
    a4.disabled = true;
    flag = 1;
  }
}

function fifth() {
  if (flag == 1) {
    a5.value = "x";
    a5.disabled = true;
    flag = 0;
  } else {
    a5.value = "o";
    a5.disabled = true;
    flag = 1;
  }
}

function sixth() {
  if (flag == 1) {
    a6.value = "x";
    a6.disabled = true;
    flag = 0;
  } else {
    a6.value = "o";
    a6.disabled = true;
    flag = 1;
  }
}

function seventh() {
  if (flag == 1) {
    a7.value = "x";
    a7.disabled = true;
    flag = 0;
  } else {
    a7.value = "o";
    a7.disabled = true;
    flag = 1;
  }
}
function eighth() {
  if (flag == 1) {
    a8.value = "x";
    a8.disabled = true;
    flag = 0;
  } else {
    a8.value = "o";
    a8.disabled = true;
    flag = 1;
  }
}

function nineth() {
  if (flag == 1) {
    a9.value = "x";
    a9.disabled = true;
    flag = 0;
  } else {
    a9.value = "o";
    a9.disabled = true;
    flag = 1;
  }
}

function reset() {
  location.reload();
  a1.value = "";
  a2.value = "";
  a3.value = "";
  a4.value = "";
  a5.value = "";
  a6.value = "";
  a7.value = "";
  a8.value = "";
  a9.value = "";
  a10.value = "";
}
