// 05_variables_warmup_4 JavasScript code

function showHoursAndMinutes() {
    var minutes = Number(document.getElementById("txtMinutes").value);
    var showMinutes = minutes % 60;
    document.getElementById("pOutput").innerHTML = Math.floor(minutes / 60) + " h " + showMinutes + " min ";
}