// current date
const today = function() {
        // reference https://www.codegrepper.com/code-examples/javascript/get+current+date+in+jquery+in+dd%2Fmm%2Fyyyy+format
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    // console.log(today)
    return today
};

// adds current day to dom
$("#currentDay").append(today());