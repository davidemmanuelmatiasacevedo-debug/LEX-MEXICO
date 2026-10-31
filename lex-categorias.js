/* LEX MÉXICO - Explorar todas las leyes por categoría. Va DESPUÉS de lex-ui.js */
var CATEGORIAS=[
{icono:"🛒",titulo:"Consumidor, dinero e impuestos",
temas:["Derechos del consumidor","Comercio y contratos mercantiles","Impuestos y SAT","Bancos, tarjetas y deudas","FONACOT (créditos para trabajadores)"],
leyes:/consumidor|comercio|fiscal|servicios financieros|instituciones de credito|informacion crediticia|ordenamiento de los servicios|impuesto|contribuyente|coordinacion fiscal|aduanera|titulos y operaciones|sociedades mercantiles|sociedades cooperativas|competencia economica|telecomunicaciones|derecho de autor|propiedad industrial|turismo|aviacion|juegos y sorteos/},
{icono:"💼",titulo:"Trabajo y seguridad social",
temas:["Despido y derechos laborales","Seguro social, incapacidades y pensión","Hostigamiento y acoso laboral","Embarazo, maternidad y paternidad","Accidente de trabajo","Reparto de utilidades (PTU)","Outsourcing y subcontratación","Trabajadoras del hogar","Afore y jubilación","INFONAVIT"],
leyes:/trabajo|seguro social|issste|instituto de seguridad|trabajadores|ahorro para el retiro|vivienda para los trabajadores/},
{icono:"⚖️",titulo:"Delitos, policía y justicia penal",
temas:["Robo","Fraude","Amenazas","Extorsión","Lesiones","Homicidio","Despojo","Denuncia, detención y proceso penal","Delincuencia organizada","Seguridad pública y policía","Drogas y narcomenudeo","Detención arbitraria y tortura","Defensoría pública (abogado gratis)","Difamación y calumnias","Allanamiento de morada","Abuso de confianza y daño en propiedad ajena"],
leyes:/penal|delincuencia|seguridad publica|tortura|uso de la fuerza|guardia nacional|armas de fuego|extincion de dominio|ejecucion penal|justicia penal para adolescentes|mecanismos alternativos|defensoria publica|procedencia ilicita|derecho de replica|fiscalia/},
{icono:"🛡️",titulo:"Víctimas, violencia y desaparición",
temas:["Violación y abuso sexual","Secuestro","Violencia familiar","Feminicidio","Desaparición de personas","Trata de personas","Orden de protección","Derechos de la víctima y reparación del daño","Violencia digital, Ley Olimpia y sextorsión"],
leyes:/victimas|secuestro|trata de personas|desaparicion|tortura|acceso de las mujeres|belem do para|cedaw/},
{icono:"🚗",titulo:"Tránsito, vehículos y transporte",
temas:["Multas e infracciones de tránsito","Licencia de conducir y placas","Corralón y grúa","Accidente de tránsito o choque","Transporte público, taxis y concesiones","Carreteras, caminos y autotransporte"],
leyes:/transito|movilidad|caminos|carreteras|encierros|vialidad|navegacion|pesca/},
{icono:"👨‍👩‍👧",titulo:"Familia, niñez y mujeres",
temas:["Divorcio, custodia y pensión alimenticia","Derechos de niñas, niños y adolescentes","Violencia contra las mujeres","Actas del Registro Civil y CURP","Adultos mayores","Personas con discapacidad","Discriminación"],
leyes:/familiares|ninas|mujeres|discriminacion|discapacidad|adultas mayores|igualdad|asistencia social|desarrollo social|indigenas|derechos del nino|poblacion|desarrollo integral infantil/},
{icono:"🏠",titulo:"Vivienda, tierras y construcción",
temas:["Renta, contratos y herencia","Tierras, ejidos y comunidades","Ventanas, balcones y vistas hacia el vecino","Barda, colindancia y pared medianera","Licencia de construcción y permisos de obra","Construcción sin permiso, clausura y multas de obra","Uso de suelo, alineamiento, altura y número oficial","La obra del vecino daña mi casa (grietas, humedad, ruido)","Servidumbre de paso, agua y drenaje entre vecinos","El constructor o contratista incumple o la obra sale mal","Vecinos, ruido y condominios"],
leyes:/civil|agraria|asentamientos|vivienda|hacienda municipal/},
{icono:"🌳",titulo:"Ambiente, agua, cultura y otros",
temas:[],
leyes:/equilibrio ecologico|aguas nacionales|forestal|residuos|cambio climatico|vida silvestre|proteccion civil|monumentos|cultura|deporte|educacion|mejora continua/},
{icono:"🏛️",titulo:"Derechos, gobierno y salud",
temas:["Derechos humanos y Constitución","Juicio de amparo","Derechos como paciente (salud)","Migración y personas extranjeras","Protección de datos personales","Municipio y ayuntamiento","Corrupción y servidores públicos","Transparencia y acceso a la información","Credencial para votar (INE) y voto"],
leyes:/constitucion|amparo|salud|migracion|datos personales|municipal|responsabilidades|transparencia|electoral|partidos politicos|consulta popular|nacionalidad|refugiados|derechos humanos|procedimiento administrativo|procedimiento contencioso|anticorrupcion|responsabilidad patrimonial|fiscalia general|poder judicial|administracion publica|seguridad nacional|planeacion|mejora regulatoria|convencion|pacto|declaracion universal|pueblos y comunidades|derecho de replica/}
];

function itemsDeCategoria(c){
var th=TEMAS.filter(function(t){return c.temas.indexOf(t.nombre)!==-1;});
var lh=LEYES.filter(function(l){return c.leyes.test(limpiar(l.nombre));});
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
