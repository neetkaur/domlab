
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu')
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');
topMenuEl.style.backgroundColor='var(--top-menu-bg)'
topMenuEl.style.height = '100%'
mainEl.classList.add('flex-around');


for(let link of menuLinks){
  const a = document.createElement('a')
  a.href= link.href
  a.textContent = link.text
  topMenuEl.appendChild(a)
}

const subMenuEl = document.querySelector('#sub-menu');

//subMenuEl.style.position = 'absolute'
//subMenuEl.style.top = '0'

const allATags = topMenuEl.querySelectorAll('a')
for(let eachtag of allATags){
eachtag.addEventListener('click', () => funcprint(eachtag))}

let showingSubMenu = true

function  funcprint(newValue){
for(let eachtag of allATags){
eachtag.classList.remove('active')}
newValue.classList.add('active')
for(let each of menuLinks){
  console.log(each.text)
  console.log(newValue.innerHTML)
  console.log(each.subLinks)
  if(each.text === newValue.innerHTML && each.subLinks !== ""){
    showingSubMenu = true
  }else showingSubMenu = false
console.log(showingSubMenu)
  if(showingSubMenu === true){
    buildSubMenu(each.subLinks)
    subMenuEl.style.top = '100%'
    }
  else {
    subMenuEl.style.top = '0'
  }
  console.log(showingSubMenu)
  }
}
function buildSubMenu(sub){
  console.log('it was called')
  subMenuEl.innerHTML=""
  for(let value of sub){
    let submenuitem = document.createElement('a')
    submenuitem.href=value.href
    submenuitem.textContent= value.text
    //submenuitem.onclick = 'displayh1()'
    subMenuEl.appendChild(submenuitem)
    subMenuEl.style.top = '100%'
    subMenuEl.style.height = '100%';
    subMenuEl.style.backgroundColor='var(--sub-menu-bg)';
    subMenuEl.classList.add('flex-around');
    }
  }

  subMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault()
    const link = evt.target
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;

   })
