let mealNum = document.querySelector(".num");
let cardOrder = document.querySelector(".card-order");
let cardItem = document.querySelector(".card-item");
let badge = document.querySelector(".badge");
let carShop = document.querySelector("#car_shopping");

let shoppingBag = [];
// localStorage.clear();
if (localStorage.getItem("shopping-bag")) {
  shoppingBag = JSON.parse(localStorage.getItem("shopping-bag"));
}

let cnt = shoppingBag.length;
badge.innerHTML = cnt;

let meals = {
  appetizers: [
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
      name: "Hot Dog",
      Contains: "Shrimp , Slices of toast, coconut",
      price: 35,
      image: "../image/download (3).jpg",
    },
  ],
  salads: [
    {
      id: 4,
      name: "Green Salad",
      Contains: "lettuce, parsley, chopped basil, oil, basil.",
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
      Contains: "lettuce, parsley, chopped basil, tomatoes, basil.",
      price: 15,
      image: "../image/Spring-Mix-Salad-Recipe (1).jpg",
    },
  ],
  beverages: [
    {
      id: 7,
      name: "Smoked Burger",
      Contains: "Bread, minced meat, Quebec , Cheddar.",
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
  deserts: [
    {
      id: 10,
      name: "Apple Pie",
      Contains: "apple , Butter, flour, egg, sugar,lemon juice.",
      price: 70,
      image: "../image/apple pie.jpg",
    },
    {
      id: 11,
      name: "Custer",
      Contains: "apple , Butter, flour, egg, sugar, lemon juice.",
      price: 50,
      image: "../image/custer.jpg",
    },
    {
      id: 12,
      name: "Ice Cream",
      Contains: "apple , Butter, flour, egg, sugar, lemon juice",
      price: 40,
      image: "../image/icecream.jpg",
    },
  ],
};

function addToCardObj(id) {
  cnt++;
  badge.innerHTML = cnt;

  let bagObj;
  let mealUI = Object.keys(meals).map((key) => {
    return meals[key];
  });
  mealUI.forEach((meal) => {
    let itemProduct = meal.find((item) => item.id === id);
    if (itemProduct !== undefined) {
      bagObj = { ...itemProduct, count: 1 };
    }
  });
  shoppingItem = bagObj;
  let exit = shoppingBag.find((el) => el.id == id);
  if (exit) {
    shoppingBag.map((bagItem) =>
      bagItem.id == id ? bagItem.count++ : bagItem.count
    );
  } else {
    shoppingBag.push(shoppingItem);
  }
  localStorage.setItem("shopping-bag", JSON.stringify(shoppingBag));
  updateProducts();
}

let products = [];

function updateProducts() {
  cardItem.innerHTML = "";
  if (localStorage.getItem("shopping-bag") != null) {
    products = JSON.parse(localStorage.getItem("shopping-bag"));
    products.forEach((product) => {
      cardItem.innerHTML += `
          <div class ="mt-2">
          <h5 style="color:#fff">${product.name}</h5>
          </div>
          `;
    });
  }
}

updateProducts();

let bookBtn = document.querySelector(".btn_cardorder");
bookBtn.addEventListener("click", () => {
  location.href = "shoppingBag.html";
});

carShop.addEventListener("click", () => {
  cardOrder.classList.toggle("active");
});

/// ============= meals buttons ==============

let allBtns = document.querySelectorAll(".menu_card .btn");

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let arr = document.querySelectorAll(`.${btn.id}`);
    document.querySelectorAll(".menu_card_1").forEach((div) => {
      div.style.display = "none";
      div.parentElement.style.display = "none";
    });
    arr.forEach((div) => {
      div.parentElement.style.display = "flex";
      div.style.display = "flex";
    });
  });
});

if (document.querySelector("#menu")) {
  let productItem = document.querySelector("#product");
  function drawProductsUI() {
    Object.keys(meals).map((meal) => {
      meals[meal].map((melEl) => {
        productItem.innerHTML += `
      <div class="col-lg-4 col-md-6 pt-5">
            <div class="card ${meal} all menu_card_1 p-1 ">
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
                <button id="bot" type="submit" onclick="addToCardObj(${melEl.id})" >
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
}
