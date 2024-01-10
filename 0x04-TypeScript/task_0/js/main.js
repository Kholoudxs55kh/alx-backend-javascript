var firstStudent = {
    firstName: "Kholoud",
    lastName: "Fattem",
    age: 27,
    location: "Egypt",
};
var secondStudent = {
    firstName: "Mahmoud",
    lastName: "Fattem",
    age: 18,
    location: "Egypt",
};
var studentsList = [firstStudent, secondStudent];
var table = document.createElement("table");
var tableBody = document.createElement("tbody");
table.appendChild(tableBody);
studentsList.forEach(function (student) {
    var tableRow = document.createElement('tr');
    var tableDataForName = document.createElement('td');
    var tableDataForLocation = document.createElement('td');
    tableDataForName.textContent = student.firstName;
    tableDataForLocation.textContent = student.location;
    tableRow.append(tableDataForName);
    tableRow.append(tableDataForLocation);
    tableBody.append(tableRow);
});
document.body.appendChild(table);
