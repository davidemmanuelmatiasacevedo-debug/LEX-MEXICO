/* LEX MÉXICO - Explorar todas las leyes por categoría. Va DESPUÉS de lex-ui.js */
var CATEGORIAS=[
{icono:"🛒",titulo:"Consumidor, dinero e impuestos",
temas:["Derechos del consumidor","Comercio y contratos mercantiles","Impuestos y SAT"],
leyes:/consumidor|comercio|fiscal/},
{icono:"💼",titulo:"Trabajo y seguridad social",
temas:["Despido y derechos laborales","Seguro social, incapacidades y pensión"],
leyes:/trabajo|seguro social|issste|instituto de seguridad/},
{icono:"⚖️",titulo:"Delitos, policía y justicia penal",
temas:["Robo","Fraude","Amenazas","Extorsión","Lesiones","Homicidio","Despojo","Denuncia, detención y proceso penal","Delincuencia organizada","Seguridad pública y policía"],
leyes:/penal|delincuencia|seguridad publica/},
{icono:"🚗",titulo:"Tránsito, vehículos y transporte",
temas:["Multas e infracciones de tránsito","Licencia de conducir y placas","Corralón y grúa","Accidente de tránsito o choque","Transporte público, taxis y concesiones","Carreteras, caminos y autotransporte"],
leyes:/transito|movilidad|caminos|carreteras|encierros|vialidad/},
{icono:"👨‍👩‍👧",titulo:"Familia, niñez y mujeres",
temas:["Divorcio, custodia y pensión alimenticia","Derechos de niñas, niños y adolescentes","Violencia contra las mujeres"],
leyes:/familiares|ninas|mujeres/},
{icono:"🏠",titulo:"Vivienda, tierras y construcción",
temas:["Renta, contratos y herencia","Tierras, ejidos y comunidades","Ventanas, balcones y vistas hacia el vecino","Barda, colindancia y pared medianera","Licencia de construcción y permisos de obra","Construcción sin permiso, clausura y multas de obra","Uso de suelo, alineamiento, altura y número oficial","La obra del vecino daña mi casa (grietas, humedad, ruido)","Servidumbre de paso, agua y drenaje entre vecinos","El constructor o contratista incumple o la obra sale mal"],
leyes:/civil|agraria|asentamientos/},
{icono:"🏛️",titulo:"Derechos, gobierno y salud",
temas:["Derechos humanos y Constitución","Juicio de amparo","Derechos como paciente (salud)","Migración y personas extranjeras","Protección de datos personales","Municipio y ayuntamiento","Corrupción y servidores públicos"],
leyes:/constitucion|amparo|salud|migracion|datos personales|municipal|responsabilidades/}
];

function itemsDeCategoria(c){
var th=TEMAS.filter(function(t){return c.temas.indexOf(t.nombre)!==-1;});
var lh=LEYES.filter(function(l){return c.leyes.test(limpiar(l.nombre+" "+l.palabras));});
return {th:th,lh:lh};
}

function abrirCategoria(c){
var r=itemsDeCategoria(c);
$("sugerencias").innerHTML="";
$("situaciones").innerHTML="";
$("buscar").value="";
pintar(r.th,r.lh,avisoHtml("Categoría:",c.titulo));
var res=$("resultados");
if(res.scrollIntoView){res.scrollIntoView({behavior:"smooth",block:"start"});}
}

function dibujarCategorias(){
var cont=$("categorias");
if(!cont){return;}
cont.innerHTML="";
CATEGORIAS.forEach(function(c){
var r=itemsDeCategoria(c);
var total=r.th.length+r.lh.length;
cont.appendChild(crearChip(c.icono+" "+c.titulo+" ("+total+")","chip",function(){abrirCategoria(c);}));
});
}

(function(){
var ref=$("situaciones");
var det=document.createElement("details");
det.open=true;
det.style.cssText="margin-top:18px;";
var sum=document.createElement("summary");
sum.textContent="📚 Explorar todas las leyes por categoría";
sum.style.cssText="font-size:22px;font-weight:bold;color:#14532d;cursor:pointer;";
var cont=document.createElement("div");
cont.id="categorias";
det.appendChild(sum);
det.appendChild(cont);
if(ref&&ref.parentNode){ref.parentNode.insertBefore(det,ref);}
dibujarCategorias();
$("estado").addEventListener("change",dibujarCategorias);
})();
