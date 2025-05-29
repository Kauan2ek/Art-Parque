/**
  * Alterna a visibilidade do menu flutuante
  */
function toggleMenu() {
  const menu = document.getElementById('menuLinks');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

/**
 * Fecha o menu se o usuário clicar fora dele
 */
window.addEventListener('click', function (e) {
  // console.log("AAAA");
  const menu = document.getElementById('menuLinks');
  // console.log(menu);
  const button = document.querySelector('.botao-fixo');
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.style.display = 'none';
  }
});