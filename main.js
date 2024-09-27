'use strict';

{
  const open=document.getElementById('open');
  const menu=document.querySelector('.menu');
  const close=document.getElementById('close');

open.addEventListener('click', function () {
  menu.classList.add('show');
  close.classList.add('active');
  open.classList.add('hide');
});

close.addEventListener('click', function () {
  menu.classList.remove('show');
  close.classList.remove('active');
  open.classList.remove('hide');
});

}
