window.addEventListener('load', ()=> {
    const header_menu_bars = document.querySelector('#header_menu_bars');
    const header_menu = document.querySelector('#header_menu');
    header_menu_bars.onclick = function () {
        header_menu.classList.toggle('show');
        let header_menu_links = document.querySelectorAll('header .menu-bars .menu .links a');
        setTimeout(() => {
            let linksCounter = 0 ;
            setInterval(() => {
                if (linksCounter <= header_menu_links.length) {
                    header_menu_links[linksCounter].classList.toggle('fade-up');
                    linksCounter++
                }
            }, 200); 
        }, 100);
    }

    // Image Dots Animation
    const Image_dots = document.querySelector('#image_dots');
    if (window.innerWidth > 1000) {
        window.addEventListener('mousemove', (t)=> {
            if (Image_dots) {
                let dots_y = Math.trunc(t.clientY / 50);
                let dots_x = Math.trunc(t.clientX / 20);
                console.log(t);
                if (t.clientY < 1000) {
                    Image_dots.setAttribute('style', 'transform:translateX('+ dots_x +'px) translateY('+ dots_y +'px)');            
                }                
            }
        })
    }
})