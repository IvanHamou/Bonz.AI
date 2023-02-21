const roomImg = document.querySelectorAll(".room article:nth-child(1)")
const biggerImgArticle = document.querySelector(".biggerImg article")
const biggerImgBtn = document.querySelector(".biggerImg button")
const main = document.querySelector("main")
const header = document.querySelector("header")

//SEARCH
function searchFilter() {
  const rooms = document.querySelectorAll('.room')
  let input = document.querySelector(".search").value;
  
  for (var i = 0; i < rooms.length; i++) {
      if(rooms[i].innerText.toLowerCase()
        .includes(input.toLowerCase())) {
          rooms[i].classList.remove("is-hidden");
      } else {
        rooms[i].classList.add("is-hidden");
      }
    }
  }

  let noti = document.querySelector(".noti")
counter = 0
const buttons = document.querySelectorAll(".room button")

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i]
  button.addEventListener("click", () =>{
      counter++
      noti.textContent = counter
      console.log(noti);
      if (counter > 0) {
        noti.style.display = "flex"
      }
    })     
}


//VIEW IMAGE

let clicked = false
let headerclicked = false

roomImg.forEach(img => {

  
  function closePic() {
    console.log("jdsndjsn");
    main.style.opacity = "100%"
    header.style.opacity = "100%"
    biggerImgArticle.style.display = "none"
    biggerImgBtn.style.display = "none"
  }
  
  function openPic() {
    biggerImgArticle.innerHTML = img.innerHTML
    main.style.opacity = "35%"
    header.style.opacity = "35%"
    biggerImgArticle.style.display = "block"
    biggerImgBtn.style.display = "block"
  }

  
  
  img.addEventListener("click", dotheThing)
  
  if(window.innerWidth < 1230) {
    img.removeEventListener("click", dotheThing)
  }
  
  function dotheThing() {
    clicked = true
    openPic()
    
    header.addEventListener("click", () => {
      headerclicked = true
      closePic()
    })
  }
  
  if (headerclicked == true) {
    closePic()
  }
  
  biggerImgBtn.addEventListener("click", () => {
    main.style.opacity = "100%"
    header.style.opacity = "100%"
    biggerImgArticle.style.display = "none"
    biggerImgBtn.style.display = "none"
  })
});


//BOOKING PRICES

let price = document.querySelector(".priceNbook h4")
const guests = document.querySelectorAll("select")

guests.forEach(guest => {
  console.log(guest.value);
  guest.addEventListener("change", () => {
    let totalPrice = guest.value * 400
    price.innerText = totalPrice + "kr"
  })
});


