const container = document.querySelector("#container");
const fillButton = document.querySelector("#fill-button");


function fillContainer(squareSize) {

    let squareSizeString = (960/squareSize)+"px"; // 16 squares

    for(let i = 0; i < squareSize**2; i++) {
        const div = document.createElement("div");
        div.style.width = squareSizeString;
        div.style.height = squareSizeString;
        div.style.backgroundColor = "black";


        div.addEventListener
        
        ("mouseover", function() {
            const rand1 = Math.floor(Math.random()*256);
            const rand2 = Math.floor(Math.random()*256);
            const rand3 = Math.floor(Math.random()*256);

            
            div.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
        }, {once:true})
        
        container.appendChild(div);
    }
}

fillButton.addEventListener("click", function() {
    arr = Array.from(document.querySelectorAll("#container div"));
    for(const item of arr) {
        container.removeChild(item);
    }

    let newSquareSize = +prompt("Enter square size");
    while(newSquareSize < 1 || newSquareSize > 100){
        newSquareSize = +prompt("Enter square size");
    }
    fillContainer(newSquareSize);



})

fillContainer(100);

