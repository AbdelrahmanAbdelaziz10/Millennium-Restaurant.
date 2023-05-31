// ========= public variable =========== //

let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

if (document.querySelector(".register_body")) {
} else if (document.querySelector(".login_body")) {
  //<============== Log In Page ==============>
} else if (document.querySelector(".login_body")) {
} else if (document.querySelector(".home2")) {
  //<============== Home2 Page ==============>
  let profile = document.querySelector("#username");
  let logOutDiv = document.querySelector(".logout");

  if (users) {
    users.forEach((u) => {
      profile.innerHTML = u.name;
    });
  }

  let bool = true;
  profile.addEventListener("click", ()=>{
    if (bool) {
      logOutDiv.style.display="flex";
      bool = false;
    } else if (bool=== false){
      logOutDiv.style.display="none";
      bool = true;
    }
  });
} else if (document.querySelector("#menu")) {
  //<============== Menu Page ==============>
  let profile = document.querySelector("#username");

  if (users) {
    users.forEach((u) => {
      profile.innerHTML = u.name;
    });
  }
} else if (document.querySelector("#menu")) {
  let productItem = document.querySelector("#product");
  let mealNum = document.querySelector(".num");

  let meals = {
    Appetizers: [
      {
        id: 1,
        name: "Shrimp",
        Contains: "Shrimp , Slices of toast, coconut",
        price: 40,
        image: "../image/images (1).jpg",
      },
      {
        id: 2,
        name: "Potato",
        Contains: "Shrimp , Slices of toast, coconut",
        price: 30,
        image: "../image/download (2).jpg",
      },
      {
        id: 3,
        name: "Potato",
        Contains: "Shrimp , Slices of toast, coconut",
        price: 35,
        image: "../image/download (3).jpg",
      },
    ],
    salade: [
      {
        id: 4,
        name: "Green Salad",
        Contains:
          "lettuce, parsley, chopped basil, olive oil, tomatoes and basil.",
        price: 10,
        image: "../image/green-salad-recipes.jpg",
      },
      {
        id: 5,
        name: "Egg Salade",
        Contains: "Boiled eggs,lettuce, parsley, olive oil and basil.",
        price: 20,
        image: "../image/egg green-salad.jpg",
      },
      {
        id: 6,
        name: "Mixed Salade",
        Contains:
          "lettuce, parsley, chopped basil, olive oil, tomatoes and basil.",
        price: 15,
        image: "../image/Spring-Mix-Salad-Recipe (1).jpg",
      },
    ],
    Beverages: [
      {
        id: 7,
        name: "Smoked Burger",
        Contains: "Bread, minced meat, Quebec cheese, Cheddar cheese.",
        price: 100,
        image: "../image/download (4).jpg",
      },
      {
        id: 8,
        name: "fillet steak",
        Contains: "Shrimp , Slices of toast, coconut.",
        price: 140,
        image: "../image/steak.jpg",
      },
      {
        id: 9,
        name: "filet Fish",
        Contains: "fish fillet, salt, vinegar, lemon juice.",
        price: 130,
        image: "../image/11.jpg",
      },
    ],
    Deserts: [
      {
        id: 10,
        name: "Apple Pie",
        Contains:
          "apple , Butter, flour, egg, caster sugar, squeezed lemon juice.",
        price: 70,
        image: "../image/apple pie.jpg",
      },
      {
        id: 11,
        name: "Custer",
        Contains:
          "apple , Butter, flour, egg, caster sugar, squeezed lemon juice.",
        price: 50,
        image: "../image/custer.jpg",
      },
      {
        id: 12,
        name: "Ice Cream",
        Contains:
          "apple , Butter, flour, egg, caster sugar, squeezed lemon juice",
        price: 40,
        image: "../image/icecream.jpg",
      },
    ],
  };

  function drawProductsUI() {
    Object.keys(meals).map((meal) => {
      meals[meal].map((melEl) => {
        productItem.innerHTML += `
          <div class="col-lg-4 pt-5">
                <div class="card ${meal} menu_card_1 p-1 ">
                  <div class="meal_img w-50">
                    <img src="${melEl.image}" alt="" srcset="">
                  </div>
                  <div class="meal_des">
                    <h4 class="meal_name">
                      ${melEl.name} 
                      <span class="heart">
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </h4>
                    <p class="meal_contant">
                      <span>
                        Contains:
                      </span>
                      ${melEl.Contains}
                      </p>
                    <p class="meal_price">
                      <span>
                        Price: 
                      </span>
                        ${melEl.price}
                      <i class="fa-solid fa-dollar-sign"></i>
                    </p>
                    <button id="bot" type="submit" onclick="addToCard(${melEl.id})" >
                      Add Order
                    </button>
                  </div>
                </div>
              </div>
          `;
      });
    });
  }
  drawProductsUI();

  function addToCard(id) {
    var mealUI = Object.keys(meals).map((key) => {
      return meals[key];
    });
    for (let i = 0; i < mealUI.length; i++) {
      if (mealUI[i].find((item) => item.id === id) !== undefined) {
        console.log(mealUI[i].find((item) => item.id === id));
      }
    }
    /*    if(id>0 && id<=3){
      console.log(mealUI[0][id-1]);
    } else if(id>=4 && id <=6){
      console.log(mealUI[1][id-4]);
    } else if(id>=7 && id<=9){
      console.log(mealUI[2][id-7]);
    } else if (id>=10 && id <= 12){
      console.log(mealUI[3][id-10]);
    } */

    // mealNum.Style.display="block";
  }

  // Object.values(meal).map()
}

// add to local
function addToLocal(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
