const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener('keydown', function(event){
    jump()
})

function jump() {
    if (dino.classList != "jumo") {
        dino.classList.add("jump");        
    }
    setTimeout( function() {
        dino.classList.remove("jump")        
    }, 300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(dinoTop);
    console.log(cactusLeft);

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 330) {
        alert('Game Over');
    }
}, 10)



