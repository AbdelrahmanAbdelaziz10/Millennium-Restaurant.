let success = document.querySelector(".success");
let stop =document.querySelector(".allart");
let Name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let personId = document.querySelector("#person")
let timeBooking = document.querySelector("#date");
let tableNum = document.querySelector("#tablenumber");
let booking = document.querySelector("#Booking");



let bookingPlace={
    name:Name.value,
    phone:phone.value,
    person:personId.value,
    time:timeBooking.value,
    table:tableNum.value,
};

localStorage.setItem("tablenum", tableNum.value) ;
localStorage.setItem("tabletime", timeBooking.value);

booking.addEventListener("click",()=>{
    if (Name.value !== "" && phone.value !== "" && personId.value !==""
 && timeBooking.value !== "" && tableNum.value !== "" ) {
    stop.style.display="none";
    success.style.display="block";
    window.location.href="../pages/home2.html"
    setTimeout(()=>{
    }, 6000000)
} else if (Name.value === "" || phone.value === "" || personId.value ==="" || 
timeBooking.value === "" || tableNum.value === "" ) {
    stop.style.display="block";
}
});