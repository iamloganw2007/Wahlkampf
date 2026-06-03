window.WAHLKAMPF_TABS = window.WAHLKAMPF_TABS || {};

window.WAHLKAMPF_TABS.polling = String.raw`
      <div class="game-tab-view" id="game-view-polling">
        <div class="polling-grid">
          <div class="analysis-panel">
            <div class="analysis-card polling-chart-card">
              <div class="ac-label">Polling Graph</div>
              <div class="ac-hed">National polling trend</div>
              <div class="ac-dek">Average of weekly polling data.</div>
              <canvas id="game-poll-history-chart" height="320"></canvas>
            </div>
          </div>

          <div class="events-panel">
            <div class="analysis-card">
              <div class="ac-label" id="polling-tab-side-label">Current Table</div>
              <div class="ac-hed" id="polling-tab-side-hed">Latest standings</div>
              <div class="ac-dek" id="polling-tab-side-dek">Average of weekly polling data.</div>
              <div class="poll-board" style="padding:12px 0 0;border:none;background:transparent;box-shadow:none;">
                <div id="poll-board-polling-tab"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
