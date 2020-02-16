var mes=10;
var nombre="Ervin A. Pinto Salazar", carne="20002516";
if (mes==1 || mes==2 || mes==12) {
  document.write("Es invierno")
}
else if ((mes>=3) && (mes<=5)) {
  document.write("Es Primavera");
}
else if ((mes>=6) && (mes<=8)) {
  document.write("Es Verano");
}
else if ((mes>=9) && (mes<=11)) {
  document.write("Es Otoño");
}
else {
  document.write("Intente con un numero entre 1 y 12");
}
document.writeln("<br/>" + nombre);
document.writeln("<br/>" + carne);
