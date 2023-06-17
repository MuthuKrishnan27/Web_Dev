// id
// : 
// 1
// imgSrc
// : 
// "https://source.unsplash.com/random/1920x1080/?cheeseburger"
// name
// : 
// "Cheeseburger"
// price
// : 
// 5.99
// [[Prototype]]
// : 
// Object

let selectedItems = [];
let totalPrice = 0;
let checkmark;

//Get Menu
function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        // Display food items to the user
        console.log("1. Get Menu !");
        const menuContainer = document.getElementById('menu');
        data.forEach(food => {
          const menuItem = createMenuItem(food);
          menuContainer.appendChild(menuItem);
        });
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching menu:', error);
      });
  }
  
  // Render Menu Items
  function createMenuItem(food) {
    let checkmarkCount = 0;
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
  
    const foodImage = document.createElement('img');
    foodImage.src = food.imgSrc;
    foodImage.alt = food.name;
    menuItem.appendChild(foodImage);
  
    const foodName = document.createElement('h3');
    foodName.textContent = food.name;
    menuItem.appendChild(foodName);
  
    const foodPrice = document.createElement('p');
    foodPrice.textContent = `$${food.price}`;
    menuItem.appendChild(foodPrice);
  
    menuItem.addEventListener('click', () => {
        if (selectedItems.length < 3) {
            if(checkmarkCount===0){
                checkmark = document.createElement("img");
                checkmark.src="./Check-Mark/check-mark.png";
                checkmark.alt = "Checkmark";
                checkmark.id="checkmark";
                menuItem.append(checkmark);
                checkmarkCount++;
            }
          menuItem.classList.toggle('selected');
          if (menuItem.classList.contains('selected')) {
            selectedItems.push(food);
          } else {
            selectedItems = selectedItems.filter(item => item !== food);
          }
        }
      }); 
    return menuItem;
  }
 
  //Take Order function 
  function TakeOrder() {
    console.log("2. Order Taken");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(selectedItems.slice(0, 3));
      }, 2500);
    });
  }
  
  //Order Preparation
  function orderPrep() {
    console.log("3. Food is under preparation");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  //Pay Order
  function payOrder() {
    console.log("4. Onto Payment process");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
      for(let i=0;i<selectedItems.length;i++){
        totalPrice+=selectedItems[i].price;
      }
      console.log("Total Price: $",totalPrice);
    });
  }
  
  //Thank You
  function thankyouFnc() {
    console.log("5. Payment done")
    alert('Thank you for eating with us today!');

    // Removing selected items 
    const menuItems = document.getElementsByClassName('menu-item');
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      const checkmark = menuItem.querySelector('#checkmark');
      if (checkmark) {
        menuItem.removeChild(checkmark);
      }
      menuItem.classList.remove('selected');
    }
    
    selectedItems = [];
    totalPrice = 0;
  }
  
//   Take Order 
  document.getElementById('take-order-btn').addEventListener('click', () => {
    TakeOrder()
      .then(order => {
        console.log('Selected Items:', order);
        // return orderPrep();
        if(selectedItems.length===0){
            console.log("Total Price: $",totalPrice);  
             alert("You have not selected any food items. Please visit us again. Thank You!! ")
             return;
        }
        return restaurantProcess();
      });
  });


  let menu = document.getElementById('get-menu');
//   getMenu();
  menu.addEventListener('click',getMenu);

  // Run the restaurant process
  async function restaurantProcess() {
    try {
      const prepStatus = await orderPrep();
      console.log('Preparation Status:', prepStatus);
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
      thankyouFnc();
    } catch (error) {
      console.error('Error in restaurant process:', error);
    }
  }
  

  