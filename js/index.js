'use strict'
{
   // heroエリアMVスライドショー
   function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex >  images.length - 1){
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    },5000);
  };

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
}