// Local Cyberdeck Clock System
function initSystemClock() {
  const clockElement = document.getElementById('hud-clock');
  if (!clockElement) return;

  setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds} SYS_LOC`;
  }, 1000);
}

// Dynamic System Loop
function initBootLogs() {
  const logElement = document.getElementById('dynamic-log');
  if (!logElement) return;

  const logs = [
    "> SCANNING SYSTEM MEMORY...",
    "> BYPASSING SECURITY PROTOCOLS...",
    "> LOCALHOST SECURE...",
    "> DECK RETRACKING COMPLETED...",
    "> OVERRIDING INTERFACE GRID..."
  ];
  let index = 0;

  setInterval(() => {
    logElement.textContent = logs[index];
    index = (index + 1) % logs.length;
  }, 3000);
}

// Add initialization triggers to DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
  initSystemClock();
  initBootLogs();
});

/* Operational History Panel Configuration */
.cell-experience {
  grid-column: span 2; /* Occupies the remaining 2 columns next to Tech Stack */
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Individual Database Entries */
.log-entry {
  border: 1px solid var(--grid-dim);
  padding: 1.25rem;
  background-color: rgba(3, 7, 8, 0.4);
  position: relative;
}

.log-entry:hover {
  border-color: var(--grid-line);
  background-color: rgba(0, 243, 255, 0.02);
}

/* Chronological Indicators */
.log-timestamp {
  font-size: 0.7rem;
  font-weight: 900;
  color: #000000;
  background-color: var(--text-main);
  padding: 0.2rem 0.6rem;
  display: inline-block;
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
}

.log-entry:hover .log-timestamp {
  background-color: var(--loud-yellow);
}

/* Metadata Text Arrays */
.log-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.log-role {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--text-main);
  letter-spacing: 1px;
}

.log-org {
  font-size: 0.8rem;
  font-weight: 900;
  color: var(--grid-line);
  letter-spacing: 1px;
}

.log-summary {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #aa8899;
}

.log-entry:hover .log-summary {
  color: var(--text-main);
}
