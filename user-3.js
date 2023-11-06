document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const dataTable = document.getElementById('dataTable');

    saveButton.addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        if (firstName && lastName) {
            const newRow = dataTable.insertRow(-1);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            cell1.textContent = firstName;
            cell2.textContent = lastName;

            // Add the Delete button to the new row
            const deleteCell = newRow.insertCell(2);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                dataTable.deleteRow(newRow.rowIndex);
            });
            deleteCell.appendChild(deleteButton);

            // Add the Edit button to the new row
            const editCell = newRow.insertCell(3);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function () {
                document.getElementById('firstName').value = firstName;
                document.getElementById('lastName').value = lastName;
                dataTable.deleteRow(newRow.rowIndex);
            });
            editCell.appendChild(editButton);

            form.reset();
        }
    });

    clearButton.addEventListener('click', function () {
        form.reset();
    });
});
