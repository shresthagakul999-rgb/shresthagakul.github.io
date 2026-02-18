const lists = document.querySelectorAll('.list');

lists.forEach((list) => {
  list.addEventListener('mouseenter', () => {
    list.classList.add('hover');
  });

  list.addEventListener('mouseleave', () => {
    list.classList.remove('hover');
  });
});
