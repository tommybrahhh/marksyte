const copy = {
  en: {
    form: {
      subject: "Data challenge from Marksyte website",
      prepared: "Your email draft is ready. Send it to start the conversation"
    },
    kpis: [
      { label: "Never alcohol", reading: "More declared abstention" },
      { label: "Social consumption", reading: "Less centrality in shared occasions" },
      { label: "Habitual consumption", reading: "Lower frequent consumption" }
    ],
    territories: {
      axes: ["Lower social affinity", "Higher social affinity", "Higher commercial attraction", "Lower commercial attraction"],
      points: [
        ["Core opportunity", "High income · higher education · 30-64"],
        ["Social volume", "Adults 30-64 · middle income"],
        ["Transformation niche", "Young adults · wellbeing codes"],
        ["Lower priority", "Lower affinity groups · traditional alcohol"]
      ]
    }
  },
  es: {
    form: {
      subject: "Reto de datos desde la web de Marksyte",
      prepared: "Tu borrador de correo está listo. Envíalo para iniciar la conversación"
    },
    kpis: [
      { label: "Nunca alcohol", reading: "Mayor abstención declarada" },
      { label: "Consumo social", reading: "Menor centralidad en ocasiones compartidas" },
      { label: "Consumo habitual", reading: "Retroceso del consumo frecuente" }
    ],
    territories: {
      axes: ["Menor afinidad social", "Mayor afinidad social", "Mayor atractivo comercial", "Menor atractivo comercial"],
      points: [
        ["Oportunidad principal", "Renta alta · educación superior · 30-64"],
        ["Volumen social", "Adultos 30-64 · renta media"],
        ["Nicho de transformación", "Jóvenes · códigos de bienestar"],
        ["Menor prioridad", "Menor afinidad · alcohol tradicional"]
      ]
    }
  }
};

const kpiData = [
  { start: 31.3, end: 33.9, accent: "#007f73" },
  { start: 47.0, end: 43.9, accent: "#d7644a" },
  { start: 34.7, end: 29.7, accent: "#bd8e2e" }
];

const territoryData = [
  { x: 76, y: 24, accent: "#bfd84f" },
  { x: 73, y: 70, accent: "#86c9c1" },
  { x: 27, y: 26, accent: "#8172f2" },
  { x: 26, y: 74, accent: "#d7644a" }
];

const activeLanguage = document.documentElement.lang.toLowerCase().startsWith("es") ? "es" : "en";
const percent = (value) => `${value.toFixed(1)}%`;
const delta = (start, end) => `${end - start > 0 ? "+" : ""}${(end - start).toFixed(1)} pp`;

function renderKpis() {
  const target = document.querySelector("#case-kpis");
  if (!target) return;
  target.innerHTML = kpiData.map((item, index) => {
    const text = copy[activeLanguage].kpis[index];
    return `<article class="kpi-row" style="--accent: ${item.accent}; --bar: ${item.end}%"><div class="kpi-topline"><span>${text.label}</span><strong>${delta(item.start, item.end)}</strong></div><div class="kpi-values"><strong>${percent(item.start)}</strong><span>${activeLanguage === "es" ? "a" : "to"}</span><strong>${percent(item.end)}</strong></div><div class="kpi-track" aria-hidden="true"><span></span></div><p class="metric-reading">${text.reading}</p></article>`;
  }).join("");
}

function renderTerritories() {
  const target = document.querySelector("#territory-map");
  if (!target) return;
  const translated = copy[activeLanguage].territories;
  target.innerHTML = `<span class="map-axis x-low">${translated.axes[0]}</span><span class="map-axis x-high">${translated.axes[1]}</span><span class="map-axis y-high">${translated.axes[2]}</span><span class="map-axis y-low">${translated.axes[3]}</span>${territoryData.map((item, index) => `<article class="map-point" style="--x: ${item.x}%; --y: ${item.y}%; --accent: ${item.accent};"><strong>${translated.points[index][0]}</strong><span>${translated.points[index][1]}</span></article>`).join("")}`;
}

function initializeForm() {
  const form = document.querySelector("#discovery-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const labels = activeLanguage === "es" ? [["Nombre", data.get("name")], ["Email", data.get("email")], ["Organización y cargo", data.get("company")], ["Reto de datos", data.get("challenge")]] : [["Name", data.get("name")], ["Email", data.get("email")], ["Organization and role", data.get("company")], ["Data challenge", data.get("challenge")]];
    const body = labels.map(([label, value]) => `${label}: ${value}`).join("\n\n");
    const mailto = `mailto:contact@marksyte.com?subject=${encodeURIComponent(copy[activeLanguage].form.subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = copy[activeLanguage].form.prepared;
    window.location.href = mailto;
  });
}

renderKpis();
renderTerritories();
initializeForm();
