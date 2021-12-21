const btn = document.querySelector('.sh');
            let con = 0;
            const cl = document.querySelector('.d1d');
            const score = document.querySelector('.sc');
            
            const randomColorGen = function(){
                return `rgb(${Math.trunc(Math.random() * 255 + 1)}, ${Math.trunc(Math.random() * 255 + 1)}, ${Math.trunc(Math.random() * 255 + 1)})`
            };
            
            const app = function(classN){
            const circle = document.querySelector(`.${classN}`);
            setTimeout(() => {
                circle.remove();
                const msg = `
                your score is: ${con}
                `;
                score.textContent = msg;
                btn.classList.remove('hidden');
                }, 1000);
            circle.addEventListener('click', ()=>{
                con += 1;
                document.querySelector(`.d${Math.trunc(Math.random() * 16 + 1).toString()}d`).insertAdjacentHTML('afterbegin', 
                `<circle cx="250" cy="100" r="50" fill="${randomColorGen()}" class="cir${con}"/>`);
                app(`cir${con}`);
                circle.remove();
            });
            };
            
            btn.addEventListener('click', ()=>{
                con = 0;
                const html = `<circle cx="250" cy="100" r="50" fill="${randomColorGen()}" class="cir"/>`;
                cl.insertAdjacentHTML('afterbegin', html);
                btn.classList.toggle('hidden');
                app('cir');
            });
