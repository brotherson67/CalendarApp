// current date
$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));
const currentHour = moment().format("HH");

//make function(S) to get information from local storage in case of refresh
$(".Description").on("click", "p", function () {
  let descriptionText = $(this) //textvalue of clicked description
    .text()
    .trim();
  let descriptionInput = $("<textarea>") //create textarea element
    .val(descriptionText);
  $(this).replaceWith(descriptionInput); //replace p with textarea
  descriptionInput.trigger("focus"); //focus on textarea
});

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
$(".saveBtn").click(function (e) {
  e.preventDefault();
  const row = $(this).siblings(".time-block").value;
  const time = $(this).parent().attr("id")[1];
  localStorage.setItem(time, row);
});
