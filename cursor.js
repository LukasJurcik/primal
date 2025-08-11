// /cursor.js (repo root)
window.Webflow ||= [];
window.Webflow.push(() => {
  console.log("cursor.js loaded ✅");

  const el = document.createElement("div");
  el.textContent = "cursor.js is working!!!";
  Object.assign(el.style, {
    position: "fixed", bottom: "20px", right: "20px",
    background: "#222", color: "#fff", padding: "10px 14px",
    borderRadius: "6px", fontSize: "14px", zIndex: "99999",
    opacity: "0", transition: "opacity .3s ease"
  });
  document.body.appendChild(el);
  requestAnimationFrame(()=> el.style.opacity = "1");
  setTimeout(()=>{ el.style.opacity = "0"; setTimeout(()=> el.remove(), 400); }, 1800);
});