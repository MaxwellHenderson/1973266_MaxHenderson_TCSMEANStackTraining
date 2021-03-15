//This will execute as soon as the page is loaded
(function () {
  console.log("Start");
  //Retrieve the stored budgets
  var storedBudgets = JSON.parse(sessionStorage.getItem("storedBudgets"));

  var table = document.getElementById("budgetTable");

  var body = table.getElementsByTagName("tbody")[0];

  var totalBudget = 0;

  storedBudgets.forEach((budget) => {
    budget = JSON.parse(budget);
    console.log("start loop");
    console.log(budget);
    //Add new row
    var newRow = body.insertRow(body.length);
    //Add cells to the new row
    var clientCell = newRow.insertCell(0);
    var projectCell = newRow.insertCell(1);
    var budgetCell = newRow.insertCell(2);

    //Fill cells with data
    console.log(budget.clientName);
    clientCell.innerHTML = budget.clientName;
    projectCell.innerHTML = budget.projectName;
    budgetCell.innerHTML = "$" + budget.budget;

    totalBudget += Number(budget.budget);
  });

  //Add total budget row
  var newRow = body.insertRow(body.length);
  var totalLabel = newRow.insertCell(0);
  totalLabel.innerHTML = "TOTAL BUDGET";
  var blank = newRow.insertCell(1);
  var totalValue = newRow.insertCell(2);
  totalValue.innerHTML = "$" + totalBudget;
})();
