let aside = document.querySelector("aside");
let asideStyle = window.getComputedStyle(aside);
let asideBgColor = asideStyle.getPropertyValue("background-color")
let isMobile = navigator.userAgentData.mobile;


console.log(asideBgColor);
console.log(isMobile)


window.addEventListener("scroll", function(){
    // console.log(window.scrollY)
    if(isMobile){
        if(this.window.scrollY > 480 && this.window.scrollY < 1450){
            aside.style.setProperty("background-color", "white")
        }else{
            aside.style.setProperty("background-color", asideBgColor)
        }
    }
})