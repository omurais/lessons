'use strict'
{
   //about モーダルウィンドウ
   const abOpen = document.getElementById('ab_open');
   const abClose = document.getElementById('ab_close');
   const abModal = document.getElementById('ab_modal');
   const abMask = document.getElementById('ab_mask');
 
  //  aboutページ開くと表示
   window.addEventListener('load', () => {
     abModal.classList.remove('hidden');
     abMask.classList.remove('hidden');
   });

  //  詳細を見るクリックで表示
   abOpen.addEventListener('click', () => {
    abModal.classList.remove('hidden');
    abMask.classList.remove('hidden');
  });
 
   abClose.addEventListener('click', () => {
     abModal.classList.add('hidden');
     abMask.classList.add('hidden');
   });
 
   abMask.addEventListener('click', () => {
     // abModal.classList.add('hidden');
     // abMask.classList.add('hidden');
     abClose.click();
   });
}