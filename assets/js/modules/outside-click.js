export default function initOutsideClick(element, eventos, callback) {
  const html = document.documentElement;
  const handleOutsideClick = (event) => {
    if (!element.contains(event.target)) {
      callback();
      eventos.forEach((events) =>
        html.removeEventListener(events, handleOutsideClick)
      );
    }
  };
  eventos.forEach((evento) =>
    html.addEventListener(evento, handleOutsideClick)
  );
}
