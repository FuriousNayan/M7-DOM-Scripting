const parentOne = document.getElementById("parent");
const table = document.createElement("table");
const trOne = document.createElement("tr");
const trTwo = document.createElement("tr");
const trThree = document.createElement("tr");
const tdOne = document.createElement("td");
const tdTwo = document.createElement("td");
const tdThree = document.createElement("td");
const tdFour = document.createElement("td");
const tdFive = document.createElement("td");
const tdSix = document.createElement("td");
const tdSeven = document.createElement("td");
const tdEight = document.createElement("td");
const tdNine = document.createElement("td");

// First Section
parentOne.appendChild(table);
table.appendChild(trOne);
trOne.appendChild(tdOne);
trOne.appendChild(tdTwo);
trOne.appendChild(tdThree);
tdOne.innerHTML = "Car";
tdTwo.innerHTML = "Top";
tdThree.innerHTML = "Price";

// Second Section
table.appendChild(trTwo);
trTwo.appendChild(tdFour);
trTwo.appendChild(tdFive);
trTwo.appendChild(tdSix);
tdFour.innerHTML = "Chevrolet";
tdFive.innerHTML = "120 MPH";
tdSix.innerHTML = "$10,000";

// Third Section
table.appendChild(trThree);
trThree.appendChild(tdSeven);
trThree.appendChild(tdEight);
trThree.appendChild(tdNine);
tdSeven.innerHTML = "Pontiac";
tdEight.innerHTML = "120 MPH";
tdNine.innerHTML = "$20,000";

// Styling the table
table.style.border = "2px solid black"; // Black border around the table
table.style.borderCollapse = "collapse";// Borders merge for a cleaner look
table.style.width = "50%"; // Adjusts the width of the table
table.style.margin = "20px auto"; // Centers the table on the page (can rahul center a table :)? )

// Adding attributes to the table
table.setAttribute("cellpadding", "10"); // Adds padding inside table cells
table.setAttribute("cellspacing", "5"); // Adds spacing between table cells

//