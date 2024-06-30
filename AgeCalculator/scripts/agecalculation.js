function agecalculation() {
    var userinput = document.getElementById("date").value;
    var dob = new Date(userinput);
    var dobYear = dob.getFullYear();

    var todaydate = new Date();
    var currentYear = todaydate.getFullYear();

    var diffYear = currentYear - dobYear;

    document.getElementById("agenumber").innerHTML = diffYear;

}