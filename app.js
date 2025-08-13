function toggleMode() {
  const html = document.documentElement; // <html>
  html.classList.toggle('light'); // alterna a classe light no HTML

  const img = document.querySelector('#profile img'); // pega <img> dentro de #profile

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-profile.jpg");
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg");
  }
}
