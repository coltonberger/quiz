let data = schoolData;
console.log(data);

// GET OUTPUT FROM QUIZ
//Gather all clicked data and put into Array

function getResults() {
  console.log("BUTTON CLICKED");
  let userInput = {};
  let selected = document.querySelectorAll("input[type=radio]:checked");

  for (let i = 0; i < selected.length; i++) {
    userInput[selected[i].name] = selected[i].value;
  }
  // based on the clss size. lets get the schools.
  userInput.sizedSchools = schoolData.filter(function (data) {
    return data.size === userInput.schoolSize;
  });
  // based on location, lets get the schools.
  userInput.locatedSchools = schoolData.filter(function (data) {
    return data.location === userInput.location;
  });

  userInput.finalSchools = schoolData.filter(function (data) {
    return (
      data.location == userInput.location &&
      data.size == userInput.schoolSize &&
      data.sports == userInput.sportsInvolement);
  });
  console.log(userInput);
  // reset the results
  $("#results").empty().html("").prop("hidden", true);
  // if there's something to show, show the results
  if (userInput.finalSchools.length > 0) {
    $.each(userInput.finalSchools, function (index, data) {
      $("#results").append('<a href="' + data.link + '" class="list-group-item" target="_blank">' + data.schoolName + '</a>');
    });
    $("#results").prop("hidden", false);
  }
  return userInput;
}
