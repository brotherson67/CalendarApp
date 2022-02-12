// current date
$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));
const currentHour = moment().format("H")


// compare currentHour with time block
for (let i = 0; i <= 9; i++) {
    if ($(".row")[i].id < currentTime) {
        $(".row")[i].children[1].classList.add("past");
    };
};




// create a function to save the text in case of refresh
$(".saveBtn").click(function (e) {
    e.preventDefault()
    const row = $(this).siblings(".time-block").value;
    const time = $(this).parent().attr('id')[1]
    localStorage.setItem(time, row)
})

