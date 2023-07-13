var slider = document.getElementById("slider");
var counter = 0;
if(counter < 1){
    slider.classList.add("-translate-x-2/3");
    slider.classList.remove("-translate-x-3/3")
    counter = 1;
}else{
    slider.classList.add("-translate-x-3/3");
    slider.classList.remove("-translate-x-2/3");
    counter = 0;
}