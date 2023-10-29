import hamburgerMenu from "./DOM/menu-hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=> {
    hamburgerMenu(".ham", ".nav-menu", ".br-1", ".br-2", ".br-3", ".nav-menu a");
});