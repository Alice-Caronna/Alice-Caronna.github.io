let aside = document.querySelector("aside");
let asideStyle = window.getComputedStyle(aside);
let asideBgColor = asideStyle.getPropertyValue("background-color")

let mediaQuery = window.matchMedia("(max-width: 1100px)");


console.log(mediaQuery)


function colorOnMobile(mediaQuery){
  if(mediaQuery.matches){
    if(this.window.scrollY > 480){
      aside.style.setProperty("background-color", "white");
  }else {
    aside.style.setProperty("background-color", asideBgColor);

  }
  }
}



 colorOnMobile(mediaQuery);



window.addEventListener("scroll", function(){
  colorOnMobile(mediaQuery);
})


// let touchstartX = 0
// let touchendX = 0
    
// function checkDirection() {
//   if (touchendX < touchstartX) {
//     aside.style.setProperty("background-color", "red");

//   }
//   if (touchendX > touchstartX){
//     aside.style.setProperty("background-color", asideBgColor);
//   }
// }

// document.addEventListener('touchstart', e => {
//   touchstartX = e.changedTouches[0].screenX
// })

// document.addEventListener('touchend', e => {
//   touchendX = e.changedTouches[0].screenX
//   checkDirection()
// })