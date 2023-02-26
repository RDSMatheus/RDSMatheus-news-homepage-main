import initOutsideClick from "./outside-click.js";
export default function initDropdownMenu() {
  const btn = document.querySelector("[data-dropdown]");
  const eventos = ["touchstart", "click"];
  if (btn) {
    function dropdownMenu(event) {
      event.preventDefault();
      btn.classList.toggle("ativo");
      initOutsideClick(this, eventos, () => {
        this.classList.remove("ativo");
      });
    }
    eventos.forEach((evento) => btn.addEventListener(evento, dropdownMenu));
  }
}
