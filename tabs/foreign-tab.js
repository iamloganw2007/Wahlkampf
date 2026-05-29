window.WAHLKAMPF_TABS = window.WAHLKAMPF_TABS || {};

window.WAHLKAMPF_TABS.foreign = String.raw`
      <div class="game-tab-view" id="game-view-foreign">
        <div class="game-governance-view">
          <div id="game-gov-host-foreign" class="game-governance-host"></div>
        </div>
      </div>
`;

(function foreignAffairsGlobePatch() {
  const GEOJSON_URL = 'https://cdn.jsdelivr.net/gh/datasets/geo-countries@main/data/countries.geojson';
  const THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  const MAJOR_POWER_MAP = {
    USA: 'usa',
    CHN: 'china',
    RUS: 'russia',
  };

  const ALLIANCE_DATA = {
    USA: ['NATO', 'G7', 'G20', 'Five Eyes', 'OECD', 'Quad'],
    GBR: ['NATO', 'G7', 'G20', 'Five Eyes', 'OECD', 'P5', 'CPTPP'],
    FRA: ['NATO', 'EU', 'G7', 'G20', 'OECD', 'P5'],
    DEU: ['NATO', 'EU', 'G7', 'G20', 'OECD'],
    CHN: ['G20', 'BRICS', 'SCO', 'P5'],
    RUS: ['CSTO', 'SCO', 'BRICS', 'P5'],
    IND: ['G20', 'BRICS', 'SCO', 'Quad'],
    JPN: ['G7', 'G20', 'Quad', 'OECD', 'CPTPP'],
    AUS: ['G20', 'Five Eyes', 'Quad', 'AUKUS', 'CPTPP', 'OECD'],
    CAN: ['NATO', 'G7', 'G20', 'Five Eyes', 'OECD', 'CPTPP'],
    BRA: ['G20', 'BRICS', 'Mercosur'],
    ZAF: ['G20', 'BRICS', 'AU'],
    SAU: ['G20', 'OPEC', 'Arab League'],
    IRN: ['SCO'],
    ISR: ['OECD'],
    TUR: ['NATO', 'G20'],
    MEX: ['G20', 'OECD', 'USMCA'],
    KOR: ['G20', 'OECD'],
    IDN: ['G20', 'ASEAN'],
    NGA: ['AU', 'ECOWAS'],
    EGY: ['G20', 'Arab League', 'AU'],
    POL: ['NATO', 'EU', 'OECD'],
    PAK: ['SCO'],
    NOR: ['NATO', 'OECD', 'EEA'],
    SWE: ['NATO', 'EU', 'OECD'],
    FIN: ['NATO', 'EU', 'OECD'],
    CHE: ['OECD'],
    NLD: ['NATO', 'EU', 'G20', 'OECD'],
    ITA: ['NATO', 'EU', 'G7', 'G20', 'OECD'],
    ESP: ['NATO', 'EU', 'G20', 'OECD'],
    ARG: ['G20', 'Mercosur'],
    VNM: ['ASEAN'],
    SGP: ['ASEAN', 'CPTPP'],
    MYS: ['ASEAN', 'CPTPP'],
    PHL: ['ASEAN'],
    THA: ['ASEAN'],
    UKR: [],
    AZE: [],
    GEO: [],
    SRB: [],
  };

  const GOVERNMENT_DATA = {
    USA: 'Federal presidential constitutional republic',
    CHN: 'Unitary Marxist–Leninist one-party state',
    RUS: 'Federal semi-presidential republic',
    DEU: 'Federal parliamentary republic',
    GBR: 'Unitary parliamentary constitutional monarchy',
    FRA: 'Unitary semi-presidential republic',
    IND: 'Federal parliamentary republic',
    JPN: 'Unitary parliamentary constitutional monarchy',
    BRA: 'Federal presidential republic',
    TUR: 'Unitary presidential republic',
    SAU: 'Absolute monarchy (Wahhabi-aligned)',
    IRN: 'Islamic theocratic republic',
    ISR: 'Unitary parliamentary republic',
    KOR: 'Unitary presidential republic',
    POL: 'Unitary parliamentary republic',
    UKR: 'Unitary semi-presidential republic',
    AUS: 'Federal parliamentary constitutional monarchy',
    CAN: 'Federal parliamentary constitutional monarchy',
    NOR: 'Unitary parliamentary constitutional monarchy',
    SWE: 'Unitary parliamentary constitutional monarchy',
    FIN: 'Unitary semi-presidential republic',
    NLD: 'Unitary parliamentary constitutional monarchy',
    ITA: 'Unitary parliamentary republic',
    ESP: 'Unitary parliamentary constitutional monarchy',
    ZAF: 'Unitary parliamentary republic',
    EGY: 'Unitary presidential republic',
    NGR: 'Federal presidential republic',
    ARG: 'Federal presidential republic',
    MEX: 'Federal presidential republic',
    IDN: 'Unitary presidential republic',
    PAK: 'Federal parliamentary republic',
    SGP: 'Unitary parliamentary republic',
    SRB: 'Unitary parliamentary republic',
  };

  const MAJOR_POWER_NOTES = {
    usa: 'The transatlantic relationship remains Berlin\'s most consequential security and economic partnership. Germany relies on the U.S. nuclear umbrella and Article 5 commitments while managing periodic friction over defence spending targets, trade imbalances, and technology export controls. Washington\'s posture on European strategic autonomy and NATO burden-sharing defines much of the bilateral agenda; shifts in U.S. domestic politics carry outsized implications for German security policy.',
    eu: 'Germany is the EU\'s largest economy and its de facto agenda-setter on monetary affairs, industrial policy, and single-market regulation. The Franco-German axis anchors eurozone governance, while Berlin\'s export-oriented growth model creates structural tensions with southern member states and complicates the green transition. Brussels-Berlin alignment on competition law, AI regulation, and external trade shapes the Union\'s credibility as a geopolitical actor.',
    russia: 'Relations deteriorated sharply following the 2022 full-scale invasion of Ukraine. Germany has largely dismantled its energy dependency on Russian gas — the central pillar of three decades of Ostpolitik — while channelling materiel, financing, and diplomatic support to Kyiv. Moscow\'s hybrid operations, including disinformation campaigns, infrastructure sabotage, and espionage, have fundamentally reshaped Berlin\'s security calculus. Normalisation of ties is contingent on a durable and legitimate Ukrainian settlement.',
    china: 'China is Germany\'s largest single trading partner in manufactured goods, yet the relationship is increasingly defined by a formal de-risking discourse. Beijing\'s coercive economic practices, support for Russia\'s war effort, and military posture in the Taiwan Strait have pushed Berlin toward a more assertive China strategy. Investment screening, export controls, and supply-chain diversification in critical sectors — semiconductors, critical minerals, pharmaceuticals — are the primary policy instruments, though implementation pace remains contested.',
  };

  const GEOPOLITICAL_THEATRES = [
    {
      name: 'Eastern Europe',
      region: 'Ukraine & Russia',
      risk: 'high',
      riskLabel: 'High risk',
      body: 'The war in Ukraine constitutes the most direct challenge to European security order since 1945. German policy is anchored in continued materiel support, sanctions maintenance, and opposition to a coerced settlement. Coalition cohesion among Western partners and escalation management vis-à-vis Russia remain the central operational concerns for the Auswärtiges Amt.',
    },
    {
      name: 'Indo-Pacific',
      region: 'Taiwan Strait & South China Sea',
      risk: 'elevated',
      riskLabel: 'Elevated',
      body: 'The prospect of a cross-strait military confrontation carries systemic economic risk for Germany, whose industrial base depends heavily on Taiwanese semiconductors and Chinese supply chains. Berlin has deployed naval assets to the region and joined joint freedom-of-navigation exercises, signalling strategic interest without a formal alliance commitment.',
    },
    {
      name: 'Middle East',
      region: 'Gaza, Lebanon & Iran',
      risk: 'high',
      riskLabel: 'High risk',
      body: 'The Gaza conflict, Houthi Red Sea disruptions, and Iranian nuclear escalation have converged into an interlocking regional crisis. Germany has suspended arms exports to several actors and faces domestic political pressure over its position on the Israeli-Palestinian conflict. Iranian missile proliferation and Hezbollah reconstitution remain Bundeswehr intelligence priorities.',
    },
    {
      name: 'Sahel',
      region: 'West & Central Africa',
      risk: 'elevated',
      riskLabel: 'Elevated',
      body: 'A cascade of coups across the Sahel has ejected French and EU security missions, creating a vacuum filled in part by Russian private military companies. Germany has withdrawn Bundeswehr trainers from Mali and Niger while retaining development and stabilisation engagement. Migration pressure and Islamist insurgency spillover are monitored as second-order threats to European interior security.',
    },
    {
      name: 'Western Balkans',
      region: 'Bosnia, Kosovo & Serbia',
      risk: 'moderate',
      riskLabel: 'Moderate',
      body: 'The Balkans remain a fault line between EU enlargement aspirations and renewed Russian and Chinese influence. Germany is the lead mediator in the Belgrade-Pristina dialogue and a strong advocate of accelerated accession timelines. Ethnic tensions and democratic backsliding in Serbia represent the primary near-term flashpoints, with Bosnia-Herzegovina\u2019s constitutional deadlock a chronic structural concern.',
    },
    {
      name: 'Arctic',
      region: 'High North',
      risk: 'moderate',
      riskLabel: 'Moderate',
      body: 'Melting sea ice is opening new shipping lanes and exposing vast hydrocarbon reserves, intensifying strategic competition in the High North. Russia maintains the most extensive Arctic military infrastructure; China claims status as a "near-Arctic state." Germany chairs NATO\'s Arctic security working group and holds Arctic Council observer status, suspended since Russia\'s 2022 invasion.',
    },
  ];

  const state = {
    patchApplied: false,
    originalRender: null,
    originalShowGovPanel: null,
    originalSetGovCategory: null,
    geoJsonPromise: null,
    threePromise: null,
    styleInjected: false,
    mountToken: 0,
    cleanup: null,
    texture: null,
    refreshTexture: null,
    countryById: new Map(),
    featureByIso: new Map(),
  };

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function hashString(value) {
    const src = String(value || '');
    let hash = 0;
    for (let i = 0; i < src.length; i += 1) {
      hash = ((hash << 5) - hash) + src.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function getCountryFill(iso) {
    const palette = [
      '#456a96', '#7d9142', '#9c5a4a', '#7860a8', '#347f76', '#b17d37',
      '#5f86b7', '#8b4b74', '#597e47', '#9b6b31', '#4a6795', '#86653f',
    ];
    return palette[hashString(iso) % palette.length];
  }

  function getCountryStroke(iso, selectedIso) {
    return iso === selectedIso ? '#f8d36d' : 'rgba(255,255,255,0.78)';
  }

  function statusTone(record) {
    if (!record) return { label: 'Unassessed', color: '#9ca7b5' };
    if ((record.tension || 0) > 80) return { label: 'Crisis', color: '#d74b42' };
    if ((record.tension || 0) > 60) return { label: 'Strained', color: '#cf7c3d' };
    if ((record.rel || 0) > 70) return { label: 'Strong', color: '#6aa66d' };
    if ((record.rel || 0) > 45) return { label: 'Working', color: '#cab36a' };
    if ((record.rel || 0) > 25) return { label: 'Cool', color: '#c98347' };
    return { label: 'Hostile', color: '#d74b42' };
  }

  function getCurrentQuarterLabel() {
    const govState = window.govState || {};
    const quarter = Number(govState.quarter || 0);
    const baseYear = Number(govState.baseYear || 2025);
    const year = baseYear + Math.floor(quarter / 4);
    return `${['Q1', 'Q2', 'Q3', 'Q4'][quarter % 4]} ${year}`;
  }

  function getSelectedIso() {
    const govState = window.govState || {};
    if (!govState._foreignSelectedCountryIso) {
      govState._foreignSelectedCountryIso = 'USA';
    }
    return govState._foreignSelectedCountryIso;
  }

  function setSelectedIso(iso) {
    const govState = window.govState || {};
    govState._foreignSelectedCountryIso = iso;
  }

  function ensureStyles() {
    if (state.styleInjected || !document.head) return;
    const style = document.createElement('style');
    style.id = 'foreign-globe-styles';
    style.textContent = `
.foreign-affairs-shell {
  display: grid;
  gap: 18px;
}
.foreign-globe-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.95fr);
  gap: 18px;
  align-items: stretch;
}
.foreign-globe-card,
.foreign-country-card,
.foreign-brief-grid > div,
.foreign-major-grid > div,
.foreign-log-card {
  border: 1px solid rgba(203,196,177,0.9);
  background: rgba(255,252,246,0.98);
  box-shadow: 0 18px 40px rgba(23, 28, 39, 0.08);
}
.foreign-globe-card {
  padding: 16px 16px 14px;
}
.foreign-globe-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
}
.foreign-globe-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 30px;
  line-height: 1;
  color: rgba(22,30,42,0.96);
}
.foreign-globe-sub {
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.6;
  color: rgba(38,44,54,0.62);
}
.foreign-globe-status {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(38,44,54,0.54);
  white-space: nowrap;
}
.foreign-globe-stage {
  position: relative;
  min-height: 520px;
  border: 1px solid rgba(203,196,177,0.7);
  background:
    radial-gradient(circle at 50% 35%, rgba(62,108,168,0.24), rgba(8,12,24,0.96) 62%),
    linear-gradient(180deg, rgba(5,7,16,0.98), rgba(16,21,36,0.98));
  overflow: hidden;
}
.foreign-globe-stage canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.foreign-globe-hud {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  pointer-events: none;
}
.foreign-globe-chip {
  padding: 8px 10px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(7,11,24,0.74);
  color: rgba(255,255,255,0.88);
  backdrop-filter: blur(10px);
  font-size: 10px;
  line-height: 1.5;
}
.foreign-globe-chip strong {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.56);
}
.foreign-country-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.foreign-country-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
}
.foreign-country-meta {
  display: grid;
  gap: 14px;
}
.foreign-country-actions {
  border: 1px solid rgba(203,196,177,0.84);
  background: rgba(247,242,232,0.84);
  padding: 14px;
}
.foreign-country-actions-title {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(38,44,54,0.48);
  margin-bottom: 10px;
}
.foreign-action-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}
.foreign-action-btn {
  border: 1px solid rgba(38,44,54,0.16);
  background: rgba(255,255,255,0.92);
  color: rgba(22,30,42,0.92);
  padding: 10px 12px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.12s ease, border-color 0.12s ease, background 0.12s ease;
}
.foreign-action-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(38,44,54,0.36);
  background: rgba(255,255,255,1);
}
.foreign-action-btn[disabled] {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}
.foreign-action-btn strong {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.foreign-action-btn span {
  display: block;
  font-size: 11px;
  line-height: 1.45;
  color: rgba(38,44,54,0.62);
}
.foreign-brief-grid,
.foreign-major-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.foreign-brief-grid > div,
.foreign-major-grid > div {
  padding: 14px 16px;
}
.foreign-stat-kicker {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(38,44,54,0.48);
  margin-bottom: 5px;
}
.foreign-stat-value {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 26px;
  color: rgba(22,30,42,0.96);
}
.foreign-stat-sub {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(38,44,54,0.62);
}
.foreign-major-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.foreign-major-card-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 12px;
}
.foreign-major-card-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 24px;
  color: rgba(22,30,42,0.96);
}
.foreign-major-card-status {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.foreign-meter {
  display: grid;
  gap: 8px;
}
.foreign-meter-row {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) 32px;
  gap: 8px;
  align-items: center;
}
.foreign-meter-row span {
  font-size: 10px;
  color: rgba(38,44,54,0.62);
}
.foreign-meter-track {
  height: 6px;
  border-radius: 999px;
  background: rgba(34,42,56,0.12);
  overflow: hidden;
}
.foreign-meter-fill {
  height: 100%;
  border-radius: 999px;
}
.foreign-log-card {
  padding: 16px 18px;
}
.foreign-log-card h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 28px;
  color: rgba(22,30,42,0.96);
  margin-bottom: 10px;
}
.foreign-log-item {
  display: flex;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(203,196,177,0.65);
}
.foreign-log-item:last-child {
  border-bottom: 0;
}
.foreign-log-item-icon {
  font-size: 16px;
  line-height: 1.4;
}
.foreign-log-item-title {
  font-size: 13px;
  line-height: 1.4;
  color: rgba(22,30,42,0.94);
  font-weight: 600;
}
.foreign-log-item-sub {
  margin-top: 3px;
  font-size: 10px;
  line-height: 1.45;
  color: rgba(38,44,54,0.52);
}
.foreign-infobox-note {
  margin-top: 10px;
}
@media (max-width: 1160px) {
  .foreign-globe-hero {
    grid-template-columns: 1fr;
  }
  .foreign-major-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 840px) {
  .foreign-globe-stage {
    min-height: 420px;
  }
  .foreign-brief-grid,
  .foreign-major-grid,
  .foreign-action-grid {
    grid-template-columns: 1fr;
  }
}
.foreign-situation-card {
  border: 1px solid rgba(203,196,177,0.9);
  background: rgba(255,252,246,0.98);
  box-shadow: 0 18px 40px rgba(23,28,39,0.08);
  padding: 20px 24px;
}
.foreign-situation-kicker {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(38,44,54,0.46);
  margin-bottom: 8px;
}
.foreign-situation-lead {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px;
  line-height: 1.28;
  color: rgba(22,30,42,0.96);
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(203,196,177,0.7);
  padding-bottom: 12px;
}
.foreign-situation-body {
  font-size: 12.5px;
  line-height: 1.74;
  color: rgba(38,44,54,0.76);
  columns: 2;
  column-gap: 26px;
}
.foreign-situation-body p {
  margin: 0 0 10px;
  break-inside: avoid;
}
.foreign-theatre-section-head {
  margin-bottom: 14px;
}
.foreign-theatre-section-kicker {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(38,44,54,0.46);
  margin-bottom: 5px;
}
.foreign-theatre-section-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 28px;
  color: rgba(22,30,42,0.96);
  line-height: 1;
  margin-bottom: 5px;
}
.foreign-theatre-section-deck {
  font-size: 12px;
  color: rgba(38,44,54,0.58);
  line-height: 1.55;
}
.foreign-theatre-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.foreign-theatre-card {
  border: 1px solid rgba(203,196,177,0.9);
  background: rgba(255,252,246,0.98);
  box-shadow: 0 18px 40px rgba(23,28,39,0.08);
  padding: 14px 16px;
}
.foreign-theatre-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 6px;
}
.foreign-theatre-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 20px;
  color: rgba(22,30,42,0.96);
}
.foreign-theatre-risk {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 2px;
  white-space: nowrap;
}
.foreign-theatre-risk--high { background: rgba(215,75,66,0.11); color: #b83c36; }
.foreign-theatre-risk--elevated { background: rgba(207,124,61,0.13); color: #a05828; }
.foreign-theatre-risk--moderate { background: rgba(199,176,96,0.16); color: #7a6424; }
.foreign-theatre-sub {
  font-size: 11px;
  line-height: 1.64;
  color: rgba(38,44,54,0.62);
}
.foreign-alliance-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 5px;
}
.foreign-alliance-chip {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 2px;
  border: 1px solid rgba(38,44,54,0.14);
  background: rgba(247,244,236,0.9);
  color: rgba(38,44,54,0.64);
}
.foreign-alliance-chip--nato { border-color: rgba(30,80,180,0.32); background: rgba(30,80,180,0.07); color: rgba(20,50,150,0.82); }
.foreign-alliance-chip--eu { border-color: rgba(0,90,180,0.32); background: rgba(0,90,180,0.07); color: rgba(0,55,140,0.82); }
.foreign-alliance-chip--g7 { border-color: rgba(50,130,70,0.28); background: rgba(50,130,70,0.07); color: rgba(30,90,45,0.82); }
.foreign-alliance-chip--brics { border-color: rgba(180,60,40,0.28); background: rgba(180,60,40,0.07); color: rgba(140,40,24,0.82); }
.foreign-alliance-chip--p5 { border-color: rgba(110,50,150,0.28); background: rgba(110,50,150,0.07); color: rgba(80,28,120,0.82); }
.foreign-analytical-note {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid rgba(203,196,177,0.56);
  font-size: 11.5px;
  line-height: 1.7;
  color: rgba(38,44,54,0.66);
  font-style: italic;
}
@media (max-width: 1160px) {
  .foreign-situation-body { columns: 1; }
  .foreign-theatre-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 840px) {
  .foreign-theatre-grid { grid-template-columns: 1fr; }
}
`;
    document.head.appendChild(style);
    state.styleInjected = true;
  }

  function loadScriptOnce(src, globalKey) {
    const cache = window.__wahlkampfForeignAssetPromises = window.__wahlkampfForeignAssetPromises || {};
    if (cache[src]) return cache[src];
    cache[src] = new Promise((resolve, reject) => {
      if (globalKey && window[globalKey]) {
        resolve(window[globalKey]);
        return;
      }
      const existing = Array.from(document.scripts).find(script => script.src === src);
      if (existing && globalKey && window[globalKey]) {
        resolve(window[globalKey]);
        return;
      }
      const script = existing || document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve(globalKey ? window[globalKey] : true);
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      if (!existing) document.head.appendChild(script);
    });
    return cache[src];
  }

  function ensureThree() {
    if (window.THREE) return Promise.resolve(window.THREE);
    state.threePromise = state.threePromise || loadScriptOnce(THREE_URL, 'THREE');
    return state.threePromise;
  }

  function normalizeFeatureProps(feature, index) {
    const props = feature.properties || {};
    const rawIso = props.ISO3166_1_Alpha_3 || props['ISO3166-1-Alpha-3'] || props.ISO_A3 || props.ADM0_A3 || props.iso_a3 || props.id || `C${index}`;
    const iso = String(rawIso).trim().toUpperCase();
    const name = props.ADMIN || props.NAME || props.name || props.SOVEREIGNT || props.formal_en || iso;
    const continent = props.CONTINENT || props.continent || props.REGION_UN || props.region_un || 'Unknown';
    const subregion = props.SUBREGION || props.subregion || props.REGION_WB || props.region_wb || '';
    const iso2 = props.ISO_A2 || props.iso_a2 || props['ISO3166-1-Alpha-2'] || '';
    return {
      ...feature,
      properties: {
        ...props,
        _iso: iso,
        _name: name,
        _continent: continent,
        _subregion: subregion,
        _iso2: String(iso2 || '').trim().toUpperCase(),
      },
    };
  }

  function loadGeoJson() {
    if (state.geoJsonPromise) return state.geoJsonPromise;
    state.geoJsonPromise = fetch(GEOJSON_URL)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        const features = Array.isArray(data?.features) ? data.features.map(normalizeFeatureProps) : [];
        state.featureByIso = new Map(features.map(feature => [feature.properties._iso, feature]));
        return { ...data, features };
      });
    return state.geoJsonPromise;
  }

  function numberLabel(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return 'Unknown';
    if (Math.abs(num) >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
    if (Math.abs(num) >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
    if (Math.abs(num) >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
    return num.toLocaleString();
  }

  function getFlagEmojiFromIso2(iso2) {
    if (!iso2 || iso2.length !== 2) return '🌐';
    return iso2
      .toUpperCase()
      .split('')
      .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
      .join('');
  }

  function relationColor(value) {
    if (value > 70) return '#6aa66d';
    if (value > 45) return '#c7b060';
    if (value > 25) return '#cf7c3d';
    return '#d74b42';
  }

  function tensionColor(value) {
    if (value > 75) return '#d74b42';
    if (value > 50) return '#cf7c3d';
    if (value > 25) return '#c7b060';
    return '#6aa66d';
  }

  function buildMeterRow(label, value, color) {
    const safeValue = Math.max(0, Math.min(100, Number(value || 0)));
    return `
      <div class="foreign-meter-row">
        <span>${escapeHtml(label)}</span>
        <div class="foreign-meter-track"><div class="foreign-meter-fill" style="width:${safeValue}%;background:${color};"></div></div>
        <span style="color:${color};font-weight:700;">${Math.round(safeValue)}</span>
      </div>
    `;
  }

  function ensureCountryRecord(feature) {
    const govState = window.govState || {};
    const iso = feature?.properties?._iso;
    if (!iso) return null;

    if (iso === 'DEU') {
      return {
        rel: 100,
        trade: 100,
        tension: 0,
        sanctions: false,
        label: 'Germany',
        lastAction: 'Home jurisdiction',
        _isHostCountry: true,
      };
    }

    const majorKey = MAJOR_POWER_MAP[iso];
    if (majorKey && govState.foreign?.[majorKey]) {
      return govState.foreign[majorKey];
    }

    govState.foreignCountries = govState.foreignCountries || {};
    if (!govState.foreignCountries[iso]) {
      const seed = hashString(iso);
      govState.foreignCountries[iso] = {
        rel: 38 + (seed % 28),
        trade: 10 + (seed % 35),
        tension: 8 + (seed % 18),
        sanctions: false,
        label: feature.properties._name,
        lastAction: 'Profile opened',
      };
    }
    return govState.foreignCountries[iso];
  }

  function buildAllianceChips(iso) {
    const alliances = ALLIANCE_DATA[iso] || [];
    if (!alliances.length) return '';
    const chipClass = (a) => {
      if (a === 'NATO') return 'foreign-alliance-chip--nato';
      if (a === 'EU') return 'foreign-alliance-chip--eu';
      if (a === 'G7' || a === 'G20') return 'foreign-alliance-chip--g7';
      if (a === 'BRICS' || a === 'SCO' || a === 'CSTO') return 'foreign-alliance-chip--brics';
      if (a === 'P5') return 'foreign-alliance-chip--p5';
      return '';
    };
    return `<div class="foreign-alliance-chips">${alliances.map(a => `<span class="foreign-alliance-chip ${chipClass(a)}">${escapeHtml(a)}</span>`).join('')}</div>`;
  }

  function getCountryRows(feature, record) {
    const props = feature.properties || {};
    const tone = statusTone(record);
    const iso = props._iso;
    const capital = props.CAPITAL || props.ADMIN_CAP || props.capital || '';
    const population = props.POP_EST || props.pop_est;
    const gdp = props.GDP_MD || props.gdp_md;
    const region = [props._continent, props._subregion].filter(Boolean).join(' / ');
    const govType = GOVERNMENT_DATA[iso] || '';
    const rows = [
      ['Country', props._name],
      ['ISO Code', props._iso],
      ['Region', region || 'Unknown'],
      ['Status', tone.label],
      ['Relations', `${Math.round(record?.rel || 0)}/100`],
      ['Trade Exposure', `${Math.round(record?.trade || 0)}/100`],
      ['Tension', `${Math.round(record?.tension || 0)}/100`],
    ];
    if (capital) rows.splice(3, 0, ['Capital', capital]);
    if (govType) rows.splice(3, 0, ['Government', govType]);
    if (population) rows.push(['Population', numberLabel(population)]);
    if (gdp) rows.push(['GDP (nominal)', `$${numberLabel(Number(gdp) * 1000000)}`]);
    if (record?.sanctions) rows.push(['Sanctions', 'Active']);
    return rows;
  }

  function buildCountryInfobox(feature, record) {
    const props = feature.properties || {};
    const tone = statusTone(record);
    const iso = props._iso;
    const flag = getFlagEmojiFromIso2(props._iso2);
    const rows = getCountryRows(feature, record)
      .map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
      .join('');
    const isMajorPower = !!MAJOR_POWER_MAP[iso];
    const allianceChips = buildAllianceChips(iso);
    const note = record?._isHostCountry
      ? 'Germany is the seat of government. External interactions are disabled for the host state.'
      : isMajorPower
        ? 'This country is wired into the live major-power simulation, so actions here update the main diplomatic model.'
        : 'Secondary-country interactions are tracked locally in the foreign affairs desk and persist in the save state.';

    const allianceSection = allianceChips ? `
      <div class="gov-infobox-section">
        <div class="gov-infobox-section-title">Memberships &amp; Alliances</div>
        ${allianceChips}
      </div>` : '';

    return `
      <div class="gov-infobox">
        <div class="gov-infobox-header">
          <div class="gov-infobox-kicker">Country Profile</div>
          <div class="gov-infobox-title">${escapeHtml(props._name)}</div>
          <div class="gov-infobox-subtitle">${escapeHtml(props.FORMAL_EN || props.NAME_LONG || props.SOVEREIGNT || props._continent || 'Global partner')}</div>
        </div>
        <div class="gov-infobox-image">
          <div class="gov-infobox-symbol">
            <div class="gov-infobox-flag" style="display:flex;align-items:center;justify-content:center;font-size:44px;">${flag}</div>
            <div class="gov-infobox-symbol-label">Flag</div>
          </div>
          <div class="gov-infobox-symbol">
            <div class="gov-infobox-arms" style="display:flex;align-items:center;justify-content:center;background:${tone.color};color:#fff;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;">${escapeHtml(tone.label)}</div>
            <div class="gov-infobox-symbol-label">Status</div>
          </div>
        </div>
        <table class="gov-infobox-table">${rows}</table>
        ${allianceSection}
        <div class="gov-infobox-section">
          <div class="gov-infobox-section-title">Foreign Desk Note</div>
          <div class="gov-infobox-note foreign-infobox-note">${escapeHtml(note)}</div>
        </div>
      </div>
    `;
  }

  function buildActionButton(iso, id, title, body, disabled) {
    return `<button class="foreign-action-btn" ${disabled ? 'disabled' : ''} onclick="window.runForeignCountryAction('${escapeHtml(iso)}','${escapeHtml(id)}')"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></button>`;
  }

  function updateCountryPanel() {
    const panel = document.getElementById('foreign-country-panel');
    if (!panel) return;
    const feature = state.featureByIso.get(getSelectedIso());
    if (!feature) {
      panel.innerHTML = '<div class="gov-infobox-note">Select a country on the globe to open its profile.</div>';
      return;
    }
    const record = ensureCountryRecord(feature);
    const iso = feature.properties._iso;
    const disabled = !!record?._isHostCountry;
    const actionsHtml = [
      buildActionButton(iso, 'delegation', 'Send Delegation', 'Warm relations, lower friction, and log a formal diplomatic visit.', disabled),
      buildActionButton(iso, 'trade', 'Open Trade Talks', 'Push market access and commercial links, with some strategic exposure risk.', disabled),
      buildActionButton(iso, 'statement', 'Joint Statement', 'Issue a carefully worded public line to stabilize the relationship.', disabled),
      buildActionButton(iso, 'pressure', 'Apply Pressure', 'Raise costs and signal resolve at the expense of goodwill.', disabled),
    ].join('');

    const latest = record?.lastAction ? `<div class="gov-infobox-note" style="margin-top:10px;">Latest desk action: <strong>${escapeHtml(record.lastAction)}</strong> · ${escapeHtml(getCurrentQuarterLabel())}</div>` : '';

    panel.innerHTML = `
      <div class="foreign-country-meta">
        ${buildCountryInfobox(feature, record)}
        <div class="foreign-country-actions">
          <div class="foreign-country-actions-title">Interaction Panel</div>
          <div class="foreign-action-grid">${actionsHtml}</div>
          ${latest}
        </div>
      </div>
    `;
  }

  function drawFeaturePath(ctx, coordinates, width, height, offsetDegrees) {
    if (!Array.isArray(coordinates) || !coordinates.length) return;
    coordinates.forEach((point, index) => {
      const lon = Number(point[0]) + offsetDegrees;
      const lat = Number(point[1]);
      const x = ((lon + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
  }

  function traceGeometry(ctx, geometry, width, height) {
    if (!geometry) return;
    const polygons = geometry.type === 'Polygon'
      ? [geometry.coordinates]
      : geometry.type === 'MultiPolygon'
        ? geometry.coordinates
        : [];

    polygons.forEach(polygon => {
      [-360, 0, 360].forEach(offset => {
        ctx.beginPath();
        polygon.forEach(ring => {
          drawFeaturePath(ctx, ring, width, height, offset);
          ctx.closePath();
        });
        ctx.fill('evenodd');
        ctx.stroke();
      });
    });
  }

  function buildPoliticalMap(features, selectedIso) {
    const width = 4096;
    const height = 2048;

    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = width;
    textureCanvas.height = height;
    const textureCtx = textureCanvas.getContext('2d');

    const pickCanvas = document.createElement('canvas');
    pickCanvas.width = width;
    pickCanvas.height = height;
    const pickCtx = pickCanvas.getContext('2d', { willReadFrequently: true });

    textureCtx.fillStyle = '#20354f';
    textureCtx.fillRect(0, 0, width, height);
    const oceanGlow = textureCtx.createRadialGradient(width * 0.35, height * 0.4, width * 0.08, width * 0.45, height * 0.45, width * 0.72);
    oceanGlow.addColorStop(0, 'rgba(84,132,196,0.34)');
    oceanGlow.addColorStop(1, 'rgba(20,36,60,0)');
    textureCtx.fillStyle = oceanGlow;
    textureCtx.fillRect(0, 0, width, height);

    pickCtx.clearRect(0, 0, width, height);
    state.countryById = new Map();

    features.forEach((feature, index) => {
      const iso = feature.properties._iso;
      const pickId = index + 1;
      const r = pickId & 255;
      const g = (pickId >> 8) & 255;
      const b = (pickId >> 16) & 255;
      state.countryById.set(pickId, feature);

      textureCtx.fillStyle = iso === selectedIso ? '#d2a04a' : getCountryFill(iso);
      textureCtx.strokeStyle = getCountryStroke(iso, selectedIso);
      textureCtx.lineWidth = iso === selectedIso ? 4 : 1.15;
      textureCtx.globalAlpha = iso === selectedIso ? 0.98 : 0.94;
      traceGeometry(textureCtx, feature.geometry, width, height);

      pickCtx.fillStyle = `rgb(${r},${g},${b})`;
      pickCtx.strokeStyle = `rgb(${r},${g},${b})`;
      pickCtx.lineWidth = 6;
      pickCtx.globalAlpha = 1;
      traceGeometry(pickCtx, feature.geometry, width, height);
    });

    textureCtx.globalAlpha = 1;
    textureCtx.strokeStyle = 'rgba(255,255,255,0.18)';
    textureCtx.lineWidth = 1;
    for (let lon = -150; lon <= 180; lon += 30) {
      textureCtx.beginPath();
      textureCtx.moveTo(((lon + 180) / 360) * width, 0);
      textureCtx.lineTo(((lon + 180) / 360) * width, height);
      textureCtx.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      textureCtx.beginPath();
      textureCtx.moveTo(0, ((90 - lat) / 180) * height);
      textureCtx.lineTo(width, ((90 - lat) / 180) * height);
      textureCtx.stroke();
    }

    return { textureCanvas, pickCanvas, pickCtx };
  }

  function cleanupGlobe() {
    if (typeof state.cleanup === 'function') {
      state.cleanup();
      state.cleanup = null;
    }
    state.texture = null;
    state.refreshTexture = null;
  }

  function mountForeignGlobe() {
    const mount = document.getElementById('foreign-globe-stage');
    const status = document.getElementById('foreign-globe-status');
    if (!mount) return;
    cleanupGlobe();
    const token = ++state.mountToken;
    mount.innerHTML = '';
    if (status) status.textContent = 'Loading diplomatic globe';

    Promise.all([ensureThree(), loadGeoJson()])
      .then(([THREE, geo]) => {
        if (!mount.isConnected || token !== state.mountToken) return;

        const width = Math.max(320, Math.round(mount.clientWidth || 760));
        const height = Math.max(360, Math.round(mount.clientHeight || 520));

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
        renderer.setSize(width, height);
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
        camera.position.set(0, 0.35, 13.5);

        scene.add(new THREE.AmbientLight(0xf0f4ff, 1.05));
        const sun = new THREE.DirectionalLight(0xffffff, 1.25);
        sun.position.set(7, 5, 9);
        scene.add(sun);
        const rim = new THREE.DirectionalLight(0x7aa7ff, 0.5);
        rim.position.set(-8, -3, -7);
        scene.add(rim);

        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(5, 128, 128),
          new THREE.MeshPhongMaterial({
            shininess: 10,
            specular: new THREE.Color(0x23374f),
          })
        );

        const atmosphere = new THREE.Mesh(
          new THREE.SphereGeometry(5.24, 64, 64),
          new THREE.MeshBasicMaterial({
            color: 0x88b5ff,
            transparent: true,
            opacity: 0.12,
            side: THREE.BackSide,
          })
        );

        const globeGroup = new THREE.Group();
        globeGroup.add(sphere);
        globeGroup.add(atmosphere);
        scene.add(globeGroup);

        let currentPickCtx = null;
        let currentPickCanvas = null;
        const refreshTexture = () => {
          const selectedIso = getSelectedIso();
          const map = buildPoliticalMap(geo.features, selectedIso);
          currentPickCanvas = map.pickCanvas;
          currentPickCtx = map.pickCtx;
          if (!state.texture) {
            state.texture = new THREE.CanvasTexture(map.textureCanvas);
            if ('encoding' in state.texture && THREE.sRGBEncoding) {
              state.texture.encoding = THREE.sRGBEncoding;
            }
          } else {
            state.texture.image = map.textureCanvas;
            state.texture.needsUpdate = true;
          }
          sphere.material.map = state.texture;
          sphere.material.needsUpdate = true;
        };
        refreshTexture();
        state.refreshTexture = refreshTexture;

        const stars = new THREE.Points(
          new THREE.BufferGeometry(),
          new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.42 })
        );
        const starPositions = [];
        for (let i = 0; i < 900; i += 1) {
          const radius = 26 + Math.random() * 20;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          starPositions.push(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
          );
        }
        stars.geometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
        scene.add(stars);

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        let dragging = false;
        let moved = false;
        let lastX = 0;
        let lastY = 0;

        function updatePointer(event) {
          const rect = renderer.domElement.getBoundingClientRect();
          pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        }

        function pickCountry(event) {
          if (!currentPickCtx || !currentPickCanvas) return null;
          updatePointer(event);
          raycaster.setFromCamera(pointer, camera);
          const hit = raycaster.intersectObject(sphere)[0];
          if (!hit?.uv) return null;
          const px = Math.max(0, Math.min(currentPickCanvas.width - 1, Math.floor(hit.uv.x * currentPickCanvas.width)));
          const py = Math.max(0, Math.min(currentPickCanvas.height - 1, Math.floor((1 - hit.uv.y) * currentPickCanvas.height)));
          const rgba = currentPickCtx.getImageData(px, py, 1, 1).data;
          const id = rgba[0] + (rgba[1] << 8) + (rgba[2] << 16);
          return state.countryById.get(id) || null;
        }

        function onPointerDown(event) {
          dragging = true;
          moved = false;
          lastX = event.clientX;
          lastY = event.clientY;
        }

        function onPointerMove(event) {
          if (!dragging) return;
          const dx = event.clientX - lastX;
          const dy = event.clientY - lastY;
          if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true;
          globeGroup.rotation.y += dx * 0.006;
          globeGroup.rotation.x = Math.max(-0.7, Math.min(0.7, globeGroup.rotation.x + dy * 0.004));
          lastX = event.clientX;
          lastY = event.clientY;
        }

        function onPointerUp(event) {
          if (!dragging) return;
          dragging = false;
          if (moved) return;
          const feature = pickCountry(event);
          if (!feature) return;
          setSelectedIso(feature.properties._iso);
          updateCountryPanel();
          const selectedLabel = document.getElementById('foreign-selected-country-label');
          if (selectedLabel) selectedLabel.textContent = feature.properties._name;
          refreshTexture();
        }

        function onResize() {
          if (!mount.isConnected) return;
          const nextWidth = Math.max(320, Math.round(mount.clientWidth || 760));
          const nextHeight = Math.max(360, Math.round(mount.clientHeight || 520));
          renderer.setSize(nextWidth, nextHeight);
          camera.aspect = nextWidth / nextHeight;
          camera.updateProjectionMatrix();
        }

        renderer.domElement.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('resize', onResize);

        let frameId = 0;
        const animate = () => {
          frameId = window.requestAnimationFrame(animate);
          if (!dragging) globeGroup.rotation.y += 0.0018;
          renderer.render(scene, camera);
        };
        animate();

        updateCountryPanel();
        const selectedLabel = document.getElementById('foreign-selected-country-label');
        const selectedFeature = state.featureByIso.get(getSelectedIso());
        if (selectedLabel && selectedFeature) selectedLabel.textContent = selectedFeature.properties._name;
        if (status) status.textContent = 'Political globe ready';

        state.cleanup = () => {
          window.cancelAnimationFrame(frameId);
          renderer.domElement.removeEventListener('pointerdown', onPointerDown);
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
          window.removeEventListener('resize', onResize);
          renderer.dispose();
          sphere.geometry.dispose();
          sphere.material.dispose();
          atmosphere.geometry.dispose();
          atmosphere.material.dispose();
          stars.geometry.dispose();
          stars.material.dispose();
          mount.innerHTML = '';
        };
      })
      .catch(() => {
        if (!mount.isConnected || token !== state.mountToken) return;
        mount.innerHTML = `
          <div style="height:100%;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;color:rgba(255,255,255,0.78);font-family:'Space Mono',monospace;font-size:11px;line-height:1.8;">
            3D globe unavailable right now.<br>
            The panel still supports country profiles and interactions once map data loads again.
          </div>
        `;
        if (status) status.textContent = 'Globe offline';
      });
  }

  function updateMajorPowerCards() {
    const mount = document.getElementById('foreign-major-grid');
    const govState = window.govState || {};
    const foreign = govState.foreign || {};
    if (!mount) return;
    const ordered = ['usa', 'eu', 'russia', 'china'];
    mount.innerHTML = ordered.map(key => {
      const record = foreign[key];
      if (!record) return '';
      const tone = statusTone(record);
      const analyticalNote = MAJOR_POWER_NOTES[key] || '';
      return `
        <div>
          <div class="foreign-major-card-head">
            <div class="foreign-major-card-title">${escapeHtml(record.flag || '🌐')} ${escapeHtml(record.label || key)}</div>
            <div class="foreign-major-card-status" style="color:${tone.color};">${escapeHtml(tone.label)}</div>
          </div>
          <div class="foreign-meter">
            ${buildMeterRow('Relations', record.rel, relationColor(record.rel))}
            ${buildMeterRow('Tension', record.tension, tensionColor(record.tension))}
            ${buildMeterRow('Trade', record.trade, '#8b6a38')}
          </div>
          ${record.sanctions ? '<div class="foreign-stat-sub" style="margin-top:10px;color:#9a352a;">Sanctions package active.</div>' : '<div class="foreign-stat-sub" style="margin-top:10px;">No active sanctions package on this track.</div>'}
          ${analyticalNote ? `<div class="foreign-analytical-note">${escapeHtml(analyticalNote)}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  function updateForeignLog() {
    const mount = document.getElementById('foreign-log-items');
    if (!mount) return;
    const items = (window.govState?._resolvedEvents || [])
      .filter(entry => entry?.cat === 'foreign')
      .slice(-6)
      .reverse();
    mount.innerHTML = items.length
      ? items.map(item => `
          <div class="foreign-log-item">
            <div class="foreign-log-item-icon">${escapeHtml(item.icon || '🌍')}</div>
            <div>
              <div class="foreign-log-item-title">${escapeHtml(item.title || 'Foreign affairs event')}</div>
              <div class="foreign-log-item-sub">${escapeHtml(`Q${item.resolvedQuarter || item.quarter || '?'} · ${item.resolvedLabel || 'Resolved diplomatic event'}`)}</div>
            </div>
          </div>
        `).join('')
      : '<div class="gov-infobox-note">No foreign affairs events have been resolved yet. Advance the quarter to generate diplomatic situations.</div>';
  }

  function buildOverviewStats() {
    const govState = window.govState || {};
    const foreign = govState.foreign || {};
    const powers = Object.values(foreign);
    const avgRel = powers.length ? powers.reduce((sum, row) => sum + (row.rel || 0), 0) / powers.length : 0;
    const highTension = powers.filter(row => (row.tension || 0) > 60).length;
    const sanctions = powers.filter(row => !!row.sanctions).length;
    return `
      <div>
        <div class="foreign-stat-kicker">Average Alignment</div>
        <div class="foreign-stat-value">${Math.round(avgRel)}%</div>
        <div class="foreign-stat-sub">Across the four live strategic relationships tracked by the government desk.</div>
      </div>
      <div>
        <div class="foreign-stat-kicker">High-Tension Fronts</div>
        <div class="foreign-stat-value">${highTension}</div>
        <div class="foreign-stat-sub">Relationships above 60 tension are at elevated escalation risk.</div>
      </div>
      <div>
        <div class="foreign-stat-kicker">Sanctions Tracks</div>
        <div class="foreign-stat-value">${sanctions}</div>
        <div class="foreign-stat-sub">Major-power relationships currently under an active sanctions regime.</div>
      </div>
    `;
  }

  function buildSituationReport() {
    const govState = window.govState || {};
    const foreign = govState.foreign || {};
    const quarter = getCurrentQuarterLabel();
    const powers = Object.values(foreign);
    const avgRel = powers.length ? Math.round(powers.reduce((s, r) => s + (r.rel || 0), 0) / powers.length) : 50;
    const highTension = powers.filter(r => (r.tension || 0) > 60).length;
    const sanctionCount = powers.filter(r => r.sanctions).length;
    const tone = avgRel > 62 ? 'broadly constructive' : avgRel > 44 ? 'mixed' : avgRel > 28 ? 'strained' : 'adversarial';
    const tensionLine = highTension > 1
      ? `with ${highTension} of Germany's tracked strategic relationships running at elevated tension`
      : highTension === 1
        ? 'with one major-power track at elevated tension'
        : 'with no immediate escalation alerts on the major-power matrix';
    const sanctionLine = sanctionCount > 0
      ? ` Active sanctions regimes are in place against ${sanctionCount} actor${sanctionCount > 1 ? 's' : ''}.`
      : '';

    return `
      <div class="foreign-situation-card">
        <div class="foreign-situation-kicker">Situation Report · ${escapeHtml(quarter)}</div>
        <div class="foreign-situation-lead">Germany's diplomatic posture is ${escapeHtml(tone)}, ${escapeHtml(tensionLine)}.${escapeHtml(sanctionLine)}</div>
        <div class="foreign-situation-body">
          <p>Berlin's foreign policy operates within three overlapping frameworks: the transatlantic security architecture anchored by NATO and the U.S. nuclear umbrella; the European integration project managed through EU institutions and the Franco-German axis; and a web of bilateral economic relationships with major non-Western powers, most notably China. Managing tensions between these frameworks — and between Germany's export interests and its stated values agenda — defines the strategic challenge of German statecraft.</p>
          <p>The war in Ukraine has recalibrated German strategic culture more rapidly than any event since reunification. The <em>Zeitenwende</em> has accelerated a long-delayed increase in defence spending and driven a rapid dismantling of Russian energy dependencies. The political and economic costs of this adjustment are still being absorbed domestically, while the question of a durable settlement in Ukraine remains unresolved.</p>
          <p>Germany's China strategy has shifted away from the <em>Wandel durch Handel</em> engagement paradigm toward a formal de-risking posture. Reducing supply-chain vulnerabilities in critical sectors — semiconductors, critical minerals, pharmaceuticals — and screening inbound investment are now established policy priorities. Implementation remains contested within coalition politics, and the economic exposure of German industry to Chinese demand makes a clean break both costly and unlikely in the near term.</p>
        </div>
      </div>
    `;
  }

  function buildGeopoliticalTheatre() {
    const cards = GEOPOLITICAL_THEATRES.map(t => `
      <div class="foreign-theatre-card">
        <div class="foreign-theatre-head">
          <div class="foreign-theatre-name">${escapeHtml(t.name)}</div>
          <div class="foreign-theatre-risk foreign-theatre-risk--${escapeHtml(t.risk)}">${escapeHtml(t.riskLabel)}</div>
        </div>
        <div class="foreign-stat-kicker" style="margin-bottom:6px;">${escapeHtml(t.region)}</div>
        <div class="foreign-theatre-sub">${escapeHtml(t.body)}</div>
      </div>
    `).join('');
    return `
      <div>
        <div class="foreign-theatre-section-head">
          <div class="foreign-theatre-section-kicker">Geopolitical Theatres</div>
          <div class="foreign-theatre-section-title">Regional Risk Assessment</div>
          <div class="foreign-theatre-section-deck">Active flashpoints and structural tensions bearing on Germany's strategic interests and diplomatic obligations.</div>
        </div>
        <div class="foreign-theatre-grid">${cards}</div>
      </div>
    `;
  }

  function renderEnhancedForeignPanel(main) {
    ensureStyles();
    const govState = window.govState || {};
    const foreign = govState.foreign;
    if (!foreign) {
      if (typeof state.originalRender === 'function') state.originalRender(main);
      return;
    }
    if (!govState._foreignSelectedCountryIso) govState._foreignSelectedCountryIso = 'USA';

    main.innerHTML = `
      <div class="foreign-affairs-shell">
        <div class="gov-section-head gov-section-head--first">
          <span class="gov-section-head-kicker">Foreign Affairs</span>
          <span class="gov-section-head-title">Auswärtiges Amt — Global Desk</span>
          <span class="gov-section-head-deck">Germany's diplomatic posture across all bilateral relationships. Click any country on the globe to open a full country profile with government system, alliance memberships, and a direct interaction panel. Major powers are wired to the live diplomatic simulation.</span>
        </div>

        ${buildSituationReport()}

        <div class="foreign-globe-hero">
          <div class="foreign-globe-card">
            <div class="foreign-globe-head">
              <div>
                <div class="foreign-globe-title">Political Globe</div>
                <div class="foreign-globe-sub">Drag to rotate. Click any country to open its diplomatic profile — government system, alliance memberships, bilateral metrics, and interaction options.</div>
              </div>
              <div class="foreign-globe-status" id="foreign-globe-status">Preparing globe</div>
            </div>
            <div class="foreign-globe-stage" id="foreign-globe-stage">
              <div style="height:100%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.76);font-family:'Space Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;">Loading world map</div>
              <div class="foreign-globe-hud">
                <div class="foreign-globe-chip"><strong>Controls</strong>Drag to rotate<br>Click to inspect</div>
                <div class="foreign-globe-chip"><strong>Selected</strong><span id="foreign-selected-country-label">${escapeHtml(getSelectedIso())}</span></div>
              </div>
            </div>
          </div>

          <div class="foreign-country-card">
            <div class="foreign-country-panel" id="foreign-country-panel"></div>
          </div>
        </div>

        <div class="foreign-brief-grid">${buildOverviewStats()}</div>

        <div class="gov-section-head">
          <span class="gov-section-head-kicker">Major Power Relations</span>
          <span class="gov-section-head-title">Strategic Partnerships</span>
          <span class="gov-section-head-deck">Live diplomatic metrics for Germany's four primary strategic relationships, updated in real time as you take foreign policy actions.</span>
        </div>

        <div class="foreign-major-grid" id="foreign-major-grid"></div>

        ${buildGeopoliticalTheatre()}

        <div class="foreign-log-card">
          <h3>Diplomatic Event Log</h3>
          <div id="foreign-log-items"></div>
        </div>
      </div>
    `;

    updateCountryPanel();
    updateMajorPowerCards();
    updateForeignLog();
    const selectedLabel = document.getElementById('foreign-selected-country-label');
    const feature = state.featureByIso.get(getSelectedIso());
    if (selectedLabel && feature) selectedLabel.textContent = feature.properties._name;
    mountForeignGlobe();
  }

  window.renderEnhancedForeignPanelStandalone = renderEnhancedForeignPanel;

  function forceRenderForeignPanelSoon() {
    window.setTimeout(() => {
      const main = document.getElementById('gov-main-panel');
      if (main && (window.govState?._activeGovPanel === 'foreign' || window.govState?._govCategory === 'foreign')) {
        renderEnhancedForeignPanel(main);
      }
    }, 0);
  }

  function applyActionToMajorPower(record, actionId) {
    if (!record) return { title: 'No action', body: 'No diplomatic target was found for this action.', tone: 'neutral' };
    if (actionId === 'delegation') {
      record.rel = Math.min(100, (record.rel || 0) + 7);
      record.tension = Math.max(0, (record.tension || 0) - 5);
      record.lastAction = 'Delegation received in Berlin';
      return { title: 'Delegation received', body: `${record.label} leaves the round with warmer political chemistry and lower tension.`, tone: 'good' };
    }
    if (actionId === 'trade') {
      record.rel = Math.min(100, (record.rel || 0) + 4);
      record.trade = Math.min(100, (record.trade || 0) + 8);
      record.tension = Math.min(100, (record.tension || 0) + 2);
      record.lastAction = 'Trade talks opened';
      return { title: 'Trade channel opened', body: `${record.label} is now in an active commercial dialogue with Berlin.`, tone: 'good' };
    }
    if (actionId === 'statement') {
      record.rel = Math.min(100, (record.rel || 0) + 2);
      record.tension = Math.max(0, (record.tension || 0) - 3);
      record.lastAction = 'Joint statement issued';
      return { title: 'Joint statement issued', body: `${record.label} signs onto a carefully worded line with Germany.`, tone: 'neutral' };
    }
    if (actionId === 'pressure') {
      record.rel = Math.max(0, (record.rel || 0) - 8);
      record.trade = Math.max(0, (record.trade || 0) - 4);
      record.tension = Math.min(100, (record.tension || 0) + 10);
      record.lastAction = 'Pressure campaign launched';
      if (typeof window.checkForeignEconShock === 'function') {
        if (record.label === 'Russia') window.checkForeignEconShock('russia');
        if (record.label === 'China') window.checkForeignEconShock('china');
      }
      return { title: 'Pressure campaign launched', body: `${record.label} reacts badly as Berlin raises the political temperature.`, tone: 'bad' };
    }
    return { title: 'No action', body: 'That interaction is not available yet.', tone: 'neutral' };
  }

  window.runForeignCountryAction = function runForeignCountryAction(iso, actionId) {
    const feature = state.featureByIso.get(String(iso || '').toUpperCase());
    if (!feature) return;
    const record = ensureCountryRecord(feature);
    if (!record || record._isHostCountry) return;

    let outcome;
    if (MAJOR_POWER_MAP[feature.properties._iso]) {
      outcome = applyActionToMajorPower(record, actionId);
    } else {
      if (actionId === 'delegation') {
        record.rel = Math.min(100, (record.rel || 0) + 6);
        record.tension = Math.max(0, (record.tension || 0) - 4);
        record.lastAction = 'Delegation sent';
        outcome = { title: 'Delegation sent', body: `${feature.properties._name} logs a formal visit from Berlin.`, tone: 'good' };
      } else if (actionId === 'trade') {
        record.rel = Math.min(100, (record.rel || 0) + 3);
        record.trade = Math.min(100, (record.trade || 0) + 7);
        record.tension = Math.min(100, (record.tension || 0) + 2);
        record.lastAction = 'Trade talks opened';
        outcome = { title: 'Trade talks opened', body: `${feature.properties._name} enters a structured market-access discussion.`, tone: 'good' };
      } else if (actionId === 'statement') {
        record.rel = Math.min(100, (record.rel || 0) + 2);
        record.tension = Math.max(0, (record.tension || 0) - 2);
        record.lastAction = 'Joint statement issued';
        outcome = { title: 'Joint statement issued', body: `${feature.properties._name} signs onto a managed public message with Berlin.`, tone: 'neutral' };
      } else if (actionId === 'pressure') {
        record.rel = Math.max(0, (record.rel || 0) - 7);
        record.trade = Math.max(0, (record.trade || 0) - 4);
        record.tension = Math.min(100, (record.tension || 0) + 9);
        record.lastAction = 'Pressure campaign launched';
        outcome = { title: 'Pressure campaign launched', body: `${feature.properties._name} reads the move as escalatory.`, tone: 'bad' };
      }
    }

    setSelectedIso(feature.properties._iso);
    updateCountryPanel();
    updateMajorPowerCards();
    updateForeignLog();
    if (typeof state.refreshTexture === 'function') state.refreshTexture();
    const selectedLabel = document.getElementById('foreign-selected-country-label');
    if (selectedLabel) selectedLabel.textContent = feature.properties._name;

    if (typeof window.showNotification === 'function' && outcome) {
      window.showNotification(
        `🌍 ${String(outcome.title || 'Foreign action').toUpperCase()}`,
        outcome.body || '',
        outcome.tone || 'neutral'
      );
    }
  };

  function tryPatch() {
    if (state.patchApplied || typeof window.renderForeignPanel !== 'function') return false;
    state.originalRender = window.renderForeignPanel;
    window.renderForeignPanel = renderEnhancedForeignPanel;

    if (typeof window.showGovPanel === 'function' && !state.originalShowGovPanel) {
      state.originalShowGovPanel = window.showGovPanel;
      window.showGovPanel = function patchedShowGovPanel(panel) {
        const result = state.originalShowGovPanel.apply(this, arguments);
        if ((panel || window.govState?._activeGovPanel) === 'foreign') {
          forceRenderForeignPanelSoon();
        }
        return result;
      };
    }

    if (typeof window.setGovCategory === 'function' && !state.originalSetGovCategory) {
      state.originalSetGovCategory = window.setGovCategory;
      window.setGovCategory = function patchedSetGovCategory(category) {
        const result = state.originalSetGovCategory.apply(this, arguments);
        if ((category || '').toLowerCase() === 'foreign' || (category || '').toLowerCase() === 'defence') {
          forceRenderForeignPanelSoon();
        }
        return result;
      };
    }

    state.patchApplied = true;
    forceRenderForeignPanelSoon();
    return true;
  }

  if (!tryPatch()) {
    const timer = window.setInterval(() => {
      if (tryPatch()) window.clearInterval(timer);
    }, 80);
    window.addEventListener('load', () => {
      tryPatch();
      window.clearInterval(timer);
    }, { once: true });
  }
})();
