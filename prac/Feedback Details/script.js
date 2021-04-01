var arr = [];
function addFeedback() {
  var feedbackTextArea = document.getElementById("feedback");
  var result = document.getElementById("result");
  arr.push(feedbackTextArea.value);
  feedbackTextArea.value = "";
  result.innerHTML =
    "<h2>Feedback Details</h2>Successfully Added Feedback Details!";
}

function displayFeedback() {
  var op = "<h2>Feedback Details</h2>";
  for (var i = 0; i < arr.length; i++) {
    op = op + "Feedback " + (i + 1) + "<br>" + arr[i] + "<br>";
  }
  document.getElementById("result").innerHTML = op;
  arr = [];
}
