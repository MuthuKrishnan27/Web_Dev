// Existing user array
let users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];
  
  // Function to filter the cards based on the selected profession
  function filterCards() {
    const profession = document.getElementById("profession").value;
    const cards = document.getElementsByClassName("card");
  
    if (profession === "") {
      alert("Please select a profession before filtering.");
      return;
    }
  
    for (let card of cards) {
      const cardProfession = card.getAttribute("data-profession");
  
      if (cardProfession === profession) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  }
  
  // Function to add a user to the list
  function addUser() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("professionInput").value;
    const age = document.getElementById("age").value;
  
    if (name === "" || profession === "" || age === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
    const user = {
      id: users.length + 1,
      name: name,
      age: age,
      profession: profession
    };
  
    users.push(user);
    renderUser(user);
  }
  
  // Function to render a user in the UI
  function renderUser(user) {
    const userList = document.getElementById("userList");
    const userCard = document.createElement("div");
    userCard.className = "card";
    userCard.setAttribute("data-profession", user.profession);
  
    const userId = document.createElement("p");
    userId.textContent = `ID: ${user.id}`;
  
    const userName = document.createElement("p");
    userName.textContent = `Name: ${user.name}`;
  
    const userProfession = document.createElement("p");
    userProfession.textContent = `Profession: ${user.profession}`;
  
    const userAge = document.createElement("p");
    userAge.textContent = `Age: ${user.age}`;
  
    userCard.appendChild(userId);
    userCard.appendChild(userName);
    userCard.appendChild(userProfession);
    userCard.appendChild(userAge);
  
    userList.appendChild(userCard);
  }
  
  // Function to initialize the UI with existing users
  function initializeUI() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
  
    for (let user of users) {
      renderUser(user);
    }
  }
  
  // Event listener for the filter button
  document.getElementById("filterBtn").addEventListener("click", filterCards);
  
  // Event listener for the add button
  document.getElementById("addBtn").addEventListener("click", addUser);
  
  // Initialize the UI with existing users
  initializeUI();
  