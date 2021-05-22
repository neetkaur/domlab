
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu')
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');
topMenuEl.style.backgroundColor='var(--top-menu-bg)'
topMenuEl.style.height = '100%'
mainEl.classList.add('flex-around');

// for(let link of menuLinks){
//   const a = document.createElement('a')
//   console.log(a);
//   a.setAttribute('href', link.href)
//   a.textContent = link.text
//   topMenuEl.appendChild(a);
// }

for(let link of menuLinks){
  const a = document.createElement('a')
  a.href= link.href
  a.textContent = link.text
  topMenuEl.appendChild(a)

}
