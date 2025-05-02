document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'rgb(255, 255, 255)'; 
  } 
  else {
    nav.style.backgroundColor = 'transparent';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

  dropdownSubmenus.forEach(function(submenuItem) {
    const submenu = submenuItem.querySelector('.submenu');
    const link = submenuItem.querySelector('a');

    if (submenu && link) {
      link.addEventListener('mouseenter', function() {
        submenu.style.display = 'block';
      });

      submenuItem.addEventListener('mouseleave', function() {
        submenu.style.display = 'none';
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const nav = document.querySelector('.nav');
  const dropdownContents = document.querySelectorAll('.dropdown-content');
  const submenus = document.querySelectorAll('.submenu');
  const sobreSection = document.getElementById('sobre');
  const infoSection = document.getElementById('info');
  const contatoSection = document.getElementById('contato');
  const form = document.querySelector('form');
  const footer = document.querySelector('.footer');
  const infoBlocos = document.querySelectorAll('.info-bloco');
  const cubos = document.querySelectorAll('.cubo');

  themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
      nav.classList.toggle('dark-theme');

      dropdownContents.forEach(dropdown => dropdown.classList.toggle('dark-theme'));

      submenus.forEach(submenu => submenu.classList.toggle('dark-theme'));

      sobreSection.classList.toggle('dark-theme');

      infoSection.classList.toggle('dark-theme');

      contatoSection.classList.toggle('dark-theme');

      if (form) {
          form.classList.toggle('dark-theme');
      }

      footer.classList.toggle('dark-theme');

      infoBlocos.forEach(bloco => bloco.classList.toggle('dark-theme'));

      cubos.forEach(cubo => cubo.classList.toggle('dark-theme'));

      if (body.classList.contains('dark-theme')) {
          themeToggle.textContent = 'Modo Claro';
      } 
      
      else {
          themeToggle.textContent = 'Modo Escuro';
      }
  });
});