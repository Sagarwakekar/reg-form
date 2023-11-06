   // user.js

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const deleteButton = document.getElementById("deleteButton");
const editButton = document.getElementById("editButton");
const dataTable = document.getElementById("dataTable");

// Define an array to store user data
const users = [];

// Function to add a user to the table
function addUserToTable(user) {
  const newRow = dataTable.insertRow(dataTable.rows.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = user.firstName;
  cell2.innerHTML = user.lastName;
}

// Function to clear the input fields
function clearInputFields() {
  firstNameInput.value = "";
  lastNameInput.value = "";
}

// Event listener for the Save button
saveButton.addEventListener("click", () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  if (firstName && lastName) {
    const user = { firstName, lastName };
    users.push(user);
    addUserToTable(user);
    clearInputFields();
  }
});

// Event listener for the Clear button
clearButton.addEventListener("click", clearInputFields);

// Event listener for the Delete button
deleteButton.addEventListener("click", () => {
  const lastRow = dataTable.rows[dataTable.rows.length - 1];
  dataTable.deleteRow(dataTable.rows.length - 1);
  users.pop();
});

// Event listener for the Edit button
editButton.addEventListener("click", () => {
  const lastRow = dataTable.rows[dataTable.rows.length - 1];
  if (lastRow) {
    const cell1 = lastRow.cells[0];
    const cell2 = lastRow.cells[1];
    firstNameInput.value = cell1.textContent;
    lastNameInput.value = cell2.textContent;
    dataTable.editRow(dataTable.rows.length - 1);
    users.pop();
  }
});
