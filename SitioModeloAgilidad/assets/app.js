/* ============================================================
   Modelo Operativo de Agilidad — Instituto Nacional de Seguros
   Lógica común del sitio
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function normal(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /* ---------- 1. Navegación principal ---------- */
  function initNav() {
    var actual = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".menu a").forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("#")[0].toLowerCase();
      if (href && href === actual) a.setAttribute("aria-current", "page");
    });

    var btn = document.querySelector(".btn-menu");
    var menu = document.querySelector(".menu");
    if (!btn || !menu) return;

    var fondo = document.createElement("div");
    fondo.className = "nav-fondo";
    document.body.appendChild(fondo);

    function abrir(v) {
      menu.classList.toggle("abierto", v);
      fondo.classList.toggle("on", v);
      btn.setAttribute("aria-expanded", v ? "true" : "false");
      document.body.classList.toggle("sin-scroll", v && window.innerWidth <= 1280);
      if (v) { var p = menu.querySelector("a"); if (p) p.focus(); }
    }
    btn.addEventListener("click", function () {
      abrir(btn.getAttribute("aria-expanded") !== "true");
    });
    fondo.addEventListener("click", function () { abrir(false); });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") abrir(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("abierto")) { abrir(false); btn.focus(); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1280) abrir(false);
    });
  }

  /* ---------- 2. Barra de progreso y volver arriba ---------- */
  function initScrollUI() {
    var barra = document.createElement("div");
    barra.className = "progreso";
    barra.setAttribute("aria-hidden", "true");
    document.body.appendChild(barra);

    var arriba = document.createElement("button");
    arriba.className = "arriba";
    arriba.type = "button";
    arriba.setAttribute("aria-label", "Volver al inicio de la página");
    arriba.innerHTML = "↑";
    document.body.appendChild(arriba);
    arriba.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });

    var tick = false;
    function act() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var y = window.scrollY;
      barra.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      arriba.classList.toggle("on", y > 600);
      tick = false;
    }
    window.addEventListener("scroll", function () {
      if (!tick) { tick = true; requestAnimationFrame(act); }
    }, { passive: true });
    act();
  }

  /* ---------- 3. Tablas responsivas ---------- */
  function initTablas() {
    document.querySelectorAll("table").forEach(function (t) {
      var ths = [].map.call(t.querySelectorAll("thead th"), function (th) { return th.textContent.trim(); });
      if (!ths.length) return;
      t.querySelectorAll("tbody tr").forEach(function (tr) {
        [].forEach.call(tr.children, function (td, i) {
          if (ths[i] && !td.hasAttribute("data-th")) td.setAttribute("data-th", ths[i]);
        });
      });
    });
  }

  /* ---------- 4. Panel lateral ---------- */
  var panel, fondoP, ultimoFoco;
  function crearPanel() {
    if (panel) return;
    fondoP = document.createElement("div");
    fondoP.className = "panel-fondo";
    panel = document.createElement("aside");
    panel.className = "panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "panel-titulo");
    panel.innerHTML =
      '<div class="panel-cab"><div class="k"></div><h2 id="panel-titulo"></h2>' +
      '<button class="panel-x" type="button" aria-label="Cerrar panel">✕</button></div>' +
      '<div class="panel-cuerpo"></div><div class="panel-pie"></div>';
    document.body.appendChild(fondoP);
    document.body.appendChild(panel);
    fondoP.addEventListener("click", cerrarPanel);
    panel.querySelector(".panel-x").addEventListener("click", cerrarPanel);
    panel.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var f = panel.querySelectorAll("button, a[href], input, [tabindex]:not([tabindex='-1'])");
      if (!f.length) return;
      var pri = f[0], ult = f[f.length - 1];
      if (e.shiftKey && document.activeElement === pri) { e.preventDefault(); ult.focus(); }
      else if (!e.shiftKey && document.activeElement === ult) { e.preventDefault(); pri.focus(); }
    });
  }
  function abrirPanel(id) {
    var d = (typeof PANELES !== "undefined") && PANELES[id];
    if (!d) return;
    crearPanel();
    ultimoFoco = document.activeElement;
    panel.querySelector(".k").textContent = d.k || "";
    panel.querySelector("h2").textContent = d.t;
    panel.querySelector(".panel-cuerpo").innerHTML = d.html;
    panel.querySelector(".panel-pie").innerHTML = d.link
      ? '<a class="btn" href="' + d.link + '">' + (d.linkTxt || "Ver más") + " →</a>" : "";
    panel.querySelector(".panel-cuerpo").scrollTop = 0;
    requestAnimationFrame(function () {
      fondoP.classList.add("on");
      panel.classList.add("on");
      panel.querySelector(".panel-x").focus();
    });
    document.body.classList.add("sin-scroll");
  }
  function cerrarPanel() {
    if (!panel || !panel.classList.contains("on")) return;
    panel.classList.remove("on");
    fondoP.classList.remove("on");
    document.body.classList.remove("sin-scroll");
    if (ultimoFoco) ultimoFoco.focus();
  }
  function initPaneles() {
    document.querySelectorAll("[data-panel]").forEach(function (el) {
      if (el.tagName === "BUTTON" && !el.type) el.type = "button";
      el.addEventListener("click", function () { abrirPanel(el.getAttribute("data-panel")); });
    });
  }

  /* ---------- 5. Buscador global ---------- */
  var busFondo, busInput, busRes, busSel = 0, ultimoFocoB;
  var SUGERENCIAS = ["Líder Técnico", "cadencia bimestral", "EAT", "WSJF", "Dueño de Producto", "topología"];

  function resaltar(txt, term) {
    var i = normal(txt).indexOf(normal(term));
    if (i < 0 || !term) return txt;
    return txt.slice(0, i) + "<mark>" + txt.slice(i, i + term.length) + "</mark>" + txt.slice(i + term.length);
  }
  function extracto(txt, term) {
    var i = normal(txt).indexOf(normal(term));
    if (i < 0) return txt.slice(0, 150);
    var d = Math.max(0, i - 50);
    return (d > 0 ? "…" : "") + txt.slice(d, d + 175);
  }
  function crearBuscador() {
    if (busFondo) return;
    busFondo = document.createElement("div");
    busFondo.className = "bus-fondo";
    busFondo.innerHTML =
      '<div class="bus" role="dialog" aria-modal="true" aria-label="Buscar en el sitio">' +
      '<input type="search" placeholder="Buscar en el Modelo Operativo…" aria-label="Buscar en el sitio" autocomplete="off">' +
      '<div class="bus-res" role="listbox"></div>' +
      '<div class="bus-pie">↑ ↓ para navegar · Enter para abrir · Esc para cerrar</div></div>';
    document.body.appendChild(busFondo);
    busInput = busFondo.querySelector("input");
    busRes = busFondo.querySelector(".bus-res");
    busFondo.addEventListener("click", function (e) { if (e.target === busFondo) cerrarBus(); });
    busInput.addEventListener("input", function () { buscar(busInput.value); });
    busInput.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); mover(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); mover(-1); }
      else if (e.key === "Enter") {
        var a = busRes.querySelectorAll(".bus-item")[busSel];
        if (a) location.href = a.getAttribute("href");
      }
    });
    busRes.addEventListener("click", function (e) {
      var b = e.target.closest("[data-sug]");
      if (b) { busInput.value = b.getAttribute("data-sug"); buscar(busInput.value); busInput.focus(); }
    });
  }
  function mover(d) {
    var els = busRes.querySelectorAll(".bus-item");
    if (!els.length) return;
    if (els[busSel]) els[busSel].classList.remove("sel");
    busSel = (busSel + d + els.length) % els.length;
    els[busSel].classList.add("sel");
    els[busSel].scrollIntoView({ block: "nearest" });
  }
  function buscar(q) {
    q = q.trim();
    busSel = 0;
    if (!q) {
      busRes.innerHTML = '<div class="bus-vacio">Escriba para buscar en todo el sitio.' +
        '<div class="bus-sug">' + SUGERENCIAS.map(function (s) {
          return '<button type="button" data-sug="' + s + '">' + s + "</button>";
        }).join("") + "</div></div>";
      return;
    }
    var terms = normal(q).split(/\s+/).filter(Boolean);
    var res = (typeof INDICE !== "undefined" ? INDICE : []).map(function (it) {
      var nt = normal(it.t), nx = normal(it.x), np = normal(it.pg), na = normal(it.a || "");
      var s = 0;
      terms.forEach(function (t) {
        if (nt.indexOf(t) === 0) s += 14;
        else if (nt.indexOf(t) > -1) s += 9;
        if (na.indexOf(t) > -1) s += 7;
        if (np.indexOf(t) > -1) s += 3;
        if (nx.indexOf(t) > -1) s += 4;
      });
      return { it: it, s: s };
    }).filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; }).slice(0, 12);

    if (!res.length) {
      busRes.innerHTML = '<div class="bus-vacio">Sin resultados para <b>' +
        q.replace(/[<>&]/g, "") + "</b><br><span class='chico'>Pruebe con otro término o revise el glosario.</span>" +
        '<div class="bus-sug">' + SUGERENCIAS.map(function (s) {
          return '<button type="button" data-sug="' + s + '">' + s + "</button>";
        }).join("") + "</div></div>";
      return;
    }
    busRes.innerHTML = res.map(function (r, i) {
      return '<a class="bus-item' + (i === 0 ? " sel" : "") + '" href="' + r.it.p + '" role="option">' +
        '<div class="bp2">' + r.it.pg + "</div>" +
        '<div class="bt">' + resaltar(r.it.t, q) + "</div>" +
        '<div class="bx">' + resaltar(extracto(r.it.x, q), q) + "</div></a>";
    }).join("");
  }
  function abrirBus() {
    crearBuscador();
    ultimoFocoB = document.activeElement;
    busFondo.classList.add("on");
    document.body.classList.add("sin-scroll");
    busInput.value = "";
    buscar("");
    setTimeout(function () { busInput.focus(); }, 30);
  }
  function cerrarBus() {
    if (!busFondo || !busFondo.classList.contains("on")) return;
    busFondo.classList.remove("on");
    document.body.classList.remove("sin-scroll");
    if (ultimoFocoB) ultimoFocoB.focus();
  }
  function initBuscador() {
    document.querySelectorAll(".btn-buscar, [data-buscar]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); abrirBus(); });
    });
    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) { e.preventDefault(); abrirBus(); }
      if (e.key === "Escape") { cerrarBus(); cerrarPanel(); }
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
        e.preventDefault(); abrirBus();
      }
    });
  }

  /* ---------- 6. Índice lateral ---------- */
  function initIndice() {
    var links = document.querySelectorAll(".indice a");
    if (!links.length) return;
    var secs = [];
    links.forEach(function (a) {
      var id = (a.getAttribute("href") || "").split("#")[1];
      var el = id && document.getElementById(id);
      if (el) secs.push({ a: a, el: el });
    });
    if (!secs.length) return;
    var tick = false;
    function act() {
      var y = window.scrollY + 140, cur = secs[0];
      secs.forEach(function (s) { if (s.el.getBoundingClientRect().top + window.scrollY <= y) cur = s; });
      links.forEach(function (a) { a.classList.remove("on"); });
      cur.a.classList.add("on");
      tick = false;
    }
    window.addEventListener("scroll", function () {
      if (!tick) { tick = true; requestAnimationFrame(act); }
    }, { passive: true });
    act();
  }

  /* ---------- 7. Selector de topología ---------- */
  function initWizard() {
    var cont = document.getElementById("wizard");
    if (!cont || typeof WIZ === "undefined") return;
    var resp = [];

    function prog(i) {
      return '<div class="wiz-prog" role="progressbar" aria-valuemin="1" aria-valuemax="' + WIZ.length +
        '" aria-valuenow="' + (i + 1) + '">' + WIZ.map(function (_, k) {
          return '<i class="' + (k <= i ? "on" : "") + '"></i>';
        }).join("") + "</div>";
    }
    function pintarPregunta(i) {
      var p = WIZ[i];
      cont.innerHTML = prog(i) +
        '<span class="eyebrow">Pregunta ' + (i + 1) + " de " + WIZ.length + "</span>" +
        "<h3>" + p.q + "</h3><div class='wiz-ops'>" +
        p.ops.map(function (o, k) {
          return '<button class="wiz-op" type="button" data-k="' + k + '">' + o.t +
            (o.d ? "<small>" + o.d + "</small>" : "") + "</button>";
        }).join("") + "</div>" +
        (i > 0 ? '<div class="fila-btn"><button class="btn linea" type="button" id="wiz-atras">← Anterior</button></div>' : "");
      cont.querySelectorAll(".wiz-op").forEach(function (b) {
        b.addEventListener("click", function () {
          resp[i] = parseInt(b.getAttribute("data-k"), 10);
          if (i + 1 < WIZ.length) pintarPregunta(i + 1); else pintarResultado();
        });
      });
      var atras = document.getElementById("wiz-atras");
      if (atras) atras.addEventListener("click", function () { pintarPregunta(i - 1); });
      var h = cont.querySelector("h3"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
    function pintarResultado() {
      var tot = { lab: 0, serv: 0, proy: 0 };
      resp.forEach(function (k, i) {
        var p = WIZ[i].ops[k].p;
        for (var c in p) tot[c] += p[c];
      });
      var suma = tot.lab + tot.serv + tot.proy || 1;
      var gana = Object.keys(tot).sort(function (a, b) { return tot[b] - tot[a]; })[0];
      var r = WIZ_RES[gana];
      cont.innerHTML =
        '<div class="wiz-res"><span class="eyebrow">Recomendación</span>' +
        '<div class="medalla" style="background:' + r.color + '">' + r.nombre + "</div>" +
        "<p style='max-width:56ch;margin:0 auto'>" + r.txt + "</p>" +
        '<div class="wiz-barras">' +
        ["lab", "serv", "proy"].map(function (c) {
          var pct = Math.round((tot[c] / suma) * 100);
          return '<div class="wiz-barra"><b>' + WIZ_RES[c].nombre + "</b> — " + pct + "%" +
            '<div class="bar"><i style="width:' + pct + "%;background:" + WIZ_RES[c].color + '"></i></div></div>';
        }).join("") + "</div>" +
        '<div class="fila-btn" style="justify-content:center">' +
        '<a class="btn" href="' + r.link + '">Ver ' + r.nombre + " →</a>" +
        '<button class="btn linea" type="button" id="wiz-reset">Repetir</button></div>' +
        '<p class="chico" style="margin:22px auto 0;max-width:56ch">Esta recomendación es una guía basada en las reglas de decisión del modelo. ' +
        "La decisión final debe validarse con el liderazgo del flujo de valor y, si aplica, con el EAT.</p></div>";
      document.getElementById("wiz-reset").addEventListener("click", function () { resp = []; pintarPregunta(0); });
    }
    pintarPregunta(0);
  }

  /* ---------- 8. Explorador de roles ---------- */
  function initRoles() {
    var cont = document.getElementById("roles-lista");
    if (!cont || typeof ROLES === "undefined") return;
    var filtro = "todos", texto = "";
    var cuenta = document.getElementById("roles-cuenta");

    function pintar() {
      var lista = ROLES.filter(function (r) {
        if (filtro !== "todos" && r.cat !== filtro) return false;
        if (!texto) return true;
        var t = normal(r.n + " " + r.catTxt + " " + r.d + " " + r.r.join(" ") + " " + r.m.join(" "));
        return t.indexOf(normal(texto)) > -1;
      });
      if (cuenta) {
        cuenta.textContent = lista.length === ROLES.length
          ? "Mostrando los " + ROLES.length + " roles del modelo."
          : "Mostrando " + lista.length + " de " + ROLES.length + " roles.";
      }
      if (!lista.length) {
        cont.innerHTML = '<p class="chico" style="grid-column:1/-1;text-align:center;padding:44px 0">Ningún rol coincide con la búsqueda. Pruebe con otro término.</p>';
        return;
      }
      cont.innerHTML = lista.map(function (r) {
        var tagCls = r.cat === "serv" ? "verde" : r.cat === "proy" ? "morado" : r.cat === "gob" ? "acento" : "";
        return '<article class="rol" id="' + r.id + '">' +
          '<div class="rol-cab ' + r.cat + '"><span class="tag ' + tagCls + '">' + r.catTxt + "</span>" +
          "<h3>" + r.n + "</h3><p>" + r.d + "</p>" +
          "</div>" +
          '<div class="rol-sec"><h4>Responsabilidades</h4><ul>' +
          r.r.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" +
          "<h4>Métricas de éxito</h4><ul>" +
          r.m.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></div>" +
          '<div class="rol-meta">' + Object.keys(r.meta).map(function (k) {
            return "<div><b>" + k + ":</b> " + r.meta[k] + "</div>";
          }).join("") + "</div></article>";
      }).join("");
    }
    document.querySelectorAll("[data-filtro]").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll("[data-filtro]").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        filtro = b.getAttribute("data-filtro");
        pintar();
      });
    });
    var inp = document.getElementById("roles-buscar");
    if (inp) inp.addEventListener("input", function () { texto = inp.value; pintar(); });
    pintar();

    if (location.hash) {
      var el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(function () { el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }); }, 80);
    }
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initScrollUI();
    initTablas();
    initPaneles();
    initBuscador();
    initIndice();
    initWizard();
    initRoles();
  });
})();
