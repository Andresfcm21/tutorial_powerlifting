function calcular() {
    var peso = Number(document.getElementById("peso").value);
    var reps = Number(document.getElementById("reps").value);

    if (peso <= 0 || reps <= 0) {
        document.getElementById("resultado").textContent = "Escribe valores mayores que 0";
        return;
    }

    var rm = peso * (1 + reps / 30);
    document.getElementById("resultado").textContent = "Tu 1RM estimado: " + rm.toFixed(1) + " kg";
}