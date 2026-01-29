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
     {name:'Red Bull', tagline:'Supplying relentless energy for every minute of play.', thanks:'Thank you for fueling our performance.'},
     {name:'Atlanta Falcons', tagline:'A proud community partner cheering on local sport.', thanks:'We appreciate your continued community support.'},
     {name:'Vienna Vikings', tagline:'A storied club inspiring fierce competition and local talent.', thanks:'Thanks for the spirited rivalry and encouragement.'},
     {name:'Mercedes-Benz', tagline:'Driven by engineering excellence, on and off the field.', thanks:'Thank you for helping us reach higher standards.'},
     {name:'Monster Energy', tagline:'Powering peak intensity with bold flavor.', thanks:'Thanks for keeping the team energized.'},
     {name:'Vienna Airport', tagline:'Connecting fans and teams across borders.', thanks:'We appreciate your vital logistical support.'},
     {name:'WWF — Save The Animals', tagline:'Protecting wildlife and the world we play in.', thanks:'Thank you for supporting conservation and our values.'},
     {name:'Noodle King', tagline:'Serving up hearty meals and team morale.', thanks:'Thanks for feeding the team and the fans.'}
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

