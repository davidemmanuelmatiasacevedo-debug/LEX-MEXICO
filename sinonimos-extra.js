/* LEX MÉXICO - palabras de la calle y del barrio (va después de lex-busqueda.js y antes de lex-ui.js) */
(function(){
var extra=[
["me levantaron","secuestro desaparicion"],["se llevaron a mi hijo","desaparicion secuestro"],["levanton","secuestro"],["me secuestraron","secuestro"],["secuestro virtual","extorsion secuestro"],["tienen a mi familiar","extorsion secuestro"],
["desaparecio mi hijo","desaparicion"],["desaparecio mi hija","desaparicion"],["no aparece mi hijo","desaparicion"],["no aparece mi familiar","desaparicion"],
["cobro de piso","extorsion"],["me piden cuota","extorsion"],["me cobran cuota","extorsion"],["me extorsionan","extorsion"],["me piden piso","extorsion"],
["me quitaron el cel","robo"],["me bajaron el celular","robo"],["me bajaron el cel","robo"],["me rayaron el carro","daño propiedad ajena"],["me rompieron el carro","daño propiedad ajena"],["me dañaron mi casa","daño propiedad ajena"],
["me sacaron una lana","corrupcion soborno"],["me pidieron lana","corrupcion soborno"],["me pidieron billete","corrupcion soborno"],["me quisieron fajar","corrupcion soborno"],["me pidieron paga","corrupcion soborno"],["me pidieron dinero los policias","corrupcion soborno"],
["los tombos","policia"],["la tira","policia"],["los polis","policia"],["los judiciales","policia fiscalia"],["me paro la tira","infraccion detencion"],["me pararon los polis","infraccion detencion"],
["me cacharon","detencion"],["me torcieron","detencion"],["me jalaron los polis","detencion"],["me cayeron los tombos","detencion"],["me llevaron a la barandilla","faltas administrativas detencion"],["barandilla","faltas administrativas detencion"],["el torito","faltas administrativas detencion"],["me llevaron al torito","faltas administrativas detencion"],
["me madrearon","lesiones tortura"],["me dieron una paliza","lesiones tortura"],["me golpearon los policias","tortura abuso de autoridad"],["me pegaron los tombos","tortura abuso de autoridad"],
["me quede sin chamba","despido"],["me echaron de la chamba","despido"],["me corrieron de la chamba","despido"],["perdi mi chamba","despido"],["no me quieren pagar mi liquidacion","finiquito despido"],["no me quieren dar mi finiquito","finiquito despido"],["no me pagan mi sueldo","salario despido"],["no me pagan lo que me deben","salario"],["me deben mi lana del trabajo","salario"],
["no me dan mis utilidades","ptu reparto de utilidades"],["no me pagaron utilidades","ptu reparto de utilidades"],["me deben utilidades","ptu reparto de utilidades"],
["mi jefe me acosa","acoso laboral hostigamiento"],["mi patron me acosa","acoso laboral hostigamiento"],["mi jefe me trata mal","acoso laboral hostigamiento"],["mi patron me trata mal","acoso laboral hostigamiento"],["me gritan en el trabajo","acoso laboral hostigamiento"],
["estoy embarazada y me corrieron","embarazo despido"],["me corrieron por embarazada","embarazo despido"],["me despidieron por embarazo","embarazo despido"],["licencia de maternidad","embarazo maternidad"],
["me lastime trabajando","accidente de trabajo"],["me accidente en el trabajo","accidente de trabajo"],["me lastime en la chamba","accidente de trabajo"],["me cai en el trabajo","accidente de trabajo"],
["mi casero","renta desalojo"],["el casero me quiere sacar","renta desalojo"],["me quieren sacar del cuarto","renta desalojo"],["me quieren echar de la casa","renta desalojo"],["me quieren correr de mi casa","renta desalojo"],
["mi vecino hace ruido","vecinos ruido"],["mi vecino pone musica","vecinos ruido"],["fiesta de mi vecino","vecinos ruido"],["el perro de mi vecino","vecinos ruido"],["problema con mis vecinos","vecinos ruido"],
["se metieron a mi casa","allanamiento"],["entraron a mi casa","allanamiento"],["me cateo la policia","allanamiento"],["entro la policia a mi casa","allanamiento"],
["me clonaron la tarjeta","fraude bancario"],["me hackearon","delitos informaticos"],["me robaron mi cuenta","delitos informaticos fraude bancario"],["me vaciaron la cuenta","fraude bancario"],["me cobraron algo que no compre","cargo no reconocido banco"],
["me amenazan con mis fotos","sextorsion violencia digital"],["me amenazan con publicar mis fotos","sextorsion violencia digital"],["difundieron mis fotos","violencia digital"],["pack","violencia digital"],["subieron mis fotos","violencia digital"],
["me hablan los de cobranza","cobranza abusiva"],["me llaman los de cobranza","cobranza abusiva"],["me tienen en buro","buro de credito"],["estoy en el buro","buro de credito"],["me acosan por una deuda","cobranza abusiva"],
["no tengo para pagar abogado","defensoria publica"],["abogado de oficio","defensoria publica"],["abogado gratis","defensoria publica"],
["me agarraron con mota","marihuana narcomenudeo"],["me agarraron con droga","drogas narcomenudeo"],["me encontraron droga","drogas narcomenudeo"],["traia mota","marihuana narcomenudeo"],["me detuvieron por mota","marihuana narcomenudeo"],["mota","marihuana"],["yerba","marihuana"],["cristal","drogas"],["la piedra","drogas"],["me pusieron droga","drogas narcomenudeo"],
["me violaron","violacion"],["abusaron de mi","abuso sexual violacion"],["me tocaron","abuso sexual"],["me manosearon","abuso sexual"],["abusaron de mi hija","abuso sexual violacion"],["abusaron de mi hijo","abuso sexual violacion"],
["mataron a mi hija","feminicidio"],["mataron a mi hermana","feminicidio"],["mataron a mi mama","feminicidio"],["mataron a mi familiar","homicidio feminicidio"],
["mi esposo no me da gasto","pension alimenticia violencia economica"],["no me da para el gasto","pension alimenticia violencia economica"],["no me da dinero para mis hijos","pension alimenticia"],["se hizo el loco con la pension","pension alimenticia"],
["me quitaron a mis hijos","custodia patria potestad"],["se llevo a mis hijos","custodia patria potestad"],["no me deja ver a mis hijos","custodia convivencia"],["no me deja ver a mi hijo","custodia convivencia"],
["acta mal escrita","acta registro civil"],["error en mi acta","acta registro civil"],["perdi mi acta","acta registro civil"],["no tengo acta","acta registro civil"],["no tengo papeles","acta curp registro civil"],
["perdi mi ine","ine credencial"],["perdi mi credencial","ine credencial"],["se me vencio el ine","ine credencial"],["quiero sacar mi ine","ine credencial"],
["me quieren quitar mi casa","despojo"],["me quieren quitar mi terreno","despojo"],["se metieron a mi terreno","despojo"],["me quitaron mi parcela","despojo ejido"],
["me discriminaron","discriminacion"],["no me dieron trabajo por ser mujer","discriminacion"],["no me dieron trabajo por ser indigena","discriminacion"],["me tratan mal por ser indigena","discriminacion"],["me tratan mal por mi edad","discriminacion"],
["el infonavit me descuenta","infonavit"],["casa del infonavit","infonavit"],["me quieren estafar con el infonavit","infonavit fraude"],
["me cobraron la tarjeta","banco cargo no reconocido"],["me cobra el banco","banco cargo no reconocido"],["me cobran comisiones","banco cargo no reconocido"],
["me cortaron la luz","servicios publicos cobro abusivo"],["me cortaron el agua","agua servicios publicos"],["me llego un recibo carisimo","cobro abusivo"],["me cobraron de mas la luz","cobro abusivo"],
["me corrio mi pareja","violencia familiar"],["me corrio mi esposo de la casa","violencia familiar despojo"],["me tiene amenazada","violencia familiar amenazas"],["me tiene amenazado","amenazas"],
["me quieren quitar mi pension","pension jubilacion afore"],["no me dan mi pension","pension jubilacion afore"],["quiero jubilarme","jubilacion afore"],["mi afore","afore"],
["soy trabajadora del hogar","trabajadoras del hogar"],["trabajo en casa ajena","trabajadoras del hogar"],["mi patrona no me paga","trabajadoras del hogar salario"],["trabajo de sirvienta","trabajadoras del hogar"]
].map(function(p){return [limpiar(p[0]),p[1]];});
extra.forEach(function(p){SINONIMOS.push(p);});
SINONIMOS.sort(function(a,b){return b[0].length-a[0].length;});
})();
