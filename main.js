const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("sub")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
    
})

const setColor = () => {
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }else if (count.innerHTML < 0) {
    count.style.color = "#940";
    }
    else {
    count.style.color = "white";
    }
}
