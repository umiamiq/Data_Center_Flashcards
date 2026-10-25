(() => {
  const STORE_KEY = "dc-flashcards-v1";
  const SECTIONS = [...new Set(CARDS.map(c => c.section))];
  const byId = new Map(CARDS.map(c => [c.id, c]));
  const $ = id => document.getElementById(id);

  // ---------- state ----------
  function defaultState() {
    return {
      order: CARDS.map(c => c.id),
      mode: "term",
      enabled: Object.fromEntries(SECTIONS.map(s => [s, true])),
      status: {} // id -> "known" | "again"
    };
  }

  function loadState() {
    const fresh = defaultState();
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (!saved) return fresh;
      // Keep saved order for cards that still exist; append any new ones.
      const order = (saved.order || []).filter(id => byId.has(id));
      const seen = new Set(order);
      CARDS.forEach(c => { if (!seen.has(c.id)) order.push(c.id); });
      return {
        order,
        mode: saved.mode === "def" ? "def" : "term",
        enabled: { ...fresh.enabled, ...(saved.enabled || {}) },
        status: saved.status || {}
      };
    } catch (e) {
      return fresh;
    }
  }

  let state = loadState();
  const save = () => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  };

  const activeIds = () => state.order.filter(id => state.enabled[byId.get(id).section]);
  const current = () => activeIds()[0];

  // ---------- deck moves ----------
  function sendToBack(id) {
    state.order = state.order.filter(x => x !== id);
    state.order.push(id);
    state.status[id] = "known";
  }

  function sendToMiddle(id) {
    const rest = activeIds().filter(x => x !== id);
    state.order = state.order.filter(x => x !== id);
    if (rest.length) {
      // Insert just before the card sitting at the midpoint of the active deck.
      const anchor = rest[Math.floor(rest.length / 2)];
      state.order.splice(state.order.indexOf(anchor), 0, id);
    } else {
      state.order.push(id);
    }
    state.status[id] = "again";
  }

  function shuffle() {
    const a = state.order;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  // ---------- rendering ----------
  const card = $("card"), wrap = $("cardWrap");
  let flipped = false, busy = false;

  function setFlipped(v, animate = true) {
    flipped = v;
    if (!animate) card.classList.add("dragging");
    card.classList.toggle("flipped", v);
    if (!animate) { void card.offsetWidth; card.classList.remove("dragging"); }
  }

  function fill(el, text, kind) {
    el.textContent = text;
    el.className = "content " + kind;
  }

  function render() {
    const ids = activeIds();
    const id = ids[0];
    const has = id !== undefined;
    wrap.hidden = !has;
    $("empty").hidden = has;
    $("btnAgain").disabled = $("btnKnown").disabled = !has;
    $("modeTerm").classList.toggle("active", state.mode === "term");
    $("modeDef").classList.toggle("active", state.mode === "def");
    $("modeTerm").setAttribute("aria-pressed", state.mode === "term");
    $("modeDef").setAttribute("aria-pressed", state.mode === "def");

    const knownCount = ids.filter(x => state.status[x] === "known").length;
    $("count").textContent = has ? `${knownCount}/${ids.length} known` : "";
    if (!has) return;

    const c = byId.get(id);
    const label = c.sub ? `${c.section} · ${c.sub}` : c.section;
    $("frontSection").textContent = $("backSection").textContent = label;
    const [frontText, frontKind, backText, backKind] = state.mode === "term"
      ? [c.term, "term", c.def, "def"]
      : [c.def, "def", c.term, "term"];
    fill($("frontText"), frontText, frontKind);
    fill($("backText"), backText, backKind);
    $("frontText").scrollTop = $("backText").scrollTop = 0;
  }

  function renderStats() {
    const ids = activeIds();
    const known = ids.filter(x => state.status[x] === "known").length;
    const again = ids.filter(x => state.status[x] === "again").length;
    $("stats").innerHTML =
      `<div class="stat"><b>${known}</b><span>Known</span></div>` +
      `<div class="stat"><b>${again}</b><span>Learning</span></div>` +
      `<div class="stat"><b>${ids.length - known - again}</b><span>New</span></div>`;
  }

  function renderSections() {
    const list = $("sectionList");
    list.innerHTML = "";
    SECTIONS.forEach(s => {
      const n = CARDS.filter(c => c.section === s).length;
      const li = document.createElement("li");
      li.innerHTML = `<label><input type="checkbox"><span class="name"></span><span class="n">${n}</span></label>`;
      li.querySelector(".name").textContent = s;
      const box = li.querySelector("input");
      box.checked = !!state.enabled[s];
      box.addEventListener("change", () => {
        state.enabled[s] = box.checked;
        save(); setFlipped(false, false); render(); renderStats();
      });
      list.appendChild(li);
    });
  }

  // ---------- actions ----------
  function act(kind) {
    const id = current();
    if (id === undefined || busy) return;
    busy = true;
    if (navigator.vibrate) navigator.vibrate(8);
    const dir = kind === "known" ? 1 : -1;
    wrap.style.transition = "transform .28s ease-in, opacity .28s ease-in";
    wrap.style.transform = `translateX(${dir * 120}%) rotate(${dir * 12}deg)`;
    wrap.style.opacity = "0";
    setTimeout(() => {
      kind === "known" ? sendToBack(id) : sendToMiddle(id);
      save();
      setFlipped(false, false);
      render();
      resetTags();
      wrap.style.transition = "none";
      wrap.style.transform = "translateY(16px) scale(.97)";
      void wrap.offsetWidth;
      wrap.style.transition = "transform .22s ease-out, opacity .22s ease-out";
      wrap.style.transform = "";
      wrap.style.opacity = "";
      setTimeout(() => { busy = false; }, 220);
    }, 280);
  }

  $("btnKnown").addEventListener("click", () => act("known"));
  $("btnAgain").addEventListener("click", () => act("again"));

  function setMode(m) {
    if (state.mode === m) return;
    state.mode = m; save(); setFlipped(false, false); render();
  }
  $("modeTerm").addEventListener("click", () => setMode("term"));
  $("modeDef").addEventListener("click", () => setMode("def"));

  card.addEventListener("keydown", e => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped(!flipped); }
  });
  document.addEventListener("keydown", e => {
    if (sheetOpen) return;
    if (e.key === "ArrowRight") act("known");
    if (e.key === "ArrowLeft") act("again");
  });

  // ---------- swipe / tap ----------
  const tagL = $("tagLeft"), tagR = $("tagRight");
  const resetTags = () => { tagL.style.opacity = tagR.style.opacity = 0; };
  let start = null, dx = 0, dragging = false;

  wrap.addEventListener("pointerdown", e => {
    if (busy) return;
    start = { x: e.clientX, y: e.clientY };
    dx = 0; dragging = false;
  });
  wrap.addEventListener("pointermove", e => {
    if (!start) return;
    const mx = e.clientX - start.x, my = e.clientY - start.y;
    if (!dragging) {
      if (Math.abs(mx) > 10 && Math.abs(mx) > Math.abs(my)) {
        dragging = true;
        wrap.setPointerCapture(e.pointerId);
        wrap.style.transition = "none";
      } else if (Math.abs(my) > 10) {
        start = null; // vertical scroll inside a long definition
        return;
      } else return;
    }
    dx = mx;
    wrap.style.transform = `translateX(${dx}px) rotate(${dx / 25}deg)`;
    const p = Math.min(Math.abs(dx) / 100, 1);
    tagR.style.opacity = dx > 0 ? p : 0;
    tagL.style.opacity = dx < 0 ? p : 0;
  });
  function endPointer() {
    if (!start) return;
    const wasDrag = dragging;
    start = null; dragging = false;
    if (!wasDrag) { setFlipped(!flipped); return; }
    if (Math.abs(dx) > 90) {
      act(dx > 0 ? "known" : "again");
    } else {
      wrap.style.transition = "transform .2s ease-out";
      wrap.style.transform = "";
      resetTags();
    }
  }
  wrap.addEventListener("pointerup", endPointer);
  wrap.addEventListener("pointercancel", () => {
    start = null; dragging = false;
    wrap.style.transition = "transform .2s ease-out";
    wrap.style.transform = "";
    resetTags();
  });

  // ---------- settings sheet ----------
  const sheet = $("sheet"), backdrop = $("backdrop");
  let sheetOpen = false;
  function openSheet() {
    renderSections(); renderStats();
    backdrop.hidden = false;
    sheet.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => sheet.classList.add("open"));
    sheetOpen = true;
  }
  function closeSheet() {
    sheet.classList.remove("open");
    sheet.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    sheetOpen = false;
  }
  $("openSettings").addEventListener("click", openSheet);
  $("emptySettings").addEventListener("click", openSheet);
  $("closeSettings").addEventListener("click", closeSheet);
  backdrop.addEventListener("click", closeSheet);

  function setAll(v) {
    SECTIONS.forEach(s => { state.enabled[s] = v; });
    save(); renderSections(); renderStats(); setFlipped(false, false); render();
  }
  $("selAll").addEventListener("click", () => setAll(true));
  $("selNone").addEventListener("click", () => setAll(false));

  $("shuffle").addEventListener("click", () => {
    shuffle(); save(); setFlipped(false, false); render(); closeSheet();
  });
  $("restore").addEventListener("click", () => {
    state.order = CARDS.map(c => c.id); save(); setFlipped(false, false); render(); closeSheet();
  });
  $("reset").addEventListener("click", () => {
    if (!confirm("Reset all progress and card order?")) return;
    const { mode, enabled } = state;
    state = { ...defaultState(), mode, enabled };
    save(); setFlipped(false, false); render(); renderStats();
  });

  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
