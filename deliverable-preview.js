(() => {
  const triggers = document.querySelectorAll("[data-deliverable-preview]");

  if (!triggers.length) {
    return;
  }

  let activeTrigger = null;
  let activeImages = [];
  let activeIndex = 0;

  const dialog = document.createElement("div");
  dialog.className = "deliverable-modal";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-hidden", "true");
  dialog.innerHTML = `
    <div class="deliverable-modal-backdrop" data-preview-close></div>
    <div class="deliverable-modal-panel" role="document">
      <div class="deliverable-modal-head">
        <div>
          <p class="eyebrow deliverable-modal-kicker"></p>
          <h2 id="deliverable-modal-title"></h2>
        </div>
        <button class="deliverable-modal-close" type="button" data-preview-close aria-label="Close preview">&times;</button>
      </div>
      <figure class="deliverable-modal-figure">
        <img alt="" />
      </figure>
      <div class="deliverable-modal-controls">
        <button type="button" data-preview-prev>Previous</button>
        <span aria-live="polite"></span>
        <button type="button" data-preview-next>Next</button>
      </div>
    </div>
  `;

  document.body.append(dialog);

  const title = dialog.querySelector("#deliverable-modal-title");
  const kicker = dialog.querySelector(".deliverable-modal-kicker");
  const image = dialog.querySelector("img");
  const counter = dialog.querySelector(".deliverable-modal-controls span");
  const previous = dialog.querySelector("[data-preview-prev]");
  const next = dialog.querySelector("[data-preview-next]");
  const closeButton = dialog.querySelector("[data-preview-close]");

  const render = () => {
    const current = activeImages[activeIndex];

    if (!current) {
      return;
    }

    image.src = current.src;
    image.alt = current.alt || title.textContent;
    counter.textContent = `${activeIndex + 1} / ${activeImages.length}`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === activeImages.length - 1;
  };

  const close = () => {
    dialog.setAttribute("aria-hidden", "true");
    document.body.classList.remove("deliverable-preview-open");
    activeImages = [];
    activeIndex = 0;

    if (activeTrigger) {
      activeTrigger.focus();
      activeTrigger = null;
    }
  };

  const open = (trigger) => {
    const images = trigger.dataset.previewImages
      .split("|")
      .map((src, index) => ({
        src: src.trim(),
        alt: `${trigger.dataset.previewTitle} slide ${index + 1}`
      }))
      .filter((item) => item.src);

    if (!images.length) {
      return;
    }

    activeTrigger = trigger;
    activeImages = images;
    activeIndex = 0;
    title.textContent = trigger.dataset.previewTitle || "Sample deliverable";
    kicker.textContent = trigger.dataset.previewKicker || "Preview";
    previous.textContent = trigger.dataset.previewPreviousLabel || "Previous";
    next.textContent = trigger.dataset.previewNextLabel || "Next";
    closeButton.setAttribute("aria-label", trigger.dataset.previewCloseLabel || "Close preview");
    dialog.setAttribute("aria-hidden", "false");
    document.body.classList.add("deliverable-preview-open");
    render();
    dialog.querySelector("[data-preview-close]").focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => open(trigger));
  });

  dialog.addEventListener("click", (event) => {
    if (event.target.closest("[data-preview-close]")) {
      close();
    }

    if (event.target.closest("[data-preview-prev]") && activeIndex > 0) {
      activeIndex -= 1;
      render();
    }

    if (event.target.closest("[data-preview-next]") && activeIndex < activeImages.length - 1) {
      activeIndex += 1;
      render();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (dialog.getAttribute("aria-hidden") === "true") {
      return;
    }

    if (event.key === "Escape") {
      close();
    }

    if (event.key === "ArrowLeft" && activeIndex > 0) {
      activeIndex -= 1;
      render();
    }

    if (event.key === "ArrowRight" && activeIndex < activeImages.length - 1) {
      activeIndex += 1;
      render();
    }
  });
})();
