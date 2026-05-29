window.WAHLKAMPF_TABS = window.WAHLKAMPF_TABS || {};

(function mountGameTabs() {
  const mount = document.getElementById('game-tab-mount');
  if (!mount) return;

  const order = ['front', 'polling', 'bundestag', 'economy', 'cabinet', 'foreign'];
  mount.innerHTML = order
    .map(key => window.WAHLKAMPF_TABS[key] || '')
    .join('\n');
})();
