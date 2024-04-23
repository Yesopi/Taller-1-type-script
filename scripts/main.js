import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var seriesAvarage = document.getElementById("avarage");
renderSeriesInTable(series);
actualizarPromedioTemporadas(series);
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () { return showSeriesDetails(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function showSeriesDetails(serie) {
    var seriesDetails = document.getElementById('seriesDetails'); // Asegura que no es null
    var cardImage = document.getElementById('cardImage'); // Asegura que es un elemento de imagen
    var cardTitle = document.getElementById('cardTitle');
    var cardSubtitle = document.getElementById('cardSubtitle');
    var cardText = document.getElementById('cardText');
    var cardLink = document.getElementById('cardLink'); // Asegura que es un elemento de enlace
    // POR SI  HAY NULL
    if (cardImage && cardTitle && cardSubtitle && cardText && cardLink && seriesDetails) {
        cardImage.src = serie.imageUrl;
        cardImage.alt = "Image of ".concat(serie.name);
        cardTitle.textContent = serie.name;
        cardSubtitle.textContent = "Channel: ".concat(serie.channel);
        cardText.textContent = serie.description;
        cardLink.href = serie.link;
        cardLink.textContent = 'Visit Series Page'; // Agrega texto al enlace si es necesario
        seriesDetails.style.display = 'block';
    }
    else {
        console.error('One or more elements are missing in the DOM');
    }
}
function actualizarPromedioTemporadas(listadoSeries) {
    var acumuladoTemporadas = 0;
    listadoSeries.forEach(function (serie) {
        acumuladoTemporadas += serie.seasons;
    });
    var promedioTemporadas = acumuladoTemporadas / listadoSeries.length;
    var promedioFinal = promedioTemporadas ? Math.ceil(promedioTemporadas) : 0; // Usamos ceil para redondear hacia arriba y manejar caso cero
    seriesAvarage.textContent = "Average Seasons: ".concat(promedioFinal);
}
