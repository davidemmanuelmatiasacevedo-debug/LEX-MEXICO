/* LEX MÉXICO - 1/3: configuración, utilidades y estados */
var FECHA_REVISION="octubre de 2026";
var ESTADO_POR_DEFECTO="Oaxaca";

function $(id){return document.getElementById(id);}
function limpiar(t){return String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
function esc(s){
return String(s==null?"":s).replace(/[&<>"']/g,function(c){
return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
});
}
function urlSegura(u){return /^https?:\/\//i.test(u||"")?u:"";}
function guardar(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function leer(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function quitar(k){try{localStorage.removeItem(k);}catch(e){}}
function raiz(t){return t.length>=6?t.slice(0,5):t;}
function coincide(base,t){
if(base.indexOf(t)!==-1){return true;}
return t.length>=6&&base.indexOf(raiz(t))!==-1;
}

var LEYES=leyes,TEMAS=temas,ESTADO=null;
var vocabulario=[];
var ULTIMOS=[];

function agregarPalabras(texto){
String(texto).split(/\s+/).forEach(function(w){
var t=w.toLowerCase().replace(/[^a-záéíóúüñ]/g,"");
var clave=limpiar(t);
if(clave.length>=4&&!vocabulario.some(function(v){return v.clave===clave;})){
vocabulario.push({clave:clave,texto:t});
}
});
}

function buscarUrl(s,q){return "https://www.google.com/search?q="+encodeURIComponent(q+" "+s.n+" legislación vigente");}
function llenar(txt,s){return txt.replace(/\{de\}/g,s.de).replace(/\{en\}/g,s.en).replace(/\{n\}/g,s.n);}

function leyesDeEstado(s){
var base=[
["Constitución política local","constitucion estado derechos gobierno","Es la ley máxima del estado. Organiza el gobierno estatal y reconoce derechos en el ámbito local."],
["Código Penal","codigo penal delito robo fraude lesiones homicidio amenazas despojo extorsion abuso","Define los delitos del fuero común y sus penas en el estado."],
["Código Civil","codigo civil contrato renta propiedad herencia familia bienes divorcio","Regula contratos, bienes, familia y herencia en el estado."],
["Ley o reglamento de tránsito y vialidad","transito vialidad multas infracciones licencia conductor placas vehiculo reglamento circulacion corralon grua deposito semaforo velocidad","Regula la circulación, las infracciones, las licencias y los depósitos de vehículos en el estado."],
["Ley de movilidad y transporte","movilidad transito vialidad transporte publico taxi colectivo concesiones pasajeros","Regula la movilidad y el transporte público de pasajeros en el estado."],
["Ley de caminos y carreteras","caminos carreteras puentes infraestructura vial","Regula los caminos y carreteras de competencia estatal."],
["Ley orgánica municipal","municipio ayuntamiento presidente municipal cabildo autoridad municipal regidor","Regula cómo se organiza y gobierna cada municipio del estado."],
["Ley de responsabilidades administrativas","corrupcion servidor publico funcionario responsabilidades sancion administrativa","Regula las faltas administrativas de las personas servidoras públicas del estado."]
];
return base.map(function(b){
return {nombre:b[0]+" "+s.de,resumen:b[2]+" El nombre exacto puede variar; consulta la versión vigente.",palabras:b[1]+" "+limpiar(s.n),web:buscarUrl(s,b[0]),buscar:true};
});
}

var CAMPOS_TEXTO=["queEs","queConlleva","ley","importante"];

function adaptarTema(t,s){
var o={};
Object.keys(t).forEach(function(k){o[k]=t[k];});
var g=(typeof GENERICO!=="undefined")?GENERICO[t.nombre]:null;
if(g){Object.keys(g).forEach(function(k){o[k]=llenar(g[k],s);});}
CAMPOS_TEXTO.forEach(function(k){
if(o[k]&&!(g&&g[k])){o[k]=o[k].replace(/Oaxaca/g,s.n);}
});
if(!(g&&g.ley)&&/cobranza extrajudicial/i.test(o.ley||"")){
o.ley=o.ley.replace(/\s*capítulo sobre amenazas y cobranza extrajudicial ilegal\./i,", en el capítulo sobre amenazas.");
}
o.palabras=o.palabras.replace(/oaxaca/gi,limpiar(s.n));
if(o.web&&/oaxaca/i.test(o.web)){o.web=buscarUrl(s,"Congreso legislación estatal");o.buscar=true;}
if(o.pdf&&/oaxaca/i.test(o.pdf)){delete o.pdf;}
return o;
}

function aplicarEstado(s){
ESTADO=s;
if(s.n==="Oaxaca"){
LEYES=leyes;TEMAS=temas;
$("notaEstado").textContent="";
}else{
LEYES=leyes.filter(function(l){return !/Oaxaca/.test(l.nombre);}).concat(leyesDeEstado(s));
TEMAS=temas.map(function(t){return adaptarTema(t,s);});
$("notaEstado").textContent="Para "+s.n+" se muestran las leyes federales y la información general. Los enlaces de leyes estatales son búsquedas en línea; revisa siempre el texto oficial vigente.";
}
vocabulario.length=0;
LEYES.forEach(function(l){agregarPalabras(l.nombre+" "+l.palabras);});
TEMAS.forEach(function(t){agregarPalabras(t.nombre+" "+t.palabras);});
guardar("estado",s.n);
}

function cambiarEstado(){
var n=$("estado").value;
var s=estados.filter(function(e){return e.n===n;})[0];
if(!s){return;}
aplicarEstado(s);
$("sugerencias").innerHTML="";
if($("buscar").value.trim()){buscar();}else{$("resultados").innerHTML="";ULTIMOS=[];mostrarSituaciones();}
}

function iniciarEstados(){
var sel=$("estado");
estados.forEach(function(e){
var o=document.createElement("option");
o.value=e.n;o.textContent=e.n;sel.appendChild(o);
});
var guardado=leer("estado")||ESTADO_POR_DEFECTO;
if(!estados.some(function(e){return e.n===guardado;})){guardado=ESTADO_POR_DEFECTO;}
sel.value=guardado;
aplicarEstado(estados.filter(function(e){return e.n===guardado;})[0]);
}
