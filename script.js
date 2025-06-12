
function simularPartido() {
    const equipos = ["ÑIFA United", "Deportivo Ñandú", "Atlético Ñ"];
    const equipo1 = equipos[Math.floor(Math.random() * equipos.length)];
    let equipo2;
    do {
        equipo2 = equipos[Math.floor(Math.random() * equipos.length)];
    } while (equipo2 === equipo1);
    const goles1 = Math.floor(Math.random() * 5);
    const goles2 = Math.floor(Math.random() * 5);
    const resultado = `${equipo1} ${goles1} - ${goles2} ${equipo2}`;
    document.getElementById("resultado").textContent = resultado;
}
