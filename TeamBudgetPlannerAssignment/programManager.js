function addFormInfo() {
  const form = document.querySelector("form");
  const data = new URLSearchParams(new FormData(form).entries());
  console.log(data);

  var budgetInfo = {
    clientName: data.get("clientName"),
    projectName: data.get("projectName"),
    budget: data.get("budget"),
  };

  var budgetString = JSON.stringify(budgetInfo);

  //Retrieve stored budgets to add new budget item
  var storedBudgets = JSON.parse(sessionStorage.getItem("storedBudgets"));

  console.log(storedBudgets);
  //If stored budgets does not exist (this is the first budget)
  //create a new array for storing the budget
  if (storedBudgets == null) {
    storedBudgets = [];
  }

  //Add current budget to the array
  storedBudgets.push(budgetString);

  //Save the storedBudgets object to session storage
  sessionStorage.setItem("storedBudgets", JSON.stringify(storedBudgets));

  //Clear form info
  form.reset();
  console.log("Form info added");
}
