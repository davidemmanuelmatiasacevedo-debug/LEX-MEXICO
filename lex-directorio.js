/* LEX MÉXICO - Directorio de instituciones. Va DESPUÉS de lex-categorias.js */
var DIRECTORIO=[
{grupo:"🚨 Emergencias",items:[
{n:"Emergencias (policía, ambulancia, bomberos)",q:"Cualquier peligro inmediato.",t:[["911","911"]]},
{n:"Denuncia anónima",q:"Para denunciar delitos sin dar tu nombre.",t:[["089","089"]]}
]},
{grupo:"💼 Trabajo",items:[
{n:"Profedet (defensa gratuita del trabajador)",q:"Despido, finiquito, salario, utilidades, acoso, maternidad. Asesoría y conciliación gratis.",t:[["800 911 7877","8009117877"],["800 717 2942","8007172942"],["55 5998 2000","5559982000"]],w:"https://www.gob.mx/profedet"},
{n:"STPS - Quejas laborales (SIQAL)",q:"Quejas por condiciones de trabajo, seguridad y accidentes laborales.",t:[],w:"https://siqal.stps.gob.mx/"}
]},
{grupo:"🛒 Consumo y dinero",items:[
{n:"PROFECO (Teléfono del Consumidor)",q:"Compras, garantías, cobros indebidos, aerolíneas, tiendas y servicios.",t:[["800 468 8722","8004688722"],["55 5568 8722 (CDMX)","5555688722"]],w:"https://www.gob.mx/profeco"},
{n:"CONDUSEF",q:"Quejas contra bancos, tarjetas, seguros, Afores y financieras; cargos no reconocidos y cobranza abusiva.",t:[["800 999 8080","8009998080"],["55 5340 0999","5553400999"]],w:"https://www.gob.mx/condusef"},
{n:"IFT - Soy Usuario (telecomunicaciones)",q:"Problemas con celular, internet y televisión de paga.",t:[["800 2000 120","8002000120"]],w:"https://www.soyusuario.ift.org.mx"}
]},
{grupo:"⚖️ Derechos humanos y discriminación",items:[
{n:"CNDH (Comisión Nacional de los Derechos Humanos)",q:"Quejas por abusos de autoridades: policías, militares, hospitales públicos, escuelas.",t:[["800 715 2000","8007152000"],["55 5681 8125","5556818125"]],w:"https://www.cndh.org.mx"},
{n:"CONAPRED",q:"Quejas por discriminación (origen, género, edad, discapacidad, religión, orientación sexual).",t:[["800 543 0033","8005430033"],["55 5262 1490","5552621490"]],w:"https://www.conapred.org.mx"}
]},
{grupo:"🛡️ Víctimas y violencia",items:[
{n:"Línea de atención a mujeres",q:"Orientación por violencia familiar, de pareja o de género.",t:[["800 108 4053","8001084053"]]},
{n:"Red Nacional de Refugios",q:"Refugio seguro para mujeres, niñas y niños que viven violencia.",t:[["800 822 4460","8008224460"]]},
{n:"CEAV (Comisión Ejecutiva de Atención a Víctimas)",q:"Asesoría jurídica, atención y reparación del daño para víctimas de delitos.",t:[["800 842 8462","8008428462"],["55 1000 2000","5510002000"]],w:"https://www.gob.mx/ceav"},
{n:"Línea Nacional contra la Trata de Personas",q:"Reportar o pedir ayuda por trata y explotación.",t:[["800 5533 000","8005533000"]]},
{n:"Línea de la Vida (salud mental y adicciones)",q:"Apoyo emocional y orientación por adicciones.",t:[["800 911 2000","8009112000"]]},
{n:"Secretaría de las Mujeres (federal)",q:"Orientación y canalización a servicios para mujeres.",t:[["55 5322 4200","5553224200"]],w:"https://www.gob.mx/mujeres"}
]},
{grupo:"🏥 Salud",items:[
{n:"CONAMED",q:"Quejas por mala atención médica en hospitales y consultorios.",t:[["55 5420 7000, opción 1","5554207000"]],w:"https://www.gob.mx/conamed"},
{n:"IMSS",q:"Seguro social, incapacidades, pensiones y riesgos de trabajo.",t:[],w:"https://www.imss.gob.mx"}
]},
{grupo:"🏠 Vivienda y retiro",items:[
{n:"Infonatel (INFONAVIT)",q:"Saldo de la subcuenta de vivienda, créditos y reporte de fraudes.",t:[["800 008 3900","8000083900"]],w:"https://www.infonavit.org.mx"},
{n:"FONACOT",q:"Créditos para trabajadores y dudas sobre descuentos.",t:[["800 366 2268","8003662268"]],w:"https://www.gob.mx/fonacot"}
]},
{grupo:"🗳️ Elecciones",items:[
{n:"INETEL (INE)",q:"Credencial para votar, citas, cambio de domicilio y reposición.",t:[["800 433 2000","8004332000"]],w:"https://www.ine.mx"}
]},
{grupo:"📍 Oaxaca",items:[
{n:"Secretaría de las Mujeres de Oaxaca",q:"Orientación y apoyo para mujeres que sufren violencia.",t:[["(951) 207 2666","9512072666"]]}
]}
];

function dibujarDirectorio(){
var ref=document.getElementById("situaciones");
if(!ref||!ref.parentNode){return;}
var det=document.createElement("details");
det.style.cssText="margin-top:18px;";
var sum=document.createElement("summary");
sum.textContent="📞 Directorio: a quién llamar y qué atiende cada institución";
sum.style.cssText="font-size:22px;font-weight:bold;color:#14532d;cursor:pointer;";
det.appendChild(sum);
DIRECTORIO.forEach(function(g){
var h=document.createElement("h3");
h.textContent=g.grupo;
h.style.cssText="margin:18px 0 8px;font-size:22px;";
det.appendChild(h);
g.items.forEach(function(it){
var a=document.createElement("article");
a.className="tarjeta";
var t=document.createElement("h2");
t.textContent=it.n;
var p=document.createElement("p");
p.textContent=it.q;
a.appendChild(t);
a.appendChild(p);
var estilo="display:inline-block;padding:10px 14px;margin:4px 8px 4px 0;border:2px solid #14532d;border-radius:8px;color:#14532d;font-weight:bold;text-decoration:none;";
(it.t||[]).forEach(function(x){
var l=document.createElement("a");
l.href="tel:"+x[1];
l.textContent="📞 "+x[0];
l.style.cssText=estilo;
a.appendChild(l);
});
if(it.w&&it.w.indexOf("https://")===0){
var w=document.createElement("a");
w.href=it.w;
w.target="_blank";
w.rel="noopener noreferrer";
w.textContent="🌐 Sitio oficial";
w.style.cssText=estilo;
a.appendChild(w);
}
det.appendChild(a);
});
});
var nota=document.createElement("p");
nota.className="aviso";
nota.textContent="Verifica los números antes de llamar: pueden cambiar. Si una línea no contesta, busca el teléfono vigente en el sitio oficial de la institución.";
det.appendChild(nota);
ref.parentNode.insertBefore(det,ref);
}
dibujarDirectorio();
