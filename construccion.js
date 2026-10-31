/* LEX MÉXICO - Temas de construcción, vecinos y obra. Se agregan a temas y leyes. */
var CONS_WEB="https://www.diputados.gob.mx/LeyesBiblio/index.htm";
var P_OBRA="obra obras construccion construir construyo construyeron construyen casa edificio terreno lote vecino vecina colindancia arquitecto ingeniero albañil";

leyes.push(
{nombre:"Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano",resumen:"Establece las bases nacionales del desarrollo urbano, el uso del suelo y el ordenamiento del territorio. Cada estado y municipio lo desarrolla con sus propias leyes y reglamentos de construcción.",palabras:"construccion uso de suelo desarrollo urbano ordenamiento territorial licencia zonificacion urbanismo obra",web:CONS_WEB},
{nombre:"Ley General de Protección Civil",resumen:"Regula la prevención y atención de riesgos y desastres, incluidos los que pueden causar construcciones inseguras.",palabras:"proteccion civil riesgo sismo derrumbe construccion inseguras desastre",web:CONS_WEB}
);

temas.push(
{
nombre:"Ventanas, balcones y vistas hacia el vecino",
palabras:P_OBRA+" ventana ventanas balcon balcones terraza azotea vista asomarse ver luz privacidad distancia metro",
queEs:"Son las reglas sobre abrir ventanas, balcones o terrazas que dan hacia la casa o el terreno del vecino. Buscan proteger la privacidad y la luz de la propiedad de al lado.",
queConlleva:"Si una ventana o balcón no respeta la distancia mínima que marca la ley local, el vecino afectado puede pedir que se modifique o se quite. Además, el municipio puede imponer sanciones si no hay permiso.",
ley:"Código Civil de tu estado, en el capítulo de servidumbres y vistas, y el reglamento de construcción de tu municipio. La distancia exacta cambia por estado. Por ejemplo, en Jalisco el Código Civil exige 1 metro entre la ventana para asomarse y el límite del terreno.",
importante:"No existe una sola distancia para todo México. Revisa el Código Civil de tu estado y pregunta en Desarrollo Urbano de tu municipio. Si ya existe la ventana desde hace años, consulta a un abogado, porque puede cambiar el caso.",
web:CONS_WEB,
pasos:["Mide la distancia entre la ventana y el límite del terreno, y toma fotos.","Habla primero con el vecino, de forma tranquila. Muchos casos se resuelven así.","Si no hay acuerdo, envía una queja por escrito a Desarrollo Urbano u Obras Públicas del municipio.","Si no resuelve, un abogado puede demandar en la vía civil que se modifique la construcción.","Guarda fotos, fechas y cualquier documento de las propiedades."]
},
{
nombre:"Barda, colindancia y pared medianera",
palabras:P_OBRA+" barda bardas muro muros pared medianera lindero limite colindancia terreno invadir invadio cerca reja deslinde",
queEs:"Son las reglas sobre la barda o pared que separa dos propiedades. Una pared medianera es la que comparten ambos vecinos, y cada uno la usa y la mantiene.",
queConlleva:"Si una persona construye sobre el terreno del vecino o daña la pared compartida, puede tener que repararla, demolerla o pagar daños. Los gastos de una pared compartida se reparten, según lo que marque el Código Civil local.",
ley:"Código Civil de tu estado, en el capítulo de la copropiedad y los muros medianeros, y el reglamento de construcción de tu municipio. Artículos específicos pendientes de verificación.",
importante:"Antes de levantar una barda, confirma dónde está el límite exacto de tu terreno con tus escrituras o un plano. Si tienes duda, un topógrafo puede hacer un deslinde.",
web:CONS_WEB,
pasos:["Revisa tus escrituras y tu plano para saber dónde termina tu terreno.","Si dudas del límite, contrata un topógrafo para que haga un deslinde con medidas.","Habla con tu vecino y, si hay acuerdo, déjalo por escrito y firmado.","Si construyó sobre tu terreno, presenta queja en el municipio y consulta a un abogado civil.","No derribes ni cambies la barda por tu cuenta. Puede volverse un problema legal contra ti."]
},
{
nombre:"Licencia de construcción y permisos de obra",
palabras:P_OBRA+" licencia permiso permisos tramite construir ampliar ampliacion remodelar remodelacion segundo piso piso bardear demoler demolicion planos responsable director",
queEs:"Es la autorización del municipio para construir, ampliar, remodelar o demoler. Normalmente se pide a Desarrollo Urbano u Obras Públicas, con planos y datos del terreno.",
queConlleva:"Construir con licencia da certeza legal. Sin ella, pueden clausurarte la obra, multarte o pedirte demoler lo construido. También puede dificultar vender o escriturar después.",
ley:"Reglamento de construcción y ley de desarrollo urbano de tu estado o municipio. A nivel nacional, la Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano da las bases. Artículos específicos pendientes de verificación.",
importante:"Los requisitos y costos cambian por municipio. Algunas obras pequeñas necesitan solo un aviso. Pregunta en Desarrollo Urbano antes de empezar y pide por escrito qué necesitas.",
web:CONS_WEB,
pasos:["Reúne tus escrituras, identificación, boleta predial al corriente y comprobante de domicilio.","Pide en Desarrollo Urbano o en Obras Públicas del municipio la lista de requisitos para tu obra.","Prepara planos firmados por un arquitecto o ingeniero, si te los piden.","Paga solo en las cajas oficiales y guarda el recibo.","Coloca la licencia visible en la obra y no cambies el proyecto sin avisar."]
},
{
nombre:"Construcción sin permiso, clausura y multas de obra",
palabras:P_OBRA+" clausura clausurar clausurado sellos multa sancion sin permiso sin licencia irregular demoler demolicion inspeccion inspector suspension denuncia",
queEs:"Es cuando una obra se hace sin licencia o sin respetar lo autorizado. La autoridad municipal puede inspeccionar, suspender los trabajos, poner sellos de clausura y multar.",
queConlleva:"Puede haber multa, suspensión o clausura de la obra y, en casos graves, orden de demolición. Quitar los sellos sin permiso puede traer consecuencias legales adicionales.",
ley:"Reglamento de construcción y ley de desarrollo urbano de tu estado o municipio. Artículos específicos pendientes de verificación.",
importante:"No quites sellos de clausura. Si recibes un aviso de inspección o una orden, léela con calma: suele indicar un plazo para presentar documentos o inconformarte. Anota la fecha en que la recibiste.",
web:CONS_WEB,
pasos:["Lee el documento de inspección o clausura y anota la fecha en que lo recibiste.","Reúne tus planos, licencia y recibos, si los tienes.","No sigas trabajando mientras haya sellos. Respeta la suspensión.","Acude a Desarrollo Urbano a presentar tus documentos o a regularizar la obra.","Consulta a un abogado para inconformarte dentro del plazo que marque el documento."],
plazo:"Cada orden indica su propio plazo para inconformarte o regularizar. Léelo y no lo dejes pasar."
},
{
nombre:"Uso de suelo, alineamiento, altura y número oficial",
palabras:P_OBRA+" uso de suelo alineamiento numero oficial altura niveles pisos densidad zonificacion area libre cos cus constancia plan de desarrollo urbano comercial habitacional",
queEs:"Son las reglas que dicen qué se puede construir en tu terreno: para qué se puede usar (casa, comercio, industria), cuántos pisos, qué tan alto, cuánto del terreno se puede ocupar y a qué distancia de la calle.",
queConlleva:"Si construyes algo que el uso de suelo no permite, puedes recibir multa, clausura o que te nieguen permisos. Hay documentos que el municipio expide para comprobar lo permitido, como la constancia de alineamiento y número oficial.",
ley:"Plan o programa de desarrollo urbano del municipio, reglamento de construcción y ley de desarrollo urbano de tu estado. A nivel nacional, la Ley General de Asentamientos Humanos, Ordenamiento Territorial y Desarrollo Urbano. Artículos específicos pendientes de verificación.",
importante:"Antes de comprar un terreno o abrir un negocio, pide la constancia de uso de suelo. Es la forma de confirmar que lo que quieres hacer sí se puede.",
web:CONS_WEB,
pasos:["Pide en Desarrollo Urbano la constancia de uso de suelo y la de alineamiento y número oficial de tu predio.","Revisa qué altura, cuántos pisos y qué porcentaje del terreno puedes ocupar.","Haz tu proyecto con esos datos antes de construir o rentar un local.","Si compras un terreno, pide también las escrituras y que el predial esté al corriente.","Guarda las constancias, porque te las pedirán para la licencia."]
},
{
nombre:"La obra del vecino daña mi casa (grietas, humedad, ruido)",
palabras:P_OBRA+" grietas daño daños humedad filtracion vibracion ruido polvo escombro derrumbe excavacion cimentacion cuarteaduras indemnizacion afecta afecto molestias",
queEs:"Es cuando una obra de al lado causa daños a tu propiedad, como grietas o filtraciones, o molestias fuertes por ruido y polvo.",
queConlleva:"Quien causa un daño con su construcción debe repararlo o pagarlo. Si la obra pone en riesgo a personas, la autoridad de protección civil puede intervenir y suspenderla.",
ley:"Código Civil de tu estado, en lo de responsabilidad por daños, y el reglamento de construcción de tu municipio. Si hay riesgo, la Ley General de Protección Civil y las de tu estado. Artículos específicos pendientes de verificación.",
importante:"Documenta el estado de tu casa lo antes posible, con fotos y fechas. Si hay riesgo de derrumbe, no esperes: llama a Protección Civil.",
web:CONS_WEB,
pasos:["Si hay riesgo de derrumbe o peligro, llama al 911 y a Protección Civil, y sal de la zona.","Toma fotos y video con fecha de las grietas, daños y de la obra.","Habla con el responsable de la obra o con el vecino y pide que lo reparen.","Presenta tu queja por escrito en Desarrollo Urbano y en Protección Civil de tu municipio.","Consulta a un abogado civil para reclamar el pago de los daños. Un perito en construcción puede hacer un dictamen."],
telefonos:"Emergencias: 911."
},
{
nombre:"Servidumbre de paso, agua y drenaje entre vecinos",
palabras:P_OBRA+" servidumbre paso agua drenaje desague tubo tuberia salida predio encerrado acceso camino vecinos bajada de agua escurrimiento canal",
queEs:"Una servidumbre es el derecho de usar una parte del terreno de otra persona para algo necesario, como pasar a tu casa o conducir agua o drenaje. Es común cuando un predio no tiene salida a la calle.",
queConlleva:"Quien tiene el derecho puede usarlo, y el dueño del terreno afectado debe permitirlo, normalmente a cambio de una compensación y con el menor daño posible. No se puede bloquear el paso o el desagüe sin una razón legal.",
ley:"Código Civil de tu estado, en el capítulo de servidumbres. Artículos específicos pendientes de verificación.",
importante:"Conviene que la servidumbre conste por escrito y esté inscrita en el Registro Público de la Propiedad. Si te bloquean el paso, no uses la fuerza; busca la vía legal.",
web:CONS_WEB,
pasos:["Revisa tus escrituras para ver si ya existe una servidumbre anotada.","Intenta un acuerdo con el vecino y déjalo por escrito ante notario.","Si te bloquean el paso o el agua, toma fotos y guarda testigos.","Consulta a un abogado civil para exigir el respeto de la servidumbre.","Inscribe el acuerdo en el Registro Público de la Propiedad."]
},
{
nombre:"El constructor o contratista incumple o la obra sale mal",
palabras:P_OBRA+" contratista constructor albañil maestro de obra contrato anticipo presupuesto incumple abandono obra mal hecha defectos vicios ocultos retraso pago garantia fianza",
queEs:"Es cuando la persona o empresa que contrataste para construir no termina, abandona la obra, cobra de más o la hace con defectos.",
queConlleva:"Puedes exigir que termine o repare, pedir una rebaja o la devolución de lo pagado, y reclamar daños. Un contrato por escrito con alcances y fechas hace mucho más fácil probarlo.",
ley:"Código Civil de tu estado y, cuando se trate de una empresa que presta servicios al público, la Ley Federal de Protección al Consumidor. Artículos específicos pendientes de verificación.",
importante:"Nunca des todo el anticipo de golpe. Paga por avances y pide recibo de cada pago. Si hay mala calidad, no pagues el resto sin una revisión.",
web:CONS_WEB,
pasos:["Reúne tu contrato, presupuesto, recibos, mensajes y fotos de los avances.","Reclama por escrito (también sirve un mensaje) qué falta o qué está mal y da un plazo para arreglarlo.","Pide a un perito, arquitecto o ingeniero una revisión por escrito de los defectos.","Si es una empresa, presenta la queja ante Profeco.","Si no responde, consulta a un abogado para demandar el cumplimiento o los daños."],
telefonos:"Profeco: 800 468 8722."
}
);
