document.querySelectorAll('.filters button').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
document.querySelectorAll('.pc').forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.k===b.dataset.f)});});});

document.querySelectorAll('.vg').forEach(function(b){b.addEventListener('click',function(){document.getElementById(b.dataset.d).showModal()})});
document.querySelectorAll('dialog').forEach(function(d){d.querySelector('.x').addEventListener('click',function(){d.close()});d.addEventListener('click',function(e){if(e.target===d)d.close()})});

/* highlight the nav link of the section currently in view */
var links=document.querySelectorAll('nav a'),ids=['home','about','skills','milestones','projects','contact'];
function spy(){
var line=window.innerHeight*0.4,cur='home';
ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=line)cur=id});
if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur='contact';
links.forEach(function(a){var on=a.getAttribute('href')==='#'+cur;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
}
window.addEventListener('scroll',spy,{passive:true});window.addEventListener('resize',spy);spy();

/* placeholder links (href="#") do nothing until a real URL is added */
document.querySelectorAll('a[href="#"]:not([href="#home"])').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault()})});