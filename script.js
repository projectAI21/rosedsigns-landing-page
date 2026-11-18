(function(){'use strict';var d=document,$=function(i){return d.getElementById(i)};d.documentElement.classList.add('js');
var nav=$('nav');function sc(){nav.classList.toggle('solid',scrollY>20)}addEventListener('scroll',sc,{passive:true});sc();
var bg=$('burger'),mn=$('menu');function tm(o){mn.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu')}
bg.onclick=function(){tm(!mn.classList.contains('open'))};mn.onclick=function(e){if(e.target.tagName==='A')tm(false)};d.onkeydown=function(e){if(e.key==='Escape')tm(false)};
var rv=[].slice.call(d.querySelectorAll('.rv'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -30px'});rv.forEach(function(el,i){el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});
var links=[].slice.call(mn.querySelectorAll('a:not(.btn)')),so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50%'});
['studio','services','work','process'].forEach(function(i){so.observe($(i))})}else rv.forEach(function(e){e.classList.add('in')});
// process stages
var st=$('stage'),tp=$('tp'),tabs=[].slice.call(d.querySelectorAll('.tabs button')),T={1:'We start by listening: your story, your audience and where you want to be next year.',2:'We shape a distinctive identity and digital presence, and share it early so you can steer it with us.',3:'We take your brand to the people who matter, then look at what worked and keep improving it.'},timers=[];
function set(n){st.setAttribute('data-stage',n);tp.textContent=T[n];tabs.forEach(function(b){b.setAttribute('aria-selected',b.dataset.s==n)})}
tabs.forEach(function(b){b.onclick=function(){timers.forEach(clearTimeout);set(b.dataset.s)}});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var po=new IntersectionObserver(function(es){if(es[0].isIntersecting){po.disconnect();timers=[setTimeout(function(){set(2)},900),setTimeout(function(){set(3)},2400)]}},{threshold:.5});po.observe(st)}
// palette
var P=[['Rose Black','#171514'],['Ivory','#F7F3EC'],['Antique Rose','#A76570'],['Dusty Blush','#D9B1AE'],['Burgundy','#672D39'],['British Green','#183B32'],['Midnight Navy','#172536'],['Antique Gold','#B08A57']],sw=$('sw'),cm=$('cm');
P.forEach(function(p){var b=d.createElement('button');b.style.background=p[1];var l=parseInt(p[1].slice(1,3),16)*.3+parseInt(p[1].slice(3,5),16)*.6+parseInt(p[1].slice(5),16)*.1;b.style.color=l>150?'#171514':'#F7F3EC';b.setAttribute('aria-label','Copy '+p[0]+' '+p[1]);b.innerHTML=p[0]+'<small>'+p[1]+'</small>';
b.onclick=function(){var ok=function(){cm.textContent=p[0]+' '+p[1]+' copied.'};if(navigator.clipboard)navigator.clipboard.writeText(p[1]).then(ok,function(){cm.textContent=p[0]+': '+p[1]});else cm.textContent=p[0]+': '+p[1]};sw.appendChild(b)});
// brief form
var f=$('brief'),m=$('msg');f.onsubmit=function(e){e.preventDefault();var x=f.elements,ok=true;['name','email','idea'].forEach(function(k){var v=x[k].value.trim(),bad=!v||(k==='email'&&!/^\S+@\S+\.\S+$/.test(v));x[k].classList.toggle('bad',bad);if(bad)ok=false});
if(!ok){m.textContent='Please complete your name, a valid email and a few words about your idea.';return}
var t='ROSEDSIGNS · PROJECT BRIEF\n\nName: '+x.name.value.trim()+'\nEmail: '+x.email.value.trim()+'\nLooking for: '+x.svc.value+'\nDate: '+new Date().toLocaleDateString()+'\n\nWhat we have in mind:\n'+x.idea.value.trim()+'\n',u=URL.createObjectURL(new Blob([t],{type:'text/plain'})),a=d.createElement('a');a.href=u;a.download='rosedsigns-project-brief.txt';d.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},1e3);
m.textContent='Thank you, '+x.name.value.trim().split(' ')[0]+'. Your brief has been downloaded and is ready to share.';f.reset()};
$('yr').textContent=new Date().getFullYear()})();
