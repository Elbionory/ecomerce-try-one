const hiddenBoxes = document.querySelectorAll(".fe-box");
const hiddenProducts=document.querySelectorAll(".pro");
const btnUp=document.querySelector(".moveUp");
const bar=document.querySelector("#bar");
const close=document.querySelector(".close");
const navBar=document.querySelector(".nav_bar");
bar.addEventListener("click",()=>{
navBar.classList.add("active");
})
close.addEventListener("click",()=>{
navBar.classList.remove("active");
})
window.onscroll=()=>{
    console.log(window.scrollY)
    window.scrollY>=400?btnUp.classList.add("visible"):btnUp.classList.remove("visible")
    
}
btnUp.addEventListener("click",()=>{
    window.scrollTo({
        top:0
    })
})
window.addEventListener('scroll', () => {
    const triggerBound = 500;
    
    hiddenBoxes.forEach((box) => {
        const top = box.getBoundingClientRect().top;
        if (top <= triggerBound) {
          
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
    hiddenProducts.forEach((pro)=>{
      const top=pro.getBoundingClientRect().top;
      console.log(top);
      top<=280?pro.classList.add('appear'):pro.classList.remove('appear');
    })
});
