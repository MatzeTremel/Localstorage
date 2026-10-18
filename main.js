laden();
let firstnames = ["Mathias", "Hans", "Fritz", "Elias", "Emilia"];
let lastnames = ["Müller", "Tremel", "Stahl", "Muck", "Huber"];
let ages = [12, 40, 50, 60, 9];

function laden() {
  const firstnames = JSON.parse(localStorage.getItem("firstname")) || [];
  const lastnames = JSON.parse(localStorage.getItem("lastname")) || [];
  const ages = JSON.parse(localStorage.getItem("age")) || [];
  const liste = document.getElementById("div-main");

  liste.innerHTML = "";

  for (let i = 0; i < firstnames.length; i++) {
    liste.innerHTML += `
    <div class="div-main">
    <p>Vorname: ${firstnames[i]}</p>
    <p>Nachname: ${lastnames[i]}</p>
    <p>Alter: ${ages[i]}</p>
     <button onclick ="btnDelete(${i})">Löschen</button>
    `;
  }
}

function add() {
  const firstname = Math.floor(Math.random() * firstnames.length);
  const lastname = Math.floor(Math.random() * lastnames.length);
  const age = Math.floor(Math.random() * ages.length);

  const ladeFirstName = JSON.parse(localStorage.getItem("firstname")) || [];
  ladeFirstName.push(firstnames[firstname]);
  localStorage.setItem("firstname", JSON.stringify(ladeFirstName));

  const ladeLastName = JSON.parse(localStorage.getItem("lastname")) || [];
  ladeLastName.push(lastnames[lastname]);
  localStorage.setItem("lastname", JSON.stringify(ladeLastName));

  const ladeAge = JSON.parse(localStorage.getItem("age")) || [];
  ladeAge.push(ages[age]);
  localStorage.setItem("age", JSON.stringify(ladeAge));

  const maindiv = document.createElement("div");
  maindiv.classList.add("div-main");

  //Firstname
  const pFirstName = document.createElement("p");
  pFirstName.classList.add("p-text");
  maindiv.appendChild(pFirstName);

  const pFirstNameText = document.createTextNode(`
    Vorname: ${firstnames[firstname]}`);

  pFirstName.appendChild(pFirstNameText);

  //lastname
  const pLastName = document.createElement("p");
  pLastName.classList.add("p-text");
  maindiv.appendChild(pLastName);

  const pLastNameText = document.createTextNode(
    `Nachname: ${lastnames[lastname]} `,
  );
  pLastName.appendChild(pLastNameText);

  //age

  const pAge = document.createElement("p");
  pAge.classList.add("p-text");
  maindiv.appendChild(pAge);

  const pAgeText = document.createTextNode(
    `Alter: ${ages[age]}`
  );
  pAge.appendChild(pAgeText);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Löschen";
  maindiv.appendChild(deleteButton);

  const element = document.getElementById("div-main");
  element.appendChild(maindiv);
  laden();
}

function btnDelete(index) {
  console.log("Löschen:", index);
  const firstnames = JSON.parse(localStorage.getItem("firstname")) || [];
  const lastnames = JSON.parse(localStorage.getItem("lastname")) || [];
  const ages = JSON.parse(localStorage.getItem("age")) || [];

  firstnames.splice(index, 1);
  lastnames.splice(index, 1);
  ages.splice(index, 1);

  localStorage.setItem("firstname", JSON.stringify(firstnames));
  localStorage.setItem("lastname", JSON.stringify(lastnames));
  localStorage.setItem("age", JSON.stringify(ages));

  laden();
}
