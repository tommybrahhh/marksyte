const kpis = [
  {
    label: "Never alcohol",
    start: 31.3,
    end: 33.9,
    reading: "More declared abstention",
    accent: "#007f73"
  },
  {
    label: "Social consumption",
    start: 47.0,
    end: 43.9,
    reading: "Less centrality in shared occasions",
    accent: "#d7644a"
  },
  {
    label: "Habitual consumption",
    start: 34.7,
    end: 29.7,
    reading: "Lower frequent consumption",
    accent: "#bd8e2e"
  }
];

const territories = [
  {
    name: "Core opportunity",
    segment: "High income · higher education · 30-64",
    x: 76,
    y: 24,
    accent: "#bfd84f"
  },
  {
    name: "Social volume",
    segment: "Adults 30-64 · middle income",
    x: 73,
    y: 70,
    accent: "#86c9c1"
  },
  {
    name: "Transformation niche",
    segment: "Young adults · wellbeing codes",
    x: 27,
    y: 26,
    accent: "#8172f2"
  },
  {
    name: "Lower priority",
    segment: "Lower affinity groups · traditional alcohol",
    x: 26,
    y: 74,
    accent: "#d7644a"
  }
];

const ageSocialConsumption = [
  { group: "16-29", value: 41.4, accent: "#315d8f" },
  { group: "30-44", value: 49.5, accent: "#d7644a" },
  { group: "45-64", value: 49.5, accent: "#d7644a" },
  { group: "65+", value: 32.0, accent: "#315d8f" }
];

const percent = (value) => `${value.toFixed(1)}%`;
const delta = (start, end) => `${end - start > 0 ? "+" : ""}${(end - start).toFixed(1)} pp`;

function renderKpis() {
  const target = document.querySelector("#case-kpis");
  if (!target) return;

  target.innerHTML = kpis
    .map(
      (item) => `
        <article class="kpi-row" style="--accent: ${item.accent}; --bar: ${item.end}%">
          <div class="kpi-topline">
            <span>${item.label}</span>
            <strong>${delta(item.start, item.end)}</strong>
          </div>
          <div class="kpi-values">
            <strong>${percent(item.start)}</strong>
            <span>to</span>
            <strong>${percent(item.end)}</strong>
          </div>
          <div class="kpi-track" aria-hidden="true"><span></span></div>
          <p class="metric-note">${item.reading}</p>
        </article>
      `
    )
    .join("");
}

function renderTerritories() {
  const target = document.querySelector("#territory-map");
  if (!target) return;

  target.innerHTML = `
    <span class="map-axis x-low">Lower social affinity</span>
    <span class="map-axis x-high">Higher social affinity</span>
    <span class="map-axis y-high">Higher commercial attraction</span>
    <span class="map-axis y-low">Lower commercial attraction</span>
    ${territories
      .map(
        (item) => `
          <article class="map-point" style="--x: ${item.x}%; --y: ${item.y}%; --accent: ${item.accent};">
            <strong>${item.name}</strong>
            <span>${item.segment}</span>
          </article>
        `
      )
      .join("")}
  `;
}

function renderAgeBars() {
  const target = document.querySelector("#age-bars");
  if (!target) return;
  const max = 55;

  target.innerHTML = ageSocialConsumption
    .map(
      (item) => `
        <div class="age-row" style="--accent: ${item.accent}; --bar: ${(item.value / max) * 100}%">
          <div class="bar-topline">
            <span>${item.group}</span>
            <strong>${percent(item.value)}</strong>
          </div>
          <div class="age-track" aria-hidden="true"><span></span></div>
        </div>
      `
    )
    .join("");
}

function resizeStudyFrame() {
  const frame = document.querySelector("#alc-spain-frame");
  if (!frame) return;

  const applyHeight = () => {
    frame.style.height = window.innerWidth < 680 ? "720px" : "860px";
  };

  frame.addEventListener("load", applyHeight);
  window.addEventListener("resize", applyHeight);
  applyHeight();
}

renderKpis();
renderTerritories();
renderAgeBars();
resizeStudyFrame();
