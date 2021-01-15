window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    const btn = document.querySelector('button'),
        block = document.getElementsByClassName('block')[0],
        blockName = document.getElementsByClassName('block__name')[0],
        blockSearchImg = document.getElementsByClassName('block__search-img')[0],
        lines = document.getElementsByClassName('block__line'),
        field = document.getElementsByClassName('block__field')[0];

    let count = 1;

    btn.addEventListener('click', ()=> {
        count++;
        const dir = [
            {elem: block, class: 'block__animated'},
            {elem: field, class: 'block__field__animated'},
            {elem: blockName, class: 'block__name__animated'},
            {elem: blockSearchImg, class: 'block__search-img__animated'},
            {elem: lines[1], class: 'block__line-right__animated'}
        ];
        const appear = {
            elem: blockName,
            class: "block__name__animated-2-back",
            value: "Каталог"
        };
        const back = [
            {elem: block, class: 'block__animated-back'},
            {elem: field, class: 'block__field__animated-back'},
            {elem: blockName, class: 'block__name__animated-back'},
            {elem: blockSearchImg, class: 'block__search-img__animated-back'},
            {elem: lines[1], class: 'block__line-right__animated-back'}
        ];
        const disappear = {
            elem: blockName,
            class: "block__name__animated-2",
            value: "Найти"
        };

        if(count % 2 == 0) {
            for(let i = 0; i < 5; i++) {
                dir[i].elem.classList.add(dir[i].class);
                back[i].elem.classList.remove(back[i].class);

                setTimeout(() => {
                    disappear.elem.classList.add(disappear.class);
                    disappear.elem.textContent = disappear.value;
                }, 250);
            }

            appear.elem.classList.remove(appear.class);
        } else {
            field.value = ''; 

            for(let i = 0; i < 5; i++) {
                if(back[i].elem == blockName) {
                    appear.elem.classList.add(appear.class);
                    appear.elem.textContent = appear.value;
                    setTimeout(() => {
                        dir[i].classList.add(dir[i].class);
                    }, 500);
                } else {
                    back[i].elem.classList.add(back[i].class);
                }
                
                dir[i].elem.classList.remove(dir[i].class);
            }
            disappear.elem.classList.remove(disappear.class);
        }
    })
});
