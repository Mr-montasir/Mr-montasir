window.addEventListener('load' , ()=> {
    const header_menu_bars = document.querySelector('#header_menu_bars');
    const header_menu = document.querySelector('#header_menu');
    setInterval(() => {
        if (header_menu_bars) {
            header_menu_bars.onclick = function () {
                header_menu.classList.toggle('show');
                let header_menu_links = document.querySelectorAll('header .menu-bars .menu .links a');
                setTimeout(() => {
                    let linksCounter = 0 ;
                    setInterval(() => {
                        if (linksCounter <= header_menu_links.length) {
                            if (header_menu_links[linksCounter]) {
                                header_menu_links[linksCounter].classList.toggle('fade-up');
                                linksCounter++
                            } else {
                                return false;
                            }
                        }
                    }, 200); 
                }, 100);                
            }        
        }        
    }, 100);
})