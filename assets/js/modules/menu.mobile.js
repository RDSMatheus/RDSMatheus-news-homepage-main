export default function initMenuMobile() {
  const menu = document.querySelector("[data-menu='abrir']");
  const container = document.querySelector("[data-menu='container']");
  const fecharMenu = document.querySelector("[data-menu='fechar']");
  const eventos = ["click", "touchstart"];

  function menuMobile(event) {
    event.preventDefault();
    container.classList.toggle("ativo");
  }

  function toggleMenuMobile(event){
    if(event.target === event.currentTarget){
      menuMobile(event);
    }
  }

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
