const app = function(){
let isD = false;
document.querySelector(".start").style.display = "none";
let con = 300;
let scc = 0;
let isH = true;
const nummy = document.querySelector('.sc');
const c = document.querySelector(".cvs");
const ctx = c.getContext("2d");
ctx.beginPath();

const enemy = function(con){
    ctx.fillRect(x, y2, 20, 20);
    y2 = Math.trunc(Math.random() * 301 + 35);
    x = 300;
    isH = true;
    con = con;
    const conny = setInterval(() => {
            x += 20;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillRect(900, y, 20, 100);
            ctx.fillRect(x, y2, 20, 20);
            if(x >= 1000){
            ctx.clearRect(0, 0, c.width, c.height);
            document.querySelector(".start").style.display = "";
            nummy.textContent = `you losed! your score is ${scc}`;
            isD = true;
            }
            if(x >= 900 && x <= 920){
                if(y2 >= y && y2 <= y + 100){
                    ctx.clearRect(0, 0, c.width, c.height);
                    ctx.fillRect(900, y, 20, 100);
                    isH = false;
                    scc += 1;
                    nummy.textContent = `score: ${scc}`
                    enemy(con - 3);
                    clearInterval(conny);
                }
            }
        }, con)
    }
let x = 300;
let y2 = Math.trunc(Math.random() * 401 + 10);
enemy(100);
let y = 200;
ctx.fillRect(900, y, 20, 100);
ctx.stroke();

window.addEventListener("keydown", (e) =>{
    if(e.key == "ArrowUp" && !isD){
        if(!(y <= 50)){
            y -= ((80 - con) + 280);
        }
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillRect(900, y, 20, 100);
        if(isH)ctx.fillRect(x, y2, 20, 20);
    }
    if(e.key == "ArrowDown" && !isD){
        if(!(y >= 300)){
            y += ((80 - con) + 280);
        }
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillRect(900, y, 20, 100);
        if(isH)ctx.fillRect(x, y2, 20, 20);
    }
})
}
app();