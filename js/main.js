'use strict';

{
  // //headerのパス取得
  // let path = location.pathname.split("/")[1];
  
  // switch(path){
  //   case 'index.html':
  //       $('img').attr('href', './img/logo.png');
  //       break;
  //   case 'html':
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

  //Intersection Observer API
  //アニメーション設定 タイトルエリア
  // function callback(entries, obs){
  //   entries.forEach(entry => {
  //     if(!entry.isIntersecting){
  //       return;
  //     }

  //     entry.target.classList.add('appear');
  //     obs.unobserve(entry.target);
  //   });
  // }

  // const observer = new IntersectionObserver(callback,{
  //   threshold:0.2,
  // });

  // document.querySelectorAll('.txt_animate').forEach(el => {
  //   observer.observe(el);
  // });

  //アニメーション設定 商品エリア
  function callback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  //FAQ開閉
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click',() => {
      dt.parentNode.classList.toggle('faq_open');

      dts.forEach(el =>{
        if(dt !== el){
          el.parentNode.classList.remove('faq_open');
        }
      });
    });
  });

  //タブメニュー
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
    clickedItem.classList.add('active');

    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

  //Topへ戻る
  const toTop = document.getElementById('to_top');

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

}