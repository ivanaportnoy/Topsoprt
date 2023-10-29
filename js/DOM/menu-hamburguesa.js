export default function hamburgerMenu(ham, navMenu, hamBr1, hamBr2, hamBr3, menuLink){
    const d = document;


    d.addEventListener("click", e => {
        if(e.target.matches(ham) || e.target.matches(`${ham} *`)) {
            d.querySelector(navMenu).classList.toggle("nav-menu_visible");
            d.querySelector(hamBr1).classList.toggle("br-1_animado");
            d.querySelector(hamBr2).classList.toggle("br-2_animado");
            d.querySelector(hamBr3).classList.toggle("br-3_animado");            
        }

        if(e.target.matches(menuLink)) {
            d.querySelector(navMenu).classList.remove("nav-menu_visible");
            d.querySelector(hamBr1).classList.remove("br-1_animado");
            d.querySelector(hamBr2).classList.remove("br-2_animado");
            d.querySelector(hamBr3).classList.remove("br-3_animado");    
        }


    });
}