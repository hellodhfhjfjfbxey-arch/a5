(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function gear(n,r,hole){var m=2*r/n,tip=r+m,root=r-1.25*m,p=2*Math.PI/n,d='';for(var k=0;k<n;k++){var a=k*p;[[root,-.3],[tip,-.16],[tip,.16],[root,.3]].forEach(function(q,j){d+=(k===0&&j===0?'M':'L')+(q[0]*Math.cos(a+q[1]*p)).toFixed(1)+' '+(q[0]*Math.sin(a+q[1]*p)).toFixed(1);});}d+='Z';var h=r*(hole||.2);d+=' M'+h.toFixed(1)+' 0a'+h+' '+h+' 0 1 0 '+(-2*h)+' 0a'+h+' '+h+' 0 1 0 '+(2*h)+' 0Z';return d;}
var tg=[].slice.call(document.querySelectorAll('.gb-train [data-g]')),ang=0,last=scrollY,vel=0;
if(tg.length){(function f(){var dy=scrollY-last;last=scrollY;vel=vel*.9+dy*.06;ang+=(rm?0:.12)+vel;tg.forEach(function(g){g.setAttribute('transform','rotate('+(+g.getAttribute('data-r0')+ang*(+g.getAttribute('data-g'))).toFixed(2)+')');});requestAnimationFrame(f);})();}
var pp=$('pp-t');if(pp){var sec=pp.closest('.gb-pp'),bar=$('pp-b');function ph(){if(innerWidth<=1060||innerHeight<680){pp.style.transform='';return;}var r=sec.getBoundingClientRect(),tot=sec.offsetHeight-innerHeight,p=Math.max(0,Math.min(1,-r.top/tot)),mx=pp.scrollWidth-innerWidth;pp.style.transform='translate3d('+(-p*mx).toFixed(1)+'px,0,0)';if(bar)bar.style.width=(p*100)+'%';}addEventListener('scroll',ph,{passive:true});addEventListener('resize',ph);ph();}
var bt=$('bt-h');if(bt){var tk=$('bt-ticks'),sv='';for(var i=0;i<60;i++){sv+='<line x1="160" y1="16" x2="160" y2="'+(i%5?28:40)+'" transform="rotate('+(i*6)+' 160 160)"'+(i%5?'':' class="b"')+'/>';}tk.innerHTML=sv;var vph=28800,t0=performance.now();
 function fmt(n){return n.toLocaleString('en-US');}
 function setv(v){vph=v;var bs=v/3600,q=v===3600;$('bt-hz').textContent=q?'1 step':(v/7200)+' Hz';$('bt-bs').textContent=fmt(+bs.toFixed(0));$('bt-bd').textContent=fmt(v*24);$('bt-st').textContent=(1/bs).toFixed(3).replace(/0+$/,'')+' s';$('bt-dv').textContent=q?'QUARTZ':fmt(v)+' vph';
  $('bt-n').textContent=q?'A quartz watch steps once a second, so its seconds hand ticks rather than sweeps.':v>=36000?'High beat: 10 steps a second gives a very smooth sweep and good stability, at the cost of more wear.':v>=28800?'The modern standard for many automatics: 8 steps a second, a smooth sweep.':'A slower, traditional beat. The steps are easier to see and the parts wear more gently.';
  [].forEach.call(document.querySelectorAll('.gb-chips button'),function(b){b.classList.toggle('on',+b.getAttribute('data-v')===v);b.setAttribute('aria-pressed',+b.getAttribute('data-v')===v);});}
 [].forEach.call(document.querySelectorAll('.gb-chips button'),function(b){b.addEventListener('click',function(){setv(+b.getAttribute('data-v'));});});setv(28800);
 var bw=$('bt-bw');(function f(t){var s=(t-t0)/1000,bs=vph/3600,a=Math.floor(s*bs)/bs*6;bt.style.transform='rotate('+(a%360)+'deg)';if(bw)bw.style.transform=vph===3600?'none':'rotate('+(Math.sin(s*2*Math.PI*(vph/7200)/10)*200).toFixed(1)+'deg)';requestAnimationFrame(f);})(t0);}
var ra=$('rt-a');if(ra){var rb=$('rt-b'),rs=$('rt-s'),ga=$('rt-ga'),gb=$('rt-gb'),pa=$('rt-pa'),pb=$('rt-pb'),st={na:80,nb:10,a0:0,b0:0,ax:0,ay:0,bx:0,by:0},an=0;
 function calc(){var na=Math.max(6,Math.min(150,Math.round(+ra.value||6))),nb=Math.max(6,Math.min(150,Math.round(+rb.value||6))),sp=Math.max(.1,+rs.value||1),ratio=na/nb,out=sp*ratio;
  $('rt-r').textContent=(ratio%1?ratio.toFixed(2):ratio)+' : 1';var per=60/out;$('rt-t').textContent='The driven pinion turns '+(+out.toFixed(2))+' times an hour, once every '+(per>=1?(+per.toFixed(2))+' minutes':(+(per*60).toFixed(2))+' seconds')+'.'+(Math.abs(out-60)<.01?' That is once a minute: a seconds hand could sit on this arbor.':Math.abs(out-1)<.01?' That is once an hour: the minute hand turns at this speed.':'');
  var m=Math.min(540/(na+nb+2),320/(na+2)),R=m*na/2,r=m*nb/2;st.na=na;st.nb=nb;st.ax=280-r;st.ay=170;st.bx=280+R;st.by=170;
  pa.setAttribute('d',gear(na,R,.12));pb.setAttribute('d',gear(nb,r,nb<12?.25:.18));st.a0=0;st.b0=180+180/nb;st.sp=out;}
 [ra,rb,rs].forEach(function(e){e.addEventListener('input',calc);});[].forEach.call(document.querySelectorAll('.gb-pre button'),function(b){b.addEventListener('click',function(){var p=b.getAttribute('data-p').split(',');ra.value=p[0];rb.value=p[1];rs.value=p[2];calc();});});calc();
 (function f(){if(!rm)an+=.25;ga.setAttribute('transform','translate('+st.ax.toFixed(1)+' '+st.ay+') rotate('+(st.a0+an).toFixed(2)+')');gb.setAttribute('transform','translate('+st.bx.toFixed(1)+' '+st.by+') rotate('+(st.b0-an*st.na/st.nb).toFixed(2)+')');requestAnimationFrame(f);})();}
var ck=$('ck-s');if(ck){var hh=$('ck-h'),mm=$('ck-m');(function f(){var d=new Date(),ms=d.getMilliseconds(),s=d.getSeconds()+Math.floor(ms/125)/8,m=d.getMinutes()+s/60,h=d.getHours()%12+m/60;ck.style.transform='rotate('+(s*6)+'deg)';mm.style.transform='rotate('+(m*6)+'deg)';hh.style.transform='rotate('+(h*30)+'deg)';requestAnimationFrame(f);})();var tn=$('tk-n');if(tn){var d=new Date();tn.textContent=String((d.getMonth()+1)*100+d.getDate()).padStart(4,'0');}}
})();
