function tipcalculate() {
    var x = parseFloat(document.getElementById("billamount").value);
    var y = parseFloat(document.getElementById("tippercent").value);

    var totaltip = (y / 100) * x;
    var totalamount = x + totaltip;
    document.getElementById("totalamt").innerHTML += totalamount;
    document.getElementById("calculatebutton").disabled = true;
  }

  function enableButton(){
    document.getElementById("calculatebutton").disabled = false;
  }