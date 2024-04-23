
import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const seriesAvarage: HTMLElement = document.getElementById("avarage")!;
renderSeriesInTable(series);
actualizarPromedioTemporadas(series);
function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
  trElement.addEventListener('click', () => showSeriesDetails(serie));
  seriesTbody.appendChild(trElement);
  });
}
function showSeriesDetails(serie: Serie): void {
  const seriesDetails = document.getElementById('seriesDetails') as HTMLElement; // Asegura que no es null
  const cardImage = document.getElementById('cardImage') as HTMLImageElement; // Asegura que es un elemento de imagen
  const cardTitle = document.getElementById('cardTitle') as HTMLElement;
  const cardSubtitle = document.getElementById('cardSubtitle') as HTMLElement;
  const cardText = document.getElementById('cardText') as HTMLElement;
  const cardLink = document.getElementById('cardLink') as HTMLAnchorElement; // Asegura que es un elemento de enlace
  // POR SI  HAY NULL
  if (cardImage && cardTitle && cardSubtitle && cardText && cardLink && seriesDetails) {
    cardImage.src = serie.imageUrl;
    cardImage.alt = `Image of ${serie.name}`;
    cardTitle.textContent = serie.name;
    cardSubtitle.textContent = `Channel: ${serie.channel}`;
    cardText.textContent = serie.description;
    cardLink.href = serie.link;
    cardLink.textContent = 'Visit Series Page'; // Agrega texto al enlace si es necesario
    seriesDetails.style.display = 'block';
  } else {
    console.error('One or more elements are missing in the DOM');
  }
}

function actualizarPromedioTemporadas(listadoSeries: Serie[]): void {
  let acumuladoTemporadas = 0;
  listadoSeries.forEach(serie => {
    acumuladoTemporadas += serie.seasons;
  });
  const promedioTemporadas = acumuladoTemporadas / listadoSeries.length;
  const promedioFinal = promedioTemporadas ? Math.ceil(promedioTemporadas) : 0; // Usamos ceil para redondear hacia arriba y manejar caso cero
  seriesAvarage.textContent = `Average Seasons: ${promedioFinal}`;
}