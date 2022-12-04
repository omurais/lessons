'use strict'
{
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
}