/* LEX MÉXICO - 3/3: resultados, acciones y arranque (va al final) */

function enlaces(x){
var h="";
var w=urlSegura(x.web),p=urlSegura(x.pdf);
if(w){h+='<a class="enlace" href="'+esc(w)+'" target="_blank" rel="noopener noreferrer">'+(x.buscar?"Buscar texto oficial en línea":"Leer en línea (sitio oficial)")+'</a>';}
if(p){h+='<a class="enlace" href="'+esc(p)+'" target="_blank" rel="noopener noreferrer">Descargar PDF oficial</a>';}
return h;
}

function htmlTema(t,i){
var h='<article class="tema"><h2>'+esc(t.nombre)+'</h2>';
h+='<h3>Qué es</h3><p>'+esc(t.queEs)+'</p>';
h+='<h3>Qué conlleva</h3><p>'+esc(t.queConlleva)+'</p>';
if(Array.isArray(t.pasos)&&t.pasos.length){
h+='<h3>Qué hacer primero</h3><ol>'+t.pasos.map(function(p){return "<li>"+esc(p)+"</li>";}).join("")+"</ol>";
}
h+='<h3>Dónde lo dice la ley</h3><p>'+esc(t.ley)+'</p>';
h+='<p class="nota"><b>Importante:</b> '+esc(t.importante)+'</p>';
if(t.plazo){h+='<p class="nota"><b>Plazos:</b> '+esc(t.plazo)+'</p>';}
if(t.telefonos){h+='<p class="nota"><b>Teléfonos útiles:</b> '+esc(t.telefonos)+'</p>';}
h+=enlaces(t);
h+='<div class="acciones">'+
'<button type="button" data-accion="leer" data-i="'+i+'">🔊 Escuchar</button>'+
'<button type="button" data-accion="compartir" data-i="'+i+'">📤 Compartir</button>'+
'<button type="button" data-accion="copiar" data-i="'+i+'">📋 Copiar</button></div>';
h+='<p class="legal">Información general, revisada en '+esc(FECHA_REVISION)+'. No es asesoría legal; verifica el texto vigente.</p>';
return h+"</article>";
}

function htmlLey(l){
return '<article class="tarjeta"><h2>'+esc(l.nombre)+'</h2><p>'+esc(l.resumen)+'</p>'+enlaces(l)+'</article>';
}

function pintar(th,lh,aviso){
ULTIMOS=th;
var h=aviso||"";
h+=th.map(htmlTema).join("");
if(th.length&&lh.length){h+='<p class="sub">Leyes relacionadas</p>';}
h+=lh.map(htmlLey).join("");
var cont=$("resultados");
cont.innerHTML=h;
cont.focus({preventScroll:true});
}

function mensaje(txt){$("resultados").innerHTML='<p>'+esc(txt)+'</p>';ULTIMOS=[];}
function avisoHtml(txt,negrita){
return '<p class="sub">'+esc(txt)+(negrita?' <b>'+esc(negrita)+'</b>':'')+'</p>';
}

/* ---- Buscar ---- */
function buscar(){
var texto=$("buscar").value.trim();
var q0=limpiar(texto);
var q=sinonimos(q0);
var claves=ULTIMAS_CLAVES.slice();
$("sugerencias").innerHTML="";
if(!q){mensaje("Escribe una palabra para buscar.");return;}
$("situaciones").innerHTML="";
guardarHistorial(texto);
var r=buscarAmbos(q,claves);
var th=r.th,lh=r.lh;
var aviso="";
if(!th.length&&!lh.length&&q!==q0){r=buscarAmbos(q0,[]);th=r.th;lh=r.lh;}
if(!th.length&&!lh.length){
var c=corregir(q);
if(c){
r=buscarAmbos(limpiar(c),[]);
th=r.th;lh=r.lh;
if(th.length||lh.length){aviso=avisoHtml("Mostrando resultados para:",c);}
}
}
if(!th.length&&!lh.length){
th=filtrarAlguno(TEMAS,q,camposTema);
lh=filtrarAlguno(LEYES,q,camposLey);
if(th.length||lh.length){aviso=avisoHtml("No hay una coincidencia exacta. Estos son resultados parecidos.");}
}
if(!th.length&&!lh.length){mensaje("No encontré resultados. Prueba con otra palabra, por ejemplo: robo, despido, multa.");return;}
pintar(th,lh,aviso);
}

/* ---- Escuchar, compartir, copiar ---- */
function textoPlano(t){
return t.nombre+"\n\nQué es: "+t.queEs+"\n\nQué conlleva: "+t.queConlleva+"\n\nDónde lo dice la ley: "+t.ley+"\n\nImportante: "+t.importante;
}
function leerEnVoz(t){
if(!("speechSynthesis" in window)){alert("Tu navegador no permite escuchar el texto.");return;}
window.speechSynthesis.cancel();
var u=new SpeechSynthesisUtterance(textoPlano(t).replace(/\n+/g,". "));
u.lang="es-MX";u.rate=0.95;
window.speechSynthesis.speak(u);
}
function copiar(txt){
if(navigator.clipboard&&navigator.clipboard.writeText){
navigator.clipboard.writeText(txt).then(function(){alert("Copiado.");},function(){alert("No se pudo copiar.");});
}else{
var ta=document.createElement("textarea");
ta.value=txt;document.body.appendChild(ta);ta.select();
try{document.execCommand("copy");alert("Copiado.");}catch(e){alert("No se pudo copiar.");}
document.body.removeChild(ta);
}
}
function compartir(t){
var txt=textoPlano(t)+"\n\nLEX MÉXICO: "+location.href;
if(navigator.share){
navigator.share({title:"LEX MÉXICO: "+t.nombre,text:txt}).catch(function(){});
}else{
window.open("https://wa.me/?text="+encodeURIComponent(txt),"_blank","noopener");
}
}
$("resultados").addEventListener("click",function(e){
var b=e.target.closest("button[data-accion]");
if(!b){return;}
var t=ULTIMOS[parseInt(b.getAttribute("data-i"),10)];
if(!t){return;}
var a=b.getAttribute("data-accion");
if(a==="leer"){leerEnVoz(t);}
else if(a==="compartir"){compartir(t);}
else if(a==="copiar"){copiar(textoPlano(t));}
});

/* ---- Búsqueda por voz ---- */
(function(){
var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
var mic=$("mic");
if(!SR){return;}
mic.hidden=false;
var rec=null,activo=false;
mic.addEventListener("click",function(){
if(activo&&rec){rec.stop();return;}
rec=new SR();
rec.lang="es-MX";rec.interimResults=false;rec.maxAlternatives=1;
rec.onstart=function(){activo=true;mic.classList.add("activo");};
rec.onend=function(){activo=false;mic.classList.remove("activo");};
rec.onerror=function(){activo=false;mic.classList.remove("activo");};
rec.onresult=function(ev){
$("buscar").value=ev.results[0][0].transcript;
buscar();
};
try{rec.start();}catch(e){}
});
})();

/* ---- Eventos e inicio ---- */
$("estado").addEventListener("change",cambiarEstado);
$("btnBuscar").addEventListener("click",buscar);
$("buscar").addEventListener("input",sugerir);
$("buscar").addEventListener("keydown",function(e){if(e.key==="Enter"){buscar();}});
$("fechaRev").textContent=FECHA_REVISION;

iniciarEstados();
mostrarHistorial();
mostrarSituaciones();
