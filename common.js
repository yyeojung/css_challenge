// 1. 햄버거 버튼

document.addEventListener('DOMContentLoaded', function() {
  menuHandler();
});

  const menuHandler = () => {
    const menuBtn = document.querySelector('.menu-icon');
    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle("active");
      menuBtn.classList.remove("no_animation")
    });
  };
