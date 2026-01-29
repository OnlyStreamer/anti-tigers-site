// Screen management
const screens = {
  title: document.getElementById('title-screen'),
  info: document.getElementById('info-screen'),
  players: document.getElementById('players-screen'),
  season: document.getElementById('season-screen'),
  rivals: document.getElementById('rivals-screen'),
  awards: document.getElementById('awards-screen'),
  coaches: document.getElementById('coaches-screen'),
  location: document.getElementById('location-screen'),
  sponsors: document.getElementById('sponsors-screen')
};

const sidebarMenu = document.getElementById('sidebar-menu');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');

// Toggle sidebar menu
function toggleMenu() {
  sidebarMenu.classList.toggle('open');
  sidebarBackdrop.classList.toggle('open');
}

function closeMenu() {
  sidebarMenu.classList.remove('open');
  sidebarBackdrop.classList.remove('open');
}

menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', closeMenu);
sidebarBackdrop.addEventListener('click', closeMenu);

// Screen navigation
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[name].classList.remove('hidden');
  closeMenu();
  window.scrollTo(0, 0);
}

// Navigation buttons
document.getElementById('btn-info').addEventListener('click', () => showScreen('info'));
document.getElementById('btn-players').addEventListener('click', () => showScreen('players'));
document.getElementById('btn-season').addEventListener('click', () => showScreen('season'));
document.getElementById('btn-rivals').addEventListener('click', () => showScreen('rivals'));
document.getElementById('btn-awards').addEventListener('click', () => showScreen('awards'));
document.getElementById('btn-coaches').addEventListener('click', () => showScreen('coaches'));
document.getElementById('btn-location').addEventListener('click', () => showScreen('location'));
document.getElementById('btn-sponsors').addEventListener('click', () => showScreen('sponsors-screen'));

// Back buttons
document.getElementById('btn-back-from-info').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-players').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-season').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-rivals').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-awards').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-coaches').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-location').addEventListener('click', () => showScreen('title'));
document.getElementById('btn-back-from-sponsors').addEventListener('click', () => showScreen('title'));

// Player data
const players = [
  {number:4,name:'Angelina Tanzer',position:'QB'},
  {number:14,name:'Julian Bednar',position:'WR/RB'},
  {number:10,name:'Althea Arelano',position:'WR'},
  {number:5,name:'Leonhard Bertle',position:'LB/CB'},
  {number:6,name:'Tobias Hametner',position:'CB'},
  {number:7,name:'Therese Friedel',position:'S'}
];

function renderPlayers(){
  const grid = document.getElementById('players-grid');
  grid.innerHTML = '';
  players.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <h3 class="player-name">${p.name}</h3>
        <div class="player-meta">${p.position}</div>
        <div class="player-number">#${p.number}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderPlayers();
// Sponsors rendering
(function(){
  const sponsors = [
    {name:'RedBull Energy', tagline:'Fueling our team with relentless energy.', thanks:'Thank you for powering our wins.'},
    {name:'Atlanta Falcons', tagline:'Proud supporters of community sport.', thanks:'We appreciate your team spirit.'},
    {name:'Vienna Vikings', tagline:'Building local talent and fierce competition.', thanks:'Thanks for backing our squad.'},
    {name:'Mercedes Benz', tagline:'Engineering excellence on and off the field.', thanks:'Thank you for driving our ambitions.'},
    {name:'Monster Energy', tagline:'Amping our players with top-tier energy.', thanks:'Thanks for keeping the intensity high.'},
    {name:'Vienna Airport', tagline:'Connecting fans and teams worldwide.', thanks:'We appreciate your logistical support.'},
    {name:'WWF Save The Animals', tagline:'Protecting nature and inspiring athletes.', thanks:'Thank you for supporting our values.'},
    {name:'Noodle King', tagline:'Feeding the team with tasty victories.', thanks:'Thanks for the delicious support.'}
  ];

  function renderSponsors(){
    const grid = document.getElementById('sponsors-grid');
    if(!grid) return;
    grid.innerHTML = '';
    sponsors.forEach((s)=>{
      const card = document.createElement('div');
      card.className = 'sponsor-card';
      const logoText = s.name.split(' ').map(w=>w[0]).join('').slice(0,3).toUpperCase();
      card.innerHTML = `<div class="sponsor-logo">${logoText}</div><div class="sponsor-body"><div class="sponsor-name">${s.name}</div><div class="sponsor-line">${s.tagline}</div><div class="sponsor-thanks">${s.thanks}</div></div>`;
      grid.appendChild(card);
    });
  }

  document.addEventListener('DOMContentLoaded',()=>{
    renderSponsors();
    const btn = document.getElementById('btn-sponsors');
    if(btn) btn.addEventListener('click', ()=> showScreen('sponsors-screen'));
    // allow direct nav via sidebar links with data-target
    document.querySelectorAll('[data-target]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const t = el.getAttribute('data-target');
        if(t) showScreen(t);
      });
    });
  });
})();

