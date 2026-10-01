// Appended by measure.sh: report element rects (CSS px in the 402×874 frame).
window.addEventListener("load", () => setTimeout(() => {
  const r = (el) => { const b = el.getBoundingClientRect(); return [Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)]; };
  const out = {};
  document.querySelectorAll("[data-band]").forEach((el) => (out["band:" + el.dataset.band] = r(el)));
  document.querySelectorAll("[data-tap]").forEach((el) => (out["tap:" + el.dataset.tap] = r(el)));
  document.querySelectorAll("[data-row]").forEach((el) => (out["row:" + el.dataset.row] = r(el)));
  document.querySelectorAll(".badge, .seen, .gear").forEach((el, i) => (out[el.className.baseVal || el.className] = r(el)));
  document.querySelectorAll("tr").forEach((el, i) => (out["tr:" + i] = r(el)));
  document.querySelectorAll(".card").forEach((el, i) => (out["card:" + i] = r(el)));
  const pre = document.createElement("pre"); pre.id = "measure"; pre.textContent = JSON.stringify(out);
  document.body.appendChild(pre);
}, 300));
