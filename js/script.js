let aside = document.querySelector("aside");
let asideStyle = window.getComputedStyle(aside);
let asideBgColor = asideStyle.getPropertyValue("background-color")
// aside.style.setProperty("background-color", "black");
console.log(asideBgColor);


window.addEventListener("scroll", function(){
    console.log(window.scrollY)
    if(this.window.scrollY > 430 && this.window.scrollY < 950){
        aside.style.setProperty("background-color", "white")
    }else{
        aside.style.setProperty("background-color", asideBgColor)
    }
})