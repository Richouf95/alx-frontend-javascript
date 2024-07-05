export default interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1 = {
  firstName: "Wouri Chouf",
  lastName: "Abdoulaye",
  age: 29,
  location: "Koira Kano",
};

const s2 = {
  firstName: "Soumaila",
  lastName: "Oumarou",
  age: 27,
  location: "Riyad",
};

const studentsList: Student[] = [s1, s2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

const table: HTMLTableElement = document.createElement("table");

const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

const rowHead: HTMLTableRowElement = thead.insertRow(0);

rowHead.insertCell(0).innerHTML = "firstName";
rowHead.insertCell(1).innerHTML = "location";

table.append(thead);

studentsList.forEach(s => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  row.insertCell(0).innerHTML = s.firstName;
  row.insertCell(1).innerHTML = s.location;
});

table.append(tbody);
body.append(table);
