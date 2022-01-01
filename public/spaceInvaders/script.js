import {isCollide, stop, kill, moveAlien} from "./method.js";
const spaceShip = document.querySelector(".space__ship");
const laserShoot = document.querySelector(".laser__shoot");
const alien = document.querySelector(".alien");
const score = document.querySelector(".score");
let shootInterval;

let x = 700;
let isShooting = false;
let x2 = 770;
let y = 400;

const setShooting = function(val){
    isShooting = val;
}

moveAlien(alien, spaceShip, laserShoot, setShooting, y, x2, x, shootInterval, score);

window.addEventListener("keydown", (e) =>{
    if(e.code == "ArrowRight" && x <= 1320){
        x += 20;
        spaceShip.style.left = x + "px";
        if(!isShooting){
            x2 += 20;
            y = 400;
            laserShoot.style.top = y + "px";
            laserShoot.style.left = x2 + "px";
        }
    }
    if(e.code == "ArrowLeft" && x >= 20){
        x -= 20;
        spaceShip.style.left = x + "px";
        if(!isShooting){
            x2 -= 20;
            y = 400;
            laserShoot.style.top = y + "px";
            laserShoot.style.left = x2 + "px";
        }
    }
    if(e.code == "Space" && !isShooting){
        isShooting = true;
            shootInterval = setInterval(() => {
            if(y <= -100){
                isShooting = false;
                y = 400 + 60;
                x2 = x + 70;
                stop(shootInterval, laserShoot, y, x2);
            }
            y -= 70;
            laserShoot.style.top = y + "px";
        }, 100);
    }
})