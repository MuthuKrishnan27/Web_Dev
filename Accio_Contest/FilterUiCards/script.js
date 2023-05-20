let arr = [
    {
        id:1,
        name:"john",
        age:"18",
        profession:"developer"
    },
    {
        id:2,
        name:"jack",
        age:"20",
        profession:"developer"
    },
    {
        id:3,
        name:"karen",
        age:"19",
        profession:"admin"
    },
];


const user_container = document.getElementById("user-container");
// let button_add = document.getElementById("adduser");
// let index = 0;
   
function renderUser(user){    
   
    const user_item = document.createElement("div");
    user_item.className = "user";
    const userid = document.createElement("div");
    // id.className="tab";
    userid.innerText = user.id;
    const username = document.createElement("div");
    // name.className="tab";
    username.innerText = `Name: ${user.name}`; 
    const userprofession = document.createElement("div");
    // profession.className="tab";
    userprofession.innerText = `Profession: ${user.profession}`;
    const userage = document.createElement("div");
    // age.className="tab";
    userage.innerText = `Age: ${user.age}`;
    
   
    user_item.append(userid);
    user_item.append(username);
    user_item.append(userprofession);
    user_item.append(userage);    

    user_container.append(user_item);
}


 // Function to filter the cards based on the selected profession
 function filterCards() {
    const profession = document.getElementById("profession").value;
    const cards = document.getElementsByClassName("user");
  
    if (profession === "") {
      alert("Please select a profession before filtering.");
      return;
    }
  
    for (let user of cards) {
      const cardProfession = user.getAttribute("data-profession");
  
      if (cardProfession !== profession) {
        user.style.display = "none";
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
  
    const new_user = {
      id: arr.length + 1,
      name: name,
      age: age,
      profession: profession
    };
  
    arr.push(new_user);
    renderUser(new_user);
  }

  // Function to initialize the UI with existing users
  function initializeUI() {
    const user_container = document.getElementById("user-container");
    user_container.innerHTML = "";
  
    for (let user of arr) {
      renderUser(user);
    }
  }
 
// Initialize the UI with existing users
initializeUI();