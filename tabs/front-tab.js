window.WAHLKAMPF_TABS = window.WAHLKAMPF_TABS || {};

window.WAHLKAMPF_TABS.front = String.raw`
      <div class="game-tab-view active" id="game-view-front">
      <div id="game-gov-host-front" class="game-governance-host" style="display:none;"></div>
      <div id="game-campaign-front-content">
      <div class="hero-grid">
        <div class="hero-story game-main">
          <div class="hero-story-shell">
            <aside class="hero-editorial-rail">
              <section class="news-brief news-brief-lead">
                <div class="news-brief-kicker">Front Page</div>
                <div class="news-brief-hed">German politicians are talking tough, but offering little</div>
                <div class="news-brief-dek">Read pressure, momentum, and governability directly from the national terrain instead of chasing detached cards.</div>
              </section>

              <div class="analysis-card" style="margin-top:16px;padding:0;">
                <div class="ac-label">Polling Graph</div>
                <div class="ac-hed" style="font-size:18px;">National polling trend</div>
                <div class="ac-dek">Average of weekly polling data.</div>
                <canvas id="game-poll-history-chart" height="220" style="width:100%;display:block;margin-top:8px;"></canvas>
              </div>

            </aside>

            <div class="hero-story-map">
              <div class="hero-img">
                <div id="leaflet-map"></div>
                <div class="map-overlay-scrim"></div>
                <div class="hero-img-overlay">
                  <div class="hero-region-tag">National Map</div>
                  <div class="hero-map-caption">Track pressure points, regional strengths, and coalition terrain.</div>
                </div>
                <div class="map-tooltip" id="tooltip"></div>
                <div class="map-overlay-legend" id="map-legend"></div>
                <div class="map-opacity-control" id="map-opacity-control">
                  <span class="opacity-label">Opacity</span>
                  <input type="range" id="opacity-slider" min="0.2" max="1.0" step="0.05" value="0.82"
                    oninput="setMapOpacity(this.value)" style="width:70px;cursor:pointer;">
                  <span class="opacity-val" id="opacity-val">82%</span>
                  <div style="width:1px;height:16px;background:var(--divider-strong);margin:0 4px;"></div>
                  <select id="map-mode-select" onchange="setMapMode(this.value)"
                    style="font-family:'Source Sans 3',sans-serif;font-size:10px;background:var(--panel);color:var(--text);
                         border:1px solid var(--border);padding:4px 6px;cursor:pointer;outline:none;">
                    <option value="winner">Winner</option>
                    <option value="UnionBloc">CDU/CSU %</option>
                    <option value="Union">CDU %</option>
                    <option value="CSU">CSU %</option>
                    <option value="SPD">SPD %</option>
                    <option value="AfD">AfD %</option>
                    <option value="Greens">Grune %</option>
                    <option value="Linke">Linke %</option>
                    <option value="BSW">BSW %</option>
                    <option value="FW">FW %</option>
                    <option value="SSW">SSW %</option>
                    <option value="FDP">FDP %</option>
                  </select>
                </div>
              </div>

              <div class="hero-body">
                <div class="hero-kicker">299 Wahlkreis · Live Feed</div>
                <div class="hero-hed">Campaign terrain, turnout risk, and vote movement at a glance</div>
                <div class="hero-dek">Use the electoral map as your front page. Read the headline, inspect the states, and shape the week's national story through message discipline, policy emphasis, and coalition signaling.</div>
                <div class="hero-meta">
                  <span>Direct Mandate Projection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="game-sidebar">
          <div class="sidebar-card">
            <div class="sc-tag crisis">Campaign Desk</div>
            <div class="sc-hed">Choose this week's front-page moves</div>
            <div class="sc-meta">Operations, demographics, message, and late-cycle posture.</div>
          </div>

          <div class="ai-action-log" id="ai-log" style="display:none;"></div>

          <div class="turn-area">
            <div class="turn-area-phase">Your Campaign Choices</div>
            <div class="turn-area-briefs" id="turn-area-briefs"></div>

            <div class="action-section">
              <div class="action-section-title">Campaign Event</div>
              <div class="action-cards" id="event-cards"></div>
            </div>

            <div class="action-section">
              <div class="action-section-title">Target Demographic</div>
              <div class="action-cards" id="demo-cards"></div>
            </div>

            <div class="action-section">
              <div class="action-section-title">Promote Policy</div>
              <div class="action-cards" id="policy-cards"></div>
            </div>

            <div class="turn-btn-row">
              <button class="turn-btn" id="turn-btn" onclick="executeTurn()">Advance Week</button>
              <button class="test-skip-btn" onclick="skipToElectionTest()">Skip To Election</button>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-grid">
        <div class="analysis-panel">
          <div class="analysis-card">
            <div class="ac-label">Seat Projection</div>
            <div class="ac-hed">Seat Projection</div>
            <div class="ac-dek">Based off latest polling.</div>
            <div class="seat-bar-section" style="padding:12px 0 0;border:none;background:transparent;box-shadow:none;">
              <div class="parliament-svg-wrap">
                <svg id="parliament-svg" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;"></svg>
              </div>
              <div class="majority-indicator" id="majority-indicator">Majority: 316 seats</div>
            </div>
          </div>

          <div class="analysis-card">
            <div class="ac-label">Polling Desk</div>
            <div class="ac-hed">Opinion polling</div>
            <div class="ac-dek">Average of Weekly Polling.</div>
            <div class="poll-board" style="padding:12px 0 0;border:none;background:transparent;box-shadow:none;">
              <div id="poll-board"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
`;