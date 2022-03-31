var selectedRow = null

function onFormSubmit() {         //main function//
    if (validate()) {                  //checking the firstname validation//
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {             //reading the values//
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["address"] = document.getElementById("address").value;
    formData["employeeid"] = document.getElementById("employeeid").value;
    formData["designation"] = document.getElementById("designation").value;
    return formData;
}

function insertNewRecord(data) {     //inserting the values inside the cells//
    var table = document.getElementById("employeedata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.employeeid;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.designation;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>  
                       <a onClick="onDelete(this)">Delete</a>`;   //edit and delete //
}

function resetForm() {                               //reseting the form after submitting the data//
    document.getElementById("fullName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("employeeid").value = "";
    document.getElementById("designation").value = "";
    selectedRow = null;
}

function onEdit(td) {                 //edit option in form showing list//
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("address").value = selectedRow.cells[1].innerHTML;
    document.getElementById("employeeid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {                     //uodating the new record inside another table//
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.employeeid;
    selectedRow.cells[3].innerHTML = formData.designation;
}

function onDelete(td) {                   //for deleting the data and creating alert in window before delete//
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeedata").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {                 //validating the firstname given or not because it is mandatory//
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
