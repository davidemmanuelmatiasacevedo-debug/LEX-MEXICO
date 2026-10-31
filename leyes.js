
const leyes = [
  // =========================
  // LEYES Y CÓDIGOS FEDERALES
  // =========================

  {
    nombre: "Constitución Política de los Estados Unidos Mexicanos",
    resumen: "Es la ley suprema de México. Establece los derechos humanos, las garantías y la organización del Estado.",
    palabras: "constitucion derechos humanos garantias libertad igualdad derechos fundamentales amparo",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm",
    pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"
  },
  {
    nombre: "Código Penal Federal",
    resumen: "Establece los delitos del orden federal y las penas correspondientes.",
    palabras: "penal delito robo fraude homicidio lesiones amenazas extorsion abuso violencia secuestro",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm",
    pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf"
  },
  {
    nombre: "Código Civil Federal",
    resumen: "Regula obligaciones, contratos, bienes, propiedad y relaciones civiles del ámbito federal.",
    palabras: "civil contrato renta propiedad herencia obligaciones bienes arrendamiento daños",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm",
    pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CCF.pdf"
  },
  {
    nombre: "Código Nacional de Procedimientos Penales",
    resumen: "Regula las etapas del procedimiento penal, las audiencias, la investigación y los derechos de las partes.",
    palabras: "proceso penal denuncia fiscalia ministerio publico audiencia detenido imputado juicio carpeta investigacion",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Código Nacional de Procedimientos Civiles y Familiares",
    resumen: "Establece las reglas de los procedimientos judiciales civiles y familiares en México.",
    palabras: "juicio civil familiar divorcio custodia alimentos demanda procedimiento juzgado",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Código de Comercio",
    resumen: "Regula los actos de comercio y diversas relaciones jurídicas entre comerciantes y empresas.",
    palabras: "comercio empresa comerciante negocios mercantil pagaré cheque sociedades",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Código Fiscal de la Federación",
    resumen: "Contiene disposiciones sobre obligaciones fiscales, contribuciones, facultades de autoridades y procedimientos tributarios.",
    palabras: "fiscal impuestos sat contribuciones multas hacienda credito fiscal",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley Federal del Trabajo",
    resumen: "Regula las relaciones laborales, salarios, jornadas, vacaciones, despidos y derechos de las personas trabajadoras.",
    palabras: "trabajo trabajador patron despido salario vacaciones aguinaldo empleo contrato liquidacion finiquito",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm",
    pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf"
  },
  {
    nombre: "Ley Federal de Protección al Consumidor",
    resumen: "Protege los derechos de las personas consumidoras en compras y contratación de servicios.",
    palabras: "consumidor profeco compra garantia tienda producto publicidad cobro abusivo devolucion",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm",
    pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf"
  },
  {
    nombre: "Ley de Amparo",
    resumen: "Regula el juicio de amparo para proteger a las personas frente a normas, actos u omisiones de autoridad que vulneren derechos.",
    palabras: "amparo autoridad derechos violacion constitucional suspension juicio proteccion",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley General de los Derechos de Niñas, Niños y Adolescentes",
    resumen: "Reconoce y protege los derechos de niñas, niños y adolescentes.",
    palabras: "niños niñas adolescentes infancia menores derechos familia proteccion",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley General de Acceso de las Mujeres a una Vida Libre de Violencia",
    resumen: "Establece medidas para prevenir, atender, sancionar y erradicar la violencia contra las mujeres.",
    palabras: "mujer violencia genero violencia familiar acoso feminicidio proteccion",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley General de Salud",
    resumen: "Regula el derecho a la protección de la salud y las bases de los servicios sanitarios.",
    palabras: "salud hospitales medicina servicios medicos pacientes medicamentos sanitario",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley General del Sistema Nacional de Seguridad Pública",
    resumen: "Establece las bases de coordinación entre instituciones de seguridad pública.",
    palabras: "seguridad publica policia seguridad instituciones prevencion delito",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley Federal contra la Delincuencia Organizada",
    resumen: "Regula la investigación, persecución y sanción de los delitos cometidos por organizaciones criminales.",
    palabras: "delincuencia organizada crimen organizado cartel organizacion criminal investigacion",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley de Migración",
    resumen: "Regula el ingreso, salida, tránsito y estancia de personas extranjeras en México.",
    palabras: "migracion migrante extranjero visa residencia deportacion estancia frontera",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley Agraria",
    resumen: "Regula la propiedad ejidal y comunal, así como los derechos relacionados con la tierra.",
    palabras: "agraria ejido parcela tierras campesino comunal propiedad rural",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley del Seguro Social",
    resumen: "Regula los derechos y obligaciones relacionados con el régimen de seguridad social del IMSS.",
    palabras: "imss seguro social incapacidad pension trabajador semanas cotizadas",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado",
    resumen: "Regula las prestaciones y servicios de seguridad social de las personas trabajadoras del Estado.",
    palabras: "issste pension jubilacion trabajador gobierno servicio medico",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
    resumen: "Regula el tratamiento de datos personales por empresas y particulares.",
    palabras: "datos personales privacidad informacion personal empresas proteccion identidad",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },

  // =========================
  // TRÁNSITO Y MOVILIDAD
  // =========================

  {
    nombre: "Ley General de Movilidad y Seguridad Vial",
    resumen: "Establece las bases nacionales para la movilidad, la seguridad vial y la coordinación entre Federación, estados y municipios.",
    palabras: "transito transito vialidad movilidad seguridad vial accidentes peatones ciclistas motocicletas conductores carreteras",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm",
    pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGMSV.pdf"
  },
  {
    nombre: "Ley de Caminos, Puentes y Autotransporte Federal",
    resumen: "Regula los caminos y puentes de jurisdicción federal y los servicios de autotransporte federal.",
    palabras: "carreteras federales caminos puentes transporte federal camion autobuses autotransporte casetas",
    web: "https://www.diputados.gob.mx/LeyesBiblio/index.htm"
  },
  {
    nombre: "Reglamento de Tránsito en Carreteras y Puentes de Jurisdicción Federal",
    resumen: "Contiene disposiciones de circulación y seguridad vial en caminos y puentes federales. Consulta la versión vigente y sus reformas.",
    palabras: "reglamento transito federal carretera federal velocidad señalamiento infracciones multas conductor",
    web: "https://www.dof.gob.mx/nota_detalle_popup.php?codigo=5278684"
  },
  {
    nombre: "Ley de Tránsito y Vialidad del Estado de Oaxaca",
    resumen: "Regula el tránsito y la vialidad en el Estado de Oaxaca. Consulta el texto y sus reformas en el Congreso estatal.",
    palabras: "transito oaxaca vialidad multas infracciones licencia conductor motocicleta automovil placas vehiculo",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Ley de Movilidad para el Estado de Oaxaca",
    resumen: "Regula la movilidad y los servicios relacionados en el Estado de Oaxaca.",
    palabras: "movilidad oaxaca transporte publico taxi urbano colectivo pasajeros concesiones transporte",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Reglamento de la Ley de Movilidad para el Estado de Oaxaca",
    resumen: "Desarrolla las disposiciones para aplicar la Ley de Movilidad de Oaxaca.",
    palabras: "reglamento movilidad oaxaca transporte concesiones servicio publico transporte",
    web: "https://www.oaxaca.gob.mx/semovi/marco-juridico/"
  },
  {
    nombre: "Reglamento de la Ley de Tránsito y Vialidad del Estado de Oaxaca",
    resumen: "Contiene disposiciones reglamentarias para aplicar la legislación de tránsito y vialidad de Oaxaca.",
    palabras: "reglamento transito oaxaca vialidad circulacion vehiculos infracciones",
    web: "https://www.oaxaca.gob.mx/semovi/marco-juridico/"
  },
  {
    nombre: "Ley de Caminos y Aeropistas de Oaxaca",
    resumen: "Regula aspectos relacionados con caminos y aeropistas de competencia estatal.",
    palabras: "caminos oaxaca aeropistas carreteras infraestructura vial",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Ley de Caminos, Carreteras y Puentes para el Estado de Oaxaca",
    resumen: "Contiene disposiciones estatales sobre caminos, carreteras y puentes.",
    palabras: "caminos carreteras puentes oaxaca infraestructura vial",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Ley de Encierros y Depósitos de Vehículos para el Estado de Oaxaca",
    resumen: "Regula los encierros y depósitos de vehículos en el ámbito estatal.",
    palabras: "corralon grua deposito vehicular arrastre vehiculo infraccion oaxaca encierro",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },

  // =========================
  // OTRAS LEYES DE OAXACA
  // =========================

  {
    nombre: "Constitución Política del Estado Libre y Soberano de Oaxaca",
    resumen: "Es la norma fundamental del Estado de Oaxaca y establece su organización política y derechos.",
    palabras: "constitucion oaxaca derechos estado gobierno",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Código Penal para el Estado Libre y Soberano de Oaxaca",
    resumen: "Establece los delitos del fuero común en Oaxaca y las sanciones correspondientes.",
    palabras: "codigo penal oaxaca robo fraude lesiones homicidio amenazas abuso delito",
    web: "https://www.oaxaca.gob.mx/semovi/marco-juridico/"
  },
  {
    nombre: "Código Civil para el Estado de Oaxaca",
    resumen: "Regula relaciones civiles, contratos, bienes, obligaciones y otros asuntos entre particulares en Oaxaca.",
    palabras: "codigo civil oaxaca renta contrato propiedad herencia familia bienes",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Ley Orgánica Municipal del Estado de Oaxaca",
    resumen: "Establece las bases de organización y funcionamiento de los municipios de Oaxaca.",
    palabras: "municipio ayuntamiento presidente municipal cabildo autoridad municipal oaxaca",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  },
  {
    nombre: "Ley de Responsabilidades Administrativas del Estado y Municipios de Oaxaca",
    resumen: "Regula las responsabilidades administrativas de las personas servidoras públicas en Oaxaca.",
    palabras: "corrupcion servidor publico funcionario responsabilidades sancion administrativa oaxaca",
    web: "https://www.congresooaxaca.gob.mx/legislaciones/legislacion_estatal.html"
  }
];
