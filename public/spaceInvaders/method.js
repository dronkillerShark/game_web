let alienX = 700;
let alienY = 0;
let isForwardY = false;
let changeX = 10;
let score = 0;

const isCollide = function(obj1, obj2){
    return obj1.getBoundingClientRect().x < obj2.getBoundingClientRect().x + obj2.getBoundingClientRect().width &&
        obj1.getBoundingClientRect().x + obj1.getBoundingClientRect().width > obj2.getBoundingClientRect().x &&
        obj1.getBoundingClientRect().y < obj2.getBoundingClientRect().y + obj2.getBoundingClientRect().height &&
        obj1.getBoundingClientRect().height + obj1.getBoundingClientRect().y > obj2.getBoundingClientRect().y;
}

const stop = function(Interval, laserShoot, y, x2){
    laserShoot.style.top = y + "px";
    laserShoot.style.left = x2 + "px";
    clearInterval(Interval);
}

const moveAlien = function(alien, spaceShip, laserShoot, setShooting, y, x2, x, shootInterval, sc){
    alienX = 700;
    alienY = 0;
    const alienInterval = setInterval(() =>{
        if(isCollide(spaceShip, alien)){
            kill(alien);
            kill(spaceShip);
            laserShoot.classList.add("hidden");
            clearInterval(alienInterval);
        }
        if(isCollide(laserShoot, alien)){
            setShooting(false);
            y = 400 + 60;
            x2 = x + 70;
            kill(alien);
            score += 1;
            sc.textContent = `score: ${score}`;
            setTimeout(() => {
                alien.src = "img/alien.png";
                changeX = changeX > 0? changeX + 3:changeX - 3;
                moveAlien(alien, spaceShip, laserShoot, setShooting, y, x2, x, shootInterval, sc);
                alien.classList.remove("hidden");
                clearInterval(alienInterval);
            }, 1000)
            stop(shootInterval, laserShoot, y, x2);
        }

        if(alienX >= 1320 && !isForwardY){
            isForwardY = true;
            alienY += 20;
            alien.style.top = alienY + "px";
            changeX = -changeX;
        }
        if(alienX <= 20 && isForwardY){
            isForwardY = false;
            alienY += 20;
            alien.style.top = alienY + "px";
            changeX = Math.abs(changeX);
        }

        alienX += changeX;
        alien.style.left = alienX + "px";
    }, 100);
    return alienInterval;
}

const kill = function(obj){
    obj.src = "img/explosion.png";
    setTimeout(() => {
        obj.classList.add("hidden");
    }, 250);
}

export{isCollide, stop, kill, moveAlien};