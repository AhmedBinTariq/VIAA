var selectedRow= null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow===null){
        insertNewRecord(formData);
    }

    else{
        updateRecord(formData);
    }
    resetForm();
}

// retrieving the data
function readFormData(){
    var formData={};
    formData["Name"] = document.getElementById("Name").value;
    formData["UserName"] = document.getElementById("UserName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Age"] = document.getElementById("Age").value; 
    return formData;
}

// inserting new record

function insertNewRecord(data){
    var table = document.getElementById("users_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Name;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.UserName;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Email;
        
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Age;
        
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button onClick="onEdit(this)"> Edit</button> <button onClick="onDelete(this)">Delete</button>';    
}


// editting the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('UserName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.UserName;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Age;
}

// Deleting the data
function onDelete(td){
    if(confirm('Are you sure you want to delete this user record?')){
        row = td.parentElement.parentElement;
        document.getElementById('users_list').deleteRow(row.rowIndex);
    }
    resetForm();
}

// reset the data

function resetForm(){
    document.getElementById('Name').value='';
    document.getElementById('UserName').value='';
    document.getElementById('Email').value='';
    document.getElementById('Age').value='';
}