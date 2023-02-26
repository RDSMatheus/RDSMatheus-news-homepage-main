import initOutsideClick from "./outside-click.js";
export default function initMenuMobile() {
  const menu = document.querySelector("[data-menu='abrir']");
  const container = document.querySelector("[data-menu='container']");
  const fecharMenu = document.querySelector("[data-menu='fechar']");
  const eventos = ["click", "touchstart"];
  const btn = document.querySelector("[data-dropdown-mobile]");

  function menuMobile(event) {
    event.preventDefault();
    container.classList.toggle("ativo");
  }
  
  function toggleMenuMobile(event){
    if(event.target === event.currentTarget){
      menuMobile(event);
    }
  }

  function dropdownMenu(event){
    event.preventDefault();
    this.classList.toggle("ativo");
    initOutsideClick(this, eventos, ()=>{
      this.classList.remove("ativo");
    })
  }
  eventos.forEach(userEvent => btn.addEventListener(userEvent, dropdownMenu))
  eventos.forEach((userEvent) => {
    fecharMenu.addEventListener(userEvent, menuMobile);
  });

  eventos.forEach((userEvent) => {
    menu.addEventListener(userEvent, menuMobile);
  });

  eventos.forEach((userEvent) => {
    container.addEventListener(userEvent, toggleMenuMobile);
  });
}
