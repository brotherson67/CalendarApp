// current date
$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));
const currentHour = moment().format("HH");

// compare currentHour with time block
for (let i = 0; i <= 9; i++) {
  if ($(".row")[i].id < currentHour) {
    $(".row")[i].children[1].classList.add("past");
  } else if ($(".row")[i].id == currentHour) {
    $(".row")[i].children[1].classList.add("present");
  } else {
    $(".row")[i].children[1].classList.add("future");
  }
}

// create a function to save the text to localStorage in case of refresh
$(".saveBtn").click(function () {
  const eight = document.getElementById("0").value;
  localStorage.setItem("1", eight);
  const nine = document.getElementById("1").value;
  localStorage.setItem("2", nine);
  const ten = document.getElementById("2").value;
  localStorage.setItem("3", ten);
  const eleven = document.getElementById("3").value;
  localStorage.setItem("4", eleven);
  const twelve = document.getElementById("4").value;
  localStorage.setItem("5", twelve);
  const one = document.getElementById("5").value;
  localStorage.setItem("6", one);
  const two = document.getElementById("6").value;
  localStorage.setItem("7", two);
  const three = document.getElementById("7").value;
  localStorage.setItem("8", three);
  const four = document.getElementById("8").value;
  localStorage.setItem("9", four);
  const five = document.getElementById("9").value;
  localStorage.setItem("10", five);
});
