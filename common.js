// 1. 햄버거 버튼

document.addEventListener('DOMContentLoaded', function() {
  menuHandler();
  changeBg();
});

const menuHandler = () => {
    const menuBtn = document.querySelector('.menu-icon');
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle("active");
        menuBtn.classList.remove("no_animation")
    });
};

// 5. 배경바꾸기
const changeBg = () => {
    for(let i = 1; i<=3; i++) {
        const checkBox= document.getElementById(`check-${i}`);
        checkBox.addEventListener('click', function() {
            const background = document.querySelector('.frame .bg');
            if(checkBox.classList.contains('check-1')) {
                background.style.left = '0px';
            } else if (checkBox.classList.contains('check-2')) {
                background.style.left = '-400px';
            } else {
                background.style.left = '-800px';
            }
        })
    }
}