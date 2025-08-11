const colors = ["green", "blue", "red", "f15025", "yellow",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    console.log(document.body);
    const randomNumber = getrandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
})
getrandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}   
