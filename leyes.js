
const leyes = [
{
nombre:"Constitución Política de los Estados Unidos Mexicanos",
resumen:"Es la ley suprema del país. Reconoce los derechos humanos y organiza al gobierno.",
palabras:"derechos libertad igualdad constitucion garantias",
web:"https://www.diputados.gob.mx/LeyesBiblio/ref/cpeum.htm",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"
},
{
nombre:"Ley Federal del Trabajo",
resumen:"Regula las relaciones entre personas trabajadoras y patrones, incluyendo salarios, jornadas, vacaciones, despidos y prestaciones.",
palabras:"trabajo despido salario vacaciones aguinaldo contrato empleo trabajador patron",
web:"https://www.diputados.gob.mx/LeyesBiblio/ref/lft.htm",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf"
},
{
nombre:"Ley Federal de Protección al Consumidor",
resumen:"Protege a las personas consumidoras en compras y contratación de servicios. Establece derechos y obligaciones de proveedores.",
palabras:"consumidor garantia compra tienda profeco servicio proveedor devolucion",
web:"https://www.diputados.gob.mx/LeyesBiblio/ref/lfpc.htm",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf"
},
{
nombre:"Código Civil Federal",
resumen:"Regula relaciones civiles de competencia federal, como obligaciones, contratos, bienes y sucesiones.",
palabras:"renta contrato propiedad herencia familia obligaciones bienes sucesion",
web:"https://www.diputados.gob.mx/LeyesBiblio/ref/ccf.htm",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CCF.pdf"
},
{
nombre:"Código Penal Federal",
resumen:"Establece delitos del orden federal y las sanciones correspondientes.",
palabras:"delito denuncia robo fraude penal homicidio sancion delito federal",
web:"https://www.diputados.gob.mx/LeyesBiblio/ref/cpf.htm",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf"
},
{
nombre:"Ley de Amparo",
resumen:"Regula el juicio de amparo como medio de protección frente a normas, actos u omisiones de autoridad que vulneren derechos, conforme a sus requisitos.",
palabras:"amparo juicio autoridad derechos humanos suspension proteccion constitucional",
web:"https://www.diputados.gob.mx/LeyesBiblio/ref/lamp.htm",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LAmp.pdf"
},
{
nombre:"Código Nacional de Procedimientos Penales",
resumen:"Establece las reglas del procedimiento penal acusatorio en México, desde la investigación hasta el juicio y la ejecución de resoluciones.",
palabras:"proceso penal juicio audiencia fiscalia ministerio publico imputado detenido victima",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CNPP.pdf"
},
{
nombre:"Código de Comercio",
resumen:"Regula actos de comercio y diversas relaciones jurídicas entre comerciantes y empresas.",
palabras:"comercio comerciante empresa negocios actos mercantiles sociedad",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf"
},
{
nombre:"Código Fiscal de la Federación",
resumen:"Establece disposiciones generales sobre obligaciones fiscales, contribuciones, facultades de autoridades y procedimientos tributarios.",
palabras:"impuestos sat contribuciones multas fiscales credito fiscal declaracion",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf"
},
{
nombre:"Ley del Impuesto sobre la Renta",
resumen:"Regula el impuesto sobre los ingresos de personas físicas y morales en los supuestos establecidos por la ley.",
palabras:"isr impuestos ingresos personas fisicas morales salario declaracion sat",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf"
},
{
nombre:"Ley del Impuesto al Valor Agregado",
resumen:"Regula el impuesto al valor agregado aplicable a determinados actos y actividades, como enajenación de bienes y prestación de servicios.",
palabras:"iva impuesto compras ventas servicios tasa sat",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf"
},
{
nombre:"Ley del Seguro Social",
resumen:"Regula el régimen del seguro social y los derechos y obligaciones relacionados con la seguridad social.",
palabras:"imss seguro social trabajador patrones incapacidad pension maternidad cuotas",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf"
},
{
nombre:"Ley Agraria",
resumen:"Regula el régimen de propiedad ejidal y comunal, así como derechos y organización de los núcleos agrarios.",
palabras:"campo ejido tierras parcelas comuneros ejidatarios propiedad agraria",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LAgra.pdf"
},
{
nombre:"Ley de Migración",
resumen:"Regula el ingreso, salida, tránsito y estancia de personas extranjeras en México, así como aspectos de protección migratoria.",
palabras:"migracion migrante extranjero visa residencia refugio deportacion estancia",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LMigra.pdf"
},
{
nombre:"Ley General de Salud",
resumen:"Regula el derecho a la protección de la salud y establece bases para el acceso a servicios y la organización del sistema de salud.",
palabras:"salud hospitales medicamentos servicios medicos pacientes salud publica",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf"
},
{
nombre:"Ley General de los Derechos de Niñas, Niños y Adolescentes",
resumen:"Reconoce y protege los derechos de niñas, niños y adolescentes y establece obligaciones para las autoridades y medidas de protección.",
palabras:"niños niñas adolescentes infancia menores derechos familia proteccion",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGDNNA.pdf"
},
{
nombre:"Ley General de Acceso de las Mujeres a una Vida Libre de Violencia",
resumen:"Establece mecanismos de prevención, atención, sanción y erradicación de la violencia contra las mujeres.",
palabras:"mujeres violencia genero feminicidio proteccion igualdad violencia familiar",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGAMVLV.pdf"
},
{
nombre:"Ley General del Equilibrio Ecológico y la Protección al Ambiente",
resumen:"Establece bases para la preservación y restauración del equilibrio ecológico y la protección del ambiente.",
palabras:"medio ambiente ecologia contaminacion naturaleza residuos impacto ambiental",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGEEPA.pdf"
},
{
nombre:"Ley General de Sociedades Mercantiles",
resumen:"Regula la constitución, funcionamiento, transformación, fusión, disolución y liquidación de sociedades mercantiles.",
palabras:"empresa sociedad mercantil sociedad anonima socios acciones negocio",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSM.pdf"
},
{
nombre:"Ley General de Títulos y Operaciones de Crédito",
resumen:"Regula títulos de crédito y diversas operaciones crediticias, como pagarés y otros instrumentos previstos en la ley.",
palabras:"credito pagare cheque titulo credito deuda financiamiento banco",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGTOC.pdf"
},
{
nombre:"Ley Aduanera",
resumen:"Regula la entrada y salida de mercancías del territorio nacional y los procedimientos aduaneros.",
palabras:"aduana importacion exportacion mercancia comercio exterior arancel",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LAdua.pdf"
},
{
nombre:"Ley de Aguas Nacionales",
resumen:"Regula la explotación, uso, aprovechamiento, distribución y preservación de las aguas nacionales.",
palabras:"agua concesion pozos rios cuencas aprovechamiento agua nacional",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LAN.pdf"
},
{
nombre:"Ley General de Educación",
resumen:"Regula el derecho a la educación y establece la organización y bases del sistema educativo nacional.",
palabras:"educacion escuela estudiantes maestros docentes escuelas aprendizaje",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGE.pdf"
},
{
nombre:"Ley General de Desarrollo Social",
resumen:"Establece las bases de la política nacional de desarrollo social y los derechos relacionados con el desarrollo y bienestar.",
palabras:"desarrollo social pobreza bienestar programas sociales apoyos",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGDS.pdf"
},
{
nombre:"Ley Federal de Competencia Económica",
resumen:"Busca proteger el proceso de competencia y libre concurrencia, y prevenir y sancionar prácticas monopólicas en los términos legales.",
palabras:"competencia economica monopolio empresas mercado practicas monopólicas",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LFCE.pdf"
},
{
nombre:"Ley Federal del Derecho de Autor",
resumen:"Protege los derechos de autores sobre obras literarias, artísticas y otras creaciones reconocidas por la ley.",
palabras:"autor derechos de autor musica libros obras copyright plagio propiedad intelectual",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf"
},
{
nombre:"Ley de la Propiedad Industrial",
resumen:"Regula figuras de propiedad industrial, como marcas, patentes y otros derechos sobre creaciones e identificadores comerciales.",
palabras:"marca patente propiedad industrial invento registro comercial",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPPI.pdf"
},
{
nombre:"Ley General de Protección Civil",
resumen:"Establece bases de coordinación para la protección de las personas y sus bienes ante riesgos y desastres.",
palabras:"proteccion civil desastres emergencias riesgos sismos inundaciones",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPC.pdf"
},
{
nombre:"Ley General de Víctimas",
resumen:"Establece medidas de ayuda, asistencia, atención y reparación integral para víctimas de delitos y violaciones de derechos humanos.",
palabras:"victimas delito reparacion daño asistencia derechos humanos indemnizacion",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGV.pdf"
},
{
nombre:"Ley General de Transparencia y Acceso a la Información Pública",
resumen:"Regula el derecho de acceso a la información pública y las obligaciones de transparencia de los sujetos obligados. Debe consultarse su texto vigente y régimen institucional actual.",
palabras:"transparencia informacion publica solicitudes datos gobierno acceso informacion",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:""
},
{
nombre:"Ley General de Movilidad y Seguridad Vial",
resumen:"Establece las bases y principios para garantizar el derecho a la movilidad y la seguridad vial en todo México.",
palabras:"transito movilidad seguridad vial peatones ciclistas automovilistas transporte accidentes",
web:"https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo124595.html",
pdf:"https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo124595.html"
},
{
nombre:"Reglamento de Tránsito en Carreteras y Puentes de Jurisdicción Federal",
resumen:"Regula la circulación de vehículos, conductores, pasajeros y peatones en carreteras y puentes federales.",
palabras:"transito federal carreteras puentes multas infracciones velocidad placas conductores",
web:"https://dof.gob.mx/nota_detalle_popup.php?codigo=5278684",
pdf:"https://www.dof.gob.mx/abrirPDF.php?anio=2012&archivo=22112012-MAT.pdf&repo=repositorio%2F"
},
{
nombre:"Ley de Tránsito y Vialidad del Estado de Oaxaca",
resumen:"Regula el tránsito de personas y vehículos en las vías públicas de competencia estatal en Oaxaca y establece disposiciones de vialidad y sanciones administrativas.",
palabras:"transito oaxaca vialidad multas infracciones placas licencia automovil motocicleta conductor",
web:"https://www.oaxaca.gob.mx/semovi/marco-juridico/",
pdf:"https://www.oaxaca.gob.mx/semovi/wp-content/uploads/sites/34/2025/10/Ley_de_Transito_y_vialidad_Ref_dto_706_LXVI_Legis_8_jul_2025_PO_32_IX_secc_de_fecha_9_agosto_2025.pdf"
},
{
nombre:"Ley de Movilidad para el Estado de Oaxaca",
resumen:"Regula la movilidad de personas y mercancías, así como el transporte público y privado y los servicios relacionados en Oaxaca.",
palabras:"movilidad oaxaca transporte publico taxi colectivo autobuses concesiones rutas pasajeros",
web:"https://www.oaxaca.gob.mx/semovi/marco-juridico/",
pdf:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
},
{
nombre:"Reglamento de la Ley de Movilidad para el Estado de Oaxaca",
resumen:"Desarrolla disposiciones administrativas para aplicar la Ley de Movilidad de Oaxaca.",
palabras:"reglamento movilidad oaxaca transporte concesiones permisos servicio publico",
web:"https://www.oaxaca.gob.mx/semovi/marco-juridico/",
pdf:"https://www.oaxaca.gob.mx/semovi/marco-juridico/"
},
{
nombre:"Ley de Caminos, Puentes y Autotransporte Federal",
resumen:"Regula la construcción, operación, explotación, conservación y mantenimiento de caminos y puentes federales, así como el autotransporte federal.",
palabras:"carreteras federales caminos puentes autotransporte camiones transporte federal",
web:"https://www.diputados.gob.mx/LeyesBiblio/",
pdf:"https://www.diputados.gob.mx/LeyesBiblio/"
},
{
nombre:"Ley de Caminos y Aeropistas de Oaxaca",
resumen:"Contiene disposiciones estatales relacionadas con caminos y aeropistas en Oaxaca.",
palabras:"caminos carreteras aeropistas oaxaca vialidad infraestructura",
web:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html",
pdf:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
},
{
nombre:"Ley de Caminos, Carreteras y Puentes para el Estado de Oaxaca",
resumen:"Regula aspectos estatales de caminos, carreteras y puentes en Oaxaca.",
palabras:"caminos carreteras puentes oaxaca infraestructura vial",
web:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html",
pdf:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
},
{
nombre:"Ley de Encierros y Depósitos de Vehículos para el Estado de Oaxaca",
resumen:"Regula aspectos relacionados con los encierros y depósitos de vehículos en el estado.",
palabras:"corralon grua deposito vehiculos arrastre encierro automovil oaxaca",
web:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html",
pdf:"https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
}
];
