edad=prompt("Qué quieres preguntar: ","default");

var things = ['Sí', 'No', 'Ya se verá', 'Sólo diosito sabe XD'];
var thing = things[Math.floor(Math.random()*things.length)];

document.write(edad+'El futuro dice que:' + thing);
