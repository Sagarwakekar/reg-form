    document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('userForm'); // find html id(userForm) and store in variable(form)

    const saveButton = document.getElementById('saveButton');  // same as above
    const clearButton = document.getElementById('clearButton');  // same as above
    const dataTable = document.getElementById('dataTable');    // same as above 

    saveButton.addEventListener('click', function () { // when button is clicked then 2nd parameter wiil be excuted
        const firstName = document.getElementById('firstName').value; //id value assign to the var(firstName)
        const lastName = document.getElementById('lastName').value; //same as above

        if (firstName && lastName) { // it check the firstname and last name have a value,, are not empty
            const newRow = dataTable.insertRow(-1); //insert row at the end of table
            const cell1 = newRow.insertCell(0);  //insert new cell in new row at index 0
            const cell2 = newRow.insertCell(1);  //insert new cell in row  at  index 1
            cell1.textContent = firstName;  // firstname value assign to the cell1
            cell2.textContent = lastName;  // lastname value assign to the cell2 
            form.reset();  //after the excution it clear the form
        }
    });
   clearButton.addEventListener('click', function () { //when clicked on the clearbutton,2nd parameter wiilbe excuted
        form.reset();       //inpute fields reset , reseting the iniyial states
    }); 
      });
