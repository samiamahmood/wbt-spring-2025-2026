let form = document.getElementById("form");
let btn = document.getElementById("RegistrationForm");

let editRow = null; // edit mode track করবে

btn.onclick = function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    let errName = document.getElementById("errName");
    let errAge = document.getElementById("errAge");
    let errCourse = document.getElementById("errCourse");

    errName.innerText = "";
    errAge.innerText = "";
    errCourse.innerText = "";

    let isValid = true;

    if (name === "") {
        errName.innerText = "Name is required";
        isValid = false;
    }

    if (age === "") {
        errAge.innerText = "Age is required";
        isValid = false;
    }

    if (course === "") {
        errCourse.innerText = "Please select a course";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    btn.innerText = "Add Student";
    // Edit
    if (editRow !== null) {

        editRow.cells[0].innerText = name;
        editRow.cells[1].innerText = age;
        editRow.cells[2].innerText = course;

        editRow = null;

    } 
    else {

        let table = document.getElementById("table");

        let row = table.insertRow();

        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = age;
        row.insertCell(2).innerText = course;

        let action = row.insertCell(3);

        // Edit Button
        let edit = document.createElement("button");
        edit.innerText = "Edit";

        edit.onclick = function () {

            document.getElementById("name").value = row.cells[0].innerText;
            document.getElementById("age").value = row.cells[1].innerText;
            document.getElementById("course").value = row.cells[2].innerText;

            editRow = row;

            btn.innerText = "Update Student";
        };

        // Delete Button
        let del = document.createElement("button");
        del.innerText = "Remove";

        del.onclick = function () {
            row.remove();
        };

        action.appendChild(edit);
        action.appendChild(del);
    }

    form.reset();
};