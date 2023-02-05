window.addEventListener('load', ()=> {
    // Image Dots Animation
    const Image_dots = document.querySelector('#image_dots');
    if (window.innerWidth > 1000) {
        window.addEventListener('mousemove', (t)=> {
            if (Image_dots) {
                let dots_y = Math.trunc(t.clientY / 50);
                let dots_x = Math.trunc(t.clientX / 20);
                if (t.clientY < 1000) {
                    Image_dots.setAttribute('style', 'transform:translateX('+ dots_x +'px) translateY('+ dots_y +'px)');            
                }                
            }
        })
    }
})
