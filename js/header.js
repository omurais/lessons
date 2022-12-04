'use strict';

{
  // //headerのパス取得
  // let path = location.pathname.split("/")[1];
  
  // switch(path){
  //   case 'index.html':
  //       $('img').attr('href', './img/logo.png');
  //       break;
  //   case about:
  //       $('img').attr('href', '../img/logo.png');
  //       break;
  //   default:
  //       $('img').attr('href', './img/logo.png');
  //     }

  //ハンバーガーメニュー開閉
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}