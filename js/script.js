let aside = document.querySelector("aside");
let asideStyle = window.getComputedStyle(aside);
let asideBgColor = asideStyle.getPropertyValue("background-color")

let mediaQuery = window.matchMedia("(max-width: 1100px)");


console.log(mediaQuery)


function colorOnMobile(mediaQuery){
  if(mediaQuery.matches){
    if(this.window.scrollY > 480 && this.window.scrollY < 1250){
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

let ciao = "ciao"