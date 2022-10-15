let aside = document.querySelector("aside");
let asideStyle = window.getComputedStyle(aside);
let asideBgColor = asideStyle.getPropertyValue("background-color")
let isMobile = navigator.userAgentData.mobile;

console.log(isMobile)


window.addEventListener("scroll", function(){
    if(isMobile){
        if(this.window.scrollY > 480 && this.window.scrollY < 1450){
            aside.style.setProperty("background-color", "white")
        }else{
            aside.style.setProperty("background-color", asideBgColor)
        }
    }
})