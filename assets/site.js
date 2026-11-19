const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('#nav');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

const backToTop=document.querySelector('#backToTop');backToTop?.addEventListener('click',()=>{window.scrollTo({top:0,left:0,behavior:'smooth'});});
