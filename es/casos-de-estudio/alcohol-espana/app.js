const kpis = [
  {
    label: "Nunca alcohol",
    start: 31.3,
    end: 33.9,
    accent: "#0b7a75",
    background: "#dff0eb",
    reading: "Más abstención declarada."
  },
  {
    label: "Consumo social",
    start: 47.0,
    end: 43.9,
    accent: "#c85f4a",
    background: "#f5dfd9",
    reading: "Menos centralidad en ocasiones compartidas."
  },
  {
    label: "Consumo habitual",
    start: 34.7,
    end: 29.7,
    accent: "#b68a2e",
    background: "#f2ead5",
    reading: "Retroceso del consumo más frecuente."
  }
];

const ageData = [
  { group: "16-29", start: 33.2, end: 39.9, highlight: true },
  { group: "30-44", start: 26.6, end: 28.8, endOffset: -9 },
  { group: "45-64", start: 25.3, end: 28.6, endOffset: 12 },
  { group: "65+", start: 44.0, end: 42.4 }
];

const youthChanges = [
  { label: "Nunca alcohol", value: 6.7, color: "#9ed7cf" },
  { label: "Consumo social alcohol", value: -7.6, color: "#c85f4a" },
  { label: "Tabaco diario", value: -2.9, color: "#d6a03d" },
  { label: "Actividad física semanal o más", value: 3.2, color: "#73a5d8" }
];

const ageMultiples = [
  {
    indicator: "Abstención alcohol",
    message: "Los jóvenes ya superan la media nacional de abstención.",
    color: "#0b7a75",
    values: [
      { group: "Total", value: 33.9, reference: true },
      { group: "16-29", value: 39.9, highlight: true },
      { group: "30-44", value: 28.8 },
      { group: "45-64", value: 28.6 },
      { group: "65+", value: 42.4, note: true }
    ]
  },
  {
    indicator: "Tabaco diario",
    message: "El tabaco diario también es menor entre jóvenes que entre adultos de 30-64.",
    color: "#b68a2e",
    values: [
      { group: "Total", value: 15.0, reference: true },
      { group: "16-29", value: 11.0, highlight: true },
      { group: "30-44", value: 18.8, note: true },
      { group: "45-64", value: 19.5, note: true },
      { group: "65+", value: 7.7 }
    ]
  },
  {
    indicator: "Actividad física",
    message: "Los jóvenes son el grupo más activo físicamente.",
    color: "#315d8f",
    values: [
      { group: "Total", value: 67.6, reference: true },
      { group: "16-29", value: 77.8, highlight: true },
      { group: "30-44", value: 68.2 },
      { group: "45-64", value: 66.0 },
      { group: "65+", value: 62.1, note: true }
    ]
  },
  {
    indicator: "Contacto sanitario",
    message: "El contacto sanitario crece con la edad; no se lee igual que actividad o tabaco.",
    color: "#c85f4a",
    values: [
      { group: "Total", value: 81.3, reference: true },
      { group: "16-29", value: 71.3 },
      { group: "30-44", value: 76.5 },
      { group: "45-64", value: 82.1, note: true },
      { group: "65+", value: 91.9, highlight: true }
    ]
  }
];

const integratedReadings = [
  {
    group: "16-29",
    reading: "Más abstención, menos tabaco diario y más actividad física. Señal generacional."
  },
  {
    group: "30-44",
    reading: "Más consumo social y más tabaco diario que jóvenes. Perfil adulto más expuesto."
  },
  {
    group: "45-64",
    reading: "Similar a 30-44 en consumo social, con más contacto sanitario."
  },
  {
    group: "65+",
    reading: "Alta abstención y muy bajo tabaco diario, con mayor contacto sanitario. Patrón edad/salud."
  }
];

const socialAlcoholByAge2025 = [
  { group: "16-29", value: 41.4 },
  { group: "30-44", value: 49.5, highlight: true },
  { group: "45-64", value: 49.5, highlight: true },
  { group: "65+", value: 32.0 }
];

const socialAverageSpain = 43.9;

const opportunityRanking = [
  {
    title: "Por renta",
    note: "Quintiles: cinco grupos iguales por renta. Q1 = menor renta; Q5 = mayor renta.",
    color: "#0b7a75",
    items: [
      { segment: "Renta alta", value: 55.5 },
      { segment: "Renta media-alta", value: 49.8 },
      { segment: "Renta media", value: 44.5 },
      { segment: "Renta media-baja", value: 37.7 },
      { segment: "Renta baja", value: 29.9 }
    ]
  },
  {
    title: "Por educación",
    note: "Renta y educación son cortes separados; esta tabla no cruza ambas variables.",
    color: "#315d8f",
    items: [
      { segment: "Educación superior", value: 55.4 },
      { segment: "Secundaria segunda etapa", value: 46.7 },
      { segment: "Secundaria primera etapa", value: 39.2 },
      { segment: "Primaria o inferior", value: 22.5 }
    ]
  }
];

const opportunityMatrix = [
  {
    title: "Adultos 30-64 renta alta",
    note: "Premium social: ocasión, calidad y mayor valor por consumo.",
    x: 78,
    y: 26,
    color: "#0b7a75"
  },
  {
    title: "Jóvenes activos",
    note: "Moderación, baja graduación, experiencia, sabor y socialización sin exceso.",
    x: 72,
    y: 70,
    color: "#315d8f"
  },
  {
    title: "Renta baja / baja educación",
    note: "Baja prioridad comercial para propuestas de valor añadido.",
    x: 24,
    y: 74,
    color: "#b68a2e"
  },
  {
    title: "65+",
    note: "Consumo más estructural y menor oportunidad de innovación.",
    x: 30,
    y: 34,
    color: "#c85f4a"
  }
];

const occasionMap = [
  { title: "Aperitivo", note: "Momento de entrada: menor graduación, sabor y ritual ligero." },
  { title: "Comida fuera de casa", note: "Ocasión de maridaje, calidad percibida y ticket superior." },
  { title: "Afterwork", note: "Socialización adulta con más control de cantidad y formato." },
  { title: "Celebración", note: "Permanece como territorio de permiso social y mayor elasticidad." },
  { title: "En casa con amigos", note: "Formato compartible, conveniencia y experiencia cuidada." },
  {
    title: "Baja graduación / sin alcohol / consumo moderado",
    note: "Puente hacia bienestar: mantiene ocasión social sin depender de frecuencia.",
    format: true
  }
];

const segmentTerritories = [
  {
    name: "Core Opportunity",
    quadrant: "Alto consumo social + alto atractivo comercial",
    segment: "Renta alta / educación superior / 30-64",
    data: "55% consumo social · +26% vs media",
    why: "Alta afinidad social y mayor capacidad de gasto.",
    actions: ["Premium", "Comida y afterwork", "Hosting en casa", "Calidad sobre volumen"],
    x: 76,
    y: 24,
    color: "#c8ff52"
  },
  {
    name: "Volumen Social",
    quadrant: "Alto consumo social + menor atractivo comercial",
    segment: "30-64 general / renta media",
    data: "Renta media 44,5% · 30-64 en 49,5%",
    why: "El alcohol sigue operando como código social cotidiano.",
    actions: ["Formatos accesibles", "Promos por ocasión", "Packs para hogar", "Conveniencia"],
    x: 73,
    y: 70,
    color: "#9ed7cf"
  },
  {
    name: "Nicho de Transformación",
    quadrant: "Bajo consumo social + alto cambio cultural",
    segment: "Jóvenes 16-29",
    data: "Nunca alcohol +6,7 pp · actividad física 77,8%",
    why: "No son el core actual; son el laboratorio de nuevos códigos.",
    actions: ["Baja graduación", "Sin alcohol", "Sabor", "Social sin exceso", "Bienestar"],
    x: 27,
    y: 26,
    color: "#7561ff"
  },
  {
    name: "Baja Prioridad Alcohol Tradicional",
    quadrant: "Bajo consumo social + baja afinidad",
    segment: "Renta baja / primaria o inferior / 65+",
    data: "Renta baja 29,9% · primaria 22,5% · 65+ 32,0%",
    why: "Menor afinidad social; no son la oportunidad principal.",
    actions: ["No forzar alcohol", "Opciones sin alcohol", "Accesibilidad", "Moderación"],
    x: 26,
    y: 74,
    color: "#ff6547"
  }
];

const strategicPlaybook = [
  {
    title: "Redefinir la ocasión, no el producto",
    evidence: ["Consumo social total: 47,0% → 43,9%", "Jóvenes: 49,0% → 41,4%"],
    message: "El reto no es estar en más momentos, sino ser más relevante en ocasiones mejor definidas.",
    actions: ["Diseñar por ocasión: comida, aperitivo, tardeo, afterwork y casa", "Hablar de acompañar momentos", "Vender ritual, sabor y formato"]
  },
  {
    title: "Crear un portafolio de moderación",
    evidence: ["Nunca alcohol: 31,3% → 33,9%", "16-29: 33,2% → 39,9%", "Tabaco diario: 17,1% → 15,0%"],
    message: "La moderación deja de ser un nicho defensivo y pasa a ser una expectativa cultural.",
    actions: ["Low alcohol, zero alcohol y porciones controladas", "Packs mixtos: con y sin alcohol", "Menos graduación, buen sabor", "Control, elección y flexibilidad"]
  },
  {
    title: "Construir credenciales de bienestar",
    evidence: ["Actividad física semanal o más: 63,6% → 67,6%", "Jóvenes: 77,8%"],
    message: "El alcohol compite con una identidad de autocuidado. Ignorarlo suena fuera de época.",
    actions: ["Transparencia nutricional y de graduación", "Menos azúcar cuando sea creíble", "Evitar códigos de exceso", "Ocio diurno, cultura y gastronomía"]
  },
  {
    title: "Priorizar adultos sociales, no solo jóvenes",
    evidence: ["30-44 y 45-64: 49,5% consumo social", "16-29: 41,4%"],
    message: "Los jóvenes marcan el cambio cultural, pero los adultos siguen sosteniendo buena parte de la ocasión social.",
    actions: ["Premium accesible para 30-64", "Comida, hogar, terraza y afterwork", "Segmentar por ocasión y gasto", "No sobredimensionar campañas juveniles"]
  },
  {
    title: "Capturar valor, no volumen",
    evidence: ["Renta alta: 55,5%, +26% vs media", "Educación superior: 55,4%, +26% vs media"],
    message: "Si el consumo se vuelve más selectivo, la oportunidad está en valor añadido.",
    actions: ["Premiumización y ediciones especiales", "Origen, calidad o gastronomía", "Menos promo de volumen", "Packs para hosting o regalo"]
  },
  {
    title: "Innovar en socialización sin exceso",
    evidence: ["16-29: nunca alcohol 39,9%", "Actividad física: 77,8%", "Tabaco diario: 11,0%"],
    message: "La socialización joven no desaparece; cambia sus códigos.",
    actions: ["Bebidas para estar en el plan", "Alternativas adultas sin alcohol", "Producto sin exceso como centro", "Cultura, gastronomía, música y tardeo"]
  },
  {
    title: "Medir ocasiones, no solo consumo",
    evidence: ["Las tablas muestran frecuencia, pero no tipo de bebida, gasto, canal ni ocasión concreta."],
    message: "Para decidir bien, hay que bajar de frecuencia agregada a momentos concretos.",
    actions: ["Estudiar dónde, con quién, por qué y contra qué compite", "Separar casa, fuera, comida, noche, celebración y afterwork", "Medir barreras: salud, precio, sabor y control", "Detectar switching hacia sin alcohol, café, funcionales o agua premium"]
  }
];

const formatPercent = (value) => `${value.toFixed(1).replace(".", ",")}%`;
const formatDelta = (value) => `${value > 0 ? "+" : ""}${value.toFixed(1).replace(".", ",")} pp`;

function renderKpis() {
  const container = document.querySelector("#kpi-strip");

  container.innerHTML = kpis
    .map((item) => {
      const delta = item.end - item.start;
      return `
        <article class="kpi-item" style="--accent: ${item.accent}; --bar: ${item.end}%">
          <div class="kpi-topline">
            <span>${item.label}</span>
            <span>${formatDelta(delta)}</span>
          </div>
          <div class="kpi-values">
            <strong>${formatPercent(item.start)}</strong>
            <span>→</span>
            <strong>${formatPercent(item.end)}</strong>
          </div>
          <p class="kpi-change">2022 a 2025 · ${item.reading}</p>
          <div class="kpi-bar" aria-hidden="true"><span></span></div>
        </article>
      `;
    })
    .join("");
}

function renderSlopeChart() {
  const container = document.querySelector("#slope-chart");
  const width = 760;
  const height = 390;
  const margin = { top: 60, right: 172, bottom: 54, left: 92 };
  const plotHeight = height - margin.top - margin.bottom;
  const xStart = margin.left + 54;
  const xEnd = width - margin.right;
  const min = 24;
  const max = 45;

  const yForValue = (value) => margin.top + plotHeight - ((value - min) / (max - min)) * plotHeight;

  const rows = ageData
    .map((item) => {
      const y1 = yForValue(item.start);
      const y2 = yForValue(item.end);
      const delta = item.end - item.start;
      const color = item.highlight ? "#ff6547" : "#6f8799";
      const widthLine = item.highlight ? 5 : 2.4;
      const opacity = item.highlight ? 1 : 0.62;
      const showLabel = item.group === "65+";
      const labelX = xEnd - 14;

      return `
        <g class="${item.highlight ? "slope-highlight" : "slope-muted"}">
          <line x1="${xStart}" y1="${y1}" x2="${xEnd}" y2="${y2}" stroke="${color}" stroke-width="${widthLine}" stroke-linecap="round" opacity="${opacity}"></line>
          <circle cx="${xStart}" cy="${y1}" r="${item.highlight ? 6 : 4.5}" fill="#fffdf7" stroke="${color}" stroke-width="${item.highlight ? 4 : 2.5}"></circle>
          <circle cx="${xEnd}" cy="${y2}" r="${item.highlight ? 7 : 4.5}" fill="${color}"></circle>
          ${showLabel ? `
            <text class="row-label" x="${labelX}" y="${y2 - 8}" text-anchor="end">
              ${item.group} · ${formatPercent(item.end)}
            </text>
            <text class="delta-label" x="${labelX}" y="${y2 + 9}" text-anchor="end">
              ${formatDelta(delta)}
            </text>
          ` : ""}
        </g>
      `;
    })
    .join("");

  const guideLines = [30, 40]
    .map((value) => {
      const y = margin.top + plotHeight - ((value - min) / (max - min)) * plotHeight;
      return `
        <line x1="${xStart}" y1="${y}" x2="${xEnd}" y2="${y}" stroke="#e7ebe7" stroke-width="1"></line>
        <text class="year-label" x="${xStart - 18}" y="${y + 4}" text-anchor="end">${value}%</text>
      `;
    })
    .join("");

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf7"></rect>
      <g opacity="0.82">${guideLines}</g>
      <text class="axis-label" x="${xStart}" y="34" text-anchor="middle">2022</text>
      <text class="axis-label" x="${xEnd}" y="34" text-anchor="middle">2025</text>
      <text class="value-label" x="${xStart}" y="${height - 26}" text-anchor="middle">33,2%</text>
      <text class="value-label" x="${xEnd}" y="${height - 26}" text-anchor="middle">39,9%</text>
      <line x1="${xStart}" y1="${margin.top - 10}" x2="${xStart}" y2="${height - margin.bottom + 8}" stroke="#d6ddd7" stroke-width="1"></line>
      <line x1="${xEnd}" y1="${margin.top - 10}" x2="${xEnd}" y2="${height - margin.bottom + 8}" stroke="#d6ddd7" stroke-width="1"></line>
      ${rows}
      <g class="slope-summary">
        <rect x="${width - 154}" y="${margin.top + 16}" width="126" height="92" rx="8" fill="#ffe1d9"></rect>
        <text class="summary-kicker" x="${width - 138}" y="${margin.top + 40}">Mayor cambio</text>
        <text class="summary-value" x="${width - 138}" y="${margin.top + 68}">16-29</text>
        <text class="summary-text" x="${width - 138}" y="${margin.top + 91}">+6,7 pp</text>
      </g>
      <text class="adult-note" x="${xEnd - 6}" y="${height - 58}" text-anchor="end">30-64: subida moderada hacia ~28,7%</text>
    </svg>
    <p class="chart-note">Lectura: la abstención crece con más intensidad entre 16-29, mientras el segmento 65+ se mantiene alto pero desciende ligeramente.</p>
  `;
}

function renderYouthChangeChart() {
  const container = document.querySelector("#youth-change-chart");
  const maxAbs = 8;

  const rows = youthChanges
    .map((item) => {
      const width = `${Math.abs(item.value) / maxAbs * 50}%`;
      const isPositive = item.value > 0;
      const style = isPositive
        ? `left: 50%; width: ${width}; --bar-color: ${item.color};`
        : `right: 50%; width: ${width}; --bar-color: ${item.color};`;

      return `
        <div class="diverging-row">
          <div class="diverging-label">${item.label}</div>
          <div class="diverging-track" aria-hidden="true">
            <span class="diverging-bar" style="${style}"></span>
          </div>
          <div class="diverging-value">${formatDelta(item.value)}</div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = `
    ${rows}
    <div class="diverging-axis" aria-hidden="true">
      <span>Menor exposición</span>
      <span>0</span>
      <span>Mayor presencia</span>
    </div>
  `;
}

function renderAgeMultiples() {
  const container = document.querySelector("#age-multiples");

  container.innerHTML = ageMultiples
    .map((item) => {
      const rows = item.values
        .map((entry) => `
          <div class="multiple-row ${entry.highlight ? "is-highlighted" : ""} ${entry.reference ? "is-reference" : ""} ${entry.note ? "is-note" : ""}">
            <div class="multiple-row-label">${entry.group}</div>
            <div class="multiple-track" aria-hidden="true">
              <span style="--bar: ${entry.value}%; --indicator-color: ${item.color};"></span>
            </div>
            <div class="multiple-value">${formatPercent(entry.value)}</div>
          </div>
        `)
        .join("");

      return `
        <article class="multiple-panel">
          <div class="multiple-title">
            <span>${item.indicator}</span>
            <span>2025</span>
          </div>
          <p class="multiple-message">${item.message}</p>
          <div class="multiple-bars">${rows}</div>
        </article>
      `;
    })
    .join("");
}

function renderIntegratedReading() {
  const container = document.querySelector("#integrated-reading");

  container.innerHTML = `
    <div class="integrated-heading">
      <p class="chart-label">Lectura integrada</p>
      <h4>Los indicadores dibujan perfiles distintos por edad.</h4>
    </div>
    <div class="reading-table">
      ${integratedReadings
        .map((item) => `
          <div class="reading-row">
            <div class="reading-group">${item.group}</div>
            <div class="reading-copy">${item.reading}</div>
          </div>
        `)
        .join("")}
    </div>
  `;
}

function renderSocialAgeBars() {
  const container = document.querySelector("#social-age-bars");
  const max = 55;

  const rows = socialAlcoholByAge2025
    .map((item) => {
      const width = `${item.value / max * 100}%`;
      const color = item.highlight ? "#c85f4a" : "#315d8f";

      return `
        <div class="bar-row ${item.highlight ? "is-highlighted" : ""}">
          <div class="bar-label">${item.group}</div>
          <div class="bar-track" aria-hidden="true">
            <span class="bar-fill" style="--bar: ${width}; --bar-color: ${color};"></span>
          </div>
          <div class="bar-value">${formatPercent(item.value)}</div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = `
    ${rows}
    <p class="bar-caption">
      Lectura: el consumo social mantiene más fuerza en adultos de 30-64 que entre jóvenes.
    </p>
  `;
}

function renderOpportunityRanking() {
  const container = document.querySelector("#opportunity-ranking");
  const max = 60;
  const averagePosition = `${socialAverageSpain / max * 100}%`;

  container.innerHTML = opportunityRanking
    .map((group) => {
      const rows = group.items
        .map((item) => {
          const width = `${item.value / max * 100}%`;
          const delta = Math.round((item.value / socialAverageSpain - 1) * 100);
          const deltaText = `${delta > 0 ? "+" : ""}${delta}% vs media`;
          const isAbove = delta >= 0;

          return `
            <div class="ranking-row ${isAbove ? "is-above" : "is-below"}">
              <div class="ranking-row-top">
                <span class="ranking-name">${item.segment}</span>
                <span class="ranking-value">${formatPercent(item.value)}</span>
              </div>
              <div class="ranking-track" aria-hidden="true">
                <span class="average-line" style="--average: ${averagePosition};"></span>
                <span class="ranking-fill" style="--bar: ${width}; --rank-color: ${group.color};"></span>
              </div>
              <div class="ranking-delta">${deltaText}</div>
            </div>
          `;
        })
        .join("");

      return `
        <article class="ranking-panel" style="--rank-color: ${group.color};">
          <div class="ranking-panel-head">
            <h4>${group.title}</h4>
            <span>Media España: ${formatPercent(socialAverageSpain)}</span>
          </div>
          <div class="ranking-rows">${rows}</div>
          <p class="ranking-note">${group.note}</p>
        </article>
      `;
    })
    .join("");
}

function renderOpportunityMatrix() {
  const container = document.querySelector("#opportunity-matrix");
  if (!container) return;

  const points = opportunityMatrix
    .map((item) => `
      <article class="matrix-point" style="--x: ${item.x}%; --y: ${item.y}%; --point-color: ${item.color};">
        <h4>${item.title}</h4>
        <p>${item.note}</p>
      </article>
    `)
    .join("");

  container.innerHTML = `
    <span class="matrix-axis x-left">Menor afinidad social</span>
    <span class="matrix-axis x-right">Mayor afinidad social</span>
    <span class="matrix-axis y-high">Más bienestar</span>
    <span class="matrix-axis y-low">Menos bienestar</span>
    <span class="matrix-quadrant q1">Premium social</span>
    <span class="matrix-quadrant q2">Estructural</span>
    <span class="matrix-quadrant q3">Baja prioridad</span>
    <span class="matrix-quadrant q4">Moderación / experiencia</span>
    ${points}
  `;
}

function renderOccasionMap() {
  const container = document.querySelector("#occasion-map");
  if (!container) return;

  container.innerHTML = occasionMap
    .map((item, index) => `
      <article class="occasion-node ${item.format ? "is-format" : ""}">
        <div class="occasion-index">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h4>${item.title}</h4>
          <p>${item.note}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderSegmentStrategy() {
  const matrix = document.querySelector("#segment-matrix");
  const cards = document.querySelector("#territory-cards");

  matrix.innerHTML = `
    <span class="segment-axis x-low">Baja afinidad social</span>
    <span class="segment-axis x-high">Alta afinidad social</span>
    <span class="segment-axis y-high">Alto atractivo comercial</span>
    <span class="segment-axis y-low">Bajo atractivo comercial</span>
    <span class="segment-quadrant q-core">Core opportunity</span>
    <span class="segment-quadrant q-volume">Volumen social</span>
    <span class="segment-quadrant q-niche">Nicho transformación</span>
    <span class="segment-quadrant q-low">Baja prioridad</span>
    ${segmentTerritories
      .map((item, index) => `
        <article class="segment-point" style="--x: ${item.x}%; --y: ${item.y}%; --point-color: ${item.color};">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h4>${item.name}</h4>
          <p>${item.segment}</p>
        </article>
      `)
      .join("")}
  `;

  cards.innerHTML = segmentTerritories
    .map((item, index) => `
      <article class="territory-card" style="--territory-color: ${item.color};">
        <div class="territory-topline">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <span>${item.quadrant}</span>
        </div>
        <h4>${item.name}</h4>
        <p class="territory-data">${item.data}</p>
        <p class="territory-why">${item.why}</p>
        <div class="territory-actions">
          ${item.actions.map((action) => `<span>${action}</span>`).join("")}
        </div>
      </article>
    `)
    .join("");
}

function renderStrategicPlaybook() {
  const container = document.querySelector("#strategic-playbook");
  if (!container) return;

  container.innerHTML = strategicPlaybook
    .map((item, index) => `
      <article class="playbook-card">
        <div class="playbook-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="playbook-main">
          <h3>${item.title}</h3>
          <p class="playbook-message">${item.message}</p>
        </div>
        <div class="playbook-evidence">
          <p>Evidencia</p>
          ${item.evidence.map((point) => `<span>${point}</span>`).join("")}
        </div>
        <div class="playbook-actions">
          <p>Qué hacer</p>
          <ul>
            ${item.actions.map((action) => `<li>${action}</li>`).join("")}
          </ul>
        </div>
      </article>
    `)
    .join("");
}

function initScrollReveals() {
  const revealSelectors = [
    ".hero-copy",
    ".opportunity-panel",
    ".section-heading",
    ".kpi-item",
    ".chart-card",
    ".segment-matrix-card",
    ".territory-panel",
    ".playbook-card",
    ".segment-card",
    ".integrated-reading",
    ".final-points li",
    "blockquote"
  ];

  const elements = [...document.querySelectorAll(revealSelectors.join(","))];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

renderKpis();
renderSlopeChart();
renderYouthChangeChart();
renderAgeMultiples();
renderIntegratedReading();
renderSocialAgeBars();
renderOpportunityRanking();
renderOpportunityMatrix();
renderOccasionMap();
renderSegmentStrategy();
renderStrategicPlaybook();
initScrollReveals();
