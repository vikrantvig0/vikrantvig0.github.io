(function () {
  function send(eventName, params) {
    if (typeof gtag === "function") gtag("event", eventName, params);
  }

  // 1) track PDF / external link / appendix
  document.addEventListener(
    "click",
    function (e) {
      const a = e.target.closest("a[data-paper-id]");
      if (!a) return;

      const paperId = a.getAttribute("data-paper-id") || "";
      const paperTitle = a.getAttribute("data-paper-title") || "";
      const clickType = a.getAttribute("data-click-type") || "link";
      const href = a.getAttribute("href") || "";

      send("paper_click", {
        paper_id: paperId,
        paper_title: paperTitle,
        click_type: clickType,
        link_url: href
      });
    },
    { capture: true }
  );

  // 2) track abstract
  document.addEventListener(
    "click",
    function (e) {
      const btn = e.target.closest("button.abstract-toggle[data-paper-id]");
      if (!btn) return;

      const paperId = btn.getAttribute("data-paper-id") || "";
      const paperTitle = btn.getAttribute("data-paper-title") || "";
      const targetId = btn.getAttribute("data-abstract-target") || "";

       
      setTimeout(function () {
        const el = targetId ? document.getElementById(targetId) : null;
        const isOpen = el ? (el.style.display !== "none") : null;

        send("abstract_toggle", {
          paper_id: paperId,
          paper_title: paperTitle,
          is_open: isOpen
        });
      }, 0);
    },
    { capture: true }
  );
})();
