function calculateEMI() {
  var P = document.getElementById("principalAmount").value;
  var R = document.getElementById("interestRate").value;
  var N = document.getElementById("tenure").value;
  var r = parseInt(R) / 1200;
  var EMI = parseInt(P) * r * (Math.pow(1+r,parseInt(N)) / (Math.pow(1+r,parseInt(N)) - 1));
  var EMI = EMI.toFixed(2);
  document.getElementById("result").innerHTML = "EMI is Rs."+EMI;
  return false;
}
