/* LEX MÉXICO - 2/3: búsqueda, historial, sugerencias y lenguaje natural */

function distancia(a,b){
var m=a.length,n=b.length,d=[],i,j;
for(i=0;i<=m;i++){d[i]=[i];}
for(j=1;j<=n;j++){d[0][j]=j;}
for(i=1;i<=m;i++){
for(j=1;j<=n;j++){
var c=a[i-1]===b[j-1]?0:1;
d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c);
}
}
return d[m][n];
}
function puntaje(a,b){return Math.min(distancia(a,b),distancia(a,b.slice(0,a.length)));}

/* ---- Historial ---- */
function leerHistorial(){
try{var h=JSON.parse(leer("historial")||"[]");return Array.isArray(h)?h:[];}catch(e){return [];}
}
function guardarHistorial(texto){
var h=leerHistorial().filter(function(x){return limpiar(x)!==limpiar(texto);});
h.unshift(texto);
h=h.slice(0,8);
guardar("historial",JSON.stringify(h));
mostrarHistorial();
}
function crearChip(texto,clase,fn){
var b=document.createElement("button");
b.type="button";b.className=clase;b.textContent=texto;
b.addEventListener("click",fn);
return b;
}
function mostrarHistorial(){
var h=leerHistorial(),c=$("historial");
c.innerHTML="";
if(!h.length){return;}
var t=document.createElement("p");
t.className="sub";t.textContent="Búsquedas recientes";
c.appendChild(t);
h.forEach(function(texto){
c.appendChild(crearChip(texto,"chip",function(){$("buscar").value=texto;buscar();}));
});
c.appendChild(crearChip("Borrar historial","borrar",function(){quitar("historial");mostrarHistorial();}));
}

/* ---- Sugerencias y corrección ---- */
function sugerir(){
var caja=$("sugerencias");
caja.innerHTML="";
var valor=$("buscar").value;
var t=limpiar(valor.trim());
if(!valor.trim()){mostrarSituaciones();$("resultados").innerHTML="";ULTIMOS=[];return;}
if(t.length<2){return;}
var partes=valor.trim().split(/\s+/);
var ultima=limpiar(partes[partes.length-1]);
var inicio=partes.slice(0,-1).join(" ");
var lista=[];
leerHistorial().forEach(function(h){
if(limpiar(h).indexOf(t)===0&&limpiar(h)!==t){lista.push({texto:h,etiqueta:"🕘 "+h});}
});
var margen=ultima.length>=6?2:1;
var cand=[];
vocabulario.forEach(function(v){
var p=ultima.length>=3?puntaje(ultima,v.clave):(v.clave.indexOf(ultima)===0?0:99);
if(p<=margen&&v.clave!==ultima){cand.push({v:v,p:p});}
});
cand.sort(function(a,b){return a.p-b.p||a.v.clave.length-b.v.clave.length;});
cand.slice(0,5).forEach(function(c){
var completo=(inicio?inicio+" ":"")+c.v.texto;
lista.push({texto:completo,etiqueta:"🔍 "+completo});
});
lista.slice(0,6).forEach(function(s){
var b=crearChip(s.etiqueta,"sugerencia",function(){$("buscar").value=s.texto;buscar();});
b.setAttribute("role","option");
caja.appendChild(b);
});
}

function corregir(q){
var cambio=false;
var salida=q.split(/\s+/).map(function(tok){
if(vocabulario.some(function(v){return v.clave.indexOf(tok)!==-1;})){return tok;}
var margen=tok.length>=6?2:1;
var mejor=null,mp=99;
vocabulario.forEach(function(v){
var p=distancia(tok,v.clave);
if(p<mp){mp=p;mejor=v;}
});
if(tok.length>=4&&mejor&&mp<=margen){cambio=true;return mejor.texto;}
return tok;
});
return cambio?salida.join(" "):null;
}

/* ---- Lenguaje natural ---- */
var vacias=["de","del","la","las","el","los","en","y","o","para","por","con","un","una","ley","leyes","reglamento","reglamentos","codigo","codigos","me","mi","mis","se","que","lo","al","a","es","hay","puedo","como","quiero","necesito","tengo","mas","no","le","les","su","sus"];

var SITUACIONES=[
["Me despidieron","despido"],
["Me multaron","multa"],
["Se llevaron mi carro al corralón","corralon"],
["Tuve un choque","accidente"],
["Me robaron","robo"],
["Me estafaron","fraude"],
["Me amenazan","amenazas"],
["Problema con mi renta","renta"],
["Compré algo defectuoso","garantia"],
["Quiero divorciarme","divorcio"],
["Me pegan en casa","violencia familiar"],
["Me detuvieron","detencion"]
];

var SINONIMOS=[
["me corrieron del trabajo","despido"],["me echaron del trabajo","despido"],["me despidieron","despido"],["me corrieron","despido"],["me corrio","despido"],["me liquidaron","finiquito"],["despidieron","despido"],
["me corrieron de mi casa","despojo"],["invadieron mi terreno","despojo"],["me quieren quitar mi terreno","despojo"],["me quitaron mi terreno","despojo"],
["mordida","corrupcion soborno"],["me pidieron dinero","corrupcion soborno"],["me pidieron una mordida","corrupcion soborno"],
["me cobraron de mas","cobro abusivo"],["me cobraron mal","cobro abusivo"],["no me quieren devolver","devolucion"],["producto defectuoso","garantia"],
["me estafaron","fraude"],["me timaron","fraude"],["me engañaron","fraude"],["estafaron","fraude"],
["me asaltaron","robo"],["me robaron","robo"],["me asalto","robo"],["robaron","robo"],["asaltaron","robo"],
["se llevaron mi carro","corralon grua"],["se llevaron mi moto","corralon grua"],["se llevo mi carro","corralon grua"],["se llevo la grua","corralon grua"],["me quitaron las placas","placas"],
["me pusieron una multa","multa"],["me levantaron una multa","multa"],["me infraccionaron","infraccion"],["me multaron","multa"],["me pararon","infraccion"],["multaron","multa"],
["me chocaron","choque"],["tuve un choque","accidente"],["me atropellaron","atropello"],["chocaron","choque"],
["me pegaron","lesiones"],["me golpearon","lesiones"],["me amenazaron","amenazas"],["me amenazan","amenazas"],
["mi esposo me pega","violencia familiar"],["mi pareja me pega","violencia familiar"],["me pegan en casa","violencia familiar"],["violencia domestica","violencia familiar"],["me acosan","acoso"],
["me detuvieron","detencion"],["me arrestaron","detencion"],["me llevaron detenido","detencion"],
["me quiero divorciar","divorcio"],["quiero divorciarme","divorcio"],["no me paga la pension","pension alimenticia"],["pension de mis hijos","pension alimenticia"],
["me suben la renta","renta"],["me quieren desalojar","renta"],
["me pidieron mis datos","datos personales"]
].map(function(p){return [limpiar(p[0]),p[1]];}).sort(function(a,b){return b[0].length-a[0].length;});

/* Palabras clave que salieron de una frase reconocida (ej. "me robaron mi celular" -> "robo") */
var ULTIMAS_CLAVES=[];
function sinonimos(q){
var r=q;
ULTIMAS_CLAVES=[];
SINONIMOS.forEach(function(p){
if(r.indexOf(p[0])!==-1){
r=r.split(p[0]).join(p[1]);
p[1].split(" ").forEach(function(c){
if(ULTIMAS_CLAVES.indexOf(c)===-1){ULTIMAS_CLAVES.push(c);}
});
}
});
return r;
}

function mostrarSituaciones(){
var c=$("situaciones");
c.innerHTML="";
var t=document.createElement("p");
t.className="sub";t.textContent="Situaciones comunes";
c.appendChild(t);
SITUACIONES.forEach(function(s){
c.appendChild(crearChip(s[0],"chip",function(){$("buscar").value=s[1];buscar();}));
});
}

/* ---- Filtros ---- */
function tokensUtiles(q){
var tokens=q.split(/\s+/).filter(function(t){return t;});
var utiles=tokens.filter(function(t){return vacias.indexOf(t)===-1;});
return utiles.length?utiles:tokens;
}
function filtrarCon(lista,q,campos,claves,estricto){
var tokens=(claves&&claves.length)?claves:tokensUtiles(q);
var bases=lista.map(function(x){return limpiar(campos(x));});
if(!(claves&&claves.length)){
var presentes=tokens.filter(function(t){return bases.some(function(b){return coincide(b,t,estricto);});});
if(presentes.length&&presentes.length<tokens.length){tokens=presentes;}
}
return lista.filter(function(x,i){
return tokens.every(function(t){return coincide(bases[i],t,estricto);});
});
}
/* Primero busca la palabra exacta; solo si no hay nada, usa la raíz de la palabra */
function buscarAmbos(q,claves){
var th=filtrarCon(TEMAS,q,camposTema,claves,true);
var lh=filtrarCon(LEYES,q,camposLey,claves,true);
if(!th.length&&!lh.length){
th=filtrarCon(TEMAS,q,camposTema,claves,false);
lh=filtrarCon(LEYES,q,camposLey,claves,false);
}
return {th:th,lh:lh};
}
function filtrarAlguno(lista,q,campos){
var tokens=q.split(/\s+/).filter(function(t){return t.length>=4&&vacias.indexOf(t)===-1;});
if(!tokens.length){return [];}
return lista.map(function(x){
var base=limpiar(campos(x));
var n=0;
tokens.forEach(function(t){if(coincide(base,t)){n++;}});
return {x:x,n:n};
}).filter(function(o){return o.n>0;}).sort(function(a,b){return b.n-a.n;}).slice(0,5).map(function(o){return o.x;});
}
function camposLey(l){return l.nombre+" "+l.resumen+" "+l.palabras;}
function camposTema(t){return t.nombre+" "+t.palabras;}
