window.onload = function () {
  const zonaHoraria = 'America/Costa_Rica';

  // Obtener la fecha y hora actual en la zona horaria especificada
  const ahoraCR = new Date(
    new Date().toLocaleString('en-US', { timeZone: zonaHoraria })
  );

  // Crear los horarios de inicio y fin del día laboral
  const inicio = new Date(ahoraCR);
  inicio.setHours(8, 0, 0, 0); // 08:00:00

  const fin = new Date(ahoraCR);
  fin.setHours(17, 0, 0, 0); // 17:00:00

  // Comprobar si es fin de semana
  const diaSemana = ahoraCR.getDay(); // 0 = Domingo, 6 = Sábado
  const esFinDeSemana = (diaSemana === 0 || diaSemana === 6);

  // Redirigir si está fuera del horario laboral o es fin de semana
  if (ahoraCR < inicio || ahoraCR >= fin || esFinDeSemana) {
    window.location.href = 'cerrado.html';
  }
};
