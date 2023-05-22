let users = [
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

let select = document.getElementsByTagName("select")[0];
let container = document.getElementById("container");

function filterData(profession){
  if(profession===""){
    return users;
  }
  let usersList = users.filter((user)=>{
    return user.profession === profession;
  })
  return usersList;
}

function addNewUser(){
    let name = document.getElementById("name").value.trim();
    let profession = document.getElementById("profession").value.trim();
    let age = document.getElementById("age").value.trim();
  
    if(name!=="" && profession!=="" && age!==""){
      let newUser = {
        id: users[users.length-1].id+1,
        name: name,
        age: age,
        profession: profession,
      }
      users.push(newUser);
      filterUsers();
    } 
    else{
      alert("All fields are required");
    }
}

function filterUsers(){
    let selectedValue = select.value;
    let filteredUsers = filterData(selectedValue);
    container.innerHTML='';
    appendusers(filteredUsers);
}

function appendusers(userlist){
  /*
        <div class="user">
          <div>1</div>
          <div>Name: John</div>
          <div>Profession: Developer</div>
          <div>Age: 22</div>
        </div>
  */
  for(let i=0;i<userlist.length;i++){
    let usercard = document.createElement("div");
    usercard.className = "user";
    let idelement = document.createElement("div");
    idelement.innerText = userlist[i].id;
    let nameelement = document.createElement("div");
    nameelement.innerText = `Name: ${userlist[i].name}`;
    let professionelement = document.createElement("div");
    professionelement.innerText = `Profession: ${userlist[i].profession}`;
    let ageelement = document.createElement("div");
    ageelement.innerText = `Age: ${userlist[i].age}`;

    usercard.append(idelement);
    usercard.append(nameelement);
    usercard.append(professionelement);
    usercard.append(ageelement);

    container.append(usercard);
  }
}