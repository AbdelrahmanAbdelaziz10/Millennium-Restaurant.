
/*============= Scroll To Top ==========*/

let topBottom = document.querySelector(".top");
let index = document.querySelector("#index");
let navBar = document.querySelector(".navbar");

window.onscroll = function () {
  if (this.scrollY >= 400) {
    topBottom.classList.add("arrow");
    navBar.style.position = "fixed";
    navBar.style.behavior = "smooth";
  } else {
    topBottom.classList.remove("arrow");
  }
};

topBottom.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//<============== User Name Page ==============>
let profile = document.querySelector("#username");
let logOutDiv = document.querySelector(".logout");

if (usersM) {
  usersM.forEach((u) => {
    profile.innerHTML = u.name;
  });
}

let bool = true;
profile.addEventListener("click", () => {
  if (bool) {
    logOutDiv.style.display = "flex";
    bool = false;
  } else if (bool === false) {
    logOutDiv.style.display = "none";
    bool = true;
  }
});
