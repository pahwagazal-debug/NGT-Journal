import { DigitalClock } from './digital-clock.js';
import { ThemeManager } from './theme.js';

class ClockApp {
  constructor() {
    this.theme = new ThemeManager();
    this.clock = null;
    this.init();
  }

  init() {
    this.theme.init();
    this.clock = new DigitalClock();
    this.render();
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="min-h-screen flex flex-col">
        ${this.renderHeader()}
        ${this.renderMainContent()}
      </div>
    `;
    this.attachEventListeners();
  }

  renderHeader() {
    return `
      <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-slate-700/50 py-4 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-3xl text-blue-400">schedule</span>
            <div>
              <h1 class="text-2xl sm:text-3xl font-bold text-white">Digital Clock</h1>
              <p class="text-xs sm:text-sm text-slate-400">Multi-Timezone World Time</p>
            </div>
          </div>
          <button id="theme-toggle" class="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors border border-slate-600/50">
            <span class="material-symbols-outlined">light_mode</span>
          </button>
        </div>
      </header>
    `;
  }

  renderMainContent() {
    return `
      <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <!-- Primary Clock Section -->
        <section class="mb-12">
          <div class="clock-card">
            <h2 class="text-lg text-slate-400 mb-4 text-center">Current Time</h2>
            <div class="digital-clock mb-6" id="primary-time">--:--:--</div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <select id="timezone-select" class="px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white font-medium">
                <option value="UTC">UTC (Coordinated Universal Time)</option>
                <option value="America/New_York">New York (EST/EDT)</option>
                <option value="America/Los_Angeles">Los Angeles (PST/PDT)</option>
                <option value="Europe/London">London (GMT/BST)</option>
                <option value="Europe/Paris">Paris (CET/CEST)</option>
                <option value="Asia/Dubai">Dubai (GST)</option>
                <option value="Asia/Kolkata">New Delhi (IST)</option>
                <option value="Asia/Bangkok">Bangkok (ICT)</option>
                <option value="Asia/Hong_Kong">Hong Kong (HKT)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
                <option value="Asia/Singapore">Singapore (SGT)</option>
                <option value="Australia/Sydney">Sydney (AEDT/AEST)</option>
                <option value="Pacific/Auckland">Auckland (NZDT/NZST)</option>
              </select>
              <button id="add-timezone-btn" class="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-2 transition-colors">
                <span class="material-symbols-outlined text-xl">add</span>
                <span class="hidden sm:inline">Add Timezone</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Clock Display Options -->
        <section class="mb-8">
          <div class="flex gap-4 flex-wrap justify-center">
            <button id="display-toggle" class="px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white font-medium hover:bg-slate-600 transition-colors flex items-center gap-2">
              <span class="material-symbols-outlined">category</span>
              <span class="hidden sm:inline">Toggle Analog/Digital</span>
            </button>
            <button id="24hour-toggle" class="px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white font-medium hover:bg-slate-600 transition-colors">
              24 Hour Format
            </button>
            <button id="clear-btn" class="px-4 py-2 rounded-lg bg-red-600/20 border border-red-600/50 text-red-400 font-medium hover:bg-red-600/30 transition-colors flex items-center gap-2">
              <span class="material-symbols-outlined">delete_sweep</span>
              <span class="hidden sm:inline">Clear All</span>
            </button>
          </div>
        </section>

        <!-- Timezone Clocks Grid -->
        <section>
          <h2 class="text-2xl font-bold mb-6 text-white">World Time Zones</h2>
          <div id="timezones-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Timezone clocks will be inserted here -->
          </div>
          <div id="empty-state" class="text-center py-16">
            <span class="material-symbols-outlined text-5xl text-slate-600 mb-4 block">public</span>
            <p class="text-slate-400 text-lg">No timezones added yet. Add one to get started!</p>
          </div>
        </section>
      </main>
    `;
  }

  attachEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      this.theme.toggle();
    });

    // Add timezone
    document.getElementById('add-timezone-btn').addEventListener('click', () => {
      const timezone = document.getElementById('timezone-select').value;
      this.clock.addTimezone(timezone);
      this.updateDisplay();
    });

    // Display toggle
    document.getElementById('display-toggle').addEventListener('click', () => {
      this.clock.toggleDisplay();
      this.updateDisplay();
    });

    // 24 hour toggle
    document.getElementById('24hour-toggle').addEventListener('click', () => {
      this.clock.toggle24Hour();
      this.updateDisplay();
    });

    // Clear button
    document.getElementById('clear-btn').addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all timezones?')) {
        this.clock.clearTimezones();
        this.updateDisplay();
      }
    });

    // Update display every second
    this.updateDisplay();
    setInterval(() => this.updateDisplay(), 1000);
  }

  updateDisplay() {
    // Update primary clock
    document.getElementById('primary-time').textContent = this.clock.getCurrentTime();

    // Update timezone clocks
    const container = document.getElementById('timezones-container');
    const emptyState = document.getElementById('empty-state');

    if (this.clock.timezones.length === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    container.innerHTML = this.clock.timezones.map(tz => this.renderTimezoneCard(tz)).join('');

    // Attach remove listeners
    document.querySelectorAll('.remove-timezone-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const timezone = e.currentTarget.dataset.timezone;
        this.clock.removeTimezone(timezone);
        this.updateDisplay();
      });
    });
  }

  renderTimezoneCard(timezone) {
    const time = this.clock.getTimeInTimezone(timezone);
    const timeString = this.clock.format24Hour
      ? time.toLocaleTimeString('en-US', { timeZone: timezone, hour12: false })
      : time.toLocaleTimeString('en-US', { timeZone: timezone });
    const dateString = time.toLocaleDateString('en-US', { timeZone: timezone });

    const timezoneInfo = this.getTimezoneInfo(timezone);

    if (this.clock.displayMode === 'analog') {
      return `
        <div class="clock-card animate-slide-in">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-lg font-bold text-white">${timezoneInfo.city}</h3>
              <p class="text-xs text-slate-400">${timezone}</p>
              <p class="text-xs text-slate-500 mt-1">${dateString}</p>
            </div>
            <button class="remove-timezone-btn p-1 rounded hover:bg-red-600/20 transition-colors" data-timezone="${timezone}" title="Remove timezone">
              <span class="material-symbols-outlined text-red-400">close</span>
            </button>
          </div>
          <div class="flex justify-center">
            <div class="analog-clock" id="analog-${timezone.replace('/', '-')}">
              <div class="hand hour-hand" id="hour-${timezone.replace('/', '-')}"></div>
              <div class="hand minute-hand" id="minute-${timezone.replace('/', '-')}"></div>
              <div class="hand second-hand" id="second-${timezone.replace('/', '-')}"></div>
            </div>
          </div>
          <p class="text-xs text-slate-400 text-center mt-4">UTC ${timezoneInfo.offset}</p>
        </div>
      `;
    } else {
      return `
        <div class="clock-card animate-slide-in">
          <div class="flex justify-between items-start mb-6">
            <div>
              <h3 class="text-lg font-bold text-white">${timezoneInfo.city}</h3>
              <p class="text-xs text-slate-400">${timezone}</p>
              <p class="text-xs text-slate-500 mt-1">${dateString}</p>
            </div>
            <button class="remove-timezone-btn p-1 rounded hover:bg-red-600/20 transition-colors" data-timezone="${timezone}" title="Remove timezone">
              <span class="material-symbols-outlined text-red-400">close</span>
            </button>
          </div>
          <div class="text-center">
            <div class="digital-clock text-4xl mb-2" id="digital-${timezone.replace('/', '-')}">${timeString}</div>
            <p class="text-xs text-slate-400">UTC ${timezoneInfo.offset}</p>
          </div>
        </div>
      `;
    }
  }

  getTimezoneInfo(timezone) {
    const info = {
      'UTC': { city: 'UTC', offset: '+00:00' },
      'America/New_York': { city: '🇺🇸 New York', offset: '-05:00 / -04:00' },
      'America/Los_Angeles': { city: '🇺🇸 Los Angeles', offset: '-08:00 / -07:00' },
      'Europe/London': { city: '🇬🇧 London', offset: '+00:00 / +01:00' },
      'Europe/Paris': { city: '🇫🇷 Paris', offset: '+01:00 / +02:00' },
      'Asia/Dubai': { city: '🇦🇪 Dubai', offset: '+04:00' },
      'Asia/Kolkata': { city: '🇮🇳 New Delhi', offset: '+05:30' },
      'Asia/Bangkok': { city: '🇹🇭 Bangkok', offset: '+07:00' },
      'Asia/Hong_Kong': { city: '🇭🇰 Hong Kong', offset: '+08:00' },
      'Asia/Tokyo': { city: '🇯🇵 Tokyo', offset: '+09:00' },
      'Asia/Singapore': { city: '🇸🇬 Singapore', offset: '+08:00' },
      'Australia/Sydney': { city: '🇦🇺 Sydney', offset: '+10:00 / +11:00' },
      'Pacific/Auckland': { city: '🇳🇿 Auckland', offset: '+12:00 / +13:00' }
    };
    return info[timezone] || { city: timezone, offset: '??:??' };
  }
}

// Initialize app
new ClockApp();