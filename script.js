// Menu mobile
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('ouvert');
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.classList.remove('ouvert'));

// Prédications (simulation)
document.querySelectorAll('.play').forEach(b=>b.onclick=()=>{
  const t=b.parentElement.querySelector('h3').textContent;
  document.getElementById('msgLecture').textContent='Lecture simulée : « '+t+' »';
});

// Copier (dons)
document.querySelectorAll('.copier').forEach(b=>b.onclick=async()=>{
  const txt=document.getElementById(b.dataset.cible).textContent;
  try{await navigator.clipboard.writeText(txt);b.textContent='Copié ✓';}catch(e){b.textContent='Sélectionnez le texte';}
  setTimeout(()=>b.textContent='Copier',1800);
});

// Thème sombre (par défaut) / clair
const root=document.documentElement;
try{ const t=localStorage.getItem('theme'); if(t) root.dataset.theme=t; }catch(e){}
document.getElementById('theme').onclick=()=>{
  root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  try{localStorage.setItem('theme',root.dataset.theme);}catch(e){}
};

// Lien actif selon la section visible
const liens=[...document.querySelectorAll('#menu a')];
const secs=liens.map(a=>document.querySelector(a.getAttribute('href')));
function spy(){
  const y=window.scrollY+120; let i=0;
  secs.forEach((el,k)=>{ if(el && el.offsetTop<=y) i=k; });
  liens.forEach((a,k)=>a.classList.toggle('active',k===i));
}
window.addEventListener('scroll',spy,{passive:true}); spy();

// Formulaire (simulation)
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('msgForm').textContent='Merci, votre message a bien été pris en compte (démonstration).';
  e.target.reset();
});