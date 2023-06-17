let users = [];
let idN = 1;

let errorCount = 0;
let successCount = 0;

let myForm = document.getElementById('userForm');

let messageContainer = document.getElementsByClassName("message-container")[0];

let messageSpan = document.createElement("span");

myForm.addEventListener('submit',addUser);

function addUser(event){
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let profession = document.getElementById('profession').value.trim();
    let age = document.getElementById('age').value.trim();
    if(name ==='' || profession==='' || age===''){
        errorCount++;
        successCount=0;
        messageSpan.id="error";
        if(errorCount<2){
            messageSpan.innerText='Error : Please make sure All the fields are filled before adding in an employee!';
        }
        messageContainer.appendChild(messageSpan);
        return;
    }
    successCount++;
    errorCount=0;
    messageSpan.id="success";
    if(successCount<2){
        messageSpan.innerText='Success Employee Added!';
        messageContainer.appendChild(messageSpan);
    }

    let new_user={
        id : idN++,
        name : name,
        profession : profession,
        age : age,
    };
    return renderUser(new_user);
}


function renderUser(new_user){
    let addedempSpan = document.getElementById("addempSpan");
    addedempSpan.style.display="none";
    users.push(new_user);
    return appendUsers();
}

function appendUsers(){
    let appenduser = document.getElementById("appenduser");
    appenduser.innerHTML='';

    for(let i=0;i<users.length;i++){
        let emp_container = document.createElement("div");
        emp_container.className="emp-container";
        
        let emp_list = document.createElement("div");
        emp_list.className="emp-list";
        
        let id = document.createElement("div");
        id.innerText=`${users[i].id}`;
        
        let nameelement = document.createElement("div");
        nameelement.innerText=`Name: ${users[i].name}`;
        
        let profelement = document.createElement("div");
        profelement.innerText=`Profession: ${users[i].profession}`;
        
        let ageelement = document.createElement("div");
        ageelement.innerText = `Age: ${users[i].age}`;
        
        emp_list.append(id);
        emp_list.append(nameelement);
        emp_list.append(profelement);
        emp_list.append(ageelement);

        let div = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-user";
        deleteButton.innerText = "Delete User";
        deleteButton.setAttribute("data-id",`${parseInt(users[i].id)}`); // Set data-id attribute with user id

        deleteButton.addEventListener('click', () => deleteUser(users[i].id));

        div.appendChild(deleteButton);
        emp_container.appendChild(emp_list);
        emp_container.appendChild(div);
        
        appenduser.appendChild(emp_container);
    }
}

function deleteUser(id) {
    users = users.filter(employee => employee.id !== id);
    appendUsers();
  }
