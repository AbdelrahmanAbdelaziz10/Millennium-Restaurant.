// shopping bag

let bagTableBody = document.querySelector(".shopping-main tbody");
let totalElement = document.querySelector(".total .total-price");
let checkoutBtn = document.querySelector(".total .checkout");

let total = 0;

let shoppingProducts = localStorage.getItem("shopping-bag")
  ? JSON.parse(localStorage.getItem("shopping-bag"))
  : [];
shoppingProducts.forEach((product) => {
  bagTableBody.innerHTML += `
        <tr id="${product.id}">
            <td>
                <div class="icon-x" onclick="removeEl(${product.id})">
                    <i class="fa-solid fa-x"></i>
                </div>
            </td>
            <td>
                <div class="img">
                    <img src="${product.image}" alt="">
                </div>
            </td>
            <td>
                <h5>${product.name}</h5>
            </td>
            <td>
                <div class="counter d-flex">
                    <button class="btn plus" onclick="plus(${
                      product.id
                    })">+</button>
                    <input type="number" value="${
                      product.count
                    }" min="1" max="100" data-idx="${product.id}">
                    <button class="btn min" onclick="minus(${
                      product.id
                    })">-</button>
                </div>
            </td>
            <td>
                <p class="price text-black-50 price-${product.id}" >${
    product.price * product.count
  }</p>
            </td>
        </tr>
        `;
});

let data = [];
if (localStorage.getItem("shopping-bag") != null) {
  data = JSON.parse(localStorage.getItem("shopping-bag"));
}
function removeEl(id) {
  data = data.filter((el) => el.id != id);
  document.getElementById(`${id}`).remove();
  localStorage.setItem("shopping-bag", JSON.stringify(data));
}
function plus(id) {
  data.filter((el, idx) => {
    if (el.id == id) {
      el.count++;
      let input = document.querySelector(`[data-idx="${id}"]`);
      input.value = el.count;
      calcPrice(id, el.count, el.price, idx);
      data[idx].count = el.count;
    }
    countTotal(data);
  });
}
function minus(id) {
  data.filter((el, idx) => {
    if (el.id == id) {
      if (el.count <= 1) {
        el.count = 1;
      } else {
        el.count--;
      }
      let input = document.querySelector(`[data-idx="${id}"]`);
      input.value = el.count;
      calcPrice(id, el.count, el.price, idx);
      data[idx].count = el.count;
    }
    countTotal(data);
  });
}

function calcPrice(id, count, oldPrice, idx) {
  let price = document.querySelector(`.price-${id}`);
  price.innerHTML = oldPrice * count;
}

countTotal(data);
function countTotal(shoppingBag) {
  total = 0;
  if (shoppingBag.length > 0) {
    shoppingBag.forEach((el) => {
      total += el.price * el.count;
      totalElement.innerHTML = `$${total.toFixed(2)}`;
    });
  } else {
    totalElement.innerHTML = `$0`;
  }
}

checkoutBtn.addEventListener("click", () => {
  bagTableBody.innerHTML = "";
  localStorage.removeItem("shopping-bag");
  totalElement.innerHTML = `$0`;
  badge.innerHTML = `0`;
});
