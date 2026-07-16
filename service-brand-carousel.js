document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".service-brand-rail").forEach((rail) => {
    if (rail.dataset.carouselReady === "true") return;

    const logos = Array.from(rail.children);
    if (!logos.length) return;

    const logoSet = document.createElement("div");
    logoSet.className = "service-brand-set";
    logos.forEach((logo) => logoSet.appendChild(logo));

    const duplicateSet = logoSet.cloneNode(true);
    duplicateSet.setAttribute("aria-hidden", "true");
    duplicateSet.querySelectorAll("img").forEach((image) => image.setAttribute("alt", ""));

    rail.append(logoSet, duplicateSet);
    rail.dataset.carouselReady = "true";
  });
});
