// current date
$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));


// create function to check current time agianst posted time
    // when the current time has passed the posted block but not the next make it red
    // when the current time has entered a new block make it grey
    // when waiting for the current time make green

// create function that makes text editable
    //when a block is clicked, the entered text will become the text shown
$(".col-10").on("click", function() {
    
})


// create a function to save the text in case of refresh
$(".saveBtn").click(function (e) {
    e.preventDefault()
    const row = $(this).siblings(".time-block").value;
    const time = $(this).parent().attr('id')[1]
    localStorage.setItem(time, row)
})

